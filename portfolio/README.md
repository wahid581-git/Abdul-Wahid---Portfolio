# Abdul Wahid — DevOps Portfolio

A dark, glassmorphism-styled portfolio built with **React + TypeScript + Vite + Tailwind CSS + Framer Motion**, deployed to **GitHub Pages**.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Project structure

```
src/
  components/     All UI sections (Hero, About, Skills, Projects, Architecture, etc.)
  data/siteData.ts  ← Single file with ALL your content (bio, skills, projects, certs)
  hooks/          useTheme (dark/light), useScrollProgress
public/
  resume.pdf      Your resume (already added)
```

## Editing content

Almost everything on the site is driven by **`src/data/siteData.ts`**. Update your bio,
skills, projects, experience or certifications there — the components re-render
automatically, no need to touch JSX.

To replace the resume, drop a new PDF at `public/resume.pdf` (same filename).

## Wiring up the contact form (EmailJS)

The contact form in `src/components/Contact.tsx` currently simulates a send.
To make it real:

1. Create a free account at [emailjs.com](https://www.emailjs.com/) and set up an email service + template.
2. `npm install @emailjs/browser`
3. In `Contact.tsx`, replace the placeholder `await new Promise(...)` inside `handleSubmit` with:
   ```ts
   import emailjs from '@emailjs/browser'
   await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.currentTarget, 'YOUR_PUBLIC_KEY')
   ```

## GitHub stats

The GitHub Activity section pulls live data from the public GitHub API and from
[github-readme-stats](https://github.com/anuraghazra/github-readme-stats),
[github-readme-streak-stats](https://github.com/DenverCoder1/github-readme-streak-stats), and
[ghchart](https://github.com/2016rshah/githubchart-api) — all keyed off `profile.githubUsername`
in `siteData.ts`. No API key needed.

## Deploying to GitHub Pages

This repo ships with `.github/workflows/deploy.yml`, which builds and deploys automatically
on every push to `main`.

1. Push this project to a GitHub repo named **`portfolio`** (or update the paths below if you use a different name).
2. In your repo: **Settings → Pages → Source → GitHub Actions**.
3. Push to `main` — the workflow builds and publishes to `https://<your-username>.github.io/portfolio/`.

### If your repo name isn't `portfolio`

Update the `base` path in two places:
- `vite.config.ts` → `base: '/your-repo-name/'`
- `index.html` → canonical/OG URLs

### If you deploy to `<username>.github.io` (a root user site)

Set `base: '/'` in `vite.config.ts` instead.

## Manual deploy (alternative)

```bash
npm install
npm run build
npx gh-pages -d dist
```

## Adding an Open Graph preview image

Drop a 1200×630 image at `public/og-image.png` for rich social link previews
(referenced already in `index.html`).
