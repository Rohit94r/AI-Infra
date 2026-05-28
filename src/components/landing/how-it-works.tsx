"use client";

import { motion } from "framer-motion";
import { workflowSteps } from "@/data/platform";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden border-b border-[#3b3a50]/10 bg-[#f7f8f6] px-4 py-28 lg:px-6">
      <div className="absolute inset-0 plus-surface opacity-40" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.26em] text-[#3b3a50]/50">How It Works</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#3b3a50] sm:text-5xl">
            From AI-generated repo to production plan.
          </h2>
        </div>

        <div className="relative">
          {/* Timeline bar */}
          <div className="absolute left-6 top-6 hidden h-0.5 w-[calc(100%-3rem)] bg-[#3b3a50]/8 lg:block">
            <motion.div
              className="h-full bg-[#2de29d]"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {workflowSteps.map((step, i) => (
              <motion.article
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative rounded-xl border border-[#3b3a50]/10 bg-white/80 p-6 shadow-sm"
              >
                <div className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-md bg-[#2de29d] text-[#10131b] shadow-[0_0_20px_rgba(45,226,157,0.3)]">
                  <step.icon className="h-5 w-5" />
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#3b3a50] text-[9px] font-bold text-white">
                    {i + 1}
                  </span>
                </div>
                <p className="font-mono text-xs text-[#3b3a50]/45">Step {step.step}</p>
                <h3 className="mt-2 text-xl font-semibold text-[#3b3a50]">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#3b3a50]/58">{step.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
