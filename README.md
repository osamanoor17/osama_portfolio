# Muhammad Osama Noor — Personal Portfolio

A responsive portfolio for **Software Engineer & Consultant** Muhammad Osama Noor, based in Karachi, Pakistan. Built with React, TypeScript, Vite, Tailwind CSS, Framer Motion and Lucide icons.

## Features

- Twelve projects in a responsive showcase: three columns on desktop, two on tablet and one on mobile.
- Project case studies with engineering contributions, capabilities, technology and relevant external links.
- Professional experience, capability tabs, education and a supplied personal avatar.
- Four selected Medium articles with short editorial summaries and direct links.
- Four selected certifications: Data Science and AI 10; Career Essentials in GitHub Professional Certificate; The complete 2021 flutter development bootcamp with dart; Baseline: Data, ML, AI.
- Email, Instagram, GitHub, LinkedIn and Medium contact links with matching icons.
- “Let’s talk” opens an editable email draft addressed to `mosamanoor17@gmail.com`, with a prefilled subject and collaboration template. It requires a configured email handler; the site does not send email itself.
- Subtle scroll reveals, hover feedback, dialog transitions and a desktop pointer-responsive diagram, with reduced-motion support.

## Run locally

Use Node.js 22.12+ or a compatible current LTS release.

```sh
npm install
npm run dev
```

Open the URL printed by Vite, normally `http://localhost:5173/`.

```sh
npm run typecheck
npm run build
npm run preview
```

The production build is written to `dist/`.

## Content and editing

| File or directory | Purpose |
| --- | --- |
| `PORTFOLIO_BRIEF.md` | Original content brief; later user-supplied details extend it |
| `src/data/portfolio.ts` | Projects, professional experience, capabilities and social/email links |
| `src/data/projectLinks.ts` | User-supplied repository, showcase, store and live website links |
| `src/data/projectArtwork.ts` | Project artwork mapping, dimensions, alt text and credits |
| `src/data/publications.ts` | Selected Medium article titles, descriptions and URLs |
| `src/data/certifications.ts` | Selected certification titles and supported issuer/date metadata |
| `src/sections/` | Page sections |
| `src/components/` | Reusable cards, navigation, dialogs, certifications and reveal animation |
| `src/styles/` | Responsive layout, design tokens, artwork styling and motion preferences |
| `src/assets/profile/` | Supplied personal avatar |
| `src/assets/projects/` | Final presentation images, responsive WebP variants and retained source assets |
| `PROJECT_IMAGE_PROMPTS.md` | Image generation prompts and presentation notes |

The twelve projects are TrustFin AI, Haqooq AI, Sahara AI, SmartHire AI, Islamic Insights, KnockUp, SQL Helper, AI Text & Chapter Summarizer, Reliable Driving School, Careem DB, Shop Smart and One-Bullet: AI Commander.

Project links are displayed as spaced action buttons on cards and in case studies. Links are included where supplied; SmartHire has no supplied project URL. One-Bullet replaces the previous Flutter portfolio entry.

### Sources and visual credits

Project descriptions combine the original brief with supplied app screens, the Reliable Driving School website and inspected One-Bullet repository material. No unsupported performance or accuracy guarantees are adopted.

Artwork combines generated concept illustrations, refined mockups based on supplied references, supplied promotional artwork and a framed application overview. Generated or adapted presentations are identified in case studies. Original reference galleries are removed from the public interface; source files remain available for maintenance. Images preserve their full compositions rather than cropping important interface content.

Medium selections come from the public profile at `https://medium.com/@m.osamanoor`. Descriptions summarize the listed topics; reading times and engagement counts are omitted.

Certification titles follow the user’s final selection. GitHub and Flutter issuer/date metadata come from the public LinkedIn listing. Unconfirmed metadata for the other two is omitted. Credential pages were inaccessible, so the site does not claim independent credential verification.

The KCompute experience remains “From June 2024” because no end date was supplied.

## Accessibility

The site includes semantic navigation, visible keyboard focus, a skip link, keyboard-operated capability tabs and mobile navigation that makes background content inert. Native case-study dialogs close with Escape, the close button or backdrop and restore focus to the triggering button. Email copying provides a status message and a manual-copy fallback. Fonts are bundled locally.

Reduced-motion preferences disable decorative animation and role rotation, and remove reveal movement and dialog entrance animation.

## Deployment

For Cloudflare Pages, use the Vite preset with:

- Build command: `npm run build`
- Output directory: `dist`
- `NODE_VERSION`: `22`
- `VITE_SITE_URL`: the final HTTPS origin without a trailing slash

Alternatively, upload the contents of `dist/` using Direct Upload. The site uses section anchors and native dialogs, so client-side route rewrites are unnecessary.

Set `VITE_SITE_URL` before building to generate canonical and absolute social metadata. Without it, no fictitious canonical domain is published. See `.env.example`. The social preview is `public/social-preview.png`; response and asset caching headers are defined in `public/_headers`. No backend or runtime secrets are required.

## Verification

The final local audit covered widths of 320, 390, 600, 768, 1024, 1440 and 1920px. All images decoded, the expected twelve projects/four articles/four certifications were present, and no document-width overflow remained. All twelve project dialogs, keyboard focus restoration, mobile navigation, internal section targets and the email draft recipient/subject/body passed checks. No page JavaScript errors were reported. The TypeScript/Vite production build passed.

Local audit scripts, reports and screenshots live in the ignored `qa/` directory. These checks do not guarantee every browser or physical device, third-party link availability, or the user’s email app configuration.
