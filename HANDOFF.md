# Handoff: Jeremy Swisher MD Sports Medicine

## Product Direction

Build a physician-led sports medicine app centered on Jeremy Swisher MD. The product should help active adults and athletes navigate sport-specific injuries, evidence-based home exercise programs, ultrasound education, and procedure education without implying self-diagnosis or replacing individualized care.

Core positioning:

> Evidence-based sports medicine rehab plus physician-level education on imaging, injections, biologics, and return-to-sport decisions.

## Current App

Project path:

`/Users/jeremyswisher/Downloads/Jeremy Swisher Sports Medicine`

Stack:

- Vite
- React 19
- TypeScript
- Plain CSS
- lucide-react icons
- Playwright dev dependency for visual QA

Important files:

- `src/App.tsx`: app shell, state, panels, drawers, interactions
- `src/data.ts`: sport, injury, phase, evidence, and procedure content model
- `src/styles.css`: design system, layout, responsive behavior, drawer styling
- `README.md`: run/check commands and medical content status

## Implemented UX

- Sidebar navigation for Dashboard, Sports, Injury Library, Exercise Programs, Ultrasound, Procedures, Evidence
- Top search field, My Programs action, Start a Program CTA
- Sport selector with selected state
- Injury selector per sport
- Care pathway with four phases
- Home Exercise Program with selectable phases and checkable exercises
- Evidence Snapshot linking to AAOS, ACR, NICE, and AMSSM source anchors
- Safety/red-flag box for when to see a clinician
- Procedure cards for ultrasound-guided injection, PRP, hyaluronic acid, shockwave, and tenotomy
- Start a Program drawer with selected pathway, active phase, red flags, and next-module outline
- Procedure education drawer with evidence label, best-fit discussion, questions to ask, and rehab integration

## Clinical Guardrails

Keep this app educational. Do not present exercise modules, PRP, HA, shockwave, tenotomy, or ultrasound procedures as universal recommendations.

Production content should include:

- Clear “when to seek medical care” language
- Contraindications and red flags per condition
- Citation-backed evidence summaries
- Strength-of-evidence labels
- Last-reviewed date
- Physician reviewer
- Procedure-specific consent/risk language
- Rehab integration after any procedure

## Data Model Notes

The current content model is intentionally simple:

- `Sport` contains `Injury[]`
- `Injury` contains red flags, tissue description, goal, and `Phase[]`
- `Phase` contains tasks and `Exercise[]`
- `Procedure` contains evidence label, summary, best-fit criteria, and patient questions

Next agent should keep expanding `src/data.ts` until content volume justifies splitting into:

- `src/content/sports.ts`
- `src/content/injuries.ts`
- `src/content/procedures.ts`
- `src/content/evidence.ts`

## Best Next Steps

1. Add condition-specific evidence pages.
2. Build a real exercise-library route with video placeholders, dosage, progression criteria, and contraindications.
3. Add ultrasound education modules: normal anatomy, pathology examples, dynamic exam clips, and guidance rationale.
4. Add procedure education pages for PRP, HA, corticosteroid, shockwave, tenotomy, barbotage, aspiration, and hydrodissection.
5. Add clinician-reviewed citation cards with source, year, guideline type, and confidence level.
6. Add persistent program state, ideally behind authentication once the content model is stable.
7. Add tests for sport/injury switching, drawer behavior, exercise completion, and mobile overflow.
8. Consider a CMS or structured JSON pipeline before entering large clinical content.

## QA Already Done

Commands passed:

```bash
npm run lint
npm run build
```

Browser QA:

- Playwright Chromium
- Desktop viewport: `1536x1024`
- Mobile viewport: `390x844`
- Verified Golf -> Wrist/Hand Pain -> Shockwave card interaction
- Verified Start a Program drawer
- Verified procedure education drawer
- Verified no horizontal overflow on mobile

## Known Limitations

- Search field is visual only.
- Sidebar nav items do not route yet.
- My Programs is visual only.
- Exercise content is sample-level and needs clinical review.
- Evidence source links are broad anchors, not condition-specific citation records.
- No auth, persistence, video hosting, CMS, analytics, or deployment config yet.

## Recommended Build Philosophy

Keep the first screen as an app dashboard, not a marketing landing page. The product should feel like a sports medicine clinical tool: restrained, trustworthy, fast to scan, and practical for repeated use.
