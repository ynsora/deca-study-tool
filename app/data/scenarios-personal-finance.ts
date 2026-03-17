import type { RoleplayScenario } from "./types";

export const scenariosPersonalFinance: RoleplayScenario[] = [
  // ─── EXISTING SCENARIOS (EXPANDED) ──────────────────────────────────────────

  // Personal Financial Literacy (PFIN) — pfin-1
  {
    id: "pfin-1",
    event: "Personal Financial Literacy",
    eventCode: "PFIN",
    cluster: "personal-finance",
    situation:
      "You are a financial literacy advisor meeting with Sam Torres, a 24-year-old recent college graduate who started a full-time job three months ago earning $52,000 per year ($3,900 per month after taxes). Sam has $28,000 in federal student loans at 5.5% interest, a $4,200 credit card balance at 22.99% APR that has been growing for two years, and no emergency fund. Sam's monthly expenses total approximately $3,100, leaving $800 in monthly discretionary income. Sam wants to start investing for retirement but is unsure whether to pay down debt first. Sam also has access to an employer 401(k) with a 3% match — meaning the company will contribute $1,560 per year if Sam contributes at least 3% of salary.\n\nSam's $4,200 credit card balance is spread across two cards — $2,900 on a Chase Freedom card at 24.99% APR and $1,300 on a Capital One card at 19.99% APR. Sam has been making only minimum payments of about $105 per month combined, which means the balance has barely declined in two years. At this pace, Sam will pay over $3,800 in interest before eliminating the credit card debt entirely. The $28,000 in student loans consists of two Direct Unsubsidized Loans at 5.5% on a standard 10-year repayment schedule, with a monthly payment of $303 already accounted for in the $3,100 monthly expense figure. Sam's credit score is currently 672, partially dragged down by the high credit utilization on those two cards.\n\nSam has expressed anxiety about not starting retirement savings sooner, having read articles about the importance of investing in your 20s. However, Sam also has zero dollars in a savings account and relies on a $600 credit limit on a third card as an informal emergency backup — a strategy that financial advisors consider highly risky. Sam's job is stable and includes a modest annual raise structure of roughly 3% per year. Sam is motivated to improve but feels overwhelmed by competing financial priorities and isn't sure which problem to tackle first.\n\nYour task today is to help Sam understand how to prioritize financial goals, create a concrete debt payoff strategy, and determine how much, if anything, to invest right now. You should walk Sam through the mathematical case for sequencing these decisions correctly — capturing the 401(k) match, building a starter emergency fund, and aggressively eliminating the high-interest credit card debt — before addressing the student loans and expanding investments. Sam is motivated but overwhelmed and needs practical, actionable guidance that accounts for real numbers.",
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
      "You are a personal finance counselor advising Morgan Lee, a 38-year-old who recently went through a divorce finalized six months ago. Morgan now has sole financial responsibility for two children ages 9 and 12, and earns $71,000 per year ($5,000 per month after taxes and the family health insurance premium). Morgan has a $185,000 mortgage with 22 years remaining at 6.1% interest (monthly payment $1,340), a car loan of $11,400 at 7.9% APR with 30 months remaining (monthly payment $380), and $9,500 in savings split between a checking account and a basic savings account earning 0.04% interest. Monthly fixed expenses — including mortgage, car payment, utilities, groceries, child activities, and minimum debt payments — total $3,800, leaving $1,200 in discretionary income. Morgan has no retirement savings whatsoever at age 38 and no life insurance.\n\nThe divorce settlement required Morgan to pay $6,000 toward shared credit card debt that has since been fully paid off. The two children are enrolled in public school, but Morgan is beginning to think about college costs in 6 to 9 years. A 529 college savings plan has not been opened. Morgan's employer offers a 401(k) with a 4% salary match — worth $2,840 per year in free money — and a group term life insurance plan that provides $50,000 of coverage for $18 per month. Morgan currently elects neither benefit, partly due to the financial chaos of the divorce and partly from not knowing where to start. Morgan is acutely aware that a job loss or medical emergency could be financially catastrophic with only $9,500 in savings.\n\nMorgan is anxious about the future and expresses guilt about not having started investing sooner. The car loan will be paid off in 30 months, which would free up $380 per month, but Morgan is unsure whether to pay it down aggressively now or let it run its course while directing money elsewhere. Morgan has considered refinancing the mortgage to a 15-year term to build equity faster but hasn't run the numbers on whether the higher payment would leave enough breathing room for other goals. The 6.1% mortgage rate is notably higher than rates available two years ago but lower than current market rates, making refinancing unattractive at this time.\n\nYour task is to assess Morgan's full financial situation and present a clear, prioritized action plan. You should address the most urgent gaps — life insurance, 401(k) enrollment, and emergency fund adequacy — explain the trade-offs between competing goals like college savings versus retirement, and give Morgan a realistic roadmap for the next 12 to 36 months that accounts for the $380 monthly cash flow improvement once the car loan ends.",
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
      "You are a financial advisor meeting with Riley Okonkwo, a 19-year-old college sophomore at Washington State University who works a part-time job as a barista earning approximately $14,000 per year after taxes. Riley wants to become financially independent and is curious about investing but has never opened a brokerage or retirement account of any kind. Riley has no debt — no student loans because tuition is covered by a scholarship and a parental contribution agreement — $2,200 saved in a Chase checking account earning no interest, and monthly expenses of approximately $900 covered by take-home income. After expenses, Riley saves approximately $270 per month with no formal system for where that money goes.\n\nRiley has been consuming personal finance content on YouTube and TikTok, and has heard about Roth IRAs, total market index funds, and cryptocurrency. A friend recently claimed to have turned $500 into $4,200 in six months by trading a mid-cap altcoin, and Riley is tempted to replicate that. Riley also follows several influencers who promote high-yield savings accounts and dividend investing, and is confused about how all these vehicles compare. Riley has never had a credit card and has no credit history, which Riley doesn't view as a problem — but a car will realistically be needed within two years when the parental support arrangement ends after graduation.\n\nRiley's scholarship requires a 3.5 GPA, which Riley currently maintains, and Riley plans to graduate in three years and pursue a career in environmental consulting, a field where starting salaries in the Pacific Northwest range from $48,000 to $58,000. Riley's financial situation is unusually clean for a 19-year-old — no debt, positive cash flow — which means small, consistent actions now could have an outsized impact over decades. The $2,200 in the checking account has been sitting there for eight months earning essentially nothing. Riley has heard that $2,200 is too small to invest, which is incorrect but a common misconception you will need to address.\n\nYour task is to provide Riley with foundational financial literacy guidance, explain how to start investing appropriately for this stage of life with the limited funds available, and describe how to build credit responsibly over the next 24 months. You should help Riley distinguish between short-term speculation and long-term wealth building, explain the Roth IRA contribution mechanics and tax advantages relevant to a low-income earner, and lay out a specific two-year action plan for establishing credit history in preparation for the auto loan Riley will need.",
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
  },

  // ─── NEW SCENARIOS ───────────────────────────────────────────────────────────

  // Personal Financial Literacy (PFL) — pfl-1
  {
    id: "pfl-1",
    event: "Personal Financial Literacy",
    eventCode: "PFL",
    cluster: "personal-finance",
    situation:
      "You are a personal finance advisor working with Jasmine Whitfield, a 22-year-old who graduated six months ago with a degree in graphic design and just accepted her first full-time position at a Portland-based marketing agency, earning $46,500 per year. After federal and state taxes, health insurance premiums, and a mandatory transit pass deduction, Jasmine takes home approximately $3,050 per month. Her current monthly expenses are $2,780: $1,100 for a shared apartment, $220 for her phone and subscriptions, $380 for food, $150 for transportation, $280 for student loan minimum payments, and $650 for other discretionary spending including clothing, dining out, and entertainment. This leaves only $270 in monthly surplus, and Jasmine has $640 in savings.\n\nJasmine has $24,800 in federal student loan debt at a blended interest rate of 5.8%, currently on the standard 10-year repayment plan. She also has a $1,800 balance on a store credit card she opened in college that carries a 28.99% APR — she has been making minimum payments of $54 per month for almost a year. Her credit score is 648, which she has never reviewed before today. Jasmine's employer offers a SIMPLE IRA with a 3% employer match and a dependent care FSA, neither of which Jasmine is currently enrolled in. Her lease renews in four months and she is considering moving into a more expensive apartment alone, which would increase her rent to $1,450.\n\nJasmine came to you after her parents told her she needs to 'get her finances together,' but she has no specific goals beyond vaguely wanting to 'save more money.' Part of your role is to help her define what financial stability looks like concretely — a starter emergency fund of $3,000 to $6,000, enrollment in the employer retirement match, elimination of the high-interest store card, and a sustainable monthly budget that doesn't rely on credit. The potential apartment upgrade would push her monthly expenses to $3,130, which exceeds her take-home income without budget cuts elsewhere.\n\nYour task is to work with Jasmine to build a realistic personal financial plan for the next 12 months. You need to advise her on whether the apartment upgrade is financially feasible, walk her through the cost of the store card debt versus the benefit of the retirement match, help her understand her credit score and how to improve it, and prioritize her goals in a way that is achievable on her current income.",
    individualPIs: [
      "Explain the 50/30/20 budgeting framework and how to adapt it to a first job income",
      "Describe how to evaluate a major spending decision such as a housing upgrade against personal financial goals",
      "Identify the steps to enroll in and maximize an employer-sponsored retirement match",
      "Explain how credit utilization ratio affects a credit score and how to reduce it",
      "Describe the process of building a starter emergency fund on a tight budget"
    ],
    tdmPIs: [
      "Explain the 50/30/20 budgeting framework and how to adapt it to a first job income",
      "Describe how to evaluate a major spending decision such as a housing upgrade against personal financial goals",
      "Identify the steps to enroll in and maximize an employer-sponsored retirement match",
      "Explain how credit utilization ratio affects a credit score and how to reduce it",
      "Describe the process of building a starter emergency fund on a tight budget",
      "Explain the true cost of minimum-payment strategies on high-APR credit card balances",
      "Identify the components of a credit report and the factors that determine a credit score"
    ],
    judgementQuestions: [
      "Jasmine is seriously considering the $1,450 solo apartment. Based on the financial details provided, make the mathematical case for or against the move, and if you advise against it, suggest a timeline for when it might become feasible.",
      "Jasmine's store card balance of $1,800 at 28.99% APR is costing her roughly $43 per month in interest while she pays $54 minimum. How long will it take to pay off at minimum payments, and what is the total interest cost? How would you recommend she accelerate this?",
      "Jasmine is not enrolled in the employer SIMPLE IRA match. If she contributes 3% of her $46,500 salary to capture the full match, what is her monthly contribution, how much does the employer add annually, and why is this effectively a 100% return on that money?"
    ]
  },

  // Personal Financial Literacy (PFL) — pfl-2
  {
    id: "pfl-2",
    event: "Personal Financial Literacy",
    eventCode: "PFL",
    cluster: "personal-finance",
    situation:
      "You are a financial literacy counselor at a community credit union meeting with Daniel and Priya Nakamura, a married couple in their early 30s living in Tacoma, Washington. Daniel is a high school teacher earning $58,000 per year and Priya works as a physical therapist assistant earning $49,000 per year, giving the household a combined gross income of $107,000. After taxes, retirement deductions, and benefit premiums, their combined monthly take-home is $6,800. Their monthly expenses total $6,200, leaving only $600 in surplus. They have two car loans — a $16,400 balance at 6.4% APR with 48 months remaining, and a $9,200 balance at 5.9% APR with 36 months remaining — plus $31,000 in combined student loans at an average rate of 5.2%. They have $4,200 in a joint savings account.\n\nDaniel is enrolled in the state's Public Employees' Retirement System (PERS), which means a defined-benefit pension will cover a portion of retirement income but requires 30 years of service for full benefits. He currently has 7 years of service credit. Priya's employer does not offer a retirement plan, so she has no retirement savings at age 31. Their combined student loan monthly payment is $340, and the car loans add another $680 per month to fixed expenses. They recently had their first child and are now paying $1,200 per month in childcare costs, which is reflected in the $6,200 expense total. The couple wants to open a 529 plan for their child but hasn't done so yet.\n\nDaniel and Priya argue about money regularly. Daniel wants to aggressively pay down the car loans while Priya believes they should open Roth IRA accounts immediately given her lack of any retirement savings. The $600 monthly surplus is the core tension point — there are more priorities than dollars. They have not updated their withholding after the birth of their child, which means they may be over-withholding federal income tax and effectively giving the government an interest-free loan when that money could be working for them each month. Their current $4,200 savings represents less than one month of expenses, far below the recommended three-to-six months.\n\nYour task is to help Daniel and Priya align on a joint financial plan that addresses their emergency fund gap, Priya's retirement savings gap, the car loan payoff debate, and the 529 college savings question — all within the reality of a $600 monthly surplus. You should explain how updating their tax withholding could increase monthly cash flow, walk them through a prioritized sequence for their goals, and help them understand the long-term trade-offs between each option.",
    individualPIs: [
      "Explain how to coordinate a household financial plan when one spouse has a pension and the other has no retirement savings",
      "Describe the mechanics and contribution limits of a Roth IRA for a dual-income household",
      "Identify how adjusting federal income tax withholding can improve monthly cash flow",
      "Explain the purpose and tax benefits of a 529 college savings plan",
      "Describe how to prioritize competing financial goals on a limited monthly surplus"
    ],
    tdmPIs: [
      "Explain how to coordinate a household financial plan when one spouse has a pension and the other has no retirement savings",
      "Describe the mechanics and contribution limits of a Roth IRA for a dual-income household",
      "Identify how adjusting federal income tax withholding can improve monthly cash flow",
      "Explain the purpose and tax benefits of a 529 college savings plan",
      "Describe how to prioritize competing financial goals on a limited monthly surplus",
      "Explain how a defined-benefit pension interacts with personal retirement savings strategy",
      "Identify the financial risks of maintaining a household emergency fund below three months of expenses"
    ],
    judgementQuestions: [
      "Daniel and Priya disagree on whether to pay down car loans or open Roth IRAs. Given their specific situation — one spouse has a pension, one has nothing — how would you settle this debate and what would you recommend as the first allocation of the $600 monthly surplus?",
      "Priya's employer offers no retirement plan. Explain exactly how a Roth IRA works for her: the 2024 contribution limit, the income eligibility threshold for their combined income, the tax treatment of contributions and withdrawals, and the deadline for contributing for the prior tax year.",
      "The couple is considering opening a 529 for their newborn but has only $4,200 in savings and a $600 monthly surplus. At what point in their financial journey would you recommend they start 529 contributions, and how should that decision be sequenced relative to the emergency fund and Priya's Roth IRA?"
    ]
  },

  // Financial Literacy Promotion Project (FLPP) — flpp-1
  {
    id: "flpp-1",
    event: "Financial Literacy Promotion Project",
    eventCode: "FLPP",
    cluster: "personal-finance",
    situation:
      "You are the student leader of a DECA chapter at Lincoln High School in Spokane, Washington, and you have been asked to present a Financial Literacy Promotion Project to a panel of judges representing the Spokane Federal Credit Union Foundation, which is considering awarding your chapter a $3,500 grant. Your project is called 'First Paycheck, First Plan,' a six-week financial literacy workshop series designed for 11th and 12th grade students at Lincoln High who are either currently employed part-time or will be entering the workforce within 12 months. The project was developed after a school-wide survey of 312 students revealed that 81% had never created a personal budget, 67% had no savings account, and 54% did not know what a credit score was.\n\nThe workshop series consists of six 45-minute sessions delivered during a free period in the library on Tuesday afternoons. Topics covered are: (1) reading a pay stub and understanding deductions, (2) building a zero-based budget on a part-time income, (3) opening and using a savings account effectively, (4) understanding credit scores and responsible credit card use, (5) taxes 101 for first-time filers, and (6) investing basics including Roth IRAs for teens with earned income. You partnered with two Lincoln alumni who work at the credit union as volunteer co-presenters. Materials were developed by adapting publicly available resources from the CFPB and Jump$tart Coalition and formatted into Google Slides decks and one-page reference sheets.\n\nThe project ran for the first time last fall with 38 student participants across two cohorts. Pre- and post-assessments showed an average knowledge gain of 31 percentage points across all six topic areas. Twenty-two participants opened a savings account at the credit union during the program, collectively depositing $4,100 in new savings. Eleven students filed their own federal tax return for the first time in February, up from zero the prior year. The project has been recognized by the school's principal and two local news outlets covered it in brief articles. You are now seeking funding to expand the program to two additional high schools in the district next academic year.\n\nYour task in this presentation is to explain the problem your project addresses, describe the program design and implementation process, present your outcomes data, and make the case for why the $3,500 grant would be used effectively to scale the program. The judges will ask follow-up questions about sustainability, curriculum quality, and how you will measure success at the new schools.",
    individualPIs: [
      "Describe how to design a financial literacy program to address identified community needs",
      "Explain how to use pre- and post-assessment data to measure a financial education program's effectiveness",
      "Identify strategies for securing community partnerships to support a school-based financial literacy initiative",
      "Explain how to present outcome metrics to a grant-making audience in a compelling and credible way",
      "Describe the components of a sustainable financial literacy program that can be replicated across multiple sites"
    ],
    tdmPIs: [
      "Describe how to design a financial literacy program to address identified community needs",
      "Explain how to use pre- and post-assessment data to measure a financial education program's effectiveness",
      "Identify strategies for securing community partnerships to support a school-based financial literacy initiative",
      "Explain how to present outcome metrics to a grant-making audience in a compelling and credible way",
      "Describe the components of a sustainable financial literacy program that can be replicated across multiple sites",
      "Explain the role of needs assessment surveys in targeting a financial education program's curriculum",
      "Identify the key components of a program budget and timeline for a grant-funded educational initiative"
    ],
    judgementQuestions: [
      "One judge asks how you ensured the curriculum was accurate and age-appropriate given that it was developed by high school students. Walk through your quality control process and explain who reviewed the content before it was delivered to participants.",
      "The foundation wants to know what happens to the program if your DECA chapter loses its two credit union alumni co-presenters. How have you built the program so it is not dependent on specific individuals, and what is your succession plan for training new volunteer facilitators?",
      "A judge asks whether a 31-point average knowledge gain truly indicates lasting financial behavior change, or just temporary test score improvement. How would you respond, and what additional follow-up metrics would you propose collecting 6 months after program completion?"
    ]
  },

  // Financial Literacy Promotion Project (FLPP) — flpp-2
  {
    id: "flpp-2",
    event: "Financial Literacy Promotion Project",
    eventCode: "FLPP",
    cluster: "personal-finance",
    situation:
      "You are a DECA student presenting a Financial Literacy Promotion Project called 'Debt-Free Start' to judges at a regional competition. The project was created in response to a local problem: a community needs assessment conducted in partnership with the Kitsap County Department of Human Services found that 43% of adults ages 18–25 in the county carry revolving credit card debt with an average balance of $3,400, and only 29% of that age group could correctly identify the term 'APR.' Your chapter partnered with the county library system and a local nonprofit credit counseling agency to deliver a four-session financial workshop series targeting young adults aged 18–25 at three branch library locations in Bremerton, Silverdale, and Port Orchard.\n\nEach workshop session ran 90 minutes and was offered twice at each location — once on a weekday evening and once on a Saturday morning — to maximize accessibility for working adults. Sessions covered: (1) understanding credit cards, interest rates, and the true cost of minimum payments; (2) debt payoff strategies including the avalanche and snowball methods with personalized calculation worksheets; (3) building a budget that includes a debt payoff line item; and (4) repairing a damaged credit score step by step. Sessions were facilitated by certified financial counselors from the nonprofit agency, with DECA students serving as logistics coordinators, marketing leads, and post-session follow-up contacts. Total attendance across all six cohort runs was 214 adults.\n\nThe project's marketing strategy used Instagram and Facebook ads targeting the 18–25 demographic in Kitsap County at a total ad spend of $180, donated by a local credit union sponsor. Flyers were distributed at the county WorkSource office, food bank, and community college. Post-session surveys showed 89% of participants rated the program as 'very useful' or 'extremely useful,' and a 30-day follow-up survey sent to all participants found that 61% reported taking at least one concrete financial action — such as creating a budget, calling a creditor to request a lower interest rate, or opening a savings account — within 30 days of attending. Total program cost was $2,100, covered by the credit union sponsorship and a $500 school activities budget contribution.\n\nYour task is to present the full project to the judges: explain the problem you identified, describe the program design and your team's specific roles, present your outcome data, and propose a sustainability model for continuing the program without ongoing DECA involvement. The judges represent a regional foundation that funds youth-led community financial empowerment projects and are looking for evidence of genuine community impact and a replicable model.",
    individualPIs: [
      "Explain how to conduct a community needs assessment to identify target populations for a financial literacy program",
      "Describe strategies for marketing a financial education program to reach an underserved demographic",
      "Identify how to structure a multi-session workshop series to build on foundational financial literacy concepts progressively",
      "Explain how to measure the behavioral impact of a financial literacy program beyond knowledge testing",
      "Describe how to build a community partnership model that gives a student-led project professional credibility"
    ],
    tdmPIs: [
      "Explain how to conduct a community needs assessment to identify target populations for a financial literacy program",
      "Describe strategies for marketing a financial education program to reach an underserved demographic",
      "Identify how to structure a multi-session workshop series to build on foundational financial literacy concepts progressively",
      "Explain how to measure the behavioral impact of a financial literacy program beyond knowledge testing",
      "Describe how to build a community partnership model that gives a student-led project professional credibility",
      "Identify the components of a program sustainability plan that does not depend on student-led continuity",
      "Explain how to use a post-program follow-up survey to measure behavioral outcomes at 30 and 90 days"
    ],
    judgementQuestions: [
      "A judge notes that 214 attendees across six sessions is a small fraction of the 18–25 population in Kitsap County. How do you respond to the question of scale, and what would need to change — in budget, staffing, or structure — to reach 10 times as many people?",
      "One judge is skeptical of the 61% behavioral action rate from the 30-day follow-up, pointing out that survey respondents are self-selected and likely more motivated than typical attendees. How do you account for this bias in your data, and what would a more rigorous evaluation design look like?",
      "The judges ask what happens to the program when your DECA chapter graduates this year. Describe the specific handoff plan you have developed — including which community partner would own the program, what materials you have documented, and how new facilitators would be trained."
    ]
  },

  // Personal Finance Research Event (PFRE) — pfre-1
  {
    id: "pfre-1",
    event: "Personal Finance Research Event",
    eventCode: "PFRE",
    cluster: "personal-finance",
    situation:
      "You are presenting a Personal Finance Research Event project to a panel of judges. Your research question is: 'To what extent does student loan debt influence homeownership rates among Millennials and Gen Z adults aged 25–34 in the United States, and what financial strategies can mitigate this effect?' The project was motivated by data showing that U.S. student loan debt has crossed $1.77 trillion, that the median borrower carries $28,400 in federal loan debt, and that the homeownership rate for adults ages 25–34 fell from 45.4% in 2004 to 37.0% in 2022 — a period during which student loan balances roughly tripled. Your research synthesizes data from the Federal Reserve's Survey of Consumer Finances, a 2023 Urban Institute housing study, National Association of Realtors survey data, and five peer-reviewed journal articles published between 2019 and 2024.\n\nYour primary finding is that each $10,000 in student loan debt is associated with a 1.5 to 2.1 percentage point reduction in the probability of homeownership among borrowers in the 25–34 cohort, after controlling for income, marital status, and geographic cost-of-living differences. This effect is most pronounced for Black and Hispanic borrowers, who experience homeownership delays roughly 18 months longer than white borrowers with similar debt loads, reflecting compounding effects of the racial wealth gap. A secondary finding addresses income-driven repayment (IDR) plans: borrowers enrolled in IDR plans have lower monthly payment obligations but experience a statistically significant 0.8 to 1.2 percentage point higher probability of being approved for a mortgage than those on standard repayment plans, because the lower monthly debt-to-income ratio improves mortgage qualification metrics.\n\nYour research also examines three mitigation strategies: (1) Public Service Loan Forgiveness (PSLF) as a path to debt elimination for public sector workers, which your analysis suggests increases the homeownership probability of qualifying borrowers by an estimated 4.3 percentage points within five years of forgiveness; (2) state-level first-time homebuyer programs, with a specific focus on Washington State's House Key program and its down payment assistance structure; and (3) the strategy of refinancing federal loans into private loans to obtain a lower interest rate, which your research warns against for borrowers who may qualify for PSLF or IDR, as it permanently forfeits federal protections.\n\nYour task in this presentation is to explain your research methodology, present your key findings with supporting data, discuss the limitations of your research, and make evidence-based recommendations for personal financial decision making. The judges include a mortgage loan officer, a financial aid administrator, and a personal finance professor, all of whom will ask detailed follow-up questions.",
    individualPIs: [
      "Explain how to identify and synthesize credible secondary research sources for a personal finance research project",
      "Describe the relationship between student loan debt-to-income ratio and mortgage qualification criteria",
      "Explain the trade-offs between income-driven repayment plans and standard repayment plans as they relate to homeownership goals",
      "Identify the eligibility requirements and forgiveness timeline for the Public Service Loan Forgiveness program",
      "Describe how to present quantitative research findings to a non-specialist audience using accessible financial language"
    ],
    tdmPIs: [
      "Explain how to identify and synthesize credible secondary research sources for a personal finance research project",
      "Describe the relationship between student loan debt-to-income ratio and mortgage qualification criteria",
      "Explain the trade-offs between income-driven repayment plans and standard repayment plans as they relate to homeownership goals",
      "Identify the eligibility requirements and forgiveness timeline for the Public Service Loan Forgiveness program",
      "Describe how to present quantitative research findings to a non-specialist audience using accessible financial language",
      "Explain the concept of statistical controls in correlational personal finance research and why they matter for interpreting findings",
      "Identify the limitations of using survey data from the Federal Reserve Survey of Consumer Finances in personal finance research"
    ],
    judgementQuestions: [
      "The mortgage loan officer on your panel asks whether IDR enrollment truly helps borrowers qualify for mortgages, since some lenders use the actual loan balance rather than the monthly payment when calculating debt-to-income. How do you address this nuance, and does it change your recommendation?",
      "Your research notes that refinancing federal loans into private loans is generally inadvisable for PSLF-eligible borrowers. A judge asks: for a borrower who definitely does not work in public service and has no intention of doing so, under what specific circumstances would private refinancing be mathematically justified?",
      "One judge challenges your methodology, noting that the correlation between student debt and lower homeownership rates might be explained by selection bias — that people who take on more student debt may have other characteristics that predict lower homeownership regardless of the debt. How would you address this critique, and what would a stronger research design look like?"
    ]
  },

  // Personal Finance Research Event (PFRE) — pfre-2
  {
    id: "pfre-2",
    event: "Personal Finance Research Event",
    eventCode: "PFRE",
    cluster: "personal-finance",
    situation:
      "You are presenting a Personal Finance Research Event project titled 'The Financial Impact of Emergency Savings Gaps: How Insufficient Liquid Reserves Force Americans into High-Cost Debt Cycles.' Your research was motivated by Federal Reserve data showing that 37% of American adults cannot cover a $400 unexpected expense without borrowing or selling something, and that the average high-interest emergency loan (payday loan, credit card cash advance, or buy-now-pay-later installment plan) carries an effective APR between 96% and 391%. Your research synthesizes data from the Consumer Financial Protection Bureau's Financial Well-Being survey, the Pew Charitable Trusts' payday lending research series, three NBER working papers, and longitudinal data from the FINRA Investor Education Foundation's National Financial Capability Study conducted in 2018 and 2021.\n\nYour central finding is that households with liquid savings below $500 — which your research designates as 'critically savings-insufficient' — are 4.8 times more likely to use a payday loan or high-cost credit product in a given year than households with $1,000 to $2,000 in liquid savings. Critically, once a household enters a payday loan cycle, the median borrower takes 5 months to fully exit, paying an average of $520 in fees on a $375 original loan principal — an effective 139% cost of borrowing. Your research identifies three demographic subgroups as disproportionately represented in the critically savings-insufficient population: gig economy workers (42% below $500 in liquid savings), single-parent households (51% below $500), and adults without a four-year college degree (46% below $500).\n\nA secondary section of your research examines 'savings acceleration interventions' — strategies proven in randomized controlled trials to help low-income households build emergency savings rapidly. These include: employer-based auto-enrollment in a split-deposit savings program (shown to increase savings participation rates from 23% to 71% in one study); prize-linked savings accounts offered by credit unions (associated with a 36% increase in average deposit frequency); and the '52-week savings challenge' reframed as an automated monthly transfer (shown to sustain higher completion rates than manual weekly deposits). Your recommendations conclude with a policy proposal and an individual action guide.\n\nYour task is to present the full research project to the judges, explaining your research question and its relevance, walking through your methodology and key findings with supporting data, and delivering practical, evidence-based recommendations for both individual consumers and policymakers. Judges include a behavioral economist, a community development financial institution loan officer, and a state legislator's policy aide, and they will probe the quality of your sources, the logic of your analysis, and the practicality of your recommendations.",
    individualPIs: [
      "Explain the research methodology used to synthesize secondary data sources for a personal finance research project",
      "Describe the mechanics and costs of payday loans and high-cost credit alternatives used by underserved consumers",
      "Identify demographic and behavioral predictors of emergency savings insufficiency using empirical data",
      "Explain how employer-sponsored automatic savings enrollment programs increase household financial resilience",
      "Describe evidence-based individual strategies for building an emergency fund on a limited income"
    ],
    tdmPIs: [
      "Explain the research methodology used to synthesize secondary data sources for a personal finance research project",
      "Describe the mechanics and costs of payday loans and high-cost credit alternatives used by underserved consumers",
      "Identify demographic and behavioral predictors of emergency savings insufficiency using empirical data",
      "Explain how employer-sponsored automatic savings enrollment programs increase household financial resilience",
      "Describe evidence-based individual strategies for building an emergency fund on a limited income",
      "Explain the concept of a debt trap cycle as it relates to short-term high-cost borrowing products",
      "Identify the policy levers — state regulation, federal CFPB rulemaking, and employer mandates — that have been proposed to address predatory lending"
    ],
    judgementQuestions: [
      "The behavioral economist judge points out that your research draws heavily on correlational data and asks whether you can demonstrate causality — that low savings causes payday loan use rather than both being caused by a third factor like low income. How do you respond methodologically?",
      "Your recommendation for prize-linked savings accounts is challenged by the legislator's aide, who argues that financial products built around gambling mechanics are ethically problematic. How do you defend or modify that recommendation?",
      "A judge asks you to apply your research findings directly: for a gig economy worker earning $2,200 per month with no employer benefits, what is the precise month-by-month action plan you would recommend to build a $1,000 emergency fund within six months while avoiding high-cost debt in the interim?"
    ]
  },

  // Consumer Protection (CPT) — cpt-1
  {
    id: "cpt-1",
    event: "Consumer Protection",
    eventCode: "CPT",
    cluster: "personal-finance",
    situation:
      "You are a consumer protection specialist at the Washington State Attorney General's Office, and you have been asked to advise a young consumer named Alex Reyes, a 23-year-old living in Tacoma who recently experienced three overlapping consumer protection problems. First, Alex signed a 24-month gym membership contract in January for $49.99 per month with Gold Fitness Club. The contract was presented on a tablet and Alex did not receive a copy via email as promised. The gym closed permanently in August — eight months into the contract — without notifying members in advance. A debt collection company called Granite Recovery Solutions has since contacted Alex claiming Alex owes $799.84 for the remaining 16 months of the membership, even though the gym no longer exists.\n\nSecond, Alex purchased a used 2017 Honda Civic in March from a private seller found through Facebook Marketplace for $11,500. Two weeks after purchase, Alex discovered the car had an undisclosed salvage title — it had been in a significant collision and declared a total loss by an insurance company in 2020. Alex did not check the vehicle history before buying, and the seller did not disclose the salvage designation. The car's actual market value as a salvage-title vehicle is approximately $7,200 to $8,000. A mechanic has since found $2,400 in deferred structural repairs that were not disclosed. Alex is now making monthly payments on a $10,000 auto loan from a credit union, having paid $1,500 as a down payment.\n\nThird, Alex received a text message in September purportedly from the IRS stating that a $3,200 tax refund was being held and would be forfeited unless Alex called a toll-free number within 48 hours to 'verify identity.' Alex called the number and, under pressure, provided their Social Security number, date of birth, and bank account number. Alex has since received two unauthorized withdrawals from their checking account totaling $380 and noticed a new credit inquiry on their credit report from an unfamiliar auto finance company.\n\nYour task is to advise Alex on all three situations: explain what consumer protection laws and remedies apply to the gym membership debt collection, walk Alex through the legal options regarding the undisclosed salvage title vehicle, and provide a step-by-step action plan to address the identity theft including the unauthorized bank withdrawals and fraudulent credit inquiry. Alex needs to understand both what to do immediately and what realistic outcomes to expect from each situation.",
    individualPIs: [
      "Explain the provisions of the Fair Debt Collection Practices Act and a consumer's rights when contacted by a debt collector",
      "Describe a consumer's legal remedies when a seller fails to disclose a salvage title on a used vehicle purchase",
      "Identify the immediate steps a consumer should take after providing personal information to a fraudulent caller",
      "Explain how to dispute a fraudulent credit inquiry on a credit report and place a fraud alert or credit freeze",
      "Describe the role of state consumer protection agencies and the FTC in addressing consumer fraud and identity theft"
    ],
    tdmPIs: [
      "Explain the provisions of the Fair Debt Collection Practices Act and a consumer's rights when contacted by a debt collector",
      "Describe a consumer's legal remedies when a seller fails to disclose a salvage title on a used vehicle purchase",
      "Identify the immediate steps a consumer should take after providing personal information to a fraudulent caller",
      "Explain how to dispute a fraudulent credit inquiry on a credit report and place a fraud alert or credit freeze",
      "Describe the role of state consumer protection agencies and the FTC in addressing consumer fraud and identity theft",
      "Explain when a gym membership contract becomes unenforceable due to business closure and failure to perform",
      "Identify the difference between a fraud alert, a credit freeze, and an extended fraud alert and the duration and protection level of each"
    ],
    judgementQuestions: [
      "Granite Recovery Solutions is calling Alex daily about the $799.84 gym membership debt. What specific steps should Alex take under the FDCPA to stop the calls, request debt validation, and potentially dispute the validity of the debt given that the gym no longer exists?",
      "Alex wants to sue the private seller for the undisclosed salvage title. What are the realistic legal options — small claims court versus civil court — what evidence would Alex need to present, and what is the likely range of monetary recovery if successful?",
      "Alex's bank account had $380 withdrawn fraudulently. Walk Alex through the exact sequence of actions in the first 72 hours: which institutions to contact, in what order, what documentation to gather, and what protections the Electronic Fund Transfer Act provides for the unauthorized withdrawals."
    ]
  },

  // Consumer Protection (CPT) — cpt-2
  {
    id: "cpt-2",
    event: "Consumer Protection",
    eventCode: "CPT",
    cluster: "personal-finance",
    situation:
      "You are a consumer education specialist presenting to a group of recent high school graduates at a community center in Bremerton, Washington. The session is titled 'Don't Get Scammed: Consumer Protection for Young Adults,' and your role is to walk the audience through three major consumer traps that disproportionately affect people in their late teens and early 20s: predatory auto financing, deceptive subscription practices, and student loan scams. You have been given 15 minutes to present, followed by a Q&A. The audience of 22 young adults ranges from 17 to 23 years old, and a pre-session survey revealed that 9 of them already have a car loan, 14 subscribe to at least five recurring digital services, and 6 of them have received calls or emails from companies claiming to help them get student loan forgiveness for an upfront fee.\n\nOn predatory auto financing: you plan to explain how 'buy here, pay here' car dealerships target consumers with no or poor credit and charge effective APRs between 18% and 29%, often with GPS payment enforcement devices installed in the vehicle. You will cover yo-yo financing — when a dealer lets a buyer take a car home, then calls days later claiming financing fell through and demanding the buyer return to sign a new contract at a higher rate — and explain how to protect against it. You also plan to discuss how dealer markup on interest rates (the difference between the rate a lender approves and the rate the dealer charges the consumer) can cost a buyer $1,500 to $3,000 in unnecessary interest over the life of a loan, and how to negotiate.\n\nOn deceptive subscriptions: you will cover free-trial-to-paid-subscription traps, recurring billing after cancellation, and dark patterns — UX design techniques that make it intentionally difficult to cancel a subscription or find the unsubscribe button. You will teach the audience to read billing statements monthly and use virtual credit card numbers for trials. You will also cover the FTC's Click-to-Cancel rule proposed in 2023 and what protections it offers. On student loan scams: you will explain that no company can legitimately charge an upfront fee to access student loan forgiveness programs, that all federal forgiveness programs (IDR, PSLF, TPD discharge) are free to apply for at studentaid.gov, and that the FTC's Student Loan Debt Relief scam enforcement has resulted in over $50 million in refunds since 2015.\n\nYour task in the presentation roleplay is to walk the judges — playing the role of the community center audience — through the key points on all three topics, demonstrate your ability to explain complex consumer protection concepts in plain language for a teen and young adult audience, and answer their questions accurately and thoroughly.",
    individualPIs: [
      "Explain how to identify and avoid predatory auto financing practices including dealer interest rate markup and yo-yo financing",
      "Describe the deceptive practices used in subscription services and the consumer's rights under FTC regulations",
      "Identify the warning signs of student loan debt relief scams and explain where to access legitimate federal forgiveness programs",
      "Explain how dark patterns in digital product design violate consumer protection principles",
      "Describe how the FTC and state attorneys general enforce consumer protection laws and what remedies are available to harmed consumers"
    ],
    tdmPIs: [
      "Explain how to identify and avoid predatory auto financing practices including dealer interest rate markup and yo-yo financing",
      "Describe the deceptive practices used in subscription services and the consumer's rights under FTC regulations",
      "Identify the warning signs of student loan debt relief scams and explain where to access legitimate federal forgiveness programs",
      "Explain how dark patterns in digital product design violate consumer protection principles",
      "Describe how the FTC and state attorneys general enforce consumer protection laws and what remedies are available to harmed consumers",
      "Explain what the FTC Click-to-Cancel rule requires of subscription service providers and how it protects consumers",
      "Identify the rights consumers have under the Truth in Lending Act (TILA) when signing an auto loan agreement"
    ],
    judgementQuestions: [
      "An audience member says they already signed a 'buy here, pay here' auto loan at 24.9% APR six months ago on a $7,000 car. Is there anything they can do now to reduce what they pay in interest, or are they locked in? What are their realistic options?",
      "Someone in the audience says they were charged for three months of a subscription after they thought they cancelled, and the company is refusing to refund them. Walk them step by step through the dispute process — who to contact, what to say, and what happens if the company still refuses.",
      "A 19-year-old in the audience has $28,000 in federal student loans and received a professional-looking email from 'Federal Student Aid Solutions LLC' offering to enroll her in a forgiveness program for a $199 enrollment fee. What are the specific red flags in this situation, and what should she do?"
    ]
  },

  // Credit & Debt Management (CDM) — cdm-1
  {
    id: "cdm-1",
    event: "Credit & Debt Management",
    eventCode: "CDM",
    cluster: "personal-finance",
    situation:
      "You are a nonprofit credit counselor at a NFCC-member agency in Olympia, Washington, and you are meeting with Marcus Delgado, a 29-year-old who comes to you in financial distress. Marcus earns $43,000 per year as a warehouse supervisor ($3,000 per month after taxes) and has accumulated $18,700 in unsecured credit card debt across five cards over the past four years, driven by a combination of medical bills that he put on cards after losing health insurance between jobs, and a period of unemployment in 2022 during which he used credit to cover living expenses. His current minimum payments total $530 per month. His monthly expenses without credit card minimums are $2,310 — leaving only $160 remaining after minimums are paid. Marcus has not missed a payment yet but has been using one card to make the minimum payments on another, and his credit score has dropped from approximately 710 to 658 over the past year.\n\nThe five cards are: (1) Capital One Quicksilver — $4,200 balance, 26.99% APR, minimum $84; (2) Citi Double Cash — $3,800 balance, 24.99% APR, minimum $76; (3) Discover it — $2,900 balance, 21.99% APR, minimum $58; (4) Chase Freedom Flex — $5,100 balance, 22.99% APR, minimum $102; (5) Synchrony Home — $2,700 balance at 29.99% APR, minimum $81 (this was for a furniture purchase). Marcus has no retirement savings, no emergency fund, and his car — a 2018 Toyota Tacoma — still has $8,400 remaining on a 6.4% APR auto loan with 28 months remaining. Monthly rent is $1,050, utilities are $180, food is $380, car insurance is $142, phone is $65, car payment is $340, and gas/transportation is $153.\n\nMarcus has been advised by a friend to declare bankruptcy, and he is asking you whether that is the right choice. He is also aware of debt consolidation loans and has received a pre-approval offer for a personal loan at 18.5% APR for $18,700 — which would reduce his monthly payment to $467 over 48 months. A debt management plan (DMP) through your agency could potentially reduce his interest rates to a blended 9% to 11% range through agreements with creditors and lower his total monthly payment to approximately $410 over 60 months. You need to help Marcus understand all three options and make a recommendation.\n\nYour task is to analyze Marcus's debt situation in full, explain the three primary resolution paths — debt consolidation loan, nonprofit debt management plan, and Chapter 7 bankruptcy — including the costs, timeline, credit score impact, and eligibility requirements for each, and make a concrete recommendation based on Marcus's specific financial profile.",
    individualPIs: [
      "Explain the structure and creditor negotiation process of a nonprofit debt management plan",
      "Describe the eligibility requirements, process, and credit impact of Chapter 7 bankruptcy",
      "Identify the factors that determine whether a debt consolidation loan is appropriate for a given borrower",
      "Explain how to calculate the total cost of debt under different repayment strategies using interest rate and term comparisons",
      "Describe how credit utilization and payment history interact to affect a credit score over time"
    ],
    tdmPIs: [
      "Explain the structure and creditor negotiation process of a nonprofit debt management plan",
      "Describe the eligibility requirements, process, and credit impact of Chapter 7 bankruptcy",
      "Identify the factors that determine whether a debt consolidation loan is appropriate for a given borrower",
      "Explain how to calculate the total cost of debt under different repayment strategies using interest rate and term comparisons",
      "Describe how credit utilization and payment history interact to affect a credit score over time",
      "Explain the avalanche method of debt payoff and how it minimizes total interest paid across multiple accounts",
      "Identify the consumer protections provided by the Fair Credit Reporting Act regarding credit report accuracy and dispute rights"
    ],
    judgementQuestions: [
      "Marcus qualifies for both the 18.5% personal loan consolidation and a DMP at roughly 10% blended APR. Ignoring credit score impact for a moment, calculate the total interest paid under each option over the repayment term and explain which saves Marcus more money in absolute dollars.",
      "Marcus's friend told him that Chapter 7 bankruptcy would 'wipe the slate clean.' Explain what Chapter 7 actually discharges, what it does not discharge, how the means test works given Marcus's income, and how long the bankruptcy notation remains on his credit report — then give your honest assessment of whether it is the right choice here.",
      "If Marcus enrolls in the DMP, he will have to close all five credit cards. His current credit utilization is approximately 74% and his oldest card is 6 years old. Walk through exactly how closing those cards will affect his credit score in the short term, and explain why that trade-off may or may not be worth it given his current trajectory."
    ]
  },

  // Credit & Debt Management (CDM) — cdm-2
  {
    id: "cdm-2",
    event: "Credit & Debt Management",
    eventCode: "CDM",
    cluster: "personal-finance",
    situation:
      "You are a financial coach meeting with Sophia and James Okafor, a couple in their mid-40s living in Bellevue, Washington. James works in IT project management earning $112,000 per year and Sophia runs a small interior design business that generated $67,000 in net income last year. Their combined gross income is $179,000, giving them a monthly after-tax household income of approximately $10,800 after James's 401(k) contribution, taxes, and benefits. They own a home purchased in 2016 with a current balance of $287,000 on a 30-year mortgage at 3.25% interest (monthly payment $1,380). Their home is currently valued at approximately $540,000, giving them roughly $253,000 in equity. They have no other secured debt.\n\nHowever, the couple has $56,400 in unsecured debt: a $22,800 home equity line of credit (HELOC) drawn against their home at a current variable rate of 9.25% APR (rate has increased from 6.1% two years ago), $18,600 in credit card debt across four cards with APRs ranging from 19.99% to 26.99%, and $15,000 in a personal loan at 11.5% APR with 30 months remaining used for a kitchen renovation in 2022. Monthly minimums on all unsecured debt total $1,240. Monthly living expenses — including mortgage, utilities, food, insurance, two car payments, and children's activities — total $8,900, leaving $1,900 in monthly surplus. James has $84,000 in a 401(k); Sophia has $22,000 in a SEP-IRA. Their combined retirement savings of $106,000 at ages 44 and 46 is below benchmark for their income level.\n\nSophia's business income is variable — it was $67,000 last year but was $41,000 the year before during a slow period. This variability concerns the couple because their expense structure was built around $67,000 being the norm. They have a $12,000 emergency fund in a high-yield savings account at 4.8% APY, which covers roughly 1.3 months of expenses — insufficient for a household with variable business income. The HELOC rate has increased three times in 18 months due to Fed rate hikes and could go higher. The couple is considering whether to do a cash-out refinance on their home to consolidate all the unsecured debt, pay off the HELOC, credit cards, and personal loan, and lower their overall monthly payment.\n\nYour task is to analyze the Okafors' full debt picture, evaluate the cash-out refinance option in detail — including the impact on their mortgage rate, monthly payment, total interest over the loan life, and the risk of converting unsecured debt to secured debt — and compare it to an aggressive payoff strategy using the $1,900 monthly surplus. You should also address the adequacy of their emergency fund given the variable business income, and provide a sequenced action plan for improving their overall financial position.",
    individualPIs: [
      "Explain the risks and benefits of using a cash-out refinance to consolidate unsecured consumer debt",
      "Describe the implications of a variable-rate HELOC in a rising interest rate environment",
      "Identify how to apply the debt avalanche method to a multi-account debt portfolio with varied interest rates",
      "Explain how variable business income affects emergency fund sizing requirements",
      "Describe the tax implications of home equity interest deductibility and how they factor into debt consolidation decisions"
    ],
    tdmPIs: [
      "Explain the risks and benefits of using a cash-out refinance to consolidate unsecured consumer debt",
      "Describe the implications of a variable-rate HELOC in a rising interest rate environment",
      "Identify how to apply the debt avalanche method to a multi-account debt portfolio with varied interest rates",
      "Explain how variable business income affects emergency fund sizing requirements",
      "Describe the tax implications of home equity interest deductibility and how they factor into debt consolidation decisions",
      "Explain how converting unsecured debt to secured debt changes the consumer's risk exposure in the event of income disruption",
      "Identify benchmark retirement savings targets by age and income level and describe catch-up contribution strategies for mid-career savers"
    ],
    judgementQuestions: [
      "The Okafors' mortgage is at 3.25% — well below current market rates of around 7%. Explain quantitatively why doing a cash-out refinance to consolidate $56,400 in debt could cost them significantly more in total interest over the life of the loan even if it reduces their monthly payment, and what break-even analysis they should run.",
      "James wants to pay off the HELOC first because the variable rate worries him, while Sophia wants to attack the credit cards because the rates are higher. Run the numbers: if they direct the full $1,900 monthly surplus to debt payoff, which order minimizes total interest paid, and how long does complete payoff of all unsecured debt take under the optimal strategy?",
      "Sophia's business income dropped from $67,000 to $41,000 during the prior slow year. If that happened again, what would the household's monthly surplus be, and is the current $12,000 emergency fund adequate? What is your specific recommendation for emergency fund size given the income variability, and how would you build it while also paying down debt?"
    ]
  },

  // Retirement & Savings Planning (RSP) — rsp-1
  {
    id: "rsp-1",
    event: "Retirement & Savings Planning",
    eventCode: "RSP",
    cluster: "personal-finance",
    situation:
      "You are a retirement planning specialist meeting with Kevin and Linda Hargrove, a couple ages 52 and 49 living in Federal Way, Washington. Kevin is a senior civil engineer at a private firm earning $138,000 per year, and Linda is a registered nurse at a regional hospital earning $94,000 per year. Their combined gross income is $232,000. Kevin has a 401(k) with a current balance of $318,000, contributing 8% of his salary with a 4% employer match, meaning he contributes $11,040 per year and receives $5,520 from his employer. Linda has a 403(b) with a current balance of $184,000, contributing 6% of her salary with a 3% employer match, contributing $5,640 per year and receiving $2,820. Their combined retirement account balances total $502,000.\n\nThe Hargroves own their home outright — they paid off the mortgage two years ago — and have no consumer debt. They have an $85,000 emergency fund in a money market account at 5.1% APY and a taxable brokerage account with $42,000 in a mix of individual stocks and an S&P 500 ETF. They have two adult children: their older child graduated debt-free, but their younger child is currently in their second year of college with $18,000 remaining in a 529 plan. The expected family contribution going forward is approximately $12,000 per year for two more years, which will largely be paid from monthly cash flow and a modest draw on the 529. Monthly after-tax take-home is approximately $12,200 after contributions and benefits.\n\nThe Hargroves want to retire when Kevin is 62 (10 years from now) and Linda is 59 (10 years from now). They estimate they need $9,500 per month in retirement income in today's dollars, and they assume 3% annual inflation. Kevin will be eligible for a small defined-benefit pension from a previous employer that will pay $1,100 per month at age 62. Both spouses will eventually receive Social Security; Linda's estimated benefit at her full retirement age of 67 is $2,340 per month, and Kevin's is $2,780. If Kevin retires at 62, he will receive a reduced Social Security benefit of approximately $1,945 per month. They are asking you whether they are on track to retire at their target ages and what adjustments, if any, are needed.\n\nYour task is to analyze the Hargroves' retirement readiness in detail. You should estimate their projected portfolio value at Kevin's age 62 using a 7% average annual return assumption, calculate the income gap between their projected retirement income sources and their inflation-adjusted income need, determine whether their current savings rate is sufficient to close any gap, and make specific recommendations about contribution increases, asset allocation adjustments, and Social Security claiming strategy. The judges will ask follow-up questions about sequence-of-returns risk, the decision to delay Social Security, and whether Linda should continue working after Kevin retires.",
    individualPIs: [
      "Explain how to project retirement portfolio value using compound growth assumptions and current contribution rates",
      "Describe how to calculate a retirement income gap by comparing projected income sources to inflation-adjusted spending needs",
      "Identify the factors that affect Social Security benefit amounts including early claiming reductions and delayed claiming credits",
      "Explain how a defined-benefit pension integrates into a retirement income plan alongside Social Security and portfolio withdrawals",
      "Describe the role of asset allocation and sequence-of-returns risk in managing a retirement portfolio in the decade before retirement"
    ],
    tdmPIs: [
      "Explain how to project retirement portfolio value using compound growth assumptions and current contribution rates",
      "Describe how to calculate a retirement income gap by comparing projected income sources to inflation-adjusted spending needs",
      "Identify the factors that affect Social Security benefit amounts including early claiming reductions and delayed claiming credits",
      "Explain how a defined-benefit pension integrates into a retirement income plan alongside Social Security and portfolio withdrawals",
      "Describe the role of asset allocation and sequence-of-returns risk in managing a retirement portfolio in the decade before retirement",
      "Explain catch-up contribution rules for 401(k) and 403(b) plans for participants over age 50 and the financial impact of maximizing them",
      "Identify the tax advantages of Roth conversion strategies during the decade before retirement for high-income earners"
    ],
    judgementQuestions: [
      "Kevin wants to claim Social Security at age 62 to simplify the retirement income picture. Linda thinks he should delay to age 70 to maximize the benefit. Given Kevin's pension, Linda's potential continued work income, and the portfolio balance, what is the mathematically optimal Social Security claiming strategy for Kevin, and what is the break-even age?",
      "The Hargroves currently have all their 401(k) and 403(b) assets in pre-tax accounts. A judge asks whether they should consider converting a portion to Roth accounts in the next 10 years while they are still working in a high income bracket. What is the argument for and against Roth conversions at their income level, and what tax considerations matter most?",
      "The 4% safe withdrawal rate rule would suggest the Hargroves need a portfolio of approximately $2.85 million to generate $9,500 per month in inflation-adjusted income. Using a 7% growth assumption and their current combined annual contributions, project whether they reach that target by Kevin's age 62, and if not, how much additional annual savings is needed to close the gap."
    ]
  },

  // Retirement & Savings Planning (RSP) — rsp-2
  {
    id: "rsp-2",
    event: "Retirement & Savings Planning",
    eventCode: "RSP",
    cluster: "personal-finance",
    situation:
      "You are a financial advisor meeting with Denise Fontaine, a 55-year-old high school principal in Olympia, Washington, earning $112,000 per year. Denise has been a public school employee for 28 years and is enrolled in the Washington State Teachers' Retirement System (TRS) Plan 3, a hybrid plan that combines a defined-benefit (DB) pension with a defined-contribution (DC) component. Under TRS Plan 3, Denise's pension benefit at retirement will be calculated as 1% of her Average Final Compensation (AFC) multiplied by her years of service. Her AFC — the average of her five highest-earning years — is projected to be approximately $118,000 if she works until age 62. If she retires at 62 with 35 years of service, her monthly pension will be approximately $3,442 per month (before the 5% early retirement reduction that applies before age 65). She can also receive the full, unreduced benefit at age 65 with 30+ years of service, which would be approximately $3,629 per month.\n\nDenise's TRS Plan 3 defined-contribution component has a current balance of $88,000. She contributes 5% of salary to the DC component each month ($467 per month) with no employer match on the DC side (the DB pension itself is the employer's primary contribution). She also has a supplemental 403(b) through her district with a balance of $61,400, to which she contributes $400 per month. Total retirement savings outside the pension: $149,400 across the two accounts. Denise has $34,000 in a high-yield savings account, no mortgage (she owns her condo outright, valued at $310,000), and no consumer debt. Her monthly take-home after taxes and retirement contributions is approximately $6,400.\n\nDenise's Social Security benefit at her full retirement age of 67 is estimated at $1,820 per month, but she is subject to the Windfall Elimination Provision (WEP) because TRS is a pension plan not covered by Social Security — and the WEP will reduce her Social Security benefit. Her estimated WEP-reduced benefit is approximately $1,340 per month at age 67, or roughly $940 per month if she claims at age 62. Denise is divorced with no alimony, has two adult children who are financially independent, and estimates she needs $5,800 per month in retirement income in today's dollars. She is asking whether she should retire at 62 or work until 65, and how to optimize her overall retirement income strategy.\n\nYour task is to analyze Denise's full retirement picture, explain the WEP and its impact on her planning, calculate and compare retirement income totals at age 62 versus age 65 under different scenarios, address whether her non-pension savings are adequate to bridge any gap between pension/Social Security income and her spending need, and make a specific recommendation on retirement timing. You should also address whether she should maximize her 403(b) catch-up contributions in the next 7 to 10 years given her debt-free status.",
    individualPIs: [
      "Explain how a hybrid defined-benefit and defined-contribution pension plan works and how to calculate the benefit under TRS Plan 3",
      "Describe the Windfall Elimination Provision and how it reduces Social Security benefits for public pension recipients",
      "Identify the financial trade-offs between early retirement at age 62 versus full retirement age in a public pension system",
      "Explain how to calculate a retirement income bridge strategy when pension and Social Security income fall short of spending needs",
      "Describe catch-up contribution opportunities in 403(b) plans for employees over age 50 and the financial impact of maximizing them"
    ],
    tdmPIs: [
      "Explain how a hybrid defined-benefit and defined-contribution pension plan works and how to calculate the benefit under TRS Plan 3",
      "Describe the Windfall Elimination Provision and how it reduces Social Security benefits for public pension recipients",
      "Identify the financial trade-offs between early retirement at age 62 versus full retirement age in a public pension system",
      "Explain how to calculate a retirement income bridge strategy when pension and Social Security income fall short of spending needs",
      "Describe catch-up contribution opportunities in 403(b) plans for employees over age 50 and the financial impact of maximizing them",
      "Explain the concept of sequence-of-returns risk and how it applies to a retiree who begins drawing down a DC account at age 62",
      "Identify the tax treatment of pension income, 403(b) withdrawals, and Social Security benefits in retirement and how they affect total tax liability"
    ],
    judgementQuestions: [
      "Denise's pension at age 62 will be approximately $3,268 per month after the early retirement reduction (5% reduction to $3,442 base). Her WEP-adjusted Social Security at 62 would be approximately $940 per month. Total guaranteed income at 62 would be $4,208 per month — $1,592 per month short of her $5,800 need. How many years would her $149,400 in savings last at that withdrawal rate, and does the math support retiring at 62?",
      "Denise could avoid the early retirement penalty entirely by working until age 65. Calculate the difference in lifetime pension income between retiring at 62 (with 35 years of service) versus 65 (with 38 years of service) assuming she lives to age 85, and factor in the three additional years of salary and retirement contributions she would earn by working longer.",
      "Denise is currently contributing $400 per month to her 403(b). She is debt-free and takes home $6,400 per month. The IRS catch-up contribution limit for a 403(b) for participants over 50 is an additional $7,500 per year on top of the standard $23,000 limit. Explain whether Denise should maximize her 403(b) contributions to $30,500 per year, what the monthly contribution amount would be, and how this changes her projected savings balance at age 62 and 65."
    ]
  }
];
