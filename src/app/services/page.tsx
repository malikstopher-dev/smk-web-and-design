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

export default function ServicesPage() {
  return (
    <>
      <section className="relative section-padding px-6 md:px-12 lg:px-20">
        <div className="section-light" aria-hidden="true" />
        <div className="mx-auto max-w-7xl relative z-10">
          <AnimatedReveal>
            <SectionLabel>Services</SectionLabel>
            <SectionHeading>What we build</SectionHeading>
            <p className="text-lg md:text-xl mt-6 max-w-2xl leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              From premium websites to local SEO that puts you on the map — every service is designed
              to grow your business and generate real results.
            </p>
          </AnimatedReveal>
        </div>
      </section>

      <section className="relative section-padding px-6 md:px-12 lg:px-20">
        <div className="section-light-2" aria-hidden="true" />
        <div className="mx-auto max-w-7xl relative z-10">
          <StaggerReveal>
            {services.map((service) => (
              <StaggerItem key={service.id}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative flex items-center gap-6 md:gap-12 py-10 md:py-14 border-t border-[var(--color-border)] transition-all duration-500 hover:translate-x-2"
                  data-cursor="link"
                >
                  <div
                    className="absolute inset-0 rounded-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{ background: "var(--color-accent-soft)" }}
                  />
                  <span className="relative z-10 text-[13px] font-mono shrink-0" style={{ color: "var(--color-text-dim)", width: 32 }}>
                    {service.number}
                  </span>
                  <div className="relative z-10 flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                      <h3
                        className="text-2xl md:text-3xl font-[var(--font-display)] transition-transform duration-500 group-hover:translate-x-1"
                        style={{ color: "var(--color-text-primary)", fontWeight: 600 }}
                      >
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-sm mt-2 max-w-xl leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                      {service.tagline}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {service.features.slice(0, 4).map((feature) => (
                        <li
                          key={feature}
                          className="text-[11px] uppercase tracking-[0.1em] px-3 py-1.5 rounded-full"
                          style={{ color: "var(--color-text-dim)", background: "rgba(255,255,255,0.04)" }}
                        >
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-[11px] uppercase tracking-[0.1em]" style={{ color: "var(--color-spot-cobalt, #2C4A8A)" }}>
                          +{service.features.length - 4} more
                        </li>
                      )}
                    </ul>
                  </div>
                  <span
                    className="relative z-10 hidden md:block text-sm max-w-xs text-right leading-relaxed"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {shortDescriptions[service.id]}
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section className="relative section-padding px-6 md:px-12 lg:px-20 text-center overflow-hidden">
        <div className="section-light" aria-hidden="true" />
        <div className="mx-auto max-w-4xl relative z-10">
          <AnimatedReveal>
            <p className="text-label mb-6">Get Started</p>
            <h2 className="heading-xl max-w-3xl mx-auto leading-[1.1]" style={{ color: "var(--color-text-primary)" }}>
              Not sure which service you need?
            </h2>
            <p className="mt-4 max-w-lg mx-auto leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              Book a free consultation and we&apos;ll figure it out together. No pressure, just honest advice.
            </p>
            <div className="mt-8">
              <a className="btn-accent" href="/contact">
                Book a Free Consultation →
              </a>
            </div>
          </AnimatedReveal>
        </div>
      </section>
    </>
  );
}
