# nishantppanchal.com

Personal website of Nishant Panchal, built with [Astro](https://astro.build) as a static site and deployed to GitHub Pages.

To add or edit research, projects, roles or the Home intro, see [CONTENT.md](CONTENT.md).

## Local development

Requires Node 22.23.4 or newer and [pnpm](https://pnpm.io) (version pinned in `package.json`).

```sh
pnpm i            # install dependencies
pnpm dev          # dev server at http://localhost:4321
pnpm build        # production build into dist/
pnpm preview      # serve the built site locally
pnpm check        # astro check (types, templates, content schemas)
pnpm format       # format with Prettier
```

If pnpm isn't installed, `npx pnpm@12.18.0 <command>` works too.

## How it's put together

| Path                    | What it is                                                         |
| ----------------------- | ------------------------------------------------------------------ |
| `src/content/`          | Research, projects, experience, education (Markdown) and awards    |
| `src/content.config.ts` | Zod schemas for every collection. Bad content fails the build      |
| `src/data/site.ts`      | Name, intro, about, role line, links, email parts, description     |
| `src/data/site-url.mjs` | The site's public address (canonical URLs, sitemap, OG tags)       |
| `src/styles/tokens.css` | Colour and type tokens for the light and dark themes               |
| `src/components/`       | Header, footer, theme toggle, LaTeX intro and list building blocks |
| `src/pages/`            | Routes, plus build-time OG images, favicon and robots.txt          |
| `src/scripts/`          | The only client JS: theme toggle and LaTeX intro                   |

## Deployment

Every push to `main` builds the site with [`withastro/action`](https://github.com/withastro/action) and publishes it with `actions/deploy-pages` (`.github/workflows/deploy.yml`).

**One-time setup:** in the GitHub repo, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**. With Actions deployments, GitHub reads the custom domain from **Settings → Pages → Custom domain**, not from the `CNAME` file. Make sure that setting, `public/CNAME` and `src/data/site-url.mjs` all name the same address.

## Checks

`.github/workflows/checks.yml` runs `astro check`, `prettier --check` and the build on every pull request and push. Once a week it also builds the site and checks every link with [lychee](https://github.com/lycheeverse/lychee). Dependabot opens monthly update PRs for npm packages and GitHub Actions.
