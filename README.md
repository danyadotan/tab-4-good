# TAB@Work

Independent React/Vite single-page site for TAB@Work. It has no Base44 SDK, backend, auth, build plugin, or runtime API dependency.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Vite writes the production bundle to `dist/`.

## Deploy to Vercel

Import this repository into Vercel. The standard Vite settings apply:

- Build command: `npm run build`
- Output directory: `dist`

`vercel.json` rewrites browser routes to `index.html` so React Router URLs work when opened directly.

## Contact form

The contact dialog is backend-free: it opens the visitor's email client with a prefilled message to `danya@dynamicbridge.io`. This avoids third-party credentials and works on a static Vercel deployment. If server-side lead capture is wanted later, replace the mailto handoff in `src/components/tab/ContactDialog.jsx` with a chosen form or email provider and configure its credentials in Vercel environment variables.
