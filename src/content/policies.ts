export type PolicyTable = {
  headers: [string, string, string];
  rows: { when: string; amount: string; schedule: string }[];
};

export type PolicyFacts = { label: string; value: string }[];

export type PolicySection = {
  title: string;
  paragraphs?: string[];
  list?: string[];
  table?: PolicyTable;
  facts?: PolicyFacts;
};

export type PolicyDocument = {
  eyebrow: string;
  title: string;
  description: string;
  intro?: string;
  updated?: string;
  sections: PolicySection[];
};

export const privacyPolicy: PolicyDocument = {
  eyebrow: "Policies",
  title: "Privacy Policy",
  description:
    "How Fly From Meetings collects, uses, and protects personal information.",
  intro:
    "At Fly From Meetings, we respect your privacy and are committed to protecting your personal information.",
  updated: "Last updated: October 2026",
  sections: [
    {
      title: "Information We Collect",
      paragraphs: [
        "We may collect your name, contact details, travel preferences, passport information and booking details through WhatsApp, our website or consultation forms.",
      ],
    },
    {
      title: "How We Use Your Information",
      paragraphs: [
        "Your information is used to respond to enquiries, arrange consultations, manage travel bookings and provide trip-related updates.",
      ],
    },
    {
      title: "Information Sharing",
      paragraphs: [
        "We share necessary details with trusted hotels, travel partners and service providers only when required for your travel arrangements. We do not sell your personal information.",
      ],
    },
    {
      title: "Data Protection & Retention",
      paragraphs: [
        "We take reasonable steps to protect your information and retain it only as long as necessary for our services or record-keeping requirements.",
      ],
    },
    {
      title: "Marketing Communication",
      paragraphs: [
        "We may share upcoming trip announcements with your consent. You can opt out of promotional messages at any time.",
      ],
    },
    {
      title: "Your Privacy Rights",
      paragraphs: [
        "You may contact us through our official WhatsApp or email to request access to, correction of or deletion of your personal information, subject to applicable retention requirements.",
      ],
    },
  ],
};

export const termsPolicy: PolicyDocument = {
  eyebrow: "Policies",
  title: "Terms & Conditions",
  description: "Booking terms for Fly From Meetings trips.",
  sections: [
    {
      title: "Booking Confirmation",
      paragraphs: [
        "A booking is confirmed once the required advance payment is received and a booking confirmation is issued.",
      ],
    },
    {
      title: "Package Inclusions",
      paragraphs: [
        "Only services specifically mentioned in the confirmed itinerary are included in the package.",
      ],
    },
    {
      title: "Travel Documents",
      paragraphs: [
        "Travellers are responsible for obtaining valid passports, visas or eTAs, and any other required travel documents before departure.",
      ],
    },
    {
      title: "Flights",
      paragraphs: [
        "International and domestic flights are excluded unless specifically mentioned in the package.",
      ],
    },
    {
      title: "Accommodation",
      paragraphs: [
        "Hotels may be replaced with similar-category properties if required due to emergencies, operational changes, or unforeseen circumstances.",
      ],
    },
    {
      title: "Itinerary Changes",
      paragraphs: [
        "Activity timings, routes, and travel schedules may change due to weather, safety, local conditions, or operational needs.",
      ],
    },
    {
      title: "Travel Insurance",
      paragraphs: [
        "Travel insurance is mandatory for all travellers. Please arrange suitable coverage before departure.",
      ],
    },
    {
      title: "Personal Expenses",
      paragraphs: [
        "Shopping, optional activities, extra meals, and other personal expenses are excluded unless specifically mentioned.",
      ],
    },
    {
      title: "Traveller Responsibilities",
      paragraphs: [
        "Guests must follow local rules, safety instructions, and group schedules, and behave respectfully towards fellow travellers and local communities.",
      ],
    },
    {
      title: "Payments and Cancellations",
      paragraphs: [
        "All bookings follow the payment and cancellation conditions shared before booking confirmation.",
      ],
    },
  ],
};

export const cancellationPolicy: PolicyDocument = {
  eyebrow: "Policies",
  title: "Cancellation Policy",
  description: "How cancellations and refunds work for Fly From Meetings bookings.",
  sections: [
    {
      title: "Booking Deposit",
      paragraphs: [
        "For bookings made more than 45 days before departure, the Rs. 10,000 booking deposit is refundable if cancellation is requested within 7 days of payment. For bookings made 45 days or less before departure, the deposit is non-refundable.",
      ],
    },
    {
      title: "Instalment Payments",
      paragraphs: [
        "Once paid, instalments are non-refundable. Trip-specific cancellation conditions shared before booking will apply to that tour.",
      ],
    },
    {
      title: "Unused Services",
      paragraphs: [
        "No refund is provided for no-shows, missed activities, unused accommodation or meals, or voluntarily shortened trips.",
      ],
    },
    {
      title: "Cancellation by Fly From Meetings",
      paragraphs: [
        "We may cancel or modify a trip due to operational concerns, safety or insufficient group participation. If we cancel for these reasons, travellers may choose a full refund of package payments collected by us or an alternative trip of the same value, subject to availability.",
      ],
    },
    {
      title: "Unforeseen Circumstances",
      paragraphs: [
        "Natural disasters, government restrictions or events beyond our control may require a trip to be changed, rescheduled or cancelled. Refunds, where applicable, depend on amounts recoverable from our travel partners.",
      ],
    },
    {
      title: "Visa Assistance & Rejection",
      paragraphs: [
        "We may assist with visa applications and documentation. Visa approval is decided solely by the relevant embassy or immigration authority and cannot be guaranteed. If a visa or travel authorization is rejected, the booking is treated as a traveller-initiated cancellation. Eligible booking-deposit refunds still apply, but non-refundable instalments will not be refunded. Visa application fees already paid are non-refundable.",
      ],
    },
    {
      title: "Trip-Specific Conditions",
      paragraphs: [
        "Cancellation terms stated in the itinerary or booking confirmation for a particular tour will apply to that tour, provided they were shared before booking.",
      ],
    },
    {
      title: "Cancellation Requests & Refunds",
      paragraphs: [
        "Send cancellation requests with booking details to our official WhatsApp or email. Eligible refunds will be processed within 7 working days of receiving the request.",
      ],
    },
  ],
};

export const paymentPolicy: PolicyDocument = {
  eyebrow: "Policies",
  title: "Payment Terms",
  description:
    "Booking amounts, payment schedule, and bank details for Fly From Meetings.",
  intro:
    "A booking amount of Rs. 10,000 per person secures your seat and is adjusted against the package price.",
  sections: [
    {
      title: "Payment Schedule",
      table: {
        headers: ["Booking made", "Booking amount", "Payment schedule"],
        rows: [
          {
            when: "More than 45 days before departure",
            amount: "Rs. 10,000. Refundable within 7 days.",
            schedule:
              "Complete 40% of the base price within 10 days of booking. Remaining 60% plus taxes at least 30 days before departure.",
          },
          {
            when: "20 to 45 days before departure",
            amount: "Rs. 10,000. Non-refundable.",
            schedule:
              "Complete 40% of the base price within 7 days of booking or by 20 days before departure, whichever is earlier. Remaining 60% plus taxes at least 20 days before departure.",
          },
          {
            when: "Less than 20 days before departure",
            amount: "—",
            schedule: "100% payment required at the time of booking.",
          },
        ],
      },
    },
    {
      title: "Important Points",
      list: [
        "The Rs. 10,000 booking amount is included in the first 40% instalment, not charged separately.",
        "Both instalments are non-refundable once paid.",
        "Final payment includes the remaining base price, plus 5% GST and 2% TCS. TCS can be claimed through your Income Tax Return (ITR).",
        "For bookings made exactly 20 days before departure, full payment is due at booking.",
      ],
    },
    {
      title: "Bank Details",
      facts: [
        { label: "Account holder", value: "FLY FROM MEETINGS" },
        { label: "Bank", value: "IDFC FIRST Bank" },
        { label: "Account number", value: "51101199217" },
        { label: "IFSC", value: "IDFB0021005" },
      ],
      paragraphs: [
        "Please share your payment screenshot or transaction reference on our official WhatsApp after payment.",
      ],
    },
  ],
};
