import {
  Activity,
  AlertTriangle,
  Bot,
  BrainCircuit,
  CreditCard,
  Gauge,
  GitBranch,
  Globe2,
  KeyRound,
  LayoutDashboard,
  LockKeyhole,
  Radar,
  Settings,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";

// ─── Nav ────────────────────────────────────────────────────────────────────
export const sidebarNav = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Repositories", href: "/dashboard/repositories", icon: GitBranch },
  { label: "Architecture", href: "/dashboard/architecture", icon: Workflow },
  { label: "Issues", href: "/dashboard/issues", icon: AlertTriangle },
  { label: "Security", href: "/dashboard/security", icon: LockKeyhole },
  { label: "Performance", href: "/dashboard/performance", icon: Activity },
  { label: "SEO", href: "/dashboard/seo", icon: Globe2 },
  { label: "Repo Chat", href: "/dashboard/chat", icon: Bot },
  { label: "Scan", href: "/dashboard/scan", icon: Radar },
  { label: "Billing", href: "/dashboard/billing", icon: CreditCard },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

// ─── Repositories ────────────────────────────────────────────────────────────
export const mockRepos = [
  {
    id: "repo-1",
    name: "neon-commerce-ai",
    description: "AI-powered commerce platform with Stripe, Prisma, and Next.js App Router.",
    branch: "main",
    provider: "github",
    score: 88,
    files: 1248,
    issues: 14,
    lastScan: "2 hours ago",
    status: "completed",
    language: "TypeScript",
    stars: 342,
  },
  {
    id: "repo-2",
    name: "atlas-dashboard",
    description: "Internal analytics dashboard with real-time charts and role-based access.",
    branch: "main",
    provider: "github",
    score: 74,
    files: 892,
    issues: 22,
    lastScan: "1 day ago",
    status: "completed",
    language: "TypeScript",
    stars: 128,
  },
  {
    id: "repo-3",
    name: "launch-layer-api",
    description: "REST API backend with Express, PostgreSQL, and JWT authentication.",
    branch: "develop",
    provider: "github",
    score: 61,
    files: 456,
    issues: 31,
    lastScan: "3 days ago",
    status: "warning",
    language: "JavaScript",
    stars: 67,
  },
  {
    id: "repo-4",
    name: "flux-mobile-app",
    description: "React Native mobile app with Expo, Zustand, and offline-first architecture.",
    branch: "main",
    provider: "zip",
    score: 79,
    files: 634,
    issues: 9,
    lastScan: "5 hours ago",
    status: "completed",
    language: "TypeScript",
    stars: 0,
  },
];

// ─── Scores ──────────────────────────────────────────────────────────────────
export const overviewScores = [
  { label: "Architecture", value: 88, icon: Workflow, trend: "+4", color: "#2de29d" },
  { label: "Security", value: 81, icon: ShieldCheck, trend: "+2", color: "#38bdf8" },
  { label: "Performance", value: 74, icon: Zap, trend: "-1", color: "#f59e0b" },
  { label: "SEO", value: 79, icon: Globe2, trend: "+6", color: "#a78bfa" },
  { label: "Scalability", value: 72, icon: Activity, trend: "+3", color: "#fb923c" },
  { label: "AI Code Quality", value: 83, icon: BrainCircuit, trend: "+8", color: "#2de29d" },
];

// ─── Issues ──────────────────────────────────────────────────────────────────
export const mockIssues = [
  {
    id: "iss-1",
    title: "Repeated auth middleware in route handlers",
    area: "Architecture",
    severity: "high" as const,
    file: "app/api/repositories/[id]/route.ts",
    description: "Five route handlers duplicate workspace membership checks with slight variations.",
    recommendation: "Move authorization into a shared server policy helper.",
    impact: 82,
  },
  {
    id: "iss-2",
    title: "Missing compound index on chat messages",
    area: "Database",
    severity: "critical" as const,
    file: "prisma/schema.prisma",
    description: "Chat messages queried by project and created time without a compound index.",
    recommendation: "Add @@index([projectId, createdAt]) and backfill retention metadata.",
    impact: 94,
  },
  {
    id: "iss-3",
    title: "Oversized dashboard shell component",
    area: "Frontend",
    severity: "medium" as const,
    file: "features/dashboard/dashboard-shell.tsx",
    description: "Shell mixes navigation, keyboard state, billing badges, and project switcher.",
    recommendation: "Extract project switcher and sidebar command groups into isolated components.",
    impact: 61,
  },
  {
    id: "iss-4",
    title: "Client-only analysis chart bundle",
    area: "Performance",
    severity: "low" as const,
    file: "app/dashboard/overview/page.tsx",
    description: "Entire overview page forced into client bundle to support charts.",
    recommendation: "Keep page server-rendered and move only Recharts widgets into client components.",
    impact: 45,
  },
  {
    id: "iss-5",
    title: "Missing metadata on product pages",
    area: "SEO",
    severity: "medium" as const,
    file: "app/(shop)/product/[slug]/page.tsx",
    description: "Product pages lack OpenGraph tags, canonical URLs, and structured data.",
    recommendation: "Add generateMetadata export with og:image, og:title, and JSON-LD schema.",
    impact: 68,
  },
  {
    id: "iss-6",
    title: "No rate limiting on public API routes",
    area: "Security",
    severity: "high" as const,
    file: "app/api/analyze/route.ts",
    description: "Public analysis endpoint has no rate limiting, enabling abuse.",
    recommendation: "Add Upstash Redis rate limiting middleware before production.",
    impact: 88,
  },
];

// ─── Security ────────────────────────────────────────────────────────────────
export const securityAlerts = [
  { id: "sec-1", title: "No rate limiting on /api/analyze", severity: "high" as const, area: "API", status: "open" },
  { id: "sec-2", title: "Webhook signature not verified", severity: "critical" as const, area: "Webhooks", status: "open" },
  { id: "sec-3", title: "Session token not rotated on privilege change", severity: "medium" as const, area: "Auth", status: "open" },
  { id: "sec-4", title: "CORS wildcard on internal routes", severity: "high" as const, area: "API", status: "open" },
  { id: "sec-5", title: "Secrets in client-side environment variables", severity: "critical" as const, area: "Config", status: "resolved" },
];

export const authChecks = [
  { label: "OAuth provider configured", pass: true },
  { label: "Session expiry set", pass: true },
  { label: "CSRF protection enabled", pass: true },
  { label: "Rate limiting on auth routes", pass: false },
  { label: "Webhook signature verification", pass: false },
  { label: "Privilege escalation checks", pass: false },
];

// ─── Performance ─────────────────────────────────────────────────────────────
export const bundleMetrics = [
  { route: "/dashboard", size: "284 kB", gzip: "91 kB", status: "warning" },
  { route: "/dashboard/architecture", size: "512 kB", gzip: "164 kB", status: "critical" },
  { route: "/", size: "142 kB", gzip: "48 kB", status: "good" },
  { route: "/dashboard/chat", size: "198 kB", gzip: "63 kB", status: "good" },
  { route: "/dashboard/scan", size: "221 kB", gzip: "72 kB", status: "warning" },
];

export const perfInsights = [
  { title: "Lazy-load architecture graph", impact: "High", effort: "S", area: "Bundle" },
  { title: "Move chart widgets to client islands", impact: "High", effort: "M", area: "Rendering" },
  { title: "Add stale-while-revalidate to repo API", impact: "Medium", effort: "S", area: "Cache" },
  { title: "Defer non-critical fonts", impact: "Low", effort: "S", area: "Loading" },
];

// ─── SEO ─────────────────────────────────────────────────────────────────────
export const seoPages = [
  { path: "/", title: "ExplainMyCode AI", hasOg: true, hasCanonical: true, hasSchema: false, score: 84 },
  { path: "/dashboard", title: "Dashboard", hasOg: false, hasCanonical: false, hasSchema: false, score: 42 },
  { path: "/product/[slug]", title: "Product Page", hasOg: false, hasCanonical: false, hasSchema: false, score: 31 },
  { path: "/blog/[slug]", title: "Blog Post", hasOg: true, hasCanonical: true, hasSchema: true, score: 91 },
  { path: "/pricing", title: "Pricing", hasOg: true, hasCanonical: true, hasSchema: false, score: 76 },
];

// ─── Chat ────────────────────────────────────────────────────────────────────
export const chatConversations = [
  { id: "conv-1", title: "Auth architecture review", time: "2h ago", active: true },
  { id: "conv-2", title: "SEO gaps on product pages", time: "1d ago", active: false },
  { id: "conv-3", title: "Bundle size analysis", time: "2d ago", active: false },
  { id: "conv-4", title: "Database index strategy", time: "3d ago", active: false },
];

export const chatSuggestions = [
  "How does authentication work?",
  "Which components are too large?",
  "What hurts SEO performance?",
  "Which APIs are expensive?",
  "What should be refactored first?",
  "Where is duplicate business logic?",
];

// ─── Scan terminal lines ──────────────────────────────────────────────────────
export const scanSteps = [
  { label: "Connecting to repository", status: "done" },
  { label: "Indexing file tree (1,248 files)", status: "done" },
  { label: "Parsing TypeScript AST", status: "done" },
  { label: "Mapping route handlers", status: "done" },
  { label: "Analyzing auth boundaries", status: "done" },
  { label: "Generating architecture graph", status: "done" },
  { label: "Running security checks", status: "done" },
  { label: "Detecting duplicate logic", status: "warning" },
  { label: "SEO metadata validation", status: "warning" },
  { label: "Compiling production readiness model", status: "done" },
];

// ─── Billing ─────────────────────────────────────────────────────────────────
export const billingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    features: ["1 repository", "Basic readiness score", "Issue preview (5 max)", "Community support"],
    current: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    features: ["Unlimited repositories", "Full architecture graph", "Security & SEO review", "Refactor suggestions", "Repo chat (100 msgs/mo)", "Priority support"],
    current: true,
    highlighted: true,
  },
  {
    name: "Team",
    price: "$89",
    period: "per month",
    features: ["Everything in Pro", "Team workspace", "Private repos", "Onboarding docs", "Launch readiness reports", "Dedicated support"],
    current: false,
  },
];

export const invoices = [
  { id: "INV-2024-012", date: "Dec 1, 2024", amount: "$29.00", status: "paid" },
  { id: "INV-2024-011", date: "Nov 1, 2024", amount: "$29.00", status: "paid" },
  { id: "INV-2024-010", date: "Oct 1, 2024", amount: "$29.00", status: "paid" },
];

// ─── Activity feed ────────────────────────────────────────────────────────────
export const activityFeed = [
  { id: 1, action: "Scan completed", repo: "neon-commerce-ai", time: "2h ago", type: "scan" },
  { id: 2, action: "14 issues detected", repo: "neon-commerce-ai", time: "2h ago", type: "issue" },
  { id: 3, action: "Architecture graph updated", repo: "neon-commerce-ai", time: "2h ago", type: "graph" },
  { id: 4, action: "Scan completed", repo: "atlas-dashboard", time: "1d ago", type: "scan" },
  { id: 5, action: "Security alert: CORS wildcard", repo: "atlas-dashboard", time: "1d ago", type: "security" },
];
