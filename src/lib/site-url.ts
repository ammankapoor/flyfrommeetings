const FALLBACK_SITE_URL = "http://localhost:3000";

export function getSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!configured) return FALLBACK_SITE_URL;

  try {
    const url = new URL(configured);
    const path = url.pathname.replace(/\/$/, "");
    return `${url.origin}${path}`;
  } catch {
    return FALLBACK_SITE_URL;
  }
}

export function publicPath(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function absoluteUrl(path: string) {
  const suffix = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${suffix}`;
}
