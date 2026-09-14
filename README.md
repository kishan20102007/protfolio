# Gunnireddy JaiKishanReddy — Portfolio

Premium freelance portfolio for a Full-Stack Web Developer & AI Creative Developer. Frontend-only Next.js app, ready for GitHub → Vercel.

## Installation

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

```bash
npm run build
npm run start
```

## Environment variables

**No environment variables are required** for the site to work.

Optional (SEO absolute URLs after deploy): copy `.env.example` to `.env.local` and set:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

Add the same variable in the Vercel project settings if you use it.

## Customization

| Change | File |
| --- | --- |
| Contact, name, links | `src/data/site.ts` |
| Navigation | `src/data/navigation.ts` |
| Services | `src/data/services.ts` |
| Skills | `src/data/skills.ts` |
| Projects | `src/data/projects.ts` |
| AI / creative cards | `src/data/creatives.ts` + `public/creatives/` |
| Process steps | `src/data/process.ts` |

### Add a project

Append an object in `src/data/projects.ts`. To use a real screenshot, put the file in `public/projects/` and set `image: "/projects/your-file.webp"`.

### Replace creative placeholders

Replace the SVGs in `public/creatives/` with your ads/posters (keep the same filenames, or update the `image` paths in `src/data/creatives.ts`).
