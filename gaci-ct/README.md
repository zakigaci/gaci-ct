# GACI Contrôle Technique — Website

Professional website for Controle Technique GACI Boudouaou El Bahri.

## Stack 
- **Next.js 14** (App Router, Static Export)
- **Tailwind CSS**
- **TypeScript**
- **i18n**: FR 🇫🇷 / AR 🇩🇿 / EN 🇬🇧

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build & Deploy

```bash
npm run build
```

### Deploy to Vercel
1. Push to GitHub
2. Import repo in [vercel.com](https://vercel.com)
3. Deploy (zero config needed)

## Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout + metadata
│   ├── page.tsx         # Main page
│   └── globals.css      # Global styles + animations
├── components/
│   ├── Navbar.tsx       # Sticky navbar + lang switcher
│   ├── Hero.tsx         # Hero with logo bg blur
│   ├── About.tsx        # About section
│   ├── Services.tsx     # 4 service cards
│   ├── Hours.tsx        # Opening hours
│   ├── Reviews.tsx      # Customer reviews + Google CTA
│   ├── Contact.tsx      # Contact info + map
│   ├── Footer.tsx       # Footer with logo
│   └── WhatsAppButton.tsx  # Floating WhatsApp
├── context/
│   └── i18n.tsx         # i18n provider
├── hooks/
│   └── useReveal.ts     # Scroll reveal hook
└── locales/
    ├── fr.json
    ├── ar.json
    └── en.json
```

## Business Info
- **Phone**: 0771 11 34 75
- **Email**: gacict56@gmail.com
- **Location**: Boudouaou-El-Bahri, Boumerdès, Algeria
- **Hours**: Sat–Thu 07:30–16:30 | Fri: Closed
