# Editing content

All content is plain files. Each Markdown file is one entry: the front matter (between the `---` lines) holds the fields, and anything below it is an optional description, rendered as Markdown. Leave the body empty to show no description.

Every field is checked when the site builds. A typo, such as a missing field, an unknown research type or a malformed date, stops the build with an error that names the file. Run `pnpm dev` to preview changes as you make them.

To hide an entry without deleting it, add `draft: true`. Drafts are still visible in the repository on GitHub, so don't use them for anything private.

## Add a research entry

Create `src/content/research/<slug>.md`:

```md
---
type: Conference paper # Journal article | Conference paper | Honours thesis | Research project | Preprint
title: A clear title for the paper
year: 2026 # the year the work was done; entries are grouped by this
published: 2027 # optional: publication year, if different
authors: # optional; "Nishant Panchal" is shown in bold
  - Jane Doe
  - Nishant Panchal
venue: Proceedings of Something 2027
links: # optional; shown as [paper] [doi] [code]. The first one also links the title
  - label: paper
    href: https://example.org/paper
  - label: doi
    href: https://doi.org/10.0000/example
---

One or two sentences on what the work is about.
```

Entries with a `https://doi.org/…` link also get `ScholarlyArticle` structured data for search engines. To order several entries within the same year, add `order: 1`, `order: 2` and so on (lower comes first).

## Add a project

Create `src/content/projects/<slug>.md`:

```md
---
title: My new project
year: 2026
stack: python · pytorch # shown in small monospace on the right
summary: One line on what it does.
links: # optional
  - label: code
    href: https://github.com/Nishantppanchal/my-new-project
  - label: demo
    href: https://example.org
---

Optional longer description.
```

Projects are grouped by `year`, newest first. Use `order` to arrange several in the same year.

## Add a role

Create `src/content/experience/<slug>.md`:

```md
---
org: Atlassian # roles with the same org are grouped together
location: Sydney # the organisation's location, shown next to its name
roleLocation: Remote # optional: where this role was based, if different
title: Machine Learning Engineer
start: 2026-03 # YYYY or YYYY-MM
end: now # YYYY, YYYY-MM or now
highlights: # optional bullet points
  - Shipped something measurable.
  - Improved something else by a lot.
---

Optional paragraph, shown above the highlights.
```

Dates show as `2024 — 2025`, `2026 — now` or just `2023` when both ends fall in the same year. Organisations are ordered by their most recent role, and roles within an organisation run newest first. The location next to the organisation's name comes from its most recent role.

## Education and awards

- **Education:** one file per degree in `src/content/education/`, with `degree`, `school`, `start`, `end` and `order` (lower comes first). The body is the description.
- **Awards:** one YAML list in `src/content/awards.yaml`, shown in file order. Each item has `year` (any text, such as `2025` or `2022–25`) and `text`.

## Edit the Home page

Everything on Home lives in `src/data/site.ts`.

The **intro** is a list of segments. Segments with `em: true` are set in italics and show as `\emph{…}` in the LaTeX animation:

```ts
intro: [
  { text: 'I build ' },
  { text: 'machine learning', em: true },
  { text: ' and ' },
  { text: 'agentic AI', em: true },
  { text: ' systems, and I’m researching how agents ' },
  { text: 'learn to cooperate', em: true },
  { text: ' for my honours in computer science at Monash University. …' },
],
```

Keep the spaces between segments inside the `text` strings. The animation splits plain segments into words and treats each italic segment as one unit.

Also in `site.ts`:

- `about`: the paragraph below the role line.
- `role`: the title, organisation and location that make up the role line.
- `description`: the default meta description for search engines and link previews.
- `github`, `linkedin` and the `email` parts. The email is assembled in the browser, so the full address never appears in the HTML.
