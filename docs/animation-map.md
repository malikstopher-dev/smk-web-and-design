# ANIMATION MAP

THIS IS A VISUAL REPLICATION PROJECT.

VISUAL AUTHORITY: https://www.helloupdigital.com/

---

## FRAMER MOTION — SCROLL REVEALS

| Animation | Initial | Animate | Duration | Easing | Trigger | Usage |
|---|---|---|---|---|---|---|
| fadeInUp | opacity:0, y:40 | opacity:1, y:0 | 0.7s | [0.16,1,0.3,1] | whileInView margin:-50px once | Section headings, content blocks |
| fadeInLeft | opacity:0, x:40 | opacity:1, x:0 | 0.7s | [0.16,1,0.3,1] | whileInView | Images entering from right |
| fadeInRight | opacity:0, x:-40 | opacity:1, x:0 | 0.7s | [0.16,1,0.3,1] | whileInView | Images entering from left |
| staggerContainer | hidden:{} → visible:{ staggerChildren:0.1 } | — | 0.7s each | [0.16,1,0.3,1] | whileInView | Service rows, portfolio items, process steps |
| staggerItem | opacity:0, y:30 | opacity:1, y:0 | 0.7s | [0.16,1,0.3,1] | parent stagger | Individual stagger children |

---

## HERO ANIMATIONS

| Element | Animation | Timing | Description |
|---|---|---|---|
| Heading line 1 | y: "100%" → y: 0 (in overflow-hidden wrapper) | 0.8s, delay 0.1s | Staggered character reveal |
| Heading line 2 | y: "100%" → y: 0 (in overflow-hidden wrapper) | 0.8s, delay 0.2s | Staggered character reveal |
| Heading line 3 | y: "100%" → y: 0 (in overflow-hidden wrapper) | 0.8s, delay 0.3s | Staggered character reveal |
| Subtext + CTAs | opacity:0, y:20 → opacity:1, y:0 | 0.7s, delay 0.6s | Group fade in |
| Marquee | opacity:0 → opacity:1 | 0.7s, delay 1s | Fade in then CSS marquee |

---

## CSS ANIMATIONS

| Name | Keyframes | Duration | Timing | Usage |
|---|---|---|---|---|
| marquee | translateX(0) → translateX(-50%) | 30s | linear infinite | Client ticker at hero bottom |
| fade-in-up | opacity:0, y:30 → opacity:1, y:0 | 0.7s | ease-out fallback | CSS-only reveal (backup) |
| fade-in | opacity:0 → opacity:1 | 0.7s | ease-out fallback | CSS-only fade (backup) |

---

## TESTIMONIAL AUTO-ROTATION

| Property | Value |
|---|---|
| Interval | 5000ms |
| Enter animation | opacity:0, y:20 → opacity:1, y:0 |
| Exit animation | opacity:0, y:-20 |
| Duration | 0.5s |
| Easing | [0.16,1,0.3,1] |
| Technique | AnimatePresence mode="wait" |

---

## HEADER TRANSITIONS

| State Change | Animate | Duration |
|---|---|---|
| At top → scrolled | bg: transparent → bg: #0A0A0F/90 backdrop-blur border-b | 0.3s |
| Mobile menu open | opacity:0 → opacity:1 (Framer Motion) | 0.3s |
| Mobile menu close | opacity:1 → opacity:0 (Framer Motion) | 0.3s |

---

## HOVER EFFECTS

| Element | Effect | Transition |
|---|---|---|
| Service row | translate-x-1 title + bg highlight | 0.5s |
| Portfolio image | scale(1.05) + overlay fade in | 0.7s |
| Nav link | white/60 → white | 0.2s |
| CTA button | bg hover | 0.2s |
| "Case Study" link | gap widens on hover | 0.3s |
| WhatsApp button | scale(1.05) + bg | 0.3s |
| Footer link | white/50 → white | 0.2s |

---

## SECTION BACKGROUND EFFECTS

| Effect | CSS | Usage |
|---|---|---|
| Radial glow | radial-gradient(circle, rgba(191,255,0,0.04) 0%, transparent 65%) | Behind sections |
| Blur | filter: blur(100px) or blur(150px) | Soft glow spread |
| Noise overlay | SVG fractal noise, opacity 0.03 | Fixed, z-9999, pointer-events none |
| Gradient glow class | radial-gradient(circle, from 0%, transparent 65%), blur(120px) | Utility |

---

## CUSTOM CURSOR

| Element | Behavior |
|---|---|
| Dot | 8px circle, follows mouse with accent glow, transform3d for performance |
| Ring | 24px circle border, follows mouse with 0.1s delay |
| Label | Shows data-cursor-label text, scales in on hover elements |
| Elements with cursor | data-cursor="cta", data-cursor="project", data-cursor="link", data-cursor-label="click me" |

---

## PAGE TRANSITIONS (future enhancement)

helloupdigital uses scene wipe animations between sections:
- sc-dark-wipe: clip-path inset sweep (1.25s)
- sc-light-wipe: light version
- sc-dark-bar / sc-light-bar: sweep bar with lime accent

These are used for full-page transitions between routes. Implement if Framer Motion page transitions are desired.
