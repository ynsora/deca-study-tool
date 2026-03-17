export interface DecaEvent {
  name: string;
  code: string;
  type: "Individual" | "Team" | "Written";
}

export interface DecaCluster {
  id: string;
  name: string;
  description: string;
  color: string;
  image: string;
  events: DecaEvent[];
}

export const decaClusters: DecaCluster[] = [
  {
    id: "marketing",
    name: "Marketing",
    description: "Brand strategy, advertising, merchandising, and consumer behavior.",
    color: "rgba(185, 28, 28, 0.78)",
    image: "/clusters/marketing.jpg",
    events: [
      { name: "Advertising Campaign", code: "ADC", type: "Team" },
      { name: "Apparel & Accessories Marketing", code: "AAM", type: "Individual" },
      { name: "Automotive Services Marketing", code: "ASM", type: "Individual" },
      { name: "Fashion Merchandising Promotion Plan", code: "FMPP", type: "Team" },
      { name: "Food Marketing", code: "FMK", type: "Individual" },
      { name: "Marketing Communications Series", code: "MCS", type: "Individual" },
      { name: "Marketing Management", code: "MKM", type: "Individual" },
      { name: "Marketing Research", code: "MRK", type: "Team" },
      { name: "Retail Merchandising", code: "RMS", type: "Individual" },
      { name: "Sports & Entertainment Marketing", code: "SEM", type: "Individual" },
      { name: "Principles of Marketing", code: "PMK", type: "Individual" },
      { name: "Professional Selling", code: "PSE", type: "Individual" },
      { name: "Business-to-Business Marketing", code: "B2B", type: "Individual" },
    ],
  },
  {
    id: "finance",
    name: "Finance",
    description: "Accounting, investment, corporate finance, and risk management.",
    color: "rgba(109, 40, 217, 0.78)",
    image: "/clusters/finance.jpg",
    events: [
      { name: "Accounting Applications Series", code: "ACT", type: "Individual" },
      { name: "Business Finance Series", code: "BFS", type: "Individual" },
      { name: "Corporate Finance Team Decision Making", code: "CFTDM", type: "Team" },
      { name: "Financial Consulting", code: "FNC", type: "Individual" },
      { name: "Financial Statement Analysis", code: "FSA", type: "Team" },
      { name: "Insurance & Risk Management", code: "IRM", type: "Individual" },
      { name: "Personal Financial Literacy", code: "PFL", type: "Individual" },
      { name: "Securities & Investments", code: "SIV", type: "Individual" },
      { name: "Principles of Finance", code: "PFN", type: "Individual" },
      { name: "Banking & Financial Services", code: "BNK", type: "Individual" },
      { name: "Tax Planning", code: "TAX", type: "Individual" },
    ],
  },
  {
    id: "hospitality",
    name: "Hospitality & Tourism",
    description: "Hotel operations, food service, event management, and travel.",
    color: "rgba(29, 78, 216, 0.78)",
    image: "/clusters/hospitality.jpg",
    events: [
      { name: "Food Service Management", code: "FSM", type: "Individual" },
      { name: "Hotel & Lodging Management", code: "HLM", type: "Individual" },
      { name: "Quick Serve Restaurant Management", code: "QSRM", type: "Individual" },
      { name: "Restaurant & Food Service Management", code: "RFS", type: "Individual" },
      { name: "Resort & Convention Management", code: "RCM", type: "Individual" },
      { name: "Travel & Tourism Management", code: "TTM", type: "Individual" },
      { name: "Principles of Hospitality & Tourism", code: "PHT", type: "Individual" },
      { name: "Hospitality Services", code: "HSP", type: "Individual" },
      { name: "Event Planning", code: "EVP", type: "Team" },
    ],
  },
  {
    id: "business-management",
    name: "Business Management & Administration",
    description: "Operations, human resources, ethics, and organizational leadership.",
    color: "rgba(161, 98, 7, 0.78)",
    image: "/clusters/business-management.jpg",
    events: [
      { name: "Business Law & Ethics Team Decision Making", code: "BLTDM", type: "Team" },
      { name: "Business Management & Administration Series", code: "BMS", type: "Individual" },
      { name: "Business Research & Presentation", code: "BRP", type: "Team" },
      { name: "Human Resources Management", code: "HRM", type: "Individual" },
      { name: "Management Information Systems", code: "MIS", type: "Individual" },
      { name: "Operations Management", code: "OPM", type: "Individual" },
      { name: "Organizational Leadership", code: "ORL", type: "Individual" },
      { name: "Public Relations & Promotions", code: "PRPM", type: "Team" },
      { name: "Business Services Marketing", code: "BSM", type: "Individual" },
      { name: "Principles of Business Administration", code: "PBA", type: "Individual" },
      { name: "Supply Chain Management", code: "SCM", type: "Individual" },
    ],
  },
  {
    id: "entrepreneurship",
    name: "Entrepreneurship",
    description: "Business planning, innovation, franchise, and startup development.",
    color: "rgba(71, 85, 105, 0.82)",
    image: "/clusters/entrepreneurship.jpg",
    events: [
      { name: "Entrepreneurship Team Decision Making", code: "ETDM", type: "Team" },
      { name: "Independent Business Plan", code: "IBP", type: "Written" },
      { name: "Innovative Business Plan", code: "INB", type: "Written" },
      { name: "Franchise Business Plan", code: "FBP", type: "Written" },
      { name: "International Business Plan", code: "INTL", type: "Written" },
      { name: "Start-up Business Plan", code: "SBP", type: "Written" },
      { name: "Entrepreneurship Promotion Project", code: "EPP", type: "Team" },
      { name: "Virtual Business Challenge", code: "VBC", type: "Team" },
      { name: "Principles of Entrepreneurship", code: "PEN", type: "Individual" },
      { name: "Social Entrepreneurship", code: "SE", type: "Written" },
    ],
  },
  {
    id: "personal-finance",
    name: "Personal Financial Literacy",
    description: "Budgeting, saving, credit, investing, and life financial planning.",
    color: "rgba(22, 101, 52, 0.78)",
    image: "/clusters/personal-finance.jpg",
    events: [
      { name: "Personal Financial Literacy", code: "PFL", type: "Individual" },
      { name: "Financial Literacy Promotion Project", code: "FLPP", type: "Team" },
      { name: "Personal Finance Research Event", code: "PFRE", type: "Written" },
      { name: "Consumer Protection", code: "CPT", type: "Individual" },
      { name: "Credit & Debt Management", code: "CDM", type: "Individual" },
      { name: "Retirement & Savings Planning", code: "RSP", type: "Individual" },
    ],
  },
];
