# Site Structure — SMK Web Design

## URL: https://smk.stopher-malik.co.za

## Page Architecture

```
/                           Home page
/about                      About page
/contact                    Contact page
/services                   Services listing
/portfolio                  Portfolio listing
/portfolio/[slug]           Individual project pages (19 total)
/blog                       Blog listing
/blog/[slug]                Individual blog posts (50+ total)
/blog/category/[slug]       Blog category pages (5 categories)
/pricing                    Pricing page
/process                    Process page
/fr/*                       French locale (mirrors English structure)
/pt/*                       Portuguese locale (mirrors English structure)
```

## Navigation Structure

### Primary Nav
- Home (/)
- Services (/services)
- Portfolio → Work (/portfolio)
- Blog → Insights (/blog)
- About (/about)
- CTA: Book a Call → (/contact)

### Footer Links
- Services (/services)
- Portfolio → Work (/portfolio)
- Blog → Insights (/blog)
- About (/about)
- Contact (/contact)
- Email / WhatsApp

## Page-Specific Details

### Home Page
- Hero: "WE BUILD WEBSITES THAT WORK." with marquee of client names
- Services section: 4 services listed with numbers 01-04
- Portfolio section: 3 featured projects (Selrahc Architects, The Boma Café, JKJ SolarTech)
- Process section: 5 steps (Discovery, Design, Build, Launch, Support)
- Testimonials: auto-rotating (Sarah Thompson - Restaurant Owner, etc.)
- CTA banner: "Ready to grow?" with "Book a Free Consultation"

### Services Page
- 4 services in 2x2 grid:
  1. Website Design
  2. E-commerce Websites
  3. SEO & Google Setup
  4. Website Maintenance
- Each with number, title, tagline, detailed description

### Portfolio Page
- 19 projects total:
  1. The Boma Cafe - Restaurant
  2. JKJ SolarTech - Solar/CCTV
  3. B.E. Mhlanga Services - Maintenance
  4. JMoto Electrical - Electrical
  5. Cleanisa Solutions - Cleaning
  6. Salem Home Innovation - Home Services
  7. UZAPA Construction - Construction
  8. Le Centre - Lounge/Restaurant
  9. Babooshka Catering - Catering
  10. 101 On Fraser - Restaurant
  11. Penzura - Web App
  12. Marché LT Eben-Ezer - E-Commerce
  13. Cook's Bistro - Fine Dining
  14. Limoncello - Restaurant
  15. Electrolight - Electrical
  16. Chefs Buxaba - Chef/Catering
  17. La Dolce Vita - Restaurant
  18. Levante - Lebanese
  19. Selrahc Architects - Architecture

### About Page
- Tagline: "About SMK"
- Stats: 4+ Years, 18+ Projects, 100% Client Satisfaction
- Story text (via i18n)
- CTA: "Start a Conversation"

### Contact Page
- Tagline: "Get in touch"
- Heading: "CONTACT US"
- Form fields: Name, Email, Message
- Contact details: Email, Phone, WhatsApp, Location
- Email: info@stopher-malik.co.za
- Phone: +27 72 999 8863
- WhatsApp: +27 82 510 0050
- Location: Paulshof, Sandton, Johannesburg, South Africa

### Blog
- 50+ posts across categories: Web Design (12), SEO (18), Branding (0), Business Growth (10), Case Studies (10)
- Featured post: "Website Design Johannesburg — Premium Web Design Agency"
- Each post: title, date, readTime, category, tags, author, content

### Process Page
- 4 steps: Discovery, Design, Development, Launch
- Each with number, heading, tagline, detailed description

### Pricing Page
- Pricing tiers mentioned in blog content:
  - Starter: R1,500 (single page)
  - Business: R4,000 (3 pages + SEO + Google Business)
  - Premium: R9,000+ (full custom)

## Tech Stack (Current Site)
- Next.js (App Router)
- i18n routing (en, fr, pt)
- CSS custom properties for theming
- Framer Motion for animations
- Unsplash for images
