import Link from "next/link";
import { policyLinks, site } from "@/config/site";
import { publicPath } from "@/lib/site-url";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle
        cx="12"
        cy="12"
        r="3.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.04 3.2a8.3 8.3 0 0 0-7.15 12.45L3.6 20.4l4.88-1.26A8.3 8.3 0 1 0 12.04 3.2Zm4.82 11.76c-.2.56-1.16 1.07-1.61 1.14-.41.06-.93.09-1.5-.09-.34-.11-.79-.26-1.36-.5-2.38-1.03-3.94-3.43-4.05-3.58-.12-.16-.96-1.28-.96-2.44 0-.7.28-1.3.62-1.66.2-.22.53-.33.84-.33.1 0 .2 0 .29.01.25.01.38-.08.6.46.22.56.76 1.95.83 2.09.07.14.11.3.02.48-.08.18-.13.29-.26.45-.13.16-.27.35-.39.46-.13.13-.26.27-.11.53.15.26.69 1.13 1.47 1.84 1.02.9 1.87 1.18 2.14 1.32.26.13.42.11.57-.07.16-.17.65-.75.82-1 .17-.26.35-.21.58-.12.23.08 1.48.7 1.74.82.25.13.42.19.48.3.07.1.07.63-.13 1.19Z"
      />
    </svg>
  );
}

export function FilmFooter() {
  return (
    <footer className="border-t border-[#e0b85c]/20 bg-[#081c33] text-[#f3eee4]">
      <div className="mx-auto w-full max-w-6xl px-6 py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
          <Link
            href="/"
            aria-label="flyFromMeetings home"
            className="inline-block shrink-0"
          >
            <img
              src={publicPath("/brand/logo-film.png")}
              alt=""
              className="h-20 w-auto"
            />
          </Link>

          <nav aria-label="Policies" className="md:flex-1">
            <ul className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-[#f3eee4]/85 md:justify-center">
              {policyLinks.map((item, index) => (
                <li key={item.href} className="flex items-center gap-3">
                  {index > 0 ? (
                    <span aria-hidden="true" className="text-[#f3eee4]/35">
                      |
                    </span>
                  ) : null}
                  <Link href={item.href} className="hover:text-[#e0b85c]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid size-10 place-items-center rounded-full border border-[#f3eee4]/70 text-[#f3eee4] hover:border-[#e0b85c] hover:text-[#e0b85c]"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://wa.me/919990766054"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="grid size-10 place-items-center rounded-full border border-[#f3eee4]/70 text-[#f3eee4] hover:border-[#e0b85c] hover:text-[#e0b85c]"
            >
              <WhatsAppIcon />
            </a>
          </div>
        </div>
        <p className="mt-3 text-xs tracking-wide text-[#f3eee4]/70">
          © 2026 Fly From Meetings. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
