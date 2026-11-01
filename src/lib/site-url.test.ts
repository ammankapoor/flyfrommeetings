import { afterEach, describe, expect, it } from "vitest";
import { absoluteUrl, getSiteUrl } from "./site-url";

const original = process.env.NEXT_PUBLIC_SITE_URL;

afterEach(() => {
  if (original === undefined) {
    delete process.env.NEXT_PUBLIC_SITE_URL;
  } else {
    process.env.NEXT_PUBLIC_SITE_URL = original;
  }
});

describe("getSiteUrl", () => {
  it("falls back when the variable is missing or invalid", () => {
    delete process.env.NEXT_PUBLIC_SITE_URL;
    expect(getSiteUrl()).toBe("http://localhost:3000");

    process.env.NEXT_PUBLIC_SITE_URL = "not a url";
    expect(getSiteUrl()).toBe("http://localhost:3000");
  });

  it("keeps a path so project sites resolve under the repository", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://trips.example.com/flyfrommeetings/";
    expect(getSiteUrl()).toBe("https://trips.example.com/flyfrommeetings");
    expect(absoluteUrl("/trips")).toBe(
      "https://trips.example.com/flyfrommeetings/trips",
    );
  });
});
