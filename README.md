# Portfolio

Personal portfolio — software-first, with a mechanical engineering background. Built with React + Vite.

## Run it

```bash
npm install
npm run dev
```

Build for production with `npm run build` (output in `dist/`).

## Make it yours

Almost everything you need to change is in **`src/data/content.js`**:

- `site` — name, title, tagline, email, resume link, socials
- `about` — bio paragraphs and highlight stats
- `projectFilters` + `projects` — each project's `tags` decide which filter tabs it shows under; `kind` (`web` or `mobile`) sets the card color
- `experience` — timeline entries, `type` is `software` or `engineering`
- `skills` — grouped skill cards

**Images:** drop files into `public/images/` and set the path, e.g. `photo: '/images/profile.jpg'`.
Anything left as `null` shows a labelled placeholder. Put your resume PDF in `public/files/` and set `resumeUrl` to its path, e.g. `'/files/Bondan_Ilham_Akbar_20-11-2026.pdf'`.

**Colors:** theme tokens are at the top of `src/index.css` (`--software`, `--engineering`, `--neutral`, …).
