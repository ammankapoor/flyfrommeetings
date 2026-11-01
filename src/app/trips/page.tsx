import type { Metadata } from "next";
import { UpcomingTrips } from "@/components/trips/upcoming-trips";

export const metadata: Metadata = {
  title: "Upcoming Group Trips",
  description: "Upcoming group trips from flyFromMeetings.",
};

export default function TripsPage() {
  return <UpcomingTrips padForHeader />;
}
