"use client";

import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";
import { SmoothScroll } from "@/components/shared/smooth-scroll";
import { Navbar } from "@/components/landing/navbar";
import { TrustedBy } from "@/components/landing/trusted-by";
import { ProblemSection } from "@/components/landing/problem-section";
import { LiveRepoScan } from "@/components/landing/live-repo-scan";
import { FeatureGrid } from "@/components/landing/feature-grid";
import { ProductionDashboard } from "@/components/landing/production-dashboard";
import { ArchitectureGraphSection } from "@/components/landing/architecture-graph-section";
import { RepoChatSection } from "@/components/landing/repo-chat-section";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Testimonials } from "@/components/landing/testimonials";
import { Pricing } from "@/components/landing/pricing";
import { FinalCTA } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";
import { Button } from "@/components/ui/button";

export function LandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f6f4] text-[#3b3a50]">
      <SmoothScroll />
      <Navbar />
      <Hero />
      <TrustedBy />
      <ProblemSection />
      <LiveRepoScan />
      <FeatureGrid />
      <ProductionDashboard />
      <ArchitectureGraphSection />
      <RepoChatSection />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      >
        <source src="/spidervideo.mp4" type="video/mp4" />
      </video>

      {/* Cinematic gradient overlay — heavy at bottom, light at top */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/5" />
      {/* Side vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

      {/* Content — bottom-left pinned */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-14 lg:px-16 lg:pb-20">
        {/* Tag */}
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-300/25 bg-sky-300/10 px-3 py-1 text-xs font-medium text-sky-200">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_6px_rgba(56,189,248,0.9)]" />
          Built for the AI-generated coding era.
        </span>

        <h1 className="max-w-4xl text-[2.8rem] font-semibold leading-[1.0] tracking-[-0.04em] text-white sm:text-[4rem] lg:text-[5.5rem]">
          The AI Architecture Reviewer.
        </h1>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg lg:text-xl">
          AI agents that analyze repositories, expose technical debt, and validate production readiness with full context of the codebase.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <Button size="lg" asChild>
            <Link href="/dashboard">
              <Github className="h-4 w-4" />
              Start now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <a href="#readiness">Contact Sales</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
