import Link from "next/link";
import { siteConfig } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[#171410]">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="text-2xl font-[var(--font-display)] text-[var(--color-text-primary)]">
              SMK
            </Link>
            <p className="mt-4 text-sm text-[var(--color-text-muted)] leading-relaxed max-w-xs">
              Creative web design studio based in Johannesburg, South Africa. We build bold, high-performance websites for ambitious businesses.
            </p>
          </div>

          <div>
            <h4 className="text-[var(--color-text-primary)] font-semibold mb-4 text-xs uppercase tracking-widest font-mono">Services</h4>
            <div className="flex flex-col gap-3">
              <Link href="/services" className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] text-sm transition-colors">All Services</Link>
              <Link href="/services/website-design" className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] text-sm transition-colors">Web Design</Link>
              <Link href="/services/e-commerce" className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] text-sm transition-colors">E-Commerce</Link>
              <Link href="/services/local-seo" className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] text-sm transition-colors">SEO</Link>
              <Link href="/services/website-maintenance" className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] text-sm transition-colors">Maintenance</Link>
            </div>
          </div>

          <div>
            <h4 className="text-[var(--color-text-primary)] font-semibold mb-4 text-xs uppercase tracking-widest font-mono">Company</h4>
            <div className="flex flex-col gap-3">
              <Link href="/portfolio" className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] text-sm transition-colors">Portfolio</Link>
              <Link href="/blog" className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] text-sm transition-colors">Blog</Link>
              <Link href="/about" className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] text-sm transition-colors">About</Link>
              <Link href="/contact" className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] text-sm transition-colors">Contact</Link>
              <Link href="/privacy" className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] text-sm transition-colors">Privacy Policy</Link>
            </div>
          </div>

          <div>
            <h4 className="text-[var(--color-text-primary)] font-semibold mb-4 text-xs uppercase tracking-widest font-mono">Contact</h4>
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

        <div className="pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-text-dim)]">{siteConfig.copyright}</p>
          <a href={`mailto:${siteConfig.email}`} className="text-xs text-[var(--color-text-dim)] hover:text-[var(--color-text-primary)] transition-colors">
            {siteConfig.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
