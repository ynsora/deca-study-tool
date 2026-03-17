import type { RoleplayScenario } from "./types";

export const scenariosPart1: RoleplayScenario[] = [
  // ─── MARKETING ───────────────────────────────────────────────────────────────

  // Buying and Merchandising (BM)
  {
    id: "bm-1",
    event: "Buying and Merchandising",
    eventCode: "BM",
    cluster: "marketing",
    situation:
      "You are a junior buyer at Crestwood Retail Group, a mid-sized specialty home-goods chain with 42 locations across the Midwest. The category manager has asked you to evaluate a proposal from a new vendor, Lumina Home, which offers a line of sustainable bamboo kitchenware. Lumina is offering an initial order at $18 per unit with a suggested retail price of $39.99, promising a 60-day lead time and minimum order quantity of 500 units per SKU. Your store currently carries a competing line from EcoNest at $22 per unit with a 45-day lead time. Last quarter, the EcoNest line generated $112,000 in gross sales but had a 14% return rate due to quality complaints. You must evaluate the new vendor's proposal, assess the financial implications of switching suppliers, and recommend whether Crestwood should adopt, pilot, or reject the Lumina Home line. Present your recommendation to the category manager, supported by margin analysis and risk considerations.",
    individualPIs: [
      "Explain the nature of the buying function",
      "Evaluate vendor offerings for suitability",
      "Calculate initial markup",
      "Explain the importance of merchandise planning",
      "Describe the nature of a retail image"
    ],
    tdmPIs: [
      "Explain the nature of the buying function",
      "Evaluate vendor offerings for suitability",
      "Calculate initial markup",
      "Explain the importance of merchandise planning",
      "Describe the nature of a retail image",
      "Assess quality of goods/services",
      "Explain the concept of gross margin"
    ],
    judgementQuestions: [
      "How would you handle the transition period if Crestwood decides to switch vendors—specifically, what happens to remaining EcoNest inventory?",
      "What criteria beyond price and lead time should be factored into a vendor scorecard for long-term supplier relationships?",
      "If the pilot order of Lumina Home products underperforms in the first 30 days, what sell-through threshold would trigger a markdown strategy, and why?"
    ]
  },
  {
    id: "bm-2",
    event: "Buying and Merchandising",
    eventCode: "BM",
    cluster: "marketing",
    situation:
      "You are an assistant buyer at Pinnacle Sportswear, a regional athletic apparel retailer with 18 stores in the Southeast. The buying director has flagged that your running-apparel category is experiencing a 22% decline in sell-through compared to the same period last year. Inventory levels are at 140% of target, creating cash-flow pressure and excess floor space costs. A key vendor, SwiftTrack Athletics, has offered a markdown co-op program that would reimburse 50% of any price reductions taken on their line through the end of the quarter. However, accepting the co-op requires committing to a forward buy of $85,000 in new SwiftTrack spring merchandise. You must analyze the current inventory situation, weigh the risks and benefits of the co-op agreement, and propose a merchandising action plan—including pricing adjustments, floor presentation changes, and promotional tactics—to improve category performance. Present your plan to the buying director with financial justification.",
    individualPIs: [
      "Explain the nature of merchandise planning",
      "Develop strategies to move slow-moving merchandise",
      "Explain the concept of open-to-buy",
      "Explain the nature of effective verbal communications",
      "Describe the relationship between customer satisfaction and merchandising decisions"
    ],
    tdmPIs: [
      "Explain the nature of merchandise planning",
      "Develop strategies to move slow-moving merchandise",
      "Explain the concept of open-to-buy",
      "Explain the nature of effective verbal communications",
      "Describe the relationship between customer satisfaction and merchandising decisions",
      "Calculate markdown percentage",
      "Explain the importance of coordinating with vendors on promotional activities"
    ],
    judgementQuestions: [
      "How does accepting the co-op forward buy affect your open-to-buy position for the rest of the quarter?",
      "What point-of-sale and floor-presentation changes would you implement alongside the price reductions to maximize sell-through speed?",
      "If the markdown strategy fails to clear inventory within 60 days, what secondary options—such as off-price channels or donation programs—would you consider, and what are the brand implications?"
    ]
  },

  // Marketing Management (MM)
  {
    id: "mm-1",
    event: "Marketing Management",
    eventCode: "MM",
    cluster: "marketing",
    situation:
      "You are a marketing consultant hired by Verdana Organics, a direct-to-consumer organic snack brand generating $3.2 million in annual revenue. The company relies almost entirely on a single retail partner, Whole Harvest Co-ops, which accounts for 78% of Verdana's sales. The CEO is concerned about channel concentration risk and wants to explore a multichannel expansion strategy. Market research indicates that Verdana's target demographic—health-conscious millennials aged 25–40—over-indexes on social commerce, subscription boxes, and specialty e-commerce platforms. The CEO has allocated a $120,000 marketing budget for a six-month pilot and wants you to recommend which two additional channels to enter, outline a go-to-market plan for each, and establish key performance indicators to evaluate success. You must also address how Verdana can maintain brand consistency across channels while avoiding channel conflict with Whole Harvest. Present your strategy to the CEO.",
    individualPIs: [
      "Explain the nature of marketing strategies",
      "Identify the impact of channel management decisions on marketing",
      "Explain the concept of marketing mix",
      "Develop a marketing plan",
      "Describe the use of technology in the marketing function"
    ],
    tdmPIs: [
      "Explain the nature of marketing strategies",
      "Identify the impact of channel management decisions on marketing",
      "Explain the concept of marketing mix",
      "Develop a marketing plan",
      "Describe the use of technology in the marketing function",
      "Explain the nature of marketing metrics",
      "Assess the impact of customer relationship management on a business"
    ],
    judgementQuestions: [
      "How would you structure a pricing strategy for the new channels to prevent undercutting your existing retail partner, Whole Harvest?",
      "What specific KPIs would you use at the 30-, 60-, and 90-day marks to determine whether the pilot is on track to justify a full rollout?",
      "If Verdana's social commerce pilot generates strong awareness but low conversion, what mid-course corrections would you recommend?"
    ]
  },
  {
    id: "mm-2",
    event: "Marketing Management",
    eventCode: "MM",
    cluster: "marketing",
    situation:
      "You are the marketing manager at Apex Fitness Studios, a boutique gym chain with 11 locations across the Chicago metro area. Membership has declined 18% over the past 12 months, primarily driven by competition from lower-cost virtual fitness apps and two new competitor studios that opened within three miles of your top-performing location. The average member lifetime value is $1,400 and customer acquisition cost has risen to $210, up from $140 two years ago. The ownership group wants a comprehensive retention and acquisition strategy to stabilize membership at current levels within 90 days and grow it by 15% within six months. You have a $75,000 discretionary marketing budget. You must analyze the competitive landscape, identify the primary drivers of member churn, and recommend a prioritized set of marketing tactics covering both digital and in-person channels. Present your strategy to the ownership group with projected outcomes.",
    individualPIs: [
      "Explain the nature of marketing strategies",
      "Conduct a SWOT analysis for use in the marketing planning process",
      "Explain the concept of customer lifetime value",
      "Identify the impact of promotional activities on sales",
      "Explain the nature of competitive intelligence"
    ],
    tdmPIs: [
      "Explain the nature of marketing strategies",
      "Conduct a SWOT analysis for use in the marketing planning process",
      "Explain the concept of customer lifetime value",
      "Identify the impact of promotional activities on sales",
      "Explain the nature of competitive intelligence",
      "Assess the impact of customer relationship management on a business",
      "Explain the nature of marketing metrics"
    ],
    judgementQuestions: [
      "Given the rising customer acquisition cost, how would you rebalance your budget between retention tactics and new-member acquisition?",
      "How would you differentiate Apex's value proposition from low-cost virtual competitors when price is a major factor for churned members?",
      "What data would you collect in exit surveys from churned members, and how would that inform your next campaign cycle?"
    ]
  },

  // Sports & Entertainment Marketing (SEM)
  {
    id: "sem-1",
    event: "Sports & Entertainment Marketing",
    eventCode: "SEM",
    cluster: "marketing",
    situation:
      "You are a sponsorship activation specialist at Horizon Event Group, the agency representing the Lakecrest Triathlon Series, a regional endurance sports event with three annual races drawing an aggregate 4,800 registered athletes and 12,000 spectators. Vitality Hydration, a sports-drink brand, is interested in becoming the title sponsor at $95,000 for a two-year agreement. Vitality's marketing director wants to see a detailed activation plan that justifies the investment with measurable ROI. Current sponsorship assets include finish-line branding, product sampling stations, social media mentions, and an athlete email list of 14,000 subscribers. Vitality's target audience is endurance athletes aged 22–45 with household incomes above $70,000. You must design an activation package that maximizes Vitality's brand exposure, drives product trial, and includes post-event measurement methodology. Present the activation plan to Vitality's marketing director.",
    individualPIs: [
      "Explain the nature of sponsorship in sports/entertainment marketing",
      "Develop a sponsorship proposal",
      "Explain the concept of product trial",
      "Describe the use of technology in the marketing function",
      "Explain the nature of effective verbal communications"
    ],
    tdmPIs: [
      "Explain the nature of sponsorship in sports/entertainment marketing",
      "Develop a sponsorship proposal",
      "Explain the concept of product trial",
      "Describe the use of technology in the marketing function",
      "Explain the nature of effective verbal communications",
      "Explain the importance of marketing metrics in sponsorship evaluation",
      "Identify ways to leverage sponsorship through integrated marketing communications"
    ],
    judgementQuestions: [
      "How would you calculate an estimated cost-per-impression for Vitality's sponsorship to benchmark it against their other media buys?",
      "What exclusivity clauses would you recommend including in the agreement to protect Vitality from competitor brands appearing at the event?",
      "If post-event survey data shows low unaided brand recall for Vitality, what adjustments would you propose for year two of the sponsorship?"
    ]
  },
  {
    id: "sem-2",
    event: "Sports & Entertainment Marketing",
    eventCode: "SEM",
    cluster: "marketing",
    situation:
      "You are a marketing analyst at the Riverside Wolves, a minor-league hockey team playing in a mid-sized market of 380,000 people. Average game attendance last season was 2,100 fans, representing 58% of the arena's 3,600-seat capacity—down from 71% two seasons ago. The team's primary revenue streams are ticket sales (52%), concessions (23%), and merchandise (15%), with sponsorship revenue making up the remainder. The general manager has set a goal of reaching 75% capacity utilization this season and wants a marketing plan focused on family audiences and local corporate groups. The team has a social media following of 18,000 across all platforms and an email database of 9,500. You have a $60,000 promotional budget for the season. Develop a marketing plan targeting both family ticket packages and corporate group sales, including specific promotional events and community partnership ideas. Present your plan to the general manager.",
    individualPIs: [
      "Explain the nature of sports/entertainment marketing",
      "Identify the impact of promotional activities on sales",
      "Explain the nature of marketing segmentation",
      "Develop strategies to increase market share",
      "Describe the nature of target marketing"
    ],
    tdmPIs: [
      "Explain the nature of sports/entertainment marketing",
      "Identify the impact of promotional activities on sales",
      "Explain the nature of marketing segmentation",
      "Develop strategies to increase market share",
      "Describe the nature of target marketing",
      "Explain the concept of customer lifetime value",
      "Explain the use of community relations as a marketing tool"
    ],
    judgementQuestions: [
      "How would you price a family four-pack versus individual ticket sales to maximize both attendance and per-game revenue?",
      "What 'themed night' events would resonate most with your target family demographic in a mid-sized market, and how would you measure their effectiveness?",
      "How would you approach outreach to local corporations for group sales, and what ROI argument would you make to a company purchasing a 20-seat block?"
    ]
  },

  // Fashion Marketing (FM)
  {
    id: "fm-1",
    event: "Fashion Marketing",
    eventCode: "FM",
    cluster: "marketing",
    situation:
      "You are a brand strategist at Soleil Collective, an independent women's fashion label based in Nashville. The brand generates $2.8 million in annual revenue primarily through its direct-to-consumer website and two flagship boutiques. The creative director has identified an opportunity to expand into the wholesale market by pitching to regional department stores, but the sales team has no formal presentation materials and no wholesale pricing structure. Current retail prices range from $68 for tops to $195 for outerwear, with an average cost of goods at 32% of retail. You must develop a wholesale pricing strategy that maintains margin viability, outline the key elements of a line sheet presentation, and advise on which department store tier—luxury, mid-tier, or value—best aligns with Soleil Collective's brand positioning. You must also address how to maintain brand integrity when partnering with wholesale accounts. Present your recommendations to the creative director.",
    individualPIs: [
      "Explain the nature of fashion marketing",
      "Explain the nature of the buying function",
      "Calculate initial markup",
      "Describe the impact of brand on fashion marketing",
      "Explain the nature of effective verbal communications"
    ],
    tdmPIs: [
      "Explain the nature of fashion marketing",
      "Explain the nature of the buying function",
      "Calculate initial markup",
      "Describe the impact of brand on fashion marketing",
      "Explain the nature of effective verbal communications",
      "Explain the concept of channel management",
      "Describe the use of pricing strategies in fashion retail"
    ],
    judgementQuestions: [
      "How would you structure the keystone markup in your wholesale pricing to ensure the department store can price competitively without undercutting your boutique prices?",
      "What terms and conditions—such as exclusivity zones or minimum order quantities—would you negotiate to protect Soleil Collective's boutique partners?",
      "If a department store buyer asks for a private-label arrangement, how would you evaluate whether that aligns with Soleil Collective's long-term brand strategy?"
    ]
  },
  {
    id: "fm-2",
    event: "Fashion Marketing",
    eventCode: "FM",
    cluster: "marketing",
    situation:
      "You are a digital marketing manager at Ember & Thread, a sustainable streetwear brand targeting Gen Z consumers aged 16–24. The brand launched 18 months ago and has grown to $1.1 million in annual online revenue with a strong Instagram following of 92,000 but a relatively low email subscriber count of 4,200. The conversion rate on the website is 1.4%, below the industry average of 2.1% for apparel e-commerce. The founder wants to launch a new denim capsule collection in eight weeks and is targeting $180,000 in first-month sales. You must develop a pre-launch and launch marketing strategy that leverages influencer partnerships, social media, and email marketing to drive awareness and conversion. Your total campaign budget is $35,000. Address how you will measure campaign performance and adjust tactics in real time. Present your strategy to the founder.",
    individualPIs: [
      "Explain the nature of fashion marketing",
      "Explain the nature of digital marketing",
      "Describe the use of social media in marketing",
      "Identify the impact of promotional activities on sales",
      "Describe the nature of target marketing"
    ],
    tdmPIs: [
      "Explain the nature of fashion marketing",
      "Explain the nature of digital marketing",
      "Describe the use of social media in marketing",
      "Identify the impact of promotional activities on sales",
      "Describe the nature of target marketing",
      "Explain the use of influencer marketing in brand strategy",
      "Explain the nature of marketing metrics"
    ],
    judgementQuestions: [
      "How would you select and vet influencers for this campaign to ensure their audiences align with Ember & Thread's Gen Z target market?",
      "What tactics would you use in the two weeks before launch to build an email waitlist and increase the impact of launch-day email sends?",
      "If the first 48 hours of the launch generate strong traffic but poor conversion, what immediate on-site changes would you test to close the gap?"
    ]
  },

  // Food Marketing (FMK)
  {
    id: "fmk-1",
    event: "Food Marketing",
    eventCode: "FMK",
    cluster: "marketing",
    situation:
      "You are a brand manager at Golden Harvest Foods, a regional specialty food manufacturer based in the Pacific Northwest. The company produces artisan hot sauces and condiments with annual revenue of $4.6 million, primarily through natural grocery chains in a five-state territory. The VP of Sales wants to pursue a listing at a national grocery retailer, FreshMart, which has 1,100 stores across 38 states. FreshMart has expressed interest but requires a slotting fee of $28,000, a promotional calendar commitment including two price promotions per year, and compliance with their private-label cost benchmarks. You must evaluate whether the FreshMart opportunity is financially viable, outline a launch strategy including the promotional calendar, and assess the operational implications of scaling production to serve 1,100 stores. Present your recommendation to the VP of Sales with supporting financial analysis.",
    individualPIs: [
      "Explain the nature of food marketing",
      "Explain the nature of distribution in marketing",
      "Assess the profitability of channel decisions",
      "Explain the concept of product mix",
      "Describe the nature of effective written communications"
    ],
    tdmPIs: [
      "Explain the nature of food marketing",
      "Explain the nature of distribution in marketing",
      "Assess the profitability of channel decisions",
      "Explain the concept of product mix",
      "Describe the nature of effective written communications",
      "Explain the importance of trade promotion in food marketing",
      "Explain the nature of pricing strategies"
    ],
    judgementQuestions: [
      "What break-even unit volume would Golden Harvest need to achieve across FreshMart's 1,100 stores to recover the $28,000 slotting fee within the first year?",
      "How would you manage the risk of FreshMart requesting a price reduction after the first promotional cycle if the sell-through data is below their threshold?",
      "What co-packing or production partnership strategies could help Golden Harvest scale quickly without overextending its manufacturing capacity?"
    ]
  },
  {
    id: "fmk-2",
    event: "Food Marketing",
    eventCode: "FMK",
    cluster: "marketing",
    situation:
      "You are a marketing coordinator at Sunrise Bakery Co., a family-owned commercial bakery that supplies bread and pastry products to 140 independent restaurants and cafés in the Denver metro area. The company earns $2.2 million in annual B2B revenue but has seen a 9% decline in accounts over the past year as restaurant clients shift to national foodservice distributors offering lower prices and one-stop ordering convenience. The owner wants to differentiate Sunrise's offering and improve customer retention. You have been asked to design a customer retention strategy that leverages Sunrise's local identity, product quality, and relationship-based service model. Your budget for the initiative is $18,000 for the next six months. Develop a retention plan that includes at least three distinct tactics and a method for measuring results. Present your plan to the owner.",
    individualPIs: [
      "Explain the nature of food marketing",
      "Explain the importance of customer relationship management",
      "Develop strategies to increase market share",
      "Identify the impact of promotional activities on sales",
      "Explain the nature of effective verbal communications"
    ],
    tdmPIs: [
      "Explain the nature of food marketing",
      "Explain the importance of customer relationship management",
      "Develop strategies to increase market share",
      "Identify the impact of promotional activities on sales",
      "Explain the nature of effective verbal communications",
      "Explain the concept of customer lifetime value",
      "Assess the impact of value-added services on customer retention"
    ],
    judgementQuestions: [
      "How would you quantify the cost of losing a single restaurant account to justify the $18,000 retention budget to a skeptical owner?",
      "What specific loyalty or incentive program structure would resonate most with independent restaurant operators who value cost control?",
      "How would you use data from your current accounts—such as order frequency and product mix—to identify which customers are at highest churn risk before they leave?"
    ]
  },

  // Retail Merchandising (RMS)
  {
    id: "rms-1",
    event: "Retail Merchandising",
    eventCode: "RMS",
    cluster: "marketing",
    situation:
      "You are a visual merchandising consultant hired by Clover & Stone, a lifestyle home décor retailer with 24 stores and average store size of 3,200 square feet. The corporate visual merchandising director has asked you to redesign the front-of-store 'power zone'—the first 15 feet of selling floor—which currently generates $48 per square foot in annual sales, compared to a category benchmark of $72. A recent customer intercept study found that 61% of shoppers exit without making a purchase and cite 'cluttered and confusing' presentation as the primary reason. The director wants a redesign plan that improves traffic flow, increases conversion rate, and elevates the brand presentation. You have a $22,000 fixture and signage budget per store. Develop a power-zone redesign plan with specific fixture recommendations, product curation strategy, and expected financial impact. Present your plan to the director.",
    individualPIs: [
      "Explain the nature of visual merchandising",
      "Describe the use of color in visual merchandising",
      "Explain the relationship between store layout and sales performance",
      "Explain the importance of merchandise planning",
      "Calculate sales per square foot"
    ],
    tdmPIs: [
      "Explain the nature of visual merchandising",
      "Describe the use of color in visual merchandising",
      "Explain the relationship between store layout and sales performance",
      "Explain the importance of merchandise planning",
      "Calculate sales per square foot",
      "Explain the nature of planogram development",
      "Describe the impact of in-store signage on customer purchasing decisions"
    ],
    judgementQuestions: [
      "How would you prioritize which product categories to feature in the power zone given limited space and the need to serve diverse customer segments?",
      "What metrics beyond sales per square foot would you track post-redesign to evaluate whether the new layout is improving the customer journey?",
      "If the redesign budget is cut to $10,000 per store, which elements would you preserve as non-negotiable and which would you defer?"
    ]
  },
  {
    id: "rms-2",
    event: "Retail Merchandising",
    eventCode: "RMS",
    cluster: "marketing",
    situation:
      "You are a retail operations analyst at Beacon Electronics, a specialty consumer electronics chain with 35 locations. The category director has identified that the wearables department—smartwatches, fitness trackers, and wireless earbuds—is underperforming, with a 17% sell-through rate over the past quarter versus a company target of 35%. Total wearables inventory on hand is valued at $1.4 million at cost. The department occupies 280 square feet per store and carries 62 active SKUs, which store managers report is too many for staff to demo effectively. You must develop a SKU rationalization plan, recommend floor presentation changes, and propose a staff training approach to improve product knowledge and conversion. Present your action plan to the category director, including financial projections for the next quarter.",
    individualPIs: [
      "Explain the nature of retail merchandising",
      "Develop strategies to move slow-moving merchandise",
      "Explain the importance of product knowledge in retail sales",
      "Describe the nature of planogram development",
      "Explain the concept of inventory turnover"
    ],
    tdmPIs: [
      "Explain the nature of retail merchandising",
      "Develop strategies to move slow-moving merchandise",
      "Explain the importance of product knowledge in retail sales",
      "Describe the nature of planogram development",
      "Explain the concept of inventory turnover",
      "Explain the nature of SKU management",
      "Describe the use of technology in the merchandising function"
    ],
    judgementQuestions: [
      "What criteria would you use to determine which of the 62 SKUs to discontinue, and how would you handle vendor relationships for delisted products?",
      "How would you design a staff demo training program that can be deployed across 35 locations within a 30-day window?",
      "If wearables sell-through improves to 28% after your changes but still falls short of the 35% target, what would be your next escalation steps?"
    ]
  },

  // ─── FINANCE ─────────────────────────────────────────────────────────────────

  // Accounting Applications (AAM)
  {
    id: "aam-1",
    event: "Accounting Applications",
    eventCode: "AAM",
    cluster: "finance",
    situation:
      "You are an accounting associate at Meridian Advisory Group, a small CPA firm serving small and mid-sized businesses. A new client, Thornwood Landscaping LLC, has come to you for help. The owner has been managing the company's books in a spreadsheet and suspects there are cash-flow issues, but cannot identify the source. After reviewing three months of records, you find that accounts receivable days outstanding is averaging 68 days—well above the industry norm of 35 days—and the company has $47,000 in invoices over 90 days past due. Additionally, the owner has been mixing personal and business expenses, resulting in approximately $8,200 in misclassified transactions. You must explain the impact of these issues on financial reporting accuracy, outline a collections strategy to reduce AR aging, and recommend internal controls to prevent expense misclassification going forward. Present your findings and recommendations to the business owner.",
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
      "You are an accounting intern at Parkview Property Management, which manages 320 residential rental units across 14 properties. The controller has asked you to assist with the month-end close process, but has discovered a significant discrepancy: the bank reconciliation for the operating account shows a $14,750 difference that has not been resolved in two months. Preliminary investigation reveals three issues: an outstanding check for $6,200 written to a maintenance vendor that was never cashed, a deposit of $5,100 that was recorded twice in the general ledger, and an unrecorded bank fee of $3,450 charged quarterly. You must explain each reconciling item, describe the correcting journal entries required for the items that have hit the bank but not the ledger, and outline a month-end close checklist to prevent future unresolved reconciling items. Present your findings to the controller.",
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
      "You are a financial analyst at Northgate Manufacturing, a privately held company producing industrial components with $18 million in annual revenue. The CFO has asked you to evaluate whether the company should lease or purchase a new CNC machining center needed to fulfill a five-year contract with a key customer. The machine costs $420,000 to purchase outright or $7,800 per month on a 60-month operating lease with no purchase option. The company's weighted average cost of capital is 8.2%, its marginal tax rate is 21%, and it currently holds $280,000 in cash reserves with a $500,000 line of credit at 6.5% interest. The contract will generate $95,000 in incremental annual gross profit if the machine is operational. You must analyze the net present value of each option, identify the non-financial factors relevant to the decision, and present a recommendation to the CFO.",
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
      "You are a financial consultant advising Solana Restaurant Group, which operates six casual dining locations in the Phoenix area. The company is considering opening a seventh location in a new mixed-use development. Total startup costs are estimated at $680,000, including $210,000 in leasehold improvements, $155,000 in kitchen equipment, $85,000 in working capital, and $230,000 in pre-opening and franchise-related fees. The owner is evaluating three financing scenarios: an SBA 7(a) loan at 7.25% over 10 years, a combination of 50% bank financing and 50% equity from a silent partner, or a sale-leaseback of existing kitchen equipment raising $120,000 combined with a smaller bank loan. The existing locations average a 14% net profit margin on $2.4 million in combined revenue. You must compare the three financing scenarios on cost, risk, and control implications and recommend the best structure. Present your analysis to the owner.",
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
      "You are a client relationship associate at Clearwater Financial Partners, a fee-only financial planning firm. A new client, Marcus and Diana Ellison, have come in for their first comprehensive financial planning meeting. Marcus is 42 and earns $118,000 annually as an engineer; Diana is 39 and earns $74,000 as a school administrator. They have two children, ages 10 and 7. Their financial snapshot: $48,000 in a joint savings account, $112,000 in Marcus's 401(k), $31,000 in Diana's 403(b), $18,500 in credit card debt at 22.9% APR, and a mortgage with $214,000 remaining at 4.1% with 19 years left. They want to retire at 65, fund both children's college education, and eliminate high-interest debt. You must conduct an initial needs analysis, prioritize their financial goals, and outline a financial planning roadmap. Present your recommendations to the clients.",
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
      "You are a financial services representative at Keystone Community Bank. A small business owner, Priya Sharma, has come in seeking guidance on banking and financial services products for her growing e-commerce business, which generated $890,000 in revenue last year, up from $410,000 two years prior. She currently uses a personal checking account for all business transactions, has no business credit history, and processes payments through a third-party platform that charges 3.1% per transaction. She is also concerned about a recent phishing attempt that targeted her email and wants to know how to protect her business finances. You must recommend appropriate business banking products, a payment processing solution, and cybersecurity best practices for her financial accounts. Present your recommendations to Ms. Sharma in plain language.",
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
      "You are a junior investment consultant at Vantage Capital Advisors. A prospective client, Raymond Chu, is a 34-year-old software engineer with $85,000 to invest for the first time. He describes himself as a moderate risk tolerance investor with a 25-year time horizon before retirement. He has no existing investment accounts outside of a company 401(k) with $42,000. He is interested in building a diversified portfolio and has heard about index funds, ETFs, and individual stocks from online forums. He is particularly drawn to investing in technology stocks because he works in the industry. You must explain the principles of diversification and asset allocation appropriate for his profile, compare the characteristics of index funds, ETFs, and individual stocks, and propose an initial portfolio allocation strategy. Address the behavioral risks of concentration in a familiar sector. Present your recommendations to Mr. Chu.",
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
      "You are an investment analyst at Bridgepoint Wealth Management. A client, the Hartley Family Foundation, is a small charitable endowment with $2.4 million in assets. The foundation's investment committee has asked you to review the current portfolio, which is 90% allocated to a single municipal bond fund yielding 3.2% annually. The committee is concerned that returns are insufficient to meet the foundation's 5% annual spending requirement while preserving the principal's purchasing power against a current inflation rate of 3.8%. The foundation has a perpetual time horizon, moderate risk tolerance, and legal restrictions that prohibit investment in tobacco, firearms, or gambling-related securities. You must explain the shortfall risk, recommend a revised asset allocation strategy that balances return needs with the foundation's constraints, and outline a rebalancing policy. Present your analysis and recommendations to the investment committee.",
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

  // ─── HOSPITALITY & TOURISM ───────────────────────────────────────────────────

  // Hospitality Services (HS)
  {
    id: "hs-1",
    event: "Hospitality Services",
    eventCode: "HS",
    cluster: "hospitality",
    situation:
      "You are a guest experience manager at The Whitmore, a 180-room upscale independent hotel in downtown Austin, Texas. The general manager has shared the latest guest satisfaction data: the hotel's overall NPS has dropped from 62 to 41 over the past two quarters. The top three complaints in post-stay surveys are slow check-in times (averaging 9 minutes versus the industry standard of 3 minutes), inconsistent responses to room-service requests, and perceived unfriendliness from front desk staff during peak periods. Occupancy is currently 74%, and the hotel is losing repeat bookings to a nearby competitor that recently installed a mobile check-in and keyless entry system. You must diagnose the root causes of the satisfaction decline, recommend operational and technology improvements, and outline a staff training initiative. Present your improvement plan to the general manager with projected impact on NPS and occupancy.",
    individualPIs: [
      "Explain the importance of customer satisfaction in hospitality",
      "Describe strategies for handling customer complaints",
      "Explain the role of technology in hospitality service delivery",
      "Explain the nature of effective verbal communications",
      "Describe the importance of employee training in hospitality"
    ],
    tdmPIs: [
      "Explain the importance of customer satisfaction in hospitality",
      "Describe strategies for handling customer complaints",
      "Explain the role of technology in hospitality service delivery",
      "Explain the nature of effective verbal communications",
      "Describe the importance of employee training in hospitality",
      "Explain the concept of service recovery",
      "Describe the impact of online reviews on hospitality business performance"
    ],
    judgementQuestions: [
      "How would you implement a mobile check-in solution without alienating guests—particularly older travelers—who prefer face-to-face service?",
      "What specific behaviors or language would you include in a front desk de-escalation and friendliness training module to address the peak-period staff issues?",
      "How would you use the hotel's existing loyalty program data to prioritize which repeat guests to personally reach out to following the NPS decline?"
    ]
  },
  {
    id: "hs-2",
    event: "Hospitality Services",
    eventCode: "HS",
    cluster: "hospitality",
    situation:
      "You are an operations supervisor at Cascade Conference Center, a standalone meetings and events venue in Portland, Oregon, that hosts 300–400 events annually. A corporate client, Nexus Pharmaceuticals, has contracted the venue for a 3-day national sales conference for 220 attendees starting in six weeks. Three days before the event, Nexus's event coordinator informs you that their keynote speaker has cancelled, catering requirements have changed from a buffet to plated service (increasing per-head cost by $38), and they need an additional 40 breakout chairs that are not in your current inventory. You must triage the logistical challenges, identify solutions for each problem within the venue's resources and vendor network, and communicate a revised event plan to the Nexus coordinator. Address how to manage cost adjustments with the client professionally. Present your revised plan.",
    individualPIs: [
      "Explain the nature of event planning and management",
      "Describe strategies for handling unexpected changes in event logistics",
      "Explain the importance of vendor relationship management",
      "Explain the nature of effective verbal communications",
      "Describe the impact of customer service on repeat business"
    ],
    tdmPIs: [
      "Explain the nature of event planning and management",
      "Describe strategies for handling unexpected changes in event logistics",
      "Explain the importance of vendor relationship management",
      "Explain the nature of effective verbal communications",
      "Describe the impact of customer service on repeat business",
      "Explain the concept of contract management in hospitality",
      "Describe the importance of contingency planning in event management"
    ],
    judgementQuestions: [
      "How would you present the $38 per-head catering increase to the client in a way that maintains goodwill while also protecting the venue's margins?",
      "For the keynote speaker vacancy, what is your process for sourcing a replacement in six weeks—what resources or networks would you leverage?",
      "How would you document these last-minute changes to protect both parties legally and ensure all revised terms are confirmed in writing before the event?"
    ]
  },

  // Travel & Tourism (TT)
  {
    id: "tt-1",
    event: "Travel & Tourism",
    eventCode: "TT",
    cluster: "hospitality",
    situation:
      "You are a destination marketing specialist at the Coastal Carolina Tourism Bureau, a regional destination marketing organization (DMO) with an annual budget of $3.8 million. Overnight visitor spending in the region totaled $487 million last year but grew only 1.2%, lagging behind the statewide average of 4.7% growth. Research shows that 68% of current visitors are repeat day-trippers from within a 150-mile radius, while the bureau's strategic goal is to attract higher-spending overnight visitors from markets 300+ miles away. The bureau's board has approved a $900,000 targeted marketing campaign to reach new markets. You must recommend target markets, select appropriate marketing channels, and design a messaging strategy that differentiates Coastal Carolina from competing beach destinations. Include a measurement framework for the campaign. Present your strategy to the bureau's board.",
    individualPIs: [
      "Explain the nature of destination marketing",
      "Describe the nature of target marketing",
      "Explain the role of digital marketing in tourism promotion",
      "Explain the nature of marketing segmentation",
      "Explain the nature of effective verbal communications"
    ],
    tdmPIs: [
      "Explain the nature of destination marketing",
      "Describe the nature of target marketing",
      "Explain the role of digital marketing in tourism promotion",
      "Explain the nature of marketing segmentation",
      "Explain the nature of effective verbal communications",
      "Explain the concept of return on investment in tourism marketing",
      "Describe the importance of partnerships in destination marketing"
    ],
    judgementQuestions: [
      "How would you identify and prioritize which three feeder markets beyond the 150-mile radius offer the highest potential ROI for the campaign budget?",
      "What specific differentiation messages would you develop to separate Coastal Carolina from better-known competing beach destinations like Myrtle Beach or the Outer Banks?",
      "How would you structure partnerships with local hotels, attractions, and airlines to amplify the campaign's reach beyond the $900,000 direct budget?"
    ]
  },
  {
    id: "tt-2",
    event: "Travel & Tourism",
    eventCode: "TT",
    cluster: "hospitality",
    situation:
      "You are a travel consultant at Altitude Travel Agency, a boutique agency specializing in adventure and experiential travel. A couple, Ben and Sophia Marchetti, have come in to plan a 14-day trip to Patagonia, South America, to celebrate their 20th wedding anniversary. Their budget is $18,000 for two people, all-in. Ben is an experienced hiker who wants multi-day trekking in Torres del Paine; Sophia prefers comfortable lodging and cultural experiences and is concerned about altitude, as she has mild asthma. The trip must occur in November. You must develop a detailed 14-day itinerary that balances both clients' preferences, recommend appropriate accommodations across different comfort categories, address Sophia's health considerations, and present a transparent cost breakdown. Present the complete travel proposal to the clients.",
    individualPIs: [
      "Explain the nature of travel agency services",
      "Describe the process of developing a customized travel itinerary",
      "Explain the importance of understanding client needs in travel consulting",
      "Describe the role of travel insurance in trip planning",
      "Explain the nature of effective verbal communications"
    ],
    tdmPIs: [
      "Explain the nature of travel agency services",
      "Describe the process of developing a customized travel itinerary",
      "Explain the importance of understanding client needs in travel consulting",
      "Describe the role of travel insurance in trip planning",
      "Explain the nature of effective verbal communications",
      "Explain the nature of responsible and sustainable tourism",
      "Describe strategies for managing client expectations in travel planning"
    ],
    judgementQuestions: [
      "How would you navigate the tension between Ben's preference for multi-day backcountry trekking and Sophia's preference for comfortable lodging—specifically for the nights during the W Trek?",
      "What specific travel insurance provisions would you recommend given Sophia's asthma, and how would you explain the cost-benefit of comprehensive versus basic coverage?",
      "If the trip costs come in at $21,000 before applying any agency negotiated rates, how would you present options to bring it within the $18,000 budget without significantly diminishing the experience?"
    ]
  },

  // Restaurant & Food Service Management (RFSM)
  {
    id: "rfsm-1",
    event: "Restaurant & Food Service Management",
    eventCode: "RFSM",
    cluster: "hospitality",
    situation:
      "You are an operations consultant hired by Mesa Verde Kitchen, a fast-casual Mexican restaurant with two locations in Albuquerque, New Mexico. Combined annual revenue is $2.1 million, but the restaurant's food cost percentage has risen to 38% over the past six months, significantly above the target of 30%. The owner has noticed high levels of food waste, inconsistent portion sizes across shifts, and a recent spike in inventory shrinkage. The kitchen staff of 14 operates across three shifts with no standardized recipe cards or portion-control tools in use. You must identify the primary drivers of the elevated food cost, recommend a set of operational controls and training practices to bring food cost back to target within 60 days, and outline a waste-reduction program. Present your findings and action plan to the owner with projected financial impact.",
    individualPIs: [
      "Explain the nature of food cost management",
      "Describe the importance of portion control in food service operations",
      "Explain the nature of inventory management in food service",
      "Describe strategies for reducing food waste",
      "Explain the nature of effective verbal communications"
    ],
    tdmPIs: [
      "Explain the nature of food cost management",
      "Describe the importance of portion control in food service operations",
      "Explain the nature of inventory management in food service",
      "Describe strategies for reducing food waste",
      "Explain the nature of effective verbal communications",
      "Explain the concept of standardized recipes in food service management",
      "Describe the financial impact of food cost percentage on restaurant profitability"
    ],
    judgementQuestions: [
      "If the food cost percentage drops from 38% to 30% on $2.1 million in revenue, what is the annual dollar impact on profitability, and how does that justify the cost of new portion-control equipment?",
      "How would you roll out standardized recipe cards and portion-control tools to a kitchen staff that has resisted change in the past?",
      "What inventory counting frequency and methodology—perpetual versus periodic—would you recommend for a two-location fast-casual operation, and why?"
    ]
  },
  {
    id: "rfsm-2",
    event: "Restaurant & Food Service Management",
    eventCode: "RFSM",
    cluster: "hospitality",
    situation:
      "You are a food service director at Lakewood Unified School District, overseeing meal programs at 12 schools serving 6,800 students daily. The district has received a state grant of $140,000 to improve the nutritional quality of school meals and increase student meal participation, which currently stands at 54%—below the state average of 63%. Recent survey data shows the top reasons for non-participation are poor perceived food quality, limited vegetarian options, and long lunch lines averaging 11 minutes. The grant must be spent within one academic year and cannot be used for staffing costs. You must develop a strategic plan to improve meal quality, add menu variety, and streamline service operations within the grant constraints. Present your plan to the district superintendent, including projected participation rate improvements.",
    individualPIs: [
      "Explain the nature of institutional food service management",
      "Describe strategies for improving foodservice customer satisfaction",
      "Explain the importance of menu planning in food service operations",
      "Describe the use of technology in food service management",
      "Explain the nature of effective verbal communications"
    ],
    tdmPIs: [
      "Explain the nature of institutional food service management",
      "Describe strategies for improving foodservice customer satisfaction",
      "Explain the importance of menu planning in food service operations",
      "Describe the use of technology in food service management",
      "Explain the nature of effective verbal communications",
      "Describe the impact of nutritional standards on institutional menu design",
      "Explain the role of student feedback in school foodservice program improvement"
    ],
    judgementQuestions: [
      "How would you allocate the $140,000 across equipment, ingredients, and technology to achieve the highest impact on both quality and service speed?",
      "What specific menu changes would you pilot in the first quarter to test whether vegetarian options drive measurable increases in participation?",
      "How would you engage students directly in the food quality improvement process to increase buy-in and ensure the changes resonate with the actual consumer base?"
    ]
  },

  // Hotel & Lodging Management (HLM)
  {
    id: "hlm-1",
    event: "Hotel & Lodging Management",
    eventCode: "HLM",
    cluster: "hospitality",
    situation:
      "You are a revenue manager at The Palomar Grand, a 240-room full-service hotel affiliated with a national brand in downtown Denver. Your current average daily rate (ADR) is $189, and occupancy is running at 67%, yielding a RevPAR of $126.63. The competitive set's RevPAR index shows The Palomar Grand is at 91.4—meaning you are capturing below your fair share of revenue in the market. Demand data shows strong leisure travel on weekends but weak corporate transient demand Monday through Thursday. The hotel has a loyalty discount floor of $159 for members and a contracted corporate rate of $175 for its top 10 accounts. You must develop a dynamic pricing and demand-generation strategy to improve weekday occupancy by at least 8 percentage points and raise ADR to $198 within the next quarter. Present your revenue strategy to the general manager.",
    individualPIs: [
      "Explain the concept of revenue management in hotel operations",
      "Describe the nature of dynamic pricing in hospitality",
      "Explain the importance of market segmentation in hotel revenue strategy",
      "Explain the concept of RevPAR and its components",
      "Explain the nature of effective verbal communications"
    ],
    tdmPIs: [
      "Explain the concept of revenue management in hotel operations",
      "Describe the nature of dynamic pricing in hospitality",
      "Explain the importance of market segmentation in hotel revenue strategy",
      "Explain the concept of RevPAR and its components",
      "Explain the nature of effective verbal communications",
      "Describe the role of distribution channels in hotel revenue optimization",
      "Explain the impact of rate parity on hotel brand relationships and direct bookings"
    ],
    judgementQuestions: [
      "Given the contracted corporate floor of $175, how would you use non-rate levers—such as breakfast inclusion, parking, or early check-in—to increase the perceived value and attract new corporate accounts?",
      "If your OTA partners are driving most of your weekday bookings at an 18% commission, what strategies would you use to shift volume toward lower-cost direct booking channels?",
      "How would you use the hotel's loyalty program and CRM data to create targeted midweek offers for past leisure guests who might be willing to book a weekend-extension stay through Thursday?"
    ]
  },
  {
    id: "hlm-2",
    event: "Hotel & Lodging Management",
    eventCode: "HLM",
    cluster: "hospitality",
    situation:
      "You are the rooms division manager at Harborview Suites, a 120-room extended-stay hotel in Seattle, Washington. The property recently received a brand quality assurance audit score of 74 out of 100—below the brand's required threshold of 82—triggering a performance improvement plan. The audit identified three critical deficiencies: 18 rooms with HVAC units requiring replacement at an estimated $3,200 per unit, inconsistent housekeeping standards with guestroom cleanliness scores averaging 6.8 out of 10, and a front desk response time to service requests averaging 14 minutes versus the brand standard of 5 minutes. The GM has given you 90 days to bring the score above 82 or face brand sanctions, including potential contract termination. You must prioritize the remediation actions, develop an operational improvement plan, and present a timeline and budget to the GM.",
    individualPIs: [
      "Explain the nature of hotel quality assurance programs",
      "Describe the importance of housekeeping standards in hotel operations",
      "Explain the concept of service response time in lodging management",
      "Describe the role of capital expenditure planning in hotel maintenance",
      "Explain the nature of effective verbal communications"
    ],
    tdmPIs: [
      "Explain the nature of hotel quality assurance programs",
      "Describe the importance of housekeeping standards in hotel operations",
      "Explain the concept of service response time in lodging management",
      "Describe the role of capital expenditure planning in hotel maintenance",
      "Explain the nature of effective verbal communications",
      "Explain the importance of brand standards compliance in franchised hotel operations",
      "Describe the impact of preventive maintenance programs on guest satisfaction scores"
    ],
    judgementQuestions: [
      "Given the 90-day timeline, how would you sequence the three remediation priorities—HVAC, housekeeping, and response time—to achieve the fastest impact on the audit score?",
      "Replacing 18 HVAC units at $3,200 each totals $57,600. How would you build the business case for this capital expenditure to an owner who is reluctant to spend?",
      "What specific housekeeping inspection protocol and accountability system would you implement to move cleanliness scores from 6.8 to at least 8.5 within 60 days?"
    ]
  }
];
