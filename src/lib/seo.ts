import { trips } from "@/content/trips";
import { absoluteUrl } from "@/lib/site-url";

const staticPaths = [
  "/",
  "/trips",
  "/plan",
  "/contact",
  "/privacy",
  "/terms",
  "/cancellation",
  "/payment-policy",
] as const;

export function indexablePaths() {
  return [...staticPaths, ...trips.map((trip) => `/trips/${trip.slug}`)];
}

export function sitemapEntries(lastModified: string) {
  return indexablePaths().map((path) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "/" ? 1 : 0.7,
  }));
}
