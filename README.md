# Jeremy Swisher MD Sports Medicine

A physician-led, patient-facing sports medicine education app: evidence-based injury
education, module-based home exercise programs (HEPs), interventional-procedure
education, search, a printable handout, and a multi-condition program builder —
organized **by body region**, covering the top primary-care sports medicine conditions.

## Run Locally

```bash
npm install
npm run dev
```

Open the printed local URL (Vite default `http://localhost:5173/`). The app uses
hash routing, so deep links like `/#/condition/achilles-tendinopathy` work on any
static host and from the filesystem.

## Checks

```bash
npm run typecheck   # tsc -b
npm run lint        # eslint (0 errors; react-refresh fast-refresh warnings are expected)
npm run build       # tsc -b && vite build  → dist/
npm run preview     # serve the production build
```

## What's in it

- **28 conditions across 9 body regions** (shoulder, elbow, wrist/hand, neck, low
  back, hip/pelvis, knee, lower leg, ankle/foot), each with: patient-friendly
  overview, causes/risk factors/symptoms, prognosis, structured **red flags** by
  urgency, self-care do/don't, a **phased HEP** (each exercise has dose, frequency,
  progression, regression, form cues, a pain rule, and an inline SVG diagram), an
  **evidence summary** with a strength-of-evidence badge, **procedure relevance**,
  return-to-activity criteria, and FAQs.
- **Curated YouTube videos** where a real, verified link exists (privacy-enhanced
  `youtube-nocookie` embeds with click-to-load; unapproved videos are labeled
  "pending review").
- **Custom inline SVG illustrations** (no external image hosting).
- **Search** (⌘K command palette, fuzzy), **progress saving** (localStorage),
  **per-condition shareable pages**, a **multi-condition program builder**, and a
  **print/PDF handout**.

## Architecture

- React 19 + Vite + TypeScript (strict), plain CSS design system, `lucide-react`,
  `react-router-dom` (HashRouter), `fuse.js` (search).
- `src/content/` — the content layer. `types.ts` is the single source of truth;
  one file per condition under `src/content/conditions/`, aggregated by
  `conditions/index.ts` which also runs **dev-time integrity assertions** (slug ==
  filename == id, all citation references resolve, every exercise has a valid
  diagram key, non-empty red flags / uncertainty, etc.).
- `src/content/citations.ts` holds shared sources; each condition file also carries
  its own `citations[]`, merged into one registry. **No fabricated citations,
  URLs, or video IDs** — every source is real.
- `src/store/` + `src/hooks/` — `useLocalStorage` and a `ProgramProvider` for
  per-condition progress and saved programs (versioned `jsm:v1` key, with
  dangling-reference pruning). Patient progress is intentionally kept out of the
  content layer; the active phase is derived at render time.
- `src/components/`, `src/routes/`, `src/illustrations/` — UI.

## Medical content status

All clinical content is **physician-review pending** and is sourced from a
physician-curated evidence draft aligned to major guidelines (JOSPT/APTA CPGs,
AAOS, ACR, NICE, AMSSM, BJSM, Cochrane, and landmark trials). It is prototype
educational copy — not a reviewed clinical protocol, diagnosis tool, or substitute
for individualized care. Before publication, each condition should receive final
physician review (status flips to `physician-approved` with a `lastReviewed` date),
and each curated video should be watched and approved (`approved: true`).
