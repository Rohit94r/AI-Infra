import { Github, Linkedin, Twitter } from "lucide-react";
import { Logo } from "@/components/shared/logo";

const columns = [
  ["Platform", "Architecture Analysis", "Readiness Score", "Repo Graph", "Repo Chat"],
  ["Validation", "Security Review", "SEO Intelligence", "Scalability", "Technical Debt"],
  ["Resources", "Docs", "Blog", "Pricing", "Launch Guide"],
  ["Company", "Security", "Status", "Contact", "Privacy"]
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020617] px-4 py-14 lg:px-6">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_2fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">
            ExplainMyCode AI is the architecture intelligence and production readiness layer for AI-generated software.
          </p>
          <div className="mt-6 flex gap-2">
            {[Github, Twitter, Linkedin].map((Icon, index) => (
              <a
                key={index}
                href="#"
                aria-label="Social link"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/6 text-slate-400 transition hover:border-sky-300/30 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {columns.map(([title, ...items]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-white">{title}</h3>
              <ul className="mt-4 space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-slate-500 transition hover:text-slate-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright 2026 ExplainMyCode AI. Frontend prototype.</p>
        <p>No backend, database, or API routes included.</p>
      </div>
    </footer>
  );
}
