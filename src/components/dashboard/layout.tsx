"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bot, Menu, Search, X } from "lucide-react";
import { sidebarNav } from "@/data/dashboard";
import { Logo } from "@/components/shared/logo";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#f5f6f4] text-[#3b3a50]">
      <div className="fixed inset-0 plus-surface opacity-50 pointer-events-none" />

      {/* Sidebar — desktop */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-[#3b3a50]/10 bg-white/90 backdrop-blur-xl lg:flex">
        <div className="flex h-16 items-center border-b border-[#3b3a50]/10 px-5">
          <Logo compact />
          <span className="ml-2.5">
            <span className="block text-sm font-semibold text-[#3b3a50]">ExplainMyCode</span>
            <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-[#3b3a50]/45">AI</span>
          </span>
        </div>

        {/* Repo pill */}
        <div className="mx-4 mt-4 rounded-lg border border-[#3b3a50]/10 bg-[#f5f6f4] p-3">
          <p className="text-xs font-semibold text-[#3b3a50]">neon-commerce-ai</p>
          <p className="mt-0.5 font-mono text-[10px] text-[#3b3a50]/45">main · 1,248 files</p>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-xs text-[#3b3a50]/50">Readiness</span>
            <span className="text-xs font-semibold text-[#2de29d]">88%</span>
          </div>
          <div className="mt-1.5 h-1 rounded-full bg-[#3b3a50]/8">
            <div className="h-full w-[88%] rounded-full bg-[#2de29d]" />
          </div>
        </div>

        {/* Nav */}
        <nav className="mt-4 flex-1 space-y-0.5 px-3">
          {sidebarNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                  active
                    ? "bg-[#2de29d]/15 text-[#3b3a50] border border-[#2de29d]/30"
                    : "text-[#3b3a50]/60 hover:bg-[#3b3a50]/5 hover:text-[#3b3a50]"
                )}
              >
                <item.icon className={cn("h-4 w-4 shrink-0", active ? "text-[#2de29d]" : "text-[#3b3a50]/40")} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* AI status */}
        <div className="m-4 rounded-lg border border-[#2de29d]/30 bg-[#2de29d]/8 p-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-[#3b3a50]">
            <Bot className="h-4 w-4 text-[#2de29d]" />
            AI architect online
          </div>
          <p className="mt-1.5 text-xs leading-5 text-[#3b3a50]/55">
            Context indexed across routes, APIs, auth, and dependencies.
          </p>
        </div>
      </aside>

      {/* Mobile sidebar overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <aside className="absolute inset-y-0 left-0 w-64 border-r border-[#3b3a50]/10 bg-white flex flex-col">
            <div className="flex h-16 items-center justify-between border-b border-[#3b3a50]/10 px-5">
              <Logo compact />
              <button onClick={() => setMobileOpen(false)} className="text-[#3b3a50]/60">
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="mt-4 flex-1 space-y-0.5 px-3">
              {sidebarNav.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                      active
                        ? "bg-[#2de29d]/15 text-[#3b3a50] border border-[#2de29d]/30"
                        : "text-[#3b3a50]/60 hover:bg-[#3b3a50]/5 hover:text-[#3b3a50]"
                    )}
                  >
                    <item.icon className={cn("h-4 w-4 shrink-0", active ? "text-[#2de29d]" : "text-[#3b3a50]/40")} />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </aside>
        </div>
      )}

      {/* Main */}
      <div className="relative z-10 lg:pl-64">
        {/* Topbar */}
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-[#3b3a50]/10 bg-white/90 px-4 backdrop-blur-xl lg:px-6">
          <div className="flex items-center gap-3">
            <button
              className="flex h-9 w-9 items-center justify-center rounded-md border border-[#3b3a50]/12 bg-[#f5f6f4] text-[#3b3a50] lg:hidden"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-4 w-4" />
            </button>
            <div className="relative hidden sm:block">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#3b3a50]/35" />
              <Input className="h-9 w-64 pl-9 text-sm" placeholder="Search repositories, issues…" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-1.5 text-xs font-medium text-[#2de29d] sm:flex">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#2de29d]" />
              AI online
            </span>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3b3a50] text-xs font-semibold text-white">
              R
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-7xl px-4 py-6 lg:px-6 lg:py-8">
          {children}
        </main>
      </div>
    </div>
  );
}
