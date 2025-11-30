# Rummy Games App - SEO Optimized Website

A comprehensive, SEO-optimized Next.js website for Rummy Games App with extensive features, components, and content.

## Features

### 🎯 SEO Optimization
- Complete metadata implementation for all pages
- Structured data (JSON-LD) for Organization, Website, Mobile App, Articles, FAQs, HowTo, and more
- Comprehensive sitemap with all pages
- Robots.txt configuration
- Breadcrumb navigation with schema markup
- Open Graph and Twitter Card meta tags
- Canonical URLs
- Multilingual support (English & Hindi)

### 🎨 Components
- **Hero Section** - Eye-catching landing section with animations
- **Features Section** - Highlight key features with icons
- **Testimonials** - Customer reviews and ratings
- **FAQ Section** - Expandable FAQ with schema markup
- **CTA Sections** - Multiple call-to-action variants
- **Navigation** - Responsive navigation with language switcher
- **Footer** - Comprehensive footer with links and social media
- **Breadcrumbs** - SEO-friendly breadcrumb navigation
- **Structured Data** - Dynamic JSON-LD schema generation

### 📄 Pages
- Home Page (`/[lang]`)
- Download Page (`/[lang]/download`)
- How to Play (`/[lang]/how-to-play`)
- Real Cash Rummy (`/[lang]/real-cash-rummy`)
- Tournaments (`/[lang]/tournaments`)
- Rules (`/[lang]/rules`)
- Strategies (`/[lang]/strategies`)
- Blog (`/[lang]/blog`)
- Blog Posts (`/[lang]/blog/[slug]`)

### 🛠️ Utilities & Hooks
- SEO utility functions
- Language hooks
- Scroll detection hooks
- Debounce hooks

### 🌐 Internationalization
- English (en)
- Hindi (hi)
- Comprehensive translations

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Fonts**: Inter, Poppins (Google Fonts)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
app/
├── [lang]/              # Language-based routes
│   ├── components/      # Reusable components
│   │   ├── SEO/         # SEO components
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   ├── CTA.tsx
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── page.tsx         # Home page
│   ├── download/
│   ├── how-to-play/
│   ├── real-cash-rummy/
│   ├── tournaments/
│   ├── rules/
│   ├── strategies/
│   └── blog/
├── globals.css          # Global styles with animations
├── sitemap.js          # Dynamic sitemap
└── robots.js           # Robots.txt

src/
├── components/         # Shared components
├── translations/       # i18n translations
├── utils/             # Utility functions
└── hooks/              # Custom React hooks
```

## SEO Features

### Meta Tags
- Title tags optimized for each page
- Meta descriptions (160 characters)
- Keywords
- Open Graph tags
- Twitter Card tags
- Canonical URLs

### Structured Data
- Organization schema
- Website schema
- Mobile Application schema
- Article schema
- FAQ schema
- HowTo schema
- BreadcrumbList schema
- VideoGame schema

### Performance
- Optimized images with Next.js Image component
- Font optimization
- CSS animations
- Lazy loading

## Content

The website includes extensive, SEO-optimized content:
- Comprehensive guides
- Tips and strategies
- Rules and regulations
- Tournament information
- Blog posts
- FAQs

## License

© 2024 Rummy Games App. All rights reserved.
