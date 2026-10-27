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

## Editing content (CMS)

Text, cards, icons, case studies, the logo wall, blog posts and contact details live in `frontend/content/*.json` and are edited with [Decap CMS](https://decapcms.org) at **https://helix24.in/admin**. Each save is a commit to `main`, so Netlify rebuilds and the change is live in about 2 minutes.

- Log in with a GitHub account that has write access to this repository.
- Icons: every card has an icon picker (brand logos and 3D icons from `frontend/src/data/icons.json`), or an uploaded image. Uploads go to `frontend/public/uploads/`.
- The editor's fields are defined in `frontend/scripts/cms-config.mjs`, which writes `frontend/public/admin/config.yml` before each build. Change fields there, and keep them in line with the types in `frontend/src/lib/content.ts`.
- Edit on this computer without GitHub: in `frontend/`, run `npm run cms` (serves the repository to the editor) and `npm run dev` in a second terminal, then open http://localhost:3005/admin. Saves change the files on disk; commit them as usual.

One-time setup for the GitHub login (Netlify's OAuth provider):

1. GitHub → Settings → Developer settings → OAuth Apps → New OAuth App. Homepage URL `https://helix24.in`, callback URL `https://api.netlify.com/auth/done`. Create a client secret.
2. Netlify → helix4web → Site configuration → Access & security → OAuth → Install provider → GitHub, and paste the client ID and secret.

## Deploy notes

- `@netlify/plugin-nextjs` must stay in `netlify.toml`; without it every route returns 404.
- Security headers are set in `frontend/next.config.mjs`, along with the redirects from the old `.html` URLs.
- The contact form posts to `frontend/public/__forms.html` (Netlify form `contact-form`). Keep its fields in sync with `LeadForm.tsx`.
