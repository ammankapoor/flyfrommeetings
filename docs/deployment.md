# Deployment

This repository has not been deployed. Indexing stays off until placeholder content is replaced.

## Environment

Set these in the host, not in git:

- `NEXT_PUBLIC_SITE_URL` = the live origin, such as `https://www.example.com`
- `NEXT_PUBLIC_ALLOW_INDEXING` = `false` until content is confirmed, then `true`
- `INQUIRY_WEBHOOK_URL` = an `https://` endpoint you control
- `INQUIRY_WEBHOOK_SECRET` = a long random bearer token

`NEXT_PUBLIC_*` values are baked in at build time. Change them and rebuild.

The webhook should:

- require the bearer token
- store or forward the JSON body
- return a 2xx response only after the inquiry is accepted
- reject non-JSON and oversized payloads

The JSON body is `{ "inquiry": { ...fields } }`. Do not log the bearer token.

## Vercel

1. Import the Git repository.
2. Framework preset: Next.js. Install command: `npm ci`. Build command: `npm run build`.
3. Add the environment variables above to Production and Preview.
4. Use a preview deployment to submit one inquiry and confirm the webhook receives it.
5. Attach the production domain and only then set `NEXT_PUBLIC_ALLOW_INDEXING=true` if the content is final.

Vercel runs the Next.js server, so Server Actions and the webhook call work without the Docker image.

## Container

`output: "standalone"` is enabled. From the repository root:

```bash
docker build \
  --build-arg NEXT_PUBLIC_SITE_URL=https://www.example.com \
  --build-arg NEXT_PUBLIC_ALLOW_INDEXING=false \
  -t flyfrommeetings .

docker run --rm -p 3000:3000 \
  -e INQUIRY_WEBHOOK_URL=https://hooks.example.com/inquiries \
  -e INQUIRY_WEBHOOK_SECRET=replace-me \
  flyfrommeetings
```

The image listens on port 3000. Put TLS in front of it. A load balancer health check can use `GET /api/health`, which returns `{ "ok": true }`.

Server Actions need a persistent server. Do not export this app as a purely static site.

## Continuous integration

`.github/workflows/ci.yml` runs on push and pull request:

1. `npm ci`
2. Prettier
3. ESLint
4. `next typegen` and TypeScript
5. Vitest
6. `next build` with indexing disabled and a placeholder site URL

CI does not deploy and does not call a webhook.

## Launch checks

- Placeholder banner, sample trips, and `[Placeholder]` contact details are gone.
- `robots.txt` allows crawling only after `NEXT_PUBLIC_ALLOW_INDEXING=true`.
- `sitemap.xml` lists real URLs on the production origin.
- One contact inquiry and one plan inquiry arrive in the inbox.
- A missing webhook in production shows an error instead of a success message.
- Lighthouse or a similar pass covers the home page, a trip page, and both forms, including keyboard-only use.
