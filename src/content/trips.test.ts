import { describe, expect, it } from "vitest";
import { getTripBySlug, trips } from "./trips";

describe("trips", () => {
  it("keeps unique slugs that are safe in URLs", () => {
    const slugs = trips.map((trip) => trip.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) {
      expect(slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    }
  });

  it("finds a sample trip and ignores unknown slugs", () => {
    expect(getTripBySlug("sample-city-interval")?.title).toContain("[Placeholder]");
    expect(getTripBySlug("../admin")).toBeUndefined();
  });
});
