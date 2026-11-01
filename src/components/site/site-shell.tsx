"use client";

import { usePathname } from "next/navigation";
import { isFilmPath } from "@/config/site";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      {isFilmPath(pathname) ? null : <SiteFooter />}
    </>
  );
}
