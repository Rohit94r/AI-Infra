"use client";

import { motion } from "framer-motion";
import { featureCards } from "@/data/platform";

export function FeatureGrid() {
  return (
    <section id="features" className="relative overflow-hidden border-b border-[#3b3a50]/10 bg-[#f7f8f6] px-4 py-28 lg:px-6">
      <div className="absolute inset-0 dot-surface opacity-25" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.26em] text-[#3b3a50]/50">Platform</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#3b3a50] sm:text-5xl">
            Everything a production team needs.
          </h2>
        </div>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {featureCards.map((feature, i) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-[#3b3a50]/10 bg-white/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#2de29d]/50 hover:shadow-[0_8px_40px_rgba(45,226,157,0.12)]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[#2de29d] text-[#10131b]">
                <feature.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-base font-semibold text-[#3b3a50]">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#3b3a50]/58 line-clamp-2">{feature.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
