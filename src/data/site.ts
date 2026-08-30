export const site = {
  name: "Broadgate Consulting",
  legalName: "Broadgate Consulting Limited",
  companyNumber: "16998411",
  formerName: "AdeptLead2 Limited",
  slogan: "Gateway to Expertise",
  location: "London, United Kingdom",
  url: "https://www.broadgateconsulting.co.uk",
  email: "hello@broadgateconsulting.co.uk",
  linkedin: "https://www.linkedin.com/company/broadgate-consulting",
  description:
    "Broadgate Consulting brings strategy, specialist expertise and accountable delivery together for financial-services clients — through a managed network of proven partners and senior practitioners.",
};

/**
 * Controls the Gateway network section:
 *   "full"   — show the section heading, intro and the partner cards
 *   "teaser" — show the heading + intro + a "network being finalised" note, no cards
 *   "hidden" — remove the section and its nav entry entirely
 * Set to "full" once partner engagement and the partner list are confirmed.
 */
export const networkMode: "full" | "teaser" | "hidden" = "teaser";

const allNav = [
  { label: "Introduction", href: "#introduction" },
  { label: "Offerings", href: "#offerings" },
  { label: "Approach", href: "#approach" },
  { label: "Network", href: "#network" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export const nav = allNav.filter(
  (item) => item.href !== "#network" || networkMode !== "hidden",
);

export const intro =
  "Broadgate Consulting, previously AdeptLead2, specialises in consulting for the financial services and insurance industry. Based in London, Broadgate operates through three connected offerings: expert consulting delivered by senior practitioners at transparent day rates; a curated introduction and referral service that connects clients with proven specialist firms and independent professionals; and marketing and business development support for partners entering or growing in the UK market.";

export const facts = [
  { label: "Structure", value: "Independent, UK-owned & UK-led" },
  { label: "Model", value: "Senior practitioners at transparent day rates" },
  { label: "Governance", value: "IR35-coherent, contracted, insured" },
];

export const offerings = [
  {
    title: "Expert consulting",
    summary:
      "Senior practitioners engaged directly on your priorities — finance function builds, pensions and tax transformation, and complex programme delivery.",
    points: [
      "Delivered by people who have done the work, not a body shop",
      "Transparent day rates",
      "Scoped to decisions, delivery, ownership and outcomes",
    ],
  },
  {
    title: "Curated introductions & referrals",
    summary:
      "A managed route to the right specialist at the right time — proven firms and independent professionals, matched to the brief.",
    points: [
      "Access to specialist benches across the network",
      "Introducer and enabler, never a reseller of headcount",
      "The right expertise, without the search cost",
    ],
  },
  {
    title: "Marketing & business development",
    summary:
      "Go-to-market support for partners entering or growing in the UK financial-services market.",
    points: [
      "UK market positioning and outreach",
      "Business development into the London financial community",
      "A credible local front door for international firms",
    ],
  },
];

export const approach = [
  {
    title: "Boutique agility, institutional governance",
    body: "A professionally engineered supply framework — fully IR35-coherent, contractually robust and properly insured — so you get responsiveness without governance risk.",
  },
  {
    title: "Independent, UK-owned and UK-led",
    body: "Broadgate is an independent firm led by three directors who stay hands-on in client delivery. Our email and data are hosted in the UK, supporting UK GDPR and data-protection compliance.",
  },
  {
    title: "Evidence-led and accountable",
    body: "We lead with the conclusion, separate fact from assumption, and connect every recommendation to a decision, a deliverable and an owner.",
  },
];

export const network = {
  heading: "A growing community network, with a front door built to last",
  intro:
    "Broadgate is the gateway to a partner network of trusted, proven and world-class professionals, professional services and solutions in Financial Operations, Asset Management, Insurance and Wealth Management.",
  // shown after the intro only when networkMode is "full"
  sampleNote: "Below is a small taste.",
  // shown instead of the partner cards when networkMode is "teaser"
  teaserNote:
    "We are finalising our partner network and gathering partner details now. If your firm belongs in it, we would like to hear from you.",
  partners: [
    {
      name: "Compass Consulting",
      role: "Compliance, governance & FCA regulatory advisory",
      url: "https://compass-consulting.co.uk/",
    },
    { name: "Adept Advisory", role: "Transformation & delivery partner" },
    { name: "Lead2 Consulting", role: "Asset-management operations partner" },
    { name: "Digiata", role: "Core technology partner" },
    { name: "QED Actuaries & Accountants", role: "Actuarial & accounting depth" },
    { name: "CoreSync", role: "Delivery partner" },
    { name: "Letsema", role: "Delivery partner" },
  ],
};

export const leadership = [
  {
    name: "Ronald van Hoven",
    role: "Managing Director & Lead Consultant",
  },
  {
    name: "Michelle Martin",
    role: "Director & Senior Consultant",
  },
  {
    name: "Ray Pretorius",
    role: "Director & CTAO (Chief Technical & AI Officer)",
  },
];
