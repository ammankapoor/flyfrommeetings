# Architecture

## Choices

**Next.js App Router and React Server Components.** The public site is mostly content. Server-rendered HTML gives search engines and assistive tech a complete page without waiting on a client bundle. Server Actions handle inquiries without a separate API project. Cache Components, already enabled by the Next.js 16 starter, prerender a static shell and keep request-time work (form posts, unknown trip URLs) out of that shell.

**TypeScript.** Trip records, form results, and future booking states stay explicit as the studio adds inventory and payments.

**Tailwind CSS.** Layout, type, and color live in one token set in `src/app/globals.css`. There is no component library to restyle later.

**Zod.** Inquiry rules are tested without rendering the page. The same schema is the server boundary for every submission.

**Vitest, not a browser suite yet.** The risky logic today is validation, rate limits, URL building, and whether a production form can silently drop an inquiry. End-to-end browser coverage with Playwright is the right next test layer once the inquiry inbox and a real trip editor exist.

**No CMS and no payment provider yet.** Trips are a typed array. Bookings are a type file only. Adding a CMS or a card processor should be a deliberate choice after the business details below are confirmed.

## Request flow

1. Pages read `src/content/trips.ts` at build time.
2. Known trip URLs are prerendered. Unknown slugs render on demand and return 404 when the slug is not in the list.
3. Plan and contact forms post to `submitInquiry`.
4. The action rate-limits by IP (in memory, per server process), rejects invalid fields, discards honeypot hits, and then either writes a local log or POSTs to the webhook.
5. Production refuses to report success when the webhook is missing, not HTTPS, or has no secret.

The in-memory limit is a basic brake. Put a shared limiter in front of the site before the form is public.

## Accessibility and performance defaults

- One `h1` per page, labeled landmarks, a skip link, visible focus, and form errors tied to fields with `aria-invalid` and `role="alert"`.
- Native form controls so the inquiry still posts if JavaScript fails.
- `prefers-reduced-motion` shortens animation and smooth scrolling.
- Fonts load through `next/font` with `display: swap`.
- There are no remote images. `MediaFrame` reserves space until licensed photography is added. When photos exist, use `next/image` with explicit `sizes` so the optimizer can serve AVIF and WebP.
- Indexing is off unless `NEXT_PUBLIC_ALLOW_INDEXING=true`.
- Security headers are set in `next.config.ts`. A strict Content-Security-Policy is intentionally not set yet; Next.js hydration scripts need a nonce-based policy, which should be added when the host is chosen.

## Structured data

Home emits `TravelAgency` JSON-LD. Trip pages emit `TouristTrip` JSON-LD. Both use placeholder fields. Do not enable indexing until those values are true.

## Open questions

Confirm these before building real inventory or going live:

1. Legal entity name, business address, and which seller-of-travel or other licenses apply.
2. Public email, phone, and whether the studio wants a contact form, a mailbox, or both.
3. Who may be named and pictured, and the biography you want published.
4. Whether the Instagram account should be linked as an official profile.
5. The first real trips: title, region, duration, season, price, group size, and what is included.
6. Who owns the photography, and the alt text for each image.
7. The inquiry inbox: webhook, transactional email, or a CRM.
8. Whether planning is inquiry-only, or whether online booking and payments are in scope.
9. The production domain, and when indexing should be turned on.
10. Hosting preference: Vercel, or a container on another platform.
