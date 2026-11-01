type Bucket = { count: number; resetAt: number };

export function createRateLimiter(limit: number, windowMs: number) {
  const buckets = new Map<string, Bucket>();

  return function take(key: string, now = Date.now()) {
    const current = buckets.get(key);
    if (!current || now >= current.resetAt) {
      buckets.set(key, { count: 1, resetAt: now + windowMs });
      return { allowed: true, retryAfterMs: 0 };
    }

    if (current.count >= limit) {
      return { allowed: false, retryAfterMs: current.resetAt - now };
    }

    current.count += 1;
    return { allowed: true, retryAfterMs: 0 };
  };
}

export const takeInquirySlot = createRateLimiter(5, 10 * 60 * 1000);
