// Single source of truth for everything Joseph will want to edit.
// Components read from here; no copy or links are hardcoded in sections.

export const site = {
  name: "Joseph's VA's",
  tagline: "Vetted virtual assistants for growing businesses",
  description:
    "Hire an experienced, fully vetted virtual assistant. Tell us what you need and get matched with an assistant who fits your business.",
  // REPLACE_ME: real contact email before launch
  contactEmail: "hello@example.com",
}

export type Tier = {
  id: string
  name: string
  hours: string
  /** REVIEW: pricing below is placeholder. Set real numbers before launch. */
  priceFrom: number
  priceNote?: string
  blurb: string
  features: string[]
  popular: boolean
}

export const tiers: Tier[] = [
  {
    id: "part-time",
    name: "Part-Time",
    hours: "20 hrs / week",
    priceFrom: 790,
    priceNote: "per month",
    blurb: "For owners handing off admin for the first time.",
    features: [
      "One dedicated assistant, 20 hours a week",
      "Inbox, calendar, and admin support",
      "Onboarding call in your first week",
      "Pause or cancel monthly",
    ],
    popular: false,
  },
  {
    id: "full-time",
    name: "Full-Time",
    hours: "40 hrs / week",
    priceFrom: 1490,
    priceNote: "per month",
    blurb: "A dedicated assistant working your business hours.",
    features: [
      "One dedicated assistant, 40 hours a week",
      "Covers admin, support, and operations",
      "Works your time zone and tools",
      "Free replacement if it is not a fit",
      "Pause or cancel monthly",
    ],
    popular: true,
  },
  {
    id: "team",
    name: "Team",
    hours: "80+ hrs / week",
    priceFrom: 2890,
    priceNote: "per month",
    blurb: "Two or more assistants for businesses ready to scale support.",
    features: [
      "Two or more dedicated assistants",
      "Split roles: admin, support, sales ops",
      "A single point of contact for your account",
      "Free replacement if it is not a fit",
      "Pause or cancel monthly",
    ],
    popular: false,
  },
]

// REVIEW: every number in this block needs Joseph's sign-off before launch.
// If a number cannot be backed, delete the entry; the strip renders whatever is here.
export const stats = [
  { value: "2%", label: "of applicants make it through vetting" },
  { value: "5+ yrs", label: "average assistant experience" },
  { value: "24 hrs", label: "from sign-off to your assistant's first day" },
]

export const steps = [
  {
    title: "Tell us what you need",
    body: "A short intake form covers your tasks, tools, and the hours you need. Five minutes, no sales call.",
  },
  {
    title: "Get pricing and your match",
    body: "We reply with pricing for your hours and hand-pick the assistant who fits your business.",
  },
  {
    title: "Meet your assistant",
    body: "We introduce your matched assistant within 24 hours of sign-off. If it is not a fit, we replace them free.",
  },
]

export const useCases = [
  {
    audience: "E-commerce brands",
    summary: "Keep orders moving and customers answered while you work on the brand.",
    tasks: [
      "Customer support tickets and returns",
      "Order processing and tracking updates",
      "Product listings and inventory upkeep",
      "Review and feedback follow-up",
    ],
  },
  {
    audience: "Coaches and consultants",
    summary: "Protect your calendar and keep clients onboarded without touching admin.",
    tasks: [
      "Inbox and calendar management",
      "Client onboarding and follow-up",
      "Content repurposing and scheduling",
      "Invoicing and payment chasing",
    ],
  },
  {
    audience: "Small business owners",
    summary: "Hand off the recurring work that eats your week.",
    tasks: [
      "Data entry and CRM upkeep",
      "Research and vendor coordination",
      "Travel and appointment booking",
      "Document prep and reporting",
    ],
  },
]

// REVIEW: the vetting stages below describe the intended process.
// Joseph should confirm each stage matches what actually happens.
export const vettingStages = [
  {
    title: "Application review",
    body: "Every applicant is screened for real work history. Thin or unverifiable experience ends the process here.",
  },
  {
    title: "Skills testing",
    body: "Written English, tool proficiency, and task simulations that mirror actual client work.",
  },
  {
    title: "Live interviews",
    body: "Two rounds. One on communication, one on how they handle real scenarios under pressure.",
  },
  {
    title: "Reference and background checks",
    body: "We contact past employers and verify identity before anyone is cleared to work.",
  },
  {
    title: "Paid trial",
    body: "New assistants complete supervised client work before joining the roster full time.",
  },
]

export const comparison = {
  columns: [site.name, "Hiring in-house", "Freelance marketplace"],
  rows: [
    {
      label: "Time to start",
      values: ["Within 24 hours of sign-off", "6 to 10 weeks", "Days, but unvetted"],
    },
    {
      label: "Vetting",
      values: ["Done before you ever see them", "You run it yourself", "Reviews and self-reported skills"],
    },
    {
      label: "Typical monthly cost",
      values: ["From $790", "$3,500+ with taxes and benefits", "Varies, quality tracks price"],
    },
    {
      label: "If it is not a fit",
      values: ["Free replacement", "Restart the hiring process", "Start the search over"],
    },
    {
      label: "Commitment",
      values: ["Monthly, pause anytime", "Employment contract", "Per project"],
    },
  ],
}
