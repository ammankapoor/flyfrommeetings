"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { isFilmPath, navItems, site, type NavHref } from "@/config/site";
import { publicPath } from "@/lib/site-url";

function isCurrent(pathname: string, href: NavHref) {
  if (href.includes("#")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function followNav(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const id = href.startsWith("/#") ? href.slice(2) : "";
  if (id) {
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", `${base}${href}`);
    return;
  }
  const homePath = base ? `${base}/` : "/";
  if (
    href === "/" &&
    (window.location.pathname === "/" || window.location.pathname === homePath)
  ) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState(null, "", homePath);
  }
}

function Wordmark({ light }: { light: boolean }) {
  return (
    <Link href="/" aria-label="flyFromMeetings home" className="block shrink-0">
      <img
        src={publicPath(light ? "/brand/logo-film.png" : "/brand/logo.png")}
        alt=""
        className="h-16 w-auto md:h-[5.5rem]"
      />
    </Link>
  );
}

function MenuRow({
  items,
  pathname,
  light,
  align,
  onNavigate,
}: {
  items: readonly (typeof navItems)[number][];
  pathname: string;
  light: boolean;
  align: "start" | "end";
  onNavigate: (event: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}) {
  return (
    <ul
      className={`flex items-center gap-4 ${align === "end" ? "justify-end" : "justify-start"}`}
    >
      {items.map((item, index) => {
        const current = isCurrent(pathname, item.href);
        return (
          <li key={item.href} className="flex items-center gap-4">
            {index > 0 ? (
              <span
                aria-hidden="true"
                className={`h-10 w-0.5 ${light ? "bg-paper" : "bg-ink/45"}`}
              />
            ) : null}
            <Link
              href={item.href}
              aria-current={current ? "page" : undefined}
              onClick={(event) => onNavigate(event, item.href)}
              className={`pointer-events-auto text-[15px] leading-none font-normal tracking-[3px] uppercase ${
                current
                  ? light
                    ? "text-paper"
                    : "text-ink"
                  : light
                    ? "text-paper/80 hover:text-paper"
                    : "text-ink/75 hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);

  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const onFilm = isFilmPath(pathname);
  const item = (href: NavHref) => navItems.find((entry) => entry.href === href)!;
  const leftItems = [item("/"), item("/#trips")];
  const rightItems = [item("/#about"), item("/#contact")];

  function onNavigate(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
    followNav(event, href);
    setOpen(false);
  }

  return (
    <header
      className={
        onFilm
          ? "absolute inset-x-0 top-0 z-30 border-b border-[#e0b85c]/25 bg-[#0c2744]"
          : "border-b border-line bg-paper/90 backdrop-blur"
      }
    >
      <div className="flex items-center justify-between gap-4 px-5 py-4 md:hidden">
        <Wordmark light={onFilm} />
        <button
          type="button"
          className={
            onFilm
              ? "border border-[#e0b85c] px-3 py-2 text-xs font-semibold tracking-[0.16em] text-[#f3eee4] uppercase"
              : "border border-line px-3 py-2 text-sm"
          }
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      <nav
        id="site-nav"
        aria-label="Primary"
        className={
          open
            ? onFilm
              ? "border-t border-[#e0b85c]/25 bg-[#0c2744] px-5 py-4 md:border-0 md:bg-transparent md:px-8 md:py-4 lg:px-12"
              : "border-t border-line bg-paper px-5 py-4 md:border-0 md:bg-transparent md:px-8 md:py-4 lg:px-12"
            : "hidden md:block md:px-8 md:py-4 lg:px-12"
        }
      >
        <ul className="flex flex-col gap-1 md:hidden">
          {[...leftItems, ...rightItems].map((item) => {
            const current = isCurrent(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  onClick={(event) => onNavigate(event, item.href)}
                  className={
                    onFilm
                      ? `pointer-events-auto block py-3 text-sm tracking-[0.18em] uppercase ${
                          current
                            ? "text-[#e0b85c]"
                            : "text-[#f3eee4] hover:text-[#e0b85c]"
                        }`
                      : current
                        ? "pointer-events-auto text-sm font-semibold text-ink"
                        : "pointer-events-auto text-sm text-muted hover:text-ink"
                  }
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="hidden items-center md:grid md:grid-cols-[1fr_auto_1fr]">
          <MenuRow
            items={leftItems}
            pathname={pathname}
            light={onFilm}
            align="end"
            onNavigate={onNavigate}
          />
          <div className="mx-[70px]">
            <Wordmark light={onFilm} />
          </div>
          <MenuRow
            items={rightItems}
            pathname={pathname}
            light={onFilm}
            align="start"
            onNavigate={onNavigate}
          />
        </div>
      </nav>
      <p className="sr-only">{site.name}</p>
    </header>
  );
}
