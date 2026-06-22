import type { Citation, ConditionModule } from '../types'

/**
 * Transcribed faithfully from the physician-authored deep-research PDF
 * (Hand and wrist — "De Quervain's tenosynovitis", pp. 19–20). Citations are
 * the real sources listed in that section's own Citations block. All clinical
 * content ships physician-review-pending for Dr. Swisher's sign-off.
 */

const citations: Citation[] = [
  {
    id: 'de-challoumas-2023-jamano',
    label: 'Challoumas 2023 (JAMA Netw Open NMA)',
    authorsOrOrg: 'Challoumas D, et al.',
    source: 'JAMA Network Open',
    year: 2023,
    type: 'meta-analysis',
    url: 'https://pubmed.ncbi.nlm.nih.gov/37889490/',
    takeaway:
      'Systematic review/network meta-analysis of De Quervain treatments; corticosteroid injection plus short immobilization has among the strongest supporting evidence for persistent symptoms.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'de-chong-2024-nma',
    label: 'Chong 2024 (review/NMA update)',
    authorsOrOrg: 'Chong HH, et al.',
    source: 'PubMed',
    year: 2024,
    type: 'meta-analysis',
    url: 'https://pubmed.ncbi.nlm.nih.gov/38613563/',
    takeaway:
      'Updated review/network meta-analysis reinforcing injection plus splinting as the strongest option, with a role for activity modification.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'de-abirafeh-2020-sr',
    label: 'Abi-Rafeh 2020 (systematic review)',
    authorsOrOrg: 'Abi-Rafeh J, et al.',
    source: 'PubMed',
    year: 2020,
    type: 'systematic-review',
    url: 'https://pubmed.ncbi.nlm.nih.gov/32590652/',
    takeaway:
      'Systematic review of De Quervain management summarizing splinting, injection, and surgical outcomes.',
    verified: true,
    lastChecked: '2026-06-21',
  },
]

const moduleData: ConditionModule = {
  citations,
  condition: {
    id: 'de-quervain-tenosynovitis',
    slug: 'de-quervain-tenosynovitis',
    name: "De Quervain's Tenosynovitis",
    shortName: 'De Quervain’s',
    aka: [
      'De Quervain tenosynovitis',
      'De Quervain’s disease',
      'first dorsal compartment tenosynovitis',
      'radial styloid tenosynovitis',
      '“mommy thumb”',
      '“mother’s wrist”',
      '“gamer’s thumb”',
    ],
    region: 'wrist-hand',
    sportTags: ['golf', 'tennis', 'climbing', 'general'],
    careTier: 'pc-core',
    oneLiner:
      'Thumb-side wrist pain from the first dorsal compartment tendons, aggravated by lifting, gripping, pinching, and twisting.',
    overview:
      'De Quervain’s tenosynovitis is pain coming from the first dorsal compartment tendons at the thumb side of the wrist — mainly the abductor pollicis longus and extensor pollicis brevis. These thumb tendons run through a snug tunnel near the base of the thumb, and when they become irritated the area gets sore.\n\nIt often hurts with everyday loads that combine the thumb and wrist — lifting a child, gripping, pinching, or twisting open a jar. Repetitive thumb and wrist loading is the common thread, and postpartum care or repeated lifting are frequent triggers.\n\nWith good treatment, many people improve over a few weeks by resting the thumb, modifying activity, and gradually rebuilding pinch and grip strength. Persistent cases may need an injection.',
    tissue:
      'The first dorsal compartment tendons at the thumb side of the wrist — mainly abductor pollicis longus and extensor pollicis brevis — and their tendon sheath.',
    video: {
      videoId: '7jeEZUGqDNw',
      title: "De Quervain's Syndrome Stretches, aka Blackberry Thumb - Ask Doctor Jo",
      channel: 'AskDoctorJo',
      approved: true,
      note: 'Physician-curated demonstration video.',
    },
    anatomyDiagram: {
      key: 'anatomy-wrist-thumb',
      altText:
        'Thumb-side view of the wrist showing the first dorsal compartment tendons (abductor pollicis longus and extensor pollicis brevis) passing through their tunnel near the base of the thumb.',
      caption:
        'The first dorsal compartment tendons share a snug tunnel at the thumb side of the wrist.',
    },
    causes: [
      'Repetitive thumb and wrist loading',
      'Postpartum care (repeated lifting and carrying of an infant)',
      'Repeated lifting',
      'Gripping, pinching, or twisting motions such as opening a jar',
    ],
    riskFactors: [
      'New or increased repetitive thumb and wrist use',
      'Postpartum period',
      'Activities that combine gripping with thumb movement (golf, tennis, climbing)',
    ],
    symptoms: [
      'Radial (thumb-side) wrist pain',
      'Pain with thumb motion',
      'Tenderness over the first dorsal compartment',
      'Pain with lifting, gripping, pinching, or twisting open a jar',
    ],
    prognosis: {
      summary:
        'With good treatment, many people improve. Persistent cases may need an injection.',
      typicalTimeline:
        'Many improve over 2 to 8 weeks with rest, activity modification, and gradual strengthening.',
      encouragement:
        'Most thumb-side wrist pain settles with steady activity modification and a gradual return to gripping and pinching. When symptoms persist, an injection plus short immobilization is an effective next step.',
    },
    redFlags: [
      {
        text: 'Persistent swelling, catching, numbness, or failure of a splint-and-load program to help — see a clinician.',
        urgency: 'see-clinician',
      },
    ],
    selfCare: {
      dos: [
        'Rest the thumb and modify aggravating activities while symptoms are irritable.',
        'Do gentle thumb tendon glides to keep the tendons moving.',
        'Gradually rebuild pinch and grip strength as pain allows.',
        'Resume gripping gradually, keeping the thumb closer to the hand for heavy lifts early on.',
        'Use the pain-monitoring rule: mild discomfort up to about 3/10 during exercise is acceptable if it settles by the next morning.',
      ],
      donts: [
        'Don’t push through sharp or worsening thumb-side pain.',
        'Don’t spike back into heavy gripping, pinching, or twisting too soon.',
        'Don’t ignore persistent swelling, catching, or numbness — these warrant a clinician visit.',
        'Don’t rely on a wrist twist to generate force; keep the thumb in line with the palm early on.',
      ],
    },
    clinicalGoal:
      'Pain-controlled gripping and pinching with a durable return to thumb-loading activities.',
    hep: {
      overview:
        'A staged program: settle the irritable tendons with rest and gentle tendon glides, then build with thumb-abduction isometrics, and finally rebuild pinch and grip strength for your activities. Advance by meeting each phase’s exit criteria rather than by the calendar, and drop back a step if a phase flares you.',
      phases: [
        {
          id: 'de-quervain-tenosynovitis-phase-1',
          order: 1,
          title: 'Rest & Glide',
          summary:
            'Calm the irritable first-compartment tendons with relative rest and gentle tendon glides.',
          goal: 'Reduce day-to-day thumb-side pain and keep the tendons gliding without irritation.',
          durationGuidance: 'Typically 1–2 weeks',
          entryCriteria: [
            'New or flared thumb-side wrist pain',
            'Pain with thumb motion, gripping, or pinching',
          ],
          exitCriteria: [
            'Tenderness and pain with thumb motion are easing',
            'Gentle tendon glides feel comfortable',
          ],
          educationPoints: [
            'Thumb rest and activity modification are the foundation early on.',
            'Gentle tendon glides keep the tendons sliding without overloading them.',
            'Keep movements gentle — symptoms should ease after the set, not linger.',
          ],
          exercises: [
            {
              id: 'de-q-thumb-tendon-glide',
              name: 'Gentle thumb tendon glides',
              target:
                'First dorsal compartment tendons (abductor pollicis longus, extensor pollicis brevis)',
              purpose:
                'Keeps the irritated thumb tendons sliding smoothly through their sheath without heavy loading.',
              dose: { sets: 2, reps: '8–10', tempo: 'slow and smooth' },
              frequency: 'Daily',
              progression:
                'Increase the number of repetitions, then add thumb-abduction isometrics in Phase 2.',
              regression:
                'Reduce the range and repetitions; keep the motion small and pain-free.',
              formCues: [
                'Gentle motion — do not force into pain',
                'Move the thumb smoothly through its range',
                'Symptoms should ease after the set, not linger',
              ],
              painRule:
                'Mild discomfort up to ~3/10 that settles by the next morning; gentle motion only.',
              diagram: {
                key: 'thumb-tendon-glide',
                altText:
                  'Hand performing gentle thumb tendon glides, moving the thumb smoothly through its range.',
              },
            },
          ],
        },
        {
          id: 'de-quervain-tenosynovitis-phase-2',
          order: 2,
          title: 'Isometric Loading',
          summary:
            'Introduce thumb-abduction isometrics and progress toward light band resistance.',
          goal: 'Begin rebuilding tendon capacity with controlled isometric loading.',
          durationGuidance: 'Typically 2–4 weeks',
          entryCriteria: [
            'Thumb-side pain is settling with rest and glides',
            'Gentle tendon glides are comfortable',
          ],
          exitCriteria: [
            'Thumb-abduction isometrics are tolerated without next-day flare',
            'Ready to add pinch and grip strengthening',
          ],
          educationPoints: [
            'Isometric holds build strength without much movement of the irritable tendons.',
            'Keep the thumb in line with the palm and avoid twisting the wrist.',
            'Progress to band resistance once isometrics are comfortable.',
          ],
          exercises: [
            {
              id: 'de-q-thumb-abduction-isometric',
              name: 'Thumb abduction isometric',
              target:
                'Abductor pollicis longus and extensor pollicis brevis (first dorsal compartment)',
              purpose:
                'Builds early thumb strength with a static hold that loads the tendons without much movement.',
              dose: { sets: 5, holdSeconds: 20 },
              frequency: 'Daily',
              progression: 'Progress band resistance later.',
              regression: 'Regress lighter effort.',
              formCues: [
                'Thumb in line with palm',
                'No wrist twist',
                'Gentle pressure',
                'Relax shoulders',
              ],
              painRule:
                'Mild discomfort up to ~3/10 during the hold that settles by the next morning.',
              diagram: {
                key: 'thumb-tendon-glide',
                altText:
                  'Hand holding the thumb in a steady abducted position against light resistance, thumb in line with the palm.',
              },
            },
            {
              id: 'de-q-thumb-band-abduction',
              name: 'Resisted thumb abduction (band)',
              target:
                'Abductor pollicis longus and extensor pollicis brevis',
              purpose:
                'Adds light dynamic resistance once isometrics are comfortable, building tendon capacity.',
              dose: { sets: 3, reps: '10–15', tempo: 'slow and controlled' },
              frequency: 'Daily or every other day',
              progression:
                'Increase band tension or repetitions as tolerated.',
              regression:
                'Use a lighter band or fewer reps; return to isometric holds if irritable.',
              formCues: [
                'Thumb in line with the palm',
                'No wrist twist',
                'Control the return — do not let the band snap back',
              ],
              painRule:
                'Mild discomfort up to ~3/10 that settles by the next morning.',
              equipment: ['Light resistance band'],
              diagram: {
                key: 'thumb-tendon-glide',
                altText:
                  'Hand moving the thumb outward against a light resistance band.',
              },
            },
          ],
        },
        {
          id: 'de-quervain-tenosynovitis-phase-3',
          order: 3,
          title: 'Pinch & Grip',
          summary:
            'Rebuild pinch and grip strength and return to thumb-loading activities.',
          goal: 'Restore functional pinch and grip for daily tasks and sport.',
          durationGuidance: 'Typically 2–4 weeks',
          entryCriteria: [
            'Tolerating thumb-abduction isometrics and light band work without flare',
            'Comfortable with everyday light gripping',
          ],
          exitCriteria: [
            'Gripping, pinching, and twisting are near-normal',
            'Symptom triggers are modifiable and strength is stable',
          ],
          educationPoints: [
            'Resume gripping gradually rather than all at once.',
            'Keep the thumb closer to the hand for heavy lifts early on.',
            'Maintain a light strength habit to protect against recurrence.',
          ],
          exercises: [
            {
              id: 'de-q-grip-strengthening',
              name: 'Gradual grip strengthening',
              target: 'Grip (finger flexors and thumb)',
              purpose:
                'Rebuilds the gripping capacity that pain often reduces, preparing the hand for daily and sport loads.',
              dose: { sets: 3, reps: '10–15', holdSeconds: 5 },
              frequency: 'Daily or every other day',
              progression:
                'Increase squeeze resistance and hold time; progress toward sport-specific gripping.',
              regression: 'Use a softer ball or shorter holds.',
              formCues: [
                'Squeeze smoothly and release under control',
                'Keep the wrist in a neutral, comfortable position',
                'Stop if thumb-side pain sharpens',
              ],
              painRule:
                'Mild discomfort up to ~3/10 that settles by the next morning.',
              equipment: ['Soft ball or grip trainer'],
              diagram: {
                key: 'grip-squeeze',
                altText: 'Hand squeezing a soft ball to build grip strength.',
              },
            },
            {
              id: 'de-q-pinch-strengthening',
              name: 'Gradual pinch strengthening',
              target:
                'Thumb pinch (thenar muscles and first-compartment tendons)',
              purpose:
                'Restores pinch strength for tasks such as opening jars and lifting — the loads that commonly aggravate the tendons.',
              dose: { sets: 3, reps: '10–12', holdSeconds: 5 },
              frequency: 'Daily or every other day',
              progression:
                'Increase resistance gradually; for heavy lifts, keep the thumb closer to the hand at first.',
              regression: 'Use softer putty or reduce the hold time.',
              formCues: [
                'Pinch between thumb and fingers without twisting the wrist',
                'Keep the thumb supported, in line with the palm',
                'Build up load gradually',
              ],
              painRule:
                'Mild discomfort up to ~3/10 that settles by the next morning.',
              equipment: ['Therapy putty or a pinch trainer'],
              diagram: {
                key: 'thumb-tendon-glide',
                altText:
                  'Hand pinching therapy putty between the thumb and fingers.',
              },
            },
          ],
        },
      ],
    },
    evidence: {
      strength: 'moderate',
      bottomLine:
        'Splinting and activity change help, but injection plus short immobilization often has the strongest evidence when symptoms persist.',
      whatHelps: [
        'Corticosteroid injection plus short immobilization (strongest evidence when symptoms persist)',
        'Splinting and activity modification for milder cases',
        'Gentle tendon glides and gradual pinch and grip strengthening',
      ],
      whatsUncertain: [
        'Exercise-only packages have only limited supporting evidence compared with corticosteroid injection plus immobilization.',
        'The best self-management recipe — which loading and how much — is not firmly established.',
        'PRP shows only rarely/emerging support for this condition.',
      ],
      citationIds: [
        'de-challoumas-2023-jamano',
        'de-chong-2024-nma',
        'de-abirafeh-2020-sr',
      ],
    },
    procedures: [
      {
        procedureId: 'corticosteroid',
        relevance: 'commonly-discussed',
        evidenceNote: 'Commonly discussed and often effective.',
        citationIds: ['de-challoumas-2023-jamano', 'de-chong-2024-nma'],
      },
      {
        procedureId: 'prp',
        relevance: 'rarely',
        evidenceNote: 'Rarely/emerging.',
      },
      {
        procedureId: 'hyaluronic-acid',
        relevance: 'not-indicated',
        evidenceNote: 'Not indicated.',
      },
      {
        procedureId: 'shockwave',
        relevance: 'not-indicated',
        evidenceNote: 'ESWT: not a routine option for De Quervain’s.',
      },
      {
        procedureId: 'ultrasound-guided',
        relevance: 'selected-cases',
        evidenceNote:
          'Selected cases, possibly better with anatomic variation.',
      },
      {
        procedureId: 'tenotomy',
        relevance: 'not-indicated',
        evidenceNote: 'Percutaneous tenotomy: not indicated.',
      },
    ],
    returnToActivity: {
      criteria: [
        'Gripping is near-normal',
        'Pinching is near-normal',
        'Twisting motions are tolerated without flare',
      ],
      timelineGuidance:
        'Often 2 to 8 weeks with good treatment; varies with how irritable the tendons are and whether an injection is needed.',
      reinjuryPrevention: [
        'Resume gripping gradually',
        'Keep the thumb closer to the hand for heavy lifts early on',
        'Modify repetitive thumb and wrist tasks and keep a light strength habit',
      ],
    },
    faqs: [
      {
        q: 'How long until my thumb-side wrist pain settles?',
        a: 'With good treatment — resting the thumb, modifying activity, and gradually rebuilding strength — many people improve over about 2 to 8 weeks. Persistent cases may need an injection.',
        citationIds: ['de-abirafeh-2020-sr'],
      },
      {
        q: 'Do I need an injection?',
        a: 'Not always. Mild cases often start with splinting and activity change. When symptoms persist, a corticosteroid injection plus short immobilization has among the strongest evidence and is often effective.',
        citationIds: ['de-challoumas-2023-jamano', 'de-chong-2024-nma'],
      },
      {
        q: 'When should I see a clinician?',
        a: 'See a clinician if you have persistent swelling, catching, or numbness, or if a splint-and-load program has not helped.',
      },
    ],
    relatedConditionIds: ['trigger-finger', 'wrist-sprain-tfcc'],
    review: {
      status: 'physician-review-pending',
      contentVersion: '1.0.0',
    },
  },
}

export default moduleData
