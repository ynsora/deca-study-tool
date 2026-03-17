import type { RoleplayScenario } from "./types";

export const scenariosEntrepreneurship: RoleplayScenario[] = [
  // ─── ENTREPRENEURSHIP (ENT) ──────────────────────────────────────────────────

  // Entrepreneurship (ENT) — ent-1
  {
    id: "ent-1",
    event: "Entrepreneurship",
    eventCode: "ENT",
    cluster: "entrepreneurship",
    situation:
      "You are a startup advisor meeting with Alex Nguyen, the founder of FreshRoute, a proposed meal-kit delivery service targeting college students in mid-sized university towns. Alex has developed a business concept but has not yet launched — the idea emerged after noticing that many off-campus students at Western State University struggle to find affordable, convenient weeknight meals that do not require significant cooking skill. The target market is undergraduate students aged 18–24 who live off campus, have limited cooking skills, and spend an average of $340 per month on food, of which roughly 60% goes to restaurant delivery apps with high markups.\n\nAlex plans to offer weekly meal kits at $9.99 per meal, sold in boxes of three meals for $29.97 per box, and believes 500 subscribers at launch is achievable within the first 60 days based on informal Instagram polls and conversations with 40 classmates. Alex has $35,000 in personal savings to invest and has identified a commercial kitchen space at a local food business incubator for $2,200 per month that includes refrigerated storage, shared equipment, and a certified commissary license. The business would initially operate with Alex and one part-time assistant handling prep and packing.\n\nHowever, Alex has not yet conducted formal market research beyond social media polls, has no binding supplier agreements for produce or proteins, and has not registered the business or obtained the necessary local food-handling permits. Cash flow projections exist only in rough spreadsheet form, and Alex has not yet accounted for delivery costs, packaging materials, or the cost of customer acquisition through paid social media advertising. The path from idea to launch contains several critical gaps.\n\nYour task today is to evaluate the concept's viability, identify the three most urgent actions Alex must take before investing any money in inventory or kitchen space, and provide a prioritized 90-day action plan that reduces risk and sets realistic expectations for the first subscriber cohort. Be prepared to justify your recommendations and answer questions about what happens if early traction falls short of the 500-subscriber target.",
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
      "You are an entrepreneurship mentor advising Casey Morales, who runs a 2-year-old mobile pet grooming business called Pawfect Mobile. Casey launched the business with a single customized van equipped with a self-contained wash station, blow-dry system, and grooming table, and built a loyal customer base largely through Nextdoor posts and referrals. The business currently generates $78,000 in annual revenue and serves 210 repeat customers in a 12-mile service radius across two suburban ZIP codes. Profit margin is 22%, yielding approximately $17,160 in annual net income after paying Casey a modest owner's salary of $36,000.\n\nCasey wants to expand by adding a second van and operator within the next six months, which would require approximately $42,000 in startup costs covering a used cargo van ($18,000), grooming equipment and van conversion ($15,000), commercial auto insurance and licensing ($4,500), and branded wrapping and supplies ($4,500). Casey has $15,000 in savings and is considering a small business loan for the remaining $27,000. The expansion target is 450 total customers and $150,000 in combined annual revenue by the end of year three.\n\nCasey has no prior experience managing employees and is genuinely concerned about maintaining the personalized service quality that has driven Pawfect Mobile's five-star rating across 184 Google reviews. A second operator would interact directly with clients and their pets, which creates brand reputation risk if the hire is poor. Additionally, Casey has not yet explored whether the current customer base is saturated or whether the service area needs to expand to support a second van at full capacity.\n\nYour task today is to evaluate the expansion plan's financial and operational feasibility, advise Casey on financing options for the remaining $27,000, provide specific hiring criteria for the second operator, and identify the quality-control systems Casey should put in place before a second van ever reaches a customer driveway. Be prepared to discuss what Casey should do if the second van only reaches 60% of its revenue target in year one.",
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
      "You are a business advisor for Jordan Patel, the founder of SkillBridge, a 3-year-old online tutoring platform that connects high school students with college-student tutors across 14 states. The platform matches students with tutors in over 30 subjects using a proprietary compatibility algorithm and takes a 20% commission on each session booked. SkillBridge currently has 1,200 registered students, 380 active tutors, and generates $310,000 in annual gross revenue. The platform grew 47% year-over-year in its most recent fiscal year, and churn among paying subscribers has been relatively low at 18% annually.\n\nJordan has received a term sheet from Lighthouse Ventures, a seed-stage fund, offering $500,000 in exchange for 25% equity, valuing the company at $2 million pre-money. Jordan is unsure whether to accept the offer, attempt to negotiate improved terms, or pursue alternative funding such as revenue-based financing or an additional SAFE note from the two existing angel investors who provided $120,000 in initial capital 18 months ago. Jordan is also aware that a competing platform, PeerUp, recently raised $1.8 million at a $5 million valuation with roughly similar metrics.\n\nAdditionally, Jordan is weighing two strategic growth options: expanding the platform into corporate employee upskilling programs for mid-size companies, or launching a dedicated K–8 segment targeting elementary and middle school students with parent-supervised sessions. The corporate route would require building new account management infrastructure and a different pricing model (estimated $80,000 in development), while the K–8 route would require significant safety compliance work and background-check systems (estimated $55,000). Both options require meaningful product development before generating revenue.\n\nYour task today is to help Jordan evaluate the Lighthouse Ventures investment offer — including whether the valuation is fair and what terms Jordan should attempt to negotiate — advise on which of the two growth directions better leverages SkillBridge's existing strengths, and identify the two most important questions Jordan should ask the investor before signing. Be ready to explain your reasoning on valuation multiples and strategic fit.",
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

  // ─── BUSINESS GROWTH & DEVELOPMENT (BGD) ────────────────────────────────────

  // Business Growth & Development (BGD) — bgd-1
  {
    id: "bgd-1",
    event: "Business Growth & Development",
    eventCode: "BGD",
    cluster: "entrepreneurship",
    situation:
      "You are a growth strategy consultant for Ember Coffee Roasters, a specialty coffee brand that started as a single brick-and-mortar café in Portland, Oregon four years ago and has since grown to four locations with a loyal following among young professionals and remote workers. The four locations generate a combined $2.1 million in annual revenue with a blended net profit margin of 11%, and the Ember brand has developed notable regional recognition through social media with 42,000 Instagram followers. The founder, Maya Chen, has built the business on a distinctive slow-roast process and a minimalist café aesthetic that is highly consistent across all four locations.\n\nMaya wants to scale to 15 locations within three years and is evaluating two expansion paths: opening company-owned stores requiring approximately $180,000 in capital per new location, or developing a franchise system that would require $250,000 upfront to create operations manuals, legal documentation, and a training program, but would then generate $35,000 per franchise sold in initial fees plus 5% ongoing royalties on gross sales. Maya has $400,000 in retained earnings available and can qualify for a $600,000 SBA 7(a) loan. She is also in early conversations with a regional grocery chain about a wholesale roasted-bean program that could generate $180,000 in additional annual revenue.\n\nHowever, Maya has not yet documented her roasting processes or café operations in a way that a franchisee could replicate independently. Her management team consists of herself and two store managers, which means adding 11 locations in three years would strain her current operational capacity significantly regardless of which model she chooses. The franchise path would take 12–18 months before the first franchisee opens, while company-owned stores could theoretically open in 4–6 months each.\n\nYour task today is to evaluate both expansion models in detail, provide a specific recommendation with a financial rationale comparing the number of locations achievable under each path given Maya's capital, and advise whether pursuing the wholesale grocery partnership simultaneously is a strategic complement to growth or a distraction that could dilute management focus. Be prepared to explain what operational prerequisites must be in place before any expansion begins.",
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
      "You are a business development advisor for Crestline Landscaping, a residential and commercial landscaping company that has operated in the greater Columbus, Ohio metropolitan area for 11 years. The business generates $4.8 million in annual revenue with a 14% net profit margin, employs 38 full-time and seasonal workers, and has a reputation for high-quality commercial property maintenance that has earned it contracts with three office parks, two retail strip centers, and a regional hospital campus. The owner, David Park, has reached a plateau after steady organic growth and now wants to grow revenue to $8 million within four years.\n\nA strategic acquisition opportunity has emerged: GreenAcre Services, a competing landscaping firm with 22 employees and $1.6 million in annual revenue, is for sale at an asking price of $1.1 million. GreenAcre holds 340 existing commercial maintenance contracts and serves several neighborhoods where Crestline has little presence, offering immediate geographic diversification. However, a preliminary review of GreenAcre's operations reveals that its equipment fleet — four zero-turn mowers, two trucks, and a skid steer — is aging and will require an estimated $200,000 in capital investment within 18 months to avoid significant maintenance downtime.\n\nAlternatively, David is considering organic growth by launching a snow and ice removal division targeting his existing commercial clients. Columbus averages 28 inches of snowfall annually, and several current Crestline clients have expressed frustration with their current snow removal vendors. A snow division could generate an estimated $600,000 in new revenue in its first operational year, requiring approximately $120,000 in equipment (two plow trucks and a salt spreader) and $45,000 for crew training and winter staffing. David has $500,000 in available capital and access to a $700,000 line of credit.\n\nYour task today is to advise David on whether to pursue the GreenAcre acquisition, launch the snow removal division, or both simultaneously. For each option, explain the financing approach, the integration or launch risks, and the projected path to the $8 million revenue goal. Be prepared to justify which option provides the best risk-adjusted return given David's current capital position.",
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

  // ─── START-UP BUSINESS PLAN (SBP) ────────────────────────────────────────────

  // Start-Up Business Plan (SBP) — sbp-1
  {
    id: "sbp-1",
    event: "Start-Up Business Plan",
    eventCode: "SBP",
    cluster: "entrepreneurship",
    situation:
      "You are presenting your business plan for Loopwise, a subscription-based SaaS platform that helps independent fitness coaches manage client programming, track workout progress, and automate billing and session reminders. The idea originated from interviews with 28 independent personal trainers who uniformly described spending 8–12 hours per week on administrative tasks using a fragmented combination of Google Sheets, Venmo, and generic scheduling tools. The target market is the approximately 320,000 independent personal trainers and small gym owners in the United States who operate outside of large franchise gym systems.\n\nLoopwise will charge $49 per month per individual coach and $149 per month for gym accounts covering up to 10 coaches. A 14-day free trial will be offered to reduce signup friction. Year one projections target 800 paying subscribers, generating $480,000 in blended revenue against $390,000 in operating expenses — including $120,000 for two engineers, $60,000 for marketing, $48,000 for customer support, and $162,000 in cloud infrastructure and overhead — for a projected net income of $90,000. Development of the minimum viable product is estimated at $210,000 and is being funded through $100,000 from the two co-founders and a $110,000 SAFE note from two angel investors who committed after a beta demonstration.\n\nKey competitors include TrueCoach ($19–$35/month), Mindbody ($139–$349/month for studios), and TrainHeroic ($35/month), none of which offer the combination of automated billing, client progress visualization, and coach communication tools in a single lightweight interface at Loopwise's target price point. The Loopwise beta has been tested by 22 coaches over 90 days with a net promoter score of 74 and average session time of 11 minutes per day — metrics the team believes demonstrate genuine product-market fit.\n\nThe judge panel today represents a potential Series A investor conducting preliminary diligence. Your task is to present the plan's key highlights, explain the financial model and path to 800 subscribers, articulate the competitive differentiation, and demonstrate that the founding team has the capacity to execute. Be prepared to address questions about customer acquisition cost, churn assumptions, and what happens if the development timeline extends by 60 days.",
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
      "You are presenting your business plan for RootLocal, a hyperlocal online marketplace that connects consumers with independently owned small businesses for same-day pickup and delivery within a 15-mile service radius. The platform was conceived after the founding team observed that national delivery platforms like DoorDash and Uber Eats charge small businesses 20–30% commission fees that frequently eliminate profit margins, particularly for non-restaurant retailers like florists, bakeries, and specialty food shops. RootLocal charges a flat 12% transaction fee, offers next-business-day payouts, and provides local businesses with a branded storefront, inventory management tools, and customer review features at no additional cost.\n\nThe platform will launch in two mid-size pilot cities — Spokane, Washington and Boise, Idaho — each with populations of approximately 200,000 and strong locally-owned business cultures. Year one targets 180 participating businesses across both cities and $1.8 million in gross merchandise value, generating $216,000 in platform revenue against $195,000 in expenses for a projected net income of $21,000. The $160,000 launch investment is funded through $60,000 from the three co-founders and a $100,000 line of credit from a community development financial institution (CDFI) that focuses on economic development in underserved retail corridors.\n\nThe chicken-and-egg problem inherent to marketplace businesses is the founding team's most discussed risk: consumers won't adopt the platform without businesses, and businesses won't pay to list without consumer traffic. To address this, the team has signed letters of intent from 42 businesses in Spokane and 38 in Boise, and plans to launch a six-week \"RootLocal Launch Campaign\" in each city with local media coverage, social media influencer partnerships, and buy-local community events co-hosted with chambers of commerce. Consumer acquisition will rely heavily on earned media and word-of-mouth rather than paid advertising in year one.\n\nThe judge panel today represents the CDFI's lending committee, which is reviewing RootLocal's complete business plan before finalizing the $100,000 line of credit. Your task is to present the key elements of the plan, demonstrate demand validation, explain the marketplace launch strategy, and address the committee's likely concerns about financial sustainability and repayment capacity given that year one net income of only $21,000 provides a thin cushion against underperformance.",
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

  // ─── ENTREPRENEURSHIP TEAM DECISION MAKING (ETDM) ────────────────────────────

  // ETDM — etdm-1
  {
    id: "etdm-1",
    event: "Entrepreneurship Team Decision Making",
    eventCode: "ETDM",
    cluster: "entrepreneurship",
    situation:
      "You are a two-person consulting team advising Marcus Webb and Priya Sundaram, the co-founders of NestNook, a 14-month-old platform that helps remote workers find short-term furnished sublets directly from homeowners without paying Airbnb's 14% guest service fee. NestNook charges hosts a flat $29 per listing per month and takes no commission on bookings. The platform currently has 1,100 active listings in eight mid-size cities and has processed $2.3 million in bookings in its most recent quarter. However, monthly revenue is only $31,900 from listing fees, while operating costs run $48,000 per month, creating a burn rate of $16,100 per month. The company has $290,000 in the bank, giving it approximately 18 months of runway at the current burn rate.\n\nThe co-founders are at a crossroads on pricing strategy. Marcus wants to add a 6% host transaction fee on top of the monthly listing fee, which modeling suggests would increase monthly revenue to roughly $107,000 but risks alienating the hosts who chose NestNook specifically to avoid commission-based platforms. Priya wants to keep the no-commission model as a core differentiator but move to a tiered subscription structure: $19/month for basic listings, $49/month for featured placement and analytics, and $99/month for multi-property hosts — projecting a blended average of $44 per listing based on current host behavior.\n\nThe team is also weighing whether to expand to 12 additional cities using $150,000 of the remaining runway to fund local market launches, or to instead invest in product improvements — specifically, a verified-identity system and lease-agreement automation that the team believes would increase host retention and conversion rates. Internal data shows that 34% of new hosts churn within 90 days, largely due to a lack of booking confidence and concerns about guest vetting.\n\nYour task today is to recommend a pricing model that preserves NestNook's competitive positioning while reaching profitability within 12 months, and advise whether to prioritize geographic expansion or product investment given the current runway. Support your recommendation with specific financial reasoning.",
    individualPIs: [
      "Explain the concept of pricing strategy and its impact on business positioning",
      "Describe how to evaluate competing growth strategies given limited capital",
      "Identify the causes and consequences of customer churn in a subscription business",
      "Explain the importance of unit economics in assessing business model sustainability",
      "Describe methods for differentiating a business based on fee structure"
    ],
    tdmPIs: [
      "Explain the concept of pricing strategy and its impact on business positioning",
      "Describe how to evaluate competing growth strategies given limited capital",
      "Identify the causes and consequences of customer churn in a subscription business",
      "Explain the importance of unit economics in assessing business model sustainability",
      "Describe methods for differentiating a business based on fee structure",
      "Explain how to prioritize product investment versus geographic expansion in an early-stage company",
      "Identify key financial metrics founders should track to manage runway and burn rate"
    ],
    judgementQuestions: [
      "If NestNook adopts Priya's tiered subscription model and achieves a blended $44 per listing per month across 1,100 listings, how does that compare to current monthly costs of $48,000 — and what listing count is needed to break even?",
      "Marcus worries that adding any transaction fee will cause hosts to migrate to competitors. How would you test whether that concern is valid before committing to a full pricing model change?",
      "The 34% host churn rate in the first 90 days is a significant problem. What specific product improvements or onboarding interventions would you implement first to address it, and how would you measure success?"
    ]
  },

  // ETDM — etdm-2
  {
    id: "etdm-2",
    event: "Entrepreneurship Team Decision Making",
    eventCode: "ETDM",
    cluster: "entrepreneurship",
    situation:
      "You are a two-person advisory team called in by Riverstone Brewing Company, a 4-year-old craft brewery and taproom in Asheville, North Carolina that generates $1.4 million in annual revenue from taproom sales, canned beer distributed to 38 local retailers, and a recently launched beer subscription club with 210 members paying $39 per month. The founders, Owen Greer and Talia Morrow, have hit a growth ceiling: taproom capacity is maxed out on weekends, distributor relationships are strained because Riverstone cannot fulfill large orders consistently, and the subscription club is growing faster than production capacity allows. The brewery's 7-barrel brewing system can produce approximately 1,100 barrels per year, but demand is estimated at 1,600–1,800 barrels annually.\n\nRiverstone has three options it is considering simultaneously. Option A is to lease a 3,000-square-foot production facility two miles away for $4,200 per month and install a second 10-barrel system at a cost of $185,000, which would bring total capacity to roughly 2,700 barrels per year and allow fulfilment of distributor orders and subscription growth. Option B is to terminate the distributor relationships entirely, focus exclusively on the taproom and subscription club, and raise prices 15% to improve margin without increasing volume. Option C is to explore contract brewing at a nearby larger facility to fulfil retailer orders without a capital investment, freeing cash to invest in the taproom experience and grow the subscription club to 500 members.\n\nThe co-founders are also managing a staff tension issue: the head brewer, Jamie Okafor, has been approached by a regional competitor and is considering leaving. Jamie is responsible for all recipe development and quality control. Losing Jamie would delay any expansion and potentially harm product consistency, which is central to Riverstone's brand. Owen and Talia disagree about how much of a salary increase they can afford to retain Jamie given the capital needs of expansion.\n\nYour task today is to evaluate all three expansion options and provide a specific recommendation with financial reasoning, then advise the co-founders on how to address the head brewer retention issue without overcommitting financially during a capital-intensive period.",
    individualPIs: [
      "Explain the concept of capacity planning in a manufacturing or production business",
      "Describe methods for evaluating capital investment decisions in a small business",
      "Identify strategies for retaining key employees in a growing entrepreneurial venture",
      "Explain the trade-offs between organic growth and outsourced production",
      "Describe how to manage multiple competing strategic priorities simultaneously"
    ],
    tdmPIs: [
      "Explain the concept of capacity planning in a manufacturing or production business",
      "Describe methods for evaluating capital investment decisions in a small business",
      "Identify strategies for retaining key employees in a growing entrepreneurial venture",
      "Explain the trade-offs between organic growth and outsourced production",
      "Describe how to manage multiple competing strategic priorities simultaneously",
      "Explain the importance of cash flow management when pursuing capital-intensive expansion",
      "Identify methods for evaluating whether to scale a direct-to-consumer model versus wholesale distribution"
    ],
    judgementQuestions: [
      "Option A requires $185,000 in capital investment plus $4,200 per month in new overhead. Given Riverstone's current revenue and margin, how long would it take to recover that investment — and does the timeline seem acceptable?",
      "Option B suggests abandoning distributor relationships and raising prices instead of expanding. Under what conditions would that strategy actually strengthen Riverstone's business, and what are the risks of executing it now?",
      "The co-founders disagree on how much to offer Jamie Okafor to stay. How would you help them calculate a maximum retention offer that is financially sustainable, and what non-monetary retention strategies would you recommend alongside a salary increase?"
    ]
  },

  // ─── INDEPENDENT BUSINESS PLAN (IBP) ─────────────────────────────────────────

  // IBP — ibp-1
  {
    id: "ibp-1",
    event: "Independent Business Plan",
    eventCode: "IBP",
    cluster: "entrepreneurship",
    situation:
      "You are presenting your independent business plan for LumaLearn, an adaptive online tutoring platform you designed specifically for adult learners returning to community college after a gap of five or more years. The platform uses AI-driven diagnostic assessments to identify skill gaps in mathematics and writing, then generates a personalized 12-week study plan with daily 20-minute modules. LumaLearn targets the approximately 2.4 million adults who enroll in community colleges each year as returning students, a demographic that existing platforms like Khan Academy and Chegg Tutoring do not specifically serve with age-appropriate content framing, scheduling flexibility, or workforce-relevant application examples.\n\nThe business model is a $24.99 per month subscription sold directly to students and a $599 per semester institutional license sold to community college advising offices that want to offer the platform to their entire returning-student cohort. Year one revenue targets are $180,000 from 600 individual subscribers and $240,000 from 8 institutional contracts, totaling $420,000 in revenue. Operating expenses are projected at $375,000, yielding a net income of $45,000. The platform's MVP has been built over 14 months at a personal cost of $38,000 in development and has been beta-tested by 85 returning students at two community colleges, with 91% completing the diagnostic and 67% completing at least 8 of 12 weeks.\n\nYour competitive advantage lies in three areas: adult-specific content tone and pacing that avoids the condescending simplicity of youth-focused platforms, deep integration with each college's existing student information system for seamless enrollment verification, and a partnerships-first distribution strategy that places LumaLearn in the college advising office rather than relying on consumer paid acquisition. The greatest identified risk is the long institutional sales cycle — 6 to 9 months from initial contact to a signed contract — which compresses first-year revenue from institutional sources.\n\nYour task today is to present the full business plan to a judge panel representing a state workforce development grant committee that awards $75,000 equity-free grants to education technology startups. Explain the problem, solution, market opportunity, financial model, and competitive differentiation. Be prepared to justify the institutional pricing, address concerns about sales cycle length, and explain how you would deploy the $75,000 grant to maximize first-year traction.",
    individualPIs: [
      "Describe how to identify and validate an underserved target market",
      "Explain the structure and purpose of an institutional B2B sales strategy",
      "Identify the components of a scalable SaaS business model for education technology",
      "Describe the importance of product-market fit evidence in a business plan presentation",
      "Explain how to assess competitive advantage in a market with established free alternatives"
    ],
    tdmPIs: [
      "Describe how to identify and validate an underserved target market",
      "Explain the structure and purpose of an institutional B2B sales strategy",
      "Identify the components of a scalable SaaS business model for education technology",
      "Describe the importance of product-market fit evidence in a business plan presentation",
      "Explain how to assess competitive advantage in a market with established free alternatives",
      "Explain how to structure financial projections that account for long B2B sales cycles",
      "Identify strategies for managing cash flow when institutional revenue is delayed"
    ],
    judgementQuestions: [
      "Your institutional sales cycle of 6–9 months means the 8 contracts you project for year one must begin closing in the first quarter. What is your specific plan for initiating those conversations on day one, and how confident are you in that timeline?",
      "Khan Academy and other free platforms already offer math and writing content. How would you respond to a grant committee member who asks why community colleges would pay $599 per semester for something students can access for free?",
      "If the grant is awarded, how specifically would you allocate the $75,000 to generate the highest possible return in terms of paying subscribers or signed institutional contracts by month 12?"
    ]
  },

  // IBP — ibp-2
  {
    id: "ibp-2",
    event: "Independent Business Plan",
    eventCode: "IBP",
    cluster: "entrepreneurship",
    situation:
      "You are presenting your independent business plan for ClearTrace, a compliance management software tool built specifically for independent restaurants and food trucks that need to track food safety inspections, employee food handler certifications, and temperature log compliance without hiring a full-time compliance officer. The idea emerged from interviews with 60 independent restaurant owners in the Seattle metro area, 83% of whom reported failing at least one health department documentation audit in the past three years — not because of actual food safety violations, but because paper-based record-keeping systems led to missing or expired certifications. ClearTrace automates digital temperature logging via Bluetooth sensors, sends certification renewal alerts 45 days in advance, generates audit-ready PDF reports in under 60 seconds, and integrates with the most common POS systems used by independent operators.\n\nThe target market is the approximately 500,000 independently owned restaurants in the United States, which ClearTrace prioritizes over chain restaurants because chains typically already have internal compliance teams or enterprise software solutions. Pricing is $89 per month for single-location restaurants and $199 per month for food truck operators with multiple permits across jurisdictions. Year one projections target 400 paying customers primarily in the Pacific Northwest through direct outreach, trade show presence, and partnerships with regional restaurant associations, generating $427,200 in revenue against $365,000 in costs for a net income of $62,200.\n\nYou have invested $22,000 of personal savings to develop and test a working prototype with six restaurant beta customers over four months. The prototype has reduced average audit preparation time from 3.2 hours to 18 minutes based on timed observations, and all six beta customers have committed to paying subscriptions at launch. You are seeking $150,000 in seed funding from a restaurant industry angel investor network that invests exclusively in hospitality-sector startups.\n\nYour task today is to present the complete business plan to the angel investor panel, demonstrating the market problem severity, the solution's validated impact, the financial model's viability, and your plan for customer acquisition. Be prepared to address questions about hardware logistics for the Bluetooth sensors, the risk of competition from larger point-of-sale companies that might add compliance features to their existing products, and how you would use the $150,000 investment to reach 400 customers in year one.",
    individualPIs: [
      "Explain the process of identifying a specific business problem through customer discovery interviews",
      "Describe how to validate a business concept through a minimum viable product beta test",
      "Identify strategies for targeting a specific vertical market niche within a large industry",
      "Explain how to structure a seed funding pitch to an angel investor audience",
      "Describe how to assess the risk of larger competitors entering a niche market"
    ],
    tdmPIs: [
      "Explain the process of identifying a specific business problem through customer discovery interviews",
      "Describe how to validate a business concept through a minimum viable product beta test",
      "Identify strategies for targeting a specific vertical market niche within a large industry",
      "Explain how to structure a seed funding pitch to an angel investor audience",
      "Describe how to assess the risk of larger competitors entering a niche market",
      "Explain the importance of partnerships and channel distribution in B2B customer acquisition",
      "Identify methods for demonstrating return on investment to potential enterprise software buyers"
    ],
    judgementQuestions: [
      "Your beta test involved only six restaurants over four months. An investor might argue that is too small a sample to validate market demand at scale. How would you respond, and what additional validation data would strengthen your case?",
      "Large POS companies like Toast or Square could theoretically add compliance tracking features to their existing platforms at minimal cost. How would you defend ClearTrace's competitive position if that happens within 18 months of your launch?",
      "Your year one customer acquisition plan depends heavily on partnerships with regional restaurant associations. If those partnerships take longer than expected to formalize, what is your direct fallback acquisition strategy, and how does it affect year one revenue projections?"
    ]
  },

  // ─── INNOVATIVE BUSINESS PLAN (INB) ──────────────────────────────────────────

  // INB — inb-1
  {
    id: "inb-1",
    event: "Innovative Business Plan",
    eventCode: "INB",
    cluster: "entrepreneurship",
    situation:
      "You are presenting your innovative business plan for HarvestLoop, a circular packaging startup that has developed a proprietary compostable shipping pouch made from agricultural byproducts — specifically the cellulose fiber extracted from oat hulls, a waste stream generated in large quantities by oat processing facilities. The pouch dissolves completely in backyard compost within 45 days, requires no special industrial facility, and meets ASTM D6400 compostability standards. HarvestLoop targets direct-to-consumer e-commerce brands in the food, supplement, and cosmetics sectors that face increasing pressure from retail buyers and Gen Z consumers to eliminate single-use plastic packaging. The average DTC brand in this space ships 4,000–15,000 orders per month.\n\nThe business model has two revenue streams: a subscription supply contract where brands pay $0.38 per unit for a minimum of 2,000 units per month, and a co-manufacturing licensing fee of $85,000 paid by larger brands (shipping more than 50,000 units per month) that want to produce the pouches in-house using HarvestLoop's proprietary process. Year one projections target 12 subscription clients averaging 4,500 units per month and one co-manufacturing license, generating $657,360 in subscription revenue plus $85,000 in licensing for a total of $742,360. Operating costs are $620,000, yielding a net income of $122,360. Manufacturing is outsourced to a certified bioplastics contract manufacturer in Wisconsin during year one.\n\nHarvestLoop has filed a provisional patent on the oat-hull fiber extraction and film-forming process, has received a letter of intent from two DTC vitamin brands committing to trial orders, and has produced 18,000 commercial-quality pouches in a pilot run that passed ASTM testing in February. The founding team of three includes a packaging engineer with 9 years of industry experience, a DTC e-commerce operator, and a materials science graduate researcher who developed the original extraction method.\n\nYour task today is to present the plan to a DECA judge panel representing a clean-tech venture capital fund that has a mandate to invest in circular economy businesses. Explain the innovation, demonstrate the market demand and financial viability, articulate the intellectual property position, and address questions about scalability, the provisional patent's strength, and the risk that a large packaging company replicates the concept before HarvestLoop achieves scale.",
    individualPIs: [
      "Explain the concept of a circular economy and how it applies to packaging innovation",
      "Describe how intellectual property protection supports a competitive advantage for startups",
      "Identify strategies for targeting B2B customers in a sustainability-driven market",
      "Explain the importance of industry certifications and standards in product commercialization",
      "Describe how to structure a dual-revenue business model combining subscriptions and licensing"
    ],
    tdmPIs: [
      "Explain the concept of a circular economy and how it applies to packaging innovation",
      "Describe how intellectual property protection supports a competitive advantage for startups",
      "Identify strategies for targeting B2B customers in a sustainability-driven market",
      "Explain the importance of industry certifications and standards in product commercialization",
      "Describe how to structure a dual-revenue business model combining subscriptions and licensing",
      "Explain how to present a scalability roadmap to venture capital investors",
      "Identify the key risks in a deep-tech startup and how to address them in a business plan"
    ],
    judgementQuestions: [
      "Your provisional patent expires in 12 months unless converted to a full utility patent. Given that the full patent process costs approximately $15,000–$25,000 in legal fees, how do you prioritize that expense relative to your other year one capital needs?",
      "A major packaging company like Sealed Air or Novatek could potentially develop a competing compostable pouch with far greater manufacturing resources. What market position or strategy would make it difficult for a large incumbent to displace HarvestLoop in your target segment?",
      "Your year one revenue requires 12 subscription clients averaging 4,500 units per month. You currently have letters of intent from 2 brands. What is your specific plan to close the remaining 10 clients, and what is your timeline for converting letters of intent to paid contracts?"
    ]
  },

  // INB — inb-2
  {
    id: "inb-2",
    event: "Innovative Business Plan",
    eventCode: "INB",
    cluster: "entrepreneurship",
    situation:
      "You are presenting your innovative business plan for SoundMark, an AI-powered audio branding platform that generates custom sonic logos, hold music, and in-store ambient soundscapes for small and mid-size businesses that cannot afford to hire sound design agencies, which typically charge $8,000–$25,000 per project. SoundMark uses a proprietary generative audio model trained on licensed royalty-free music and psychoacoustic research to create brand-aligned audio assets in minutes based on a 12-question brand personality survey. All generated audio is original, commercially licensed to the buyer, and exportable in all major audio formats. The platform also includes an A/B testing tool that allows businesses to test two soundscapes with real customers and track measurable engagement metrics like dwell time and return visit rate in retail environments.\n\nThe target market is the 8.7 million businesses in the United States with 5–100 employees, specifically targeting retail, hospitality, and professional services businesses. Pricing is a one-time creation fee of $299 per audio asset or a $149 per month subscription for unlimited asset creation and A/B testing access. Year one projections target 2,200 one-time purchases and 380 subscribers, generating $657,200 in blended revenue against $490,000 in costs — including $160,000 for the AI engineering team, $95,000 in sales and marketing, and $235,000 in infrastructure and operations — for a net income of $167,200. The platform's MVP was built over 10 months using $72,000 in funding from a university entrepreneurship grant and has been tested by 34 beta businesses with an 88% satisfaction rate.\n\nThe innovation is threefold: the generative model produces audio assets that pass blind listening tests against agency-produced work 71% of the time, the survey-to-audio pipeline takes under four minutes versus the 6–10 week agency timeline, and the A/B testing tool provides ROI data that audio agencies cannot offer. SoundMark has filed a provisional patent on the brand-personality-to-audio translation algorithm.\n\nYour task today is to present the plan to a DECA judge panel representing an innovation-focused accelerator program that awards $50,000 plus mentorship to winning applicants. Explain the technology's differentiation, prove the market opportunity with specific data, present the financial projections, and address concerns about the defensibility of AI-generated audio against free tools like Suno AI or Mubert that already offer AI music generation at no cost.",
    individualPIs: [
      "Explain the concept of value pricing and how it applies to technology-enabled services",
      "Describe how AI-based tools create competitive advantages in creative service markets",
      "Identify methods for demonstrating product innovation through empirical testing data",
      "Explain the importance of protecting a novel algorithm through intellectual property filings",
      "Describe strategies for converting one-time buyers into recurring subscription customers"
    ],
    tdmPIs: [
      "Explain the concept of value pricing and how it applies to technology-enabled services",
      "Describe how AI-based tools create competitive advantages in creative service markets",
      "Identify methods for demonstrating product innovation through empirical testing data",
      "Explain the importance of protecting a novel algorithm through intellectual property filings",
      "Describe strategies for converting one-time buyers into recurring subscription customers",
      "Explain how to differentiate a paid AI tool from free alternatives in a competitive market",
      "Identify the key financial drivers and risks in a dual revenue model combining one-time and subscription sales"
    ],
    judgementQuestions: [
      "Free tools like Suno AI and Mubert already allow anyone to generate music at no cost. A judge might argue that SoundMark's $299 one-time fee or $149/month subscription is hard to justify. How do you articulate the specific value that SoundMark delivers that free general-purpose tools cannot?",
      "Your year one projection requires 2,200 one-time purchases in addition to 380 subscribers. What is your primary customer acquisition channel, what is the estimated cost per acquisition, and how does that affect your $167,200 projected net income?",
      "The A/B testing feature that tracks dwell time and return visit rate in retail environments sounds compelling, but requires businesses to implement tracking infrastructure. How technically complex is that setup for a small retailer, and does the complexity risk becoming a barrier to adoption?"
    ]
  },

  // ─── FRANCHISE BUSINESS PLAN (FBP) ───────────────────────────────────────────

  // FBP — fbp-1
  {
    id: "fbp-1",
    event: "Franchise Business Plan",
    eventCode: "FBP",
    cluster: "entrepreneurship",
    situation:
      "You are presenting a franchise business plan for acquiring a single-unit franchise of TidyTech, a mobile device repair franchise that specializes in smartphone, tablet, and laptop repair with a one-hour turnaround guarantee, a lifetime warranty on all parts, and a proprietary diagnostic app that produces a printed repair estimate in 3 minutes. TidyTech has 84 franchise locations across 19 states, an average unit revenue of $418,000, and a franchisee satisfaction rating of 4.2 out of 5 in the most recent annual survey. The franchise fee is $32,000, total initial investment including equipment, leasehold improvements, and working capital is $94,000, and the ongoing royalty is 7% of gross revenue plus 2% to a national marketing fund.\n\nYour proposed location is a 650-square-foot inline unit in a Costco-anchored strip center in Tacoma, Washington, where the nearest TidyTech franchise is 22 miles away in Federal Way. Your market research identified that the Tacoma ZIP code has 78,000 residents within a 3-mile radius, a median household income of $64,000, and no existing one-hour phone repair shop within the trade area. The landlord has offered a 5-year lease at $28 per square foot per year ($1,517 per month), with a 2% annual escalator. Your year one financial projections target $340,000 in revenue based on a conservative 81% of system average, with total expenses of $304,000 including royalties, rent, labor for two part-time technicians, and parts cost, for a projected net income of $36,000.\n\nYou are self-funding the investment using $65,000 in personal savings and a $29,000 SBA Microloan. You have two years of prior retail management experience and one year of part-time experience in consumer electronics repair. You are presenting today to a DECA judge panel representing the TidyTech franchising team, which evaluates all franchise candidates before approving a territory.\n\nYour task is to present your franchise business plan, demonstrate that you are a qualified candidate, justify your site selection and financial projections, and address questions about competition from national chains like uBreakiFix and the risk that your revenue falls below the break-even threshold in year one.",
    individualPIs: [
      "Explain the components of a franchise agreement and the obligations of a franchisee",
      "Describe the process of evaluating a franchise opportunity before investment",
      "Identify strategies for selecting a high-potential site for a retail franchise",
      "Explain how to build financial projections for a franchise unit using system benchmarks",
      "Describe the advantages and risks of franchising compared to starting an independent business"
    ],
    tdmPIs: [
      "Explain the components of a franchise agreement and the obligations of a franchisee",
      "Describe the process of evaluating a franchise opportunity before investment",
      "Identify strategies for selecting a high-potential site for a retail franchise",
      "Explain how to build financial projections for a franchise unit using system benchmarks",
      "Describe the advantages and risks of franchising compared to starting an independent business",
      "Explain the role of ongoing royalties and marketing fund contributions in franchise economics",
      "Identify the key qualifications and characteristics that franchise systems look for in prospective franchisees"
    ],
    judgementQuestions: [
      "Your $340,000 year one revenue projection is 81% of the TidyTech system average. What assumptions drive that conservative estimate, and at what revenue level does the unit break even after royalties, rent, and labor?",
      "uBreakiFix, now owned by Asurion, has significantly more brand recognition and marketing resources than TidyTech. How would you compete for customer walk-in traffic against a better-known national competitor in your trade area?",
      "If the landlord requires a personal guarantee on the 5-year lease and your revenue in year two falls short of projections by 20%, what is your contingency plan for covering fixed costs without depleting your personal savings reserve?"
    ]
  },

  // FBP — fbp-2
  {
    id: "fbp-2",
    event: "Franchise Business Plan",
    eventCode: "FBP",
    cluster: "entrepreneurship",
    situation:
      "You are presenting a franchise business plan for acquiring a two-unit development agreement with SproutKids Learning Centers, a STEM-focused preschool and after-school enrichment franchise with 112 locations in 24 states. SproutKids franchise units occupy 2,500–3,500 square feet and serve children aged 3–10, with a core curriculum built around hands-on robotics, coding readiness, and scientific inquiry activities. System-wide average unit revenue is $612,000 with a net income margin of 19%, based on full-capacity enrollment of 70 students per location. The franchise fee is $45,000 per unit, total investment per location ranges from $210,000 to $280,000, and the royalty is 8% of gross revenue.\n\nYour proposed territory covers two suburban ZIP codes in the Raleigh-Durham, North Carolina metropolitan area — one in Morrisville and one in Cary — both of which rank in the top 15% of the SproutKids site selection model for household income ($89,000 median), presence of dual-income households with children under 10, and proximity to technology employers including large campuses of Cisco, SAS Institute, and Lenovo. You are purchasing both territories simultaneously under a development agreement requiring you to open the first location within 18 months and the second within 36 months. Total initial investment across both units is estimated at $520,000.\n\nYou are financing the investment through $180,000 in personal and family savings, a $220,000 SBA 7(a) loan, and a $120,000 investment from a silent partner who will hold 20% equity. Your year one projections for the first Morrisville location target 52 enrolled students at an average monthly tuition of $980, generating $610,610 in annualized revenue. You have 8 years of experience as an elementary school administrator and hold a state administrator license, which is a prerequisite for operating a licensed childcare facility in North Carolina.\n\nYour task today is to present the complete two-unit development plan to a DECA judge panel representing the SproutKids franchise development team. Explain your site selection rationale for both territories, demonstrate financial readiness, and address concerns about the 36-month timeline for opening the second unit and the operational challenge of simultaneously managing a startup location and preparing a second site.",
    individualPIs: [
      "Describe the structure and strategic rationale of a multi-unit franchise development agreement",
      "Explain how to conduct demographic site selection analysis for a children's education franchise",
      "Identify the licensing and regulatory requirements for operating a childcare business",
      "Describe strategies for managing cash flow across multiple startup franchise units",
      "Explain how equity partnerships affect franchise ownership structure and decision-making"
    ],
    tdmPIs: [
      "Describe the structure and strategic rationale of a multi-unit franchise development agreement",
      "Explain how to conduct demographic site selection analysis for a children's education franchise",
      "Identify the licensing and regulatory requirements for operating a childcare business",
      "Describe strategies for managing cash flow across multiple startup franchise units",
      "Explain how equity partnerships affect franchise ownership structure and decision-making",
      "Explain the importance of staffing quality and staff retention in a childcare franchise",
      "Identify the key risks of committing to a two-unit development agreement before opening the first unit"
    ],
    judgementQuestions: [
      "You are committing to open a second location before you have operated the first. What milestones at the Morrisville location would give you confidence that you are ready to begin site preparation for the Cary unit, and at what point in the 36-month timeline would you expect to reach them?",
      "SproutKids charges 8% royalty on gross revenue. At 52 enrolled students and $980 average monthly tuition, how much does that royalty cost annually, and how does it compare to the value the franchisor provides in curriculum development, marketing support, and brand recognition?",
      "Your silent partner holds 20% equity in the operating entity. If a significant disagreement arises about major business decisions — such as whether to delay opening the second unit — how have you structured governance to resolve that disagreement, and what legal protections does each party have?"
    ]
  },

  // ─── INTERNATIONAL BUSINESS PLAN (INTL) ──────────────────────────────────────

  // INTL — intl-1
  {
    id: "intl-1",
    event: "International Business Plan",
    eventCode: "INTL",
    cluster: "entrepreneurship",
    situation:
      "You are presenting an international business plan for expanding PureSip, a US-based premium functional beverage brand known for its adaptogen-infused sparkling water, into the German market. PureSip currently operates exclusively in the United States, generating $9.2 million in annual domestic revenue across 1,400 retail accounts including Whole Foods, Sprouts, and regional natural grocery chains. The product line consists of four SKUs — Calm Cucumber, Focus Ginger, Sleep Lavender, and Energy Citrus — which retail at $3.49 per 12 oz can in the US. PureSip's management has identified Germany as the entry market because Germany is the largest functional beverage market in Europe at approximately €4.1 billion annually, with a 14% year-over-year growth rate driven by health-conscious urban consumers aged 25–45.\n\nThe entry strategy is an exclusive distribution partnership with Norddeutsche Naturkost GmbH, a Hamburg-based natural food distributor with relationships covering 620 independent health food stores and three regional organic grocery chains including Alnatura and basic Bio. The distribution agreement would require PureSip to provide German-language label compliance and EU Novel Food regulatory approval for the ashwagandha and lion's mane mushroom ingredients used in two SKUs. Retail pricing in Germany is projected at €3.80 per can, which aligns with premium competitors like Nocco and Fitvia. Year one targets are 180,000 units sold, generating approximately €684,000 in German distributor revenue (at a 30% distributor margin), with a projected contribution margin of 22% after cost of goods and import logistics.\n\nKey risks include EU Novel Food approval timelines of 12–18 months for the ashwagandha ingredient (though lion's mane received EU approval in 2022), tariff exposure under existing EU-US trade schedules at 10.7% on packaged beverages, and the requirement to reformat all marketing claims to comply with EU Regulation 1924/2006, which prohibits the unsubstantiated health claims currently used in PureSip's US marketing.\n\nYour task today is to present the international business plan to a DECA judge panel representing a trade finance bank that is evaluating PureSip's request for a $300,000 export working capital line of credit to fund the German launch. Explain the market opportunity, entry strategy, regulatory compliance plan, and financial projections. Be prepared to address the Novel Food approval risk and the trade finance bank's concern about currency exposure.",
    individualPIs: [
      "Explain the process of entering a foreign market through a distribution partnership",
      "Identify the regulatory compliance requirements for exporting food products to the European Union",
      "Describe how currency exchange rate risk affects international business profitability",
      "Explain how tariff structures affect pricing strategy in international markets",
      "Describe the importance of adapting product marketing to comply with foreign regulatory standards"
    ],
    tdmPIs: [
      "Explain the process of entering a foreign market through a distribution partnership",
      "Identify the regulatory compliance requirements for exporting food products to the European Union",
      "Describe how currency exchange rate risk affects international business profitability",
      "Explain how tariff structures affect pricing strategy in international markets",
      "Describe the importance of adapting product marketing to comply with foreign regulatory standards",
      "Explain how export working capital financing supports international market entry",
      "Identify methods for assessing market readiness and consumer demand in a foreign country"
    ],
    judgementQuestions: [
      "Two of your four SKUs require EU Novel Food approval that may take 12–18 months. Does that mean you launch with only two SKUs initially, and if so, how does that affect your year one revenue projection of 180,000 units?",
      "The euro-to-dollar exchange rate has fluctuated by as much as 18% over the past three years. How do you propose to manage the currency risk on a $300,000 export credit line when your German revenue will be denominated in euros?",
      "Germany has a strong domestic premium beverage culture including brands like Gerolsteiner, Bionade, and Club-Mate. What specific consumer insight or positioning makes PureSip genuinely differentiated in the German market rather than simply a foreign alternative to existing options?"
    ]
  },

  // INTL — intl-2
  {
    id: "intl-2",
    event: "International Business Plan",
    eventCode: "INTL",
    cluster: "entrepreneurship",
    situation:
      "You are presenting an international business plan for Gridwise Solar Solutions, a US-based manufacturer of modular rooftop solar installation kits designed for rural and peri-urban off-grid homes. Gridwise currently sells its flagship 1.2kW HomeKit through Amazon and home improvement channels in the United States, generating $6.8 million in annual US revenue. The HomeKit includes six panels, a 2kWh lithium battery, an inverter, and a simplified mounting system with a 4-hour self-installation guide. Average retail price is $1,450. The system powers basic household loads — four LED lights, a phone charger, a radio, and a small fan — making it relevant for households transitioning off diesel generators.\n\nGridwise has identified rural Nigeria as its international expansion target. Nigeria has approximately 90 million people living without reliable grid electricity, a growing middle-income segment in secondary cities, and a $2.8 billion off-grid solar market that is expanding at 22% annually as of 2024, accelerated by the naira's volatility making diesel fuel increasingly unaffordable for low-income households. Gridwise proposes to enter through a joint venture with Lagos-based CleanPower Africa Ltd., which has existing retail relationships with 280 hardware stores and agricultural co-operatives across Oyo, Kwara, and Kogi states. The JV structure would see Gridwise supply kits at a 35% gross margin and CleanPower Africa handle distribution, installation certification, and after-sales service.\n\nKey challenges include import duties in Nigeria of 20% on solar equipment (though the government has indicated a potential duty waiver for off-grid solar under ECOWAS trade policy pending legislative approval), naira exchange rate instability that creates pricing risk for a US-dollar-denominated supply chain, and the need to adapt the installation guide for a market where many end users have limited English literacy, requiring Yoruba and Hausa language versions. Year one volume target is 4,800 units, generating $6.96 million in wholesale revenue to the JV at the $1,450 list price minus distribution margins.\n\nYour task today is to present the plan to a DECA judge panel representing the US International Development Finance Corporation (DFC), which funds private-sector investment in emerging markets and is evaluating a $500,000 blended finance guarantee for the Gridwise Nigeria joint venture. Explain the market opportunity, JV structure, risk mitigation strategy, and development impact case. Be prepared to address questions about what happens if the duty waiver is not approved and how Gridwise manages naira currency exposure on a US-dollar cost structure.",
    individualPIs: [
      "Explain the structure and strategic rationale of an international joint venture",
      "Describe the impact of import duties and trade policy on the economics of international market entry",
      "Identify strategies for managing currency risk in an emerging market supply chain",
      "Explain how to adapt a product and marketing materials for a linguistically diverse international market",
      "Describe how blended finance instruments support private sector investment in developing economies"
    ],
    tdmPIs: [
      "Explain the structure and strategic rationale of an international joint venture",
      "Describe the impact of import duties and trade policy on the economics of international market entry",
      "Identify strategies for managing currency risk in an emerging market supply chain",
      "Explain how to adapt a product and marketing materials for a linguistically diverse international market",
      "Describe how blended finance instruments support private sector investment in developing economies",
      "Explain how to assess political and regulatory risk in an emerging market entry strategy",
      "Identify the key success factors for a distribution partnership in a frontier retail market"
    ],
    judgementQuestions: [
      "The 20% import duty on solar equipment would add approximately $290 per HomeKit to landed cost in Nigeria. If the duty waiver is not approved before your year one launch, how does that change your pricing strategy, and does the JV remain financially viable at the original margin structure?",
      "The naira has depreciated significantly against the dollar in recent years. Since your cost of goods is in US dollars but end-customer prices in Nigeria are ultimately in naira, what specific mechanism would you use in the JV agreement to protect Gridwise's dollar margins against naira devaluation?",
      "The DFC's mandate requires a measurable development impact case. How would you quantify the social and economic impact of 4,800 HomeKit installations in rural Nigeria in terms of households served, hours of productive light per day, and estimated reduction in household diesel expenditure?"
    ]
  },

  // ─── ENTREPRENEURSHIP PROMOTION PROJECT (EPP) ─────────────────────────────────

  // EPP — epp-1
  {
    id: "epp-1",
    event: "Entrepreneurship Promotion Project",
    eventCode: "EPP",
    cluster: "entrepreneurship",
    situation:
      "You are a team presenting an Entrepreneurship Promotion Project you have developed and executed over the past school year for your community. Your project, called LaunchReady Kitsap, was created in response to a need you identified through conversations with your school's career counselor and three local small business owners: high school students in your district have almost no practical exposure to entrepreneurship as a viable career path, and the businesses in your community struggle to find young local talent interested in business ownership. The project had three components: a monthly speaker series bringing local entrepreneurs into your school for 45-minute fireside-chat sessions, a 6-week summer micro-business incubator program for rising juniors and seniors, and a community showcase event where student participants presented their business concepts to a live audience of local business owners and parents.\n\nOver the 9-month project period, your team recruited 14 local entrepreneurs to participate in the speaker series, reaching 420 student attendees across 14 sessions with an average attendance of 30 students per session. The summer incubator enrolled 22 students who developed 18 business concepts over six weeks with mentorship from 9 volunteer business advisors. The community showcase drew 87 community members and resulted in 3 student participants receiving offers of part-time employment from local business owners who attended. Your team raised $4,200 in sponsorship funding from five local businesses to cover incubator materials, speaker appreciation gifts, and showcase venue costs, against $3,850 in actual expenses.\n\nYour project produced measurable outcomes: a pre-and-post survey of speaker series attendees showed that students reporting entrepreneurship as a career they would seriously consider rose from 18% to 41%, and incubator participants reported a 68% increase in self-rated business planning confidence. A local newspaper ran a feature story on the showcase, and the school principal has asked your team to create a sustainability plan so the program can continue after your graduation.\n\nYour task today is to present the complete project to a DECA judge panel, walk through the project's goals, execution, outcomes, and community impact, and present a specific sustainability plan that allows LaunchReady Kitsap to continue without your team's direct involvement after you graduate. Be prepared to address questions about how you would measure long-term impact and what elements of the project could be replicated in other communities.",
    individualPIs: [
      "Explain the importance of entrepreneurship education in developing community economic vitality",
      "Describe how to design a community outreach project with measurable goals and outcomes",
      "Identify strategies for recruiting and managing community volunteers and sponsors",
      "Explain how to create a sustainability plan for a community program after a founding team departs",
      "Describe how to present program impact data to a community stakeholder audience"
    ],
    tdmPIs: [
      "Explain the importance of entrepreneurship education in developing community economic vitality",
      "Describe how to design a community outreach project with measurable goals and outcomes",
      "Identify strategies for recruiting and managing community volunteers and sponsors",
      "Explain how to create a sustainability plan for a community program after a founding team departs",
      "Describe how to present program impact data to a community stakeholder audience",
      "Explain the role of partnerships between schools and local businesses in workforce development",
      "Identify methods for scaling a successful community pilot program to additional locations"
    ],
    judgementQuestions: [
      "Your post-survey showed that the percentage of students considering entrepreneurship as a career doubled, from 18% to 41%. How confident are you that the speaker series caused that change rather than other factors, and what would a stronger research design look like to establish causation?",
      "Your sustainability plan needs to work without your direct involvement. Who specifically — by role, not by name — would own each component of the program after you graduate, and how would you transfer institutional knowledge to them?",
      "Three students received job offers from business owners at the showcase, which is a compelling outcome. How would you use that result specifically in your pitch to renew or expand sponsorship funding from local businesses for next year?"
    ]
  },

  // EPP — epp-2
  {
    id: "epp-2",
    event: "Entrepreneurship Promotion Project",
    eventCode: "EPP",
    cluster: "entrepreneurship",
    situation:
      "You are a team presenting an Entrepreneurship Promotion Project designed to address the specific gap you identified in your rural community of 8,400 residents: the absence of a structured pathway for aspiring entrepreneurs to access business planning guidance, peer support, or connections to state and federal small business resources. Your project, called FirstStep Business Network, was built around a recurring free monthly workshop series hosted at your public library, a complementary peer-mentoring program pairing first-time business owners with established local entrepreneurs, and a resource directory you designed and printed in partnership with the county economic development office that consolidates information about the Small Business Development Center, SCORE chapters, local microloan programs, and relevant state grant opportunities.\n\nOver 11 months, your team organized 11 monthly workshops with a cumulative attendance of 214 participants. Topics ranged from business entity formation and basic bookkeeping to social media marketing for local businesses and navigating the SBA loan application process. Twelve mentor-mentee pairs were established through the peer-mentoring program, with 9 of the 12 mentees still engaged at the project's end. You printed and distributed 800 copies of the resource directory through the library, city hall, the chamber of commerce, and three local banks. Total project costs were $1,740, offset by a $1,200 grant from the county economic development office and $600 in workshop registration fees from participants who chose to pay a voluntary $5 contribution.\n\nProject outcomes include two workshop participants who launched new businesses during the project period and cited FirstStep as a contributing factor in their decision; a 31% increase in SBDC consultation requests originating from your county following a presentation you gave at an SBDC information session; and the county economic development director publicly endorsing FirstStep and offering to integrate the resource directory into the county's formal business welcome packet for all new business license applicants.\n\nYour task today is to present the complete project to a DECA judge panel, walk through your project's design rationale, implementation challenges, outcomes, and an honest assessment of what did not go as planned. Present a specific proposal for how FirstStep Business Network could be formalized as a permanent county program with an annual operating budget, and address questions about which project components delivered the most impact per dollar spent.",
    individualPIs: [
      "Explain the role of small business development resources in supporting community entrepreneurship",
      "Describe strategies for delivering entrepreneurship education to adult audiences in a rural setting",
      "Identify methods for building partnerships with government and nonprofit organizations for a community project",
      "Explain how to evaluate the cost-effectiveness of different components within a multi-part community program",
      "Describe how to transition a volunteer-run community project into a formally funded ongoing program"
    ],
    tdmPIs: [
      "Explain the role of small business development resources in supporting community entrepreneurship",
      "Describe strategies for delivering entrepreneurship education to adult audiences in a rural setting",
      "Identify methods for building partnerships with government and nonprofit organizations for a community project",
      "Explain how to evaluate the cost-effectiveness of different components within a multi-part community program",
      "Describe how to transition a volunteer-run community project into a formally funded ongoing program",
      "Explain the importance of honest self-assessment of project shortcomings in an evaluation report",
      "Identify key metrics for demonstrating community economic impact to government funders"
    ],
    judgementQuestions: [
      "You mentioned an honest assessment of what did not go as planned. What was the most significant challenge or failure in the FirstStep project, and what did you learn from it that you would apply if you were starting over?",
      "The county economic development director has endorsed FirstStep and wants to integrate it into formal county programs. What specific annual budget would you propose for a formalized version of the program, and what would each dollar fund?",
      "Between the workshop series, peer-mentoring program, and resource directory, which component delivered the highest community impact per dollar spent, and how did you reach that conclusion?"
    ]
  },

  // ─── VIRTUAL BUSINESS CHALLENGE (VBC) ────────────────────────────────────────

  // VBC — vbc-1
  {
    id: "vbc-1",
    event: "Virtual Business Challenge",
    eventCode: "VBC",
    cluster: "entrepreneurship",
    situation:
      "You are presenting the results and strategy decisions from your Virtual Business Challenge simulation, in which you operated a virtual retail sporting goods store called Summit Athletic Supply for a simulated 12-month fiscal year. At the start of the simulation your store had $80,000 in cash, a lease on a 2,400-square-foot retail space at $3,200 per month, and an existing inventory valued at $28,000 across five product categories: footwear, apparel, equipment, accessories, and nutrition supplements. You were competing against four other virtual stores in the same simulated market, all targeting the same customer base of active adults aged 18–55 in a mid-size city.\n\nOver the simulated year, you made 24 quarterly inventory restocking decisions, adjusted pricing on 8 occasions in response to competitor pricing data and simulated demand signals, ran 6 promotional campaigns with varying budget allocations, hired and scheduled 3 part-time employees, and made two capital decisions: purchasing a $7,500 point-of-sale system upgrade in Q2 and committing $4,200 to a local sponsorship of a trail running race series in Q3 and Q4. Your final simulated annual revenue was $612,000, placing you first among the five competing stores, with a net income of $74,400 and an ending cash balance of $89,600.\n\nKey strategic decisions that drove your result included a deliberate focus on the nutrition supplements and accessories categories — which had the highest gross margin at 48% and 41% respectively — while treating footwear as a traffic-driving loss leader priced 3% below market average. Your Q3 trail running sponsorship generated a simulated 22% revenue lift in the accessories category in Q3 and Q4 compared to Q1 and Q2. One decision that underperformed was a 15% price increase on apparel in Q3 that reduced unit volume by 31% and was reversed in Q4 at a cost to margin recovery.\n\nYour task today is to present your simulation results to a DECA judge panel, walk through the three most impactful strategic decisions you made and the reasoning behind each, analyze the one decision that underperformed and explain what you would do differently, and demonstrate your understanding of the business concepts that drove your outcomes.",
    individualPIs: [
      "Explain the relationship between pricing strategy and gross margin in a retail business",
      "Describe the concept of category management and how product mix affects overall store profitability",
      "Identify the role of promotional spending in driving customer acquisition and category sales lift",
      "Explain how capital investment decisions in retail operations affect long-term financial performance",
      "Describe how competitive pricing analysis informs retail pricing decisions"
    ],
    tdmPIs: [
      "Explain the relationship between pricing strategy and gross margin in a retail business",
      "Describe the concept of category management and how product mix affects overall store profitability",
      "Identify the role of promotional spending in driving customer acquisition and category sales lift",
      "Explain how capital investment decisions in retail operations affect long-term financial performance",
      "Describe how competitive pricing analysis informs retail pricing decisions",
      "Explain the concept of loss leader pricing and its strategic rationale in multi-category retail",
      "Identify the key performance indicators used to evaluate retail business health"
    ],
    judgementQuestions: [
      "You used footwear as a loss leader priced below market, which presumably drove foot traffic but reduced footwear margin. How did you determine that the traffic gain justified the margin sacrifice, and how would you measure whether that tradeoff actually worked?",
      "The Q3 apparel price increase reduced unit volume by 31% before you reversed it. In hindsight, what signals in the simulation data should have warned you before implementing that price increase that demand in that category was elastic?",
      "You finished the year with $89,600 in cash — more than you started with. A judge might argue you were too conservative and that reinvesting that cash into inventory or marketing would have produced higher revenue. How do you defend your cash management decisions?"
    ]
  },

  // VBC — vbc-2
  {
    id: "vbc-2",
    event: "Virtual Business Challenge",
    eventCode: "VBC",
    cluster: "entrepreneurship",
    situation:
      "You are presenting the results and strategic analysis from your Virtual Business Challenge simulation, in which you operated a virtual quick-service restaurant called Copper Fork Kitchen for a simulated two-year period. The simulation modeled a fast-casual restaurant with a fixed menu of 14 items across breakfast, lunch, and dinner dayparts, seating for 48 customers, and an initial cash position of $55,000. Your competitive environment included three other virtual restaurants targeting the same simulated customer base, and key decision variables included menu pricing, staffing levels and scheduling, marketing spend by channel, food cost management through supplier selection, and quarterly menu refreshes that could add or remove items at a development cost of $800 per new item.\n\nOver the two simulated years, you made 48 pricing decisions, 8 menu modification decisions, and 16 staffing schedule adjustments. Your most significant strategic choices were to remove two underperforming dinner items in Q3 Year 1 to reduce kitchen complexity and food waste, add a breakfast burrito and acai bowl in Q1 Year 2 to capture the morning daypart more competitively, and invest $12,000 in digital marketing over Year 2 against a Year 1 digital spend of $4,000. You also chose a higher-cost but more consistent produce supplier in Year 2 that increased food cost by 1.8 percentage points but reduced simulated customer complaints about quality by 44%.\n\nYour Year 2 simulated revenue was $1.14 million, a 28% increase over Year 1's $890,000. Net income in Year 2 was $103,000 compared to $61,000 in Year 1. You finished the simulation in second place overall by cumulative two-year net income, trailing the first-place team by $18,000. Your ending cash balance was $142,000. Your team has identified that the primary gap between your performance and first place was in lunch daypart traffic — the leading team's lunch revenue exceeded yours by an estimated 19%.\n\nYour task today is to present your two-year simulation results to a DECA judge panel, explain the strategic logic behind your most impactful decisions, provide a specific analysis of why the lunch daypart underperformance occurred and what you would have done differently, and draw clear connections between the business decisions you made in the simulation and real-world restaurant management principles.",
    individualPIs: [
      "Explain the importance of daypart revenue analysis in quick-service restaurant management",
      "Describe how menu engineering principles guide decisions about item additions and removals",
      "Identify strategies for using digital marketing to drive restaurant customer acquisition and frequency",
      "Explain the trade-off between food cost percentage and product quality in a restaurant operation",
      "Describe how staffing optimization affects labor cost as a percentage of revenue in foodservice"
    ],
    tdmPIs: [
      "Explain the importance of daypart revenue analysis in quick-service restaurant management",
      "Describe how menu engineering principles guide decisions about item additions and removals",
      "Identify strategies for using digital marketing to drive restaurant customer acquisition and frequency",
      "Explain the trade-off between food cost percentage and product quality in a restaurant operation",
      "Describe how staffing optimization affects labor cost as a percentage of revenue in foodservice",
      "Explain how menu simplification affects kitchen throughput and operational efficiency",
      "Identify the key financial metrics used to benchmark restaurant performance against industry standards"
    ],
    judgementQuestions: [
      "The leading team outperformed you by 19% in the lunch daypart. Based on the decision variables available in the simulation, what specific changes to pricing, menu composition, or marketing spend would you have made to close that gap — and why didn't you make them earlier?",
      "You switched to a higher-cost produce supplier in Year 2, which increased food cost by 1.8 percentage points but reduced quality complaints by 44%. How did you quantify whether that trade-off was financially justified, and what metric made you confident it was the right decision?",
      "You spent $12,000 on digital marketing in Year 2 compared to $4,000 in Year 1. How did you evaluate the return on that increased investment, and was there a point at which you considered that additional digital spend was yielding diminishing returns?"
    ]
  },

  // ─── PRINCIPLES OF ENTREPRENEURSHIP (PEN) ────────────────────────────────────

  // PEN — pen-1
  {
    id: "pen-1",
    event: "Principles of Entrepreneurship",
    eventCode: "PEN",
    cluster: "entrepreneurship",
    situation:
      "You are an entrepreneurship student serving as a junior business advisor for Sam Okonkwo, a 17-year-old who has been making and selling custom hand-poured soy candles under the brand name LightCraft since last spring. Sam started selling at a local farmers market with a folding table and a $140 investment in supplies, and has since grown to $2,800 in total sales across 6 market weekends. Sam currently sells 14 scent varieties at $12 per candle with a material cost of about $3.80 per candle, producing a gross profit of $8.20 per unit. A friend has suggested Sam start selling on Etsy, a local boutique has offered to carry LightCraft candles on consignment at a 35% commission, and a coworker at Sam's part-time job has offered to invest $500 in exchange for 25% of the business.\n\nSam is excited but overwhelmed by the three opportunities and does not know how to evaluate them. Sam has no business registration, no separate business bank account, and currently tracks all sales and costs in a paper notebook. Sam is also unsure whether the $12 retail price is right — a quick search found similar candles on Etsy ranging from $9 to $28, and a premium competitor at the same farmers market prices comparable products at $16. Sam is worried that raising prices will drive away the loyal repeat customers built over the past six weekends.\n\nSam is considering taking the $500 investor offer immediately to fund expansion but has not thought through what giving up 25% equity in a very early-stage microbusiness actually means for future decision-making or profit sharing. Sam is also uncertain about when and whether to formalize the business as an LLC versus remaining a sole proprietor.\n\nYour task today is to help Sam think through the three immediate opportunities — Etsy, the boutique consignment offer, and the investor offer — using basic entrepreneurship principles, advise on pricing strategy, and explain the foundational steps Sam should take to run LightCraft more like a real business going forward.",
    individualPIs: [
      "Explain the concept of gross profit margin and how it informs pricing decisions",
      "Describe the difference between consignment sales and direct retail channels",
      "Identify the advantages and risks of accepting equity investment in a micro-business",
      "Explain the importance of basic financial recordkeeping for a small business",
      "Describe the differences between operating as a sole proprietor versus an LLC"
    ],
    tdmPIs: [
      "Explain the concept of gross profit margin and how it informs pricing decisions",
      "Describe the difference between consignment sales and direct retail channels",
      "Identify the advantages and risks of accepting equity investment in a micro-business",
      "Explain the importance of basic financial recordkeeping for a small business",
      "Describe the differences between operating as a sole proprietor versus an LLC",
      "Explain the concept of opportunity cost in evaluating multiple business channel options simultaneously",
      "Identify the basic components of a simple business plan for a micro-business at an early stage"
    ],
    judgementQuestions: [
      "Sam is afraid to raise prices from $12 to $16 because of fear of losing loyal customers. Using the gross margin data provided, how would you explain the financial impact of a $4 price increase on LightCraft's profitability, even if Sam loses 20% of unit volume?",
      "The investor is offering $500 for 25% equity. How would you help Sam understand what that means — in terms of how future profits would be split and how much control Sam would give up — using plain language appropriate for a first-time teen entrepreneur?",
      "Between selling on Etsy, the boutique consignment deal, and continuing with the farmers market, which channel would you advise Sam to prioritize first and why — considering both revenue potential and operational complexity for a solo high school student?"
    ]
  },

  // PEN — pen-2
  {
    id: "pen-2",
    event: "Principles of Entrepreneurship",
    eventCode: "PEN",
    cluster: "entrepreneurship",
    situation:
      "You are an entrepreneurship student serving as a junior advisor for your neighbor, Rosa Jimenez, a 52-year-old former office manager who was laid off eight months ago and has been generating income by cleaning homes — currently serving 9 regular weekly clients at $120 per cleaning session. Rosa works approximately 32 hours per week and earns about $4,320 per month in gross revenue. After paying $280 per month for cleaning supplies and $160 per month for gas, her net income is approximately $3,880 per month. Rosa has not registered a business, does not have business insurance, uses her personal vehicle, and has not been setting aside money for self-employment taxes, which she recently learned she owes at 15.3% of net self-employment income.\n\nRosa enjoys the work and wants to grow, but she is unsure what growth actually means for a solo cleaning business. A friend has suggested Rosa hire a helper so she can take on more clients, but Rosa is worried about the responsibilities of being an employer. Another idea Rosa has considered is offering premium deep-cleaning services at $220 per session to move up-market and increase revenue without adding volume. A third option Rosa saw advertised online is purchasing a residential cleaning franchise — one brand, MaidPro, has franchise opportunities in her area at a $24,000 franchise fee and an estimated $50,000 total investment.\n\nRosa came to you because she needs help thinking through these options in a structured way and also needs to understand what basic business fundamentals she should be addressing right now — particularly around legal structure, taxes, and insurance — before considering any expansion. She is motivated and hardworking but has never taken a business class and feels intimidated by the formal side of running a business.\n\nYour task today is to advise Rosa on the three most urgent business fundamentals she should address immediately, evaluate the three growth options she is considering using basic entrepreneurship principles, and help her understand what factors she should weigh when deciding her next move. Keep your advice practical, actionable, and accessible to someone with no prior business education.",
    individualPIs: [
      "Identify the legal and tax obligations of a self-employed sole proprietor",
      "Explain the importance of business insurance for a service-based small business",
      "Describe the concept of up-market positioning and its effect on revenue per customer",
      "Explain the responsibilities and risks involved in hiring a first employee for a small business",
      "Identify the key factors to consider when evaluating a franchise opportunity at the startup stage"
    ],
    tdmPIs: [
      "Identify the legal and tax obligations of a self-employed sole proprietor",
      "Explain the importance of business insurance for a service-based small business",
      "Describe the concept of up-market positioning and its effect on revenue per customer",
      "Explain the responsibilities and risks involved in hiring a first employee for a small business",
      "Identify the key factors to consider when evaluating a franchise opportunity at the startup stage",
      "Explain the concept of opportunity cost when an entrepreneur is choosing between multiple growth strategies",
      "Describe the basic components of a budget and why cash flow planning is critical for a self-employed person"
    ],
    judgementQuestions: [
      "Rosa has not been setting aside money for self-employment taxes. Based on her approximately $3,880 per month in net income, roughly how much has she likely underpaid over eight months of self-employment, and what should she do about it now?",
      "Rosa is considering the $24,000 MaidPro franchise fee plus $50,000 total investment. Given that she is currently earning $3,880 per month net with zero capital investment, how would you help her evaluate whether the franchise economics make sense compared to growing her independent cleaning business?",
      "If Rosa raises her price from $120 to $180 per session and two of her nine clients leave as a result, is she better or worse off financially — and what does that calculation reveal about the strategic value of up-market pricing for a solo service provider?"
    ]
  },

  // ─── SOCIAL ENTREPRENEURSHIP (SE) ────────────────────────────────────────────

  // SE — se-1
  {
    id: "se-1",
    event: "Social Entrepreneurship",
    eventCode: "SE",
    cluster: "entrepreneurship",
    situation:
      "You are presenting a social enterprise business plan for ReThread Collective, a nonprofit social enterprise that employs justice-involved women — those recently released from incarceration or enrolled in work-release programs — to design and produce upcycled fashion accessories made from donated fabric scraps sourced from local bridal boutiques, tailoring shops, and school theater programs. ReThread's mission is to address two interconnected problems: the 68% national recidivism rate among women released from incarceration, which research links significantly to lack of stable employment within 90 days of release, and the approximately 21 billion pounds of textile waste generated in the United States each year.\n\nThe enterprise operates out of a donated workspace in a community center in Richmond, Virginia, and currently employs 9 women full-time at $16 per hour — $3 above minimum wage — with 90-day guaranteed employment and access to wraparound services including financial literacy coaching, childcare navigation assistance, and employer reference letter support. Products include tote bags, scarves, headbands, and small pouches sold through an Etsy shop, at two local farmers markets, and through a wholesale partnership with a regional fair-trade gift boutique chain called CommonGoods that stocks 14 stores across Virginia and Maryland.\n\nYear two financials show $214,000 in product revenue against $198,000 in expenses including wages, materials, market fees, and a portion of the community center's overhead, for a surplus of $16,000. ReThread also received $85,000 in philanthropic grants in year two from the Greater Richmond Community Foundation and a Surdna Foundation workforce development grant, bringing total resources to $301,000 against total uses of $275,000. The founding director, Maria Santos, wants to grow employment to 24 women by year four without becoming grant-dependent, which requires growing earned revenue to cover at least 80% of operating expenses.\n\nYour task today is to present the enterprise plan to a DECA judge panel representing a social impact investment committee evaluating a $120,000 program-related investment (PRI) loan at 2% interest to fund ReThread's expansion. Explain the social mission, the business model's revenue sustainability strategy, the plan for reaching 24 employees while reducing grant dependency, and address concerns about whether the product line can scale without losing the handmade character that drives premium pricing.",
    individualPIs: [
      "Explain the structure and mission alignment of a nonprofit social enterprise business model",
      "Describe how earned revenue strategies reduce nonprofit dependence on philanthropic grants",
      "Identify the social impact metrics used to evaluate a workforce development social enterprise",
      "Explain how a social enterprise balances financial sustainability with mission-driven employment practices",
      "Describe the role of program-related investments in funding social enterprise growth"
    ],
    tdmPIs: [
      "Explain the structure and mission alignment of a nonprofit social enterprise business model",
      "Describe how earned revenue strategies reduce nonprofit dependence on philanthropic grants",
      "Identify the social impact metrics used to evaluate a workforce development social enterprise",
      "Explain how a social enterprise balances financial sustainability with mission-driven employment practices",
      "Describe the role of program-related investments in funding social enterprise growth",
      "Explain how wholesale distribution partnerships affect the pricing and margin structure of a handmade goods social enterprise",
      "Identify strategies for scaling a handmade production enterprise without sacrificing product quality or mission integrity"
    ],
    judgementQuestions: [
      "Your goal is to cover 80% of operating expenses through earned revenue by year four. Currently earned revenue covers roughly $214,000 of $275,000 in total expenses, or about 78%. What specific revenue growth strategies — new channels, new products, or higher volume — would get you from 78% to 80% or beyond while employing 24 women?",
      "Scaling from 9 to 24 employees means hiring 15 additional women through the justice-involved pipeline. What is your plan for sourcing candidates, and what is the realistic timeline given that your current referral relationships are with two work-release programs?",
      "CommonGoods requires a 50% wholesale discount off retail price to maintain their margin. How does the wholesale channel's lower per-unit revenue compare to your Etsy and farmers market direct channels in terms of contribution to earned income — and is the CommonGoods relationship worth it at that margin?"
    ]
  },

  // SE — se-2
  {
    id: "se-2",
    event: "Social Entrepreneurship",
    eventCode: "SE",
    cluster: "entrepreneurship",
    situation:
      "You are presenting a social enterprise plan for GrowthGrid Urban Farm, a for-profit social enterprise structured as a Public Benefit Corporation (PBC) that operates a 1.4-acre urban farm in a food desert neighborhood of Milwaukee, Wisconsin and employs teenage residents of the surrounding ZIP code through a paid 12-week summer agricultural apprenticeship program. The neighborhood, Metcalfe Park, has no full-service grocery store within 1.5 miles, a median household income of $28,400, and a youth unemployment rate of 41% among residents aged 16–19. GrowthGrid produces approximately 18,000 pounds of fresh vegetables annually, sold through a farm stand open 5 days per week, a 40-member community-supported agriculture (CSA) subscription at $30 per week, and a supply contract with a local hospital cafeteria system that purchases $2,400 per month in produce.\n\nThe apprenticeship program currently employs 16 teenagers each summer at $14 per hour for 30 hours per week over 12 weeks, costing approximately $80,600 annually in wages plus $12,000 in program management and certification costs. Apprentices receive a certificate in urban agriculture, a food safety handler certification, and a formal job reference at completion. GrowthGrid's annual revenue is $142,000 from product sales and $65,000 from a City of Milwaukee workforce development grant and a USDA Farmers Market Promotion Program grant. Total annual operating costs are $196,000, resulting in a net deficit of $11,000 that is currently covered by founder reserves.\n\nThe founding team, Deja Harrington and Kwame Boateng, wants to reach financial sustainability within 18 months without reducing the apprenticeship program. They are considering three strategies: expanding the CSA to 80 members, adding a commercial kitchen processing line to sell value-added products (jarred pickles, salsa, frozen vegetable packs) through local grocery stores, and applying for a $200,000 USDA Community Food Projects grant that would fund infrastructure improvements including a greenhouse and cold storage expansion. The grant, if awarded, would allow year-round production and increase annual yield by an estimated 60%.\n\nYour task today is to present GrowthGrid Urban Farm's business and impact plan to a DECA judge panel representing a community development financial institution (CDFI) considering a $75,000 low-interest loan to support the commercial kitchen installation. Walk through the social mission, the current financial gap, the three strategies for reaching sustainability, and demonstrate that the loan can be repaid within four years from earned revenue growth.",
    individualPIs: [
      "Explain the Public Benefit Corporation structure and how it differs from a nonprofit and a traditional for-profit business",
      "Describe the concept of a food desert and how social enterprises can address food access inequity",
      "Identify strategies for expanding a small-scale agricultural business into value-added product lines",
      "Explain how workforce development grants are structured and how social enterprises qualify for them",
      "Describe how to build a financial sustainability roadmap for a social enterprise operating at a deficit"
    ],
    tdmPIs: [
      "Explain the Public Benefit Corporation structure and how it differs from a nonprofit and a traditional for-profit business",
      "Describe the concept of a food desert and how social enterprises can address food access inequity",
      "Identify strategies for expanding a small-scale agricultural business into value-added product lines",
      "Explain how workforce development grants are structured and how social enterprises qualify for them",
      "Describe how to build a financial sustainability roadmap for a social enterprise operating at a deficit",
      "Explain the concept of earned revenue diversification as a risk mitigation strategy for mission-driven organizations",
      "Identify the key social return on investment metrics relevant to a youth workforce development program"
    ],
    judgementQuestions: [
      "Your current net deficit is $11,000 per year, and you are seeking a $75,000 loan. The CDFI needs confidence you can repay the loan within four years from earned revenue growth. Which of your three expansion strategies — CSA expansion, value-added products, or the USDA grant — generates the fastest path to repayment, and what is your projected timeline?",
      "The commercial kitchen installation would enable value-added products like jarred pickles and frozen packs. What market research have you done to confirm that Milwaukee consumers and local grocery stores would actually purchase GrowthGrid-branded jarred and frozen products at a price point that supports a viable margin after packaging and processing costs?",
      "Your apprenticeship program costs $92,600 per year to run (wages plus management) and serves 16 teenagers. If the CDFI asks you to justify the financial burden of the program given that you are already operating at a deficit, how do you make the case that the apprenticeship is a core part of the business model rather than a cost center that could be cut to reach sustainability?"
    ]
  }
];
