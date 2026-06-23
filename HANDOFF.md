# Handoff: Jeremy Swisher MD Sports Medicine

Updated: 2026-06-22

## Product Direction

Build a physician-led sports medicine app centered on Jeremy Swisher MD. The app should help active adults and athletes understand common injuries, choose safe next steps, follow evidence-based home exercise programs, and learn about ultrasound-guided sports medicine procedures without implying self-diagnosis or replacing individualized care.

Core positioning:

> Evidence-based sports medicine rehab plus physician-level education on imaging, injections, biologics, shockwave, tenotomy, and return-to-sport decisions.

## Current Stack

- Vite + React 19 + TypeScript
- React Router `HashRouter`
- Plain CSS design system
- `lucide-react` icons through `src/content/icons.ts`
- `fuse.js` search
- LocalStorage program/progress state through `src/store/programStore.tsx`

Run:

```bash
npm install
npm run dev
```

Checks:

```bash
node --experimental-strip-types scripts/integrity-check.ts
npm run typecheck
npm run lint
npm run build
```

## Current Architecture

- `src/content/types.ts` is the single source of truth for clinical content schemas.
- `src/content/conditions/` contains one file per condition. Slug, file name, and `condition.id` must match.
- `src/content/procedures.ts` defines the reusable interventional sports medicine procedure pages.
- `src/content/citations.ts` contains shared citations. Individual condition files also export local citations.
- `src/content/pathways.ts` contains sport-specific hubs such as Pickleball Medicine and Golf Medicine.
- `src/routes/Condition.tsx`, `src/routes/Procedure.tsx`, `src/routes/ProgramBuilder.tsx`, and `src/routes/PrintHandout.tsx` are the main clinical surfaces.
- `scripts/integrity-check.ts` is the clinical/content graph safety lint. Keep extending this instead of relying on manual review only.

## What Exists Now

- 28 condition pages across 9 body regions.
- Condition-level red flags with `emergency`, `urgent`, and `see-clinician` urgency tiers.
- Phased home exercise programs with dose, frequency, regressions, progressions, form cues, pain rules, and inline diagrams.
- Search across conditions, exercises, procedures, regions, and sport pathways.
- Saved programs and exercise completion in localStorage.
- Follow-along exercise session modal.
- Printable multi-condition home exercise handout.
- Procedure education pages for:
  - Ultrasound-guided injection
  - Corticosteroid injection
  - PRP
  - Hyaluronic acid
  - Shockwave therapy
  - Percutaneous tenotomy
- Sport hubs for pickleball, golf, basketball, and running.

## Latest Codex Pass

This pass focused on medical safety, procedure education, and better handoff quality.

Implemented:

- Corrected several red-flag urgency mismatches for septic joint patterns, cauda equina language, neurovascular compromise, compartment syndrome patterns, Achilles/biceps rupture over-triage, and selected condition-specific dangerous mimics.
- Fixed follow-along resume behavior so `Resume session` starts on the first incomplete exercise.
- Added `Procedure.education` fields:
  - `decisionPoint`
  - `whatHappens`
  - `notFor`
  - `aftercare`
  - `callClinician`
- Rendered a new “High-yield decision module” on every procedure page.
- Expanded procedure search keywords so patient safety phrases are searchable.
- Added source-backed shared citations for NICE OA, NICE ESWT plantar/Achilles, AAOS PRP, AAOS orthobiologics, Mayo cortisone shots, and AMSSM sports ultrasound.
- Hardened `scripts/integrity-check.ts` to fail on missing procedure education, unresolved procedure citations, unsafe red-flag triage wording, and leaked `Default:` text.
- Updated this handoff to match the real app architecture.
- Started and captured a ChatGPT Deep Research report for procedure evidence and PRP peri-procedure planning:
  - prompt: `research-prompts/procedure-evidence-matrix-prp-peri-procedure.md`
  - raw result: `research-results/2026-06-22-chatgpt-deep-research-procedure-prp.md`
  - ChatGPT URL: `https://chatgpt.com/c/6a39c2ab-1a38-83e8-9eaa-12b649a83b70`
- Implemented a PRP Prep & Recovery Plan on the PRP procedure page:
  - pre-PRP checklist
  - medication and supplement guidance with basis labels
  - tendon, joint/OA, and hand/wrist recovery clusters
  - warning signs and clinician caveats
  - search support for PRP medication/supplement terms
  - integrity checks for PRP safety language

## Medical Content Status

All clinical content remains `physician-review-pending`.

Do not flip anything to `physician-approved` without Dr. Swisher reviewing the specific condition/procedure. Do not add fabricated citations, fake video IDs, unsupported statistics, or marketing-style efficacy claims.

Key source posture:

- Use guideline/organization sources when available: AAOS, NICE, ACR/AF, AMSSM, JOSPT/APTA, BJSM, Cochrane.
- Biologics/procedures should be described with uncertainty and condition-specific nuance.
- Exercise programs should remain load-management centered and should avoid “magic exercise” claims.
- Procedures are shared-decision education, not universal recommendations.

## Known Limitations

- `PHYSICIAN-REVIEW.md` is stale relative to the latest applied fixes and should be regenerated into resolved vs open items.
- Videos are curated but still pending physician review unless `approved: true`.
- No authentication, backend, CMS, analytics, or deployment configuration.
- No automated Playwright test suite yet; browser QA has been manual/scripted.
- Vite build passes but still reports an icon chunk-size warning.
- Procedure pages now have better education, but they still need condition-specific decision aids and post-procedure rehab handouts.

## Best Next Steps for Claude Ultra Code

1. Regenerate `PHYSICIAN-REVIEW.md` so resolved concerns from the latest passes are not presented as still open.
2. Add a formal Playwright test suite for:
   - route crawl
   - search result navigation
   - add-to-program
   - print handout
   - follow-along resume
   - mobile overflow
3. Build a procedure-by-condition matrix page showing which procedures are common, selected, rare, or not indicated for each condition.
4. Expand ultrasound education into modules:
   - why ultrasound is used
   - anatomy orientation
   - diagnostic vs procedural ultrasound
   - what ultrasound can and cannot prove
   - common guided targets in sports medicine
5. Make HEPs more “module-like”:
   - exercise substitutions
   - equipment/no-equipment variants
   - automatic next-phase prompts
   - symptom response check-ins
   - printable phase-specific sheets
6. Improve sport hubs for Pickleball Medicine and Golf Medicine with richer warm-ups, common mechanism education, and return-to-play progressions.
7. Consider splitting content into a lightweight CMS or structured JSON/MDX pipeline before scaling beyond the current 28 conditions.

## Quality Bar

Keep the first screen as an actual clinical app dashboard, not a marketing landing page. The product should feel like a calm sports medicine tool: evidence-aware, readable, fast to scan, and built around real patient decisions.
