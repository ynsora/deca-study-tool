import type { Question } from "../types";
export const financeQuestions: Question[] = [
  // ACCOUNTING FUNDAMENTALS
  {
    q: "Which accounting principle requires that expenses be recorded in the same period as the revenues they helped generate?",
    options: ["Cash basis principle", "Matching principle", "Revenue recognition principle", "Conservatism principle"],
    answer: 1,
    explanation: "The matching principle requires expenses to be recognized in the same period as the revenues they helped produce, ensuring accurate profit measurement."
  },
  {
    q: "When a company purchases equipment for $10,000 cash, which journal entry is correct?",
    options: ["Debit Cash $10,000; Credit Equipment $10,000", "Debit Equipment $10,000; Credit Cash $10,000", "Debit Expense $10,000; Credit Cash $10,000", "Debit Cash $10,000; Credit Revenue $10,000"],
    answer: 1,
    explanation: "Equipment (asset) increases with a debit; Cash (asset) decreases with a credit. Assets increase on the debit side and decrease on the credit side."
  },
  {
    q: "Which of the following is a contra-asset account?",
    options: ["Accounts Payable", "Accumulated Depreciation", "Prepaid Expenses", "Notes Payable"],
    answer: 1,
    explanation: "Accumulated Depreciation carries a credit balance and offsets the related fixed asset to show net book value, making it a contra-asset account."
  },
  {
    q: "Under accrual accounting, revenue is recognized when:",
    options: ["Cash is received from the customer", "The customer places an order", "Goods or services are delivered to the customer", "The invoice is mailed to the customer"],
    answer: 2,
    explanation: "Under accrual accounting, revenue is recognized when earned — when goods or services are delivered — regardless of when cash is received."
  },
  {
    q: "The normal balance of an expense account is:",
    options: ["Credit", "Debit", "Either debit or credit depending on the expense type", "Zero at all times"],
    answer: 1,
    explanation: "Expense accounts have a normal debit balance; they increase with debits and decrease with credits."
  },
  {
    q: "Which inventory costing method assumes the most recently purchased items are sold first?",
    options: ["FIFO", "LIFO", "Weighted Average", "Specific Identification"],
    answer: 1,
    explanation: "LIFO (Last-In, First-Out) assumes the most recently purchased inventory is sold first, which can lower taxable income during rising prices."
  },
  {
    q: "If a company has assets of $500,000 and liabilities of $200,000, owner's equity equals:",
    options: ["$700,000", "$200,000", "$300,000", "$500,000"],
    answer: 2,
    explanation: "Assets = Liabilities + Owner's Equity. Therefore, Owner's Equity = $500,000 − $200,000 = $300,000."
  },
  {
    q: "Depreciation is best described as:",
    options: ["A cash expense set aside to replace assets", "The allocation of an asset's cost over its useful life", "The decrease in market value of an asset", "A liability for future asset replacement"],
    answer: 1,
    explanation: "Depreciation is a non-cash process that allocates the cost of a tangible asset over its useful life, matching cost with revenue generation."
  },
  {
    q: "A company's trial balance shows total debits of $150,000 and total credits of $148,000. This indicates:",
    options: ["The company is profitable by $2,000", "There is a $2,000 recording error in the books", "The company has $2,000 more assets than liabilities", "The balance sheet will balance at $2,000"],
    answer: 1,
    explanation: "A trial balance must have equal debits and credits. A $2,000 discrepancy indicates an error that must be located and corrected."
  },
  {
    q: "Which financial statement shows the financial position of a company at a specific point in time?",
    options: ["Income Statement", "Cash Flow Statement", "Balance Sheet", "Statement of Retained Earnings"],
    answer: 2,
    explanation: "The Balance Sheet presents a company's assets, liabilities, and equity as of a specific date — a snapshot in time."
  },

  // FINANCIAL STATEMENTS
  {
    q: "On the income statement, gross profit is calculated as:",
    options: ["Net Sales minus Operating Expenses", "Net Sales minus Cost of Goods Sold", "Total Revenue minus Total Expenses", "Operating Income minus Interest Expense"],
    answer: 1,
    explanation: "Gross Profit = Net Sales − Cost of Goods Sold. It represents profit before operating expenses, interest, and taxes."
  },
  {
    q: "Which section of the cash flow statement includes dividend payments and proceeds from issuing bonds?",
    options: ["Operating Activities", "Investing Activities", "Financing Activities", "Supplemental Disclosures"],
    answer: 2,
    explanation: "Financing Activities include transactions with investors and creditors: issuing stock or bonds, repaying debt, and paying dividends."
  },
  {
    q: "A company reports net income of $80,000 but operating cash flow of $110,000. The most likely reason is:",
    options: ["The company overstated revenues", "Non-cash charges like depreciation were added back to net income", "The company understated expenses", "Capital expenditures exceeded net income"],
    answer: 1,
    explanation: "Depreciation reduces net income but not cash. Under the indirect method, depreciation is added back to reconcile net income to operating cash flow."
  },
  {
    q: "Retained earnings represent:",
    options: ["Cash held in a special reserve account", "Cumulative net income not distributed as dividends", "The original investment by shareholders", "Earnings reserved for next year's operations"],
    answer: 1,
    explanation: "Retained earnings are accumulated net income minus dividends paid — profits reinvested into the business."
  },
  {
    q: "EBITDA stands for:",
    options: ["Earnings Before Interest, Taxes, Depreciation, and Amortization", "Equity Before Income Tax, Dividends, and Accruals", "Earnings Benchmarked In Total Debt Analysis", "Estimated Base Income Tax Distribution Amount"],
    answer: 0,
    explanation: "EBITDA (Earnings Before Interest, Taxes, Depreciation, and Amortization) is a proxy for operating cash flow widely used to compare profitability."
  },
  {
    q: "A company has revenue of $500,000, COGS of $300,000, and operating expenses of $100,000. Operating income is:",
    options: ["$200,000", "$100,000", "$400,000", "$500,000"],
    answer: 1,
    explanation: "Gross Profit = $500,000 − $300,000 = $200,000. Operating Income = $200,000 − $100,000 = $100,000."
  },
  {
    q: "Which item is NOT found on a balance sheet?",
    options: ["Inventory", "Common Stock", "Cost of Goods Sold", "Long-term Debt"],
    answer: 2,
    explanation: "Cost of Goods Sold is an income statement expense. The balance sheet reports assets, liabilities, and equity at a point in time."
  },
  {
    q: "The indirect method cash flow statement begins with:",
    options: ["Total revenues", "Net income", "Beginning cash balance", "Cash from financing activities"],
    answer: 1,
    explanation: "The indirect method starts with net income and adjusts for non-cash items and changes in working capital to calculate operating cash flow."
  },
  {
    q: "If total liabilities increased by $50,000 and total assets remained unchanged, owner's equity:",
    options: ["Increased by $50,000", "Decreased by $50,000", "Remained unchanged", "Cannot be determined without more information"],
    answer: 1,
    explanation: "Assets = Liabilities + Equity. If assets are constant and liabilities rise $50,000, equity must fall $50,000 to keep the equation balanced."
  },
  {
    q: "Which financial statement links the income statement to the balance sheet?",
    options: ["Cash Flow Statement", "Statement of Retained Earnings", "Trial Balance", "Notes to Financial Statements"],
    answer: 1,
    explanation: "The Statement of Retained Earnings shows how net income increases retained earnings and dividends decrease it, connecting the income statement to the balance sheet."
  },

  // FINANCIAL RATIOS & ANALYSIS
  {
    q: "A company has current assets of $400,000 and current liabilities of $200,000. The current ratio is:",
    options: ["0.5", "1.0", "2.0", "4.0"],
    answer: 2,
    explanation: "Current Ratio = Current Assets / Current Liabilities = $400,000 / $200,000 = 2.0."
  },
  {
    q: "The quick ratio excludes which current asset?",
    options: ["Cash", "Accounts Receivable", "Marketable Securities", "Inventory"],
    answer: 3,
    explanation: "The quick ratio = (Cash + Marketable Securities + Accounts Receivable) / Current Liabilities. Inventory is excluded because it is the least liquid current asset."
  },
  {
    q: "A debt-to-equity ratio of 2.0 means:",
    options: ["The company has twice as much equity as debt", "The company has twice as much debt as equity", "Assets equal twice total liabilities", "Net income is double interest expense"],
    answer: 1,
    explanation: "Debt-to-Equity = Total Debt / Total Equity = 2.0 means $2 of debt for every $1 of equity — indicating high financial leverage."
  },
  {
    q: "Return on equity (ROE) is calculated as:",
    options: ["Net Income / Total Assets", "Net Income / Shareholders' Equity", "Operating Income / Net Sales", "Net Sales / Total Assets"],
    answer: 1,
    explanation: "ROE = Net Income / Shareholders' Equity. It measures how efficiently management generates profit from equity investment."
  },
  {
    q: "A company has net sales of $1,200,000 and average accounts receivable of $200,000. Accounts receivable turnover is:",
    options: ["3 times", "6 times", "12 times", "24 times"],
    answer: 1,
    explanation: "AR Turnover = Net Sales / Average AR = $1,200,000 / $200,000 = 6 times per year."
  },
  {
    q: "The P/E ratio is calculated by dividing:",
    options: ["Market price per share by earnings per share", "Earnings per share by market price per share", "Net income by total shares outstanding", "Market capitalization by total revenue"],
    answer: 0,
    explanation: "P/E Ratio = Market Price per Share / Earnings per Share — showing how much investors pay per dollar of earnings."
  },
  {
    q: "A gross profit margin of 40% means that for every dollar of sales:",
    options: ["$0.40 is spent on operating expenses", "$0.40 remains after paying for goods sold", "$0.40 is net profit after all expenses", "$0.40 is paid in taxes"],
    answer: 1,
    explanation: "Gross Profit Margin = Gross Profit / Net Sales = 40% means $0.40 of each sales dollar remains after COGS, before operating expenses."
  },
  {
    q: "The asset turnover ratio measures:",
    options: ["Profitability per asset dollar", "Efficiency of using assets to generate revenue", "Liquidity of current assets", "Leverage of fixed assets"],
    answer: 1,
    explanation: "Asset Turnover = Net Sales / Average Total Assets. A higher ratio means the company generates more revenue per dollar of assets."
  },
  {
    q: "An interest coverage ratio of 1.5 indicates:",
    options: ["The company is very financially healthy", "The company barely covers its interest obligations with operating income", "The company pays 1.5% interest on its debt", "The company has 1.5 times more equity than debt"],
    answer: 1,
    explanation: "Interest Coverage = EBIT / Interest Expense. A ratio of 1.5 is low, suggesting the company may have difficulty meeting interest payments in a downturn."
  },
  {
    q: "Inventory turnover of 12 times per year means average inventory is held for approximately:",
    options: ["12 days", "30 days", "60 days", "90 days"],
    answer: 1,
    explanation: "Days in Inventory = 365 / Inventory Turnover = 365 / 12 ≈ 30 days. Higher turnover indicates faster inventory movement."
  },

  // BANKING OPERATIONS & PRODUCTS
  {
    q: "Which deposit account typically offers the highest interest rate?",
    options: ["Checking account", "Regular savings account", "Money market account", "Certificate of deposit (CD)"],
    answer: 3,
    explanation: "CDs offer higher rates because the depositor agrees to leave funds untouched for a fixed term, reducing the bank's liquidity risk."
  },
  {
    q: "The Federal Reserve's primary tool for controlling the money supply is:",
    options: ["Setting income tax rates", "Open market operations", "Regulating stock exchanges", "Controlling foreign exchange rates"],
    answer: 1,
    explanation: "Open market operations — buying and selling U.S. Treasury securities — is the Fed's most frequently used monetary policy tool."
  },
  {
    q: "The reserve requirement is the minimum percentage of deposits that banks must:",
    options: ["Invest in government securities", "Hold in reserve and not lend out", "Pay to the FDIC annually", "Maintain as cash on hand only"],
    answer: 1,
    explanation: "The reserve requirement mandates the fraction of deposits banks must hold in reserve, limiting the money multiplier effect."
  },
  {
    q: "FDIC insurance covers deposits up to what amount per depositor, per insured bank?",
    options: ["$100,000", "$150,000", "$250,000", "$500,000"],
    answer: 2,
    explanation: "The FDIC insures deposits up to $250,000 per depositor, per insured bank, per ownership category."
  },
  {
    q: "An adjustable-rate mortgage (ARM) differs from a fixed-rate mortgage because:",
    options: ["The principal balance adjusts periodically", "The interest rate changes based on a market index", "Monthly payments are always lower than fixed-rate mortgages", "It requires no down payment"],
    answer: 1,
    explanation: "ARMs have interest rates that adjust at specified intervals based on a benchmark index (e.g., SOFR), causing monthly payments to fluctuate."
  },
  {
    q: "A credit union differs from a commercial bank in that a credit union is:",
    options: ["Regulated by the SEC", "Owned by its members and operated as a not-for-profit", "Required to offer investment banking services", "Insured only by private companies"],
    answer: 1,
    explanation: "Credit unions are member-owned cooperatives that return profits to members through lower rates and fees rather than distributing to outside shareholders."
  },
  {
    q: "The discount rate in banking is the interest rate the Federal Reserve charges:",
    options: ["On 30-year Treasury bonds", "Member banks for short-term loans through the discount window", "Consumers on auto loans", "Foreign governments for currency swaps"],
    answer: 1,
    explanation: "The discount rate is what the Fed charges member banks that borrow reserves through the Fed's discount window for short-term liquidity needs."
  },
  {
    q: "A bank's net interest margin (NIM) measures:",
    options: ["Profit on fee-based services", "The difference between interest income on assets and interest paid on liabilities", "The percentage of loans that default", "The ratio of capital to risk-weighted assets"],
    answer: 1,
    explanation: "NIM = (Interest Income − Interest Expense) / Earning Assets. It indicates how profitably a bank lends relative to its funding costs."
  },
  {
    q: "Which type of transfer is typically processed in real time and is most appropriate for large, urgent transactions?",
    options: ["ACH transfer", "Wire transfer", "Paper check", "Peer-to-peer app payment"],
    answer: 1,
    explanation: "Wire transfers settle in real time through systems like Fedwire, making them ideal for large, time-sensitive transactions — though they carry fees."
  },
  {
    q: "Loan covenants are best described as:",
    options: ["Collateral pledged against a loan", "Contractual conditions a borrower must maintain to avoid technical default", "Interest rate conditions of the loan", "The amortization schedule of loan repayment"],
    answer: 1,
    explanation: "Loan covenants are conditions (e.g., maintaining minimum liquidity ratios) that borrowers must comply with; violation can trigger accelerated repayment."
  },

  // TIME VALUE OF MONEY
  {
    q: "If you invest $1,000 at 8% annual interest compounded annually, the value after 3 years is approximately:",
    options: ["$1,240.00", "$1,259.71", "$1,331.00", "$1,080.00"],
    answer: 1,
    explanation: "FV = $1,000 × (1.08)^3 = $1,000 × 1.25971 ≈ $1,259.71."
  },
  {
    q: "The present value of $5,000 to be received in 4 years at a 6% discount rate is approximately:",
    options: ["$3,762.35", "$3,960.47", "$4,198.10", "$4,716.98"],
    answer: 1,
    explanation: "PV = $5,000 / (1.06)^4 = $5,000 / 1.26248 ≈ $3,960.47."
  },
  {
    q: "The Rule of 72 states that to estimate years to double an investment at a given interest rate, you should:",
    options: ["Divide 72 by the annual interest rate", "Multiply 72 by the annual interest rate", "Add 72 to the annual interest rate", "Subtract the interest rate from 72"],
    answer: 0,
    explanation: "Rule of 72: Years to double ≈ 72 / rate (%). At 8%, money doubles in about 72/8 = 9 years."
  },
  {
    q: "An annuity due differs from an ordinary annuity in that payments are made:",
    options: ["At the end of each period", "At the beginning of each period", "Only once at maturity", "Irregularly as cash is available"],
    answer: 1,
    explanation: "An annuity due makes payments at the beginning of each period; an ordinary annuity makes them at the end. Annuity due has a slightly higher PV."
  },
  {
    q: "A perpetuity pays $500 per year forever. At a 5% discount rate, its present value is:",
    options: ["$5,000", "$10,000", "$25,000", "$100,000"],
    answer: 1,
    explanation: "PV of perpetuity = Payment / Discount Rate = $500 / 0.05 = $10,000."
  },
  {
    q: "Compounding quarterly rather than annually, for the same nominal rate, produces:",
    options: ["A lower effective annual rate", "A higher effective annual rate", "The same effective annual rate", "A higher nominal rate"],
    answer: 1,
    explanation: "More frequent compounding increases the EAR. EAR = (1 + r/m)^m − 1. Quarterly compounding (m=4) yields a higher EAR than annual compounding."
  },
  {
    q: "Net Present Value (NPV) is positive when:",
    options: ["Total undiscounted cash inflows exceed outflows", "The discounted cash inflows exceed the initial investment cost", "IRR equals the cost of capital", "The payback period is under one year"],
    answer: 1,
    explanation: "Positive NPV means the present value of future cash flows exceeds the investment cost, indicating the project creates shareholder value."
  },
  {
    q: "Which relationship between interest rates and bond prices is correct?",
    options: ["They move in the same direction", "They move in opposite directions", "They are unrelated", "Bond prices only change at maturity"],
    answer: 1,
    explanation: "Bond prices and interest rates have an inverse relationship. When market rates rise, existing bond prices fall to make their fixed coupons competitive."
  },
  {
    q: "An investor receives $1,500 at the end of each year for 5 years. At a 7% discount rate, the present value of this annuity is approximately:",
    options: ["$5,307", "$6,153", "$7,500", "$8,250"],
    answer: 1,
    explanation: "PV = $1,500 × [(1 − (1.07)^−5) / 0.07] = $1,500 × 4.1002 ≈ $6,150 ≈ $6,153."
  },
  {
    q: "The effective annual rate (EAR) on a 12% nominal rate compounded monthly is approximately:",
    options: ["12.00%", "12.36%", "12.68%", "13.00%"],
    answer: 2,
    explanation: "EAR = (1 + 0.12/12)^12 − 1 = (1.01)^12 − 1 ≈ 1.12683 − 1 = 12.68%."
  },

  // INVESTMENTS & SECURITIES
  {
    q: "A stock paying a $2.00 annual dividend with a market price of $40 has a dividend yield of:",
    options: ["2%", "5%", "8%", "20%"],
    answer: 1,
    explanation: "Dividend Yield = Annual Dividend / Market Price = $2.00 / $40.00 = 5%."
  },
  {
    q: "A debenture is a bond that is:",
    options: ["Backed by specific collateral assets", "Unsecured, backed only by the issuer's creditworthiness", "Convertible into equity at maturity", "Issued only by municipalities"],
    answer: 1,
    explanation: "A debenture is an unsecured bond backed solely by the issuer's general creditworthiness and promise to pay — no specific collateral is pledged."
  },
  {
    q: "Diversification primarily reduces which type of investment risk?",
    options: ["Systematic (market) risk", "Unsystematic (company-specific) risk", "Inflation risk", "Interest rate risk"],
    answer: 1,
    explanation: "Diversification reduces unsystematic (idiosyncratic) risk by holding assets that don't move in tandem. Systematic risk cannot be diversified away."
  },
  {
    q: "Beta measures a stock's:",
    options: ["Total volatility", "Systematic risk relative to the market", "Dividend stability", "Earnings growth rate"],
    answer: 1,
    explanation: "Beta quantifies a stock's sensitivity to market movements (systematic risk). Beta > 1 means more volatile than the market; Beta < 1 means less volatile."
  },
  {
    q: "An investor buys 100 shares at $50 and sells at $65. The capital gain is:",
    options: ["$500", "$650", "$1,500", "$6,500"],
    answer: 2,
    explanation: "Capital Gain = ($65 − $50) × 100 shares = $15 × 100 = $1,500."
  },
  {
    q: "A bond trading at a premium means its market price is:",
    options: ["Below its face value because its coupon rate is low", "Above its face value because its coupon rate exceeds current market rates", "Equal to par value", "Below par due to poor credit quality"],
    answer: 1,
    explanation: "A bond trades at a premium when its coupon rate exceeds current market rates, so investors are willing to pay more than face value for higher income."
  },
  {
    q: "ETFs (exchange-traded funds) differ from mutual funds in that ETFs:",
    options: ["Are priced once per day after market close", "Must be purchased directly from the fund company", "Trade on stock exchanges throughout the day like stocks", "Have no management fees"],
    answer: 2,
    explanation: "ETFs trade on exchanges continuously during market hours at market prices, unlike mutual funds that are priced once daily at NAV."
  },
  {
    q: "The Capital Asset Pricing Model (CAPM) formula is:",
    options: ["E(R) = Rf + β(Rm − Rf)", "E(R) = Rf × β + Rm", "E(R) = Dividend / Price + Growth Rate", "E(R) = Net Income / Total Equity"],
    answer: 0,
    explanation: "CAPM: E(R) = Rf + β(Rm − Rf), where Rf is the risk-free rate, β is systematic risk, and (Rm − Rf) is the equity risk premium."
  },
  {
    q: "Short selling involves:",
    options: ["Buying a stock and holding it less than one year", "Borrowing shares, selling them, and hoping to repurchase at a lower price", "Selling a stock at below-market value", "Purchasing options with short expiration"],
    answer: 1,
    explanation: "Short selling means borrowing shares, selling at the current price, and buying them back later at a lower price — profiting from price declines."
  },
  {
    q: "A mutual fund with a front-end load charges:",
    options: ["Annual management fees on assets under management", "A sales commission at the time of purchase", "Early redemption fees if sold too soon", "Taxes on capital gain distributions"],
    answer: 1,
    explanation: "A front-end load is a sales commission charged when purchasing mutual fund shares, expressed as a percentage of the investment."
  },

  // INSURANCE & RISK MANAGEMENT
  {
    q: "The amount you pay out of pocket before insurance coverage begins is called the:",
    options: ["Premium", "Co-payment", "Deductible", "Coverage limit"],
    answer: 2,
    explanation: "A deductible is what the insured pays first before the insurer covers costs. Higher deductibles generally result in lower premium costs."
  },
  {
    q: "Term life insurance differs from whole life insurance in that term life:",
    options: ["Builds cash value over time", "Provides permanent lifetime coverage", "Provides coverage for a specified period only and has no cash value", "Pays dividends to the policyholder"],
    answer: 2,
    explanation: "Term life provides death benefit for a fixed period (e.g., 20 years) with no savings component. Whole life covers the insured for life and builds cash value."
  },
  {
    q: "General liability insurance protects a business from:",
    options: ["Employee injuries on the job", "Third-party claims of bodily injury or property damage caused by the business", "Loss of business income due to natural disaster", "Employee theft and fraud"],
    answer: 1,
    explanation: "General liability covers third-party bodily injury, property damage, and personal injury claims arising from business operations or products."
  },
  {
    q: "The principle of indemnity in insurance means:",
    options: ["The insurer pays before any loss occurs", "The insured cannot profit beyond their actual financial loss", "Both parties must disclose all material facts", "The insured must have an insurable interest in the property"],
    answer: 1,
    explanation: "The indemnity principle ensures insurance restores the insured to their pre-loss financial position — not better off, not worse off."
  },
  {
    q: "Subrogation gives the insurer the right to:",
    options: ["Cancel a policy without notice", "Pursue a third party responsible for a covered loss after paying the insured's claim", "Transfer a policy to another insurer", "Increase premiums following a claim"],
    answer: 1,
    explanation: "After paying a claim, subrogation allows the insurer to step into the insured's legal shoes and seek reimbursement from the negligent third party."
  },
  {
    q: "An umbrella insurance policy primarily provides:",
    options: ["Coverage for all risks excluded by other policies", "Additional liability coverage beyond the limits of underlying policies", "Coverage for high-value personal items", "Flood and earthquake coverage"],
    answer: 1,
    explanation: "An umbrella policy provides excess liability protection that activates after the limits of underlying policies (auto, homeowner's) are exhausted."
  },
  {
    q: "Workers' compensation insurance covers:",
    options: ["Wrongful termination lawsuits", "Employees injured on the job with medical care and wage replacement benefits", "Unemployment benefits for laid-off workers", "Disability unrelated to work"],
    answer: 1,
    explanation: "Workers' compensation provides medical care and wage replacement for work-related injuries or illnesses, and limits employer liability."
  },
  {
    q: "Actuarial science primarily involves:",
    options: ["Processing and paying insurance claims", "Using mathematics and statistics to assess and price insurance risk", "Selling insurance products", "Investigating insurance fraud"],
    answer: 1,
    explanation: "Actuaries use probability, statistics, and financial math to estimate future claims and help insurers set premiums and maintain adequate reserves."
  },
  {
    q: "A company that self-insures means it:",
    options: ["Buys the maximum available insurance coverage", "Sets aside its own funds to cover potential losses instead of buying insurance", "Has government-provided insurance", "Has no risk management plan"],
    answer: 1,
    explanation: "Self-insurance means a company retains risk internally, setting aside financial reserves to pay for potential losses rather than paying premiums to an insurer."
  },
  {
    q: "The law of large numbers is fundamental to insurance because it:",
    options: ["Allows coverage of very large individual risks", "Makes loss experience predictable when pooling a large number of similar risks", "Requires insurers to hold large capital reserves", "Limits the total claims an insurer must pay"],
    answer: 1,
    explanation: "The law of large numbers states that as insured units increase, actual losses converge toward expected losses, enabling accurate premium pricing."
  },

  // CORPORATE FINANCE & CAPITAL STRUCTURE
  {
    q: "WACC (Weighted Average Cost of Capital) represents:",
    options: ["The average interest rate paid on all debt", "The blended required return on all capital sources weighted by their proportions", "The required return on equity only", "The cost of issuing new common stock"],
    answer: 1,
    explanation: "WACC blends the after-tax cost of debt and cost of equity weighted by each source's share of total capital. It is used as the discount rate in NPV analysis."
  },
  {
    q: "The Modigliani-Miller theorem (without taxes) states that:",
    options: ["Capital structure is irrelevant to firm value", "Debt always increases firm value through the tax shield", "Equity is always more expensive than debt", "Dividend policy determines firm value"],
    answer: 0,
    explanation: "In a perfect capital market without taxes, M&M shows that firm value is determined by earning power and risk — capital structure does not matter."
  },
  {
    q: "Financial leverage amplifies:",
    options: ["Revenue growth only", "Both gains and losses for equity holders", "Losses only for equity holders", "The market value of assets"],
    answer: 1,
    explanation: "Financial leverage magnifies returns: when ROA > cost of debt, equity holders gain disproportionately; when ROA < cost of debt, losses are amplified."
  },
  {
    q: "Which capital budgeting method ignores the time value of money?",
    options: ["Net Present Value (NPV)", "Internal Rate of Return (IRR)", "Payback Period", "Discounted Payback Period"],
    answer: 2,
    explanation: "The simple payback period calculates how long to recover an investment from undiscounted cash flows, ignoring the time value of money."
  },
  {
    q: "If a project's IRR is 15% and the company's cost of capital is 10%, the company should:",
    options: ["Reject the project because IRR is too high", "Accept the project because IRR exceeds the cost of capital", "Reject the project because NPV would be negative", "Gather more information before deciding"],
    answer: 1,
    explanation: "When IRR > hurdle rate (cost of capital), the project generates returns above its cost of financing and creates value — it should be accepted."
  },
  {
    q: "The debt tax shield refers to:",
    options: ["A deduction available for equity dividends", "Tax savings from the deductibility of interest expense on debt", "A government exemption from capital gains taxes", "A subsidy for highly leveraged companies"],
    answer: 1,
    explanation: "Interest is tax-deductible. Tax Shield = Interest Expense × Tax Rate. This benefit makes debt cheaper on an after-tax basis than equity."
  },
  {
    q: "In a leveraged buyout (LBO), the acquisition is primarily financed by:",
    options: ["Issuing new equity in the public markets", "Large amounts of borrowed money secured by the target's assets", "Retained earnings of the target company", "Government bonds"],
    answer: 1,
    explanation: "LBOs use substantial debt (often 60–90% of purchase price) to acquire a company, with the target's cash flows and assets used to service and secure the debt."
  },
  {
    q: "A company's book value per share is $20 and its market price is $30. The price-to-book ratio is:",
    options: ["0.67", "1.50", "2.00", "10.00"],
    answer: 1,
    explanation: "P/B = Market Price / Book Value per Share = $30 / $20 = 1.50."
  },
  {
    q: "A rights offering allows existing shareholders to:",
    options: ["Convert bonds into equity", "Purchase new shares at a discount before public offering", "Buy back company shares on the open market", "Receive additional dividends when earnings rise"],
    answer: 1,
    explanation: "A rights offering gives existing shareholders the preemptive right to buy newly issued shares at a discount, protecting against ownership dilution."
  },
  {
    q: "The optimal capital structure is the debt-equity mix that:",
    options: ["Maximizes total debt", "Minimizes WACC and thereby maximizes firm value", "Eliminates all financial risk", "Maximizes earnings per share regardless of risk"],
    answer: 1,
    explanation: "The optimal capital structure balances the tax shield benefit of debt against the costs of financial distress to minimize WACC and maximize firm value."
  },

  // BUDGETING & FINANCIAL PLANNING
  {
    q: "A master budget includes:",
    options: ["Operating budgets and financial budgets", "Only the capital expenditure budget", "Only the sales forecast", "Tax filings for the year"],
    answer: 0,
    explanation: "The master budget combines operating budgets (sales, production, expenses) and financial budgets (capital expenditures, cash budget, pro-forma statements)."
  },
  {
    q: "Zero-based budgeting requires managers to:",
    options: ["Start from last year's budget and add a percentage increase", "Justify every expense from scratch each budget period regardless of history", "Budget only for new expenditures not in prior years", "Eliminate all discretionary spending"],
    answer: 1,
    explanation: "Zero-based budgeting starts from zero each period — every expenditure must be justified anew rather than carried forward from the prior year."
  },
  {
    q: "A favorable budget variance occurs when:",
    options: ["Actual expenses exceed budgeted expenses", "Actual revenue is below budgeted revenue", "Actual results are better than the budgeted target", "The budget must be revised upward"],
    answer: 2,
    explanation: "A favorable variance means actual performance exceeded the budget — revenue higher than expected or expenses lower than expected."
  },
  {
    q: "The cash budget is primarily used to:",
    options: ["Determine the optimal tax strategy", "Plan for cash inflows and outflows to ensure sufficient liquidity", "Calculate depreciation schedules", "Set long-term capital allocation strategy"],
    answer: 1,
    explanation: "The cash budget projects receipts and disbursements to ensure the company maintains enough liquidity and identifies when short-term borrowing is needed."
  },
  {
    q: "Capital budgeting addresses:",
    options: ["Day-to-day operating cash needs", "Long-term investments expected to generate returns over multiple years", "Short-term credit line management", "Setting product pricing strategy"],
    answer: 1,
    explanation: "Capital budgeting evaluates long-term investment decisions — plant, equipment, and projects — that will generate cash flows over multiple future years."
  },
  {
    q: "Sensitivity analysis in capital budgeting examines:",
    options: ["The impact of changing one variable at a time on project NPV or IRR", "The total risk of the entire project portfolio", "The optimal depreciation method to minimize taxes", "Historical financial performance trends"],
    answer: 0,
    explanation: "Sensitivity analysis tests how NPV or IRR changes when one input variable (e.g., sales volume, cost) is changed, identifying which assumptions most impact results."
  },
  {
    q: "A flexible budget adjusts for:",
    options: ["Changes in market interest rates", "Actual levels of activity rather than planned levels", "Employee salary increases", "Inflation adjustments only"],
    answer: 1,
    explanation: "A flexible budget recalculates expected costs at the actual activity level achieved, enabling more meaningful performance comparisons than a static budget."
  },
  {
    q: "Which budgeting approach allocates resources based on the priorities and goals of the organization rather than past spending patterns?",
    options: ["Incremental budgeting", "Zero-based budgeting", "Priority-based budgeting", "Rolling budget"],
    answer: 2,
    explanation: "Priority-based budgeting allocates resources according to strategic priorities and measured outcomes, focusing on what the organization wants to achieve."
  },
  {
    q: "The break-even point in units is calculated as:",
    options: ["Fixed Costs / (Selling Price − Variable Cost)", "Variable Costs / (Selling Price − Fixed Cost)", "Total Revenue / Total Costs", "Net Income / Number of Units Sold"],
    answer: 0,
    explanation: "Break-Even Units = Fixed Costs / Contribution Margin per Unit = Fixed Costs / (Price − Variable Cost per Unit)."
  },
  {
    q: "A company has fixed costs of $120,000, a selling price of $30 per unit, and variable costs of $18 per unit. Break-even volume is:",
    options: ["4,000 units", "6,667 units", "10,000 units", "12,000 units"],
    answer: 2,
    explanation: "Contribution Margin = $30 − $18 = $12 per unit. Break-even = $120,000 / $12 = 10,000 units."
  },

  // TAXES
  {
    q: "A progressive income tax system means that:",
    options: ["Everyone pays the same dollar amount in taxes", "Everyone pays the same percentage of income", "Higher income earners pay a higher percentage of their income in taxes", "Taxes decrease as income rises"],
    answer: 2,
    explanation: "A progressive tax system applies higher marginal tax rates to higher income brackets — the more you earn, the higher the rate on the top portion of income."
  },
  {
    q: "The marginal tax rate is the tax rate applied to:",
    options: ["All of a taxpayer's income", "The last dollar of additional income earned", "The average income across all brackets", "Capital gains only"],
    answer: 1,
    explanation: "The marginal tax rate applies to the next dollar of taxable income — it is the rate at the top of the taxpayer's income bracket."
  },
  {
    q: "FICA taxes fund which federal programs?",
    options: ["Medicare and Medicaid only", "Social Security and Medicare", "Unemployment insurance and Medicare", "Social Security and food stamps"],
    answer: 1,
    explanation: "FICA (Federal Insurance Contributions Act) taxes fund Social Security (6.2% each from employer and employee) and Medicare (1.45% each), totaling 15.3%."
  },
  {
    q: "A tax deduction reduces:",
    options: ["The tax rate applied to income", "Taxable income, indirectly reducing taxes owed", "Taxes owed dollar-for-dollar", "Only capital gains taxes"],
    answer: 1,
    explanation: "A tax deduction lowers taxable income. The tax savings = deduction amount × marginal tax rate. It is less valuable than a tax credit."
  },
  {
    q: "A tax credit differs from a tax deduction in that a tax credit:",
    options: ["Reduces taxable income", "Reduces the actual tax liability dollar-for-dollar", "Only applies to business expenses", "Is limited to lower-income taxpayers"],
    answer: 1,
    explanation: "A tax credit directly reduces taxes owed by the full credit amount, making it more valuable than a deduction, which only reduces taxable income."
  },
  {
    q: "Sales tax is best classified as which type of tax?",
    options: ["Progressive tax", "Regressive tax", "Proportional (flat) tax", "Corporate income tax"],
    answer: 1,
    explanation: "Sales tax is regressive because lower-income individuals spend a higher proportion of income on consumption, so sales tax takes a larger percentage of their income."
  },
  {
    q: "Depreciation on business assets reduces taxable income because:",
    options: ["It represents actual cash paid for the asset each year", "It is a non-cash deduction that reduces the tax base", "The IRS requires businesses to replace assets annually", "Depreciation increases asset market value"],
    answer: 1,
    explanation: "Depreciation is a non-cash deduction that reduces taxable income each year, providing a tax shield even though no cash is paid in the depreciation year."
  },
  {
    q: "A company earns $200,000 in taxable income and has a flat corporate tax rate of 21%. Its tax liability is:",
    options: ["$21,000", "$42,000", "$100,000", "$179,000"],
    answer: 1,
    explanation: "Tax Liability = $200,000 × 21% = $42,000."
  },
  {
    q: "Capital gains tax applies to:",
    options: ["Interest income from savings accounts", "Profit earned from the sale of investments or assets", "Regular salary and wages", "Social Security benefits"],
    answer: 1,
    explanation: "Capital gains tax is levied on the profit from selling capital assets (stocks, real estate, business interests) above their purchase price."
  },
  {
    q: "An employer who pays an employee $50,000 in wages must match which payroll tax?",
    options: ["Only Medicare tax of 1.45%", "Social Security (6.2%) and Medicare (1.45%) taxes", "Federal income tax withheld", "State income tax only"],
    answer: 1,
    explanation: "Employers must match employees' FICA contributions: 6.2% Social Security and 1.45% Medicare = 7.65% of wages up to Social Security wage base."
  },

  // PERSONAL FINANCE
  {
    q: "The most important factor in a FICO credit score is:",
    options: ["Length of credit history", "Credit utilization ratio", "Payment history", "Number of new credit applications"],
    answer: 2,
    explanation: "Payment history accounts for approximately 35% of a FICO score — the largest single factor. Consistently on-time payments most positively impact the score."
  },
  {
    q: "An emergency fund should ideally contain how many months of living expenses?",
    options: ["1–2 months", "3–6 months", "6–12 months", "12–24 months"],
    answer: 1,
    explanation: "Most financial planners recommend 3–6 months of living expenses in an easily accessible emergency fund to cover unexpected events without going into debt."
  },
  {
    q: "The 50/30/20 budget rule allocates income as:",
    options: ["50% savings, 30% needs, 20% wants", "50% needs, 30% wants, 20% savings", "50% investments, 30% living, 20% taxes", "50% rent, 30% food, 20% entertainment"],
    answer: 1,
    explanation: "The 50/30/20 rule: 50% of after-tax income for needs, 30% for wants, and 20% for savings and debt repayment."
  },
  {
    q: "A Roth IRA differs from a traditional IRA in that Roth contributions are:",
    options: ["Tax-deductible and withdrawals are taxed", "Made with after-tax dollars and qualified withdrawals are tax-free", "Only available to those under age 50", "Subject to required minimum distributions at age 72"],
    answer: 1,
    explanation: "Roth IRA contributions are made with after-tax money; qualified withdrawals in retirement are completely tax-free. Traditional IRAs offer a tax deduction now but tax withdrawals later."
  },
  {
    q: "Dollar-cost averaging in investing means:",
    options: ["Always buying investments at their lowest price", "Investing a fixed dollar amount at regular intervals regardless of price", "Buying equal dollar amounts of different assets", "Averaging the cost across multiple brokers"],
    answer: 1,
    explanation: "Dollar-cost averaging involves investing a fixed amount regularly (e.g., $200/month), buying more shares when prices are low and fewer when prices are high."
  },
  {
    q: "Net worth is calculated as:",
    options: ["Annual income minus annual expenses", "Total assets minus total liabilities", "Total income minus total taxes paid", "Savings account balance plus investment value"],
    answer: 1,
    explanation: "Net Worth = Total Assets − Total Liabilities. It is the personal equivalent of owner's equity on a balance sheet."
  },
  {
    q: "Compound interest benefits long-term investors because:",
    options: ["Interest is calculated on only the original principal", "Interest earned is reinvested and itself earns future interest", "Tax rates are lower on compound interest", "Banks are required to pay it by law"],
    answer: 1,
    explanation: "Compounding means interest earned in each period is added to the principal, so future interest accrues on an ever-growing base — the snowball effect."
  },
  {
    q: "A credit utilization ratio of 80% would likely have what effect on a credit score?",
    options: ["A highly positive impact", "No significant impact", "A significantly negative impact", "A moderate positive impact"],
    answer: 2,
    explanation: "Credit utilization (balance / credit limit) above 30% is considered high. An 80% utilization signals credit overextension and significantly lowers credit scores."
  },
  {
    q: "The primary benefit of a Health Savings Account (HSA) is:",
    options: ["Contributions are taxed but withdrawals for medical expenses are tax-free", "Triple tax advantage: tax-deductible contributions, tax-free growth, and tax-free medical withdrawals", "No contribution limits", "Available to anyone regardless of health plan type"],
    answer: 1,
    explanation: "HSAs offer a triple tax benefit: contributions are tax-deductible, growth is tax-free, and qualified medical withdrawals are tax-free — but require enrollment in a high-deductible health plan."
  },
  {
    q: "A 401(k) employer match is best described as:",
    options: ["A loan from your employer for retirement savings", "Free money from your employer that grows tax-deferred alongside your contributions", "A required retirement contribution for all employees", "A tax credit given to employees who save enough"],
    answer: 1,
    explanation: "An employer match contributes additional funds to your 401(k) based on your own contributions (e.g., 50% match up to 6% of salary) — effectively free compensation."
  },

  // CREDIT & LENDING
  {
    q: "The annual percentage rate (APR) on a loan represents:",
    options: ["The monthly interest rate times 12", "The all-in cost of borrowing including fees, expressed as a yearly rate", "The interest rate before inflation adjustment", "The maximum rate the lender can legally charge"],
    answer: 1,
    explanation: "APR includes the interest rate plus fees and other costs associated with the loan, expressed as a yearly rate. It is more comprehensive than the simple interest rate."
  },
  {
    q: "Amortization of a loan means:",
    options: ["Paying only interest for the first several years", "Gradually reducing the loan principal through regular scheduled payments", "Refinancing the loan at a lower rate", "Converting the loan to a different currency"],
    answer: 1,
    explanation: "Amortization is the process of paying off a loan through regular installments that cover both interest and principal, gradually reducing the outstanding balance to zero."
  },
  {
    q: "Collateral in a secured loan serves as:",
    options: ["The down payment made on the loan", "An asset pledged that the lender can seize if the borrower defaults", "A co-signer's guarantee", "The lender's profit margin on the loan"],
    answer: 1,
    explanation: "Collateral is an asset (e.g., real estate, vehicle) pledged by the borrower. If the borrower defaults, the lender can seize and sell the collateral to recover the loan."
  },
  {
    q: "A subprime mortgage is a loan made to:",
    options: ["Borrowers with excellent credit scores above 750", "Borrowers with poor credit histories who represent higher default risk", "First-time homebuyers regardless of credit history", "Government employees buying their first home"],
    answer: 1,
    explanation: "Subprime mortgages target borrowers with poor credit (typically below 620 FICO), higher risk of default, and are charged higher interest rates to compensate for risk."
  },
  {
    q: "The debt-to-income (DTI) ratio that most lenders use as a maximum for mortgage qualification is approximately:",
    options: ["20%", "30%", "43%", "60%"],
    answer: 2,
    explanation: "Most mortgage lenders use 43% as the maximum DTI (total monthly debt payments / gross monthly income) for qualified mortgage eligibility, though 36% is considered ideal."
  },
  {
    q: "A revolving credit account differs from an installment loan in that a revolving account:",
    options: ["Has a fixed monthly payment", "Allows repeated borrowing up to a credit limit as balances are repaid", "Cannot be used after the initial draw period", "Must be paid in full each month"],
    answer: 1,
    explanation: "Revolving credit (credit cards, HELOCs) allows borrowers to borrow, repay, and borrow again up to a set limit. Installment loans have fixed payments until fully repaid."
  },
  {
    q: "Points on a mortgage loan represent:",
    options: ["A credit score requirement threshold", "Upfront fees paid to the lender to reduce the interest rate", "The number of years until the loan adjusts", "The percentage of the purchase price required as a down payment"],
    answer: 1,
    explanation: "Mortgage points (discount points) are upfront fees where 1 point = 1% of the loan amount. Paying points lowers the interest rate, reducing monthly payments over the loan term."
  },
  {
    q: "A cosigner on a loan is:",
    options: ["The primary borrower on the account", "A person who agrees to be equally responsible for repayment if the primary borrower defaults", "The lender's representative on the transaction", "An appraiser who verifies collateral value"],
    answer: 1,
    explanation: "A cosigner co-signs the loan and assumes equal legal responsibility for repayment. If the primary borrower defaults, the lender can pursue the cosigner."
  },

  // ECONOMIC CONCEPTS
  {
    q: "GDP (Gross Domestic Product) measures:",
    options: ["A country's total exports minus imports", "The total market value of all final goods and services produced within a country in a period", "The total income of a country's citizens regardless of location", "The government's total spending in the economy"],
    answer: 1,
    explanation: "GDP measures the total monetary value of all final goods and services produced within a country's borders during a specific time period, regardless of who produced them."
  },
  {
    q: "The Consumer Price Index (CPI) is used to measure:",
    options: ["Producer prices at the wholesale level", "The purchasing power of consumers' income", "Inflation as experienced by typical urban consumers", "The GDP deflator"],
    answer: 2,
    explanation: "The CPI measures the average change in prices paid by urban consumers for a basket of goods and services over time — the most common measure of consumer price inflation."
  },
  {
    q: "Contractionary monetary policy involves:",
    options: ["Lowering interest rates to stimulate borrowing", "Raising interest rates and reducing money supply to combat inflation", "Increasing government spending", "Cutting taxes to boost consumer spending"],
    answer: 1,
    explanation: "Contractionary monetary policy uses higher interest rates and reduced money supply to cool inflation — it slows borrowing, spending, and economic activity."
  },
  {
    q: "The multiplier effect in economics occurs when:",
    options: ["Interest rates are multiplied by the loan amount", "An initial injection of spending leads to a larger increase in total economic output", "Taxes multiply as income rises", "Inflation compounds over multiple years"],
    answer: 1,
    explanation: "The multiplier effect means an initial increase in spending (e.g., government investment) ripples through the economy as recipients spend income, creating a larger total GDP increase."
  },
  {
    q: "Stagflation is characterized by:",
    options: ["High economic growth with high inflation", "Stagnant economic growth combined with high inflation and unemployment", "Rapid economic growth with falling prices", "Deflation accompanied by low unemployment"],
    answer: 1,
    explanation: "Stagflation is the difficult combination of stagnant growth, high inflation, and high unemployment simultaneously — notably experienced in the 1970s United States."
  },
  {
    q: "The federal funds rate is the interest rate at which:",
    options: ["The federal government borrows from the public", "Banks lend reserves to each other overnight", "The Fed lends to member banks at the discount window", "Consumers borrow on credit cards"],
    answer: 1,
    explanation: "The federal funds rate is the rate banks charge each other for overnight lending of excess reserves. The Fed influences this rate through open market operations."
  },
  {
    q: "A trade deficit occurs when a country's:",
    options: ["Government spending exceeds tax revenue", "Imports exceed exports", "GDP growth is below potential", "Foreign debt exceeds domestic investment"],
    answer: 1,
    explanation: "A trade deficit means a country imports more goods and services than it exports, resulting in a net outflow of currency to pay for the excess imports."
  },
  {
    q: "Quantitative easing (QE) involves the central bank:",
    options: ["Raising reserve requirements for banks", "Purchasing large quantities of financial assets to inject liquidity into the economy", "Increasing the federal funds rate target", "Reducing government spending to cut the deficit"],
    answer: 1,
    explanation: "QE is an unconventional monetary policy where the central bank buys assets (e.g., Treasury bonds, MBS) to increase money supply and lower long-term interest rates."
  },
  {
    q: "The natural rate of unemployment includes:",
    options: ["Only cyclical unemployment", "Frictional and structural unemployment but not cyclical unemployment", "Total unemployment during a recession", "Only workers who have never held a job"],
    answer: 1,
    explanation: "The natural rate of unemployment (NAIRU) includes frictional (job-switching) and structural (skills mismatch) unemployment, but not cyclical unemployment from recessions."
  },
  {
    q: "Supply-side economics (trickle-down economics) argues that:",
    options: ["Government redistribution maximizes economic growth", "Tax cuts and deregulation for businesses will stimulate investment and broadly benefit the economy", "Increasing consumer demand is the primary driver of growth", "Higher tariffs protect domestic industries and raise GDP"],
    answer: 1,
    explanation: "Supply-side economics holds that reducing taxes and regulations on producers stimulates investment, innovation, and job creation, benefiting the broader economy."
  },

  // FINANCIAL MARKETS & INSTITUTIONS
  {
    q: "The primary market for securities is where:",
    options: ["Investors trade previously issued securities among themselves", "New securities are issued and sold to investors for the first time (IPOs)", "Derivatives based on securities are traded", "Only institutional investors can participate"],
    answer: 1,
    explanation: "The primary market is where new securities are issued (IPOs, bond offerings), with proceeds going directly to the issuer. Secondary markets are where investors trade previously issued securities."
  },
  {
    q: "A stock exchange acts as:",
    options: ["The issuer of listed securities", "An organized marketplace facilitating the buying and selling of securities", "The primary regulator of all financial markets", "The sole underwriter of new stock issues"],
    answer: 1,
    explanation: "A stock exchange (e.g., NYSE, NASDAQ) provides an organized, regulated marketplace for buyers and sellers to trade securities efficiently."
  },
  {
    q: "The SEC (Securities and Exchange Commission) primarily regulates:",
    options: ["Bank reserve requirements", "Securities markets to protect investors and maintain fair, orderly markets", "Insurance companies and their products", "The federal funds rate and monetary policy"],
    answer: 1,
    explanation: "The SEC is the federal agency that regulates securities markets, enforces securities laws, and protects investors from fraud and market manipulation."
  },
  {
    q: "A hedge fund differs from a mutual fund primarily in that hedge funds:",
    options: ["Are available to all retail investors", "Are lightly regulated, use complex strategies, and are limited to accredited investors", "Only invest in government bonds", "Guarantee principal protection"],
    answer: 1,
    explanation: "Hedge funds are lightly regulated private investment vehicles using complex strategies (leverage, short selling, derivatives) and are restricted to accredited/qualified investors."
  },
  {
    q: "The bid-ask spread in financial markets represents:",
    options: ["The profit margin of the company whose stock is traded", "The difference between the price buyers will pay and the price sellers will accept", "The annual dividend yield of a stock", "The premium charged by an options writer"],
    answer: 1,
    explanation: "The bid-ask spread is the difference between the highest price buyers will pay (bid) and the lowest price sellers will accept (ask). It represents the market maker's profit."
  },
  {
    q: "A derivative security derives its value from:",
    options: ["The company's retained earnings", "An underlying asset such as a stock, bond, commodity, or index", "Government guarantees", "The issuing bank's credit rating"],
    answer: 1,
    explanation: "Derivatives (options, futures, swaps) derive their value from an underlying asset. They are used for hedging risk or speculative purposes."
  },
  {
    q: "Market capitalization is calculated as:",
    options: ["Total assets minus total liabilities", "Share price multiplied by total shares outstanding", "Annual revenue divided by share price", "Net income multiplied by the P/E ratio"],
    answer: 1,
    explanation: "Market Cap = Share Price × Total Shares Outstanding. It represents the total market value of a company's equity."
  },
  {
    q: "A futures contract obligates the buyer to:",
    options: ["Purchase the underlying asset at a set price on a future date", "Purchase the right but not the obligation to buy an asset", "Deliver the asset immediately at spot price", "Pay a premium for the right to sell an asset"],
    answer: 0,
    explanation: "A futures contract creates a binding obligation for the buyer to purchase (and seller to deliver) an asset at a specified price on a future date."
  },
  {
    q: "The efficient market hypothesis (EMH) states that:",
    options: ["Markets always price securities correctly based on all information", "Only insiders can consistently earn above-average returns", "Technical analysis always outperforms the market", "Active management always beats passive indexing"],
    answer: 0,
    explanation: "EMH holds that security prices reflect all available information, making it impossible to consistently achieve above-market returns through analysis or trading strategies."
  },
  {
    q: "An initial public offering (IPO) allows a company to:",
    options: ["Issue bonds to institutional investors", "Raise capital by selling shares to the public for the first time", "Repurchase its own outstanding shares", "Merge with another publicly traded company"],
    answer: 1,
    explanation: "In an IPO, a private company sells shares to the public for the first time, raising capital while allowing early investors to liquidate positions."
  },

  // INTERNATIONAL FINANCE & EXCHANGE RATES
  {
    q: "If the U.S. dollar strengthens against the euro, U.S. exporters will:",
    options: ["Benefit because their goods become cheaper abroad", "Be hurt because their goods become more expensive for European buyers", "See no change in their competitive position", "Benefit from higher import prices"],
    answer: 1,
    explanation: "A stronger dollar makes U.S. goods more expensive for foreign buyers (it takes more euros to buy dollars), reducing U.S. export competitiveness."
  },
  {
    q: "Purchasing Power Parity (PPP) theory states that exchange rates should adjust so that:",
    options: ["All countries have equal trade balances", "Identical goods cost the same in all countries when priced in a common currency", "Interest rates are equal across all countries", "All currencies appreciate equally over time"],
    answer: 1,
    explanation: "PPP holds that exchange rates adjust to equalize the purchasing power of different currencies — a basket of goods should cost the same in all countries."
  },
  {
    q: "A currency swap involves:",
    options: ["Converting currency at the current spot rate only", "Exchanging principal and interest payments in one currency for those in another", "Speculating on future currency movements", "Fixing exchange rates between two countries permanently"],
    answer: 1,
    explanation: "A currency swap involves two parties exchanging principal and interest in different currencies over a period, allowing each to borrow in their preferred currency."
  },
  {
    q: "The balance of payments records:",
    options: ["A company's international revenues and costs", "All economic transactions between a country's residents and the rest of the world", "The government's foreign currency reserves only", "International stock and bond market performance"],
    answer: 1,
    explanation: "The balance of payments (BOP) is a comprehensive record of all economic transactions between a country and the rest of the world, including trade, investment, and financial flows."
  },
  {
    q: "Interest rate parity theory suggests that the difference in interest rates between two countries is offset by:",
    options: ["Differences in inflation rates", "Expected changes in exchange rates between their currencies", "Differences in their GDPs", "Trade tariffs between the countries"],
    answer: 1,
    explanation: "Interest rate parity holds that higher interest rates in one country will be offset by expected currency depreciation, equalizing returns for investors across borders."
  },

  // ETHICS IN FINANCE
  {
    q: "Insider trading is illegal because it:",
    options: ["Always results in losses for the company involved", "Gives traders an unfair advantage using material non-public information", "Reduces market volatility", "Violates antitrust laws"],
    answer: 1,
    explanation: "Insider trading uses confidential, material information not available to the public to trade securities — it undermines market fairness and investor confidence."
  },
  {
    q: "A financial advisor who has a fiduciary duty must:",
    options: ["Maximize the firm's revenue from the client", "Act in the client's best interest ahead of their own interests", "Recommend only products their firm offers", "Avoid all investment risk for the client"],
    answer: 1,
    explanation: "A fiduciary standard requires advisors to act solely in the client's best interest, disclosing conflicts of interest and avoiding self-dealing."
  },
  {
    q: "Ponzi scheme fraud involves:",
    options: ["Manipulating stock prices through false press releases", "Paying early investors with money from new investors rather than legitimate profits", "Using inside information to trade securities", "Falsifying financial statements to inflate earnings"],
    answer: 1,
    explanation: "A Ponzi scheme uses incoming investor funds to pay returns to earlier investors, creating the illusion of profitability while generating no legitimate income."
  },
  {
    q: "Sarbanes-Oxley Act (SOX) was primarily enacted to:",
    options: ["Deregulate financial markets after the 2008 crisis", "Strengthen corporate accounting controls and protect investors after accounting scandals", "Establish the Federal Reserve System", "Regulate the insurance industry"],
    answer: 1,
    explanation: "SOX was enacted in 2002 following Enron and WorldCom scandals to enhance corporate governance, financial disclosures, and auditor independence."
  },
  {
    q: "Churning in a brokerage account refers to:",
    options: ["High portfolio turnover that aligns with the client's investment strategy", "Excessive trading by a broker to generate commissions, contrary to the client's interests", "Converting between asset classes as markets shift", "Rebalancing a portfolio annually"],
    answer: 1,
    explanation: "Churning is the unethical and illegal practice of excessive trading in a client's account primarily to generate broker commissions, regardless of the client's benefit."
  },

  // BUSINESS LAW RELATED TO FINANCE
  {
    q: "A sole proprietorship's owner is personally liable for business debts because:",
    options: ["The IRS requires it for tax purposes", "There is no legal separation between the owner and the business", "The owner has pledged personal assets as collateral", "All small business owners must accept personal liability"],
    answer: 1,
    explanation: "In a sole proprietorship, the business and owner are legally the same entity — creditors can pursue the owner's personal assets to satisfy business debts."
  },
  {
    q: "Limited liability protection means that shareholders of a corporation are generally:",
    options: ["Personally liable for all corporate debts", "Only liable for the amount they invested in the company", "Protected from paying dividends in bad years", "Exempt from all taxes on corporate profits"],
    answer: 1,
    explanation: "Limited liability shields shareholders from personal responsibility for corporate debts. Their maximum loss is limited to their investment in the company."
  },
  {
    q: "Bankruptcy under Chapter 7 involves:",
    options: ["Reorganizing debts under a court-approved repayment plan", "Liquidating assets to pay creditors, with remaining debts discharged", "Negotiating with creditors outside of court", "Transferring assets to a trust to protect them from creditors"],
    answer: 1,
    explanation: "Chapter 7 bankruptcy is a liquidation process where non-exempt assets are sold to pay creditors, and most remaining unsecured debts are legally discharged."
  },
  {
    q: "A promissory note is a legal document in which:",
    options: ["A lender promises to provide funds to a borrower", "A borrower promises in writing to repay a specified amount under specific terms", "Both parties agree to arbitrate financial disputes", "A company promises future stock dividends to shareholders"],
    answer: 1,
    explanation: "A promissory note is a signed written promise by the borrower (maker) to pay a specified sum to the lender (payee) on a defined schedule or upon demand."
  },
  {
    q: "The Uniform Commercial Code (UCC) primarily governs:",
    options: ["Federal income tax collection", "Commercial transactions including the sale of goods and secured transactions", "Securities market regulations", "Bankruptcy proceedings"],
    answer: 1,
    explanation: "The UCC is a comprehensive set of laws adopted by states to standardize commercial transactions, including sales of goods, secured financing, and negotiable instruments."
  },

  // FINANCIAL CONSULTING SCENARIOS
  {
    q: "A client asks whether to pay off a 4% mortgage early or invest in the stock market. The primary financial consideration is:",
    options: ["Always pay off debt first regardless of the rate", "Compare the after-tax mortgage rate to expected after-tax investment returns", "The psychological comfort of being debt-free", "The length of time remaining on the mortgage"],
    answer: 1,
    explanation: "The rational financial approach compares the after-tax cost of the mortgage to expected after-tax investment returns. If expected returns exceed the mortgage rate, investing may be preferable."
  },
  {
    q: "A consultant recommends a client refinance their mortgage when:",
    options: ["The new rate is slightly higher but has lower fees", "The interest rate reduction saves enough over the remaining loan term to exceed closing costs", "The client needs extra cash for short-term expenses", "The housing market is declining"],
    answer: 1,
    explanation: "Refinancing makes sense when the present value of interest savings over the remaining loan term exceeds the upfront closing costs — typically requiring a 1%+ rate reduction."
  },
  {
    q: "A financial consultant assessing a business's health would be MOST concerned if they found:",
    options: ["Rising revenue with stable margins", "Positive net income but consistently negative operating cash flow", "Increasing gross profit percentage over three years", "A debt-to-equity ratio below the industry average"],
    answer: 1,
    explanation: "Positive net income with negative operating cash flow suggests earnings quality problems — possibly manipulated accruals, unsustainable working capital builds, or fraudulent accounting."
  },
  {
    q: "When advising a client on asset allocation, a consultant would typically recommend more bonds (vs. stocks) for a client who:",
    options: ["Has a 30-year investment horizon", "Is 5 years from retirement and needs capital preservation", "Has high risk tolerance and stable income", "Is investing for a child's college fund 20 years away"],
    answer: 1,
    explanation: "Clients near retirement (short time horizon, need for capital preservation) should shift toward bonds to reduce volatility risk and protect accumulated wealth."
  },
  {
    q: "A DuPont analysis breaks return on equity (ROE) into three components. Which is NOT one of them?",
    options: ["Net profit margin", "Asset turnover", "Dividend payout ratio", "Equity multiplier (financial leverage)"],
    answer: 2,
    explanation: "DuPont: ROE = Net Profit Margin × Asset Turnover × Equity Multiplier. The dividend payout ratio is not a component of the DuPont decomposition."
  },

  // RETIREMENT & PENSION PLANNING
  {
    q: "A defined benefit pension plan guarantees:",
    options: ["The amount contributed to the plan each year", "A specific monthly benefit at retirement based on salary and years of service", "Investment returns at a set percentage", "Tax-free withdrawals in retirement"],
    answer: 1,
    explanation: "A defined benefit plan promises a specific retirement income formula (e.g., 2% × years of service × final salary). The employer bears the investment risk."
  },
  {
    q: "A defined contribution plan such as a 401(k) puts investment risk on:",
    options: ["The employer", "The employee/plan participant", "The federal government", "The plan administrator"],
    answer: 1,
    explanation: "In a 401(k) or similar defined contribution plan, the employee chooses investments and bears all investment risk. Retirement income depends on contribution amounts and investment performance."
  },
  {
    q: "Required Minimum Distributions (RMDs) from traditional IRAs generally must begin at age:",
    options: ["59½", "65", "72", "75"],
    answer: 2,
    explanation: "The SECURE Act requires RMDs from traditional IRAs (and most employer plans) to begin by April 1 of the year following the year the account owner turns 72."
  },
  {
    q: "Social Security benefits are reduced if claimed before full retirement age because:",
    options: ["The government penalizes early claimants", "Benefits are permanently reduced to reflect the longer expected payment period", "Medicare premiums increase proportionally", "Tax rates on benefits increase at early ages"],
    answer: 1,
    explanation: "Early Social Security claiming (as early as age 62) permanently reduces monthly benefits by up to 30% to actuarially account for the additional years of expected payments."
  },
  {
    q: "The primary advantage of a SEP-IRA for a self-employed individual is:",
    options: ["Higher contribution limits than a traditional 401(k)", "No required minimum distributions ever", "Available to employees of all company sizes regardless of income", "Tax-free withdrawals in retirement"],
    answer: 0,
    explanation: "A SEP-IRA allows self-employed individuals and small business owners to contribute up to 25% of compensation (max ~$69,000 in 2024) — much higher than traditional IRA limits."
  },
  {
    q: "The 4% withdrawal rule in retirement planning suggests:",
    options: ["Withdrawing 4% of income annually in contributions", "Withdrawing no more than 4% of the portfolio's initial value per year to make funds last 30 years", "Allocating 4% of the portfolio to high-risk assets", "Maintaining a 4% cash reserve at all times"],
    answer: 1,
    explanation: "The 4% rule (from the Trinity Study) suggests withdrawing 4% of the initial portfolio value annually (inflation-adjusted) gives a high probability of the portfolio lasting 30 years."
  },
  {
    q: "Vesting in a 401(k) employer match refers to:",
    options: ["The tax treatment of contributions", "The schedule by which the employee gains ownership of employer contributions", "The investment options available in the plan", "The percentage of income the employee contributes"],
    answer: 1,
    explanation: "Vesting schedules determine when employees fully own employer matching contributions. Cliff vesting grants 100% ownership after a set period; graded vesting increases ownership gradually."
  },

  // CRYPTOCURRENCY & MODERN FINANCIAL INSTRUMENTS
  {
    q: "Blockchain technology, underlying most cryptocurrencies, is best described as:",
    options: ["A centralized database maintained by large banks", "A distributed, immutable ledger that records transactions across a decentralized network", "A government-issued digital certificate for online payments", "An encryption method used by credit card processors"],
    answer: 1,
    explanation: "A blockchain is a distributed ledger maintained by a peer-to-peer network, where each block contains a cryptographic hash of the previous block, making records tamper-resistant."
  },
  {
    q: "Bitcoin's supply is limited to 21 million coins, making it:",
    options: ["Inflationary by design", "Deflationary by design due to finite supply", "Subject to central bank supply control", "Tied to the price of gold"],
    answer: 1,
    explanation: "Bitcoin has a hard cap of 21 million coins encoded in its protocol. This fixed supply, combined with increasing demand, creates deflationary pressure over time."
  },
  {
    q: "A stablecoin is a cryptocurrency that:",
    options: ["Never changes in value", "Is pegged to a stable asset (like USD) to minimize price volatility", "Is only used for international money transfers", "Earns interest like a traditional bank account"],
    answer: 1,
    explanation: "Stablecoins are cryptocurrencies designed to maintain a stable value by pegging to a fiat currency, commodity, or algorithmic mechanism, reducing crypto volatility."
  },
  {
    q: "An NFT (Non-Fungible Token) differs from Bitcoin in that an NFT is:",
    options: ["More easily exchanged for cash", "Unique and not interchangeable with other tokens — representing ownership of a specific item", "Backed by the U.S. government", "A form of stablecoin"],
    answer: 1,
    explanation: "NFTs are unique digital tokens on a blockchain representing ownership of a specific asset (art, collectible, music). Unlike Bitcoin, each NFT is distinct and cannot be exchanged 1:1."
  },
  {
    q: "DeFi (Decentralized Finance) refers to:",
    options: ["Government-backed digital currency systems", "Financial services and products built on blockchain networks without traditional intermediaries", "A Federal Reserve digital dollar initiative", "Derivatives traded on centralized exchanges"],
    answer: 1,
    explanation: "DeFi uses blockchain-based smart contracts to replicate financial services (lending, trading, savings) without banks or brokers as intermediaries."
  },
  {
    q: "The primary regulatory concern about cryptocurrencies for financial regulators is:",
    options: ["That they are too slow for everyday transactions", "Money laundering, tax evasion, and consumer protection risks due to limited oversight", "That they consume too little energy", "They are too closely tied to traditional banking"],
    answer: 1,
    explanation: "Regulators are most concerned about cryptocurrencies enabling money laundering, tax evasion, and investor fraud due to pseudonymity, limited oversight, and high volatility."
  },
  {
    q: "Smart contracts on blockchain networks automatically execute when:",
    options: ["A judge approves the transaction", "Predetermined coded conditions are met, without requiring intermediaries", "Both parties manually sign the contract", "A bank verifies the transaction"],
    answer: 1,
    explanation: "Smart contracts are self-executing programs on a blockchain that automatically carry out contract terms when coded conditions are met — removing the need for intermediaries."
  },

  // ADDITIONAL MIXED TOPICS (to reach 300)
  {
    q: "A company's operating cycle is the time required to:",
    options: ["Complete one fiscal year of operations", "Convert cash into inventory, sell goods, and collect receivables back into cash", "Depreciate all fixed assets to zero", "Complete one product development cycle"],
    answer: 1,
    explanation: "The operating cycle measures the time from cash outflow (buying inventory) through sale and collection of receivables — the shorter the cycle, the more efficient the business."
  },
  {
    q: "Working capital management primarily focuses on:",
    options: ["Long-term capital investment decisions", "Managing current assets and current liabilities to maintain operational liquidity", "Setting the optimal capital structure mix", "International currency risk exposure"],
    answer: 1,
    explanation: "Working capital management optimizes current assets (cash, inventory, receivables) and current liabilities (payables) to balance liquidity with profitability."
  },
  {
    q: "A stock split of 2-for-1 means each shareholder:",
    options: ["Receives twice the cash dividend", "Now holds twice as many shares at half the price, with total value unchanged", "Must pay double to keep their shares", "Receives one new share for every two held"],
    answer: 1,
    explanation: "A 2-for-1 stock split doubles the number of shares and halves the price per share. Total market capitalization and shareholder wealth remain unchanged."
  },
  {
    q: "Treasury stock refers to shares that have been:",
    options: ["Issued for the first time to new investors", "Repurchased by the company and held by the company itself", "Issued to government entities as payment", "Held in trust for employee retirement plans"],
    answer: 1,
    explanation: "Treasury stock is previously issued stock that the company has repurchased. It reduces shares outstanding, increases EPS, and can be reissued or retired."
  },
  {
    q: "An accounts payable department is responsible for:",
    options: ["Collecting money owed by customers", "Paying money owed by the company to its suppliers and vendors", "Managing the company's investment portfolio", "Processing employee payroll"],
    answer: 1,
    explanation: "Accounts payable handles the company's obligations to pay suppliers for goods and services received on credit — managing outgoing payments."
  },
  {
    q: "Economic value added (EVA) measures:",
    options: ["Gross profit minus operating expenses", "Net operating profit after tax minus a charge for the capital employed", "The increase in stock price over a period", "Total revenue growth year over year"],
    answer: 1,
    explanation: "EVA = NOPAT − (WACC × Capital Invested). It measures the value created above the required return on capital, indicating true economic profit."
  },
  {
    q: "A certificate of deposit (CD) that is 'callable' means:",
    options: ["The investor can withdraw funds early without penalty", "The bank can redeem the CD before maturity, typically when rates fall", "The CD earns a variable interest rate", "The investor can transfer the CD to another person"],
    answer: 1,
    explanation: "A callable CD gives the issuing bank the right to redeem it before maturity, usually exercised when interest rates fall so the bank can re-issue at lower rates."
  },
  {
    q: "Pro forma financial statements are:",
    options: ["Audited financial statements required by the SEC", "Projected or hypothetical financial statements based on assumptions about future events", "Statements prepared using only cash-basis accounting", "Historical statements adjusted for inflation"],
    answer: 1,
    explanation: "Pro forma statements are forward-looking projections based on assumptions (e.g., post-acquisition, proposed transaction) used for planning and investor presentations."
  },
  {
    q: "An inverted yield curve is often considered a recession predictor because it indicates:",
    options: ["Short-term interest rates are higher than long-term rates, suggesting economic pessimism", "Long-term rates exceed short-term rates, indicating confidence in growth", "The central bank has raised rates too high", "Government bond prices have fallen dramatically"],
    answer: 0,
    explanation: "An inverted yield curve (short-term rates > long-term rates) has historically preceded recessions — investors accept lower long-term yields expecting future rate cuts as the economy slows."
  },
  {
    q: "The Dodd-Frank Wall Street Reform Act of 2010 was primarily enacted in response to:",
    options: ["The dot-com bubble of 2000", "The 2008 global financial crisis to increase financial system oversight and consumer protection", "Enron's accounting fraud in 2001", "Rising inflation in the early 2000s"],
    answer: 1,
    explanation: "Dodd-Frank was enacted after the 2008 crisis to increase financial regulation, create the Consumer Financial Protection Bureau (CFPB), and reduce systemic risk in the banking sector."
  },
  {
    q: "Factoring accounts receivable means a company:",
    options: ["Delays payment on its accounts receivable for a fee", "Sells its receivables to a third party at a discount to receive cash immediately", "Writes off uncollectible receivables as bad debt", "Uses receivables as collateral for a line of credit"],
    answer: 1,
    explanation: "Factoring involves selling AR to a factor (financial intermediary) at a discount, converting future receivables into immediate cash to improve liquidity."
  },
  {
    q: "Goodwill on a balance sheet represents:",
    options: ["The value of company trademarks and patents", "The premium paid in an acquisition above the fair market value of net assets", "Long-term customer relationships recorded at cost", "The company's reputation valued at its market capitalization"],
    answer: 1,
    explanation: "Goodwill = Purchase Price − Fair Value of Net Assets Acquired. It reflects intangible value like brand strength, customer loyalty, and synergies not captured in individual assets."
  },
  {
    q: "A financial ratio that measures how many days, on average, it takes a company to pay its suppliers is called:",
    options: ["Days Sales Outstanding", "Days Payable Outstanding", "Cash Conversion Cycle", "Days Inventory Outstanding"],
    answer: 1,
    explanation: "Days Payable Outstanding (DPO) = Accounts Payable / (COGS / 365). Higher DPO means the company takes longer to pay suppliers, conserving cash."
  },
  {
    q: "The cash conversion cycle (CCC) measures:",
    options: ["How quickly a company converts assets to cash in liquidation", "The time from cash outflow to purchase inventory until cash is collected from customers", "The period between fiscal year-end and tax filing deadline", "How long it takes to convert accounts payable to cash"],
    answer: 1,
    explanation: "CCC = Days Inventory Outstanding + Days Sales Outstanding − Days Payable Outstanding. A shorter CCC means faster conversion of investments in inventory into cash."
  },
  {
    q: "Microfinance institutions primarily serve:",
    options: ["Multinational corporations needing foreign currency loans", "Low-income entrepreneurs and small businesses with limited access to traditional banking", "Hedge funds requiring short-term leverage", "Government agencies issuing infrastructure bonds"],
    answer: 1,
    explanation: "Microfinance provides small loans, savings, and financial services to low-income individuals and micro-enterprises that lack access to traditional banking systems."
  },
  {
    q: "A 'junk bond' is formally known as a:",
    options: ["Treasury inflation-protected security", "High-yield (below investment-grade) bond rated below BBB- by S&P", "Bond issued by municipalities for infrastructure", "Convertible bond with equity-like features"],
    answer: 1,
    explanation: "Junk bonds are below investment-grade bonds (rated below BBB- by S&P or Baa3 by Moody's). They offer higher yields to compensate investors for greater default risk."
  },
  {
    q: "When a central bank lowers interest rates, the expected impact on the housing market is:",
    options: ["Home prices fall as mortgage demand decreases", "Home prices rise as lower mortgage rates increase purchasing power and demand", "No change because housing prices are not linked to interest rates", "Home prices fall as investors shift to bonds"],
    answer: 1,
    explanation: "Lower interest rates reduce mortgage costs, increasing demand for homes. More buyers competing for available inventory tends to push home prices higher."
  },
  {
    q: "An option's intrinsic value is:",
    options: ["The total premium paid for the option", "The time value remaining before expiration", "The amount by which an option is in-the-money", "The difference between the option's beta and the market beta"],
    answer: 2,
    explanation: "Intrinsic value is the immediate exercise value of an option: for a call, it is max(0, Stock Price − Strike Price). Time value = Total Premium − Intrinsic Value."
  },
  {
    q: "A call option gives the holder the right to:",
    options: ["Sell an asset at the strike price before expiration", "Buy an asset at the strike price before expiration", "Receive dividends on an underlying stock", "Short the underlying asset at current market price"],
    answer: 1,
    explanation: "A call option grants the holder the right (not obligation) to purchase the underlying asset at the strike price on or before the expiration date."
  },
  {
    q: "A put option gives the holder the right to:",
    options: ["Buy an asset at the strike price", "Sell an asset at the strike price before expiration", "Receive the difference between current price and strike price immediately", "Buy assets at a 50% discount"],
    answer: 1,
    explanation: "A put option grants the holder the right to sell the underlying asset at the specified strike price on or before expiration — profitable when asset prices fall."
  },
  {
    q: "Which of the following best describes a venture capital firm?",
    options: ["A commercial bank specializing in small business loans", "An investment firm that provides capital to early-stage, high-growth potential companies in exchange for equity", "A government agency funding infrastructure projects", "A firm managing pension funds for large corporations"],
    answer: 1,
    explanation: "Venture capital firms invest equity capital into early-stage or high-growth companies, taking ownership stakes and providing strategic guidance in hopes of high returns at exit."
  },
  {
    q: "Angel investors differ from venture capitalists in that angel investors typically:",
    options: ["Invest only in public companies", "Invest their own personal funds in very early-stage companies, often pre-revenue", "Require a controlling stake in the company", "Focus on later-stage growth companies near IPO"],
    answer: 1,
    explanation: "Angel investors are high-net-worth individuals who invest personal funds in seed or early-stage startups, often before institutional VC is available."
  },
  {
    q: "A company's earnings per share (EPS) is calculated as:",
    options: ["Net Income / Total Shares Outstanding", "Gross Profit / Total Shares Outstanding", "Net Income / Weighted Average Diluted Shares Outstanding", "Operating Income / Book Value per Share"],
    answer: 2,
    explanation: "Basic EPS = Net Income / Weighted Average Shares Outstanding. Diluted EPS includes the effect of convertible securities and options, giving a more conservative figure."
  },
  {
    q: "The Gordon Growth Model (Dividend Discount Model) values a stock as:",
    options: ["EPS / Cost of Equity", "Dividend per Share / (Cost of Equity − Dividend Growth Rate)", "Book Value per Share × P/B Ratio", "FCFE / WACC"],
    answer: 1,
    explanation: "The Gordon Growth Model: P = D1 / (r − g), where D1 is next year's dividend, r is the required return, and g is the constant dividend growth rate."
  },
  {
    q: "Foreign direct investment (FDI) involves:",
    options: ["Purchasing foreign currency for speculation", "Establishing or acquiring lasting business operations in another country", "Buying foreign government bonds in the secondary market", "Trading foreign stocks on a domestic exchange"],
    answer: 1,
    explanation: "FDI involves establishing lasting control or significant influence in a foreign enterprise (e.g., building a factory, acquiring a company), unlike portfolio investment."
  },
  {
    q: "A country experiencing hyperinflation should expect its currency to:",
    options: ["Strengthen significantly against other currencies", "Weaken dramatically as purchasing power collapses", "Remain stable if backed by gold reserves", "Appreciate as interest rates rise"],
    answer: 1,
    explanation: "Hyperinflation erodes a currency's purchasing power rapidly, causing it to lose value dramatically against foreign currencies as confidence in the currency collapses."
  },
  {
    q: "The concept of 'time value of money' is most directly illustrated by:",
    options: ["A dollar today is worth more than a dollar in the future due to its earning potential", "Currency exchange rates change over time", "Older assets depreciate in value", "Tax rates increase with inflation"],
    answer: 0,
    explanation: "The time value of money principle holds that a dollar available today is worth more than a dollar in the future because it can be invested to earn returns in the interim."
  },
  {
    q: "Which statement about preferred stock is correct?",
    options: ["Preferred stockholders vote in all corporate elections", "Preferred stockholders receive dividends before common stockholders but after bondholders are paid interest", "Preferred stock always converts to common stock after 5 years", "Preferred stockholders have the highest claim in bankruptcy"],
    answer: 1,
    explanation: "Preferred stockholders receive dividends before common stockholders and have higher liquidation priority than common equity, but debt holders rank ahead of all equity in bankruptcy."
  },
  {
    q: "Currency risk (exchange rate risk) in international business can be hedged using:",
    options: ["Domestic interest rate swaps", "Forward contracts, currency options, or currency futures", "Domestic bond issuance", "Increasing domestic prices"],
    answer: 1,
    explanation: "Currency risk can be hedged with forward contracts (locking in a future exchange rate), currency options (the right to exchange at a set rate), or futures contracts."
  },
  {
    q: "A company with a high degree of operating leverage will experience:",
    options: ["Profits that fluctuate less than revenue", "Large swings in operating profit in response to changes in sales volume", "Lower fixed costs relative to variable costs", "Earnings that are insensitive to economic cycles"],
    answer: 1,
    explanation: "High operating leverage means high fixed costs relative to variable costs. Small changes in revenue produce large changes in operating profit, amplifying risk."
  },
  {
    q: "The concept of 'moral hazard' in finance refers to:",
    options: ["The risk that a financial advisor will give bad advice", "The tendency for parties to take on more risk when they do not bear the full consequences of that risk", "The ethical obligation of financial institutions to act honestly", "Fraudulent behavior by corporate executives"],
    answer: 1,
    explanation: "Moral hazard occurs when insulation from risk changes behavior — e.g., banks taking excessive risks if they expect government bailouts, or insured parties being less careful."
  },
  {
    q: "A convertible bond allows the bondholder to:",
    options: ["Convert variable interest to fixed interest", "Exchange the bond for a predetermined number of the issuer's shares", "Convert the bond to cash before maturity at any time", "Exchange a domestic bond for a foreign currency bond"],
    answer: 1,
    explanation: "A convertible bond gives the holder the option to convert the bond into company shares at a preset conversion ratio, allowing participation in equity upside while providing bond downside protection."
  },
  {
    q: "A financial analyst states that a company has an ROA of 10% and a financial leverage multiplier of 2.0. Using DuPont analysis, the ROE is:",
    options: ["5%", "10%", "20%", "12%"],
    answer: 2,
    explanation: "DuPont ROE = ROA × Equity Multiplier = 10% × 2.0 = 20%."
  },
  {
    q: "The Altman Z-Score is used to:",
    options: ["Measure a company's revenue growth rate", "Predict the probability of a company going bankrupt", "Calculate the fair value of a company's stock", "Determine a company's credit rating"],
    answer: 1,
    explanation: "The Altman Z-Score combines five financial ratios to predict the likelihood of corporate bankruptcy within two years. Scores below 1.81 indicate financial distress."
  },
  {
    q: "Green bonds are debt instruments issued specifically to:",
    options: ["Fund companies that are environmentally certified", "Finance climate-positive or environmentally beneficial projects", "Provide below-market returns to socially conscious investors", "Replace government bonds in emerging markets"],
    answer: 1,
    explanation: "Green bonds are fixed-income securities issued to raise capital exclusively for projects with positive environmental or climate benefits, such as renewable energy or clean water."
  },
  {
    q: "ESG investing stands for investing that considers:",
    options: ["Earnings, Stability, and Growth factors", "Environmental, Social, and Governance factors alongside financial metrics", "Equity, Securities, and Government bonds", "Exchange rates, Spreads, and Growth indicators"],
    answer: 1,
    explanation: "ESG investing integrates Environmental (climate impact), Social (labor practices, community), and Governance (board structure, transparency) factors into investment analysis."
  },
  {
    q: "A reverse mortgage allows homeowners to:",
    options: ["Refinance their mortgage at a lower interest rate", "Borrow against home equity and receive payments while continuing to live in the home", "Sell their home and lease it back from the buyer", "Transfer their mortgage to another property without penalties"],
    answer: 1,
    explanation: "A reverse mortgage allows homeowners aged 62+ to convert home equity into loan proceeds (lump sum, monthly payments, or line of credit) without making monthly payments."
  },
  {
    q: "Which of the following best describes the difference between gross income and net income for an individual?",
    options: ["Gross income is after taxes; net income is before taxes", "Gross income is total income before deductions; net income is income after taxes and deductions", "Gross income includes investment gains; net income excludes them", "They are the same thing expressed differently"],
    answer: 1,
    explanation: "Gross income is total income before any deductions or taxes. Net income (take-home pay) is what remains after all taxes, insurance premiums, and other deductions."
  },
  {
    q: "A SWOT analysis used in financial planning evaluates a business's:",
    options: ["Sales, Working capital, Operations, and Taxes", "Strengths, Weaknesses, Opportunities, and Threats", "Solvency, Wealth, Overheads, and Turnover", "Strategic, Working, Operational, and Technical factors"],
    answer: 1,
    explanation: "SWOT analysis examines internal Strengths and Weaknesses alongside external Opportunities and Threats to inform strategic and financial planning decisions."
  },
  {
    q: "A company with a quick ratio below 1.0 indicates that:",
    options: ["The company is highly profitable", "The company may not be able to cover current liabilities with its most liquid assets", "The company has too much cash on hand", "The company's long-term debt exceeds short-term debt"],
    answer: 1,
    explanation: "A quick ratio below 1.0 means the company's liquid assets (cash + AR + marketable securities) are insufficient to cover current liabilities — a potential liquidity concern."
  },
  {
    q: "Opportunity cost in financial decision-making represents:",
    options: ["The direct cost of implementing a decision", "The value of the best alternative foregone when making a financial choice", "The sunk cost already paid for a project", "The cost of financing a project with debt"],
    answer: 1,
    explanation: "Opportunity cost is the benefit given up by choosing one option over the next best alternative. It is a fundamental concept in rational financial decision-making."
  },
  {
    q: "The loanable funds theory suggests that the interest rate is determined by:",
    options: ["Central bank policy alone", "The interaction of the supply of savings and the demand for borrowing", "Inflation expectations only", "Government deficit spending targets"],
    answer: 1,
    explanation: "The loanable funds theory holds that interest rates are set in a market where households supply savings (at higher rates) and firms demand funds for investment (more at lower rates)."
  },
  {
    q: "A company repurchasing its own shares in the open market will typically:",
    options: ["Decrease earnings per share (EPS)", "Increase earnings per share by reducing shares outstanding", "Have no effect on EPS", "Increase shares outstanding"],
    answer: 1,
    explanation: "Share buybacks reduce shares outstanding. If net income stays constant, EPS = Net Income / fewer shares = higher EPS, benefiting remaining shareholders."
  },
  {
    q: "Which of the following is an example of systematic risk?",
    options: ["A company's CEO unexpectedly resigns", "A recession reduces consumer spending across all industries", "A factory fire destroys a company's production facility", "A key patent for one company expires"],
    answer: 1,
    explanation: "Systematic risk affects the entire market and cannot be diversified away (e.g., recessions, interest rate changes). Unsystematic risk is company or industry-specific."
  },
  {
    q: "The Sharpe ratio measures:",
    options: ["Total return relative to total assets", "Excess return per unit of total risk (standard deviation)", "Beta adjusted for dividend payments", "Return on equity relative to return on assets"],
    answer: 1,
    explanation: "Sharpe Ratio = (Portfolio Return − Risk-Free Rate) / Standard Deviation. It measures how much excess return is earned per unit of risk, enabling risk-adjusted comparison."
  },
  {
    q: "A laddered bond portfolio strategy involves:",
    options: ["Investing all bond proceeds in the highest-yielding bond available", "Purchasing bonds with staggered maturities to reduce interest rate and reinvestment risk", "Concentrating bond investments in one maturity date", "Buying only bonds rated below investment grade"],
    answer: 1,
    explanation: "Bond laddering spreads investments across bonds maturing at regular intervals, so when each rung matures, the proceeds are reinvested at prevailing rates, managing rate risk."
  },
  {
    q: "In the context of financial statements, 'window dressing' refers to:",
    options: ["Improving financial ratios temporarily just before reporting dates to appear stronger", "Decorating financial reports with charts and graphics", "Issuing stock dividends to improve reported earnings", "Restating prior-year financials to comply with new accounting standards"],
    answer: 0,
    explanation: "Window dressing involves manipulating short-term financial positions (e.g., paying down debt just before year-end) to make financial ratios look better at reporting dates."
  },
  {
    q: "Free cash flow to the firm (FCFF) is best described as:",
    options: ["Net income plus depreciation", "Cash available after operating expenses and capital expenditures, before debt payments", "Total revenues minus COGS", "Cash from operating activities minus dividends paid"],
    answer: 1,
    explanation: "FCFF = Operating Cash Flow − Capital Expenditures. It represents cash available to all capital providers (debt and equity) after maintaining and growing the asset base."
  },
  {
    q: "Which of the following represents a sound personal finance principle?",
    options: ["Maximize consumer debt to build credit history", "Invest before establishing an emergency fund to maximize returns", "Pay yourself first by automating savings before discretionary spending", "Prioritize current lifestyle spending over long-term saving"],
    answer: 2,
    explanation: "Paying yourself first — automatically directing a portion of income to savings before discretionary spending — is a foundational personal finance principle ensuring consistent saving."
  },
  {
    q: "A business cycle consists of which phases?",
    options: ["Bull, bear, correction, and recovery", "Expansion, peak, contraction (recession), and trough", "Growth, stability, decline, and restart", "Boom, stagflation, deflation, and recovery"],
    answer: 1,
    explanation: "The business cycle moves through: expansion (growth), peak (maximum output), contraction/recession (declining activity), and trough (minimum) before recovering."
  },
  {
    q: "The Laffer Curve illustrates the relationship between:",
    options: ["Inflation rates and unemployment rates", "Tax rates and government tax revenue, suggesting an optimal tax rate exists", "Interest rates and bond prices", "Trade deficits and exchange rates"],
    answer: 1,
    explanation: "The Laffer Curve shows that both 0% and 100% tax rates yield zero revenue, implying there is an optimal tax rate that maximizes government revenue."
  },
  {
    q: "A financial guarantee bond (surety bond) protects:",
    options: ["The bondholder against the issuer's default", "The obligee against the principal's failure to fulfill a contract or obligation", "A homeowner against title defects", "An investor against stock market losses"],
    answer: 1,
    explanation: "A surety bond is a three-party instrument where the surety (insurance company) guarantees the obligee (project owner) that the principal (contractor) will fulfill their obligations."
  },
  {
    q: "Debt service coverage ratio (DSCR) is important to lenders because it measures:",
    options: ["How quickly a borrower can liquidate assets to repay debt", "Whether a company generates enough cash flow to cover its debt payments", "The total amount of debt a company carries", "The credit rating of the company's outstanding bonds"],
    answer: 1,
    explanation: "DSCR = Net Operating Income / Total Debt Service. A ratio above 1.0 means the company generates sufficient cash to cover debt obligations. Lenders typically require DSCR > 1.25."
  },
  {
    q: "Which of the following is a characteristic of a money market instrument?",
    options: ["Maturity greater than 10 years", "High credit risk and high yield", "Short-term maturity (less than one year), high liquidity, and low risk", "Equity-like returns with bond-like features"],
    answer: 2,
    explanation: "Money market instruments (T-bills, commercial paper, CDs) mature in less than one year, are highly liquid, and carry very low default risk — making them near-cash equivalents."
  },
  {
    q: "Which accounting method values inventory at the most recent purchase cost and results in older costs remaining in ending inventory?",
    options: ["FIFO", "LIFO", "Weighted Average Cost", "Specific Identification"],
    answer: 1,
    explanation: "Under LIFO, the most recent costs flow to COGS, leaving older (often lower) costs in ending inventory. This can understate inventory on the balance sheet during inflation."
  },
  {
    q: "Accrued liabilities on the balance sheet represent:",
    options: ["Cash received but not yet earned", "Expenses incurred but not yet paid or recorded in accounts payable", "Long-term obligations to bondholders", "Deferred revenue from advance customer payments"],
    answer: 1,
    explanation: "Accrued liabilities are expenses that have been incurred but not yet paid — such as wages earned by employees but not yet disbursed at period end."
  },
  {
    q: "A company reports a higher net income under FIFO than LIFO during a period of rising prices. The reason is:",
    options: ["FIFO assigns higher costs to COGS", "FIFO assigns lower (older) costs to COGS, resulting in lower cost of goods sold and higher profit", "LIFO uses market values while FIFO uses historical costs", "FIFO defers tax payments to future periods"],
    answer: 1,
    explanation: "During inflation, FIFO assigns older, lower costs to COGS and newer, higher costs to ending inventory, resulting in lower COGS and higher reported net income versus LIFO."
  },
  {
    q: "The auditor's opinion on financial statements that states the statements 'present fairly in all material respects' is called:",
    options: ["Adverse opinion", "Disclaimer of opinion", "Qualified opinion", "Unqualified (clean) opinion"],
    answer: 3,
    explanation: "An unqualified (clean) opinion means the auditor found the financial statements to be free of material misstatements and prepared in conformity with GAAP."
  },
  {
    q: "Which of the following transactions increases total assets without affecting net income?",
    options: ["Recording depreciation expense", "Borrowing $50,000 from a bank", "Recording revenue earned in cash", "Paying dividends to shareholders"],
    answer: 1,
    explanation: "Borrowing $50,000 increases Cash (asset) and Notes Payable (liability) by $50,000 each — total assets increase but net income is unaffected because no revenue or expense is recorded."
  },
  {
    q: "Horizontal analysis of financial statements compares:",
    options: ["One company's ratios against industry benchmarks", "Financial data across multiple time periods to identify trends", "Each line item as a percentage of a base figure in the same year", "The market value of assets vs. their book value"],
    answer: 1,
    explanation: "Horizontal (trend) analysis examines changes in financial statement items over several periods, expressed as dollar changes or percentage changes from a base year."
  },
  {
    q: "Vertical (common-size) analysis expresses income statement items as a percentage of:",
    options: ["Total assets", "Net sales (total revenue)", "Prior-year figures", "Industry average benchmarks"],
    answer: 1,
    explanation: "In vertical analysis of the income statement, each line item is expressed as a percentage of net sales, allowing comparison across companies of different sizes."
  },
  {
    q: "A company increases its allowance for doubtful accounts. This adjustment:",
    options: ["Increases net income by reducing accounts receivable", "Reduces net income by recording bad debt expense", "Increases accounts receivable on the balance sheet", "Has no effect on the income statement"],
    answer: 1,
    explanation: "Increasing the allowance for doubtful accounts requires recording bad debt expense (which reduces income) and reduces the net realizable value of accounts receivable."
  },
  {
    q: "The concept of materiality in accounting means:",
    options: ["All transactions must be recorded regardless of size", "Only items significant enough to influence decision-making need full disclosure", "Physical assets are more important than intangible assets", "Historical cost is always the most relevant measurement"],
    answer: 1,
    explanation: "Materiality holds that only items large enough to influence the decisions of reasonable financial statement users require full accounting treatment and disclosure."
  },
  {
    q: "Under GAAP, revenue from a long-term construction contract can be recognized using the percentage-of-completion method when:",
    options: ["The project is 100% finished", "The contractor can reliably estimate total costs and progress toward completion", "Cash has been received from the customer", "The contract has been signed and all materials purchased"],
    answer: 1,
    explanation: "The percentage-of-completion method recognizes revenue proportionally as project work is completed, requiring reliable estimates of total costs and contract price."
  },
  {
    q: "Which statement is true regarding a classified balance sheet?",
    options: ["All assets and liabilities are listed in a single section", "Assets and liabilities are separated into current and long-term (non-current) categories", "It includes only tangible assets and financial liabilities", "It is only used by publicly traded companies"],
    answer: 1,
    explanation: "A classified balance sheet separates assets and liabilities into current (due/convertible within one year) and non-current (long-term) categories, aiding liquidity analysis."
  },
  {
    q: "An investor purchases a 10-year bond with a 6% coupon and a face value of $1,000 when market rates are 6%. The purchase price is:",
    options: ["Less than $1,000", "Equal to $1,000 (par value)", "Greater than $1,000", "Impossible to determine without more information"],
    answer: 1,
    explanation: "When a bond's coupon rate equals the market interest rate, the bond sells at par value ($1,000). The coupon payments exactly match the required return."
  },
  {
    q: "Commercial paper is a short-term debt instrument typically issued by:",
    options: ["Small businesses with poor credit ratings", "Large, creditworthy corporations to fund short-term obligations", "The federal government to manage seasonal cash needs", "Municipal governments for infrastructure projects"],
    answer: 1,
    explanation: "Commercial paper is unsecured short-term debt (up to 270 days) issued by highly rated corporations to fund working capital needs, typically at rates below bank loans."
  },
  {
    q: "The yield to maturity (YTM) of a bond represents:",
    options: ["The annual coupon rate stated on the bond", "The total return anticipated if the bond is held until maturity, accounting for current price, coupons, and face value", "The current yield based on last year's market price", "The rate of return if the bond is called before maturity"],
    answer: 1,
    explanation: "YTM is the total return (expressed as annual rate) an investor earns if the bond is purchased at current market price and held until maturity, with all coupons reinvested at the same rate."
  },
  {
    q: "A Treasury Inflation-Protected Security (TIPS) protects investors from inflation by:",
    options: ["Paying a higher fixed coupon rate than regular Treasuries", "Adjusting the principal value with changes in the Consumer Price Index", "Guaranteeing a minimum 3% real return above inflation", "Converting to equity when inflation exceeds 5%"],
    answer: 1,
    explanation: "TIPS adjust their principal with CPI inflation. As principal rises, interest payments (coupon rate × principal) also rise, protecting investors' purchasing power."
  },
  {
    q: "Duration of a bond measures:",
    options: ["The number of years until the bond matures", "The sensitivity of the bond's price to changes in interest rates, weighted by cash flow timing", "The annual coupon payment as a percentage of face value", "The credit risk of the bond issuer"],
    answer: 1,
    explanation: "Duration measures how much a bond's price will change for a 1% change in interest rates. Longer duration means higher price sensitivity. It also equals the weighted average time to receive cash flows."
  },
  {
    q: "Which of the following would be classified as a capital expenditure (CapEx)?",
    options: ["Monthly utility expenses for a factory", "Purchase of a delivery truck for the business", "Annual software subscription for accounting", "Employee wages paid during the year"],
    answer: 1,
    explanation: "CapEx involves spending on long-term assets (vehicles, equipment, buildings) that will be depreciated over time. Operating expenses like utilities and wages are expensed immediately."
  },
  {
    q: "A company's operating leverage is 3.0 and sales increase by 10%. Operating income will increase by approximately:",
    options: ["3%", "10%", "30%", "300%"],
    answer: 2,
    explanation: "Operating Leverage = % Change in EBIT / % Change in Sales. If leverage is 3.0 and sales grow 10%, EBIT grows approximately 3.0 × 10% = 30%."
  },
  {
    q: "Which of the following is an example of a variable cost for a manufacturing company?",
    options: ["Factory rent", "Executive salaries", "Depreciation on equipment", "Raw materials consumed in production"],
    answer: 3,
    explanation: "Variable costs change in direct proportion to production volume. Raw materials are a classic variable cost — more production requires proportionally more materials."
  },
  {
    q: "Contribution margin per unit equals:",
    options: ["Selling price minus fixed cost per unit", "Selling price minus variable cost per unit", "Net income divided by units sold", "Gross profit divided by units sold"],
    answer: 1,
    explanation: "Contribution Margin per Unit = Selling Price − Variable Cost per Unit. It represents how much each unit sold contributes to covering fixed costs and generating profit."
  },
  {
    q: "A 529 plan is specifically designed for saving for:",
    options: ["Retirement income", "Education expenses", "Home purchase down payment", "Emergency medical expenses"],
    answer: 1,
    explanation: "A 529 plan is a tax-advantaged savings account designed for education expenses. Contributions grow tax-free and qualified withdrawals (tuition, fees, books) are also tax-free."
  },
  {
    q: "The primary difference between a traditional 401(k) and a Roth 401(k) is:",
    options: ["Contribution limits are higher for Roth 401(k)", "Traditional 401(k) contributions are pre-tax; Roth 401(k) contributions are after-tax with tax-free qualified withdrawals", "Roth 401(k) has employer matching while traditional does not", "Traditional 401(k) is only for government employees"],
    answer: 1,
    explanation: "Traditional 401(k): contributions reduce taxable income now; withdrawals taxed later. Roth 401(k): contributions are after-tax; qualified withdrawals are tax-free in retirement."
  },
  {
    q: "Which statement best describes dollar cost averaging as an investment risk management strategy?",
    options: ["It guarantees a profit in all market conditions", "It reduces the average cost per share by buying more shares when prices are low and fewer when high", "It only works with dividend-paying stocks", "It requires lump-sum investing at market bottoms"],
    answer: 1,
    explanation: "Dollar-cost averaging invests a fixed dollar amount regularly, automatically purchasing more shares when prices are low and fewer when prices are high, reducing the impact of volatility."
  },
  {
    q: "The primary purpose of a financial audit is to:",
    options: ["Ensure the company complies with tax laws", "Provide independent assurance that financial statements are free of material misstatement", "Create the company's financial statements", "Advise management on improving profitability"],
    answer: 1,
    explanation: "An independent audit provides third-party assurance that financial statements present fairly, in accordance with GAAP, increasing their credibility for investors and creditors."
  },
  {
    q: "Under ASC 842 (the new lease accounting standard), operating leases must be recognized on the balance sheet as:",
    options: ["A footnote disclosure only", "A right-of-use asset and corresponding lease liability", "A contingent liability only", "An off-balance-sheet commitment"],
    answer: 1,
    explanation: "ASC 842 requires lessees to record most leases on the balance sheet as a right-of-use (ROU) asset and a corresponding lease liability, increasing balance sheet transparency."
  },
  {
    q: "The payback period method for evaluating investments is criticized primarily because it:",
    options: ["Is too mathematically complex for most managers", "Ignores cash flows occurring after the payback period and the time value of money", "Cannot compare projects of different sizes", "Always recommends the largest investment available"],
    answer: 1,
    explanation: "The payback method ignores all cash flows after the recovery of the initial investment and does not discount future cash flows, potentially rejecting value-creating long-term projects."
  },
  {
    q: "When evaluating two mutually exclusive projects, a financial manager should prefer the project with:",
    options: ["The shorter payback period", "The higher internal rate of return (IRR)", "The higher net present value (NPV)", "The lower initial capital investment"],
    answer: 2,
    explanation: "For mutually exclusive projects, NPV is the preferred decision rule because it directly measures value creation in dollar terms. IRR can rank projects incorrectly when scale or timing differs."
  },
  {
    q: "A company's payout ratio is 40%. If EPS is $5.00, the annual dividend per share is:",
    options: ["$0.40", "$1.25", "$2.00", "$3.00"],
    answer: 2,
    explanation: "Dividend per Share = EPS × Payout Ratio = $5.00 × 40% = $2.00."
  },
  {
    q: "Which of the following actions would increase a company's current ratio?",
    options: ["Taking out a short-term bank loan (under 1 year)", "Paying off current liabilities with cash", "Purchasing long-term equipment with cash", "Declaring a cash dividend to shareholders"],
    answer: 1,
    explanation: "Paying off current liabilities with cash reduces both current assets and current liabilities. If the current ratio was above 1.0 before, reducing both numerator and denominator by the same amount increases the ratio."
  },
  {
    q: "The concept of 'separation of duties' in internal controls means:",
    options: ["Senior management approves all financial transactions", "No single employee should have control over all phases of a transaction to prevent fraud", "The finance and accounting departments must operate independently", "External auditors perform different duties from internal auditors"],
    answer: 1,
    explanation: "Separation of duties is a key internal control that divides authorization, custody, and recording functions among different employees to prevent errors and fraud."
  },
  {
    q: "Economic profit differs from accounting profit in that economic profit:",
    options: ["Includes only revenue from the primary business activity", "Also subtracts the opportunity cost of equity capital (implicit costs)", "Adds back non-cash expenses like depreciation", "Is always higher than accounting profit"],
    answer: 1,
    explanation: "Economic profit = Accounting profit − Implicit (opportunity) costs. It subtracts the required return on equity, representing true surplus above all costs including the cost of capital."
  },
  {
    q: "Which statement about the Federal Reserve's dual mandate is correct?",
    options: ["The Fed is responsible for minimizing government deficits and managing foreign reserves", "The Fed aims to achieve maximum employment and stable prices (inflation around 2%)", "The Fed's sole mandate is controlling inflation", "The Fed manages fiscal policy alongside the Treasury Department"],
    answer: 1,
    explanation: "The Federal Reserve's dual mandate, established by Congress, requires pursuing maximum sustainable employment and maintaining price stability (approximately 2% inflation)."
  },
  {
    q: "A financial ratio showing that inventory turnover days increased from 30 to 60 days year over year most likely signals:",
    options: ["Improved inventory management efficiency", "Potential inventory build-up, obsolescence, or declining sales", "Increased production capacity", "Better supplier payment terms"],
    answer: 1,
    explanation: "Increasing days in inventory suggests inventory is selling more slowly — possibly due to declining demand, overstocking, or product obsolescence."
  },
  {
    q: "The difference between authorized shares and outstanding shares represents:",
    options: ["Shares legally issued to shareholders", "Shares authorized but either unissued or held as treasury stock", "Shares available for dividend payment only", "Shares committed to employee stock option plans"],
    answer: 1,
    explanation: "Authorized shares are the maximum a company can issue. Outstanding shares are those held by investors. The difference includes unissued shares and treasury stock (repurchased shares)."
  },
  {
    q: "An increase in accounts receivable on the cash flow statement (indirect method) is treated as:",
    options: ["A cash inflow because revenues increased", "A deduction from net income because cash has not yet been collected", "An addition to net income because assets increased", "A financing activity that reduces cash"],
    answer: 1,
    explanation: "An increase in AR means revenue was recognized but cash was not yet received. Under the indirect method, it is subtracted from net income to adjust to actual operating cash flow."
  },
  {
    q: "A DECA Finance cluster student is advising a client who is 25 years old about investment strategy. The most appropriate general advice is:",
    options: ["Invest entirely in cash equivalents to avoid all risk", "Hold a diversified portfolio weighted toward equities given the long time horizon", "Purchase only government bonds for guaranteed income", "Wait until age 45 to begin serious investing to avoid market risk"],
    answer: 1,
    explanation: "A 25-year-old investor has a 40+ year horizon before retirement. Young investors with long time horizons can tolerate more equity risk and benefit from decades of compound growth."
  },
  {
    q: "The primary goal of financial management in a corporation is to:",
    options: ["Maximize the company's total revenue", "Maximize total assets on the balance sheet", "Maximize shareholder wealth (share price)", "Minimize all forms of financial risk"],
    answer: 2,
    explanation: "The fundamental objective of corporate financial management is maximizing shareholder wealth, typically reflected in the stock price, by making optimal investment, financing, and dividend decisions."
  },
  {
    q: "A company's 'burn rate' refers to:",
    options: ["The rate at which it depreciates fixed assets", "The rate at which it spends cash reserves, especially relevant for startups", "The speed at which inventory becomes obsolete", "The interest accrual rate on outstanding debt"],
    answer: 1,
    explanation: "Burn rate is the rate at which a company (especially a startup) consumes cash reserves before reaching profitability. Monthly burn rate helps determine how long before additional funding is needed."
  },
  {
    q: "Which of the following would increase a company's return on assets (ROA)?",
    options: ["Increasing total assets while keeping net income constant", "Increasing net income while keeping total assets constant", "Taking on more debt to finance asset purchases", "Increasing accounts payable"],
    answer: 1,
    explanation: "ROA = Net Income / Total Assets. Increasing net income while holding assets constant directly increases ROA, indicating more efficient use of assets."
  },
  {
    q: "In a financial lease, the lessee:",
    options: ["Returns the asset to the lessor at the end of the lease with no purchase option", "Bears the risks and rewards of ownership; the lease is capitalized on the balance sheet", "Has no obligation to maintain the asset", "Pays only a nominal rental fee for use of the asset"],
    answer: 1,
    explanation: "A finance (capital) lease transfers substantially all risks and rewards of ownership to the lessee. It must be capitalized on the lessee's balance sheet as an asset and liability."
  },
  {
    q: "A company's quick ratio is 0.8 and current ratio is 1.5. This difference indicates the company has:",
    options: ["Very little cash on hand", "A significant amount of inventory relative to current assets", "High accounts receivable relative to current liabilities", "No short-term debt obligations"],
    answer: 1,
    explanation: "The difference between current ratio (1.5) and quick ratio (0.8) is large, indicating that inventory makes up a substantial portion of current assets — since inventory is excluded from the quick ratio."
  },
  {
    q: "A financial manager discovers that the company's weighted average cost of capital is 8%. A proposed project has an IRR of 7%. The manager should:",
    options: ["Accept the project because IRR is positive", "Reject the project because it does not earn the required return on capital", "Accept only if the payback period is under 3 years", "Accept if the project has strategic value regardless of financial returns"],
    answer: 1,
    explanation: "When IRR (7%) < WACC (8%), the project destroys value — it does not generate returns sufficient to cover the cost of capital. NPV would be negative; reject the project."
  },
  {
    q: "Which asset is most likely to be considered a 'liquid' asset?",
    options: ["Real estate property", "Heavy manufacturing equipment", "U.S. Treasury bills", "Long-term equity investment in a private company"],
    answer: 2,
    explanation: "Liquidity refers to how quickly an asset can be converted to cash without significant loss of value. U.S. T-bills are among the most liquid assets — they can be sold instantly at very stable prices."
  },
  {
    q: "The secondary mortgage market serves what primary function?",
    options: ["It provides mortgages directly to homebuyers", "It allows lenders to sell existing mortgages, freeing up capital to issue new loans", "It sets interest rates for new mortgage originations", "It insures mortgages against borrower default"],
    answer: 1,
    explanation: "The secondary mortgage market (via entities like Fannie Mae and Freddie Mac) purchases mortgages from originators, converting them into mortgage-backed securities and replenishing lender capital."
  },
  {
    q: "In times of high inflation, a fixed-rate mortgage borrower benefits because:",
    options: ["Their monthly payments decrease as inflation rises", "They repay the loan in cheaper (inflation-eroded) future dollars while their payment stays fixed", "The bank reduces their interest rate to compensate", "Property values always fall during inflation"],
    answer: 1,
    explanation: "Inflation erodes the real value of money. A fixed-rate borrower repays with dollars that have less purchasing power over time — effectively paying less in real terms as inflation rises."
  },
  {
    q: "Which of the following is a characteristic of preferred stock that differentiates it from common stock?",
    options: ["Preferred shareholders always vote in board elections", "Preferred dividends are typically fixed and must be paid before common dividends", "Preferred stock always appreciates faster than common stock", "Preferred shareholders are guaranteed a return of their investment"],
    answer: 1,
    explanation: "Preferred stock typically carries a fixed dividend rate and has dividend priority over common stock. In exchange, preferred shareholders usually have limited or no voting rights."
  },
  {
    q: "A company's total debt is $400,000 and total assets are $1,000,000. The debt ratio is:",
    options: ["0.25", "0.40", "0.60", "2.50"],
    answer: 1,
    explanation: "Debt Ratio = Total Debt / Total Assets = $400,000 / $1,000,000 = 0.40, or 40%. This means 40% of the company's assets are financed by debt."
  },
  {
    q: "The concept of 'sunk cost' in financial decision-making means that money already spent should be:",
    options: ["Added to future project costs to ensure full cost recovery", "Excluded from future decision-making because it cannot be recovered", "Included in the NPV calculation as a negative cash flow", "Used to justify continuing a failing project"],
    answer: 1,
    explanation: "Sunk costs are past expenditures that cannot be recovered. Rational financial decision-making ignores them — only future incremental costs and benefits should influence decisions."
  },
  {
    q: "Which of the following correctly describes the relationship between risk and return?",
    options: ["Higher risk always guarantees higher return", "Investors generally require higher potential returns to compensate for accepting greater risk", "Lower-risk investments always outperform high-risk ones over time", "Risk and return are independent of each other"],
    answer: 1,
    explanation: "The risk-return tradeoff is fundamental in finance: rational investors demand higher expected returns as compensation for accepting higher risk. Higher risk investments offer higher potential returns — not guaranteed."
  },
  {
    q: "An increase in the discount rate used in NPV analysis will:",
    options: ["Increase the NPV of future cash flows", "Decrease the NPV because future cash flows are worth less in present value terms", "Have no effect on NPV", "Increase the payback period"],
    answer: 1,
    explanation: "A higher discount rate reduces the present value of future cash flows, making the NPV smaller (or more negative) and making long-term projects less attractive."
  },
  {
    q: "Ratio analysis is most useful when:",
    options: ["Compared to a single period in isolation", "Benchmarked against industry peers and the company's own historical trends", "Applied only to publicly traded companies", "Used solely to determine tax obligations"],
    answer: 1,
    explanation: "Financial ratios are most meaningful when compared against industry averages, peer companies, and the firm's own historical performance to identify trends and relative strengths/weaknesses."
  },
  {
    q: "A company has a P/E ratio of 20 and earnings per share of $3. The market price per share is:",
    options: ["$15", "$23", "$60", "$6.67"],
    answer: 2,
    explanation: "P/E = Market Price / EPS. Market Price = P/E × EPS = 20 × $3.00 = $60."
  },
  {
    q: "The Glass-Steagall Act of 1933 (later partially repealed by Gramm-Leach-Bliley in 1999) originally required:",
    options: ["Commercial banks to hold minimum equity capital ratios", "The separation of commercial banking and investment banking activities", "All banks to be federally chartered and FDIC insured", "The Federal Reserve to publish monthly money supply data"],
    answer: 1,
    explanation: "Glass-Steagall erected a firewall between commercial banking (deposits and loans) and investment banking (securities underwriting) to prevent conflicts of interest that contributed to the 1929 crash."
  },
  {
    q: "An accounts receivable aging report helps management identify:",
    options: ["Which products generate the most revenue", "How long customers have owed money and which accounts may be uncollectible", "The optimal credit terms to offer new customers", "Total revenue recognized in the current period"],
    answer: 1,
    explanation: "An AR aging report categorizes outstanding receivables by how long they have been outstanding (e.g., 0–30 days, 31–60 days), helping identify overdue accounts and estimate bad debt reserves."
  },
  {
    q: "Depreciation tax shield is most valuable to a company when:",
    options: ["The company has no taxable income", "The company has high taxable income and a high marginal tax rate", "The company is operating at a loss", "The company has minimal fixed assets"],
    answer: 1,
    explanation: "Depreciation Tax Shield = Depreciation × Tax Rate. The shield is most valuable when the company has significant taxable income (so deductions reduce a higher tax bill) and a high tax rate."
  },
  {
    q: "Which of the following is NOT a component of the DuPont three-factor ROE decomposition?",
    options: ["Net profit margin", "Asset turnover", "Interest coverage ratio", "Financial leverage (equity multiplier)"],
    answer: 2,
    explanation: "DuPont: ROE = Net Profit Margin × Asset Turnover × Equity Multiplier. The interest coverage ratio is not part of this decomposition."
  },
  {
    q: "A company's contribution margin ratio is 35%. If fixed costs are $70,000, the break-even point in sales dollars is:",
    options: ["$24,500", "$105,000", "$200,000", "$245,000"],
    answer: 2,
    explanation: "Break-even Sales $ = Fixed Costs / Contribution Margin Ratio = $70,000 / 0.35 = $200,000."
  },
  {
    q: "Which type of financial risk arises from a company's inability to meet short-term debt obligations?",
    options: ["Market risk", "Credit risk", "Liquidity risk", "Operational risk"],
    answer: 2,
    explanation: "Liquidity risk is the risk that a company cannot meet its short-term financial obligations due to insufficient cash or inability to convert assets to cash quickly enough."
  },
  {
    q: "Enterprise Value (EV) is calculated as:",
    options: ["Market Capitalization only", "Market Cap + Total Debt − Cash and Cash Equivalents", "Market Cap − Total Debt + Cash", "Total Assets − Total Liabilities"],
    answer: 1,
    explanation: "EV = Market Cap + Total Debt − Cash. It represents the total value of the business available to all capital providers, adjusting market cap for the net debt position."
  },
  {
    q: "A market order in securities trading is an order to:",
    options: ["Buy or sell at a specific maximum or minimum price", "Buy or sell immediately at the best available current market price", "Hold a security for a minimum period before selling", "Trade at the closing price of the trading day"],
    answer: 1,
    explanation: "A market order executes immediately at the current best available price, guaranteeing execution but not a specific price — important in fast-moving markets."
  },
  {
    q: "Which statement best describes crowdfunding as a modern financing tool?",
    options: ["It is a type of bank loan for startups with no credit history", "It raises small amounts of money from a large number of people, typically via an online platform", "It is only available to nonprofit organizations", "It requires SEC approval and minimum investment of $25,000"],
    answer: 1,
    explanation: "Crowdfunding platforms (Kickstarter, Indiegogo, equity crowdfunding sites) allow businesses and individuals to raise capital from many small contributors via the internet."
  },
  {
    q: "Private equity investments are generally characterized by:",
    options: ["Daily liquidity and publicly quoted prices", "Long lock-up periods, illiquidity, and investments in non-publicly traded companies", "Government guarantees on principal invested", "Low target returns similar to investment-grade bonds"],
    answer: 1,
    explanation: "Private equity invests in non-publicly traded companies, with long investment horizons (5–10 years), illiquid positions, and targets for high returns (20%+) to compensate for risk and illiquidity."
  },
  {
    q: "A 'floor' in an interest rate cap agreement protects the buyer by:",
    options: ["Guaranteeing a maximum interest rate on a loan", "Ensuring a minimum interest rate is received on floating-rate investments", "Locking in a fixed exchange rate", "Providing insurance against bond defaults"],
    answer: 1,
    explanation: "An interest rate floor is a derivative contract where the seller pays the buyer the difference between the floor rate and a floating rate if the floating rate falls below the floor — protecting investors on floating-rate instruments."
  },
  {
    q: "In which scenario would a company most likely issue equity rather than take on additional debt?",
    options: ["Interest rates are very low, making debt cheap", "The company already has very high leverage and wants to reduce financial risk", "The company has substantial unused tax loss carry-forwards", "The company's stock price is at a multi-year low"],
    answer: 1,
    explanation: "A highly leveraged company may issue equity to reduce its debt burden, lower financial risk, and improve its debt ratios — even if diluting existing shareholders."
  },
  {
    q: "The term 'amortization' as applied to intangible assets is most similar to which concept applied to tangible assets?",
    options: ["Impairment", "Depletion", "Depreciation", "Revaluation"],
    answer: 2,
    explanation: "Amortization allocates the cost of intangible assets (patents, trademarks, software) over their useful lives, just as depreciation allocates tangible fixed asset costs over their useful lives."
  },
  {
    q: "A leverage ratio of a bank measures its:",
    options: ["Profitability relative to industry peers", "Capital adequacy by comparing equity capital to total assets or risk-weighted assets", "Ability to pay short-term obligations", "Return on equity compared to return on assets"],
    answer: 1,
    explanation: "Bank leverage ratios (Tier 1 capital / Risk-Weighted Assets) measure whether the bank holds sufficient equity capital to absorb losses — key to solvency and regulatory compliance."
  },
  {
    q: "A financial analyst projects that a company will pay a dividend of $2.50 next year, growing at 4% annually forever. If the required return is 9%, the intrinsic stock value is:",
    options: ["$27.78", "$50.00", "$62.50", "$25.00"],
    answer: 1,
    explanation: "Gordon Growth Model: P = D1 / (r − g) = $2.50 / (0.09 − 0.04) = $2.50 / 0.05 = $50.00."
  },
  {
    q: "Which term describes the process by which banks create money through lending?",
    options: ["Quantitative easing", "Fractional reserve banking", "Open market operations", "Monetary sterilization"],
    answer: 1,
    explanation: "Fractional reserve banking allows banks to lend out a multiple of their deposits (keeping only a fraction as reserves), effectively creating new money through the lending process."
  },
  {
    q: "A CPA (Certified Public Accountant) has the exclusive right to:",
    options: ["Prepare tax returns for any taxpayer", "Issue auditor's opinions on publicly traded companies' financial statements", "Manage investment portfolios for registered investment advisors", "Approve company budgets before submission to the board"],
    answer: 1,
    explanation: "Under SEC rules, only CPAs licensed as public auditors can issue independent audit opinions on financial statements of publicly registered companies."
  },
  {
    q: "The 'spread' on a corporate bond relative to a Treasury bond of the same maturity compensates investors for:",
    options: ["Duration risk only", "Currency risk on international bonds", "Credit risk (default risk) and liquidity risk of the corporate issuer", "Tax differences between corporate and government bonds"],
    answer: 2,
    explanation: "The corporate bond spread = Corporate YTM − Treasury YTM. It compensates for the additional credit risk (chance of default) and often lower liquidity of corporate bonds vs. risk-free Treasuries."
  },
  {
    q: "An investor has a portfolio worth $100,000. After one year, it is worth $112,000, and dividends received were $3,000. The total return is:",
    options: ["12%", "15%", "3%", "9%"],
    answer: 1,
    explanation: "Total Return = (Capital Gain + Income) / Beginning Value = ($12,000 + $3,000) / $100,000 = $15,000 / $100,000 = 15%."
  },
  {
    q: "Which of the following best illustrates the concept of adverse selection in insurance?",
    options: ["Insured people become careless because they are covered", "High-risk individuals are more likely to seek insurance than low-risk individuals, raising costs for insurers", "Insurers exclude high-risk people from coverage entirely", "Claims are filed fraudulently to collect undeserved benefits"],
    answer: 1,
    explanation: "Adverse selection occurs when those most likely to file claims (high-risk individuals) are most motivated to buy insurance, skewing the insured pool toward risk and raising costs."
  },
  {
    q: "A company's times interest earned (TIE) ratio is 4.0. If interest expense is $50,000, EBIT is:",
    options: ["$12,500", "$50,000", "$200,000", "$250,000"],
    answer: 2,
    explanation: "TIE = EBIT / Interest Expense. EBIT = TIE × Interest Expense = 4.0 × $50,000 = $200,000."
  },
  {
    q: "Intellectual property (patents, copyrights, trademarks) is classified on the balance sheet as:",
    options: ["Current assets because they generate near-term revenue", "Long-term intangible assets", "Property, plant, and equipment (tangible assets)", "Contingent liabilities until commercialized"],
    answer: 1,
    explanation: "Intellectual property rights are intangible assets — they lack physical substance but have economic value and are reported as long-term intangible assets on the balance sheet."
  },
  {
    q: "A company issues $1 million in bonds at 6% with interest paid semi-annually. The semi-annual interest payment is:",
    options: ["$6,000", "$30,000", "$60,000", "$120,000"],
    answer: 1,
    explanation: "Annual interest = $1,000,000 × 6% = $60,000. Semi-annual payment = $60,000 / 2 = $30,000."
  },
  {
    q: "Financial risk management tools that transfer risk to a willing counterparty include all of the following EXCEPT:",
    options: ["Insurance policies", "Futures contracts", "Options contracts", "Increasing fixed overhead costs"],
    answer: 3,
    explanation: "Insurance, futures, and options are all instruments that transfer financial risk to a counterparty. Increasing fixed overhead actually increases operational risk rather than transferring it."
  },
];

