# PAGE MAP

THIS IS A VISUAL REPLICATION PROJECT.

CONTENT AUTHORITY: https://smk.stopher-malik.co.za

---

## ALL PAGES

| # | Route | Type | Content Source | Purpose |
|---|---|---|---|---|
| 1 | / | Static | smk home | Lead generation, portfolio showcase, trust building |
| 2 | /services | Static | smk services | List all 4 services with overview |
| 3 | /services/[slug] | SSG (4 paths) | smk services | Detail page per service |
| 4 | /portfolio | Static | smk portfolio | Grid of all 19 projects |
| 5 | /portfolio/[slug] | SSG (19 paths) | smk portfolio | Case study detail per project |
| 6 | /about | Static | smk about | Studio story, stats, values, CTA |
| 7 | /contact | Static | smk contact | Contact form + contact details |
| 8 | /blog | Static | smk blog | Article listing with category filter |
| 9 | /blog/[slug] | SSG (25 paths) | smk blog | Full blog post with markdown rendering |
| 10 | /sitemap.xml | Generated | all content | Dynamic sitemap |
| 11 | /robots.txt | Generated | config | Robots rules |

---

## PAGE STRUCTURES

### Homepage (/)
```
Hero (space-themed, 3-line heading, subtext, CTAs, marquee)
Services (4 service rows with hover)
Portfolio (3 alternating image/text cards, rest via See All link)
Process (5-step horizontal timeline / vertical mobile)
Testimonials (auto-rotating quotes, dot nav)
CTA (centered heading + button)
```

### Services (/services)
```
Section label + heading
4 service rows (numbered, with tagline)
View All link
```

### Service Detail (/services/[slug])
```
Back link + number
Title + tagline + description
"What's included" feature list
CTA section
```

### Portfolio (/portfolio)
```
Section label + heading
Category filter chips
19 project cards in grid
CTA section
```

### Portfolio Detail (/portfolio/[slug])
```
Hero image with gradient overlay
Project info (number, category, title, description)
Challenge / Solution / Result sections
Project details sidebar (category, tech, tags, live link)
Related projects
CTA section
```

### About (/about)
```
Hero with studio description + image
Stats row (4+ years, 19+ projects, 100% satisfaction)
Story section
Values section (3 cards)
CTA section
```

### Contact (/contact)
```
Form (name, email, message — simulated submit)
Contact cards (email, phone, location, WhatsApp)
WhatsApp promo card
```

### Blog (/blog)
```
Featured article card
Category filter buttons
Article grid
```

### Blog Post (/blog/[slug])
```
Breadcrumbs
Category badge
Title + author/date/readtime
Content (markdown → headings, lists, paragraphs)
Tags
Share buttons (Twitter, LinkedIn, Copy)
Related articles
```

---

## SEO METADATA

| Page | Title | Description |
|---|---|---|
| Home | SMK Web Design \| Websites That Grow Your Business \| Johannesburg | SMK Web Design builds high-performance websites for South African businesses. SEO-ready, conversion-optimised... |
| Services | Services — SMK Web Design \| Web Design, SEO & E-Commerce | Professional web design, development, SEO, and branding services... |
| Portfolio | Portfolio — SMK Web Design \| Real Websites for Real Businesses | Real websites built for real businesses across South Africa... |
| Blog | SMK Web Design Blog — Web Design Tips, SEO Guides & Business Growth | Expert advice on web design, SEO, and digital marketing... |
| About | About — SMK Web Design \| Johannesburg Web Design Studio | SMK Web Design is a Johannesburg-based web design studio... |
| Contact | Contact — SMK Web Design \| Get in Touch | Ready to start your project? Contact SMK Web Design... |
