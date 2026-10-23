# TAB-4-Good

The independent TAB@Work site — the public thesis, product, architecture, validation and founder story, plus three live features for enterprise prospects. Built on **TanStack Start** (React + SSR + server functions); no Base44 SDK or external runtime dependency.

## Features

- **Interactive pilot-fit brief generator** (`src/components/tab/PilotFitStudio.jsx` → `src/server/pilot-brief.functions.ts`). A prospect describes their workflow domain, toolchain, team scale and stall points; a server function calls the **Vercel AI Gateway** (`google/gemini-2.5-flash`) with TAB's pilot-architect prompt and returns a structured four-week pilot brief (diagnosis, detect/coordinate/recover intervention, weekly scope, metrics). One click pre-fills the Design Partnership application.
- **TAB assistant** (`src/components/tab/TabAssistant.jsx`). The sparkle button in the nav: smooth-scroll navigation, 90-second thesis/enterprise summaries, read-aloud via the Web Speech API, and conversational design-partner capture that hands off to the contact dialog.
- **Secure contact capture + email** (`src/server/leads.functions.ts`). Design-partner and investor requests are stored privately in **Vercel Blob** and emailed to `danya@dynamicbridge.io` via **Resend**.
- **One-page investor brief (PDF)** (`src/components/tab/DownloadOverview.jsx` → `src/lib/generateOverviewPdf.js`). A download button in the footer and final CTA.

## Local development

```bash
npm install
cp .env.example .env.local   # fill in the keys you want to exercise locally
npm run dev
```

## Checks

```bash
npm run build      # vite build + tsc --noEmit
npm run lint       # eslint
npm test           # vitest unit tests
npm run test:e2e   # playwright
```

## Configuration

Every feature turns on only when its keys are present; without them the site still builds and serves, and each feature reports itself as unavailable rather than erroring. See [`.env.example`](.env.example) for the full list. Set the same keys in Vercel under **Project → Settings → Environment Variables**:

| Variable | Powers | Notes |
| --- | --- | --- |
| `AI_GATEWAY_API_KEY` | Pilot-brief generator | On Vercel with OIDC enabled, the function uses the request's `x-vercel-oidc-token` automatically; set this only for local dev or if OIDC is off. |
| `BLOB_READ_WRITE_TOKEN` | Secure contact storage | Create via Vercel → Storage → Blob, connected to this project. |
| `RESEND_API_KEY` | Email on new contact requests | Sends to `danya@dynamicbridge.io`. |
| `CONTACT_FROM_EMAIL` | From-address for those emails | Optional; defaults to `TAB@Work <leads@dynamicbridge.io>`. |

## Deploy

Deployed on Vercel from `main`. TanStack Start builds a Nitro server (output in `.output/`); Vercel detects the framework automatically — no custom build command or output directory needed.
