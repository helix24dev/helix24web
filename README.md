# Helix24 Solutions website

Source for [helix24.in](https://helix24.in).

- `frontend/` — Next.js 14 site, deployed by Netlify on every push to `main` (see `netlify.toml`).
- `backend/` — NestJS API (leads, health). Not deployed; the live contact form uses Netlify Forms.

## Develop

```sh
cd frontend
npm install
npm run dev        # http://localhost:3005
npm run build      # production build
```

## Deploy notes

- `@netlify/plugin-nextjs` must stay in `netlify.toml`; without it every route returns 404.
- Security headers are set in `frontend/next.config.mjs`, along with the redirects from the old `.html` URLs.
- The contact form posts to `frontend/public/__forms.html` (Netlify form `contact-form`). Keep its fields in sync with `LeadForm.tsx`.
