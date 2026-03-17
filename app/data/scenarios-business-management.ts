import type { RoleplayScenario } from "./types";

export const scenariosBusinessManagement: RoleplayScenario[] = [
  // ─── EXISTING SCENARIOS (expanded situations) ────────────────────────────────

  // Business Management (MAN) — man-1
  {
    id: "man-1",
    event: "Business Management",
    eventCode: "MAN",
    cluster: "business-management",
    situation:
      "You are a management consultant for Apex Solutions, a mid-sized software firm with 120 employees headquartered in Austin, Texas. The company builds custom enterprise resource planning (ERP) integrations for mid-market manufacturing clients, and it has experienced rapid client growth over the past 18 months, expanding from 22 active accounts to 51. Despite this revenue growth, the company's internal management infrastructure has not kept pace, creating serious operational strain across all three delivery teams.\n\nThe company's CEO, Jordan Rivera, has asked you to address a critical operations problem: project delivery timelines have slipped by an average of 3.2 weeks over the past two quarters, and client satisfaction scores have dropped from 91% to 74% as measured by the company's quarterly NPS surveys. An internal review reveals that teams lack clear accountability structures, status meetings are inconsistent across departments, and managers spend roughly 40% of their time on administrative tasks — such as manually updating project trackers and coordinating routine cross-team handoffs — instead of strategic oversight. Three enterprise clients have already sent formal letters of concern, and one account worth $280,000 annually is at risk of non-renewal.\n\nThe CEO wants a concrete plan to reorganize management processes, reduce administrative overhead, and restore on-time delivery to at least 85% within the next quarter. Jordan is specifically interested in restructuring team-level accountability, introducing a standardized project governance framework, and identifying which management tasks can be automated or delegated to free up senior managers' time. There is a budget of approximately $60,000 available for tooling, process consulting, and any short-term staffing needs.\n\nYour task today is to present your recommended management improvements to Jordan, explain how you would implement them in a realistic sequence, and describe how you would measure success at the 30-, 60-, and 90-day marks. Be prepared to justify your approach, address potential resistance from middle management, and answer questions about how to prevent delivery problems from recurring after the immediate crisis is resolved.",
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
      "You are an operations advisor for Meridian Retail Group, a regional chain of 18 clothing stores located across the Pacific Northwest. The company targets young adult shoppers aged 18–35 with a mid-market price point, and it competes directly with national chains such as Express and Banana Republic in most of its mall-based locations. Over the past three years, the company has opened seven new stores, promoted several top-performing sales associates directly into store manager roles, and grown total headcount from 210 to 390 employees.\n\nThe company's COO, Dana Cho, has brought you in because employee turnover reached 62% last year — nearly double the industry average of 34% — costing the company an estimated $890,000 in recruiting, onboarding, and training expenses. Exit interviews conducted over the past 12 months reveal a consistent pattern: employees leave primarily due to unclear advancement paths, inconsistent and often last-minute scheduling that conflicts with school and second jobs, and a perceived lack of recognition for strong performance. Complicating the situation, store managers report they feel unsupported in their own roles, frequently handle HR escalations such as terminations, accommodation requests, and interpersonal disputes without any formal training, and receive no structured coaching from district-level leadership.\n\nDana wants you to present a management strategy that reduces annualized turnover to below 40% within 12 months, improves frontline manager effectiveness through a structured development program, and builds a company-wide culture of employee engagement that can be sustained as the chain continues to grow. The strategy must address both the systemic causes of turnover and the day-to-day management behaviors that drive employee experience. Dana is open to investing in technology, training resources, or additional HR staffing if the ROI is clearly justified.\n\nYour task is to outline your recommended approach to the COO, explain how you would design and deploy a manager training program across all 18 locations, identify the resources or investments the company will need, and describe how you will measure progress so that Meridian knows within 90 days whether the strategy is working.",
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
      "You are an HR consultant for ClearPath Logistics, a freight brokerage company with 340 employees headquartered in Columbus, Ohio. The company operates in a highly competitive labor market, primarily hiring for roles in freight operations, data engineering, and enterprise sales — all occupational categories that have experienced significant wage inflation over the past three years as logistics technology companies have expanded aggressively into the same talent pools. ClearPath has historically prioritized cost control, resulting in compensation structures that were set during a lower-inflation period and have not been substantively reviewed in over four years.\n\nThe VP of Human Resources, Marcus Webb, has engaged you to redesign the company's compensation structure after a third-party salary benchmarking study conducted by Mercer revealed that ClearPath pays 12–18% below market rate for 60% of its roles. As a direct result, the company has lost 14 high-performing employees to competitors — including two senior engineers and three enterprise account managers — in the last six months alone. Additionally, three critical software engineering positions have remained vacant for over 90 days despite active recruiting, with candidates consistently declining offers due to compensation concerns. The total annual cost of unfilled positions is estimated at $1.2 million in lost productivity and delayed product development.\n\nMarcus wants you to present a phased compensation adjustment plan that brings the most at-risk roles to market within the current fiscal year, explain how to communicate changes to current employees in a way that maintains morale and trust, and recommend a process for ongoing annual market benchmarking so this competitive gap does not re-emerge. Any proposal must be financially sustainable: the HR budget can absorb no more than a 6% increase in total payroll this fiscal year, with additional room for phased adjustments over the following two years.\n\nYour task today is to present your compensation redesign recommendations to Marcus, explain the sequencing logic behind your phased approach, address how to handle employees who are significantly below market but whose roles fall outside the first adjustment phase, and propose a governance structure for keeping compensation competitive on an ongoing basis.",
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
      "You are an HR specialist called in by NovaBridge Technology, a 200-person B2B SaaS company based in Denver, Colorado, to help address a significant and accelerating spike in workplace conflict. NovaBridge builds workflow automation software for healthcare systems and has grown rapidly from 80 to 200 employees over the past two years, largely through aggressive hiring during the pandemic-era remote work boom. As the company transitioned to a hybrid model requiring employees to be in-office two days per week beginning last spring, significant interpersonal friction emerged between employees who had been fully remote and those who had been working on-site throughout.\n\nOver the past eight months, the HR department received 27 formal complaints — up from just 6 in the same period the prior year — most of which involve disputes between remote and in-office employees over workload distribution, visibility into career advancement, communication breakdowns during asynchronous work, and perceptions of preferential treatment by managers who favor employees they see in person. Three complaints have escalated to potential EEOC violations involving allegations that remote employees — who are disproportionately women and employees from underrepresented groups — have been passed over for promotions and high-visibility assignments. CEO Priya Nair believes the root cause is the company's rushed and underprepared shift to hybrid work, which was implemented without updated HR policies, manager training, or an equity review of how decisions affecting career advancement are being made.\n\nShe has asked you to present a plan that reduces formal complaints by at least 50% within six months, brings the company into full legal compliance with respect to the three active EEOC-level matters, and rebuilds trust between remote and in-office employees through structural changes rather than one-time messaging. The plan must be realistic given that the HR team is currently just two people and the company has no dedicated DEI function.\n\nYou have 10 minutes to present your strategy to Priya and her leadership team, and you should be prepared to address both the immediate legal exposure and the longer-term cultural changes needed to prevent recurrence.",
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
      "You are a business ethics consultant for Orion Consumer Products, a manufacturer of household cleaning goods and personal care items headquartered in Cincinnati, Ohio, with $45 million in annual revenue and distribution through approximately 1,400 independent and chain retail locations. Orion has built its brand reputation on quality and integrity over its 22-year history, and its code of conduct explicitly prohibits any form of payment, gift, or incentive offered to buyers or retail partners in exchange for favorable business decisions. The company conducts annual ethics training for all employees and requires managers to sign a conflict-of-interest certification each year.\n\nThe General Counsel, Sandra Kim, has discovered through an anonymous tip submitted to the company's ethics hotline that a regional sales manager based in the Southeast, Derek Paulson, has been offering retail buyers at three grocery chains undisclosed cash rebates — totaling approximately $78,000 over an eight-month period — in exchange for preferential shelf placement, end-cap positioning, and blocking a competing product line. This practice violates Orion's code of conduct, may constitute commercial bribery under applicable state statutes in Georgia and Florida, and could expose the company to retailer contract penalties estimated at $500,000 if the affected retail partners choose to assert breach of the exclusivity provisions in their agreements. Additionally, if the conduct is deemed to violate the Robinson-Patman Act, the company faces potential federal liability.\n\nSandra needs your help developing an immediate response plan to contain the damage — including decisions about Paulson's employment status, evidence preservation, and internal communications — as well as a longer-term ethics compliance program that closes the gaps that allowed this conduct to occur undetected for eight months. She also needs a communication strategy for reaching out to the affected retail partners in a way that is honest and remediating without unnecessarily expanding Orion's legal exposure. Finally, she wants your guidance on whether and how to proactively self-disclose the violation to state regulators, given that self-disclosure can sometimes reduce penalties.\n\nYour task is to present your recommendations clearly to Sandra and her executive team, covering both the immediate legal exposure and the ethical obligations the company has to its employees, retail partners, and the public.",
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
      "You are a legal and ethics advisor for Pinnacle Digital Agency, a 75-person full-service marketing firm headquartered in Chicago, Illinois, specializing in brand strategy, digital campaigns, and creative content production for mid-market consumer brands. Pinnacle has a strong reputation in the Chicago market and has grown 30% year-over-year for the past three years, largely on the strength of its creative output and long-term retainer relationships with anchor clients. The agency's standard client contract includes a warranty of originality — a legal representation that all deliverables are the original creative work of Pinnacle's employees — and grants each client exclusive intellectual property rights over all materials produced under the engagement.\n\nThe CEO, Tyler Brooks, is alarmed after an internal compliance review discovered that two employees on the content production team used AI-generated content tools — specifically Midjourney for visual assets and a large language model for copy drafts — to create the majority of the creative assets for a major campaign delivered to a healthcare client, Vitalcor Health Partners. The employees then presented the work as fully original and proprietary in the signed project completion documents, and the agency received $120,000 for the project. Vitalcor has not yet raised any concerns about the content, but they have recently begun running the campaign publicly. Tyler is worried about at least three overlapping problems: the contractual liability exposure from the warranty-of-originality breach, unresolved copyright questions around AI-generated content that could affect Vitalcor's ability to protect or enforce rights in the campaign assets, and the ethical obligation to disclose the situation to a client that paid premium rates for what it believed was original human creative work.\n\nTyler wants you to advise on the full scope of the company's legal exposure under the existing contract and applicable IP law, give a recommendation on whether to proactively disclose the AI usage to Vitalcor and how to frame that conversation, assess whether any similar undisclosed AI usage may be occurring on other client engagements, and help the agency draft internal policies that govern acceptable and unacceptable uses of AI tools going forward. The policies must be practical enough that employees will actually follow them without stifling their legitimate use of tools that can improve productivity.\n\nYour task is to present your analysis and recommendations to Tyler and the agency's leadership team, covering the immediate situation with Vitalcor, the broader audit question, and the policy framework the agency needs to operate ethically and legally as AI tools become more prevalent in creative work.",
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
      "You are an administrative services consultant for Hargrove Financial Group, a registered investment advisor and wealth management firm with 90 employees serving approximately 1,200 high-net-worth client households in the greater Atlanta area. Hargrove has been in operation for 31 years, and its back-office systems and document management practices largely reflect processes established during the early 2000s, before the widespread adoption of cloud-based document management platforms. The firm uses a combination of physical file cabinets, an on-premise shared network drive organized inconsistently by department, and a legacy document management system that was last updated in 2017 and is no longer supported by its vendor.\n\nThe Office Manager, Claire Tran, has asked for your help after an internal audit conducted in advance of an SEC examination found that the firm's records management situation is critically disorganized: 34% of client documents — including account agreements, trade confirmations, and correspondence — cannot be located within a reasonable timeframe during the audit process. Physical and digital filing conventions differ by department and sometimes differ by individual employee within the same department. Most critically, the firm is at measurable risk of violating SEC Rule 17a-4 and the Investment Advisers Act recordkeeping requirements, which mandate retention of most client-related records for seven years in a readily accessible format. Three client service delays in the past quarter were directly attributed to staff being unable to locate account documents quickly enough to respond to client inquiries.\n\nClaire needs you to recommend a comprehensive records management overhaul that will bring the firm into SEC compliance, significantly reduce document retrieval time, and establish a maintainable system that employees across all departments will use consistently. You should outline the technology solutions or process changes required, address the backlog of existing disorganized historical records, and create a staff training and adoption plan. The firm's annual administrative budget for this initiative is $40,000, which may be spent on software licensing, external consulting, hardware, or training resources.\n\nYour task is to present your recommendations to Claire and the firm's managing partners, prioritize the steps that are most urgent from a regulatory standpoint, and explain how you will ensure that the new system is actually adopted and maintained rather than reverting to old habits within six months.",
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
      "You are an administrative consultant for Lakeview Medical Practice, a multi-specialty group practice based in suburban Minneapolis with 8 physicians, 12 clinical support staff, and 25 front office and administrative employees. The practice sees approximately 220 patient visits per week and contracts with 14 different insurance carriers, including Medicare, Medicaid, and several commercial plans, each with distinct prior authorization, eligibility verification, and billing requirements. Over the past two years, the practice has grown by adding two physicians and expanding into a second location, but the administrative team and processes have not been scaled accordingly.\n\nThe Practice Administrator, Robert Osei, has engaged you after realizing the front office is overwhelmed and making costly errors: patient scheduling errors — including double bookings, incorrect provider assignments, and missed appointment types — have increased by 28% over the last year. Staff spend an average of 2.4 hours per day on manual data entry tasks that the practice's existing electronic health records platform, Athenahealth, is technically capable of automating but has not been configured to do. The front desk receives approximately 55 patient call-backs per week that result from incorrect or incomplete insurance verification at the time of scheduling, leading to claim denials that cost the practice an average of $180 per corrected claim to resolve. In aggregate, these inefficiencies cost the practice an estimated $95,000 per year in staff overtime, delayed reimbursements, and lost appointment revenue from scheduling errors that result in no-shows or last-minute cancellations.\n\nRobert wants you to analyze the administrative workflows in detail, identify the top three operational bottlenecks driving the highest costs, and present a prioritized improvement plan with specific, actionable recommendations. Any solutions must be implementable within the practice's existing Athenahealth EHR platform or through low-cost integrations, and the total improvement budget is $25,000. Because the physicians are the primary revenue generators, any changes to scheduling protocols must be designed to minimize disruption to their daily workflow.\n\nYour task is to present your findings and recommendations to Robert and the practice's physician partners, explain the ROI of your proposed changes with specific dollar figures where possible, and describe what success looks like at the 90-day mark.",
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

  // ─── NEW SCENARIOS ─────────────────────────────────────────────────────────

  // ── Business Law & Ethics Team Decision Making (BLTDM) ─────────────────────

  // BLTDM — bltdm-1
  {
    id: "bltdm-1",
    event: "Business Law & Ethics Team Decision Making",
    eventCode: "BLTDM",
    cluster: "business-management",
    situation:
      "You and your teammate are ethics and compliance advisors called in by Cascade Pharmaceuticals, a specialty drug manufacturer based in Portland, Oregon, with $320 million in annual revenue. Cascade produces generic injectable medications sold primarily to hospital systems and outpatient surgical centers. The company employs 640 people and is regulated by the FDA under 21 CFR Part 211, which governs current Good Manufacturing Practice (cGMP) for finished pharmaceutical products. Over the past year, the company has grown rapidly through three contract manufacturing acquisitions and is still in the process of integrating those facilities into its quality and compliance systems.\n\nThe company's Chief Compliance Officer, Helen Murata, has brought your team in urgently after an anonymous complaint submitted to the FDA's MedWatch system alleged that a Cascade production supervisor instructed line operators at the newly acquired Beaverton facility to falsify batch records — specifically, to record temperature readings within the required 2–8°C cold chain range even when actual readings exceeded 12°C during two separate production runs in November. If accurate, this constitutes a federal records falsification violation under 18 U.S.C. § 1001, a cGMP violation that could result in a Class I drug recall affecting approximately 40,000 units of an injectable antibiotic currently in hospital inventory, and potential criminal liability for both the supervisor and potentially Cascade's executive leadership if they are found to have known or should have known of the conduct. Helen estimates the direct cost of a recall, remediation, and regulatory response at $8 to $14 million.\n\nYour team must evaluate the company's legal obligations once it becomes aware of a potential federal violation — including whether and how quickly Cascade must self-report to the FDA — recommend an internal investigation protocol that preserves evidence and protects the company's legal position, advise on employee relations issues involving the supervisor and any employees who participated in or witnessed the falsification, and propose structural compliance improvements to prevent recurrence at all three acquired facilities. Time is critical: if the FDA has already received the complaint, the agency may be preparing its own investigation.\n\nPresent your team's analysis and recommendations to Helen and Cascade's General Counsel, addressing both the immediate crisis response and the longer-term compliance program overhaul the company needs.",
    individualPIs: [
      "Explain the nature of regulatory compliance in manufacturing industries",
      "Describe the legal consequences of falsifying business records",
      "Identify the ethical obligations of a business when a compliance violation is discovered",
      "Explain the role of whistleblower protections in corporate compliance",
      "Describe the process for conducting an internal investigation"
    ],
    tdmPIs: [
      "Explain the nature of regulatory compliance in manufacturing industries",
      "Describe the legal consequences of falsifying business records",
      "Identify the ethical obligations of a business when a compliance violation is discovered",
      "Explain the role of whistleblower protections in corporate compliance",
      "Describe the process for conducting an internal investigation",
      "Explain the importance of self-disclosure to regulatory agencies and its effect on penalty outcomes",
      "Identify strategies for building a culture of compliance across multiple business locations"
    ],
    judgementQuestions: [
      "If the internal investigation reveals that the Beaverton facility supervisor acted alone without executive knowledge, does that meaningfully change the company's legal exposure or its ethical obligations to self-report?",
      "How do you balance the need for a thorough internal investigation — which takes time — against the risk that the FDA may already be preparing to act based on the MedWatch complaint?",
      "What specific structural changes to Cascade's compliance program would prevent a newly acquired facility from operating outside cGMP standards for the 6–12 months it typically takes to complete integration?"
    ]
  },

  // BLTDM — bltdm-2
  {
    id: "bltdm-2",
    event: "Business Law & Ethics Team Decision Making",
    eventCode: "BLTDM",
    cluster: "business-management",
    situation:
      "You and your teammate are business ethics consultants retained by Vanguard Data Solutions, a B2B data analytics firm headquartered in Atlanta, Georgia, with 155 employees and $28 million in annual revenue. Vanguard aggregates consumer behavioral data from mobile app publishers, retail loyalty programs, and social media platforms and sells anonymized data segments to advertising technology companies and marketing analytics platforms. The company's data products are governed by its published privacy policy, its standard data processing agreements with clients, and the applicable requirements of the California Consumer Privacy Act (CCPA), the General Data Protection Regulation (GDPR) for any EU-resident data subjects, and the emerging frameworks under the American Data Privacy Protection Act.\n\nThe company's CEO, Marcus Thornton, has called your team in after the head of data engineering disclosed in an internal meeting that Vanguard's anonymization process — which the company represents in client contracts as producing data that cannot be re-identified — has a documented flaw. Specifically, a data scientist identified that when Vanguard's data segments are cross-referenced with two other commercially available datasets, approximately 12% of the anonymized records can be re-identified to specific individuals with a high degree of confidence. This means that clients who have purchased these segments may have unknowingly received data that does not meet the anonymization standard Vanguard warranted in its contracts. Three large advertising clients, including one EU-based company, have active campaigns using these segments. Vanguard has collected approximately $4.2 million in fees from the affected data segments over the past 18 months.\n\nMarcus needs your team to assess the company's legal exposure under CCPA, GDPR, and applicable contract law, recommend whether and how to proactively disclose the anonymization flaw to affected clients and potentially to regulators, advise on the immediate technical steps to remediate the flaw, and help design a data governance framework that includes independently validated anonymization standards going forward. The company's board of directors is meeting in 72 hours and expects a preliminary recommendation on whether to self-disclose.\n\nPresent your team's recommendations to Marcus and his executive team, prioritizing the most urgent decisions and explaining the ethical and legal reasoning behind each recommendation.",
    individualPIs: [
      "Explain consumer privacy laws and their application to data-driven businesses",
      "Describe the legal implications of misrepresenting data anonymization standards in contracts",
      "Identify the ethical obligations of a business when a product defect or misrepresentation is discovered",
      "Explain the concept of data governance and its importance in managing business risk",
      "Describe strategies for making proactive disclosure decisions in a legally complex environment"
    ],
    tdmPIs: [
      "Explain consumer privacy laws and their application to data-driven businesses",
      "Describe the legal implications of misrepresenting data anonymization standards in contracts",
      "Identify the ethical obligations of a business when a product defect or misrepresentation is discovered",
      "Explain the concept of data governance and its importance in managing business risk",
      "Describe strategies for making proactive disclosure decisions in a legally complex environment",
      "Identify the components of an effective data privacy compliance program",
      "Explain how international privacy regulations such as GDPR affect U.S.-based companies"
    ],
    judgementQuestions: [
      "Given that the re-identification vulnerability affects 12% of records rather than 100%, does the partial nature of the flaw change your recommendation on whether to self-disclose to regulators?",
      "How would you advise Marcus to communicate the anonymization issue to the EU-based advertising client, given that GDPR imposes stricter timelines and penalties than CCPA?",
      "If Vanguard fixes the anonymization flaw immediately but does not disclose it to clients or regulators, what is the long-term risk to the company's market position if the flaw is discovered independently in the future?"
    ]
  },

  // ── Business Management & Administration Series (BMS) ──────────────────────

  // BMS — bms-1
  {
    id: "bms-1",
    event: "Business Management & Administration Series",
    eventCode: "BMS",
    cluster: "business-management",
    situation:
      "You are a management consultant advising Trident Specialty Foods, a regional specialty food distributor headquartered in Nashville, Tennessee, that supplies artisan cheeses, charcuterie, and imported pantry items to approximately 340 restaurant, hotel, and specialty grocery accounts across the Southeast. Trident has 78 employees, generates $22 million in annual revenue, and has been profitable every year since its founding 14 years ago. The company has operated on systems and processes built during its early growth phase, and while those systems worked well when Trident had 40 employees and 150 accounts, the CEO, Patricia Holloway, now believes the company's internal operations are becoming a significant constraint on further growth.\n\nPatricia has engaged you because three interconnected problems are limiting the company's performance. First, the sales team of 12 field representatives uses inconsistent individual methods for tracking customer contacts, order history, and follow-up commitments — there is no CRM system, and when a rep leaves, their customer relationship knowledge often leaves with them. Second, the operations and delivery scheduling function is managed through a combination of spreadsheets and whiteboard schedules that are prone to errors: in the past quarter, the company made 23 delivery errors — wrong products, wrong quantities, or missed delivery windows — costing an estimated $47,000 in credits, restocking, and expedite fees. Third, the company has no formal management reporting cadence: department heads rarely meet as a group, and Patricia often learns about operational problems through customer complaints rather than internal early-warning systems.\n\nYour task is to assess these three problem areas, recommend prioritized solutions that include both process changes and technology investments where appropriate, and present an implementation roadmap that is realistic given Trident's size and resources. Patricia has a total improvement budget of $85,000 for the coming fiscal year and wants to see measurable improvement on delivery accuracy and sales retention within 90 days.\n\nBe prepared to address how you would get buy-in from the sales team for adopting a CRM, how you would measure the ROI of your recommendations, and what the biggest implementation risks are.",
    individualPIs: [
      "Explain the importance of management information systems in business operations",
      "Describe strategies for improving operational efficiency in a distribution business",
      "Identify the components of an effective management reporting system",
      "Explain the role of customer relationship management in retaining business accounts",
      "Describe how to prioritize operational improvements based on financial impact"
    ],
    tdmPIs: [
      "Explain the importance of management information systems in business operations",
      "Describe strategies for improving operational efficiency in a distribution business",
      "Identify the components of an effective management reporting system",
      "Explain the role of customer relationship management in retaining business accounts",
      "Describe how to prioritize operational improvements based on financial impact",
      "Identify change management strategies for technology adoption in small to mid-sized businesses",
      "Explain the relationship between internal operational systems and customer satisfaction"
    ],
    judgementQuestions: [
      "If you could only address one of the three problem areas — CRM, delivery operations, or management reporting — within the first 90 days given the budget and bandwidth constraints, which would you choose and why?",
      "The sales team has historically resisted technology adoption and values their individual approach to customer relationships. How would you design the CRM rollout to minimize resistance and maximize adoption?",
      "Patricia is learning about problems through customer complaints. What specific management reporting mechanisms would you put in place so she has a 30-day early-warning view of operational issues?"
    ]
  },

  // BMS — bms-2
  {
    id: "bms-2",
    event: "Business Management & Administration Series",
    eventCode: "BMS",
    cluster: "business-management",
    situation:
      "You are a management and administration advisor for Northgate Property Services, a residential property management company based in Charlotte, North Carolina, that manages 1,840 rental units across 22 residential communities on behalf of 14 property-owner clients. The company has 52 employees, including 8 community managers, a maintenance team of 18 technicians, a leasing department of 6 agents, and an administrative and accounting staff of 10. Northgate charges owners a management fee of 8% of collected rent and generates approximately $5.1 million in annual revenue. The company has grown by 40% in units under management over the past two years through three new client wins.\n\nThe CEO, Bryan Weston, has brought you in because growth has exposed serious administrative and management weaknesses that are beginning to affect client retention. Two property-owner clients representing 410 combined units have formally expressed dissatisfaction in the past six months, citing slow maintenance response times, inconsistent communication about their properties, and financial reporting that arrives late and contains errors. An internal review found the following: the average maintenance work order takes 6.8 days to close, compared to a 3-day standard promised to clients in management agreements; community managers are each responsible for an average of 230 units — well above the 150-unit industry standard — which leaves them with insufficient time for proactive property oversight; and monthly owner financial statements are produced manually in Excel by two accounting staff members, a process that takes 11 days to complete and introduces formatting and calculation errors in approximately 20% of reports.\n\nBryan wants you to design an administrative and management restructuring plan that reduces maintenance response time to under 3 days, improves owner reporting accuracy and timeliness, and reduces community manager workloads to sustainable levels without immediately adding significant headcount. He also wants a client communication and recovery plan for the two at-risk property owners. The total budget available for this initiative is $110,000, which may include software, process redesign, training, or limited new hires.\n\nPresent your recommendations to Bryan and his senior leadership team, being specific about implementation sequencing, resource requirements, and how you will track the progress of each improvement.",
    individualPIs: [
      "Describe strategies for managing workload distribution in a service organization",
      "Explain the role of technology in improving administrative reporting accuracy",
      "Identify methods for improving service response time in an operations-intensive business",
      "Describe techniques for retaining clients in a professional services business",
      "Explain the relationship between staff capacity and service quality"
    ],
    tdmPIs: [
      "Describe strategies for managing workload distribution in a service organization",
      "Explain the role of technology in improving administrative reporting accuracy",
      "Identify methods for improving service response time in an operations-intensive business",
      "Describe techniques for retaining clients in a professional services business",
      "Explain the relationship between staff capacity and service quality",
      "Identify the components of an effective client communication plan",
      "Explain how process automation can reduce administrative error rates in reporting functions"
    ],
    judgementQuestions: [
      "Given that adding significant headcount is not immediately feasible, what specific changes to how community managers allocate their time could reduce effective workload without hiring additional managers right away?",
      "For the two at-risk property-owner clients, what would a concrete 60-day recovery plan look like — and how do you demonstrate improvement in a way that is credible to a skeptical client?",
      "The manual Excel-based reporting process introduces errors in 20% of owner reports. What is the most cost-effective solution to reduce that error rate to under 2% within the $110,000 budget?"
    ]
  },

  // ── Business Research & Presentation (BRP) ────────────────────────────────

  // BRP — brp-1
  {
    id: "brp-1",
    event: "Business Research & Presentation",
    eventCode: "BRP",
    cluster: "business-management",
    situation:
      "You are a business research analyst presenting to the executive leadership team of Ironwood Manufacturing, a Tier 2 automotive parts supplier headquartered in Lansing, Michigan, that produces precision-stamped metal components for three major OEM customers: Ford, General Motors, and a Tier 1 supplier to Stellantis. Ironwood has 310 employees, operates two production facilities, and generates $67 million in annual revenue. The company has been profitable for 18 of its 22 years in operation, but the past three years have been turbulent due to supply chain disruptions, raw material cost spikes, and growing pressure from OEM customers to reduce component pricing by 4–6% annually under long-term purchase agreements.\n\nThe CEO, Raymond Kowalski, asked your team to conduct a comprehensive business research study on a critical strategic question: should Ironwood accelerate investment in precision laser-cutting and robotic welding automation — an estimated $4.5 million capital expenditure — in order to offset rising labor costs, meet OEM quality specifications that are tightening for EV-related components, and remain competitive as the company's three-year supply agreements come up for renewal in 18 months? To answer this question, your team researched the current state of automotive Tier 2 supplier automation adoption, conducted a financial analysis of the proposed capital investment including NPV, IRR, and payback period calculations using Ironwood's own cost data, surveyed comparable manufacturers, and interviewed Ironwood's two largest OEM purchasing managers about their selection criteria for supplier renewals.\n\nYour research found that the NPV of the automation investment is positive at $2.1 million over a 7-year horizon assuming labor savings of $680,000 per year and quality-related contract retention, but that the investment carries meaningful downside risk if one of the OEM contracts is not renewed — a scenario your interviews suggest has approximately a 30% probability given a competing supplier's recent price undercutting. Your research also identified a lower-cost alternative: a phased $1.8 million investment in collaborative robots (cobots) that would capture 60% of the labor savings at one-third of the capital cost, with less execution risk.\n\nPresent your research findings, methodology, and strategic recommendation to Ironwood's executive team. Be prepared to defend your analytical approach, address the limitations of your research, and answer questions about the financial modeling assumptions.",
    individualPIs: [
      "Explain the nature and importance of business research in strategic decision making",
      "Describe methods for conducting financial analysis of capital investment decisions",
      "Identify techniques for gathering and synthesizing primary and secondary research",
      "Explain how to structure and present research findings to an executive audience",
      "Describe the role of risk analysis in evaluating strategic business alternatives"
    ],
    tdmPIs: [
      "Explain the nature and importance of business research in strategic decision making",
      "Describe methods for conducting financial analysis of capital investment decisions",
      "Identify techniques for gathering and synthesizing primary and secondary research",
      "Explain how to structure and present research findings to an executive audience",
      "Describe the role of risk analysis in evaluating strategic business alternatives",
      "Explain how to identify and address limitations and biases in business research",
      "Identify criteria for selecting among strategic alternatives based on risk-adjusted returns"
    ],
    judgementQuestions: [
      "Your NPV calculation depends heavily on the assumption that labor savings will be $680,000 per year. If the actual savings are only $480,000 due to higher-than-expected maintenance costs on the automation equipment, does the full investment still make sense — and how does the cobot alternative compare under that scenario?",
      "The two OEM purchasing managers you interviewed gave you forward-looking information about their supplier selection criteria. How do you account for the potential bias in that data when presenting it to the executive team?",
      "If Ironwood's board wants to proceed with the full $4.5 million automation investment but Raymond wants to wait for the cobot option, how would you facilitate that decision and what additional analysis would you recommend?"
    ]
  },

  // BRP — brp-2
  {
    id: "brp-2",
    event: "Business Research & Presentation",
    eventCode: "BRP",
    cluster: "business-management",
    situation:
      "You are a business research consultant presenting to the leadership team of Beacon Health Systems, a regional nonprofit hospital network with three acute care hospitals and 14 outpatient clinics in central Virginia. Beacon employs 4,200 people, serves approximately 185,000 unique patients annually, and operates on a total revenue base of $890 million. Like most nonprofit health systems, Beacon operates on thin operating margins — currently 1.8% — and is subject to both the financial pressures of serving a significant Medicaid and uninsured patient population and the regulatory requirements that define its tax-exempt mission.\n\nThe CEO, Dr. Alicia Fernandez, commissioned your team to research a specific operational question: is there a financially viable and patient-outcome-positive case for expanding Beacon's telehealth services from the current 14% of outpatient visits to 35% of outpatient visits over the next three years? The research was motivated by two pressures: post-pandemic patient demand data showing that 61% of Beacon's existing patients say they prefer telehealth for follow-up and chronic condition management visits, and a reimbursement landscape that has become more favorable since CMS made several telehealth flexibilities permanent for Medicare beneficiaries in late 2023.\n\nYour team conducted a 14-week research study that included analysis of Beacon's internal patient flow and revenue-per-visit data by service line, benchmarking against four comparable health systems that have achieved 30%+ telehealth penetration, a financial model projecting the capital and operational costs of the technology platform upgrades needed, a patient satisfaction survey of 1,240 Beacon patients, and a review of reimbursement rate differentials between in-person and telehealth visits by payer type. The research identified a net annual financial benefit of $3.4 million if the 35% target is achieved, driven primarily by increased throughput in primary care and reduced no-show rates, but also found that the expansion would require $2.1 million in upfront technology investment and that reimbursement rates for telehealth visits are on average 11% lower than in-person rates for commercial payers.\n\nPresent your complete research findings and recommendation to Dr. Fernandez and the Beacon board, explain your methodology and data sources, address the financial modeling assumptions, and be prepared to answer questions about implementation risk and the potential patient-equity implications of a shift toward telehealth.",
    individualPIs: [
      "Explain how to design a business research study to answer a specific strategic question",
      "Describe techniques for analyzing healthcare service delivery data",
      "Identify methods for benchmarking an organization's performance against comparable entities",
      "Explain how to translate research findings into actionable strategic recommendations",
      "Describe the importance of addressing equity implications in healthcare business decisions"
    ],
    tdmPIs: [
      "Explain how to design a business research study to answer a specific strategic question",
      "Describe techniques for analyzing healthcare service delivery data",
      "Identify methods for benchmarking an organization's performance against comparable entities",
      "Explain how to translate research findings into actionable strategic recommendations",
      "Describe the importance of addressing equity implications in healthcare business decisions",
      "Explain the financial modeling concepts of cost-benefit analysis in a nonprofit context",
      "Identify strategies for presenting complex research findings clearly to a non-technical audience"
    ],
    judgementQuestions: [
      "Your financial model projects a $3.4 million net annual benefit, but that assumes the 35% telehealth penetration target is actually achieved. What is your confidence level in that assumption, and what does the model look like at 25% penetration?",
      "A significant portion of Beacon's patient population is elderly or lives in rural areas with limited broadband access. How does your recommendation account for the equity risk of expanding telehealth in a way that could disadvantage those patients?",
      "Dr. Fernandez's board includes several physicians who are skeptical that telehealth quality matches in-person care. What research evidence would you cite to address that concern directly?"
    ]
  },

  // ── Human Resources Management (HRM) ──────────────────────────────────────

  // HRM — hrm-1
  {
    id: "hrm-1",
    event: "Human Resources Management",
    eventCode: "HRM",
    cluster: "business-management",
    situation:
      "You are an HR management consultant for Silverline Construction Group, a commercial general contractor based in Phoenix, Arizona, with 520 employees including 380 field workers, 85 project management and engineering staff, and 55 administrative and executive employees. Silverline works on commercial projects valued between $5 million and $80 million, primarily in the healthcare, education, and light industrial sectors, and currently has $290 million in work under contract. The construction industry has historically operated with informal and relationship-driven HR practices, and Silverline is no exception — formal job descriptions exist for fewer than 40% of roles, performance reviews have not been consistently conducted in at least four years, and there is no structured succession plan for any of the company's 12 senior project managers, several of whom are within five years of retirement.\n\nThe COO, Stephanie Reyes, has engaged you because the company is losing project management talent at an alarming rate: three senior project managers have left in the past 14 months — two to competitors and one to retirement — and the company currently has two $35 million-plus projects that are understaffed at the leadership level. Recruiting external candidates for senior PM roles has proven extremely difficult because Silverline's compensation is below market, its career advancement process is opaque, and its reputation in the market as an employer is mixed. Simultaneously, field worker recruitment and retention has become more challenging as labor shortages in the Phoenix construction market have intensified, with competing general contractors offering signing bonuses of $1,500–$3,000 for experienced trade workers.\n\nStephanie wants you to develop a comprehensive human resources management strategy that addresses three priorities: redesigning the compensation and career path structure for project management staff, building a succession pipeline for senior PM roles using internal talent, and improving field workforce retention through enhanced benefits and recognition. Any recommendations must be financially sustainable given that Silverline's net margin is approximately 4.2%, and the company cannot absorb more than a 3% total payroll increase in the current fiscal year.\n\nPresent your HR strategy recommendations to Stephanie and Silverline's executive team, explain your prioritization logic, and be specific about which interventions will have the most impact on the retention problem in the shortest time.",
    individualPIs: [
      "Describe strategies for developing and retaining professional talent in skilled industries",
      "Explain the process of building an internal succession planning program",
      "Identify the components of a competitive total compensation package for project management roles",
      "Describe methods for improving employer brand and reputation in a competitive labor market",
      "Explain how to create transparent career progression frameworks for exempt employees"
    ],
    tdmPIs: [
      "Describe strategies for developing and retaining professional talent in skilled industries",
      "Explain the process of building an internal succession planning program",
      "Identify the components of a competitive total compensation package for project management roles",
      "Describe methods for improving employer brand and reputation in a competitive labor market",
      "Explain how to create transparent career progression frameworks for exempt employees",
      "Identify the HR implications of operating in a cyclical industry with project-based staffing needs",
      "Describe techniques for retaining skilled trade workers in a tight labor market"
    ],
    judgementQuestions: [
      "Given the 3% total payroll increase constraint, you cannot raise compensation for both project managers and field workers simultaneously to market rates. How would you allocate the available budget increase, and what is your rationale?",
      "The company has no formal succession plan for its senior project managers, and several are approaching retirement. What is the minimum viable succession program you could launch in 90 days with limited HR staff capacity?",
      "If Silverline's mixed employer reputation is driving candidates to choose competitors during recruiting, what specific and relatively low-cost changes to the candidate experience or employer brand could produce visible improvement within six months?"
    ]
  },

  // HRM — hrm-2
  {
    id: "hrm-2",
    event: "Human Resources Management",
    eventCode: "HRM",
    cluster: "business-management",
    situation:
      "You are an HR management advisor for TerraVerde Agricultural Technologies, a precision agriculture company headquartered in Fresno, California, that develops soil monitoring sensors, irrigation automation systems, and crop analytics software for large-scale farming operations. TerraVerde has 185 employees: 60 in software and hardware engineering, 35 in field services and customer support, 45 in sales and marketing, and 45 in operations and administration. The company raised a $38 million Series B round 14 months ago and has been scaling rapidly, growing from 95 to 185 employees in 16 months. It is expected to grow to approximately 260 employees by the end of the next fiscal year.\n\nThe VP of People, Jordan Kim, has brought you in because TerraVerde's rapid growth has created a fragmented and inconsistent people management environment. The company hired managers quickly to keep pace with team growth, many of whom are technically strong but have little prior management experience. Employee survey results from the most recent quarterly pulse check showed that only 44% of employees agreed with the statement \"my manager helps me grow in my career\" — down from 67% eighteen months ago — and only 51% agreed that \"performance expectations are clear to me.\" Additionally, TerraVerde's engineering team has a 34% annualized turnover rate — nearly three times the 12% rate in the sales and marketing team — and exit interview data from departing engineers consistently cites poor manager communication and a lack of structured performance feedback as primary reasons for leaving.\n\nJordan wants you to design an HR management program specifically targeted at improving manager effectiveness across the company, with particular urgency in the engineering organization. The program should include a manager development curriculum, a revamped performance management process with clearer expectation-setting, and a framework for ongoing manager accountability. Given the company's growth trajectory, the program must also be designed to scale: it should work equally well when TerraVerde has 260 employees as it does today at 185.\n\nPresent your recommendations to Jordan and TerraVerde's executive team, addressing the specific cultural and organizational factors driving the engineering retention problem, and explain how you would sequence the program rollout given that managers are currently very stretched for time.",
    individualPIs: [
      "Explain the role of manager effectiveness in employee retention and engagement",
      "Describe the components of a high-quality performance management and feedback process",
      "Identify training and development approaches for first-time managers in high-growth companies",
      "Explain how to measure and hold managers accountable for people management outcomes",
      "Describe strategies for designing HR programs that scale with company growth"
    ],
    tdmPIs: [
      "Explain the role of manager effectiveness in employee retention and engagement",
      "Describe the components of a high-quality performance management and feedback process",
      "Identify training and development approaches for first-time managers in high-growth companies",
      "Explain how to measure and hold managers accountable for people management outcomes",
      "Describe strategies for designing HR programs that scale with company growth",
      "Identify the relationship between career development clarity and employee retention in technical roles",
      "Explain how to use employee survey data to diagnose and prioritize HR interventions"
    ],
    judgementQuestions: [
      "The engineering team has 34% annualized turnover compared to 12% in sales and marketing. Before designing a universal manager development program, should you treat engineering as a separate problem requiring a separate intervention? Why or why not?",
      "Many of TerraVerde's managers are stretched for time due to rapid growth. How would you design a manager development program that is genuinely effective but requires no more than 2 hours per week of manager time during the first six months?",
      "If the manager development program launches and engineering retention does not improve within 9 months, what alternative hypotheses about the root cause of turnover would you investigate, and how?"
    ]
  },

  // ── Management Information Systems (MIS) ──────────────────────────────────

  // MIS — mis-1
  {
    id: "mis-1",
    event: "Management Information Systems",
    eventCode: "MIS",
    cluster: "business-management",
    situation:
      "You are a management information systems consultant for Redwood Financial Services, a regional insurance agency and financial planning firm headquartered in Sacramento, California, with 6 branch offices, 140 employees, and $38 million in annual commission and fee revenue. Redwood serves approximately 12,400 individual and small business clients and has licensed producers writing policies across 14 insurance carriers and three broker-dealer platforms. The company has grown by acquiring two smaller independent agencies over the past five years, and each acquisition brought its own technology stack and data systems, none of which were fully integrated into Redwood's core environment.\n\nThe CEO, Christine Wald, has engaged you because the company is operating with a fragmented and risk-laden technology environment that is increasingly affecting productivity and client service quality. The core problems are: first, the company maintains three separate client databases — one per acquired entity — and there is no single system of record for client policy information, meaning producers often have incomplete visibility into a client's full relationship with Redwood; second, the company's financial reporting relies on manual data pulls from five different systems, a process that takes the CFO's team 8–10 days to produce month-end management reports and introduces reconciliation errors in roughly 25% of report cycles; and third, the company has no formal data backup and disaster recovery plan for its on-premise servers at the Sacramento headquarters, creating material business continuity risk.\n\nChristine wants you to design a three-year MIS roadmap that consolidates client data into a single CRM and policy management platform, automates financial reporting, and implements a cloud-based disaster recovery solution. She estimates the company can invest approximately $420,000 over three years in technology improvements. The plan must account for regulatory requirements under California DOI licensing rules and FINRA data retention requirements that apply to the broker-dealer activities.\n\nPresent your MIS strategy to Christine and the Redwood leadership team, explaining your recommended technology architecture, sequencing rationale, and how you would manage the data migration and change management challenges associated with consolidating three legacy systems.",
    individualPIs: [
      "Explain the role of management information systems in supporting business operations and decision making",
      "Describe the process of evaluating and selecting enterprise software solutions",
      "Identify strategies for integrating disparate legacy systems in a merger or acquisition context",
      "Explain the importance of data governance and a single system of record in financial services",
      "Describe the components of a business continuity and disaster recovery plan"
    ],
    tdmPIs: [
      "Explain the role of management information systems in supporting business operations and decision making",
      "Describe the process of evaluating and selecting enterprise software solutions",
      "Identify strategies for integrating disparate legacy systems in a merger or acquisition context",
      "Explain the importance of data governance and a single system of record in financial services",
      "Describe the components of a business continuity and disaster recovery plan",
      "Identify regulatory data retention requirements applicable to financial services businesses",
      "Explain how automated reporting systems reduce operational risk and improve management decision speed"
    ],
    judgementQuestions: [
      "The three client databases need to be consolidated, but the data from the two acquired agencies may be incomplete or formatted differently from Redwood's native records. How would you approach the data migration and quality assurance process to avoid introducing errors into the unified system?",
      "Christine has a $420,000 budget over three years. If the CRM consolidation, financial reporting automation, and disaster recovery solution each independently cost more than one-third of that budget, how would you prioritize and phase the investments?",
      "Some of Redwood's senior producers have worked in the company for over 15 years and have built personal workarounds around the fragmented systems. How would you manage the change management challenge of moving them to a new unified platform without disrupting their client relationships?"
    ]
  },

  // MIS — mis-2
  {
    id: "mis-2",
    event: "Management Information Systems",
    eventCode: "MIS",
    cluster: "business-management",
    situation:
      "You are a management information systems advisor for Summit School District, a K–12 public school district serving 18,400 students across 24 schools in suburban Colorado. The district employs 1,950 staff members including 1,100 teachers, 350 instructional support staff, 200 administrators, and 300 operations personnel. Summit's technology environment includes a student information system (SIS), a separate learning management system, a human resources and payroll platform, a financial management system, and 14 individual school-level data tools used for assessments, attendance, and intervention tracking — most of which do not communicate with one another and were procured independently by schools over the past decade.\n\nThe Superintendent, Dr. Rebecca Torres, has asked you to address an urgent data and systems problem that is affecting instructional decision-making. The district's instructional coaches and school principals report that they cannot get a clear, current picture of individual student performance because data is siloed across five different systems: attendance data lives in the SIS, assessment results are in a separate vendor platform, special education progress notes are in a third system, and behavioral incident records are in a school-level spreadsheet. When a teacher requests information about a struggling student, compiling a full picture requires logging into at least four systems, which principals report takes 45–90 minutes per student. As a result, many teachers and school leaders have stopped attempting to use data comprehensively in their intervention decisions.\n\nDr. Torres wants you to recommend an MIS solution that creates a unified student data dashboard accessible to teachers, coaches, and administrators, addresses the district's student data privacy obligations under FERPA and the Colorado Student Data Transparency and Security Act, and can be implemented without replacing the district's core systems. The total budget for this initiative is $280,000 over two years. Additionally, Dr. Torres wants a data governance framework that defines who can access what student data and under what circumstances, since the current environment has no documented data access policy.\n\nPresent your recommendations to Dr. Torres and the district's technology steering committee, addressing the technical architecture, FERPA compliance approach, change management strategy for teacher adoption, and a phased implementation plan.",
    individualPIs: [
      "Explain how management information systems can improve organizational decision making",
      "Describe the technical and governance challenges of integrating multiple data systems",
      "Identify student data privacy laws and their implications for school district technology decisions",
      "Explain the concept of data interoperability and its importance in complex organizations",
      "Describe strategies for achieving technology adoption by end users in a large organization"
    ],
    tdmPIs: [
      "Explain how management information systems can improve organizational decision making",
      "Describe the technical and governance challenges of integrating multiple data systems",
      "Identify student data privacy laws and their implications for school district technology decisions",
      "Explain the concept of data interoperability and its importance in complex organizations",
      "Describe strategies for achieving technology adoption by end users in a large organization",
      "Identify the components of an effective data governance framework for a public sector organization",
      "Explain the trade-offs between building a custom integration solution versus purchasing a vendor platform"
    ],
    judgementQuestions: [
      "Some teachers and principals have completely stopped using data systems because they find them too fragmented and time-consuming. How would you design the rollout of a new unified dashboard to re-engage skeptical users who have bad prior experiences with district technology?",
      "FERPA requires that student data only be shared with school officials who have a legitimate educational interest. How would you design the data governance framework to enforce that principle without making the system so restrictive that it is not useful?",
      "If the $280,000 budget is not sufficient to implement both the unified dashboard and the full data governance framework in two years, which would you prioritize and why?"
    ]
  },

  // ── Operations Management (OPM) ────────────────────────────────────────────

  // OPM — opm-1
  {
    id: "opm-1",
    event: "Operations Management",
    eventCode: "OPM",
    cluster: "business-management",
    situation:
      "You are an operations management consultant for Keystone Packaging Solutions, a contract packaging company based in Louisville, Kentucky, that provides co-packing services for consumer goods brands in the food, beverage, and household products categories. Keystone operates two facilities totaling 280,000 square feet, runs three shifts across 12 production lines, employs 420 people, and generates $74 million in annual revenue. The company's value proposition to its clients is speed, flexibility, and consistent quality — particularly its ability to handle complex packaging formats and short-run specialty projects that large co-packers won't accept.\n\nThe VP of Operations, Daniel Park, has engaged you because Keystone's production efficiency has deteriorated significantly over the past 18 months, creating cost overruns and a growing backlog of delayed orders. Specifically, overall equipment effectiveness (OEE) across the 12 production lines averaged 61% last quarter — well below the 78% target in client contracts and the 72% industry benchmark for similar facilities. The primary drivers of low OEE are extended changeover times averaging 94 minutes per line change (versus a target of 55 minutes), unplanned downtime from equipment failures averaging 8.2 hours per line per week, and a defect and rework rate of 3.4% of units produced. These inefficiencies cost Keystone approximately $2.9 million annually in overtime, wasted materials, and penalty credits issued to clients for late orders.\n\nDaniel wants you to design a comprehensive operations improvement program using Lean and Six Sigma methodologies to raise OEE to at least 72% within 12 months, reduce changeover times by at least 30%, and cut the defect rate below 1.5%. The program must prioritize the three highest-impact production lines — which collectively account for 58% of revenue — while not disrupting the company's ability to meet current client commitments during the improvement process. The budget for this initiative is $175,000, which may be used for training, external facilitation, tooling, or equipment modifications.\n\nPresent your operations improvement strategy to Daniel and Keystone's executive team, explain how you would sequence improvement activities to minimize production disruption, and describe the governance structure you would put in place to sustain gains after the initial improvement events.",
    individualPIs: [
      "Explain the principles of Lean manufacturing and their application to production operations",
      "Describe the concept of Overall Equipment Effectiveness and its components",
      "Identify SMED techniques for reducing production changeover times",
      "Explain the role of preventive maintenance in reducing unplanned equipment downtime",
      "Describe how Six Sigma methodologies are used to reduce defect rates in manufacturing"
    ],
    tdmPIs: [
      "Explain the principles of Lean manufacturing and their application to production operations",
      "Describe the concept of Overall Equipment Effectiveness and its components",
      "Identify SMED techniques for reducing production changeover times",
      "Explain the role of preventive maintenance in reducing unplanned equipment downtime",
      "Describe how Six Sigma methodologies are used to reduce defect rates in manufacturing",
      "Identify methods for prioritizing process improvement efforts based on financial impact",
      "Explain how to design a continuous improvement governance structure that sustains gains over time"
    ],
    judgementQuestions: [
      "You need to improve OEE from 61% to 72% while not disrupting current client commitments. How would you schedule kaizen improvement events on the three highest-priority lines without creating delivery risk for the clients those lines serve?",
      "Unplanned downtime is averaging 8.2 hours per line per week. Before recommending a preventive maintenance overhaul, how would you determine whether the root cause is equipment age, inadequate maintenance practices, operator error, or something else?",
      "After the 12-month improvement program, what governance structure and metrics system would you put in place so Keystone's operations team sustains the OEE gains without ongoing external consulting support?"
    ]
  },

  // OPM — opm-2
  {
    id: "opm-2",
    event: "Operations Management",
    eventCode: "OPM",
    cluster: "business-management",
    situation:
      "You are an operations management advisor for Blue Ridge Healthcare Laundry, a healthcare linen services company serving 18 hospital and long-term care facility clients in the Virginia and North Carolina markets. The company processes approximately 280,000 pounds of linen per week through a central processing facility in Roanoke, Virginia, employs 195 people across processing, logistics, and customer service functions, and generates $19 million in annual revenue. Blue Ridge is a critical infrastructure provider for its hospital clients — disruptions to linen supply can directly affect patient care, meaning reliability and on-time delivery are more important than price for most clients.\n\nThe CEO, Harriet Simmons, has asked you to conduct an operations review after two of Blue Ridge's hospital clients raised formal service concerns in the same month. Memorial Valley Medical Center reported a linen shortage that left the surgical suite short 40 sterile procedure packs on a Monday morning — a near-miss patient safety event — and Blue Ridge's largest client, RidgeCrest Regional Hospital, reported that over the past quarter, 14% of deliveries arrived outside the contracted 2-hour delivery window. An internal investigation found three contributing operational problems: production scheduling is done manually and does not account for real-time equipment downtime or linen soil-sort variability, causing frequent production shortfalls; the company's route management for its 11 delivery trucks relies on static weekly schedules rather than dynamic routing, making it difficult to accommodate same-day add-on requests from hospital clients; and linen inventory management at client facilities is tracked by paper manifests, leading to inaccurate par counts that make it difficult to anticipate client needs 24–48 hours in advance.\n\nHarriet wants you to design an operations improvement plan that restores 99%+ on-time delivery performance, eliminates linen shortage events at client facilities, and reduces the operations team's reliance on manual processes. Any solutions must be deployable within 90 days given the urgency of client concerns, and the capital budget is $95,000. There is also a longer-term opportunity: if Blue Ridge can demonstrate operational excellence, RidgeCrest has signaled interest in expanding the contract by $2.1 million annually.\n\nPresent your operations recommendations to Harriet and her leadership team, prioritizing the most urgent fixes and explaining how you would communicate the improvement plan to the two affected hospital clients to preserve those relationships.",
    individualPIs: [
      "Explain the principles of operations management in a service delivery context",
      "Describe methods for improving production scheduling accuracy in process-intensive operations",
      "Identify technology solutions for route optimization and dynamic logistics management",
      "Explain the relationship between inventory management accuracy and service reliability",
      "Describe strategies for managing operational risk in healthcare supply chain services"
    ],
    tdmPIs: [
      "Explain the principles of operations management in a service delivery context",
      "Describe methods for improving production scheduling accuracy in process-intensive operations",
      "Identify technology solutions for route optimization and dynamic logistics management",
      "Explain the relationship between inventory management accuracy and service reliability",
      "Describe strategies for managing operational risk in healthcare supply chain services",
      "Identify techniques for client relationship recovery after a service failure",
      "Explain how real-time data integration between production and logistics improves end-to-end service performance"
    ],
    judgementQuestions: [
      "The Monday morning linen shortage at Memorial Valley was a near-miss patient safety event. How does the patient safety dimension change your prioritization of which operational problem to fix first?",
      "You have 90 days and $95,000. Which of the three root causes — production scheduling, route management, or inventory tracking — would you address first, and can you make meaningful progress on all three within the budget?",
      "RidgeCrest Regional Hospital is signaling interest in a $2.1 million contract expansion. How would you incorporate that opportunity into your operations improvement story when presenting to Harriet, and what proof points would you commit to delivering before asking RidgeCrest to expand the relationship?"
    ]
  },

  // ── Organizational Leadership (ORL) ───────────────────────────────────────

  // ORL — orl-1
  {
    id: "orl-1",
    event: "Organizational Leadership",
    eventCode: "ORL",
    cluster: "business-management",
    situation:
      "You are a leadership development consultant for Pacific Coast Credit Union, a member-owned financial cooperative headquartered in Eugene, Oregon, with $1.4 billion in assets, 68,000 members, and 310 employees across 11 branch locations and a corporate headquarters. Like many credit unions, Pacific Coast is navigating a significant leadership transition: eight of its 14 senior managers are within seven years of retirement, and the organization has historically filled leadership vacancies primarily through external hiring rather than internal development, resulting in a shallow internal leadership pipeline and recurring cultural disruption as new leaders import different management styles from outside.\n\nThe CEO, Thomas Nguyen, has engaged you to design and implement an organizational leadership development program that will build a pipeline of 20–25 high-potential employees who are ready for senior management roles within three to five years. Thomas is particularly concerned about preserving Pacific Coast's strong service culture — which generates consistently high member satisfaction scores of 91/100 — through leadership transitions, since externally hired leaders have occasionally created friction with the credit union's values-based culture. The organization recently completed a 360-degree leadership assessment of all current senior managers, which identified three common developmental needs across the group: strategic thinking and long-term planning, navigating organizational change, and cross-functional collaboration.\n\nThomas wants you to design a comprehensive leadership development program that includes a selection process for identifying high-potential participants, a development curriculum aligned with the three identified competency gaps, a mentorship component that connects participants with current senior leaders, and a process for gradually increasing participants' leadership responsibilities before the senior roles become vacant. The program must be structured enough to produce measurable development outcomes but flexible enough to accommodate the day-to-day demands of participants who are currently performing in frontline and mid-level management roles.\n\nPresent your leadership development program design to Thomas and the Pacific Coast board, explain how you would measure leadership readiness over a three-to-five-year horizon, and address how the program will account for the cultural dimension of leadership — specifically, how it will ensure that future leaders embody Pacific Coast's member-first values.",
    individualPIs: [
      "Explain the importance of organizational leadership development in ensuring management continuity",
      "Describe the components of a high-potential employee identification and development process",
      "Identify strategies for building a leadership pipeline that reflects organizational culture and values",
      "Explain how to design a mentorship program that accelerates leadership competency development",
      "Describe methods for measuring leadership development progress and readiness for advancement"
    ],
    tdmPIs: [
      "Explain the importance of organizational leadership development in ensuring management continuity",
      "Describe the components of a high-potential employee identification and development process",
      "Identify strategies for building a leadership pipeline that reflects organizational culture and values",
      "Explain how to design a mentorship program that accelerates leadership competency development",
      "Describe methods for measuring leadership development progress and readiness for advancement",
      "Explain the relationship between organizational culture and leadership effectiveness",
      "Identify how succession planning protects organizational performance during leadership transitions"
    ],
    judgementQuestions: [
      "Eight of 14 senior managers are within seven years of retirement, but the leadership development program will take three to five years to produce ready candidates. How do you manage the risk that some senior roles will become vacant before the pipeline is ready?",
      "Some employees who are identified as high-potential may not be interested in or ready for additional leadership responsibilities. How would you design the selection process and participant experience to ensure genuine development rather than just a prestige label?",
      "Thomas is concerned that externally hired leaders have disrupted Pacific Coast's service culture. How would you embed cultural values assessment into the leadership readiness evaluation so that internal candidates are assessed not just on skills but on cultural fit for senior leadership?"
    ]
  },

  // ORL — orl-2
  {
    id: "orl-2",
    event: "Organizational Leadership",
    eventCode: "ORL",
    cluster: "business-management",
    situation:
      "You are an organizational leadership advisor for Stellarion Media Group, a digital media and content company headquartered in Austin, Texas, that operates three online news publications, a podcast network with 22 shows, and a video production studio. The company has 175 full-time employees and approximately 80 contractors, generates $31 million in annual revenue from advertising, subscriptions, and branded content partnerships, and was founded eight years ago by CEO and Editor-in-Chief Devon Marsh, who has built the company's culture around editorial independence, creative risk-taking, and a flat organizational structure with minimal hierarchy.\n\nDevon has engaged you because Stellarion is experiencing a significant organizational leadership crisis. Over the past 18 months, the company has grown from 110 to 175 employees through the acquisition of two smaller podcasting companies and the launch of a new subscription product, and the flat structure that worked well at 110 people is breaking down under the weight of 175. Specifically: creative teams are experiencing scope conflicts because there is no clear decision-making authority when the podcast network, video studio, and editorial teams compete for the same talent, budget, or production resources; three high-profile senior editors and producers have left in the past year citing frustration with a lack of clear leadership direction and an inability to get timely decisions made; and Devon has acknowledged privately to the board that he is personally overwhelmed — he is still making content decisions that should be delegated, while simultaneously managing investor relations, client partnerships, and strategic planning.\n\nDevon wants your help redesigning Stellarion's organizational leadership structure to create clearer accountability and decision rights without abandoning the creative culture that has made the company successful. He also needs coaching on how to personally transition from a founder-operator role to a CEO role, which requires a fundamentally different approach to leadership. The board has given Devon six months to demonstrate that the organizational and leadership issues are being addressed, or they will consider hiring a professional CEO.\n\nPresent your organizational leadership recommendations to Devon and the Stellarion board, addressing both the structural changes the organization needs and the personal leadership development work Devon must undertake, and explain how you would manage the transition in a way that preserves the creative culture.",
    individualPIs: [
      "Explain the leadership challenges associated with scaling a founder-led company",
      "Describe how to design an organizational structure that creates clear decision rights and accountability",
      "Identify strategies for leading organizational change while preserving a distinctive company culture",
      "Explain the concept of leadership delegation and why it is essential for organizational scaling",
      "Describe techniques for coaching a founder or senior leader through a leadership style transition"
    ],
    tdmPIs: [
      "Explain the leadership challenges associated with scaling a founder-led company",
      "Describe how to design an organizational structure that creates clear decision rights and accountability",
      "Identify strategies for leading organizational change while preserving a distinctive company culture",
      "Explain the concept of leadership delegation and why it is essential for organizational scaling",
      "Describe techniques for coaching a founder or senior leader through a leadership style transition",
      "Identify the warning signs that an organizational structure has become misaligned with company size and complexity",
      "Explain how to communicate structural changes to creative employees who may fear bureaucracy"
    ],
    judgementQuestions: [
      "Devon's flat structure worked well at 110 employees but is breaking down at 175. At what organizational size and complexity level does a flat structure typically stop being effective, and what does the research say about the appropriate span of control for creative organizations?",
      "Devon is personally still making content decisions that should be delegated. How would you help him identify and commit to a specific list of decisions he will stop making — and how do you build accountability so he actually follows through?",
      "The board has given Devon six months to show progress. What are the three most visible, measurable indicators of organizational leadership improvement you would commit to demonstrating within that window?"
    ]
  },

  // ── Public Relations & Promotions (PRPM) ──────────────────────────────────

  // PRPM — prpm-1
  {
    id: "prpm-1",
    event: "Public Relations & Promotions",
    eventCode: "PRPM",
    cluster: "business-management",
    situation:
      "You are a public relations advisor for Halcyon Hotels & Resorts, a luxury hotel company that owns and operates eight boutique properties in destination markets including Napa Valley, Sedona, Santa Fe, and the Florida Keys. Halcyon positions itself as a premium, sustainability-focused brand targeting affluent leisure travelers aged 35–65 with household incomes above $250,000. Average daily rates at Halcyon properties range from $485 to $1,100 per night, and the brand's identity is built around environmental stewardship, locally sourced cuisine, and authentic regional experiences. The company has won four Green Hospitality Awards in the past six years and prominently features its sustainability commitments in all marketing materials.\n\nThe Director of Communications, Sylvia Park, has called you in urgently following a reputation crisis. Four days ago, an investigative piece published in a nationally read travel magazine revealed that Halcyon's Sedona property — which markets itself as using 100% renewable energy — is actually only 62% renewable, with the remainder drawn from the standard Arizona grid mix including coal-generated power. The discrepancy traces to a lapse in the company's renewable energy credit (REC) purchasing process: the procurement team failed to renew a contract that expired six months ago, and no one caught the error until the story broke. The article has generated 840 online comments and significant social media engagement, mostly negative, with users calling the discrepancy \"greenwashing\" and comparing Halcyon to brands that have faced formal FTC green marketing enforcement actions. Three travel influencers with combined audiences of 2.1 million have posted critical content.\n\nSylvia needs your help developing a comprehensive crisis PR and communications response strategy. The response must address the immediate reputational damage across digital and traditional media channels, communicate directly with the brand's most loyal customers — approximately 28,000 members of the Halcyon Preferred Guest program — restore credibility with the travel press, and include a longer-term promotional strategy to rebuild the brand's sustainability positioning on a stronger factual foundation. Halcyon's board has approved a $200,000 emergency communications and remediation budget.\n\nPresent your PR and promotions strategy to Sylvia and Halcyon's executive team, addressing the crisis communication timeline, messaging architecture, channel strategy, and how the company should handle ongoing media inquiries while the renewable energy situation is being corrected.",
    individualPIs: [
      "Explain the principles of crisis public relations and reputation management",
      "Describe the components of an effective crisis communication strategy",
      "Identify strategies for managing brand reputation on digital and social media platforms",
      "Explain the FTC's guidelines on environmental marketing claims and their implications",
      "Describe techniques for rebuilding stakeholder trust after a public credibility breach"
    ],
    tdmPIs: [
      "Explain the principles of crisis public relations and reputation management",
      "Describe the components of an effective crisis communication strategy",
      "Identify strategies for managing brand reputation on digital and social media platforms",
      "Explain the FTC's guidelines on environmental marketing claims and their implications",
      "Describe techniques for rebuilding stakeholder trust after a public credibility breach",
      "Identify how to segment and tailor crisis communications to different stakeholder audiences",
      "Explain the role of proactive media engagement in shortening the reputational recovery timeline"
    ],
    judgementQuestions: [
      "Halcyon's first instinct is to issue a statement blaming the procurement team's administrative error and promising to fix it. Why might leading with that framing make the crisis worse, and what framing would you recommend instead?",
      "The three travel influencers who posted critical content have combined audiences of 2.1 million. Would you recommend engaging them directly as part of the response strategy, and if so, how — given that any misstep in influencer outreach could amplify negative coverage?",
      "Once the renewable energy situation is corrected and Halcyon is back at 100% renewable, how would you design a promotional campaign that credibly rebuilds the sustainability brand positioning without appearing self-congratulatory or inviting further scrutiny?"
    ]
  },

  // PRPM — prpm-2
  {
    id: "prpm-2",
    event: "Public Relations & Promotions",
    eventCode: "PRPM",
    cluster: "business-management",
    situation:
      "You are a public relations and promotions strategist for Ridgeline Community Bank, a community bank headquartered in Billings, Montana, with 14 branches across central and eastern Montana, $1.9 billion in total assets, 340 employees, and a 112-year operating history. Ridgeline is deeply embedded in the communities it serves, providing agricultural lending, small business banking, and residential mortgages to customers who have often banked with Ridgeline across multiple generations. The bank's brand positioning emphasizes local ownership, community reinvestment, and personal relationships — a direct contrast to the national bank competitors that have expanded into Montana's secondary markets over the past decade.\n\nThe President & CEO, Margaret Callahan, has engaged you to develop a public relations and community promotions strategy to address two challenges simultaneously. The first is a competitive threat: First National Consolidated, a $28 billion regional bank based in Denver, has announced plans to open three new branches in Billings, Great Falls, and Bozeman over the next 18 months, directly targeting the small business and agricultural segments where Ridgeline is strongest. First National is offering first-year fee waivers and promotional interest rates that Ridgeline cannot match on a sustained basis. Second, Ridgeline recently completed a $45 million philanthropic commitment — the largest in its history — to fund affordable housing development, rural broadband infrastructure, and small business grants across its 14-county footprint over five years. The bank has not yet publicly announced this commitment in any coordinated way, and it has attracted essentially no press coverage.\n\nMargaret wants you to design an integrated PR and promotions strategy that proactively communicates Ridgeline's community investment story to key audiences — including existing customers, prospective small business clients, agricultural producers, local government officials, and regional media — in a way that reinforces the bank's competitive differentiation before First National's branches open. The strategy should include a launch campaign for the philanthropic commitment, an ongoing community engagement program, and media relations tactics tailored to Montana's regional press landscape. The total annual PR and promotions budget is $380,000.\n\nPresent your strategy to Margaret and the Ridgeline board, explain how you would measure the impact of the PR program on brand preference and new account acquisition, and address how the bank should position itself publicly once First National begins operating in its core markets.",
    individualPIs: [
      "Describe the role of public relations in building competitive differentiation for a service business",
      "Explain strategies for launching and communicating a major corporate philanthropy initiative",
      "Identify techniques for leveraging community engagement to strengthen brand loyalty",
      "Describe media relations strategies appropriate for regional and local press environments",
      "Explain how to measure the effectiveness of a public relations and promotions program"
    ],
    tdmPIs: [
      "Describe the role of public relations in building competitive differentiation for a service business",
      "Explain strategies for launching and communicating a major corporate philanthropy initiative",
      "Identify techniques for leveraging community engagement to strengthen brand loyalty",
      "Describe media relations strategies appropriate for regional and local press environments",
      "Explain how to measure the effectiveness of a public relations and promotions program",
      "Identify how to tailor PR messaging to distinct stakeholder audiences including customers, media, and community leaders",
      "Describe strategies for maintaining brand relevance in the face of well-funded national competitors"
    ],
    judgementQuestions: [
      "The $45 million philanthropic commitment has attracted no press coverage so far. What does that suggest about Ridgeline's current communications capabilities, and how would you structure the announcement launch to maximize earned media coverage in Montana's regional press?",
      "First National is offering promotional rates and fee waivers Ridgeline cannot match on price. How do you design a PR and promotions strategy that competes on values and relationships rather than price, and how do you ensure that message resonates with pragmatic Montana small business owners?",
      "If a Ridgeline customer publicly switches to First National after the new branches open and posts about it on social media citing better rates, how should Ridgeline respond — and is a public response even appropriate?"
    ]
  },

  // ── Business Services Marketing (BSM) ─────────────────────────────────────

  // BSM — bsm-1
  {
    id: "bsm-1",
    event: "Business Services Marketing",
    eventCode: "BSM",
    cluster: "business-management",
    situation:
      "You are a business services marketing consultant for Meridian IT Consulting, a managed IT services provider headquartered in Richmond, Virginia, that delivers network management, cybersecurity, cloud infrastructure, and IT helpdesk services to small and mid-sized businesses in the mid-Atlantic region. Meridian has 62 employees, generates $9.4 million in annual recurring revenue primarily through monthly service contracts ranging from $2,500 to $18,000 per month, and serves 148 active clients with an average client tenure of 4.2 years. The company has excellent technical capabilities and strong client satisfaction scores — its NPS is 71, well above the industry median of 42 — but has struggled to grow its client base.\n\nThe CEO, Chris Varela, has engaged you because new client acquisition has effectively stalled: Meridian added only 7 new clients in the past fiscal year against a target of 22, and 11 clients churned, resulting in a net loss of 4 client relationships. The sales pipeline is thin — currently only 14 active opportunities — and deal cycles have lengthened to an average of 8.7 months. A marketing audit reveals that Meridian's marketing is almost entirely reactive and referral-based: the company has no content strategy, minimal social media presence, publishes no thought leadership, and its website was last redesigned in 2019. The company relies on existing client referrals and occasional trade association appearances for lead generation, which is insufficient to support the growth goals that the company's private equity owner has set for the next three years.\n\nChris wants you to design a business services marketing strategy that generates a minimum of 50 qualified new leads per quarter within 12 months, shortens the average deal cycle from 8.7 months to under 6 months, and builds the Meridian brand as a recognized authority in cybersecurity and cloud services in the mid-Atlantic SMB market. The total annual marketing budget is $240,000, which includes personnel, agency costs, content production, digital advertising, and events. The strategy must account for the long-cycle, high-trust nature of managed services purchasing decisions.\n\nPresent your marketing strategy to Chris and Meridian's leadership team, explain your recommended channel mix and content approach, and describe how you would measure marketing's contribution to revenue so that the private equity owners can see clear ROI.",
    individualPIs: [
      "Describe the unique characteristics of marketing professional and technology services to business buyers",
      "Explain the role of content marketing and thought leadership in generating B2B leads",
      "Identify strategies for shortening sales cycles through marketing-qualified lead nurturing",
      "Describe how to build brand authority in a specialized B2B services market",
      "Explain the importance of measuring marketing ROI in a business services context"
    ],
    tdmPIs: [
      "Describe the unique characteristics of marketing professional and technology services to business buyers",
      "Explain the role of content marketing and thought leadership in generating B2B leads",
      "Identify strategies for shortening sales cycles through marketing-qualified lead nurturing",
      "Describe how to build brand authority in a specialized B2B services market",
      "Explain the importance of measuring marketing ROI in a business services context",
      "Identify digital marketing channels most effective for reaching SMB decision-makers",
      "Describe how a strong net promoter score can be leveraged as a marketing asset to accelerate referral growth"
    ],
    judgementQuestions: [
      "Meridian's best asset is its 71 NPS score, but the company is not systematically generating referrals from its satisfied clients. What specific referral marketing program would you design that converts high NPS into a reliable lead generation channel?",
      "The average deal cycle is 8.7 months. Identify two specific marketing interventions — one at the awareness stage and one at the consideration stage — that could meaningfully reduce that timeline, and explain the mechanism by which each one works.",
      "Chris's private equity owners want to see marketing ROI. What three metrics would you track and report monthly to demonstrate that the marketing program is generating measurable business value — and how would you set realistic expectations for how long it will take the new strategy to produce results?"
    ]
  },

  // BSM — bsm-2
  {
    id: "bsm-2",
    event: "Business Services Marketing",
    eventCode: "BSM",
    cluster: "business-management",
    situation:
      "You are a business services marketing advisor for Greenfield Executive Search, a retained executive search firm headquartered in Minneapolis, Minnesota, that places C-suite and VP-level executives for mid-market companies in the manufacturing, distribution, and industrial services sectors. The firm has 18 employees — 8 search consultants, 4 research analysts, and 6 administrative and business development staff — generates $6.8 million in annual revenue from retained search fees that typically range from $85,000 to $220,000 per engagement, and has been in operation for 19 years. The firm's reputation is strong within its existing client base, and it has a 74% repeat client rate among its 60 active client relationships.\n\nThe Managing Partner, Barbara Lund, has engaged you because the firm is facing a growth inflection point. Greenfield has been stable for five years but has not grown, and Barbara has identified two reasons: the firm has limited visibility outside its existing client network — it is essentially unknown to mid-market companies that have not directly worked with it or been referred by someone who has — and the firm faces increasing competition from two national search firms that entered the Minneapolis market three years ago and are aggressively prospecting Greenfield's existing clients with lower fee structures and technology-enabled search processes. The firm's current marketing consists solely of an outdated website, an occasional industry conference presence, and individual consultant LinkedIn profiles that are inconsistently maintained.\n\nBarbara wants you to design a business services marketing strategy that meaningfully expands Greenfield's brand visibility in its target market of mid-market manufacturing and industrial companies in the Upper Midwest, generates 15–20 new qualified prospect relationships per year, and strengthens the firm's competitive positioning against the national firms. The marketing strategy must be appropriate for a professional services firm where trust and reputation are the primary buying criteria, and it must be executable by a firm with no dedicated marketing staff and a total marketing budget of $120,000 per year.\n\nPresent your recommendations to Barbara and the Greenfield partnership, explain how each marketing investment connects to the firm's growth objectives, and address how the search consultants themselves should function as visible thought leaders in the market.",
    individualPIs: [
      "Explain the role of reputation and trust in marketing high-value professional services",
      "Describe content and thought leadership strategies appropriate for B2B professional services firms",
      "Identify digital and offline marketing channels suited to reaching C-suite and VP-level buyers",
      "Explain strategies for competitive differentiation when facing larger, better-resourced competitors",
      "Describe how to design a marketing program executable by a firm without dedicated marketing staff"
    ],
    tdmPIs: [
      "Explain the role of reputation and trust in marketing high-value professional services",
      "Describe content and thought leadership strategies appropriate for B2B professional services firms",
      "Identify digital and offline marketing channels suited to reaching C-suite and VP-level buyers",
      "Explain strategies for competitive differentiation when facing larger, better-resourced competitors",
      "Describe how to design a marketing program executable by a firm without dedicated marketing staff",
      "Identify the elements of a strong professional services brand that commands premium pricing",
      "Explain how to use a high repeat-client rate as a marketing asset in new business development"
    ],
    judgementQuestions: [
      "Greenfield has a 74% repeat client rate, which is exceptional for the industry. How would you use that statistic as a marketing asset — and what format of social proof (case studies, testimonials, data) would resonate most with a skeptical C-suite buyer evaluating their first engagement with the firm?",
      "The national competitors are aggressively prospecting Greenfield's existing clients with lower fees. Should Barbara respond by competing on price, or is there a stronger positioning strategy? Be specific about what Greenfield's differentiation message should be.",
      "The search consultants need to function as thought leaders, but they are already busy executing searches. What is the minimum viable thought leadership program — specific format, frequency, and topics — that would increase their market visibility without consuming more than 2 hours per consultant per week?"
    ]
  },

  // ── Principles of Business Administration (PBA) ───────────────────────────

  // PBA — pba-1
  {
    id: "pba-1",
    event: "Principles of Business Administration",
    eventCode: "PBA",
    cluster: "business-management",
    situation:
      "You are a business administration advisor for Cornerstone Community Center, a nonprofit organization in Spokane, Washington, that provides after-school youth programs, adult job training, workforce development, and senior services to approximately 3,400 individuals annually. The organization has 34 full-time employees, 18 part-time staff, and relies on a combination of government grants (62% of revenue), private foundation grants (21%), individual donations (11%), and program fees (6%) to fund its $2.8 million annual operating budget. Cornerstone has served the Spokane community for 27 years and has a strong local reputation, but the organization's internal administrative infrastructure is limited and increasingly inadequate for the demands of managing a multi-program, multi-funder operation.\n\nThe Executive Director, Keisha Robinson, has engaged you because the organization is experiencing a series of interconnected administrative problems that are creating risk. First, Cornerstone missed a reporting deadline for its largest government grant — a $420,000 Washington State DSHS workforce development contract — due to a miscommunication between the program director and the grants manager, and is now on a corrective action plan with DSHS that requires monthly compliance check-ins for six months. Second, the organization's financial reporting is produced manually by one staff accountant using QuickBooks and Excel; it takes three weeks to close each month, and the board of directors regularly receives financial statements that are six to eight weeks old, making it difficult to exercise meaningful financial oversight. Third, the organization has no documented administrative procedures for any of its core functions — grant management, HR processes, financial controls, and program documentation — meaning that when key staff members are absent or leave, institutional knowledge is lost and errors occur.\n\nKeisha wants you to develop an administrative improvement plan that addresses the grant compliance risk, accelerates financial reporting, and builds documented procedures for the most critical administrative functions. Any recommendations must be appropriate for the organization's capacity: Keisha cannot add staff, and the administrative improvement budget is $30,000 over 18 months.\n\nPresent your recommendations to Keisha and the Cornerstone board, prioritizing the most urgent risk areas and explaining how the proposed improvements will protect the organization's government funding relationships while building a stronger administrative foundation for growth.",
    individualPIs: [
      "Explain the principles of business administration applicable to nonprofit organizations",
      "Describe the importance of grant compliance and reporting in nonprofit funding sustainability",
      "Identify strategies for improving financial reporting timeliness in small organizations",
      "Explain the role of documented administrative procedures in organizational risk management",
      "Describe techniques for building administrative capacity without adding full-time staff"
    ],
    tdmPIs: [
      "Explain the principles of business administration applicable to nonprofit organizations",
      "Describe the importance of grant compliance and reporting in nonprofit funding sustainability",
      "Identify strategies for improving financial reporting timeliness in small organizations",
      "Explain the role of documented administrative procedures in organizational risk management",
      "Describe techniques for building administrative capacity without adding full-time staff",
      "Identify the components of an effective internal financial control system for a nonprofit",
      "Explain how board governance and financial oversight functions in a nonprofit organization"
    ],
    judgementQuestions: [
      "The missed grant reporting deadline has put Cornerstone on a corrective action plan with its largest funder. What specific steps would you take in the next 30 days to demonstrate compliance progress to DSHS and reduce the risk of losing the $420,000 contract?",
      "The board is receiving financial statements that are six to eight weeks old. What is the fastest, lowest-cost change to the current QuickBooks and Excel process that would allow the board to receive statements within three weeks of month-end?",
      "If documenting administrative procedures requires significant staff time and Keisha cannot free up staff hours, how would you prioritize which procedures to document first, and who should lead that work?"
    ]
  },

  // PBA — pba-2
  {
    id: "pba-2",
    event: "Principles of Business Administration",
    eventCode: "PBA",
    cluster: "business-management",
    situation:
      "You are a business administration consultant for Thornton Auto Group, a privately owned automotive dealership group operating four franchised dealerships in the Albuquerque, New Mexico area: a Ford store, a Chevrolet store, a Honda store, and a pre-owned vehicle superstore. The group employs 215 people, generates $148 million in combined annual revenue across new vehicle sales, used vehicle sales, finance and insurance, and parts and service operations. The founder and owner, Harold Thornton, is 68 years old and has operated the business for 31 years. He has announced his intention to transfer operational leadership to his son, Mark Thornton, within 24 months as Harold phases toward retirement.\n\nThe business faces three administration challenges that are interconnected with this succession transition. First, the four dealerships operate as essentially independent businesses with separate administrative staff, separate accounting systems, and separate HR processes — there is no consolidated management reporting, no shared services function, and little standardization across locations. Harold estimates that consolidating back-office administration across the four stores could save $380,000 to $520,000 annually in duplicate staffing and overhead, but no consolidation has been attempted because Harold has been the integrating force holding the loosely structured group together. Second, the dealership group has no documented business continuity plan: key administrative knowledge — vendor relationships, financing arrangements, OEM compliance requirements, and employee compensation structures — resides largely with Harold personally, and has never been formally documented or transferred. Third, Mark Thornton, who is currently General Manager of the Honda store, has strong sales leadership skills but limited exposure to the financial administration and regulatory compliance aspects of running a multi-franchise dealership group.\n\nHarold wants you to design an administrative transition and consolidation plan that prepares the business for leadership succession, achieves the back-office savings opportunity, and develops Mark's administrative competencies over the 24-month transition window. Any recommendations must maintain compliance with the franchise agreements and state dealer licensing requirements that govern each of the four locations.\n\nPresent your business administration recommendations to Harold and Mark, prioritizing the steps that are most critical to a successful succession outcome and explaining the risks if the administrative foundation is not strengthened before the transition occurs.",
    individualPIs: [
      "Explain the role of business administration systems in supporting organizational continuity",
      "Describe the principles of shared services and back-office consolidation in multi-unit businesses",
      "Identify the administrative components of a business succession plan",
      "Explain the importance of documenting institutional knowledge before a leadership transition",
      "Describe strategies for developing administrative competency in a successor leader"
    ],
    tdmPIs: [
      "Explain the role of business administration systems in supporting organizational continuity",
      "Describe the principles of shared services and back-office consolidation in multi-unit businesses",
      "Identify the administrative components of a business succession plan",
      "Explain the importance of documenting institutional knowledge before a leadership transition",
      "Describe strategies for developing administrative competency in a successor leader",
      "Identify compliance and regulatory considerations specific to multi-franchise automotive dealership groups",
      "Explain how to structure a phased leadership transition that minimizes operational disruption"
    ],
    judgementQuestions: [
      "Harold is the integrating force holding the loosely structured dealership group together. If back-office consolidation is attempted before Mark has developed the administrative competency to manage a shared services function, what is the biggest risk — and how would you sequence the transition to manage it?",
      "Documenting Harold's institutional knowledge is urgent, but Harold is still running the business full-time. What format and process would you use to capture that knowledge efficiently without requiring Harold to spend significant time away from operations?",
      "Mark is strong in sales leadership but has limited financial administration experience. What is the most important financial and compliance knowledge area for him to develop in the next 24 months, and how would you structure a development plan that prepares him specifically for the CEO role rather than a continuation of his GM role?"
    ]
  },

  // ── Supply Chain Management (SCM) ─────────────────────────────────────────

  // SCM — scm-1
  {
    id: "scm-1",
    event: "Supply Chain Management",
    eventCode: "SCM",
    cluster: "business-management",
    situation:
      "You are a supply chain management consultant for Lakeshore Outdoor Products, a specialty outdoor gear and apparel company headquartered in Madison, Wisconsin, that designs and sells camping, hiking, and water sports equipment primarily through its own e-commerce platform, four company-owned retail stores, and wholesale accounts with REI, Bass Pro Shops, and approximately 120 independent outdoor specialty retailers. Lakeshore generates $54 million in annual revenue, employs 145 people, and sources approximately 78% of its products from seven contract manufacturers in Vietnam, Bangladesh, and Taiwan, with the remaining 22% produced domestically.\n\nThe VP of Operations, Kevin Huang, has engaged you following a supply chain crisis that caused Lakeshore to miss critical holiday season sales for the second consecutive year. The company's best-selling product — a four-season tent that accounts for 18% of total revenue — was out of stock across all channels for 34 days during November and December due to a combination of port congestion in Los Angeles, a 6-week production delay at the primary Vietnamese manufacturer caused by a raw materials shortage, and the company's reliance on a single-source supplier for the proprietary waterproof fabric used in the tent. The stockout cost Lakeshore an estimated $3.1 million in lost sales and contributed to REI declining to expand its Lakeshore shelf space for the upcoming season. Additionally, four of the seven overseas manufacturers have raised unit prices by an average of 14% over the past two years, compressing gross margins from 48% to 41%.\n\nKevin wants you to design a supply chain resilience strategy that eliminates single-source dependencies for the company's top 10 revenue-generating products, reduces the risk of production delays through better supplier diversification and lead time management, and identifies opportunities to restore gross margins to at least 45% through supply chain cost improvements. The strategy must be phased to be implementable without disrupting current production runs, and the supply chain improvement budget is $290,000 over two years.\n\nPresent your supply chain strategy to Kevin and Lakeshore's executive team, explaining your supplier diversification approach, the lead time and inventory buffering changes you recommend, and how you would quantify the expected margin recovery.",
    individualPIs: [
      "Explain the concept of supply chain resilience and strategies for reducing single-source risk",
      "Describe methods for managing supplier relationships and performance in global sourcing",
      "Identify inventory buffering and safety stock strategies for seasonal consumer products businesses",
      "Explain the financial impact of supply chain disruptions on gross margin and revenue",
      "Describe the process for qualifying and onboarding new contract manufacturers"
    ],
    tdmPIs: [
      "Explain the concept of supply chain resilience and strategies for reducing single-source risk",
      "Describe methods for managing supplier relationships and performance in global sourcing",
      "Identify inventory buffering and safety stock strategies for seasonal consumer products businesses",
      "Explain the financial impact of supply chain disruptions on gross margin and revenue",
      "Describe the process for qualifying and onboarding new contract manufacturers",
      "Identify strategies for managing landed cost increases from overseas suppliers",
      "Explain how nearshoring or domestic production can reduce supply chain risk for specific product categories"
    ],
    judgementQuestions: [
      "The four-season tent uses a proprietary waterproof fabric from a single domestic supplier. What are your options for reducing that single-source risk — dual sourcing, alternative materials, or something else — and what are the trade-offs in terms of product quality, cost, and time to implement?",
      "REI declined to expand Lakeshore's shelf space after the holiday stockout. What specific supply chain performance commitments would you make to REI to rebuild their confidence — and how would you structure those commitments in a way that is credible given that Lakeshore missed for two consecutive years?",
      "The four overseas manufacturers have raised prices 14% over two years, compressing margins from 48% to 41%. Identify two specific supply chain strategies — beyond simply finding cheaper suppliers — that could restore 2–4 points of gross margin without compromising product quality."
    ]
  },

  // SCM — scm-2
  {
    id: "scm-2",
    event: "Supply Chain Management",
    eventCode: "SCM",
    cluster: "business-management",
    situation:
      "You are a supply chain management advisor for Cardinal Health Systems Procurement, the centralized purchasing and supply chain division of a seven-hospital health system based in Indianapolis, Indiana. Cardinal operates 7 acute care hospitals, 22 outpatient clinics, and 4 long-term care facilities, employs 11,400 people, and spends approximately $380 million annually on medical supplies, pharmaceuticals, equipment, and purchased services. The supply chain division manages approximately 48,000 active SKUs across 1,200 suppliers and is responsible for ensuring that clinical staff have the right products available at the point of care without creating excess inventory or wasteful spending.\n\nThe Chief Supply Chain Officer, Andrea Bell, has engaged you to address a supply chain performance problem that emerged during a recent internal audit. The audit found three material issues: first, pharmaceutical purchasing is fragmented across individual hospitals and clinics rather than centrally coordinated, resulting in the health system paying as many as four different contract prices for the same generic medication across facilities — with price variation of up to 31% for the same drug — and missing opportunities for group purchasing organization (GPO) contract compliance that could save an estimated $4.8 million annually; second, surgical supply inventory in the operating rooms of two hospitals shows average on-hand days of supply at 74 days, nearly triple the 25-day benchmark for similar ORs, with $2.3 million in supplies that have not been used in over 180 days and may be approaching or past expiration; and third, the health system has 14 single-source supplier relationships for critical care supplies where no backup supplier has been qualified, creating a patient care risk in the event of a supplier disruption like the ones that affected PPE and ventilator availability during the COVID-19 pandemic.\n\nAndrea wants you to design a supply chain improvement program that captures the pharmaceutical contract compliance savings, rationalizes OR surgical supply inventory, and develops a supplier risk mitigation strategy for the 14 single-source critical supply categories. Any recommendations must be sensitive to the clinical environment — physicians and OR staff must be involved in any decisions that affect their preferred products or ordering processes.\n\nPresent your supply chain recommendations to Andrea and the Cardinal executive leadership team, prioritize the initiatives by financial impact and clinical risk, and explain how you would engage clinical stakeholders in the improvement process.",
    individualPIs: [
      "Explain the principles of centralized procurement and contract compliance in healthcare supply chains",
      "Describe inventory management strategies appropriate for clinical and surgical supply environments",
      "Identify methods for assessing and mitigating supply chain risk for critical medical supplies",
      "Explain the role of group purchasing organizations in healthcare supply chain cost management",
      "Describe strategies for engaging clinical stakeholders in supply chain improvement initiatives"
    ],
    tdmPIs: [
      "Explain the principles of centralized procurement and contract compliance in healthcare supply chains",
      "Describe inventory management strategies appropriate for clinical and surgical supply environments",
      "Identify methods for assessing and mitigating supply chain risk for critical medical supplies",
      "Explain the role of group purchasing organizations in healthcare supply chain cost management",
      "Describe strategies for engaging clinical stakeholders in supply chain improvement initiatives",
      "Identify the financial and patient safety implications of supply chain fragmentation in multi-site health systems",
      "Explain how demand forecasting and par level management reduce inventory waste in hospital settings"
    ],
    judgementQuestions: [
      "The pharmaceutical savings opportunity of $4.8 million annually requires consolidating purchasing to GPO contracts, but individual hospitals and clinics have established their own vendor relationships. How would you build internal support for centralization among hospital administrators who may see it as a loss of autonomy?",
      "The OR surgical supplies include $2.3 million in inventory that has not been used in over 180 days and may be approaching expiration. What process would you use to involve surgeons and OR staff in rationalizing that inventory without creating clinical conflict?",
      "You have identified 14 single-source supplier relationships for critical care supplies. Given that qualifying backup suppliers takes time and resources, how would you triage which of the 14 categories to address first — and what specific criteria would you use to prioritize?"
    ]
  }
];
