import { FilmFooter } from "@/components/site/film-footer";
import { FutureDrops } from "@/components/trips/future-drops";
import { GetInTouch } from "@/components/trips/get-in-touch";
import { GroupDrops } from "@/components/trips/group-drops";

export function UpcomingTrips({ padForHeader = false }: { padForHeader?: boolean }) {
  return (
    <div id="trips" className={padForHeader ? "scroll-mt-8 bg-[#0c2744] pt-24" : "scroll-mt-28 bg-[#0c2744]"}>
      <section className="px-6 pt-14 pb-8 text-center text-[#f3eee4]">
        <h2 className="font-display text-[clamp(3.2rem,7vw,5.6rem)] leading-[0.9] font-light tracking-[-0.03em] italic">
          Upcoming
          <span className="mt-1 block text-[#e0b85c]">Group Trips</span>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-[#f3eee4]/75 sm:mt-10 sm:text-lg">
          Curated journeys. Epic places. Real connections without awkward small talk.
        </p>
      </section>
      <GroupDrops />
      <FutureDrops />
      <div className="px-6" aria-hidden="true">
        <hr className="mx-auto w-full max-w-5xl border-0 border-t border-white" />
      </div>
      <GetInTouch />
      <FilmFooter />
    </div>
  );
}
