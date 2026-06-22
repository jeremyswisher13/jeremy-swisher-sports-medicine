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
    citationIds: ['acr-oa-guideline'],
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
    citationIds: ['nice-guidance'],
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
  },
]

export const procedureById = new Map(procedures.map((p) => [p.id, p]))
