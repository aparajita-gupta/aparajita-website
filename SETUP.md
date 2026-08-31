# Portfolio — setup & content checklist

Built with Next.js 16 (App Router) + Tailwind v4, deploys to Vercel. Fully static.

## Run locally

```bash
nvm use            # or: nvm install --lts
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (also runs typecheck)
npm run lint
```

## Make it yours (in order)

1. **`lib/site.ts`** — name, role, tagline, URL, email, location, education,
   availability, and your GitHub / LinkedIn links. Every `// TODO` matters.
2. **`lib/projects.ts`** — replace the four example projects with your real ones.
   Keep 4–6, aim for a mix of `swe` / `embedded` / `ai`. Set `featured: true`
   on your best 3 (they show on the homepage). Fill in `problem` / `approach` /
   `challenges` / `outcome` like you're briefing an interviewer — be specific,
   use numbers.
3. **`lib/skills.ts`** — trim to what you can actually discuss in an interview.
4. **`public/resume.pdf`** — replace the placeholder with your real resume.
5. **`public/portrait.svg`** — replace with a real square photo `portrait.jpg`
   (~600px), then change the `src` in `app/about/page.tsx` to `/portrait.jpg`.
6. **`app/about/page.tsx`** — rewrite the three bracketed paragraphs in your voice.
7. **Project images** — drop screenshots / board photos in
   `public/projects/<slug>/` and list them in each project's `images` array.
8. **`app/favicon.ico`** — swap for your own if you want.

## Deploy to Vercel

1. Push this folder to a new GitHub repo.
2. vercel.com → New Project → import the repo → deploy (no config needed).
3. You get `https://<name>.vercel.app`. Put that URL in `site.url` and redeploy.
4. (Optional) Add a custom domain in Vercel → Settings → Domains.
5. Analytics is already wired (`@vercel/analytics`); enable it in the Vercel
   dashboard under the project's Analytics tab.

## Pre-launch checks

- [ ] `npm run build` is clean
- [ ] Mobile: resize to 375px — no horizontal scroll, nav works
- [ ] Lighthouse (DevTools, mobile): Perf ≥ 95, A11y ≥ 95, SEO 100
- [ ] Every external link opens the right place
- [ ] Paste the URL into LinkedIn's post box — preview card shows up
- [ ] Someone else proofreads every page
- [ ] Dark + light both look right (toggle in the nav)
- [ ] Add the URL to your resume header and LinkedIn (Featured + Contact info)

## Structure

```
app/
  layout.tsx              nav, footer, fonts, metadata, theme script
  page.tsx                hero + featured projects + skills + contact
  about/page.tsx
  projects/page.tsx       filterable grid
  projects/[slug]/page.tsx   detail page, static-generated per project
  opengraph-image.tsx     auto-generated link-preview image
lib/                      site.ts, projects.ts, skills.ts  ← your content
components/                nav, footer, cards, theme toggle, ui primitives
public/                   resume.pdf, portrait.svg, projects/<slug>/*
```
