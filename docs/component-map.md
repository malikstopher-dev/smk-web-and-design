# COMPONENT MAP

THIS IS A VISUAL REPLICATION PROJECT.

VISUAL AUTHORITY: https://www.helloupdigital.com/

---

## REUSABLE COMPONENTS

| # | Component | Source | Description | Props |
|---|---|---|---|---|
| 1 | Header | helloupdigital | Fixed navbar, transparent→scrolled bg, mobile hamburger | none |
| 2 | Footer | helloupdigital | 4-column grid, brand + nav + contact, copyright bar | none |
| 3 | AnimatedReveal | helloupdigital | Scroll-triggered fade/slide reveal | children, direction, delay, className, once |
| 4 | StaggerReveal | helloupdigital | Container with stagger children animation | children, className, staggerDelay |
| 5 | StaggerItem | helloupdigital | Individual stagger child | children, className |
| 6 | SectionLabel | helloupdigital | 11px uppercase tracking label | children, className |
| 7 | SectionHeading | helloupdigital | clamp font-display heading | children, className |
| 8 | Button | helloupdigital | CTA buttons (primary, outline, ghost) | children, href, variant, onClick, etc. |
| 9 | WhatsAppButton | helloupdigital | Fixed bottom-right WhatsApp FAB | none |
| 10 | CustomCursor | helloupdigital | Dot + ring following mouse, hover labels | none |
| 11 | ScrollProgress | helloupdigital | Top-of-page scroll progress bar | none |
| 12 | Preloader | helloupdigital | Full-screen loading animation | none |

---

## PAGE-SPECIFIC COMPONENTS

### Homepage

| # | Component | Replicates | Description |
|---|---|---|---|
| 1 | HeroSection | helloupdigital hero | Space-themed, 3-line heading, subtext, CTAs, marquee |
| 2 | ServicesSection | helloupdigital services | Row list of 4 services with hover effect |
| 3 | PortfolioSection | helloupdigital portfolio | 3 alternating image/text project cards |
| 4 | ProcessSection | helloupdigital process | Horizontal timeline (desktop) / vertical stack (mobile) |
| 5 | TestimonialsSection | helloupdigital testimonials | Auto-rotating quotes with dot navigation |
| 6 | CTASection | helloupdigital CTA | Centered heading + button with glow |

---

## COMPONENT HIERARCHY

```
layout.tsx
  ├── Preloader
  ├── CustomCursor
  ├── ScrollProgress
  ├── Header
  │   ├── Logo (text link)
  │   ├── DesktopNav (5 links)
  │   ├── CTAButton ("Book a Call")
  │   └── MobileMenu (full-screen overlay)
  ├── Page Content (children)
  └── Footer
      ├── Brand Column
      ├── Nav Columns (2)
      └── Contact Column

Homepage:
  ├── HeroSection
  │   ├── SpaceBackground (planets, stars, comets)
  │   ├── HeadingLines (3 staggered)
  │   ├── Subtext
  │   ├── CTALinks (2)
  │   └── Marquee (client names)
  ├── ServicesSection
  │   ├── SectionLabel
  │   ├── SectionHeading
  │   ├── ServiceRow × 4
  │   └── ViewAllLink
  ├── PortfolioSection
  │   ├── SectionLabel
  │   ├── SectionHeading
  │   ├── ProjectCard × 3 (alternating layout)
  │   └── SeeAllLink
  ├── ProcessSection
  │   ├── SectionLabel
  │   ├── SectionHeading
  │   ├── ProcessStep × 5 (desktop horizontal / mobile vertical)
  │   └── ConnectorLines (desktop only)
  ├── TestimonialsSection
  │   ├── SectionLabel
  │   ├── QuoteDisplay (animated)
  │   ├── AuthorInfo
  │   └── DotNavigation (3 dots)
  └── CTASection
      ├── SectionLabel
      ├── Heading
      └── Button
```

---

## STATE REQUIREMENTS

| Component | State | Type |
|---|---|---|
| Header | scrollY > 20 (scrolled/transparent) | useState + event listener |
| Header | mobileOpen (true/false) | useState |
| Testimonials | activeIndex (0-2) | useState + interval |
| Testimonials | isAnimating (true/false) | useState |
| CustomCursor | position (x, y) | mouse move event |
| CustomCursor | hoverLabel (string | null) | data-cursor-label attr |
| Preloader | isLoading (true/false) | useState |
| ScrollProgress | progress (0-1) | scroll event |
| PortfolioSection | activeCategory | useState (if filtering) |
