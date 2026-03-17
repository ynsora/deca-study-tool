import type { RoleplayScenario } from "./types";

export const scenariosMarketing: RoleplayScenario[] = [
  // ─── EXISTING (EXPANDED) ─────────────────────────────────────────────────────

  // Buying and Merchandising (BM)
  {
    id: "bm-1",
    event: "Buying and Merchandising",
    eventCode: "BM",
    cluster: "marketing",
    situation:
      "You are a junior buyer at Crestwood Retail Group, a mid-sized specialty home-goods chain with 42 locations across the Midwest. The company generates approximately $94 million in annual retail revenue, and your kitchenware category accounts for roughly 11% of total sales. The category manager has asked you to evaluate a proposal from a new vendor, Lumina Home, which offers a line of sustainable bamboo kitchenware including cutting boards, utensil sets, and serving bowls. Lumina is certified by the Forest Stewardship Council and claims a defect rate below 2%, which is significantly better than industry standard.\n\nLumina is offering an initial order at $18 per unit with a suggested retail price of $39.99, promising a 60-day lead time and a minimum order quantity of 500 units per SKU across six SKUs in the line. Your store currently carries a competing line from EcoNest at $22 per unit with a 45-day lead time and no MOQ requirements. Last quarter, the EcoNest line generated $112,000 in gross sales across all 42 locations but had a 14% return rate driven primarily by cracking and splitting complaints, costing the company an estimated $9,800 in return-processing overhead.\n\nSwitching to Lumina would reduce unit cost by $4.00 and, at $39.99 retail, yield an initial markup of 54.9% compared to EcoNest's 44.9%—a meaningful margin improvement. However, committing 3,000 units ($54,000 at cost) to an unproven vendor carries real risk: Lumina has no track record with a retailer of Crestwood's scale, the 60-day lead time is 15 days longer than EcoNest's, and seasonal timing means any stockout during the Q4 holiday window would be costly.\n\nYou must evaluate the new vendor's proposal, assess the financial implications of switching suppliers, and recommend whether Crestwood should adopt, pilot, or reject the Lumina Home line. Present your recommendation to the category manager with margin analysis, risk assessment, and a proposed decision timeline that accounts for holiday inventory planning deadlines.",
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
      "You are an assistant buyer at Pinnacle Sportswear, a regional athletic apparel retailer with 18 stores in the Southeast. The company targets fitness-conscious adults aged 18–45 and positions itself as a mid-tier alternative to Nike Factory and Under Armour outlet stores. Pinnacle's total annual revenue is approximately $31 million, and the running-apparel category—comprising shorts, tights, tops, and sports bras—represents about 19% of the business. The buying director has flagged that this category is experiencing a 22% decline in sell-through compared to the same period last year.\n\nInventory levels are at 140% of target, creating cash-flow pressure and excess floor space costs estimated at $3,200 per store per month in opportunity cost. A key vendor, SwiftTrack Athletics, has offered a markdown co-op program that would reimburse 50% of any price reductions taken on their line through the end of the quarter. However, accepting the co-op requires committing to a forward buy of $85,000 in new SwiftTrack spring merchandise, which would further strain open-to-buy dollars already running at just 62% of plan.\n\nA root-cause analysis suggests the inventory build-up stems from three compounding factors: an aggressive spring buy made before two nearby Planet Fitness locations opened, a delayed markdown response in weeks 6–8 of the season, and an over-assortment of colorways that diluted sell-through velocity. Consumer survey data collected in-store shows that 44% of customers who browsed the running section left without purchasing, citing price as the primary barrier—suggesting a markdown will likely convert latent demand.\n\nYou must analyze the current inventory situation, weigh the risks and benefits of the co-op agreement, and propose a merchandising action plan—including pricing adjustments, floor presentation changes, and promotional tactics—to improve category performance. Present your plan to the buying director with financial justification and a projected timeline for inventory normalization.",
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
  {
    id: "bm-3",
    event: "Buying and Merchandising",
    eventCode: "BM",
    cluster: "marketing",
    situation:
      "You are a merchandise planner at Harborview Home Furnishings, a specialty retail chain with 29 stores concentrated in the Pacific Northwest and Northern California. The company generates $68 million in annual revenue, and its outdoor furniture category—patio dining sets, lounge chairs, umbrellas, and accessories—contributes 16% of total sales with a historically strong Q2 seasonal peak. This year, however, your Q1 buy was placed 20% over the prior year plan in anticipation of strong post-pandemic outdoor living demand, and an unusually wet and cold April–May has suppressed consumer purchasing, leaving you with $2.1 million at cost in unsold outdoor inventory heading into July.\n\nYour current open-to-buy for the fall transition category—indoor accent furniture and décor—is negative by $340,000 because the outdoor inventory overhang is consuming planned OTB dollars. Three key fall vendors, including Pacific Ridge Furniture and Coastal Living Co., have confirmed order deadlines within the next 14 days, and missing those deadlines risks losing preferred vendor pricing and shelf-placement priority for the holiday season. The buying director is pushing for aggressive outdoor markdowns to free up OTB, but the finance team is resisting markdowns deeper than 25% due to margin protection targets.\n\nA competitive analysis shows that two regional competitors—HomeStyle Depot and Outdoor World—have already taken 30–40% markdowns on comparable inventory, suggesting that waiting will further erode Harborview's ability to move product at any margin. At the same time, a flash sale email sent two weeks ago to 84,000 loyalty subscribers offering 20% off outdoor furniture drove a 3.1x lift in category transactions over the following 48 hours, demonstrating meaningful price elasticity.\n\nYou must develop a markdown and inventory liquidation strategy for the outdoor category that balances margin protection with sell-through urgency, while simultaneously freeing enough OTB to place the critical fall orders. Present your recommendation to the buying director with scenario analysis comparing 25%, 35%, and 45% markdown depths and their projected impact on OTB recovery and fall season readiness.",
    individualPIs: [
      "Explain the concept of open-to-buy",
      "Develop strategies to move slow-moving merchandise",
      "Explain the importance of merchandise planning",
      "Assess the profitability of channel decisions",
      "Explain the nature of the buying function"
    ],
    tdmPIs: [
      "Explain the concept of open-to-buy",
      "Develop strategies to move slow-moving merchandise",
      "Explain the importance of merchandise planning",
      "Assess the profitability of channel decisions",
      "Explain the nature of the buying function",
      "Calculate markdown percentage",
      "Explain the concept of gross margin"
    ],
    judgementQuestions: [
      "How would you communicate the markdown strategy to store managers to ensure consistent execution across all 29 locations?",
      "At what sell-through rate would you halt the markdown and shift remaining outdoor inventory to a clearance outlet or liquidator, and what are the brand implications of that channel?",
      "How should the over-buy experience this season change the way you construct the outdoor furniture buy for next year—what forecasting or OTB safeguards would you put in place?"
    ]
  },

  // Advertising Campaign (ADC)
  {
    id: "adc-1",
    event: "Advertising Campaign",
    eventCode: "ADC",
    cluster: "marketing",
    situation:
      "You are an account executive at Meridian Creative Agency, a full-service advertising firm based in Austin, Texas. Your client, Cascade Brewing Company, is a regional craft brewery operating three taprooms in the Austin metro area and distributing to approximately 220 retail accounts across Texas. Cascade generates $8.4 million in annual revenue but has seen flat sales growth for two consecutive years despite the craft beer market growing at 6.2% annually in Texas. A brand perception survey conducted by your agency found that 38% of respondents in the 25–40 age demographic—Cascade's primary target—correctly identified Cascade as a Texas craft brewery, compared to a 61% awareness rate for its top competitor, Lone Star Craft Co.\n\nCascade's marketing budget for the upcoming fiscal year is $320,000, a 40% increase over the prior year driven by the owners' desire for a breakthrough awareness campaign. The brand's current media mix is heavily weighted toward event sponsorships (45%) and point-of-sale materials (30%), with minimal investment in digital channels. Consumer research indicates that Cascade's target demographic spends an average of 4.2 hours per day on digital media, with heavy usage of Instagram, YouTube pre-roll, and Spotify. The brand has 14,000 Instagram followers but achieves only a 1.1% average engagement rate, well below the 3.4% industry benchmark for craft beverage brands.\n\nThe brewery has two significant product launches planned: a new sessionable lager targeting mainstream beer drinkers in Q1, and a barrel-aged stout limited release timed for the holiday season. The owners want the campaign to elevate overall brand awareness, support both product launches, and drive taproom traffic—three objectives that require careful budget sequencing and audience segmentation across a 12-month campaign horizon.\n\nYou must develop a comprehensive advertising campaign strategy for Cascade Brewing, including a media mix recommendation, creative brief outline, budget allocation by quarter and channel, and a measurement framework with specific KPIs. Present your campaign proposal to the brewery's ownership team, addressing how each element of the plan advances Cascade's awareness and revenue goals.",
    individualPIs: [
      "Explain the nature of advertising campaigns",
      "Explain the concept of media planning",
      "Describe the use of social media in marketing",
      "Identify the impact of promotional activities on sales",
      "Explain the nature of marketing metrics"
    ],
    tdmPIs: [
      "Explain the nature of advertising campaigns",
      "Explain the concept of media planning",
      "Describe the use of social media in marketing",
      "Identify the impact of promotional activities on sales",
      "Explain the nature of marketing metrics",
      "Explain the concept of target audience",
      "Describe the role of creative strategy in advertising effectiveness"
    ],
    judgementQuestions: [
      "How would you allocate the $320,000 budget across channels and quarters to support both product launches while building sustained brand awareness?",
      "What creative concept or campaign theme would resonate with the 25–40 Texas craft beer demographic, and how would you ensure consistency across digital, event, and POS touchpoints?",
      "If the Q1 lager launch campaign achieves strong impressions but low taproom traffic lift, what would you adjust in the Q2 plan?"
    ]
  },
  {
    id: "adc-2",
    event: "Advertising Campaign",
    eventCode: "ADC",
    cluster: "marketing",
    situation:
      "You are a marketing director at Brightfield Learning Centers, a private tutoring franchise with 34 locations across the Mid-Atlantic region. Each center serves students in grades K–12 with individualized academic support programs, and the average client spends $4,800 per academic year. Enrollment has declined 11% over the past two years as competitors including Kumon, Sylvan Learning, and online platforms like Khan Academy and Varsity Tutors have expanded market presence. A parent survey found that only 29% of parents in target zip codes were aware of Brightfield, compared to 54% for Sylvan in the same markets.\n\nThe franchise association has approved a regional advertising fund of $480,000 for the upcoming school year, replacing the previous model of decentralized, location-level spending that produced inconsistent messaging and minimal brand-building. The board wants a unified campaign that runs September through May, with spending peaks aligned to two key enrollment windows: the back-to-school season (August–September) and the post-winter-break motivation period (January–February). The primary target audience is parents of children ages 6–17 with household incomes above $85,000 who live within a 7-mile radius of a Brightfield location.\n\nResearch shows that this audience is most reachable through Facebook and Instagram (particularly parent-focused groups and interest segments), local streaming TV platforms, and community-based sponsorships such as school athletic programs and parent-teacher organization events. The campaign must communicate Brightfield's differentiated value proposition—certified teachers, personalized learning plans, and a proprietary progress-tracking dashboard—against competitors who largely advertise on price.\n\nYou must develop a full advertising campaign strategy including creative positioning, channel plan, budget breakdown, enrollment conversion tactics such as free assessment offers, and a reporting cadence to evaluate performance at each enrollment window. Present your proposal to the franchise association board.",
    individualPIs: [
      "Explain the nature of advertising campaigns",
      "Describe the nature of target marketing",
      "Explain the concept of unique selling proposition",
      "Explain the use of promotional mix elements",
      "Explain the nature of marketing metrics"
    ],
    tdmPIs: [
      "Explain the nature of advertising campaigns",
      "Describe the nature of target marketing",
      "Explain the concept of unique selling proposition",
      "Explain the use of promotional mix elements",
      "Explain the nature of marketing metrics",
      "Explain the concept of media planning",
      "Identify the impact of promotional activities on sales"
    ],
    judgementQuestions: [
      "How would you message Brightfield's value proposition to compete against free digital alternatives like Khan Academy without directly attacking those platforms?",
      "What enrollment conversion tactic—such as a free diagnostic assessment or a tuition discount for early sign-ups—would you prioritize in the back-to-school push, and how would you track its attribution?",
      "If mid-campaign data shows the Facebook ads are driving awareness but not converting to consultations, what adjustments to the creative or landing-page experience would you recommend?"
    ]
  },

  // Apparel & Accessories Marketing (AAM)
  {
    id: "aam-1",
    event: "Apparel & Accessories Marketing",
    eventCode: "AAM",
    cluster: "marketing",
    situation:
      "You are a brand marketing manager at Verdure Apparel, a sustainable women's activewear brand headquartered in Portland, Oregon. The company launched four years ago and has grown to $6.2 million in annual direct-to-consumer revenue, primarily through its e-commerce website and two company-owned retail locations. Verdure's garments are manufactured from recycled ocean plastics and certified organic cotton, with price points ranging from $58 for sports bras to $148 for full-length leggings. The brand's sustainability story has resonated strongly with its core customer—environmentally conscious women aged 28–42—but growth has plateaued at 4% year-over-year as the sustainable activewear segment becomes increasingly crowded.\n\nA competitive audit identifies four direct competitors that have entered the sustainable activewear space in the past 18 months, including Patagonia's activewear expansion and two well-funded DTC startups that have raised a combined $42 million in venture capital and are aggressively spending on paid social media. Verdure's customer acquisition cost has risen 34% in 18 months to $68 per new customer, eroding the $190 average order value. The brand's repeat purchase rate of 41% is a key strength—well above the 28% DTC apparel industry average—suggesting strong product satisfaction but limited new-customer pipeline.\n\nThe VP of Marketing has identified two strategic priorities for the upcoming year: expanding into the wholesale channel through specialty outdoor and wellness retailers to reduce dependence on paid acquisition, and launching a new accessories line—yoga bags, water bottles, and headwear—to increase average order value and attract new customers. Initial wholesale interest has come from REI, which requested a vendor application and line sheet, and from Athleta's wholesale portal, which requires minimum opening orders of $15,000 per door.\n\nYou must develop a marketing strategy that supports both the wholesale channel expansion and the accessories line launch, addresses the competitive pressure on digital advertising costs, and preserves Verdure's premium sustainable brand positioning. Present your recommendations to the VP of Marketing with budget allocation and a 12-month roadmap.",
    individualPIs: [
      "Explain the nature of apparel and accessories marketing",
      "Describe the impact of brand on apparel marketing",
      "Explain the concept of channel management",
      "Identify the impact of promotional activities on sales",
      "Explain the nature of marketing strategies"
    ],
    tdmPIs: [
      "Explain the nature of apparel and accessories marketing",
      "Describe the impact of brand on apparel marketing",
      "Explain the concept of channel management",
      "Identify the impact of promotional activities on sales",
      "Explain the nature of marketing strategies",
      "Explain the importance of customer relationship management",
      "Describe the use of social media in marketing"
    ],
    judgementQuestions: [
      "How would you structure wholesale pricing for REI and Athleta to prevent those retail prices from undercutting your DTC e-commerce pricing and cannibalizing your highest-margin channel?",
      "What marketing tactics would you use to launch the accessories line in a way that attracts new customers while also driving accessories add-ons from your existing 41% repeat-purchase base?",
      "If after six months the wholesale channel is growing but the DTC conversion rate is declining as a result of traffic being redirected to retail partners, how would you rebalance your strategy?"
    ]
  },
  {
    id: "aam-2",
    event: "Apparel & Accessories Marketing",
    eventCode: "AAM",
    cluster: "marketing",
    situation:
      "You are a product marketing manager at Stratum Menswear, a men's contemporary clothing brand selling through 18 specialty retail partners and its own e-commerce site. The brand targets professional men aged 30–50 and is known for slim-fit dress shirts, chinos, and blazers in a $95–$280 price range. Annual revenue is $11.3 million, with 62% coming from wholesale and 38% from DTC. The brand director has commissioned consumer research showing that Stratum's current customer is aging: the average buyer is now 44 years old, up from 38 five years ago, indicating that the brand is not successfully recruiting younger professional men aged 28–36.\n\nFocus groups with men aged 28–36 reveal that Stratum is perceived as 'their dad's brand'—too formal, limited in casual options, and absent from the digital channels and communities where younger professionals discover new brands. This cohort over-indexes on Reddit's men's fashion forums, TikTok style content, and sustainable/ethical fashion considerations. They are willing to pay premium prices—averaging $145 per apparel item across comparable purchases—but demand versatility, with strong preference for 'dress-casual' hybrid pieces that work in office and social settings.\n\nThe brand director wants to launch a 12-piece 'Stratum Flex' capsule collection targeting the 28–36 cohort, featuring stretch-performance dress shirts, tapered jogger trousers, and versatile zip blazers at price points of $95–$195. A $95,000 launch budget has been approved for a six-month go-to-market campaign. The brand has no TikTok presence and only 8,200 Instagram followers with an aging engagement demographic.\n\nYou must develop a launch marketing strategy for Stratum Flex that repositions the brand with younger male professionals, builds digital presence in the channels where the target cohort lives, and drives initial sell-through without alienating the existing core customer base. Present your strategy to the brand director, including influencer approach, content plan, channel selection, and sales projections.",
    individualPIs: [
      "Explain the nature of apparel and accessories marketing",
      "Describe the nature of target marketing",
      "Describe the use of social media in marketing",
      "Explain the concept of brand repositioning",
      "Identify the impact of promotional activities on sales"
    ],
    tdmPIs: [
      "Explain the nature of apparel and accessories marketing",
      "Describe the nature of target marketing",
      "Describe the use of social media in marketing",
      "Explain the concept of brand repositioning",
      "Identify the impact of promotional activities on sales",
      "Explain the use of influencer marketing in brand strategy",
      "Explain the nature of marketing metrics"
    ],
    judgementQuestions: [
      "How would you build TikTok and digital presence from near-zero in a six-month window on a $95,000 budget, and what type of creators would you partner with?",
      "What risk does a youth-skewing capsule collection pose to Stratum's existing wholesale partners who stock primarily for the 38–50 demographic, and how would you manage those relationships?",
      "If the Stratum Flex launch succeeds in recruiting the younger cohort but generates negative social media reactions from existing customers who feel the brand is 'selling out,' how would you respond?"
    ]
  },

  // Automotive Services Marketing (ASM)
  {
    id: "asm-1",
    event: "Automotive Services Marketing",
    eventCode: "ASM",
    cluster: "marketing",
    situation:
      "You are the marketing director at Redline Auto Service, a regional chain of 11 full-service automotive repair and maintenance shops located in the greater Columbus, Ohio metro area. The chain generates $18.7 million in annual revenue across its locations, with average revenue per repair order of $285. Redline competes primarily against Jiffy Lube, Midas, and Firestone Complete Auto Care for routine maintenance customers, and against independent mechanics for larger repair work. Customer retention data shows that 58% of customers return for a second visit within 12 months, but only 31% make a third visit—indicating a significant loyalty cliff after the second service appointment.\n\nA customer satisfaction survey found that 74% of customers rate their service experience as 'good' or 'excellent,' but only 22% say they would proactively recommend Redline to a friend or family member—a substantial gap between satisfaction and advocacy. Online review analysis shows Redline has an average Google rating of 4.1 stars across all locations with 1,840 total reviews, compared to a local independent competitor, Buckeye Auto Works, which has a 4.7-star average across 3,200 reviews despite serving roughly one-third of Redline's customer volume. The operations manager believes the rating gap is partly attributable to Redline's inconsistent post-service follow-up process.\n\nThe owner has approved a $140,000 annual marketing budget and wants a strategy focused on three outcomes: improving the third-visit retention rate from 31% to 45% within 12 months, growing the Google review volume and average rating at all locations, and launching a fleet service B2B program targeting local businesses with 10 or more company vehicles. There are currently 340 businesses within a 15-mile radius of Redline locations that meet the fleet service target profile.\n\nYou must develop a comprehensive marketing strategy addressing customer retention, online reputation, and B2B fleet acquisition. Present your plan to the owner with budget allocation, specific program descriptions, expected outcomes, and a measurement framework to track progress against all three goals.",
    individualPIs: [
      "Explain the nature of automotive services marketing",
      "Explain the importance of customer relationship management",
      "Explain the concept of customer lifetime value",
      "Describe strategies for generating customer referrals",
      "Explain the nature of marketing strategies"
    ],
    tdmPIs: [
      "Explain the nature of automotive services marketing",
      "Explain the importance of customer relationship management",
      "Explain the concept of customer lifetime value",
      "Describe strategies for generating customer referrals",
      "Explain the nature of marketing strategies",
      "Explain the nature of business-to-business marketing",
      "Describe the use of digital marketing in service businesses"
    ],
    judgementQuestions: [
      "What specific touchpoints in the post-service customer journey—such as follow-up texts, review request emails, or next-service reminders—would you standardize across all 11 locations to close the satisfaction-to-advocacy gap?",
      "How would you structure a fleet service pricing model that is attractive to local businesses with 10–30 vehicles while still protecting Redline's per-repair-order margins?",
      "If one Redline location is consistently underperforming on Google ratings despite the new follow-up program, what diagnostic process would you use to identify and fix the root cause?"
    ]
  },
  {
    id: "asm-2",
    event: "Automotive Services Marketing",
    eventCode: "ASM",
    cluster: "marketing",
    situation:
      "You are a marketing consultant hired by EV Ready Service Centers, a startup automotive service company preparing to open its first three locations in the Denver metropolitan area. The company is positioning itself exclusively as a maintenance and repair specialist for electric vehicles and hybrids, targeting the rapidly growing EV ownership base in Colorado—currently 94,000 registered EVs, up 38% from the prior year. EV Ready's services include battery health diagnostics, charging system repair, software updates, regenerative braking service, and general EV maintenance, with average ticket values estimated at $195–$340.\n\nThe EV service market in Denver is highly fragmented: dealerships handle most EV warranty work but have long wait times averaging 12 days for service appointments; independent mechanics rarely service EVs due to training and tooling costs; and Tesla's own service centers have a 9-day average appointment wait. EV Ready has identified a clear service gap and plans to hire ASE-certified technicians with manufacturer-specific EV training. The three locations will be in Englewood, Aurora, and Highlands Ranch—areas with high EV ownership density based on DMV registration data.\n\nThe company has a $180,000 marketing budget for the first year across all three locations and is targeting 120 repair orders per location per month by month six, which would represent approximately $2.9 million in annualized revenue. Target customers are EV owners aged 30–55 with household incomes above $90,000 who prioritize sustainability and convenience. Research shows this demographic is highly active on online EV owner forums, Reddit's r/electricvehicles community, and YouTube EV review channels.\n\nYou must develop a pre-opening and first-year marketing strategy for EV Ready that builds brand awareness among Denver-area EV owners, establishes trust and credibility in a new service category, and drives appointment bookings to hit the month-six volume target. Present your strategy to the founding team with channel recommendations, budget allocation, partnership opportunities, and a customer acquisition cost projection.",
    individualPIs: [
      "Explain the nature of automotive services marketing",
      "Identify market opportunities for service businesses",
      "Describe the nature of target marketing",
      "Explain the importance of building brand credibility",
      "Explain the nature of marketing strategies"
    ],
    tdmPIs: [
      "Explain the nature of automotive services marketing",
      "Identify market opportunities for service businesses",
      "Describe the nature of target marketing",
      "Explain the importance of building brand credibility",
      "Explain the nature of marketing strategies",
      "Describe the use of digital marketing in service businesses",
      "Explain the nature of marketing metrics"
    ],
    judgementQuestions: [
      "How would you establish EV Ready's technical credibility with skeptical EV owners who have only trusted dealerships with their vehicles, and what proof points or certifications would you feature most prominently?",
      "What partnerships—with EV charging networks, local EV clubs, or workplace charging programs—would provide the most cost-effective customer acquisition in year one?",
      "If after three months one location is hitting 90 repair orders per month but another is only at 40, what location-specific marketing tactics would you deploy to close the gap?"
    ]
  },

  // Fashion Merchandising Promotion Plan (FMPP)
  {
    id: "fmpp-1",
    event: "Fashion Merchandising Promotion Plan",
    eventCode: "FMPP",
    cluster: "marketing",
    situation:
      "You are the merchandising and marketing manager at Lune Boutique, an independent women's fashion retailer with two locations in the Charlotte, North Carolina metro area. Lune specializes in contemporary casual and workwear for women aged 27–45, with price points ranging from $48 for accessories to $320 for blazers and coats. Annual revenue across both locations is approximately $2.4 million, with a strong in-store customer base but a nascent e-commerce presence generating only $180,000—about 7.5% of total revenue. The fall season is the company's highest-revenue period, historically accounting for 38% of annual sales.\n\nThe owner wants a comprehensive fall merchandising and promotional plan to drive a 15% revenue increase compared to the prior fall season, which generated $892,000. The plan must address the in-store visual merchandising calendar, a coordinated promotional strategy across email, Instagram, and in-store events, and a strategy to accelerate e-commerce growth as a secondary channel. A key seasonal opportunity is the store's annual 'Fall Edit' launch event, which in prior years has drawn 80–120 customers and generated approximately $18,000 in same-day sales from a single evening event.\n\nMerchandising for fall includes 14 new vendor lines arriving in three delivery waves between August 1 and September 15. Key assortment highlights include an exclusive local-designer collaboration with Charlotte-based Reverie Studio, a capsule collection of 22 pieces at retail prices of $95–$265, and a curated selection of transitional layering pieces that Lune's core customer has repeatedly requested based on loyalty program survey data. The Reverie collaboration is a first for the boutique and represents a potential PR and social media story.\n\nYou must develop a complete fall merchandising promotion plan covering the August–November selling season. Your plan should include a visual merchandising calendar, a promotional events schedule, social media and email marketing tactics, e-commerce growth tactics, and financial projections tying each initiative to the 15% revenue growth goal. Present the plan to the owner.",
    individualPIs: [
      "Explain the nature of fashion merchandising",
      "Develop a promotional plan for a fashion retail business",
      "Explain the use of visual merchandising in fashion retail",
      "Describe the role of product assortment in fashion marketing",
      "Identify the impact of promotional activities on sales"
    ],
    tdmPIs: [
      "Explain the nature of fashion merchandising",
      "Develop a promotional plan for a fashion retail business",
      "Explain the use of visual merchandising in fashion retail",
      "Describe the role of product assortment in fashion marketing",
      "Identify the impact of promotional activities on sales",
      "Explain the importance of omnichannel retail strategy",
      "Explain the concept of customer relationship management in retail"
    ],
    judgementQuestions: [
      "How would you merchandise the three delivery waves across the two store locations to maintain newness and excitement throughout the August–November window without creating a cluttered floor presentation?",
      "What specific social media and PR strategy would maximize the impact of the Reverie Studio collaboration launch, and how would you involve the designer in the promotional storytelling?",
      "If the Fall Edit launch event is rained out or has low attendance, what contingency plan would you activate to capture the anticipated $18,000 in event-driven revenue through other channels?"
    ]
  },
  {
    id: "fmpp-2",
    event: "Fashion Merchandising Promotion Plan",
    eventCode: "FMPP",
    cluster: "marketing",
    situation:
      "You are the director of merchandising at Crossroads Denim Co., a specialty denim and casual apparel retailer with eight stores in the Texas Hill Country and San Antonio markets. The brand targets men and women aged 22–40 with a Western-contemporary aesthetic and price points of $68–$195 for denim, $45–$130 for tops, and $120–$280 for outerwear. Last spring season underperformed plan by 14%, with $1.1 million in aged inventory—primarily spring tops and transitional dresses—carrying forward into summer and consuming 28% of the summer OTB budget for markdowns.\n\nThe buying team has completed the fall assortment plan, which emphasizes the company's strongest categories: denim bottoms (32% of planned buys), Western-inspired outerwear (18%), and graphic tees (14%). Three major merchandise stories are planned: a 'Texas Modern' denim collection featuring exclusive wash treatments developed with manufacturing partner Lone Star Mills, a heritage flannel program arriving in early October, and a holiday gifting assortment of accessories including leather belts, wallets, and jewelry from local artisan vendors. Total planned fall receipts are $1.84 million at cost.\n\nThe marketing budget for the fall promotional plan is $92,000 across all eight stores and digital channels. Consumer research indicates that Crossroads' core customer is highly influenced by local country music events and the Texas festival circuit, making event-based marketing and artist partnerships a particularly relevant channel. The brand has 31,000 Instagram followers and a 22,000-person email list, but email open rates have declined from 28% to 19% over the past year, suggesting list fatigue or relevance issues.\n\nYou must develop a fall merchandising promotion plan that includes a merchandise presentation calendar, a promotional event strategy leveraging the Texas music and festival culture, a digital marketing plan to re-engage the email list, and a strategy to prevent the aged-inventory problem from recurring by embedding planned markdown triggers into the seasonal calendar. Present the plan to the ownership group.",
    individualPIs: [
      "Explain the nature of fashion merchandising",
      "Develop a promotional plan for a fashion retail business",
      "Develop strategies to move slow-moving merchandise",
      "Explain the use of visual merchandising in fashion retail",
      "Identify the impact of promotional activities on sales"
    ],
    tdmPIs: [
      "Explain the nature of fashion merchandising",
      "Develop a promotional plan for a fashion retail business",
      "Develop strategies to move slow-moving merchandise",
      "Explain the use of visual merchandising in fashion retail",
      "Identify the impact of promotional activities on sales",
      "Explain the concept of open-to-buy",
      "Explain the nature of marketing metrics"
    ],
    judgementQuestions: [
      "What specific markdown trigger rules—based on sell-through rate and weeks-on-floor metrics—would you embed into the fall seasonal calendar to prevent a repeat of last spring's aged inventory problem?",
      "How would you structure a partnership with a Texas country music artist or festival to authentically represent the Crossroads brand without appearing forced or inauthentic to the core customer?",
      "If the heritage flannel program arrives two weeks late due to a production delay, what backup merchandise stories or floor presentation adjustments would you deploy to maintain fall excitement in October?"
    ]
  },

  // Food Marketing (FMK)
  {
    id: "fmk-1",
    event: "Food Marketing",
    eventCode: "FMK",
    cluster: "marketing",
    situation:
      "You are a brand manager at Golden Harvest Foods, a regional specialty food manufacturer based in the Pacific Northwest. The company produces artisan hot sauces and condiments under its flagship 'Golden Harvest' label and a secondary line, 'Coastal Heat,' with annual combined revenue of $4.6 million. Products are distributed through natural and specialty grocery chains across a five-state Pacific Northwest territory, and DTC online sales account for a modest $310,000. The VP of Sales is pursuing a listing at FreshMart, a national grocery retailer with 1,100 stores across 38 states, which would represent the company's first national retail partnership and a potential 3–5x revenue growth opportunity.\n\nFreshMart has expressed interest in listing three SKUs from the Golden Harvest line—Original, Smoky Chipotle, and Habanero Mango—but requires a slotting fee of $28,000 upfront, a promotional calendar commitment including two price promotions per year at a minimum of 20% off retail, and compliance with FreshMart's private-label cost benchmarks which effectively cap the retailer's cost to no more than $3.80 per unit on a 12-ounce bottle. Golden Harvest's current cost of goods on the relevant SKUs ranges from $2.10 to $2.45 per unit, giving margin room to meet the cap, but the slotting fee and promotional requirements will meaningfully compress Year 1 profitability.\n\nOperational risk is significant. Golden Harvest currently produces approximately 180,000 units annually on a co-manufacturing arrangement with Pacific Coast Provisions, which has capacity for an additional 220,000 units. Serving 1,100 FreshMart stores at a target velocity of just 2 units per store per week would require 114,400 units annually—within co-man capacity, but requiring a supply chain buildout for national distribution logistics, UPC barcode compliance, and FreshMart's mandatory electronic data interchange system. Capital requirements for the distribution buildout are estimated at $65,000.\n\nYou must evaluate whether the FreshMart opportunity is financially viable on a two-year horizon, outline a launch strategy including the promotional calendar and distribution buildout plan, and assess the operational implications of the scale-up. Present your recommendation to the VP of Sales, including a Year 1 and Year 2 pro forma income statement for the FreshMart channel and a go/no-go recommendation.",
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
      "You are a marketing coordinator at Sunrise Bakery Co., a family-owned commercial bakery that supplies artisan bread and pastry products to 140 independent restaurants and cafés in the Denver metro area. The company was founded in 2008 and has built a reputation for hand-crafted sourdoughs, specialty rolls, and seasonal pastries that command a 15–20% premium over mass-produced alternatives from Sysco and US Foods. Annual revenue is $2.2 million, with the company employing 24 people across production, delivery, and sales. Customer relationships are managed personally by two account representatives who each cover 70 accounts.\n\nOver the past 12 months, Sunrise has lost 18 restaurant accounts—a 9% attrition rate—as clients shift to national foodservice distributors offering lower prices and single-vendor ordering convenience. Three of the lost accounts cited pricing, while nine cited the simplicity of consolidating all food and supply orders with a single distributor. Six accounts were lost due to restaurant closures. Exit interviews with pricing-sensitive customers reveal that Sunrise is typically 8–14% more expensive per unit than comparable distributor options, a gap the sales team has struggled to justify in conversations with cost-conscious operators facing tight margins.\n\nThe owner recognizes that Sunrise cannot win a price war against national distributors and must compete on differentiation, relationship, and value-added services. Key differentiators include same-day delivery for orders placed before 10 a.m., custom product development for signature menu items, and the ability to produce small runs of specialty items that national distributors cannot accommodate. A pilot program offering three accounts a free custom bread-development consultation resulted in two of those accounts increasing their weekly order volume by an average of 31%.\n\nYou have been asked to design a customer retention and value-communication strategy with a budget of $18,000 for the next six months. Your plan must include at least three distinct retention tactics, a value-framing approach for conversations with price-sensitive customers, and measurable success metrics. Present your plan to the owner with ROI justification for the $18,000 budget.",
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
  {
    id: "fmk-3",
    event: "Food Marketing",
    eventCode: "FMK",
    cluster: "marketing",
    situation:
      "You are a brand development manager at Hearthstone Foods, a consumer packaged goods company that produces refrigerated meal-prep kits and ready-to-heat entrees distributed through grocery retail in the Southeast. The company's flagship product line, 'Hearthstone Chef Series,' consists of 12 SKUs of premium meal-prep kits retailing at $11.99–$15.99 for a two-serving kit. After three years in market, the line generates $7.8 million in annual retail sales across 340 grocery stores. However, the category manager at Hearthstone's largest retail partner, Southeast Fresh Markets (SFM), has informed you that one of your direct competitors, FreshTable, is pitching SFM an exclusive limited-time promotion that would give FreshTable a second facing in the meal kit refrigerated case—space currently occupied by one of Hearthstone's lower-velocity SKUs.\n\nSFM's category review is scheduled in six weeks. If Hearthstone loses the second facing, it is estimated to reduce velocity by 12–18% as shopper visibility declines. SFM's buyer has provided velocity data showing that Hearthstone's three top-selling SKUs—Lemon Herb Chicken, Teriyaki Salmon, and Southwest Veggie Bowl—account for 71% of the line's volume, while the bottom four SKUs together generate only 9% of sales and are clearly underperforming. The buyer has suggested that Hearthstone consider rationalizing its SFM assortment to three to five high-velocity SKUs in exchange for better placement and a co-op promotional investment, rather than defending the existing 12-SKU breadth.\n\nConsumer research conducted last quarter found that meal kit shoppers at SFM cite three top purchase drivers: taste quality (87%), ease of preparation (74%), and ingredient freshness (68%). Hearthstone scores well on the first two but lags FreshTable on perceived ingredient freshness—a perception gap that may be addressable through packaging changes and in-store sampling. An in-store sampling program pilot at four SFM locations over four weekends drove a 22% velocity lift in those stores during the sampling period.\n\nYou must develop a category review defense strategy for SFM that addresses the SKU rationalization question, proposes a co-op promotional investment to strengthen the partnership, and outlines tactics to close the freshness perception gap versus FreshTable. Present your strategy to the VP of Sales, including a recommendation on which SKUs to defend and which to discontinue.",
    individualPIs: [
      "Explain the nature of food marketing",
      "Explain the concept of product mix",
      "Explain the importance of trade promotion in food marketing",
      "Assess the profitability of channel decisions",
      "Explain the nature of marketing strategies"
    ],
    tdmPIs: [
      "Explain the nature of food marketing",
      "Explain the concept of product mix",
      "Explain the importance of trade promotion in food marketing",
      "Assess the profitability of channel decisions",
      "Explain the nature of marketing strategies",
      "Explain the nature of distribution in marketing",
      "Describe the impact of in-store presentation on consumer purchasing decisions"
    ],
    judgementQuestions: [
      "What financial argument would you make to the SFM buyer to justify maintaining shelf space for the Hearthstone line over FreshTable's exclusive promotion proposal?",
      "Which of the 12 SKUs would you recommend discontinuing at SFM, and how would you communicate the rationalization to the buyer in a way that frames it as a strategic improvement rather than a concession?",
      "How would you design a co-op promotional investment proposal—including dollar amount, activation types, and measurement metrics—that makes the SFM partnership more valuable for both parties?"
    ]
  },

  // Marketing Communications Series (MCS)
  {
    id: "mcs-1",
    event: "Marketing Communications Series",
    eventCode: "MCS",
    cluster: "marketing",
    situation:
      "You are a communications manager at NovaBridge Technology Solutions, a B2B software company that provides cloud-based project management and workflow automation tools to mid-sized professional services firms. The company has 340 paying clients, generates $14.2 million in annual recurring revenue, and has achieved 92% annual contract renewal rates. The CEO wants to launch an integrated marketing communications campaign to acquire 80 new clients over the next 12 months—a 23.5% growth target that would require the pipeline to roughly double from its current 110 qualified opportunities.\n\nThe company's current marketing communications mix is heavily weighted toward outbound sales—cold email sequences, LinkedIn prospecting, and quarterly webinars—with minimal inbound content infrastructure. The blog has not been updated in four months, there is no SEO strategy in place, and the company's Google Ads account spends $4,200 per month with a cost per lead of $840, yielding approximately five leads per month. The sales team closes 28% of qualified leads, so the current pipeline mathematics produce roughly 18 new clients per year against a goal of 80.\n\nA competitor analysis reveals that NovaBridge's three primary competitors—Asana, Monday.com, and a niche competitor, Protask—all invest significantly in thought leadership content, with Protask specifically gaining ground in the professional services segment through a consistent LinkedIn newsletter that has grown to 24,000 subscribers in 18 months. NovaBridge's ideal customer profile—operations directors and managing partners at consulting and accounting firms with 50–500 employees—consumes business content primarily through LinkedIn, industry association publications, and targeted podcast advertising.\n\nThe CMO has approved a $380,000 annual communications budget. You must develop an integrated marketing communications strategy that rebuilds the inbound content infrastructure, optimizes paid channels, and establishes NovaBridge as a thought leader in the professional services workflow automation space. Present your plan to the CEO and CMO, including channel mix, content strategy, budget allocation, and a quarterly pipeline forecast showing how the plan gets to 80 new clients.",
    individualPIs: [
      "Explain the nature of integrated marketing communications",
      "Explain the concept of content marketing",
      "Describe the use of digital marketing in B2B contexts",
      "Explain the nature of marketing metrics",
      "Explain the nature of effective verbal communications"
    ],
    tdmPIs: [
      "Explain the nature of integrated marketing communications",
      "Explain the concept of content marketing",
      "Describe the use of digital marketing in B2B contexts",
      "Explain the nature of marketing metrics",
      "Explain the nature of effective verbal communications",
      "Identify the impact of promotional activities on sales",
      "Explain the importance of brand consistency across communications channels"
    ],
    judgementQuestions: [
      "How would you sequence the investment between inbound content infrastructure and paid channels in the first 90 days when the content program has not yet generated organic traffic?",
      "What thought leadership content format—LinkedIn newsletter, podcast, webinar series, or case study library—would most effectively build credibility with NovaBridge's target operations director audience, and why?",
      "If after six months the new client acquisition is tracking at 35 per year rather than 80, what diagnostic process would you use to identify whether the bottleneck is awareness, lead quality, or sales conversion?"
    ]
  },
  {
    id: "mcs-2",
    event: "Marketing Communications Series",
    eventCode: "MCS",
    cluster: "marketing",
    situation:
      "You are the communications director at Clearwater Municipal Credit Union, a not-for-profit financial institution serving 68,000 members in a mid-sized Florida metro area. Clearwater CU manages $920 million in assets and competes primarily with three large regional banks—Truist, Regions, and Fifth Third—for deposit accounts, auto loans, and mortgage business. Member satisfaction scores are strong (NPS of 42), but new member acquisition has slowed to 2,800 per year—a 12% decline over three years—as younger consumers aged 22–35 increasingly choose national fintech platforms like Chime and SoFi for their primary banking relationship.\n\nResearch conducted by the credit union's marketing team shows that non-members aged 22–35 in the market have low awareness of credit union membership benefits, with only 31% correctly identifying that credit unions offer lower loan rates and higher savings rates than traditional banks on average. Among those who are aware, the top barrier to joining is the perception that credit unions are 'old-fashioned' or have limited digital banking capabilities—a perception that contradicts the recent launch of Clearwater CU's new mobile app, which received an 4.6-star average rating from 1,200 user reviews.\n\nThe board has approved a $620,000 communications budget for a 24-month member acquisition campaign targeting the 22–35 demographic. The credit union's current communications mix relies primarily on branch signage, a local newspaper ad that reaches a declining readership, and a quarterly member newsletter. Social media presence is limited to a Facebook page with 4,200 followers, predominantly existing members over age 50. The digital infrastructure—website, mobile app, online account opening—is now fully competitive with national fintechs following an $800,000 technology investment completed last year.\n\nYou must develop an integrated marketing communications strategy that repositions Clearwater CU as a modern, member-first financial alternative for young adults, builds social media presence in the channels frequented by the 22–35 demographic, and drives measurable new member acquisition. Present your 24-month communications plan to the board, including channel selection, messaging framework, budget phasing, and membership growth projections.",
    individualPIs: [
      "Explain the nature of integrated marketing communications",
      "Describe the nature of target marketing",
      "Describe the use of social media in marketing",
      "Explain the concept of brand repositioning",
      "Explain the nature of marketing metrics"
    ],
    tdmPIs: [
      "Explain the nature of integrated marketing communications",
      "Describe the nature of target marketing",
      "Describe the use of social media in marketing",
      "Explain the concept of brand repositioning",
      "Explain the nature of marketing metrics",
      "Explain the importance of brand consistency across communications channels",
      "Identify the impact of promotional activities on sales"
    ],
    judgementQuestions: [
      "How would you message the 'credit union advantage' in terms of lower loan rates and higher savings rates in a way that is credible and compelling to a financially skeptical 25-year-old who has never considered a credit union?",
      "What social media content strategy—including platform selection, content types, and posting cadence—would organically grow Clearwater CU's following among the 22–35 demographic from near-zero?",
      "If 18 months into the campaign new member acquisition has improved but the average age of new members is still skewing toward 38–45 rather than the 22–35 target, what would you diagnose as the likely cause and how would you correct it?"
    ]
  },

  // Marketing Management (MKM)
  {
    id: "mkm-1",
    event: "Marketing Management",
    eventCode: "MKM",
    cluster: "marketing",
    situation:
      "You are a marketing consultant hired by Verdana Organics, a direct-to-consumer organic snack brand generating $3.2 million in annual revenue. The company produces eight SKUs of organic trail mix, nut butters, and grain bars under the Verdana label and sells primarily through its e-commerce website, supplemented by placements in 42 natural grocery stores operated by Whole Harvest Co-ops in the Pacific Northwest. Whole Harvest accounts for 78% of Verdana's sales, while DTC e-commerce represents only 14%, with the remainder coming from two regional specialty retailers.\n\nThe CEO is acutely aware of channel concentration risk: if Whole Harvest reduces shelf space, requests price concessions, or faces its own financial difficulties, Verdana's business would be immediately threatened. Market research indicates that Verdana's target demographic—health-conscious millennials aged 25–40—over-indexes heavily on social commerce (particularly Instagram Shopping and TikTok Shop), subscription box services such as Grove Collaborative and Thrive Market, and specialty e-commerce platforms including Vitacost and iHerb. These channels represent a meaningful opportunity to diversify revenue and build a direct relationship with consumers that is not mediated by a retail partner.\n\nThe CEO has allocated a $120,000 marketing budget for a six-month multichannel pilot and wants you to identify the best two additional channels to enter, provide a detailed go-to-market plan for each, and establish KPIs to evaluate success. The pilot must be designed to complement rather than compete with the Whole Harvest relationship, as Whole Harvest has a standard vendor agreement clause requiring 30-day notification before entering any retail channel within the same geographic market.\n\nYou must present a multichannel expansion strategy to the CEO that addresses channel selection rationale, go-to-market execution, brand consistency management, channel conflict mitigation with Whole Harvest, and a measurement framework with 30-, 60-, and 90-day performance checkpoints.",
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
    id: "mkm-2",
    event: "Marketing Management",
    eventCode: "MKM",
    cluster: "marketing",
    situation:
      "You are the marketing manager at Apex Fitness Studios, a boutique gym chain with 11 locations across the Chicago metro area. The studios are positioned as premium alternatives to big-box gyms, with monthly membership fees of $89–$149 depending on membership tier, and average class sizes of 16 participants. Apex generates $8.4 million in annual revenue, with membership dues accounting for 71% and personal training, retail merchandise, and nutrition coaching making up the balance. The brand has historically attracted health-conscious professionals aged 28–45 with household incomes above $75,000.\n\nMembership has declined 18% over the past 12 months, falling from 6,200 to 5,084 active members across all locations. The primary drivers are competition from lower-cost virtual fitness apps—Peloton, Mirror, and Apple Fitness+—and two new competitor studios, Rumble Boxing and F45 Training, that opened within three miles of Apex's two highest-revenue locations. The average member lifetime value is $1,400 based on an average tenure of 15.7 months, and customer acquisition cost has risen to $210, up from $140 two years ago, severely compressing the return on marketing investment.\n\nThe ownership group has set clear goals: stabilize membership at the current level within 90 days and grow it by 15% within six months, reaching approximately 5,850 active members. A $75,000 discretionary marketing budget has been approved. Exit surveys from churned members in the past six months reveal three primary themes: 42% cited price versus perceived value, 31% cited convenience of at-home alternatives, and 19% cited class variety dissatisfaction. Only 8% cited competitor studios specifically, suggesting the larger threat is the virtual fitness category rather than direct studio competition.\n\nYou must develop a comprehensive retention and acquisition strategy addressing the data from churn analysis, present a competitive positioning framework that differentiates Apex from virtual fitness alternatives, and recommend a prioritized set of marketing and operational tactics with budget allocation. Present your complete strategy to the ownership group with 90-day and 180-day projected membership outcomes.",
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
  {
    id: "mkm-3",
    event: "Marketing Management",
    eventCode: "MKM",
    cluster: "marketing",
    situation:
      "You are the VP of Marketing at Solaris Solar Solutions, a residential and commercial solar installation company operating in Arizona and Nevada. The company installs roughly 420 residential solar systems per year and 35 commercial systems, generating $22.5 million in annual revenue. Average residential system revenue is $32,000 including installation, and average commercial system revenue is $185,000. The solar market in Arizona has grown significantly, but Solaris's market share has declined from an estimated 8.2% to 6.1% over the past two years as the market added 14 new installation competitors, including national brands SunPower and Sunrun that have entered Arizona with aggressive pricing and large marketing budgets.\n\nA brand perception survey found that Solaris scores highly on installation quality (rated 4.7/5 by past customers) and on-time completion (94% on-time rate) but scores poorly on brand awareness among homeowners who have not yet installed solar—only 19% aided awareness versus 58% for SunPower and 43% for Sunrun. The company's primary acquisition channel is door-to-door sales, which accounts for 68% of residential leads but has an increasing cost per appointment of $185, up from $120 three years ago as residents install 'no solicitation' signs in response to industry-wide canvassing pressure.\n\nThe CEO wants a marketing strategy that reduces dependence on door-to-door acquisition, builds brand awareness in the digital space where solar shoppers are increasingly doing research, and expands the commercial segment from 35 to 60 annual installations. A $480,000 annual marketing budget has been approved—double the prior year's spend—reflecting the board's conviction that marketing investment is critical to competitive survival. Research shows that solar shoppers spend an average of 4.6 weeks researching before requesting an installation quote and consult an average of 3.8 sources, primarily Google, YouTube, and neighbor referrals.\n\nYou must develop a marketing management strategy that addresses the awareness gap, diversifies acquisition channels away from door-to-door, and includes a B2B commercial segment growth plan. Present your strategy to the CEO with channel mix, budget allocation, expected pipeline impact, and a 12-month execution roadmap.",
    individualPIs: [
      "Explain the nature of marketing strategies",
      "Conduct a SWOT analysis for use in the marketing planning process",
      "Develop a marketing plan",
      "Explain the nature of competitive intelligence",
      "Explain the concept of marketing mix"
    ],
    tdmPIs: [
      "Explain the nature of marketing strategies",
      "Conduct a SWOT analysis for use in the marketing planning process",
      "Develop a marketing plan",
      "Explain the nature of competitive intelligence",
      "Explain the concept of marketing mix",
      "Explain the nature of marketing metrics",
      "Identify the impact of channel management decisions on marketing"
    ],
    judgementQuestions: [
      "How would you leverage Solaris's 4.7/5 customer satisfaction rating as a marketing asset to build awareness and generate referral leads in digital channels?",
      "What specific tactics would you use to build the commercial solar pipeline from 35 to 60 installations, and what differences in messaging and channel would you use versus the residential market?",
      "If after six months organic and paid digital channels are generating leads but the close rate is 40% lower than the door-to-door channel, what would you investigate and adjust?"
    ]
  },

  // Marketing Research (MRK)
  {
    id: "mrk-1",
    event: "Marketing Research",
    eventCode: "MRK",
    cluster: "marketing",
    situation:
      "You are a marketing research analyst at Compass Consumer Insights, a mid-sized market research firm. Your client, Bellhaven Beverages, is considering launching a new premium sparkling water line called 'Bellhaven Mineral+'—flavored sparkling waters using locally sourced mineral water with added electrolytes, positioned against brands like LIQUID DEATH, Spindrift, and Sanpellegrino at a target retail price of $2.49 per 12-ounce can. The new line would require a capital investment of $3.4 million in production equipment and would take 14 months to bring to market. The VP of Innovation has asked your firm to design and execute a research project that will provide the decision-making data needed to proceed with or halt the launch.\n\nThe research objectives are: (1) measure category awareness and purchase behavior for premium sparkling water among the target demographic of health-conscious adults aged 22–45; (2) evaluate the Bellhaven Mineral+ concept on appeal, uniqueness, and purchase intent; (3) assess price sensitivity and identify the optimal retail price point between $1.99 and $2.99; and (4) understand the competitive landscape from the consumer perspective, including reasons for brand loyalty among current premium sparkling water drinkers. Secondary research available to your team includes Nielsen category data showing a 14.2% annual growth rate in the premium sparkling water segment and a $1.8 billion total U.S. market size.\n\nThe client has a research budget of $85,000 and a 10-week timeline to deliver findings. The VP of Innovation expects a research report with an executive summary, methodology description, key findings with data visualizations, and a go/no-go recommendation with supporting rationale. The firm must also propose a research methodology mix—qualitative and quantitative—that will yield statistically valid insights within the time and budget constraints.\n\nYou must present a complete marketing research proposal to Bellhaven's leadership team, covering research design, sample specifications, data collection methods, analysis approach, deliverable timeline, and a preliminary view on how the data will inform the go/no-go decision.",
    individualPIs: [
      "Explain the nature of marketing research",
      "Design a marketing research study",
      "Explain the use of primary and secondary research methods",
      "Describe the nature of quantitative and qualitative research",
      "Explain how marketing research supports decision-making"
    ],
    tdmPIs: [
      "Explain the nature of marketing research",
      "Design a marketing research study",
      "Explain the use of primary and secondary research methods",
      "Describe the nature of quantitative and qualitative research",
      "Explain how marketing research supports decision-making",
      "Explain the concept of sampling in marketing research",
      "Describe how to present marketing research findings effectively"
    ],
    judgementQuestions: [
      "How would you structure the quantitative survey to measure purchase intent in a way that avoids the well-known overstatement bias in concept testing, and what adjustment factor would you apply to convert stated intent to projected trial rate?",
      "What specific qualitative method—focus groups, in-depth interviews, or ethnographic observation—would provide the richest insight into why consumers are loyal to current premium sparkling water brands, and how would those findings inform the quantitative instrument?",
      "If the research returns a go recommendation but the purchase intent data is strongest in the $1.99–$2.19 price range rather than the $2.49 target, how would you present that finding and its implications to the VP of Innovation?"
    ]
  },
  {
    id: "mrk-2",
    event: "Marketing Research",
    eventCode: "MRK",
    cluster: "marketing",
    situation:
      "You are a senior research analyst at Thornfield Analytics, an in-house marketing research team within Harmon Department Stores, a 68-location specialty department store chain. Harmon's loyalty program has 1.4 million active members who collectively account for 74% of annual sales. The Chief Marketing Officer has identified a concerning trend in the loyalty program data: the average purchase frequency among loyalty members has declined from 4.8 visits per year three years ago to 3.6 visits per year today, and the average transaction value has grown only 2.1% in the same period—below the 4.3% retail price inflation rate, implying real-dollar spending decline.\n\nThe CMO wants to understand the root causes of the purchase frequency decline before investing in a loyalty program redesign that could cost $1.2–$1.8 million to implement. Three competing hypotheses have been proposed internally: (A) competition from online retail—specifically Amazon and specialty DTC brands—is diverting wallet share; (B) Harmon's product assortment has drifted from what loyalty members most value; or (C) the loyalty program rewards structure is no longer compelling enough to motivate incremental visits. Each hypothesis has different strategic implications, and leadership wants research to determine which is the primary driver before committing to a solution.\n\nThe research budget is $60,000, with a 12-week timeline to deliver actionable insights. Available internal data assets include the full loyalty program transaction history for 1.4 million members going back four years, email open and click-through rates by member cohort, and post-purchase survey responses from 14,000 members collected over the past 18 months. External data available includes competitor pricing data from a third-party provider and a recent industry report on department store shopper behavior.\n\nYou must present a marketing research plan to the CMO that uses a combination of internal data analysis and primary research to test all three hypotheses, identify the primary driver of frequency decline, and deliver actionable recommendations within the 12-week window. Your plan should specify research methods, data sources, sample design, analysis approach, and how findings will be translated into actionable recommendations.",
    individualPIs: [
      "Explain the nature of marketing research",
      "Explain the use of primary and secondary research methods",
      "Describe how to analyze and interpret marketing data",
      "Explain how marketing research supports decision-making",
      "Explain the nature of marketing metrics"
    ],
    tdmPIs: [
      "Explain the nature of marketing research",
      "Explain the use of primary and secondary research methods",
      "Describe how to analyze and interpret marketing data",
      "Explain how marketing research supports decision-making",
      "Explain the nature of marketing metrics",
      "Describe the nature of quantitative and qualitative research",
      "Explain the importance of customer relationship management"
    ],
    judgementQuestions: [
      "How would you use the four years of loyalty transaction history to identify which member segments have declined most in purchase frequency, and what analytical method would you use to isolate the signal from normal seasonal variation?",
      "What primary research method would most efficiently test all three competing hypotheses within the $60,000 budget—a large-scale online survey, targeted in-depth interviews, or a focus group series—and how would you design the instrument to clearly distinguish between competing explanations?",
      "If the research findings show that all three hypotheses are partially true—competition, assortment drift, and rewards fatigue are all contributing factors—how would you prioritize the recommendations to help the CMO decide where to invest first?"
    ]
  },

  // Retail Merchandising (RMS)
  {
    id: "rms-1",
    event: "Retail Merchandising",
    eventCode: "RMS",
    cluster: "marketing",
    situation:
      "You are a visual merchandising consultant hired by Clover & Stone, a lifestyle home décor retailer with 24 stores and an average store size of 3,200 square feet. The company generates $41 million in annual retail revenue and competes in the premium home décor space against retailers including Pottery Barn, Crate & Barrel, and local boutique competitors. The corporate visual merchandising director has asked you to redesign the front-of-store 'power zone'—the first 15 feet of selling floor—which currently generates $48 per square foot in annual sales, compared to a category benchmark of $72 per square foot.\n\nA recent customer intercept study involving 620 in-store interviews found that 61% of shoppers exit without making a purchase. The top cited reasons were 'cluttered and confusing presentation' (44%), 'couldn't find what I was looking for' (31%), and 'didn't feel inspired to buy' (19%). Eye-tracking data collected in three pilot stores showed that customer gaze spent disproportionate time on the cash-wrap area and signage rather than product, suggesting that the current fixture arrangement is not effectively directing attention to high-margin impulse and accessory items. The power zone currently features 14 different product categories displayed on 8 different fixture types, creating a fragmented visual experience.\n\nHigh-performing stores in the company's fleet generate $74–$81 per square foot in the power zone by using a focused 'hero product' strategy, limiting the power zone to three to four complementary categories, and investing in larger-format lifestyle vignette displays that inspire whole-room purchases rather than single-item transactions. The average transaction value in top-performing stores is $187 versus $124 in underperforming stores—a $63 gap that visual merchandising leadership attributes primarily to the vignette approach driving multi-item purchases.\n\nYou have a $22,000 fixture and signage budget per store. Develop a power-zone redesign plan with specific fixture recommendations, product curation strategy, signage approach, and expected financial impact based on comparable store performance. Present your plan to the director with implementation timeline and a rollout sequence for all 24 stores.",
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
      "You are a retail operations analyst at Beacon Electronics, a specialty consumer electronics chain with 35 locations concentrated in the Mountain West and Pacific Northwest. The company generates $290 million in annual revenue and competes against Best Buy, Apple Stores, and online retailer Amazon for consumer electronics purchases. The category director has identified that the wearables department—smartwatches, fitness trackers, and wireless earbuds from brands including Apple, Garmin, Samsung, and Jabra—is significantly underperforming, with a 17% sell-through rate over the past quarter versus a company target of 35%.\n\nTotal wearables inventory on hand across all 35 locations is valued at $1.4 million at cost, and aging inventory in the category older than 90 days represents $420,000 of that total. The department occupies 280 square feet per store and carries 62 active SKUs, which store managers consistently report is too many for sales associates to demo effectively. A mystery shopper audit conducted across eight locations found that in only 3 of 8 visits did a sales associate spontaneously approach a customer browsing the wearables section, and in only 1 of 8 visits did an associate conduct a product comparison demonstration. The audit identified product knowledge gaps as the primary barrier to associate-led selling.\n\nA competitive shop of the nearest Best Buy found that their comparable wearables section carries 38 SKUs—35% fewer—displayed on updated interactive demo fixtures that allow customers to try on devices and pair them with their smartphones. Customer intercept data from three Beacon locations shows that 67% of wearables browsers who did not purchase cited 'couldn't decide between options' and 'wasn't sure which features mattered' as primary reasons—both of which indicate a need for guided selling, not just passive display.\n\nYou must develop a SKU rationalization plan, recommend floor presentation changes including fixture updates and interactive demo integration, and propose a staff training approach to improve product knowledge and conversion. Present your action plan to the category director, including financial projections for the next quarter and implementation timelines for all 35 locations.",
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
  {
    id: "rms-3",
    event: "Retail Merchandising",
    eventCode: "RMS",
    cluster: "marketing",
    situation:
      "You are the director of retail operations at Sunrise Natural Market, a regional natural and organic grocery chain with 16 locations in the Southeast. The company competes against Whole Foods, Sprouts, and conventional grocers with expanded natural sections. Annual revenue is $148 million, and the company's prepared foods department—hot bars, made-to-order sandwiches, grab-and-go meals, and fresh-baked goods—represents 18% of total revenue, or approximately $26.6 million. Prepared foods generate a 42% gross margin, making them the highest-margin department in the store and a critical driver of overall profitability.\n\nA store audit conducted by the operations team found significant inconsistency in prepared foods merchandising across the 16 locations: five stores have recently renovated departments with modern grab-and-go cases and digital menu boards generating $1.8–$2.1 million in annual prepared foods revenue; four stores have mid-tier setups generating $1.4–$1.6 million; and seven stores have outdated equipment and poor presentation quality, generating only $800,000–$1.1 million annually. If all 16 stores performed at the mid-to-high range of the top five, the company would generate an additional $6.2 million in annual prepared foods revenue—a 23% increase.\n\nA capital budget of $1.8 million has been approved for a prepared foods refresh over 18 months, prioritizing the seven underperforming stores. The VP of Merchandising wants a comprehensive merchandising and presentation plan that addresses equipment specification, product assortment standardization, labeling and signage standards, staff presentation training, and a daily mise-en-place routine to maintain quality and freshness appearance throughout store hours. Consumer research shows that the primary drivers of prepared foods purchase at Sunrise are appearance/visual appeal (71%), perceived freshness (68%), and variety (54%).\n\nYou must develop a prepared foods merchandising strategy that specifies the presentation standards, equipment investment plan, product assortment guidelines, and training program for all 16 locations. Present your plan to the VP of Merchandising with projected revenue impact, implementation phasing, and ROI analysis for the $1.8 million capital investment.",
    individualPIs: [
      "Explain the nature of retail merchandising",
      "Explain the use of visual merchandising in food retail",
      "Describe the role of product assortment in retail performance",
      "Calculate return on investment for merchandising capital",
      "Explain the relationship between store layout and sales performance"
    ],
    tdmPIs: [
      "Explain the nature of retail merchandising",
      "Explain the use of visual merchandising in food retail",
      "Describe the role of product assortment in retail performance",
      "Calculate return on investment for merchandising capital",
      "Explain the relationship between store layout and sales performance",
      "Explain the nature of planogram development",
      "Describe the impact of in-store presentation on consumer purchasing decisions"
    ],
    judgementQuestions: [
      "How would you prioritize which of the seven underperforming stores to renovate first—by revenue opportunity, by location demographics, or by operational readiness—and what criteria would you use to sequence the rollout?",
      "What daily operational standards—restocking schedules, temperature logs, presentation checklists, and waste reduction protocols—would you implement to ensure the improved presentation is sustained after the renovation, not just in the first week?",
      "If halfway through the 18-month rollout the top five renovated stores are outperforming projections but the remaining stores are behind plan due to staffing shortages, what contingency approach would you recommend to the VP?"
    ]
  },

  // Sports & Entertainment Marketing (SEM)
  {
    id: "sem-1",
    event: "Sports & Entertainment Marketing",
    eventCode: "SEM",
    cluster: "marketing",
    situation:
      "You are a sponsorship activation specialist at Horizon Event Group, the agency representing the Lakecrest Triathlon Series, a regional endurance sports event with three annual races in Michigan, Wisconsin, and Minnesota drawing an aggregate 4,800 registered athletes and 12,000 spectators across the three-event season. The series has a strong reputation in the endurance community—it has been running for 11 years and consistently sells out athlete registrations within 72 hours of opening—and reaches a high-value demographic of health-conscious adults aged 22–45 with median household incomes of $92,000.\n\nVitality Hydration, a challenger sports-drink brand competing against Gatorade and Nuun for the endurance athlete segment, is considering becoming the series' title sponsor at $95,000 for a two-year agreement. Vitality's marketing director is skeptical of event sponsorship ROI and wants a detailed activation plan that clearly justifies the investment with measurable outcomes. Current sponsorship assets available include finish-line and transition-zone branding, product sampling stations at all three events, social media mentions across the series' 28,000-follower Instagram account, placement in three athlete email blasts reaching 14,000 subscribers, and an athlete expo booth at each event.\n\nVitality's marketing objectives for the sponsorship are: drive 15,000 product samples distributed across the three events, achieve a 12% conversion from trial to purchase within 60 days of each event, build unaided brand awareness among endurance athletes from a baseline of 8% to a target of 18% by end of year one, and collect contact information from a minimum of 2,500 triathlete consumers for CRM purposes. The marketing director specifically wants to understand how you will measure progress against each objective, not just state the tactics.\n\nYou must design an activation package that maximizes Vitality's brand exposure, drives product trial, meets all four marketing objectives, and includes a rigorous post-event measurement methodology. Present the activation plan to Vitality's marketing director, addressing how each element of the plan advances their specific goals.",
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
      "You are a marketing analyst at the Riverside Wolves, a minor-league hockey team playing in the ECHL in a mid-sized market of 380,000 people in upstate New York. The team plays a 72-game regular season with 36 home games at Riverside Arena, a 3,600-seat facility. Average game attendance last season was 2,100 fans—58% of capacity—down from 71% two seasons ago, driven by a poor on-ice record (18–54), high ticket prices relative to market income levels, and competition from a new MLB Double-A affiliate that opened in the market 18 months ago.\n\nThe team's primary revenue streams are ticket sales (52% of revenue), concessions (23%), merchandise (15%), and sponsorship (10%). Per-game ticket revenue at 2,100 fans averages $31,500 including general admission, reserved, and premium seating. At 75% capacity utilization—the general manager's target—per-game ticket revenue would reach approximately $41,000, representing a $352,000 annual revenue increase across 36 home games. The team has a social media following of 18,000 across all platforms, an email database of 9,500, and a loyal but aging season ticket base of 420 accounts.\n\nConsumer research conducted in the market found that the primary reason families with children under 14 do not attend Wolves games is price perception—$48–$72 for a family of four including tickets, parking, and concessions is cited as a barrier by 61% of non-attending families. Among local businesses, 78% of decision-makers surveyed were unaware that the team offers corporate group packages. The research also found that 54% of the market's sports-interested consumers ages 18–34 say they would attend more events if there were better entertainment programming surrounding games—music, theme nights, and post-game events.\n\nYou have a $60,000 promotional budget for the season. Develop a marketing plan targeting both family ticket packages and corporate group sales, including specific promotional event concepts, partnership opportunities, digital marketing tactics, and a community engagement strategy. Present your plan to the general manager with projected attendance outcomes.",
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
  {
    id: "sem-3",
    event: "Sports & Entertainment Marketing",
    eventCode: "SEM",
    cluster: "marketing",
    situation:
      "You are the director of partnerships at Meridian Music Group, an independent concert promoter that produces 85–100 live music events annually across four venues in the Nashville metropolitan area. Total annual ticket revenue is $12.4 million, with an average ticket price of $48. The company's four venues range from a 450-capacity intimate listening room to a 4,200-capacity outdoor amphitheater. Meridian has a strong local reputation but generates only $820,000 in sponsor revenue—about 6.6% of total revenue—compared to an industry benchmark of 12–15% for promoters of comparable scale.\n\nThe VP of Business Development has identified sponsorship growth as the highest-margin revenue expansion opportunity, as sponsor revenue carries an incremental margin above 70% once the sponsorship sales team's overhead is covered. Three categories have been identified as highest-potential for new sponsorship development: beverage brands (currently only one brewery partner at $65,000 annually), financial services brands targeting young adults aged 21–35 who over-index at live music events, and automotive brands seeking brand experiences with the 25–44 demographic. Market research shows that Meridian's audience is 61% female, earns a median household income of $74,000, and attends an average of 6.2 live events per year.\n\nThe VP wants to develop a sponsorship inventory and rate card for all four venues, establish a tiered partnership structure with clearly defined benefits at each investment level, and launch a proactive outreach program targeting 40 prospective sponsors over the next six months. Current sponsorship activation is minimal—signage and verbal acknowledgment only—leaving significant opportunity to offer more immersive brand experiences that command higher fees. Competing promoters in Nashville, including Live Nation and AEG, offer activation options including branded lounges, artist meet-and-greet packages, and sponsored pre-show experiences at premium price points.\n\nYou must develop a sponsorship sales strategy that includes a tiered partnership structure, pricing recommendations for each tier and venue, activation concepts that go beyond signage, and a prospect outreach plan. Present your strategy to the VP, including projected revenue impact and a timeline to reach the $1.5 million annual sponsor revenue target.",
    individualPIs: [
      "Explain the nature of sponsorship in sports/entertainment marketing",
      "Develop a sponsorship proposal",
      "Explain the nature of effective verbal communications",
      "Identify market opportunities for service businesses",
      "Explain the concept of marketing mix"
    ],
    tdmPIs: [
      "Explain the nature of sponsorship in sports/entertainment marketing",
      "Develop a sponsorship proposal",
      "Explain the nature of effective verbal communications",
      "Identify market opportunities for service businesses",
      "Explain the concept of marketing mix",
      "Explain the importance of marketing metrics in sponsorship evaluation",
      "Explain the nature of business-to-business marketing"
    ],
    judgementQuestions: [
      "How would you structure a three-tier sponsorship program—title, presenting, and supporting levels—with distinct activation benefits at each tier that justify meaningful price differences?",
      "What specific activation concept would you pitch to a financial services brand like a regional bank or a credit card company to create a memorable brand experience at a 4,200-person outdoor show?",
      "If a prospective sponsor wants exclusivity in their category but is only willing to pay 60% of your asking rate, how would you negotiate a structure that protects your revenue opportunity while giving the sponsor meaningful exclusivity?"
    ]
  },

  // Principles of Marketing (PMK)
  {
    id: "pmk-1",
    event: "Principles of Marketing",
    eventCode: "PMK",
    cluster: "marketing",
    situation:
      "You are a marketing assistant at Oakdale Pet Supply, a locally owned pet retail store with two locations in a suburban market of 210,000 people. The store carries food, treats, toys, accessories, and grooming supplies for dogs, cats, and small animals, and also offers self-serve dog washing stations. Annual revenue is $1.8 million across both locations, down 8% from the prior year as national chain Petco opened a new 12,000-square-foot location three miles from Oakdale's flagship store six months ago. The store owner has asked you—the newest hire on the marketing team—to develop a marketing strategy to address the competitive threat and articulate what makes Oakdale different from Petco.\n\nA customer survey of Oakdale's loyalty program members revealed several clear differentiators: 84% of loyal customers cite 'staff expertise and personalized recommendations' as the primary reason they shop at Oakdale over big-box competitors, 72% value the 'local, community-focused feel,' and 61% appreciate the 'curated selection of premium and local brands' not found at Petco. These loyalty customers spend an average of $1,240 per year at Oakdale—$310 higher than the average Petco customer spending in the same income demographic. However, the loyalty program has only 480 active members out of an estimated 2,800 unique customers in the past year, suggesting that most customers are not engaged in a formal relationship with the store.\n\nOakdale's current marketing consists of a Facebook page with 1,100 followers (mostly existing customers), occasional email blasts to a 620-person list, and a small ad in the local community newsletter. The store has no Instagram presence, no Google Business profile optimization, and has never run a paid digital advertising campaign. The owner has a $14,000 annual marketing budget and wants recommendations on how to build brand awareness among the 12,000 pet-owning households within a 5-mile radius who are not currently Oakdale customers.\n\nYou must apply core marketing principles—the 4 Ps, target market identification, competitive positioning, and the value proposition—to develop a practical marketing strategy for Oakdale. Present your recommendations to the owner, explaining each element of the strategy in clear terms and connecting every tactic to a specific marketing principle.",
    individualPIs: [
      "Explain the concept of marketing",
      "Describe the elements of the marketing mix",
      "Explain the nature of target marketing",
      "Describe the concept of market positioning",
      "Explain the importance of value in marketing"
    ],
    tdmPIs: [
      "Explain the concept of marketing",
      "Describe the elements of the marketing mix",
      "Explain the nature of target marketing",
      "Describe the concept of market positioning",
      "Explain the importance of value in marketing",
      "Explain the nature of competitive advantage",
      "Describe the use of digital marketing in small businesses"
    ],
    judgementQuestions: [
      "How would you articulate Oakdale's value proposition in a single sentence that is compelling to a pet owner who has never shopped there and is accustomed to the convenience of Petco?",
      "Which of the 4 Ps—product, price, place, or promotion—represents Oakdale's strongest competitive advantage against Petco, and how would you double down on that element in your marketing strategy?",
      "If the $14,000 marketing budget had to be cut to $6,000, which two or three tactics would you keep as the highest-priority investments and why?"
    ]
  },
  {
    id: "pmk-2",
    event: "Principles of Marketing",
    eventCode: "PMK",
    cluster: "marketing",
    situation:
      "You are a marketing intern at Harvest Moon Farmers Market, a nonprofit organization that operates a year-round outdoor farmers market in a mid-sized Pacific Northwest city of 160,000 people. The market runs every Saturday from 8 a.m. to 1 p.m. and features 80–95 vendors selling local produce, meats, dairy, baked goods, artisan crafts, and prepared foods. Annual vendor revenue across the market is approximately $4.1 million, and the market generates $280,000 in booth fees and membership income to fund its operations. Attendance has been stable at 2,400–2,800 customers per Saturday for five years, but the market director wants to grow Saturday attendance to 3,500 by increasing awareness among younger residents aged 18–35 who currently underrepresent the market's customer base.\n\nA customer count analysis shows that 78% of current Saturday attendees are over age 36, and the median customer age is 52. A community survey of residents aged 18–35 found that 61% were 'aware but hadn't visited' in the past year, with the top barriers being: inconvenient Saturday morning hours (39%), perception that the market is 'not for them' or 'too expensive' (28%), and simply not thinking of the market as a regular destination (24%). Only 8% had not heard of the market. These findings suggest an awareness and consideration challenge rather than a reach challenge—the market needs to make visiting feel relevant and worthwhile for younger adults.\n\nThe market director has approved a $22,000 marketing budget for the next six months and wants a marketing plan grounded in marketing principles that explains not just what to do but why each tactic is theoretically sound. Available marketing assets include a 4,200-subscriber email list (heavily skewed toward existing older customers), an Instagram account with 6,800 followers, and a website that receives 3,400 unique visits per month. The market has also developed relationships with three local restaurants that use market vendors as ingredient suppliers and are willing to co-market with the market.\n\nYou must develop a marketing plan for Harvest Moon that applies the principles of marketing to the specific challenge of attracting younger adult visitors. Your plan should clearly connect each strategy and tactic to a marketing principle—such as targeting, positioning, consumer behavior, or the promotional mix—and include specific, measurable objectives. Present your plan to the market director.",
    individualPIs: [
      "Explain the concept of marketing",
      "Describe the elements of the marketing mix",
      "Explain the nature of target marketing",
      "Explain the importance of understanding consumer behavior",
      "Identify the impact of promotional activities on sales"
    ],
    tdmPIs: [
      "Explain the concept of marketing",
      "Describe the elements of the marketing mix",
      "Explain the nature of target marketing",
      "Explain the importance of understanding consumer behavior",
      "Identify the impact of promotional activities on sales",
      "Describe the use of social media in marketing",
      "Explain the concept of market positioning"
    ],
    judgementQuestions: [
      "How would you use the consumer behavior principle of social proof to make the farmers market feel more relevant and 'cool' to younger adults who haven't visited?",
      "What positioning statement would you develop for Harvest Moon that speaks specifically to 18–35-year-olds without alienating the loyal older customer base that drives current attendance?",
      "If you had to choose between investing the $22,000 budget in Instagram/TikTok paid advertising or in two or three high-production in-person events designed to attract younger visitors, which would you recommend and why from a marketing principles perspective?"
    ]
  },

  // Professional Selling (PSE)
  {
    id: "pse-1",
    event: "Professional Selling",
    eventCode: "PSE",
    cluster: "marketing",
    situation:
      "You are an account executive at Pinnacle Office Solutions, a regional office furniture and workplace design company serving businesses in the Twin Cities metro area. The company sells ergonomic office furniture, modular workstations, and space-planning services, with average project sizes ranging from $18,000 for small office refreshes to $240,000 for full-floor builds. You have been assigned a warm lead: Grandhaven Financial Group, a wealth management firm with 85 employees that is relocating from its current 8,400-square-foot office to a newly constructed 10,200-square-foot space in downtown Minneapolis. The relocation is scheduled for eight months from now.\n\nYour initial discovery call with Grandhaven's office manager, Dana Kowalski, revealed several key pieces of information: the firm has a $185,000 furniture budget approved by the CFO; the CEO wants a 'modern, client-impressive' aesthetic that reflects the firm's premium brand; 12 of the 85 employees have formal ergonomics assessments recommending specific chair and desk configurations; and the current vendor—a national chain that provided their existing furniture 9 years ago—has submitted a preliminary quote for $162,000 that Grandhaven considers the baseline for comparison. Dana mentioned that the CEO, who makes the final decision, prioritizes 'a vendor who makes us look good to our clients' and is skeptical of pushy salespeople.\n\nPinnacle's value proposition for this opportunity includes an in-house space-planning team, access to 14 premium furniture lines not available at national chains, a 10-year warranty program on all major pieces, and a dedicated post-installation service team for adjustments and replacements. Pinnacle's pricing for a comparable project would likely range from $172,000 to $196,000—higher than the competitor's quote—but the space-planning and design service is included at no additional charge, whereas the national chain charges $8,500 for equivalent planning services.\n\nYou have been asked by your sales manager to prepare for and simulate a 30-minute presentation to Dana Kowalski and the CEO that advances the sale from initial proposal to a formal vendor selection decision. You must demonstrate professional selling skills including needs assessment, value-based selling, handling objections related to price, and closing techniques appropriate for a consultative B2B sale. Conduct the sales presentation as your roleplay.",
    individualPIs: [
      "Explain the nature of professional selling",
      "Explain the use of needs assessment in consultative selling",
      "Explain the concept of value-based selling",
      "Describe techniques for handling objections",
      "Explain the nature of effective verbal communications"
    ],
    tdmPIs: [
      "Explain the nature of professional selling",
      "Explain the use of needs assessment in consultative selling",
      "Explain the concept of value-based selling",
      "Describe techniques for handling objections",
      "Explain the nature of effective verbal communications",
      "Describe the nature of business-to-business sales",
      "Explain the importance of building long-term customer relationships in sales"
    ],
    judgementQuestions: [
      "How would you respond if the CEO says mid-presentation, 'Your competitor's quote is $162,000 and you're telling me you'd be $172,000–$196,000—why should I pay more?'",
      "What closing technique would you use if at the end of the 30-minute presentation the CEO says they need to 'think about it' and want a follow-up call in two weeks?",
      "How would you structure the post-installation follow-up process to turn Grandhaven Financial into a reference account and a source of referrals to other wealth management firms?"
    ]
  },
  {
    id: "pse-2",
    event: "Professional Selling",
    eventCode: "PSE",
    cluster: "marketing",
    situation:
      "You are a territory sales representative at Meridian Pharmaceutical Distribution, a regional distributor of prescription and OTC pharmaceutical products serving independent pharmacies, hospital pharmacies, and long-term care facilities in Kentucky and Tennessee. You manage a territory of 68 pharmacy accounts generating $4.2 million in annual revenue for Meridian. Your largest account, Cumberland Valley Independent Pharmacy in Bowling Green, Kentucky, accounts for $380,000 annually and has been a Meridian customer for 11 years. You have just learned from your sales manager that Cumberland Valley's owner, Pharmacist Robert Okafor, has been in discussions with a national distributor, AmerisourceBergen, which has offered a pricing proposal that is 3.2% lower than Meridian's current pricing across Cumberland Valley's top 50 SKUs by volume.\n\nA 3.2% price reduction across Cumberland Valley's $380,000 annual spend represents approximately $12,160 in annual cost savings for the pharmacy. Your sales manager has authorized you to offer a maximum price concession of 1.8% on the top 50 SKUs—about $6,840 annually—but has emphasized that Meridian should not win this account through price alone, as that precedent would invite further pricing pressure from other accounts. Meridian's differentiated value versus AmerisourceBergen includes same-day delivery for orders placed before 2 p.m. (AmerisourceBergen offers next-day delivery only), a local account team that visits Cumberland Valley weekly, and a compliance support program that has helped Cumberland Valley avoid two potential audit issues in the past three years.\n\nYou have requested an in-person meeting with Robert Okafor for next Tuesday. Robert is a measured, analytical decision-maker who responds best to data and straightforward communication; he is not influenced by relationship-based appeals alone. In a prior phone conversation, he acknowledged that Meridian's service has been 'solid' but said he has 'a fiduciary responsibility to his patients and business to get the best possible terms.' His pharmacy operates on a 2.8% net margin, making cost management critical to survival.\n\nYou must prepare for and conduct a professional selling interaction with Robert Okafor that retains the Cumberland Valley account, demonstrates the full value of the Meridian relationship beyond pricing, and reaches an agreement that meets Robert's economic needs without setting a damaging pricing precedent. Conduct the retention sales call as your roleplay.",
    individualPIs: [
      "Explain the nature of professional selling",
      "Explain the concept of value-based selling",
      "Describe techniques for handling objections",
      "Explain the importance of building long-term customer relationships in sales",
      "Explain the nature of effective verbal communications"
    ],
    tdmPIs: [
      "Explain the nature of professional selling",
      "Explain the concept of value-based selling",
      "Describe techniques for handling objections",
      "Explain the importance of building long-term customer relationships in sales",
      "Explain the nature of effective verbal communications",
      "Describe the nature of business-to-business sales",
      "Explain the use of needs assessment in consultative selling"
    ],
    judgementQuestions: [
      "How would you quantify the value of Meridian's same-day delivery versus AmerisourceBergen's next-day delivery in terms of dollars or operational impact that would be meaningful to a pharmacy owner?",
      "If Robert Okafor responds that the $6,840 annual price concession Meridian is authorized to offer is not sufficient to match AmerisourceBergen's $12,160 savings, what non-price concessions or additional value could you offer without further eroding margin?",
      "What is your walkaway position in this negotiation, and how would you handle the relationship and the announcement to your sales manager if Cumberland Valley ultimately decides to switch to AmerisourceBergen?"
    ]
  },

  // Business-to-Business Marketing (B2B)
  {
    id: "b2b-1",
    event: "Business-to-Business Marketing",
    eventCode: "B2B",
    cluster: "marketing",
    situation:
      "You are a marketing manager at Axiom Industrial Supply, a distributor of safety equipment, PPE, maintenance tools, and facility supplies serving manufacturing plants, warehouses, and construction companies across the Great Lakes region. Axiom generates $34 million in annual revenue and serves 480 active business accounts, with an average account revenue of $70,800 per year. The company's top 20% of accounts—approximately 96 clients—generate 68% of total revenue, a classic long-tail distribution that represents both a concentration risk and an opportunity to invest disproportionately in top-account retention and growth.\n\nThe VP of Sales has identified that Axiom's net revenue retention—a measure of whether existing accounts are spending more or less with Axiom year-over-year—has declined from 104% to 97%, meaning the company is losing more wallet share from existing accounts than it is gaining through upsell and cross-sell. An account survey found that the most commonly cited reason for moving purchases to competitors was 'we didn't know Axiom carried that product category'—indicating an awareness gap within the existing customer base. Specifically, Axiom added janitorial and facility maintenance supplies 18 months ago, but only 62 of 480 accounts have purchased from this category despite the category being relevant to virtually all of Axiom's current customers.\n\nA competitive analysis shows that Axiom's primary competitors in the region—Fastenal, Grainger, and a regional competitor, Lakeshore Industrial—all invest in account-based marketing programs that assign dedicated 'account growth specialists' to top accounts and provide regular category-specific solutions selling. Axiom's current model relies primarily on inbound orders and reactive account management rather than proactive solutions marketing.\n\nThe VP of Marketing has a $220,000 annual B2B marketing budget and wants a strategy to improve net revenue retention, increase category penetration within existing accounts (starting with the underutilized janitorial/facilities category), and develop a formal account-based marketing program for the top 96 accounts. Present your B2B marketing strategy to the VP of Marketing and VP of Sales, including program design, budget allocation, technology requirements, and projected revenue impact.",
    individualPIs: [
      "Explain the nature of business-to-business marketing",
      "Explain the importance of customer relationship management",
      "Describe the concept of account-based marketing",
      "Explain the use of needs assessment in B2B selling",
      "Explain the nature of marketing strategies"
    ],
    tdmPIs: [
      "Explain the nature of business-to-business marketing",
      "Explain the importance of customer relationship management",
      "Describe the concept of account-based marketing",
      "Explain the use of needs assessment in B2B selling",
      "Explain the nature of marketing strategies",
      "Explain the nature of marketing metrics",
      "Describe the nature of business-to-business sales"
    ],
    judgementQuestions: [
      "How would you design an account-based marketing campaign specifically to close the janitorial/facilities category awareness gap within the 418 accounts that have not yet purchased from that category?",
      "What metrics would you use to measure the success of the account-based marketing program for the top 96 accounts over a 12-month period, beyond net revenue retention?",
      "If a top-20 account's purchasing manager tells your account growth specialist that they are consolidating all industrial supply vendors from three to two and Axiom is not guaranteed to make the cut, what marketing and sales tactics would you deploy to secure Axiom's position?"
    ]
  },
  {
    id: "b2b-2",
    event: "Business-to-Business Marketing",
    eventCode: "B2B",
    cluster: "marketing",
    situation:
      "You are the head of B2B marketing at CloudBridge HR Solutions, a software-as-a-service company providing cloud-based human resources management, payroll processing, and benefits administration tools to mid-market businesses with 100–1,500 employees. The company has 620 paying clients generating $28.6 million in annual recurring revenue, with an average contract value of $46,100 per year. Annual client churn rate is 9.4%—slightly above the SaaS industry benchmark of 7–8% for this segment—costing the company approximately $2.7 million in lost ARR annually. New business acquisition is growing at 18% per year, but the churn rate is eroding the compounding benefit of that growth.\n\nA churn analysis conducted by the customer success team identified three primary profiles of churned clients: (A) small-end companies (100–200 employees) who outgrew the implementation support CloudBridge provided and felt 'under-served' post-onboarding; (B) mid-size clients who switched to enterprise platforms like Workday or ADP when they crossed the 500-employee threshold; and (C) clients who cited 'we didn't use enough of the platform features to justify the cost.' Profile C represents 41% of churned clients—the largest segment—suggesting a product adoption and marketing-to-existing-customers problem rather than a product quality issue.\n\nThe CMO wants to address churn through a B2B marketing program focused on customer education, feature adoption, and proactive engagement with the clients most at risk. The company's marketing technology stack includes Salesforce CRM, HubSpot Marketing Hub, and a customer success platform, Gainsight, that tracks product usage data at the account level. Gainsight data shows that clients using four or more CloudBridge modules have a 3.8% churn rate, while clients using only one or two modules churn at 14.2%—a powerful indicator that feature adoption directly predicts retention.\n\nA $340,000 annual marketing budget has been approved for the B2B retention marketing program. You must develop a marketing strategy that uses the available data and technology to identify at-risk clients, drive feature adoption through targeted communications and education, and reduce overall churn from 9.4% to below 7% within 18 months. Present your B2B retention marketing plan to the CMO, including program components, technology utilization, content strategy, measurement framework, and projected ARR impact of reaching the 7% churn target.",
    individualPIs: [
      "Explain the nature of business-to-business marketing",
      "Explain the importance of customer relationship management",
      "Describe the use of technology in the marketing function",
      "Explain the concept of customer lifetime value",
      "Explain the nature of marketing metrics"
    ],
    tdmPIs: [
      "Explain the nature of business-to-business marketing",
      "Explain the importance of customer relationship management",
      "Describe the use of technology in the marketing function",
      "Explain the concept of customer lifetime value",
      "Explain the nature of marketing metrics",
      "Explain the nature of marketing strategies",
      "Assess the impact of customer relationship management on a business"
    ],
    judgementQuestions: [
      "How would you use Gainsight's product usage data to build a predictive churn risk score, and what marketing actions would you trigger automatically when an account crosses a high-risk threshold?",
      "What specific content and education program would you design to drive adoption of CloudBridge's underused modules among the 41% of churned clients who cite 'not using enough features to justify cost'—and how would you personalize that content by company size and industry?",
      "If 12 months into the program churn has improved from 9.4% to 8.1% but is still above the 7% target, what additional diagnostic steps would you take and what program adjustments would you recommend to the CMO?"
    ]
  },
];
