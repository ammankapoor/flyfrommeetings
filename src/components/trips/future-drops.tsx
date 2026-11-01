import { publicPath } from "@/lib/site-url";

const drops = [
  {
    title: "Vietnam",
    image: publicPath("/media/trips/vietnam.jpg"),
    imageAlt: "Limestone islands and boats on a bay in Vietnam",
  },
  {
    title: "Japan",
    image: publicPath("/media/trips/japan.jpg"),
    imageAlt: "A pagoda at the end of a street in Japan at dusk",
  },
];

function PlaneMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-6 -rotate-12 text-[#e0b85c]" aria-hidden="true">
      <path
        fill="currentColor"
        d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5Z"
      />
    </svg>
  );
}

export function FutureDrops() {
  return (
    <section className="bg-[#0c2744] px-6 pb-10">
      <div className="mx-auto w-full max-w-5xl rounded-[28px] border border-[#e0b85c]/25 bg-[#123352] p-5 text-[#f3eee4] sm:p-7">
        <p className="text-[11px] font-semibold tracking-[0.2em] text-[#e0b85c] uppercase">Dropping next</p>
        <h2 className="mt-1 flex items-center gap-2 font-display text-3xl font-light tracking-tight italic sm:text-4xl">
          Future Drops
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {drops.map((drop) => (
            <article key={drop.title} className="relative h-52 overflow-hidden rounded-3xl sm:h-60">
              <img src={drop.image} alt={drop.imageAlt} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/10" />
              <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between gap-3">
                <h3 className="flex items-center gap-2 font-display text-4xl tracking-tight">
                  {drop.title}
                  <PlaneMark />
                </h3>
                <span className="shrink-0 rounded-full bg-[#e0b85c] px-3 py-1.5 text-sm font-semibold text-[#10243a]">
                  Coming Soon
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
