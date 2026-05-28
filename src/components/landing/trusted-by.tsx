import { trustedLogos } from "@/data/platform";

export function TrustedBy() {
  const doubled = [...trustedLogos, ...trustedLogos];

  return (
    <section className="relative overflow-hidden border-y border-[#3b3a50]/10 bg-[#eef1ef] py-6">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#eef1ef] via-transparent to-[#eef1ef] z-10" />
      <p className="mb-5 text-center font-mono text-[10px] uppercase tracking-[0.28em] text-[#3b3a50]/45">
        Trusted by teams building with the modern AI stack
      </p>
      <div className="flex overflow-hidden">
        <div className="flex min-w-max animate-marquee items-center gap-3">
          {doubled.map((logo, i) => (
            <div
              key={`${logo}-${i}`}
              className="group flex h-12 w-40 items-center justify-center rounded-md border border-[#3b3a50]/10 bg-white/70 text-sm font-semibold text-[#3b3a50]/40 transition duration-300 hover:border-[#2de29d]/50 hover:text-[#3b3a50] hover:shadow-[0_0_20px_rgba(45,226,157,0.15)]"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
