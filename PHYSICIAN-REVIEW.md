# Physician Review — clinical sign-off items

> Generated from an automated content audit of all 28 condition modules (each clinical concern was independently, adversarially verified). **Nothing in this list has been changed in the app** — these are decisions for Dr. Jeremy Swisher. All content currently ships `physician-review-pending`. No citations, statistics, or video IDs were fabricated.

Generated: 2026-06-22. Source audit: 28 modules, 54 agents.

---

## 1. Verified clinical items (15)

Each was flagged by a reviewer **and** confirmed by an independent adversarial checker. Most are **red-flag urgency inconsistencies** (the same clinical entity tagged at different urgency levels within or across modules).

### [HIGH] ## `spondylolysis` — redFlags[0]
- **Current:** Neurologic deficit (numbness, weakness, or changes in bowel or bladder control). urgency: 'urgent'
- **Concern:** Loss of bowel or bladder control is a hallmark cauda equina symptom that warrants emergency (same-day ED) evaluation, not merely 'urgent'. Bundling it with milder numbness/weakness under a single 'urgent' tag undersells the urgency of the most dangerous symptom in the list.
- **Suggested change:** Split out bowel/bladder control (and ideally saddle numbness) into its own red flag with urgency: 'emergency' and ED-now language, matching the sibling low-back modules. Basis: low-back-pain.ts marks 'loss of bladder or bowel control' and 'saddle anesthesia' as urgency:'emergency', and lumbar-radiculopathy.ts marks cauda equina symptoms as urgency:'emergency' with 'Go to the emergency department now.'
- **Basis:** Internal citations within this app's content set: low-back-pain.ts redFlags (bladder/bowel control = 'emergency') and lumbar-radiculopathy.ts redFlags (cauda equina = 'emergency'); consistent with mainstream cauda equina guidance treating bowel/bladder dysfunction as a surgical emergency.
- **Verifier-suggested fix:** Split the bowel/bladder component out into its own emergency-tagged red flag, e.g. add { text: 'Loss of bowel or bladder control, or numbness around the groin/saddle area (possible cauda equina — go to the emergency department now).', urgency: 'emergency' }, and reduce redFlags[0] to 'New or worsening numbness or weakness in the legs.' with urgency 'urgent'. This matches the wording and urgency already used in low-back-pain.ts and lumbar-radiculopathy.ts.

### [MEDIUM] ## `biceps-tendinopathy` — redFlags[0]
- **Current:** Acute deformity or suspected rupture after a pop.
- **Concern:** This red flag is marked urgency: 'emergency', but a proximal long head of biceps tendon rupture (the classic 'Popeye' deformity after a pop) is not a medical emergency. It is typically managed non-operatively with good functional outcomes, and surgical repair — when chosen, usually in younger/higher-demand patients — is elective, not emergent. Labeling it 'emergency' overstates urgency and is inconsistent with how sibling shoulder modules reserve that tier (rotator-cuff-tendinopathy.ts and frozen-shoulder.ts use 'emergency' only for infection/sepsis signs, dislocation, traumatic inability to lift the arm). 'urgent' (prompt evaluation) better matches mainstream guidance.
- **Suggested change:** Downgrade urgency from 'emergency' to 'urgent' (prompt, not emergency, evaluation). Basis: proximal LHBT rupture is commonly managed conservatively and any surgical repair is elective; mainstream sports-medicine guidance does not classify it as an emergency, and the file's own Varacallo StatPearls citation frames management as conservative-first. Internal consistency: other shoulder modules reserve 'emergency' for true emergencies.
- **Basis:** Conservative-first framing in biceps-varacallo-2025-statpearls (citation in this file); internal consistency with emergency-tier usage in rotator-cuff-tendinopathy.ts and frozen-shoulder.ts.
- **Verifier-suggested fix:** Change urgency from 'emergency' to 'urgent' for redFlags[0] (keep the text). This still drives prompt evaluation for diagnosis confirmation and management discussion without overstating it as a medical emergency.

### [MEDIUM] ## `femoroacetabular-impingement` — redFlags[0]
- **Current:** Inability to bear weight after trauma. — urgency: 'urgent'
- **Concern:** Inability to bear weight after significant hip/pelvis trauma is the classic presentation that should prompt urgent imaging to exclude a fracture (e.g., femoral neck or pelvic fracture). Labeling this only 'urgent' (rather than 'emergency') may be acceptable, but mainstream practice treats a non-weight-bearing post-traumatic hip as needing same-day emergency evaluation because a missed/displaced femoral neck fracture risks avascular necrosis. At minimum this borders on under-triage.
- **Suggested change:** Consider escalating to urgency: 'emergency', or add explicit qualifying language (e.g., 'after a significant fall or injury — go to emergency care'). A physician should adjudicate the emergency vs urgent threshold. Basis: standard fracture-triage teaching for post-traumatic inability to bear weight on the hip.
- **Basis:** Well-established clinical guidance: post-traumatic inability to bear weight on the hip warrants emergency fracture work-up (femoral neck fracture risks AVN).
- **Verifier-suggested fix:** Change redFlags[0].urgency from 'urgent' to 'emergency' so that inability to bear weight after trauma directs the patient to same-day emergency evaluation to exclude a hip/pelvic fracture. (Optionally expand the text to plain language, e.g., 'Cannot put weight on the leg after a fall or injury — seek emergency care to rule out a fracture.')

### [MEDIUM] ## `hip-osteoarthritis` — redFlags[1].text
- **Current:** Fever with a hot joint.
- **Concern:** A hot joint with fever can signal septic arthritis, a true musculoskeletal urgency needing same-day evaluation and possible aspiration. The bare phrasing gives the patient no reason to act fast, and it is inconsistent with how the sibling knee-OA file frames the same red flag. The urgency enum value ('urgent') is consistent with peers, so the issue is the missing explanation, not the level.
- **Suggested change:** Expand to explain why and how fast, e.g. 'Fever with a hot, swollen hip or groin — this can signal a joint infection and needs urgent (same-day) evaluation.' This matches the knee-OA wording.
- **Basis:** In-file consistency: knee-osteoarthritis.ts redFlags[0] reads 'A hot, red, swollen knee with fever — this can signal a joint infection and needs urgent evaluation.' Febrile hot joint = possible septic arthritis is well-established teaching.
- **Verifier-suggested fix:** Reword to mirror the knee file's explanatory framing, e.g.: 'A hot, swollen hip joint with fever — this can signal a joint infection and needs urgent evaluation.' Keep urgency: 'urgent'.

### [MEDIUM] ## `knee-osteoarthritis` — redFlags[0].urgency
- **Current:** A hot, red, swollen knee with fever — this can signal a joint infection and needs urgent evaluation.
- **Concern:** A hot, red, swollen joint with fever is the classic presentation of septic arthritis, which is a surgical/orthopedic emergency (joint aspiration within hours; delays cause rapid cartilage destruction). The text itself says it 'needs urgent evaluation' but the enum is set to 'urgent' rather than 'emergency'. Mainstream guidance treats suspected septic arthritis as same-day emergent care, not routine urgent.
- **Suggested change:** Consider changing urgency to 'emergency' (or at minimum strengthen the text to say 'seek emergency care / same-day evaluation'). Basis: standard rheumatology/ortho teaching that suspected septic arthritis is a joint emergency requiring urgent aspiration; this is also how the exemplar treats comparable acute red flags. A physician should adjudicate emergency vs urgent.
- **Basis:** Well-established clinical guidance: suspected native-joint septic arthritis is a joint emergency requiring urgent aspiration/treatment to prevent cartilage destruction.
- **Verifier-suggested fix:** Change redFlags[0].urgency from 'urgent' to 'emergency' to match the same-day emergent nature of suspected septic arthritis. Optionally strengthen the text from 'needs urgent evaluation' to 'needs emergency evaluation (same day)' for consistency with the enum.

### [MEDIUM] ## `mechanical-neck-pain` — redFlags[2] vs redFlags[7]
- **Current:** 'A change in walking or balance (gait change).' urgency: 'emergency' ... 'Myelopathic signs (such as clumsy hands, balance trouble, or coordination changes).' urgency: 'urgent'
- **Concern:** Two red flags describe the same underlying concern (cervical myelopathy / spinal cord involvement) but are assigned conflicting urgencies. 'A change in walking or balance (gait change)' is flagged 'emergency', while 'Myelopathic signs (... balance trouble ... coordination changes)' is flagged 'urgent' — 'balance trouble' appears in both with different urgency, which is internally contradictory and could confuse a patient about how quickly to act.
- **Suggested change:** Reconcile the two: assign both gait/balance change and the broader myelopathic-signs cluster the same urgency. Mainstream guidance (e.g., the cervical myelopathy red-flag literature behind the JOSPT 2017 CPG already cited) treats progressive myelopathic signs as needing prompt/urgent specialist evaluation rather than routine emergency-room care, so 'urgent' for both is defensible; alternatively keep both 'emergency' if acute cord signs are intended. The key point is they must not conflict. Human physician to set the final tier.
- **Basis:** Internal contradiction within redFlags[]; cervical myelopathy red-flag framing consistent with the JOSPT Neck Pain CPG (mechanical-neck-jospt-2017-blanpied) already cited in this file.
- **Verifier-suggested fix:** Harmonize the two flags to a single, consistent urgency for the shared myelopathy concern, and remove the duplicated 'balance' symptom from one of them. Conservatively, align redFlags[7] to the same tier already used for the overlapping gait/balance symptom (e.g., set 'Myelopathic signs (such as clumsy hands, balance trouble, or coordination changes).' to urgency: 'emergency' to match redFlags[2]), or merge the two into one flag such as 'A change in walking, balance, or coordination, or clumsy hands (possible spinal cord involvement).' with a single urgency value. Do not introduce a new acute/chronic distinction the source text does not support.

### [MEDIUM] ## `trigger-finger` — faqs[1].a vs procedures[5] (tenotomy)
- **Current:** Percutaneous release is reserved for selected cases when conservative care fails.
- **Concern:** Internal contradiction about percutaneous release. The FAQ presents percutaneous release as a real escalation option for selected refractory cases, but procedures[5] (procedureId 'tenotomy', titled 'Percutaneous Tenotomy') is marked relevance 'not-indicated' with evidenceNote 'Percutaneous tenotomy is not a routine option.' A patient reading both sections gets opposite messages about whether a needle/percutaneous release is on the table.
- **Suggested change:** Reconcile the two. For refractory trigger finger the definitive escalation is open surgical A1 pulley release (and ultrasound-guided percutaneous A1 release in selected hands), which is distinct from the 'Percutaneous Tenotomy' tendinopathy procedure card. Either change the FAQ to say 'surgical A1 pulley release is reserved for selected cases when conservative care fails' (matching the procedures evidenceNote), or, if percutaneous release is meant to be offered, raise the procedure relevance to 'selected-cases' so the two sections agree.
- **Basis:** Internal contradiction between faqs[1].a and procedures[5].relevance/evidenceNote within this file; trigger-pujalte-2024-injection (cited here) and trigger-huisstede-2014-consensus describe surgical release as the standard option after failed conservative care.
- **Verifier-suggested fix:** Disambiguate the FAQ so it does not echo the not-indicated 'Percutaneous Tenotomy' card. For example: 'When conservative care and injection fail, surgical release of the A1 pulley is the usual next step for refractory cases.' If the percutaneous pathway is intended, name it precisely ('percutaneous A1 pulley release') and reconcile it with procedures[5] so the two sections no longer appear to contradict each other.

### [LOW] ## `achilles-tendinopathy` — redFlags[1]
- **Current:** Inability to rise onto your toes, or a visible gap/divot in the tendon.
- **Concern:** Inability to push off / rise onto toes plus a palpable gap is a classic presentation of acute Achilles rupture, which the file itself flags as 'emergency' in redFlags[0]. Tagging the same clinical picture as only 'urgent' here is internally inconsistent and could under-trigger a patient who skipped the first bullet. A suspected complete rupture warrants prompt (same-day) evaluation comparable to redFlags[0].
- **Suggested change:** Consider raising redFlags[1] to 'emergency' to match redFlags[0] (the rupture bullet), or reword so it clearly reads as additional signs of the same emergency rather than a lower tier. A physician should adjudicate the exact urgency label; flagged low because primary-care rupture triage timing can vary.
- **Basis:** redFlags[0] in this file classifies sudden pop + weakness pushing off as 'emergency' (Achilles rupture); the gap/divot + inability to rise are the same entity.
- **Verifier-suggested fix:** Harmonize the urgency with redFlags[0] and cross-link the entity. Change redFlags[1].urgency from 'urgent' to 'emergency' and revise the text to name the suspected diagnosis, e.g.: 'Inability to rise onto your toes (loss of push-off strength), or a visible/palpable gap or divot in the tendon — these can also signal an Achilles rupture and need prompt (same-day) evaluation.' Do not leave the same rupture picture split across two different urgency levels.

### [LOW] ## `golfers-elbow` — redFlags[2]
- **Current:** Trauma to the elbow.
- **Concern:** The red flag 'Trauma to the elbow' is assigned urgency 'urgent', but the entry is vague about mechanism. Significant acute trauma (fall, direct blow) raising concern for fracture or dislocation typically warrants emergency-level evaluation, while the sibling tennis-elbow module lists trauma at the lower 'see-clinician' tier — so this field is internally inconsistent across the elbow modules. Low severity because 'urgent' is defensible and a physician will adjudicate.
- **Suggested change:** Clarify the wording (e.g., 'Significant injury/fall to the elbow with deformity, inability to move it, or severe pain') and reconsider whether acute high-energy trauma should be 'emergency'; at minimum align the trauma red-flag urgency convention with the tennis-elbow module so the two elbow pages are consistent.
- **Basis:** tennis-elbow.ts redFlags use 'see-clinician' for trauma; standard MSK triage escalates suspected fracture/dislocation to emergency care.
- **Verifier-suggested fix:** Align the wording and tier with the sibling tennis-elbow module: change the text to 'Significant trauma or deformity of the elbow (e.g., a fall or direct blow, especially with swelling, deformity, or inability to move/use the elbow).' and raise urgency from 'urgent' to 'emergency'. If the intent was to flag lower-energy trauma in the context of suspected ulnar-nerve/UCL involvement, split into two entries: significant/deforming trauma at 'emergency', and minor trauma without red-flag features at 'see-clinician'. Do not introduce new statistics or thresholds beyond mirroring the existing tennis-elbow phrasing.

### [LOW] ## `low-back-pain` — redFlags[1].text
- **Current:** New bladder retention or incontinence (loss of bladder or bowel control).
- **Concern:** The lead label names only the bladder ('bladder retention or incontinence') but the parenthetical correctly broadens to 'bladder or bowel control.' Bowel dysfunction is a core cauda-equina feature, so the parenthetical is right but the lead text under-states it. A patient skimming the bold lead could miss that new bowel-control loss is also an emergency.
- **Suggested change:** Make the lead text include bowel, e.g. 'New loss of bladder or bowel control (trouble urinating, leaking, or accidents).' Basis: cauda equina syndrome classically includes bladder AND bowel dysfunction as emergency red flags (consistent with NICE NG59 referral guidance, lbp-nice-ng59-2016).
- **Basis:** NICE NG59 (lbp-nice-ng59-2016) cauda-equina red flags include both bladder and bowel dysfunction; standard primary-care LBP red-flag guidance.
- **Verifier-suggested fix:** Move 'bowel' into the lead label so it is not buried in the parenthetical, e.g.: 'New loss of bladder or bowel control (urinary retention, or new inability to control the bladder or bowels).' Keep urgency 'emergency'. Defer final wording to physician review.

### [LOW] ## `low-back-pain` — redFlags / selfCare
- **Current:** Severe progressive weakness.
- **Concern:** The red-flag set covers cauda-equina and systemic causes but has no caution for new or worsening leg-dominant pain, numbness/tingling, or foot drop (radicular features). Sibling low-back modules (lumbar-radiculopathy.ts) use painRules like 'Mild discomfort acceptable if it settles; stop if it sends pain down the leg.' For a patient with back pain who may not know whether their pain is 'non-specific,' the absence of any 'pain/numbness spreading down the leg → see a clinician' guidance is a safety gap. Flagging low because the module is intentionally scoped to non-specific LBP and a human physician should decide whether to add a triage note.
- **Suggested change:** Consider adding a 'see-clinician' red flag and/or a self-care line for new or worsening leg-dominant pain, numbness, tingling, or foot/ankle weakness, mirroring lumbar-radiculopathy.ts. Basis: standard LBP triage distinguishes non-specific LBP from radicular syndromes (NICE NG59, lbp-nice-ng59-2016).
- **Basis:** NICE NG59 (lbp-nice-ng59-2016) distinguishes non-specific LBP from sciatica/radicular presentations; sibling file lumbar-radiculopathy.ts already encodes leg-symptom cautions.
- **Verifier-suggested fix:** Add a non-emergency triage entry to redFlags, e.g. { text: 'New or worsening pain, numbness, or tingling that spreads down the leg (or new foot drop/leg weakness) — may be a nerve-related problem rather than non-specific back pain.', urgency: 'see-clinician' }, and optionally mirror it in selfCare.donts (e.g. 'Don’t ignore pain or numbness that spreads down the leg — get it checked'). Keep severe/rapidly worsening leg weakness routed to the existing emergency entry. Final wording and inclusion to be confirmed at physician review.

### [LOW] ## `mcl-sprain` — redFlags[2]
- **Current:** Concern for a combined ACL or meniscus injury alongside the MCL.
- **Concern:** This is a sound and important red flag, but as written it asks the patient to self-assess 'concern for a combined ACL or meniscus injury,' which a layperson cannot reliably judge. The more patient-actionable signals of a combined injury (a pop at the time of injury, the knee giving way, locking/catching, or a large rapid effusion) are partly covered by redFlags[1] but not tied to the combined-injury concern here. Flagging at low severity for physician adjudication.
- **Suggested change:** Consider rephrasing into patient-observable terms, e.g. 'A pop at the time of injury, the knee giving way, locking, or rapid large swelling — this can signal a combined ACL or meniscus injury and needs prompt evaluation.' Urgency 'urgent' is appropriate. Dr. Swisher to confirm wording.
- **Basis:** Combined-ligament/meniscus injury suspicion is the file's own stated escalation trigger (evidence.whatsUncertain notes grade III/associated injuries 'may need closer evaluation'); rewording aligns with that without adding new claims.
- **Verifier-suggested fix:** Rephrase to patient-observable signals that should prompt evaluation, e.g.: 'A pop at the time of injury, the knee giving way or feeling like it will buckle, locking or catching, or rapid large swelling — these can signal an injury beyond the MCL (such as the ACL or a meniscus) and should be checked.' Keep urgency: 'urgent'.

### [LOW] ## `rotator-cuff-tendinopathy` — redFlags[0] vs redFlags[4]
- **Current:** 'Traumatic inability to lift the arm after an injury.' urgency: 'emergency' ... 'Suspected acute full-thickness tear.' urgency: 'urgent'
- **Concern:** These describe essentially the same clinical entity (an acute traumatic cuff tear presenting as inability to lift the arm), yet one is graded 'emergency' and the other 'urgent' — internally inconsistent. In the gold-standard achilles module an acute tendon rupture is graded 'urgent', not 'emergency'. A suspected acute full-thickness rotator cuff tear typically warrants prompt (urgent) orthopedic referral rather than emergency-department-level care.
- **Suggested change:** Align the two entries to the same urgency. Consider grading 'Traumatic inability to lift the arm after an injury' as 'urgent' to match 'Suspected acute full-thickness tear' (and the achilles-rupture precedent), reserving 'emergency' for true emergencies (open injury, neurovascular compromise, infection). A physician should adjudicate.
- **Basis:** Internal: achilles-tendinopathy.ts redFlags grades an acute tendon rupture / 'inability to rise onto toes' as urgency:'urgent', not 'emergency'.
- **Verifier-suggested fix:** Downgrade redFlags[0] from urgency:'emergency' to urgency:'urgent', aligning it with the related post-trauma cuff flags ('Marked weakness after trauma' and 'Suspected acute full-thickness tear', both 'urgent') and with the achilles exemplar's grading of an acute tendon rupture as 'urgent'. Leave redFlags[4] unchanged.

### [LOW] ## `trigger-finger` — procedures[5].evidenceNote (tenotomy)
- **Current:** Percutaneous tenotomy is not a routine option; refractory cases are managed with surgical A1 pulley release.
- **Concern:** The note conflates two different things and the chosen procedureId is a poor fit. 'tenotomy' maps to the 'Percutaneous Tenotomy' procedure card (a chronic-tendinopathy needle/device treatment), but the actual definitive treatment for refractory trigger finger is open surgical A1 pulley release, which has no procedure entry anywhere in the file. As written the only place surgery is mentioned is buried inside a 'not-indicated' note, so the most important escalation pathway is under-represented.
- **Suggested change:** Consider representing surgical A1 pulley release explicitly (e.g., a dedicated note or procedure) rather than only as a clause inside the not-indicated percutaneous-tenotomy note, so patients understand surgery is the reliable next step after injection failure. Flagging at low severity for physician adjudication.
- **Basis:** trigger-pujalte-2024-injection and trigger-huisstede-2014-consensus (both in this file) treat surgical release as the standard definitive option for refractory trigger finger.
- **Verifier-suggested fix:** Surface surgical A1 pulley release as its own item rather than a clause in a not-indicated note. Add a dedicated procedure entry (e.g. an 'open-surgical-release' / 'a1-pulley-release' procedureId) with relevance such as 'selected-cases' and citationIds ['trigger-pujalte-2024-injection','trigger-huisstede-2014-consensus'], and trim the tenotomy note to just 'Percutaneous tenotomy is not a routine option for trigger finger.' Do not assert efficacy figures beyond what the cited sources support.

### [LOW] ## `trigger-finger` — redFlags[0].urgency
- **Current:** Finger locked and cannot be straightened.
- **Concern:** Marked urgency 'urgent'. A chronically locked trigger finger that cannot be passively straightened is common and is generally managed in a routine office visit, not as a same-day urgent presentation. 'Urgent' may overstate the time pressure for the typical locked-trigger-finger patient (true fixed flexion deformity does warrant prompt, but not emergency, evaluation).
- **Suggested change:** Consider downgrading to 'see-clinician' (prompt office evaluation), reserving 'urgent' for the acutely red/swollen/infected-appearing finger captured in redFlags[1]. Low severity; defer to physician.
- **Basis:** Mainstream clinical guidance and trigger-huisstede-2014-consensus treat locking/triggering as an outpatient management issue, distinct from infection or acute injury.
- **Verifier-suggested fix:** Downgrade redFlags[0].urgency from 'urgent' to 'see-clinician' so a locked finger prompts a non-emergency clinic visit, while keeping the infection/inflammation red flag (severe swelling or redness) at 'urgent.' Optionally reword to make the routine-but-prompt nature explicit, e.g. 'Finger stuck bent and cannot be straightened — arrange a clinic evaluation.'

## 2. Lower-confidence clinical items (6)

Raised by a reviewer but not independently re-confirmed (verifier did not return a verdict). Treat as candidates.

### [HIGH] ## `patellar-tendinopathy` — redFlags[0].urgency
- **Current:** Suspicion of an acute tendon rupture after a pop ... difficulty straightening or using the knee. urgency: 'urgent'
- **Concern:** A suspected acute patellar tendon rupture is a disruption of the knee extensor mechanism. The exemplar treats the analogous Achilles rupture as 'emergency', and an acute extensor-mechanism rupture with inability to straighten the knee is a surgical emergency where early repair (ideally within days/weeks) materially affects outcome. Labeling it merely 'urgent' may under-trigger timely evaluation, and it is internally inconsistent with how the gold-standard file ranks an analogous tendon rupture.
- **Suggested change:** Raise to 'emergency' (or at minimum keep 'urgent' but separate out the 'inability to straighten the knee' as its own emergency-level flag). Basis: parity with achilles-tendinopathy.ts redFlags[0] (Achilles rupture = 'emergency') and mainstream guidance that acute extensor-mechanism rupture needs prompt surgical evaluation.
- **Basis:** achilles-tendinopathy.ts redFlags[0] ('emergency' for analogous tendon rupture); standard orthopedic teaching that acute patellar tendon/extensor-mechanism rupture is a surgical emergency

### [MEDIUM] ## `patellar-tendinopathy` — redFlags[2]
- **Current:** Inability to extend (straighten) the knee. urgency: 'see-clinician'
- **Concern:** Inability to actively extend the knee is a hallmark of extensor-mechanism rupture (patellar tendon, quad tendon, or patella fracture). Marking it only 'see-clinician' (the lowest urgency) is too low and contradicts redFlags[0], which already flags a tendon rupture (with the same 'difficulty straightening' feature) at 'urgent'. Two flags describing essentially the same dangerous finding carry different urgencies within this file.
- **Suggested change:** Escalate to 'urgent' (or 'emergency') and align with the rupture flag so the same finding does not appear at two different urgencies. Basis: inability to actively extend the knee indicates possible extensor-mechanism disruption requiring prompt evaluation.
- **Basis:** Internal contradiction with redFlags[0] in this file; standard teaching that loss of active knee extension signals extensor-mechanism disruption

### [MEDIUM] ## `patellofemoral-pain` — redFlags[6]
- **Current:** Suspected septic or inflammatory joint disease. urgency: 'urgent'
- **Concern:** A suspected septic (infected) joint is a time-critical emergency (risk of rapid cartilage destruction/sepsis), yet here it is only 'urgent'. The file's own redFlags[0] 'Hot swollen knee with fever' — the classic septic-joint presentation — is correctly 'emergency', so the two entries are internally inconsistent about the same scenario. Bundling 'septic' (emergency-level) with 'inflammatory joint disease' (which can be see-clinician/urgent) under a single 'urgent' tag risks under-triaging a true infection.
- **Suggested change:** Split into two flags or raise the septic component: mark suspected septic joint as 'emergency' to match redFlags[0]; inflammatory joint disease can remain 'urgent'/'see-clinician'. Basis: mainstream guidance treats suspected septic arthritis as an orthopedic emergency requiring same-day evaluation/aspiration.
- **Basis:** Mainstream clinical guidance (suspected septic arthritis is an emergency); also internally inconsistent with this file's redFlags[0] 'Hot swollen knee with fever' = emergency.

### [LOW] ## `cubital-tunnel-syndrome` — redFlags[2]
- **Current:** Constant numbness (rather than intermittent).' urgency: 'urgent'
- **Concern:** Constant numbness is marked 'urgent', whereas the sibling neuro module cervical-radiculopathy classifies ongoing/persistent sensory deficit as 'see-clinician' and reserves 'urgent' for progressive motor deficit. For cubital tunnel, a shift from intermittent to constant numbness IS a recognized marker of more advanced nerve compromise, so escalating it is clinically defensible — but the urgency tier choice is inconsistent with how the app treats persistent numbness elsewhere. Flagging at low severity for physician adjudication.
- **Suggested change:** Have the physician confirm whether constant (vs intermittent) ulnar numbness alone warrants 'urgent' or 'see-clinician'. If kept as 'urgent', consider aligning the cervical-radiculopathy module or adding a note that progression of numbness from intermittent to constant is the trigger. Basis: internal contrast with cervical-radiculopathy.ts redFlags (persistent sensory deficit = see-clinician; progressive motor deficit = urgent).
- **Basis:** Internal consistency with cervical-radiculopathy.ts redFlags urgency tiers; standard staging of ulnar neuropathy where constant numbness reflects progression.

### [LOW] ## `frozen-shoulder` — condition.faqs[2] ("Will it go away?")
- **Current:** Most frozen shoulders improve over time — commonly 6 to 18 months — with gentle mobility work helping restore function...
- **Concern:** This is a natural-history / prognosis statement, but it is supported with citationIds: ['frozen-challoumas-2020-nma'], which is a treatment network meta-analysis (best short-term pain/function from corticosteroid + exercise), not a natural-history study. The citation does not directly substantiate the 6-18 month spontaneous-recovery timeline.
- **Suggested change:** Either drop the Challoumas citation from this FAQ (the timeline is also stated uncited in prognosis.typicalTimeline) or attach the JOSPT CPG (frozen-jospt-2013-cpg), which is the more appropriate basis for course/prognosis statements. Basis: Challoumas 2020 is described in this file's own takeaway as a treatment NMA, not a prognosis/natural-history source.
- **Basis:** In-file citation frozen-challoumas-2020-nma takeaway: 'network meta-analysis of frozen shoulder treatments: corticosteroid injection... gives the best short-term pain and function benefit' — i.e., a treatment-effect source, not natural history.

### [LOW] ## `plantar-heel-pain` — evidence.whatHelps[3] vs procedures[3].relevance
- **Current:** Extracorporeal shockwave therapy (ESWT) for persistent cases
- **Concern:** evidence.bottomLine and whatHelps present ESWT fairly strongly ("a reasonable persistent-case option" / listed under "what helps"), while whatsUncertain[2] concedes "the added value of ESWT over loading alone are not fully settled," and the procedures entry tiers shockwave only as 'selected-cases'. The framing is internally near-consistent but leans slightly more favorable in the headline than the uncertainty caveat and procedure tier support. Low severity — wording, not a safety issue.
- **Suggested change:** Soften whatHelps[3] to match the hedged framing elsewhere, e.g. "ESWT may help persistent cases as an add-on to loading," so the bottom-line, uncertainty list, and 'selected-cases' procedure tier all read consistently.
- **Basis:** plantar-cortes-2024-sr (in-file): ESWT vs steroid comparison; whatsUncertain[2] already states ESWT's added value over loading is unsettled.

## 3. Suggested patient-facing red-flag rewordings (11)

These rewrite clinician-style red-flag fragments (e.g. "Fever.", "Major trauma.") into full patient sentences in the exemplar style. **Wording only — no urgency change intended** — but they touch safety copy, so they are listed here for approval rather than auto-applied.

#### `cervical-radiculopathy` — redFlags[0].text
- **Current:** Myelopathy signs (such as clumsy hands, balance problems, or changes in coordination).
- **Concern:** 'Myelopathy' is medical jargon left unexplained in a patient-facing red flag. The parenthetical gives examples but does not define the term, and the word may read as alarming-but-opaque at a 7th–9th grade level.
- **Suggested change:** Lead with the plain meaning, e.g. 'Signs the spinal cord may be involved (clumsy hands, balance problems, or trouble with coordination).' Reserve the word 'myelopathy' for an optional explanatory aside.

#### `low-back-pain` — redFlags[8].text
- **Current:** Infection risk.
- **Concern:** This is a two-word clinical fragment, not patient-facing language. A patient cannot act on 'Infection risk' — it does not say what to watch for (e.g., recent infection, IV drug use, immune suppression). It also reads as a note-to-self rather than a red flag. The gold-standard exemplar writes each red flag as a full, explanatory sentence.
- **Suggested change:** Rewrite as a patient-actionable sentence, e.g. 'Recent serious infection, a weakened immune system, or injection drug use together with new back pain.' Apply the same full-sentence treatment to the other terse fragments below.

#### `rotator-cuff-tendinopathy` — redFlags[1], redFlags[7], redFlags[8]
- **Current:** 'Shoulder dislocation symptoms.' / 'Major stiffness.' / 'Failed rehab.'
- **Concern:** These red flags are terse fragments that assume clinical literacy and are not patient-facing at the target reading level. A patient won't know what 'dislocation symptoms', 'major stiffness' (vs the frozen-shoulder picture), or 'failed rehab' mean or what to do. The achilles exemplar writes red flags as full explanatory sentences that name the concern and the action.
- **Suggested change:** Expand each into a plain-language sentence, e.g. 'A shoulder that looks out of place or feels like it has slipped out of the joint after an injury.'; 'Shoulder stiffness that keeps getting worse and limits everyday reaching (this can point to a frozen shoulder).'; 'Pain or weakness that has not improved after several weeks of consistent rehab — time to be reassessed.'

#### `trigger-finger` — redFlags[2], redFlags[4] (and redFlags[3])
- **Current:** Recurrent locking.  /  Failed splinting.
- **Concern:** These red-flag entries are bare noun fragments that do not tell the patient what to do, and 'Failed splinting.' is clinician shorthand a patient may not parse. The gold-standard exemplar and the sibling de Quervain module phrase red flags as patient-facing sentences that include the action (e.g. 'see a clinician promptly'). Trigger-finger red flags read as a clinician checklist rather than encouraging-but-honest patient guidance.
- **Suggested change:** Rewrite as patient-facing sentences with the action embedded, matching the exemplar style, e.g. 'The finger keeps locking even after rest and splinting — see a clinician.' and 'Symptoms have not improved after a fair trial of a night splint — see a clinician to discuss an injection.'

#### `ac-joint-sprain` — redFlags[1] and redFlags[2]
- **Current:** Concern for a high-grade separation.  /  Concern for a clavicle (collarbone) fracture.
- **Concern:** These two red flags are written from the clinician's point of view ('Concern for...') rather than as patient-actionable signs. A patient cannot self-identify 'a high-grade separation'; they need to know WHAT to look for (e.g., an obvious step-off/bump at the collarbone, severe deformity, marked swelling/bruising, severe pain). As written, the red-flag list is less useful to the patient audience than the other entries (which describe observable symptoms).
- **Suggested change:** Reword to observable patient signs, e.g. 'A large or obvious bump/step-off at the end of the collarbone, or a clear change in shoulder shape' (high-grade separation) and 'Severe, focal collarbone pain with deformity, or a grinding feeling' (possible fracture), keeping urgency 'urgent'.

#### `gluteal-tendinopathy` — redFlags[1].text
- **Current:** Fever.
- **Concern:** A bare one-word red flag ('Fever.') gives the patient no context for why fever matters here (it can signal joint/soft-tissue infection) or what to do. Peer files pair fever with its concern (e.g., knee-OA: 'A hot, red, swollen knee with fever — this can signal a joint infection'; hip-OA: 'Fever with a hot joint').
- **Suggested change:** Expand to give context, e.g. 'Fever with a hot, red, or very tender hip — this can signal an infection and needs prompt evaluation.' Urgency 'urgent' is consistent with peer files and fine to keep.
- **Basis:** Peer modules knee-osteoarthritis.ts and hip-osteoarthritis.ts contextualize the fever red flag rather than listing it bare.

#### `it-band-syndrome` — redFlags[2].text
- **Current:** Concern for a meniscus or bony injury.
- **Concern:** This red flag is written as a clinician note, not patient-facing guidance. 'Concern for a meniscus or bony injury' is jargon and gives the patient no observable trigger to act on (unlike redFlags[0] and [1]). The exemplar's red flags describe symptoms the patient can recognize.
- **Suggested change:** Rephrase as a patient-recognizable trigger, e.g. 'Knee gives way, locks, or you felt a twist/injury to the knee — this could mean a meniscus or bone problem and should be checked.'

#### `low-back-pain` — redFlags[2].text, redFlags[4].text, redFlags[5].text, redFlags[6].text, redFlags[7].text
- **Current:** Major trauma.
- **Concern:** Several red flags are bare noun fragments ('Major trauma.', 'Fever.', 'Unexplained weight loss.', 'History of cancer.', 'Night pain.') rather than the explanatory, encouraging-but-honest full sentences used in achilles-tendinopathy.ts (e.g. it explains what each flag could mean and what to do). At a 7th–9th grade patient-facing target these are too terse and provide no context for why they matter or what to do.
- **Suggested change:** Expand each into a short patient sentence with the action, e.g. 'A significant fall or accident (major trauma).', 'Fever with back pain.', 'Unexplained weight loss alongside back pain.', 'A history of cancer.', 'Pain that is worse at night or wakes you from sleep.' Mirror the sentence style and urgency framing of the exemplar.

#### `lumbar-radiculopathy` — redFlags[2].text
- **Current:** Severe, uncontrolled pain.
- **Concern:** This red flag is a two-word fragment with no patient-facing instruction, unlike the other red flags which tell the patient what to do (e.g. 'needs urgent in-person evaluation', 'Go to the emergency department now'). A patient reading just 'Severe, uncontrolled pain.' is not told what action to take.
- **Suggested change:** Add an action clause consistent with its 'urgent' urgency, e.g. 'Severe, uncontrolled pain that is not relieved by usual measures — get urgent in-person care.' The FAQ already pairs this with 'Get urgent care', so aligning the red-flag text would remove the gap.

#### `patellar-tendinopathy` — redFlags[1] and redFlags[2]
- **Current:** Diffuse swelling of the knee.
- **Concern:** 'Diffuse' is unexplained jargon for a 7th-9th grade audience, and these two red-flag entries are bare sentence fragments without the patient-facing context the exemplar gives (the Achilles red flags explain what each sign may mean and why it matters). They read as clinician shorthand rather than encouraging-but-honest patient copy.
- **Suggested change:** Reword in plain language and add brief 'why it matters' context, e.g. 'Widespread swelling across the whole knee (not just a small sore spot)' and tie the straighten-the-knee flag to possible tendon injury, mirroring the explanatory style of achilles-tendinopathy.ts redFlags.

#### `wrist-sprain-tfcc` — redFlags[0].text, redFlags[2].text, redFlags[4].text, redFlags[5].text, redFlags[6].text
- **Current:** 'Major trauma to the wrist.' / 'Loss of motion at the wrist.' / 'Persistent clicking in the wrist.' / 'Grip weakness.' / 'Failure to improve.'
- **Concern:** Several red flags are bare noun phrases with no plain-language explanation of what to watch for or why it matters. 'Failure to improve' has no timeframe, and 'Grip weakness' / 'Persistent clicking' give the patient no actionable threshold. This is below the file's own readability standard (compare the fuller, parenthetically-explained 'Distal radioulnar instability (the forearm bones feel unstable near the wrist).') and below peer red-flag style.
- **Suggested change:** Add brief plain-language context, e.g. 'Failure to improve after several weeks of brace-and-rehab.', 'New or worsening grip weakness (struggling to grip or twist objects).', 'Persistent clicking or catching on the little-finger side.' Keep existing urgency values.

## 4. Procedure evidence-note wording (2)

Terse/abbreviated procedure notes (e.g. "ESWT: not routine.") suggested for plain-language expansion.

#### `low-back-pain` — procedures[3].evidenceNote, procedures[5].evidenceNote
- **Current:** ESWT: not routine.
- **Concern:** Procedure notes use clinical shorthand/abbreviations ('ESWT: not routine.', 'Percutaneous tenotomy: not routine.') that are inconsistent with the file's plain-language target and with the FAQ, which already explains these procedures in patient terms. 'ESWT' is an unexplained acronym. Other entries in the same array ('Not indicated.') are terser than the exemplar's full-sentence evidenceNotes.
- **Suggested change:** Spell out and explain, matching tone, e.g. 'Shockwave therapy is not a routine treatment for non-specific low back pain.' and 'Percutaneous tenotomy is not a routine treatment for this condition.' Consider expanding the bare 'Not indicated.' notes to full sentences as in achilles-tendinopathy.ts.

#### `rotator-cuff-tendinopathy` — procedures[1].evidenceNote / procedures[4].evidenceNote / procedures[3] / hep.phases[2].exercises[0].name
- **Current:** 'Evidence mixed.' ... 'Ultrasound-guided injection in selected cases.' ... 'noncalcific'
- **Concern:** A few notes are clipped or use unexplained jargon for a patient audience: 'Evidence mixed.' (PRP) is a sentence fragment with no context; 'noncalcific cuff pain' (shockwave note) and 'calcific disease' use jargon a patient won't parse; the wall-slide diagram altText/cues are fine but 'serratus' appears in the exercise target without the friendly gloss used elsewhere. The exemplar consistently glosses anatomy (e.g. 'scapular (shoulder-blade) muscles').
- **Suggested change:** Round fragments into short plain sentences and gloss jargon, e.g. PRP: 'Evidence is mixed; not a routine option.'; shockwave: 'Rarely used, and mainly for calcium deposits in the tendon (calcific disease) rather than ordinary cuff pain.' Gloss 'serratus' once (e.g. 'serratus (a muscle that helps the shoulder blade move)').

## 5. Timeline & progression reconciliations (15)

Internal contradictions where a module disagrees with its own executive summary, or a phase criterion references an exercise not in that phase. **A clinician should pick the correct value.**

### [HIGH] ## `it-band-syndrome` — prognosis.typicalTimeline vs executiveSummaries.ts['it-band-syndrome']
- **Current:** Many people improve over about 4 to 8 weeks ... | IT band syndrome ... commonly improves in 2 to 6 weeks
- **Concern:** The recovery timeline contradicts this condition's own executive summary. The module says '4 to 8 weeks' in four places (prognosis.typicalTimeline line 112, returnToActivity.timelineGuidance line 524, FAQ line 534, and overview's '4 to 8 weeks' premise), but src/content/executiveSummaries.ts gives '2 to 6 weeks' for it-band-syndrome. A clinician reading the exec summary and a patient reading the page would see different numbers for the same condition.
- **Suggested change:** Pick one range and use it everywhere. Either change the executive summary to '4 to 8 weeks' to match the module, or revise the module timelines to match the exec summary — coordinate with the physician sign-off on which is intended.

### [HIGH] ## `mcl-sprain` — condition.prognosis.typicalTimeline (vs executiveSummaries['mcl-sprain'])
- **Current:** Grade I often recovers in 2 to 6 weeks; grade II in 4 to 8 weeks; grade III takes longer
- **Concern:** The executive summary merged onto this same condition page (executiveSummaries.ts line 30) gives DIFFERENT grade timelines: 'Grade I injuries often recover in 1 to 3 weeks, grade II in 3 to 6 weeks, and grade III may need 6 to 12+ weeks.' Both appear on the patient-facing page, so the reader sees grade I as both '1 to 3 weeks' and '2 to 6 weeks' (and grade II as 3-6 vs 4-8). The same conflicting numbers also recur in this file at faqs[1].a and returnToActivity.timelineGuidance ('grade I roughly 2–6 weeks, grade II 4–8 weeks').
- **Suggested change:** Pick one set of grade timelines and use it in both the condition file (prognosis.typicalTimeline, faqs[1].a, returnToActivity.timelineGuidance) and executiveSummaries.ts['mcl-sprain']. Have Dr. Swisher confirm the preferred ranges.

### [MEDIUM] ## `patellar-tendinopathy` — selfCare.dos[1] and all painRule fields (phases 1-3) and exitCriteria
- **Current:** discomfort up to about 3/10 during exercise is acceptable if it settles by the next morning
- **Concern:** Pain-rule threshold drifts from the gold-standard exemplar, which standardizes on '3–4/10' (achilles selfCare.dos[1]: 'up to about 3–4/10'). This file uses 'about 3/10' / '≤3/10' everywhere. The numeric pain-monitoring threshold is clinically load-bearing patient guidance and should match the app's house standard rather than silently being stricter.
- **Suggested change:** Confirm the intended house threshold and apply it uniformly. If matching the exemplar, change to '3–4/10' across selfCare.dos[1], every painRule, and the '≤3/10' exit criteria; if 3/10 is intentional for this tendon, leave a note so it isn't seen as drift.
- **Basis:** achilles-tendinopathy.ts selfCare.dos[1] and painRule fields use '3–4/10' as the standard

### [MEDIUM] ## `plantar-heel-pain` — hep.phases[0].exitCriteria[1]
- **Current:** Can do basic standing calf raises with pain ≤3/10 that settles overnight
- **Concern:** Phase 1 ("Calm & Mobilize") only contains two exercises — the plantar fascia-specific stretch and the wall calf stretch. It contains no calf-raise exercise. Asking the patient to demonstrate "basic standing calf raises" as a Phase 1 exit criterion references an exercise they were never prescribed until Phase 2 (plantar-heel-raise-towel). A patient self-checking against this criterion has nothing in their Phase 1 program to test it with.
- **Suggested change:** Either move/add a basic double-leg calf raise into Phase 1, or rewrite the exit criterion to reference what Phase 1 actually trains, e.g. "Morning first-step pain is easing and the fascia/calf stretches are comfortable."

### [LOW] ## `biceps-tendinopathy` — selfCare.dos[1] / hep.overview / all painRule fields
- **Current:** discomfort up to about 3/10 during exercise is acceptable
- **Concern:** This module uses a single 'about 3/10' threshold everywhere (self-care, HEP overview, every exit criterion, every painRule), which is internally consistent. However, the gold-standard exemplar achilles-tendinopathy.ts and the schema's painRule example ('ok up to 3-4/10') use a '3-4/10' band. The biceps module's flat '3/10' is a slightly more conservative single number that drifts from the exemplar's phrasing convention.
- **Suggested change:** Optional alignment to the exemplar: consider using the '≤3-4/10 that settles by the next morning' band used in achilles-tendinopathy.ts for cross-module consistency. The current usage is internally consistent, so this is a low-priority polish item, not an error.

### [LOW] ## `de-quervain-tenosynovitis` — prognosis.typicalTimeline, returnToActivity.timelineGuidance, faqs[0].a
- **Current:** Many improve over 2 to 8 weeks ... / Often 2 to 8 weeks with good treatment ... / many people improve over about 2 to 8 weeks
- **Concern:** The "2 to 8 weeks" figure is restated three times across prognosis, returnToActivity, and the FAQ. This is consistent (good) but the prognosis.summary itself omits any timeline while the other three carry it; minor redundancy plus a summary that is thinner than its own typicalTimeline.
- **Suggested change:** Optional: keep the three timeline mentions but ensure they stay in sync if edited; consider whether prognosis.summary should briefly echo the range like the exemplar does.

### [LOW] ## `gluteal-tendinopathy` — hep.phases[0].exercises[0].painRule vs exitCriteria
- **Current:** Default: mild discomfort up to about 3/10 is OK if it settles by the next morning.
- **Concern:** Within the file the same pain threshold is phrased two ways: painRules say 'up to about 3/10' while exitCriteria say 'pain ≤3/10'. Each phrasing is used consistently in its own slot, so this is minor, but the two forms describe the identical threshold. (Separately, this module uses ~3/10 throughout whereas the Achilles exemplar uses 3–4/10 — a deliberate per-condition choice, not a defect.)
- **Suggested change:** Optional: standardize on one phrasing for the 3/10 threshold across painRules and exitCriteria for a cleaner read; no clinical change needed.

### [LOW] ## `golfers-elbow` — hep.phases[0].exitCriteria[1] vs hep.phases[1].exitCriteria[0]
- **Current:** Isometric wrist flexion holds are comfortable (pain ≤3/10 that settles overnight)
- **Concern:** The exit/criteria pain thresholds use '≤3/10 that settles overnight' here but 'pain ≤3/10' (no settle clause) at phases[1].exitCriteria[0] ('Can do eccentric wrist flexion and pronation with good control and pain ≤3/10'), so the 'settles overnight' qualifier appears inconsistently.
- **Suggested change:** Apply the 'settles overnight/by next morning' qualifier consistently to the criteria thresholds, or drop it consistently, so the pain target reads the same way throughout.

### [LOW] ## `lateral-ankle-sprain` — hep.phases[1].exitCriteria[1]
- **Current:** Good strength with band inversion/eversion in all directions
- **Concern:** Minor wording redundancy: 'band inversion/eversion in all directions' is slightly contradictory/awkward, since inversion and eversion are two specific directions rather than 'all directions.' The educationPoints already make the in/out point cleanly.
- **Suggested change:** Reword to e.g. 'Good ankle strength turning the foot in and out (inversion/eversion)' to avoid the 'in/eversion ... in all directions' overlap.

### [LOW] ## `mechanical-neck-pain` — hep.phases[*].exercises[*].painRule (and selfCare/exitCriteria)
- **Current:** '... that settles by the next morning.' vs '... that settles overnight.'
- **Concern:** The pain-rule tail clause alternates between 'settles by the next morning' (chin nod, cervical rotation, deep neck flexor endurance) and 'settles overnight' (thoracic extension, scapular retraction, postural maintenance) within the same file. Both mean the same thing; the drift is purely cosmetic but noticeable across adjacent exercises.
- **Suggested change:** Standardize on one phrasing for all painRule strings in this module (e.g., 'settles by the next morning', which is the phrasing used in selfCare.dos and the hep.overview).
- **Basis:** Within-file terminology drift; no clinical impact.

### [LOW] ## `mechanical-neck-pain` — hep.phases[0].exitCriteria[1] vs selfCare.dos[2] / painRule strings
- **Current:** '... with pain ≤3/10 that settles overnight' vs 'mild discomfort up to about 3/10 during exercise'
- **Concern:** The numeric pain threshold is expressed two ways in this file: the symbolic '≤3/10' (phase-1 exit criteria, also phase-2 entry implied) and the prose 'up to about 3/10' (selfCare, painRule strings). The exemplar achilles-tendinopathy.ts mixes both forms too, but within a single module a consistent format reads cleaner.
- **Suggested change:** Pick one representation of the threshold (symbolic '≤3/10' or prose 'up to about 3/10') and use it consistently across exitCriteria, selfCare, and painRule in this module.
- **Basis:** Within-file formatting drift in pain-threshold notation.

### [LOW] ## `medial-tibial-stress-syndrome` — selfCare.dos[1] / hep.phases[0].exitCriteria[1] vs hep exercise painRules
- **Current:** mild discomfort up to about 3/10 during exercise is acceptable if it settles by the next morning
- **Concern:** The threshold notation drifts: prose uses 'about 3/10' / 'up to about 3/10', exercises use '~3/10', and exit criteria use '≤3/10'. The exemplar (achilles-tendinopathy.ts) standardizes on '≤3/10' / '≤3–4/10'. Mixed forms (about / ~ / ≤) within one file read as inconsistent.
- **Suggested change:** Pick one notation for the numeric threshold across prose, exit criteria, and pain rules (e.g. '≤3/10') for consistency with the exemplar and within this file.

### [LOW] ## `patellar-tendinopathy` — prognosis.typicalTimeline / returnToActivity.timelineGuidance vs external executiveSummaries.ts ['patellar-tendinopathy']
- **Current:** Recovery often takes 6 to 12+ weeks, and chronic cases can take months.
- **Concern:** The module body anchors recovery at '6 to 12+ weeks' (also faqs[2], evidence/whatHelps), but the externally-rendered executive summary for this same condition (src/content/executiveSummaries.ts) says it 'often needs 3 to 6 months or more of loading rehab.' These display on the same condition page and give the patient two different headline timelines.
- **Suggested change:** Reconcile the two. Patellar tendinopathy is commonly slower than Achilles; if '3 to 6 months or more' is the intended honest figure, align the in-file timeline language up toward it (or vice versa) so the page is internally consistent.
- **Basis:** src/content/executiveSummaries.ts entry for 'patellar-tendinopathy' states '3 to 6 months or more'

### [LOW] ## `plantar-heel-pain` — hep.phases[1].entryCriteria[1]
- **Current:** Comfortable with stretching and basic calf raises
- **Concern:** Mirror of the Phase 1 exit-criterion problem: Phase 2 entry assumes the patient is already "comfortable with ... basic calf raises," but calf raises are first introduced as an exercise inside Phase 2 itself (plantar-heel-raise-towel). The prerequisite cannot have been met from the Phase 1 program as written.
- **Suggested change:** Align with whatever fix is applied to phases[0].exitCriteria[1] — if Phase 1 gains a basic calf raise this resolves; otherwise drop "and basic calf raises" from the entry criterion.

### [LOW] ## `tennis-elbow` — condition.hep.phases[*].exercises[*].painRule and exitCriteria
- **Current:** 'Mild pain up to ~3/10 during the hold that settles by next morning.'
- **Concern:** Pain-rule notation diverges from the gold-standard exemplar. achilles-tendinopathy.ts uses concise badge-style thresholds ('Aim for pain ≤3/10 during the hold.', 'Discomfort ≤3–4/10 that settles by morning.'), whereas this file uses prose '~3/10'. This file is internally consistent, so this is style drift across the library rather than an in-file contradiction.
- **Suggested change:** For library consistency, consider matching the exemplar's '≤3/10' / '≤3–4/10' style, or accept the prose form as the house style and apply it everywhere. No clinical change needed.

