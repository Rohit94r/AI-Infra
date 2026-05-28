"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const particles = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  left: (i * 47) % 100,
  top: (i * 63) % 100,
  delay: (i % 6) * 0.4,
  duration: 6 + (i % 4)
}));

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#3b3a50] px-4 py-36 text-center lg:px-6">
      <div className="absolute inset-0 plus-surface opacity-10" />

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute h-1 w-1 rounded-full bg-[#2de29d]/40"
          style={{ left: `${p.left}%`, top: `${p.top}%` }}
          animate={{ y: [-20, 20], opacity: [0, 0.6, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="relative mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.28em] text-[#2de29d]"
        >
          AI Architecture Layer
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="mt-5 text-5xl font-semibold leading-tight text-white sm:text-7xl lg:text-8xl"
        >
          Build Fast.{" "}
          <span className="text-[#2de29d]">Scale Correctly.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.16 }}
          className="mx-auto mt-6 max-w-xl text-lg text-white/60"
        >
          Understand your architecture before technical debt reaches production.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.22 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button size="lg" asChild>
            <Link href="/dashboard">
              Analyze Repository
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <a href="#features">Explore features</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
