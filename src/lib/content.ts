import { Service, PortfolioProject, BlogPost, ProcessStep, Testimonial, FAQItem } from "@/types";

export const siteConfig = {
  name: "SMK Web Design",
  tagline: "Websites That Grow Your Business",
  description: "Johannesburg–based web design studio. SEO-ready, conversion-optimised, live in 7 days.",
  email: "info@stopher-malik.co.za",
  phone: "+27 72 999 8863",
  whatsapp: "+27 82 510 0050",
  whatsappLink: "https://wa.me/27825100050?text=Hi%2C%20I%20want%20a%20website%20for%20my%20business.",
  location: "Paulshof, Sandton, Johannesburg, South Africa",
  copyright: `© 2026 SMK Web Design · Johannesburg, South Africa`,
  founded: 2021,
};

export const services: Service[] = [
  {
    id: "web-design",
    number: "01",
    title: "Website Design",
    tagline: "Increase Client Inquiries With a High-Converting Website",
    description: "Premium websites built for real businesses. Fast, mobile-friendly, SEO-ready, and designed to turn visitors into enquiries. We focus on conversion-driven layouts, clear messaging, and intuitive navigation. A stunning, fast website that makes visitors pick up the phone and call you.",
    features: [
      "Conversion-driven layouts",
      "Mobile-first responsive design",
      "SEO-optimised structure",
      "Clear calls to action",
      "Fast load times",
      "Content management system",
    ],
    slug: "website-design",
  },
  {
    id: "ecommerce",
    number: "02",
    title: "E-Commerce Store",
    tagline: "Start Selling Online in Days, Not Months",
    description: "Full e-commerce solutions with product management, shopping cart functionality, secure payment gateways, and inventory tracking. Built to scale with your business. A secure online store that turns browsers into repeat buyers.",
    features: [
      "Product catalogue management",
      "Shopping cart system",
      "Secure payment integration",
      "Inventory tracking",
      "Order management",
      "Scalable architecture",
    ],
    slug: "e-commerce",
  },
  {
    id: "seo",
    number: "03",
    title: "Local SEO & Google Setup",
    tagline: "Get Found on Google — Even While You Sleep",
    description: "Comprehensive SEO services including on-page optimisation, technical SEO, Google Business Profile setup and verification, local search strategy, and performance monitoring to improve your rankings. Local SEO that puts your business in front of people searching for what you offer right now.",
    features: [
      "On-page SEO optimisation",
      "Technical SEO audit",
      "Google Business Profile setup",
      "Local search strategy",
      "Keyword research",
      "Performance monitoring",
    ],
    slug: "local-seo",
  },
  {
    id: "maintenance",
    number: "04",
    title: "Website Maintenance",
    tagline: "Never Worry About Your Website Again",
    description: "Keep your website secure, fast, and up to date with regular maintenance. Includes security monitoring, performance optimisation, content updates, and technical support so you can focus on running your business.",
    features: [
      "Security monitoring & patches",
      "Performance optimisation",
      "Content updates",
      "Regular backups",
      "Technical support",
      "Uptime monitoring",
    ],
    slug: "website-maintenance",
  },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "selrahc-architects",
    number: "01",
    title: "Selrahc Architects",
    category: "Architecture",
    description: "Opened the DRC market for a premium architecture studio",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=85&w=1200&auto=format&fit=crop",
    slug: "selrahc-architects",
    liveUrl: "https://www.selrahcarchitects.com",
    tech: ["Next.js", "UI/UX", "SEO", "Bilingual"],
    tags: ["Architecture", "Bilingual", "Premium"],
    fullDescription: "Award-winning architecture and design studio website with bilingual support (English/French), portfolio showcase, and project enquiry system. The site opened the DRC market for this premium architecture studio.",
    challenge: "Selrahc Architects needed a premium digital presence that would establish credibility in the DRC market while serving their existing client base. They required bilingual support and a portfolio that showcased award-winning projects.",
    solution: "We built a bilingual Next.js website with a focus on high-quality imagery, smooth navigation, and project enquiry functionality. The design reflects their architectural aesthetic with clean lines and generous whitespace.",
    result: "The website successfully opened the DRC market, generating qualified project enquiries from a new geographic region within weeks of launch.",
  },
  {
    id: "the-boma-cafe",
    number: "02",
    title: "The Boma Café",
    category: "Restaurant",
    description: "Online reservations doubled within two weeks of launch",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=85&w=1200&auto=format&fit=crop",
    slug: "the-boma-cafe",
    liveUrl: "https://the-boma-cafe.vercel.app",
    tech: ["Next.js", "UI/UX", "SEO"],
    tags: ["Restaurant", "Booking", "Menu"],
    fullDescription: "Premium restaurant and events website with menu showcase, gallery, and booking flow. Online reservations doubled within two weeks of launch.",
    challenge: "The Boma Café needed a website that would drive online reservations and showcase their premium dining experience. Their existing site wasn't generating bookings.",
    solution: "We created a visually rich website with an integrated reservation system, menu display, and event gallery. The design captures the restaurant's atmosphere while making booking effortless.",
    result: "Online reservations doubled within two weeks of launch. The website now handles reservations and menu inquiries automatically.",
  },
  {
    id: "jkj-solartech",
    number: "03",
    title: "JKJ SolarTech",
    category: "Solar / CCTV",
    description: "Zero online presence to qualified leads every day",
    image: "https://images.unsplash.com/photo-1504307651254-84280e7f79c8?q=85&w=1200&auto=format&fit=crop",
    slug: "jkj-solartech",
    liveUrl: "https://jkjsolatech.co.za",
    tech: ["HTML/CSS", "JS", "SEO"],
    tags: ["Solar", "CCTV", "Electrical"],
    fullDescription: "Solar, electrical, CCTV and security services website for clients across South Africa. From zero online presence to qualified leads every day.",
    challenge: "JKJ SolarTech had no online presence at all. They needed a website that would generate leads for their solar, electrical, and security services across South Africa.",
    solution: "We built a clean, informative website that clearly presents their services, service areas, and contact information. Local SEO was a key focus to capture regional search traffic.",
    result: "The website went from zero online presence to generating qualified leads every day, with steady organic traffic growth.",
  },
  {
    id: "be-mhlanga-services",
    number: "04",
    title: "B.E. Mhlanga Services",
    category: "Maintenance Services",
    description: "Multi-service business website driving maintenance enquiries",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=85&w=1200&auto=format&fit=crop",
    slug: "be-mhlanga-services",
    liveUrl: "https://bemhlanga.co.za",
    tech: ["HTML/CSS", "JS", "Lead Gen"],
    tags: ["Maintenance", "Cleaning", "Plumbing"],
    fullDescription: "Multi-service business website for maintenance, cleaning, plumbing, and electrical enquiries.",
    challenge: "",
    solution: "",
    result: "",
  },
  {
    id: "jmoto-electrical",
    number: "05",
    title: "JMoto Electrical",
    category: "Electrical",
    description: "Professional electrical services website with service presentation and contact flow",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=85&w=1200&auto=format&fit=crop",
    slug: "jmoto-electrical",
    liveUrl: "https://jmoto-website.vercel.app",
    tech: ["HTML/CSS", "JS", "SEO"],
    tags: ["Electrical", "Services"],
    fullDescription: "Professional electrical services website with clear service presentation and streamlined contact flow.",
    challenge: "",
    solution: "",
    result: "",
  },
  {
    id: "cleanisa-solutions",
    number: "06",
    title: "Cleanisa Solutions",
    category: "Cleaning",
    description: "Cleaning services website designed for trust and lead conversion",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=85&w=1200&auto=format&fit=crop",
    slug: "cleanisa-solutions",
    liveUrl: "https://cleanisa-solutions.pages.dev",
    tech: ["HTML/CSS", "JS", "Lead Gen"],
    tags: ["Cleaning", "Services"],
    fullDescription: "Cleaning services website with service cards, trust-building layout, and contact conversion flow.",
    challenge: "",
    solution: "",
    result: "",
  },
  {
    id: "salem-home-innovation",
    number: "07",
    title: "Salem Home Innovation",
    category: "Home Services",
    description: "Full business website generating enquiries from day one",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=85&w=1200&auto=format&fit=crop",
    slug: "salem-home-innovation",
    liveUrl: "https://salemhi.co.za",
    tech: ["HTML/CSS", "JS", "SEO"],
    tags: ["Home Services", "Local SEO"],
    fullDescription: "A full business website generating enquiries from day one. Built for local SEO and client conversion.",
    challenge: "",
    solution: "",
    result: "",
  },
  {
    id: "uzapa-construction",
    number: "08",
    title: "UZAPA Construction",
    category: "Construction",
    description: "Credibility-building website for a DRC-based construction firm",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=85&w=1200&auto=format&fit=crop",
    slug: "uzapa-construction",
    liveUrl: "https://uzapardc.pages.dev",
    tech: ["React", "Branding", "SEO"],
    tags: ["Construction", "French", "DRC"],
    fullDescription: "A credibility-building website for a DRC-based construction firm in French.",
    challenge: "",
    solution: "",
    result: "",
  },
  {
    id: "le-centre",
    number: "09",
    title: "Le Centre",
    category: "Lounge / Restaurant",
    description: "Premium restaurant and lounge in Kinshasa with international cuisine",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=85&w=1200&auto=format&fit=crop",
    slug: "le-centre",
    liveUrl: "https://lecentre-kin.pages.dev",
    tech: ["React", "CSS", "Cloudflare"],
    tags: ["Restaurant", "Kinshasa", "Premium"],
    fullDescription: "Premium restaurant and lounge in Kinshasa with international cuisine and panoramic terrace.",
    challenge: "",
    solution: "",
    result: "",
  },
  {
    id: "babooshka-catering",
    number: "10",
    title: "Babooshka Catering",
    category: "Catering",
    description: "Professional catering website with visual presentation and enquiry flow",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=85&w=1200&auto=format&fit=crop",
    slug: "babooshka-catering",
    liveUrl: "https://babooshka-catering.pages.dev",
    tech: ["HTML/CSS", "Branding", "SEO"],
    tags: ["Catering", "Food"],
    fullDescription: "Catering and food-service website with professional visual presentation and enquiry flow.",
    challenge: "",
    solution: "",
    result: "",
  },
  {
    id: "one-o-one-on-fraser",
    number: "11",
    title: "101 On Fraser",
    category: "Restaurant",
    description: "Booking-first restaurant website making table reservations seamless",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=85&w=1200&auto=format&fit=crop",
    slug: "one-o-one-on-fraser",
    liveUrl: "https://101onfraser.pages.dev",
    tech: ["React", "CSS", "Cloudflare"],
    tags: ["Restaurant", "Booking"],
    fullDescription: "A booking-first restaurant website making table reservations seamless.",
    challenge: "",
    solution: "",
    result: "",
  },
  {
    id: "penzura",
    number: "12",
    title: "Penzura",
    category: "Web App",
    description: "Premium web application for South Africa's cleaning and hygiene supply sector",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=85&w=1200&auto=format&fit=crop",
    slug: "penzura",
    liveUrl: "https://penzura.pages.dev",
    tech: ["React", "Node.js", "UX"],
    tags: ["Web App", "Cleaning", "Supply"],
    fullDescription: "Premium web application for South Africa's cleaning and hygiene supply sector.",
    challenge: "",
    solution: "",
    result: "",
  },
  {
    id: "marche-lt-eben-ezer",
    number: "13",
    title: "Marché LT Eben-Ezer",
    category: "E-Commerce",
    description: "Bilingual e-commerce connecting the African diaspora with familiar foods in Montreal",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=85&w=1200&auto=format&fit=crop",
    slug: "marche-lt-eben-ezer",
    liveUrl: "https://marchelteben-ezer.com",
    tech: ["HTML/CSS", "JS", "E-Commerce"],
    tags: ["E-Commerce", "Bilingual", "Food"],
    fullDescription: "Bilingual e-commerce website connecting the African diaspora community with familiar foods in Montreal.",
    challenge: "",
    solution: "",
    result: "",
  },
  {
    id: "cooks-bistro",
    number: "14",
    title: "Cook's Bistro",
    category: "Fine Dining",
    description: "Premium Mediterranean restaurant in Kinshasa with elegant design and online reservations",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=85&w=1200&auto=format&fit=crop",
    slug: "cooks-bistro",
    liveUrl: "https://cooks-bistro.pages.dev",
    tech: ["HTML/CSS", "JS", "SEO"],
    tags: ["Fine Dining", "Mediterranean"],
    fullDescription: "Premium Mediterranean restaurant in Kinshasa with elegant design and online reservations.",
    challenge: "",
    solution: "",
    result: "",
  },
  {
    id: "limoncello",
    number: "15",
    title: "Limoncello",
    category: "Restaurant",
    description: "Authentic Italian in Kinshasa with TripAdvisor #4 ranking and online ordering",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=85&w=1200&auto=format&fit=crop",
    slug: "limoncello",
    liveUrl: "https://limoncello.pages.dev",
    tech: ["React", "Node.js", "UX"],
    tags: ["Italian", "Kinshasa", "TripAdvisor"],
    fullDescription: "Authentic Italian restaurant in Kinshasa. TripAdvisor #4 with online ordering and reservations.",
    challenge: "",
    solution: "",
    result: "",
  },
  {
    id: "electrolight",
    number: "16",
    title: "Electrolight",
    category: "Electrical",
    description: "Electrical services website for clear service communication and lead generation",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=85&w=1200&auto=format&fit=crop",
    slug: "electrolight",
    liveUrl: "https://electrolight.pages.dev",
    tech: ["HTML/CSS", "JS"],
    tags: ["Electrical", "Services"],
    fullDescription: "Electrical services website designed for clear service communication and lead generation.",
    challenge: "",
    solution: "",
    result: "",
  },
  {
    id: "chefs-buxaba",
    number: "17",
    title: "Chefs Buxaba",
    category: "Chef / Catering",
    description: "Chef and catering website with premium food-service branding",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=85&w=1200&auto=format&fit=crop",
    slug: "chefs-buxaba",
    liveUrl: "https://chefsbuxaba.pages.dev",
    tech: ["HTML/CSS", "Branding"],
    tags: ["Chef", "Catering", "Food"],
    fullDescription: "Chef and catering website using premium food-service branding and enquiry flow.",
    challenge: "",
    solution: "",
    result: "",
  },
  {
    id: "la-dolce-vita",
    number: "18",
    title: "La Dolce Vita",
    category: "Restaurant",
    description: "Authentic Italian dining in Kinshasa with wood-fired pizza and reservation system",
    image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=85&w=1200&auto=format&fit=crop",
    slug: "la-dolce-vita",
    liveUrl: "https://ladolcevita-kin.pages.dev",
    tech: ["HTML/CSS", "JS", "SEO"],
    tags: ["Italian", "Kinshasa", "Pizza"],
    fullDescription: "Authentic Italian dining in Kinshasa with wood-fired pizza and reservation system.",
    challenge: "",
    solution: "",
    result: "",
  },
  {
    id: "levante",
    number: "19",
    title: "Levante",
    category: "Lebanese",
    description: "Authentic Lebanese cuisine coming soon to Kinshasa with a new branch opening",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=85&w=1200&auto=format&fit=crop",
    slug: "levante",
    liveUrl: "https://levante-kin.pages.dev",
    tech: ["React", "CSS", "Branding"],
    tags: ["Lebanese", "Kinshasa", "Coming Soon"],
    fullDescription: "Authentic Lebanese cuisine coming soon to Kinshasa with a new branch opening.",
    challenge: "",
    solution: "",
    result: "",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description: "We learn about your business, audience, and goals to define the strategy. We learn your business, audience, and goals so the site works from day one.",
  },
  {
    number: "02",
    title: "Design",
    description: "We craft a bespoke visual identity and interface that reflects your brand. We create a design your customers will trust and remember.",
  },
  {
    number: "03",
    title: "Build",
    description: "We develop a fast, secure, SEO-optimised website using modern technology. We develop a fast, secure, SEO-ready website.",
  },
  {
    number: "04",
    title: "Launch",
    description: "We deploy, test, and optimise — then hand over a fully functional site. We launch, test, and hand over a site that generates results.",
  },
  {
    number: "05",
    title: "Support",
    description: "We stay on board with ongoing maintenance, updates, and performance tracking. Ongoing maintenance so your site stays fast and secure.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "Our bookings doubled within two weeks of launch. The website now handles reservations and menu inquiries automatically. Best money we've spent.",
    name: "Sarah Thompson",
    role: "Restaurant Owner",
  },
  {
    quote: "From zero online presence to qualified leads every day. The SEO work alone has been worth every rand. Highly recommend SMK.",
    name: "John K.",
    role: "Solar Company Director",
  },
  {
    quote: "Professional, responsive, and delivered ahead of schedule. Our new website has completely transformed how clients perceive our brand.",
    name: "Michael Selrahc",
    role: "Principal Architect",
  },
];

export const faqs: FAQItem[] = [
  {
    question: "How much does a website cost?",
    answer: "Our websites start from R4,000 for a professional 3-page business site. Premium sites with more pages, advanced SEO, and ongoing support are project-based. We'll give you a fixed quote — no surprises.",
  },
  {
    question: "How long does it take to build a website?",
    answer: "Most business websites are ready in 7–14 days. E-commerce and larger projects take 3–4 weeks. We work fast without cutting corners.",
  },
  {
    question: "Will my website actually bring in clients?",
    answer: "Yes. Every site we build is designed around conversion — clear CTAs, SEO optimisation, fast load times, and mobile-first design. Your website should work as hard as your sales team.",
  },
  {
    question: "Do you handle SEO?",
    answer: "Absolutely. SEO is built into every site from day one — not added as an afterthought. Local SEO, keyword optimisation, Google Business setup, and analytics tracking are included in our Business and Premium plans.",
  },
  {
    question: "Can I update the website myself after it's built?",
    answer: "Yes. We build on platforms that let you make simple updates yourself. We also offer a maintenance plan if you'd rather focus on your business while we handle everything.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "website-design-johannesburg",
    title: "Website Design Johannesburg — Premium Web Design Agency",
    description: "Looking for professional website design in Johannesburg? SMK Web Design builds high-performance, SEO-optimised websites that grow your business.",
    date: "2026-01-15",
    readTime: "6 min read",
    category: "Web Design",
    tags: ["web design", "Johannesburg", "agency", "premium"],
    author: "SMK Web Design Team",
    featured: true,
    content: `Your website is your most powerful sales tool. In Johannesburg's competitive business landscape, a professionally designed website isn't a luxury — it's a necessity. At SMK Web Design, we build high-performance websites that turn visitors into paying customers.

## Why Johannesburg Businesses Need Professional Web Design

Johannesburg is the economic hub of South Africa. With millions of potential customers searching online for products and services every day, your website is often the first interaction they have with your brand. A poorly designed site costs you credibility — and customers.

## What Makes a Great Business Website?

- **Fast loading speed** — Your site must load in under 3 seconds
- **Mobile responsive design** — Over 60% of searches happen on mobile
- **Clear calls to action** — Visitors should know exactly what to do
- **SEO optimisation** — Your site needs to be found on Google
- **Professional photography and design** — First impressions matter

## Our Web Design Process

1. **Discovery** — We learn about your business, audience, and goals
2. **Design & Build** — We create a stunning, conversion-focused design
3. **SEO-ready** — Every site is optimised for search engines from day one
4. **Launch & Support** — We deploy and provide ongoing maintenance

## Pricing

- **Starter Plan (R1,500)** — Single-page website
- **Business Plan (R4,000)** — Up to 3 pages + SEO + Google Business setup
- **Premium Plan (R9,000+)** — Full website with advanced SEO

Most sites completed within 7-14 days. SEO included on every site.`,
  },
  {
    slug: "web-design-south-africa",
    title: "Web Design South Africa — Complete Guide for 2026",
    description: "The South African web design industry has matured significantly. Today, a website is expected to be fast, beautiful, and effective at generating business.",
    date: "2026-01-20",
    readTime: "8 min read",
    category: "Web Design",
    tags: ["web design", "South Africa", "guide", "agency"],
    author: "SMK Web Design Team",
    content: `The South African web design industry has matured significantly. Today, a website is expected to be fast, beautiful, and effective at generating business.

## Pricing Overview

- **Basic single-page**: R1,500
- **Business 3-page**: R4,000
- **Custom with e-commerce/booking/advanced SEO**: R15,000+

## Why Cheap Websites Cost More

Cheap websites often come with hidden costs: slow speeds, poor mobile experience, no SEO — all of which mean lost customers. Investing in a professional website from the start saves money in the long run.

## What to Look for in a Web Design Agency

- Proven portfolio with real results
- SEO knowledge and expertise
- Mobile-first approach
- Clear pricing with no hidden fees
- Post-launch support and maintenance`,
  },
  {
    slug: "how-much-does-a-website-cost",
    title: "How Much Does a Website Cost in South Africa? (2026 Pricing)",
    description: "Complete breakdown of website design costs in South Africa for 2026. From R1,500 starter sites to R15,000+ custom builds.",
    date: "2026-01-25",
    readTime: "7 min read",
    category: "Web Design",
    tags: ["cost", "pricing", "South Africa", "website"],
    author: "SMK Web Design Team",
    content: `Website pricing in South Africa varies widely depending on complexity, features, and who you hire. Here's what you can expect to pay in 2026.

## Starter Websites (R1,500 – R3,000)

Perfect for freelancers and very small businesses who need a basic online presence. Includes a single page with essential information.

## Business Websites (R4,000 – R8,000)

The most popular option for small to medium businesses. Includes up to 5 pages, SEO optimisation, mobile responsiveness, and Google Business setup.

## Premium Websites (R9,000 – R15,000+)

For businesses that want a custom-designed website with advanced features like e-commerce, booking systems, multilingual support, and ongoing SEO.

## What's Included

Every SMK website includes: professional design, mobile responsiveness, SEO optimisation, fast hosting, and post-launch support.`,
  },
  {
    slug: "custom-website-vs-template",
    title: "Custom Website vs Template — Which Is Right for Your Business?",
    description: "Should you choose a custom website or a template? We compare the pros, cons, and costs of each approach.",
    date: "2026-02-01",
    readTime: "6 min read",
    category: "Web Design",
    tags: ["custom website", "template", "comparison", "web design"],
    author: "SMK Web Design Team",
    content: `Choosing between a custom website and a template is one of the first decisions you'll make. Here's what you need to know.

## Templates (Cheaper, Faster, but Limited)

Templates are pre-designed layouts that you customise with your content. They're cheaper and faster to launch, but you're limited by what the template offers. SEO can also be compromised.

## Custom Websites (Built for Your Business)

Custom websites are designed and built from scratch for your specific business needs. They offer better SEO, faster performance, and higher conversion rates. At SMK, custom sites start at R4,000.

## Our Recommendation

For most businesses, a custom website is the better long-term investment. It will outperform a template in SEO, speed, and conversion — paying for itself over time.`,
  },
  {
    slug: "modern-website-design-trends-2026",
    title: "Modern Website Design Trends 2026 — What's In and What's Out",
    description: "Dark mode, micro-interactions, performance-first design. The web design trends defining 2026.",
    date: "2026-02-10",
    readTime: "6 min read",
    category: "Web Design",
    tags: ["web design trends", "2026", "modern design", "UI"],
    author: "SMK Web Design Team",
    content: `Web design trends in 2026 focus on performance, user experience, and premium aesthetics.

## Dark Mode and Premium Aesthetics

Dark mode is no longer optional — it's expected. Gradients, noise textures, and glassmorphism are being used to create depth and sophistication.

## Performance as Design

Speed is a design feature. Sites that load in under 3 seconds have significantly better conversion rates. Performance optimisation is now a core part of the design process.

## Micro-interactions and Motion

Subtle hover effects, scroll-triggered reveals, and smooth transitions create a polished, professional feel. The key is subtlety — never at the expense of usability.`,
  },
  {
    slug: "seo-for-small-businesses-south-africa",
    title: "SEO for Small Businesses South Africa — Complete Guide",
    description: "A practical guide to SEO for small businesses in South Africa. Learn how to get found on Google without breaking the bank.",
    date: "2026-03-15",
    readTime: "7 min read",
    category: "SEO",
    tags: ["SEO", "small business", "South Africa", "guide"],
    author: "SMK Web Design Team",
    content: `SEO is the most cost-effective marketing channel for small businesses. Here's how to make it work in South Africa.

## Local SEO is Your Secret Weapon

For most small businesses, local SEO is where you'll see the fastest results. Google Business Profile optimisation, local citations, and location-specific keywords can get you found by customers in your area.

## SEO Basics Every Business Should Know

1. **Keyword Research** — Find what your customers are searching for
2. **On-Page SEO** — Optimise your content and meta tags
3. **Technical SEO** — Ensure your site is crawlable and fast
4. **Local SEO** — Claim your Google Business Profile
5. **Content Marketing** — Publish helpful, relevant content

## Why SEO Takes Time

SEO is a long-term strategy. Most businesses see meaningful results in 3-6 months. But unlike paid ads, SEO continues to work for you long after you've invested.`,
  },
  {
    slug: "what-is-seo-and-how-it-works",
    title: "What Is SEO and How It Works — Explained Simply",
    description: "SEO doesn't have to be confusing. Here's a simple explanation of how search engine optimisation works and why your business needs it.",
    date: "2026-03-20",
    readTime: "6 min read",
    category: "SEO",
    tags: ["SEO", "guide", "beginners", "Google"],
    author: "SMK Web Design Team",
    content: `SEO stands for Search Engine Optimisation. It's the practice of helping your website rank higher in search results so more people can find you.

## How Google Ranks Sites

Google uses hundreds of factors to rank websites. The three most important are:
- **Relevance** — Does your content match what people are searching for?
- **Authority** — Do other reputable sites link to you?
- **User Experience** — Is your site fast, mobile-friendly, and easy to use?

## The Three Pillars of SEO

1. **Technical SEO** — The behind-the-scenes optimisation that helps search engines crawl your site
2. **On-Page SEO** — Optimising your content, headings, and meta tags
3. **Off-Page SEO** — Building backlinks and social proof

SEO takes 3-6 months to show meaningful results, but it's the most cost-effective long-term marketing strategy.`,
  },
  {
    slug: "website-for-small-business",
    title: "Website for Small Business — Complete Guide to Getting Online",
    description: "Everything you need to know about getting your small business online. From choosing a domain to launching your website.",
    date: "2026-05-05",
    readTime: "7 min read",
    category: "Business Growth",
    tags: ["small business", "website", "guide", "getting online"],
    author: "SMK Web Design Team",
    content: `Getting your small business online is easier than you think. Here's everything you need to know.

## What Every Small Business Website Needs

- **Service Pages** — Clearly explain what you offer
- **Contact Information** — Make it easy for customers to reach you
- **Testimonials** — Build trust with social proof
- **SEO** — Help customers find you on Google
- **Mobile-Responsive Design** — Most visitors will use their phone
- **Fast Speed** — Slow sites lose customers

## How Much Should You Spend?

For most small businesses, our Business Plan at R4,000 offers the best value. It includes a professional website, SEO, and Google Business setup.`,
  },
  {
    slug: "construction-company-website-design",
    title: "Construction Company Website Design — Build Credibility Online",
    description: "Learn how to design a construction company website that wins bids and builds trust with potential clients.",
    date: "2026-05-15",
    readTime: "6 min read",
    category: "Business Growth",
    tags: ["construction website", "design", "guide", "contractors"],
    author: "SMK Web Design Team",
    content: `A construction company website needs to do one thing above all else: build trust. Here's how to achieve that.

## Key Elements of a Construction Website

1. **Project Portfolio** — Showcase completed projects with before/after photos
2. **Service Breakdown** — Clearly list all services you offer
3. **Client Testimonials** — Let past clients speak for your work
4. **Licensing and Certifications** — Display credentials prominently
5. **Contact Form** — Make it easy to request a quote

## Case Study: UZAPA Construction

We built a credibility-building website for UZAPA Construction, a DRC-based firm. The site, built in French, helped them establish authority and win new contracts.`,
  },
  {
    slug: "architect-website-design",
    title: "Architect Website Design — Best Practices for Architecture Firms",
    description: "Architecture firms need websites that showcase their work beautifully. Learn the best practices for architect website design.",
    date: "2026-05-20",
    readTime: "6 min read",
    category: "Business Growth",
    tags: ["architect website", "design", "architecture firm", "portfolio"],
    author: "SMK Web Design Team",
    content: `An architecture firm's website is their most important marketing tool. Here's how to make it exceptional.

## Showcase Your Best Work

High-quality imagery is non-negotiable. Your portfolio should be the centrepiece of your website, with full-screen images and smooth navigation.

## Bilingual Capabilities

If you work in multiple regions, bilingual support is essential. Our case study with Selrahc Architects shows how English/French support can open new markets.

## Project Enquiry System

Make it easy for potential clients to enquire about your services. A well-designed enquiry form can be the difference between landing a project and losing it.`,
  },
  {
    slug: "website-redesign-strategy",
    title: "Website Redesign Strategy — When and How to Redesign Your Site",
    description: "Is it time to redesign your website? Learn the signs, strategy, and process for a successful website redesign.",
    date: "2026-02-20",
    readTime: "6 min read",
    category: "Web Design",
    tags: ["website redesign", "strategy", "rebrand", "SEO"],
    author: "SMK Web Design Team",
    content: `Knowing when to redesign your website is crucial. Here are the signs that it's time.

## Signs You Need a Redesign

- Bounce rate over 60%
- Website is not mobile-friendly
- Search rankings have dropped
- Your site looks dated
- Load time exceeds 3 seconds
- Few contact form submissions

## Approach With Data First

Before redesigning, analyse your current site's performance. Use Google Analytics to understand what's working and what isn't. Let data guide your design decisions.`,
  },
  {
    slug: "high-converting-website-design",
    title: "High-Converting Website Design — Principles That Drive Sales",
    description: "Learn the principles of high-converting website design. Turn more visitors into paying customers.",
    date: "2026-03-01",
    readTime: "7 min read",
    category: "Web Design",
    tags: ["conversion", "web design", "CRO", "sales"],
    author: "SMK Web Design Team",
    content: `A beautiful website that doesn't convert is a liability. Here's how to design for conversion.

## Key Principles

1. **Clear Value Proposition** — Visitors should know what you offer within seconds
2. **Strategic CTA Placement** — Guide visitors toward taking action
3. **Trust Signals** — Client logos, testimonials, and case studies
4. **Clear Pricing** — Transparency builds trust
5. **Fast Speed** — Every second of delay costs conversions

Every site we build is designed around conversion from the ground up.`,
  },
  {
    slug: "website-development-process-explained",
    title: "Website Development Process Explained — From Brief to Launch",
    description: "What happens when you commission a website? Here's our complete development process explained step by step.",
    date: "2026-03-10",
    readTime: "6 min read",
    category: "Web Design",
    tags: ["web development", "process", "guide", "agency"],
    author: "SMK Web Design Team",
    content: `Understanding the web development process helps you know what to expect and when.

## Step 1: Discovery

We learn about your business, audience, and goals. This phase includes research, strategy, and project planning.

## Step 2: Design

We create wireframes and visual designs that reflect your brand and meet your goals.

## Step 3: Development

We build your website using modern technology. This includes coding, content integration, and SEO setup.

## Step 4: Launch & Support

We test thoroughly, deploy your site, and provide ongoing support to keep it running smoothly.

Most projects are completed in 7-14 days.`,
  },
  {
    slug: "why-your-business-needs-a-website",
    title: "Why Your Business Needs a Website — Even in 2026",
    description: "Still wondering if your business needs a website? Here's why having an online presence is non-negotiable in 2026.",
    date: "2026-02-25",
    readTime: "5 min read",
    category: "Web Design",
    tags: ["business website", "online presence", "digital", "growth"],
    author: "SMK Web Design Team",
    content: `Without a website, your business is invisible to the 84% of consumers who research online before making a purchase.

## Why You Need a Website

- **24/7 Lead Generation** — Your website works while you sleep
- **Credibility** — 84% of consumers trust online reviews
- **Competitive Advantage** — Most of your competitors already have websites
- **Cost-Effective Marketing** — A website is the most affordable marketing tool

## The Cost of Not Having a Website

Every day without a website is a day you're losing potential customers to competitors who are online.`,
  },
  {
    slug: "web-design-johannesburg",
    title: "Web Design Johannesburg — Professional Websites for Local Businesses",
    description: "Professional web design services in Johannesburg. Get a high-performance website that helps your local business grow.",
    date: "2026-08-15",
    readTime: "6 min read",
    category: "SEO",
    tags: ["Johannesburg", "web design", "local", "business"],
    author: "SMK Web Design Team",
    content: `Johannesburg is South Africa's economic powerhouse. With millions of potential customers searching for local services, your website needs to stand out.

## Local SEO for 'Near Me' Searches

Local SEO is critical for Johannesburg businesses. When someone searches for "web designer near me" or "restaurant in Sandton," Google优先s businesses with optimised local profiles.

## Our Johannesburg Clients

We've worked with businesses across Johannesburg including Selrahc Architects, JKJ SolarTech, and Cleanisa Solutions. Each site is optimised for local search and conversion.`,
  },
  {
    slug: "seo-vs-paid-ads",
    title: "SEO vs Paid Ads — Which Is Better for Your Business?",
    description: "SEO or paid ads? We compare both approaches to help you decide where to invest your marketing budget.",
    date: "2026-04-10",
    readTime: "6 min read",
    category: "SEO",
    tags: ["SEO", "paid ads", "Google Ads", "comparison"],
    author: "SMK Web Design Team",
    content: `Both SEO and paid ads can drive traffic to your website, but they work differently and serve different purposes.

## SEO: The Long-Term Asset

SEO takes 3-6 months to show results, but the traffic compounds over time. Once you rank, you don't pay per click. It's the most cost-effective long-term strategy.

## Paid Ads: Immediate Traffic

Paid ads give you instant visibility, but you pay for every click. Once you stop paying, the traffic stops. Great for short-term campaigns and testing.

## Our Recommendation

A combined approach works best. Use paid ads for immediate results while building your SEO foundation for long-term growth.`,
  },
  {
    slug: "keyword-research-strategy",
    title: "Keyword Research Strategy — Find the Right Keywords for Your Business",
    description: "Learn how to find the right keywords for your business. A practical guide to keyword research for South African businesses.",
    date: "2026-04-25",
    readTime: "7 min read",
    category: "SEO",
    tags: ["keyword research", "SEO strategy", "keywords", "guide"],
    author: "SMK Web Design Team",
    content: `Keyword research is the foundation of any successful SEO strategy. Here's how to find the right keywords for your business.

## How to Find Keywords

Use Google Keyword Planner to discover what your customers are searching for. Focus on long-tail keywords (3-5 words) that have clear search intent.

## Write for Humans First

While keywords are important, always write for humans first. Google's algorithms are sophisticated enough to understand context and relevance. Natural, helpful content will always outperform keyword-stuffed content.`,
  },
  {
    slug: "why-seo-takes-time",
    title: "Why SEO Takes Time — A Realistic Timeline for Results",
    description: "SEO is a long-term strategy. Here's a realistic timeline for when you can expect to see results from your SEO efforts.",
    date: "2026-05-01",
    readTime: "5 min read",
    category: "SEO",
    tags: ["SEO timeline", "SEO results", "long-term SEO", "realistic SEO"],
    author: "SMK Web Design Team",
    content: `SEO requires patience. Here's a realistic timeline for when you can expect to see results.

## Months 1-3: Foundation

Technical optimisation, content creation, and Google Business Profile setup. You won't see major ranking changes yet, but the foundation is being built.

## Months 3-6: Growth

You'll start seeing movement in rankings. Some keywords will begin to appear on page 2 or 3 of Google. Traffic will start to increase.

## Months 6-12: Dominance

This is where SEO really pays off. Top 3 rankings for key terms, consistent traffic growth, and a steady stream of leads.

SEO is the gift that keeps giving.`,
  },
  {
    slug: "affordable-web-design-south-africa",
    title: "Affordable Web Design South Africa — Quality Websites at Fair Prices",
    description: "Quality web design doesn't have to break the bank. SMK offers affordable websites starting from R1,500.",
    date: "2026-09-10",
    readTime: "5 min read",
    category: "SEO",
    tags: ["affordable", "budget", "quality", "South Africa"],
    author: "SMK Web Design Team",
    content: `Quality web design at fair prices is what we do. Here's what you get at each price point.

## Starter Plan (R1,500)

A single-page website with essential business information. Perfect for freelancers and very small businesses.

## Business Plan (R4,000)

Our most popular option. Professional design, mobile-responsive, basic SEO, contact form, and fast hosting.

## Premium Plan (R9,000+)

A fully custom website with advanced features, comprehensive SEO, and ongoing support.

Every website includes professional design, mobile responsiveness, and SEO optimisation.`,
  },
  {
    slug: "hire-web-designer-south-africa",
    title: "Hire Web Designer South Africa — Complete Hiring Guide",
    description: "Looking to hire a web designer in South Africa? Here's everything you need to know to find the right person for your project.",
    date: "2026-09-20",
    readTime: "6 min read",
    category: "SEO",
    tags: ["hire", "web designer", "South Africa", "guide"],
    author: "SMK Web Design Team",
    content: `Hiring a web designer is an important decision. Here's how to find the right person for your project.

## Questions to Ask Before Hiring

1. Can you show me examples of websites you've built?
2. Do you include SEO in your service?
3. Will my website be mobile-responsive?
4. What happens after the site launches?
5. How long will the project take?

## Red Flags to Watch For

- Promises of instant rankings
- Only uses templates
- No portfolio or case studies
- Unclear pricing

## Why SMK?

Transparent pricing, SEO built into every site, proven portfolio of 20+ projects, and ongoing support.`,
  },
  {
    slug: "restaurant-website-design-guide",
    title: "Restaurant Website Design Guide — Attract More Diners Online",
    description: "A complete guide to restaurant website design. Learn how to attract more diners with a website that converts.",
    date: "2026-05-10",
    readTime: "6 min read",
    category: "Business Growth",
    tags: ["restaurant", "website", "design", "guide"],
    author: "SMK Web Design Team",
    content: `Your restaurant's website is often the first impression diners have of your establishment. Here's how to make it count.

## Essential Features

- **Menu Display** — Showcase your menu with beautiful photography
- **Online Reservations** — Make booking a table effortless
- **Gallery** — Let the atmosphere speak for itself
- **Location & Hours** — Make it easy to find you
- **Contact Information** — Phone, email, and social links

## Case Study: The Boma Café

Our work with The Boma Café doubled their online reservations within two weeks of launch.`,
  },
  {
    slug: "real-estate-website-design",
    title: "Real Estate Website Design — Features That Sell Properties",
    description: "Learn the essential features of a high-performing real estate website. From property search to virtual tours.",
    date: "2026-05-25",
    readTime: "6 min read",
    category: "Business Growth",
    tags: ["real estate website", "design", "property", "agents"],
    author: "SMK Web Design Team",
    content: `A real estate website needs to showcase properties beautifully while making it easy for buyers to find what they're looking for.

## Key Features

- Property search with filters
- High-quality imagery and virtual tours
- Agent profiles and contact information
- Mortgage calculator
- Email alerts for new listings

## Mobile-First is Critical

Most property searches start on mobile. Your website must be fully responsive and fast-loading to capture these leads.`,
  },
  {
    slug: "electrical-contractor-website",
    title: "Electrical Contractor Website — Essential Features for Tradesmen",
    description: "What every electrical contractor website needs. Learn the essential features that generate leads for tradesmen.",
    date: "2026-06-10",
    readTime: "5 min read",
    category: "Business Growth",
    tags: ["electrical website", "contractor", "tradesmen", "local SEO"],
    author: "SMK Web Design Team",
    content: `Electrical contractors need websites that generate leads. Here's what works.

## Essential Features

1. **Clear Service Listings** — Explain what you do
2. **Emergency Contact** — Make it prominent
3. **Service Areas** — Tell customers where you operate
4. **Client Testimonials** - Build trust
5. **Local SEO** — Get found in local searches

## Case Studies

Our work with JKJ SolarTech and JMoto Electrical shows how the right website can transform a trades business.`,
  },
  {
    slug: "cleaning-company-website-design",
    title: "Cleaning Company Website Design — Get More Cleaning Contracts",
    description: "Learn how to design a cleaning company website that wins contracts and builds trust with potential clients.",
    date: "2026-06-05",
    readTime: "5 min read",
    category: "Business Growth",
    tags: ["cleaning website", "design", "cleaning company", "lead generation"],
    author: "SMK Web Design Team",
    content: `A cleaning company website needs to build trust quickly. Here's how to design one that converts.

## What Works

- Service pages that sell — clearly explain what you offer
- Trust signals — testimonials and before/after photos
- Easy contact — make it simple to request a quote
- Local SEO — get found by local customers

## Case Study

Our work with Cleanisa Solutions shows how the right website can generate consistent cleaning contract enquiries.`,
  },
];

export const seoMetadata = {
  home: {
    title: "SMK Web Design | Websites That Grow Your Business | Johannesburg",
    description: "SMK Web Design builds high-performance websites for South African businesses. SEO-ready, conversion-optimised, delivered fast. Book a free consultation.",
    ogTitle: "SMK Web Design",
    ogDescription: "Web design that grows your business.",
  },
  services: {
    title: "Services — SMK Web Design | Web Design, SEO & E-Commerce",
    description: "Professional web design, development, SEO, and branding services for businesses in South Africa and beyond.",
  },
  portfolio: {
    title: "Portfolio — SMK Web Design | Real Websites for Real Businesses",
    description: "Real websites built for real businesses across South Africa and beyond. Each designed to generate enquiries and rank on Google.",
  },
  blog: {
    title: "SMK Web Design Blog — Web Design Tips, SEO Guides & Business Growth",
    description: "Expert advice on web design, SEO, and digital marketing for South African businesses. Learn how to grow your business online with SMK Web Design.",
    ogTitle: "SMK Web Design Blog",
    ogDescription: "Expert advice on web design, SEO, and digital marketing for South African businesses.",
  },
  about: {
    title: "About — SMK Web Design | Johannesburg Web Design Studio",
    description: "SMK Web Design is a Johannesburg-based web design studio. We build high-performance websites that grow South African businesses.",
  },
  contact: {
    title: "Contact — SMK Web Design | Get in Touch",
    description: "Ready to start your project? Contact SMK Web Design for a free consultation. Based in Johannesburg, serving South Africa.",
  },
};
