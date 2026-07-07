"use client";

import { AnimatedReveal } from "@/components/ui/AnimatedReveal";

export function CTASection() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[-30%] left-[-10%] w-[80%] h-[80%] rounded-full"
          style={{ background: "radial-gradient(ellipse at center, rgba(191, 255, 0, 0.05) 0%, transparent 60%)", filter: "blur(150px)" }}
        />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full"
          style={{ background: "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.02) 0%, transparent 60%)", filter: "blur(120px)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%)" }}
        />
      </div>

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
