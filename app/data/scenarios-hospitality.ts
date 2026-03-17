import type { RoleplayScenario } from "./types";

export const scenariosHospitality: RoleplayScenario[] = [

  // ─── HOSPITALITY SERVICES (HS) ────────────────────────────────────────────

  {
    id: "hs-1",
    event: "Hospitality Services",
    eventCode: "HS",
    cluster: "hospitality",
    situation:
      "You are a guest experience manager at The Whitmore, a 180-room upscale independent hotel in downtown Austin, Texas. The general manager has shared the latest guest satisfaction data: the hotel's overall NPS has dropped from 62 to 41 over the past two quarters, a decline that has coincided with a 12% increase in total bookings due to an aggressive Expedia promotions campaign. The top three complaints in post-stay surveys are slow check-in times averaging 9 minutes versus the industry benchmark of 3 minutes, inconsistent response to room-service requests with an average fulfillment time of 47 minutes against the promised 30, and perceived unfriendliness from front desk staff during the 3:00–6:00 PM peak arrival window.\n\nOccupancy is currently running at 74%, and repeat booking rates have declined from 31% to 22% over the same period. The Whitmore is losing loyal guests to The Archer Hotel two blocks away, which recently installed a Zaplox-powered mobile check-in and keyless entry system and reported an NPS of 71 in a recent press release. The Whitmore's front desk is staffed with four agents at peak and two overnight, with no dedicated concierge position—the front desk handles all guest inquiries, luggage, wake-up calls, and room-service coordination simultaneously.\n\nYour task is to diagnose the root causes of the satisfaction decline by analyzing the operational data, identifying staffing gaps, and evaluating the technology gaps relative to the competitive set. You must recommend a prioritized set of operational improvements, a technology adoption roadmap, and a staff training initiative that can realistically be implemented within the hotel's current annual budget cycle. Each recommendation must include a rationale tied directly to the NPS components that are scoring below benchmark.\n\nPresent your improvement plan to the general manager with projected impact on NPS score and occupancy retention, a 90-day implementation timeline, and a clear assignment of accountability for each action item.",
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
      "You are an operations supervisor at Cascade Conference Center, a standalone meetings and events venue in Portland, Oregon, that hosts 300–400 events annually and generates $4.2 million in annual revenue. The venue operates with a full-time staff of 22 and a part-time event staff pool of approximately 40. A corporate client, Nexus Pharmaceuticals, has contracted the venue for a 3-day national sales conference for 220 attendees beginning in six weeks, with a total contracted value of $187,000 including catering, A/V, and room rental.\n\nThree days ago, a series of cascading changes emerged from the client side. Nexus's event coordinator informed you that their keynote speaker—a nationally recognized industry analyst contracted to deliver a 90-minute opening session—has cancelled due to a family emergency with only six weeks of lead time. Simultaneously, the client has revised their catering format from a buffet to a plated three-course service, which increases per-head cost by $38 and will require six additional banquet staff per meal service. They also need an additional 40 breakout chairs that are not in the venue's current inventory, as the storage room holds only 380 chairs—a detail missed during the original site walkthrough.\n\nEach of these three changes carries its own logistical complexity. The keynote replacement must fit the pharmaceutical sales conference context and must pass Nexus's internal speaker vetting process, which requires two weeks of lead time. The catering upgrade will push the food and beverage total from $62,000 to $70,360, and your banquet staff vendor has a 72-hour minimum booking notice requirement. The chair shortage must be resolved through a rental vendor, but the two nearest party-rental suppliers in Portland are both reporting limited availability in that date window due to a competing convention at the Oregon Convention Center.\n\nYou must triage all three challenges, identify specific solutions within the venue's resources and vendor network, and communicate a revised event plan to the Nexus coordinator in a professional manner that maintains the client relationship and documents all financial adjustments in writing before the event date. Present your complete revised event plan.",
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

  // ─── TRAVEL & TOURISM (TT) ────────────────────────────────────────────────

  {
    id: "tt-1",
    event: "Travel & Tourism",
    eventCode: "TT",
    cluster: "hospitality",
    situation:
      "You are a destination marketing specialist at the Coastal Carolina Tourism Bureau, a regional destination marketing organization (DMO) serving a five-county coastal region with an annual operating budget of $3.8 million. The region encompasses the towns of Morehead City, Beaufort, Swansboro, and Atlantic Beach, anchored by a 26-mile Atlantic coastline, three state parks, and a nationally recognized crystal coast diving corridor. Overnight visitor spending in the region totaled $487 million last year but grew only 1.2%, lagging well behind the statewide North Carolina average of 4.7% growth for the same period.\n\nAnalysis of visitor origin data reveals that 68% of current visitors are repeat day-trippers from within a 150-mile drive radius—primarily from the Raleigh-Durham metro, Greenville, and Fayetteville markets—spending an average of $94 per person per visit. The bureau's strategic five-year plan establishes a clear goal of shifting the visitor mix to attract higher-spending overnight guests from markets 300 or more miles away, where the target visitor spends an average of $312 per person per day and stays 3.4 nights. The bureau's board has approved a $900,000 targeted marketing campaign to launch in the next fiscal year, representing the largest single campaign in the bureau's 14-year history.\n\nYou have been tasked with building the full campaign strategy from the ground up. Competitive analysis shows that Hilton Head Island, Myrtle Beach, and the Outer Banks collectively dominate unaided awareness among beach destination travelers in the mid-Atlantic and Southeast. Coastal Carolina's brand tracking study shows 74% unaided awareness in the local drive market but only 11% in the priority distant markets of Charlotte, Atlanta, Washington D.C., and Philadelphia. The bureau's social media platforms have a combined 84,000 followers with strong TikTok engagement in the 25–34 demographic.\n\nYou must recommend specific target markets, select marketing channels with a proposed budget allocation, design a messaging platform that differentiates the region from the major competing beach destinations, and develop a measurement framework that the board can use to evaluate ROI at the end of year one. Present your complete campaign strategy to the bureau's board of directors.",
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
      "You are a senior travel consultant at Altitude Travel Agency, a boutique independently owned agency in Denver, Colorado, specializing in adventure and experiential travel for high-net-worth individuals. The agency books approximately 320 itineraries per year and has a 78% repeat client rate. A couple, Ben and Sophia Marchetti, have come in to plan a 14-day trip to Patagonia, South America, to celebrate their 20th wedding anniversary. Their total budget is $18,000 for two people, all-inclusive of flights from Denver International Airport, accommodations, guided tours, transfers, travel insurance, and all meals.\n\nBen is an experienced outdoor enthusiast who has completed multi-day treks in New Zealand and Iceland. He has specifically requested the W Trek through Torres del Paine National Park, which involves four days of backcountry hiking with overnight stays in refugios. Sophia has never done multi-day hiking and prefers boutique hotel accommodations with a minimum four-star rating; she has expressed concern about the physical demands of extended trekking at high elevation given that she has mild asthma managed with a daily Symbicort inhaler. The couple's anniversary date falls on November 14th, which means the trip must begin in early November—peak shoulder season in Patagonia before the summer crowds fully arrive.\n\nAlpha-class Patagonia air routing from Denver requires a connection through Miami or New York to Santiago, then a three-hour domestic flight to Punta Arenas. Round-trip airfare in the current GDS is pricing at $2,100 per person in economy and $4,800 in premium economy. Ground logistics in the region require private transfer vehicles, and Torres del Paine is a 2.5-hour drive from Puerto Natales. You have two preferred suppliers in Patagonia: Australis Expediciones for full-service trekking packages, and Entre Vientos Boutique Hotel in Puerto Natales, which offers a 12% agency commission.\n\nYou must develop a complete 14-day itinerary that authentically addresses both Ben's trekking goals and Sophia's comfort and health requirements, recommend appropriate accommodations, address Sophia's asthma considerations with specific logistical recommendations, and present a transparent day-by-day cost breakdown. Present the complete travel proposal to the clients.",
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

  // ─── RESTAURANT & FOOD SERVICE MANAGEMENT (RFSM) ─────────────────────────

  {
    id: "rfsm-1",
    event: "Restaurant & Food Service Management",
    eventCode: "RFSM",
    cluster: "hospitality",
    situation:
      "You are an operations consultant hired by Mesa Verde Kitchen, a fast-casual Mexican restaurant with two locations in Albuquerque, New Mexico—one in the Nob Hill neighborhood and one near the Cottonwood Mall. Combined annual revenue is $2.1 million, with the Nob Hill location generating approximately $1.3 million and the Cottonwood location generating $800,000. The owner, Carlos Espinoza, has brought you in because the restaurant's blended food cost percentage has risen from 28% to 38% over the past six months, a 10-point increase that is costing the business approximately $210,000 in annual margin at current revenue levels.\n\nCarlos has identified several contributing symptoms. Both kitchens are exhibiting high levels of end-of-shift food waste—prep is done in large batch quantities without forecasting tied to daily cover counts. Portion sizes are visibly inconsistent across shifts, with heavier portions observed on the closing shift at both locations. A manager at the Cottonwood location recently discovered that weekly ground beef inventory reconciliations were showing shortfalls of 8–12 pounds per week, suggesting a potential employee theft issue. The kitchen staff across both locations totals 14 employees operating three shifts per day, seven days a week, with no standardized recipe cards, no portion-control scales in use, and no line-check process before service.\n\nYour analysis of the P&L shows that at 38% food cost, the restaurant is operating below breakeven after accounting for 32% labor cost and 11% occupancy costs. The industry benchmark for fast-casual Mexican concepts is 28–31% food cost. To return the business to profitability, food cost must be brought back to 30% within 60 days. You have reviewed the current POS system—a Square for Restaurants setup—and confirmed it has menu engineering, modifier tracking, and sales-by-item reporting capabilities that are currently unused by management.\n\nYou must identify the primary operational drivers of the elevated food cost with supporting data, recommend a complete set of controls and training practices to bring food cost to 30% within 60 days, and outline a food waste reduction program that can be sustained operationally. Present your findings and the full action plan to Carlos with projected financial impact.",
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
      "You are the food service director at Lakewood Unified School District in Lakewood, Colorado, overseeing meal programs at 12 schools—8 elementary, 3 middle, and 1 high school—that collectively serve approximately 6,800 students daily. The district participates in the National School Lunch Program (NSLP) and receives approximately $1.9 million in annual federal reimbursements. The program currently employs 34 food service workers across all sites and operates an annual budget of $3.6 million.\n\nThe district has been awarded a Colorado Department of Education Farm-to-School grant of $140,000 designated for improving the nutritional quality of school meals and increasing student meal participation. Current meal participation stands at 54%—nine percentage points below the state average of 63%—resulting in an estimated $310,000 in annual foregone federal reimbursement revenue. A student survey conducted in January across all grade levels identified the top three reasons for non-participation as: poor perceived food quality (cited by 61% of non-participants), limited vegetarian and plant-based options (cited by 44%), and long lunch lines averaging 11 minutes at the three largest schools, causing students to skip the line entirely during 30-minute lunch periods.\n\nThe $140,000 grant has specific restrictions: all funds must be expended within the current academic year, and the grant cannot be used for staff wages, benefits, or recurring labor costs of any kind. An interim audit of the kitchen equipment at the middle and high school sites found that the high school's serving line uses a legacy steam table that slows throughput and that the middle schools lack the express checkout lane infrastructure that has been shown in peer districts to reduce line times by 40%. The grant period ends June 30th, and the district must submit a final report with documented participation rate outcomes.\n\nYou must develop a strategic deployment plan for the $140,000 that addresses food quality, menu variety, and service speed simultaneously within the grant constraints. Present your full plan to the district superintendent with a proposed budget allocation, a menu pilot program for the first quarter, a projected participation rate improvement, and a measurement methodology.",
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

  // ─── HOTEL & LODGING MANAGEMENT (HLM) ────────────────────────────────────

  {
    id: "hlm-1",
    event: "Hotel & Lodging Management",
    eventCode: "HLM",
    cluster: "hospitality",
    situation:
      "You are the revenue manager at The Palomar Grand, a 240-room full-service hotel affiliated with Autograph Collection by Marriott in downtown Denver, Colorado. The property features two food and beverage outlets, a 12,000-square-foot meeting space, a rooftop bar, and a fitness center with spa services. Your current average daily rate (ADR) is $189, and occupancy is running at 67%, yielding a RevPAR of $126.63. The hotel's STR competitive set—comprising five comparable downtown Denver properties—has a market RevPAR of $138.50, meaning The Palomar Grand's RevPAR index is 91.4: you are capturing 8.6% below your fair share.\n\nDemand segmentation data from the past 12 months reveals a clear pattern: weekend occupancy (Friday–Sunday) averages 84% at ADR $209, driven primarily by leisure travelers who frequently book through Expedia and Booking.com at a blended commission cost of 18%. Monday-through-Thursday occupancy averages only 55% at ADR $176, well below the competitive set's weekday average of 69%. Top-10 corporate accounts are contracted at $175 per night (the negotiated floor), and Marriott Bonvoy loyalty members are guaranteed a floor of $159. The corporate transient segment has not grown year-over-year, while three nearby companies—Healthgrades, Ibotta, and Nava Benefits—have each grown their Denver headcount by 20% or more and represent untapped accounts.\n\nYou have reviewed the hotel's channel mix and found that 52% of revenue is flowing through OTA channels, 31% through Marriott.com direct, and 17% through voice/GDS. The property has underutilized Marriott's Bonvoy Moments and Business Rate programs that could attract corporate accounts without rate floor conflicts. Meeting room revenue is also significantly below comp set: The Palomar Grand's meeting space is generating $380 per square foot annually versus a comp set average of $520, suggesting a packaging or sales gap.\n\nYou must develop a comprehensive revenue strategy to improve weekday occupancy by at least 8 percentage points and raise blended ADR to $198 within the next quarter. Present your full strategy to the general manager, including channel optimization tactics, corporate account prospecting recommendations, meeting space revenue initiatives, and projected RevPAR impact.",
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
      "You are the rooms division manager at Harborview Suites, a 120-room extended-stay hotel in Seattle's South Lake Union neighborhood, affiliated with the Homewood Suites by Hilton brand. The property primarily serves long-term corporate relocations and project-based workforce guests, with an average length of stay of 8.4 nights. Last month, the hotel received a Hilton Quality Assurance audit score of 74 out of 100—eight points below the brand's required minimum threshold of 82—triggering a mandatory performance improvement plan (PIP) under the franchise agreement.\n\nThe QA audit report identified three critical deficiency categories. First, 18 of the 120 studio and one-bedroom units have HVAC units that either fail to maintain temperature within 2 degrees of the thermostat setting or produce audible rattling during operation; full unit replacement is quoted at $3,200 per unit, totaling $57,600 for all 18. Second, guestroom cleanliness scores in the QA audit averaged 6.8 out of 10, with recurring citations for missed baseboards, hard water staining on bathroom fixtures, and inconsistent replenishment of kitchen supplies—an inspector noted that 9 out of 30 inspected rooms were missing at least one standard kitchen item on arrival. Third, front desk response time to guest service requests averaged 14 minutes against the brand standard of 5 minutes, driven largely by a single-agent overnight shift that is responsible for check-in, service calls, and phone inquiries simultaneously.\n\nThe general manager, who has been with the property for only four months, has set a firm deadline of 90 days to bring the QA score above 82 or face escalating brand sanctions including mandatory operational intervention and potential franchise contract termination. The property ownership group is reviewing two other PIP hotels in their portfolio and is reluctant to approve capital expenditures without a compelling ROI analysis.\n\nYou must prioritize the three remediation tracks, develop a specific operational improvement plan for each, build the business case for the HVAC capital expenditure, and present a realistic 90-day timeline with measurable milestones and accountability assignments. Present your complete plan to the general manager.",
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
  },

  // ─── FOOD SERVICE MANAGEMENT (FSM) ───────────────────────────────────────

  {
    id: "fsm-1",
    event: "Food Service Management",
    eventCode: "FSM",
    cluster: "hospitality",
    situation:
      "You are the food service director at Meridian Health System, overseeing cafeteria and patient dining operations at a 420-bed regional hospital in Columbus, Ohio. The department employs 62 full-time and part-time staff and manages a combined annual food and supply budget of $4.8 million. Retail cafeteria sales serve an average of 1,100 customers per day—employees, visitors, and outpatients—while the patient dining program delivers approximately 900 meal trays per day across three main meal periods. The administration has asked you to present a comprehensive operational improvement plan after a recent employee satisfaction survey showed that only 34% of hospital staff rate the cafeteria as \"good\" or \"excellent,\" and patient satisfaction Press Ganey scores for food quality rank in the 28th percentile among peer hospitals nationally.\n\nKey operational pain points have been identified through exit surveys and departmental data. The cafeteria's hot entree station closes at 2:00 PM, leaving a 2-hour gap before dinner service during which nurses and staff working 12-hour shifts have no hot meal option. The patient tray delivery program uses a traditional batch cooking and central tray assembly model that results in meal temperatures averaging 128°F on delivery, below the recommended 140°F safety standard and contributing to patient complaints. The department's food cost is running at 41% of revenue, driven by excessive over-production in the cafeteria bakery and a lack of procurement contracts with local food distributors. Annual food waste has been estimated at 18,400 pounds across both retail and patient operations.\n\nAdministration has approved a capital project budget of $220,000 for food service improvements, to be deployed over the next 18 months. Additionally, a neighboring hospital in the health system recently piloted an on-demand patient room service model—replacing the traditional tray delivery schedule with a restaurant-style 6:30 AM to 8:00 PM call-in ordering system—and reported a 19-point increase in Press Ganey food quality scores within two quarters. You have been asked to evaluate whether Meridian should adopt the room service model as part of the broader improvement initiative.\n\nPresent a full improvement plan to the VP of Operations that addresses cafeteria service hours, patient meal quality, food cost reduction, waste minimization, and a recommendation on the room service model, with proposed capital allocation and projected outcomes.",
    individualPIs: [
      "Explain the principles of large-scale food service operations management",
      "Describe the role of food safety and temperature control in institutional dining",
      "Explain the importance of menu engineering in food service profitability",
      "Describe strategies for reducing operational food waste",
      "Explain the nature of capital planning in food service management"
    ],
    tdmPIs: [
      "Explain the principles of large-scale food service operations management",
      "Describe the role of food safety and temperature control in institutional dining",
      "Explain the importance of menu engineering in food service profitability",
      "Describe strategies for reducing operational food waste",
      "Explain the nature of capital planning in food service management",
      "Describe the impact of patient satisfaction scores on hospital reimbursement",
      "Explain the nature of procurement and supplier relationship management in food service"
    ],
    judgementQuestions: [
      "How would you phase the $220,000 capital budget across the competing priorities—patient dining equipment, cafeteria station upgrades, and technology—to achieve the greatest Press Ganey score improvement within the first 12 months?",
      "What specific operational changes would you make to close the 128°F-to-140°F temperature gap in patient meal delivery without adopting the full room service model?",
      "If administration approves the room service model, what is your staffing plan, and how do you address the labor cost increase given the current 41% food cost constraint?"
    ]
  },
  {
    id: "fsm-2",
    event: "Food Service Management",
    eventCode: "FSM",
    cluster: "hospitality",
    situation:
      "You are the director of food service operations at Pacific Coast University, a 14,000-student residential university in San Luis Obispo, California. Your department operates four residential dining halls, two food courts, a catering division, and a campus convenience store network generating combined annual revenue of $18.2 million. The residential dining program operates on a board plan model in which residential students pay a mandatory $5,800 annual meal plan. Last spring, the Student Government Association passed a resolution demanding a formal review of the dining program after a student-led survey found that only 28% of residential students rated the dining program as satisfactory.\n\nThe survey identified five specific dissatisfaction drivers: 41% of respondents cited a lack of culturally diverse cuisine options that reflect the campus demographic (which is 38% first-generation, 29% Latino, and 14% Asian/Pacific Islander); 37% cited repetitive menus that rotate on a two-week cycle with few seasonal variations; 33% cited long wait times at the two most-trafficked dining halls during the 11:30 AM–1:30 PM peak; 29% cited inadequate vegan and gluten-free options beyond a single designated station; and 24% cited the quality of late-night dining, which is served from a limited menu after 9:00 PM. The meal plan opt-out rate for upperclassmen—who may choose not to renew—is 19% and trending upward.\n\nYour culinary team consists of 4 executive sous chefs, 28 full-time line cooks, and 86 part-time student workers. The university's food service agreement with Aramark expires in 18 months, and the administration is evaluating whether to renew or bring operations fully in-house. The CFO has set a financial expectation that any improvement initiative must be cost-neutral or positive—meaning it cannot increase the per-student meal plan cost above the current $5,800 level without Board of Trustees approval. The department's current food cost is 34%, labor is 38%, and overhead is 14%, leaving a margin of 14%.\n\nYou must develop a comprehensive dining improvement plan that addresses all five satisfaction drivers, present a feasible operational and culinary strategy to the Vice President of Student Affairs, and make a recommendation on the Aramark contract renewal. Include a financial analysis demonstrating cost neutrality.",
    individualPIs: [
      "Explain the principles of university dining program management",
      "Describe strategies for incorporating culinary diversity in institutional menus",
      "Explain the importance of customer feedback in continuous foodservice improvement",
      "Describe the financial structure of managed food service contracts",
      "Explain the nature of workforce management in food service operations"
    ],
    tdmPIs: [
      "Explain the principles of university dining program management",
      "Describe strategies for incorporating culinary diversity in institutional menus",
      "Explain the importance of customer feedback in continuous foodservice improvement",
      "Describe the financial structure of managed food service contracts",
      "Explain the nature of workforce management in food service operations",
      "Describe the role of sustainable sourcing in institutional food service",
      "Explain the impact of student satisfaction on enrollment and retention decisions"
    ],
    judgementQuestions: [
      "How would you introduce culinary diversity programming—such as rotating international stations—within the existing food cost constraint of 34% without raising the meal plan price?",
      "What operational changes at the two highest-traffic dining halls would you implement to reduce peak-period wait times, and how would you measure the impact on student satisfaction?",
      "In evaluating the Aramark contract renewal versus in-house operation, what are the three most critical financial and operational factors you would analyze, and what additional data would you need?"
    ]
  },

  // ─── QUICK SERVE RESTAURANT MANAGEMENT (QSRM) ────────────────────────────

  {
    id: "qsrm-1",
    event: "Quick Serve Restaurant Management",
    eventCode: "QSRM",
    cluster: "hospitality",
    situation:
      "You are the area operations manager for a group of six Chick-fil-A franchise locations across suburban Charlotte, North Carolina, owned by a single operator, Marcus Webb. Combined annual system sales across the six locations total $24.3 million. Three of the six locations are meeting or exceeding Chick-fil-A's national average sales-per-unit benchmarks, but two locations—the Steele Creek and Northlake Mall locations—are underperforming by 17% and 23% respectively. Marcus has asked you to develop a turnaround plan for the two underperforming units and, separately, to address a labor challenge affecting all six locations.\n\nAt the Steele Creek location, mystery shopper scores over the past two quarters show an average window service time of 4 minutes 22 seconds in the drive-through, well above the Chick-fil-A system target of under 3 minutes. The location's average order accuracy rate is 94.1%, below the system goal of 99.1%. Exit interviews with customers who completed short feedback surveys cite specific issues: wrong sauces, missing items, and incorrect substitutions. The Northlake Mall location operates in a food court, and foot traffic data from mall management shows total mall visits are down 14% year-over-year due to the closure of an anchor tenant. Despite this, comparable quick-service competitors in the same food court have maintained sales by expanding their digital ordering capabilities.\n\nThe labor challenge across all six locations centers on a 74% annual crew turnover rate—well above the QSR industry average of 60% and significantly above Chick-fil-A's national benchmark of approximately 55%. Exit survey data from departing crew members identify three leading causes: scheduling unpredictability (cited by 51%), perceived lack of advancement opportunity (cited by 39%), and pay rates that are $1.25 per hour below the competing employers in the area, including a new Amazon fulfillment center that opened six months ago and a Target distribution facility.\n\nPresent a comprehensive two-part plan to Marcus: first, specific operational turnaround strategies for the Steele Creek and Northlake Mall locations; second, a retention initiative to reduce crew turnover to below 55% across all six locations within 12 months.",
    individualPIs: [
      "Explain the nature of drive-through operations management in quick service restaurants",
      "Describe strategies for improving order accuracy in high-volume QSR environments",
      "Explain the importance of employee retention in quick service restaurant profitability",
      "Describe the role of digital ordering in quick service restaurant growth",
      "Explain the nature of sales performance analysis in multi-unit restaurant management"
    ],
    tdmPIs: [
      "Explain the nature of drive-through operations management in quick service restaurants",
      "Describe strategies for improving order accuracy in high-volume QSR environments",
      "Explain the importance of employee retention in quick service restaurant profitability",
      "Describe the role of digital ordering in quick service restaurant growth",
      "Explain the nature of sales performance analysis in multi-unit restaurant management",
      "Describe the financial impact of employee turnover on QSR operations",
      "Explain the importance of competitive wage analysis in QSR labor strategy"
    ],
    judgementQuestions: [
      "What specific process changes at the Steele Creek drive-through—staffing positioning, order-taking technology, or kitchen workflow—would you implement to close the gap from 4:22 to under 3:00 minutes?",
      "For the Northlake Mall location dealing with a 14% decline in foot traffic, what digital or off-premises strategies would you recommend to compensate for reduced walk-in volume?",
      "If Marcus cannot immediately raise starting wages by $1.25 per hour across all six locations due to margin constraints, what non-wage retention levers would you prioritize to close the gap with competing employers?"
    ]
  },
  {
    id: "qsrm-2",
    event: "Quick Serve Restaurant Management",
    eventCode: "QSRM",
    cluster: "hospitality",
    situation:
      "You are the general manager of a high-volume McDonald's franchise unit in Orlando, Florida, located adjacent to the International Drive tourist corridor. The location generates $4.6 million in annual sales and serves approximately 1,800 customers per day across its dining room, drive-through (two lanes), and a mobile order pickup area that was added 18 months ago. The franchise owner, Diana Reyes, has brought you in to address two converging operational crises that are threatening the location's profitability and its upcoming McDonald's corporate Quality Service Cleanliness (QSC) evaluation scheduled in seven weeks.\n\nThe first crisis is a kitchen throughput bottleneck during the 11:00 AM–2:00 PM lunch rush. The location's current average service time from order to delivery is 6 minutes 14 seconds, against McDonald's corporate standard of 4 minutes or less. During the lunch peak, the mobile order pickup lane is causing physical congestion in the kitchen because mobile orders enter the production queue identically to in-restaurant and drive-through orders, creating a scenario where the kitchen is simultaneously working three demand streams with no priority sequencing. This has resulted in 47 documented customer complaints in the past 60 days related to wait times, and a 2.1-star average on the most recent 90-day Google review window.\n\nThe second crisis involves food safety compliance. The location's internal health monitoring logs from the past 90 days reveal 14 instances where core temperature checks on quarter-pound beef patties at the holding station showed readings below the 165°F safe hold temperature. This is a critical food safety violation under Florida Department of Health standards. The QSC evaluation will include unannounced temperature monitoring by a McDonald's regional quality auditor. The root cause appears to be a combination of holding time violations during the rush and a 9-year-old holding cabinet that is losing temperature consistency.\n\nYou must present Diana with a 7-week action plan that addresses both the throughput problem and the food safety compliance issues before the QSC evaluation, including a capital request for the holding cabinet and projected impact on the QSC score. Your plan must also address how to improve the Google review rating within the same timeframe.",
    individualPIs: [
      "Explain the relationship between kitchen throughput and customer satisfaction in QSR operations",
      "Describe the nature of food safety compliance management in quick service restaurants",
      "Explain the importance of multi-channel order management in modern QSR operations",
      "Describe the role of capital equipment investment in QSR operational quality",
      "Explain the impact of online reviews on quick service restaurant performance"
    ],
    tdmPIs: [
      "Explain the relationship between kitchen throughput and customer satisfaction in QSR operations",
      "Describe the nature of food safety compliance management in quick service restaurants",
      "Explain the importance of multi-channel order management in modern QSR operations",
      "Describe the role of capital equipment investment in QSR operational quality",
      "Explain the impact of online reviews on quick service restaurant performance",
      "Describe strategies for managing peak-period demand in high-volume food service",
      "Explain the nature of franchise brand standards and operator compliance requirements"
    ],
    judgementQuestions: [
      "What specific kitchen sequencing or staffing changes would you implement to create priority lanes for mobile, drive-through, and dine-in orders without adding headcount during the lunch rush?",
      "Given the 14 documented temperature violations and the QSC evaluation in seven weeks, how would you build the business case for emergency capital approval of a new holding cabinet to Diana?",
      "What is your specific strategy to move the Google review rating from 2.1 stars upward before the QSC evaluation, and how would you respond to existing negative reviews about wait times?"
    ]
  },

  // ─── RESORT & CONVENTION MANAGEMENT (RCM) ────────────────────────────────

  {
    id: "rcm-1",
    event: "Resort & Convention Management",
    eventCode: "RCM",
    cluster: "hospitality",
    situation:
      "You are the director of sales and marketing at The Sanctuary at Kiawah Island, a 255-room five-diamond resort on Kiawah Island, South Carolina. The resort features five food and beverage outlets including the AAA Five Diamond The Ocean Room restaurant, two championship golf courses, a 21,000-square-foot spa, and 20,000 square feet of indoor meeting and event space. Annual revenue is approximately $78 million, with the resort operating in a highly seasonal pattern: Q1 and Q4 are the shoulder season, while June through September generates 58% of annual revenue. Occupancy averages 91% in peak season and 52% in shoulder season.\n\nThe VP of Operations has tasked you with developing a comprehensive strategy to increase shoulder season revenue by 15% over the next fiscal year. Current shoulder season ADR is $485, and the resort is priced below its competitive set—Palmetto Bluff in Bluffton and The Inn at Palmetto Bluff—by approximately $60 per night during Q1. Group meeting and convention business currently represents only 18% of shoulder season bookings, well below the resort's theoretical capacity utilization for the meeting space during that period. The resort's spa runs at 40% capacity in shoulder season versus 95% in peak.\n\nMarket intelligence gathered by the sales team shows three addressable opportunities. First, the corporate incentive travel segment—where companies reward top-performing employees with luxury resort trips—has grown 22% in the Southeast market over the past three years, and The Sanctuary has no dedicated incentive sales effort. Second, the destination wedding market in the Southeast corridor is projected to reach $2.1 billion this year, and the resort's outdoor ceremony venues and Five Diamond dining make it a natural fit; currently only 11 weddings are booked for the coming shoulder season. Third, the association meeting segment typically books 18–24 months in advance, and the resort has only 14 definite group contracts on the books for the next shoulder period.\n\nPresent a full shoulder season revenue strategy to the VP of Operations, including pricing adjustments, specific tactics for each of the three market segments, a sales team resource allocation recommendation, and projected revenue impact.",
    individualPIs: [
      "Explain the nature of revenue management in resort operations",
      "Describe strategies for developing group and convention business in hospitality",
      "Explain the importance of market segmentation in resort sales strategy",
      "Describe the role of destination wedding and social event sales in resort revenue",
      "Explain the nature of incentive travel and its impact on luxury resort bookings"
    ],
    tdmPIs: [
      "Explain the nature of revenue management in resort operations",
      "Describe strategies for developing group and convention business in hospitality",
      "Explain the importance of market segmentation in resort sales strategy",
      "Describe the role of destination wedding and social event sales in resort revenue",
      "Explain the nature of incentive travel and its impact on luxury resort bookings",
      "Describe the impact of shoulder season strategies on annual resort profitability",
      "Explain the role of competitive pricing analysis in luxury hospitality positioning"
    ],
    judgementQuestions: [
      "Given that the resort is priced $60 below Palmetto Bluff during shoulder season, what is your rationale for either raising rates to match the comp set or maintaining the discount as a volume driver?",
      "How would you structure a dedicated incentive travel sales effort—including which trade shows, third-party incentive houses, and corporate verticals you would target—within the existing sales team without adding headcount?",
      "If the goal is 11 additional shoulder-season weddings (doubling from 11 to 22), what specific package, pricing, and venue configuration changes would make The Sanctuary more competitive against non-resort destination wedding venues?"
    ]
  },
  {
    id: "rcm-2",
    event: "Resort & Convention Management",
    eventCode: "RCM",
    cluster: "hospitality",
    situation:
      "You are the convention services manager at the Hyatt Regency Grand Cypress, a 778-room full-service convention resort in Orlando, Florida, featuring 65,000 square feet of meeting space, four restaurants, three outdoor pool complexes, an 18-hole Jack Nicklaus golf course, and a full-service marina on Lake Windsong. The resort hosts approximately 220 group events per year and generated $112 million in total revenue last fiscal year. A significant contract that was signed 14 months ago is now seven weeks from its event date, and you have been handed a complex multi-layered problem that requires immediate resolution.\n\nThe contracted client is the American Association of Independent Insurance Agents (AAIA), a 3,400-member professional association holding its annual convention for 1,800 registered attendees over five days. The AAIA contract, valued at $2.4 million including room block, food and beverage, and meeting space rental, is the resort's largest single group of the year. Three weeks ago, the AAIA executive director notified you that their exhibit hall setup—which had been planned for the 28,000-square-foot Grand Ballroom—must be reconfigured from a theater-plus-exhibit hybrid to a pure trade show floor with 140 eight-by-ten-foot booths, a configuration that requires 32,000 square feet of unobstructed floor space. The Grand Ballroom cannot accommodate this without a pillar conflict, and the resort's second-largest ballroom, the Palms Ballroom at 22,000 square feet, is too small.\n\nThe only feasible reconfiguration is to tent a 34,000-square-foot outdoor space on the resort's north lawn, which would require a temporary structure company, climate control rental, flooring, power distribution, and A/V—at an estimated additional cost of $187,000. This cost was not in the original contract. Simultaneously, the room block attrition clause in the contract specifies a 90% pickup commitment; current pickup is at 73%, and the client is disputing whether the shortfall is a force majeure event because two competing association conferences are now scheduled on the same dates.\n\nPresent a complete resolution plan to the resort general manager that addresses the exhibit hall reconfiguration, the financial negotiation with the client over the $187,000 incremental cost, and the attrition clause dispute—while protecting the $2.4 million revenue commitment.",
    individualPIs: [
      "Explain the nature of convention services management in resort operations",
      "Describe the process of managing large-scale convention logistics and space planning",
      "Explain the concept of group contract attrition and force majeure clauses",
      "Describe strategies for managing client expectations in high-value convention bookings",
      "Explain the importance of contingency planning in convention and event management"
    ],
    tdmPIs: [
      "Explain the nature of convention services management in resort operations",
      "Describe the process of managing large-scale convention logistics and space planning",
      "Explain the concept of group contract attrition and force majeure clauses",
      "Describe strategies for managing client expectations in high-value convention bookings",
      "Explain the importance of contingency planning in convention and event management",
      "Describe the financial structure of group convention contracts in resort management",
      "Explain the role of temporary event infrastructure in convention space solutions"
    ],
    judgementQuestions: [
      "How would you structure the financial conversation with the AAIA executive director about the $187,000 tenting cost—specifically, what portion would you absorb versus pass through, and what concessions might you offer in exchange?",
      "In evaluating the attrition clause dispute, what evidence would you require from the AAIA to determine whether the competing conference dates constitute a legitimate force majeure defense?",
      "If the tenting option is rejected by the client due to cost, what alternative reconfiguration strategy would you propose that keeps the trade show viable within the existing indoor meeting space footprint?"
    ]
  },

  // ─── TRAVEL & TOURISM MANAGEMENT (TTM) ───────────────────────────────────

  {
    id: "ttm-1",
    event: "Travel & Tourism Management",
    eventCode: "TTM",
    cluster: "hospitality",
    situation:
      "You are the general manager of Evergreen Adventures, a 12-year-old adventure travel company headquartered in Bend, Oregon, that specializes in guided outdoor experiences including multi-day river rafting trips on the Deschutes and Rogue Rivers, ski touring packages at Mt. Bachelor, and summer hiking expeditions in the Three Sisters Wilderness. Annual revenue is $3.2 million, generated across approximately 1,400 trip-guests per year. The company employs 8 full-time year-round staff and 22 seasonal guides. After three consecutive years of flat revenue growth, the owner has asked you to develop a strategic growth plan targeting 25% revenue growth over the next two years without acquiring additional guiding vehicles or expanding the permanent headcount beyond two additional positions.\n\nMarket research conducted by a consulting firm reveals three underexploited opportunity areas. Corporate team-building and outdoor leadership retreats are the fastest-growing subsegment in the Pacific Northwest adventure travel market, with local employers like NVIDIA's Hillsboro campus, Nike's Beaverton campus, and a cluster of Bend-area tech startups spending a combined estimated $18 million annually on off-site team retreats within a four-hour drive radius. Evergreen has never formally marketed to the corporate segment, and the company's current trip structure is entirely consumer-direct. The second opportunity involves international visitor groups: Visit Bend data shows that 31% of Bend overnight visitors arrive from outside the United States, predominantly from Germany, Australia, and Canada, yet Evergreen has no foreign-language trip literature, no international OTA partnerships with platforms like GetYourGuide or Viator, and no tour operator relationships in those origin markets. Third, the company's off-season winter revenue (November through February) constitutes only 11% of annual revenue despite Mt. Bachelor receiving an average of 462 inches of snowfall per year and operating an expanding backcountry guide program.\n\nYou must present the owner with a two-year strategic growth plan that identifies which of the three opportunities to prioritize, outlines the operational investment required for each, establishes a phased revenue projection, and includes a risk analysis for the highest-priority opportunity. The plan must demonstrate how 25% revenue growth can be achieved without exceeding the two new hire constraint.",
    individualPIs: [
      "Explain the nature of strategic growth planning in tourism businesses",
      "Describe the process of market opportunity analysis in adventure travel",
      "Explain the importance of corporate travel and team-building markets in tourism",
      "Describe the role of international distribution channels in adventure tourism",
      "Explain strategies for addressing tourism seasonality"
    ],
    tdmPIs: [
      "Explain the nature of strategic growth planning in tourism businesses",
      "Describe the process of market opportunity analysis in adventure travel",
      "Explain the importance of corporate travel and team-building markets in tourism",
      "Describe the role of international distribution channels in adventure tourism",
      "Explain strategies for addressing tourism seasonality",
      "Describe the financial modeling process for tourism business expansion",
      "Explain the importance of risk management in adventure tourism operations"
    ],
    judgementQuestions: [
      "Of the three identified opportunity areas—corporate retreats, international visitors, and winter season expansion—which would you prioritize first and why, given the two new hire constraint?",
      "What specific operational changes would be required to package Evergreen's current Deschutes River rafting trips as a corporate team-building product for a company like Nike or a Bend tech startup?",
      "How would you structure a partnership with GetYourGuide or Viator for the international visitor opportunity, including commission structure, trip packaging, and language accommodation logistics?"
    ]
  },
  {
    id: "ttm-2",
    event: "Travel & Tourism Management",
    eventCode: "TTM",
    cluster: "hospitality",
    situation:
      "You are the tourism development director for the Yakima Valley Tourism Bureau in Yakima, Washington, a regional DMO serving a wine country destination in central Washington State. The Yakima Valley AVA encompasses 130 wineries, 34 farms with agritourism programs, 6 craft breweries, and a growing culinary scene anchored by the downtown Yakima Public Market. The region attracts approximately 890,000 overnight visitors annually, generating $312 million in visitor spending. However, a 2024 visitor profile study shows that the destination skews heavily toward visitors aged 45–65, and the 28–44 demographic—the highest-spending generational cohort for wine and culinary tourism nationally—represents only 19% of current visitors, well below the 34% share that comparable wine destinations like Willamette Valley, Oregon, and Walla Walla, Washington, achieve with that demographic.\n\nThe bureau's board has charged you with developing a strategy to increase 28–44 year-old visitor share to 27% within three years, which would translate to an estimated $31 million increase in annual visitor spending based on the cohort's higher average daily expenditure of $287 versus the current overall average of $181. Research conducted across Seattle, Portland, and Spokane feeder markets—which collectively represent 61% of current Yakima Valley visitors—shows that 28–44 year-olds cite three primary barriers to visiting: a perception that Yakima Valley is \"only for wine people\" rather than a comprehensive food and experience destination, a lack of awareness of agritourism and outdoor recreation options that speak to an active lifestyle, and limited visibility on Instagram and TikTok compared to the Willamette Valley, which has 340,000 Instagram followers to Yakima Valley's 48,000.\n\nThe bureau has an annual total marketing budget of $1.6 million, of which $380,000 has been specifically designated for the demographic expansion initiative. Three Yakima Valley winery groups have agreed to co-invest $75,000 in targeted digital campaigns if the bureau develops a cohesive creative strategy. You must present a comprehensive three-year demographic expansion plan to the bureau board, including a creative platform, channel strategy, influencer marketing approach, and partnership development roadmap.",
    individualPIs: [
      "Explain the nature of destination brand positioning and repositioning",
      "Describe strategies for reaching and converting demographic target markets in tourism",
      "Explain the role of social media and influencer marketing in destination promotion",
      "Describe the importance of public-private partnership in destination marketing",
      "Explain the nature of visitor spending analysis and economic impact in tourism"
    ],
    tdmPIs: [
      "Explain the nature of destination brand positioning and repositioning",
      "Describe strategies for reaching and converting demographic target markets in tourism",
      "Explain the role of social media and influencer marketing in destination promotion",
      "Describe the importance of public-private partnership in destination marketing",
      "Explain the nature of visitor spending analysis and economic impact in tourism",
      "Describe the process of developing a multi-year destination marketing campaign",
      "Explain the relationship between perception barriers and destination visitation among younger travelers"
    ],
    judgementQuestions: [
      "What specific creative platform—including brand messaging, visual identity direction, and content themes—would you develop to shift Yakima Valley's perception from a wine-only destination to a broader food, outdoor, and cultural experience?",
      "How would you allocate the $380,000 demographic expansion budget across paid digital, influencer partnerships, content creation, and co-op marketing with the winery groups to maximize reach in the Seattle, Portland, and Spokane feeder markets?",
      "What are two or three specific agritourism or outdoor recreation experiences in the Yakima Valley that you would feature as hero content for the 28–44 demographic, and why would those resonate with that cohort?"
    ]
  },

  // ─── PRINCIPLES OF HOSPITALITY & TOURISM (PHT) ───────────────────────────

  {
    id: "pht-1",
    event: "Principles of Hospitality & Tourism",
    eventCode: "PHT",
    cluster: "hospitality",
    situation:
      "You are a junior front desk associate at The Bellamy Inn, a 94-room independent boutique hotel in Charleston, South Carolina, a city that received 7.5 million visitors last year and consistently ranks in the top five U.S. travel destinations in Condé Nast Traveler's Reader's Choice Awards. The Bellamy is a 4-star property with an ADR of $289 and a 5-year guest satisfaction average of 88%. The property is known for its personalized service, original 1890s architecture, and a nightly social hour with complimentary wine and local charcuterie.\n\nIt is 4:15 PM on a Friday afternoon in April—the start of a peak spring weekend—and you are the only associate at the desk. Your supervisor left 20 minutes ago for a mandatory staff meeting with the general manager. The lobby has three separate guest situations developing simultaneously. A couple who checked in this morning, the Hendersons, has returned to the desk very upset; they report that their room key stopped working while carrying luggage upstairs, they waited 8 minutes in the hallway, and their room had not been refreshed despite their 11:00 AM checkout time—meaning the housekeeper had not restocked the amenities. A solo business traveler, Mr. Patel, is standing at the desk for a walk-in reservation without a booking, asking for a room for three nights; you can see in the PMS that the hotel has exactly two deluxe king rooms available at $319 per night. A third guest, Mrs. Fontaine, who is checking out today after a four-night stay, is at the far end of the desk visibly waiting to speak with someone—she had previously mentioned to your supervisor that she wanted to provide feedback about the noise from a neighboring room.\n\nYou must manage all three guest interactions professionally, prioritize appropriately, and resolve each situation using the service principles and hospitality foundations you have been trained on. You will present your approach and decisions to the hotel's assistant general manager after the situation resolves.",
    individualPIs: [
      "Explain the importance of first impressions and hospitality service culture",
      "Describe strategies for prioritizing multiple simultaneous guest needs",
      "Explain the nature of service recovery in hospitality operations",
      "Describe the role of upselling and front desk sales in hotel revenue",
      "Explain the importance of active listening in hospitality guest interactions"
    ],
    tdmPIs: [
      "Explain the importance of first impressions and hospitality service culture",
      "Describe strategies for prioritizing multiple simultaneous guest needs",
      "Explain the nature of service recovery in hospitality operations",
      "Describe the role of upselling and front desk sales in hotel revenue",
      "Explain the importance of active listening in hospitality guest interactions",
      "Describe the foundational principles of hospitality and tourism as an industry",
      "Explain the economic importance of tourism to local and regional communities"
    ],
    judgementQuestions: [
      "Walk through the exact order in which you would address the three guest situations and your reasoning for that prioritization sequence.",
      "For the Hendersons' service failure—missed housekeeping refresh and a room lockout—what specific service recovery action would you offer and what is the appropriate level of compensation or gesture given a hotel with an $289 ADR?",
      "When Mr. Patel asks for a rate for a walk-in three-night stay, how would you present the $319 rate and handle any pushback—what value points specific to The Bellamy would you use to justify the rate?"
    ]
  },
  {
    id: "pht-2",
    event: "Principles of Hospitality & Tourism",
    eventCode: "PHT",
    cluster: "hospitality",
    situation:
      "You are a hospitality and tourism student completing a 120-hour cooperative education placement at Oceanside Resort & Spa, a 212-room oceanfront resort in Virginia Beach, Virginia. The resort operates three restaurants, a full-service spa, two outdoor pools, and a children's activity center called The Sea Lab. You are assigned to shadow and assist the resort's guest services team, and today your supervisor, the director of guest services, has asked you to sit in on a department debriefing meeting and then prepare a short presentation on what you observed during a particularly difficult guest scenario that unfolded during the lunch hour.\n\nThe scenario involved a family of six—the Tremblay family from Montreal—who are guests during a 5-night stay and arrived at the resort's signature oceanfront restaurant, The Tides, at 12:45 PM without a reservation on a Saturday during peak season. The restaurant was at 100% capacity with a 45-minute wait. The parents asked the host if they could be accommodated immediately because two of their children have nut allergies that make it stressful to eat at unfamiliar venues, and they had already attempted to eat at two other nearby restaurants that had 30-minute-plus waits. The host initially told them there was nothing available and pointed to a printed reservation sign. One of the parents became visibly frustrated and asked to speak to a manager.\n\nThe assistant restaurant manager, Jasmine, arrived at the host stand within 90 seconds. Jasmine acknowledged the family's situation, asked one focused question about the nut allergy specifics to understand the actual safety consideration, and then arranged for the family to be seated at the resort's poolside grill—The Deck—which had available seating, while personally communicating the allergy information to The Deck's kitchen manager in a written note delivered by a runner. She also offered the family a complimentary appetizer at The Deck as a goodwill gesture for the inconvenience. The family had a positive experience and later mentioned Jasmine by name in the post-stay survey.\n\nPresent a structured analysis of the guest service principles Jasmine demonstrated, identify what she did at each decision point and why it was effective, and connect her actions to foundational hospitality service principles. Your audience is the director of guest services.",
    individualPIs: [
      "Identify and explain core principles of hospitality guest service",
      "Describe the process of effective complaint handling and service recovery",
      "Explain the importance of empathy and communication in hospitality service delivery",
      "Describe the role of hospitality managers in creating positive guest experiences",
      "Explain how individual service interactions contribute to overall property reputation"
    ],
    tdmPIs: [
      "Identify and explain core principles of hospitality guest service",
      "Describe the process of effective complaint handling and service recovery",
      "Explain the importance of empathy and communication in hospitality service delivery",
      "Describe the role of hospitality managers in creating positive guest experiences",
      "Explain how individual service interactions contribute to overall property reputation",
      "Describe the relationship between employee empowerment and guest satisfaction outcomes",
      "Explain the impact of post-stay guest feedback on hospitality business performance"
    ],
    judgementQuestions: [
      "Identify the two most critical decision points in Jasmine's handling of the Tremblay situation and explain specifically why each decision was the right one from a hospitality service principles perspective.",
      "The complimentary appetizer Jasmine offered was a gesture rather than a full meal compensation—how do you determine the appropriate level of service recovery gesture, and why might over-compensating be just as problematic as under-compensating?",
      "If Jasmine had not been available and the host had been left to resolve the situation independently, what specific training or empowerment tools should front-line hospitality staff have to handle this type of scenario without manager intervention?"
    ]
  },

  // ─── EVENT PLANNING (EVP) ─────────────────────────────────────────────────

  {
    id: "evp-1",
    event: "Event Planning",
    eventCode: "EVP",
    cluster: "hospitality",
    situation:
      "You are a senior event coordinator at Pinnacle Events Group, a full-service event planning company in Nashville, Tennessee, that produces 80–100 events annually ranging from corporate meetings to large-scale social celebrations. The company employs 14 full-time staff including a production team, a culinary coordinator, and a logistics manager. A new client, Vanderbilt University Medical Center (VUMC), has hired Pinnacle to plan their 50th anniversary gala, an event that administration has described as the most important internal celebration in the institution's history. The event is set for October 15th—14 weeks from today—at the Schermerhorn Symphony Center in Nashville, with an expected attendance of 580 guests including the university chancellor, hospital board members, major donors, and approximately 200 frontline healthcare workers being recognized for service milestones.\n\nVUMC's internal event liaison, Dr. Patricia Obeng, has provided a preliminary budget of $285,000 for the full event production, including venue, catering, entertainment, A/V production, décor, transportation logistics, and printed recognition materials. The Schermerhorn has been confirmed as the venue and requires a $42,000 rental deposit by week two of the planning process. Preliminary catering conversations with the preferred caterer, The Countryside Provisions, indicate a per-head cost of $94 for a plated four-course dinner with a full bar service package, which would total approximately $54,520 for 580 guests before service fees and gratuity.\n\nThree complications are already emerging. First, Dr. Obeng has indicated that the 200 service milestone honorees each need to receive a personalized engraved crystal award, which is not yet in the budget and is being estimated by a vendor at $88 per unit—a $17,600 additional cost. Second, VUMC's communications department wants a 12-minute video tribute produced for the program, featuring interviews with 15 honorees, which carries a production quote of $22,000. Third, the Schermerhorn's standard evening load-in window is 10:00 AM to 4:00 PM on event day, but Pinnacle's A/V vendor, Stage Right Productions, has indicated they need a 6-hour load-in window starting no later than 9:00 AM to rig the custom truss lighting system for the ballroom.\n\nPresent Dr. Obeng with a complete event plan including a detailed production timeline, a revised budget reconciliation identifying where adjustments are needed, and a solutions plan for each of the three complications.",
    individualPIs: [
      "Explain the process of developing a comprehensive event production timeline",
      "Describe the nature of event budget management and reconciliation",
      "Explain strategies for managing multiple simultaneous vendor relationships in event planning",
      "Describe the importance of stakeholder communication in event coordination",
      "Explain the nature of contingency planning in large-scale event production"
    ],
    tdmPIs: [
      "Explain the process of developing a comprehensive event production timeline",
      "Describe the nature of event budget management and reconciliation",
      "Explain strategies for managing multiple simultaneous vendor relationships in event planning",
      "Describe the importance of stakeholder communication in event coordination",
      "Explain the nature of contingency planning in large-scale event production",
      "Describe the role of recognition programming in corporate and institutional event design",
      "Explain the impact of venue technical requirements on event production planning"
    ],
    judgementQuestions: [
      "The preliminary budget of $285,000 appears to be short by at least $39,600 when you add the crystal awards and video production costs—how would you present this budget gap to Dr. Obeng without damaging the client relationship, and what options would you offer?",
      "If Stage Right Productions requires a 9:00 AM load-in but the Schermerhorn's standard window starts at 10:00 AM, what is your negotiation strategy with the venue, and what is your fallback plan if the earlier access is denied?",
      "The gala must honor 200 frontline healthcare workers while also satisfying the expectations of board members and major donors at the same event—how would you design the program flow and recognition sequence to ensure both audiences feel the event is relevant and meaningful to them?"
    ]
  },
  {
    id: "evp-2",
    event: "Event Planning",
    eventCode: "EVP",
    cluster: "hospitality",
    situation:
      "You are the events manager at The Meridian Club, a private members club in Chicago, Illinois, with 1,200 active members. The club operates a 140-seat fine dining room, a members' lounge, a rooftop terrace, three private dining rooms, and a 4,800-square-foot ballroom. The events department generates $2.8 million in annual revenue and produces approximately 160 private events per year including business dinners, holiday parties, board retreats, wedding receptions, and quarterly member social events. Your team consists of two event coordinators and a full-time AV technician.\n\nA longtime club member, Helena Brandt, has contracted the club for her daughter Claire's wedding reception on June 7th—now 11 weeks away—for 310 guests. The total contracted value including food, beverage, ballroom rental, and ancillary services is $196,000. Helena has been a highly attentive client throughout the planning process and has a detailed vision for the event: a garden-party-inspired design with live botanical installations, a custom cocktail menu featuring seven signature drinks, a five-piece jazz ensemble for cocktail hour followed by a 12-piece big band for dancing, and a late-night dessert station with an espresso bar.\n\nFive weeks into active production, two serious issues have surfaced. The florist contracted for the $28,000 botanical installation—Vines & Botanicals, a boutique floral design studio—has notified the club that the studio owner has had a medical emergency and that the June 7th installation is in jeopardy. The backup plan of sourcing a replacement florist at this budget level with 11 weeks of lead time is complicated by the fact that three other large weddings in Chicago on that same weekend are competing for floral design capacity. The second issue is a menu conflict: the club's executive chef, Chef Marcus Williams, has informed you that two of Helena's seven requested cocktail ingredients—a specific Japanese yuzu liqueur and a white peach shrub from a small-batch producer in Michigan—are currently unavailable through the club's two liquor distributors due to supply disruptions, and the custom cocktail menu was a significant selling point for the client.\n\nPresent Helena with a proactive communication plan for both issues, a specific resolution strategy for the floral situation, and substitute cocktail ingredient recommendations that preserve the spirit of the custom menu—all while maintaining the trust and confidence of a high-value client who has an emotionally significant event 11 weeks away.",
    individualPIs: [
      "Describe strategies for managing vendor failures in time-sensitive event planning",
      "Explain the importance of proactive client communication in event coordination",
      "Describe the process of sourcing replacement vendors under time and budget constraints",
      "Explain the nature of creative problem-solving in private event management",
      "Describe the role of client relationship management in repeat and referral business"
    ],
    tdmPIs: [
      "Describe strategies for managing vendor failures in time-sensitive event planning",
      "Explain the importance of proactive client communication in event coordination",
      "Describe the process of sourcing replacement vendors under time and budget constraints",
      "Explain the nature of creative problem-solving in private event management",
      "Describe the role of client relationship management in repeat and referral business",
      "Explain the nature of contract risk and vendor contingency in event production",
      "Describe how service recovery principles apply to client-facing complications in luxury event management"
    ],
    judgementQuestions: [
      "How would you open the conversation with Helena about the Vines & Botanicals situation—what tone, what specific language, and what solutions-forward structure would you use to prevent the client from losing confidence in the club's ability to deliver?",
      "For the floral replacement, describe the specific steps you would take in the next 48 hours to find a replacement studio capable of executing a $28,000 botanical installation with 11 weeks of lead time in a competitive Chicago market weekend.",
      "On the cocktail ingredient substitutions, how would you present the two unavailable ingredients to Chef Williams as a creative reframing opportunity—what specific flavor profiles or alternative premium ingredients would you suggest to preserve the custom-crafted feeling of the cocktail menu?"
    ]
  },

  // ─── HOSPITALITY SERVICES (HSP) ──────────────────────────────────────────
  // Note: DECA uses both "HS" (Hospitality Services) and "HSP" as event codes
  // New scenarios use HSP to differentiate from the existing HS event code above

  {
    id: "hsp-1",
    event: "Hospitality Services",
    eventCode: "HSP",
    cluster: "hospitality",
    situation:
      "You are the director of rooms operations at The Grand Hyatt San Francisco, a 685-room luxury convention hotel adjacent to the Moscone Convention Center in the SoMa district. The property employs 420 total staff and operates four food and beverage outlets, a 31,000-square-foot fitness center and spa, and 38,000 square feet of meeting space. The hotel is a flagship urban property in the Grand Hyatt portfolio and is subject to regular brand quality standards evaluations by Hyatt corporate. In the most recent World of Hyatt Member Satisfaction Survey covering the trailing 12 months, the property's Overall Experience score was 79.4 out of 100, below the Grand Hyatt brand average of 84.1. The hotel ranked in the bottom quartile of the brand across three specific subcategories: Room Readiness on Arrival (74.2), Problem Resolution Effectiveness (71.8), and Digital Touchpoint Satisfaction (68.9).\n\nAn internal root cause analysis conducted by your operations team identified specific process failures behind each subcategory score. Room readiness failures are concentrated in the 2:00–4:00 PM check-in window, when the housekeeping department is completing the turnaround on rooms that were either late checkouts (the hotel allows late checkout until 2:00 PM for World of Hyatt Globalist members) or rooms flagged for deep cleaning. On peak convention days, up to 140 rooms can be in queue simultaneously, overwhelming the housekeeping supervisory capacity. Problem resolution failures trace to an inconsistent escalation protocol: 34% of documented guest complaints are resolved by the front desk team without manager involvement, but post-resolution surveys show those independently resolved complaints have a satisfaction rate of only 51%, compared to 84% for manager-involved resolutions. Digital touchpoint failures stem primarily from the hotel's in-app messaging system, which is averaging a first response time of 22 minutes versus Hyatt's brand target of 5 minutes.\n\nHyatt corporate has scheduled a Property Improvement Review in 16 weeks. You must present a remediation plan to the general manager that addresses all three subcategory gaps with specific operational changes, technology solutions where appropriate, and training interventions. Include a realistic projection for each subcategory score improvement and a measurement methodology to track progress weekly.",
    individualPIs: [
      "Explain the nature of rooms division operations in large-scale hotel management",
      "Describe the process of service failure analysis and operational root cause investigation",
      "Explain the role of digital guest communication tools in modern hospitality service delivery",
      "Describe the importance of escalation protocols in hotel complaint management",
      "Explain the nature of brand standard compliance in international hotel chain operations"
    ],
    tdmPIs: [
      "Explain the nature of rooms division operations in large-scale hotel management",
      "Describe the process of service failure analysis and operational root cause investigation",
      "Explain the role of digital guest communication tools in modern hospitality service delivery",
      "Describe the importance of escalation protocols in hotel complaint management",
      "Explain the nature of brand standard compliance in international hotel chain operations",
      "Describe the relationship between housekeeping operations and front desk coordination during peak check-in periods",
      "Explain the impact of loyalty program tier expectations on guest satisfaction standards in luxury hotels"
    ],
    judgementQuestions: [
      "For the Room Readiness problem on peak convention days with 140 rooms in queue, what specific operational or staffing change would have the greatest impact on reducing the queue while staying within the existing housekeeping labor budget?",
      "The data shows that front desk-resolved complaints have only a 51% satisfaction rate. What specific training or empowerment changes would you make to improve that rate—and how do you avoid the cost of having managers respond to every complaint?",
      "The in-app first response time is 22 minutes versus a 5-minute brand target. What is the root cause of this gap, and what staffing or technology change closes it most effectively within 16 weeks?"
    ]
  },
  {
    id: "hsp-2",
    event: "Hospitality Services",
    eventCode: "HSP",
    cluster: "hospitality",
    situation:
      "You are the concierge manager at The Ritz-Carlton, Half Moon Bay, a 261-room oceanfront luxury resort on the California coast 30 miles south of San Francisco. The resort has held its Forbes Five Star designation for 11 consecutive years and operates with a service philosophy centered on Ritz-Carlton's Gold Standards, including the principle that every employee is empowered to spend up to $2,000 per guest per incident to resolve a service issue without manager approval. The concierge desk is the hub of personalized service at the property and manages restaurant reservations, transportation, private experiences, local recommendations, and special-request fulfillment for approximately 280 departing and arriving guests daily.\n\nThis morning, you received a briefing from the overnight manager about a challenging situation that developed during the previous evening. A VIP guest, Mr. James Alderton, is a Ritz-Carlton Rewards Club member staying in one of the resort's three oceanfront Horizon Cottages at a rate of $2,800 per night for a 4-night anniversary stay with his wife, Margaret. Three separate service issues occurred: first, the private bonfire experience that the concierge team had confirmed and set up on the beach was dismantled by maintenance staff at 9:00 PM per a standing policy—a miscommunication between the concierge and operations teams that the Aldertons were not informed of in advance; second, Margaret's specific request for a gluten-free birthday cake for a surprise mid-stay celebration had been confirmed by the team but the pastry kitchen prepared a standard celebration cake, only discovering the error at 8:30 PM when the delivery was imminent; and third, Mr. Alderton called the concierge desk at 7:45 AM this morning and asked for a sunrise horseback riding experience on the beach—a service the resort previously offered but discontinued 18 months ago due to the departure of a vendor partnership.\n\nYou have the Aldertons' remaining one full day and checkout day to recover and close the stay on a five-star note. Present to the resort's director of rooms a full service recovery plan for the three previous incidents and a same-day experiential plan to ensure the Aldertons' last full day is memorable.",
    individualPIs: [
      "Explain the role of the concierge in luxury hospitality service delivery",
      "Describe the principles of service recovery at the luxury tier of hospitality",
      "Explain the nature of personalization in five-star guest experience management",
      "Describe strategies for managing interdepartmental communication failures in hospitality operations",
      "Explain the importance of anticipatory service in luxury hotel concierge operations"
    ],
    tdmPIs: [
      "Explain the role of the concierge in luxury hospitality service delivery",
      "Describe the principles of service recovery at the luxury tier of hospitality",
      "Explain the nature of personalization in five-star guest experience management",
      "Describe strategies for managing interdepartmental communication failures in hospitality operations",
      "Explain the importance of anticipatory service in luxury hotel concierge operations",
      "Describe the financial and reputational value of recovering high-value guest relationships in luxury hospitality",
      "Explain the role of employee empowerment in luxury brand service culture"
    ],
    judgementQuestions: [
      "For each of the three service failures—the bonfire dismantlement, the wrong cake, and the discontinued horseback riding request—what is your specific recovery response, and does any of them warrant using the $2,000 guest recovery authorization?",
      "How would you design the Aldertons' final full day as a curated experiential recovery—what specific experiences, gestures, and personalized touches would you arrange given what you know about the couple and the purpose of their stay?",
      "The bonfire and cake failures both involved interdepartmental communication breakdowns. What specific process change would you implement at the concierge desk to prevent similar failures, and how would you bring the operations and pastry kitchen teams into that solution without creating a blame culture?"
    ]
  }
];
