"use client";

import Image from "next/image";
import Link from "next/link";
import { portfolioProjects } from "@/lib/content";
import { AnimatedReveal, StaggerReveal, StaggerItem, SectionLabel, SectionHeading } from "@/components/ui/AnimatedReveal";

export default function PortfolioPage() {
  const categories = [...new Set(portfolioProjects.map((p) => p.category))];

  return (
    <>
      <section className="relative section-padding px-6 md:px-12 lg:px-20">
        <div className="section-light" aria-hidden="true" />
        <div className="mx-auto max-w-7xl relative z-10">
          <AnimatedReveal>
            <SectionLabel>Portfolio</SectionLabel>
            <SectionHeading>Our work</SectionHeading>
            <p className="text-lg md:text-xl mt-6 max-w-2xl leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              Real websites built for real businesses across South Africa and beyond. Each designed
              to generate enquiries and rank on Google.
            </p>
          </AnimatedReveal>
        </div>
      </section>

      <section className="relative section-padding px-6 md:px-12 lg:px-20">
        <div className="section-light-2" aria-hidden="true" />
        <div className="mx-auto max-w-7xl relative z-10">
          <AnimatedReveal>
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="text-[11px] uppercase tracking-[0.1em] px-3 py-1.5 rounded-full"
                  style={{ color: "var(--color-text-dim)", background: "rgba(255,255,255,0.04)" }}
                >
                  {cat}
                </span>
              ))}
            </div>
          </AnimatedReveal>

          <StaggerReveal staggerDelay={0.05}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioProjects.map((project) => (
                <StaggerItem key={project.id}>
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="group block rounded-2xl overflow-hidden border transition-all duration-500"
                    style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
                    data-cursor="project"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="project-image"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="project-overlay" />
                      <div className="absolute bottom-4 left-4 z-10">
                        <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/70">
                          View Project →
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <span className="text-[10px] uppercase tracking-[0.2em]" style={{ color: "var(--color-spot-cobalt, #2C4A8A)" }}>
                        {project.category}
                      </span>
                      <h3
                        className="text-lg font-[var(--font-display)] leading-[1.2] mt-1 transition-colors duration-300"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        {project.title}
                      </h3>
                      <p className="text-xs mt-2 leading-relaxed line-clamp-2" style={{ color: "var(--color-text-muted)" }}>
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {project.tech.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="text-[10px] uppercase tracking-[0.1em] px-2 py-0.5 rounded-full"
                            style={{ color: "var(--color-text-dim)", background: "rgba(255,255,255,0.04)" }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
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
            <p className="text-label mb-6">Your Project</p>
            <h2 className="heading-xl max-w-3xl mx-auto" style={{ color: "var(--color-text-primary)" }}>
              Want your project featured here?
            </h2>
            <p className="mt-4 max-w-lg mx-auto leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              Let&apos;s build something amazing together. Get in touch and let&apos;s talk about your vision.
            </p>
            <div className="mt-8">
              <a className="btn-accent" href="/contact">
                Start Your Project →
              </a>
            </div>
          </AnimatedReveal>
        </div>
      </section>
    </>
  );
}
