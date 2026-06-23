# Design System — Hello Up Digital Reference

## Source: https://www.helloupdigital.com/

## 1. Color Palette

### Backgrounds
- Page background: `#0A0A0F` (near-black)
- Dark sections: `#050507`, `#030305` (footer CTA area)
- Surface/cards: `#121214`
- Light sections (not used in SMK rebuild): `#f5f5f0`, `#f7f7f2`

### Accent
- Primary accent: `#BFFF00` (lime green)
- Hover: `#99CC00`
- Used for: CTAs, badges, link hover, glow shadows

### SMK Accent (from live site)
- `#C8FF00` (slightly warmer lime)
- `#D7FF2F` (variant seen on process page)

### Text
- Primary: `#F5F2EC` / `white`
- Muted: `rgba(255,255,255,.65)` / `text-white/50`
- Dim: `rgba(255,255,255,.35)` / `text-white/35`
- Labels: `rgba(255,255,255,.20)` / `text-[11px] uppercase tracking-[0.2em]`

### Borders
- Default: `rgba(255,255,255,.06)`
- Hover: `rgba(255,255,255,.14)`

## 2. Typography

### Fonts
- **Display/Headings:** Bricolage Grotesque (via Google Fonts)
- **Body:** Inter (via Google Fonts)
- Label text: uppercase with wide tracking

### Size System (clamp)
- Hero word: `clamp(72px, 10vw, 160px)`
- Section heading: `clamp(2rem, 4.5vw, 4rem)`
- Card heading: `text-xl md:text-3xl`
- Body: `text-sm` to `text-lg`
- Labels: `text-[11px]`
- Navigation: `text-[11px] uppercase tracking-[0.2em]`
- Section numbers: `text-[120px]` (desktop), `text-7xl` (mobile)

### Letter Spacing
- Headings: `-0.06em` to `-0.03em`
- Labels: `0.2em` to `0.4em`
- Body: normal

## 3. Navigation

### Desktop
- Fixed, transparent initially → blur bg on scroll
- Height: `h-16 md:h-20`
- Links: `text-[11px] uppercase tracking-[0.2em] text-white/60 hover:text-white`
- CTA button: `px-5 py-2 rounded-lg bg-[var(--color-accent)] text-black text-sm font-bold`
- Container: `max-w-7xl mx-auto px-6`

### Mobile
- Hamburger (md:hidden)
- Full-screen overlay: `bg-black/95 backdrop-blur-2xl`
- Links: `text-2xl uppercase tracking-[0.15em]`

## 4. Hero (Home)
- Full screen `min-h-screen`
- Three lines: "WE BUILD" (dim), "WEBSITES" (white), "THAT WORK." (accent)
- Font: `clamp(72px, 10vw, 160px)` leading `0.88` tracking `-0.06em`
- Subtitle + CTA below
- Client marquee at bottom: `text-[13px] uppercase tracking-[0.15em]`
- Background glow: radial gradient circles of accent color
- Section padding: `140px 6vw 80px`

## 5. Services Sections
### Home Page Services
- Section label: "SERVICES"
- Heading: "What we build"
- Individual rows: number + title + description
- Borders between items: `border-t border-white/[0.06]`
- Hover: `bg-[var(--color-surface)]` with `translateX(2)` on title
- "View All Services →" link at bottom

### Services Page (2x2 grid)
- Grid: `md:grid-cols-2 gap-px bg-[var(--color-border)]`
- Card: `bg-[var(--color-bg)] p-8 md:p-12`
- Number: `text-3xl font-light`
- Features section with separator

## 6. Portfolio Sections
### Home Page
- Section label: "SELECTED WORK"
- 3 projects in alternating layout (image-left, image-right)
- Grid: `md:grid-cols-2` with `md:gap-16`
- Image: `aspect-[16/10] rounded-2xl overflow-hidden`
- Project number + category badge + title + description + link

### Portfolio Page
- Grid of all projects

## 7. Process
### Home Page (horizontal)
- Label: "PROCESS", Heading: "How we work"
- Horizontal scroll on desktop: `flex gap-16 min-w-max`
- Steps: number (`text-[120px]` light) + title + description
- Connector lines between steps
- Mobile: vertical stack with borders

## 8. Testimonials
- Section label: "What Our Clients Say"
- Auto-rotating quote block
- Navigation dots: `w-2 h-2 rounded-full` (active: `bg-white w-6`, inactive: `bg-white/20`)
- Italic quote, name + role below

## 9. CTA Section
- "Ready to grow?" heading: `text-4xl md:text-[64px]` leading `0.92`
- CTA: `rounded-full bg-[var(--color-accent)] text-black px-10 py-5`
- Section: `border-y border-white/[0.06] bg-[var(--color-surface)]`

## 10. Footer
- Max container: `max-w-7xl mx-auto px-6 pt-16 pb-8`
- 4-column grid: Brand, Services, Company, Contact
- Links: `text-white/50 hover:text-white text-sm`
- Legal bar with copyright

## 11. Motion System
- Scroll reveals: opacity 0 → 1, translateY 20-40px
- Duration: 0.7s
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)`
- Stagger delays: 0.1s between items
- No bounce, no flashy effects
- Subtle hover: opacity, border, scale-105

## 12. Spacing
- Section padding: `clamp(4rem, 10vw, 8rem)` top/bottom
- Inner card padding: `p-8 md:p-12`
- Gap between sections: sections stacked directly
- Container width: `max-w-7xl` with `px-6 md:px-12 lg:px-20`

## 13. Responsive Breakpoints
- Desktop: 1440+
- Laptop: 1024+
- Tablet: 768+
- Mobile: 390+
