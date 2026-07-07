import Link from "next/link";
import { siteConfig } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.04] bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="text-lg font-[var(--font-display)] text-[var(--color-text-primary)]">
              SMK
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)] max-w-xs">
              Johannesburg-based web design studio building premium websites that grow businesses.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-dim)] mb-5">Services</h4>
            <div className="flex flex-col gap-3">
              <Link href="/services" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors">All Services</Link>
              <Link href="/services/website-design" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors">Web Design</Link>
              <Link href="/services/e-commerce" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors">E-Commerce</Link>
              <Link href="/services/local-seo" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors">SEO</Link>
              <Link href="/services/website-maintenance" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors">Maintenance</Link>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-dim)] mb-5">Company</h4>
            <div className="flex flex-col gap-3">
              <Link href="/portfolio" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors">Work</Link>
              <Link href="/blog" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors">Insights</Link>
              <Link href="/about" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors">About</Link>
              <Link href="/contact" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors">Contact</Link>
              <Link href="/privacy" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors">Privacy Policy</Link>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-dim)] mb-5">Contact</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a href={`mailto:${siteConfig.email}`} className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors">
                {siteConfig.email}
              </a>
              <a href={`tel:${siteConfig.phone}`} className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors">
                {siteConfig.phone}
              </a>
              <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors">
                WhatsApp
              </a>
              <p className="text-[var(--color-text-muted)]">{siteConfig.location}</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-text-dim)]">{siteConfig.copyright}</p>
          <a href={`mailto:${siteConfig.email}`} className="text-xs text-[var(--color-text-dim)] hover:text-[var(--color-text-primary)] transition-colors">
            {siteConfig.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
