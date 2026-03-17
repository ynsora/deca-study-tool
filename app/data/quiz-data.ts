export interface QuizOption {
  text: string;
  scores: Partial<Record<string, number>>;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

export interface EventRecommendation {
  name: string;
  code: string;
  type: "Individual" | "Team" | "Written";
  why: string;
}

export interface ClusterResult {
  clusterId: string;
  clusterName: string;
  color: string;
  accentColor: string;
  description: string;
  events: EventRecommendation[];
}

export const clusterResults: Record<string, ClusterResult> = {
  marketing: {
    clusterId: "marketing",
    clusterName: "Marketing",
    color: "rgba(185, 28, 28, 0.1)",
    accentColor: "#ef4444",
    description:
      "You thrive on creativity, persuasion, and brand strategy. Marketing events let you pitch ideas, analyze consumer behavior, and build campaigns that move people.",
    events: [
      {
        name: "Marketing Management",
        code: "MKM",
        type: "Individual",
        why: "Broad scenario-based event covering the full marketing mix — great all-around starter.",
      },
      {
        name: "Sports & Entertainment Marketing",
        code: "SEM",
        type: "Individual",
        why: "Perfect if you love sports, music, or pop culture branding.",
      },
      {
        name: "Professional Selling",
        code: "PSE",
        type: "Individual",
        why: "High-pressure but rewarding — one-on-one live sales roleplay with a judge.",
      },
    ],
  },
  finance: {
    clusterId: "finance",
    clusterName: "Finance",
    color: "rgba(109, 40, 217, 0.1)",
    accentColor: "#818cf8",
    description:
      "You're analytical and numbers-driven. Finance events reward precision, sharp financial reasoning, and strategic thinking under real time pressure.",
    events: [
      {
        name: "Financial Consulting",
        code: "FNC",
        type: "Individual",
        why: "Client-facing scenarios where you advise on complex financial situations.",
      },
      {
        name: "Securities & Investments",
        code: "SIV",
        type: "Individual",
        why: "Great if you're into stocks, portfolios, and market analysis.",
      },
      {
        name: "Business Finance Series",
        code: "BFS",
        type: "Individual",
        why: "Core corporate finance concepts — broad and versatile for any finance path.",
      },
    ],
  },
  hospitality: {
    clusterId: "hospitality",
    clusterName: "Hospitality & Tourism",
    color: "rgba(29, 78, 216, 0.1)",
    accentColor: "#60a5fa",
    description:
      "You love people, experiences, and making things run smoothly. Hospitality events focus on customer service excellence, operations, and event management.",
    events: [
      {
        name: "Hotel & Lodging Management",
        code: "HLM",
        type: "Individual",
        why: "Operations-focused scenarios set in the hotel and resort industry.",
      },
      {
        name: "Event Planning",
        code: "EVP",
        type: "Team",
        why: "Plan and pitch a real event concept from scratch — great for natural organizers.",
      },
      {
        name: "Travel & Tourism Management",
        code: "TTM",
        type: "Individual",
        why: "Combines geography, customer experience, and business strategy.",
      },
    ],
  },
  "business-management": {
    clusterId: "business-management",
    clusterName: "Business Management",
    color: "rgba(161, 98, 7, 0.1)",
    accentColor: "#f59e0b",
    description:
      "You're a natural leader who loves structure, strategy, and developing people. BMA events test your ability to manage teams and solve complex organizational problems.",
    events: [
      {
        name: "Business Management & Administration Series",
        code: "BMS",
        type: "Individual",
        why: "Covers HR, operations, and strategy — the most comprehensive BMA event.",
      },
      {
        name: "Organizational Leadership",
        code: "ORL",
        type: "Individual",
        why: "Perfect if you see yourself leading teams or running departments.",
      },
      {
        name: "Human Resources Management",
        code: "HRM",
        type: "Individual",
        why: "Great if you care about workplace culture and developing people.",
      },
    ],
  },
  entrepreneurship: {
    clusterId: "entrepreneurship",
    clusterName: "Entrepreneurship",
    color: "rgba(71, 85, 105, 0.12)",
    accentColor: "#94a3b8",
    description:
      "You're a risk-taker and builder at heart. Entrepreneurship events challenge you to develop real business ideas with full financial projections and competitive pitches.",
    events: [
      {
        name: "Entrepreneurship Team Decision Making",
        code: "ETDM",
        type: "Team",
        why: "Scenario-based event solving real problems for a fictional startup — fast and intense.",
      },
      {
        name: "Independent Business Plan",
        code: "IBP",
        type: "Written",
        why: "Write a full business plan — the most impressive event you can put on an application.",
      },
      {
        name: "Principles of Entrepreneurship",
        code: "PEN",
        type: "Individual",
        why: "Broad intro to entrepreneurship concepts — a solid starting point.",
      },
    ],
  },
  "personal-finance": {
    clusterId: "personal-finance",
    clusterName: "Personal Financial Literacy",
    color: "rgba(22, 101, 52, 0.1)",
    accentColor: "#4ade80",
    description:
      "You care about financial wellness and helping others make smart money decisions. PFL events focus on budgeting, saving, credit, and long-term life planning.",
    events: [
      {
        name: "Personal Financial Literacy",
        code: "PFL",
        type: "Individual",
        why: "Core personal finance scenarios — budgeting, saving, and planning for life.",
      },
      {
        name: "Credit & Debt Management",
        code: "CDM",
        type: "Individual",
        why: "Focused on credit scores, responsible borrowing, and debt strategies.",
      },
      {
        name: "Retirement & Savings Planning",
        code: "RSP",
        type: "Individual",
        why: "Covers 401k, IRAs, and long-term financial independence strategy.",
      },
    ],
  },
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "When working on a big project, you prefer to...",
    options: [
      { text: "Work solo and take full ownership", scores: { entrepreneurship: 2, "personal-finance": 1 } },
      { text: "Collaborate closely with one partner", scores: { finance: 1, "business-management": 2 } },
      { text: "Lead a team and delegate tasks", scores: { "business-management": 2, marketing: 1 } },
      { text: "Be part of a larger creative group", scores: { marketing: 2, hospitality: 1 } },
    ],
  },
  {
    id: 2,
    question: "Which class sounds most interesting to you?",
    options: [
      { text: "Accounting & financial analysis", scores: { finance: 3 } },
      { text: "Advertising & consumer behavior", scores: { marketing: 3 } },
      { text: "Starting and running a business", scores: { entrepreneurship: 3 } },
      { text: "Hotel, event, or restaurant management", scores: { hospitality: 3 } },
    ],
  },
  {
    id: 3,
    question: "What motivates you most?",
    options: [
      { text: "Building something from scratch", scores: { entrepreneurship: 2, marketing: 1 } },
      { text: "Making smart financial decisions", scores: { finance: 2, "personal-finance": 1 } },
      { text: "Creating memorable experiences for people", scores: { hospitality: 2, marketing: 1 } },
      { text: "Organizing and leading people well", scores: { "business-management": 2, hospitality: 1 } },
    ],
  },
  {
    id: 4,
    question: "Your friends would describe you as...",
    options: [
      { text: "Creative and full of ideas", scores: { marketing: 2, entrepreneurship: 1 } },
      { text: "Analytical and detail-oriented", scores: { finance: 2, "personal-finance": 1 } },
      { text: "Social and great with people", scores: { hospitality: 2, marketing: 1 } },
      { text: "Organized and a natural leader", scores: { "business-management": 2, entrepreneurship: 1 } },
    ],
  },
  {
    id: 5,
    question: "Which of these projects excites you most?",
    options: [
      { text: "Planning and executing a school event", scores: { hospitality: 2, "business-management": 1 } },
      { text: "Creating a social media ad campaign", scores: { marketing: 2, entrepreneurship: 1 } },
      { text: "Building a startup pitch deck", scores: { entrepreneurship: 2, finance: 1 } },
      { text: "Analyzing a company's budget or finances", scores: { finance: 2, "personal-finance": 1 } },
    ],
  },
  {
    id: 6,
    question: "Your ideal future career environment is...",
    options: [
      { text: "A fast-paced startup or my own company", scores: { entrepreneurship: 3 } },
      { text: "A bank, investment firm, or finance office", scores: { finance: 2, "personal-finance": 1 } },
      { text: "A hotel, resort, or events company", scores: { hospitality: 3 } },
      { text: "A marketing agency or brand team", scores: { marketing: 3 } },
    ],
  },
  {
    id: 7,
    question: "When you have extra money, you tend to...",
    options: [
      { text: "Save and invest it carefully", scores: { "personal-finance": 2, finance: 1 } },
      { text: "Spend it on experiences — travel, concerts, events", scores: { hospitality: 2, marketing: 1 } },
      { text: "Put it into a side hustle or new idea", scores: { entrepreneurship: 2, marketing: 1 } },
      { text: "Budget it out and track exactly where it goes", scores: { "personal-finance": 2, "business-management": 1 } },
    ],
  },
  {
    id: 8,
    question: "Your dream internship would be at...",
    options: [
      { text: "A Fortune 500 marketing department", scores: { marketing: 2, "business-management": 1 } },
      { text: "A venture capital or private equity firm", scores: { finance: 2, entrepreneurship: 1 } },
      { text: "A hotel chain or event planning company", scores: { hospitality: 3 } },
      { text: "An early-stage startup", scores: { entrepreneurship: 2, finance: 1 } },
    ],
  },
  {
    id: 9,
    question: "How do you prefer to present your work?",
    options: [
      { text: "A polished slide deck or pitch", scores: { marketing: 1, entrepreneurship: 2 } },
      { text: "A detailed written report or business plan", scores: { finance: 2, "personal-finance": 1 } },
      { text: "A face-to-face conversation or live roleplay", scores: { hospitality: 2, marketing: 1 } },
      { text: "A structured team presentation", scores: { "business-management": 2, finance: 1 } },
    ],
  },
  {
    id: 10,
    question: "Which skill do you most want to develop?",
    options: [
      { text: "Financial literacy & investing", scores: { finance: 2, "personal-finance": 2 } },
      { text: "Sales, branding & persuasion", scores: { marketing: 3 } },
      { text: "Leadership & people management", scores: { "business-management": 2, hospitality: 1 } },
      { text: "Innovation & calculated risk-taking", scores: { entrepreneurship: 3 } },
    ],
  },
  {
    id: 11,
    question: "A classmate needs help with a tough problem. You...",
    options: [
      { text: "Make them a structured plan and organize their thoughts", scores: { "business-management": 2, "personal-finance": 1 } },
      { text: "Brainstorm creative solutions with them", scores: { marketing: 1, entrepreneurship: 2 } },
      { text: "Walk them through the numbers and data", scores: { finance: 2, "personal-finance": 1 } },
      { text: "Make sure they feel heard and supported first", scores: { hospitality: 2, "business-management": 1 } },
    ],
  },
  {
    id: 12,
    question: "Which topic could you talk about for hours?",
    options: [
      { text: "Stocks, investing, and financial markets", scores: { finance: 3 } },
      { text: "Social media trends and brand strategy", scores: { marketing: 3 } },
      { text: "How successful businesses are run and managed", scores: { "business-management": 2, entrepreneurship: 1 } },
      { text: "Travel destinations and customer experiences", scores: { hospitality: 3 } },
    ],
  },
  {
    id: 13,
    question: "You prefer to compete...",
    options: [
      { text: "Solo — I like controlling my own outcome", scores: { finance: 1, marketing: 1, "personal-finance": 1, entrepreneurship: 1 } },
      { text: "With one partner", scores: { finance: 1, "business-management": 1, hospitality: 1, marketing: 1 } },
      { text: "As a team of 3", scores: { "business-management": 2, hospitality: 1, marketing: 1 } },
      { text: "Either way — I can adapt to anything", scores: { "business-management": 1, entrepreneurship: 1, hospitality: 1, marketing: 1 } },
    ],
  },
  {
    id: 14,
    question: "Your approach to risk is...",
    options: [
      { text: "I love taking big swings for big rewards", scores: { entrepreneurship: 2, marketing: 1 } },
      { text: "I calculate risk carefully before acting", scores: { finance: 2, "business-management": 1 } },
      { text: "I prefer stable, predictable paths", scores: { "personal-finance": 2, hospitality: 1 } },
      { text: "I manage risk through planning and systems", scores: { "business-management": 2, "personal-finance": 1 } },
    ],
  },
  {
    id: 15,
    question: "The best outcome of a strong DECA career would be...",
    options: [
      { text: "I launched a company of my own", scores: { entrepreneurship: 3 } },
      { text: "I mastered money and built real wealth", scores: { finance: 2, "personal-finance": 2 } },
      { text: "I built a brand people actually care about", scores: { marketing: 2, entrepreneurship: 1 } },
      { text: "I created unforgettable experiences for others", scores: { hospitality: 2, "business-management": 1 } },
    ],
  },
];
