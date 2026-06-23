import type { Procedure } from './types'

/**
 * Interventional sports-medicine procedures, described honestly for shared
 * decision-making. `evidence` is a general label; condition pages carry the
 * condition-specific nuance via `ProcedureRelevance`.
 */
export const procedures: Procedure[] = [
  {
    id: 'ultrasound-guided',
    title: 'Ultrasound-Guided Injection',
    iconKey: 'ultrasound-guided',
    tag: 'Precision anatomy',
    evidence: 'moderate',
    accent: 'teal',
    summary:
      'Real-time ultrasound lets the clinician see the needle and target, improving accuracy for deep or small structures such as joints, bursae, and tendon sheaths.',
    bestFit: [
      'Deep or small targets',
      'Prior non-guided injection that did not help',
      'Need to avoid nearby vessels or tendons',
    ],
    questions: [
      'What structure is being targeted?',
      'How does ultrasound change the plan?',
      'What should I avoid afterward?',
    ],
    education: {
      decisionPoint:
        'Ultrasound is a targeting and safety tool, not a treatment by itself. Its value depends on whether the diagnosis, target, and injectate are appropriate.',
      whatHappens: [
        'The clinician scans first to confirm the anatomy and find nearby vessels, nerves, tendons, or joint spaces.',
        'The skin is cleaned, local anesthetic may be used, and the needle is guided while the target stays visible on the screen.',
        'Images may be saved before and/or after the procedure to document the target and medication placement.',
      ],
      notFor: [
        'Replacing a careful history and exam',
        'Treating pain when the target structure is uncertain',
        'Proving that an injection is needed just because a structure can be seen',
      ],
      aftercare: [
        'Ask whether the injection was diagnostic, therapeutic, or both — that changes how to interpret the response.',
        'Follow the specific loading plan for the medication used; steroid, PRP, and anesthetic-only injections have different goals.',
        'Track pain, function, and timing of relief so the result can inform the next decision.',
      ],
      callClinician: [
        'Fever, spreading redness, drainage, or rapidly worsening swelling',
        'New numbness, weakness, coldness, or color change beyond the expected numbness window',
        'Pain that escalates instead of gradually settling after the expected post-procedure flare window',
      ],
    },
    citationIds: ['amssm-sports-us'],
  },
  {
    id: 'corticosteroid',
    title: 'Corticosteroid Injection',
    iconKey: 'corticosteroid',
    tag: 'Anti-inflammatory',
    evidence: 'limited',
    accent: 'blue',
    summary:
      'A steroid injection can reduce pain in the short term for some conditions, but benefit often fades by a few months and repeated tendon injections may carry risk. Best considered as a bridge to active rehab, not a stand-alone fix.',
    bestFit: [
      'Short-term flare control to enable rehab',
      'Selected joint or bursal pain',
      'Shared decision-making about short- vs long-term effects',
    ],
    questions: [
      'What short-term benefit is realistic?',
      'How might this affect the tendon or longer-term outcome?',
      'How does this fit with my exercise program?',
    ],
    education: {
      decisionPoint:
        'Steroid can be useful when inflammation or pain is blocking rehab, but it should be framed as short-term symptom control rather than tissue repair.',
      whatHappens: [
        'The clinician confirms the diagnosis and target, then injects corticosteroid, usually with local anesthetic.',
        'Relief may be delayed, and a short pain flare for a day or two can happen before improvement.',
        'For osteoarthritis, guideline language generally frames steroid as short-term relief to support activity and therapeutic exercise.',
      ],
      notFor: [
        'Repeated routine tendon injections',
        'Masking pain so an athlete can overload an injured tendon immediately',
        'Long-term stand-alone management without a loading, strength, or activity plan',
      ],
      aftercare: [
        'Protect the injected area for the first day or two and avoid using the temporary numbness to test the injury hard.',
        'Use ice if sore, avoid soaking the site briefly after injection, and restart loading based on the clinician’s plan.',
        'If you have diabetes, monitor glucose closely because steroid injections can temporarily raise blood sugar.',
      ],
      callClinician: [
        'Increasing pain, swelling, redness, drainage, fever, or feeling unwell',
        'Blood sugar that is much higher than your usual range or difficult to control',
        'New tendon snap, sudden weakness, or loss of function after injection',
      ],
    },
    citationIds: ['mayo-cortisone-shots', 'nice-oa-ng226'],
  },
  {
    id: 'prp',
    title: 'PRP (Platelet-Rich Plasma)',
    iconKey: 'prp',
    tag: 'Autologous biologic',
    evidence: 'mixed',
    accent: 'orange',
    summary:
      'An injection prepared from your own blood, considered for selected tendon and joint problems. Preparations and protocols vary widely and the evidence is genuinely mixed — some studies are positive while high-quality placebo-controlled trials have been negative.',
    bestFit: [
      'Chronic tendinopathy after a loading program',
      'Selected knee OA discussions',
      'Athletes weighing options against repeated steroid use',
    ],
    questions: [
      'Which PRP preparation is used?',
      'What does the evidence show for my specific condition?',
      'What rehab timeline follows the injection?',
    ],
    education: {
      decisionPoint:
        'PRP is a condition-specific shared decision, not a universal regenerative fix. The key questions are diagnosis, preparation type, cost, and the rehab plan afterward.',
      whatHappens: [
        'Blood is drawn from your arm and spun in a centrifuge to concentrate platelet-rich plasma.',
        'The PRP is injected into the selected tendon or joint target, often with ultrasound guidance.',
        'Soreness can increase for days to a couple of weeks, and benefit is usually judged over weeks to months rather than immediately.',
      ],
      notFor: [
        'Acute tendon ruptures or injuries that need surgical evaluation',
        'A shortcut around progressive loading and return-to-sport planning',
        'Situations where cost, protocol variability, or uncertain benefit are unacceptable to the patient',
      ],
      aftercare: [
        'Clarify medication restrictions, including whether to avoid anti-inflammatory medicines around the procedure.',
        'Expect a staged return to loading; the injection does not replace tendon or joint capacity training.',
        'Track function over several weeks, because early soreness does not reliably predict the final response.',
      ],
      callClinician: [
        'Fever, spreading redness, drainage, or escalating swelling',
        'Severe pain that feels out of proportion or does not begin settling as expected',
        'New weakness, numbness, or inability to use the limb normally',
      ],
    },
    periProcedure: {
      title: 'PRP Prep & Recovery Plan',
      intro:
        'PRP protocols vary by diagnosis, PRP preparation, and clinician preference. The most reliable principle is not a universal hold list — it is coordinated medication safety, short-term load control, and a staged return to tendon or joint loading.',
      preChecklist: [
        {
          title: 'Scale down provocative loading',
          detail:
            'Keep normal daily movement and gentle mobility, but reduce activities that reliably flare the target tendon or joint in the few days before injection. Heavy eccentrics, plyometrics, sprinting, maximal gripping, or heavy overhead lifting are often reduced 24–72 hours before PRP.',
          basis: 'consensus-common-protocol',
        },
        {
          title: 'Continue quiet rehab unless told otherwise',
          detail:
            'Low-irritability mobility, isometrics, and easy strengthening may continue if they do not worsen symptoms. A hard flare-producing workout right before PRP is usually not the goal.',
          basis: 'consensus-common-protocol',
        },
        {
          title: 'Review medications before the procedure',
          detail:
            'Tell the treating clinician about NSAIDs, aspirin, anticoagulants, antiplatelet drugs, oral steroids, recent steroid injections, and all supplements. Safety decisions override theoretical PRP optimization.',
          basis: 'safety-driven-physician-decision',
        },
        {
          title: 'Do not chase “PRP quality” with supplements',
          detail:
            'Adequate sleep, hydration, protein/calories, and nicotine reduction are sensible recovery habits, but strong evidence that supplements meaningfully improve PRP outcomes is lacking.',
          basis: 'insufficient-evidence-variable-practice',
        },
        {
          title: 'Call ahead if health status changes',
          detail:
            'Contact the office before PRP for fever, viral illness, skin infection near the site, new antibiotics, new blood thinner or aspirin changes, abnormal bruising/bleeding, pregnancy questions, recent steroid injection in the same region, or inability to follow post-procedure restrictions.',
          basis: 'safety-driven-physician-decision',
        },
      ],
      medicationGuidance: [
        {
          item: 'Nonselective NSAIDs',
          recommendation: 'Often paused around PRP if the treating clinician advises it.',
          basis: 'evidence-supported',
          patientText:
            'Many PRP protocols avoid ibuprofen, naproxen, and similar NSAIDs around the injection because they may reduce platelet activity.',
          clinicianNote:
            'Timing windows vary by protocol and patient risk; coordinate with the proceduralist.',
        },
        {
          item: 'COX-2–selective NSAIDs',
          recommendation: 'Do not assume they must be stopped; clinic practices vary.',
          basis: 'insufficient-evidence-variable-practice',
          patientText:
            'Celecoxib-type medications may have less effect on platelet function than standard NSAIDs, but follow your clinician’s specific protocol.',
        },
        {
          item: 'Aspirin',
          recommendation:
            'Do not stop prescribed aspirin on your own, especially for heart attack, stroke, stent, or vascular prevention.',
          basis: 'safety-driven-physician-decision',
          patientText:
            'If aspirin is prescribed for cardiovascular or stroke prevention, never stop it without approval from the clinician who prescribes it.',
          neverStopWithoutApproval: true,
        },
        {
          item: 'Acetaminophen',
          recommendation:
            'Some reviews raise platelet-effect questions, but practice varies widely.',
          basis: 'insufficient-evidence-variable-practice',
          patientText:
            'Acetaminophen is not an anti-inflammatory drug, but some PRP protocols still ask patients to check before using it around the procedure.',
        },
        {
          item: 'Oral corticosteroids',
          recommendation: 'Avoid casual overlap when possible; coordinate timing.',
          basis: 'safety-driven-physician-decision',
          patientText:
            'Tell your clinician if you take prednisone or another steroid, because this may change procedure timing.',
        },
        {
          item: 'Recent corticosteroid injection',
          recommendation: 'A recent cortisone shot near the same target usually needs timing review.',
          basis: 'safety-driven-physician-decision',
          patientText:
            'Tell your clinician if you recently had a cortisone shot in the same region; they may recommend delaying PRP.',
        },
        {
          item: 'Corticosteroid after PRP',
          recommendation: 'Usually avoided near the treated site unless there is a clear reason.',
          basis: 'consensus-common-protocol',
          patientText:
            'Many clinics avoid a cortisone shot into the same area right after PRP unless the treating clinician decides otherwise.',
        },
        {
          item: 'Anticoagulants',
          recommendation:
            'Do not stop blood thinners on your own; coordinate with the prescribing clinician and proceduralist.',
          basis: 'safety-driven-physician-decision',
          patientText:
            'Blood thinner decisions must be individualized and coordinated with the clinician who prescribes them.',
          neverStopWithoutApproval: true,
        },
        {
          item: 'Antiplatelet drugs',
          recommendation:
            'Do not stop antiplatelet therapy on your own; coordinate with the prescribing clinician and proceduralist.',
          basis: 'safety-driven-physician-decision',
          patientText:
            'If you take clopidogrel or another antiplatelet drug, do not stop it unless both your treating and prescribing clinicians say it is safe.',
          neverStopWithoutApproval: true,
        },
        {
          item: 'Fish oil / omega-3',
          recommendation: 'No strong PRP outcome evidence; some clinics still ask patients to pause.',
          basis: 'theoretical-biologic-rationale',
          patientText:
            'Some clinics ask patients to pause fish oil, but strong evidence that this improves PRP results is lacking.',
        },
        {
          item: 'Turmeric / curcumin',
          recommendation: 'No strong PRP outcome evidence; clinic protocols vary.',
          basis: 'theoretical-biologic-rationale',
          patientText:
            'Curcumin is commonly discussed because of theoretical platelet effects, but solid PRP outcome evidence is lacking.',
        },
        {
          item: 'Garlic, ginkgo, vitamin E, similar supplements',
          recommendation:
            'No strong PRP outcome evidence; discuss if bleeding or bruising risk is a concern.',
          basis: 'theoretical-biologic-rationale',
          patientText:
            'Tell your clinician about supplements, especially if you bruise easily, but do not assume they need to be stopped unless you are specifically advised.',
        },
        {
          item: 'SSRIs / SNRIs',
          recommendation: 'No high-quality PRP-specific stop/start recommendation identified.',
          basis: 'insufficient-evidence-variable-practice',
          patientText:
            'Do not stop antidepressants for PRP unless your prescribing clinician specifically advises it.',
          neverStopWithoutApproval: true,
        },
      ],
      recoveryClusters: [
        {
          id: 'tendon',
          title: 'Tendon PRP',
          appliesTo: [
            'Patellar tendon',
            'Achilles tendon',
            'Gluteal tendon / GTPS',
            'Proximal hamstring',
            'Rotator cuff',
            'Biceps tendon',
            'Tennis/golfer’s elbow',
            'Plantar fascia',
          ],
          overview:
            'Tendons often feel more irritated for several days after PRP, then need a staged return to loading. Progressive loading is evidence-based for tendinopathy; exact day-by-day PRP timing is mostly expert-informed.',
          stages: [
            {
              title: 'Immediate post-procedure',
              timing: 'Day 0–2, or as directed',
              patientGoal: 'Let the early flare settle without full immobilization unless prescribed.',
              loadingGuidance:
                'Use relative rest, protected walking or arm use as needed, and gentle range of motion if allowed.',
              basis: 'expert-informed',
            },
            {
              title: 'Early protection',
              timing: 'Several days to about 1–2 weeks',
              patientGoal: 'Avoid turning the post-injection flare into an overload flare.',
              loadingGuidance:
                'Avoid sprinting, jumping, maximal gripping, heavy eccentrics, and heavy overhead loading. Protection may be longer if needling or tenotomy was also performed.',
              basis: 'mixed',
            },
            {
              title: 'Range of motion and isometrics',
              timing: 'Once resting pain begins to settle',
              patientGoal: 'Reintroduce controlled motion and low-irritability tendon loading.',
              loadingGuidance:
                'Begin clinician-approved mobility and isometrics before progressing to heavier loading.',
              basis: 'expert-informed',
            },
            {
              title: 'Progressive strengthening',
              timing: 'Symptoms guide timing',
              patientGoal: 'Restore tendon capacity without chasing soreness.',
              loadingGuidance:
                'Progress toward heavy-slow resistance or eccentric loading when appropriate for the tendon and symptom response.',
              basis: 'evidence-based',
            },
            {
              title: 'Sport-specific return',
              timing: 'Milestone-based',
              patientGoal: 'Return by function and next-day response, not by calendar alone.',
              loadingGuidance:
                'Advance running, jumping, gripping, overhead work, or court/field drills only after progressive load is tolerated without escalating pain.',
              basis: 'expert-informed',
            },
          ],
        },
        {
          id: 'joint-oa',
          title: 'Joint / OA PRP',
          appliesTo: ['Knee osteoarthritis', 'Hip osteoarthritis'],
          overview:
            'Joint/OA PRP usually has a shorter early protection phase than tendon PRP. Exercise remains core OA care, but no universal PRP-aftercare schedule is endorsed across major guidelines.',
          stages: [
            {
              title: 'Immediate post-procedure',
              timing: 'First few days',
              patientGoal: 'Reduce injection-site irritation and swelling.',
              loadingGuidance:
                'Use relative rest and reduce unusually heavy walking, stairs, squats, impact, or loaded exercise.',
              basis: 'mixed',
            },
            {
              title: 'Early reintroduction',
              timing: 'As pain and swelling allow',
              patientGoal: 'Restore comfortable joint motion and baseline activity.',
              loadingGuidance:
                'Resume gait, range of motion, cycling, pool work, and standard OA exercise progressions gradually.',
              basis: 'evidence-based',
            },
            {
              title: 'Strength and impact progression',
              timing: 'Milestone-based',
              patientGoal: 'Build durable joint capacity rather than relying on the injection alone.',
              loadingGuidance:
                'Advance strengthening and impact based on pain irritability, swelling, and function.',
              basis: 'expert-informed',
            },
          ],
        },
        {
          id: 'hand-wrist-sheath',
          title: 'Hand / wrist tendon sheath PRP',
          appliesTo: ['De Quervain tenosynovitis', 'Trigger finger, if discussed at all'],
          overview:
            'PRP for de Quervain or trigger finger should be framed as niche and nonstandard. Evidence is too limited to justify a universal protocol.',
          stages: [
            {
              title: 'Brief protection',
              timing: 'First few days',
              patientGoal: 'Let soreness settle while preventing stiffness.',
              loadingGuidance:
                'Use relative rest, splinting if prescribed, and gentle finger/thumb motion as directed.',
              basis: 'expert-informed',
            },
            {
              title: 'Gentle use',
              timing: 'As pain allows',
              patientGoal: 'Rebuild tolerance to normal hand tasks.',
              loadingGuidance:
                'Progress from light daily use to gripping, lifting, typing, paddle, club, or tool demands based on symptom response.',
              basis: 'expert-informed',
            },
          ],
        },
      ],
      warningSigns: [
        'Fever, chills, spreading redness, drainage, or feeling unwell',
        'Rapidly increasing swelling or severe pain clearly beyond the expected flare',
        'New numbness, weakness, coldness, or color change in the hand or foot',
        'A new pop, visible gap, or major loss of tendon function',
        'Calf swelling, chest pain, or shortness of breath — seek urgent medical evaluation',
      ],
      clinicianCaveats: [
        'PRP evidence is highly indication-specific; avoid one global PRP promise statement across all body regions.',
        'Knee OA and lateral epicondylitis have stronger “commonly discussed” footing than Achilles tendinopathy, trigger finger, TFCC pain, or labral-type hip pain.',
        'The literature does not support one universal medication hold list, supplement rule, or post-PRP loading schedule across all tissues and PRP preparations.',
      ],
      citationIds: [
        'aaos-prp-orthoinfo',
        'aaos-orthobiologics-faq',
        'amssm-regenerative-medicine-2021',
        'prp-medication-review-2022',
      ],
    },
    citationIds: [
      'aaos-prp-orthoinfo',
      'aaos-orthobiologics-faq',
      'amssm-regenerative-medicine-2021',
      'prp-medication-review-2022',
    ],
  },
  {
    id: 'hyaluronic-acid',
    title: 'Hyaluronic Acid Injection',
    iconKey: 'hyaluronic-acid',
    tag: 'Joint lubrication',
    evidence: 'limited',
    accent: 'blue',
    summary:
      'Sometimes discussed for knee osteoarthritis. Guideline recommendations differ, any benefit tends to be modest and delayed, and it is not a substitute for exercise and load management.',
    bestFit: [
      'Knee OA shared decision-making',
      'Patients who understand cost and delayed benefit',
      'When exercise and load management remain central',
    ],
    questions: [
      'What benefit window is realistic?',
      'Is this covered by insurance?',
      'How does this compare with steroid or PRP?',
    ],
    education: {
      decisionPoint:
        'Hyaluronic acid is mainly an osteoarthritis discussion, especially knee OA, and guideline recommendations are not uniform. It should not be presented as cartilage restoration.',
      whatHappens: [
        'A gel-like hyaluronan product is injected into the joint, sometimes as one injection and sometimes as a short series.',
        'If it helps, improvement is typically delayed rather than immediate.',
        'The decision should include cost, coverage, prior response to exercise/medications, and the patient’s tolerance for uncertain benefit.',
      ],
      notFor: [
        'Tendon pain, muscle strains, or ligament sprains',
        'A replacement for therapeutic exercise, strength work, and load management',
        'Situations where the patient expects rapid relief like a numbing injection',
      ],
      aftercare: [
        'Avoid unusually heavy joint loading immediately after the injection unless your clinician gives a different plan.',
        'Keep the strength and aerobic plan active; injection benefit, if present, is only one piece of OA care.',
        'Judge response over the agreed window rather than the first day.',
      ],
      callClinician: [
        'Hot, swollen, severely painful joint, fever, or feeling unwell',
        'Rapidly worsening swelling or inability to bear weight after injection',
        'Rash, hives, breathing symptoms, or other allergic-type reaction',
      ],
    },
    citationIds: ['acr-oa-guideline', 'nice-oa-ng226'],
  },
  {
    id: 'shockwave',
    title: 'Extracorporeal Shockwave Therapy',
    iconKey: 'shockwave',
    tag: 'Non-invasive tendon option',
    evidence: 'moderate',
    accent: 'violet',
    summary:
      'A non-invasive option for several chronic tendon problems and plantar heel pain. Evidence is condition-specific and it works best paired with a progressive loading program rather than on its own.',
    bestFit: [
      'Plantar heel pain',
      'Gluteal, Achilles, or patellar tendinopathy',
      'Tennis/pickleball elbow after persistent symptoms',
    ],
    questions: [
      'Focused or radial shockwave?',
      'How many sessions are planned?',
      'What loading program should continue alongside it?',
    ],
    education: {
      decisionPoint:
        'Shockwave is best framed as an adjunct for selected chronic tendon or plantar fascia problems, with condition-specific evidence and variable protocols.',
      whatHappens: [
        'A device delivers acoustic pulses through the skin to the painful target; focused and radial devices are different.',
        'Treatment is often delivered as a series, and discomfort during the session is common.',
        'Ultrasound may be used to help localize the target, but the biological mechanism is still not fully settled.',
      ],
      notFor: [
        'Acute rupture, fracture, infection, or unexplained severe pain',
        'Replacing a progressive loading program',
        'Conditions where the evidence is weak and the patient wants a highly predictable result',
      ],
      aftercare: [
        'Expect some soreness and avoid stacking shockwave with a sudden training spike.',
        'Continue the condition-specific loading plan unless the treating clinician says to pause or modify it.',
        'Use pre-agreed outcome measures such as morning pain, walking tolerance, or sport-specific function.',
      ],
      callClinician: [
        'Marked bruising, worsening swelling, or pain that is escalating rather than settling',
        'New numbness, weakness, or loss of function',
        'Symptoms suggesting the original diagnosis may be wrong, such as fever or pain at rest/night that is worsening',
      ],
    },
    citationIds: ['nice-eswt-plantar-htg200', 'nice-eswt-achilles-htg426'],
  },
  {
    id: 'tenotomy',
    title: 'Percutaneous Tenotomy',
    iconKey: 'tenotomy',
    tag: 'Tendon procedure',
    evidence: 'emerging',
    accent: 'graphite',
    summary:
      'A needle- or device-assisted tendon treatment for carefully selected, chronic tendinopathy that has not responded to a good conservative program. Evidence is still emerging.',
    bestFit: [
      'Chronic, focal tendon pain',
      'Imaging-confirmed tendinopathy',
      'Patient prepared for post-procedure rehab',
    ],
    questions: [
      'What imaging supports the target?',
      'What is the recovery timeline?',
      'When do we restart loading?',
    ],
    education: {
      decisionPoint:
        'Percutaneous tenotomy is a selected-case option for chronic, focal tendinopathy after a real conservative program has failed. The procedure starts a rehab process; it does not finish one.',
      whatHappens: [
        'The clinician confirms a focal tendon target, usually with ultrasound, and uses a needle or device to treat the abnormal tendon area.',
        'The goal is to stimulate a local healing response and reduce chronic tendon pain over time.',
        'A protective phase and staged loading plan are part of the procedure, not optional extras.',
      ],
      notFor: [
        'Acute complete tendon rupture',
        'Diffuse pain without a clear tendon target',
        'Patients who cannot follow the post-procedure protection and loading timeline',
      ],
      aftercare: [
        'Expect temporary soreness and a period of relative protection before progressive loading resumes.',
        'Ask exactly when to restart isometrics, strengthening, running, jumping, gripping, or sport-specific tasks.',
        'Avoid judging success in the first few days; response is usually measured across weeks to months.',
      ],
      callClinician: [
        'Fever, spreading redness, drainage, or rapidly increasing swelling',
        'A sudden pop, new gap, or major loss of tendon function',
        'Calf swelling, chest pain, shortness of breath, or other symptoms your clinician flags as urgent for your procedure',
      ],
    },
    citationIds: ['amssm-sports-us'],
  },
]

export const procedureById = new Map(procedures.map((p) => [p.id, p]))
