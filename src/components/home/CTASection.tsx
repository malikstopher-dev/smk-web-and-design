"use client";

import { AnimatedReveal } from "@/components/ui/AnimatedReveal";

export function CTASection() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden bg-[var(--color-bg)]">
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-20 text-center">
        <AnimatedReveal>
          <p className="text-label mb-6">Let&apos;s Work Together</p>
          <h2 className="heading-xl max-w-4xl mx-auto" style={{ color: "var(--color-text-primary)" }}>
            Ready to grow?
          </h2>
          <div className="mt-12">
            <a className="btn-accent text-base px-12 py-5" data-cursor="cta" href="/contact">
              Book a Free Consultation →
            </a>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
