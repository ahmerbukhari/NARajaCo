import { 
  Scale, 
  Briefcase, 
  LineChart, 
  BrainCircuit, 
  Leaf, 
  ShieldCheck, 
  Lightbulb, 
  Users, 
  Cloud,
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
    id: "tax-legal",
    name: "Tax & Legal",
    slug: "tax-and-legal",
    shortDescription: "Comprehensive tax planning and legal compliance services for businesses of all sizes.",
    fullDescription: "Our Tax & Legal practice provides strategic guidance to help you navigate complex regulatory environments. We offer corporate tax planning, indirect tax advisory, legal structuring, and compliance services to minimize risk and optimize your financial position.",
    icon: Scale,
    relatedIndustries: ["financial-services", "private-equity", "consumer-retail"]
  },
  {
    id: "consulting",
    name: "Consulting",
    slug: "consulting",
    shortDescription: "Strategic consulting to drive operational excellence and business transformation.",
    fullDescription: "We partner with organizations to solve their most complex challenges. Our consulting services cover strategy development, operational improvement, supply chain optimization, and organizational design to drive sustainable growth and competitive advantage.",
    icon: Briefcase,
    relatedIndustries: ["advanced-manufacturing", "government-infrastructure", "technology"]
  },
  {
    id: "financial-management",
    name: "Financial Management",
    slug: "financial-management",
    shortDescription: "Expert financial oversight, reporting, and strategic financial planning.",
    fullDescription: "Optimize your financial operations with our comprehensive management services. We provide CFO advisory, financial modeling, cash flow management, and performance reporting to ensure your business has the financial clarity needed for strategic decision-making.",
    icon: LineChart,
    relatedIndustries: ["private-equity", "financial-services", "energy-resources"]
  },
  {
    id: "ai-analytics",
    name: "AI & Analytics",
    slug: "ai-and-analytics",
    shortDescription: "Data-driven insights and artificial intelligence solutions for modern enterprises.",
    fullDescription: "Unlock the power of your data. Our AI & Analytics team helps you implement advanced data strategies, predictive modeling, and machine learning solutions to automate processes, uncover hidden opportunities, and drive intelligent business outcomes.",
    icon: BrainCircuit,
    relatedIndustries: ["technology", "media-entertainment", "life-sciences"]
  },
  {
    id: "esg",
    name: "ESG",
    slug: "esg",
    shortDescription: "Environmental, Social, and Governance strategy and reporting.",
    fullDescription: "Navigate the transition to a sustainable future. We assist organizations in developing robust ESG frameworks, conducting sustainability audits, ensuring regulatory compliance, and integrating sustainable practices into core business strategies.",
    icon: Leaf,
    relatedIndustries: ["energy-resources", "advanced-manufacturing", "consumer-retail"]
  },
  {
    id: "audit-assurance",
    name: "Audit and Assurance",
    slug: "audit-and-assurance",
    shortDescription: "Independent audit services to build trust and ensure financial integrity.",
    fullDescription: "Deliver confidence to your stakeholders. Our audit and assurance services provide rigorous, independent assessments of your financial statements, internal controls, and risk management processes, ensuring transparency and regulatory compliance.",
    icon: ShieldCheck,
    relatedIndustries: ["financial-services", "government-infrastructure", "life-sciences"]
  },
  {
    id: "advisory",
    name: "Advisory",
    slug: "advisory",
    shortDescription: "Specialized advisory for mergers, acquisitions, and corporate restructuring.",
    fullDescription: "Navigate critical business transitions with confidence. Our advisory services cover M&A due diligence, valuation, corporate restructuring, and capital raising, providing the strategic insights needed to maximize value and mitigate risk.",
    icon: Lightbulb,
    relatedIndustries: ["private-equity", "financial-services", "technology"]
  },
  {
    id: "people-workforce",
    name: "People & Workforce",
    slug: "people-and-workforce",
    shortDescription: "Human capital strategies, talent management, and organizational development.",
    fullDescription: "Your people are your greatest asset. We help you design effective workforce strategies, optimize talent acquisition and retention, manage change, and build high-performing cultures aligned with your business objectives.",
    icon: Users,
    relatedIndustries: ["life-sciences", "consumer-retail", "media-entertainment"]
  },
  {
    id: "cloud",
    name: "Cloud",
    slug: "cloud",
    shortDescription: "Cloud transformation, migration, and digital infrastructure optimization.",
    fullDescription: "Accelerate your digital transformation. Our cloud services guide you through strategy, migration, and optimization, ensuring secure, scalable, and cost-effective digital infrastructure that supports innovation and agility.",
    icon: Cloud,
    relatedIndustries: ["technology", "media-entertainment", "financial-services"]
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
    relatedServices: ["consulting", "esg", "audit-and-assurance"]
  },
  {
    id: "consumer-retail",
    name: "Consumer & Retail",
    slug: "consumer-retail",
    shortDescription: "Navigating changing consumer behaviors and retail landscape transformations.",
    fullDescription: "In a rapidly evolving retail environment, understanding consumer behavior is critical. We help consumer brands and retailers optimize their supply chains, enhance customer experiences, and navigate complex tax and regulatory requirements.",
    icon: ShoppingCart,
    relatedServices: ["tax-legal", "people-workforce", "ai-analytics"]
  },
  {
    id: "energy-resources",
    name: "Energy & Resources",
    slug: "energy-resources",
    shortDescription: "Strategic advisory for energy transition, utilities, and natural resources.",
    fullDescription: "The energy sector faces unprecedented challenges and opportunities in the transition to sustainability. We offer specialized advisory in ESG compliance, operational optimization, and financial management for energy and resource companies.",
    icon: Zap,
    relatedServices: ["esg", "financial-management", "consulting"]
  },
  {
    id: "financial-services",
    name: "Financial Services",
    slug: "financial-services",
    shortDescription: "Comprehensive support for banking, insurance, and asset management firms.",
    fullDescription: "Financial institutions operate in a highly regulated and competitive environment. Our deep industry expertise helps banks, insurers, and asset managers navigate regulatory changes, manage risk, and drive digital innovation.",
    icon: Landmark,
    relatedServices: ["audit-and-assurance", "tax-legal", "advisory"]
  },
  {
    id: "government-infrastructure",
    name: "Government & Infrastructure",
    slug: "government-infrastructure",
    shortDescription: "Public sector consulting and large-scale infrastructure project advisory.",
    fullDescription: "We partner with government entities and infrastructure developers to deliver public value. Our services include project finance advisory, operational efficiency consulting, and rigorous audit services for public sector organizations.",
    icon: Building2,
    relatedServices: ["consulting", "audit-and-assurance", "financial-management"]
  },
  {
    id: "life-sciences",
    name: "Life Sciences & Health Care",
    slug: "life-sciences",
    shortDescription: "Navigating healthcare regulations, pharmaceuticals, and medical technology.",
    fullDescription: "The healthcare and life sciences sectors require specialized knowledge to navigate complex regulations and rapid innovation. We provide strategic, financial, and operational advisory to healthcare providers, pharma, and medtech companies.",
    icon: Stethoscope,
    relatedServices: ["audit-and-assurance", "people-workforce", "ai-analytics"]
  },
  {
    id: "private-equity",
    name: "Private Equity",
    slug: "private-equity",
    shortDescription: "End-to-end advisory for PE firms, from due diligence to portfolio optimization.",
    fullDescription: "We support private equity firms throughout the investment lifecycle. From pre-deal due diligence and valuation to post-deal integration and portfolio company optimization, we help maximize returns and manage risk.",
    icon: PieChart,
    relatedServices: ["advisory", "financial-management", "tax-legal"]
  },
  {
    id: "technology",
    name: "Technology & Telecommunication",
    slug: "technology",
    shortDescription: "Driving growth and innovation for tech companies and telecom providers.",
    fullDescription: "In the fast-paced tech and telecom sectors, agility is key. We help technology companies scale operations, manage complex tax structures, and leverage data analytics to drive sustainable growth and innovation.",
    icon: MonitorSmartphone,
    relatedServices: ["cloud", "ai-analytics", "consulting"]
  },
  {
    id: "media-entertainment",
    name: "Media & Entertainment",
    slug: "media-entertainment",
    shortDescription: "Strategic guidance for media, gaming, and entertainment organizations.",
    fullDescription: "The media landscape is constantly shifting with new digital platforms and consumer habits. We provide strategic advisory, workforce planning, and digital transformation services to help media and entertainment companies thrive.",
    icon: Film,
    relatedServices: ["ai-analytics", "cloud", "people-workforce"]
  }
];

