/**
 * Shape for a future booking flow.
 * No payment provider, inventory, or availability source is connected.
 * Do not treat sample trips as bookable products.
 */
export type BookingStatus = "draft" | "requested" | "confirmed" | "cancelled";

export type BookingRequest = {
  tripSlug: string;
  travelerName: string;
  status: BookingStatus;
};
