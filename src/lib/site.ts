// Central site content. Contact details are placeholders until the business
// email and phone number are confirmed.
export const site = {
  name: "FDA Facilitator",
  tagline: "US market entry for FDA-regulated products",
  description:
    "FDA Facilitator helps companies bring FDA-regulated products into the United States: FDA registration and US Agent services, customs entry coordination, USPTO trademark filings, and logistics.",
  email: "info@fdafacilitator.com",
};

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "How it works", href: "#process" },
  { label: "Deadlines", href: "#deadlines" },
  { label: "FAQ", href: "#faq" },
];

export type Service = {
  id: string;
  title: string;
  agency: string;
  summary: string;
  items: string[];
};

export const services: Service[] = [
  {
    id: "fda",
    title: "FDA Compliance",
    agency: "U.S. Food and Drug Administration",
    summary:
      "Registration, listing and US Agent representation so your products can be imported and sold in the United States.",
    items: [
      "Food facility registration and biennial renewal (21 CFR Part 1, Subpart H)",
      "US Agent for foreign facilities (21 CFR 1.227, 207.69, 807.40)",
      "Drug establishment registration and NDC listing (21 CFR Part 207)",
      "Medical device establishment registration and listing (21 CFR Part 807)",
      "Cosmetic facility registration and product listing under MoCRA",
      "Food labeling review (21 CFR Part 101), FCE/SID filings for acidified and low-acid canned foods",
    ],
  },
  {
    id: "customs",
    title: "Customs & Import",
    agency: "U.S. Customs and Border Protection",
    summary:
      "We prepare your shipments for CBP and FDA admissibility and coordinate entry with licensed US customs brokers.",
    items: [
      "FDA Prior Notice for imported food (21 CFR Part 1, Subpart I)",
      "Foreign Supplier Verification Program (FSVP) importer support",
      "Importer Security Filing (ISF 10+2) for ocean cargo (19 CFR Part 149)",
      "HTSUS classification and country-of-origin marking (19 CFR Part 134)",
      "Customs bond and importer of record setup",
      "Help with FDA holds, detentions and Import Alerts",
    ],
  },
  {
    id: "trademark",
    title: "Trademark",
    agency: "U.S. Patent and Trademark Office",
    summary:
      "Protect your brand in the US market. Filings are handled with US-licensed trademark attorneys, as USPTO rules require for foreign-domiciled applicants.",
    items: [
      "Clearance searches before you launch",
      "Federal trademark applications with the USPTO",
      "Office action response coordination",
      "Section 8 declarations of use (between years 5 and 6)",
      "Section 8 and 9 renewals every 10 years",
      "Portfolio and deadline monitoring",
    ],
  },
  {
    id: "logistics",
    title: "Logistics",
    agency: "Door-to-door freight",
    summary:
      "Air and ocean freight planned around FDA and CBP requirements, so documentation is ready before cargo arrives.",
    items: [
      "Air, ocean (FCL/LCL) and ground freight",
      "Freight forwarding to all major US ports of entry",
      "Temperature-controlled cargo for food and pharma",
      "Warehousing and distribution in the US",
      "Shipment documentation matched to FDA and CBP filings",
      "Shipment tracking from origin to final delivery",
    ],
  },
];

export const industries = [
  { name: "Food & Beverage", note: "Facility registration, Prior Notice, FSVP, labeling" },
  { name: "Dietary Supplements", note: "Facility registration and supplement labeling (21 CFR 101.36)" },
  { name: "Cosmetics", note: "MoCRA facility registration and product listing" },
  { name: "Medical Devices", note: "Establishment registration and device listing" },
  { name: "Drugs & OTC", note: "Establishment registration and NDC listing" },
  { name: "Consumer Goods", note: "Customs entry, marking and trademark protection" },
];

export const steps = [
  {
    title: "Assessment",
    text: "We review your products, facilities and target channels and identify which FDA, CBP and USPTO requirements apply.",
  },
  {
    title: "Registration",
    text: "We file the required registrations and listings and act as your US Agent where FDA requires one.",
  },
  {
    title: "Shipment",
    text: "We prepare Prior Notice, ISF and entry documents and coordinate freight and customs clearance.",
  },
  {
    title: "Ongoing compliance",
    text: "We track renewals, listing updates and trademark maintenance so nothing lapses.",
  },
];

export const deadlines = [
  {
    title: "Food facility registration renewal",
    when: "Oct 1 to Dec 31 of every even-numbered year",
    note: "Registrations not renewed during the window are considered expired.",
  },
  {
    title: "Medical device registration",
    when: "Oct 1 to Dec 31 every year",
    note: "Annual registration requires payment of the FDA establishment user fee.",
  },
  {
    title: "Drug establishment registration",
    when: "By Dec 31 every year",
    note: "Listings must be updated in June and December when changes occur.",
  },
  {
    title: "Cosmetic product listing",
    when: "Updated annually",
    note: "Facility registrations under MoCRA are renewed every two years.",
  },
];

export const faqs = [
  {
    q: "Does FDA issue a registration certificate?",
    a: "No. FDA does not issue registration certificates and does not recognize certificates issued by private companies. After registration you receive a registration number. Be wary of anyone selling an \"FDA certificate.\"",
  },
  {
    q: "Does registration mean my product is FDA approved?",
    a: "No. Registering a facility or listing a product does not mean FDA has approved the facility or its products. Some products, such as new drugs and certain medical devices, need separate premarket approval or clearance.",
  },
  {
    q: "Why does a foreign facility need a US Agent?",
    a: "FDA requires foreign food, drug and medical device facilities to name a US Agent who lives in or has a place of business in the United States. The US Agent is FDA's point of contact for communications and emergencies.",
  },
  {
    q: "Do I need Prior Notice for every food shipment?",
    a: "Yes, for food imported or offered for import into the US, with limited exceptions. Prior Notice must be submitted before arrival, within time frames that depend on the mode of transport.",
  },
  {
    q: "Can I file a US trademark myself from outside the US?",
    a: "No. Since August 2019, USPTO rules require applicants domiciled outside the United States to be represented by an attorney licensed in the US. We coordinate the filing with US-licensed counsel.",
  },
];
