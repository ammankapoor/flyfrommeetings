export const site = {
  name: "flyFromMeetings",
  legalName: "[Legal entity name]",
  description:
    "Draft description for a travel planning studio. Replace this with confirmed positioning before launch.",
  email: "Travelwithmeenusumit@gmail.com",
  instagram: "https://www.instagram.com/flyfrommeetings",
  phone: "[Placeholder phone]",
  location: "[Placeholder location]",
  contentRevision: "2026-11-01",
} as const;

export const policyLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/cancellation", label: "Cancellation Policy" },
  { href: "/payment-policy", label: "Payment Policy" },
] as const;

export function isFilmPath(pathname: string) {
  return (
    pathname === "/" ||
    pathname === "/trips" ||
    policyLinks.some((item) => item.href === pathname)
  );
}

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/#trips", label: "Trips" },
  { href: "/#about", label: "About Us" },
  { href: "/#contact", label: "Contact Us" },
] as const;

export type NavHref = (typeof navItems)[number]["href"];

export function allowIndexing() {
  return process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";
}
