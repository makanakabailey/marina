# Marina Casino & Convention Center - Harare

A modern, full-stack website for Marina Casino & Convention Center built with Next.js 14, React, TypeScript, and Tailwind CSS. Optimized for Vercel deployment.

## Features

- Responsive design with mobile-first approach
- Interactive casino spin wheel
- Dynamic venue filtering
- Role-based content (Event Planners, Wedding Planners, Marketers)
- Newsletter subscription
- Contact form
- Smooth navigation with sidebar (desktop) and mobile menu

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Lucide React Icons

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main page
│   └── globals.css      # Global styles
├── components/
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── VenueFinder.tsx
│   ├── RoleSelector.tsx
│   ├── CasinoSection.tsx
│   ├── ServicesShowcase.tsx
│   ├── Newsletter.tsx
│   └── Footer.tsx
├── public/              # Static assets
├── tailwind.config.js
├── next.config.js
└── package.json
```

## Build Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

© 2025 Marina Convention Center & Casino Harare
