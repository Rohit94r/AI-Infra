"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Platform", href: "#features" },
  { label: "Live Scan", href: "#live-scan" },
  { label: "Readiness", href: "#readiness" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#how-it-works" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      setPastHero(y > window.innerHeight - 80);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const dark = pastHero; // on light sections → use dark text

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "mx-auto flex h-16 max-w-7xl items-center justify-between px-4 transition-all duration-300 lg:px-8",
          // past hero → solid white frosted bar
          dark
            ? "border-b border-[#3b3a50]/10 bg-white/95 shadow-[0_2px_16px_rgba(59,58,80,0.08)] backdrop-blur-xl"
            : scrolled
            // still in hero but scrolled a bit → floating glass pill
            ? "mt-2 rounded-xl border border-white/20 bg-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl"
            // top of page over video → fully transparent
            : "bg-transparent"
        )}
      >
        {/* Logo */}
        <Link href="/" className="group flex shrink-0 items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center">
            <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
              <polygon
                points="16,2 28,10 28,22 16,30 4,22 4,10"
                fill={dark ? "rgba(45,226,157,0.15)" : "rgba(255,255,255,0.15)"}
                stroke={dark ? "#2de29d" : "rgba(255,255,255,0.8)"}
                strokeWidth="1.5"
              />
              <polygon
                points="16,8 22,13 16,18 10,13"
                fill={dark ? "#2de29d" : "white"}
              />
            </svg>
          </span>
          <span>
            <span className={cn("block text-sm font-semibold leading-tight", dark ? "text-[#3b3a50]" : "text-white drop-shadow-sm")}>
              ExplainMyCode
            </span>
            <span className={cn("block font-mono text-[9px] uppercase leading-tight tracking-[0.2em]", dark ? "text-[#3b3a50]/45" : "text-white/60")}>
              AI
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "rounded-md px-3.5 py-2 text-sm font-medium transition-colors",
                dark
                  ? "text-[#3b3a50]/65 hover:bg-[#f5f6f4] hover:text-[#3b3a50]"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right */}
        <div className="hidden items-center gap-3 md:flex">
          <span className={cn("flex items-center gap-1.5 text-xs font-medium", dark ? "text-[#3b3a50]/60" : "text-white/70")}>
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#2de29d]" />
            AI online
          </span>
          <Link
            href="/dashboard"
            className={cn(
              "flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-semibold transition",
              dark
                ? "border border-[#3b3a50]/14 bg-[#2de29d] text-[#10131b] hover:bg-[#25d492]"
                : "border border-white/25 bg-white/15 text-white backdrop-blur-sm hover:bg-white/25"
            )}
          >
            <Sparkles className="h-3.5 w-3.5" />
            Dashboard
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-md border transition md:hidden",
            dark
              ? "border-[#3b3a50]/12 bg-[#f5f6f4] text-[#3b3a50]"
              : "border-white/20 bg-white/10 text-white backdrop-blur-sm"
          )}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className={cn(
            "px-4 pb-5 pt-3 md:hidden",
            dark
              ? "border-b border-[#3b3a50]/10 bg-white"
              : "mx-4 mt-1 rounded-xl border border-white/20 bg-white/15 backdrop-blur-xl"
          )}
        >
          <nav className="grid gap-1">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-4 py-2.5 text-sm font-medium transition",
                  dark
                    ? "text-[#3b3a50]/70 hover:bg-[#f5f6f4] hover:text-[#3b3a50]"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                )}
              >
                {item.label}
              </a>
            ))}
            <Link
              href="/dashboard"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-[#2de29d] px-4 py-2.5 text-center text-sm font-semibold text-[#10131b] transition hover:bg-[#25d492]"
            >
              Open Dashboard
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
