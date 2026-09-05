export type TeamExperience = {
  company: string;
  location?: string;
  description: string;
};

export type TeamMember = {
  id: string;
  name: string;
  title: string;
  image: string;
  imageAlt: string;
  intro?: string;
  experiences?: TeamExperience[];
  summary?: string;
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "karla-price",
    name: "Karla Price",
    title: "Accounting & Finance Specialist",
    image: "/images/team/karla-price.jpg",
    imageAlt: "Portrait of Karla Price, Accounting & Finance Specialist",
    intro: "20+ years of international accounting and finance experience, including:",
    experiences: [
      {
        company: "Chevron & Tengizchevroil",
        location: "Kazakhstan",
        description:
          "Financial analysis, accounting, budgeting, US GAAP, internal controls, financial reporting and project finance.",
      },
      {
        company: "Phoenix Technology Services",
        location: "Canada",
        description:
          "International Accounting Manager overseeing full-cycle accounting, AP/AR, payroll, reconciliations, CAPEX and financial reporting across international operations.",
      },
      {
        company: "Indigo Precious Metals",
        location: "Malaysia",
        description:
          "Accounting system implementation with Xero, transaction management, financial statement reconciliations and financial analysis.",
      },
    ],
  },
  {
    id: "kamila-mamutova",
    name: "Kamila Mamutova",
    title: "Financial Analyst",
    image: "/images/team/kamila-mamutova.jpg",
    imageAlt: "Portrait of Kamila Mamutova, Financial Analyst",
    experiences: [
      {
        company: "KAZ Minerals",
        description:
          "Internal Control, financial analysis, budgeting & forecasting, financial modeling and Power BI reporting. Identified approximately 40M KZT in contractor overbilling and automated cost reporting.",
      },
      {
        company: "EY Kazakhstan",
        description:
          "Audit and financial analysis across telecommunications, mining, banking, aviation and real estate, including financial statement testing, ERP analysis, consolidation and international audit projects.",
      },
    ],
  },
  {
    id: "dana-toktarbayeva",
    name: "Dana Toktarbayeva",
    title: "Accounting Specialist",
    image: "/images/team/dana-toktarbayeva.jpg",
    imageAlt: "Portrait of Dana Toktarbayeva, Accounting Specialist",
    summary:
      "Supporting day-to-day bookkeeping operations, maintaining financial records, processing transactions and assisting with accounting and reporting tasks. Detail-oriented and focused on accuracy, organization and timely completion of accounting processes.",
  },
];

export const ABOUT_INTRO = {
  eyebrow: "About Us",
  heading: "Big-Company Expertise. Small-Business Focus.",
  lede:
    "We bring 20+ years of international accounting and finance experience to help U.S. small businesses stay financially organized, make smarter decisions, and grow with confidence.",
  clients:
    "Our team has worked with Chevron, Tengizchevroil, EY, KAZ Minerals, Phoenix Technology Services, and Indigo Precious Metals.",
};
