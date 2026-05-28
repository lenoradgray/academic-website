# Lenora Gray — personal site (Astro)

A statically-generated personal academic site built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). Type-safe content collections for publications and talks, no backend.

## Run locally

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
#    → opens http://localhost:4321

# 3. Build for production
npm run build
#    → output goes to ./dist

# 4. Preview the production build
npm run preview
```

Requires Node 18.17+ or 20.3+ (Astro 4's minimum).

## Project structure

```
.
├── astro.config.mjs        Astro config (integrations, site URL)
├── tailwind.config.mjs     Brand palette + fonts as theme tokens
├── tsconfig.json           Strict TypeScript + path aliases
├── public/                 Static files served as-is
│   ├── assets/
│   │   └── headshot.svg    Placeholder portrait — replace with a real photo
│   └── cv/
│       └── lenora-gray-resume.pdf
└── src/
    ├── styles/
    │   └── global.css      Tailwind layers + editorial primitives
    ├── content/
    │   ├── config.ts       Collection schemas (publications, talks)
    │   ├── publications/   One .md per paper
    │   └── talks/          One .md per talk
    ├── layouts/
    │   └── BaseLayout.astro
    ├── components/
    │   ├── Sidebar.astro
    │   ├── PublicationCard.astro
    │   └── TalkCard.astro
    └── pages/
        ├── index.astro      Home
        ├── publications.astro
        ├── speaking.astro
        ├── about.astro
        └── contact.astro
```

## Where to edit content

### Publications and talks → Markdown files

The fastest place to add or change a paper is its file in `src/content/publications/`. Same for talks in `src/content/talks/`.

Each file has YAML frontmatter that the schema in `src/content/config.ts` validates at build time — if you misspell a field or use the wrong type, `npm run dev` will tell you.

**To add a paper:**

```bash
# Create a new file — naming convention: {year}-{kebab-title}.md
touch src/content/publications/2025-my-new-paper.md
```

Then paste this and edit:

```yaml
---
title: "My New Paper Title"
authors:
  - "Lenora Gray"
  - "Co-author Name"
me: "Lenora Gray"
year: 2025
venue: "SIGIR '25"
venueLong: "SIGIR"
location: "Padua, IT"
date: "Jul 2025"
type: "conference"      # conference | tutorial | preprint | journal
featured: false         # adds "Best paper" badge
home: false             # surface on the home page
order: 0                # sort tiebreak within same year
abstract: |
  A short paragraph summarizing the paper. Shown in the
  collapsible "Abstract" details on /publications.
links:
  pdf: "https://..."
  acm: "https://..."
  doi: "https://..."
---
```

**To add a talk:**

```yaml
---
title: "Talk Title"
event: "Conference Name"
type: "panel"           # keynote | talk | panel | workshop | tutorial | invited | podcast
year: 2025
date: "2025-09-22"      # used for sorting
dateLabel: "Sep 2025"
location: "Chicago, IL"
upcoming: false         # true to put it in the "Upcoming" section
featured: false
description: |
  Optional short description.
links:
  event: "https://..."
  slides: "https://..."
---
```

### Bio, education, experience → `src/pages/about.astro`

Hand-edited markup. The CV blocks (education, experience, awards, focus tags) are inline so you can rearrange them freely.

### Contact email → `src/pages/contact.astro`

The destination email is one constant at the top of the file:

```ts
const CONTACT_EMAIL = 'lenora@example.com';
```

The form does a client-side `mailto:` handoff. If you'd rather have submissions hit a real backend, replace the submit handler with a `fetch()` to [Formspree](https://formspree.io), [Web3Forms](https://web3forms.com), or your own endpoint.

### Sidebar links (Scholar / GitHub / LinkedIn) → `src/components/Sidebar.astro`

The four placeholder `href="#"` links in the footer of the sidebar. Replace with your real URLs.

### Headshot → `public/assets/headshot.svg`

Drop in a real portrait. Either keep the SVG path (saving your own as `headshot.svg`) or swap the extension and update the `<img src="...">` in `src/components/Sidebar.astro`.

### Brand palette and fonts → `tailwind.config.mjs`

Colors and font stacks are theme tokens. Override here and they propagate everywhere you've used `text-forest`, `bg-cream`, `font-serif`, etc. The raw CSS custom properties also live in `src/styles/global.css` for use outside Tailwind.

## Deploying

The build outputs a fully static `dist/` folder.

### GitHub Pages
1. Set the `site` field in `astro.config.mjs` to your deployed URL.
2. If serving from a subpath, add `base: '/repo-name'` to the same config.
3. Push to GitHub. Use the [astro-pages action](https://docs.astro.build/en/guides/deploy/github/) or build locally and publish `dist/`.

### Netlify / Cloudflare Pages / Vercel
Connect the repo. Build command: `npm run build`. Publish directory: `dist`. No env vars required.

## Type safety

Run `npm run astro check` to type-check `.astro` files and validate your content frontmatter against the schemas. Failing entries will be reported with line numbers.

## Type credits

Set in **Fraunces** (display & body serif), **Inter** (UI sans), and **JetBrains Mono** (metadata). All loaded from Google Fonts at runtime. To self-host, see [Fontsource](https://fontsource.org).
