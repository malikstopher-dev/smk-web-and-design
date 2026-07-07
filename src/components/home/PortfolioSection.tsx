"use client";

import Image from "next/image";
import Link from "next/link";
import { portfolioProjects } from "@/lib/content";
import { AnimatedReveal, SectionLabel } from "@/components/ui/AnimatedReveal";
import { RegistrationMark } from "@/components/ui/RegistrationMark";
import { motion } from "framer-motion";

const spotColors = [
  "var(--color-spot-cobalt, #2C4A8A)",
  "var(--color-spot-moss, #5C6B3F)",
  "var(--color-spot-plum, #5C2E4A)",
  "var(--color-spot-slate, #3D4A52)",
];

const refTags: Record<string, string> = {
  "salem-home-innovation": "HOME",
  "the-boma-cafe": "REST",
  "selrahc-architects": "ARCH",
  "tomy-global-services-pages": "BIZ",
  "chicken-fiestas": "FAST",
  "be-mhlanga-services": "MAINT",
  "tomy-global-services-vercel": "BIZ",
  "jmoto-electrical": "ELEC",
  "electrolight": "ELEC",
  "jkj-solartech": "SOLR",
  "cleanisa-solutions": "CLN",
  "uzapa-construction": "CONS",
  "le-centre": "LOU",
  "babooshka-catering": "CAT",
  "one-o-one-on-fraser": "REST",
  "penzura": "WEB",
  "marche-lt-eben-ezer": "ECOM",
  "cooks-bistro": "DINE",
  "limoncello": "REST",
  "chefs-buxaba": "CHEF",
  "la-dolce-vita": "REST",
  "levante": "LEB",
};

const featured = portfolioProjects.slice(0, 3);

export function PortfolioSection() {
  return (
    <section className="relative px-6 md:px-12 lg:px-20 py-32 md:py-48 bg-[var(--color-bg)]">
      <div className="mx-auto max-w-7xl relative z-10">
        <AnimatedReveal>
          <SectionLabel>Selected Work</SectionLabel>
          <h2 className="heading-lg mb-24" style={{ color: "var(--color-text-primary)" }}>
            Our projects
          </h2>
        </AnimatedReveal>

        <div className="space-y-32 md:space-y-48">
          {featured.map((project, i) => {
            const spotColor = spotColors[i % spotColors.length];
            const refCode = `REF. ${project.number} — ${refTags[project.id] || "WEB"}`;

            return (
              <AnimatedReveal key={project.id} delay={i * 0.15}>
                <motion.div
                  className="grid gap-10 md:grid-cols-2 md:gap-16 items-stretch"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Proof Card */}
                  <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
                    <Link href={`/portfolio/${project.slug}`} data-cursor="project">
                      <motion.div
                        className="relative overflow-hidden"
                        style={{
                          backgroundColor: "var(--color-paper, #EFEAE5)",
                          aspectRatio: "16/11",
                          borderLeft: `3px solid ${spotColor}`,
                        }}
                        whileHover="hover"
                        initial="rest"
                      >
                        {/* registration-mark corners */}
                        <div className="absolute top-3 left-3 z-20">
                          <motion.div
                            variants={{
                              rest: { scale: 1 },
                              hover: { scale: 0.85 },
                            }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          >
                            <RegistrationMark corner="tl" length={16} strokeWidth={1} color={spotColor} />
                          </motion.div>
                        </div>
                        <div className="absolute top-3 right-3 z-20">
                          <motion.div
                            variants={{
                              rest: { scale: 1 },
                              hover: { scale: 0.85 },
                            }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          >
                            <RegistrationMark corner="tr" length={16} strokeWidth={1} color={spotColor} />
                          </motion.div>
                        </div>
                        <div className="absolute bottom-3 left-3 z-20">
                          <motion.div
                            variants={{
                              rest: { scale: 1 },
                              hover: { scale: 0.85 },
                            }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          >
                            <RegistrationMark corner="bl" length={16} strokeWidth={1} color={spotColor} />
                          </motion.div>
                        </div>
                        <div className="absolute bottom-3 right-3 z-20">
                          <motion.div
                            variants={{
                              rest: { scale: 1 },
                              hover: { scale: 0.85 },
                            }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          >
                            <RegistrationMark corner="br" length={16} strokeWidth={1} color={spotColor} />
                          </motion.div>
                        </div>

                        {/* image */}
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover opacity-85 mix-blend-multiply"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />

                        {/* spot-color wash overlay */}
                        <div
                          className="absolute inset-0 z-10 pointer-events-none"
                          style={{
                            background: `linear-gradient(135deg, ${spotColor}08 0%, transparent 60%)`,
                          }}
                        />
                      </motion.div>
                    </Link>
                  </div>

                  {/* Card details */}
                  <div className={`flex flex-col justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
                    <p
                      className="font-mono text-[11px] uppercase tracking-[0.25em] mb-3"
                      style={{ color: spotColor }}
                    >
                      {refCode}
                    </p>
                    <h3
                      className="font-[var(--font-display)] text-3xl md:text-4xl leading-tight mb-4"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="font-[var(--font-display)] italic text-base md:text-lg leading-relaxed mb-8"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {project.description}
                    </p>
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium font-mono uppercase tracking-[0.15em] transition-all duration-300 hover:gap-3"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      Case Study →
                    </Link>
                  </div>
                </motion.div>
              </AnimatedReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
