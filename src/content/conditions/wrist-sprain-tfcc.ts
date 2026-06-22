import type { Citation, ConditionModule } from '../types'

/**
 * Wrist Sprain / TFCC Irritation.
 * Transcribed faithfully from the physician deep-research draft (p.21–22).
 * Ships physician-review-pending for Dr. Swisher's sign-off. Citations are the
 * real URLs listed in the source's own Citations list for this condition.
 */

const citations: Citation[] = [
  {
    id: 'wrist-pace-2024-review',
    label: 'Pace 2024 (TFCC review)',
    authorsOrOrg: 'Pace V, et al.',
    source: 'Review',
    year: 2024,
    type: 'narrative-review',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10921179/',
    takeaway:
      'Reviews triangular fibrocartilage complex injury, where immobilization plus graded rehab is the standard first-line approach for many cases.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'wrist-choi-2024-natural-history',
    label: 'Choi 2024 (natural-history systematic review)',
    authorsOrOrg: 'Choi SI, et al.',
    source: 'Systematic review',
    year: 2024,
    type: 'systematic-review',
    url: 'https://pubmed.ncbi.nlm.nih.gov/39619455/',
    takeaway:
      'Systematic review of the natural history of TFCC injury indicating a favorable course for some traumatic TFCC subsets.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'wrist-jawed-2020-review',
    label: 'Jawed 2020 (review)',
    authorsOrOrg: 'Jawed A, et al.',
    source: 'Review',
    year: 2020,
    type: 'narrative-review',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7384326/',
    takeaway:
      'Review supporting conservative management and graded return for stable, non-fracture wrist and TFCC injuries.',
    verified: true,
    lastChecked: '2026-06-21',
  },
]

const moduleData: ConditionModule = {
  citations,
  condition: {
    id: 'wrist-sprain-tfcc',
    slug: 'wrist-sprain-tfcc',
    name: 'Wrist Sprain / TFCC Irritation',
    shortName: 'Wrist Sprain / TFCC',
    aka: [
      'wrist sprain',
      'TFCC sprain',
      'TFCC injury',
      'triangular fibrocartilage complex injury',
      'ulnar-sided wrist pain',
    ],
    region: 'wrist-hand',
    sportTags: ['golf', 'tennis', 'basketball'],
    careTier: 'pc-referral-trigger',
    oneLiner:
      'Overstretching of the wrist ligaments — often the little-finger-side TFCC — that usually settles with brace/rest and graded rehab.',
    overview:
      'A wrist sprain means overstretching of the wrist ligaments. When the pain is on the little-finger side of the wrist, the injured structure is often the triangular fibrocartilage complex (TFCC), which helps stabilize the ulnar side of the wrist and the distal radioulnar joint.\n\nMany simple sprains improve over a few weeks with a period of brace/rest followed by gentle motion and strengthening. Confirmed traumatic TFCC tears can take longer to settle, but the natural history is favorable for many cases.',
    tissue:
      'The wrist ligaments and, on the little-finger side, the triangular fibrocartilage complex (TFCC) — the cartilage-and-ligament structure that stabilizes the ulnar wrist and distal radioulnar joint.',
    video: {
      videoId: 'H4ds4CJbKdc',
      title: 'TFCC Tear / Repair Stretches & Exercises (Triangular Fibrocartilage Complex) - Ask Doctor Jo',
      channel: 'AskDoctorJo',
      approved: true,
      note: 'Physician-curated demonstration video.',
    },
    anatomyDiagram: {
      key: 'anatomy-wrist-thumb',
      altText:
        'Diagram of the wrist showing the bones and ligaments, highlighting the little-finger (ulnar) side where the triangular fibrocartilage complex sits.',
      caption: 'The TFCC stabilizes the little-finger side of the wrist.',
    },
    causes: [
      'A fall on an outstretched hand',
      'A twisting injury of the wrist',
      'Racquet sports',
      'Repetitive ulnar (little-finger-side) loading',
    ],
    riskFactors: [
      'Sports with forceful or repeated wrist twisting (golf, tennis)',
      'Falls and impact during play (basketball)',
      'Repetitive gripping and ulnar-sided loading',
      'Prior wrist injury or instability',
    ],
    symptoms: [
      'Ulnar-sided (little-finger-side) wrist pain',
      'Pain with rotation (turning the palm up and down)',
      'Pain in a push-up or weight-bearing position',
      'Clicking on the little-finger side in some patients',
    ],
    prognosis: {
      summary:
        'Many simple wrist sprains improve with a short period of brace/rest and a graded return to motion, grip, and loading. The natural history is favorable for some traumatic TFCC subsets.',
      typicalTimeline:
        'Many simple sprains improve over 4 to 8 weeks; confirmed traumatic TFCC tears may take longer.',
      encouragement:
        'A short period of protection followed by steady, graded loading is what most stable wrist sprains need to settle.',
    },
    redFlags: [
      {
        text: 'Major trauma to the wrist.',
        urgency: 'urgent',
      },
      {
        text: 'Visible deformity of the wrist.',
        urgency: 'urgent',
      },
      {
        text: 'Loss of motion at the wrist.',
        urgency: 'urgent',
      },
      {
        text: 'Distal radioulnar instability (the forearm bones feel unstable near the wrist).',
        urgency: 'urgent',
      },
      {
        text: 'Persistent clicking in the wrist.',
        urgency: 'see-clinician',
      },
      {
        text: 'Grip weakness.',
        urgency: 'see-clinician',
      },
      {
        text: 'Failure to improve.',
        urgency: 'see-clinician',
      },
    ],
    selfCare: {
      dos: [
        'Protect the wrist early with a brace and relative rest while it settles.',
        'Keep the fingers and forearm moving early to avoid stiffness.',
        'Progress to gentle pronation/supination (turning the palm up and down) and grip as comfort allows.',
        'Use the pain-monitoring rule: keep loading "mild" — mild pain up to about 3/10 that settles by the next morning.',
      ],
      donts: [
        'Don’t push through sharp pain with rotation or weight-bearing.',
        'Don’t return to forceful gripping, push-ups, or wrist-twisting sport before motion and grip are near-normal.',
        'Don’t ignore persistent clicking, grip weakness, or a wrist that is not improving — have it checked.',
        'Don’t immobilize endlessly; move from protection to graded rehab once the irritable phase eases.',
      ],
    },
    clinicalGoal:
      'A pain-controlled, graded return of wrist motion, grip, and forearm rotation for sport and daily loading',
    hep: {
      overview:
        'A simple two-phase plan: protect and keep the fingers/forearm moving early, then add gentle pronation/supination and grip strengthening. Progress by comfort and the pain rule, not the calendar. If a step flares the wrist, drop back.',
      phases: [
        {
          id: 'wrist-sprain-tfcc-phase-1',
          order: 1,
          title: 'Protect & Keep Moving',
          summary:
            'Early brace/rest with gentle finger and forearm motion to settle symptoms without getting stiff.',
          goal: 'Calm the irritable wrist while preserving finger and forearm movement.',
          durationGuidance: 'Typically 1–2 weeks',
          entryCriteria: [
            'New or flared ulnar-sided wrist pain',
            'Pain with rotation or weight-bearing',
          ],
          exitCriteria: [
            'Resting and day-to-day pain is easing',
            'Comfortable moving the fingers and forearm through range',
          ],
          educationPoints: [
            'Early protection (a brace and relative rest) lets the irritable tissue settle.',
            'Keep the fingers and forearm moving so the wrist does not get stiff.',
            'Major trauma red flags — deformity, locked motion, or an unstable-feeling forearm — need urgent review.',
          ],
          exercises: [
            {
              id: 'wrist-sprain-tfcc-finger-tendon-glides',
              name: 'Finger tendon glides',
              target: 'Finger flexor and extensor tendons',
              purpose:
                'Keeps the fingers moving early so the hand does not stiffen during the protected phase.',
              dose: { sets: 2, reps: '5–10', holdSeconds: 3 },
              frequency: '2–3 times per day',
              progression:
                'Increase repetitions, then add gentle wrist motion as comfort allows.',
              regression: 'Move through a smaller, pain-free range.',
              formCues: [
                'Move slowly and smoothly through each finger position',
                'Keep the wrist supported and relaxed',
                'Stay within a comfortable, pain-free range',
              ],
              painRule:
                'Mild pain up to about 3/10 that settles by the next morning is acceptable.',
              diagram: {
                key: 'thumb-tendon-glide',
                altText:
                  'Hand moving the fingers through a sequence of bending positions to keep the tendons gliding.',
              },
            },
            {
              id: 'wrist-sprain-tfcc-gentle-forearm-rotation',
              name: 'Gentle forearm rotation (active range)',
              target: 'Forearm pronators and supinators',
              purpose:
                'Maintains the palm-up/palm-down motion of the forearm without loading the irritable wrist.',
              dose: { sets: 2, reps: '8–10 each direction' },
              frequency: '2–3 times per day',
              progression:
                'Increase range and repetitions; progress to the loaded version in Phase 2.',
              regression: 'Keep the elbow supported and reduce the range.',
              formCues: [
                'Keep the elbow tucked at your side',
                'Turn the palm slowly up, then down',
                'Move only as far as is comfortable',
              ],
              painRule:
                'Mild pain up to about 3/10 that settles by the next morning is acceptable.',
              diagram: {
                key: 'anatomy-wrist-thumb',
                altText:
                  'Forearm rotating to turn the palm up and then down, with the elbow held at the side.',
              },
            },
          ],
        },
        {
          id: 'wrist-sprain-tfcc-phase-2',
          order: 2,
          title: 'Restore Rotation & Grip',
          summary:
            'Add gentle pronation/supination strengthening and grip work to rebuild loading tolerance.',
          goal: 'Restore forearm rotation strength and grip toward near-normal for return to activity.',
          durationGuidance: 'Typically 2–6 weeks',
          entryCriteria: [
            'Resting pain has eased',
            'Comfortable with active finger and forearm motion',
          ],
          exitCriteria: [
            'Gripping, weight-bearing through the hands, and forearm rotation are near-normal',
            'No flare from grip or rotation loading the next morning',
          ],
          educationPoints: [
            'Progress load gradually and keep symptoms within the mild pain rule.',
            'Build forearm rotation strength before returning to wrist-twisting sport.',
            'Return when gripping, weight-bearing, and rotation are near-normal — not by the calendar.',
          ],
          exercises: [
            {
              id: 'wrist-sprain-tfcc-forearm-pron-sup',
              name: 'Forearm pronation-supination with elbow at side',
              aka: ['Forearm rotation strengthening', 'Hammer rotations'],
              target: 'Forearm pronators and supinators',
              purpose:
                'Rebuilds the rotation strength needed for gripping and racquet/club sports.',
              dose: { sets: 3, reps: '10' },
              frequency: 'Daily',
              progression: 'Progress light hammer resistance.',
              regression: 'Regress active-assisted; reduce the number of reps.',
              formCues: [
                'Move from forearm',
                'Keep elbow tucked',
                'Pain stays mild',
                'Slow turn',
              ],
              painRule:
                'Pain rule: default — mild pain up to ~3/10 that settles by next morning.',
              equipment: ['Optional light hammer or weighted stick for progression'],
              diagram: {
                key: 'anatomy-wrist-thumb',
                altText:
                  'Person rotating the forearm to turn the palm up and down with the elbow held against the side, holding a light hammer for resistance.',
              },
            },
            {
              id: 'wrist-sprain-tfcc-grip-strengthening',
              name: 'Grip strengthening',
              target: 'Finger flexors and forearm grip muscles',
              purpose:
                'Rebuilds grip strength so gripping is smooth and pain-free for return to sport.',
              dose: { sets: 3, reps: '10', holdSeconds: 3 },
              frequency: 'Daily or every other day',
              progression: 'Increase the hold or resistance as comfort allows.',
              regression: 'Use a softer ball or lighter squeeze and shorter holds.',
              formCues: [
                'Squeeze smoothly and release under control',
                'Keep the wrist in a neutral, comfortable position',
                'Stop if gripping is sharply painful',
              ],
              painRule:
                'Mild pain up to about 3/10 that settles by the next morning is acceptable.',
              equipment: ['Soft ball or grip trainer'],
              diagram: {
                key: 'grip-squeeze',
                altText: 'Hand squeezing a soft ball to build grip strength.',
              },
            },
          ],
        },
      ],
    },
    evidence: {
      strength: 'limited',
      bottomLine:
        'Immobilization plus graded rehab is standard first-line; natural history is favorable for some traumatic TFCC subsets.',
      whatHelps: [
        'A period of brace/immobilization followed by graded rehabilitation',
        'Early finger and forearm motion to prevent stiffness',
        'Progressive pronation/supination and grip strengthening',
        'Returning to load once gripping, weight-bearing, and rotation are near-normal',
      ],
      whatsUncertain: [
        'How much benefit specific exercises add over protection alone is not well established for this condition.',
        'Which traumatic TFCC tears will settle with conservative care versus need a procedure is not always clear up front.',
        'The optimal duration of immobilization before starting graded rehab is not firmly defined.',
      ],
      citationIds: [
        'wrist-pace-2024-review',
        'wrist-choi-2024-natural-history',
        'wrist-jawed-2020-review',
      ],
    },
    procedures: [
      {
        procedureId: 'corticosteroid',
        relevance: 'selected-cases',
        evidenceNote:
          'Selected cases for persistent inflammatory pain, not routine acute care.',
      },
      {
        procedureId: 'prp',
        relevance: 'rarely',
        evidenceNote: 'Rarely used for this condition.',
      },
      {
        procedureId: 'hyaluronic-acid',
        relevance: 'not-indicated',
        evidenceNote: 'Not indicated.',
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
        relevance: 'not-indicated',
        evidenceNote: 'Percutaneous tenotomy: not indicated.',
      },
    ],
    returnToActivity: {
      criteria: [
        'Gripping is near-normal',
        'Weight-bearing through the hands is near-normal',
        'Forearm rotation is near-normal',
      ],
      timelineGuidance:
        'Many simple sprains return over about 4–8 weeks; confirmed traumatic TFCC tears may take longer, and timing varies.',
      reinjuryPrevention: [
        'Build forearm rotation and grip strength before resuming wrist-twisting sport',
        'Progress sport load gradually rather than spiking it',
        'Respect ulnar-sided pain, clicking, or grip weakness and adjust early',
      ],
    },
    faqs: [
      {
        q: 'What is the TFCC?',
        a: 'The triangular fibrocartilage complex is a structure on the little-finger side of the wrist that helps stabilize the ulnar wrist and the distal radioulnar joint. It is a common source of little-finger-side wrist pain after a fall, twist, or repetitive loading.',
        citationIds: ['wrist-pace-2024-review'],
      },
      {
        q: 'How long until my wrist sprain feels better?',
        a: 'Many simple sprains improve over about 4 to 8 weeks with a short period of brace/rest and graded rehab. Confirmed traumatic TFCC tears can take longer to settle.',
        citationIds: ['wrist-choi-2024-natural-history'],
      },
      {
        q: 'When should I get my wrist checked by a clinician?',
        a: 'Seek urgent care for major trauma, visible deformity, loss of motion, or a forearm that feels unstable near the wrist. See a clinician for persistent clicking, grip weakness, or a wrist that is not improving.',
        citationIds: ['wrist-jawed-2020-review'],
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
