import Link from "next/link";
import type { Trip } from "@/content/trips";

export function TripCard({ trip, index }: { trip: Trip; index: number }) {
  return (
    <article className="grid gap-6 border-t border-line py-8 md:grid-cols-[5rem_1fr_auto] md:items-end">
      <p className="font-display text-4xl text-clay-deep">
        {String(index + 1).padStart(2, "0")}
      </p>
      <div>
        <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">
          Sample layout · {trip.region}
        </p>
        <h2 className="mt-2 font-display text-3xl tracking-tight">
          <Link href={`/trips/${trip.slug}`} className="hover:text-clay-deep">
            {trip.title}
          </Link>
        </h2>
        <p className="mt-3 max-w-xl text-muted">{trip.summary}</p>
        <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <div>
            <dt className="text-muted">Length</dt>
            <dd>{trip.duration}</dd>
          </div>
          <div>
            <dt className="text-muted">Season</dt>
            <dd>{trip.season}</dd>
          </div>
          <div>
            <dt className="text-muted">Price</dt>
            <dd>{trip.priceLabel}</dd>
          </div>
        </dl>
      </div>
      <Link
        href={`/trips/${trip.slug}`}
        className="text-sm font-semibold underline decoration-clay underline-offset-4"
      >
        View sample
      </Link>
    </article>
  );
}
