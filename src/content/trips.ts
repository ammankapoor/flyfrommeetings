export type Trip = {
  slug: string;
  title: string;
  summary: string;
  region: string;
  duration: string;
  season: string;
  pace: string;
  priceLabel: string;
  groupLabel: string;
  days: { label: string; detail: string }[];
};

/**
 * Sample records for layout and routing only.
 * None of these are confirmed departures, prices, or destinations.
 */
export const trips: Trip[] = [
  {
    slug: "sample-coastal-pause",
    title: "[Placeholder] Sample coastal pause",
    summary:
      "Sample card for a short trip. Replace the region, length, season, and outline with a real departure.",
    region: "[Placeholder region]",
    duration: "[Placeholder length]",
    season: "[Placeholder season]",
    pace: "[Placeholder pace]",
    priceLabel: "[Price to be confirmed]",
    groupLabel: "[Group size to be confirmed]",
    days: [
      {
        label: "Day 1",
        detail: "[Placeholder] Arrival outline. Replace with a confirmed plan.",
      },
      {
        label: "Day 2",
        detail: "[Placeholder] Middle day. Replace with a confirmed plan.",
      },
      {
        label: "Day 3",
        detail: "[Placeholder] Departure outline. Replace with a confirmed plan.",
      },
    ],
  },
  {
    slug: "sample-city-interval",
    title: "[Placeholder] Sample city interval",
    summary:
      "Sample card for a city stay. Do not publish this title, route, or description as an offered trip.",
    region: "[Placeholder region]",
    duration: "[Placeholder length]",
    season: "[Placeholder season]",
    pace: "[Placeholder pace]",
    priceLabel: "[Price to be confirmed]",
    groupLabel: "[Group size to be confirmed]",
    days: [
      {
        label: "Day 1",
        detail: "[Placeholder] First day outline.",
      },
      {
        label: "Day 2",
        detail: "[Placeholder] Second day outline.",
      },
    ],
  },
  {
    slug: "sample-slow-route",
    title: "[Placeholder] Sample slow route",
    summary:
      "Sample card for a longer route. Inventory, availability, and supplier names are not connected.",
    region: "[Placeholder region]",
    duration: "[Placeholder length]",
    season: "[Placeholder season]",
    pace: "[Placeholder pace]",
    priceLabel: "[Price to be confirmed]",
    groupLabel: "[Group size to be confirmed]",
    days: [
      {
        label: "Days 1–2",
        detail: "[Placeholder] Opening stretch.",
      },
      {
        label: "Days 3–4",
        detail: "[Placeholder] Middle stretch.",
      },
      {
        label: "Final day",
        detail: "[Placeholder] Return stretch.",
      },
    ],
  },
];

export function getTripBySlug(slug: string) {
  return trips.find((trip) => trip.slug === slug);
}
