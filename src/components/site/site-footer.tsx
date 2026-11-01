import Link from "next/link";
import { navItems, site } from "@/config/site";
import { Container } from "@/components/site/container";

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-pine text-paper">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-display text-3xl">flyFromMeetings</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-sand">
            {`${site.legalName}. ${site.location}. Replace this footer before launch. No license number is on file in this foundation.`}
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-3 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
      <div className="border-t border-white/15">
        <Container className="py-4 text-xs text-sand">
          Draft site. Content revision {site.contentRevision}. Social profiles and a
          mailing address are not confirmed.
        </Container>
      </div>
    </footer>
  );
}
