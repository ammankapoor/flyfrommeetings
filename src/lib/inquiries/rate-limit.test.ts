import { describe, expect, it } from "vitest";
import { createRateLimiter } from "./rate-limit";

describe("createRateLimiter", () => {
  it("allows a burst up to the limit and then blocks until the window resets", () => {
    const take = createRateLimiter(2, 1_000);
    expect(take("ada", 0).allowed).toBe(true);
    expect(take("ada", 10).allowed).toBe(true);
    expect(take("ada", 20).allowed).toBe(false);
    expect(take("ada", 1_000).allowed).toBe(true);
  });

  it("tracks keys separately", () => {
    const take = createRateLimiter(1, 1_000);
    expect(take("a", 0).allowed).toBe(true);
    expect(take("b", 0).allowed).toBe(true);
    expect(take("a", 1).allowed).toBe(false);
  });
});
