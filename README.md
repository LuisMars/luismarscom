# luismars.com

Static homepage hub built with Astro.

## Requirements

- Node.js 20+
- npm 10+

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Build output is generated in `dist/`.

## Add or edit project links

Project cards are maintained through markdown files in `src/content/projects/`.

Each file uses this frontmatter schema:

```yaml
title: Project Name
description: One-line description (max ~120 chars)
url: https://example.com/
featured: false
order: 999
tags:
  - optional
```

Only valid `https://` URLs are accepted.

## Deploy

GitHub Pages workflow is defined in `.github/workflows/deploy.yml`.
