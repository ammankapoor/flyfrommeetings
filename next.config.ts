import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

if (process.env.NODE_ENV === "production") {
  securityHeaders.push({
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  });
}

const githubPages = process.env.GITHUB_PAGES === "true";
const onVercel = process.env.VERCEL === "1";
const basePath = (
  process.env.NEXT_PUBLIC_BASE_PATH ?? (githubPages ? "/flyfrommeetings" : "")
).replace(/\/$/, "");

const nextConfig: NextConfig = {
  ...(githubPages
    ? {
        output: "export" as const,
        ...(basePath ? { basePath } : {}),
        trailingSlash: true,
        images: { unoptimized: true },
        env: { NEXT_PUBLIC_BASE_PATH: basePath },
      }
    : {
        cacheComponents: true,
        partialPrefetching: true,
        ...(onVercel ? {} : { output: "standalone" as const }),
        images: {
          formats: ["image/avif", "image/webp"] as ("image/avif" | "image/webp")[],
        },
        async headers() {
          return [{ source: "/:path*", headers: securityHeaders }];
        },
      }),
  poweredByHeader: false,
  typedRoutes: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
