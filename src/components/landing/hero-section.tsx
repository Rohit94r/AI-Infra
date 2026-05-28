"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, Play, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BackgroundSystem } from "@/components/landing/background-system";

const CyberHunterStage = dynamic(
  () => import("@/components/three/cyber-hunter-stage").then((mod) => mod.CyberHunterStage),
  {
    ssr: false,
    loading: () => <div className="min-h-[520px] w-full rounded-lg border border-white/10 bg-white/5 lg:min-h-[720px]" />
  }
);

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020617] pt-28">
      <BackgroundSystem />
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-10 px-4 pb-24 pt-10 lg:grid-cols-[0.92fr_1.08fr] lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <Badge className="border-violet-300/25 bg-violet-300/10 text-violet-100">
            <ShieldCheck className="h-3.5 w-3.5" />
            Built for the AI-generated coding era.
          </Badge>
          <h1 className="mt-7 max-w-5xl text-5xl font-semibold leading-none text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            Stop Shipping Technical Debt.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Modern developers can now build products in days using AI coding tools. But architecture,
            scalability, security, and maintainability are often ignored. ExplainMyCode AI analyzes
            repositories and validates production readiness before bad code reaches production.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/dashboard">
                Analyze Repository
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="#live-scan">
                <Play className="h-4 w-4" />
                Watch Demo
              </a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-slate-500">AI architecture intelligence for production teams.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <CyberHunterStage />
        </motion.div>
      </div>
      <div className="absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-[#050816] to-transparent" />
    </section>
  );
}
