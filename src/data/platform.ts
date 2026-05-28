import {
  Activity,
  AlertTriangle,
  Bot,
  Braces,
  CheckCircle2,
  CircuitBoard,
  Code2,
  Component,
  Database,
  FileCode2,
  Gauge,
  GitBranch,
  GitPullRequest,
  Globe2,
  KeyRound,
  Layers3,
  LockKeyhole,
  Network,
  Radar,
  ScanSearch,
  SearchCheck,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap
} from "lucide-react";
import type { FeatureCard, Issue, ScoreMetric } from "@/types/platform";

export const trustedLogos = [
  "Cursor",
  "Claude",
  "Lovable",
  "Bolt",
  "Vercel",
  "Linear",
  "Raycast",
  "Supabase",
  "Neon",
  "Railway",
  "Clerk",
  "Resend"
];

export const issueLabels = [
  "Duplicate Logic",
  "Weak Auth",
  "Circular Dependency",
  "Missing Metadata",
  "Large Bundle",
  "SEO Issues",
  "Broken API Boundary",
  "Poor Caching"
];

export const problemSignals = [
  "Duplicated business rules",
  "Oversized client components",
  "Generated service drift",
  "Weak auth boundaries",
  "Missing database indexes",
  "No cache ownership",
  "Unclear folder structure",
  "SEO metadata gaps"
];

export const terminalLines = [
  { label: "Routes indexed", status: "completed" },
  { label: "Architecture graph generated", status: "completed" },
  { label: "Dependency analysis completed", status: "completed" },
  { label: "Security review completed", status: "completed" },
  { label: "SEO issues detected", status: "warning" },
  { label: "Duplicate logic found", status: "warning" },
  { label: "Production readiness model compiled", status: "completed" }
];

export const featureCards: FeatureCard[] = [
  {
    title: "AI Architecture Analysis",
    body: "Map routes, APIs, auth, data models, services, dependencies, and ownership boundaries from the full repository.",
    icon: Network
  },
  {
    title: "Production Readiness Score",
    body: "Turn code quality into clear scores for architecture, security, scalability, SEO, frontend quality, and backend validation.",
    icon: Gauge
  },
  {
    title: "Technical Debt Detection",
    body: "Find duplicated logic, weak abstractions, folder drift, oversized files, hidden coupling, and AI-generated repetition.",
    icon: AlertTriangle
  },
  {
    title: "Scalability Insights",
    body: "Expose synchronous bottlenecks, missing queues, expensive routes, cache gaps, and data access that will fail at scale.",
    icon: Activity
  },
  {
    title: "SEO Intelligence",
    body: "Detect missing metadata, canonical gaps, structured data issues, render bottlenecks, and page-level indexing risks.",
    icon: Globe2
  },
  {
    title: "Backend Validation",
    body: "Review route handlers, API contracts, service layers, database access, schema design, and background work boundaries.",
    icon: ServerCog
  },
  {
    title: "Security Review",
    body: "Inspect auth flows, authorization checks, secrets exposure, webhook verification, and abuse-prone endpoints.",
    icon: ShieldCheck
  },
  {
    title: "Repo Intelligence Graph",
    body: "Visualize file relationships, dependency pressure, API flow, high-risk modules, and architecture domains.",
    icon: Workflow
  },
  {
    title: "AI Refactor Suggestions",
    body: "Generate sequenced cleanup plans prioritized by impact, blast radius, effort, and production value.",
    icon: Sparkles
  },
  {
    title: "Repo Chat",
    body: "Ask architecture questions with repo context instead of treating your codebase like a generic chatbot prompt.",
    icon: Bot
  },
  {
    title: "Dependency Analysis",
    body: "Find circular imports, risky package weight, dependency fan-out, cross-boundary leaks, and stale library usage.",
    icon: GitBranch
  },
  {
    title: "Developer Onboarding Docs",
    body: "Create system explanations, README updates, architecture notes, and launch checklists from the current code snapshot.",
    icon: FileCode2
  }
];

export const dashboardScores: ScoreMetric[] = [
  { label: "Architecture Score", value: 88, detail: "Clear boundaries with service ownership still consolidating." },
  { label: "Security Score", value: 81, detail: "Strong auth base, missing rate limits and webhook checks." },
  { label: "Scalability Score", value: 74, detail: "Expensive repository work needs queues and cache policy." },
  { label: "SEO Score", value: 79, detail: "Metadata coverage is partial across product pages." },
  { label: "Frontend Quality", value: 84, detail: "Component system is clean, but bundles need trimming." },
  { label: "Backend Validation", value: 77, detail: "Route handlers need tighter service boundaries." }
];

export const issueFeed: Issue[] = [
  { title: "Repeated auth middleware in route handlers", area: "Auth", severity: "high" },
  { title: "Repository imports run inside request path", area: "API", severity: "critical" },
  { title: "Missing metadata on launch pages", area: "SEO", severity: "medium" },
  { title: "Dashboard graph pulls heavy code too early", area: "Frontend", severity: "medium" },
  { title: "Business logic copied across billing modules", area: "Architecture", severity: "high" }
];

export const heatmapCells = [
  24, 31, 44, 71, 65, 38, 18, 22, 49, 83, 76, 42, 37, 12, 29, 58, 91, 88, 63, 41, 35, 17, 40, 67,
  94, 72, 56, 31, 26, 21, 52, 78, 84, 69, 46, 30, 19, 33, 61, 89, 81, 54
];

export const graphNodes = [
  { id: "ui", label: "Frontend", icon: Component, x: 8, y: 48 },
  { id: "routes", label: "App Router", icon: Layers3, x: 28, y: 25 },
  { id: "auth", label: "Auth", icon: KeyRound, x: 45, y: 62 },
  { id: "api", label: "API Layer", icon: Braces, x: 54, y: 25 },
  { id: "services", label: "Services", icon: CircuitBoard, x: 70, y: 50 },
  { id: "db", label: "Database", icon: Database, x: 88, y: 26 },
  { id: "seo", label: "SEO", icon: SearchCheck, x: 80, y: 74 }
];

export const chatPrompts = [
  "How does authentication work?",
  "Which components are too large?",
  "Why is this route slow?",
  "What hurts SEO performance?",
  "Where is duplicate business logic?",
  "What should be refactored first?"
];

export const workflowSteps = [
  {
    step: "01",
    title: "Import repository.",
    body: "Connect a private repo or upload a ZIP. The frontend demo uses mock data while the product story stays production focused.",
    icon: GitPullRequest
  },
  {
    step: "02",
    title: "AI maps architecture.",
    body: "The platform builds a graph of routes, services, dependencies, data models, auth flows, SEO setup, and generated-code patterns.",
    icon: ScanSearch
  },
  {
    step: "03",
    title: "Get production-grade recommendations.",
    body: "Receive risk-ranked fixes for architecture, security, scalability, SEO, frontend bundles, backend structure, and maintainability.",
    icon: CheckCircle2
  }
];

export const testimonials = [
  {
    name: "Maya Raman",
    role: "Founder, LaunchLayer",
    quote:
      "ExplainMyCode AI gave us the architecture review we usually postpone. We kept the speed of AI coding without inheriting a fragile system."
  },
  {
    name: "Leo Martins",
    role: "Staff Engineer, AtlasPay",
    quote:
      "The graph made our generated backend understandable. Duplicate policy checks and missing indexes turned into focused tickets in one review."
  },
  {
    name: "Priya Shah",
    role: "VP Product, Northstar",
    quote:
      "Before investor demos, we run a readiness scan. It tells us what will look weak to a technical buyer before the conversation happens."
  },
  {
    name: "Noor Khan",
    role: "Security Engineer, Flux",
    quote:
      "The findings were not generic. It pointed to auth drift, missing rate limits, and webhook validation gaps with clear context."
  }
];

export const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    description: "For builders validating a single AI-generated prototype.",
    features: ["1 repository scan", "Readiness summary", "Issue preview", "Mock repo chat"],
    cta: "Start scan"
  },
  {
    name: "Pro",
    price: "$29",
    description: "For developers shipping production apps with AI coding tools.",
    features: ["Unlimited scans", "Architecture graph", "Security and SEO review", "Refactor suggestions"],
    cta: "Analyze repository",
    highlighted: true
  },
  {
    name: "Team",
    price: "$89",
    description: "For product teams that need shared architecture intelligence.",
    features: ["Team workspace", "Private repos", "Onboarding docs", "Launch readiness reports"],
    cta: "Open dashboard"
  }
];

export const faqs = [
  {
    question: "Can ExplainMyCode AI analyze private repositories?",
    answer:
      "Yes. The product is designed around private repositories, scoped imports, and secure workspace access. This frontend build uses mock data only."
  },
  {
    question: "Does it understand AI-generated code?",
    answer:
      "Yes. It looks for repeated logic, inconsistent patterns, oversized generated files, brittle abstractions, and drift common in AI-assisted builds."
  },
  {
    question: "Does it validate scalability?",
    answer:
      "Yes. It flags slow request paths, missing queues, weak cache ownership, expensive database patterns, and boundaries that will be hard to scale."
  },
  {
    question: "Can it check SEO?",
    answer:
      "Yes. It reviews metadata, canonical signals, structured data opportunities, route rendering strategy, and frontend performance risks."
  },
  {
    question: "Does it support frontend and backend code?",
    answer:
      "Yes. The platform story covers routes, components, APIs, auth, database models, services, dependencies, SEO, and deployment readiness."
  },
  {
    question: "How is the architecture score calculated?",
    answer:
      "Scores combine boundary clarity, dependency pressure, duplication, security posture, frontend quality, SEO coverage, scalability, and maintainability signals."
  }
];

export const dashboardNav = [
  { label: "Overview", icon: Gauge },
  { label: "Architecture", icon: Workflow },
  { label: "Technical Debt", icon: AlertTriangle },
  { label: "Security", icon: LockKeyhole },
  { label: "Repo Chat", icon: Bot },
  { label: "Launch Report", icon: Radar },
  { label: "Refactor Plan", icon: Code2 },
  { label: "Signals", icon: Zap }
];
