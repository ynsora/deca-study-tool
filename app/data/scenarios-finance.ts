import type { RoleplayScenario } from "./types";

export const scenariosFinance: RoleplayScenario[] = [

  // ─── EXISTING SCENARIOS (EXPANDED) ──────────────────────────────────────────

  // Accounting Applications (AAM)
  {
    id: "aam-1",
    event: "Accounting Applications",
    eventCode: "AAM",
    cluster: "finance",
    situation:
      "You are an accounting associate at Meridian Advisory Group, a small CPA firm serving small and mid-sized businesses in suburban Columbus, Ohio. The firm was founded 18 years ago and currently manages accounting and tax services for over 130 business clients across construction, landscaping, and professional services sectors. A new client, Thornwood Landscaping LLC, has come to you for help after being referred by an existing client. The owner, Daniel Marsh, has been managing the company's books in a spreadsheet for three seasons and suspects there are cash-flow issues, but cannot pinpoint the source.\n\nAfter reviewing three months of records, you uncover a significant accounts receivable problem: AR days outstanding is averaging 68 days, well above the landscaping industry norm of 35 days, and the company has $47,000 in invoices that are more than 90 days past due across 14 separate customer accounts. Several of those accounts belong to property management companies that routinely delay payment unless formally followed up. The delayed collections have forced Daniel to defer vendor payments and draw from a $25,000 personal line of credit to cover payroll twice in the last quarter.\n\nAdditionally, the owner has been mixing personal and business expenses throughout the year, resulting in approximately $8,200 in misclassified transactions. These include a $3,100 family vacation charged to the company card, roughly $2,400 in personal vehicle fuel that was lumped into fleet costs, and $2,700 in personal home-improvement supplies mixed with job-site materials. These misclassifications overstate operating expenses, understate net income, and create significant risk if the company is ever audited by the IRS.\n\nYou must explain the impact of these issues on financial reporting accuracy, outline a concrete collections strategy to reduce AR aging, and recommend internal controls to prevent expense misclassification going forward. Present your findings and recommendations to Daniel, keeping in mind that he has no formal accounting background and responds best to practical, action-oriented guidance backed by clear numbers.",
    individualPIs: [
      "Explain the nature of accounts receivable",
      "Describe the importance of internal controls in accounting",
      "Explain the nature of cash flow management",
      "Interpret financial statements",
      "Explain the nature of effective verbal communications"
    ],
    tdmPIs: [
      "Explain the nature of accounts receivable",
      "Describe the importance of internal controls in accounting",
      "Explain the nature of cash flow management",
      "Interpret financial statements",
      "Explain the nature of effective verbal communications",
      "Explain the purpose of an accounts receivable aging report",
      "Describe the impact of misclassified transactions on financial reporting"
    ],
    judgementQuestions: [
      "How would you prioritize collection efforts across the $47,000 in overdue invoices—would you pursue all of them equally or triage by balance size and customer relationship?",
      "What specific internal controls would you recommend to prevent personal expense commingling, and how do you explain the legal risks to a small business owner who sees this as harmless?",
      "If Thornwood's cash-flow problem is severe enough that they cannot meet payroll next month, what short-term financing options would you present and what are the trade-offs?"
    ]
  },
  {
    id: "aam-2",
    event: "Accounting Applications",
    eventCode: "AAM",
    cluster: "finance",
    situation:
      "You are an accounting intern at Parkview Property Management, a mid-sized firm based in Charlotte, North Carolina that manages 320 residential rental units across 14 properties ranging from single-family homes to a 72-unit apartment complex. The company employs a controller, two property managers, and a maintenance coordinator, but relies heavily on interns during the quarterly close cycle. You have been assigned to assist with the month-end close process for March, the most complex quarter-end of the year.\n\nThe controller, Sandra Lin, has asked you to help resolve a significant discrepancy: the bank reconciliation for the operating account shows a $14,750 difference that has not been resolved in two consecutive months. Preliminary investigation reveals three separate issues contributing to the gap. First, there is an outstanding check for $6,200 written to a maintenance vendor, Precision HVAC Services, that was never cashed—the vendor has since gone out of business, and the funds may need to be escheated to the state. Second, a deposit of $5,100 representing March rent payments from the Brookside complex was recorded twice in the general ledger due to a data-entry error during a system migration. Third, there is an unrecorded bank fee of $3,450 charged quarterly by First National Bank for lockbox processing services, which the accounting team was unaware had changed from an annual billing cycle.\n\nYou must explain each reconciling item clearly, describe the correcting journal entries required for the items that have already cleared the bank but have not been properly reflected in the ledger, and outline a comprehensive month-end close checklist to prevent future unresolved reconciling items. You should also address the outstanding check and the applicable state escheatment law timeline.\n\nPresent your findings and recommendations to Sandra Lin, who expects you to demonstrate both technical accounting competence and the ability to communicate complex reconciliation issues clearly. The controller will be sharing your analysis with the company's external auditors during their fieldwork visit next week.",
    individualPIs: [
      "Explain the purpose and process of bank reconciliation",
      "Describe the nature of journal entries in accounting",
      "Explain the importance of internal controls in accounting",
      "Interpret financial statements",
      "Describe the nature of effective written communications"
    ],
    tdmPIs: [
      "Explain the purpose and process of bank reconciliation",
      "Describe the nature of journal entries in accounting",
      "Explain the importance of internal controls in accounting",
      "Interpret financial statements",
      "Describe the nature of effective written communications",
      "Explain the nature of the accounting cycle",
      "Describe the impact of errors on financial statement reliability"
    ],
    judgementQuestions: [
      "For the outstanding check that was never cashed, at what point would you recommend voiding and reissuing it, and what journal entries would that require?",
      "How does an unresolved two-month bank reconciliation affect the reliability of the financial statements that management and property owners are relying on?",
      "What technology solutions or automated controls within accounting software could prevent a duplicate deposit from going undetected for multiple weeks?"
    ]
  },

  // Business Finance (BFS)
  {
    id: "bfs-1",
    event: "Business Finance",
    eventCode: "BFS",
    cluster: "finance",
    situation:
      "You are a financial analyst at Northgate Manufacturing, a privately held company based in Rockford, Illinois that produces precision industrial components for the aerospace and automotive sectors. The company employs 94 people and generates $18 million in annual revenue, with earnings before interest and taxes of approximately $1.6 million last fiscal year. The CFO, Janet Okafor, has asked you to prepare a capital budgeting analysis for a major equipment decision that must be resolved within 30 days.\n\nThe company needs to acquire a new CNC five-axis machining center to fulfill a five-year production contract with Bridger Aerospace, a Tier 2 supplier to Boeing. The contract will generate $95,000 in incremental annual gross profit once the machine is fully operational. The machining center costs $420,000 to purchase outright from Haas Automation, or it can be obtained for $7,800 per month on a 60-month operating lease with no purchase option at the end of the term. The company's weighted average cost of capital is 8.2%, its marginal corporate tax rate is 21%, and straight-line depreciation over seven years would apply to the purchased asset.\n\nNorthgate currently holds $280,000 in unrestricted cash reserves—adequate for three months of operating expenses—and has a $500,000 revolving line of credit at 6.5% interest, of which $140,000 is already drawn. The CFO is cautious about tying up liquidity given that two other capital projects are competing for budget priority this year, including a $160,000 ERP system upgrade and a $75,000 loading dock expansion.\n\nYou must calculate and compare the net present value of both the purchase and lease options, identify qualitative factors relevant to the decision such as balance sheet presentation, technological obsolescence risk, and the company's existing debt covenants, and present a clear recommendation to Janet with supporting analysis.",
    individualPIs: [
      "Explain the nature of business finance",
      "Explain the concept of net present value",
      "Describe the impact of financing decisions on business operations",
      "Explain the difference between operating and capital leases",
      "Explain the nature of effective verbal communications"
    ],
    tdmPIs: [
      "Explain the nature of business finance",
      "Explain the concept of net present value",
      "Describe the impact of financing decisions on business operations",
      "Explain the difference between operating and capital leases",
      "Explain the nature of effective verbal communications",
      "Explain the concept of weighted average cost of capital",
      "Describe the role of cash flow analysis in capital budgeting decisions"
    ],
    judgementQuestions: [
      "How does the company's current cash reserve level and existing line of credit affect which financing option is more prudent from a liquidity standpoint?",
      "If the customer contract were cancelled after year two, how would that change your NPV analysis and which option would leave Northgate in a better financial position?",
      "Beyond NPV, what qualitative factors—such as technology obsolescence or balance sheet presentation—might influence the final decision?"
    ]
  },
  {
    id: "bfs-2",
    event: "Business Finance",
    eventCode: "BFS",
    cluster: "finance",
    situation:
      "You are a financial consultant advising Solana Restaurant Group, a privately owned hospitality company that operates six casual dining locations across the Phoenix metropolitan area. The company was founded by Carlos and Marta Reyes in 2014 and has grown steadily, with combined annual revenues of $2.4 million and a net profit margin averaging 14% across all locations. The concept focuses on farm-to-table Southwestern cuisine, and all six locations have consistently earned 4.2 to 4.6 stars on Google Reviews.\n\nThe Reyeses are evaluating whether to open a seventh location in a new mixed-use development called Camelback Commons, set to open in Q3. Total startup costs are estimated at $680,000, broken down as follows: $210,000 in leasehold improvements and buildout, $155,000 in commercial kitchen equipment, $85,000 in initial working capital and supplies, and $230,000 in pre-opening expenses including staff training, soft launch costs, and a one-time regional franchise consultation fee. The landlord at Camelback Commons is offering a 10-year lease at $14,500 per month with a 3% annual escalator.\n\nCarlos is evaluating three financing scenarios: an SBA 7(a) loan at 7.25% over 10 years covering the full $680,000 startup cost; a blended structure using 50% conventional bank financing at 6.8% and 50% equity from a silent partner, Victor Halston, who is requesting a 30% ownership stake in the new location entity; or a sale-leaseback of existing kitchen equipment across two of the current locations, expected to raise $120,000, combined with a smaller bank loan of $560,000.\n\nYou must model the annual debt service and ownership implications of each option, project the break-even revenue threshold under each structure, and present a recommendation to the Reyeses that accounts for both financial efficiency and the long-term implications for business control and exit flexibility.",
    individualPIs: [
      "Explain the nature of business finance",
      "Compare sources of financing for business expansion",
      "Explain the concept of debt-to-equity ratio",
      "Describe the impact of interest rates on financing decisions",
      "Explain the nature of effective verbal communications"
    ],
    tdmPIs: [
      "Explain the nature of business finance",
      "Compare sources of financing for business expansion",
      "Explain the concept of debt-to-equity ratio",
      "Describe the impact of interest rates on financing decisions",
      "Explain the nature of effective verbal communications",
      "Explain the concept of break-even analysis",
      "Describe the trade-offs between debt financing and equity financing"
    ],
    judgementQuestions: [
      "How would bringing in a silent equity partner at 50% affect the owner's long-term control of business decisions, and how do you weigh that against the lower debt service obligation?",
      "What annual revenue and net profit would the seventh location need to generate within 18 months for each financing scenario to be considered viable?",
      "If the new location underperforms in year one, how does each financing structure affect the owner's ability to absorb losses without jeopardizing the existing six locations?"
    ]
  },

  // Financial Services (FS)
  {
    id: "fs-1",
    event: "Financial Services",
    eventCode: "FS",
    cluster: "finance",
    situation:
      "You are a client relationship associate at Clearwater Financial Partners, a fee-only financial planning firm based in Bellevue, Washington. The firm serves approximately 280 households and charges a flat annual retainer ranging from $3,500 to $8,000 depending on complexity, with no commissions or product sales. You have been assigned a new client household for their initial comprehensive financial planning engagement.\n\nMarcus and Diana Ellison have come in for their first meeting. Marcus is 42 and earns $118,000 annually as a senior structural engineer at a civil engineering firm; Diana is 39 and earns $74,000 as an assistant superintendent at Bellevue Unified School District. They have two children: Jaylen, age 10, and Sophie, age 7. Their current financial snapshot includes $48,000 in a joint high-yield savings account at 4.6% APY, $112,000 in Marcus's employer 401(k) invested in a target-date 2045 fund, $31,000 in Diana's 403(b) also in a target-date fund, $18,500 in credit card debt split across two cards at 22.9% and 19.4% APR, and a primary mortgage with $214,000 remaining at 4.1% fixed with 19 years left.\n\nThe Ellisons want to accomplish three major financial goals: retire comfortably at or before age 65, fully fund both children's college education at a public university (currently estimated at $38,000 per year in today's dollars), and eliminate all high-interest debt within 24 months. Marcus also recently inherited a 10-acre parcel of rural land in eastern Oregon appraised at approximately $85,000, which he has no immediate plans for but wonders if it factors into their financial picture.\n\nYou must conduct an initial needs analysis, prioritize their competing financial goals using a structured framework, and outline a phased financial planning roadmap that addresses debt elimination, retirement savings optimization, education funding vehicles, and the inherited asset. Present your recommendations clearly and compassionately, as the Ellisons have expressed feeling overwhelmed by their financial situation.",
    individualPIs: [
      "Explain the nature of financial planning",
      "Explain the importance of establishing financial goals",
      "Describe strategies for managing personal debt",
      "Explain the nature of retirement planning",
      "Explain the nature of effective verbal communications"
    ],
    tdmPIs: [
      "Explain the nature of financial planning",
      "Explain the importance of establishing financial goals",
      "Describe strategies for managing personal debt",
      "Explain the nature of retirement planning",
      "Explain the nature of effective verbal communications",
      "Explain the concept of college savings vehicles",
      "Describe the impact of compound interest on long-term savings goals"
    ],
    judgementQuestions: [
      "Given the Ellisons have competing financial priorities, how would you rank debt elimination, retirement savings, and college funding, and what framework guides that prioritization?",
      "How would you explain the true cost of carrying $18,500 at 22.9% APR to clients who are reluctant to redirect savings toward debt payoff?",
      "If the Ellisons can only free up $1,200 per month for additional financial goals, how would you allocate that amount across their priorities and why?"
    ]
  },
  {
    id: "fs-2",
    event: "Financial Services",
    eventCode: "FS",
    cluster: "finance",
    situation:
      "You are a financial services representative at Keystone Community Bank, a regional bank with 22 branches across western Pennsylvania and eastern Ohio. Keystone prides itself on small business relationships and has a dedicated small business banking team. A referral client, Priya Sharma, has walked in without an appointment requesting a consultation about her business finances.\n\nPriya is the sole owner of ThreadForward, an e-commerce apparel business she launched four years ago from her spare bedroom. The business has grown rapidly, generating $890,000 in revenue last fiscal year, up from $410,000 just two years prior. Despite this growth, Priya still manages all business transactions through a personal Chase checking account that also handles her household expenses. She has no established business credit history and processes all customer payments through a third-party platform called PayEasy, which charges a flat 3.1% per transaction with no volume discounts. At her current revenue level, that fee structure is costing her approximately $27,590 per year.\n\nDuring the meeting, Priya also discloses that three weeks ago she received a sophisticated phishing email impersonating her PayEasy account manager, asking her to verify banking credentials through a spoofed login page. She clicked the link but did not enter her information after noticing a discrepancy in the URL. She is now concerned about the security of her financial accounts and is unsure what protections she has in place.\n\nYou must recommend appropriate business banking products for her current stage of growth—including checking, savings, and a business line of credit—explain how she can begin building a business credit profile, outline a lower-cost payment processing solution, and recommend specific cybersecurity and fraud protection practices for her financial accounts. Use plain, jargon-free language appropriate for a business owner whose expertise is in fashion and logistics, not banking.",
    individualPIs: [
      "Explain the nature of financial services",
      "Describe types of business banking accounts and their purposes",
      "Explain the importance of business credit",
      "Describe strategies for protecting financial accounts from fraud",
      "Explain the nature of effective verbal communications"
    ],
    tdmPIs: [
      "Explain the nature of financial services",
      "Describe types of business banking accounts and their purposes",
      "Explain the importance of business credit",
      "Describe strategies for protecting financial accounts from fraud",
      "Explain the nature of effective verbal communications",
      "Explain the benefits of merchant services solutions for small businesses",
      "Describe the impact of payment processing costs on small business profitability"
    ],
    judgementQuestions: [
      "How would separating personal and business finances improve both Ms. Sharma's tax preparation process and her ability to secure future business financing?",
      "At $890,000 in annual revenue, approximately how much is she losing annually to the 3.1% processing fee, and what alternatives would reduce that cost?",
      "Beyond strong passwords, what specific multi-factor authentication and account monitoring practices would you recommend to a business owner who is not particularly tech-savvy?"
    ]
  },

  // Securities & Investments (SI)
  {
    id: "si-1",
    event: "Securities & Investments",
    eventCode: "SI",
    cluster: "finance",
    situation:
      "You are a junior investment consultant at Vantage Capital Advisors, a registered investment advisory firm based in Seattle, Washington. The firm manages approximately $340 million in assets under management for individual and institutional clients. You have been asked to lead the initial consultation for a prospective client who was referred by an existing account holder.\n\nRaymond Chu is a 34-year-old senior software engineer at a mid-stage SaaS company. He is preparing to invest $85,000 that he has accumulated in a high-yield savings account over the past four years. He describes his risk tolerance as moderate, citing that he could tolerate a 15 to 20 percent portfolio drawdown without panic-selling but would be uncomfortable with anything steeper without a clear recovery rationale. His time horizon is approximately 25 years before planned retirement at age 59. His only existing investment account is a company 401(k) at Fidelity with $42,000 invested in a 2055 target-date fund, to which he contributes 6% of salary—just enough to receive his employer's 3% match.\n\nRaymond has been researching investments through Reddit communities and YouTube finance channels and is particularly drawn to technology stocks, naming NVIDIA, Microsoft, and a handful of cloud-infrastructure companies as stocks he has already researched. He is interested in understanding the difference between index funds, ETFs, and individual stock picking, and wants to know how to build a portfolio that is both diversified and has meaningful upside. He is aware that his 401(k) already has significant technology exposure through the target-date fund's equity component.\n\nYou must explain core principles of diversification and appropriate asset allocation for his investor profile, compare the cost structures and risk characteristics of index funds, ETFs, and individual stocks, propose a practical initial portfolio allocation, and specifically address the behavioral and concentration risk of overweighting familiar sectors. You should also discuss tax-advantaged account options such as a Roth IRA before discussing taxable brokerage account strategy.",
    individualPIs: [
      "Explain the nature of investments",
      "Describe the concept of diversification in an investment portfolio",
      "Compare investment vehicles including stocks, bonds, and funds",
      "Explain the relationship between risk and return",
      "Explain the nature of effective verbal communications"
    ],
    tdmPIs: [
      "Explain the nature of investments",
      "Describe the concept of diversification in an investment portfolio",
      "Compare investment vehicles including stocks, bonds, and funds",
      "Explain the relationship between risk and return",
      "Explain the nature of effective verbal communications",
      "Explain the concept of asset allocation",
      "Describe the impact of behavioral biases on investment decision-making"
    ],
    judgementQuestions: [
      "How would you explain the concept of home bias or familiarity bias to Mr. Chu when he pushes back on reducing his technology concentration?",
      "If market volatility causes Mr. Chu's portfolio to drop 20% in year two, what client communication approach would you use to prevent him from panic-selling?",
      "How does a 25-year time horizon change the asset allocation conversation compared to a client who needs liquidity within five years?"
    ]
  },
  {
    id: "si-2",
    event: "Securities & Investments",
    eventCode: "SI",
    cluster: "finance",
    situation:
      "You are an investment analyst at Bridgepoint Wealth Management, a boutique advisory firm based in Richmond, Virginia that specializes in nonprofit and foundation clients. The firm currently serves 18 endowments, private foundations, and charitable trusts with a combined $140 million under management. You have been assigned primary coverage of the Hartley Family Foundation, a small charitable endowment established in memory of industrialist George Hartley in 1998.\n\nThe foundation currently holds $2.4 million in assets and its investment committee—composed of three family members and two independent trustees—has asked you to present a portfolio review and strategic realignment proposal. The current portfolio is 90% allocated to a single Vanguard municipal bond fund yielding 3.2% annually, with the remaining 10% held in a money market fund. The investment committee is concerned that this conservative posture is structurally insufficient: the foundation operates under a 5% annual spending policy required to maintain IRS private foundation status, and current inflation is running at 3.8%. This means the portfolio must return at least 8.8% in nominal terms just to sustain real purchasing power while meeting distribution requirements—a threshold the current allocation cannot approach.\n\nThe foundation's investment policy statement, last updated in 2019, specifies a moderate risk tolerance, a perpetual time horizon, and a set of ESG exclusions that prohibit investment in securities of companies deriving more than 10% of revenue from tobacco, firearms manufacturing, or gambling operations. The policy also requires quarterly rebalancing and limits any single equity position to no more than 5% of total portfolio value.\n\nYou must present a quantitative analysis demonstrating the long-term shortfall risk under the current allocation, recommend a revised asset allocation that can realistically target a 7 to 8% nominal return consistent with the foundation's constraints, and propose a formal rebalancing and monitoring policy. You will present to all five investment committee members, some of whom are skeptical of any increase in equity exposure.",
    individualPIs: [
      "Explain the nature of investments",
      "Describe the concept of asset allocation",
      "Explain the relationship between risk and return",
      "Describe the nature of socially responsible investing",
      "Explain the nature of effective verbal communications"
    ],
    tdmPIs: [
      "Explain the nature of investments",
      "Describe the concept of asset allocation",
      "Explain the relationship between risk and return",
      "Describe the nature of socially responsible investing",
      "Explain the nature of effective verbal communications",
      "Explain the concept of portfolio rebalancing",
      "Describe the impact of inflation on fixed-income investment returns"
    ],
    judgementQuestions: [
      "How would you demonstrate to the committee the math behind the real return deficit—specifically, why a 3.2% yield combined with 3.8% inflation and a 5% spending rate creates a structural shortfall?",
      "What specific asset classes would you add to diversify beyond the municipal bond fund while respecting the foundation's ESG exclusions?",
      "If a committee member argues that any increase in equity exposure is too risky for a charitable endowment, how would you reframe the concept of risk in the context of a perpetual spending obligation?"
    ]
  },

  // ─── NEW SCENARIOS ────────────────────────────────────────────────────────────

  // Accounting Applications Series (ACT)
  {
    id: "act-1",
    event: "Accounting Applications Series",
    eventCode: "ACT",
    cluster: "finance",
    situation:
      "You are a staff accountant at Graystone & Holloway CPAs, a regional accounting firm with offices in Denver and Colorado Springs. The firm serves a portfolio of over 200 business clients across retail, healthcare, and construction. You have been assigned to support the year-end audit preparation for a new client, Ridgeline Contracting Inc., a residential and light commercial general contractor with $6.2 million in annual revenue and 38 employees.\n\nDuring your preliminary fieldwork, you discover three material issues in Ridgeline's financial records. First, the company has recognized $840,000 in revenue on a large commercial project that is only 35% complete under the percentage-of-completion method, significantly overstating income for the current period. Second, the company has failed to capitalize $112,000 in equipment improvements that clearly extend the useful life of a concrete mixing fleet by an estimated four years, instead expensing the full amount in the current year. Third, the company's inventory of job-site materials—valued at $178,000 on the books—has not been physically counted or reconciled in 14 months, and the warehouse supervisor estimates actual on-hand inventory at closer to $130,000.\n\nThese issues collectively affect both the income statement and the balance sheet in material ways that could mislead lenders and bonding companies who rely on Ridgeline's financial statements. The company uses a $3.5 million revolving credit facility with Mountain West Bank, which includes a covenant requiring a minimum current ratio of 1.5:1 and a debt-to-EBITDA ratio below 3.0x. Your manager has asked you to present your findings to the company's CFO before the formal audit begins.\n\nYou must explain each accounting error, identify the correct accounting treatment under GAAP, quantify the impact of each correction on the financial statements, and recommend internal controls and record-keeping procedures to prevent recurrence. Be prepared to explain the implications for the company's bank covenants if the corrections are applied.",
    individualPIs: [
      "Explain the nature of the accounting cycle",
      "Describe the concept of revenue recognition under GAAP",
      "Explain the difference between capital expenditures and operating expenses",
      "Describe the importance of inventory management and valuation",
      "Explain the nature of effective verbal communications"
    ],
    tdmPIs: [
      "Explain the nature of the accounting cycle",
      "Describe the concept of revenue recognition under GAAP",
      "Explain the difference between capital expenditures and operating expenses",
      "Describe the importance of inventory management and valuation",
      "Explain the nature of effective verbal communications",
      "Describe the impact of accounting errors on financial statement users",
      "Explain the role of internal controls in ensuring financial reporting accuracy"
    ],
    judgementQuestions: [
      "If correcting all three errors causes Ridgeline to breach its bank covenants, how do you advise the CFO to handle communication with Mountain West Bank—and does the accountant have any professional obligation to the bank directly?",
      "How would you explain the difference between a capital expenditure and a repair expense to a CFO who argues that the equipment improvements were routine maintenance?",
      "If the physical inventory count reveals the $48,000 shortfall is due to employee theft rather than counting errors, what are the accountant's responsibilities under GAAP and professional standards?"
    ]
  },
  {
    id: "act-2",
    event: "Accounting Applications Series",
    eventCode: "ACT",
    cluster: "finance",
    situation:
      "You are an accounting specialist at Terrapin Healthcare Systems, a nonprofit regional hospital network based in Baltimore, Maryland. Terrapin operates three acute care hospitals, two urgent care centers, and a behavioral health clinic. The network generated $412 million in operating revenue last fiscal year and employs approximately 3,200 staff. You work within the corporate accounting and financial reporting department under the direction of the VP of Finance.\n\nThe VP has asked you to investigate a series of discrepancies discovered during the preparation of the organization's Form 990 filing. Three issues have emerged: a $2.1 million grant from the Maryland Health Foundation designated for rural telehealth equipment expansion appears to have been commingled with operating funds and partially spent on non-qualifying expenses including staff overtime and administrative software licenses. Additionally, depreciation schedules for medical imaging equipment acquired three years ago contain an error: the equipment was depreciated over five years instead of the correct seven-year useful life, resulting in $340,000 of cumulative excess depreciation. Finally, accounts payable contains $580,000 in invoices from a single vendor, Medline Industries, that lack proper three-way match documentation—no purchase orders or receiving reports can be located for 23 of the invoices.\n\nFor a nonprofit hospital, these issues carry consequences beyond financial statement accuracy. Grant misuse can trigger clawback provisions and damage relationships with future funding sources. Depreciation errors affect the accuracy of program expense ratios reported to regulators and donors. Unsupported payables raise internal controls concerns that external auditors and the hospital's audit committee will scrutinize heavily.\n\nYou must explain the accounting and compliance implications of each issue, describe the corrective journal entries or process changes required, and recommend improvements to the hospital's grant accounting, asset management, and accounts payable processes. Present your findings to the VP of Finance in a manner suitable for sharing with the hospital's board audit committee.",
    individualPIs: [
      "Explain the nature of nonprofit accounting and fund accounting",
      "Describe the process of depreciation and its impact on financial statements",
      "Explain the importance of three-way match in accounts payable controls",
      "Describe the nature of grant accounting and restricted fund management",
      "Explain the nature of effective verbal communications"
    ],
    tdmPIs: [
      "Explain the nature of nonprofit accounting and fund accounting",
      "Describe the process of depreciation and its impact on financial statements",
      "Explain the importance of three-way match in accounts payable controls",
      "Describe the nature of grant accounting and restricted fund management",
      "Explain the nature of effective verbal communications",
      "Describe the role of internal controls in healthcare financial management",
      "Explain the compliance implications of grant fund misuse"
    ],
    judgementQuestions: [
      "If the grant misuse was unintentional—resulting from inadequate fund accounting systems rather than deliberate misconduct—does that change your recommendation about whether to proactively disclose to the Maryland Health Foundation?",
      "How would you explain the cumulative depreciation error to a board member who is a physician, not a financial professional, and wants to understand why it matters for the hospital's mission?",
      "For the 23 unsupported Medline invoices totaling $580,000, what process would you use to reconstruct documentation retroactively, and at what point would you recommend escalating to the board's audit committee?"
    ]
  },

  // Business Finance Series (BFS) — new scenarios
  {
    id: "bfs-3",
    event: "Business Finance Series",
    eventCode: "BFS",
    cluster: "finance",
    situation:
      "You are a corporate finance associate at Alvarez & Stern Financial Consulting, a boutique advisory firm that specializes in growth-stage companies. The firm has been retained by Kinetic Mobility Inc., a Series A electric scooter and bike-share startup headquartered in Austin, Texas. Kinetic currently operates fleets in three Texas cities and generated $4.8 million in gross revenue last fiscal year, but posted a net operating loss of $1.1 million as it invests in fleet expansion and technology infrastructure.\n\nThe company's founder and CEO, Tanya Osei, is preparing to raise a Series B round of $12 million to fund a 24-month expansion into eight new markets across the Sunbelt. The expansion requires $7.2 million for new fleet procurement and charging infrastructure, $2.1 million for market launch costs including regulatory permitting and marketing, and $2.7 million as a liquidity buffer to fund operations through projected breakeven, which the company's financial model places at month 19 of the expansion. Kinetic's current burn rate is $310,000 per month, and its existing cash reserves—including the remaining balance of its Series A—stand at $1.4 million, giving the company approximately 4.5 months of runway.\n\nInvestors in the Series B round are requesting a detailed unit economics analysis, including cost per ride, contribution margin per vehicle per day, and payback period per scooter. The current average revenue per ride is $3.40, variable cost per ride is $1.85, and each scooter costs $640 and has an operational life of approximately 18 months. The company's CFO has also been asked by a potential lead investor, Greenfield Ventures, to present a scenario analysis showing how cash needs change if the expansion is completed over 36 months instead of 24.\n\nYou must prepare Tanya and the CFO for their investor presentations by analyzing unit economics, validating the fundraising amount needed, and explaining the trade-offs of an accelerated versus extended expansion timeline. Present your analysis clearly to Tanya as though she will relay the key points to investors.",
    individualPIs: [
      "Explain the nature of business finance",
      "Describe the concept of unit economics and contribution margin",
      "Explain the nature of startup fundraising and venture capital",
      "Describe the role of cash flow forecasting in business planning",
      "Explain the nature of effective verbal communications"
    ],
    tdmPIs: [
      "Explain the nature of business finance",
      "Describe the concept of unit economics and contribution margin",
      "Explain the nature of startup fundraising and venture capital",
      "Describe the role of cash flow forecasting in business planning",
      "Explain the nature of effective verbal communications",
      "Explain the concept of burn rate and runway in startup finance",
      "Describe the trade-offs between accelerated and staged business expansion"
    ],
    judgementQuestions: [
      "If Greenfield Ventures offers the full $12 million at a pre-money valuation that Tanya believes undervalues the company by 30%, what factors should guide her decision to accept, negotiate, or pursue alternative investors?",
      "How would you explain the payback period calculation per scooter to a lead investor who is skeptical that 18-month vehicle lifespans make the unit economics viable?",
      "If Kinetic's burn rate climbs to $420,000 per month during the expansion, how does that affect the adequacy of the $2.7 million liquidity buffer, and what contingency actions should be prepared in advance?"
    ]
  },
  {
    id: "bfs-4",
    event: "Business Finance Series",
    eventCode: "BFS",
    cluster: "finance",
    situation:
      "You are a finance associate at Cornerstone Capital Advisors, a middle-market M&A advisory firm based in Minneapolis. The firm has been engaged by the shareholders of Lakeland Dairy Processing Co., a family-owned cheese and butter manufacturing company with $28 million in annual revenue and $3.2 million in adjusted EBITDA. The Lakeland family—three siblings in their 60s who co-own the company—has decided to sell and has engaged Cornerstone to run a structured sale process. Your role is to support the deal team in preparing the financial analysis and advising the family on transaction structure.\n\nTwo strategic buyers have submitted non-binding letters of intent. The first, Heartland Food Group, a national dairy conglomerate, has offered $22.4 million in an all-cash deal representing a 7.0x EBITDA multiple. The second, Prairie Farms Cooperative, a regional dairy co-op, has offered $19.2 million in a mixed consideration structure: $14.4 million in cash at closing and $4.8 million in seller financing over five years at 5.5% interest. Lakeland's balance sheet shows $6.8 million in long-term debt that must be paid off at closing, reducing net proceeds under either deal. The family's combined tax basis in the company is $2.1 million, and the sale will be structured as an asset sale per buyer preference, which triggers ordinary income and capital gains tax treatment on different asset categories.\n\nThe family has also raised concerns about workforce continuity: Lakeland employs 84 people, including 31 who have worked at the company for more than 15 years. Prairie Farms has committed in writing to retain all employees for at least 24 months post-closing. Heartland has made no such commitment and has a history of consolidating acquired production facilities.\n\nYou must compare the two offers on a net proceeds basis after debt payoff and estimated taxes, explain the risks and benefits of accepting seller financing from Prairie Farms, and address the family's non-financial considerations. Present your analysis to the three family members, who have differing opinions on which deal to accept.",
    individualPIs: [
      "Explain the nature of mergers and acquisitions",
      "Describe the concept of enterprise value and EBITDA multiples",
      "Explain the tax implications of asset sales versus stock sales",
      "Describe the risks and benefits of seller financing arrangements",
      "Explain the nature of effective verbal communications"
    ],
    tdmPIs: [
      "Explain the nature of mergers and acquisitions",
      "Describe the concept of enterprise value and EBITDA multiples",
      "Explain the tax implications of asset sales versus stock sales",
      "Describe the risks and benefits of seller financing arrangements",
      "Explain the nature of effective verbal communications",
      "Describe the role of non-financial considerations in business sale decisions",
      "Explain the impact of deal structure on net seller proceeds"
    ],
    judgementQuestions: [
      "After accounting for debt payoff and taxes, what is the estimated net proceeds difference between the two offers, and does the Prairie Farms seller note change the comparison materially if Prairie Farms defaults in year three?",
      "How would you facilitate a productive conversation among three siblings with different financial needs and different levels of concern for employee welfare?",
      "If Heartland's offer is financially superior but the family ultimately chooses Prairie Farms for employee-related reasons, what is your professional responsibility as their advisor?"
    ]
  },

  // Corporate Finance Team Decision Making (CFTDM)
  {
    id: "cftdm-1",
    event: "Corporate Finance Team Decision Making",
    eventCode: "CFTDM",
    cluster: "finance",
    situation:
      "You are a two-person corporate finance team at Solaris Energy Partners, a publicly traded mid-cap renewable energy developer based in Houston, Texas. Solaris focuses on utility-scale solar and wind project development across the central United States and currently has a project pipeline of $1.8 billion. The company generates $240 million in annual revenue, carries $680 million in long-term debt at a weighted average interest rate of 5.4%, and has a current market capitalization of approximately $920 million. The CFO, Rebecca Tran, has called an urgent strategy session.\n\nSolaris has received an unsolicited acquisition approach from Apex Power Corporation, a Fortune 500 energy company, proposing to acquire Solaris at $38 per share in cash—a 22% premium over yesterday's closing price of $31.15. Apex has indicated this offer will expire in 21 days. The Solaris board has retained Goldman Sachs as its financial advisor but has also asked the internal corporate finance team to prepare an independent financial assessment to inform the board's deliberations. Simultaneously, a large activist investor, Ridgecrest Capital Management, which owns 8.3% of Solaris shares, has publicly stated that $38 per share undervalues the company and is pushing the board to reject the offer or run a broader sale process.\n\nYour team must analyze whether $38 per share represents fair value using at least two valuation methodologies—including a discounted cash flow analysis based on the company's five-year financial projections and a comparable company trading multiple analysis using peer renewable energy developers. The company's five-year unlevered free cash flow projections total $620 million, the terminal growth rate assumption is 2.5%, and the company's WACC is 7.8%. Peer companies trade at an average EV/EBITDA multiple of 14.2x; Solaris's trailing EBITDA is $88 million.\n\nYou must present your valuation analysis, a recommendation on whether to accept, reject, or solicit competing bids, and an assessment of the strategic risks of remaining independent versus being acquired. Present to CFO Rebecca Tran.",
    individualPIs: [
      "Explain the nature of mergers and acquisitions from a target company perspective",
      "Describe the discounted cash flow valuation methodology",
      "Explain the concept of comparable company analysis",
      "Describe the role of the board of directors in evaluating acquisition offers",
      "Explain the nature of effective verbal communications"
    ],
    tdmPIs: [
      "Explain the nature of mergers and acquisitions from a target company perspective",
      "Describe the discounted cash flow valuation methodology",
      "Explain the concept of comparable company analysis",
      "Describe the role of the board of directors in evaluating acquisition offers",
      "Explain the nature of effective verbal communications",
      "Explain the impact of activist investors on corporate decision-making",
      "Describe the strategic and financial trade-offs of public company independence versus acquisition"
    ],
    judgementQuestions: [
      "If your DCF analysis yields a per-share value of $43 and the comparable company analysis yields $36, how do you reconcile the discrepancy for the board, and which methodology do you weight more heavily in this context?",
      "How does the 21-day offer expiration deadline affect the board's negotiating posture, and what tactical responses might the board consider beyond simply accepting or rejecting?",
      "If Ridgecrest Capital escalates its pressure campaign by calling for a shareholder vote to remove two board members, how does that change the internal analysis you present to the CFO?"
    ]
  },
  {
    id: "cftdm-2",
    event: "Corporate Finance Team Decision Making",
    eventCode: "CFTDM",
    cluster: "finance",
    situation:
      "You are a two-person corporate finance team at Meridian Consumer Brands, a publicly traded consumer goods company that markets personal care and household cleaning products. The company reported $1.1 billion in revenue last fiscal year with a 12.4% adjusted EBITDA margin. Meridian's shares trade at $44.20 on the NYSE under the ticker MCB. The company carries $380 million in total debt, has $142 million in cash on hand, and generates approximately $95 million in annual free cash flow.\n\nThe board of directors has asked your team to evaluate three competing uses of the company's free cash flow and balance sheet capacity for the upcoming fiscal year: returning $75 million to shareholders via a share repurchase program at current market prices; acquiring BreezeFresh Holdings, a small but fast-growing natural cleaning products brand with $38 million in revenue growing at 34% annually, asking for a purchase price of $180 million (approximately 4.7x trailing revenue); or investing $90 million in an accelerated organic growth initiative to expand Meridian's direct-to-consumer e-commerce channel, which currently represents only 6% of total revenue versus the industry average of 19%.\n\nEach option has strategic merit, but the company can realistically fund only one major initiative this year without breaching its leverage covenant of 3.5x Net Debt/EBITDA. Currently, Net Debt is $238 million and EBITDA is $136 million, yielding a ratio of 1.75x. The BreezeFresh acquisition would be financed with $80 million cash and $100 million in new debt, pushing the leverage ratio to approximately 2.5x. The board has also noted that a key competitor, HorizonClean, recently announced a $220 million acquisition of a natural products brand that directly competes with BreezeFresh.\n\nYour team must analyze all three options on financial return, strategic fit, execution risk, and shareholder value creation. Present a prioritized recommendation to the CFO and the board's finance committee, backed by quantitative analysis.",
    individualPIs: [
      "Explain the nature of capital allocation decisions in corporate finance",
      "Describe the financial implications of share repurchase programs",
      "Explain the concept of acquisition valuation using revenue multiples",
      "Describe the role of leverage ratios in corporate financing decisions",
      "Explain the nature of effective verbal communications"
    ],
    tdmPIs: [
      "Explain the nature of capital allocation decisions in corporate finance",
      "Describe the financial implications of share repurchase programs",
      "Explain the concept of acquisition valuation using revenue multiples",
      "Describe the role of leverage ratios in corporate financing decisions",
      "Explain the nature of effective verbal communications",
      "Describe how competitive dynamics influence corporate strategic decisions",
      "Explain the trade-offs between organic growth investment and inorganic acquisition"
    ],
    judgementQuestions: [
      "How does HorizonClean's competing acquisition of a similar brand change the strategic urgency of the BreezeFresh decision, and should competitive pressure ever override a rigorous financial analysis?",
      "If the board's primary stated goal is maximizing earnings per share over the next 12 months, how does that objective affect your ranking of the three options?",
      "At 4.7x revenue, the BreezeFresh valuation is aggressive for a consumer goods acquisition. What integration risks and synergy assumptions would need to be validated before you could confidently recommend proceeding?"
    ]
  },

  // Financial Consulting (FNC)
  {
    id: "fnc-1",
    event: "Financial Consulting",
    eventCode: "FNC",
    cluster: "finance",
    situation:
      "You are a financial consultant at Beacon Consulting Group, a generalist advisory firm serving small and mid-sized companies. You have been engaged by Whitmore Precision Tools, a privately held manufacturer of industrial cutting instruments based in Worcester, Massachusetts. The company has been in operation for 41 years, employs 112 people, and is owned entirely by its founder, Harold Whitmore, who is 68 years old. Harold has recently been diagnosed with a serious but manageable health condition and has decided to accelerate his succession planning.\n\nThe company generates $19.4 million in annual revenue with adjusted EBITDA of $2.8 million. It carries no long-term debt and owns its 48,000-square-foot manufacturing facility outright, which was last appraised at $3.1 million. Harold has three adult children: Margaret, who works as the VP of Operations and is widely respected by the workforce; David, who has no involvement in the business and is a practicing attorney in Chicago; and Claire, who serves on the board but has stated she has no interest in managing day-to-day operations. Harold wants to ensure the business continues to operate, that all three children are treated equitably in his estate, and that the transition does not disrupt the 112 employees or key customer relationships.\n\nThree succession structures are under consideration. First, an Employee Stock Ownership Plan (ESOP) in which the company is sold to a trust on behalf of employees, funded by a combination of bank financing and seller notes. Second, a sale to a private equity-backed strategic buyer that has already expressed interest at a preliminary valuation of 6.5x EBITDA. Third, a management buyout led by Margaret and two other senior managers, financed through SBA lending and seller financing over a 7-year term. Harold has also flagged that approximately $1.8 million of the EBITDA figure is attributable to his personal customer relationships, which raises a key question about normalized earnings under new management.\n\nYou must evaluate each succession option on value realization, tax efficiency, legacy preservation, and family equity, and present a structured recommendation to Harold that also addresses the customer relationship risk. You have 20 minutes and will take questions from Harold.",
    individualPIs: [
      "Explain the nature of business succession planning",
      "Describe the structure and benefits of Employee Stock Ownership Plans",
      "Explain the concept of normalized EBITDA in business valuation",
      "Describe the financial implications of management buyouts",
      "Explain the nature of effective verbal communications"
    ],
    tdmPIs: [
      "Explain the nature of business succession planning",
      "Describe the structure and benefits of Employee Stock Ownership Plans",
      "Explain the concept of normalized EBITDA in business valuation",
      "Describe the financial implications of management buyouts",
      "Explain the nature of effective verbal communications",
      "Describe the role of tax planning in business succession decisions",
      "Explain the impact of key-person dependency on business valuation"
    ],
    judgementQuestions: [
      "If normalized EBITDA—after stripping out Harold's personal customer relationships—is only $1.0 million rather than $2.8 million, how dramatically does that change the valuation under each succession option?",
      "How do you navigate the family dynamics challenge: ensuring David and Claire receive equitable estate value while protecting Margaret's ability to lead the business as the operating successor?",
      "If Harold's health deteriorates more rapidly than anticipated and he needs liquidity within 18 months, which succession structure can be executed on that timeline and what are the trade-offs?"
    ]
  },
  {
    id: "fnc-2",
    event: "Financial Consulting",
    eventCode: "FNC",
    cluster: "finance",
    situation:
      "You are a financial consultant at Vantage Advisory Partners, a firm specializing in turnaround consulting and restructuring advisory for distressed businesses. You have been retained by the board of directors of Cascade Specialty Retail Inc., a chain of 34 outdoor recreation gear stores headquartered in Portland, Oregon. The company once operated 58 locations and generated over $180 million in revenue, but has experienced five consecutive years of declining comparable store sales as online competitors have captured market share.\n\nCascade's current annual revenue is $97 million, down 11% year over year. Gross margin has compressed from 42% to 34% as the company has discounted aggressively to clear inventory. Operating expenses including rent, payroll, and corporate overhead total $38.4 million annually, leaving an operating loss of $5.5 million. The company has $12.2 million in cash remaining, $44 million in outstanding revolving credit with PacWest Bank—the credit facility matures in 11 months—and $8.7 million in trade payables that are 30 to 75 days past due. PacWest has indicated it will not renew the facility without a credible operational restructuring plan.\n\nCascade's board has asked you to present a financial restructuring strategy. Several options are on the table: closing the 14 least-productive locations and renegotiating leases on the remaining 20; pursuing a sale of the company to an outdoor lifestyle private equity firm that approached the board three months ago but was turned away when the company was still hopeful about recovery; selling or monetizing the company's proprietary house-brand product line, which carries a trademark and generates $14 million in revenue, to a third-party manufacturer; or filing for Chapter 11 bankruptcy protection to use the court process to restructure debt and reject unfavorable leases.\n\nYou must present a prioritized restructuring roadmap that addresses the immediate liquidity crisis, outlines a path to operational profitability, and evaluates the bankruptcy option as a tool rather than a last resort. Present your analysis to the board of directors.",
    individualPIs: [
      "Explain the nature of business restructuring and turnaround management",
      "Describe the financial implications of store closures and lease renegotiations",
      "Explain the concept of Chapter 11 bankruptcy as a restructuring tool",
      "Describe strategies for managing a liquidity crisis in a retail business",
      "Explain the nature of effective verbal communications"
    ],
    tdmPIs: [
      "Explain the nature of business restructuring and turnaround management",
      "Describe the financial implications of store closures and lease renegotiations",
      "Explain the concept of Chapter 11 bankruptcy as a restructuring tool",
      "Describe strategies for managing a liquidity crisis in a retail business",
      "Explain the nature of effective verbal communications",
      "Describe the role of asset monetization in financial distress situations",
      "Explain the impact of credit facility maturity on distressed company options"
    ],
    judgementQuestions: [
      "Given that the credit facility matures in 11 months and the company has $12.2 million in cash, what is the minimum monthly cash burn rate the company can sustain without a refinancing, and does a Chapter 11 filing change that calculus?",
      "If selling the house-brand trademark generates $18 million but eliminates $14 million in annual revenue, how do you model whether that trade-off improves or worsens the company's path to profitability?",
      "How would you advise the board on timing: at what point does delaying a Chapter 11 filing move from a reasonable strategic choice to a decision that harms creditors and triggers personal liability for board members?"
    ]
  },

  // Financial Statement Analysis (FSA)
  {
    id: "fsa-1",
    event: "Financial Statement Analysis",
    eventCode: "FSA",
    cluster: "finance",
    situation:
      "You are a financial analyst in the credit department at Pacific Commerce Bank, a regional commercial lender. The bank specializes in commercial real estate and business loans for companies with revenues between $5 million and $150 million. You have been assigned to analyze a loan application from Redstone Industrial Supply LLC, a wholesale distributor of plumbing and HVAC supplies headquartered in Sacramento, California. Redstone is requesting a $4.5 million five-year term loan to acquire a competing distributor, Valley Pipe & Supply, and is also seeking an increase in its existing revolving credit facility from $2 million to $4 million.\n\nRedstone has submitted three years of audited financial statements. Key metrics from the most recent year show: revenue of $31.2 million (up 8% from the prior year), gross profit margin of 22.4% (down from 25.1% two years ago), net income of $740,000, total assets of $18.6 million, total liabilities of $13.1 million, and total equity of $5.5 million. Current assets include $4.8 million in accounts receivable and $5.2 million in inventory. Current liabilities include $3.9 million in accounts payable and $1.2 million in the current portion of long-term debt. The company's existing long-term debt totals $7.4 million.\n\nTrend analysis reveals some concerning patterns. Inventory turnover has declined from 8.2x to 5.6x over three years, suggesting slowing demand or overstocking. The gross margin compression of 270 basis points coincides with the company increasing its reliance on a single supplier, Apex Plumbing Products, which now accounts for 61% of all purchases. Days sales outstanding has increased from 38 days to 54 days. Free cash flow is positive at $1.1 million per year, but the proposed acquisition will add approximately $2.8 million in annual debt service to the company's obligations.\n\nYou must perform a comprehensive ratio analysis, identify the key credit risks in this application, assess the company's capacity to service the proposed debt based on current free cash flow, and present a recommendation on whether to approve, approve with conditions, or decline the loan. Your analysis will be reviewed by the senior credit officer.",
    individualPIs: [
      "Explain the nature and purpose of financial statement analysis",
      "Calculate and interpret liquidity, leverage, and profitability ratios",
      "Describe the importance of trend analysis in credit evaluation",
      "Explain the concept of debt service coverage ratio",
      "Explain the nature of effective verbal communications"
    ],
    tdmPIs: [
      "Explain the nature and purpose of financial statement analysis",
      "Calculate and interpret liquidity, leverage, and profitability ratios",
      "Describe the importance of trend analysis in credit evaluation",
      "Explain the concept of debt service coverage ratio",
      "Explain the nature of effective verbal communications",
      "Describe the impact of supplier concentration risk on credit analysis",
      "Explain how acquisition financing changes a company's credit profile"
    ],
    judgementQuestions: [
      "With a debt service coverage ratio that falls below 1.25x after the new loan is added, what loan conditions or covenants would you require to make this credit approvable rather than declining it outright?",
      "How would you explain to the business owner that a gross margin decline of 270 basis points over three years is more concerning than the revenue growth number, and what follow-up questions would you ask about supplier contract terms?",
      "If the inventory turnover decline is explained by Redstone pre-buying inventory ahead of a supplier price increase, does that change your risk assessment, and what documentation would you request to verify that explanation?"
    ]
  },
  {
    id: "fsa-2",
    event: "Financial Statement Analysis",
    eventCode: "FSA",
    cluster: "finance",
    situation:
      "You are a buy-side equity research analyst at Pinnacle Asset Management, a mid-sized investment firm managing $2.8 billion in assets. Your team covers the specialty retail sector, and you have been tasked with producing a financial analysis of two competing home furnishings retailers in advance of a portfolio allocation decision. The two companies are Hearthstone Home Furnishings (HHFN), a publicly traded chain with 210 stores, and Veranda Living Inc. (VLIV), a direct-to-consumer online retailer that went public 14 months ago.\n\nHearthstone reported the following for the most recent fiscal year: revenue of $1.84 billion, gross margin of 38.2%, operating margin of 6.4%, EPS of $3.18, and return on equity of 14.6%. The company carries $620 million in long-term debt, generated $148 million in operating cash flow, and spent $62 million in capital expenditures. Its P/E ratio is 17.2x and its EV/EBITDA is 9.4x. Veranda Living reported revenue of $410 million growing at 41% year over year, a gross margin of 52.8%, an operating loss of $28 million, and negative free cash flow of $41 million. The company has $95 million in cash, no long-term debt, and trades at 4.8x trailing revenue.\n\nYour analysis must go beyond headline numbers. Hearthstone's revenue has grown at a compound annual rate of just 2.1% over five years, and same-store sales have been flat to slightly negative for three consecutive years. The company has maintained EPS growth primarily through aggressive share repurchases—$210 million over two years—reducing share count by 12%. Veranda Living's operating losses are concentrated in fulfillment infrastructure and technology investment that management argues are non-recurring; adjusted EBITDA, excluding stock-based compensation and one-time costs, is positive at $18 million.\n\nYou must produce a comparative financial analysis, evaluate the quality of earnings for each company, assess which stock presents the more attractive risk-adjusted investment opportunity, and present your recommendation to the portfolio management committee with a proposed position sizing rationale.",
    individualPIs: [
      "Explain the nature and purpose of financial statement analysis",
      "Describe the concept of earnings quality and adjusted versus GAAP metrics",
      "Explain the impact of share repurchases on earnings per share",
      "Compare valuation methodologies for growth versus mature companies",
      "Explain the nature of effective verbal communications"
    ],
    tdmPIs: [
      "Explain the nature and purpose of financial statement analysis",
      "Describe the concept of earnings quality and adjusted versus GAAP metrics",
      "Explain the impact of share repurchases on earnings per share",
      "Compare valuation methodologies for growth versus mature companies",
      "Explain the nature of effective verbal communications",
      "Describe the role of cash flow analysis in evaluating investment quality",
      "Explain how industry trends affect the relative attractiveness of competing companies"
    ],
    judgementQuestions: [
      "Hearthstone's EPS growth has been driven by buybacks rather than operating improvement—how do you explain the difference between buyback-driven EPS growth and organic earnings growth to a portfolio manager evaluating long-term value?",
      "Veranda Living's management presents adjusted EBITDA that excludes $31 million in stock-based compensation. How do you evaluate whether that exclusion is justifiable, and what does it tell you about the quality of their reported earnings?",
      "If you recommend a position in Veranda Living, what specific financial milestones—gross margin thresholds, operating leverage inflection points, or cash runway metrics—would trigger a sell decision?"
    ]
  },

  // Insurance & Risk Management (IRM)
  {
    id: "irm-1",
    event: "Insurance & Risk Management",
    eventCode: "IRM",
    cluster: "finance",
    situation:
      "You are a risk management consultant at Ardmore Risk Solutions, a full-service commercial insurance and risk advisory firm based in Atlanta, Georgia. You have been retained by Pinnacle Event Services LLC, a company that provides event staffing, audiovisual production, and catering coordination for corporate events, conferences, and private celebrations. Pinnacle generated $4.2 million in revenue last year managing 340 events ranging from small board dinners to multi-day corporate conferences with up to 2,000 attendees. The company employs 18 full-time staff and engages approximately 200 part-time event workers annually as independent contractors.\n\nThe company's founder and CEO, Angela Marsh, has contacted you after a near-miss incident at a product launch event last month where a stage lighting rig was improperly assembled by a part-time contractor, causing it to partially collapse. No attendees were injured, but the incident resulted in $18,000 in property damage and a client threatening to file a $200,000 negligence claim. Angela is now urgently reviewing the company's insurance program, which was last assessed three years ago. The current program includes a $1 million per occurrence / $2 million aggregate commercial general liability policy, $500,000 in professional liability coverage, commercial auto on two vehicles, and workers' compensation covering only the 18 full-time employees.\n\nYour review reveals four critical gaps: the company has no event cancellation insurance covering force majeure or vendor failure, which is particularly risky given that Pinnacle now has $1.4 million in contracted future events. The independent contractor workforce is not covered under the workers' compensation policy, creating significant misclassification exposure. The professional liability limit is likely insufficient given the company's revenue and the complexity of high-value events it now manages. Finally, the company has no formal written risk management protocols—no safety checklists, contractor vetting procedures, or incident reporting processes.\n\nYou must present a comprehensive risk assessment to Angela, prioritize the identified gaps by severity and likelihood, recommend specific insurance coverage enhancements with approximate premium impacts, and outline the key elements of a risk management protocol framework. Make your recommendations practical and cost-conscious given Pinnacle's stage of growth.",
    individualPIs: [
      "Explain the nature of risk management",
      "Describe the major types of commercial insurance coverage",
      "Explain the concept of liability exposure and risk transfer",
      "Describe the importance of written risk management protocols",
      "Explain the nature of effective verbal communications"
    ],
    tdmPIs: [
      "Explain the nature of risk management",
      "Describe the major types of commercial insurance coverage",
      "Explain the concept of liability exposure and risk transfer",
      "Describe the importance of written risk management protocols",
      "Explain the nature of effective verbal communications",
      "Describe the insurance implications of independent contractor misclassification",
      "Explain the role of risk assessment in identifying coverage gaps"
    ],
    judgementQuestions: [
      "Given that Angela faces a pending $200,000 negligence claim, what is your first priority in her risk program—and how do you advise her to handle the claim communication with the current insurer versus the potential plaintiff?",
      "The independent contractor workers' compensation gap represents both a legal and insurance exposure. How do you explain to Angela that resolving the classification question may require changes that affect her operating cost structure?",
      "If Angela's total insurance premium budget is $48,000 per year and the coverage enhancements you recommend would cost an additional $22,000 annually, how do you prioritize which gaps to close first?"
    ]
  },
  {
    id: "irm-2",
    event: "Insurance & Risk Management",
    eventCode: "IRM",
    cluster: "finance",
    situation:
      "You are a commercial risk analyst at Westfield Insurance Group, a regional property and casualty insurer. You have been assigned to assist the underwriting team in conducting a risk review for a renewal account, Timberline Wood Products Inc., a sawmill and secondary wood processing operation based in Bend, Oregon. Timberline generates $22 million in annual revenue, employs 94 workers, and operates a 120,000-square-foot manufacturing facility on 18 acres. The company has been a Westfield customer for nine years, but its risk profile has changed significantly over the past two years.\n\nTimberline's loss history shows three workers' compensation claims totaling $340,000 over 24 months—significantly above the industry average for similar operations—driven primarily by laceration and repetitive-motion injuries on the secondary processing line. The company's experience modification rate has climbed from 0.92 to 1.34, increasing its workers' compensation premium by 46% at the last renewal. Additionally, the property program covers the manufacturing facility at $8.4 million replacement cost, but a recent appraisal commissioned by Timberline's lender valued the facility at $11.2 million, suggesting the property is underinsured by approximately $2.8 million—a situation that would activate the coinsurance penalty clause in the current policy.\n\nA further complication: Timberline recently added a kiln-drying operation and wood pellet production line that significantly increases fire risk on the property. These new operations were not reported to Westfield at the time of installation, which may constitute a material change in risk that could affect coverage validity. The company's general liability limits of $1 million per occurrence have not been reviewed since the company was half its current size.\n\nYou must prepare a risk review presentation for Timberline's management that explains the loss control issues driving the experience modification rate increase, the coinsurance gap and its financial consequences in the event of a partial loss, the unreported operations issue and its potential coverage implications, and the adequacy of current liability limits given the company's current revenue and risk profile. Your goal is to help Timberline understand and address its risk exposures before the renewal meeting with the underwriter.",
    individualPIs: [
      "Explain the nature of property and casualty insurance underwriting",
      "Describe the concept of experience modification rate in workers' compensation",
      "Explain the coinsurance clause and its financial impact",
      "Describe the consequences of failing to report material changes in risk",
      "Explain the nature of effective verbal communications"
    ],
    tdmPIs: [
      "Explain the nature of property and casualty insurance underwriting",
      "Describe the concept of experience modification rate in workers' compensation",
      "Explain the coinsurance clause and its financial impact",
      "Describe the consequences of failing to report material changes in risk",
      "Explain the nature of effective verbal communications",
      "Describe loss control strategies for manufacturing operations",
      "Explain how changing business operations affect insurance coverage requirements"
    ],
    judgementQuestions: [
      "If the unreported kiln and pellet operations are discovered by Westfield after a fire loss, what coverage scenarios might the insurer use to deny or reduce the claim, and how should Timberline's management have handled the notification?",
      "How would you calculate the financial impact of the coinsurance penalty on a hypothetical $3 million partial fire loss given the $8.4 million insured value versus the $11.2 million appraised value?",
      "What specific loss control interventions would you recommend to address the laceration and repetitive-motion injuries, and how quickly could those measures realistically begin to reduce the experience modification rate?"
    ]
  },

  // Personal Financial Literacy (PFL)
  {
    id: "pfl-1",
    event: "Personal Financial Literacy",
    eventCode: "PFL",
    cluster: "finance",
    situation:
      "You are a financial education specialist at Horizon Community Credit Union, a member-owned financial cooperative serving 42,000 members in the greater Tacoma, Washington area. The credit union runs a free financial literacy program for young adults and first-time homebuyers. You have been assigned to work with a new member, Jordan Alvarez, a 27-year-old elementary school teacher who has come to the credit union after accumulating several financial problems since graduating college five years ago.\n\nJordan earns $54,200 per year as a third-grade teacher and takes home approximately $3,620 per month after taxes and his current retirement contribution of 3% to the district's 403(b) plan. His monthly expenses include $1,450 in rent, $310 in a car payment on a 2022 Honda Civic financed at 8.9% APR with $14,200 remaining, $180 in minimum payments on $9,400 in credit card debt spread across three cards at rates of 24.9%, 21.4%, and 18.9% APR, $230 in student loan payments on $28,500 in federal loans under an income-driven repayment plan, and approximately $850 in variable expenses including groceries, utilities, and subscriptions. Jordan has $1,200 in a savings account, no emergency fund, no Roth IRA, and no financial plan.\n\nJordan has two specific goals: he wants to buy a home within three years, and he dreams of visiting Japan for two weeks—a trip he estimates will cost $4,800. He has been approached by a friend about investing in a cryptocurrency trading app that promises 40% monthly returns, and he is unsure whether to participate. He also has not filed his federal taxes in two years and is unsure what that means for him legally and financially.\n\nYou must help Jordan create a realistic monthly budget, outline a debt elimination strategy, explain the homebuying preparation process including credit score improvement, address the cryptocurrency opportunity with clear risk education, and advise him on the tax non-filing situation. Present a comprehensive but accessible financial roadmap.",
    individualPIs: [
      "Explain the nature and importance of personal budgeting",
      "Describe strategies for managing and eliminating consumer debt",
      "Explain the role of credit scores in personal financial health",
      "Describe the basics of home purchase preparation and mortgage qualification",
      "Explain the nature of effective verbal communications"
    ],
    tdmPIs: [
      "Explain the nature and importance of personal budgeting",
      "Describe strategies for managing and eliminating consumer debt",
      "Explain the role of credit scores in personal financial health",
      "Describe the basics of home purchase preparation and mortgage qualification",
      "Explain the nature of effective verbal communications",
      "Describe the risks of high-return investment schemes targeting young adults",
      "Explain the consequences of failing to file federal income tax returns"
    ],
    judgementQuestions: [
      "Jordan's discretionary income after fixed expenses is razor thin. How do you prioritize between building an emergency fund, paying down high-interest credit card debt, and saving for his Japan trip—and how do you explain the reasoning behind that order?",
      "How do you explain the risk profile of a '40% monthly return' cryptocurrency scheme to someone who has never invested before and is genuinely excited about the opportunity?",
      "Given that Jordan has not filed taxes for two years, what is your first recommendation—and how do you explain the difference between owing unpaid taxes and simply failing to file, in terms of penalties and IRS resolution options?"
    ]
  },
  {
    id: "pfl-2",
    event: "Personal Financial Literacy",
    eventCode: "PFL",
    cluster: "finance",
    situation:
      "You are a financial wellness advisor at LifePath Financial Education, a nonprofit organization that provides free financial counseling to working adults in lower- to middle-income households. You have been assigned to work with Denise and Marcus Webb, a married couple in their early 40s living in Memphis, Tennessee. Denise works as a licensed practical nurse earning $58,000 per year, and Marcus is a HVAC technician who runs a small sole proprietorship generating approximately $42,000 in net annual income after expenses, though his income is variable and seasonal. Together they bring in roughly $8,200 per month before taxes.\n\nThe Webbs have three children aged 8, 13, and 16 and own their home, which was purchased in 2016 for $178,000 and is now valued at approximately $265,000 with $122,000 remaining on the mortgage at 3.75% fixed. They also have $34,000 in a joint savings account, $19,000 in Denise's 403(b) from her hospital employer (she contributes just enough to get the 4% match), and zero retirement savings for Marcus because he is self-employed. Their debts include $11,200 in credit card balances at an average of 19.8% APR, a $24,000 home equity line of credit at 9.4% currently drawn to $18,500, and a $12,400 balance on a used pickup truck Marcus uses for work at 6.9% APR.\n\nThe Webbs are at a pivotal moment. Their oldest child, Brianna, has expressed strong interest in attending the University of Tennessee, which costs approximately $28,500 per year in tuition, fees, and room and board—and Brianna has just two years until enrollment. The Webbs have no college savings. Marcus has also not been paying quarterly estimated tax payments, and Denise suspects they may owe a significant tax bill when they file. The couple disagrees on financial priorities: Marcus wants to tap the home equity line further to invest in additional HVAC equipment to grow his business, while Denise wants to focus on debt reduction.\n\nYou must facilitate a productive financial counseling session that produces an agreed-upon financial plan addressing debt, retirement savings, college funding, Marcus's tax compliance, and the business investment question. Present a phased action plan to both spouses together.",
    individualPIs: [
      "Explain the nature and importance of personal budgeting",
      "Describe strategies for retirement savings for self-employed individuals",
      "Explain the concept of college savings vehicles and financial aid",
      "Describe the tax obligations of self-employed individuals",
      "Explain the nature of effective verbal communications"
    ],
    tdmPIs: [
      "Explain the nature and importance of personal budgeting",
      "Describe strategies for retirement savings for self-employed individuals",
      "Explain the concept of college savings vehicles and financial aid",
      "Describe the tax obligations of self-employed individuals",
      "Explain the nature of effective verbal communications",
      "Describe the use of home equity as a financial planning tool and its risks",
      "Explain how to facilitate financial decision-making between spouses with differing priorities"
    ],
    judgementQuestions: [
      "Marcus wants to borrow more from the HELOC to invest in business equipment. How do you evaluate whether that is a sound financial decision versus an avoidance of addressing their consumer debt, and how do you present that analysis without alienating Marcus?",
      "With Brianna two years away from college and no college savings, what combination of savings, financial aid strategy, and family contribution plan is realistic—and how do you have an honest conversation about the financial limits of what the Webbs can afford?",
      "If Marcus has not paid quarterly estimated taxes for two years and the couple owes $8,000 to $12,000 to the IRS, how does that obligation change the prioritization of every other financial goal you might otherwise recommend?"
    ]
  },

  // Securities & Investments (SIV) — new scenarios
  {
    id: "siv-1",
    event: "Securities & Investments",
    eventCode: "SIV",
    cluster: "finance",
    situation:
      "You are a registered investment advisor at Meridian Wealth Strategies, a fee-only RIA firm based in Chicago, Illinois. The firm manages $480 million in AUM across individual, trust, and institutional accounts. You have been assigned a new high-net-worth client, Ellen Nakamura, a 58-year-old retired pharmaceutical executive who received a $3.8 million lump sum distribution from her company's deferred compensation plan following her retirement six months ago. She also holds $1.1 million in concentrated company stock from her former employer, PharmaTech Global, which she acquired through restricted stock unit grants vested over 15 years. Her cost basis in the PharmaTech shares is $87,000.\n\nEllen has $640,000 in a rollover IRA at Fidelity invested in a conservative balanced fund, $210,000 in a taxable brokerage account at Schwab with a diversified mix of mutual funds, and $28,000 in a checking account for living expenses. She is 58 years old, in excellent health, and expects to live to her mid-80s based on family history. Her annual living expenses are approximately $145,000, funded partly by a pension of $38,000 per year and partly by drawing from her portfolio. She has no Social Security claim yet and is considering whether to begin benefits at 62 or delay to 70.\n\nEllen's key concerns are: managing the concentrated PharmaTech position without triggering a large capital gains tax event, investing the $3.8 million deferred compensation distribution in a manner consistent with her risk tolerance (which she describes as moderate-conservative), and generating a reliable income stream from her portfolio to supplement her pension. She is also interested in socially responsible investing and prefers to avoid defense industry stocks. She has a daughter in graduate school and is considering a $100,000 gift.\n\nYou must develop a comprehensive investment strategy that addresses the concentrated stock position using tax-efficient methods, proposes an asset allocation for the full investable portfolio, addresses the Social Security timing decision, and incorporates the gift strategy. Present your recommendations to Ellen.",
    individualPIs: [
      "Explain the nature of investments",
      "Describe strategies for managing concentrated stock positions",
      "Explain the tax implications of investment decisions for high-net-worth clients",
      "Describe the Social Security benefit optimization decision",
      "Explain the nature of effective verbal communications"
    ],
    tdmPIs: [
      "Explain the nature of investments",
      "Describe strategies for managing concentrated stock positions",
      "Explain the tax implications of investment decisions for high-net-worth clients",
      "Describe the Social Security benefit optimization decision",
      "Explain the nature of effective verbal communications",
      "Describe the role of charitable giving strategies in tax-efficient wealth management",
      "Explain how to construct an income-generating investment portfolio for a retiree"
    ],
    judgementQuestions: [
      "Ellen's PharmaTech shares have an unrealized gain of approximately $1.013 million. What tax-efficient strategies—such as charitable remainder trusts, exchange funds, or staged liquidation—would you recommend, and what are the trade-offs of each?",
      "If Ellen begins Social Security at 62 versus waiting until 70, the difference in lifetime benefits assuming she lives to 85 is substantial. How do you quantify that trade-off and what additional factors beyond the break-even calculation should inform her decision?",
      "If Ellen wants to gift $100,000 to her daughter in graduate school, what gifting mechanism—outright cash, appreciated stock, or 529 contribution—is most tax-efficient given the concentrated PharmaTech position?"
    ]
  },
  {
    id: "siv-2",
    event: "Securities & Investments",
    eventCode: "SIV",
    cluster: "finance",
    situation:
      "You are a junior equity analyst at Copper Ridge Capital, a long/short equity hedge fund with $620 million in assets under management based in San Francisco, California. The fund's investment strategy focuses on consumer discretionary and technology sectors. Your portfolio manager, David Chen, has asked you to present an investment thesis on two competing companies in the streaming media sector: StreamNova Inc. (SNOV), a well-established streaming platform with 94 million global subscribers, and Luminary Content Corp. (LMRY), a newer competitor with 18 million subscribers that went public 18 months ago.\n\nStreamNova's financials show annual revenue of $14.2 billion, a 61% gross margin, operating income of $1.8 billion, and free cash flow of $2.3 billion. The company is investing heavily in international expansion and sports rights, with content spending expected to reach $18 billion next year. It has $4.1 billion in cash and $8.8 billion in long-term debt. At its current share price of $412, the stock trades at a P/E of 28x and an EV/EBITDA of 21x. Subscriber growth has slowed to 7% year over year after years of 20%+ growth.\n\nLuminary Content Corp. has $1.1 billion in revenue growing at 64% year over year, a 44% gross margin, an operating loss of $310 million, and negative free cash flow of $420 million. The company has $680 million in cash remaining from its IPO and a secondary offering but no profitable path disclosed in its most recent investor letter. Its content strategy focuses on premium documentary and limited series content targeted at the 35-to-55 demographic. Luminary trades at 7.2x trailing revenue.\n\nYou must construct an investment thesis for each company, evaluate the risk factors specific to each, propose whether Copper Ridge should take a long, short, or neutral position on each stock, and explain the relative value trade between the two. David Chen is known for asking pointed questions and expects you to defend your conclusions with specific financial evidence and industry context. Present your thesis formally.",
    individualPIs: [
      "Explain the nature of equity securities and how they are valued",
      "Describe the process of building an investment thesis",
      "Explain the relationship between growth rates and valuation multiples",
      "Describe the risk factors specific to growth-stage companies with negative cash flow",
      "Explain the nature of effective verbal communications"
    ],
    tdmPIs: [
      "Explain the nature of equity securities and how they are valued",
      "Describe the process of building an investment thesis",
      "Explain the relationship between growth rates and valuation multiples",
      "Describe the risk factors specific to growth-stage companies with negative cash flow",
      "Explain the nature of effective verbal communications",
      "Describe the concept of long/short equity strategy in hedge fund investing",
      "Explain how content spending and subscriber economics drive streaming company valuations"
    ],
    judgementQuestions: [
      "StreamNova's subscriber growth has decelerated from 22% to 7% over three years but free cash flow has expanded significantly. How do you frame the bull case for a company whose growth story is maturing but whose profitability profile is improving?",
      "Luminary has $680 million in cash and is burning $420 million per year in free cash flow, giving it approximately 19 months of runway. At what point does the cash position become a binary risk factor that should dominate the investment analysis?",
      "If David Chen asks you to recommend a long on StreamNova paired with a short on Luminary as a relative value trade, what correlation risks and macro sensitivities could cause both legs of the trade to move against the fund simultaneously?"
    ]
  },

  // Principles of Finance (PFN)
  {
    id: "pfn-1",
    event: "Principles of Finance",
    eventCode: "PFN",
    cluster: "finance",
    situation:
      "You are a financial education associate at First Step Financial Services, a nonprofit that provides accessible financial coaching and education to first-generation college students and recent graduates. You have been assigned to deliver a one-on-one financial fundamentals session to Marcus Thompson, a 21-year-old junior at a state university who is majoring in sociology. Marcus has never had a formal finance class, earns $1,100 per month from a part-time job at a campus coffee shop, receives $600 per month in family support, and has a $4,200 scholarship covering most of his tuition. He lives in university housing.\n\nMarcus approached the organization after receiving a pre-approved credit card offer in the mail for a $3,500 limit at 26.9% APR and is seriously considering accepting it. He also has $8,400 in federal subsidized student loans and $4,200 in unsubsidized loans, and he is confused about the difference between them and what happens to interest during school. He currently has $340 in a checking account and has never saved intentionally. He wants to know if he should open a savings account, whether he needs an emergency fund as a student, and how to start building credit responsibly.\n\nMarcus also has a summer internship lined up at a local government agency that will pay him $2,800 per month for 12 weeks—his first significant income. He wants to make smart decisions with that money but is not sure where to start. He has vaguely heard of a Roth IRA and asks whether it applies to him.\n\nYou must deliver a clear, jargon-free financial foundations session that covers budgeting basics, the mechanics and cost of credit card debt, the difference between subsidized and unsubsidized student loans, how to begin building credit responsibly, how to deploy his internship income effectively, and whether a Roth IRA makes sense for a 21-year-old with earned income. Make all concepts concrete and relatable to Marcus's actual situation.",
    individualPIs: [
      "Explain the nature and importance of personal budgeting",
      "Describe the mechanics and cost of consumer credit",
      "Explain the difference between subsidized and unsubsidized student loans",
      "Describe the concept and benefits of a Roth IRA for young earners",
      "Explain the nature of effective verbal communications"
    ],
    tdmPIs: [
      "Explain the nature and importance of personal budgeting",
      "Describe the mechanics and cost of consumer credit",
      "Explain the difference between subsidized and unsubsidized student loans",
      "Describe the concept and benefits of a Roth IRA for young earners",
      "Explain the nature of effective verbal communications",
      "Describe strategies for responsible credit building for first-time users",
      "Explain the concept of compound interest and its impact on savings and debt"
    ],
    judgementQuestions: [
      "Marcus is excited about the credit card and sees it as financial freedom. How do you explain the true cost of carrying even a $500 balance at 26.9% APR in a way that is honest but not discouraging?",
      "Marcus's unsubsidized loans are accruing interest right now while he is in school. How do you explain the mathematical impact of interest capitalization at graduation versus making small payments now?",
      "If Marcus asks whether he should put his entire $2,800 per month internship salary into a Roth IRA, how do you help him think through the right allocation between emergency savings, Roth IRA contributions, and discretionary spending?"
    ]
  },
  {
    id: "pfn-2",
    event: "Principles of Finance",
    eventCode: "PFN",
    cluster: "finance",
    situation:
      "You are a junior financial advisor at Clearview Financial Literacy Institute, a community organization that partners with high schools and community colleges to deliver financial education programs. You have been asked to lead a one-on-one session with a student named Ashley Ramos, an 18-year-old high school senior in Spokane, Washington who is about to make several major financial decisions simultaneously: she has been accepted to both Washington State University and a local community college, and is weighing the financial implications of each. She has also just been offered her first full-time job at a distribution warehouse earning $18.50 per hour.\n\nAshley's family has an Expected Family Contribution of $2,100 per year according to her FAFSA. Washington State University costs approximately $27,800 per year in tuition, fees, and room and board; she has been offered a $6,000 merit scholarship, $5,500 in federal loans (maximum for a first-year dependent student), and $3,200 in a Pell Grant, leaving an annual gap of approximately $13,100 that would likely be filled by parent PLUS loans or private loans. The local community college costs $6,400 per year including a required transportation and activity fee, and she could live at home. If she takes the warehouse job, she estimates she can earn $36,000 per year and begin repaying her costs immediately without taking on any debt.\n\nAshley understands that a university degree has higher average lifetime earnings but is concerned about accumulating debt. Her parents have limited financial knowledge and are deferring entirely to her. She has a 3.8 GPA and strong standardized test scores, suggesting she is academically capable of succeeding at either institution.\n\nYou must help Ashley understand the financial principles at stake—return on investment of education, the cost and mechanics of student loan debt, the opportunity cost of different pathways, and how to think about risk and time value of money in the context of an education decision. Present a balanced, unbiased framework for making her decision.",
    individualPIs: [
      "Explain the concept of return on investment as applied to education",
      "Describe the types and mechanics of student loan borrowing",
      "Explain the concept of opportunity cost in personal financial decisions",
      "Describe the time value of money and its application to long-term decisions",
      "Explain the nature of effective verbal communications"
    ],
    tdmPIs: [
      "Explain the concept of return on investment as applied to education",
      "Describe the types and mechanics of student loan borrowing",
      "Explain the concept of opportunity cost in personal financial decisions",
      "Describe the time value of money and its application to long-term decisions",
      "Explain the nature of effective verbal communications",
      "Explain how FAFSA and financial aid packages affect the true cost of college",
      "Describe the financial trade-offs between immediate employment and post-secondary education"
    ],
    judgementQuestions: [
      "If Ashley borrows $13,100 per year for four years at WSU and graduates with $52,400 in debt, what monthly payment would she face under a standard 10-year repayment plan, and how does that compare to the wage premium a four-year degree in her field might realistically generate?",
      "How do you present the community college transfer pathway as a financially sound option without implying it is a lesser academic choice—particularly when Ashley's parents have expressed pride in her WSU acceptance?",
      "What is the opportunity cost of Ashley choosing WSU over the warehouse job for four years, and how do you frame that calculation in a way that helps her make a confident, informed decision rather than feeling more confused?"
    ]
  },

  // Banking & Financial Services (BNK)
  {
    id: "bnk-1",
    event: "Banking & Financial Services",
    eventCode: "BNK",
    cluster: "finance",
    situation:
      "You are a commercial relationship manager at Pinnacle National Bank, a super-regional commercial bank with $48 billion in assets and operations across 14 states. You cover a portfolio of 42 middle-market business clients in the greater Minneapolis–Saint Paul metro area. Your book of business generates approximately $3.1 million in annual net interest income and fee revenue. You have been notified that one of your anchor clients, Metro Mechanical Services LLC, a commercial HVAC and plumbing contractor with $31 million in annual revenue, is in discussions with competing banks about moving its banking relationship.\n\nMetro Mechanical has been a Pinnacle customer for 11 years and currently holds a $4 million revolving line of credit, a $2.8 million equipment term loan, and primary depository operating accounts with an average daily balance of $1.4 million. The company's CFO, Rosa Jimenez, has informed you that she received a proposal from Midwest Commercial Bank that includes a $5 million revolving credit facility at 50 basis points below Pinnacle's current rate, a treasury management package with zero monthly fees for 24 months, and a dedicated relationship banker guarantee. Pinnacle's current spread on Metro's credit facility is 225 basis points over SOFR.\n\nYour retention strategy must be grounded in Pinnacle's actual value proposition. The bank recently launched a new cash management platform with real-time payment capabilities, integrated accounts payable automation, and fraud detection tools specifically designed for construction and trades businesses. You also have the authority to adjust the revolving credit rate by up to 30 basis points and to waive treasury management fees for 12 months with regional manager approval. Additionally, Pinnacle's SBA lending team has a pre-approved capacity to provide a $1.2 million SBA 7(a) loan that Metro could use to purchase its primary office building, which the owner is currently leasing.\n\nYou must prepare a retention strategy and present it to Rosa Jimenez in a relationship meeting. Your goal is to retain the full banking relationship, address the competitive offer honestly, and present new solutions that add tangible value beyond rate matching. You have 20 minutes.",
    individualPIs: [
      "Explain the nature of commercial banking relationships",
      "Describe the role of treasury management services in commercial banking",
      "Explain the concept of relationship pricing in commercial lending",
      "Describe strategies for client retention in financial services",
      "Explain the nature of effective verbal communications"
    ],
    tdmPIs: [
      "Explain the nature of commercial banking relationships",
      "Describe the role of treasury management services in commercial banking",
      "Explain the concept of relationship pricing in commercial lending",
      "Describe strategies for client retention in financial services",
      "Explain the nature of effective verbal communications",
      "Describe the structure and benefits of SBA lending programs",
      "Explain how technology platforms create competitive differentiation in commercial banking"
    ],
    judgementQuestions: [
      "Rosa has a concrete 50-basis-point rate reduction offer from a competitor, and you can only offer 30 basis points. How do you frame the value conversation so that the rate gap does not become the deciding factor?",
      "If Metro Mechanical decides to move its revolving credit to Midwest Commercial but wants to keep its deposit accounts at Pinnacle, how do you evaluate whether a partial retention is worth pursuing or whether it sets a bad precedent?",
      "The SBA loan opportunity to purchase Metro's office building was not on Rosa's radar. How do you introduce a new financial need that the client has not specifically asked about without appearing to be upselling during a retention conversation?"
    ]
  },
  {
    id: "bnk-2",
    event: "Banking & Financial Services",
    eventCode: "BNK",
    cluster: "finance",
    situation:
      "You are a compliance officer at Lakeside Community Bank, a $1.2 billion community bank headquartered in Madison, Wisconsin. The bank operates 18 branches, employs 310 staff, and serves a mix of retail consumers, small businesses, and agricultural borrowers in the greater Dane County area. You report directly to the Chief Compliance Officer and work closely with the BSA/AML team and the operations division.\n\nDuring a routine quarterly review of large currency transaction reports, you flag an unusual pattern involving a business customer, Cascade Import & Export LLC, a six-month-old company with a commercial checking account. Over the past 90 days, Cascade has deposited $784,000 in cash through 31 separate transactions, almost all structured just below the $10,000 CTR reporting threshold—the largest single deposit is $9,950. The account lists the business purpose as 'wholesale import of agricultural equipment,' but the account opened with a $500 deposit and shows no wire transfers, ACH payables, or outgoing payments to vendors consistent with wholesale distribution. All outflows have been cash withdrawals.\n\nYou also discover that the account was opened by a branch manager who skipped the bank's standard enhanced due diligence procedures for new business accounts because the customer presented a business license and said the owner was a longtime personal banking customer of the branch manager's previous employer. No beneficial ownership information was collected beyond the single named account holder, which may violate the Financial Crimes Enforcement Network's Customer Due Diligence rule.\n\nYou must present your findings to the Chief Compliance Officer and recommend an immediate action plan. The situation involves potential structuring—a federal crime under 31 USC 5324—as well as internal compliance failures. You must explain the regulatory obligations triggered by this pattern, the bank's Suspicious Activity Report filing requirements, the steps needed to remediate the due diligence failure, and how the bank should handle the branch manager's procedural violation.",
    individualPIs: [
      "Explain the nature of Bank Secrecy Act and anti-money laundering compliance",
      "Describe the indicators of currency transaction structuring",
      "Explain the Suspicious Activity Report filing requirements and process",
      "Describe the Customer Due Diligence rule and beneficial ownership requirements",
      "Explain the nature of effective verbal communications"
    ],
    tdmPIs: [
      "Explain the nature of Bank Secrecy Act and anti-money laundering compliance",
      "Describe the indicators of currency transaction structuring",
      "Explain the Suspicious Activity Report filing requirements and process",
      "Describe the Customer Due Diligence rule and beneficial ownership requirements",
      "Explain the nature of effective verbal communications",
      "Describe the internal compliance obligations triggered by procedural violations by bank employees",
      "Explain the consequences of regulatory non-compliance for community banks"
    ],
    judgementQuestions: [
      "The SAR filing deadline is approaching and you have 30 days from the date of initial suspicion. At what point in the investigation do you file—and what are the risks of filing too early versus too late?",
      "The branch manager bypassed enhanced due diligence procedures as a personal favor. How do you recommend the bank handle the employee discipline question while also ensuring the incident is properly documented for regulators?",
      "If Cascade Import & Export's owner calls the bank to complain that his account was restricted and threatens to involve a local attorney, how does the bank's legal team advise handling that interaction without violating the SAR confidentiality rules?"
    ]
  },

  // Tax Planning (TAX)
  {
    id: "tax-1",
    event: "Tax Planning",
    eventCode: "TAX",
    cluster: "finance",
    situation:
      "You are a tax planning associate at Hartwell Tax Advisors LLC, a boutique CPA and tax advisory firm based in Scottsdale, Arizona. The firm specializes in tax planning for high-income individuals, real estate investors, and closely held businesses. A new client, Dr. Sandra Cho, is a 47-year-old orthopedic surgeon who practices through her own S-corporation, Cho Orthopedic PLLC. She has scheduled a mid-year tax planning consultation after receiving a surprise tax bill of $84,000 on her prior-year return—significantly more than she anticipated.\n\nDr. Cho's S-corporation generated $1.62 million in gross revenue last fiscal year, with $890,000 in net income after practice expenses. She paid herself a reasonable W-2 salary of $320,000, with the remaining $570,000 flowing through as pass-through income reported on Schedule E of her personal return. She is married to Thomas Cho, a high school principal earning $96,000 per year. Together they have two children in private school and own their primary residence with a $1.6 million value and $740,000 remaining on the mortgage. They also own a rental property in Sedona that generated $38,000 in gross rent, $51,000 in allowable depreciation and expenses, and a passive loss of $13,000 for the year.\n\nCurrent-year planning opportunities your team has identified include maximizing contributions to a solo defined benefit pension plan or cash balance plan inside the S-corp, potential conversion of a portion of pass-through income to a more tax-advantaged structure, a Backdoor Roth IRA strategy for both Dr. Cho and Thomas, and evaluation of whether the Sedona rental property passive losses can be unlocked given Dr. Cho's income level. She has also asked about the tax implications of a planned $80,000 renovation on the rental property.\n\nYou must present a comprehensive mid-year tax planning strategy to Dr. Cho and Thomas, quantify the approximate tax savings of each recommended strategy, and explain the key trade-offs and implementation steps. Be clear about any IRS audit risk considerations associated with aggressive positions.",
    individualPIs: [
      "Explain the nature of tax planning for high-income individuals",
      "Describe the tax advantages of defined benefit pension plans for self-employed professionals",
      "Explain the Backdoor Roth IRA strategy and its applicability",
      "Describe the passive activity loss rules and real estate professional exception",
      "Explain the nature of effective verbal communications"
    ],
    tdmPIs: [
      "Explain the nature of tax planning for high-income individuals",
      "Describe the tax advantages of defined benefit pension plans for self-employed professionals",
      "Explain the Backdoor Roth IRA strategy and its applicability",
      "Describe the passive activity loss rules and real estate professional exception",
      "Explain the nature of effective verbal communications",
      "Describe the S-corporation reasonable compensation requirement and its tax implications",
      "Explain the tax treatment of rental property improvements versus repairs"
    ],
    judgementQuestions: [
      "Dr. Cho's $320,000 W-2 salary from her S-corp represents about 36% of total pass-through income. The IRS's reasonable compensation standard for a specialist surgeon is widely cited at $400,000 to $500,000. How do you advise her on this risk exposure without recommending a position that increases her self-employment tax unnecessarily?",
      "If Dr. Cho qualifies as a real estate professional under IRS rules—which would require at least 750 hours annually in real estate activities—the Sedona passive losses become fully deductible. Is that a realistic qualification given her surgical schedule, and what documentation would she need to support that position?",
      "The $80,000 Sedona renovation is a mix of capital improvements and repairs. How do you advise Dr. Cho to maximize the portion treated as current-year repairs rather than depreciable improvements, and what documentation practices make that classification defensible?"
    ]
  },
  {
    id: "tax-2",
    event: "Tax Planning",
    eventCode: "TAX",
    cluster: "finance",
    situation:
      "You are a tax advisor at Greenfield Tax & Advisory Group, a regional CPA firm with offices in Cincinnati and Columbus, Ohio. You have been asked to consult with the owners of Bridgewater Manufacturing LLC, a family-owned limited liability company that manufactures custom metal fabrications for the automotive and construction industries. The company has three equal members: siblings Nathan, Carla, and James Bridger, each holding a one-third interest. Bridgewater elected to be taxed as a partnership and generated $4.1 million in net ordinary income last year, allocating approximately $1.37 million to each member's K-1.\n\nAll three members have full-time roles in the business: Nathan serves as CEO, Carla runs manufacturing operations, and James leads sales. None of them receive guaranteed payments—all compensation flows through their partnership distributions. A new CPA engaged for a routine review has flagged that this structure may be drawing IRS scrutiny under the self-employment tax rules for active LLC members, as the IRS has argued in several cases that active LLC members in operating businesses should pay self-employment tax on their distributive share of income.\n\nA separate planning issue: the company is considering making a Section 754 election in connection with a planned partial buyout of Nathan's interest. Nathan would like to sell 10% of his one-third interest to a key employee, Derek Walsh, at a mutually agreed price that implies a total enterprise value of $9.2 million. The tax implications for Nathan, Derek, and the entity are all different and must be explained clearly. Finally, the company generated $380,000 in qualified business income that may be eligible for the Section 199A deduction, but the manufacturing industry classification and W-2 wage limitation must be evaluated.\n\nYou must present a comprehensive tax planning memo verbally to all three Bridger siblings, addressing the self-employment tax exposure, the Section 754 election mechanics and its impact on Derek's inside basis, and the Section 199A deduction eligibility. Make the analysis accessible to business owners without tax backgrounds.",
    individualPIs: [
      "Explain the nature of partnership taxation and K-1 income",
      "Describe the self-employment tax rules applicable to active LLC members",
      "Explain the Section 754 election and its impact on inside basis",
      "Describe the Section 199A qualified business income deduction",
      "Explain the nature of effective verbal communications"
    ],
    tdmPIs: [
      "Explain the nature of partnership taxation and K-1 income",
      "Describe the self-employment tax rules applicable to active LLC members",
      "Explain the Section 754 election and its impact on inside basis",
      "Describe the Section 199A qualified business income deduction",
      "Explain the nature of effective verbal communications",
      "Describe the tax implications of selling a partial LLC membership interest",
      "Explain the W-2 wage limitation on the Section 199A deduction for manufacturing businesses"
    ],
    judgementQuestions: [
      "If the IRS successfully argues that all three siblings should pay self-employment tax on their full $1.37 million distributive shares rather than just on guaranteed payments, what is the approximate additional annual tax exposure per member, and does restructuring to an S-corp election reduce that exposure?",
      "Nathan is selling a 10% partial interest in his one-third stake. How do you explain to Derek that the Section 754 election step-up in basis is valuable to him personally—since it reduces his future taxable gain—even though making the election requires unanimous consent from all LLC members?",
      "The Section 199A deduction for manufacturing businesses is subject to the greater of 50% of W-2 wages or 25% of W-2 wages plus 2.5% of qualified property. Given that the company pays $840,000 in total W-2 wages to non-owner employees, walk the siblings through whether the deduction on their $380,000 of QBI is limited."
    ]
  },

];
