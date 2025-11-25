# Barbosa Advocacia - Landing Page

A professional and elegant landing page for a law firm providing legal counseling and services in Vitória da Conquista, Brasil.

## Tech Stack

- **Next.js v15** (App Router)
- **React v19**
- **TypeScript**
- **Tailwind CSS v4**
- **Turbopack** (for development)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with fonts and metadata
│   ├── page.tsx        # Main page composing all sections
│   └── globals.css     # Tailwind v4 configuration with @theme
├── components/
│   ├── layout/         # Layout components (Navbar, Footer, MobileMenu)
│   ├── sections/       # Page sections (Hero, About, Services, Contact)
│   └── ui/             # Reusable UI components (Button, Card, Input, Logo)
└── lib/
    ├── constants.ts    # Constants (nav links, services, etc.)
    └── utils.ts        # Utility functions
```

## Customization

### Colors

Edit the color palette in `src/app/globals.css`:

```css
@theme {
  --color-primary: oklch(65% 0.13 85); /* #ae8e00 */
  --color-secondary: oklch(65% 0.15 200); /* #009bae */
  /* ... */
}
```

### Content

- Navigation links: `src/lib/constants.ts` → `NAV_LINKS`
- Services: `src/lib/constants.ts` → `SERVICES`
- WhatsApp number: `src/lib/constants.ts` → `WHATSAPP_NUMBER`

### Images

Replace placeholder images:
- Hero section: Update `src/components/sections/HeroSection.tsx`
- About section: Update `src/components/sections/AboutSection.tsx`

## Build for Production

```bash
npm run build
npm start
```

## Features

- ✅ Responsive design (mobile-first)
- ✅ Server Components by default
- ✅ Elegant typography (Playfair Display + Inter)
- ✅ Professional color scheme
- ✅ Smooth animations and transitions
- ✅ Accessible components (ARIA labels, keyboard navigation)
- ✅ WhatsApp floating action button
- ✅ Contact form
- ✅ SEO optimized (metadata, OpenGraph)

## License

Private project - All rights reserved.

