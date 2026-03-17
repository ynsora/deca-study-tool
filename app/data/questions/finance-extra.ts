import type { Question } from "../types";
export const financeExtraQuestions: Question[] = [
  {
    q: "On an income statement, which line item represents revenue minus cost of goods sold?",
    options: ["Operating income", "Gross profit", "Net income", "EBITDA"],
    answer: 1,
    explanation: "Gross profit is calculated as revenue minus cost of goods sold (COGS). Operating income further subtracts operating expenses, and net income subtracts all expenses including taxes and interest."
  },
  {
    q: "Which financial statement shows a company's assets, liabilities, and shareholders' equity at a specific point in time?",
    options: ["Income statement", "Cash flow statement", "Balance sheet", "Statement of retained earnings"],
    answer: 2,
    explanation: "The balance sheet is a snapshot of a company's financial position at a specific date, showing what it owns (assets), what it owes (liabilities), and the residual interest of owners (shareholders' equity)."
  },
  {
    q: "In cash flow statement analysis, which section includes cash received from customers and cash paid to suppliers?",
    options: ["Investing activities", "Financing activities", "Operating activities", "Capital activities"],
    answer: 2,
    explanation: "Operating activities on the cash flow statement reflect the cash effects of transactions that enter into the determination of net income, including cash from customers and payments to suppliers."
  },
  {
    q: "A company has a current ratio of 0.8. What does this indicate?",
    options: ["The company is highly profitable", "The company may struggle to meet short-term obligations", "The company has more long-term assets than liabilities", "The company has a strong cash position"],
    answer: 1,
    explanation: "A current ratio below 1.0 means current liabilities exceed current assets, suggesting the company may have difficulty paying its short-term debts as they come due."
  },
  {
    q: "Which ratio measures how efficiently a company uses its assets to generate revenue?",
    options: ["Debt-to-equity ratio", "Price-to-earnings ratio", "Asset turnover ratio", "Quick ratio"],
    answer: 2,
    explanation: "The asset turnover ratio (Revenue / Average Total Assets) measures how efficiently a company uses its assets to generate sales. A higher ratio indicates more efficient use of assets."
  },
  {
    q: "A bank's reserve requirement is set at 10%. If a customer deposits $5,000, how much can the bank lend out?",
    options: ["$5,000", "$500", "$4,500", "$4,000"],
    answer: 2,
    explanation: "With a 10% reserve requirement, the bank must keep $500 in reserve (10% of $5,000) and can lend out the remaining $4,500."
  },
  {
    q: "Which type of bank account typically offers the highest interest rate but requires a minimum balance and has limited withdrawals?",
    options: ["Checking account", "Money market account", "Basic savings account", "Demand deposit account"],
    answer: 1,
    explanation: "Money market accounts typically offer higher interest rates than regular savings accounts but require higher minimum balances and limit the number of monthly withdrawals (usually six)."
  },
  {
    q: "What is the primary function of the Federal Reserve's discount rate?",
    options: ["The rate at which banks lend to each other overnight", "The rate the Fed charges commercial banks for short-term loans", "The rate consumers pay on credit cards", "The rate set for 30-year mortgages"],
    answer: 1,
    explanation: "The discount rate is the interest rate the Federal Reserve charges commercial banks and other depository institutions when they borrow reserves directly from the Fed's discount window."
  },
  {
    q: "Which banking service allows a business to collect payments from customers' bank accounts on a recurring basis?",
    options: ["Wire transfer", "ACH debit", "Cashier's check", "Letter of credit"],
    answer: 1,
    explanation: "ACH (Automated Clearing House) debit transactions allow businesses to pull funds directly from a customer's bank account, commonly used for recurring payments like subscriptions or loan payments."
  },
  {
    q: "What is the purpose of FDIC insurance?",
    options: ["To insure investments in the stock market", "To protect depositors if an insured bank fails", "To guarantee mortgage payments", "To insure credit union deposits only"],
    answer: 1,
    explanation: "The FDIC (Federal Deposit Insurance Corporation) insures deposits at member banks up to $250,000 per depositor, per insured bank, per ownership category, protecting depositors if a bank fails."
  },
  {
    q: "Which credit score range is generally considered 'good' according to the FICO scoring model?",
    options: ["500-579", "580-669", "670-739", "800-850"],
    answer: 2,
    explanation: "In the FICO scoring model, a score of 670-739 is considered 'good.' Scores of 740-799 are 'very good,' and 800+ are 'exceptional.' Scores below 670 are considered fair or poor."
  },
  {
    q: "What type of loan uses the borrower's home as collateral and provides a lump sum at a fixed interest rate?",
    options: ["Home equity line of credit (HELOC)", "Home equity loan", "Personal unsecured loan", "Bridge loan"],
    answer: 1,
    explanation: "A home equity loan uses the home as collateral and provides a lump sum at a fixed rate, repaid in equal installments. A HELOC is a revolving line of credit, also secured by home equity."
  },
  {
    q: "The annual percentage rate (APR) on a loan differs from the interest rate because it:",
    options: ["Is always lower than the interest rate", "Includes fees and costs associated with the loan", "Only applies to adjustable-rate mortgages", "Is calculated monthly rather than annually"],
    answer: 1,
    explanation: "APR reflects the true cost of borrowing by including not just the interest rate but also fees, points, and other charges, expressed as a yearly rate. This makes it more comprehensive than the simple interest rate."
  },
  {
    q: "Which type of mortgage has an interest rate that adjusts periodically based on a market index?",
    options: ["Fixed-rate mortgage", "Balloon mortgage", "Adjustable-rate mortgage (ARM)", "Interest-only mortgage"],
    answer: 2,
    explanation: "An adjustable-rate mortgage (ARM) has an interest rate that changes periodically based on a benchmark index (e.g., SOFR), which means monthly payments can increase or decrease over time."
  },
  {
    q: "What does the debt-to-income (DTI) ratio measure in the context of lending?",
    options: ["A company's leverage relative to equity", "A borrower's monthly debt payments relative to gross monthly income", "The ratio of bad debt to total receivables", "A bank's loan losses relative to total loans"],
    answer: 1,
    explanation: "DTI ratio compares a borrower's total monthly debt payments to their gross monthly income. Lenders use it to assess ability to manage monthly payments and repay debts. Most lenders prefer a DTI below 43%."
  },
  {
    q: "Which factor has the GREATEST impact on a FICO credit score?",
    options: ["Length of credit history", "Types of credit used", "New credit inquiries", "Payment history"],
    answer: 3,
    explanation: "Payment history accounts for 35% of a FICO score, making it the single most important factor. It reflects whether a borrower has paid past credit accounts on time."
  },
  {
    q: "In insurance, what term describes the maximum amount a policyholder must pay out-of-pocket before insurance covers 100% of costs?",
    options: ["Premium", "Deductible", "Out-of-pocket maximum", "Copayment"],
    answer: 2,
    explanation: "The out-of-pocket maximum is the most a policyholder will have to pay in a plan year. After reaching this limit, the insurer pays 100% of covered costs. The deductible is what you pay before insurance kicks in."
  },
  {
    q: "What is the principle of indemnity in insurance?",
    options: ["The insured must have an insurable interest", "Insurance should restore the insured to their pre-loss financial position, not provide a profit", "The insurer can cancel the policy at any time", "The insured must disclose all material facts"],
    answer: 1,
    explanation: "The principle of indemnity states that insurance is designed to compensate the insured for actual losses suffered, restoring them to the same financial position as before the loss, not to create a gain."
  },
  {
    q: "Which type of life insurance builds cash value over time and remains in force for the insured's entire life?",
    options: ["Term life insurance", "Whole life insurance", "Group life insurance", "Credit life insurance"],
    answer: 1,
    explanation: "Whole life insurance provides lifetime coverage and accumulates cash value at a guaranteed rate. Term life insurance provides coverage for a specific period and has no cash value component."
  },
  {
    q: "What is adverse selection in the context of insurance?",
    options: ["An insurer choosing not to cover high-risk individuals", "High-risk individuals being more likely to seek insurance than low-risk individuals", "The process of setting premiums based on risk", "An insurer denying claims unfairly"],
    answer: 1,
    explanation: "Adverse selection occurs when people who are more likely to file claims are disproportionately more likely to purchase insurance, skewing the risk pool. Insurers use underwriting to mitigate this problem."
  },
  {
    q: "A company's property insurance policy has a coinsurance clause requiring 80% coverage. The building is worth $500,000 but is insured for $300,000. If a $100,000 loss occurs, how much will the insurer pay?",
    options: ["$100,000", "$80,000", "$75,000", "$60,000"],
    answer: 2,
    explanation: "The coinsurance formula: (Insurance carried / Insurance required) x Loss = Payment. Required coverage = 80% x $500,000 = $400,000. Payment = ($300,000 / $400,000) x $100,000 = $75,000."
  },
  {
    q: "Which type of bond pays no periodic interest and is sold at a discount to its face value?",
    options: ["Convertible bond", "Callable bond", "Zero-coupon bond", "Floating-rate bond"],
    answer: 2,
    explanation: "Zero-coupon bonds do not make periodic interest payments. They are issued at a discount and redeemed at face value at maturity, with the difference representing the investor's return."
  },
  {
    q: "When a bond's market price falls below its face value, the bond is said to be trading at:",
    options: ["A premium", "Par value", "A discount", "Its intrinsic value"],
    answer: 2,
    explanation: "A bond trades at a discount when its market price is below its face (par) value, which typically occurs when current interest rates are higher than the bond's coupon rate."
  },
  {
    q: "Which investment vehicle pools money from many investors to purchase a diversified portfolio of stocks, and the shares trade on exchanges like individual stocks?",
    options: ["Mutual fund", "Exchange-traded fund (ETF)", "Closed-end fund", "Unit investment trust"],
    answer: 1,
    explanation: "ETFs pool investor money to buy a diversified portfolio but trade on stock exchanges throughout the day at market prices, unlike mutual funds which are priced once daily at NAV."
  },
  {
    q: "What is the expense ratio of a mutual fund?",
    options: ["The percentage of assets paid out as dividends", "The annual fee charged by the fund as a percentage of assets under management", "The ratio of winning investments to losing investments", "The percentage of the fund held in cash"],
    answer: 1,
    explanation: "The expense ratio is the annual cost of owning a mutual fund or ETF, expressed as a percentage of average assets under management. It covers management fees, administrative costs, and other operating expenses."
  },
  {
    q: "Which of the following best describes a preferred stock?",
    options: ["Equity that always has voting rights and variable dividends", "Equity with fixed dividends and priority over common stock in liquidation", "Debt that converts to equity at a set price", "A government-issued security with guaranteed returns"],
    answer: 1,
    explanation: "Preferred stock is an equity security that typically pays fixed dividends and has priority over common stock in dividend payments and liquidation. It usually does not carry voting rights."
  },
  {
    q: "What is the primary market in securities trading?",
    options: ["Where previously issued securities are bought and sold between investors", "Where new securities are issued and sold for the first time", "Where derivatives contracts are traded", "Where foreign currency is exchanged"],
    answer: 1,
    explanation: "The primary market is where companies and governments issue new securities directly to investors (e.g., IPOs). The secondary market is where previously issued securities are traded between investors."
  },
  {
    q: "A market order in securities trading instructs the broker to:",
    options: ["Buy or sell only at a specified price or better", "Buy or sell immediately at the best available current price", "Buy or sell only when the price reaches a stop price", "Hold a security until a specific date"],
    answer: 1,
    explanation: "A market order instructs the broker to execute a trade immediately at the best available price. It guarantees execution but not price. A limit order specifies the maximum (buy) or minimum (sell) acceptable price."
  },
  {
    q: "What is short selling in securities markets?",
    options: ["Selling securities you own for less than you paid", "Borrowing securities to sell them, hoping to buy them back at a lower price", "Selling securities with a settlement date shorter than normal", "Trading securities in small quantities"],
    answer: 1,
    explanation: "Short selling involves borrowing securities from a broker, selling them in the market, and hoping to repurchase them later at a lower price to return to the lender, profiting from the price decline."
  },
  {
    q: "The SEC's Regulation FD (Fair Disclosure) requires that:",
    options: ["All securities trades be reported within 24 hours", "Companies must disclose material information to all investors simultaneously", "Fund managers disclose their personal trades", "Foreign companies follow U.S. accounting standards"],
    answer: 1,
    explanation: "Regulation FD requires that when a publicly traded company discloses material non-public information to certain individuals or entities, it must make public disclosure of that information simultaneously or promptly."
  },
  {
    q: "Which risk cannot be eliminated through portfolio diversification?",
    options: ["Company-specific risk", "Industry risk", "Systematic (market) risk", "Default risk"],
    answer: 2,
    explanation: "Systematic risk (also called market risk) affects the entire market and cannot be eliminated through diversification. Unsystematic risks (company-specific or industry risks) can be reduced by holding a diversified portfolio."
  },
  {
    q: "What does Value at Risk (VaR) measure?",
    options: ["The maximum possible loss on an investment", "The potential loss in value of a portfolio over a defined period for a given confidence interval", "The average return of a portfolio over time", "The volatility of a single security"],
    answer: 1,
    explanation: "VaR estimates the maximum potential loss of a portfolio over a specified time period at a given confidence level (e.g., 95%). For example, a 1-day VaR of $1 million at 95% means there is a 5% chance of losing more than $1 million in one day."
  },
  {
    q: "A company has a beta of 1.5. This means the stock is expected to:",
    options: ["Return 1.5 times the risk-free rate", "Move 50% more than the overall market", "Have 50% less volatility than the market", "Earn a 1.5% dividend yield"],
    answer: 1,
    explanation: "Beta measures a stock's sensitivity to market movements. A beta of 1.5 means the stock is expected to move 50% more than the market. If the market rises 10%, the stock is expected to rise 15%."
  },
  {
    q: "Which hedging instrument gives the buyer the right, but not the obligation, to sell an asset at a specified price?",
    options: ["Call option", "Forward contract", "Put option", "Futures contract"],
    answer: 2,
    explanation: "A put option gives the holder the right (but not obligation) to sell an underlying asset at the strike price before or at expiration. It is commonly used to hedge against declining asset prices."
  },
  {
    q: "Under the U.S. tax system, what is the standard deduction primarily used for?",
    options: ["Reducing self-employment taxes", "Reducing taxable income without itemizing individual deductions", "Calculating capital gains taxes", "Determining eligibility for tax credits"],
    answer: 1,
    explanation: "The standard deduction is a flat dollar amount that reduces taxable income for taxpayers who choose not to itemize their deductions. Taxpayers compare the standard deduction to their potential itemized deductions and choose the larger amount."
  },
  {
    q: "What is the difference between a tax deduction and a tax credit?",
    options: ["A deduction directly reduces tax owed; a credit reduces taxable income", "A credit directly reduces tax owed; a deduction reduces taxable income", "Both reduce taxable income equally", "A deduction only applies to businesses; a credit only applies to individuals"],
    answer: 1,
    explanation: "A tax credit directly reduces the amount of tax owed dollar-for-dollar, making it more valuable than a deduction. A tax deduction reduces taxable income, so the actual tax savings depend on the taxpayer's marginal tax rate."
  },
  {
    q: "Long-term capital gains tax rates apply to assets held for:",
    options: ["Less than 30 days", "Between 30 and 180 days", "Between 6 months and 1 year", "More than one year"],
    answer: 3,
    explanation: "Long-term capital gains tax rates (0%, 15%, or 20% for most taxpayers) apply to assets held for more than one year. Assets held for one year or less are taxed at ordinary income tax rates."
  },
  {
    q: "What is the 'wash sale' rule in taxation?",
    options: ["A rule that prevents deducting losses from selling high-turnover investments", "A rule that disallows claiming a loss if you repurchase the same or substantially identical security within 30 days before or after the sale", "A requirement to report all securities sales above $10,000", "A rule limiting how often you can sell mutual fund shares"],
    answer: 1,
    explanation: "The wash sale rule prevents taxpayers from claiming a tax loss on a sale if they purchase the same or substantially identical security within 30 days before or after the sale. The disallowed loss is added to the cost basis of the repurchased security."
  },
  {
    q: "If you invest $1,000 at an annual interest rate of 6% compounded annually, what is the value after 3 years?",
    options: ["$1,180.00", "$1,191.02", "$1,060.00", "$1,215.51"],
    answer: 1,
    explanation: "Using the future value formula: FV = PV x (1 + r)^n = $1,000 x (1.06)^3 = $1,000 x 1.191016 = $1,191.02."
  },
  {
    q: "What is the present value of $5,000 to be received in 4 years, assuming a discount rate of 8%?",
    options: ["$3,675.15", "$4,629.63", "$3,402.92", "$4,250.00"],
    answer: 0,
    explanation: "PV = FV / (1 + r)^n = $5,000 / (1.08)^4 = $5,000 / 1.36049 = $3,675.15."
  },
  {
    q: "An ordinary annuity differs from an annuity due in that:",
    options: ["An ordinary annuity pays higher amounts", "Payments in an ordinary annuity occur at the end of each period, while an annuity due pays at the beginning", "An ordinary annuity has a fixed term, while an annuity due is perpetual", "An ordinary annuity applies only to loans"],
    answer: 1,
    explanation: "In an ordinary annuity, payments are made at the end of each period. In an annuity due, payments are made at the beginning of each period, making an annuity due worth slightly more since each payment has one additional period to compound."
  },
  {
    q: "The Rule of 72 is used to estimate:",
    options: ["The maximum allowable debt-to-equity ratio", "How many years it takes for an investment to double at a given interest rate", "The minimum required return on equity", "The optimal asset allocation for retirement"],
    answer: 1,
    explanation: "The Rule of 72 states that dividing 72 by the annual interest rate gives the approximate number of years needed to double an investment. For example, at 8% per year, an investment doubles in approximately 72/8 = 9 years."
  },
  {
    q: "What is the net present value (NPV) decision rule for capital projects?",
    options: ["Accept the project if NPV is less than 1", "Accept the project if NPV is greater than or equal to zero", "Accept the project with the highest payback period", "Accept the project only if IRR equals the cost of capital"],
    answer: 1,
    explanation: "Under the NPV decision rule, a project should be accepted if its NPV is zero or positive, meaning the present value of expected cash inflows equals or exceeds the present value of cash outflows."
  },
  {
    q: "Working capital is defined as:",
    options: ["Total assets minus total liabilities", "Current assets minus current liabilities", "Long-term assets minus long-term liabilities", "Cash and equivalents only"],
    answer: 1,
    explanation: "Working capital = Current Assets minus Current Liabilities. It measures a company's short-term liquidity and operational efficiency, representing the funds available for day-to-day operations."
  },
  {
    q: "Which source of capital is generally the LEAST expensive for a company?",
    options: ["Common equity", "Preferred stock", "Debt (bonds)", "Retained earnings"],
    answer: 2,
    explanation: "Debt is typically the least expensive source of capital because interest payments are tax-deductible, and debt holders have a prior claim over equity holders, making it less risky for them and thus cheaper for the company."
  },
  {
    q: "Return on equity (ROE) is calculated as:",
    options: ["Net income / Total assets", "Net income / Shareholders' equity", "Operating income / Total revenue", "Net income / Total liabilities"],
    answer: 1,
    explanation: "ROE = Net Income / Shareholders' Equity. It measures how effectively management uses equity financing to generate profit. A higher ROE generally indicates more efficient use of equity capital."
  },
  {
    q: "The Weighted Average Cost of Capital (WACC) is used to:",
    options: ["Calculate average dividend yields", "Determine the minimum return a company must earn to satisfy all investors", "Measure a company's liquidity position", "Calculate the break-even sales volume"],
    answer: 1,
    explanation: "WACC represents the blended cost of a company's financing from all sources (debt and equity), weighted by their proportions. It is used as the discount rate in NPV analysis and represents the minimum required return on investments."
  },
  {
    q: "Which economic indicator is the broadest measure of a country's economic output?",
    options: ["Consumer Price Index (CPI)", "Gross Domestic Product (GDP)", "Producer Price Index (PPI)", "Industrial Production Index"],
    answer: 1,
    explanation: "GDP is the total monetary value of all goods and services produced within a country's borders in a specific period. It is the most comprehensive measure of economic activity and health."
  },
  {
    q: "When the Federal Reserve raises the federal funds rate, the most likely immediate effect is:",
    options: ["An increase in stock prices", "Cheaper borrowing costs for consumers", "Higher interest rates throughout the economy", "A decrease in the value of the U.S. dollar"],
    answer: 2,
    explanation: "When the Fed raises the federal funds rate (the rate banks charge each other for overnight loans), borrowing costs throughout the economy rise, including rates on mortgages, car loans, and credit cards."
  },
  {
    q: "Which phase of the business cycle is characterized by peak economic activity before a downturn?",
    options: ["Trough", "Expansion", "Peak", "Recovery"],
    answer: 2,
    explanation: "The peak is the highest point of economic activity in a business cycle, where employment and production are at their highest before the economy transitions into a contraction or recession."
  },
  {
    q: "What is the difference between CPI and core inflation?",
    options: ["CPI measures services only; core inflation measures goods only", "Core inflation excludes volatile food and energy prices from the CPI calculation", "CPI is measured monthly; core inflation is measured annually", "Core inflation includes import prices; CPI does not"],
    answer: 1,
    explanation: "Core inflation excludes food and energy prices from the CPI because these categories are highly volatile and can distort the underlying inflation trend. Core inflation is often used by policymakers for a clearer picture of sustained price trends."
  },
  {
    q: "What is the natural rate of unemployment?",
    options: ["Zero percent unemployment", "The unemployment rate during a recession", "The level of unemployment consistent with a stable rate of inflation, including frictional and structural unemployment", "The unemployment rate caused by seasonal factors only"],
    answer: 2,
    explanation: "The natural rate of unemployment includes frictional unemployment (people between jobs) and structural unemployment (skills mismatch), but not cyclical unemployment. It represents the baseline unemployment rate in a healthy economy."
  },
  {
    q: "If the U.S. dollar appreciates against the euro, what is the likely effect on U.S. exports to Europe?",
    options: ["U.S. exports become cheaper for Europeans, increasing demand", "U.S. exports become more expensive for Europeans, decreasing demand", "No effect on exports", "U.S. exports increase because the dollar is stronger"],
    answer: 1,
    explanation: "A stronger dollar means Europeans must pay more of their own currency to buy the same U.S. goods, making U.S. exports more expensive and less competitive in European markets, typically reducing export demand."
  },
  {
    q: "What is a currency forward contract used for in international business?",
    options: ["Speculating on interest rate changes", "Locking in a future exchange rate to eliminate foreign currency risk", "Converting currency at today's spot rate", "Investing in foreign bond markets"],
    answer: 1,
    explanation: "A currency forward contract is an agreement to buy or sell a specific amount of foreign currency at a predetermined exchange rate on a future date, allowing businesses to hedge against unfavorable currency movements."
  },
  {
    q: "Purchasing Power Parity (PPP) theory suggests that in the long run:",
    options: ["All countries should have the same interest rates", "Exchange rates adjust so that identical goods have the same price across countries", "Countries with higher GDP have stronger currencies", "Trade deficits always lead to currency depreciation"],
    answer: 1,
    explanation: "PPP theory holds that exchange rates between currencies should adjust to equalize the purchasing power of each currency, meaning the same basket of goods should cost the same amount in different countries when prices are converted at the exchange rate."
  },
  {
    q: "What is the primary purpose of the Dodd-Frank Wall Street Reform and Consumer Protection Act?",
    options: ["To deregulate financial markets and reduce oversight", "To reduce systemic risk and increase oversight of financial institutions after the 2008 financial crisis", "To establish the Federal Reserve System", "To create the Securities and Exchange Commission"],
    answer: 1,
    explanation: "Dodd-Frank (2010) was enacted in response to the 2008 financial crisis to increase financial stability, improve accountability and transparency, and protect consumers by creating new regulatory oversight mechanisms, including the CFPB."
  },
  {
    q: "Which regulation requires publicly traded companies to submit annual audited financial reports to the SEC?",
    options: ["Sarbanes-Oxley Act Section 404", "Form 10-K filing requirement", "Regulation T", "Basel III"],
    answer: 1,
    explanation: "The SEC requires all publicly traded companies to file a Form 10-K annually, which includes audited financial statements, management discussion and analysis, and disclosures about risks and operations."
  },
  {
    q: "Under the Sarbanes-Oxley Act, who is personally responsible for certifying the accuracy of financial reports?",
    options: ["The external auditor", "The board of directors collectively", "The CEO and CFO", "The internal audit committee"],
    answer: 2,
    explanation: "SOX Section 302 requires the CEO and CFO to personally certify the accuracy of financial reports filed with the SEC. They can face criminal penalties for knowingly certifying false statements."
  },
  {
    q: "What is the contribution limit for a 401(k) plan for employees under age 50 in recent tax years?",
    options: ["$6,500", "$19,500-$23,000 (subject to annual IRS adjustments)", "$15,000", "$7,000"],
    answer: 1,
    explanation: "The 401(k) employee contribution limit is set by the IRS and has been in the range of $19,500 to $23,000 in recent years. Workers age 50+ can make additional catch-up contributions. The exact limit adjusts annually for inflation."
  },
  {
    q: "What is the key difference between a traditional IRA and a Roth IRA?",
    options: ["Traditional IRA has no contribution limits; Roth IRA does", "Traditional IRA contributions may be tax-deductible and withdrawals are taxed; Roth IRA contributions are after-tax and qualified withdrawals are tax-free", "Roth IRA contributions are employer-matched; traditional IRA contributions are not", "Traditional IRA can only hold bonds; Roth IRA can hold stocks"],
    answer: 1,
    explanation: "Traditional IRA contributions may be tax-deductible (reducing taxable income now), but withdrawals in retirement are taxed as ordinary income. Roth IRA contributions are made with after-tax dollars, but qualified withdrawals in retirement are completely tax-free."
  },
  {
    q: "At what age can you begin taking Social Security retirement benefits at a reduced amount?",
    options: ["59 and a half", "60", "62", "65"],
    answer: 2,
    explanation: "You can begin collecting Social Security retirement benefits as early as age 62, but your monthly benefit will be permanently reduced compared to what you would receive at your full retirement age (66-67 depending on birth year)."
  },
  {
    q: "What is a Required Minimum Distribution (RMD) in retirement planning?",
    options: ["The minimum amount you must contribute to a 401(k) each year", "The minimum withdrawal you must take annually from most retirement accounts starting at age 73", "The minimum Social Security benefit you are entitled to", "The required amount to maintain Roth IRA eligibility"],
    answer: 1,
    explanation: "RMDs are mandatory annual withdrawals from traditional IRAs, 401(k)s, and most other retirement accounts, generally beginning at age 73. The IRS requires these distributions to ensure that tax-deferred savings are eventually taxed."
  },
  {
    q: "Which type of retirement plan requires employers to make contributions on behalf of employees, with the benefit at retirement based on a formula using salary and years of service?",
    options: ["Defined contribution plan", "Defined benefit (pension) plan", "SIMPLE IRA", "SEP-IRA"],
    answer: 1,
    explanation: "A defined benefit plan (pension) promises a specific monthly benefit at retirement, calculated using a formula based on factors like salary history and length of employment. The employer bears the investment risk."
  },
  {
    q: "What is the 50/30/20 budgeting rule?",
    options: ["Allocate 50% to savings, 30% to needs, 20% to wants", "Allocate 50% to needs, 30% to wants, and 20% to savings and debt repayment", "Allocate 50% to housing, 30% to transportation, 20% to other expenses", "Invest 50% in stocks, 30% in bonds, 20% in cash"],
    answer: 1,
    explanation: "The 50/30/20 rule is a personal budgeting guideline suggesting 50% of after-tax income go to needs (housing, food, utilities), 30% to wants (entertainment, dining out), and 20% to savings and debt repayment."
  },
  {
    q: "An emergency fund is recommended to cover how many months of living expenses?",
    options: ["1-2 months", "3-6 months", "12-18 months", "24 months"],
    answer: 1,
    explanation: "Financial advisors commonly recommend maintaining an emergency fund covering 3 to 6 months of living expenses in a liquid, accessible account to cover unexpected events like job loss or medical emergencies."
  },
  {
    q: "What is the primary advantage of paying off high-interest debt before investing in lower-return accounts?",
    options: ["High-interest debt improves your credit score when paid off slowly", "The guaranteed 'return' from eliminating high-interest debt typically exceeds the return on most conservative investments", "Paying off debt first is required by law before investing", "Investing always yields lower returns than debt interest rates"],
    answer: 1,
    explanation: "Eliminating high-interest debt (like credit card debt at 20%+) provides a guaranteed 'return' equal to the interest rate avoided. This typically exceeds expected returns on conservative investments, making debt payoff the better financial move."
  },
  {
    q: "Which of the following is an example of a systematic (automatic) savings strategy?",
    options: ["Saving whatever is left at the end of the month", "Setting up automatic transfers to savings on payday", "Manually reviewing expenses each quarter", "Investing only during bull markets"],
    answer: 1,
    explanation: "Automatic transfers from checking to savings on payday implement a 'pay yourself first' approach, ensuring saving happens before discretionary spending, making it one of the most effective personal finance habits."
  },
  {
    q: "Which financial ratio best measures a company's ability to pay interest on its outstanding debt?",
    options: ["Current ratio", "Interest coverage ratio", "Debt-to-equity ratio", "Price-to-book ratio"],
    answer: 1,
    explanation: "The interest coverage ratio (EBIT / Interest Expense) measures how easily a company can pay interest on outstanding debt. A ratio below 1.5 is generally considered a warning sign of financial stress."
  },
  {
    q: "What does the price-to-earnings (P/E) ratio tell investors?",
    options: ["The percentage of earnings paid out as dividends", "How much investors are willing to pay per dollar of earnings", "The total market value of a company", "The company's earnings growth rate"],
    answer: 1,
    explanation: "The P/E ratio (Market Price per Share / Earnings per Share) shows how much investors are paying for each dollar of a company's earnings. A high P/E may indicate growth expectations or overvaluation; a low P/E may suggest undervaluation or declining prospects."
  },
  {
    q: "A company repurchases its own shares on the open market. What is the most likely effect on earnings per share (EPS)?",
    options: ["EPS decreases because cash is spent", "EPS increases because fewer shares are outstanding", "EPS is unaffected by share repurchases", "EPS decreases because book value falls"],
    answer: 1,
    explanation: "Share buybacks reduce the number of shares outstanding. Since EPS = Net Income / Shares Outstanding, reducing the denominator while net income stays the same increases EPS, which can boost the stock price."
  },
  {
    q: "Which of the following is an example of contractionary fiscal policy?",
    options: ["Increasing government spending on infrastructure", "Cutting income tax rates", "Reducing government spending and/or raising taxes", "Lowering the federal funds rate"],
    answer: 2,
    explanation: "Contractionary fiscal policy involves reducing government spending and/or increasing taxes to slow economic growth and reduce inflation. Cutting taxes or increasing spending are examples of expansionary fiscal policy. The federal funds rate is a monetary policy tool."
  },
  {
    q: "What is the difference between a stock split and a reverse stock split?",
    options: ["A stock split increases share price; a reverse split decreases it", "A stock split increases share count and decreases price per share; a reverse split decreases share count and increases price per share", "A stock split distributes dividends; a reverse split withholds them", "There is no meaningful difference"],
    answer: 1,
    explanation: "In a stock split (e.g., 2-for-1), shares outstanding double and price per share halves. In a reverse split (e.g., 1-for-5), shares outstanding decrease and price per share increases proportionally. Neither changes a company's total market capitalization."
  },
  {
    q: "What is the difference between nominal and real interest rates?",
    options: ["Nominal rates are set by the government; real rates are set by banks", "Real interest rates adjust for inflation; nominal rates do not", "Nominal rates apply to savings accounts; real rates apply to investments", "Real rates are always higher than nominal rates"],
    answer: 1,
    explanation: "The real interest rate accounts for inflation (approximately: Real Rate = Nominal Rate minus Inflation Rate), reflecting the true purchasing power gained from an investment. Nominal rates are the stated rate before adjusting for inflation."
  },
  {
    q: "Which bond rating from Standard and Poor's is the highest investment-grade rating?",
    options: ["BB+", "BBB-", "A", "AAA"],
    answer: 3,
    explanation: "AAA is the highest credit rating assigned by Standard and Poor's, indicating the issuer has an extremely strong capacity to meet financial commitments. Bonds rated BBB- or higher are considered investment grade; those below are speculative (junk) bonds."
  },
  {
    q: "What is the primary purpose of a letter of credit in international trade?",
    options: ["To set import tariff rates between countries", "To guarantee that a seller will receive payment once the terms of the sale are fulfilled", "To establish currency exchange rates for cross-border transactions", "To insure cargo against loss or damage during shipping"],
    answer: 1,
    explanation: "A letter of credit is a bank document guaranteeing that a seller (exporter) will receive payment as long as the delivery conditions specified in the letter are met, reducing the risk for both buyers and sellers in international transactions."
  },
  {
    q: "Under the Capital Asset Pricing Model (CAPM), the expected return of an asset is determined by:",
    options: ["Its dividend yield plus capital gains", "The risk-free rate plus a risk premium based on the asset's beta and market risk premium", "Its past average return over the previous 10 years", "The company's earnings growth rate"],
    answer: 1,
    explanation: "CAPM formula: Expected Return = Risk-Free Rate + Beta x (Market Return minus Risk-Free Rate). The model states that an asset's expected return equals the risk-free rate plus a premium for bearing systematic (market) risk, as measured by beta."
  }
];
