import { describe, expect, it } from "vitest";
import { indexablePaths } from "./seo";

describe("indexablePaths", () => {
  it("includes the main pages and each sample trip", () => {
    const paths = indexablePaths();
    expect(paths).toEqual(
      expect.arrayContaining([
        "/",
        "/trips",
        "/plan",
        "/contact",
        "/trips/sample-coastal-pause",
      ]),
    );
    expect(paths.filter((path) => path.startsWith("/trips/"))).toHaveLength(3);
  });
});
