import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { sitemapEntries } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapEntries(site.contentRevision);
}
