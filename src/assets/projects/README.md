# Project artwork

Twelve original conceptual artworks created using the built-in imagegen tool. These are visual interpretations of the project domains, not application screenshots or evidence of additional implemented functionality. Names and captions remain HTML.

The active artwork now includes three supplied-project updates:

- KnockUp: `knockup-refined.webp`, a built-in imagegen visualization based on the supplied agent-list and chat screens. Its original reference is also shown in the case study.
- SQL Helper: `sql-helper-supplied.webp`, the supplied portrait interface preserved in a dark product stage.
- Shop Smart: `shop-smart-supplied.webp`, the supplied mobile storefront. Its native 287px width is respected rather than enlarging the source asset.
- Reliable Driving School: `reliable-driving-school-live.webp`, a viewport capture from the supplied live website.
- One-Bullet: `one-bullet.webp`, the existing showcase banner from the supplied public repository; replaces the earlier portfolio project in the UI.

- SmartHire uses `smarthire-ai-blue.webp`, a square version of the supplied mockup with purple UI accents changed to blue using built-in imagegen. It has 1200px, 800px and 320px variants. Both the supplied original and edited master are preserved. The background and composition remain consistent with the supplied artwork.

- Sahara uses `sahara-ai-polished.webp`: a landscape studio presentation refined with built-in imagegen from the supplied interface, with HTML cover typography. The original portrait remains preserved as `sahara-ai-supplied-original.png`.
- Haqooq uses `haqooq-ai-overview.webp` and `haqooq-ai-consultation.webp`, optimized from the two supplied screenshots without altering their content. Both are available in the case study with full-size links.
- Islamic Insights uses `islamic-insights-supplied.webp`, preserving the supplied poster's complete 3:2 composition. Its original JPEG remains alongside the optimized versions.

Earlier generated alternatives remain in the asset folder. Image captions distinguish supplied screenshots/posters, adapted product visuals, and generated concepts. Screenshot text is not copied into the portfolio as independently verified functionality or performance claims.

Every base filename has three optimized WebP versions:

- `name.webp`: 1600 × 900 main artwork.
- `name-800.webp`: 800 × 450 responsive image.
- `name-320.webp`: 320 × 180 index thumbnail.

The typed mapping in `src/data/projectArtwork.ts` connects assets and meaningful alt descriptions to projects. `ProjectVisual` selects responsive sources and preserves the 16:9 composition. Featured artwork and thumbnails lazy-load; case-study artwork loads when its dialog opens.

`PROJECT_IMAGE_PROMPTS.md` contains the standalone prompts and correction notes. `artwork-manifest.json` records source filenames and output sizes. Original generation files remain in the tool's generation directory; all site-consumed deliverables are stored here.

To replace artwork, update all three variants together. For a real screenshot, deliberately revise the conceptual caption and alt description. The five original CSS concept compositions remain available if their corresponding assets are removed.
Refreshed SQL Helper, KnockUp and Reliable Driving School use built-in AI studio mockups adapted from supplied app screens and the live website capture. Original references remain available in case studies. Compact secondary project cards follow Islamic Insights.
