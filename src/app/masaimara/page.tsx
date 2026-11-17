import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { publicPath } from "@/lib/site-url";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "The Great Kenya Safari",
  description:
    "Five days in Maasai Mara and Lake Naivasha with Fly From Meetings. Stays, safari vehicle, meals, and park entries included.",
};

const phone = "+919990766054";
const phoneLabel = "+91 99907 66054";
const whatsapp = `https://wa.me/${phone.slice(1)}?text=${encodeURIComponent(
  "Hi, I'd like to reserve the Great Kenya Safari.",
)}`;

const reasons = [
  {
    title: "Personally Hosted by Us",
    body: "Your hosts travel with you, so every detail of the journey is personally looked after.",
    icon: "🤝",
  },
  {
    title: "4-Star Stays",
    body: "Handpicked luxury lodges and suites ensuring complete comfort in the wild.",
    icon: "🏨",
  },
  {
    title: "4x4 Safari Vehicle",
    body: "Private pop-up-roof safari Land Cruiser with an expert English-speaking guide.",
    icon: "🚙",
  },
  {
    title: "Full Board Meals",
    body: "All breakfasts, lunches, and dinners included throughout your journey.",
    icon: "🍽️",
  },
  {
    title: "All Entries Included",
    body: "Masai Mara game drives, park fees, boat rides, and village visits covered.",
    icon: "🎟️",
  },
] as const;

const days = [
  {
    day: "Day 1",
    title: "Airport → Lake Naivasha & Crescent Island",
    body: "Land in Nairobi early morning and drive through the Great Rift Valley to Lake Naivasha. Check in at Simba Lodge with zebras grazing on the lawn. Enjoy a calm lake boat ride spotting hippos and fish eagles, followed by a guided walking safari alongside giraffes and zebras on Crescent Island.",
    stay: "Simba Lodge, Lake Naivasha • Full Board",
    stayIcon: "bed",
    image: "/media/kenya/day-1.jpg",
    imageAlt: "Zebras grazing on the Masai Mara plains",
  },
  {
    day: "Day 2",
    title: "Lake Naivasha → Masai Mara",
    body: "After breakfast, drive to the world-famous Masai Mara through scenic Kenyan countryside. Check in at Jambo Mara Safari Lodge for lunch. In the late afternoon, head out on your first sunset game drive across endless plains in search of lions, elephants, and giraffes.",
    stay: "Jambo Mara Safari Lodge • Full Board",
    stayIcon: "bed",
    image: "/media/kenya/day-2.jpg",
    imageAlt: "A pop-up-roof safari vehicle at sunset on the plains",
  },
  {
    day: "Day 3",
    title: "Full Day in Masai Mara",
    body: "Start with an early morning game drive when predators are most active, and explore the Mara all day in your private pop-up-roof vehicle. Spot the Big Five, cheetahs, and wildebeest, complete with a bush picnic lunch inside the reserve.",
    stay: "Jambo Mara Safari Lodge • Full Board",
    stayIcon: "bed",
    image: "/media/kenya/day-3.jpg",
    imageAlt: "A male lion resting in the grass in the Masai Mara",
  },
  {
    day: "Day 4",
    title: "Masai Mara → Nairobi & Giraffe Centre",
    body: "Visit a traditional Maasai village to experience their songs, culture, and famous jumping dance. Drive to Nairobi for a vibrant Maasai market shopping experience and meet endangered Rothschild's giraffes up close at the Giraffe Centre.",
    stay: "Lotos Suites, Nairobi • Full Board",
    stayIcon: "bed",
    image: "/media/kenya/day-4.jpg",
    imageAlt: "Maasai hosts in red shukas during a traditional jump",
  },
  {
    day: "Day 5",
    title: "Departure • Farewell Kenya",
    body: "Enjoy a relaxed breakfast at your Nairobi hotel, check out, and transfer comfortably to Jomo Kenyatta International Airport for your flight home with unforgettable safari memories.",
    stay: "Breakfast Included",
    stayIcon: "meal",
    image: "/media/kenya/day-5.jpg",
    imageAlt: "A giraffe in Nairobi National Park with the city skyline behind",
  },
] as const;

const lodges = [
  {
    name: "Simba Lodge",
    meta: "Lake Naivasha • 1 Night",
    body: "Peaceful lakeside resort with roaming zebras and lush lawns.",
    image: "/media/kenya/lodge-simba.jpg",
    imageAlt: "Zebras grazing on the lawn in front of Lake Naivasha Simba Lodge",
    fit: "object-center",
  },
  {
    name: "Jambo Mara Safari Lodge",
    meta: "Masai Mara • 2 Nights",
    body: "Authentic luxury safari lodge right in the heart of the reserve.",
    image: "/media/kenya/lodge-jambo.jpg",
    imageAlt: "A luxury lodge deck looking over the Masai Mara at sunset",
    fit: "object-center",
  },
  {
    name: "Lotos Suites",
    meta: "Nairobi • 1 Night",
    body: "Sophisticated urban suites for a comfortable final evening.",
    image: "/media/kenya/lodge-lotos.jpg",
    imageAlt: "A sunlit suite with a wooden bench and garden windows",
    fit: "object-center",
  },
];

const included = [
  "4 nights in 4-star stays, on double room sharing",
  "Private pop-up-roof 4x4 safari vehicle with English-speaking guide",
  "Masai Mara game drives, park fees, and government taxes",
  "Crescent Island guided walking safari",
  "Lake Naivasha boat ride",
  "Maasai village and Giraffe Centre visits (entry fees included)",
  "Bottled drinking water during the safari",
  "All meals as per itinerary (Full Board)",
  "Airport pick-up and drop-off",
];

const excluded = [
  "International flights",
  "Kenya visa / eTA fees",
  "Travel insurance (mandatory, we can help arrange it)",
  "Tips & gratuities",
  "Alcoholic & soft drinks",
  "Laundry & personal expenses",
  "Optional activities not specified in the itinerary",
];

export default function GreatKenyaSafariPage() {
  return (
    <div className="bg-[#e7d3b4] font-sans text-[#163024]">
      <header className="bg-[#102818] text-[#f4efe4]">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 border-b border-[#e4c15a] px-5 py-3 text-[11px] tracking-[0.14em] uppercase sm:text-xs">
          <p>
            Fly From Meetings Presents{" "}
            <span className="text-[#e4c15a]">• The Great Kenya Safari</span>
          </p>
          <a href={`tel:${phone}`} className="shrink-0 font-semibold tracking-normal">
            ☎ {phoneLabel}
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#102818] text-center text-[#f7f3ea]">
        <img
          src={publicPath("/media/kenya/hero-lion.jpg")}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[68%_center]"
        />
        <div className="absolute inset-0 bg-[#102818]/55" />
        <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center px-5 py-12 sm:py-16">
          <p className="rounded-full border border-[#e4c15a] bg-[#102818]/70 px-4 py-1 text-[11px] font-semibold tracking-[0.16em] text-[#e4c15a] uppercase">
            🐾 Masai Mara & Lake Naivasha
          </p>
          <h1
            className={`${playfair.className} mt-5 text-4xl leading-[1.05] font-bold text-white sm:text-5xl`}
          >
            Wild Heart of Kenya <span className="text-[#e4c15a] italic">Safari</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/90 sm:text-[15px]">
            Golden sunrises, elephants up close, and the colourful Maasai culture. Five
            days of Kenya&apos;s wild beauty. Personally hosted by us.
          </p>
          <div className="mt-6 w-full max-w-sm rounded-2xl border border-[#e4c15a] bg-[#102818]/80 px-6 py-4">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-[#e4c15a] uppercase">
              Starting investment
            </p>
            <p className="mt-1 text-3xl font-bold text-[#e4c15a] sm:text-4xl">
              ₹1,21,000{" "}
              <span className="text-sm font-semibold text-white">per person</span>
            </p>
            <p className="mt-1 text-xs text-white/75">
              on double sharing • +GST +TCS as applicable
            </p>
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#3dce6e] px-5 py-3 text-sm font-semibold text-[#102818]"
            >
              <WhatsAppIcon /> Book via WhatsApp
            </a>
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-[#e4c15a] px-5 py-3 text-sm font-semibold text-[#e4c15a]"
            >
              ☎ Call {phoneLabel}
            </a>
          </div>
        </div>
      </section>

      <section className="px-5 py-8">
        <div className="mx-auto w-full max-w-5xl rounded-[28px] border border-[#e4c15a] bg-[#163024] px-5 py-8 text-center text-[#f7f3ea] sm:px-8">
          <h2 className={`${playfair.className} text-2xl text-[#e4c15a] sm:text-3xl`}>
            Upcoming 2027 Departures
          </h2>
          <p className="mt-2 text-sm text-white/80">
            Secure your spot on our exclusive hosted wildlife departures.
          </p>
          <div className="mx-auto mt-6 grid max-w-3xl gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-[#fbf6ee] px-4 py-4 text-[#163024]">
              <p className="text-base font-bold">Girls Only Trip</p>
              <p className="mt-1 text-sm font-semibold">5–9 February 2027</p>
              <p className="mx-auto mt-3 inline-flex rounded-full bg-[#163024] px-3 py-1 text-[11px] font-semibold text-[#e4c15a]">
                Limited: Only 6–8 girls
              </p>
            </div>
            <div className="rounded-2xl bg-[#fbf6ee] px-4 py-4 text-[#163024]">
              <p className="text-base font-bold">Couples / Mixed Group</p>
              <p className="mt-1 text-sm font-semibold">10–14 February 2027</p>
              <p className="mx-auto mt-3 inline-flex rounded-full bg-[#163024] px-3 py-1 text-[11px] font-semibold text-[#e4c15a]">
                Limited: Group size max 8–10 people
              </p>
            </div>
          </div>
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#3dce6e] px-5 py-2.5 text-sm font-semibold text-[#102818]"
          >
            <WhatsAppIcon /> Reserve via WhatsApp
          </a>
        </div>
      </section>

      <section className="px-5 pb-10">
        <SectionLabel tone="dark">Your 5-Day Itinerary</SectionLabel>
        <ol className="mx-auto mt-8 w-full max-w-6xl space-y-2 rounded-[28px] bg-[#fbf6ee] px-4 py-6 shadow-sm sm:px-8">
          {days.map((day) => (
            <li
              key={day.day}
              className="grid items-center gap-4 border-b border-[#e7d3b4] py-5 last:border-b-0 md:grid-cols-[auto_1fr_220px]"
            >
              <div className="grid size-14 place-items-center rounded-2xl bg-[#163024] text-center text-[#e4c15a]">
                <span className="text-[10px] font-bold tracking-wide uppercase">
                  {day.day.split(" ")[0]}
                </span>
                <span className="text-base leading-none font-bold">
                  {day.day.split(" ")[1]}
                </span>
                <span
                  className="mt-1 size-1.5 rounded-full bg-[#c41230]"
                  aria-hidden="true"
                />
              </div>
              <div>
                <h2 className="text-base font-bold sm:text-lg">{day.title}</h2>
                <p className="mt-1.5 text-xs leading-relaxed text-[#3d5346] sm:text-sm">
                  {day.body}
                </p>
                <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#f3e6cf] px-3 py-1 text-xs font-semibold">
                  {day.stayIcon === "bed" ? "🛏️" : "🍽️"} {day.stay}
                </p>
              </div>
              <img
                src={publicPath(day.image)}
                alt={day.imageAlt}
                className="h-24 w-full rounded-2xl object-cover object-center md:h-28"
              />
            </li>
          ))}
        </ol>
      </section>

      <section className="px-5 pb-14">
        <SectionLabel>Handpicked 4-Star Comfort</SectionLabel>
        <ul className="mx-auto mt-8 grid w-full max-w-6xl gap-4 md:grid-cols-3">
          {lodges.map((lodge) => (
            <li
              key={lodge.name}
              className="overflow-hidden rounded-[24px] bg-[#fbf6ee] text-center shadow-sm"
            >
              <div className="px-5 pt-6">
                <p className="tracking-[0.3em] text-[#c4a24a]" aria-hidden="true">
                  ★★★★
                </p>
                <h2 className="mt-1 text-lg font-bold">{lodge.name}</h2>
                <p className="mx-auto mt-3 inline-flex rounded-full bg-[#163024] px-3 py-1 text-[10px] font-semibold tracking-[0.12em] text-[#f7f3ea] uppercase">
                  {lodge.meta}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-[#3d5346] sm:text-sm">
                  {lodge.body}
                </p>
              </div>
              <img
                src={publicPath(lodge.image)}
                alt={lodge.imageAlt}
                className={`mt-4 h-44 w-full object-cover ${lodge.fit}`}
              />
            </li>
          ))}
        </ul>
      </section>

      <section className="px-5 pb-12">
        <SectionLabel tone="dark">Inclusions & Exclusions</SectionLabel>
        <div className="mx-auto mt-8 grid w-full max-w-6xl gap-4 md:grid-cols-2">
          <article className="rounded-[24px] bg-[#fbf6ee] p-6 shadow-sm">
            <h2 className="flex items-center gap-2 text-base font-bold text-[#1f7a45]">
              <span aria-hidden="true">✓</span> What&apos;s Included
            </h2>
            <ul className="mt-3 space-y-2.5 text-xs sm:text-sm">
              {included.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 border-t border-[#eadcc4] pt-3 first:border-t-0 first:pt-0"
                >
                  <span className="text-[#1f7a45]" aria-hidden="true">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-[24px] bg-[#fbf6ee] p-6 shadow-sm">
            <h2 className="flex items-center gap-2 text-base font-bold text-[#b4332a]">
              <span aria-hidden="true">✕</span> What&apos;s Not Included
            </h2>
            <ul className="mt-3 space-y-2.5 text-xs sm:text-sm">
              {excluded.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 border-t border-[#eadcc4] pt-3 first:border-t-0 first:pt-0"
                >
                  <span className="text-[#b4332a]" aria-hidden="true">
                    ✕
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="px-5 pb-12">
        <SectionLabel>Why Travel With Us</SectionLabel>
        <ul className="mx-auto mt-6 grid w-full max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {reasons.map((reason) => (
            <li
              key={reason.title}
              className="rounded-[22px] bg-[#fbf6ee] px-4 py-5 text-center shadow-sm"
            >
              <span className="text-2xl" aria-hidden="true">
                {reason.icon}
              </span>
              <h2 className="mt-2 text-sm font-bold">{reason.title}</h2>
              <p className="mt-1.5 text-xs leading-relaxed text-[#3d5346]">
                {reason.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <footer className="border-t border-[#e4c15a] bg-[#102818] px-5 py-10 text-center text-[#f7f3ea]">
        <p
          className={`${playfair.className} text-2xl text-[#e4c15a] italic sm:text-3xl`}
        >
          Fly From Meetings
        </p>
        <p className="mt-2 text-xs text-white/75 sm:text-sm">
          Travel Beyond Meetings • Crafted with care for unforgettable wildlife
          journeys.
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-[#7eb6ff]">
          <a href="https://www.flyfrommeetings.com">🌐 www.flyfrommeetings.com</a>
          <a href="https://www.instagram.com/flyfrommeetings">📷 @flyfrommeetings</a>
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`tel:${phone}`}
            className="inline-flex rounded-full border border-[#e4c15a] px-4 py-2 text-sm font-semibold text-[#e4c15a]"
          >
            ☎ {phoneLabel}
          </a>
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#e4c15a] px-4 py-2 text-sm font-semibold text-[#e4c15a]"
          >
            <WhatsAppIcon /> Chat on WhatsApp
          </a>
        </div>
        <p className="mt-6 text-[11px] text-white/55">
          © 2027 Fly From Meetings. All rights reserved.
        </p>
        <p className="mx-auto mt-2 max-w-xl text-[10px] leading-relaxed text-white/40">
          Wildlife photographs via Wikimedia Commons and Unsplash, including Paul Mannix
          and Byrdyak.
        </p>
      </footer>
    </div>
  );
}

function SectionLabel({
  children,
  tone = "gold",
}: {
  children: string;
  tone?: "gold" | "dark";
}) {
  const toneClass =
    tone === "dark" ? "bg-[#163024] text-[#f7f3ea]" : "bg-[#e4c15a] text-[#163024]";
  return (
    <h2
      className={`${playfair.className} mx-auto w-fit rounded-full px-6 py-1.5 text-center text-xl italic ${toneClass}`}
    >
      {children}
    </h2>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.4a10 10 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2Zm5.76 14.15c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.81-.11-.42-.14-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.16-1.54-1.16-2.94s.73-2.08 1-2.37c.24-.27.64-.4 1.02-.4.13 0 .24 0 .35.01.3.01.46-.1.72.55.27.68.92 2.35 1 2.52.08.17.14.37.03.58-.1.22-.16.35-.31.54-.16.19-.33.42-.47.56-.16.16-.32.33-.14.64.19.31.83 1.37 1.78 2.22 1.23 1.09 2.26 1.43 2.58 1.59.32.16.5.13.69-.08.19-.21.78-.9.99-1.21.21-.31.42-.26.7-.15.28.1 1.79.84 2.1.99.3.16.51.23.58.36.08.13.08.76-.16 1.44Z"
      />
    </svg>
  );
}
