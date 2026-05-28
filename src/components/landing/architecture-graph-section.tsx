import { ArchitectureFlow } from "@/components/landing/architecture-flow";
import { SectionHeading } from "@/components/shared/section-heading";

export function ArchitectureGraphSection() {
  return (
    <section className="relative overflow-hidden bg-[#020617] px-4 py-28 lg:px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_8%,rgba(56,189,248,0.12),transparent_26%),radial-gradient(circle_at_80%_42%,rgba(239,68,68,0.08),transparent_24%)]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Architecture Intelligence Graph"
          title="See frontend, backend, API, auth, SEO, and database boundaries as one living system."
          description="React Flow powers a dependency visualization with glowing nodes and animated relationships, making generated architecture easier to reason about before it becomes expensive."
        />
        <div className="relative mt-14">
          <ArchitectureFlow />
        </div>
      </div>
    </section>
  );
}
