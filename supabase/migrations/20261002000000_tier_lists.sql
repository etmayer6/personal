create table if not exists public.tier_lists (
    id uuid primary key default gen_random_uuid(),
    owner_id uuid not null references auth.users (id) on delete cascade,
    title text not null check (char_length(title) between 1 and 70),
    state jsonb not null check (jsonb_typeof(state) = 'object'),
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

create index if not exists tier_lists_created_at_idx
    on public.tier_lists (created_at desc);

alter table public.tier_lists enable row level security;

drop policy if exists "Anyone can read published tier lists" on public.tier_lists;
create policy "Anyone can read published tier lists"
    on public.tier_lists for select
    using (true);

drop policy if exists "Owners can publish tier lists" on public.tier_lists;
create policy "Owners can publish tier lists"
    on public.tier_lists for insert to authenticated
    with check ((select auth.uid()) = owner_id);

drop policy if exists "Owners can update tier lists" on public.tier_lists;
create policy "Owners can update tier lists"
    on public.tier_lists for update to authenticated
    using ((select auth.uid()) = owner_id)
    with check ((select auth.uid()) = owner_id);

drop policy if exists "Owners can delete tier lists" on public.tier_lists;
create policy "Owners can delete tier lists"
    on public.tier_lists for delete to authenticated
    using ((select auth.uid()) = owner_id);

grant select on public.tier_lists to anon, authenticated;
grant insert, update, delete on public.tier_lists to authenticated;
