import type { Flashcard } from "./types";
export const allFlashcards: Flashcard[] = [
  // ============================================================
  // MARKETING (120 terms)
  // ============================================================

  // 4 Ps – Product
  { term: "Product", definition: "Any good, service, or idea that satisfies a consumer need or want and can be offered in an exchange.", cluster: "Marketing" },
  { term: "Product Mix", definition: "The complete assortment of products a company offers for sale, encompassing all product lines and individual items.", cluster: "Marketing" },
  { term: "Product Line", definition: "A group of closely related products sold by one company that are considered a unit because of marketing, technical, or end-use considerations.", cluster: "Marketing" },
  { term: "Product Life Cycle", definition: "The series of stages a product goes through from introduction to decline: Introduction, Growth, Maturity, and Decline.", cluster: "Marketing" },
  { term: "New Product Development", definition: "The process of bringing a new product to market, from idea generation through commercialization.", cluster: "Marketing" },
  { term: "Brand Extension", definition: "Using an existing brand name to launch a new product in a different category.", cluster: "Marketing" },
  { term: "Product Differentiation", definition: "The process of distinguishing a product or service from others in the market to make it more attractive to a target segment.", cluster: "Marketing" },
  { term: "Packaging", definition: "The physical container or wrapper for a product that serves protective, communicative, and promotional functions.", cluster: "Marketing" },
  { term: "Labeling", definition: "The printed information on a product's package that identifies the product, provides usage instructions, and meets legal requirements.", cluster: "Marketing" },
  { term: "Warranty", definition: "A manufacturer's or seller's promise to repair or replace a defective product within a specified time period.", cluster: "Marketing" },

  // 4 Ps – Price
  { term: "Price", definition: "The amount of money charged for a product or service; the sum of all the values consumers exchange for the benefits of having the product.", cluster: "Marketing" },
  { term: "Penetration Pricing", definition: "Setting a low initial price to quickly attract a large number of buyers and gain market share.", cluster: "Marketing" },
  { term: "Price Skimming", definition: "Setting a high initial price for a new product to capture maximum revenue from early adopters before lowering it over time.", cluster: "Marketing" },
  { term: "Psychological Pricing", definition: "Pricing strategy that uses prices to create a perception of value, such as $9.99 instead of $10.00.", cluster: "Marketing" },
  { term: "Cost-Plus Pricing", definition: "A pricing method where a fixed percentage markup is added to the total cost of producing or acquiring a product.", cluster: "Marketing" },
  { term: "Competitive Pricing", definition: "Setting prices based on what competitors charge for the same or similar products.", cluster: "Marketing" },
  { term: "Price Elasticity", definition: "A measure of the sensitivity of quantity demanded to a change in price; how much demand changes when price changes.", cluster: "Marketing" },
  { term: "Discount Pricing", definition: "A reduction from the original price offered to stimulate sales or reward certain customer behaviors.", cluster: "Marketing" },
  { term: "Break-Even Analysis", definition: "A calculation of the sales volume at which total revenue equals total costs, resulting in neither profit nor loss.", cluster: "Marketing" },
  { term: "Value-Based Pricing", definition: "Setting price based primarily on the buyer's perception of value rather than on cost.", cluster: "Marketing" },

  // 4 Ps – Place / Distribution
  { term: "Distribution Channel", definition: "The path a product takes from producer to final consumer, including all intermediaries involved.", cluster: "Marketing" },
  { term: "Intensive Distribution", definition: "A strategy in which a product is placed in as many outlets as possible to maximize market coverage.", cluster: "Marketing" },
  { term: "Selective Distribution", definition: "Using a limited number of retail outlets in a given area to sell a product.", cluster: "Marketing" },
  { term: "Exclusive Distribution", definition: "Granting a single retailer or dealer the exclusive right to sell a product in a specific geographic area.", cluster: "Marketing" },
  { term: "Wholesaler", definition: "A business that buys goods in bulk from manufacturers and resells them to retailers or other businesses, not to final consumers.", cluster: "Marketing" },
  { term: "Retailer", definition: "A business that sells products directly to the final consumer for personal use.", cluster: "Marketing" },
  { term: "Supply Chain Management", definition: "The oversight of materials, information, and finances as they move from supplier to manufacturer to wholesaler to retailer to consumer.", cluster: "Marketing" },
  { term: "Logistics", definition: "The planning and execution of the physical flow of materials and finished goods from origin to point of use to meet customer needs.", cluster: "Marketing" },
  { term: "Direct Channel", definition: "A distribution path in which the producer sells directly to the final consumer with no intermediaries.", cluster: "Marketing" },
  { term: "Omnichannel Retailing", definition: "A retail strategy that provides a seamless consumer experience across online, mobile, and brick-and-mortar channels.", cluster: "Marketing" },

  // 4 Ps – Promotion
  { term: "Promotion Mix", definition: "The combination of advertising, personal selling, sales promotion, public relations, and direct marketing used to communicate with customers.", cluster: "Marketing" },
  { term: "Advertising", definition: "Any paid, non-personal presentation and promotion of ideas, goods, or services by an identified sponsor.", cluster: "Marketing" },
  { term: "Public Relations (PR)", definition: "Building and maintaining a positive image of an organization through unpaid, earned media coverage and community engagement.", cluster: "Marketing" },
  { term: "Sales Promotion", definition: "Short-term incentives used to encourage the purchase or sale of a product, such as coupons, contests, and rebates.", cluster: "Marketing" },
  { term: "Personal Selling", definition: "An interpersonal communication approach where a salesperson presents a product to a prospective buyer to make a sale.", cluster: "Marketing" },
  { term: "Direct Marketing", definition: "Communicating directly with targeted individual consumers to obtain an immediate response, as through direct mail or email.", cluster: "Marketing" },
  { term: "Integrated Marketing Communications (IMC)", definition: "Coordinating and integrating all marketing communication tools, venues, and sources to deliver a consistent message.", cluster: "Marketing" },

  // Market Segmentation
  { term: "Market Segmentation", definition: "The process of dividing a market into distinct groups of buyers who have different needs, characteristics, or behaviors.", cluster: "Marketing" },
  { term: "Target Market", definition: "A specific group of consumers at which a company aims its products and services.", cluster: "Marketing" },
  { term: "Demographic Segmentation", definition: "Dividing the market based on measurable characteristics such as age, gender, income, education, and family size.", cluster: "Marketing" },
  { term: "Psychographic Segmentation", definition: "Dividing the market based on lifestyle, values, personality, and attitudes.", cluster: "Marketing" },
  { term: "Geographic Segmentation", definition: "Dividing the market based on geographic units such as regions, countries, cities, or neighborhoods.", cluster: "Marketing" },
  { term: "Behavioral Segmentation", definition: "Dividing the market based on consumer knowledge of, attitude toward, use of, or response to a product.", cluster: "Marketing" },
  { term: "Undifferentiated (Mass) Marketing", definition: "A strategy that ignores market segment differences and targets the whole market with a single offer.", cluster: "Marketing" },
  { term: "Differentiated Marketing", definition: "A strategy in which separate marketing mixes are created for two or more market segments.", cluster: "Marketing" },
  { term: "Niche Marketing", definition: "Focusing on a small, specialized segment of the market with a tailored marketing mix.", cluster: "Marketing" },
  { term: "Positioning", definition: "Arranging for a product to occupy a clear, distinctive, and desirable place in the minds of target consumers relative to competing products.", cluster: "Marketing" },

  // Branding
  { term: "Brand", definition: "A name, term, sign, symbol, design, or combination used to identify a seller's products and differentiate them from competitors.", cluster: "Marketing" },
  { term: "Brand Equity", definition: "The added value a brand name gives to a product beyond the functional benefits of the product itself.", cluster: "Marketing" },
  { term: "Brand Loyalty", definition: "A consumer's consistent preference for and purchase of one brand over all competing brands.", cluster: "Marketing" },
  { term: "Brand Awareness", definition: "The extent to which consumers recognize or recall a brand within its product category.", cluster: "Marketing" },
  { term: "Brand Identity", definition: "The visible elements of a brand (name, logo, colors, tagline) that create its distinct look and feel.", cluster: "Marketing" },
  { term: "Co-Branding", definition: "Combining two established brand names on a single product or promotion for mutual benefit.", cluster: "Marketing" },
  { term: "Private Label Brand", definition: "A brand owned and sold by a retailer or distributor rather than by a manufacturer.", cluster: "Marketing" },
  { term: "Rebranding", definition: "Changing the corporate image or brand identity of an organization, typically to reposition it in the market.", cluster: "Marketing" },

  // Consumer Behavior
  { term: "Consumer Behavior", definition: "The study of how individuals, groups, and organizations select, buy, use, and dispose of goods and services to satisfy needs.", cluster: "Marketing" },
  { term: "Maslow's Hierarchy of Needs", definition: "A motivational theory proposing that needs are arranged in a pyramid from physiological to self-actualization, guiding consumer decisions.", cluster: "Marketing" },
  { term: "Buying Motive", definition: "The reason a consumer makes a purchase, which can be rational (logic-based) or emotional (feeling-based).", cluster: "Marketing" },
  { term: "Impulse Buying", definition: "An unplanned purchase decision made by a consumer just before the moment of purchase.", cluster: "Marketing" },
  { term: "Opinion Leader", definition: "A person who influences the attitudes and behaviors of others in a given product category.", cluster: "Marketing" },
  { term: "Reference Group", definition: "Any group that serves as a comparison point for individuals in forming their values, attitudes, and behaviors.", cluster: "Marketing" },
  { term: "Cognitive Dissonance", definition: "Buyer discomfort caused by post-purchase conflict between a consumer's beliefs and actions.", cluster: "Marketing" },
  { term: "Customer Journey", definition: "The complete series of experiences and interactions a customer has with a brand across all touchpoints from awareness to post-purchase.", cluster: "Marketing" },

  // Market Research
  { term: "Market Research", definition: "The systematic gathering, recording, and analyzing of data about issues relating to marketing products and services.", cluster: "Marketing" },
  { term: "Primary Research", definition: "Original data collected firsthand for a specific research purpose through surveys, observations, or experiments.", cluster: "Marketing" },
  { term: "Secondary Research", definition: "Data that already exists and has been collected for a different purpose, such as government statistics or trade publications.", cluster: "Marketing" },
  { term: "Focus Group", definition: "A small sample of typical consumers under the direction of a discussion leader to explore reactions to a product or concept.", cluster: "Marketing" },
  { term: "Survey", definition: "A research method that involves asking a set of standardized questions to a sample of individuals to gather data.", cluster: "Marketing" },
  { term: "SWOT Analysis", definition: "A strategic planning tool that evaluates Strengths, Weaknesses, Opportunities, and Threats of a business or product.", cluster: "Marketing" },

  // Digital Marketing
  { term: "Digital Marketing", definition: "Marketing efforts that use electronic devices or the internet, including social media, email, search engines, and websites.", cluster: "Marketing" },
  { term: "Search Engine Optimization (SEO)", definition: "The practice of optimizing a website to rank higher in search engine results pages to increase organic traffic.", cluster: "Marketing" },
  { term: "Pay-Per-Click (PPC)", definition: "An online advertising model where the advertiser pays a fee each time their ad is clicked.", cluster: "Marketing" },
  { term: "Content Marketing", definition: "Creating and distributing valuable, relevant content to attract and retain a target audience and drive profitable actions.", cluster: "Marketing" },
  { term: "Social Media Marketing", definition: "Using social media platforms to promote products, build brand awareness, and engage with customers.", cluster: "Marketing" },
  { term: "Influencer Marketing", definition: "A form of marketing that uses endorsements from individuals who have a large following and social influence.", cluster: "Marketing" },
  { term: "Email Marketing", definition: "Sending commercial messages directly to a group of people via email to build loyalty, acquire customers, or promote products.", cluster: "Marketing" },
  { term: "Conversion Rate", definition: "The percentage of website visitors who take a desired action, such as making a purchase or signing up for a newsletter.", cluster: "Marketing" },
  { term: "Click-Through Rate (CTR)", definition: "The ratio of users who click on a specific link to the number of total users who view an advertisement.", cluster: "Marketing" },
  { term: "Analytics (Web)", definition: "The collection and analysis of data about website users' behavior to inform and improve digital marketing decisions.", cluster: "Marketing" },
  { term: "A/B Testing", definition: "Comparing two versions of a webpage, ad, or email to determine which one performs better with the target audience.", cluster: "Marketing" },
  { term: "Retargeting", definition: "A digital advertising strategy that serves ads to users who have previously visited a website or interacted with a brand.", cluster: "Marketing" },

  // Professional Selling
  { term: "Prospecting", definition: "The first step in the personal selling process of identifying potential customers who have a need for and ability to buy a product.", cluster: "Marketing" },
  { term: "Qualifying a Lead", definition: "Determining whether a prospect has the need, authority, and financial ability to purchase a product.", cluster: "Marketing" },
  { term: "Sales Presentation", definition: "A structured demonstration or explanation of a product's features and benefits designed to persuade a prospect to buy.", cluster: "Marketing" },
  { term: "Handling Objections", definition: "Addressing a prospect's concerns or hesitations during the selling process to move the sale forward.", cluster: "Marketing" },
  { term: "Closing the Sale", definition: "The step in the selling process where the salesperson asks the prospect to commit to a purchase.", cluster: "Marketing" },
  { term: "Suggestive Selling (Upselling)", definition: "Recommending additional or higher-priced products or services to a customer to increase the sale amount.", cluster: "Marketing" },
  { term: "Customer Relationship Management (CRM)", definition: "A strategy and technology for managing all interactions with current and potential customers to improve relationships and retention.", cluster: "Marketing" },
  { term: "Sales Quota", definition: "A sales target set for a salesperson or team for a given time period.", cluster: "Marketing" },

  // Sports & Fashion Marketing
  { term: "Sports Marketing", definition: "The use of sports and sporting events to promote products, brands, and services to target audiences.", cluster: "Marketing" },
  { term: "Sponsorship", definition: "A business relationship where a company provides financial support to an event, team, or individual in exchange for marketing benefits.", cluster: "Marketing" },
  { term: "Licensing (Sports/Fashion)", definition: "A legal arrangement where one party permits another to use its intellectual property (logos, designs) in exchange for royalties.", cluster: "Marketing" },
  { term: "Endorsement", definition: "A form of advertising in which a celebrity or athlete vouches for a product based on personal use or approval.", cluster: "Marketing" },
  { term: "Fashion Marketing", definition: "The application of marketing principles to apparel and accessories, emphasizing trends, lifestyle branding, and visual merchandising.", cluster: "Marketing" },
  { term: "Visual Merchandising", definition: "The practice of displaying products in a retail environment to maximize aesthetics and sales.", cluster: "Marketing" },
  { term: "Fashion Forecasting", definition: "Predicting consumer trends in color, fabric, silhouette, and styling for upcoming seasons.", cluster: "Marketing" },
  { term: "Trend Analysis", definition: "Examining data over time to identify consistent patterns or tendencies that can inform future marketing decisions.", cluster: "Marketing" },

  // Additional Marketing Terms
  { term: "Marketing Concept", definition: "The philosophy that achieving organizational goals depends on knowing the needs and wants of target markets and delivering superior customer value.", cluster: "Marketing" },
  { term: "Marketing Mix", definition: "The set of tactical marketing tools (product, price, place, promotion) that a firm blends to produce the response it wants in the target market.", cluster: "Marketing" },
  { term: "Value Proposition", definition: "A clear statement of the tangible benefits a customer receives from using a company's product or service.", cluster: "Marketing" },
  { term: "Market Share", definition: "The portion of a market controlled by a particular company or product, expressed as a percentage.", cluster: "Marketing" },
  { term: "Competitive Advantage", definition: "A set of unique features of a product or company that are perceived by the target market as significant and superior to competition.", cluster: "Marketing" },
  { term: "Customer Lifetime Value (CLV)", definition: "The total revenue a business can expect from a single customer throughout the entire relationship.", cluster: "Marketing" },
  { term: "Net Promoter Score (NPS)", definition: "A customer loyalty metric measuring the likelihood of customers to recommend a company's products or services to others.", cluster: "Marketing" },
  { term: "Guerrilla Marketing", definition: "An unconventional, low-cost marketing strategy using surprise and creative tactics to promote a product in unexpected places.", cluster: "Marketing" },
  { term: "Cause Marketing", definition: "A cooperative marketing strategy in which a for-profit business and a nonprofit organization collaborate for mutual benefit.", cluster: "Marketing" },
  { term: "Viral Marketing", definition: "A marketing strategy that encourages individuals to share a marketing message rapidly through social networks.", cluster: "Marketing" },
  { term: "Relationship Marketing", definition: "A strategy focused on building long-term customer loyalty and engagement rather than short-term transactional goals.", cluster: "Marketing" },
  { term: "Market Penetration", definition: "A growth strategy that seeks to increase sales of existing products in existing markets through more aggressive marketing efforts.", cluster: "Marketing" },
  { term: "Product Development (Ansoff)", definition: "A growth strategy involving introducing new products to existing markets.", cluster: "Marketing" },
  { term: "Diversification (Ansoff)", definition: "A growth strategy of entering new markets with new products, carrying the highest risk.", cluster: "Marketing" },
  { term: "Point of Purchase (POP)", definition: "Marketing materials placed at the location where a purchasing decision is made, such as displays or signage near checkout.", cluster: "Marketing" },
  { term: "Rack Jobber", definition: "A limited-service wholesaler that services retail rack displays by stocking, pricing, and maintaining inventory.", cluster: "Marketing" },
  { term: "Category Management", definition: "A retail strategy of managing product categories as strategic business units to maximize sales and profitability.", cluster: "Marketing" },
  { term: "Planogram", definition: "A visual diagram or schematic that shows how products should be placed on retail shelves to maximize sales.", cluster: "Marketing" },
  { term: "Loss Leader Pricing", definition: "Selling a product at or below cost to attract customers who will then buy additional, higher-margin items.", cluster: "Marketing" },
  { term: "Cannibalization", definition: "When a new product takes sales away from an existing product within the same company's portfolio.", cluster: "Marketing" },

  // ============================================================
  // FINANCE (100 terms)
  // ============================================================

  // Financial Statements
  { term: "Balance Sheet", definition: "A financial statement that reports a company's assets, liabilities, and shareholders' equity at a specific point in time.", cluster: "Finance" },
  { term: "Income Statement", definition: "A financial statement that shows a company's revenues, expenses, and net income or loss over a specific period.", cluster: "Finance" },
  { term: "Cash Flow Statement", definition: "A financial statement that shows the inflows and outflows of cash during a given period, categorized as operating, investing, and financing activities.", cluster: "Finance" },
  { term: "Assets", definition: "Resources owned or controlled by a company that have economic value and are expected to provide future benefits.", cluster: "Finance" },
  { term: "Liabilities", definition: "Financial obligations or debts that a company owes to outside parties.", cluster: "Finance" },
  { term: "Equity (Shareholders')", definition: "The residual interest in the assets of a company after deducting all its liabilities; the owners' claim on assets.", cluster: "Finance" },
  { term: "Revenue", definition: "The total income generated by a business from selling goods or providing services before expenses are deducted.", cluster: "Finance" },
  { term: "Gross Profit", definition: "Revenue minus the cost of goods sold (COGS); the profit before operating expenses are subtracted.", cluster: "Finance" },
  { term: "Net Income", definition: "A company's total earnings after all expenses, interest, taxes, and other deductions have been subtracted from total revenue.", cluster: "Finance" },
  { term: "Cost of Goods Sold (COGS)", definition: "The direct costs attributable to the production of goods sold by a company, including materials and direct labor.", cluster: "Finance" },
  { term: "Operating Expenses", definition: "The costs required to run a business that are not directly tied to the production of goods, such as rent, salaries, and marketing.", cluster: "Finance" },
  { term: "Depreciation", definition: "The systematic allocation of the cost of a tangible asset over its useful life.", cluster: "Finance" },
  { term: "Retained Earnings", definition: "The cumulative net income a company has kept rather than paid out as dividends to shareholders.", cluster: "Finance" },
  { term: "Accounts Receivable", definition: "Money owed to a company by its customers for goods or services already delivered.", cluster: "Finance" },
  { term: "Accounts Payable", definition: "Money a company owes to its suppliers and vendors for goods or services received but not yet paid for.", cluster: "Finance" },

  // Financial Ratios
  { term: "Current Ratio", definition: "Current Assets divided by Current Liabilities; measures a company's ability to pay short-term obligations. A ratio above 1 is generally favorable.", cluster: "Finance" },
  { term: "Quick Ratio (Acid-Test)", definition: "(Current Assets – Inventory) / Current Liabilities; a stricter measure of short-term liquidity excluding less liquid assets.", cluster: "Finance" },
  { term: "Debt-to-Equity Ratio", definition: "Total Liabilities divided by Shareholders' Equity; measures the degree of financial leverage and how much creditors are financing versus owners.", cluster: "Finance" },
  { term: "Return on Equity (ROE)", definition: "Net Income divided by Shareholders' Equity; measures how effectively management is using equity financing to generate profit.", cluster: "Finance" },
  { term: "Return on Assets (ROA)", definition: "Net Income divided by Total Assets; indicates how efficiently a company uses its assets to generate profit.", cluster: "Finance" },
  { term: "Profit Margin (Net)", definition: "Net Income divided by Revenue; shows what percentage of each dollar of revenue is kept as profit.", cluster: "Finance" },
  { term: "Gross Margin", definition: "Gross Profit divided by Revenue; the percentage of revenue remaining after direct production costs.", cluster: "Finance" },
  { term: "Earnings Per Share (EPS)", definition: "Net Income divided by the number of outstanding shares; indicates the portion of profit allocated to each share of stock.", cluster: "Finance" },
  { term: "Price-to-Earnings (P/E) Ratio", definition: "Market Price per Share divided by Earnings Per Share; used to value a company and compare it to peers.", cluster: "Finance" },
  { term: "Inventory Turnover", definition: "COGS divided by Average Inventory; measures how many times a company sells and replaces its inventory in a period.", cluster: "Finance" },

  // Banking
  { term: "Commercial Bank", definition: "A financial institution that accepts deposits, offers checking and savings accounts, and makes loans to individuals and businesses.", cluster: "Finance" },
  { term: "Federal Reserve System", definition: "The central banking system of the United States that manages monetary policy, supervises banks, and maintains financial stability.", cluster: "Finance" },
  { term: "Interest Rate", definition: "The percentage of a principal amount charged by a lender to a borrower for the use of money over a specified time.", cluster: "Finance" },
  { term: "Annual Percentage Rate (APR)", definition: "The annual rate charged for borrowing or earned through an investment, including fees, expressed as a percentage.", cluster: "Finance" },
  { term: "Compound Interest", definition: "Interest calculated on both the principal and the accumulated interest from previous periods, causing exponential growth.", cluster: "Finance" },
  { term: "Simple Interest", definition: "Interest calculated only on the original principal amount, not on any accumulated interest.", cluster: "Finance" },
  { term: "Certificate of Deposit (CD)", definition: "A savings instrument offered by banks that holds a fixed sum for a fixed period, offering a higher interest rate than savings accounts.", cluster: "Finance" },
  { term: "Money Market Account", definition: "A deposit account that typically offers higher interest rates than regular savings accounts and may include limited check-writing privileges.", cluster: "Finance" },
  { term: "Federal Deposit Insurance Corporation (FDIC)", definition: "A U.S. government agency that insures bank deposits up to $250,000 per depositor per insured bank, protecting depositors from bank failures.", cluster: "Finance" },
  { term: "Reserve Requirement", definition: "The minimum fraction of deposits that banks must hold in reserve, as set by the Federal Reserve, rather than lend out.", cluster: "Finance" },

  // Investing
  { term: "Stock", definition: "A financial instrument representing ownership (equity) in a corporation and a claim on part of its assets and earnings.", cluster: "Finance" },
  { term: "Bond", definition: "A fixed-income debt instrument issued by corporations or governments to raise capital, promising to pay interest and return principal at maturity.", cluster: "Finance" },
  { term: "Mutual Fund", definition: "An investment vehicle that pools money from many investors to purchase a diversified portfolio of securities.", cluster: "Finance" },
  { term: "Exchange-Traded Fund (ETF)", definition: "A type of investment fund traded on a stock exchange, similar to stocks, that holds assets like stocks or bonds.", cluster: "Finance" },
  { term: "Diversification", definition: "Spreading investments across different asset classes, industries, or geographic regions to reduce overall portfolio risk.", cluster: "Finance" },
  { term: "Portfolio", definition: "A collection of financial investments such as stocks, bonds, and cash equivalents held by an individual or institution.", cluster: "Finance" },
  { term: "Bull Market", definition: "A financial market condition characterized by rising prices, investor confidence, and expectations of continued growth.", cluster: "Finance" },
  { term: "Bear Market", definition: "A financial market condition in which prices are falling or expected to fall, typically by 20% or more from recent highs.", cluster: "Finance" },
  { term: "Liquidity", definition: "The ease and speed with which an asset can be converted into cash without significantly affecting its price.", cluster: "Finance" },
  { term: "Dividend", definition: "A distribution of a portion of a company's earnings to shareholders, typically paid in cash or additional shares.", cluster: "Finance" },
  { term: "Capital Gain", definition: "The profit realized from the sale of an asset when the selling price exceeds the purchase price.", cluster: "Finance" },
  { term: "Index Fund", definition: "A type of mutual fund or ETF designed to replicate the performance of a specific market index, such as the S&P 500.", cluster: "Finance" },
  { term: "Asset Allocation", definition: "The strategy of dividing investments among different asset categories (stocks, bonds, cash) based on goals, risk tolerance, and time horizon.", cluster: "Finance" },

  // Insurance
  { term: "Insurance", definition: "A contract in which an insurer provides financial protection or reimbursement against specified losses in exchange for premium payments.", cluster: "Finance" },
  { term: "Premium", definition: "The periodic payment made by a policyholder to an insurance company to maintain coverage.", cluster: "Finance" },
  { term: "Deductible", definition: "The amount a policyholder must pay out-of-pocket before the insurance company begins to pay claims.", cluster: "Finance" },
  { term: "Liability Insurance", definition: "Insurance that protects an individual or business against claims resulting from injuries or damage to other people or property.", cluster: "Finance" },
  { term: "Underwriting", definition: "The process by which an insurer evaluates the risk of insuring a person or entity and determines the terms and pricing of coverage.", cluster: "Finance" },
  { term: "Actuary", definition: "A professional who uses mathematics, statistics, and financial theory to assess the risk of future events and help design insurance policies.", cluster: "Finance" },
  { term: "Copayment (Copay)", definition: "A fixed amount an insured person pays for a covered health care service after paying the deductible.", cluster: "Finance" },
  { term: "Coinsurance", definition: "A sharing of costs between the insurer and the insured, typically a percentage split after the deductible is met.", cluster: "Finance" },

  // Accounting
  { term: "Generally Accepted Accounting Principles (GAAP)", definition: "A common set of accounting rules, standards, and procedures issued by the Financial Accounting Standards Board (FASB) for U.S. financial reporting.", cluster: "Finance" },
  { term: "Double-Entry Bookkeeping", definition: "An accounting system where every transaction is recorded as both a debit in one account and a credit in another, keeping the equation balanced.", cluster: "Finance" },
  { term: "Accrual Accounting", definition: "An accounting method that records revenues when earned and expenses when incurred, regardless of when cash is exchanged.", cluster: "Finance" },
  { term: "Cash-Basis Accounting", definition: "An accounting method that recognizes revenues and expenses only when cash is actually received or paid.", cluster: "Finance" },
  { term: "Trial Balance", definition: "A bookkeeping worksheet listing all ledger account balances to verify that total debits equal total credits.", cluster: "Finance" },
  { term: "Audit", definition: "An independent examination of a company's financial records to verify their accuracy and compliance with accounting standards.", cluster: "Finance" },
  { term: "Amortization", definition: "The systematic reduction of an intangible asset's book value or the gradual repayment of a loan through scheduled payments.", cluster: "Finance" },
  { term: "Working Capital", definition: "Current Assets minus Current Liabilities; the capital available for day-to-day operations of a business.", cluster: "Finance" },

  // Taxes
  { term: "Income Tax", definition: "A tax levied by governments on the income earned by individuals and businesses within their jurisdiction.", cluster: "Finance" },
  { term: "Marginal Tax Rate", definition: "The tax rate applied to the last dollar of income, or the rate paid on the highest portion of income within a progressive tax system.", cluster: "Finance" },
  { term: "Progressive Tax", definition: "A tax system in which the tax rate increases as the taxable amount increases, placing a higher burden on higher earners.", cluster: "Finance" },
  { term: "Tax Deduction", definition: "An expense that can be subtracted from gross income to reduce taxable income, thereby lowering the amount of tax owed.", cluster: "Finance" },
  { term: "Tax Credit", definition: "A direct reduction in the amount of tax owed, more valuable than a deduction of the same amount.", cluster: "Finance" },
  { term: "W-2 Form", definition: "A tax form provided by employers that reports an employee's annual wages and the amount of taxes withheld from their paycheck.", cluster: "Finance" },
  { term: "1099 Form", definition: "A tax form reporting income received from sources other than employment, such as freelance work or investment income.", cluster: "Finance" },

  // Risk Management
  { term: "Risk Management", definition: "The process of identifying, assessing, and prioritizing risks, then applying resources to minimize, control, or eliminate the impact of unfavorable events.", cluster: "Finance" },
  { term: "Systematic Risk", definition: "Market-wide risk that affects all investments and cannot be eliminated through diversification, such as recessions or interest rate changes.", cluster: "Finance" },
  { term: "Unsystematic Risk", definition: "Company- or industry-specific risk that can be reduced through diversification in a portfolio.", cluster: "Finance" },
  { term: "Hedge", definition: "An investment made to reduce the risk of adverse price movements in an asset.", cluster: "Finance" },
  { term: "Derivative", definition: "A financial contract whose value is derived from the performance of an underlying asset, index, or interest rate.", cluster: "Finance" },
  { term: "Futures Contract", definition: "A legal agreement to buy or sell a particular commodity or asset at a predetermined price at a specified time in the future.", cluster: "Finance" },
  { term: "Default Risk", definition: "The risk that a borrower will be unable to make the required payments on their debt obligations.", cluster: "Finance" },
  { term: "Credit Rating", definition: "An assessment of a borrower's creditworthiness assigned by a rating agency, indicating the likelihood of default.", cluster: "Finance" },

  // Additional Finance Terms
  { term: "Time Value of Money", definition: "The concept that a dollar today is worth more than a dollar in the future because of its potential earning capacity.", cluster: "Finance" },
  { term: "Net Present Value (NPV)", definition: "The difference between the present value of cash inflows and outflows over a period, used to evaluate investment profitability.", cluster: "Finance" },
  { term: "Internal Rate of Return (IRR)", definition: "The discount rate that makes the net present value of all cash flows from a project equal to zero.", cluster: "Finance" },
  { term: "Opportunity Cost", definition: "The value of the next-best alternative forgone when a decision is made to use resources in a particular way.", cluster: "Finance" },
  { term: "Solvency", definition: "The ability of a company to meet its long-term financial obligations and continue operating indefinitely.", cluster: "Finance" },
  { term: "Initial Public Offering (IPO)", definition: "The first time a private company offers shares of stock to the public on a stock exchange.", cluster: "Finance" },
  { term: "Leverage", definition: "The use of borrowed capital to increase the potential return on investment, which also amplifies potential losses.", cluster: "Finance" },
  { term: "Capital Budgeting", definition: "The process a business uses to evaluate and select long-term investment projects such as equipment purchases or new facilities.", cluster: "Finance" },
  { term: "Fiscal Year", definition: "A 12-month period used for financial reporting and budgeting purposes that does not necessarily coincide with the calendar year.", cluster: "Finance" },
  { term: "Accounts Payable Turnover", definition: "A short-term liquidity measure of how fast a company pays off its suppliers; calculated as COGS divided by average accounts payable.", cluster: "Finance" },

  // ============================================================
  // HOSPITALITY (80 terms)
  // ============================================================

  // FOH / BOH
  { term: "Front of House (FOH)", definition: "All areas and operations of a hospitality establishment visible to and directly interacting with guests, such as the dining room, lobby, and reception.", cluster: "Hospitality" },
  { term: "Back of House (BOH)", definition: "Areas of a hospitality establishment not visible to guests, including the kitchen, storage, laundry, and administrative offices.", cluster: "Hospitality" },
  { term: "Maître d'", definition: "The head waiter or supervisor of the dining room responsible for seating guests, managing reservations, and overseeing service staff.", cluster: "Hospitality" },
  { term: "Expeditor", definition: "A kitchen staff member who coordinates communication between the kitchen and serving staff to ensure timely, accurate order delivery.", cluster: "Hospitality" },
  { term: "Line Cook", definition: "A culinary professional who works a specific station in the kitchen, responsible for preparing assigned menu items during service.", cluster: "Hospitality" },
  { term: "Sous Chef", definition: "The second-in-command in a professional kitchen, assisting the executive chef in managing kitchen operations and staff.", cluster: "Hospitality" },
  { term: "Executive Chef", definition: "The head of the kitchen responsible for menu creation, food quality, staff management, and overall culinary operations.", cluster: "Hospitality" },
  { term: "Service Standards", definition: "Established guidelines and procedures that define the expected level and quality of service to be provided to guests.", cluster: "Hospitality" },
  { term: "Table Turnover Rate", definition: "The number of times a dining table is occupied and vacated by different parties during a single service period.", cluster: "Hospitality" },
  { term: "POS System (Point of Sale)", definition: "Technology used in hospitality to process orders, manage payments, track inventory, and generate sales reports.", cluster: "Hospitality" },

  // Food Safety
  { term: "HACCP (Hazard Analysis Critical Control Points)", definition: "A systematic preventive food safety approach that identifies physical, chemical, and biological hazards at critical points in the food production process.", cluster: "Hospitality" },
  { term: "Cross-Contamination", definition: "The transfer of harmful bacteria or allergens from one food item or surface to another, leading to potential foodborne illness.", cluster: "Hospitality" },
  { term: "Temperature Danger Zone", definition: "The temperature range between 41°F and 135°F (5°C–57°C) in which bacteria multiply most rapidly in food.", cluster: "Hospitality" },
  { term: "FIFO (First In, First Out)", definition: "An inventory management method where older stock is used before newer stock to minimize spoilage and food waste.", cluster: "Hospitality" },
  { term: "ServSafe", definition: "A nationally recognized food safety certification program developed by the National Restaurant Association that trains foodservice workers.", cluster: "Hospitality" },
  { term: "Food Allergen", definition: "A substance in food that triggers an allergic reaction in sensitive individuals; the major eight include peanuts, tree nuts, milk, eggs, fish, shellfish, wheat, and soy.", cluster: "Hospitality" },
  { term: "Sanitization", definition: "Reducing the number of microorganisms on a surface to a safe level using heat or chemical sanitizers after cleaning.", cluster: "Hospitality" },
  { term: "Personal Hygiene (Foodservice)", definition: "Practices foodservice workers follow to maintain cleanliness, including handwashing, wearing gloves, and proper uniform standards.", cluster: "Hospitality" },
  { term: "Foodborne Illness", definition: "A disease caused by consuming contaminated food or beverages, resulting from bacteria, viruses, parasites, or chemical substances.", cluster: "Hospitality" },
  { term: "Pest Control", definition: "Practices and systems used in food establishments to prevent, detect, and eliminate pests that could contaminate food or damage property.", cluster: "Hospitality" },

  // Lodging
  { term: "Average Daily Rate (ADR)", definition: "The average rental income per paid occupied room in a given time period; calculated as Room Revenue divided by Rooms Sold.", cluster: "Hospitality" },
  { term: "Occupancy Rate", definition: "The percentage of available rooms that are occupied during a specific time period; a key metric in hotel performance.", cluster: "Hospitality" },
  { term: "RevPAR (Revenue Per Available Room)", definition: "A performance metric calculated by multiplying ADR by occupancy rate, or by dividing total room revenue by total available rooms.", cluster: "Hospitality" },
  { term: "Front Desk Operations", definition: "Hotel processes including check-in, check-out, guest requests, key issuance, billing, and coordination with other departments.", cluster: "Hospitality" },
  { term: "Housekeeping Department", definition: "The hotel department responsible for cleaning and maintaining guest rooms, public areas, and linens to brand standards.", cluster: "Hospitality" },
  { term: "Concierge", definition: "A hotel staff member who assists guests with reservations, tours, transportation, and personalized recommendations.", cluster: "Hospitality" },
  { term: "Yield Management (Revenue Management)", definition: "A variable pricing strategy that adjusts room rates based on anticipated demand to maximize revenue.", cluster: "Hospitality" },
  { term: "Overbooking", definition: "The practice of accepting more reservations than available rooms to compensate for expected no-shows and cancellations.", cluster: "Hospitality" },
  { term: "Property Management System (PMS)", definition: "Software used by hotels to manage reservations, front desk operations, housekeeping, billing, and reporting.", cluster: "Hospitality" },
  { term: "Star Rating System", definition: "A classification system for hotels ranging from one to five stars indicating the quality of facilities and services offered.", cluster: "Hospitality" },
  { term: "Room Type Categories", definition: "Classification of hotel rooms by size, features, and bed configuration, such as standard, deluxe, suite, and penthouse.", cluster: "Hospitality" },

  // Tourism
  { term: "Ecotourism", definition: "Responsible travel to natural areas that conserves the environment, sustains the well-being of local people, and involves interpretation and education.", cluster: "Hospitality" },
  { term: "Heritage Tourism", definition: "Travel to experience historic sites, cultural traditions, and natural landscapes that represent the story of a region.", cluster: "Hospitality" },
  { term: "Destination Management Organization (DMO)", definition: "An organization that promotes a travel destination and coordinates its marketing, visitor services, and tourism development.", cluster: "Hospitality" },
  { term: "Tour Operator", definition: "A company that creates and sells travel packages combining transportation, accommodations, and activities.", cluster: "Hospitality" },
  { term: "Travel Agent", definition: "A professional who acts as an intermediary between travelers and travel service providers to plan and book trips.", cluster: "Hospitality" },
  { term: "Carrying Capacity (Tourism)", definition: "The maximum number of tourists an area can accommodate without unacceptable environmental or cultural degradation.", cluster: "Hospitality" },
  { term: "Seasonality (Tourism)", definition: "Fluctuations in tourist arrivals during different times of the year, creating peak and off-peak periods.", cluster: "Hospitality" },

  // Customer Service
  { term: "Guest Satisfaction", definition: "The degree to which a guest's experience meets or exceeds their expectations, measured through feedback and loyalty.", cluster: "Hospitality" },
  { term: "Service Recovery", definition: "The process of resolving a service failure or complaint and restoring a dissatisfied guest to a state of satisfaction.", cluster: "Hospitality" },
  { term: "Empathy (Service)", definition: "The ability of a service employee to understand and share the feelings of a guest, demonstrating genuine care.", cluster: "Hospitality" },
  { term: "Upselling (Hospitality)", definition: "Encouraging guests to purchase a higher-priced room, package, or amenity to increase revenue while enhancing their experience.", cluster: "Hospitality" },
  { term: "Loyalty Program", definition: "A rewards program offered by hospitality businesses to incentivize repeat business through points, discounts, and exclusive benefits.", cluster: "Hospitality" },
  { term: "Moment of Truth", definition: "Any instance where a customer comes into contact with any aspect of a company that forms an impression of the business.", cluster: "Hospitality" },
  { term: "Net Promoter Score (NPS) – Hospitality", definition: "A measurement of guest loyalty asking how likely they are to recommend the property, used to gauge overall satisfaction.", cluster: "Hospitality" },
  { term: "Complaint Resolution (LAST)", definition: "A service recovery model: Listen, Apologize, Solve the problem, and Thank the guest.", cluster: "Hospitality" },

  // Event Planning
  { term: "Event Planning", definition: "The process of designing, organizing, and executing events including logistics, vendors, budget, and on-site management.", cluster: "Hospitality" },
  { term: "Request for Proposal (RFP)", definition: "A document sent to potential vendors or venues detailing event requirements and requesting bid submissions.", cluster: "Hospitality" },
  { term: "Banquet Event Order (BEO)", definition: "A contract-like document detailing all specifics of a catering or event booking including menu, timeline, room setup, and billing.", cluster: "Hospitality" },
  { term: "Attrition Clause", definition: "A contract provision requiring an event planner to pay for a minimum number of hotel rooms or meals even if attendance falls short.", cluster: "Hospitality" },
  { term: "Run of Show", definition: "A detailed timeline of all activities and cues during an event, used to coordinate all staff and vendors.", cluster: "Hospitality" },
  { term: "AV (Audiovisual) Production", definition: "Equipment and services providing sound, lighting, projection, and video for events and meetings.", cluster: "Hospitality" },
  { term: "Catering", definition: "The provision of food and beverage services at a remote site, event, or venue.", cluster: "Hospitality" },
  { term: "MICE (Meetings, Incentives, Conferences, Exhibitions)", definition: "A sector of the hospitality industry specializing in planning, booking, and facilitating large professional events.", cluster: "Hospitality" },

  // Revenue Management
  { term: "Dynamic Pricing", definition: "A flexible pricing strategy where prices are adjusted in real time based on current market demand, competition, and other factors.", cluster: "Hospitality" },
  { term: "Distribution Channel (Hospitality)", definition: "The methods through which hotels sell rooms, including direct booking, OTAs, GDS, and travel agents.", cluster: "Hospitality" },
  { term: "Online Travel Agency (OTA)", definition: "A third-party website (e.g., Expedia, Booking.com) through which consumers can book hotel rooms, flights, and packages.", cluster: "Hospitality" },
  { term: "Global Distribution System (GDS)", definition: "A network system used by travel agents and OTAs to access real-time inventory for airlines, hotels, and car rentals.", cluster: "Hospitality" },
  { term: "Forecasting (Hospitality)", definition: "Predicting future demand, occupancy, and revenue to guide staffing, pricing, and resource allocation decisions.", cluster: "Hospitality" },
  { term: "Walk-in Guest", definition: "A hotel guest who arrives without a prior reservation.", cluster: "Hospitality" },
  { term: "Rate Parity", definition: "The practice of maintaining consistent room rates across all distribution channels to avoid undercutting direct booking.", cluster: "Hospitality" },

  // Additional Hospitality Terms
  { term: "Gratuity (Tip)", definition: "A voluntary sum of money paid by a guest to a service employee above and beyond the bill as recognition of good service.", cluster: "Hospitality" },
  { term: "F&B (Food and Beverage) Cost Percentage", definition: "The ratio of food and beverage costs to food and beverage sales, used to measure operational efficiency.", cluster: "Hospitality" },
  { term: "Prime Cost", definition: "The sum of the cost of goods sold and total labor costs; the largest controllable expense in a restaurant.", cluster: "Hospitality" },
  { term: "Menu Engineering", definition: "The strategic design and analysis of a menu to maximize profitability by promoting high-margin items.", cluster: "Hospitality" },
  { term: "Cover Count", definition: "The number of guests served during a specific meal period; used to measure a restaurant's productivity.", cluster: "Hospitality" },
  { term: "Franchise (Hospitality)", definition: "A business arrangement where an individual or company licenses the rights to operate under an established hospitality brand's name and system.", cluster: "Hospitality" },
  { term: "Brand Standards", definition: "The guidelines that define the consistent quality, service, and presentation requirements for all properties within a hospitality brand.", cluster: "Hospitality" },
  { term: "Green Lodging", definition: "Environmentally sustainable practices adopted by hotels including energy conservation, water reduction, and waste minimization.", cluster: "Hospitality" },

  // ============================================================
  // BUSINESS MANAGEMENT (80 terms)
  // ============================================================

  // Management Theories
  { term: "Scientific Management (Taylorism)", definition: "Frederick Taylor's theory that improving economic efficiency through scientific study of workflows and worker specialization increases productivity.", cluster: "Business Management" },
  { term: "Administrative Management Theory", definition: "Henri Fayol's approach identifying five management functions (planning, organizing, commanding, coordinating, controlling) and 14 principles of management.", cluster: "Business Management" },
  { term: "Theory X and Theory Y", definition: "Douglas McGregor's model contrasting managers who assume workers dislike work (X) with those who believe workers are self-motivated and seek responsibility (Y).", cluster: "Business Management" },
  { term: "Maslow's Hierarchy (Management)", definition: "Applied in management to understand employee motivation by addressing physiological, safety, social, esteem, and self-actualization needs.", cluster: "Business Management" },
  { term: "Herzberg's Two-Factor Theory", definition: "A motivation theory distinguishing between hygiene factors (prevent dissatisfaction) and motivators (create satisfaction) in the workplace.", cluster: "Business Management" },
  { term: "Systems Theory", definition: "A management approach viewing an organization as a system of interrelated and interdependent parts that together form a whole.", cluster: "Business Management" },
  { term: "Contingency Theory", definition: "A management perspective asserting that there is no single best way to manage; the optimal approach depends on the situation.", cluster: "Business Management" },
  { term: "Total Quality Management (TQM)", definition: "A management approach aimed at long-term success through customer satisfaction, with all members of an organization participating in process improvement.", cluster: "Business Management" },

  // Leadership
  { term: "Leadership", definition: "The ability to influence and direct individuals or groups toward the achievement of organizational goals.", cluster: "Business Management" },
  { term: "Autocratic Leadership", definition: "A leadership style where one person makes all decisions with little to no input from team members.", cluster: "Business Management" },
  { term: "Democratic Leadership", definition: "A leadership style that encourages participation and input from team members before the leader makes the final decision.", cluster: "Business Management" },
  { term: "Laissez-Faire Leadership", definition: "A hands-off leadership style in which the leader provides minimal direction and allows team members to make most decisions.", cluster: "Business Management" },
  { term: "Transformational Leadership", definition: "A leadership style that inspires followers to exceed performance expectations by fostering a vision and encouraging innovation.", cluster: "Business Management" },
  { term: "Transactional Leadership", definition: "A leadership style based on exchanges between leader and follower, with performance rewarded or punished according to outcomes.", cluster: "Business Management" },
  { term: "Servant Leadership", definition: "A philosophy where the primary goal of the leader is to serve others, prioritizing the growth and well-being of team members.", cluster: "Business Management" },
  { term: "Emotional Intelligence (EQ)", definition: "The ability to recognize, understand, and manage one's own emotions and the emotions of others, important in leadership effectiveness.", cluster: "Business Management" },

  // Human Resources (HR)
  { term: "Human Resource Management (HRM)", definition: "The strategic approach to managing people in an organization so that they contribute to business goals.", cluster: "Business Management" },
  { term: "Job Analysis", definition: "The process of identifying and describing the duties, responsibilities, and requirements of a specific job.", cluster: "Business Management" },
  { term: "Job Description", definition: "A formal document outlining a position's duties, responsibilities, required qualifications, and reporting relationships.", cluster: "Business Management" },
  { term: "Recruitment", definition: "The process of attracting and identifying potential candidates to fill job vacancies within an organization.", cluster: "Business Management" },
  { term: "Onboarding", definition: "The process of integrating a new employee into the organization, including orientation, training, and socialization.", cluster: "Business Management" },
  { term: "Performance Appraisal", definition: "A systematic evaluation of an employee's job performance and contribution to the organization.", cluster: "Business Management" },
  { term: "Employee Turnover", definition: "The rate at which employees leave an organization and are replaced, measured as a percentage of the average workforce.", cluster: "Business Management" },
  { term: "Compensation", definition: "The total financial and non-financial rewards provided to employees in exchange for their work.", cluster: "Business Management" },
  { term: "Benefits Package", definition: "Non-wage compensation provided to employees, such as health insurance, retirement plans, and paid time off.", cluster: "Business Management" },
  { term: "Collective Bargaining", definition: "The negotiation process between an employer and a labor union to establish wages, benefits, and working conditions.", cluster: "Business Management" },

  // Ethics
  { term: "Business Ethics", definition: "The application of ethical principles and moral standards to business decisions, behaviors, and relationships.", cluster: "Business Management" },
  { term: "Corporate Social Responsibility (CSR)", definition: "A business model where companies integrate social and environmental concerns into their operations and stakeholder interactions.", cluster: "Business Management" },
  { term: "Code of Ethics", definition: "A formal document outlining the principles and ethical standards that guide organizational behavior and decision-making.", cluster: "Business Management" },
  { term: "Whistleblowing", definition: "The act of reporting illegal or unethical conduct within an organization to internal or external authorities.", cluster: "Business Management" },
  { term: "Conflict of Interest", definition: "A situation where a person's personal interests could improperly influence their professional decisions.", cluster: "Business Management" },
  { term: "Stakeholder", definition: "Any individual or group that has an interest in or is affected by an organization's activities, including employees, customers, investors, and communities.", cluster: "Business Management" },
  { term: "Sustainability (Business)", definition: "Meeting the needs of the present without compromising the ability of future generations to meet their needs, integrating environmental and social considerations.", cluster: "Business Management" },

  // Operations
  { term: "Operations Management", definition: "The administration of business practices to create the highest level of efficiency possible within an organization.", cluster: "Business Management" },
  { term: "Supply Chain", definition: "The network of all individuals, organizations, resources, activities, and technology involved in creating and selling a product.", cluster: "Business Management" },
  { term: "Just-In-Time (JIT)", definition: "An inventory management strategy that aligns raw material orders from suppliers directly with production schedules to reduce holding costs.", cluster: "Business Management" },
  { term: "Six Sigma", definition: "A data-driven methodology for eliminating defects and improving quality in processes, aiming for fewer than 3.4 defects per million opportunities.", cluster: "Business Management" },
  { term: "Lean Management", definition: "A methodology that focuses on minimizing waste within manufacturing systems while simultaneously maximizing productivity.", cluster: "Business Management" },
  { term: "Process Improvement", definition: "The proactive task of identifying, analyzing, and improving existing business processes to optimize performance.", cluster: "Business Management" },
  { term: "Key Performance Indicator (KPI)", definition: "A measurable value that demonstrates how effectively an organization is achieving key business objectives.", cluster: "Business Management" },
  { term: "Benchmarking", definition: "The practice of comparing a company's performance metrics, processes, or products to industry bests or best practices.", cluster: "Business Management" },

  // Strategy
  { term: "Strategic Planning", definition: "The process of defining an organization's direction and making decisions on allocating resources to pursue its strategy.", cluster: "Business Management" },
  { term: "Mission Statement", definition: "A formal summary of the aims and values of an organization that defines its purpose and primary objectives.", cluster: "Business Management" },
  { term: "Vision Statement", definition: "A forward-looking statement that describes what an organization wants to achieve in the long term.", cluster: "Business Management" },
  { term: "Core Values", definition: "The fundamental beliefs and guiding principles that shape an organization's culture and decision-making.", cluster: "Business Management" },
  { term: "Porter's Five Forces", definition: "A framework for analyzing the competitive forces in an industry: threat of new entrants, bargaining power of suppliers, bargaining power of buyers, threat of substitutes, and competitive rivalry.", cluster: "Business Management" },
  { term: "PESTEL Analysis", definition: "A strategic framework examining Political, Economic, Social, Technological, Environmental, and Legal factors affecting an organization.", cluster: "Business Management" },
  { term: "Competitive Strategy", definition: "A long-term plan developed to achieve a sustainable competitive advantage by responding to market forces.", cluster: "Business Management" },
  { term: "Cost Leadership Strategy", definition: "A competitive strategy in which a company aims to be the lowest-cost producer in its industry.", cluster: "Business Management" },
  { term: "Differentiation Strategy", definition: "A competitive strategy in which a company distinguishes its product or service with unique features valued by consumers.", cluster: "Business Management" },

  // Organizational Behavior
  { term: "Organizational Culture", definition: "The shared values, beliefs, norms, and practices that shape the behavior of members within an organization.", cluster: "Business Management" },
  { term: "Organizational Structure", definition: "The system by which activities such as task allocation, coordination, and supervision are directed toward achieving organizational goals.", cluster: "Business Management" },
  { term: "Chain of Command", definition: "The line of authority within an organization from the top executive to the lowest-level employee.", cluster: "Business Management" },
  { term: "Span of Control", definition: "The number of direct reports a manager can effectively supervise and manage.", cluster: "Business Management" },
  { term: "Delegation", definition: "The assignment of responsibility and authority to another person to carry out specific activities.", cluster: "Business Management" },
  { term: "Empowerment (Employee)", definition: "Giving employees the authority, tools, and information they need to make decisions and solve problems on their own.", cluster: "Business Management" },
  { term: "Group Dynamics", definition: "The patterns of interaction, roles, norms, and cohesion within a group that affect performance and satisfaction.", cluster: "Business Management" },
  { term: "Change Management", definition: "The systematic approach to transitioning individuals, teams, and organizations from a current state to a desired future state.", cluster: "Business Management" },
  { term: "Conflict Management", definition: "The practice of identifying and resolving disagreements or disputes in a rational and constructive manner.", cluster: "Business Management" },
  { term: "Decision-Making Process", definition: "A structured approach involving identifying the problem, gathering information, generating alternatives, evaluating options, and implementing the best choice.", cluster: "Business Management" },
  { term: "Project Management", definition: "The application of processes, methods, skills, and experience to achieve specific project objectives within agreed parameters.", cluster: "Business Management" },
  { term: "Matrix Organization", definition: "A structure that combines functional and project-based departments, with employees reporting to both a functional manager and a project manager.", cluster: "Business Management" },

  // ============================================================
  // ENTREPRENEURSHIP (70 terms)
  // ============================================================

  // Startup Fundamentals
  { term: "Entrepreneurship", definition: "The process of designing, launching, and running a new business venture, typically to solve a problem or exploit a market opportunity.", cluster: "Entrepreneurship" },
  { term: "Entrepreneur", definition: "An individual who organizes and operates a business, taking on financial risks in the hope of profit.", cluster: "Entrepreneurship" },
  { term: "Startup", definition: "A young company founded to develop a unique product or service, bring it to market, and scale it rapidly.", cluster: "Entrepreneurship" },
  { term: "Bootstrapping", definition: "Building a business using personal savings and revenue generated by the business, without external funding.", cluster: "Entrepreneurship" },
  { term: "Pivot", definition: "A structured course correction for a startup, changing its product, strategy, or target market in response to feedback.", cluster: "Entrepreneurship" },
  { term: "Minimum Viable Product (MVP)", definition: "The simplest version of a product that can be released to gather maximum validated learning about customers with the least effort.", cluster: "Entrepreneurship" },
  { term: "Scalability", definition: "The ability of a business to grow and increase revenue without proportionally increasing costs.", cluster: "Entrepreneurship" },
  { term: "Market Opportunity", definition: "An identified gap or unmet need in the market that a business can address with a product or service.", cluster: "Entrepreneurship" },
  { term: "Value Chain", definition: "The full range of activities a business performs to create value and deliver a product or service to customers.", cluster: "Entrepreneurship" },
  { term: "Social Entrepreneurship", definition: "Entrepreneurship that creates ventures primarily for social, environmental, or community benefit rather than profit.", cluster: "Entrepreneurship" },

  // Business Plans
  { term: "Business Plan", definition: "A formal written document describing a business's objectives, strategies, market analysis, financial projections, and management team.", cluster: "Entrepreneurship" },
  { term: "Executive Summary", definition: "A brief overview of a business plan highlighting the most important information about the company, product, market, and financials.", cluster: "Entrepreneurship" },
  { term: "Financial Projections", definition: "Estimates of future revenue, expenses, and profitability used to plan for and demonstrate the viability of a business.", cluster: "Entrepreneurship" },
  { term: "Market Analysis", definition: "Research on the target market's size, growth, trends, and competitive landscape to validate a business opportunity.", cluster: "Entrepreneurship" },
  { term: "Competitive Analysis", definition: "An assessment of a business's competitors—their strengths, weaknesses, strategies, and market position.", cluster: "Entrepreneurship" },
  { term: "Operations Plan", definition: "The section of a business plan that details how the business will produce its product or deliver its service.", cluster: "Entrepreneurship" },
  { term: "Pro Forma Statements", definition: "Forward-looking financial statements based on assumptions about future performance, used in business planning.", cluster: "Entrepreneurship" },
  { term: "Break-Even Point", definition: "The level of sales at which total revenues equal total costs, resulting in neither profit nor loss.", cluster: "Entrepreneurship" },

  // Funding
  { term: "Angel Investor", definition: "A high-net-worth individual who provides capital to early-stage startups in exchange for equity or convertible debt.", cluster: "Entrepreneurship" },
  { term: "Venture Capital (VC)", definition: "Financing provided by investors to startups and small businesses with high growth potential in exchange for equity.", cluster: "Entrepreneurship" },
  { term: "Crowdfunding", definition: "Raising small amounts of money from a large number of people, typically via the internet, to fund a business or project.", cluster: "Entrepreneurship" },
  { term: "Small Business Administration (SBA) Loan", definition: "A government-backed loan program providing funding to small businesses that might not qualify for conventional bank loans.", cluster: "Entrepreneurship" },
  { term: "Equity Financing", definition: "Raising capital by selling shares of ownership in the company to investors.", cluster: "Entrepreneurship" },
  { term: "Debt Financing", definition: "Raising capital by borrowing money that must be repaid with interest, without giving up ownership.", cluster: "Entrepreneurship" },
  { term: "Seed Funding", definition: "The initial capital used to start a business, typically from founders, friends, family, or angel investors.", cluster: "Entrepreneurship" },
  { term: "Series A/B/C Funding", definition: "Sequential rounds of venture capital investment as a startup scales, with each round typically larger and at higher valuations.", cluster: "Entrepreneurship" },
  { term: "Valuation", definition: "The process of determining the current worth of a company based on its assets, earnings potential, and market comparables.", cluster: "Entrepreneurship" },
  { term: "Return on Investment (ROI)", definition: "A performance measure evaluating the efficiency of an investment, calculated as (Net Profit / Cost of Investment) × 100%.", cluster: "Entrepreneurship" },

  // Legal Structures
  { term: "Sole Proprietorship", definition: "A business owned and operated by one person with no legal distinction between the owner and the business.", cluster: "Entrepreneurship" },
  { term: "Partnership", definition: "A business owned by two or more individuals who share management, profits, and liability.", cluster: "Entrepreneurship" },
  { term: "Limited Liability Company (LLC)", definition: "A hybrid business structure providing the limited liability of a corporation with the tax benefits and flexibility of a partnership.", cluster: "Entrepreneurship" },
  { term: "Corporation (C-Corp)", definition: "A legal entity separate from its owners that can own assets, incur liabilities, and be taxed independently.", cluster: "Entrepreneurship" },
  { term: "S Corporation (S-Corp)", definition: "A corporation that elects to pass corporate income, losses, deductions, and credits through to shareholders for federal tax purposes.", cluster: "Entrepreneurship" },
  { term: "Limited Liability", definition: "A legal structure where an owner's personal assets are protected from business debts and legal judgments.", cluster: "Entrepreneurship" },
  { term: "Articles of Incorporation", definition: "Legal documents filed with a state to formally establish a corporation and outline its basic structure.", cluster: "Entrepreneurship" },
  { term: "Operating Agreement (LLC)", definition: "A legal document outlining the ownership structure, member roles, and operating procedures of an LLC.", cluster: "Entrepreneurship" },

  // Intellectual Property
  { term: "Intellectual Property (IP)", definition: "Creations of the mind—inventions, literary and artistic works, designs, symbols—protected by law through patents, copyrights, and trademarks.", cluster: "Entrepreneurship" },
  { term: "Patent", definition: "A government-granted right to an inventor to exclude others from making, using, or selling an invention for a specified period.", cluster: "Entrepreneurship" },
  { term: "Trademark", definition: "A symbol, word, or combination legally registered to represent a company or product and distinguish it from competitors.", cluster: "Entrepreneurship" },
  { term: "Copyright", definition: "Legal protection for original works of authorship, granting the creator exclusive rights to reproduce, distribute, and display the work.", cluster: "Entrepreneurship" },
  { term: "Trade Secret", definition: "Confidential business information that provides a competitive advantage and is protected through confidentiality agreements.", cluster: "Entrepreneurship" },
  { term: "Non-Disclosure Agreement (NDA)", definition: "A legal contract between parties establishing confidentiality about shared information.", cluster: "Entrepreneurship" },

  // Innovation & Lean Startup
  { term: "Lean Startup", definition: "A methodology for developing businesses and products that uses validated learning, rapid experimentation, and iterative product releases.", cluster: "Entrepreneurship" },
  { term: "Build-Measure-Learn", definition: "The core feedback loop of the Lean Startup methodology: build a product, measure how customers respond, and learn whether to persist or pivot.", cluster: "Entrepreneurship" },
  { term: "Validated Learning", definition: "The process of demonstrating empirically that a team has discovered valuable truths about a startup's present and future business prospects.", cluster: "Entrepreneurship" },
  { term: "Design Thinking", definition: "A human-centered approach to innovation that draws from the designer's toolkit to integrate human needs, technology, and business strategy.", cluster: "Entrepreneurship" },
  { term: "Disruptive Innovation", definition: "An innovation that creates a new market by applying different values than incumbent products, eventually displacing established competitors.", cluster: "Entrepreneurship" },
  { term: "First-Mover Advantage", definition: "The competitive benefit gained by being the first to enter a market with a product or service.", cluster: "Entrepreneurship" },
  { term: "Business Model Canvas", definition: "A strategic management tool for developing and documenting a business model using nine building blocks: value propositions, customer segments, channels, etc.", cluster: "Entrepreneurship" },
  { term: "Customer Discovery", definition: "The first phase of the Lean Startup process, testing key business assumptions by getting out of the building to talk to potential customers.", cluster: "Entrepreneurship" },
  { term: "Iterative Development", definition: "A product development approach involving repeated cycles of prototyping, testing, and refinement based on user feedback.", cluster: "Entrepreneurship" },
  { term: "Proof of Concept (POC)", definition: "A demonstration that a product idea or method is feasible and can be implemented as proposed.", cluster: "Entrepreneurship" },

  // Additional Entrepreneurship Terms
  { term: "Franchise", definition: "A licensing agreement in which a franchisee pays for the right to operate under a franchisor's brand name and business system.", cluster: "Entrepreneurship" },
  { term: "Incubator", definition: "An organization that helps startups grow by providing workspace, mentorship, funding connections, and other resources during early stages.", cluster: "Entrepreneurship" },
  { term: "Accelerator", definition: "A time-limited program offering mentorship, funding, and networking to startups in exchange for equity, aimed at rapid growth.", cluster: "Entrepreneurship" },
  { term: "Exit Strategy", definition: "A plan for how an entrepreneur or investor will sell or transfer ownership of a business to realize a return on investment.", cluster: "Entrepreneurship" },
  { term: "Acquisition", definition: "The purchase of one company by another, often used as an exit strategy or growth mechanism.", cluster: "Entrepreneurship" },
  { term: "Initial Public Offering (IPO) – Entrepreneurship", definition: "The process of offering shares of a private company to the public for the first time, representing an exit event for early investors.", cluster: "Entrepreneurship" },
  { term: "Cash Flow (Startup)", definition: "The movement of money in and out of a startup; managing cash flow is critical to survival in the early stages.", cluster: "Entrepreneurship" },
  { term: "Burn Rate", definition: "The rate at which a startup spends its available cash before generating positive cash flow.", cluster: "Entrepreneurship" },
  { term: "Runway", definition: "The amount of time a startup can continue to operate before it runs out of cash, based on its burn rate.", cluster: "Entrepreneurship" },
  { term: "Economies of Scale", definition: "The cost advantages a business obtains by expanding production, where the cost per unit decreases as volume increases.", cluster: "Entrepreneurship" },

  // ============================================================
  // PERSONAL FINANCE (70 terms)
  // ============================================================

  // Budgeting
  { term: "Budget", definition: "A financial plan that estimates income and expenses over a specified period to guide spending and saving decisions.", cluster: "Finance" },
  { term: "50/30/20 Rule", definition: "A budgeting guideline allocating 50% of after-tax income to needs, 30% to wants, and 20% to savings and debt repayment.", cluster: "Finance" },
  { term: "Zero-Based Budget", definition: "A budgeting method where every dollar of income is assigned a purpose, so income minus expenses equals zero.", cluster: "Finance" },
  { term: "Fixed Expenses", definition: "Recurring costs that remain the same each month, such as rent, mortgage payments, or loan payments.", cluster: "Finance" },
  { term: "Variable Expenses", definition: "Costs that fluctuate each month based on usage or choices, such as groceries, entertainment, and utilities.", cluster: "Finance" },
  { term: "Emergency Fund", definition: "Savings set aside to cover unexpected expenses or income loss, typically three to six months of living expenses.", cluster: "Finance" },
  { term: "Net Worth", definition: "The difference between total assets and total liabilities; a snapshot of an individual's financial health.", cluster: "Finance" },
  { term: "Pay Yourself First", definition: "A savings strategy where a portion of income is automatically set aside for savings before paying other expenses.", cluster: "Finance" },

  // Credit
  { term: "Credit Score", definition: "A numerical rating (typically 300–850) that represents a person's creditworthiness based on their credit history.", cluster: "Finance" },
  { term: "Credit Report", definition: "A detailed record of an individual's credit history compiled by credit bureaus, including accounts, payment history, and public records.", cluster: "Finance" },
  { term: "FICO Score", definition: "The most widely used credit scoring model, calculated by Fair Isaac Corporation, weighing payment history, amounts owed, length of credit history, new credit, and credit mix.", cluster: "Finance" },
  { term: "Credit Utilization Ratio", definition: "The percentage of available revolving credit currently being used; keeping it below 30% is recommended for a good credit score.", cluster: "Finance" },
  { term: "Credit Card", definition: "A card issued by a financial institution allowing the holder to borrow funds to pay for goods and services, with the obligation to repay.", cluster: "Finance" },
  { term: "Interest (Personal Finance)", definition: "The cost of borrowing money, expressed as a percentage of the principal, paid over time.", cluster: "Finance" },
  { term: "Minimum Payment", definition: "The smallest amount a borrower must pay each month on a credit account to remain in good standing.", cluster: "Finance" },
  { term: "Secured Loan", definition: "A loan backed by collateral (an asset) that the lender can seize if the borrower defaults.", cluster: "Finance" },
  { term: "Unsecured Loan", definition: "A loan not backed by collateral, based solely on the borrower's creditworthiness, typically carrying higher interest rates.", cluster: "Finance" },
  { term: "Debt Consolidation", definition: "Combining multiple debts into a single loan, often with a lower interest rate, to simplify repayment.", cluster: "Finance" },
  { term: "Bankruptcy", definition: "A legal process in which individuals or businesses that cannot repay debts seek relief from some or all of their obligations.", cluster: "Finance" },

  // Investing (Personal Finance)
  { term: "401(k)", definition: "A tax-advantaged employer-sponsored retirement savings plan where employees contribute pre-tax income and some employers match contributions.", cluster: "Finance" },
  { term: "Individual Retirement Account (IRA)", definition: "A tax-advantaged personal savings account that enables individuals to set aside money for retirement, with Traditional and Roth variants.", cluster: "Finance" },
  { term: "Roth IRA", definition: "A retirement account funded with after-tax dollars where qualified withdrawals in retirement are tax-free.", cluster: "Finance" },
  { term: "Traditional IRA", definition: "A retirement account where contributions may be tax-deductible, and withdrawals in retirement are taxed as ordinary income.", cluster: "Finance" },
  { term: "Compound Interest (Personal Finance)", definition: "Earning interest on both the principal and previously earned interest, accelerating wealth growth over time.", cluster: "Finance" },
  { term: "Risk Tolerance", definition: "An investor's ability and willingness to endure fluctuations in the value of their investments.", cluster: "Finance" },
  { term: "Dollar-Cost Averaging", definition: "Investing a fixed dollar amount at regular intervals regardless of price, reducing the impact of market volatility over time.", cluster: "Finance" },
  { term: "Expense Ratio", definition: "The annual fee charged by a mutual fund or ETF as a percentage of assets under management, representing the cost to investors.", cluster: "Finance" },
  { term: "529 Plan", definition: "A tax-advantaged savings plan designed to encourage saving for future education expenses.", cluster: "Finance" },

  // Insurance (Personal Finance)
  { term: "Health Insurance", definition: "Coverage that pays for medical and surgical expenses incurred by the insured person.", cluster: "Finance" },
  { term: "Term Life Insurance", definition: "Life insurance that provides coverage for a specified period; pays a death benefit if the insured dies within the term.", cluster: "Finance" },
  { term: "Whole Life Insurance", definition: "Permanent life insurance providing lifelong coverage with a savings component (cash value) that grows over time.", cluster: "Finance" },
  { term: "Auto Insurance", definition: "Coverage for financial protection against physical damage and liability from traffic accidents and other vehicle-related incidents.", cluster: "Finance" },
  { term: "Homeowner's Insurance", definition: "Coverage protecting against damage to a home and its contents, as well as liability for accidents on the property.", cluster: "Finance" },
  { term: "Renter's Insurance", definition: "Coverage protecting a renter's personal belongings and providing liability protection within a rented dwelling.", cluster: "Finance" },
  { term: "Disability Insurance", definition: "Coverage that replaces a portion of lost income if the policyholder is unable to work due to illness or injury.", cluster: "Finance" },
  { term: "Beneficiary", definition: "The person or entity designated to receive the proceeds of an insurance policy or retirement account.", cluster: "Finance" },

  // Taxes (Personal Finance)
  { term: "Gross Income", definition: "Total income earned before any deductions or taxes are applied.", cluster: "Finance" },
  { term: "Net Income (Take-Home Pay)", definition: "Income remaining after all taxes and deductions (such as health insurance and retirement contributions) have been subtracted.", cluster: "Finance" },
  { term: "Filing Status", definition: "A category on a tax return (single, married filing jointly, head of household, etc.) that determines the tax rate and standard deduction.", cluster: "Finance" },
  { term: "Standard Deduction", definition: "A fixed dollar amount that reduces taxable income for taxpayers who do not itemize deductions.", cluster: "Finance" },
  { term: "Itemized Deductions", definition: "Specific eligible expenses listed on a tax return—such as mortgage interest, state taxes, and charitable donations—subtracted from gross income.", cluster: "Finance" },
  { term: "FAFSA", definition: "Free Application for Federal Student Aid; the form used to determine a student's eligibility for federal financial aid for college.", cluster: "Finance" },
  { term: "FICA Taxes", definition: "Federal Insurance Contributions Act taxes withheld from paychecks to fund Social Security and Medicare programs.", cluster: "Finance" },

  // Retirement
  { term: "Social Security", definition: "A U.S. federal program providing retirement, disability, and survivor benefits funded through payroll taxes.", cluster: "Finance" },
  { term: "Medicare", definition: "A federal health insurance program primarily for people aged 65 and older, funded through FICA taxes and premiums.", cluster: "Finance" },
  { term: "Required Minimum Distribution (RMD)", definition: "The minimum amount the IRS requires you to withdraw annually from tax-deferred retirement accounts once you reach age 73.", cluster: "Finance" },
  { term: "Annuity", definition: "A financial product that pays out a fixed stream of payments, often used as retirement income.", cluster: "Finance" },
  { term: "Pension", definition: "A defined-benefit retirement plan in which an employer contributes to a pool of funds for an employee's future benefit.", cluster: "Finance" },

  // Consumer Rights
  { term: "Consumer Rights", definition: "Legal protections for buyers of goods and services, including the right to safety, information, choice, and redress.", cluster: "Finance" },
  { term: "Fair Credit Reporting Act (FCRA)", definition: "A U.S. law that promotes accuracy and privacy of information in consumer credit reports.", cluster: "Finance" },
  { term: "Truth in Lending Act (TILA)", definition: "A U.S. federal law requiring lenders to disclose key terms and costs of credit, enabling consumers to compare loan offers.", cluster: "Finance" },
  { term: "Identity Theft", definition: "The fraudulent acquisition and use of a person's private identifying information, usually for financial gain.", cluster: "Finance" },
  { term: "Phishing", definition: "A cybercrime where attackers impersonate legitimate institutions via email or text to steal sensitive information such as passwords and credit card numbers.", cluster: "Finance" },

  // Additional Personal Finance Terms
  { term: "Inflation (Personal Finance)", definition: "The rate at which the general level of prices rises over time, reducing the purchasing power of money.", cluster: "Finance" },
  { term: "Purchasing Power", definition: "The value of money in terms of the goods and services it can buy; reduced by inflation.", cluster: "Finance" },
  { term: "Opportunity Cost (Personal Finance)", definition: "The value of the next-best alternative foregone when making a financial decision.", cluster: "Finance" },
  { term: "Liquidity (Personal Finance)", definition: "The ease with which an asset can be converted into cash without a significant loss in value.", cluster: "Finance" },
  { term: "Mortgage", definition: "A loan used to purchase real property, with the property serving as collateral until the loan is repaid.", cluster: "Finance" },
  { term: "Amortization Schedule", definition: "A table showing the periodic payments for a loan, breaking down how much goes to principal and interest over the loan's life.", cluster: "Finance" },
  { term: "Down Payment", definition: "An upfront payment made at the time of purchase, representing a percentage of the total price.", cluster: "Finance" },
  { term: "Home Equity", definition: "The portion of a home's value that the owner actually owns, calculated as market value minus outstanding mortgage balance.", cluster: "Finance" },
  { term: "Payday Loan", definition: "A short-term, high-interest loan intended to cover expenses until the borrower's next paycheck; often considered predatory.", cluster: "Finance" },
  { term: "Financial Goal Setting", definition: "The process of defining specific, measurable, and time-bound financial objectives to guide saving and spending decisions.", cluster: "Finance" },

  // ============================================================
  // ECONOMICS (50 terms)
  // ============================================================

  // Supply & Demand
  { term: "Supply", definition: "The quantity of a good or service that producers are willing and able to sell at various prices in a given period.", cluster: "Economics" },
  { term: "Demand", definition: "The quantity of a good or service that consumers are willing and able to buy at various prices in a given period.", cluster: "Economics" },
  { term: "Law of Supply", definition: "The principle that, all else being equal, as the price of a good increases, the quantity supplied increases.", cluster: "Economics" },
  { term: "Law of Demand", definition: "The principle that, all else being equal, as the price of a good increases, the quantity demanded decreases.", cluster: "Economics" },
  { term: "Market Equilibrium", definition: "The price and quantity at which the quantity supplied equals the quantity demanded; there is no surplus or shortage.", cluster: "Economics" },
  { term: "Surplus", definition: "An excess of supply over demand, occurring when the price is above the equilibrium level.", cluster: "Economics" },
  { term: "Shortage", definition: "An excess of demand over supply, occurring when the price is below the equilibrium level.", cluster: "Economics" },
  { term: "Shift in Demand", definition: "A change in the quantity demanded at every price level caused by a factor other than price, such as income, tastes, or prices of related goods.", cluster: "Economics" },
  { term: "Shift in Supply", definition: "A change in the quantity supplied at every price level caused by a factor other than price, such as input costs, technology, or number of sellers.", cluster: "Economics" },
  { term: "Elasticity (Price)", definition: "A measure of how much the quantity demanded or supplied changes in response to a change in price.", cluster: "Economics" },
  { term: "Elastic Demand", definition: "Demand where a small change in price causes a large change in quantity demanded; |PED| > 1.", cluster: "Economics" },
  { term: "Inelastic Demand", definition: "Demand where a change in price causes a proportionally smaller change in quantity demanded; |PED| < 1.", cluster: "Economics" },
  { term: "Substitute Good", definition: "A product that can be used in place of another; when the price of one rises, demand for the substitute increases.", cluster: "Economics" },
  { term: "Complementary Good", definition: "A product used together with another; when the price of one rises, demand for the complement falls.", cluster: "Economics" },

  // Market Structures
  { term: "Perfect Competition", definition: "A market structure with many sellers, identical products, free entry and exit, and no single seller able to influence price.", cluster: "Economics" },
  { term: "Monopoly", definition: "A market structure dominated by a single seller of a product with no close substitutes, giving that seller significant price-making power.", cluster: "Economics" },
  { term: "Oligopoly", definition: "A market structure with a small number of large firms whose pricing and output decisions are interdependent.", cluster: "Economics" },
  { term: "Monopolistic Competition", definition: "A market structure with many sellers offering differentiated products, with some price-setting ability and easy entry and exit.", cluster: "Economics" },
  { term: "Price Maker", definition: "A firm that has sufficient market power to set its own price rather than accepting the market price.", cluster: "Economics" },
  { term: "Price Taker", definition: "A firm in a perfectly competitive market that accepts the market price as given and cannot influence it.", cluster: "Economics" },
  { term: "Barriers to Entry", definition: "Obstacles that make it difficult for new firms to enter a market, such as high startup costs, patents, or government regulation.", cluster: "Economics" },

  // GDP & Macroeconomics
  { term: "Gross Domestic Product (GDP)", definition: "The total monetary value of all goods and services produced within a country's borders in a specific time period.", cluster: "Economics" },
  { term: "GDP Per Capita", definition: "GDP divided by the population, used as a measure of the average standard of living in a country.", cluster: "Economics" },
  { term: "Economic Growth", definition: "An increase in the production of goods and services over time, measured by the percentage change in real GDP.", cluster: "Economics" },
  { term: "Recession", definition: "A period of temporary economic decline defined as two consecutive quarters of negative GDP growth.", cluster: "Economics" },
  { term: "Business Cycle", definition: "The recurring pattern of expansion (growth), peak, contraction (recession), and trough in economic activity.", cluster: "Economics" },
  { term: "Unemployment Rate", definition: "The percentage of the labor force that is jobless and actively seeking employment.", cluster: "Economics" },
  { term: "Frictional Unemployment", definition: "Temporary unemployment that occurs when people are between jobs or looking for their first job.", cluster: "Economics" },
  { term: "Structural Unemployment", definition: "Long-term unemployment resulting from a mismatch between workers' skills and the skills required by available jobs.", cluster: "Economics" },
  { term: "Cyclical Unemployment", definition: "Unemployment resulting from a downturn in the business cycle and a lack of demand for goods and services.", cluster: "Economics" },

  // Inflation
  { term: "Inflation", definition: "A sustained increase in the general price level of goods and services, reducing the purchasing power of money over time.", cluster: "Economics" },
  { term: "Consumer Price Index (CPI)", definition: "A measure of the average change in prices paid by consumers for a basket of goods and services over time.", cluster: "Economics" },
  { term: "Deflation", definition: "A decrease in the general price level of goods and services, which can signal weak demand and lead to economic decline.", cluster: "Economics" },
  { term: "Hyperinflation", definition: "An extremely rapid and out-of-control rate of inflation, causing currency to lose value rapidly.", cluster: "Economics" },
  { term: "Stagflation", definition: "An economic condition characterized by slow growth, high unemployment, and high inflation occurring simultaneously.", cluster: "Economics" },

  // Monetary & Fiscal Policy
  { term: "Monetary Policy", definition: "Central bank actions that manage the money supply and interest rates to influence economic activity and control inflation.", cluster: "Economics" },
  { term: "Fiscal Policy", definition: "Government use of taxation and spending to influence the economy, aiming to achieve stable growth, low unemployment, and low inflation.", cluster: "Economics" },
  { term: "Expansionary Policy", definition: "Economic policy (monetary or fiscal) that stimulates growth by increasing money supply, cutting interest rates, or increasing government spending.", cluster: "Economics" },
  { term: "Contractionary Policy", definition: "Economic policy that slows growth to reduce inflation by decreasing money supply, raising interest rates, or reducing government spending.", cluster: "Economics" },
  { term: "Open Market Operations", definition: "The Federal Reserve's buying and selling of government securities to influence the money supply and interest rates.", cluster: "Economics" },
  { term: "Federal Funds Rate", definition: "The interest rate at which banks lend reserves to each other overnight; a key tool of Federal Reserve monetary policy.", cluster: "Economics" },
  { term: "National Debt", definition: "The total amount of money that a government owes to creditors, accumulated through deficit spending over time.", cluster: "Economics" },
  { term: "Budget Deficit", definition: "A financial situation in which a government's expenditures exceed its revenues during a given period.", cluster: "Economics" },
  { term: "Budget Surplus", definition: "A financial situation in which a government's revenues exceed its expenditures during a given period.", cluster: "Economics" },

  // Additional Economics Terms
  { term: "Comparative Advantage", definition: "The ability of an individual or country to produce a good at a lower opportunity cost than another producer.", cluster: "Economics" },
  { term: "Absolute Advantage", definition: "The ability of a producer to produce more of a good using the same amount of resources as a competitor.", cluster: "Economics" },
  { term: "Free Trade", definition: "International trade without government restrictions such as tariffs, quotas, or subsidies.", cluster: "Economics" },
  { term: "Tariff", definition: "A tax imposed on imported goods, designed to protect domestic industries or raise government revenue.", cluster: "Economics" },
  { term: "Externality", definition: "A cost or benefit that affects a party not directly involved in a transaction (negative: pollution; positive: education).", cluster: "Economics" },
  { term: "Public Good", definition: "A good that is non-excludable and non-rivalrous, meaning it is available to all and one person's use does not reduce availability to others.", cluster: "Economics" },

  // ============================================================
  // FINANCE – additional terms to reach 100
  // ============================================================
  { term: "Accounts Receivable Turnover", definition: "A ratio measuring how efficiently a company collects on credit sales; calculated as Net Credit Sales divided by Average Accounts Receivable.", cluster: "Finance" },
  { term: "Days Sales Outstanding (DSO)", definition: "The average number of days it takes a company to collect payment after a sale; calculated as (Accounts Receivable / Net Credit Sales) × 365.", cluster: "Finance" },
  { term: "Free Cash Flow (FCF)", definition: "Cash generated by a company after accounting for capital expenditures; represents cash available for distribution to investors.", cluster: "Finance" },
  { term: "EBITDA", definition: "Earnings Before Interest, Taxes, Depreciation, and Amortization; a measure of a company's core operational profitability.", cluster: "Finance" },
  { term: "Letter of Credit", definition: "A financial document issued by a bank guaranteeing a buyer's payment to a seller will be received on time and for the correct amount.", cluster: "Finance" },
  { term: "Commercial Paper", definition: "An unsecured, short-term debt instrument issued by corporations to raise capital for immediate financing needs.", cluster: "Finance" },
  { term: "Treasury Stock", definition: "Shares of a company's own stock that have been repurchased from shareholders and held by the company.", cluster: "Finance" },
  { term: "Goodwill (Accounting)", definition: "An intangible asset representing the premium paid over fair market value when one company acquires another, reflecting brand, reputation, or customer relationships.", cluster: "Finance" },
  { term: "Market Capitalization", definition: "The total market value of a company's outstanding shares of stock; calculated as Share Price × Total Shares Outstanding.", cluster: "Finance" },
  { term: "Yield (Bond)", definition: "The income return on a bond investment, expressed as an annual percentage of the bond's current market price.", cluster: "Finance" },
  { term: "Collateralized Loan", definition: "A loan secured by an asset the lender can claim if the borrower defaults, reducing the lender's risk and enabling lower interest rates.", cluster: "Finance" },

  // ============================================================
  // MARKETING – additional terms to reach 120
  // ============================================================
  { term: "Unique Selling Proposition (USP)", definition: "The specific benefit or feature that makes a product stand out from all competitors and gives customers a compelling reason to buy.", cluster: "Marketing" },
  { term: "Aspirational Brand", definition: "A brand that consumers desire to own because it represents a lifestyle, status, or set of values they wish to embody.", cluster: "Marketing" },
  { term: "Frequency (Advertising)", definition: "The number of times the average person in the target audience is exposed to an advertising message during a campaign.", cluster: "Marketing" },

  // ============================================================
  // HOSPITALITY – additional terms to reach 80
  // ============================================================
  { term: "Banquet Service", definition: "A style of food service in which identical pre-set meals are served simultaneously to all guests at a large event.", cluster: "Hospitality" },
  { term: "À la Carte", definition: "A menu format where each item is priced and ordered separately, rather than as a complete set meal.", cluster: "Hospitality" },
  { term: "Table d'Hôte", definition: "A set menu offering a complete meal at a fixed price, with limited or no choices for individual courses.", cluster: "Hospitality" },
  { term: "Mise en Place", definition: "A French culinary term meaning 'everything in its place'; the preparation and organization of ingredients and equipment before service begins.", cluster: "Hospitality" },
  { term: "Food Cost Percentage", definition: "The ratio of food costs to food sales revenue, used to assess kitchen efficiency; calculated as (Food Cost / Food Sales) × 100.", cluster: "Hospitality" },
  { term: "Reservation System", definition: "Software or processes used by hospitality establishments to accept, manage, and track guest bookings in advance.", cluster: "Hospitality" },
  { term: "No-Show", definition: "A guest who makes a reservation but fails to arrive without prior cancellation, resulting in lost revenue for the property.", cluster: "Hospitality" },
  { term: "Shoulder Season", definition: "The travel period between peak and off-peak seasons, characterized by moderate demand and pricing.", cluster: "Hospitality" },
  { term: "Conference Services Manager", definition: "A hotel professional responsible for coordinating all aspects of meetings and events booked at the property.", cluster: "Hospitality" },
  { term: "Turndown Service", definition: "An evening housekeeping service that prepares the guest room for sleep, typically including folding back bedding and placing amenities.", cluster: "Hospitality" },
  { term: "Rack Rate", definition: "The published standard retail price for a hotel room before any discounts or negotiated rates are applied.", cluster: "Hospitality" },

  // ============================================================
  // BUSINESS MANAGEMENT – additional terms to reach 80
  // ============================================================
  { term: "Span of Management", definition: "The number of subordinates a manager can effectively supervise; also called span of control.", cluster: "Business Management" },
  { term: "Centralization", definition: "A management structure in which decision-making authority is concentrated at the top levels of the hierarchy.", cluster: "Business Management" },
  { term: "Decentralization", definition: "A management structure in which decision-making authority is distributed to lower levels of the organization.", cluster: "Business Management" },
  { term: "Formal Organization", definition: "The official structure of an organization with clearly defined roles, responsibilities, and reporting relationships.", cluster: "Business Management" },
  { term: "Informal Organization", definition: "The network of personal and social relationships that develop naturally among people in an organization.", cluster: "Business Management" },
  { term: "Goal Setting (Management)", definition: "The process of establishing specific, measurable, achievable, relevant, and time-bound (SMART) objectives to guide employee performance.", cluster: "Business Management" },
  { term: "Management by Objectives (MBO)", definition: "A performance management approach where managers and employees jointly set objectives and use them to evaluate performance.", cluster: "Business Management" },
  { term: "Gantt Chart", definition: "A bar chart used in project management to illustrate a project schedule, showing tasks against a timeline.", cluster: "Business Management" },
  { term: "Critical Path Method (CPM)", definition: "A project management technique that identifies the longest sequence of dependent tasks to determine the minimum project duration.", cluster: "Business Management" },
  { term: "Agile Management", definition: "A flexible, iterative approach to project and product management that emphasizes collaboration, adaptability, and incremental delivery.", cluster: "Business Management" },
  { term: "Outsourcing", definition: "The practice of hiring an external company or individual to perform services or create goods that traditionally were performed in-house.", cluster: "Business Management" },
  { term: "Downsizing", definition: "The deliberate reduction of an organization's workforce to cut costs and improve efficiency.", cluster: "Business Management" },
  { term: "Mergers and Acquisitions (M&A)", definition: "Transactions in which the ownership of companies or their operating units are transferred or consolidated with other entities.", cluster: "Business Management" },
  { term: "Corporate Governance", definition: "The system of rules, practices, and processes by which a company is directed and controlled, balancing interests of stakeholders.", cluster: "Business Management" },
  { term: "Balanced Scorecard", definition: "A strategic planning and management system used to align business activities to the vision and strategy of the organization across financial, customer, process, and learning dimensions.", cluster: "Business Management" },
  { term: "SMART Goals", definition: "An acronym for goal-setting criteria: Specific, Measurable, Achievable, Relevant, and Time-bound.", cluster: "Business Management" },
  { term: "Span of Coordination", definition: "The degree to which different departments or units within an organization work together and share information.", cluster: "Business Management" },
  { term: "Diversity and Inclusion (D&I)", definition: "Organizational policies and practices that promote representation of people of different backgrounds and create equitable, welcoming environments.", cluster: "Business Management" },

  // ============================================================
  // ENTREPRENEURSHIP – additional terms to reach 70
  // ============================================================
  { term: "Market Validation", definition: "The process of testing whether a business idea has sufficient demand before investing significant resources in development.", cluster: "Entrepreneurship" },
  { term: "Customer Persona", definition: "A fictional representation of an ideal customer based on market research and real data about existing customers.", cluster: "Entrepreneurship" },
  { term: "Go-to-Market Strategy", definition: "An action plan specifying how a company will reach target customers and achieve competitive advantage when launching a product.", cluster: "Entrepreneurship" },
  { term: "Product-Market Fit", definition: "The degree to which a product satisfies a strong market demand, indicating the business is ready to scale.", cluster: "Entrepreneurship" },
  { term: "Churn Rate", definition: "The percentage of customers who stop using a product or cancel a subscription within a given time period.", cluster: "Entrepreneurship" },
  { term: "Freemium Model", definition: "A business model offering basic services for free while charging for premium features or upgrades.", cluster: "Entrepreneurship" },
  { term: "Subscription Business Model", definition: "A revenue model where customers pay a recurring fee at regular intervals to access a product or service.", cluster: "Entrepreneurship" },
  { term: "Net Promoter Score (NPS) – Entrepreneurship", definition: "A measure of customer loyalty and likelihood to recommend, used by startups to gauge product-market satisfaction.", cluster: "Entrepreneurship" },

  // ============================================================
  // PERSONAL FINANCE – additional terms to reach 70
  // ============================================================
  { term: "Withholding Tax", definition: "The portion of an employee's wages withheld by the employer and sent directly to the government as partial payment of income tax.", cluster: "Finance" },
  { term: "Flexible Spending Account (FSA)", definition: "An employer-sponsored account that allows employees to set aside pre-tax dollars for eligible medical or dependent care expenses.", cluster: "Finance" },
  { term: "Health Savings Account (HSA)", definition: "A tax-advantaged savings account for individuals with high-deductible health plans, used for qualified medical expenses.", cluster: "Finance" },
  { term: "Overdraft", definition: "A deficit in a bank account caused by drawing more money than the account holds, often resulting in a fee.", cluster: "Finance" },
  { term: "Wire Transfer", definition: "An electronic transfer of funds from one bank account or institution to another, domestically or internationally.", cluster: "Finance" },
  { term: "Collateral", definition: "An asset pledged by a borrower to secure a loan; the lender can seize it if the borrower defaults.", cluster: "Finance" },
  { term: "Grace Period", definition: "A period after a payment due date during which a payment can be made without penalty, often applied to credit cards.", cluster: "Finance" },
];
