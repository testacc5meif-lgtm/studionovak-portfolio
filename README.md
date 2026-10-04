# studionovak.com

Portfolio site for Novak Janković. Built with [Astro](https://astro.build), fully static, hosted on Cloudflare Pages.

## Run locally

Requires Node.js 22.12+.

```bash
npm install
npm run dev       # http://localhost:4321 with hot reload
npm run build     # production build into ./dist
npm run preview   # serve ./dist locally
npm run check     # type-check .astro/.ts files
```

## Editing content

| What | Where |
| --- | --- |
| Projects | `src/data/projects.json` |
| Email, Upwork link, name, location | `src/data/site.json` |
| Your photo | `src/assets/novak.jpg` (resized automatically at build time) |
| Services cards | `src/components/Problems.astro` |
| About text | `src/components/About.astro` |
| Colors / fonts | `src/styles/global.css` (`:root` and `[data-theme='dark']`) |
| Link preview image (1200×630) | `public/og.jpg` |
| 404 page | `src/pages/404.astro` |

### Adding a project

Add an object to the array in `src/data/projects.json`:

```json
{
  "name": "Project name",
  "tagline": "One-line summary (optional)",
  "problem": "What was painful before.",
  "solution": "What you built and how.",
  "result": "What changed afterwards.",
  "stack": ["Tool A", "Tool B"],
  "link": "https://example.com"
}
```

`tagline` and `link` are optional. Projects appear in the order they are listed.

The file is validated at build time (`src/data/projects.ts`): a missing field, a misspelled key or an invalid URL stops the build with a message pointing at the problem.

## Deploying to Cloudflare Pages

1. Push this repo to GitHub (or GitLab).
2. In the Cloudflare dashboard go to **Workers & Pages → Create → Pages → Connect to Git** and pick the repo.
3. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - (Node version comes from `.nvmrc`, which is 22)
4. **Save and Deploy.** You get a `*.pages.dev` URL, and every push to `main` redeploys automatically.

### Custom domain

1. In the Pages project open **Custom domains → Set up a custom domain**, enter `studionovak.com`, then repeat for `www.studionovak.com`.
2. If the domain's DNS is already on Cloudflare, the records are created for you. If not, either move the domain's nameservers to Cloudflare (recommended, needed for the apex domain) or add the CNAME record Cloudflare shows you at your registrar.
3. Optional: add a redirect rule so `www` goes to the apex domain (**Rules → Redirect Rules**, in the domain's zone).

SSL certificates are issued automatically.
