# Component Plan — SMK Web Design Rebuild

## Directory Structure
```
src/
├── app/
│   ├── layout.tsx              # Root layout (fonts, header, footer)
│   ├── page.tsx                # Home page
│   ├── services/
│   │   ├── page.tsx            # Services listing
│   │   └── [slug]/page.tsx     # Service detail
│   ├── portfolio/
│   │   ├── page.tsx            # Portfolio grid
│   │   └── [slug]/page.tsx     # Project case study
│   ├── blog/
│   │   ├── page.tsx            # Blog listing + search + categories
│   │   └── [slug]/page.tsx     # Blog post
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── contact/
│   │   └── page.tsx            # Contact page
│   ├── sitemap.ts              # Generated sitemap
│   └── robots.ts               # Robots.txt
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Fixed nav, mobile menu
│   │   └── Footer.tsx          # 4-column footer
│   ├── home/
│   │   ├── Hero.tsx            # Large typography hero
│   │   ├── ServicesSection.tsx # Service list items
│   │   ├── PortfolioSection.tsx# Featured projects
│   │   ├── ProcessSection.tsx  # Horizontal process
│   │   ├── TestimonialsSection.tsx # Auto-rotating
│   │   └── CTASection.tsx      # "Ready to grow?"
│   ├── services/
│   │   └── ServiceCard.tsx     # Service grid card
│   ├── portfolio/
│   │   └── ProjectCard.tsx     # Project grid item
│   ├── blog/
│   │   ├── BlogCard.tsx        # Blog listing card
│   │   └── BlogSearch.tsx       # Search + filter UI
│   ├── about/ (inline in page)
│   └── ui/
│       ├── AnimatedReveal.tsx  # Scroll animation wrapper
│       ├── Button.tsx          # CTA button variants
│       └── WhatsAppButton.tsx  # Fixed WhatsApp FAB
├── lib/
│   ├── content.ts              # ALL static content data
│   └── utils.ts                # cn(), formatDate(), etc.
├── types/
│   └── index.ts                # TypeScript interfaces
└── styles/ (Phase 2)
```

## Component Hierarchy

### Root Layout
```
<html>
  <body>
    <NoiseOverlay />
    <Header />
    <main>{children}</main>
    <Footer />
    <WhatsAppButton />
  </body>
</html>
```

### Home Page
```
<Hero />                          # WE BUILD / WEBSITES / THAT WORK.
<ServicesSection />               # 4 services as list items
<PortfolioSection />              # 3 featured projects with images
<ProcessSection />                # 5 steps horizontal scroll
<TestimonialsSection />           # Auto-rotating quotes
<CTASection />                    # "Ready to grow?" banner
```

### Other Pages
Each page follows pattern:
```
<PageHero />                      # SectionLabel + HeadingXL + Description
<ContentSection />                # Main content with AnimatedReveal
<CTASection />                    # Bottom CTA
```

## Animation Strategy
- **AnimatedReveal** — Wrapper component using Framer Motion
  - Fades in + translates up on scroll
  - Stagger delays for lists
  - Duration: 0.7s, easing: cubic-bezier(0.16, 1, 0.3, 1)
- **StaggerReveal / StaggerItem** — For staggered list animations
- **No bounce or flashy effects**

## Design Tokens (CSS Variables)
```css
--color-bg: #0A0A0F;
--color-surface: #121214;
--color-accent: #C8FF00;
--color-text-primary: #F5F2EC;
--color-text-muted: rgba(255,255,255,.65);
--color-text-dim: rgba(255,255,255,.35);
--font-display: 'Bricolage Grotesque', sans-serif;
--font-body: 'Inter', sans-serif;
```

## Inspired By
- helloupdigital.com design patterns
- Dark theme with lime accent (#C8FF00)
- Large typography with clamp() sizing
- Minimal cards, generous whitespace
- Fixed header with transparent→blur transition
- Section-padding for consistent vertical rhythm
