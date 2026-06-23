# Deep Research Plan: Jeremy Swisher MD Sports Medicine

Updated: 2026-06-22

## Purpose

Use Dr. Swisher's authenticated ChatGPT/Deep Research account for literature synthesis and content strategy that benefits from broad source discovery, multi-source comparison, and structured evidence extraction.

Do not use ChatGPT/Deep Research for local code edits, build verification, app routing QA, credential handling, or final physician approval.

## Division of Labor

Use Codex/local repo work for:

- Implementing React/TypeScript/CSS changes.
- Running `integrity-check`, typecheck, lint, build, and browser QA.
- Auditing consistency across existing content files.
- Refactoring schemas and route components.
- Creating handoff documents and test plans.

Use ChatGPT Deep Research for:

- Guideline and literature synthesis across many sports medicine topics.
- Procedure evidence matrices where guideline recommendations conflict.
- Patient-facing education modules that need source-grounded nuance.
- Sport-specific epidemiology, prevention, and return-to-play summaries.
- Identifying missing citations, contraindications, and safety language.

Use physician judgment for:

- Final diagnosis/treatment recommendations.
- Whether a condition or procedure should be marked `physician-approved`.
- Local practice preferences, procedure protocols, and clinic-specific aftercare.
- Any recommendation that changes patient triage or procedural consent language.

## Source Rules for Deep Research

Ask Deep Research to prioritize:

- AAOS, ACR/AF, NICE, AMSSM, AOSSM, BJSM, JOSPT/APTA CPGs.
- Cochrane reviews, systematic reviews, meta-analyses, and RCTs.
- PubMed-indexed papers with DOI/PMID when available.
- Guideline pages over commercial clinic pages.

Ask it to avoid:

- Marketing claims.
- Unsupported success rates.
- Fabricated citations.
- Overconfident biologics claims.
- Patient-specific medical advice.

## Deep Research Run 1: Procedure Evidence Matrix

Use for the app's ultrasound, corticosteroid, PRP, hyaluronic acid, shockwave, and tenotomy education.

Status:

- Started in ChatGPT on 2026-06-22.
- Chat title: `JSM Procedure Evidence Matrix`.
- Chat URL: `https://chatgpt.com/c/6a39c2ab-1a38-83e8-9eaa-12b649a83b70`.
- Exact enhanced prompt saved at `research-prompts/procedure-evidence-matrix-prp-peri-procedure.md`.
- Enhancement added before submission: condition-specific pre- and post-PRP planning, including NSAIDs, aspirin, anticoagulants/antiplatelets, corticosteroids, acetaminophen, common supplements, and staged post-PRP rehab timelines.

Prompt:

```text
I am building a physician-led, patient-facing sports medicine education app for Jeremy Swisher MD. Please perform a source-grounded evidence review for these interventional sports medicine procedures:

1. ultrasound-guided injection/procedure guidance
2. corticosteroid injection
3. platelet-rich plasma (PRP)
4. hyaluronic acid injection
5. extracorporeal shockwave therapy (focused and radial when relevant)
6. percutaneous needle/ultrasonic tenotomy

Focus on common primary-care sports medicine conditions: knee osteoarthritis, hip osteoarthritis, lateral epicondylitis, medial epicondylitis, rotator cuff tendinopathy, biceps tendinopathy, gluteal tendinopathy/GTPS, proximal hamstring tendinopathy, patellar tendinopathy, Achilles tendinopathy, plantar heel pain, de Quervain tenosynovitis, trigger finger, TFCC/ulnar wrist pain, frozen shoulder, FAI/labral-type hip pain, cervical/lumbar radiculopathy, and simple mechanical neck/low-back pain.

Please produce:

- A procedure-by-condition matrix with one of: commonly discussed, selected cases, rarely, not indicated.
- A one-sentence patient-facing evidence note for each relevant cell.
- Key contraindications/cautions and post-procedure rehab implications.
- Areas where guidelines conflict.
- A short list of citations for each procedure, prioritizing AAOS, ACR/AF, NICE, AMSSM, BJSM, JOSPT/APTA CPGs, Cochrane, systematic reviews, meta-analyses, and RCTs.

Rules:

- Do not fabricate citations, URLs, DOIs, PMIDs, statistics, or success rates.
- Provide source URLs and PMID/DOI when available.
- Separate evidence from expert opinion.
- Be conservative with biologics claims.
- Make the output easy to convert into TypeScript content objects.
```

## Deep Research Run 2: HEP Dosage and Progression Audit

Use for improving condition home exercise programs.

Prompt:

```text
I am building evidence-based home exercise modules for a physician-led sports medicine app. Please audit best-supported home exercise programming for common primary-care sports medicine conditions:

Achilles tendinopathy, patellar tendinopathy, plantar heel pain, patellofemoral pain, knee OA, hip OA, gluteal tendinopathy/GTPS, proximal hamstring tendinopathy, lateral ankle sprain, medial tibial stress syndrome, rotator cuff tendinopathy, frozen shoulder, biceps tendinopathy, lateral epicondylitis, medial epicondylitis, de Quervain tenosynovitis, trigger finger, cubital tunnel syndrome, cervical radiculopathy, mechanical neck pain, low back pain, lumbar radiculopathy, spondylolysis, MCL sprain, AC joint sprain, FAI, and TFCC/ulnar wrist sprain.

For each condition, provide:

- 3-4 rehab phases.
- Phase goals.
- Entry criteria and exit criteria.
- 3-5 high-yield exercises with dose, frequency, progression, regression, and cautions.
- Pain-monitoring rule.
- Return-to-sport criteria.
- Key citations/guidelines.

Rules:

- Prioritize JOSPT/APTA CPGs, BJSM consensus statements, Cochrane reviews, systematic reviews, and RCTs.
- Do not fabricate citations or exact protocols.
- If evidence is weak, say so and label the recommendation as expert-informed.
- Keep the output patient-facing and practical.
```

## Deep Research Run 3: Pickleball and Golf Medicine Hubs

Use for richer sport-specific modules.

Prompt:

```text
I am building sport-specific patient education hubs for Pickleball Medicine and Golf Medicine in a physician-led sports medicine app.

Please synthesize the best available evidence and expert consensus for:

- Common injury patterns.
- Risk factors.
- Warm-up routines.
- Off-court strength priorities.
- Load management and volume ramping.
- Return-to-play progressions.
- Equipment/technique considerations that are evidence-supported or expert-informed.
- Red flags that should not be self-managed.

For pickleball, focus on shoulder, elbow/wrist, calf/Achilles, ankle, knee, and low back issues.

For golf, focus on low back, hip, wrist/hand, elbow, shoulder, and rotational-load issues.

Output:

- Patient-facing sport hub copy.
- A concise clinician-facing evidence summary.
- Specific content cards that can map to app UI.
- Source list with URLs/DOIs/PMIDs where available.

Do not overstate evidence. Clearly distinguish sport-specific evidence from extrapolation from tennis/racquet sports or general golf medicine.
```

## Deep Research Run 4: Ultrasound Patient Education Curriculum

Use for the future ultrasound education section.

Prompt:

```text
I am creating a patient-facing ultrasound education section for a sports medicine app led by Jeremy Swisher MD.

Please design a high-yield, evidence-aware curriculum explaining:

- What diagnostic sports ultrasound can show.
- What ultrasound cannot prove.
- Dynamic ultrasound examples in sports medicine.
- Why ultrasound guidance may improve procedure accuracy for selected targets.
- Common targets: knee, hip, shoulder, elbow, wrist/hand, ankle/foot, tendon sheath, bursa, joint, nerve-adjacent targets.
- Differences between diagnostic ultrasound, ultrasound-guided injection, aspiration, hydrodissection, barbotage, and tenotomy.
- Patient safety, sterile technique, limitations, and when MRI/X-ray/CT/labs are still needed.

Output:

- 6-10 patient-facing modules.
- Key takeaways per module.
- Suggested diagrams/visuals.
- Source list prioritizing AMSSM, AIUM, ACR, AAOS, and peer-reviewed sports ultrasound literature.

Avoid marketing language. Do not imply ultrasound is always superior to other imaging.
```

## Deep Research Run 5: Red-Flag and Safety Net Audit

Use after content expansion to reduce medical-safety risk.

Prompt:

```text
I am auditing a patient-facing sports medicine education app for safety-net language. Please create a conservative red-flag checklist for common primary-care sports medicine conditions across shoulder, elbow, wrist/hand, neck, low back, hip/pelvis, knee, lower leg, ankle/foot.

Focus on:

- emergency vs urgent vs routine clinician review
- septic arthritis and deep infection
- fracture/dislocation/neurovascular compromise
- compartment syndrome
- cauda equina and spinal cord/myelopathy features
- DVT/PE symptoms where relevant
- cancer/inflammatory/systemic mimics
- tendon rupture or extensor mechanism disruption
- pediatric/adolescent special concerns where relevant

Output:

- A body-region checklist.
- Condition-specific red flags.
- Patient-facing wording.
- Recommended urgency tier.
- Source references/guidelines.

Do not create alarmist language for routine symptoms. Be conservative but clinically realistic.
```

## Recommended Sequence

1. Run Procedure Evidence Matrix first, because procedures are high-value and high-risk.
2. Run HEP Dosage and Progression Audit second.
3. Run Ultrasound Patient Education Curriculum third.
4. Run Pickleball/Golf Medicine Hubs fourth.
5. Run Red-Flag and Safety Net Audit after any major content expansion.

## Operating Rule

Before submitting a Deep Research prompt through Dr. Swisher's personal ChatGPT account, confirm which run is being started and whether any local app content will be pasted into ChatGPT. Do not submit patient data, private clinical notes, account credentials, or unpublished personal information.
