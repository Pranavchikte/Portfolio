## Portfolio Website

Personal portfolio built with Next.js App Router, TypeScript, and Tailwind CSS.
Includes light/dark theme toggle, project case-study pages, and contact form integration.

## Tech Stack
- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- Motion + custom UI components

## Setup
1. Install dependencies:
```bash
npm install
```

2. Create `.env.local`:
```bash
cp .env.example .env.local
```

3. Add Formspree endpoint in `.env.local`:
```env
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

4. Start development server:
```bash
npm run dev
```

Open `http://localhost:3000`.

## Scripts
- `npm run dev` - start development server
- `npm run build` - production build
- `npm run start` - run production server
- `npm run lint` - run ESLint

## Notes
- If `NEXT_PUBLIC_FORMSPREE_ENDPOINT` is not set, contact form falls back to opening the default mail client.
- Resume PDF is served from `public/Pranav Chikte.pdf`.

## Deploy
Deploy on Vercel or any Node-compatible host.
