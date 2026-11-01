import type { MetadataRoute } from "next";
import { allowIndexing } from "@/config/site";
import { absoluteUrl } from "@/lib/site-url";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const sitemap = absoluteUrl("/sitemap.xml");

  if (!allowIndexing()) {
    return {
      rules: { userAgent: "*", disallow: "/" },
      sitemap,
    };
  }

  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/"] },
    sitemap,
  };
}
