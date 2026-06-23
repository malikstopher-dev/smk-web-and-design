"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig, portfolioProjects } from "@/lib/content";
import { AnimatedReveal, StaggerReveal, StaggerItem, SectionLabel, SectionHeading } from "@/components/ui/AnimatedReveal";
import { Target, Eye, Heart, Timer, Briefcase, Smile } from "lucide-react";

const stats = [
  { icon: Timer, value: "4+", label: "Years Experience" },
  { icon: Briefcase, value: `${portfolioProjects.length}+`, label: "Projects Delivered" },
  { icon: Smile, value: "100%", label: "Client Satisfaction" },
];

const values = [
  {
    icon: Target,
    title: "Results First",
    description: "Every site we build is designed to generate real business outcomes — more enquiries, more sales, more growth.",
  },
  {
    icon: Eye,
    title: "Quality Over Quantity",
    description: "We take on fewer projects to give each one the attention it deserves. Every detail matters.",
  },
  {
    icon: Heart,
    title: "Partnership Mindset",
    description: "We don't just build websites and disappear. We stay with you to ensure your success long after launch.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative section-padding px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="section-light" aria-hidden="true" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedReveal>
              <SectionLabel>About Us</SectionLabel>
              <SectionHeading>Websites That Grow Your Business</SectionHeading>
              <p className="text-sm md:text-base mt-6 leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                We&apos;re {siteConfig.name}, a Johannesburg-based web design studio that builds
                high-performance websites for businesses that want to grow. We combine premium design,
                local SEO expertise, and conversion-focused strategy to create websites that don&apos;t
                just look good — they deliver real results.
              </p>
              <p className="text-sm md:text-base mt-4 leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                Founded in {siteConfig.founded}, we&apos;ve helped businesses across South Africa and
                beyond establish a powerful online presence. From restaurants and construction firms to
                e-commerce stores and professional services, every project is built with the same
                commitment to quality and performance.
              </p>
            </AnimatedReveal>
            <AnimatedReveal direction="right">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden" style={{ background: "var(--color-surface)" }}>
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=85&w=800&auto=format&fit=crop"
                  alt={`${siteConfig.name} Studio`}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      <section className="relative section-padding px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="section-light-2" aria-hidden="true" />
        <div className="mx-auto max-w-7xl relative z-10">
          <StaggerReveal>
            <div className="grid md:grid-cols-3 gap-6">
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="text-center rounded-2xl border p-8" style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}>
                    <stat.icon className="w-8 h-8 mx-auto mb-4" style={{ color: "var(--color-accent)" }} />
                    <p className="text-4xl md:text-5xl font-[var(--font-display)] leading-none" style={{ color: "var(--color-text-primary)" }}>
                      {stat.value}
                    </p>
                    <p className="text-sm mt-2" style={{ color: "var(--color-text-muted)" }}>{stat.label}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerReveal>
        </div>
      </section>

      <section className="relative section-padding px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="section-light" aria-hidden="true" />
        <div className="mx-auto max-w-7xl relative z-10">
          <AnimatedReveal>
            <SectionLabel>Our Story</SectionLabel>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <SectionHeading>Built for businesses that mean business</SectionHeading>
              </div>
              <div className="space-y-4">
                <p className="text-sm md:text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                  {siteConfig.name} was born from a simple observation: too many small and medium
                  businesses were being sold expensive websites that didn&apos;t actually generate
                  results. We saw restaurants with beautiful sites that got no bookings, construction
                  companies with zero online enquiries, and professionals who were invisible on Google.
                </p>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                  We built {siteConfig.name} to change that. Every website we create is engineered
                  for conversion — with SEO built in from day one, clear calls to action, and a design
                  that builds trust instantly. We don&apos;t just build websites; we build digital
                  sales tools that grow your business.
                </p>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                  Based in {siteConfig.location}, we work with clients across South Africa and
                  internationally. Our portfolio spans restaurants, construction, architecture,
                  e-commerce, professional services, and more — each one a partnership built on
                  trust, transparency, and real results.
                </p>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      <section className="relative section-padding px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="section-light-2" aria-hidden="true" />
        <div className="mx-auto max-w-7xl relative z-10">
          <AnimatedReveal>
            <SectionLabel>What We Stand For</SectionLabel>
            <SectionHeading>Our values</SectionHeading>
          </AnimatedReveal>
          <StaggerReveal className="mt-12">
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value) => (
                <StaggerItem key={value.title}>
                  <div className="rounded-2xl border p-8 h-full" style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}>
                    <value.icon className="w-6 h-6 mb-4" style={{ color: "var(--color-accent)" }} />
                    <h3 className="text-lg font-[var(--font-display)] mb-3" style={{ color: "var(--color-text-primary)" }}>
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                      {value.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerReveal>
        </div>
      </section>

      <section className="relative section-padding px-6 md:px-12 lg:px-20 text-center overflow-hidden">
        <div className="section-light" aria-hidden="true" />
        <div className="mx-auto max-w-4xl relative z-10">
          <AnimatedReveal>
            <p className="text-label mb-6">Let&apos;s Work Together</p>
            <h2 className="heading-xl" style={{ color: "var(--color-text-primary)" }}>
              Ready to grow your business?
            </h2>
            <p className="mt-4 max-w-lg mx-auto leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              Book a free consultation and let&apos;s talk about your project. No pressure, just honest advice.
            </p>
            <div className="mt-8">
              <Link className="btn-accent" href="/contact">
                Book a Free Consultation →
              </Link>
            </div>
          </AnimatedReveal>
        </div>
      </section>
    </>
  );
}
