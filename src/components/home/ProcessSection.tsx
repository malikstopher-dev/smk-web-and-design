"use client";

import { processSteps } from "@/lib/content";
import { AnimatedReveal, StaggerReveal, StaggerItem, SectionLabel, SectionHeading } from "@/components/ui/AnimatedReveal";

export function ProcessSection() {
  return (
    <section className="relative px-6 md:px-12 lg:px-20 py-32 md:py-48 overflow-hidden bg-[var(--color-bg)]">
      <div className="mx-auto max-w-7xl relative z-10">
        <AnimatedReveal>
          <SectionLabel>Process</SectionLabel>
          <SectionHeading>How we work</SectionHeading>
        </AnimatedReveal>

        <div className="hidden md:block overflow-x-auto pb-8 scrollbar-hide mt-20">
          <StaggerReveal className="flex gap-0 min-w-max" staggerDelay={0.12}>
            {processSteps.map((step, i) => (
              <StaggerItem key={step.number} className="flex items-start">
                <div className="flex flex-col items-start gap-6 w-72">
                  <span
                    className="text-[120px] font-bold leading-none select-none font-[var(--font-display)]"
                    style={{ color: "var(--color-text-dim)" }}
                  >
                    {step.number}
                  </span>
                  <h3 className="heading-sm" style={{ color: "var(--color-text-primary)" }}>
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    {step.description}
                  </p>
                </div>
                {i < processSteps.length - 1 && <div className="process-line mx-10" />}
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>

        <div className="md:hidden space-y-16 mt-16">
          {processSteps.map((step) => (
            <AnimatedReveal key={step.number}>
              <div className="border-t border-[var(--color-border)] pt-8">
                <span
                  className="text-[64px] font-bold leading-none select-none font-[var(--font-display)]"
                  style={{ color: "var(--color-text-dim)" }}
                >
                  {step.number}
                </span>
                <h3 className="heading-sm mt-5" style={{ color: "var(--color-text-primary)" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed mt-4" style={{ color: "var(--color-text-muted)" }}>
                  {step.description}
                </p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
