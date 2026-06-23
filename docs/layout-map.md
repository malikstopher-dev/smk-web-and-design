# LAYOUT MAP

THIS IS A VISUAL REPLICATION PROJECT.

VISUAL AUTHORITY: https://www.helloupdigital.com/

---

## GLOBAL LAYOUT

```
┌─────────────────────────────────────────────┐
│  CUSTOM CURSOR (fixed overlay)              │
├─────────────────────────────────────────────┤
│  SCROLL PROGRESS BAR (fixed top, z-50)      │
├─────────────────────────────────────────────┤
│  HEADER (fixed top, z-50)                   │
│  ┌───────────────────────────────────────┐   │
│  │ max-w-7xl mx-auto px-6 h-16 md:h-20   │   │
│  │ [LOGO]    [nav links]    [CTA button]  │   │
│  └───────────────────────────────────────┘   │
├─────────────────────────────────────────────┤
│                                             │
│  MAIN CONTENT (min-height screen)           │
│  ├───────────────────────────────────────── │
│  │  HERO                                    │
│  │  min-h-screen, flex-col justify-center   │
│  │  padding: 140px 6vw 100px                │
│  │  max-w-[90vw] heading                    │
│  │  max-w-7xl subtext + CTAs                │
│  │  marquee: absolute bottom-0, border-t    │
│  ├───────────────────────────────────────── │
│  │  SECTIONS                                │
│  │  Each: py-32 md:py-48                    │
│  │  px-6 md:px-12 lg:px-20                  │
│  │  max-w-7xl mx-auto                       │
│  │  SectionLabel: mb-5                      │
│  │  SectionHeading: mb-24                   │
│  ├───────────────────────────────────────── │
│  │  CTA SECTION                             │
│  │  text-center, centered heading + btn     │
│  ├───────────────────────────────────────── │
│  └───────────────────────────────────────── │
│                                             │
├─────────────────────────────────────────────┤
│  FOOTER                                     │
│  border-t border-[var(--color-border)]      │
│  bg-[#050507]                               │
│  max-w-7xl mx-auto px-6 md:px-12 lg:px-20   │
│  pt-16 pb-8                                 │
│  grid grid-cols-1 md:grid-cols-4 gap-12     │
│  copyright bar: pt-8 border-t flex between  │
├─────────────────────────────────────────────┤
│  WHATSAPP BUTTON (fixed bottom-right z-50)  │
│  h-14 w-14 rounded-full bg-[#25D366]        │
└─────────────────────────────────────────────┘
```

---

## BREAKPOINTS

| Name | Min Width | Notes |
|---|---|---|
| Default | 0 | Mobile-first |
| md | 768px | Desktop layout switch |
| lg | 1024px | Wider horizontal padding |

---

## SECTION PADDING

| Context | Value |
|---|---|
| Vertical section padding | py-32 (8rem) → md:py-48 (12rem) |
| Horizontal padding (mobile) | px-6 (1.5rem) |
| Horizontal padding (md+) | md:px-12 (3rem) |
| Horizontal padding (lg+) | lg:px-20 (5rem) |
| Container max-width | max-w-7xl (1280px) |
| Hero heading max-width | max-w-[90vw] |
| Content max-width (text) | max-w-2xl / max-w-lg / max-w-sm |

---

## TYPOGRAPHY SCALE

| Element | Size | Weight | Line Height | Letter Spacing | Font |
|---|---|---|---|---|---|
| Hero heading | clamp(72px, 10vw, 160px) | 700 | 0.88 | -0.06em | --font-display |
| Section heading | clamp(2rem, 4.5vw, 4rem) | 400 | 1.05 | -0.03em | --font-display |
| Section subheading | text-lg md:text-xl | 400 | 1.625 | normal | --font-body |
| Section label | 11px | 400 | normal | 0.25em | --font-body |
| Service title | text-xl md:text-3xl | 600 | normal | normal | --font-display |
| Portfolio title | heading-lg (clamp 2rem,4.5vw,4rem) | 400 | 1.05 | -0.03em | --font-display |
| Process step number | text-[120px] md:text-[60px] mobile | 700 | 1 | normal | --font-display |
| Process step title | text-2xl md:text-xl mobile | 400 | normal | normal | --font-display |
| Testimonial quote | text-xl md:text-[28px] | italic | 1.625 | normal | --font-body |
| CTA heading | text-4xl md:text-[64px] | 400 | 0.92 | normal | --font-display |
| Nav link | text-[11px] uppercase | 500 | normal | 0.2em | --font-body |
| Footer link | text-sm | 400 | normal | normal | --font-body |
| Footer heading | text-xs uppercase | 600 | normal | 0.1em | --font-body |
| Button text | text-sm | 700 | normal | 0.1em | --font-body |
| Marquee text | text-[13px] uppercase | 400 | normal | 0.15em | --font-body |

---

## COMPONENT SIZING

| Component | Width | Height | Border Radius |
|---|---|---|---|
| Header CTA button | auto | auto | rounded-lg (8px) |
| Hero CTA buttons | auto | auto | rounded-lg |
| Section CTA button | auto | py-5 | rounded-full (999px) |
| Portfolio image | 100% | aspect-ratio 16/10 | rounded-2xl (16px) |
| WhatsApp button | 3.5rem (56px) | 3.5rem | rounded-full |
| Custom cursor dot | 8px | 8px | 50% |
| Custom cursor ring | 24px | 24px | 50% |
| Testimonial dots | 6px | 6px (active: 24px) | rounded-full |

---

## GRID SYSTEM

| Context | Columns | Gap |
|---|---|---|
| Services | 1 column (vertical rows) | gap-6 md:gap-12 |
| Portfolio on homepage | 2 (alternating) | gap-10 md:gap-16 |
| Portfolio listing | 1 → md:2 → lg:3 | gap-6 |
| Process desktop | flex horizontal (no wrap) | gap-0 (connector mx-10) |
| Process mobile | 1 column | space-y-16 |
| Footer | 1 → md:4 | gap-12 |
| Contact page | 1 → lg:5 (form: 3, sidebar: 2) | gap-12 lg:gap-20 |

---

## Z-INDEX STACK

| Layer | z-index | Element |
|---|---|---|
| Base | auto | Page content |
| Section backgrounds | 0 | gradient glow blobs, section-light |
| Content | 10 | Section text and components |
| Navigation | 50 | Header |
| Mobile menu | 40 (overlay) | Fixed mobile menu |
| Custom cursor | 10000 | dot + ring |
| Noise overlay | 9999 | SVG noise texture |
| WhatsApp button | 50 | Fixed bottom-right FAB |
| Preloader | 9998 | Full-screen loading overlay |
| Scroll progress | — | Fixed top, transform scaleX |

---

## COMMON PATTERNS

### Section Pattern
```html
<section class="relative px-6 md:px-12 lg:px-20 py-32 md:py-48 overflow-hidden">
  <div class="section-light" aria-hidden="true" />  <!-- background glow -->
  <div class="mx-auto max-w-7xl relative z-10">
    <p class="text-label mb-5">LABEL</p>
    <h2 class="heading-lg mb-24">Heading</h2>
    <!-- content -->
  </div>
</section>
```

### CTA Section Pattern
```html
<section class="relative py-32 md:py-48 text-center overflow-hidden">
  <div class="section-light-2" aria-hidden="true" />
  <div class="mx-auto max-w-4xl relative z-10">
    <p class="text-label mb-6">LABEL</p>
    <h2 class="heading-xl max-w-4xl mx-auto">Heading</h2>
    <div class="mt-12">
      <a class="btn-accent text-base px-12 py-5" href="#">CTA →</a>
    </div>
  </div>
</section>
```

### Color Alternation (helloupdigital)
helloupdigital uses ALL bg-[#0A0A0F] sections with subtle radial gradient glow blobs for visual separation, NOT alternating bg colors. Two glow blob styles exist:
- `.section-light` — one glow position
- `.section-light-2` — another glow position
