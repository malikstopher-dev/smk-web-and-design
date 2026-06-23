# Routes — SMK Web Design Rebuild

## Complete Route Map

| Route | Page | Type | Source Content |
|-------|------|------|---------------|
| `/` | Home | Static | Hero, Services, Featured Portfolio, Process, Testimonials, CTA |
| `/services` | Services Listing | Static | 4 services in grid |
| `/services/[slug]` | Service Detail | Dynamic | Individual service page |
| `/portfolio` | Portfolio Listing | Static | 19 projects |
| `/portfolio/[slug]` | Project Detail | Dynamic | Individual case study |
| `/blog` | Blog Listing | Static + Client Search | 50+ posts with categories |
| `/blog/[slug]` | Blog Post | Dynamic | Full article |
| `/blog/category/[slug]` | Blog Category | Static | Filtered posts |
| `/about` | About | Static | Company info, stats |
| `/contact` | Contact | Static | Form, contact details |
| `/pricing` | Pricing | Static | Pricing tiers |
| `/process` | Process | Static | 4-step process |
| `/sitemap.xml` | Sitemap | Generated | All routes |
| `/robots.txt` | Robots | Generated | Crawl directives |

## Data Flow

```
lib/content.ts (static data source)
  ├── services[] → /services, /services/[slug]
  ├── portfolioProjects[] → /portfolio, /portfolio/[slug]
  ├── blogPosts[] → /blog, /blog/[slug], /blog/category/[slug]
  ├── processSteps[] → /, /process
  ├── testimonials[] → /
  ├── faqs[] → /services, /pricing
  └── siteConfig → global layout, /about, /contact
```

## Dynamic Routes

### /services/[slug]
- Params: slug (website-design, e-commerce, local-seo, website-maintenance)
- Generates 4 pages
- Finds service by slug match

### /portfolio/[slug]
- Params: slug (project slugs from portfolioProjects)
- Generates 19 pages
- Finds project by slug match
- Shows related projects (same category)

### /blog/[slug]
- Params: slug (blog post slugs)
- Generates 50+ pages
- Finds post by slug match
- Related posts (same category, exclude current)

## Sitemap
Generate dynamically covering all routes above.
Priority: Home=0.8, Pages=0.8, Posts=0.7, Categories=0.6

## Robots.txt
Allow all crawlers, point to sitemap.
