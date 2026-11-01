import Link from "next/link";
import { Container } from "@/components/site/container";

export default function NotFound() {
  return (
    <Container className="py-24">
      <p className="text-xs font-semibold tracking-[0.18em] text-clay-deep uppercase">
        404
      </p>
      <h1 className="mt-3 font-display text-5xl tracking-tight">
        That page is not on the route.
      </h1>
      <p className="mt-4 max-w-lg text-muted">
        The address may be mistyped, or the sample trip may have been removed.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block text-sm font-semibold underline underline-offset-4"
      >
        Back home
      </Link>
    </Container>
  );
}
