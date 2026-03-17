import type { RoleplayScenario } from "./types";

export const scenariosPart2: RoleplayScenario[] = [
  // ─── BUSINESS MANAGEMENT & ADMINISTRATION ───────────────────────────────────

  // Business Management (MAN) — man-1
  {
    id: "man-1",
    event: "Business Management",
    eventCode: "MAN",
    cluster: "business-management",
    situation:
      "You are a management consultant for Apex Solutions, a mid-sized software firm with 120 employees. The company's CEO, Jordan Rivera, has asked you to address a critical operations problem: project delivery timelines have slipped by an average of 3.2 weeks over the past two quarters, and client satisfaction scores have dropped from 91% to 74%. An internal review reveals that teams lack clear accountability structures, status meetings are inconsistent, and managers spend roughly 40% of their time on administrative tasks instead of strategic oversight. The CEO wants a concrete plan to reorganize management processes, reduce overhead, and restore on-time delivery to at least 85% within the next quarter. Your task today is to present your recommended management improvements, explain how you would implement them, and describe how you would measure success. Be prepared to justify your approach and answer questions about potential obstacles.",
    individualPIs: [
      "Explain the nature of organizational design",
      "Describe the nature of managerial decision making",
      "Explain the concept of organizational goal setting",
      "Identify the impact of organizational culture on business performance",
      "Explain the importance of accountability in management"
    ],
    tdmPIs: [
      "Explain the nature of organizational design",
      "Describe the nature of managerial decision making",
      "Explain the concept of organizational goal setting",
      "Identify the impact of organizational culture on business performance",
      "Explain the importance of accountability in management",
      "Describe the use of key performance indicators to measure business success",
      "Explain the role of management in implementing change within an organization"
    ],
    judgementQuestions: [
      "If your restructuring plan meets resistance from middle managers who feel their authority is being reduced, how would you handle that conflict while keeping the project on schedule?",
      "How would you prioritize which management changes to implement first given that the CEO wants results within a single quarter?",
      "What specific metrics beyond on-time delivery rate would you track to confirm that the organizational culture is genuinely improving?"
    ]
  },

  // Business Management (MAN) — man-2
  {
    id: "man-2",
    event: "Business Management",
    eventCode: "MAN",
    cluster: "business-management",
    situation:
      "You are an operations advisor for Meridian Retail Group, a regional chain of 18 clothing stores. The company's COO, Dana Cho, has brought you in because employee turnover reached 62% last year — nearly double the industry average of 34% — costing the company an estimated $890,000 in recruiting and training expenses. Exit interviews indicate that employees leave primarily due to unclear advancement paths, inconsistent scheduling, and a perceived lack of recognition. Store managers report they feel unsupported and often handle HR escalations without formal training. Dana wants you to present a management strategy that reduces turnover to below 40% within 12 months, improves manager effectiveness, and builds a culture of employee engagement. Your task is to outline your recommended approach, explain how you would train frontline managers, and identify the resources or investments the company will need to make this plan succeed.",
    individualPIs: [
      "Explain the role of management in employee retention",
      "Describe strategies for motivating and engaging employees",
      "Identify techniques for developing effective managers",
      "Explain the importance of consistent communication in management",
      "Describe the nature of performance management systems"
    ],
    tdmPIs: [
      "Explain the role of management in employee retention",
      "Describe strategies for motivating and engaging employees",
      "Identify techniques for developing effective managers",
      "Explain the importance of consistent communication in management",
      "Describe the nature of performance management systems",
      "Explain the relationship between employee satisfaction and customer satisfaction",
      "Identify the components of an effective employee recognition program"
    ],
    judgementQuestions: [
      "Your plan requires investing roughly $150,000 in manager training programs. How would you build the business case to convince the CFO that this spending will pay off within 12 months?",
      "How would you ensure consistency in how the new management practices are applied across all 18 store locations?",
      "If turnover drops for frontline employees but remains high among store managers themselves, how would you adjust your strategy?"
    ]
  },

  // Human Resources Management (HRDM) — hrdm-1
  {
    id: "hrdm-1",
    event: "Human Resources Management",
    eventCode: "HRDM",
    cluster: "business-management",
    situation:
      "You are an HR consultant for ClearPath Logistics, a freight company with 340 employees. The VP of Human Resources, Marcus Webb, has engaged you to redesign the company's compensation structure after a salary benchmarking study revealed that ClearPath pays 12–18% below market rate for 60% of its roles. As a result, the company has lost 14 high-performing employees to competitors in the last six months and has three critical engineering positions that have remained vacant for over 90 days. The total annual cost of unfilled positions is estimated at $1.2 million in lost productivity. Marcus wants you to present a phased compensation adjustment plan, explain how to communicate changes to current employees, and recommend a process for ongoing market benchmarking so this gap does not recur. Your proposal must be financially sustainable given that the HR budget can absorb no more than a 6% increase in total payroll this fiscal year.",
    individualPIs: [
      "Explain the nature of compensation and benefits systems",
      "Describe the use of benchmarking to evaluate compensation competitiveness",
      "Identify strategies for attracting and retaining talent",
      "Explain the relationship between compensation and employee motivation",
      "Describe the importance of pay equity in human resources management"
    ],
    tdmPIs: [
      "Explain the nature of compensation and benefits systems",
      "Describe the use of benchmarking to evaluate compensation competitiveness",
      "Identify strategies for attracting and retaining talent",
      "Explain the relationship between compensation and employee motivation",
      "Describe the importance of pay equity in human resources management",
      "Explain the role of total rewards in a comprehensive HR strategy",
      "Identify legal considerations in designing compensation programs"
    ],
    judgementQuestions: [
      "Given the 6% payroll budget constraint, how would you decide which roles receive salary increases first — the vacant positions or the retained employees most likely to leave?",
      "What communication approach would you recommend for announcing the compensation changes to employees who will not receive increases in the first phase?",
      "How often should ClearPath conduct market benchmarking going forward, and who within HR should own that process?"
    ]
  },

  // Human Resources Management (HRDM) — hrdm-2
  {
    id: "hrdm-2",
    event: "Human Resources Management",
    eventCode: "HRDM",
    cluster: "business-management",
    situation:
      "You are an HR specialist called in by NovaBridge Technology, a 200-person SaaS company, to help address a significant spike in workplace conflict. Over the past eight months, the HR department received 27 formal complaints — up from just 6 in the same period the prior year — most of which involve disputes between remote and in-office employees over workload distribution, communication breakdowns, and perceptions of unfair treatment by managers. Three complaints have escalated to potential EEOC violations. CEO Priya Nair believes the root cause is the company's rapid shift to a hybrid work model without updated HR policies or manager training. She has asked you to present a plan that reduces formal complaints by at least 50% within six months, brings the company into full legal compliance, and rebuilds trust between remote and in-office teams. You have 10 minutes to present your strategy.",
    individualPIs: [
      "Explain procedures for handling workplace complaints and grievances",
      "Describe strategies for managing a hybrid or remote workforce",
      "Identify the role of HR policies in preventing workplace conflict",
      "Explain equal employment opportunity laws and their impact on HR practices",
      "Describe the importance of manager training in conflict resolution"
    ],
    tdmPIs: [
      "Explain procedures for handling workplace complaints and grievances",
      "Describe strategies for managing a hybrid or remote workforce",
      "Identify the role of HR policies in preventing workplace conflict",
      "Explain equal employment opportunity laws and their impact on HR practices",
      "Describe the importance of manager training in conflict resolution",
      "Identify the components of an effective workplace investigation process",
      "Explain the relationship between organizational culture and conflict frequency"
    ],
    judgementQuestions: [
      "With three complaints already at potential EEOC-violation level, how would you prioritize addressing those while simultaneously launching your broader conflict-reduction strategy?",
      "How would you ensure that updated HR policies are understood and consistently applied by managers across both remote and in-office environments?",
      "If some managers are identified as the source of multiple complaints, how would you approach that situation while maintaining fairness and legal compliance?"
    ]
  },

  // Business Law & Ethics (BLAW) — blaw-1
  {
    id: "blaw-1",
    event: "Business Law & Ethics",
    eventCode: "BLAW",
    cluster: "business-management",
    situation:
      "You are a business ethics consultant for Orion Consumer Products, a manufacturer of household goods with $45 million in annual revenue. The General Counsel, Sandra Kim, has discovered that a regional sales manager has been offering retail buyers undisclosed cash rebates — totaling approximately $78,000 over eight months — in exchange for preferential shelf placement. This practice violates the company's code of conduct, may constitute commercial bribery under state law, and could expose Orion to retailer contract penalties estimated at $500,000. Sandra needs your help developing an immediate response plan, a longer-term ethics compliance program, and a communication strategy for affected retail partners. She also wants guidance on whether and how to self-disclose the violation to regulators. Your task is to present your recommendations clearly, covering both legal exposure and ethical obligations.",
    individualPIs: [
      "Explain the nature of business ethics and ethical decision making",
      "Describe the legal consequences of commercial bribery",
      "Identify the components of an effective corporate compliance program",
      "Explain the importance of self-disclosure in regulatory matters",
      "Describe strategies for rebuilding trust after an ethics violation"
    ],
    tdmPIs: [
      "Explain the nature of business ethics and ethical decision making",
      "Describe the legal consequences of commercial bribery",
      "Identify the components of an effective corporate compliance program",
      "Explain the importance of self-disclosure in regulatory matters",
      "Describe strategies for rebuilding trust after an ethics violation",
      "Explain the role of a code of conduct in guiding employee behavior",
      "Identify whistleblower protections and their relevance to ethics programs"
    ],
    judgementQuestions: [
      "How would you weigh the risk of self-disclosure to regulators against the potential benefit of reduced penalties, and what factors would drive that recommendation?",
      "What immediate actions should Orion take regarding the sales manager — termination, suspension, or something else — and how does the legal exposure affect that decision?",
      "How would you design a compliance training program that prevents a similar situation from occurring without creating a culture of fear among the sales team?"
    ]
  },

  // Business Law & Ethics (BLAW) — blaw-2
  {
    id: "blaw-2",
    event: "Business Law & Ethics",
    eventCode: "BLAW",
    cluster: "business-management",
    situation:
      "You are a legal and ethics advisor for Pinnacle Digital Agency, a 75-person marketing firm. The CEO, Tyler Brooks, is alarmed after discovering that two employees used AI-generated content tools to create campaign assets for a major client, then represented the work as fully original and proprietary in the client contract. The client contract includes a warranty of originality and grants the client exclusive intellectual property rights over all deliverables. The agency received $120,000 for the project. The client has not yet raised any concerns, but the CEO is worried about contractual liability, potential copyright issues related to AI-generated content, and ethical obligations to disclose. Tyler wants you to advise on the company's legal exposure, whether to proactively disclose the situation to the client, and what internal policies should be created to govern AI tool usage going forward.",
    individualPIs: [
      "Explain the nature of intellectual property rights",
      "Describe the legal implications of contractual warranties",
      "Identify ethical obligations in client-service relationships",
      "Explain emerging legal issues related to artificial intelligence in business",
      "Describe the process for developing internal usage policies for new technology"
    ],
    tdmPIs: [
      "Explain the nature of intellectual property rights",
      "Describe the legal implications of contractual warranties",
      "Identify ethical obligations in client-service relationships",
      "Explain emerging legal issues related to artificial intelligence in business",
      "Describe the process for developing internal usage policies for new technology",
      "Identify risk management strategies for reducing legal exposure",
      "Explain the importance of transparency in maintaining client trust"
    ],
    judgementQuestions: [
      "If the client discovers the AI usage on their own before you disclose, how does that change your legal and ethical position compared to proactive disclosure?",
      "How would you draft an AI usage policy that gives employees clear boundaries without stifling their ability to use helpful tools in legitimate ways?",
      "What steps would you take to assess whether similar undisclosed AI usage has occurred on other client projects at the agency?"
    ]
  },

  // Administrative Services (ASM) — asm-1
  {
    id: "asm-1",
    event: "Administrative Services",
    eventCode: "ASM",
    cluster: "business-management",
    situation:
      "You are an administrative services consultant for Hargrove Financial Group, a 90-person wealth management firm. The Office Manager, Claire Tran, has asked for your help after an internal audit found that the firm's records management system is critically disorganized: 34% of client documents cannot be located within a reasonable timeframe, physical and digital filing systems are inconsistent across departments, and the company is at risk of violating SEC recordkeeping requirements that mandate seven-year document retention. Three client service delays in the past quarter were directly attributed to lost records. Claire needs you to recommend a comprehensive records management overhaul, outline the technology solutions or processes needed, and create a staff training plan so the new system is adopted effectively. The firm's annual administrative budget for this initiative is $40,000.",
    individualPIs: [
      "Describe the nature of records management in a business environment",
      "Explain legal and regulatory requirements for document retention",
      "Identify technology solutions for improving records management",
      "Describe strategies for training staff on administrative systems",
      "Explain the relationship between records management and operational efficiency"
    ],
    tdmPIs: [
      "Describe the nature of records management in a business environment",
      "Explain legal and regulatory requirements for document retention",
      "Identify technology solutions for improving records management",
      "Describe strategies for training staff on administrative systems",
      "Explain the relationship between records management and operational efficiency",
      "Identify best practices for transitioning from paper-based to digital records systems",
      "Explain the importance of data security in records management"
    ],
    judgementQuestions: [
      "Given the $40,000 budget, how would you prioritize spending between technology, consulting services, and staff training — and what trade-offs does that require?",
      "How would you handle the backlog of existing disorganized records while simultaneously implementing a new system for ongoing documents?",
      "If some employees resist adopting the new filing system and revert to old habits, what accountability mechanisms would you put in place?"
    ]
  },

  // Administrative Services (ASM) — asm-2
  {
    id: "asm-2",
    event: "Administrative Services",
    eventCode: "ASM",
    cluster: "business-management",
    situation:
      "You are an administrative consultant for Lakeview Medical Practice, a group practice with 8 physicians and 45 staff members. The Practice Administrator, Robert Osei, has engaged you after realizing the front office is overwhelmed: patient scheduling errors have increased by 28% over the last year, staff spend an average of 2.4 hours per day on manual data entry that could be automated, and the front desk receives approximately 55 patient call-backs per week due to incorrect insurance verification. These inefficiencies cost the practice an estimated $95,000 per year in staff overtime and lost appointment revenue. Robert wants you to analyze the administrative workflows, identify the top three bottlenecks, and present a plan to streamline operations. Your recommendations must be implementable within the practice's existing electronic health records platform and a $25,000 improvement budget.",
    individualPIs: [
      "Describe techniques for analyzing and improving administrative workflows",
      "Explain the role of automation in reducing administrative burden",
      "Identify methods for improving scheduling accuracy in service environments",
      "Describe the importance of accurate data entry in administrative operations",
      "Explain how to calculate the cost of administrative inefficiency"
    ],
    tdmPIs: [
      "Describe techniques for analyzing and improving administrative workflows",
      "Explain the role of automation in reducing administrative burden",
      "Identify methods for improving scheduling accuracy in service environments",
      "Describe the importance of accurate data entry in administrative operations",
      "Explain how to calculate the cost of administrative inefficiency",
      "Identify strategies for managing change when implementing new administrative processes",
      "Explain the relationship between front-office efficiency and patient satisfaction"
    ],
    judgementQuestions: [
      "If you could only fix one of the three bottlenecks within the first 60 days, which would you choose and why?",
      "How would you measure success after implementing your workflow improvements — what specific numbers would indicate the changes are working?",
      "The physicians are resistant to changing scheduling protocols because they affect patient flow. How do you get their buy-in without compromising your improvement plan?"
    ]
  },

  // ─── ENTREPRENEURSHIP ────────────────────────────────────────────────────────

  // Entrepreneurship (ENT) — ent-1
  {
    id: "ent-1",
    event: "Entrepreneurship",
    eventCode: "ENT",
    cluster: "entrepreneurship",
    situation:
      "You are a startup advisor meeting with Alex Nguyen, the founder of FreshRoute, a proposed meal-kit delivery service targeting college students in mid-sized university towns. Alex has developed a business concept but has not yet launched. The target market is undergraduate students aged 18–24 who live off campus, have limited cooking skills, and spend an average of $340 per month on food. Alex plans to offer weekly meal kits at $9.99 per meal (three meals per box, $29.97 per box) and believes 500 subscribers at launch is achievable. Alex has $35,000 in personal savings to invest and has identified a commercial kitchen space for $2,200 per month. However, Alex has not yet conducted formal market research, has no supplier agreements, and has not registered the business. Your task is to evaluate the concept's viability and provide a prioritized action plan for the next 90 days before launch.",
    individualPIs: [
      "Explain the importance of conducting market research before launching a business",
      "Describe the components of a viable business model",
      "Identify legal requirements for starting a new business",
      "Explain how to assess the financial feasibility of a business idea",
      "Describe strategies for identifying and securing suppliers for a new venture"
    ],
    tdmPIs: [
      "Explain the importance of conducting market research before launching a business",
      "Describe the components of a viable business model",
      "Identify legal requirements for starting a new business",
      "Explain how to assess the financial feasibility of a business idea",
      "Describe strategies for identifying and securing suppliers for a new venture",
      "Explain the nature of entrepreneurial risk and how to manage it",
      "Identify strategies for building a customer base for a new business"
    ],
    judgementQuestions: [
      "Alex's plan to acquire 500 subscribers at launch seems optimistic for a brand-new business in a single market. How would you help Alex set a more realistic launch target and validate it?",
      "If the market research reveals that the target demographic is highly price-sensitive and $29.97 per box is too expensive, what adjustments to the business model would you recommend?",
      "What is the single greatest risk to FreshRoute's viability in year one, and how should Alex prepare for it?"
    ]
  },

  // Entrepreneurship (ENT) — ent-2
  {
    id: "ent-2",
    event: "Entrepreneurship",
    eventCode: "ENT",
    cluster: "entrepreneurship",
    situation:
      "You are an entrepreneurship mentor advising Casey Morales, who runs a 2-year-old mobile pet grooming business called Pawfect Mobile. Casey currently operates one van, generates $78,000 in annual revenue, and serves 210 repeat customers in a suburban area. Profit margin is 22%, yielding approximately $17,160 in annual net income. Casey wants to expand by adding a second van and operator within the next six months, which would require approximately $42,000 in startup costs covering the van, equipment, insurance, and branding. Casey has $15,000 in savings and is considering a small business loan for the remainder. The expansion target is 450 total customers and $150,000 in combined annual revenue by end of year three. Casey has no prior experience managing employees and is concerned about maintaining service quality during rapid growth. Your task is to evaluate the expansion plan and advise Casey on financing, hiring, and quality control.",
    individualPIs: [
      "Describe strategies for financing business expansion",
      "Explain the process of hiring and onboarding employees for a small business",
      "Identify methods for maintaining service quality during rapid business growth",
      "Explain the importance of cash flow management in a growing business",
      "Describe the role of branding in supporting business expansion"
    ],
    tdmPIs: [
      "Describe strategies for financing business expansion",
      "Explain the process of hiring and onboarding employees for a small business",
      "Identify methods for maintaining service quality during rapid business growth",
      "Explain the importance of cash flow management in a growing business",
      "Describe the role of branding in supporting business expansion",
      "Identify the financial ratios used to assess small business health before seeking a loan",
      "Explain the entrepreneurial challenges of transitioning from sole operator to employer"
    ],
    judgementQuestions: [
      "Casey's current 22% profit margin may compress during expansion due to loan payments and a new employee's wages. At what approximate break-even customer count does the second van become profitable?",
      "What specific qualities or experience would you prioritize when hiring the second van operator, given that they will represent the Pawfect Mobile brand directly to customers?",
      "If the loan is approved but the second van only reaches 150 customers in its first year rather than the projected 240, what contingency plan should Casey have ready?"
    ]
  },

  // Entrepreneurship (ENT) — ent-3
  {
    id: "ent-3",
    event: "Entrepreneurship",
    eventCode: "ENT",
    cluster: "entrepreneurship",
    situation:
      "You are a business advisor for Jordan Patel, the founder of SkillBridge, a 3-year-old online tutoring platform that connects high school students with college-student tutors. The platform currently has 1,200 registered students, 380 active tutors, and generates $310,000 in annual gross revenue from a 20% commission on each session. Jordan has received a term sheet from a seed-stage investor offering $500,000 in exchange for 25% equity, valuing the company at $2 million pre-money. Jordan is unsure whether to accept, negotiate the terms, or seek alternative funding. Additionally, Jordan is weighing two growth strategies: expanding into corporate employee training programs or adding a K–8 segment. Both require significant product development. Your task is to help Jordan evaluate the investment offer, advise on which growth strategy offers better prospects, and identify the two most important questions Jordan should ask the investor before signing.",
    individualPIs: [
      "Explain the basics of equity financing for startups",
      "Describe how to evaluate a venture capital or angel investment term sheet",
      "Identify criteria for prioritizing growth opportunities in a scaling business",
      "Explain the concept of company valuation and how it affects ownership dilution",
      "Describe the importance of investor due diligence from the entrepreneur's perspective"
    ],
    tdmPIs: [
      "Explain the basics of equity financing for startups",
      "Describe how to evaluate a venture capital or angel investment term sheet",
      "Identify criteria for prioritizing growth opportunities in a scaling business",
      "Explain the concept of company valuation and how it affects ownership dilution",
      "Describe the importance of investor due diligence from the entrepreneur's perspective",
      "Explain the difference between revenue growth and profitability in startup decision making",
      "Identify the strategic value that non-financial investor contributions can provide"
    ],
    judgementQuestions: [
      "At a $2 million pre-money valuation, does the investor's offer seem fair given SkillBridge's $310,000 in annual revenue? What revenue multiple is implied, and how does it compare to typical seed-stage norms?",
      "Between expanding into corporate training and adding a K–8 segment, which growth path better leverages SkillBridge's existing assets and user base, and why?",
      "If Jordan negotiates the equity percentage down from 25% to 20% at the same $500,000 investment, what is the revised post-money valuation, and does that change meaningfully improve Jordan's position?"
    ]
  },

  // Business Growth & Development (BGD) — bgd-1
  {
    id: "bgd-1",
    event: "Business Growth & Development",
    eventCode: "BGD",
    cluster: "entrepreneurship",
    situation:
      "You are a growth strategy consultant for Ember Coffee Roasters, a specialty coffee brand that started as a single brick-and-mortar café four years ago and now operates 4 locations with $2.1 million in combined annual revenue. The founder, Maya Chen, wants to scale to 15 locations within three years and is evaluating two expansion models: company-owned stores requiring approximately $180,000 per new location, or a franchising model that would require $250,000 upfront to develop the franchise system but then generate $35,000 per franchise sold in initial fees plus ongoing royalties. Maya has $400,000 available for expansion and can qualify for a $600,000 SBA loan. She is also considering wholesale partnerships with regional grocery chains as a parallel revenue stream. Your task is to evaluate both expansion models, provide a recommendation with a financial rationale, and advise on whether pursuing wholesale simultaneously is strategic or a distraction.",
    individualPIs: [
      "Describe the advantages and disadvantages of franchising as a growth strategy",
      "Explain the financial considerations involved in business expansion planning",
      "Identify strategies for scaling a service business while maintaining brand consistency",
      "Describe the role of capital structure in funding business growth",
      "Explain how to evaluate the timing of adding a new revenue stream"
    ],
    tdmPIs: [
      "Describe the advantages and disadvantages of franchising as a growth strategy",
      "Explain the financial considerations involved in business expansion planning",
      "Identify strategies for scaling a service business while maintaining brand consistency",
      "Describe the role of capital structure in funding business growth",
      "Explain how to evaluate the timing of adding a new revenue stream",
      "Identify key metrics for assessing unit economics before scaling a business model",
      "Explain the importance of operational systems and documentation in franchise readiness"
    ],
    judgementQuestions: [
      "Given Maya's total available capital of $1 million, how many company-owned stores could she open versus how many franchises could she sell in the first two years — and which path gets closer to 15 locations in three years?",
      "What are the three most important operational systems Ember Coffee Roasters would need to document and standardize before it could sell a single franchise unit?",
      "How would pursuing wholesale grocery partnerships simultaneously affect Maya's bandwidth, and at what point in the growth timeline would wholesale make the most strategic sense?"
    ]
  },

  // Business Growth & Development (BGD) — bgd-2
  {
    id: "bgd-2",
    event: "Business Growth & Development",
    eventCode: "BGD",
    cluster: "entrepreneurship",
    situation:
      "You are a business development advisor for Crestline Landscaping, a residential and commercial landscaping company that has operated in one metropolitan area for 11 years and generates $4.8 million in annual revenue with a 14% net profit margin. The owner, David Park, wants to grow revenue to $8 million within four years. A strategic acquisition opportunity has emerged: a competing landscaping firm, GreenAcre Services, is for sale at $1.1 million. GreenAcre has $1.6 million in annual revenue, 340 existing commercial contracts, and 22 employees. However, GreenAcre's equipment fleet is aging and will require an estimated $200,000 in capital investment within 18 months. David also has the option of organic growth by adding a snow removal division that could generate $600,000 in new revenue in year one. Your task is to advise David on whether to pursue the acquisition, the organic growth strategy, or both, and explain how to finance whichever path he chooses.",
    individualPIs: [
      "Explain the process and considerations involved in acquiring another business",
      "Describe methods for evaluating a business acquisition opportunity",
      "Identify financing options available for business acquisitions",
      "Explain how to assess synergies between acquiring and target businesses",
      "Describe strategies for integrating employees after a business acquisition"
    ],
    tdmPIs: [
      "Explain the process and considerations involved in acquiring another business",
      "Describe methods for evaluating a business acquisition opportunity",
      "Identify financing options available for business acquisitions",
      "Explain how to assess synergies between acquiring and target businesses",
      "Describe strategies for integrating employees after a business acquisition",
      "Explain the concept of due diligence and its importance before closing an acquisition",
      "Identify risks associated with pursuing multiple growth strategies simultaneously"
    ],
    judgementQuestions: [
      "The GreenAcre acquisition price is $1.1 million for a business with $1.6 million in revenue. Does that price-to-revenue multiple seem reasonable, and what additional financial information would you want to review before advising David to proceed?",
      "If David pursues the acquisition and the snow removal division at the same time, what is the greatest operational risk he faces, and how would you mitigate it?",
      "How would you approach retaining GreenAcre's 340 commercial clients post-acquisition, given that some may have personal relationships with the outgoing owner?"
    ]
  },

  // Start-Up Business Plan (SBP) — sbp-1
  {
    id: "sbp-1",
    event: "Start-Up Business Plan",
    eventCode: "SBP",
    cluster: "entrepreneurship",
    situation:
      "You are presenting your business plan for Loopwise, a subscription-based app that helps independent fitness coaches manage client programming, track progress, and automate billing. The target market is independent personal trainers and small gym owners — approximately 320,000 in the United States — who currently use a fragmented mix of spreadsheets, email, and generic payment tools. Loopwise will charge $49 per month per coach and $149 per month for gym accounts covering up to 10 coaches. Year one projections target 800 paying subscribers, generating $480,000 in revenue against $390,000 in operating expenses, for a projected net income of $90,000. Development cost is estimated at $210,000, to be funded through $100,000 from founders and a $110,000 SAFE note from two angel investors. The judge panel represents a potential Series A investor. Your task is to present the plan's key highlights, financial viability, and competitive differentiation.",
    individualPIs: [
      "Describe the components of a comprehensive business plan",
      "Explain how to present financial projections to potential investors",
      "Identify strategies for differentiating a new product in a competitive market",
      "Explain the nature of subscription-based revenue models and their advantages",
      "Describe how to assess the size and accessibility of a target market"
    ],
    tdmPIs: [
      "Describe the components of a comprehensive business plan",
      "Explain how to present financial projections to potential investors",
      "Identify strategies for differentiating a new product in a competitive market",
      "Explain the nature of subscription-based revenue models and their advantages",
      "Describe how to assess the size and accessibility of a target market",
      "Explain the concept of customer acquisition cost and lifetime value in a SaaS business",
      "Identify the key risks in a technology startup and how to address them in a business plan"
    ],
    judgementQuestions: [
      "Your year one projection of 800 paying subscribers implies a conversion rate from free trial or outreach — what is your specific customer acquisition strategy, and what is your estimated cost to acquire each subscriber?",
      "There are established competitors in fitness coaching software such as TrueCoach and Mindbody. What specific features or pricing advantages make Loopwise compelling enough for coaches to switch?",
      "If you reach only 400 subscribers in year one instead of 800, what is your revised net income or loss, and at what subscriber count do you break even on operating expenses?"
    ]
  },

  // Start-Up Business Plan (SBP) — sbp-2
  {
    id: "sbp-2",
    event: "Start-Up Business Plan",
    eventCode: "SBP",
    cluster: "entrepreneurship",
    situation:
      "You are presenting your business plan for RootLocal, a hyperlocal online marketplace that connects consumers with locally owned small businesses for same-day pickup and delivery within a 15-mile radius. The platform will operate in two pilot cities with populations of 200,000 each. Revenue comes from a 12% transaction fee on all sales processed through the platform. Year one targets 180 participating local businesses and $1.8 million in gross merchandise value, generating $216,000 in platform revenue against $195,000 in expenses for a net income of $21,000. Launch investment required is $160,000, funded by $60,000 from the founding team and a $100,000 line of credit from a community development financial institution. The judge panel plays the role of lenders reviewing the full plan before finalizing the line of credit. Your task is to present the plan's key elements, demonstrate market demand, and address any concerns about financial sustainability.",
    individualPIs: [
      "Describe methods for validating market demand before launching a marketplace business",
      "Explain the nature of marketplace business models and two-sided network effects",
      "Identify strategies for onboarding both supply-side and demand-side marketplace participants",
      "Describe the importance of unit economics in evaluating marketplace viability",
      "Explain how to structure a business plan to address lender concerns"
    ],
    tdmPIs: [
      "Describe methods for validating market demand before launching a marketplace business",
      "Explain the nature of marketplace business models and two-sided network effects",
      "Identify strategies for onboarding both supply-side and demand-side marketplace participants",
      "Describe the importance of unit economics in evaluating marketplace viability",
      "Explain how to structure a business plan to address lender concerns",
      "Identify the key financial ratios lenders use to evaluate creditworthiness of a startup",
      "Explain strategies for achieving the critical mass needed to make a marketplace self-sustaining"
    ],
    judgementQuestions: [
      "Marketplace businesses face a chicken-and-egg problem — consumers will not join without businesses, and businesses will not join without consumers. What is your specific strategy for solving this at launch in both pilot cities?",
      "Your $21,000 projected net income on $160,000 in investment implies a first-year return of roughly 13%. How does that compare to what lenders typically expect, and how do you make the case for the line of credit?",
      "If one of your pilot cities significantly underperforms and you must cut costs, which expense categories would you reduce first while protecting the business's ability to grow?"
    ]
  },

  // ─── PERSONAL FINANCIAL LITERACY ────────────────────────────────────────────

  // Personal Financial Literacy (PFIN) — pfin-1
  {
    id: "pfin-1",
    event: "Personal Financial Literacy",
    eventCode: "PFIN",
    cluster: "personal-finance",
    situation:
      "You are a financial literacy advisor meeting with Sam Torres, a 24-year-old recent college graduate who started a full-time job three months ago earning $52,000 per year ($3,900 per month after taxes). Sam has $28,000 in federal student loans at 5.5% interest, a $4,200 credit card balance at 22.99% APR that has been growing for two years, and no emergency fund. Sam's monthly expenses total approximately $3,100, leaving $800 in monthly discretionary income. Sam wants to start investing for retirement but is unsure whether to pay down debt first. Sam also has access to an employer 401(k) with a 3% match. Your task is to help Sam understand how to prioritize financial goals, create a debt payoff strategy, and determine how much, if anything, to invest right now. Sam is motivated but overwhelmed and needs practical, actionable guidance.",
    individualPIs: [
      "Identify strategies for setting and prioritizing personal financial goals",
      "Explain the impact of high-interest debt on long-term financial health",
      "Describe the benefits of contributing to employer-sponsored retirement plans",
      "Explain the importance of establishing an emergency fund",
      "Identify debt payoff strategies such as the avalanche and snowball methods"
    ],
    tdmPIs: [
      "Identify strategies for setting and prioritizing personal financial goals",
      "Explain the impact of high-interest debt on long-term financial health",
      "Describe the benefits of contributing to employer-sponsored retirement plans",
      "Explain the importance of establishing an emergency fund",
      "Identify debt payoff strategies such as the avalanche and snowball methods",
      "Explain the concept of compound interest and its effect on both debt and savings",
      "Describe how to create a personal budget that aligns spending with financial goals"
    ],
    judgementQuestions: [
      "Sam wants to invest in the stock market before paying off the credit card debt. How would you explain the mathematical argument against doing that given the 22.99% APR?",
      "If Sam contributes 3% to the 401(k) to capture the full employer match, that leaves only $683 per month for debt and savings. How would you allocate that amount between the emergency fund and the credit card balance?",
      "Sam is considering stopping student loan payments temporarily to pay off the credit card faster. What are the risks and consequences of that approach, and do you recommend it?"
    ]
  },

  // Personal Financial Literacy (PFIN) — pfin-2
  {
    id: "pfin-2",
    event: "Personal Financial Literacy",
    eventCode: "PFIN",
    cluster: "personal-finance",
    situation:
      "You are a personal finance counselor advising Morgan Lee, a 38-year-old who recently went through a divorce. Morgan now has sole financial responsibility for two children and earns $71,000 per year ($5,000 per month after taxes). Morgan has a $185,000 mortgage with 22 years remaining at 6.1% interest, a car loan of $11,400 at 7.9% APR with 30 months remaining, and $9,500 in savings. Monthly fixed expenses total $3,800, leaving $1,200 in discretionary income. Morgan has no retirement savings at age 38 and no life insurance. Morgan's employer offers a 401(k) with a 4% match and a group term life insurance plan. Morgan is anxious about the future and wants help creating a financial plan that protects the family, builds savings, and prepares for retirement. Your task is to assess Morgan's financial situation and present a prioritized action plan.",
    individualPIs: [
      "Explain the importance of life insurance in a family financial plan",
      "Describe strategies for starting retirement savings later in life",
      "Identify methods for balancing debt repayment with savings and investment goals",
      "Explain how to assess and adjust a personal budget after a major life change",
      "Describe the role of an emergency fund in protecting financial stability"
    ],
    tdmPIs: [
      "Explain the importance of life insurance in a family financial plan",
      "Describe strategies for starting retirement savings later in life",
      "Identify methods for balancing debt repayment with savings and investment goals",
      "Explain how to assess and adjust a personal budget after a major life change",
      "Describe the role of an emergency fund in protecting financial stability",
      "Explain the impact of starting retirement contributions at age 38 versus age 28 using compound growth projections",
      "Identify financial planning considerations specific to single-parent households"
    ],
    judgementQuestions: [
      "Morgan has only $9,500 in savings and no life insurance. Given limited monthly discretionary income of $1,200, which would you prioritize first — building the emergency fund, securing life insurance, or starting the 401(k) — and why?",
      "Morgan is considering withdrawing $15,000 from a future 401(k) balance to pay off the car loan early. What are the tax and penalty implications of an early 401(k) withdrawal, and is this a good idea?",
      "If Morgan increases the monthly mortgage payment by $200, how does that affect the total interest paid over the remaining loan life, and how should Morgan weigh that against investing the same $200 in the 401(k)?"
    ]
  },

  // Personal Financial Literacy (PFIN) — pfin-3
  {
    id: "pfin-3",
    event: "Personal Financial Literacy",
    eventCode: "PFIN",
    cluster: "personal-finance",
    situation:
      "You are a financial advisor meeting with Riley Okonkwo, a 19-year-old college sophomore who works a part-time job earning $14,000 per year. Riley wants to become financially independent and is curious about investing but has never opened a brokerage or retirement account. Riley has no debt, $2,200 saved in a checking account, and monthly expenses of $900 covered by income. After expenses, Riley saves approximately $270 per month. Riley has heard about Roth IRAs, index funds, and cryptocurrency from social media and wants to know the best way to start building wealth. Riley also wants to understand how credit scores work because a car will be needed within two years. Your task is to provide Riley with foundational financial literacy guidance, explain how to start investing appropriately for this stage of life, and describe how to build credit responsibly.",
    individualPIs: [
      "Explain the features and benefits of a Roth IRA for young investors",
      "Describe the nature of index funds and their role in a diversified portfolio",
      "Explain how credit scores are calculated and why they matter",
      "Identify strategies for building credit responsibly as a young adult",
      "Describe the relationship between risk and return in investment decision making"
    ],
    tdmPIs: [
      "Explain the features and benefits of a Roth IRA for young investors",
      "Describe the nature of index funds and their role in a diversified portfolio",
      "Explain how credit scores are calculated and why they matter",
      "Identify strategies for building credit responsibly as a young adult",
      "Describe the relationship between risk and return in investment decision making",
      "Explain the power of compound interest and the long-term advantage of investing early",
      "Identify the risks associated with speculative investments such as cryptocurrency for beginning investors"
    ],
    judgementQuestions: [
      "Riley wants to put $100 per month into cryptocurrency because a friend made significant gains. How would you explain the risk profile of cryptocurrency compared to index funds for someone with only $2,200 in savings and no emergency cushion?",
      "Riley earns $14,000 per year, which is below many income thresholds but still qualifies as earned income for Roth IRA purposes. Walk through exactly how much Riley can contribute to a Roth IRA annually and what the tax advantage is compared to a taxable brokerage account.",
      "Riley needs a car in two years and has no credit history. What is the most practical two-step approach for building a credit score of at least 680 within 24 months, and how does having good credit reduce the cost of an auto loan?"
    ]
  }
];
