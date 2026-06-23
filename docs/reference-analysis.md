# VISUAL REFERENCE ANALYSIS

THIS IS A VISUAL REPLICATION PROJECT.

VISUAL AUTHORITY: https://www.helloupdigital.com/
CONTENT AUTHORITY: https://smk.stopher-malik.co.za

---

## 1. FONTS

| Role | Up Digital (helloupdigital) | SMK Current | Action |
|---|---|---|---|
| Primary / Body | Space Grotesk (300–700) | Inter (300–700) | SWAP to Space Grotesk |
| Display / Accent | Fraunces (300i, 700i, 900i, 300, 700, 900) | Bricolage Grotesque (300–800) | SWAP to Fraunces |
| CSS variable | --font-grotesk, --font-fraunces | --font-body, --font-display | RENAME to match |

Fraunces is the standout choice — serif italic for pull quotes, bold serif for headings.

---

## 2. COLOR PALETTE

| Token | Up Digital (hex/rgba) | SMK Current | Action |
|---|---|---|---|
| --color-accent | #BFFF00 | #C8FF00 | ADJUST to #BFFF00 |
| --color-accent-hover | #99CC00 (#9c0) | #a8d600 | ADJUST |
| --color-accent-soft | rgba(191,255,0,0.15) | rgba(200,255,0,0.08) | ADJUST |
| --color-accent-border | rgba(191,255,0,0.2) | — | ADD |
| --color-bg | #0A0A0F | #0A0A0F | KEEP |
| --color-surface | #111118 | #121214 | ADJUST |
| --color-surface-2 | #16161F | #1A1A1E | ADJUST |
| --color-text | #F5F2EC (warm white) | #F5F2EC | KEEP |
| --color-text-muted | rgba(255,255,255,0.65) | same | KEEP |
| --color-text-dim | rgba(255,255,255,0.35) | same | KEEP |
| --color-border | rgba(255,255,255,0.06) | same | KEEP |
| --color-border-hover | rgba(255,255,255,0.14) | same | KEEP |

---

## 3. NAVBAR

| Property | Up Digital | SMK Current | Action |
|---|---|---|---|
| Height (mobile) | h-16 (64px) | h-16 | KEEP |
| Height (desktop) | h-20 (80px) | md:h-20 | KEEP |
| Link font | text-[11px] → actually larger (text-sm in rendered) | text-[11px] | ADJUST to text-sm font-medium |
| Link tracking | tracking-[0.2em] | tracking-[0.2em] | KEEP |
| Link hover | text-white/70 → text-white | text-white/60 → text-white | KEEP |
| CTA button | px-5 py-2 rounded-lg bg-[#BFFF00] text-[#0A0A0F] text-sm font-bold hover:bg-[#99CC00] | px-5 py-2 rounded-lg bg-[var(--color-accent)] text-[#0A0A0F] text-sm font-bold | KEEP (use --color-accent) |
| Transition | transition-all duration-200 | transition-colors duration-300 | ADJUST duration |
| Mobile menu bg | bg-[#0A0A0F] backdrop-blur-2xl | bg-[#0A0A0F]/95 backdrop-blur-2xl | KEEP |

---

## 4. HERO

| Property | Up Digital | SMK Current | Action |
|---|---|---|---|
| Theme | Space/cosmic (planets, stars, comets, nebula, moons) | Gradient blobs + noise | SWAP to space theme |
| Heading font | Space Grotesk (700) | Bricolage Grotesque | SWAP |
| Heading size | clamp(72px, 10vw, 160px) | clamp(72px, 10vw, 160px) | KEEP (same!) |
| Heading color | 3 lines: dim white / text / accent | 3 lines: dim / text / accent | KEEP pattern |
| Letter-spacing | -0.06em | -0.06em | KEEP |
| Line-height | 0.88 | 0.88 | KEEP |
| Subtext | text-base md:text-lg max-w-sm | text-base md:text-lg max-w-lg | ADJUST max-w |
| CTA buttons | Hero has accent link (not button) "Book a Free Consultation →" + outline "View Work →" | accent btn + outline btn | KEEP but style as links |
| Marquee | Client logos repeating | Client names repeating | KEEP structure, ADJUST content |

---

## 5. SECTIONS — SPACING PATTERN

| Section | Up Digital | SMK Current | Action |
|---|---|---|---|
| Section padding | py-32 md:py-48 (8rem / 12rem) | py-32 md:py-48 | KEEP |
| Horizontal padding | px-6 md:px-12 lg:px-20 | px-6 md:px-12 lg:px-20 | KEEP |
| Section label | text-[11px] uppercase tracking-[0.25em] text-[var(--color-text-dim)] mb-5 | same | KEEP |
| Section heading | text-[clamp(2rem,4.5vw,4rem)] font-[var(--font-display)] leading-[1.05] tracking-[-0.03em] | same | KEEP |
| Section heading margin-bottom | mb-24 (6rem) | mb-24 | KEEP |
| Section bg alternation | All bg-[#0A0A0F] with subtle radial glow blobs | Alternating bg / surface | ADJUST to all bg with glow blobs |

---

## 6. SERVICES SECTION

| Property | Up Digital | SMK Current | Action |
|---|---|---|---|
| Layout | Vertical row list | Vertical row list | KEEP |
| Number | text-[13px] font-mono w-8 | text-[13px] font-mono w-8 | KEEP |
| Title | text-xl md:text-3xl font-display font-semibold | text-xl md:text-4xl | ADJUST (3xl not 4xl) |
| Tagline | hidden md:block text-sm ml-auto max-w-xs text-right | hidden md:block text-sm ml-auto max-w-xs text-right | KEEP |
| Divider | border-t border-[var(--color-border)] | border-t border-white/[0.06] | KEEP |
| Hover bg | var(--color-accent-subtle) | bg-white/[0.02] | ADJUST |
| Border-radius hover | rounded-2xl | rounded-2xl | KEEP |
| View All link | text-sm transition-colors uppercase tracking-[0.2em] color dim | same | KEEP |

---

## 7. PORTFOLIO SECTION

| Property | Up Digital | SMK Current | Action |
|---|---|---|---|
| Layout | Alternating image/text (grid-cols-2, direction alternates) | 3-column card grid | SWAP to alternating layout |
| Image aspect | 16/10 rounded-2xl | 16/10 | KEEP |
| Image filter | grayscale(30%) | none | ADD grayscale filter |
| Image hover | scale-105 with overlay | scale-105 | KEEP |
| Overlay | gradient overlay + "View Project →" text | gradient overlay | ADD overlay text |
| Project number | text-[13px] font-mono | hidden | ADD |
| Category label | text-[10px] uppercase tracking-[0.25em] text-accent | shown in card | KEEP |
| Title | heading-lg (clamp) | text-3xl md:text-4xl | ADJUST |
| Description | text-sm max-w-sm | text-sm | KEEP |
| Link | "Case Study →" with hover gap animation | link to project | ADD animation |
| Vertical spacing | space-y-32 md:space-y-48 | grid gap-6 | ADJUST |

---

## 8. PROCESS SECTION

| Property | Up Digital | SMK Current | Action |
|---|---|---|---|
| Desktop layout | Horizontal scroll with connector lines | Horizontal scroll | KEEP (already matches) |
| Step number | text-[120px] font-bold leading-none opacity-[0.04] | text-[120px] font-bold | ADJUST opacity |
| Step width | w-72 | w-72 | KEEP |
| Connector | process-line mx-10 | — | ADD connector style |
| Mobile layout | Vertical stack with border-top | Accordion? | ADJUST to vertical stack |

---

## 9. TESTIMONIALS SECTION

| Property | Up Digital | SMK Current | Action |
|---|---|---|---|
| Layout | Single quote with fade transition | Single quote with fade transition | KEEP (already matches!) |
| Quote font | text-xl md:text-[28px] italic leading-relaxed | text-xl md:text-[28px] italic | KEEP |
| Quote weight | italic | italic | KEEP |
| Name | text-sm font-medium | text-sm font-medium | KEEP |
| Role | text-sm text-muted | text-sm text-muted | KEEP |
| Dots | w-2 h-2 rounded-full, active = w-6 bg-white, inactive = bg-white/20 | w-6 h-1.5 rounded-full | ADJUST to match (circle dots) |
| Auto-rotation | 5s interval with AnimatePresence | Not auto-rotating | ADD auto-rotation |
| Dot transition | transition-all duration-300 | transition-all duration-500 | ADJUST |

---

## 10. CTA SECTION

| Property | Up Digital | SMK Current | Action |
|---|---|---|---|
| Layout | Centered text + button, full-width | Centered text + button | KEEP |
| Heading | "Ready to grow?" text-4xl md:text-[64px] leading-[0.92] | "Ready to grow?" size varies | ADJUST to exact sizing |
| Button | btn-accent text-base px-12 py-5 rounded-full | Button component px-8 py-4 | ADJUST padding |
| Background | Radial gradient glow blobs | surface bg | ADD glow blobs |

---

## 11. FOOTER

| Property | Up Digital | SMK Current | Action |
|---|---|---|---|
| Columns | 4 (brand, nav 1, nav 2, contact) | 4 (brand, services, company, contact) | ADJUST nav columns |
| Brand font | text-2xl font-display | text-2xl font-display | KEEP |
| Heading | text-xs uppercase tracking-widest font-semibold text-white | same | KEEP |
| Links | text-sm text-white/50 hover:text-white | text-sm text-white/50 hover:text-white | KEEP |
| Copyright bar | pt-8 border-t, flex between, text-xs text-white/35 | same | KEEP |

---

## 12. MOTION TIMING

| Animation | Up Digital Easing | SMK Current | Action |
|---|---|---|---|
| Scroll reveal | cubic-bezier(0.16, 1, 0.3, 1) | same | KEEP |
| Stagger delay | 0.1s | 0.1s | KEEP |
| Reveal duration | 0.7s | 0.7s | KEEP |
| Portfolio scale | 0.7s | 0.7s | KEEP |
| Nav transition | 0.2s | 0.3s | ADJUST to 0.2s |
| Section wipe | 1.25s (scene change) | — | ADD for page transitions |

---

## 13. CUSTOM CURSOR

Up Digital has a custom cursor with:
- Small dot following mouse (accent color glow)
- Ring around dot
- Text label on hover (via data-cursor-label)

SMK current: no custom cursor. ADD custom cursor.

---

## 14. KEY DIFFERENCES SUMMARY

1. **Fonts**: Swap Inter → Space Grotesk, Bricolage → Fraunces
2. **Accent color**: #C8FF00 → #BFFF00
3. **Card colors**: #121214 → #111118, #1A1A1E → #16161F
4. **Hero**: Add space theme (planets, stars, comets) instead of gradient blobs
5. **Portfolio**: Swap from grid to alternating image/text layout
6. **Testimonials**: Change dots to circles, add auto-rotation
7. **Cursor**: Add custom cursor component
8. **Animations**: Add scene wipe transitions, character land effects
9. **Section backgrounds**: More gradient glow blobs instead of flat surface alternation
