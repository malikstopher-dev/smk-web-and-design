"use client";

import { useState, FormEvent } from "react";
import { siteConfig } from "@/lib/content";
import { AnimatedReveal, StaggerReveal, StaggerItem, SectionLabel, SectionHeading } from "@/components/ui/AnimatedReveal";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <section className="relative section-padding px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="section-light" aria-hidden="true" />
        <div className="mx-auto max-w-7xl relative z-10">
          <AnimatedReveal>
            <SectionLabel>Get in Touch</SectionLabel>
            <SectionHeading>Let&apos;s build something great</SectionHeading>
            <p className="text-lg md:text-xl mt-6 max-w-2xl leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              Every great project begins with a conversation. Tell us about your goals and we&apos;ll build a custom strategy.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <a className="btn-accent" href={`mailto:${siteConfig.email}`}>
                Start Your Project →
              </a>
              <a className="btn-outline" href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                Text Us
              </a>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      <section className="relative section-padding px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="section-light-2" aria-hidden="true" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            <div className="lg:col-span-3">
              <AnimatedReveal>
                {submitted ? (
                  <div className="rounded-2xl border p-10 text-center" style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}>
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "rgba(44, 74, 138, 0.12)" }}>
                      <Send className="w-8 h-8" style={{ color: "var(--color-spot-cobalt, #2C4A8A)" }} />
                    </div>
                    <h3 className="text-2xl font-[var(--font-display)] mb-3" style={{ color: "var(--color-text-primary)" }}>
                      Message Sent!
                    </h3>
                    <p className="text-sm max-w-sm mx-auto leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: "var(--color-text-primary)" }}>
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full border rounded-xl px-5 py-4 text-sm transition-colors placeholder:text-[var(--color-text-dim)] focus:outline-none"
                        style={{ background: "var(--color-bg)", borderColor: "var(--color-border)", color: "var(--color-text-primary)", outlineColor: "var(--color-accent)" }}
                        placeholder="Maria Gorn"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: "var(--color-text-primary)" }}>
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full border rounded-xl px-5 py-4 text-sm transition-colors placeholder:text-[var(--color-text-dim)] focus:outline-none"
                        style={{ background: "var(--color-bg)", borderColor: "var(--color-border)", color: "var(--color-text-primary)" }}
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: "var(--color-text-primary)" }}>
                        Tell us about your project *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full border rounded-xl px-5 py-4 text-sm transition-colors placeholder:text-[var(--color-text-dim)] focus:outline-none resize-none"
                        style={{ background: "var(--color-bg)", borderColor: "var(--color-border)", color: "var(--color-text-primary)" }}
                        placeholder="What are your goals? Timeline?"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-accent w-full justify-center text-center"
                    >
                      {loading ? "Sending..." : "Send Message →"}
                    </button>
                  </form>
                )}
              </AnimatedReveal>
            </div>

            <div className="lg:col-span-2">
              <StaggerReveal>
                <StaggerItem>
                  <div className="rounded-2xl border p-6 mb-4" style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(44, 74, 138, 0.12)" }}>
                        <Mail className="w-5 h-5" style={{ color: "var(--color-spot-cobalt, #2C4A8A)" }} />
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-1" style={{ color: "var(--color-text-primary)" }}>Email Us</p>
                        <a
                          href={`mailto:${siteConfig.email}`}
                          className="text-sm transition-colors" style={{ color: "var(--color-text-muted)" }}
                        >
                          {siteConfig.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="rounded-2xl border p-6 mb-4" style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(44, 74, 138, 0.12)" }}>
                        <Phone className="w-5 h-5" style={{ color: "var(--color-spot-cobalt, #2C4A8A)" }} />
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-1" style={{ color: "var(--color-text-primary)" }}>Call Us</p>
                        <a
                          href={`tel:${siteConfig.phone}`}
                          className="text-sm transition-colors" style={{ color: "var(--color-text-muted)" }}
                        >
                          {siteConfig.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="rounded-2xl border p-6 mb-4" style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(44, 74, 138, 0.12)" }}>
                        <MapPin className="w-5 h-5" style={{ color: "var(--color-spot-cobalt, #2C4A8A)" }} />
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-1" style={{ color: "var(--color-text-primary)" }}>Location</p>
                        <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>{siteConfig.location}</p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="rounded-2xl border p-6" style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(44, 74, 138, 0.12)" }}>
                        <MessageCircle className="w-5 h-5" style={{ color: "var(--color-spot-cobalt, #2C4A8A)" }} />
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-1" style={{ color: "var(--color-text-primary)" }}>WhatsApp</p>
                        <a
                          href={siteConfig.whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm transition-colors" style={{ color: "var(--color-text-muted)" }}
                        >
                          {siteConfig.whatsapp}
                        </a>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              </StaggerReveal>

              <AnimatedReveal delay={0.3}>
                <div className="mt-8 rounded-2xl p-6 text-center" style={{ background: "var(--color-accent)" }}>
                  <MessageCircle className="w-8 h-8 mx-auto mb-3" style={{ color: "var(--color-bg, #171410)" }} />
                  <h3 className="text-lg font-[var(--font-display)] mb-2" style={{ color: "var(--color-bg, #171410)" }}>
                    Prefer WhatsApp?
                  </h3>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: "rgba(23, 20, 16, 0.7)" }}>
                    Get a quick response on WhatsApp. We&apos;re usually online.
                  </p>
                  <a
                    href={siteConfig.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wider transition-opacity"
                    style={{ background: "var(--color-bg, #171410)", color: "white" }}
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat on WhatsApp
                  </a>
                </div>
              </AnimatedReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
