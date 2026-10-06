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
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "How it works", href: "/#process" },
  { label: "Deadlines", href: "/#deadlines" },
  { label: "FAQ", href: "/faq" },
];

export type Service = {
  id: string;
  slug: string;
  title: string;
  agency: string;
  summary: string;
  items: string[];
};

export const services: Service[] = [
  {
    id: "fda",
    slug: "fda-compliance",
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
    slug: "customs-import",
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
    slug: "trademark",
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
    slug: "logistics",
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

export type Industry = {
  id: string;
  name: string;
  note: string;
  intro: string;
  rules: string[];
  services: string[];
};

export const industries: Industry[] = [
  {
    id: "food",
    name: "Food & Beverage",
    note: "Facility registration, Prior Notice, FSVP, labeling",
    intro:
      "Food is one of the most closely watched import categories. Every shipment needs Prior Notice, every manufacturing facility must be registered, and the US importer has to verify its foreign suppliers.",
    rules: [
      "Food facility registration with biennial renewal (21 CFR Part 1, Subpart H)",
      "Prior Notice before each shipment arrives (21 CFR Part 1, Subpart I)",
      "Foreign Supplier Verification Program for the US importer (21 CFR Part 1, Subpart L)",
      "Preventive controls and a written food safety plan (21 CFR Part 117)",
      "Labeling, Nutrition Facts and the nine major allergens (21 CFR Part 101)",
      "FCE registration and process filing for acidified and low-acid canned foods (21 CFR Parts 108, 113, 114)",
      "Food Traceability Rule records for listed foods, with compliance required by July 20, 2028 (21 CFR Part 1, Subpart S)",
    ],
    services: ["fda-compliance", "customs-import", "logistics"],
  },
  {
    id: "supplements",
    name: "Dietary Supplements",
    note: "Facility registration and supplement labeling (21 CFR 101.36)",
    intro:
      "Dietary supplements are regulated as food, with extra rules on labeling, claims, manufacturing practices and new ingredients. FDA does not approve supplements before they are sold, so the responsibility for compliance sits with you.",
    rules: [
      "Food facility registration and Prior Notice, as for other foods",
      "Supplement Facts panel and label content (21 CFR 101.36)",
      "Current good manufacturing practice for supplements (21 CFR Part 111)",
      "Notice to FDA within 30 days of marketing a structure/function claim, plus the required disclaimer (21 CFR 101.93)",
      "New dietary ingredient notification at least 75 days before marketing, where required (21 CFR 190.6)",
      "Serious adverse event reporting to FDA within 15 business days (FD&C Act sec. 761)",
    ],
    services: ["fda-compliance", "customs-import", "trademark"],
  },
  {
    id: "cosmetics",
    name: "Cosmetics",
    note: "MoCRA facility registration and product listing",
    intro:
      "The Modernization of Cosmetics Regulation Act of 2022 (MoCRA) brought the biggest change to US cosmetics law in decades, adding registration, listing, adverse event reporting and safety substantiation requirements.",
    rules: [
      "Facility registration, renewed every two years, and annual product listing updates (FD&C Act sec. 607)",
      "A US address, phone number or electronic contact on the label for adverse event reports",
      "Serious adverse event reporting to FDA within 15 business days",
      "Records showing adequate substantiation of product safety",
      "Ingredient labeling and warning statements (21 CFR Parts 701 and 740)",
      "Only FDA-approved color additives, used as permitted (21 CFR Parts 73, 74 and 82)",
    ],
    services: ["fda-compliance", "customs-import", "trademark"],
  },
  {
    id: "devices",
    name: "Medical Devices",
    note: "Establishment registration and device listing",
    intro:
      "Device requirements scale with risk. Most Class I devices are exempt from premarket review, most Class II devices need 510(k) clearance, and Class III devices generally need premarket approval.",
    rules: [
      "Annual establishment registration with user fee, and device listing (21 CFR Part 807)",
      "A US Agent for foreign establishments (21 CFR 807.40)",
      "Premarket notification (510(k)), De Novo classification or premarket approval (PMA), depending on the device",
      "Quality Management System Regulation, aligned with ISO 13485 since February 2, 2026 (21 CFR Part 820)",
      "Unique Device Identification and device labeling (21 CFR Parts 801 and 830)",
      "Medical device reporting of deaths, serious injuries and malfunctions (21 CFR Part 803)",
    ],
    services: ["fda-compliance", "customs-import", "logistics"],
  },
  {
    id: "drugs",
    name: "Drugs & OTC",
    note: "Establishment registration and NDC listing",
    intro:
      "Prescription and over-the-counter drugs need registered establishments and listed products. OTC drugs must also conform to an OTC monograph or have an approved application before they can be sold.",
    rules: [
      "Establishment registration and NDC listing in SPL format (21 CFR Part 207)",
      "A US Agent and identified importers for foreign establishments (21 CFR 207.69)",
      "Conformity with an OTC monograph or an approved NDA or ANDA (FD&C Act secs. 505 and 505G)",
      "Drug Facts labeling for OTC products (21 CFR 201.66)",
      "Current good manufacturing practice (21 CFR Parts 210 and 211)",
      "Annual OMUFA facility fees for OTC monograph drug facilities",
    ],
    services: ["fda-compliance", "customs-import", "logistics"],
  },
  {
    id: "consumer",
    name: "Consumer Goods",
    note: "Customs entry, marking and trademark protection",
    intro:
      "Products outside FDA's scope still have to clear CBP, carry the right origin marking and, depending on the product, meet the rules of agencies such as the Consumer Product Safety Commission or the Federal Communications Commission.",
    rules: [
      "HTSUS classification, duties and any additional tariffs",
      "Country-of-origin marking (19 CFR Part 134)",
      "Importer Security Filing for ocean shipments (19 CFR Part 149)",
      "Other agency requirements, such as CPSC certificates for consumer and children's products",
      "Federal trademark registration and CBP recordation against counterfeits (19 CFR Part 133)",
    ],
    services: ["customs-import", "trademark", "logistics"],
  },
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
