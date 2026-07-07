# SMK Web Design (smk.stopher-malik.co.za) — Premium Redesign Brief

Visual system replacement only. Every run below is instructed to leave copy,
data, routes, and information architecture exactly as they are — only the
design layer changes.

---

## The direction: "Proof Sheet"

Grounded in the actual craft SMK sells: print and brand production, not just
web dev. The site should read like a designer's proof sheet — the artifact a
studio produces to check and stamp work before it ships. Every case study
becomes its own "proof": its own ink, its own reference code, its own
registration marks — while the shell around it (nav, type, footer) stays one
disciplined identity. That's the actual pitch of a design studio: not a
template, a bespoke system per client, inside one confident process. The
design should demonstrate that claim, not just state it.

**Palette**
| Token | Hex | Role |
|---|---|---|
| `ink` | `#171410` | Primary background — warm near-black, like true printer's ink, not tech dark-mode |
| `paper` | `#EFEAE5` | Reversed surface for proof cards; body text set on ink |
| `graphite` | `#8B8579` | Muted captions, hairline dividers |
| `spot-cobalt` | `#2C4A8A` | Proof accent 1 |
| `spot-moss` | `#5C6B3F` | Proof accent 2 |
| `spot-plum` | `#5C2E4A` | Proof accent 3 |
| `spot-slate` | `#3D4A52` | Proof accent 4 (only if a 4th distinct accent is needed) |

**Type**
- Display — **Fraunces** (soft-serif, warm ball terminals, not a high-contrast Didone). Large for headlines; italic for captions and pull-quotes.
- Body — **Instrument Sans** (fallback: General Sans). Clean humanist grotesque for paragraphs, nav, buttons.
- Utility/mono — **JetBrains Mono** (fallback: IBM Plex Mono). Uppercase, wide tracking. Used only for reference codes and production-mark annotations — never for body copy.

**Layout**
Editorial-spread rhythm, generous margins — not dense newspaper columns. A
recurring registration-mark motif: thin L-shaped corner brackets (like print
crop marks) framing the hero and every proof card, rendered as a lightweight
SVG/CSS device in `graphite`, restrained rather than heavy.

```
[⌐]                                                  [¬]
     PROOF SHEET — SMK                    <- mono, tracked out, small

     Websites and brand systems
     built like they'll be framed.        <- Fraunces, huge

     [short supporting line, Instrument Sans]

     [Start a project ->]   [See the work]

[L]                                                  [-‚]
```

**Signature element — the Proof Card.** Every portfolio project renders as a
large card on a `paper` surface (inverted from the page's `ink` background),
assigned one spot color as a thin edge/wash, a mono reference code (e.g. `REF.
03 — ARCH/FR-EN`), registration-mark corners, and a Fraunces-italic one-line
caption pulled from the project's existing description. This is the one
thing the redesign should be remembered for — everything else stays quiet
around it.

**Motion (Framer Motion — already in the stack)**
- Page load: one orchestrated moment — corner marks and hero type settle in over ~600–800ms, once, not scattered.
- Scroll: proof cards rise/fade in as they enter view, spot-color edge revealing with them.
- Hover: card lifts slightly (shadow + 2–4px translate); registration-mark corners "draw in."
- `prefers-reduced-motion` gets an instant, no-transition fallback across all of the above.

---

## Run 1 — Tokens + shell

```
You're working in the Next.js + TypeScript + Tailwind CSS codebase for
smk.stopher-malik.co.za. This is a visual restyle only — do not change any
copy, data, routes, or page structure in this run or any that follow.

Add this token system to the project (Tailwind theme.extend colors, plus CSS
variables if the project needs them elsewhere):

ink: #171410
paper: #EFEAE5
graphite: #8B8579
spot-cobalt: #2C4A8A
spot-moss: #5C6B3F
spot-plum: #5C2E4A
spot-slate: #3D4A52

Fonts: Fraunces (display, incl. italic), Instrument Sans (body, fallback
General Sans), JetBrains Mono (utility, fallback IBM Plex Mono). Load via
next/font or the project's existing font-loading pattern.

Using only these tokens, restyle the persistent shell: nav bar, footer, and
base button/link styles. Build the reusable registration-mark corner-bracket
component (SVG or CSS, in graphite) now, since every later run uses it —
don't wire it into page content yet, just have it ready as a component.

Do not touch hero, portfolio, testimonials, or any other page content in
this run.
```

---

## Run 2 — Hero + trust bar

```
Same project, same restriction: content and copy stay exactly as they are —
this is styling only.

Restyle the hero section and the client trust-bar section using the token
system and fonts from Run 1:
- Fraunces, large, for the hero headline (keep the existing headline text
  verbatim)
- Instrument Sans for the supporting line and CTA button labels (keep
  existing text verbatim)
- Registration-mark corner brackets (the Run 1 component) framing the hero
- The client trust-bar restyled in graphite/mono, unchanged list of names

Add the single orchestrated page-load motion described in the brief: corner
marks and headline settle into place once, over 600–800ms, respecting
prefers-reduced-motion.
```

---

## Run 3 — Proof Cards (the signature moment)

```
Same project, same restriction on content.

This is the centerpiece of the redesign. Restyle every existing portfolio /
case-study card into a "Proof Card":
- Card surface: paper, sitting on the page's ink background
- One spot color per card, cycling spot-cobalt / spot-moss / spot-plum /
  spot-slate IN THE ORDER the projects already appear — don't reorder,
  rename, or drop any project
- A mono reference code per card: "REF. 0N — [2-4 letter tag]", where the
  tag is a short abbreviation of that project's own existing
  category/industry (e.g. an architecture project could be ARCH). Show me
  the codes you generate before finalizing — I want to sanity-check them
- Registration-mark corners on each card (the Run 1 component)
- The card's existing description text set in Fraunces italic as a one-line
  caption. If any existing description is too long to read as one line,
  trim it for display only and flag the original + trimmed version for me
  to approve — don't permanently alter the underlying data copy
- Hover: card lifts slightly, corner brackets draw in
- Scroll-in: cards fade/rise into view as they reach the viewport

Do not change which projects are shown, their order, their links, or their
underlying data — this is a component restyle only.
```

---

## Run 4 — Testimonials, remaining sections, and polish

```
Same project, same restriction on content.

Restyle testimonials and any remaining page or section not covered in Runs
1-3 (services/process section if one exists, blog index/listing if one
exists) using the same token and type system. Keep all existing copy, names,
and attributions exactly as they are.

Final pass:
1. Check color contrast meets WCAG AA for text on both ink and paper
   backgrounds — adjust tint/shade of a token slightly if a specific
   combination fails, but keep it recognizably the same color family.
2. Confirm visible keyboard focus states on every interactive element.
3. Confirm the site is fully responsive down to mobile — registration marks
   and mono reference codes should scale down or hide gracefully on small
   screens rather than crowding the layout.
4. Confirm prefers-reduced-motion removes all animation added in Runs 2-3.
```

---

## Notes

- This supersedes the "Run 5 — retire smk.stopher-malik.co.za" prompt from the other file — that redirect plan is on hold now that this site's getting invested in rather than sunset. Worth telling me explicitly if you want that redirect prompt deleted outright or just left unused.
- Separately, and not addressed here: this subdomain is still missing basic meta tags (description, OG image, Twitter card, Search Console verification) compared to the main site. Different task from a visual redesign — say the word if you want that prompt too.
