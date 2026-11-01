# flyFromMeetings

Local foundation for a travel-planning studio site. Copy, founder details, trip inventory, prices, photography, and contact information are placeholders. Nothing here is a live booking system, and this folder has not been deployed.

Instagram and other studio sites were used only as atmosphere references. Their names, layouts, copy, and images are not reused.

## Stack

- Next.js 16 App Router, React 19, TypeScript
- Tailwind CSS 4
- Zod for inquiry validation
- Vitest for domain tests
- ESLint and Prettier
- GitHub Actions for CI
- Node server deployment (Vercel or the included Docker image)

See [docs/architecture.md](docs/architecture.md) for why these choices were made, and [docs/deployment.md](docs/deployment.md) for hosting.

## Requirements

- Node.js 22.13 or newer (`.nvmrc`). This machine may still be on an older 22.x patch; upgrade if `npm` prints engine warnings.
- npm 10 or newer

## Local setup

```bash
cd Projects/flyfrommeetings
cp .env.example .env.local
npm ci
npm run dev
```

Open http://localhost:3000.

In development, a valid inquiry is appended to `.data/inquiries.ndjson`. That directory is gitignored and may contain personal data. Delete it when you are done testing. Nothing is emailed unless `INQUIRY_WEBHOOK_URL` and `INQUIRY_WEBHOOK_SECRET` are set.

## Scripts

| Command                | What it does                     |
| ---------------------- | -------------------------------- |
| `npm run dev`          | Local dev server                 |
| `npm run lint`         | ESLint                           |
| `npm run format`       | Prettier write                   |
| `npm run format:check` | Prettier check                   |
| `npm test`             | Vitest once                      |
| `npm run typecheck`    | Generate route types, then `tsc` |
| `npm run build`        | Production build                 |
| `npm start`            | Serve the production build       |

## Environment variables

Copy `.env.example` to `.env.local`. Never commit `.env`, `.env.local`, or webhook secrets.

| Name                         | Scope       | Purpose                                                 |
| ---------------------------- | ----------- | ------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`       | Public      | Canonical origin for metadata, sitemap, and Open Graph  |
| `NEXT_PUBLIC_ALLOW_INDEXING` | Public      | `false` until real content replaces placeholders        |
| `INQUIRY_WEBHOOK_URL`        | Server only | HTTPS endpoint that receives inquiry JSON in production |
| `INQUIRY_WEBHOOK_SECRET`     | Server only | Bearer token for that endpoint                          |

`NEXT_PUBLIC_*` values are visible in the browser. Do not put secrets there.

## Repository map

```text
src/app/                  routes, metadata, sitemap, robots, global styles
src/components/           header, footer, forms, trip cards
src/config/site.ts        brand strings and navigation
src/content/trips.ts      sample trip records
src/features/inquiries/   server action
src/features/bookings/    types only, for a later booking flow
src/lib/                  URL helpers, SEO paths, validation, delivery
```

Naming:

- Route folders match the public URL: `about`, `trips`, `plan`, `contact`.
- Components are kebab-case files that export PascalCase functions.
- Domain modules live under `src/lib` or `src/features`.
- Sample content stays in `src/content` so pages do not hard-code trip copy.
- Tests sit next to the module as `*.test.ts`.

## Before you treat this as a public site

Confirm the open questions in [docs/architecture.md](docs/architecture.md). Keep `NEXT_PUBLIC_ALLOW_INDEXING=false` until placeholder trips, biographies, and contact details are replaced.
