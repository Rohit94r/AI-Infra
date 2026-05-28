import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  compact?: boolean;
  className?: string;
};

export function Logo({ compact = false, className }: LogoProps) {
  return (
    <Link href="/" aria-label="ExplainMyCode AI home" className={cn("group inline-flex items-center gap-2.5", className)}>
      <span className="relative flex h-9 w-9 items-center justify-center transition duration-300 group-hover:-translate-y-0.5">
        <span className="absolute inset-0 rounded-md bg-sky-400/15 blur-sm group-hover:bg-sky-400/25 transition" />
        <svg viewBox="0 0 32 32" className="relative h-9 w-9" aria-hidden="true">
          <polygon points="16,2 28,10 28,22 16,30 4,22 4,10" fill="rgba(56,189,248,0.12)" stroke="rgba(56,189,248,0.65)" strokeWidth="1" />
          <polygon points="16,8 22,13 16,18 10,13" fill="rgba(56,189,248,0.55)" />
        </svg>
      </span>
      {!compact ? (
        <span className="leading-none">
          <span className="block text-sm font-semibold text-[#3b3a50]">ExplainMyCode AI</span>
          <span className="mt-0.5 block font-mono text-[9px] uppercase tracking-[0.22em] text-[#3b3a50]/50">Architecture Intelligence</span>
        </span>
      ) : null}
    </Link>
  );
}
