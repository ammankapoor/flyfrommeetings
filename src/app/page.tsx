import { HeroReel } from "@/components/home/hero-reel";
import { UpcomingTrips } from "@/components/trips/upcoming-trips";
import { JsonLd } from "@/components/seo/json-ld";
import { site } from "@/config/site";
import { getSiteUrl } from "@/lib/site-url";

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: site.name,
          description: site.description,
          url: getSiteUrl(),
          email: site.email,
        }}
      />
      <HeroReel
        cue={
          <a
            href="#trips"
            className="pointer-events-auto inline-flex flex-col items-center gap-2 text-sm font-semibold tracking-[0.22em] text-paper uppercase no-underline"
          >
            Explore trips
            <svg
              viewBox="0 0 24 24"
              className="explore-arrow size-6"
              aria-hidden="true"
            >
              <path
                d="M6 9l6 6 6-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <style>{`
              @keyframes explore-arrow {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(8px); }
              }
              .explore-arrow { animation: explore-arrow 1.4s ease-in-out infinite; }
              @media (prefers-reduced-motion: reduce) {
                .explore-arrow { animation: none !important; }
              }
            `}</style>
          </a>
        }
      >
        <div style={{ textShadow: "0 12px 30px rgba(0,0,0,0.45)" }}>
          <h1 className="font-display text-[clamp(3.6rem,9vw,7rem)] leading-[0.9] font-light tracking-[-0.04em] text-paper italic">
            Let&apos;s fly
            <span className="mt-1 block text-[#e0b85c]">together</span>
          </h1>
          <a
            href="https://wa.me/919990766054"
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto mt-8 inline-flex items-center gap-2 rounded-full bg-[#e0b85c] px-6 py-3 text-base font-semibold tracking-wide text-[#10243a] no-underline"
            style={{ textShadow: "none" }}
          >
            <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.4a10 10 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2Zm5.76 14.15c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.81-.11-.42-.14-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.16-1.54-1.16-2.94s.73-2.08 1-2.37c.24-.27.64-.4 1.02-.4.13 0 .24 0 .35.01.3.01.46-.1.72.55.27.68.92 2.35 1 2.52.08.17.14.37.03.58-.1.22-.16.35-.31.54-.16.19-.33.42-.47.56-.16.16-.32.33-.14.64.19.31.83 1.37 1.78 2.22 1.23 1.09 2.26 1.43 2.58 1.59.32.16.5.13.69-.08.19-.21.78-.9.99-1.21.21-.31.42-.26.7-.15.28.1 1.79.84 2.1.99.3.16.51.23.58.36.08.13.08.76-.16 1.44Z"
              />
            </svg>
            Book now
          </a>
        </div>
      </HeroReel>
      <UpcomingTrips />
    </>
  );
}
