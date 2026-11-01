import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/site/container";
import { MediaFrame } from "@/components/site/media-frame";
import { getTripBySlug, trips } from "@/content/trips";
import { absoluteUrl } from "@/lib/site-url";

export const dynamicParams = false;

export function generateStaticParams() {
  return trips.map((trip) => ({ slug: trip.slug }));
}

export async function generateMetadata(
  props: PageProps<"/trips/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const trip = getTripBySlug(slug);
  if (!trip) return { title: "Trip" };

  return {
    title: trip.title,
    description: trip.summary,
  };
}

function TripFallback() {
  return (
    <Container className="py-16">
      <p className="text-muted">Loading trip details…</p>
    </Container>
  );
}

async function TripContent({
  params,
}: {
  params: PageProps<"/trips/[slug]">["params"];
}) {
  const { slug } = await params;
  const trip = getTripBySlug(slug);
  if (!trip) notFound();

  return (
    <Container className="py-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: trip.title,
          description: trip.summary,
          url: absoluteUrl(`/trips/${trip.slug}`),
        }}
      />
      <p className="text-sm text-muted">
        <Link href="/trips" className="underline underline-offset-4">
          Trips
        </Link>
        <span aria-hidden="true"> / </span>
        <span>Sample</span>
      </p>
      <div className="mt-8 grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-clay-deep uppercase">
            Sample layout · not for sale
          </p>
          <h1 className="mt-3 font-display text-5xl leading-[1.02] tracking-tight">
            {trip.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            {trip.summary}
          </p>
          <dl className="mt-8 grid grid-cols-2 gap-4 text-sm sm:grid-cols-3">
            {[
              ["Region", trip.region],
              ["Length", trip.duration],
              ["Season", trip.season],
              ["Pace", trip.pace],
              ["Price", trip.priceLabel],
              ["Group", trip.groupLabel],
            ].map(([label, value]) => (
              <div key={label} className="border-t border-line pt-3">
                <dt className="text-muted">{label}</dt>
                <dd className="mt-1 font-semibold">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <MediaFrame label={trip.region} />
      </div>
      <section className="mt-14" aria-labelledby="outline-heading">
        <h2 id="outline-heading" className="font-display text-3xl">
          Outline
        </h2>
        <ol className="mt-6 divide-y divide-line border-y border-line">
          {trip.days.map((day) => (
            <li key={day.label} className="grid gap-2 py-5 md:grid-cols-[10rem_1fr]">
              <h3 className="font-semibold">{day.label}</h3>
              <p className="text-muted">{day.detail}</p>
            </li>
          ))}
        </ol>
      </section>
      <Link
        href={`/plan?trip=${trip.slug}`}
        className="mt-10 inline-block bg-ink px-5 py-3 text-sm font-semibold text-paper"
      >
        Ask about this sample
      </Link>
    </Container>
  );
}

export default function TripPage(props: PageProps<"/trips/[slug]">) {
  return (
    <Suspense fallback={<TripFallback />}>
      <TripContent params={props.params} />
    </Suspense>
  );
}
