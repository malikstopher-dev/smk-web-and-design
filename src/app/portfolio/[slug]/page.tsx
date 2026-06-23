import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolioProjects } from "@/lib/content";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — SMK Web Design Portfolio`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  const related = portfolioProjects.filter(
    (p) => p.category === project.category && p.id !== project.id
  );

  return (
    <>
      <section className="relative">
        <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-20">
            <div className="mx-auto max-w-7xl">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-sm transition-colors mb-6"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                <ArrowLeft className="w-4 h-4" />
                All Projects
              </Link>
              <p className="text-[11px] uppercase tracking-[0.2em] mb-3" style={{ color: "var(--color-accent)" }}>
                {project.category}
              </p>
              <h1 className="text-[clamp(2rem,5vw,4.5rem)] font-[var(--font-display)] leading-[1.05] tracking-[-0.03em] text-white max-w-3xl">
                {project.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="relative section-padding px-6 md:px-12 lg:px-20">
        <div className="section-light" aria-hidden="true" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {project.fullDescription && (
                <>
                  <h2 className="heading-lg mb-4">
                    About this project
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    {project.fullDescription}
                  </p>
                </>
              )}

              {project.challenge && (
                <div className="mt-10">
                  <h3 className="text-lg font-[var(--font-display)] mb-3" style={{ color: "var(--color-text-primary)" }}>
                    The Challenge
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    {project.challenge}
                  </p>
                </div>
              )}

              {project.solution && (
                <div className="mt-8">
                  <h3 className="text-lg font-[var(--font-display)] mb-3" style={{ color: "var(--color-text-primary)" }}>
                    The Solution
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    {project.solution}
                  </p>
                </div>
              )}

              {project.result && (
                <div className="mt-8">
                  <h3 className="text-lg font-[var(--font-display)] mb-3" style={{ color: "var(--color-text-primary)" }}>
                    The Result
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    {project.result}
                  </p>
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="rounded-2xl border p-6 sticky top-24" style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}>
                <h3 className="text-sm font-[var(--font-display)] mb-4" style={{ color: "var(--color-text-primary)" }}>
                  Project Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.15em] mb-1" style={{ color: "var(--color-text-dim)" }}>
                      Category
                    </p>
                    <p className="text-sm" style={{ color: "var(--color-text-primary)" }}>{project.category}</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.15em] mb-1" style={{ color: "var(--color-text-dim)" }}>
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] uppercase tracking-[0.1em] px-2 py-1 rounded-full"
                          style={{ color: "var(--color-text-dim)", background: "rgba(255,255,255,0.04)" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.15em] mb-1" style={{ color: "var(--color-text-dim)" }}>
                      Tags
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] uppercase tracking-[0.1em] px-2 py-1 rounded-full"
                          style={{ color: "var(--color-accent)", background: "rgba(191,255,0,0.1)" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline w-full mt-6 justify-center inline-flex items-center gap-2"
                  >
                    Visit Live Site ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="relative section-padding px-6 md:px-12 lg:px-20">
          <div className="section-light-2" aria-hidden="true" />
          <div className="mx-auto max-w-7xl relative z-10">
            <h2 className="heading-lg mb-10">
              Related Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.slice(0, 3).map((rp) => (
                <Link
                  key={rp.id}
                  href={`/portfolio/${rp.slug}`}
                  className="group block rounded-2xl overflow-hidden border transition-all duration-500"
                  style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={rp.image}
                      alt={rp.title}
                      fill
                      className="project-image"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="project-overlay" />
                  </div>
                  <div className="p-5">
                    <span className="text-[11px] uppercase tracking-[0.2em]" style={{ color: "var(--color-accent)" }}>
                      {rp.category}
                    </span>
                    <h3 className="text-lg font-[var(--font-display)] leading-[1.2] mt-1 transition-colors duration-300" style={{ color: "var(--color-text-primary)" }}>
                      {rp.title}
                    </h3>
                    <p className="text-xs mt-1 leading-relaxed line-clamp-2" style={{ color: "var(--color-text-muted)" }}>
                      {rp.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="relative section-padding px-6 md:px-12 lg:px-20 text-center overflow-hidden">
        <div className="section-light" aria-hidden="true" />
        <div className="mx-auto max-w-4xl relative z-10">
          <h2 className="heading-xl" style={{ color: "var(--color-text-primary)" }}>
            Have a similar project?
          </h2>
          <p className="mt-4 max-w-lg mx-auto leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
            Let&apos;s build something that gets results. Get in touch for a free consultation.
          </p>
          <div className="mt-8">
            <a className="btn-accent" href="/contact">
              Start Your Project →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
