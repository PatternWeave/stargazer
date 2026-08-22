/**
 * Live-preview OAuth placeholders (server-only — NEVER import from the client).
 *
 * Client id and secret come from GROK_AUTH_CLIENT_ID and GROK_AUTH_CLIENT_SECRET
 * when the host injects them. This repo does not bake the shared Grok sandbox
 * preview secret.
 */
export const PREVIEW_CLIENT_ID = "";
export const PREVIEW_CLIENT_SECRET = "";

/** The shared auth broker issuer (OIDC discovery lives under it). */
export const GROK_ISSUER_DEFAULT = "https://auth.grok.me";

/**
 * Host patterns whose callbacks a preview client may accept. Better Auth derives
 * the live preview origin from the request host and validates it against this
 * list (wildcard-matched).
 */
export const PREVIEW_ALLOWED_HOSTS = ["*.grok-sandbox.com"] as const;
