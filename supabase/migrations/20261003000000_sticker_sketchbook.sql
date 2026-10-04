-- Shared stickers only. No guest accounts, uploads, text, positions, or AI calls.
-- All writes go through narrow RPCs; private rows and guest passes are not exposed.
begin;
create schema if not exists sketchbook_private;
revoke all on schema sketchbook_private from public, anon, authenticated;

create table if not exists sketchbook_private.settings (
    singleton boolean primary key default true check (singleton),
    accepting boolean not null default true,
    next_position integer not null default 0 check (next_position between 0 and 6000)
);
insert into sketchbook_private.settings(singleton) values(true) on conflict do nothing;

create table if not exists sketchbook_private.guests (
    token_hash text primary key,
    created_at timestamptz not null default now(),
    last_post_at timestamptz,
    day date not null default (now() at time zone 'utc')::date,
    day_count integer not null default 0 check(day_count between 0 and 3)
);
create index if not exists sketchbook_guests_created on sketchbook_private.guests(created_at);
create table if not exists sketchbook_private.stickers (
    id uuid primary key default gen_random_uuid(),
    guest_hash text not null references sketchbook_private.guests(token_hash),
    request_id uuid not null,
    position integer not null unique check(position between 0 and 5999),
    sticker text not null check(sticker in ('sprout','daisy','mushroom','moth','snail','teacup','cloud','sun','planet','house','bird','cat')),
    ink text not null check(ink in ('fern','sea','ochre','rose','ink')),
    created_at timestamptz not null default now(),
    hidden boolean not null default false,
    unique(guest_hash, request_id)
);
create index if not exists sketchbook_stickers_created on sketchbook_private.stickers(created_at);
alter table sketchbook_private.settings enable row level security;
alter table sketchbook_private.guests enable row level security;
alter table sketchbook_private.stickers enable row level security;
revoke all on all tables in schema sketchbook_private from public, anon, authenticated;

-- Uses built-in SHA-256: no extension dependency and no plaintext guest tokens stored.
create or replace function public.sketchbook_guest() returns jsonb
language plpgsql security definer set search_path = '' as $$
declare v_token text; v_now timestamptz := clock_timestamp(); v_count integer;
begin
    perform pg_advisory_xact_lock(803102026);
    if not (select accepting from sketchbook_private.settings where singleton) then
        raise exception 'SKETCHBOOK_PAUSED';
    end if;
    if (select next_position from sketchbook_private.settings where singleton) >= 6000 then
        raise exception 'SKETCHBOOK_FULL';
    end if;
    select count(*) into v_count from sketchbook_private.guests;
    if v_count >= 12000 then raise exception 'SKETCHBOOK_BUSY'; end if;
    select count(*) into v_count from sketchbook_private.guests where created_at >= v_now - interval '1 hour';
    if v_count >= 60 then raise exception 'SKETCHBOOK_BUSY'; end if;
    select count(*) into v_count from sketchbook_private.guests where created_at >= date_trunc('day', v_now at time zone 'utc') at time zone 'utc';
    if v_count >= 200 then raise exception 'SKETCHBOOK_BUSY'; end if;
    v_token := replace(gen_random_uuid()::text, '-', '') || replace(gen_random_uuid()::text, '-', '');
    insert into sketchbook_private.guests(token_hash) values(encode(sha256(convert_to(v_token, 'UTF8')), 'hex'));
    return jsonb_build_object('token', v_token);
end $$;

create or replace function public.sketchbook_read(p_page integer default -1) returns jsonb
language plpgsql stable security definer set search_path = '' as $$
declare v_pages integer; v_page integer; v_total integer; v_stickers jsonb; v_open boolean;
begin
    select greatest(1, (next_position + 11) / 12), accepting and next_position < 6000
        into v_pages, v_open from sketchbook_private.settings where singleton;
    v_page := case when p_page is null or p_page < 0 or p_page >= v_pages then v_pages - 1 else p_page end;
    select count(*) into v_total from sketchbook_private.stickers where not hidden;
    select coalesce(jsonb_agg(jsonb_build_object('id', id, 'slot', mod(mod(position, 12) * 5 + (position / 12) * 7, 12), 'sticker', sticker, 'ink', ink) order by position), '[]'::jsonb)
        into v_stickers from sketchbook_private.stickers where not hidden and position / 12 = v_page;
    return jsonb_build_object('page', v_page, 'pages', v_pages, 'total', v_total, 'open', v_open, 'stickers', v_stickers);
end $$;

create or replace function public.sketchbook_place(p_token text, p_sticker text, p_ink text, p_request uuid) returns jsonb
language plpgsql security definer set search_path = '' as $$
declare v_hash text; v_guest sketchbook_private.guests%rowtype; v_existing sketchbook_private.stickers%rowtype;
    v_now timestamptz := clock_timestamp(); v_day date; v_position integer; v_id uuid; v_count integer; v_remaining integer; v_next timestamptz;
begin
    if p_token is null or p_token !~ '^[0-9a-f]{64}$' then raise exception 'SKETCHBOOK_GUEST'; end if;
    if p_request is null or p_sticker is null or p_ink is null or
       p_sticker not in ('sprout','daisy','mushroom','moth','snail','teacup','cloud','sun','planet','house','bird','cat') or
       p_ink not in ('fern','sea','ochre','rose','ink') then raise exception 'SKETCHBOOK_INVALID'; end if;
    v_hash := encode(sha256(convert_to(p_token, 'UTF8')), 'hex');
    perform pg_advisory_xact_lock(803102026);
    select * into v_guest from sketchbook_private.guests where token_hash = v_hash for update;
    if not found then raise exception 'SKETCHBOOK_GUEST'; end if;
    v_day := (v_now at time zone 'utc')::date;
    if v_guest.day <> v_day then v_guest.day := v_day; v_guest.day_count := 0; end if;
    -- A retry after a lost network response returns the same contribution, not another.
    select * into v_existing from sketchbook_private.stickers where guest_hash = v_hash and request_id = p_request;
    if found then
        return jsonb_build_object('id', v_existing.id, 'page', v_existing.position / 12,
            'next_at', case when v_guest.day_count >= 3 then (v_day + 1)::timestamp at time zone 'utc' else v_guest.last_post_at + interval '60 seconds' end,
            'remaining', 3 - v_guest.day_count);
    end if;
    if not (select accepting from sketchbook_private.settings where singleton) then raise exception 'SKETCHBOOK_PAUSED'; end if;
    if v_guest.day_count >= 3 then raise exception 'SKETCHBOOK_DAILY_LIMIT'; end if;
    if v_guest.last_post_at > v_now - interval '60 seconds' then raise exception 'SKETCHBOOK_COOLDOWN'; end if;
    select count(*) into v_count from sketchbook_private.stickers where created_at >= date_trunc('day', v_now at time zone 'utc') at time zone 'utc';
    if v_count >= 300 then raise exception 'SKETCHBOOK_BUSY'; end if;
    select next_position into v_position from sketchbook_private.settings where singleton for update;
    if v_position >= 6000 then raise exception 'SKETCHBOOK_FULL'; end if;
    -- Permuted slots prevent visitors choosing adjacency, rotation, size, or layering.
    insert into sketchbook_private.stickers(guest_hash, request_id, position, sticker, ink)
        values(v_hash, p_request, v_position, p_sticker, p_ink) returning id into v_id;
    update sketchbook_private.settings set next_position = next_position + 1 where singleton;
    update sketchbook_private.guests set day = v_day, day_count = v_guest.day_count + 1, last_post_at = v_now where token_hash = v_hash;
    v_remaining := 2 - v_guest.day_count;
    v_next := case when v_remaining = 0 then (v_day + 1)::timestamp at time zone 'utc' else v_now + interval '60 seconds' end;
    return jsonb_build_object('id', v_id, 'page', v_position / 12, 'remaining', v_remaining, 'next_at', v_next);
end $$;

create or replace function public.sketchbook_undo(p_token text, p_id uuid) returns boolean
language plpgsql security definer set search_path = '' as $$
declare v_hash text;
begin
    if p_token is null or p_token !~ '^[0-9a-f]{64}$' or p_id is null then raise exception 'SKETCHBOOK_GUEST'; end if;
    v_hash := encode(sha256(convert_to(p_token, 'UTF8')), 'hex');
    update sketchbook_private.stickers set hidden = true where id = p_id and guest_hash = v_hash;
    if not found then raise exception 'SKETCHBOOK_GUEST'; end if;
    return true;
end $$;

revoke all on function public.sketchbook_guest() from public;
revoke all on function public.sketchbook_read(integer) from public;
revoke all on function public.sketchbook_place(text,text,text,uuid) from public;
revoke all on function public.sketchbook_undo(text,uuid) from public;
grant execute on function public.sketchbook_guest(), public.sketchbook_read(integer), public.sketchbook_place(text,text,text,uuid), public.sketchbook_undo(text,uuid) to anon, authenticated;
notify pgrst, 'reload schema';
commit;
