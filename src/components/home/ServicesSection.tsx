"use client";

import Link from "next/link";
import { services } from "@/lib/content";
import { AnimatedReveal, StaggerReveal, StaggerItem, SectionLabel, SectionHeading } from "@/components/ui/AnimatedReveal";

const shortDescriptions: Record<string, string> = {
  "web-design": "Custom, high-performance websites built to convert visitors into paying customers.",
  ecommerce: "Secure, conversion-optimised online stores that drive sales from day one.",
  seo: "Rank on Google with technical SEO, local search optimisation, and content strategy.",
  maintenance: "Ongoing care, security updates, and performance monitoring to keep your site at its best.",
};

export function ServicesSection() {
  return (
    <section className="relative px-6 md:px-12 lg:px-20 py-32 md:py-48">
      <div className="section-light" aria-hidden="true" />
      <div className="mx-auto max-w-7xl relative z-10">
        <AnimatedReveal>
          <SectionLabel>Services</SectionLabel>
          <SectionHeading>What we build</SectionHeading>
        </AnimatedReveal>

        <StaggerReveal className="mt-20">
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <Link
                href={`/services/${service.slug}`}
                className="group relative flex items-center gap-6 md:gap-12 py-8 md:py-10 border-t border-[var(--color-border)] transition-all duration-500 hover:translate-x-2"
                data-cursor="link"
              >
                <div
                  className="absolute inset-0 rounded-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"
                  style={{ background: "var(--color-accent-soft)" }}
                />
                <span className="relative z-10 text-[13px] font-mono shrink-0" style={{ color: "var(--color-text-dim)", width: 32 }}>
                  {service.number}
                </span>
                <span className="relative z-10 text-xl md:text-3xl font-[var(--font-display)] transition-transform duration-500 group-hover:translate-x-1" style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>
                  {service.title}
                </span>
                <span className="relative z-10 hidden md:block text-sm ml-auto max-w-xs text-right leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                  {shortDescriptions[service.id]}
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerReveal>

        <div className="mt-16">
          <Link
            href="/services"
            className="text-sm transition-colors uppercase tracking-[0.2em]"
            style={{ color: "var(--color-text-dim)" }}
          >
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
