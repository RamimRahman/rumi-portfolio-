# Rumi Portfolio

Personal portfolio built with Next.js and React, hosted on Vercel.

Live site: https://rumi-portfolio-tau.vercel.app

## Development

Requires Node.js 22.13 or later.

```sh
npm ci
npm run dev
```

## Production

```sh
npm run build
npm start
```

Import this repository into the existing `rumi-portfolio` Vercel project using the Next.js framework preset. The production site includes the homepage, six experience pages, social links, contact icons, and a downloadable CV. No ChatGPT hosting account or runtime is required.

Zoom opens an email request, rather than an automatic calendar booking. Contact links are maintained in `app/contact-links.tsx`, and experience entries in `app/portfolio-data.ts`.
