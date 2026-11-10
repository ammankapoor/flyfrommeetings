"use client";

import { useState } from "react";
import { publicPath } from "@/lib/site-url";

type Group = "all" | "girls" | "couples";

type Trip = {
  id: string;
  group: Exclude<Group, "all">;
  badge: string;
  note?: string;
  title: string;
  duration: string;
  dates?: string;
  stay: string;
  price: string;
  enquire: string;
  image: string;
  imageAlt: string;
};

const trips: Trip[] = [
  {
    id: "maasai-mara-girls",
    group: "girls" as const,
    badge: "All Girls Group",
    title: "Maasai Mara",
    duration: "5 Days | 4 Nights",
    dates: "5-9th Feb",
    stay: "All Girls",
    price: "1,25,000",
    enquire:
      "https://wa.me/919990766054?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20the%20Maasai%20Mara%20All%20Girls%20trip.",
    image: publicPath("/media/trips/maasai-mara-girls.jpg"),
    imageAlt: "Women on an all-girls safari beside an open vehicle",
  },
  {
    id: "maasai-mara-couples",
    group: "couples" as const,
    badge: "Couples Group",
    note: "Valentines special",
    title: "Maasai Mara",
    duration: "5 Days | 4 Nights",
    dates: "10-14th Feb",
    stay: "Couples Only",
    price: "1,21,000",
    enquire:
      "https://wa.me/919990766054?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20the%20Maasai%20Mara%20Couples%20trip.",
    image: publicPath("/media/trips/maasai-mara-couples.jpg"),
    imageAlt: "Desert dinner under a canopy beside a close-up of a lion",
  },
];

const filters: { id: Group; label: string }[] = [
  { id: "all", label: "All Drops" },
  { id: "girls", label: "Girls Only" },
  { id: "couples", label: "Couples" },
];

function FlameIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-3.5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M8 1.2s2.6 2.4 2.6 4.6c0 .7-.2 1.2-.5 1.6.8-.4 1.5-1.3 1.5-1.3.4 1 .6 1.8.6 2.6 0 2.8-2.2 4.8-4.7 4.8S3.2 11.5 3.2 8.7c0-1.8 1.1-3.4 2.2-4.6.2 1 .8 1.8 1.6 2.3C6.4 4.8 6.6 3.2 8 1.2Z"
      />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-3.5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M5.2 7.2a2.1 2.1 0 1 0 0-4.2 2.1 2.1 0 0 0 0 4.2ZM11 6.6a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4ZM1.8 12.4c.3-1.8 1.8-3 3.4-3s3.1 1.2 3.4 3v.6H1.8v-.6Zm6.2-.2c.1-.3.3-.7.6-1 .6-.7 1.5-1.1 2.4-1.1 1.3 0 2.4.9 2.7 2.1v.6H8v-.6Z"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
      <rect x="4" y="5" width="16" height="15" rx="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 3.5v3M16 3.5v3M4 9.5h16" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function BedIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
      <path
        d="M4 18V8m0 6h16v4M8 14v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function GroupDrops() {
  const [group, setGroup] = useState<Group>("all");
  const visible = trips.filter((trip) => group === "all" || trip.group === group);

  return (
    <section className="bg-[#0c2744] px-6 pb-6 text-[#f3eee4]">
      <div className="mx-auto w-full max-w-5xl">
        <div className="flex flex-wrap gap-3" role="group" aria-label="Trip groups">
          {filters.map((filter) => {
            const active = group === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                aria-pressed={active}
                onClick={() => setGroup(filter.id)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
                  active
                    ? "bg-[#e0b85c] text-[#10243a]"
                    : "border border-[#e0b85c]/35 bg-[#123352] text-[#f3eee4]/85"
                }`}
              >
                {filter.id === "all" ? <FlameIcon /> : <PeopleIcon />}
                {filter.label}
                {filter.id === "all" ? (
                  <span
                    className={`grid size-5 place-items-center rounded-full text-[11px] ${
                      active ? "bg-[#10243a] text-[#e0b85c]" : "bg-[#e0b85c]/15 text-[#e0b85c]"
                    }`}
                  >
                    {trips.length}
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {visible.map((trip) => (
            <article
              key={trip.id}
              className="overflow-hidden rounded-[28px] border border-[#e0b85c]/25 bg-[#123352]"
            >
              <div className="relative h-72 bg-[#0c2744]">
                <img
                  src={trip.image}
                  alt={trip.imageAlt}
                  className={`h-full w-full ${trip.id === "maasai-mara-couples" ? "object-contain" : "object-cover"}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c2744]/90 via-[#0c2744]/10 to-[#0c2744]/25" />
                <span
                  className={`absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold ${
                    trip.group === "girls"
                      ? "bg-[#e0b85c] text-[#10243a]"
                      : "bg-[#f3eee4] text-[#10243a]"
                  }`}
                >
                  {trip.badge}
                </span>
                {trip.note ? (
                  <span className="absolute top-4 right-4 rounded-full bg-[#c41230] px-3 py-1 text-xs font-semibold text-white">
                    {trip.note}
                  </span>
                ) : null}
                <h2 className="absolute right-5 bottom-4 left-5 text-4xl font-bold tracking-tight">
                  {trip.title}
                </h2>
              </div>
              <div className="space-y-4 p-4 sm:p-5">
                {trip.dates ? (
                  <div className="rounded-2xl bg-[#0c2744] px-3 py-3">
                    <p className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.16em] text-[#e0b85c] uppercase">
                      <CalendarIcon />
                      Dates
                    </p>
                    <p className="mt-2 text-sm font-semibold">{trip.dates}</p>
                  </div>
                ) : null}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-[#0c2744] px-3 py-3">
                    <p className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.16em] text-[#e0b85c] uppercase">
                      <CalendarIcon />
                      Duration
                    </p>
                    <p className="mt-2 text-sm font-semibold">{trip.duration}</p>
                  </div>
                  <div className="rounded-2xl bg-[#0c2744] px-3 py-3">
                    <p className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.16em] text-[#e0b85c] uppercase">
                      <BedIcon />
                      Stay type
                    </p>
                    <p className="mt-2 text-sm font-semibold">{trip.stay}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 border-t border-[#e0b85c]/20 pt-4 sm:flex-row sm:items-center sm:justify-between">
                  <p>
                    <span className="block text-[10px] font-semibold tracking-[0.16em] text-[#e0b85c] uppercase">
                      Per person
                    </span>
                    <span className="mt-1 block text-3xl font-bold tracking-tight">₹{trip.price}</span>
                  </p>
                  <a
                    href={trip.enquire}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-[#e0b85c] px-4 py-3 text-sm font-semibold text-[#10243a]"
                  >
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
