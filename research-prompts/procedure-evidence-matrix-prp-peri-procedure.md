# Deep Research Prompt: Procedure Evidence Matrix + PRP Peri-Procedure Plans

I am building a physician-led, patient-facing sports medicine education app for Jeremy Swisher MD. Please perform a source-grounded evidence review for these interventional sports medicine procedures:

1. ultrasound-guided injection/procedure guidance
2. corticosteroid injection
3. platelet-rich plasma (PRP)
4. hyaluronic acid injection
5. extracorporeal shockwave therapy, including focused vs radial when relevant
6. percutaneous needle or ultrasonic tenotomy

Focus on common primary-care sports medicine conditions:

- knee osteoarthritis
- hip osteoarthritis
- lateral epicondylitis
- medial epicondylitis
- rotator cuff tendinopathy
- biceps tendinopathy
- gluteal tendinopathy / greater trochanteric pain syndrome
- proximal hamstring tendinopathy
- patellar tendinopathy
- Achilles tendinopathy
- plantar heel pain / plantar fasciopathy
- de Quervain tenosynovitis
- trigger finger
- TFCC / ulnar-sided wrist pain
- frozen shoulder / adhesive capsulitis
- FAI / labral-type hip pain
- cervical radiculopathy
- lumbar radiculopathy
- simple mechanical neck pain
- simple mechanical low-back pain

Please produce:

1. A procedure-by-condition matrix with one of:
   - commonly discussed
   - selected cases
   - rarely
   - not indicated

2. A one-sentence patient-facing evidence note for each relevant cell.

3. Key contraindications, cautions, and post-procedure rehab implications for each procedure.

4. Areas where major guidelines or expert groups conflict.

5. A short source list for each procedure and major condition cluster, prioritizing:
   - AAOS
   - ACR / Arthritis Foundation
   - NICE
   - AMSSM
   - AOSSM
   - BJSM
   - JOSPT / APTA clinical practice guidelines
   - Cochrane reviews
   - systematic reviews
   - meta-analyses
   - randomized controlled trials

## Dedicated PRP Pre- and Post-Injection Planning Section

Please create practical, patient-facing PRP preparation and recovery guidance by condition or condition cluster.

Include:

1. Pre-PRP checklist:
   - activity/load modification before injection
   - whether to continue, pause, or modify rehab exercises
   - medication considerations
   - supplement considerations
   - alcohol, smoking/nicotine, sleep, hydration, and nutrition considerations
   - when the patient should contact the clinician before the procedure

2. Post-PRP plan by condition cluster:
   - tendon conditions, including patellar, Achilles, gluteal, proximal hamstring, rotator cuff, biceps, lateral elbow, medial elbow, plantar fascia
   - joint/OA conditions, including knee OA and hip OA
   - hand/wrist tendon sheath conditions, including de Quervain and trigger finger if PRP is discussed at all

3. Medication and supplement guidance:
   - NSAIDs
   - aspirin
   - acetaminophen
   - oral corticosteroids
   - injected corticosteroids before/after PRP
   - anticoagulants and antiplatelet therapy
   - fish oil / omega-3
   - turmeric / curcumin
   - garlic, ginkgo, vitamin E, and other supplements commonly discussed around bleeding or platelet effects
   - SSRIs/SNRIs if relevant to platelet function, only if supported by sources

For each medication/supplement item, clearly label the recommendation as one of:

- evidence-supported
- consensus/common protocol
- theoretical/biologic rationale
- safety-driven physician decision
- insufficient evidence / variable clinic practice

Important safety rule:

Do not recommend stopping aspirin, anticoagulants, antiplatelet therapy, or prescribed cardiovascular/stroke-prevention medications without clinician approval. Explicitly say these decisions must be coordinated with the prescribing clinician.

4. Suggested staged post-PRP rehab timelines:
   - immediate post-procedure period
   - early protection / relative rest
   - reintroduction of range of motion
   - isometrics
   - progressive strengthening
   - heavy-slow resistance / eccentric loading when relevant
   - running, jumping, gripping, overhead loading, or sport-specific return

For each timeline, explain what is evidence-based versus expert-informed, and avoid pretending there is one universal PRP protocol.

5. Patient-facing warning signs after PRP:
   - infection signs
   - excessive swelling
   - neurovascular symptoms
   - calf swelling / shortness of breath / chest pain where relevant
   - pain that is outside the expected flare window

6. App-ready output:
   - concise patient-facing content blocks
   - clinician-facing caveats
   - TypeScript-friendly structured data suggestions
   - source references with URLs plus DOI/PMID when available

Rules:

- Do not fabricate citations, URLs, DOIs, PMIDs, statistics, protocols, or success rates.
- Separate evidence from expert opinion.
- Be conservative with biologics claims.
- Do not imply PRP is regenerative in a guaranteed way.
- Do not claim supplements meaningfully improve PRP quality unless the evidence supports it.
- Make uncertainty explicit.
- Avoid patient-specific medical advice.
- Make the output easy to convert into TypeScript content objects for the app.
