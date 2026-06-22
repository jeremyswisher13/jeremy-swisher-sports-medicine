import type { Citation, ConditionModule } from '../types'

/**
 * Trigger Finger — transcribed faithfully from the physician-authored deep-
 * research source (Evidence-Based Sports Medicine Library Draft, p.22–23).
 * Per the source's physician review notes, the evidence base favors injection
 * more strongly than exercise; the home program is mainly symptom-management
 * and glide-based. Citations use the exact PubMed URLs listed in the PDF.
 * Ships physician-review-pending for Dr. Swisher's sign-off.
 */

const citations: Citation[] = [
  {
    id: 'trigger-huisstede-2014-consensus',
    label: 'Huisstede 2014 (multidisciplinary consensus)',
    authorsOrOrg: 'Huisstede BMA, et al.',
    source: 'Multidisciplinary consensus guideline',
    year: 2014,
    type: 'consensus',
    url: 'https://pubmed.ncbi.nlm.nih.gov/24810861/',
    takeaway:
      'Multidisciplinary consensus guideline on the diagnosis and treatment of trigger finger, supporting splinting and corticosteroid injection as conservative options.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'trigger-lunsford-2019-orthoses',
    label: 'Lunsford 2019 (orthotic management review)',
    authorsOrOrg: 'Lunsford D, et al.',
    source: 'Systematic review of orthotic management',
    year: 2019,
    type: 'systematic-review',
    url: 'https://pubmed.ncbi.nlm.nih.gov/29290504/',
    takeaway:
      'Systematic review supporting orthoses (splinting) as a conservative option for trigger finger, with limited-to-moderate evidence.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'trigger-pujalte-2024-injection',
    label: 'Pujalte 2024 (injection review)',
    authorsOrOrg: 'Pujalte GGA, et al.',
    source: 'Injection review',
    year: 2024,
    type: 'narrative-review',
    url: 'https://pubmed.ncbi.nlm.nih.gov/39418543/',
    takeaway:
      'Review of corticosteroid injection for trigger finger, supporting it as a common first-line office treatment when symptoms persist.',
    verified: true,
    lastChecked: '2026-06-21',
  },
]

const moduleData: ConditionModule = {
  citations,
  condition: {
    id: 'trigger-finger',
    slug: 'trigger-finger',
    name: 'Trigger Finger',
    shortName: 'Trigger Finger',
    aka: [
      'stenosing tenosynovitis',
      'stenosing flexor tenosynovitis',
      'trigger thumb',
      'digital flexor tenosynovitis',
      'snapping finger',
      'locked finger',
    ],
    region: 'wrist-hand',
    sportTags: ['lifting', 'climbing', 'general'],
    careTier: 'pc-core',
    oneLiner:
      'Catching or locking of a finger because the flexor tendon does not glide smoothly through the A1 pulley.',
    overview:
      'Trigger finger is catching or locking of a finger because the flexor tendon does not glide smoothly through the A1 pulley — a small band the tendon normally slides under at the base of the finger. The finger may click, catch, or get stuck bent and then painfully pop straight.\n\nIt is often linked to gripping, diabetes, and local thickening of the tendon sheath. Common symptoms are catching, morning stiffness, and a tender nodule near the palm.\n\nMany mild cases improve with splinting or a change in activity, while persistent cases often respond to a corticosteroid injection.',
    tissue:
      'The flexor tendon of the affected finger and its A1 pulley — a band at the base of the finger that the tendon normally glides under, which becomes thickened so the tendon no longer glides smoothly.',
    anatomyDiagram: {
      key: 'anatomy-wrist-thumb',
      altText:
        'Palm-side view of the hand showing a finger flexor tendon passing under the A1 pulley at the base of the finger.',
      caption:
        'The flexor tendon catches as it tries to glide under the tight A1 pulley at the base of the finger.',
    },
    causes: [
      'Repetitive or forceful gripping',
      'Local thickening of the tendon sheath at the A1 pulley',
      'Diabetes (an associated medical factor)',
    ],
    riskFactors: [
      'Frequent gripping activities (lifting, climbing, hand-intensive work)',
      'Diabetes',
      'Local thickening of the flexor tendon sheath',
    ],
    symptoms: [
      'Catching, clicking, or locking of the finger',
      'The finger getting stuck bent and then popping straight, sometimes painfully',
      'Morning stiffness in the finger',
      'A tender nodule near the palm at the base of the finger',
    ],
    prognosis: {
      summary:
        'Many mild cases improve with splinting or a change in activity. Persistent cases often respond to a corticosteroid injection, which is a common first-line office treatment.',
      typicalTimeline:
        'Mild cases often settle over a few weeks with splinting and activity change; persistent cases frequently improve after a corticosteroid injection.',
      encouragement:
        'Trigger finger is very treatable. Most people get relief from simple measures, and an injection is a reliable next step if symptoms persist.',
    },
    redFlags: [
      {
        text: 'Finger locked and cannot be straightened.',
        urgency: 'urgent',
      },
      {
        text: 'Severe swelling or redness of the finger.',
        urgency: 'urgent',
      },
      {
        text: 'Recurrent locking.',
        urgency: 'see-clinician',
      },
      {
        text: 'Diabetes-associated involvement of multiple digits.',
        urgency: 'see-clinician',
      },
      {
        text: 'Failed splinting.',
        urgency: 'see-clinician',
      },
    ],
    selfCare: {
      dos: [
        'Use relative rest — reduce repetitive, forceful gripping rather than stopping all hand use.',
        'Wear a night splint if it is indicated for you.',
        'Spread out repetitive gripping tasks when possible.',
        'Do gentle tendon glides slowly and smoothly, holding each position briefly.',
      ],
      donts: [
        'Don’t force the finger through a snap or a locked position.',
        'Don’t do forceful snapping movements to "free" the finger.',
        'Don’t push glide exercises if locking worsens — regress to fewer reps if it flares.',
        'Don’t resume heavy, repetitive gripping until catching settles and gripping feels smooth.',
      ],
    },
    clinicalGoal:
      'Restore smooth, pain-free finger gliding and a confident return to gripping activities.',
    hep: {
      overview:
        'A symptom-management and glide-based home program. The aim is to keep the tendon gliding smoothly without provoking the catching. It combines relative rest, MCP blocking exercises, tendon glides, and a night splint if indicated. Progress the frequency of glides only if they stay non-irritating; regress to fewer reps if symptoms flare.',
      phases: [
        {
          id: 'trigger-finger-phase-1',
          order: 1,
          title: 'Calm & Protect',
          summary:
            'Settle the catching with relative rest and a night splint while keeping the finger gently moving.',
          goal: 'Reduce triggering episodes and protect the irritable tendon and pulley.',
          durationGuidance: 'Typically 1–3 weeks',
          entryCriteria: [
            'New or flaring catching, clicking, or locking',
            'Tender nodule near the palm',
          ],
          exitCriteria: [
            'Triggering episodes becoming less frequent',
            'Can move the finger gently without forceful snapping',
          ],
          educationPoints: [
            'Relative rest means reducing repetitive forceful gripping, not stopping all hand use.',
            'A night splint can keep the finger straight and reduce catching if indicated.',
            'Avoid forcing the finger through a locked position.',
          ],
          exercises: [
            {
              id: 'tf-relative-rest',
              name: 'Activity modification / relative rest',
              target: 'Flexor tendon and A1 pulley',
              purpose:
                'Reduces the repetitive gripping load that aggravates the tendon at the pulley.',
              dose: { notes: 'Ongoing through the day; spread gripping tasks out' },
              frequency: 'Daily, all day',
              progression:
                'Gradually reintroduce gripping tasks as catching settles.',
              regression:
                'Reduce gripping further; use larger or padded grips that lower force.',
              formCues: [
                'Spread out repetitive gripping across the day',
                'Use lighter, padded, or larger grips where possible',
                'Take breaks before the finger starts catching',
              ],
              painRule: 'Avoid activities that provoke catching or a painful snap.',
              diagram: {
                key: 'anatomy-wrist-thumb',
                altText:
                  'Hand performing a relaxed grip, with the flexor tendon at the base of the finger.',
              },
            },
            {
              id: 'tf-night-splint',
              name: 'Night splint (if indicated)',
              target: 'Affected finger MCP joint',
              purpose:
                'Holds the finger straight overnight to rest the tendon and reduce catching.',
              dose: { notes: 'Worn overnight as advised' },
              frequency: 'Nightly',
              progression: 'Wean off as catching resolves.',
              regression: 'Continue nightly use if morning catching persists.',
              formCues: [
                'Keep the affected finger gently straight in the splint',
                'It should be snug but not painful',
                'Check the skin for irritation in the morning',
              ],
              cautions: ['Use only if recommended by your clinician.'],
              equipment: ['Finger/hand splint'],
              diagram: {
                key: 'anatomy-wrist-thumb',
                altText:
                  'Finger held straight in a small splint at the base of the finger.',
              },
            },
          ],
        },
        {
          id: 'trigger-finger-phase-2',
          order: 2,
          title: 'Restore Smooth Glide',
          summary:
            'Add controlled tendon glides and MCP blocking to restore smooth, non-catching motion.',
          goal: 'Recover smooth tendon gliding under the pulley without forceful snapping.',
          durationGuidance: 'Typically 2–4 weeks',
          entryCriteria: [
            'Triggering episodes are less frequent',
            'Gentle finger motion tolerated without forcing',
          ],
          exitCriteria: [
            'Tendon glides performed smoothly without catching',
            'Gripping feels smoother in daily tasks',
          ],
          educationPoints: [
            'Move slowly and smoothly — no forceful snapping.',
            'Hold each position briefly through the glide sequence.',
            'Progress the frequency of glides only if they remain non-irritating.',
          ],
          exercises: [
            {
              id: 'tf-tendon-glide-sequence',
              name: 'Tendon glide sequence',
              aka: ['flexor tendon glides', 'finger gliding exercise'],
              target: 'Flexor tendons of the affected finger',
              purpose:
                'Keeps the flexor tendons gliding smoothly through the sheath to reduce catching and stiffness.',
              dose: { sets: 2, reps: '5–10', notes: '1–2 x 5–10 reps' },
              frequency: '2–3 times/day; progress frequency only if non-irritating',
              progression:
                'Increase the frequency of sessions only if glides stay non-irritating.',
              regression:
                'Regress to fewer reps if symptoms or locking worsen.',
              formCues: [
                'Slow and smooth',
                'No forceful snapping',
                'Hold each position briefly',
                'Stop if locking worsens',
              ],
              painRule:
                'Avoid force through a locked finger; regress to fewer reps if it flares.',
              diagram: {
                key: 'thumb-tendon-glide',
                altText:
                  'Hand moving through finger tendon-glide positions: straight, hook fist, and full fist.',
              },
            },
            {
              id: 'tf-mcp-blocking',
              name: 'MCP blocking exercise',
              aka: ['MP blocking'],
              target: 'Affected finger flexor tendon (isolated PIP/DIP glide)',
              purpose:
                'Isolates the finger joints so the tendon glides under the pulley in a controlled, non-catching way.',
              dose: { sets: 2, reps: '8–10' },
              frequency: '2–3 times/day',
              progression:
                'Increase reps or sessions as smooth gliding returns.',
              regression: 'Reduce reps and range if catching is provoked.',
              formCues: [
                'Hold the base of the finger straight with the other hand',
                'Bend only the joints beyond the block',
                'Move slowly and smoothly without snapping',
              ],
              painRule:
                'Stop if locking worsens; keep motion smooth and non-irritating.',
              diagram: {
                key: 'thumb-tendon-glide',
                altText:
                  'One hand stabilizing the base of a finger while the fingertip bends to isolate tendon glide.',
              },
            },
          ],
        },
        {
          id: 'trigger-finger-phase-3',
          order: 3,
          title: 'Return to Gripping',
          summary:
            'Gradually rebuild gripping tolerance as catching settles and motion stays smooth.',
          goal: 'Return to gripping activities with smooth, pain-free finger motion.',
          durationGuidance: 'Varies; typically 2–4 weeks once gliding is smooth',
          entryCriteria: [
            'Glides performed smoothly without catching',
            'Daily gripping feels smoother',
          ],
          exitCriteria: [
            'Gripping is smooth and pain-free',
            'No catching or locking with normal activity',
          ],
          educationPoints: [
            'Return as gripping becomes smooth and pain-free.',
            'Spread out repetitive gripping when possible to protect the tendon.',
            'Continue glides as a maintenance habit if you do a lot of gripping.',
          ],
          exercises: [
            {
              id: 'tf-graded-grip',
              name: 'Graded grip strengthening',
              target: 'Finger and hand flexors',
              purpose:
                'Rebuilds gripping tolerance once catching has settled and motion is smooth.',
              dose: { sets: 3, reps: '10–12', tempo: 'slow and controlled' },
              frequency: 'Every other day',
              progression:
                'Increase resistance gradually as gripping stays smooth and pain-free.',
              regression:
                'Reduce resistance or return to glides if catching returns.',
              formCues: [
                'Squeeze smoothly — no snapping',
                'Keep motion controlled through the full grip',
                'Stop if catching or pain returns',
              ],
              painRule:
                'Only progress while gripping stays smooth and pain-free.',
              equipment: ['Soft grip ball or light therapy putty'],
              diagram: {
                key: 'grip-squeeze',
                altText: 'Hand squeezing a soft ball to build gripping strength.',
              },
            },
            {
              id: 'tf-maintenance-glides',
              name: 'Maintenance tendon glides',
              target: 'Flexor tendons of the affected finger',
              purpose:
                'Keeps the tendon gliding smoothly to reduce the chance of recurrence.',
              dose: { sets: 1, reps: '5–10' },
              frequency: 'Daily or as needed, especially before heavy gripping',
              progression: 'Maintain; pair with a brief warm-up before sport.',
              regression: 'Continue at a comfortable, non-irritating level.',
              formCues: [
                'Slow and smooth through each position',
                'No forceful snapping',
                'Use as a warm-up before gripping tasks',
              ],
              diagram: {
                key: 'thumb-tendon-glide',
                altText:
                  'Hand moving through finger tendon-glide positions as a maintenance routine.',
              },
            },
          ],
        },
      ],
    },
    evidence: {
      strength: 'moderate',
      bottomLine:
        'Splinting is reasonable early; steroid injection is a common first-line office treatment when symptoms persist.',
      whatHelps: [
        'Splinting (orthoses), especially early',
        'Activity modification / relative rest to reduce repetitive gripping',
        'Tendon glides to keep the tendon moving smoothly',
        'Corticosteroid injection when symptoms persist',
      ],
      whatsUncertain: [
        'The evidence base favors injection more strongly than exercise; the home program is mainly symptom-management and glide-based.',
        'Evidence for orthoses (splinting) is limited-to-moderate.',
        'How much the home glide program changes the natural course on its own is not well established.',
      ],
      citationIds: [
        'trigger-huisstede-2014-consensus',
        'trigger-lunsford-2019-orthoses',
        'trigger-pujalte-2024-injection',
      ],
    },
    procedures: [
      {
        procedureId: 'corticosteroid',
        relevance: 'commonly-discussed',
        evidenceNote: 'Commonly discussed, first-line procedural option.',
        citationIds: ['trigger-pujalte-2024-injection'],
      },
      {
        procedureId: 'prp',
        relevance: 'rarely',
        evidenceNote: 'PRP: rarely / uncertain.',
      },
      {
        procedureId: 'hyaluronic-acid',
        relevance: 'rarely',
        evidenceNote: 'Hyaluronic acid: rarely / uncertain.',
      },
      {
        procedureId: 'shockwave',
        relevance: 'not-indicated',
        evidenceNote: 'ESWT: not indicated.',
      },
      {
        procedureId: 'ultrasound-guided',
        relevance: 'selected-cases',
        evidenceNote: 'Ultrasound-guided injection: selected cases.',
      },
      {
        procedureId: 'tenotomy',
        relevance: 'selected-cases',
        evidenceNote:
          'Percutaneous release / tenotomy: selected cases when conservative care fails.',
        citationIds: ['trigger-pujalte-2024-injection'],
      },
    ],
    returnToActivity: {
      criteria: [
        'Gripping becomes smooth and pain-free',
        'No catching or locking with normal activity',
      ],
      timelineGuidance:
        'Return as gripping becomes smooth and pain-free; this varies by case and by how much gripping the activity demands.',
      reinjuryPrevention: [
        'Spread out repetitive gripping when possible',
        'Use tendon glides as a warm-up before heavy gripping',
        'Address aggravating gripping technique and tools',
      ],
    },
    faqs: [
      {
        q: 'Why does my finger catch or lock?',
        a: 'The flexor tendon does not glide smoothly through its A1 pulley — a small band at the base of the finger. When the tendon sheath thickens, the finger can click, catch, or get stuck bent and then pop straight.',
        citationIds: ['trigger-huisstede-2014-consensus'],
      },
      {
        q: 'Do I need surgery or an injection?',
        a: 'Many mild cases improve with splinting or a change in activity. When symptoms persist, a corticosteroid injection is a common first-line office treatment. Percutaneous release is reserved for selected cases when conservative care fails.',
        citationIds: ['trigger-pujalte-2024-injection'],
      },
      {
        q: 'Should I keep forcing the finger straight when it locks?',
        a: 'No. Avoid forcing the finger through a locked position or doing forceful snapping. If the finger is locked and cannot be straightened, or there is severe swelling or redness, see a clinician promptly.',
        citationIds: ['trigger-huisstede-2014-consensus'],
      },
    ],
    relatedConditionIds: [],
    review: {
      status: 'physician-review-pending',
      contentVersion: '1.0.0',
    },
  },
}

export default moduleData
