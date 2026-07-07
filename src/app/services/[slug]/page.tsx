import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/lib/content";
import { CheckCircle, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} — SMK Web Design`,
    description: service.tagline,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <section className="relative section-padding px-6 md:px-12 lg:px-20 overflow-hidden">
        <div
          className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] rounded-full opacity-30 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(239, 234, 229, 0.04) 0%, transparent 60%)", filter: "blur(120px)" }}
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm mb-12 transition-colors"
            style={{ color: "var(--color-text-dim)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            All Services
          </Link>
          <span className="text-[13px] font-mono" style={{ color: "var(--color-text-dim)" }}>{service.number}</span>
          <h1 className="heading-xl mt-4 max-w-4xl" style={{ color: "var(--color-text-primary)" }}>
            {service.title}
          </h1>
          <p className="text-lg md:text-xl mt-6 max-w-2xl leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
            {service.tagline}
          </p>
          <p className="text-sm mt-4 max-w-2xl leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
            {service.description}
          </p>
        </div>
      </section>

      <section className="relative section-padding px-6 md:px-12 lg:px-20">
        <div className="section-light-2" aria-hidden="true" />
        <div className="mx-auto max-w-7xl relative z-10">
          <h2 className="heading-sm mb-10" style={{ color: "var(--color-text-primary)" }}>
            What&apos;s included
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {service.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 rounded-xl px-5 py-4 border"
                style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
              >
                <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "var(--color-spot-cobalt, #2C4A8A)" }} />
                <span className="text-sm" style={{ color: "var(--color-text-primary)" }}>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative section-padding px-6 md:px-12 lg:px-20 text-center overflow-hidden">
        <div className="section-light" aria-hidden="true" />
        <div className="mx-auto max-w-4xl relative z-10">
          <h2 className="heading-xl max-w-3xl mx-auto" style={{ color: "var(--color-text-primary)" }}>
            Ready to get started?
          </h2>
          <p className="mt-4 max-w-lg mx-auto leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
            Let&apos;s talk about your project. Free consultation, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a className="btn-accent" href="/contact">
              Start Your Project →
            </a>
            <a className="btn-outline" href="/portfolio">
              View Our Work →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
