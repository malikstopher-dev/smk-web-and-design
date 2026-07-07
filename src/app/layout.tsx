import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import "./globals.css";

const BASE_URL = "https://smk.stopher-malik.co.za";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "SMK Web Design | Web Design Studio Johannesburg",
    template: "%s — SMK Web Design",
  },
  description: "SMK Web Design builds high-performance websites for South African businesses. SEO-ready, conversion-optimised, delivered fast. Book a free consultation.",
  robots: "index, follow",
  alternates: {
    canonical: BASE_URL,
    languages: {
      "en-ZA": BASE_URL,
    },
  },
  openGraph: {
    title: "SMK Web Design | Web Design Studio",
    description: "SMK Web Design builds high-performance websites for South African businesses. SEO-ready, conversion-optimised, delivered fast.",
    siteName: "SMK Web Design",
    type: "website",
    locale: "en_ZA",
    url: BASE_URL,
    images: [{
      url: `${BASE_URL}/og-image-1200x630.png`,
      width: 1200,
      height: 630,
      alt: "SMK Web Design — Web Design Studio Johannesburg",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SMK Web Design | Web Design Studio",
    description: "SMK Web Design builds high-performance websites for South African businesses. SEO-ready, conversion-optimised, delivered fast.",
    images: [`${BASE_URL}/og-image-1200x630.png`],
  },
  category: "Web Design",
  classification: "Web Design & Development",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SMK Web Design",
  description: "Websites That Grow Your Business — SEO-ready web design studio in Johannesburg.",
  url: "https://smk.stopher-malik.co.za",
  email: "info@stopher-malik.co.za",
  telephone: "+27729998863",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Paulshof, Sandton",
    addressRegion: "Gauteng",
    addressCountry: "ZA",
  },
  sameAs: [
    "https://wa.me/27825100050",
  ],
  foundingDate: "2021",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-ZA">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Fraunces:ital,wght@0,300;0,400;0,600;0,700;0,900;1,300;1,700;1,900&display=swap" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased bg-[var(--color-bg)] text-[var(--color-text-primary)] font-body">
        <div className="noise-overlay" aria-hidden="true" />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
