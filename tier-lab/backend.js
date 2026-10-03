(function () {
    const config = window.TIER_LAB_SUPABASE_CONFIG || {};
    const baseUrl = typeof config.url === "string" ? config.url.replace(/\/$/, "") : "";
    const publishableKey = typeof config.publishableKey === "string" ? config.publishableKey.trim() : "";
    const SESSION_KEY = "ethan-tier-lab-supabase-session-v1";
    let session = readSession();

    function readSession() {
        try {
            return JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
        } catch {
            return null;
        }
    }

    function storeSession(value) {
        session = value;
        try {
            if (value) localStorage.setItem(SESSION_KEY, JSON.stringify(value));
            else localStorage.removeItem(SESSION_KEY);
        } catch {
            // The current page can still use the returned session for this visit.
        }
    }

    function configured() {
        return Boolean(baseUrl && publishableKey);
    }

    function authHeaders(accessToken = session?.access_token) {
        const headers = {
            apikey: publishableKey,
            "Content-Type": "application/json"
        };
        if (accessToken) headers.Authorization = `Bearer ${accessToken}`;
        return headers;
    }

    async function request(path, options = {}, retry = true) {
        if (!configured()) throw new Error("Online lists are not configured yet.");
        const endpoint = new URL(path, `${baseUrl}/`).toString();
        const response = await fetch(endpoint, {
            ...options,
            headers: { ...authHeaders(), ...options.headers }
        });

        if (response.status === 401 && retry && session?.refresh_token) {
            const refreshUrl = new URL("/auth/v1/token?grant_type=refresh_token", `${baseUrl}/`).toString();
            const refreshed = await fetch(refreshUrl, {
                method: "POST",
                headers: authHeaders(null),
                body: JSON.stringify({ refresh_token: session.refresh_token })
            });
            if (refreshed.ok) {
                storeSession(await refreshed.json());
                return request(path, options, false);
            }
            storeSession(null);
        }

        const payload = await response.json().catch(() => null);
        if (!response.ok) {
            const message = payload?.msg || payload?.message || payload?.error_description || payload?.error || "The online request failed.";
            throw new Error(message);
        }
        return payload;
    }

    async function authenticate(mode, email, password) {
        const path = mode === "signup"
            ? "/auth/v1/signup"
            : "/auth/v1/token?grant_type=password";
        const payload = await request(path, {
            method: "POST",
            body: JSON.stringify({ email, password })
        }, false);
        if (payload?.access_token) storeSession(payload);
        return payload;
    }

    async function signOut() {
        try {
            if (session?.access_token) {
                await request("/auth/v1/logout", { method: "POST" }, false);
            }
        } finally {
            storeSession(null);
        }
    }

    async function getList(id) {
        const query = new URLSearchParams({ id: `eq.${id}`, select: "id,owner_id,title,state" });
        const rows = await request(`/rest/v1/tier_lists?${query}`);
        return rows?.[0] || null;
    }

    async function saveList(id, title, state) {
        if (!session?.user?.id) throw new Error("Sign in to publish a tier list.");
        if (id) {
            const query = new URLSearchParams({ id: `eq.${id}`, select: "id" });
            const rows = await request(`/rest/v1/tier_lists?${query}`, {
                method: "PATCH",
                headers: { Prefer: "return=representation" },
                body: JSON.stringify({ title, state, updated_at: new Date().toISOString() })
            });
            if (!rows?.length) throw new Error("This list was not updated. Only its owner can edit it.");
            return rows[0].id;
        }

        const rows = await request("/rest/v1/tier_lists?select=id", {
            method: "POST",
            headers: { Prefer: "return=representation" },
            body: JSON.stringify({ owner_id: session.user.id, title, state })
        });
        if (!rows?.[0]?.id) throw new Error("The list was saved but no public link was returned.");
        return rows[0].id;
    }

    window.TierLabBackend = {
        configured,
        authenticate,
        signOut,
        get user() { return session?.user || null; },
        getList,
        saveList
    };
})();
