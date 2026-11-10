import { publicPath } from "@/lib/site-url";

const reasons = [
  {
    title: "Firsthand Travel Experience",
    body: "Real insights from destinations we’ve explored.",
    icon: PlaneIcon,
  },
  {
    title: "Premium Experiences, Smart Prices",
    body: "More memorable experiences, less unnecessary spending.",
    icon: GemIcon,
  },
  {
    title: "Small Groups, Great Connections",
    body: "Thoughtfully curated journeys with like-minded travellers.",
    icon: PeopleIcon,
  },
  {
    title: "Transparency & Personal Attention",
    body: "Clear pricing, honest communication, and personal care.",
    icon: HandshakeIcon,
  },
];

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-32 bg-[#0c2744] text-[#f3eee4]">
      <div className="px-6 pt-14 pb-10 text-center">
        <p className="text-xs font-semibold tracking-[0.22em] text-[#e0b85c] uppercase">
          About us
        </p>
        <h2 className="mx-auto mt-4 max-w-4xl font-display text-[clamp(3rem,7vw,5.4rem)] leading-[0.92] font-light tracking-[-0.03em] italic">
          Behind Fly From Meetings
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-[#e0b85c] sm:text-xl">
          Partners in Life. Partners in Every Journey.
        </p>
      </div>

      <section className="mx-auto grid w-full max-w-5xl items-center gap-10 px-6 pb-16 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-14">
        <figure>
          <img
            src={publicPath("/media/about/sumit-meenu.jpg")}
            alt="Sumit Bangia and Meenu Bharti standing together in front of a gold globe and airplane"
            className="aspect-[3/4] w-full rounded-[28px] object-cover"
          />
          <figcaption className="mt-3 text-sm text-[#f3eee4]/70">
            Sumit Bangia and Meenu Bharti
          </figcaption>
        </figure>
        <div className="space-y-5 text-base leading-relaxed text-[#f3eee4]/85 sm:text-lg">
          <p>
            Behind Fly From Meetings are Sumit Bangia and Meenu Bharti, a{" "}
            <span className="whitespace-nowrap">husband-and-wife</span> duo with over a
            decade of experience in Human Resources and a shared love for travel.
          </p>
          <p>
            While balancing corporate careers and busy schedules, we’ve explored ten
            countries in just 24 months, discovering new cultures, unforgettable places,
            and the value of travelling smart.
          </p>
          <blockquote className="border-l-2 border-[#e0b85c] pl-5 text-[#f3eee4]">
            <p className="font-display text-2xl leading-snug font-light italic sm:text-3xl">
              You don’t need unlimited time or an extravagant budget to explore the
              world. You just need to plan it right.
            </p>
          </blockquote>
        </div>
      </section>

      <section className="px-6 pb-16" aria-labelledby="inspired-heading">
        <div className="mx-auto w-full max-w-5xl rounded-[28px] border border-[#e0b85c]/25 bg-[#123352] p-6 sm:p-10">
          <h2
            id="inspired-heading"
            className="font-display text-4xl leading-none font-light tracking-[-0.03em] italic sm:text-5xl"
          >
            What Inspired Us
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-[#f3eee4]/85 sm:text-lg">
            <p>
              Between meetings, deadlines, and limited leaves, travel became our escape
              from everyday routines.
            </p>
            <p>
              That’s what inspired Fly From Meetings, to help others explore more
              through thoughtful planning, comfortable stays, and experiences worth
              remembering.
            </p>
            <p className="text-[#f3eee4]">
              Because the life you work hard for should also be a life you get to
              experience.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16" aria-labelledby="why-heading">
        <div className="mx-auto w-full max-w-5xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-[#e0b85c] uppercase">
            Why travel with us
          </p>
          <h2
            id="why-heading"
            className="mt-3 max-w-3xl font-display text-4xl leading-none font-light tracking-[-0.03em] italic sm:text-5xl"
          >
            Travel Smart. Experience More.
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {reasons.map((reason) => (
              <li
                key={reason.title}
                className="rounded-[24px] border border-[#e0b85c]/25 bg-[#123352] p-5 sm:p-6"
              >
                <reason.icon />
                <h3 className="mt-4 text-lg font-semibold">{reason.title}</h3>
                <p className="mt-2 leading-relaxed text-[#f3eee4]/80">{reason.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 pb-20 text-center" aria-labelledby="philosophy-heading">
        <div className="mx-auto w-full max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-[#e0b85c] uppercase">
            Our philosophy
          </p>
          <h2
            id="philosophy-heading"
            className="mt-3 font-display text-[clamp(2.6rem,6vw,4.6rem)] leading-[0.95] font-light tracking-[-0.03em] italic"
          >
            Travel Beyond Meetings.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#f3eee4]/85 sm:text-lg">
            Your calendar may be full of meetings, but your life deserves more
            destinations.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#f3eee4] sm:text-lg">
            Because there’s a whole world waiting beyond your calendar.
          </p>
          <a
            href="#trips"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#e0b85c] px-6 py-3 text-sm font-semibold text-[#10243a]"
          >
            Explore upcoming trips
          </a>
        </div>
      </section>
    </section>
  );
}

function PlaneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-7 text-[#e0b85c]" aria-hidden="true">
      <path
        fill="currentColor"
        d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5L21 16Z"
      />
    </svg>
  );
}

function GemIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-7 text-[#e0b85c]" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        d="M4 9.5 8 4h8l4 5.5L12 20 4 9.5Z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        d="M4 9.5h16M8 4l4 16 4-16"
      />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-7 text-[#e0b85c]" aria-hidden="true">
      <path
        fill="currentColor"
        d="M8 11.2a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4Zm8.2-.6a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4ZM3.4 18.2c.4-2.4 2.4-4 4.6-4s4.2 1.6 4.6 4v.8H3.4v-.8Zm8.2-.3c.1-.4.4-.9.8-1.3.8-.9 2-1.5 3.2-1.5 1.7 0 3.2 1.2 3.6 2.8v.8h-7.6v-.8Z"
      />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-7 text-[#e0b85c]" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        d="M12 20.5s-6.5-4.1-6.5-9.2a3.7 3.7 0 0 1 6.5-2.4 3.7 3.7 0 0 1 6.5 2.4c0 5.1-6.5 9.2-6.5 9.2Z"
      />
    </svg>
  );
}
