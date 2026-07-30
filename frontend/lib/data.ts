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
    shortDescription: "Transforming industries through smart, sustainable innovation.",
    fullDescription: [
      "NARCO partners with manufacturing and mobility leaders to navigate the complexities of Industry 4.0, digital transformation, and sustainable operations. From industrial automation to supply chain re-engineering, our services are designed to future-proof operations while reducing inefficiencies and costs.",
      "Our end-to-end solutions enable manufacturers to enhance productivity, boost innovation, and stay competitive in a rapidly evolving global ecosystem."
    ],
    capabilitiesIntro: "We support clients across automotive, aerospace, logistics, and high-tech sectors to:",
    capabilities: [
      "Implement digital manufacturing frameworks and smart factory models",
      "Streamline operations with process improvement and lean methodologies",
      "Optimize supply chain networks through data-driven insights",
      "Develop ESG-compliant manufacturing strategies",
      "Manage regulatory compliance across geographies"
    ],
    icon: Factory,
    relatedServices: ["digital-transformation", "governance", "external-audits"]
  },
  {
    id: "consumer-retail",
    name: "Consumer & Retail",
    slug: "consumer-retail",
    shortDescription: "Enabling customer-centric growth in a rapidly evolving market.",
    fullDescription: [
      "NARCO supports consumer-facing brands and retailers in responding to fast-changing market dynamics, evolving customer behaviors, and digital disruption. We provide strategic insights and operational support to help businesses enhance customer engagement, streamline supply chains, and adopt agile retail models.",
      "Whether it's adapting to e-commerce growth, sustainability expectations, or emerging technologies, we enable consumer businesses to stay ahead of the curve and build resilient, value-driven models."
    ],
    capabilitiesIntro: "Our services include:",
    capabilities: [
      "Customer journey transformation and personalization strategies",
      "Omnichannel retail planning and digital enablement",
      "Inventory and demand planning optimization",
      "Pricing, promotion, and merchandising analytics",
      "Risk mitigation, compliance, and operational controls"
    ],
    icon: ShoppingCart,
    relatedServices: ["tax-advisory", "people-and-workforce", "accounting-and-bookkeeping"]
  },
  {
    id: "energy-resources",
    name: "Energy & Resources",
    slug: "energy-resources",
    shortDescription: "Powering transitions with operational excellence and ESG foresight.",
    fullDescription: [
      "NARCO partners with energy producers, utilities, and resource-based enterprises to navigate the global transition toward cleaner, smarter, and more efficient operations. Our solutions are designed to help clients balance energy security with environmental responsibility while unlocking new sources of value.",
      "From upstream exploration to grid modernization and sustainable resource management, NARCO equips clients with the tools and insights to lead the future of energy."
    ],
    capabilitiesIntro: "We assist clients across conventional and renewable sectors to:",
    capabilities: [
      "Drive energy transition and decarbonization strategies",
      "Improve asset performance and lifecycle management",
      "Strengthen governance, risk, and regulatory compliance",
      "Deploy digital technologies for real-time operations and analytics",
      "Enhance ESG reporting and stakeholder transparency"
    ],
    icon: Zap,
    relatedServices: ["governance", "financial-planning-and-analysis", "internal-audit"]
  },
  {
    id: "financial-services",
    name: "Financial Services",
    slug: "financial-services",
    shortDescription: "Building agile, compliant, and tech-enabled financial futures.",
    fullDescription: [
      "NARCO works with banks, insurance providers, fintechs, and capital markets players to address the evolving demands of the financial sector. We help institutions navigate regulatory complexities, adopt transformative technologies, and build resilient, customer-centric models.",
      "In an environment shaped by innovation, competition, and scrutiny, NARCO enables financial institutions to remain agile, compliant, and growth-focused."
    ],
    capabilitiesIntro: "Our expertise supports clients in:",
    capabilities: [
      "Regulatory compliance, risk management, and internal controls",
      "Digital banking strategy and core system transformation",
      "Customer experience redesign and personalization",
      "Operational efficiency and cost optimization",
      "Cybersecurity, data governance, and fraud prevention"
    ],
    icon: Landmark,
    relatedServices: ["external-audits", "tax-advisory", "governance"]
  },
  {
    id: "government-infrastructure",
    name: "Government & Infrastructure",
    slug: "government-infrastructure",
    shortDescription: "Strengthening institutions, modernizing services, building impact.",
    fullDescription: [
      "NARCO collaborates with government bodies, public institutions, and infrastructure developers to improve service delivery, enhance governance, and enable large-scale infrastructure transformation. Our solutions are grounded in transparency, efficiency, and citizen-centered outcomes.",
      "Whether modernizing public systems or managing complex infrastructure programs, NARCO empowers governments to deliver sustainable and inclusive development."
    ],
    capabilitiesIntro: "We support the public sector in:",
    capabilities: [
      "Institutional capacity building and policy implementation",
      "Digital governance, automation, and e-service frameworks",
      "Infrastructure planning, project appraisal, and execution oversight",
      "Public-private partnership (PPP) strategy and risk management",
      "Fiscal governance, budgeting, and performance monitoring"
    ],
    icon: Building2,
    relatedServices: ["shared-services", "external-audits", "financial-planning-and-analysis"]
  },
  {
    id: "life-sciences",
    name: "Life Sciences & Health Care",
    slug: "life-sciences",
    shortDescription: "Driving innovation and patient-centered value in a regulated world.",
    fullDescription: [
      "NARCO partners with pharmaceutical companies, biotech firms, healthcare providers, and public health institutions to navigate regulatory landscapes, embrace digital health innovations, and optimize clinical and operational performance.",
      "In a sector where precision, trust, and agility are paramount, NARCO enables organizations to advance medical innovation while delivering better patient outcomes and maintaining regulatory excellence."
    ],
    capabilitiesIntro: "Our services are designed to support:",
    capabilities: [
      "Regulatory strategy and compliance with health authorities",
      "Clinical operations optimization and R&D transformation",
      "Patient-centric care models and digital health integration",
      "Cost efficiency in hospital and healthcare administration",
      "Supply chain management for medical products and devices"
    ],
    icon: Stethoscope,
    relatedServices: ["internal-audit", "people-and-workforce", "accounting-and-bookkeeping"]
  },
  {
    id: "private-equity",
    name: "Private Equity",
    slug: "private-equity",
    shortDescription: "Strategic insights to maximize value across the deal lifecycle.",
    fullDescription: [
      "NARCO partners with private equity firms to support value creation at every stage — from due diligence to operational transformation and exit readiness. With a sharp focus on strategic alignment and measurable performance, we help PE investors navigate complexity, mitigate risk, and accelerate returns.",
      "Whether backing growth, restructuring distressed assets, or preparing for a successful exit, NARCO delivers actionable insights to optimize investment outcomes."
    ],
    capabilitiesIntro: "We support firms in:",
    capabilities: [
      "Commercial, operational, and financial due diligence",
      "Post-deal integration and performance improvement",
      "Strategic cost transformation and value enhancement",
      "Portfolio company governance and reporting frameworks",
      "Exit planning, divestiture support, and IPO readiness"
    ],
    icon: PieChart,
    relatedServices: ["governance", "financial-planning-and-analysis", "tax-advisory"]
  },
  {
    id: "technology",
    name: "Technology & Telecommunication",
    slug: "technology",
    shortDescription: "Scaling innovation while securing tomorrow's digital world.",
    fullDescription: [
      "NARCO empowers technology and telecom companies to innovate at scale, navigate disruption, and lead in a hyper-connected digital economy. We help clients transform operating models, strengthen cybersecurity, and unlock growth through data, AI, and emerging technologies.",
      "In a landscape where speed and trust define success, NARCO enables tech and telecom leaders to operate with confidence and stay ahead of the curve."
    ],
    capabilitiesIntro: "Our support spans:",
    capabilities: [
      "Technology strategy, product development, and go-to-market execution",
      "Cloud transformation, infrastructure modernization, and platform scalability",
      "Cybersecurity, data privacy, and compliance frameworks",
      "Customer experience innovation and digital service delivery",
      "M&A strategy, post-merger integration, and global expansion planning"
    ],
    icon: MonitorSmartphone,
    relatedServices: ["digital-transformation", "shared-services", "internal-audit"]
  },
  {
    id: "media-entertainment",
    name: "Media & Entertainment",
    slug: "media-entertainment",
    shortDescription: "Monetizing content, engaging audiences, future-proofing media.",
    fullDescription: [
      "NARCO supports media houses, broadcasters, publishers, and digital content creators in transforming how content is created, delivered, and monetized. We bring strategic clarity and operational efficiency to an industry defined by constant evolution, shifting consumer behaviors, and digital disruption.",
      "From traditional media to emerging digital platforms, NARCO empowers entertainment businesses to stay relevant, scalable, and profitable in a rapidly changing ecosystem."
    ],
    capabilitiesIntro: "We offer solutions in:",
    capabilities: [
      "Content strategy, audience engagement, and platform optimization",
      "Revenue diversification through data-driven monetization models",
      "Intellectual property management and rights optimization",
      "Digital transformation of production and distribution workflows",
      "Compliance, risk management, and brand reputation support"
    ],
    icon: Film,
    relatedServices: ["digital-transformation", "accounting-and-bookkeeping", "people-and-workforce"]
  }

];

