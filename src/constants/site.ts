// Public origin baked into canonical/OG/JSON-LD/robots/sitemap at build time
// (the site is a static export). Set SITE_URL per environment; in Docker it
// is a build arg (Coolify: build variable). Only `next dev` falls back to
// localhost, so a production build can never ship a wrong origin.
function resolveSiteUrl(): string {
  const raw = process.env.SITE_URL?.trim();
  if (raw) return new URL(raw).origin;
  if (process.env.NODE_ENV === "development") return "http://localhost:3000";
  throw new Error(
    "SITE_URL is not set. Pass the public origin, e.g. SITE_URL=https://example.com npm run build",
  );
}

export const SITE_URL = resolveSiteUrl();
