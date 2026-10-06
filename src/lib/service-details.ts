// Detailed copy for each service page. Regulatory references point to the
// Code of Federal Regulations (CFR) or the U.S. Code so readers can verify them.

export type Offering = { title: string; text: string; ref?: string };
export type Fact = { label: string; value: string; ref?: string };
export type QA = { q: string; a: string };

export type ServiceDetail = {
  slug: string;
  title: string;
  agency: string;
  metaDescription: string;
  headline: string;
  intro: string;
  overview: string[];
  whoNeedsIt: string[];
  offerings: Offering[];
  keyFacts: Fact[];
  process: { title: string; text: string }[];
  documents: string[];
  faqs: QA[];
  related: string[];
  note?: string;
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "fda-compliance",
    title: "FDA Compliance",
    agency: "U.S. Food and Drug Administration",
    metaDescription:
      "FDA facility registration, US Agent services, drug and device listing, MoCRA cosmetic registration and US labeling review for foreign and domestic companies.",
    headline: "FDA registration, listing and US Agent services",
    intro:
      "Before food, supplements, cosmetics, drugs or medical devices can be sold in the United States, the facilities that make them usually have to be registered with FDA, and foreign facilities must name a US Agent. We handle these filings and keep them current.",
    overview: [
      "FDA rules depend on the product. A snack manufacturer, a cosmetics brand and a device maker each face a different set of registrations, listings, fees and renewal dates. We start by identifying which rules apply to your products and facilities, then file and maintain everything on FDA's electronic systems.",
      "For foreign companies we can serve as your US Agent: the US-based contact FDA uses for routine and emergency communications about your facility.",
    ],
    whoNeedsIt: [
      "Foreign manufacturers, processors, packers and warehouses shipping food or supplements to the US",
      "Cosmetic brands and contract manufacturers subject to MoCRA",
      "Drug manufacturers, repackagers and relabelers, including OTC products",
      "Medical device manufacturers, specification developers and initial importers",
      "US importers and distributors who need their suppliers' registrations verified",
    ],
    offerings: [
      {
        title: "Food facility registration",
        text: "Registration of facilities that manufacture, process, pack or hold food for consumption in the US, including the Unique Facility Identifier (DUNS number) and the inspection assurance FDA requires. Renewed every even-numbered year between October 1 and December 31.",
        ref: "21 CFR 1.225–1.235",
      },
      {
        title: "US Agent for foreign facilities",
        text: "We act as your US Agent for food, drug, device or cosmetic facilities, receive FDA communications on your behalf and forward them promptly. FDA requires the US Agent to live in or maintain a place of business in the US and be physically present there.",
        ref: "21 CFR 1.227, 207.69, 807.40",
      },
      {
        title: "Drug establishment registration and NDC listing",
        text: "Establishment registration, labeler code requests and National Drug Code listings submitted in Structured Product Labeling (SPL) format. Registrations are renewed annually between October 1 and December 31, and listings are updated each June and December when information changes.",
        ref: "21 CFR Part 207",
      },
      {
        title: "Medical device registration and listing",
        text: "Annual establishment registration (with the FDA user fee) and device listing for manufacturers and foreign exporters. We also help confirm your device's classification and whether it needs a 510(k), De Novo or PMA before it can be marketed.",
        ref: "21 CFR Parts 807 and 860",
      },
      {
        title: "Cosmetic registration and listing (MoCRA)",
        text: "Facility registration and product listing through FDA's Cosmetics Direct portal under the Modernization of Cosmetics Regulation Act of 2022. Facility registrations are renewed every two years and product listings are updated annually.",
        ref: "FD&C Act sec. 607",
      },
      {
        title: "Labeling review",
        text: "Review of food, dietary supplement and cosmetic labels against US rules: Nutrition or Supplement Facts, ingredient statements, the nine major food allergens (including sesame since 2023), net quantity in metric and US units, and responsible-party contact details.",
        ref: "21 CFR Parts 101 and 701",
      },
      {
        title: "Acidified and low-acid canned foods",
        text: "Food Canning Establishment (FCE) registration and scheduled process (SID) filings, required before acidified or low-acid canned foods can be shipped to the US.",
        ref: "21 CFR Parts 108, 113, 114",
      },
      {
        title: "Food safety plan support",
        text: "Gap reviews against FDA's Preventive Controls for Human Food rule, and help preparing the written food safety plan that must be overseen by a Preventive Controls Qualified Individual (PCQI).",
        ref: "21 CFR Part 117",
      },
    ],
    keyFacts: [
      { label: "Food facility renewal", value: "Oct 1 – Dec 31, every even-numbered year", ref: "21 CFR 1.230" },
      { label: "Device registration", value: "Oct 1 – Dec 31, every year (user fee applies)", ref: "21 CFR 807.22" },
      { label: "Drug registration", value: "Oct 1 – Dec 31, every year", ref: "21 CFR 207.29" },
      { label: "Cosmetic facility", value: "Renewed every 2 years; listings updated yearly", ref: "FD&C Act sec. 607" },
    ],
    process: [
      { title: "Product and facility review", text: "We confirm how FDA classifies each product and which facilities in your supply chain must register." },
      { title: "Account setup", text: "We set up or recover your FDA Industry Systems, CDER Direct or Cosmetics Direct accounts and obtain your DUNS number if needed." },
      { title: "Filing", text: "We submit registrations and listings, name the US Agent and send you the registration numbers and confirmations." },
      { title: "Maintenance", text: "We track renewal windows, listing updates and FDA correspondence for as long as you work with us." },
    ],
    documents: [
      "Legal name, address and DUNS number of each facility",
      "Owner, operator or agent in charge contact details",
      "Product list with ingredients or components and intended use",
      "Current product labels or label drafts",
      "Existing FDA registration numbers, if any",
    ],
    faqs: [
      {
        q: "Will I receive an FDA certificate?",
        a: "No. FDA does not issue registration certificates and does not recognize certificates sold by private companies. You receive a registration number and confirmation from FDA's system, which we pass on to you.",
      },
      {
        q: "Does registration mean FDA approved my product?",
        a: "No. Registration and listing tell FDA who you are and what you make. They are not an approval. New drugs and many medical devices need separate premarket approval or clearance before they can be sold.",
      },
      {
        q: "What happens if my food facility registration is not renewed?",
        a: "FDA treats registrations that are not renewed during the renewal window as expired. Food from a foreign facility without a valid registration can be held at the port of entry.",
      },
      {
        q: "Are small cosmetic businesses exempt from MoCRA registration?",
        a: "Businesses with average gross annual US sales under $1 million over the previous three years are generally exempt from registration and listing. The exemption does not apply to certain products, such as those that contact the eye's mucous membrane, are injected or are intended for internal use.",
      },
      {
        q: "Does FDA regulate meat and poultry?",
        a: "Mostly not. Meat, poultry and certain egg products are regulated by USDA's Food Safety and Inspection Service (FSIS), which has its own import rules. Seafood, dairy, produce and most other foods fall under FDA.",
      },
    ],
    related: ["customs-import", "logistics"],
  },
  {
    slug: "customs-import",
    title: "Customs & Import",
    agency: "U.S. Customs and Border Protection",
    metaDescription:
      "FDA Prior Notice, FSVP importer support, ISF 10+2, HTSUS classification, customs bonds and help with FDA holds and Import Alerts, coordinated with licensed US customs brokers.",
    headline: "Clear CBP and FDA at the border, the first time",
    intro:
      "FDA-regulated shipments have to satisfy two agencies at once: CBP for duties and entry, and FDA for admissibility. We prepare the filings and documents both expect, and coordinate the entry with licensed US customs brokers.",
    overview: [
      "Most delays at US ports come from missing or mismatched information: an expired facility registration, a Prior Notice that does not match the invoice, the wrong FDA product code, or no FSVP importer named on the entry. We check these before the cargo leaves origin.",
      "Customs entries are filed by licensed US customs brokers, as federal law requires for anyone transacting customs business on behalf of others. We work alongside them and stay with you if FDA holds or detains a shipment.",
    ],
    whoNeedsIt: [
      "Foreign exporters selling to US buyers on DAP or DDP terms",
      "US importers of food, supplements, cosmetics, drugs or medical devices",
      "Companies acting as FSVP importer for the first time",
      "Importers whose shipments have been held, detained or refused by FDA",
      "Brands affected by an FDA Import Alert",
    ],
    offerings: [
      {
        title: "FDA Prior Notice",
        text: "Prior Notice submissions for every food shipment, timed to the mode of transport. Food that arrives without adequate Prior Notice is refused admission and held at the port.",
        ref: "21 CFR 1.276–1.285",
      },
      {
        title: "FSVP importer support",
        text: "Help for the FSVP importer (usually the US owner or consignee at entry) to analyze hazards, evaluate and verify foreign suppliers, and keep the required records, which must be available in English on FDA request.",
        ref: "21 CFR 1.500–1.514",
      },
      {
        title: "Importer Security Filing (ISF 10+2)",
        text: "ISF data for ocean shipments, filed no later than 24 hours before cargo is loaded on the vessel bound for the US. Late or inaccurate filings can lead to liquidated damages of $5,000 per violation.",
        ref: "19 CFR Part 149",
      },
      {
        title: "Classification and origin marking",
        text: "Harmonized Tariff Schedule (HTSUS) classification to determine duty rates and any additional tariffs, and country-of-origin marking that meets CBP rules.",
        ref: "19 CFR Part 134",
      },
      {
        title: "Importer of record and customs bond",
        text: "Importer of record number (CBP Form 5106) and single-transaction or continuous customs bond setup. Non-resident importers must also name a US agent for service of process.",
        ref: "19 CFR Parts 113 and 141",
      },
      {
        title: "FDA entry data and product codes",
        text: "Correct FDA product codes, registration numbers, Prior Notice confirmations and other FDA data elements for the entry transmitted through CBP's ACE system.",
      },
      {
        title: "Holds, detentions and refusals",
        text: "Responses to FDA Notices of Action: arranging sampling and private lab analysis, submitting testimony to support admissibility, or requesting permission to recondition the goods.",
        ref: "21 CFR 1.94–1.99",
      },
      {
        title: "Import Alert removal",
        text: "Petitions to remove a firm or product from detention without physical examination (DWPE), supported by the evidence FDA asks for, such as a series of clean shipments.",
      },
    ],
    keyFacts: [
      { label: "Prior Notice by land (road)", value: "At least 2 hours before arrival", ref: "21 CFR 1.279" },
      { label: "Prior Notice by air or rail", value: "At least 4 hours before arrival", ref: "21 CFR 1.279" },
      { label: "Prior Notice by water", value: "At least 8 hours before arrival", ref: "21 CFR 1.279" },
      { label: "ISF (ocean only)", value: "24 hours before loading at origin", ref: "19 CFR 149.2" },
    ],
    process: [
      { title: "Pre-shipment check", text: "We verify registrations, product codes, labels and FSVP status before goods are booked." },
      { title: "Filings", text: "We prepare Prior Notice, ISF and the FDA data for the entry and share them with your customs broker." },
      { title: "Arrival and entry", text: "The broker files the entry; we follow the FDA review until the shipment is released." },
      { title: "Issue resolution", text: "If FDA holds or detains the shipment, we manage the response and keep you updated." },
    ],
    documents: [
      "Commercial invoice and packing list",
      "Bill of lading or air waybill and booking details",
      "Manufacturer and shipper names, addresses and FDA registration numbers",
      "Product descriptions, ingredients and HTS codes if known",
      "Importer of record and FSVP importer details",
    ],
    faqs: [
      {
        q: "Who is the FSVP importer?",
        a: "The US owner or consignee of the food at the time of entry. If there is no US owner or consignee, it is the US agent or representative of the foreign owner or consignee, as confirmed in a signed statement of consent. The FSVP importer must be identified on each entry.",
      },
      {
        q: "Can a foreign company be the importer of record?",
        a: "Yes. A non-resident company can act as importer of record. It needs a CBP importer number and a customs bond, and a non-resident corporation must name a resident agent in the US who can accept service of process.",
      },
      {
        q: "Is there still a duty-free threshold for low-value shipments?",
        a: "Duty-free de minimis treatment for shipments valued at $800 or less was suspended for all countries effective August 29, 2025. Low-value shipments now generally need a formal or informal entry and are subject to duties. Rules in this area change often, so we confirm the current position for each shipment.",
      },
      {
        q: "What is the difference between an FDA hold and a refusal?",
        a: "When FDA detains a shipment, the importer can present evidence that it complies. If FDA refuses admission, the goods must be exported or destroyed under CBP supervision, generally within 90 days.",
      },
      {
        q: "Do you file customs entries yourselves?",
        a: "Customs entries are filed by licensed US customs brokers. We coordinate the FDA side of the entry and work with your broker or one of our partner brokers.",
      },
    ],
    related: ["fda-compliance", "logistics"],
    note: "Tariff rates and trade measures change frequently. We confirm current duties for your products before each shipment.",
  },
  {
    slug: "trademark",
    title: "Trademark",
    agency: "U.S. Patent and Trademark Office",
    metaDescription:
      "USPTO trademark clearance, applications, office action responses, maintenance filings and CBP recordation, handled with US-licensed trademark attorneys.",
    headline: "Protect your brand before you launch in the US",
    intro:
      "A US federal trademark registration gives you nationwide rights, the right to use the ® symbol, and a way to stop counterfeit goods at the border. Foreign-domiciled applicants must file through a US-licensed attorney, and we coordinate the whole process with US counsel.",
    overview: [
      "Your home-country trademark does not protect you in the United States. Brands entering the US market should check that their name is available and file before they invest in packaging and marketing, so a conflict does not force a costly rebrand.",
      "Legal work, including clearance opinions and filings, is performed by US-licensed trademark attorneys. We manage the timeline, gather the information and specimens they need, and track every deadline after registration.",
    ],
    whoNeedsIt: [
      "Foreign brands preparing to sell in the US",
      "Companies with a home-country trademark they want to extend to the US",
      "Brands selling on Amazon and other US marketplaces that require a registered or pending mark",
      "Owners of US registrations approaching a maintenance deadline",
      "Brands facing counterfeit or look-alike imports",
    ],
    offerings: [
      {
        title: "Clearance search",
        text: "A search of the USPTO register and common-law sources for conflicting marks before you file, so you can judge the risk early.",
      },
      {
        title: "Federal application",
        text: "Filing through the USPTO's Trademark Center on the right basis: use in commerce, intent to use, a foreign registration or application, or an extension of an international registration under the Madrid Protocol.",
        ref: "15 U.S.C. 1051, 1126, 1141f",
      },
      {
        title: "Office action responses",
        text: "Coordination of responses to USPTO examiner refusals and requirements. The response deadline is generally three months, with one three-month extension available for a fee.",
        ref: "37 CFR 2.62",
      },
      {
        title: "Publication and opposition watch",
        text: "Monitoring of your application through publication in the Official Gazette and the 30-day period in which third parties can oppose it.",
      },
      {
        title: "Statements of use",
        text: "For intent-to-use applications, filing the statement of use with specimens within six months of the notice of allowance, with extensions of up to 36 months in total.",
        ref: "37 CFR 2.88–2.89",
      },
      {
        title: "Maintenance and renewals",
        text: "Section 8 declarations of use between the fifth and sixth years after registration, and combined Section 8 and 9 renewals every ten years.",
        ref: "15 U.S.C. 1058, 1059",
      },
      {
        title: "CBP recordation",
        text: "Recording your registered trademark with U.S. Customs and Border Protection so officers can detain and seize counterfeit goods at the border.",
        ref: "19 CFR Part 133",
      },
      {
        title: "Portfolio monitoring",
        text: "A single calendar of deadlines for all your US marks, plus watch services that flag new applications similar to yours.",
      },
    ],
    keyFacts: [
      { label: "USPTO base filing fee", value: "$350 per class of goods or services (as of 2025)" },
      { label: "Office action response", value: "3 months, extendable once by 3 months", ref: "37 CFR 2.62" },
      { label: "Declaration of use", value: "Between years 5 and 6 after registration", ref: "15 U.S.C. 1058" },
      { label: "Renewal", value: "Every 10 years", ref: "15 U.S.C. 1059" },
    ],
    process: [
      { title: "Clearance", text: "We search for conflicts and US counsel advises on the risk and on the best filing strategy." },
      { title: "Filing", text: "Counsel files the application with an accurate description of goods and services and the right specimens." },
      { title: "Examination", text: "We track the examiner's review and coordinate responses to any office actions." },
      { title: "Registration and upkeep", text: "After registration we record the mark with CBP if needed and track every maintenance deadline." },
    ],
    documents: [
      "The mark exactly as used (word mark, logo files or both)",
      "Owner's legal name, entity type and address",
      "List of goods and services you sell or plan to sell in the US",
      "Specimens showing the mark in use, such as labels or product web pages",
      "Details of any foreign application or registration you want to rely on",
    ],
    faqs: [
      {
        q: "Why do I need a US attorney?",
        a: "Since August 3, 2019, USPTO rules require trademark applicants and registrants whose permanent legal residence or principal place of business is outside the US to be represented by an attorney licensed to practice in a US state.",
      },
      {
        q: "How long does registration take?",
        a: "It varies with USPTO workloads and whether the examiner raises issues. Many applications take a year or more from filing to registration. The USPTO publishes current processing times on its website.",
      },
      {
        q: "When can I use the ® symbol?",
        a: "Only once the mark is registered with the USPTO. Before that you can use ™ to show you claim rights in the mark.",
      },
      {
        q: "I received an official-looking letter asking for a fee. Is it from the USPTO?",
        a: "Be careful. Private companies send solicitations that look like USPTO notices. Official USPTO email comes from the uspto.gov domain. Send us any notice you are unsure about before paying.",
      },
    ],
    related: ["customs-import", "fda-compliance"],
    note: "Trademark legal services are provided by independent US-licensed attorneys. USPTO fees are set by the USPTO and change from time to time.",
  },
  {
    slug: "logistics",
    title: "Logistics",
    agency: "Door-to-door freight",
    metaDescription:
      "Air, ocean and ground freight to the US planned around FDA and CBP requirements: cold chain, FDA-registered warehousing, Incoterms advice and shipment documentation.",
    headline: "Freight planned around US compliance",
    intro:
      "We coordinate air, ocean and ground freight with licensed carriers and forwarders, and plan every shipment around the FDA and CBP filings it needs, so paperwork is ready before your cargo arrives.",
    overview: [
      "For regulated products, logistics and compliance are the same project. The carrier's arrival time sets the Prior Notice deadline, the vessel's loading date sets the ISF deadline, and the warehouse that receives your food must itself be registered with FDA.",
      "We bring these pieces together: one plan, one point of contact, and documents that match across the commercial invoice, the FDA filings and the customs entry.",
    ],
    whoNeedsIt: [
      "Foreign manufacturers shipping regularly to US customers or Amazon FBA",
      "Exporters of temperature-sensitive food, pharmaceuticals or cosmetics",
      "Brands that need US warehousing and distribution",
      "Companies deciding between DAP and DDP terms with US buyers",
    ],
    offerings: [
      {
        title: "Ocean freight",
        text: "Full container (FCL) and less-than-container (LCL) shipments to major US ports, with ISF timing built into the booking.",
      },
      {
        title: "Air freight",
        text: "Express and standard air cargo for urgent or high-value shipments, with Prior Notice submitted ahead of arrival.",
      },
      {
        title: "Temperature-controlled cargo",
        text: "Reefer containers and cold-chain air freight with temperature monitoring for food, supplements and pharmaceuticals.",
      },
      {
        title: "US warehousing",
        text: "Storage with FDA-registered warehouse partners. Any US facility that holds food for consumption must itself be registered with FDA.",
        ref: "21 CFR 1.225",
      },
      {
        title: "Domestic distribution",
        text: "Truckload, less-than-truckload and parcel delivery to customers, retailers and marketplace fulfillment centers, by carriers that follow FDA's sanitary transportation rule for food.",
        ref: "21 CFR Part 1, Subpart O",
      },
      {
        title: "Incoterms and importer planning",
        text: "Advice on who should act as importer of record and pay duties under DAP, DDP or other Incoterms 2020 rules, before you sign with a US buyer.",
      },
      {
        title: "Bonded warehouses and foreign-trade zones",
        text: "Options to defer duties on goods stored or re-exported, using CBP bonded warehouses or foreign-trade zones.",
        ref: "19 CFR Parts 144 and 146",
      },
      {
        title: "Document control and tracking",
        text: "Commercial invoices that meet CBP requirements, packing lists and transport documents matched to every FDA and customs filing, plus tracking from pickup to delivery.",
        ref: "19 CFR 141.86",
      },
    ],
    keyFacts: [
      { label: "ISF (ocean)", value: "24 hours before loading at origin", ref: "19 CFR 149.2" },
      { label: "Prior Notice (water)", value: "At least 8 hours before arrival", ref: "21 CFR 1.279" },
      { label: "Prior Notice (air)", value: "At least 4 hours before arrival", ref: "21 CFR 1.279" },
      { label: "Entry filing", value: "Within 15 calendar days of arrival", ref: "19 CFR 142.2" },
    ],
    process: [
      { title: "Route and terms", text: "We agree the mode, route, Incoterms and who acts as importer of record." },
      { title: "Booking and filings", text: "We book with a carrier and schedule ISF and Prior Notice around the departure and arrival dates." },
      { title: "Transit and clearance", text: "We track the shipment and coordinate clearance with the customs broker and FDA." },
      { title: "Delivery", text: "Goods move to the warehouse or straight to your customer, with proof of delivery." },
    ],
    documents: [
      "Pickup address, ready date and cargo dimensions and weights",
      "Commercial invoice and packing list",
      "Temperature or handling requirements",
      "Consignee and final delivery address",
      "Agreed Incoterms with your buyer",
    ],
    faqs: [
      {
        q: "Are you a carrier?",
        a: "No. We plan and coordinate freight with licensed carriers, freight forwarders and ocean transportation intermediaries, and stay your single point of contact throughout.",
      },
      {
        q: "Should I sell DDP to my US customers?",
        a: "Under DDP the seller pays US duties and usually acts as importer of record, which means a CBP importer number, a customs bond and, for food, FSVP responsibilities may fall on you or your representative. We help you weigh this before you quote.",
      },
      {
        q: "Can you ship to Amazon fulfillment centers?",
        a: "Yes. We coordinate delivery to Amazon FBA and other marketplace warehouses and can prepare goods to their receiving requirements.",
      },
    ],
    related: ["customs-import", "fda-compliance"],
  },
];

export function getServiceDetail(slug: string) {
  return serviceDetails.find((s) => s.slug === slug);
}
