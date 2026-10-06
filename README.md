# Super G Camp Fleece landing page

A responsive landing page for Google's Super G Camp Fleece Black Pullover, adapted from the Frost template with a winter backdrop, supplied product imagery, material details, and interactive layering suggestions.

## Run locally

Requires Node.js 20.19+ or 22.12+ and pnpm.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Production build

```sh
pnpm build
pnpm preview
```

Built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion. Production output is in `dist/`.

The shopping links open the Google Merchandise Store. This concept does not implement checkout. Product specifications and the product image were supplied by the user. The background video comes from the supplied Frost template.

## GitHub Pages

The deploy workflow builds and publishes the website whenever `main` changes. In Settings → Pages, keep Source set to **GitHub Actions**. Relative asset paths support both GitHub Pages and root-domain hosting.
