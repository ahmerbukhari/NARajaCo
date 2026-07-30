import { 
  Scale, 
  LineChart, 
  ShieldCheck, 
  Users, 
  Workflow,
  BookOpen,
  ClipboardCheck,
  Factory,
  ShoppingCart,
  Zap,
  Landmark,
  Building2,
  Stethoscope,
  PieChart,
  MonitorSmartphone,
  Film
} from "lucide-react";

export const services = [
  {
    id: "tax-advisory",
    name: "Tax Advisory",
    slug: "tax-advisory",
    shortDescription: "Tax planning and compliance guidance to minimize liabilities and maximize tax efficiency.",
    fullDescription: [
      "NARCO specializes in tax planning and advisory services in Pakistan, delivering substantial tax savings, penalty waivers, and rebates to clients across key sectors. With an in-depth understanding of tax regulations, our team identifies opportunities to minimize liabilities and maximize savings, ensuring compliance while safeguarding client interests.",
      "Our expertise has proven particularly beneficial for clients in the development sector, NGOs, IT, and telecom. NARCO provides tailored strategies that align with each client's unique financial and regulatory context, enabling them to achieve optimal financial outcomes. By proactively managing tax obligations, we support our clients' growth and financial health in a dynamic regulatory environment."
    ],
    keyOfferings: [
      "Tax planning and advisory aligned with Pakistan's tax regulations",
      "Penalty waivers, rebates, and refund claims",
      "Identification of savings opportunities to minimize liabilities",
      "Compliance management that safeguards client interests",
      "Sector strategies for the development sector, NGOs, IT, and telecom",
      "Proactive management of ongoing tax obligations"
    ],
    icon: Scale,
    relatedIndustries: ["financial-services", "private-equity", "consumer-retail"]
  },
  {
    id: "accounting-bookkeeping",
    name: "Accounting & Bookkeeping",
    slug: "accounting-and-bookkeeping",
    shortDescription: "Streamline financial management, ensuring accuracy, compliance, and valuable insights for strategic decision-making.",
    fullDescription: [
      "NARCO offers comprehensive bookkeeping services, available both onsite and offsite to accommodate diverse client needs. Our services are tailored to ensure accuracy, transparency, and compliance with financial standards, allowing clients to maintain clear and organized financial records.",
      "By leveraging our expertise, clients benefit from efficient management of their financial data, freeing them to focus on core business activities. NARCO's flexible approach to bookkeeping — whether integrated within client offices or managed remotely — ensures seamless record-keeping, timely reporting, and adaptability to client-specific accounting processes."
    ],
    keyOfferings: [
      "Onsite and offsite bookkeeping to suit your operating model",
      "Accurate, transparent records aligned with financial standards",
      "Day-to-day management of financial data and ledgers",
      "Timely management and statutory reporting",
      "Adaptation to client-specific accounting processes",
      "Organized records that free your team to focus on core operations"
    ],
    icon: BookOpen,
    relatedIndustries: ["consumer-retail", "technology", "life-sciences"]
  },
  {
    id: "external-audits",
    name: "External Audits",
    slug: "external-audits",
    shortDescription: "Independent and transparent reporting to sustain stakeholders' trust.",
    fullDescription: [
      "NARCO delivers external audit services with a commitment to adding value beyond compliance. Our audit approach identifies areas for operational and financial improvements, offering clients actionable recommendations that enhance business performance and resilience.",
      "Beyond reporting, NARCO collaborates closely with clients to ensure they can effectively implement suggested improvements. By focusing on practical, client-specific enhancements, we aim to strengthen financial integrity and optimize operations, positioning our clients for sustainable growth and long-term success in an increasingly competitive environment."
    ],
    keyOfferings: [
      "Independent statutory audit and transparent reporting",
      "Identification of operational and financial improvement areas",
      "Actionable, client-specific recommendations",
      "Collaborative support implementing agreed improvements",
      "Strengthened financial integrity and control environment",
      "Assurance that sustains stakeholder trust"
    ],
    icon: ClipboardCheck,
    relatedIndustries: ["financial-services", "government-infrastructure", "life-sciences"]
  },
  {
    id: "internal-audit",
    name: "Internal Audit",
    slug: "internal-audit",
    shortDescription: "Risk management and internal controls to safeguard assets and enhance operational efficiency.",
    fullDescription: [
      "NARCO offers comprehensive internal audit services that align operations, policies, and strategies with organizational goals. Our audit approach is designed to identify areas for enhancement across processes, people, and technology, enabling organizations to drive efficiency and achieve objectives more effectively.",
      "By focusing on operational realignment and improvement, we support our clients in optimizing resource utilization, strengthening control frameworks, and fostering a culture of continuous improvement. NARCO is dedicated to providing insights that go beyond compliance, empowering organizations to achieve their strategic vision with agility and resilience."
    ],
    keyOfferings: [
      "Alignment of operations, policies, and strategy with organizational goals",
      "Improvement opportunities across process, people, and technology",
      "Operational realignment that optimizes resource utilization",
      "Stronger control frameworks",
      "Insights that go beyond compliance",
      "Support for a culture of continuous improvement"
    ],
    icon: ShieldCheck,
    relatedIndustries: ["financial-services", "government-infrastructure", "advanced-manufacturing"]
  },
  {
    id: "financial-planning-analysis",
    name: "Financial Planning & Analysis (FP&A)",
    slug: "financial-planning-and-analysis",
    shortDescription: "Support budgeting, forecasting, and performance analysis, empowering data-driven decision-making and financial agility for growth.",
    fullDescription: [
      "NARCO offers specialized FP&A support with a team of seasoned financial experts equipped to guide organizations through acquisition, investment, budgeting, and strategic growth planning. Our professionals bring vast experience and top-tier qualifications to help clients make informed financial decisions that drive sustainable growth.",
      "NARCO provides a flexible strategic financial advisory service, ideal for setting up or stabilizing finance functions. This service enables businesses to access executive-level financial expertise without the full-time commitment, allowing for efficient setup, enhanced financial controls, and strategic improvements. NARCO's tailored FP&A solutions empower organizations to streamline their finance operations, maximize investment potential, and achieve robust, data-driven growth outcomes."
    ],
    keyOfferings: [
      "Acquisition and investment decision support",
      "Budgeting and strategic growth planning",
      "Executive-level financial expertise without a full-time commitment",
      "Setup and stabilization of finance functions",
      "Enhanced financial controls",
      "Data-driven growth and investment optimization"
    ],
    icon: LineChart,
    relatedIndustries: ["private-equity", "financial-services", "energy-resources"]
  },
  {
    id: "people-workforce",
    name: "People & Workforce",
    slug: "people-and-workforce",
    shortDescription: "Workforce strategy, talent advisory, and organizational design to build resilient, high-performing teams.",
    fullDescription: [
      "NARCO offers tailored secondment and outsourcing services that help clients manage workforce needs while minimizing associated risks and liabilities. With a broad talent pool, NARCO provides access to a diverse range of skilled professionals, from junior to strategic roles, across essential functions such as HR, IT, finance and accounts, Quality, Health, Safety, and Environment (QHSE), and procurement.",
      "Our flexible resource model allows organizations to address dynamic operational demands without the need for long-term hiring commitments, ensuring access to qualified expertise precisely when needed. NARCO's approach simplifies workforce management, allowing clients to focus on their core priorities and strategic goals with the confidence that skilled support is available to meet their requirements seamlessly and efficiently."
    ],
    keyOfferings: [
      "Secondment and outsourcing of skilled professionals",
      "Talent from junior through to strategic roles",
      "Coverage across HR, IT, finance and accounts, QHSE, and procurement",
      "Flexible resource models without long-term hiring commitments",
      "Reduced workforce risks and liabilities",
      "On-demand expertise matched to operational peaks"
    ],
    icon: Users,
    relatedIndustries: ["life-sciences", "consumer-retail", "media-entertainment"]
  },
  {
    id: "digital-transformation",
    name: "Digital Transformation",
    slug: "digital-transformation",
    shortDescription: "Transformation as a service to optimize your solutions as per business needs and industry best practices.",
    fullDescription: [
      "NARCO offers comprehensive digitalization services, including implementation, support, post-implementation review, and process reengineering, designed to help organizations respond effectively to evolving business needs. With expertise spanning leading ERP platforms such as Oracle, SAP, MS Dynamics, QuickBooks, and tailored custom solutions, NARCO ensures seamless integrations that align with clients' strategic goals.",
      "Our approach emphasizes business process mapping, enhancing organizational alignment and operational efficiency to support accelerated goal achievement. NARCO's team collaborates closely with clients to understand unique business requirements, ensuring ERP solutions not only fit current needs but are adaptable to future challenges. Through thoughtful planning, execution, and optimization, we help organizations achieve a well-supported, agile ERP environment that drives sustainable growth."
    ],
    keyOfferings: [
      "ERP implementation and ongoing support",
      "Post-implementation review and process reengineering",
      "Oracle, SAP, MS Dynamics, QuickBooks, and custom solutions",
      "Business process mapping and organizational alignment",
      "Integrations aligned to strategic goals",
      "Optimization for an agile, future-ready ERP environment"
    ],
    icon: MonitorSmartphone,
    relatedIndustries: ["technology", "media-entertainment", "financial-services"]
  },
  {
    id: "shared-services",
    name: "Shared Services",
    slug: "shared-services",
    shortDescription: "Accurate and reliable maintenance of records at lower cost, enabling the business to focus on key operations.",
    fullDescription: [
      "NARCO offers shared services solutions that enable clients to reduce indirect costs while benefiting from streamlined processes and skilled resources. Our approach leverages industry best practices and competitive KPIs, guiding clients toward standardized, accurate, and efficient operations that enhance both productivity and cost-effectiveness. By centralizing support functions through NARCO's shared services, clients can access scalable expertise tailored to their specific operational needs, helping them achieve higher quality outcomes with fewer resources.",
      "This structured approach not only minimizes exposure to unnecessary costs but also aligns with clients' strategic objectives, ensuring resilient processes that support long-term success in a dynamic market."
    ],
    keyOfferings: [
      "Centralization of support functions",
      "Reduction of indirect costs",
      "Industry best practices and competitive KPIs",
      "Standardized, accurate, and efficient processing",
      "Scalable expertise matched to operational needs",
      "Resilient processes aligned to strategic objectives"
    ],
    icon: Workflow,
    relatedIndustries: ["consumer-retail", "advanced-manufacturing", "technology"]
  },
  {
    id: "governance",
    name: "Governance",
    slug: "governance",
    shortDescription: "Policy to process implementation and compliance to provide better control and reduced risk.",
    fullDescription: [
      "NARCO specializes in business process governance, offering clients comprehensive support in implementing policies and processes that align with their strategic objectives. Our services encompass effective project governance, ensuring that initiatives are managed efficiently and delivered on time. We facilitate the adoption of best practices through structured policy and process frameworks, empowering organizations to enhance operational effectiveness and achieve their goals.",
      "By prioritizing governance and accountability, NARCO helps organizations navigate complexities, foster collaboration, and drive continuous improvement, ultimately contributing to their long-term success and resilience in a competitive landscape."
    ],
    keyOfferings: [
      "Business process governance frameworks",
      "Policy and process implementation aligned to strategy",
      "Project governance and on-time delivery",
      "Structured adoption of best practices",
      "Accountability and collaboration mechanisms",
      "Continuous improvement reviews"
    ],
    icon: Landmark,
    relatedIndustries: ["government-infrastructure", "financial-services", "energy-resources"]
  }

];

export const industries = [
  {
    id: "advanced-manufacturing",
    name: "Advanced Manufacturing & Mobility",
    slug: "advanced-manufacturing",
    shortDescription: "Solutions for modern manufacturing, automotive, and transportation sectors.",
    fullDescription: "The manufacturing and mobility sectors are undergoing rapid transformation driven by automation and shifting supply chains. We provide strategic guidance on operational efficiency, digital integration, and regulatory compliance to help you stay ahead of the curve.",
    icon: Factory,
    relatedServices: ["digital-transformation", "governance", "external-audits"]
  },
  {
    id: "consumer-retail",
    name: "Consumer & Retail",
    slug: "consumer-retail",
    shortDescription: "Navigating changing consumer behaviors and retail landscape transformations.",
    fullDescription: "In a rapidly evolving retail environment, understanding consumer behavior is critical. We help consumer brands and retailers optimize their supply chains, enhance customer experiences, and navigate complex tax and regulatory requirements.",
    icon: ShoppingCart,
    relatedServices: ["tax-advisory", "people-and-workforce", "accounting-and-bookkeeping"]
  },
  {
    id: "energy-resources",
    name: "Energy & Resources",
    slug: "energy-resources",
    shortDescription: "Strategic advisory for energy transition, utilities, and natural resources.",
    fullDescription: "The energy sector faces unprecedented challenges and opportunities in the transition to sustainability. We offer specialized advisory in ESG compliance, operational optimization, and financial management for energy and resource companies.",
    icon: Zap,
    relatedServices: ["governance", "financial-planning-and-analysis", "internal-audit"]
  },
  {
    id: "financial-services",
    name: "Financial Services",
    slug: "financial-services",
    shortDescription: "Comprehensive support for banking, insurance, and asset management firms.",
    fullDescription: "Financial institutions operate in a highly regulated and competitive environment. Our deep industry expertise helps banks, insurers, and asset managers navigate regulatory changes, manage risk, and drive digital innovation.",
    icon: Landmark,
    relatedServices: ["external-audits", "tax-advisory", "governance"]
  },
  {
    id: "government-infrastructure",
    name: "Government & Infrastructure",
    slug: "government-infrastructure",
    shortDescription: "Public sector consulting and large-scale infrastructure project advisory.",
    fullDescription: "We partner with government entities and infrastructure developers to deliver public value. Our services include project finance advisory, operational efficiency consulting, and rigorous audit services for public sector organizations.",
    icon: Building2,
    relatedServices: ["shared-services", "external-audits", "financial-planning-and-analysis"]
  },
  {
    id: "life-sciences",
    name: "Life Sciences & Health Care",
    slug: "life-sciences",
    shortDescription: "Navigating healthcare regulations, pharmaceuticals, and medical technology.",
    fullDescription: "The healthcare and life sciences sectors require specialized knowledge to navigate complex regulations and rapid innovation. We provide strategic, financial, and operational advisory to healthcare providers, pharma, and medtech companies.",
    icon: Stethoscope,
    relatedServices: ["internal-audit", "people-and-workforce", "accounting-and-bookkeeping"]
  },
  {
    id: "private-equity",
    name: "Private Equity",
    slug: "private-equity",
    shortDescription: "End-to-end advisory for PE firms, from due diligence to portfolio optimization.",
    fullDescription: "We support private equity firms throughout the investment lifecycle. From pre-deal due diligence and valuation to post-deal integration and portfolio company optimization, we help maximize returns and manage risk.",
    icon: PieChart,
    relatedServices: ["governance", "financial-planning-and-analysis", "tax-advisory"]
  },
  {
    id: "technology",
    name: "Technology & Telecommunication",
    slug: "technology",
    shortDescription: "Driving growth and innovation for tech companies and telecom providers.",
    fullDescription: "In the fast-paced tech and telecom sectors, agility is key. We help technology companies scale operations, manage complex tax structures, and leverage data analytics to drive sustainable growth and innovation.",
    icon: MonitorSmartphone,
    relatedServices: ["digital-transformation", "shared-services", "internal-audit"]
  },
  {
    id: "media-entertainment",
    name: "Media & Entertainment",
    slug: "media-entertainment",
    shortDescription: "Strategic guidance for media, gaming, and entertainment organizations.",
    fullDescription: "The media landscape is constantly shifting with new digital platforms and consumer habits. We provide strategic advisory, workforce planning, and digital transformation services to help media and entertainment companies thrive.",
    icon: Film,
    relatedServices: ["digital-transformation", "accounting-and-bookkeeping", "people-and-workforce"]
  }
];

