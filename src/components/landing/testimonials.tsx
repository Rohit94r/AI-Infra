"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/platform";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden border-b border-[#3b3a50]/10 bg-[#eef1ef] px-4 py-28 lg:px-6">
      <div className="absolute inset-0 dot-surface opacity-25" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.26em] text-[#3b3a50]/50">Testimonials</p>
          <h2 className="mt-4 text-4xl font-semibold text-[#3b3a50] sm:text-5xl">
            Teams use it when speed outpaces architecture.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group rounded-xl border border-[#3b3a50]/10 bg-white/80 p-6 transition duration-300 hover:border-[#2de29d]/40 hover:shadow-[0_8px_40px_rgba(45,226,157,0.1)]"
            >
              <Quote className="h-5 w-5 text-[#2de29d]" />
              <blockquote className="mt-4 text-base leading-7 text-[#3b3a50]/75">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <Avatar className="h-9 w-9 border border-[#3b3a50]/10">
                  <AvatarFallback className="bg-[#2de29d]/15 text-[#3b3a50] text-xs font-semibold">
                    {t.name.split(" ").map((p) => p[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold text-[#3b3a50]">{t.name}</p>
                  <p className="text-xs text-[#3b3a50]/45">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
