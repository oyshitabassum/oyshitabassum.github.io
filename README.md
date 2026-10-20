# oyshitabassum.github.io

Portfolio site for Oyshi Tabassum Aditi, a machine learning engineer. Live at [oyshitabassum.github.io](https://oyshitabassum.github.io/).

## Stack

Next.js 16 static export, TypeScript, CSS Modules.

## Develop

```sh
npm install
npm run dev
npm run build   # outputs out/
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `out/` to GitHub Pages.

One-time setup: in the repo's Settings → Pages, set Source to "GitHub Actions".

## Layout

```text
app/             layout, page, 404
components/      UI components
data/profile.ts  all content lives here
public/          favicon, llms.txt, .nojekyll
```
