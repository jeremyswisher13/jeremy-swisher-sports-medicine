import type { Citation, ConditionModule } from '../types'

/**
 * Transcribed from the physician-authored deep-research source for Hip
 * Osteoarthritis. Citations are taken verbatim from the PDF's own Citations
 * list for this condition. All clinical content ships physician-review-pending
 * for Dr. Swisher's sign-off.
 */

const citations: Citation[] = [
  {
    id: 'hip-oa-acr-2020',
    label: 'ACR/AF OA guideline (2020)',
    authorsOrOrg: 'Kolasinski SL, et al.',
    source: 'Arthritis Care & Research',
    year: 2020,
    type: 'guideline',
    url: 'https://pubmed.ncbi.nlm.nih.gov/31908149/',
    takeaway:
      'ACR/Arthritis Foundation guideline strongly recommends exercise and, where relevant, weight loss as core management for hip osteoarthritis.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'hip-oa-nice-ng226-2022',
    label: 'NICE NG226 OA guideline (2022)',
    authorsOrOrg: 'NICE',
    source: 'National Institute for Health and Care Excellence',
    year: 2022,
    type: 'guideline',
    url: 'https://www.nice.org.uk/guidance/ng226',
    takeaway:
      'NICE guideline positions therapeutic exercise and weight management as core treatment for osteoarthritis and advises against routine hyaluronic acid injection.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'hip-oa-oarsi-2019',
    label: 'OARSI OA guidelines (2019)',
    authorsOrOrg: 'Bannuru RR, et al.',
    source: 'OARSI guidelines',
    year: 2019,
    type: 'guideline',
    url: 'https://pubmed.ncbi.nlm.nih.gov/31278997/',
    takeaway:
      'OARSI guidelines recommend exercise and weight management as core care and note that pharmacologic choices vary by patient and joint.',
    verified: true,
    lastChecked: '2026-06-21',
  },
]

const moduleData: ConditionModule = {
  citations,
  condition: {
    id: 'hip-osteoarthritis',
    slug: 'hip-osteoarthritis',
    name: 'Hip Osteoarthritis',
    shortName: 'Hip OA',
    aka: [
      'hip OA',
      'hip arthritis',
      'degenerative joint disease of the hip',
      'osteoarthritis of the hip',
      'wear-and-tear hip',
    ],
    region: 'hip-pelvis',
    sportTags: ['golf', 'running', 'general'],
    careTier: 'pc-referral-trigger',
    oneLiner:
      'Wear-and-repair change in the hip joint that causes deep groin pain and stiffness — and responds well to exercise, weight management, and a sensible medication plan.',
    overview:
      'Hip osteoarthritis (OA) is wear-and-repair change in the hip joint cartilage, bone, and synovium (the joint lining). It commonly causes deep groin pain, stiffness, and reduced walking tolerance.\n\nEven with OA, exercise is still one of the most important treatments. The condition is chronic, but symptoms often improve meaningfully with exercise, weight management, and a sensible medication strategy.',
    tissue:
      'The hip joint cartilage, bone, and synovium (joint lining).',
    video: {
      videoId: 'tQNk6mpFsww',
      title: 'Hip Arthritis Stretches & Exercises - Ask Doctor Jo',
      channel: 'AskDoctorJo',
      approved: true,
      note: 'Physician-curated demonstration video.',
    },
    anatomyDiagram: {
      key: 'anatomy-hip',
      altText:
        'Diagram of the hip joint showing the ball-and-socket joint with cartilage lining, bone, and the synovial joint lining.',
      caption:
        'Hip OA involves change in the joint cartilage, bone, and synovium.',
    },
    causes: [
      'Age-related wear-and-repair change in the joint',
      'Prior hip injury',
      'Dysplasia or shape issues of the hip joint',
      'Weight-related load on the joint',
    ],
    riskFactors: [
      'Older age',
      'Previous hip injury',
      'Hip dysplasia or abnormal joint shape',
      'Higher body weight (greater joint load)',
    ],
    symptoms: [
      'Deep groin pain',
      'Stiffness',
      'Trouble with shoes/socks',
      'Difficulty walking',
      'Difficulty getting up from chairs',
    ],
    prognosis: {
      summary:
        'OA is chronic, but symptoms often improve meaningfully with exercise, weight management, and a sensible medication strategy.',
      typicalTimeline:
        'Management is ongoing rather than a fixed cure timeline; many people notice meaningful improvement over weeks to a few months of consistent exercise and load management.',
      encouragement:
        'Even with OA, exercise is still one of the most important treatments — movement and strength are core care, not optional add-ons.',
    },
    redFlags: [
      {
        text: 'Inability to bear weight after trauma.',
        urgency: 'urgent',
      },
      {
        text: 'Fever with a hot joint.',
        urgency: 'urgent',
      },
      {
        text: 'Rapid major loss of function.',
        urgency: 'see-clinician',
      },
      {
        text: 'Night pain.',
        urgency: 'see-clinician',
      },
      {
        text: 'Atypical pain location.',
        urgency: 'see-clinician',
      },
    ],
    selfCare: {
      dos: [
        'Keep moving — walking and cycling help maintain hip tolerance and overall fitness.',
        'Do your strengthening exercises consistently; movement and strength are the core treatment.',
        'Work on weight management when relevant — reducing load on the hip can meaningfully ease symptoms.',
        'Use the pain rule: discomfort up to about 3/10 during exercise is acceptable if it settles by the next morning.',
        'Pace return to walking, hiking, and exercise based on symptoms.',
      ],
      donts: [
        "Don't treat exercise as optional — it is one of the most important treatments for hip OA.",
        "Don't rely only on injections or medications as a substitute for movement and strength work.",
        "Don't push through sharp, worsening, or next-day-increasing pain.",
        "Don't ignore new inability to bear weight after trauma, fever with a hot joint, or rapid loss of function — these need evaluation.",
      ],
    },
    clinicalGoal:
      'Restore pain-controlled walking tolerance and daily function through exercise, strength, and weight management',
    hep: {
      overview:
        'A simple, progressive program built around walking/cycling, sit-to-stand, bridging, hip abduction, and a supported split squat. The aim is to rebuild strength and walking tolerance while keeping symptoms within a tolerable range. Use the pain rule: mild discomfort (up to ~3/10) during exercise is fine if it settles by the next morning. Progress load and difficulty as tolerated; ease off if a session flares you.',
      phases: [
        {
          id: 'hip-osteoarthritis-phase-1',
          order: 1,
          title: 'Settle & Move',
          summary:
            'Calm symptoms and keep the hip moving with gentle aerobic activity and an introduction to functional strength.',
          goal: 'Maintain comfortable movement and reintroduce light hip loading.',
          durationGuidance: 'Typically 1–2 weeks',
          entryCriteria: [
            'New or flared hip OA symptoms',
            'Pain limits walking, stairs, or rising from chairs',
          ],
          exitCriteria: [
            'Walking and cycling are comfortable within the pain rule',
            'Can perform sit-to-stand and bridges with pain ≤3/10 that settles overnight',
          ],
          educationPoints: [
            'Exercise is a core treatment for hip OA, not an optional add-on.',
            'Mild discomfort during exercise is OK if it settles by the next morning.',
            'Keep moving within comfort — walking and cycling help maintain tolerance.',
          ],
          exercises: [
            {
              id: 'hipoa-walking-cycling',
              name: 'Walking / cycling',
              target: 'Hip joint and overall aerobic conditioning',
              purpose:
                'Maintains hip mobility, walking tolerance, and general fitness with low-impact aerobic load.',
              dose: { notes: 'e.g., 10–30 minutes at a comfortable pace' },
              frequency: 'Most days',
              progression:
                'Gradually add time, then gentle hills or light resistance, as symptoms allow.',
              regression:
                'Shorten the session, slow the pace, or break it into shorter bouts.',
              formCues: [
                'Choose a comfortable, conversational pace',
                'Keep movement smooth and even',
                'Stop or shorten if pain builds beyond the pain rule',
              ],
              painRule:
                'Mild discomfort up to ~3/10 during activity is acceptable if it settles by the next morning.',
              equipment: ['Comfortable shoes', 'Optional stationary or road bike'],
              diagram: {
                key: 'anatomy-hip',
                altText:
                  'Person walking and cycling for low-impact hip conditioning.',
              },
            },
            {
              id: 'hipoa-sit-to-stand',
              name: 'Sit-to-stand',
              target: 'Hip and thigh muscles (quadriceps and glutes)',
              purpose:
                'Builds the functional strength needed for rising from chairs and daily activities.',
              dose: { sets: 3, reps: '8–12', tempo: 'controlled' },
              frequency: 'Every other day',
              progression:
                'Progress to a lower chair or add load (hold a weight at the chest).',
              regression:
                'Use a higher chair or push through the armrests for assistance.',
              formCues: [
                'Hips back as you sit down',
                'Push evenly through both feet',
                'Control down — no flopping into the chair',
                'Keep breathing throughout',
              ],
              painRule: 'Pain rule: default (mild pain ≤3/10 that settles by morning).',
              equipment: ['A sturdy chair'],
              diagram: {
                key: 'wall-sit',
                altText:
                  'Person rising from and lowering into a chair using the hips and thighs.',
              },
            },
            {
              id: 'hipoa-bridge',
              name: 'Glute bridge',
              target: 'Gluteal muscles and hip extensors',
              purpose:
                'Strengthens the hip extensors that support standing, walking, and stair climbing.',
              dose: { sets: 3, reps: '10–12', holdSeconds: 2 },
              frequency: 'Every other day',
              progression:
                'Progress toward single-leg bridges or add a light weight across the hips.',
              regression:
                'Reduce the range or hold time, or shorten the lever by keeping feet closer.',
              formCues: [
                'Push evenly through both feet',
                'Lift the hips until the body is in a straight line',
                'Control the lower down',
                'Keep breathing throughout',
              ],
              painRule: 'Pain rule: default (mild pain ≤3/10 that settles by morning).',
              equipment: ['A mat or comfortable surface'],
              diagram: {
                key: 'glute-bridge',
                altText:
                  'Person lying on their back lifting the hips into a bridge position.',
              },
            },
          ],
        },
        {
          id: 'hip-osteoarthritis-phase-2',
          order: 2,
          title: 'Build Strength',
          summary:
            'Add focused hip-abduction strengthening and progress functional loading.',
          goal: 'Rebuild hip strength and control around the joint.',
          durationGuidance: 'Typically 3–6 weeks',
          entryCriteria: [
            'Comfortable with sit-to-stand and bridges',
            'Walking and cycling tolerated within the pain rule',
          ],
          exitCriteria: [
            'Can perform hip abduction with good control and pain ≤3/10',
            'Tolerating progressed sit-to-stand load without next-day flare',
          ],
          educationPoints: [
            'Strong hip muscles help offload and support the arthritic joint.',
            'Progress load gradually — lower chair or added weight for sit-to-stand.',
            'Some discomfort is OK if it settles overnight; ease off if it builds week to week.',
          ],
          exercises: [
            {
              id: 'hipoa-hip-abduction',
              name: 'Hip abduction',
              target: 'Gluteus medius and hip abductors',
              purpose:
                'Strengthens the side-hip muscles that stabilize the pelvis during walking and single-leg stance.',
              dose: { sets: 3, reps: '10–15 each side', tempo: 'controlled' },
              frequency: 'Every other day',
              progression:
                'Progress from lying to standing, then add a resistance band.',
              regression:
                'Reduce range or reps, or perform with support for balance.',
              formCues: [
                'Keep the movement slow and controlled',
                'Avoid rolling the hips back',
                'Lead with the heel when side-lying',
                'Keep breathing throughout',
              ],
              painRule: 'Pain rule: default (mild pain ≤3/10 that settles by morning).',
              equipment: ['Optional resistance band', 'A mat'],
              diagram: {
                key: 'side-lying-hip-abduction',
                altText:
                  'Person lifting the top leg out to the side to strengthen the hip abductors.',
              },
            },
            {
              id: 'hipoa-sit-to-stand-loaded',
              name: 'Progressed sit-to-stand',
              target: 'Hip and thigh muscles (quadriceps and glutes)',
              purpose:
                'Increases functional leg strength for stairs, hills, and getting up from low surfaces.',
              dose: { sets: 3, reps: '8–12', tempo: 'controlled' },
              frequency: 'Every other day',
              progression:
                'Progress to a lower chair or hold more weight at the chest.',
              regression:
                'Return to a higher chair or use the armrests for assistance.',
              formCues: [
                'Hips back as you sit down',
                'Push evenly through both feet',
                'Control down',
                'Keep breathing throughout',
              ],
              painRule: 'Pain rule: default (mild pain ≤3/10 that settles by morning).',
              equipment: ['A sturdy chair', 'Optional weight to hold'],
              diagram: {
                key: 'wall-sit',
                altText:
                  'Person rising from a low chair while holding a weight at the chest.',
              },
            },
          ],
        },
        {
          id: 'hip-osteoarthritis-phase-3',
          order: 3,
          title: 'Function & Return',
          summary:
            'Add the supported split squat and pace a return to walking, hiking, and exercise.',
          goal: 'Restore single-leg control and walking/hiking tolerance for daily life and sport.',
          durationGuidance: 'Typically 4–8 weeks, then ongoing',
          entryCriteria: [
            'Good control with hip abduction and progressed sit-to-stand',
            'No next-day flare from strengthening',
          ],
          exitCriteria: [
            'Can perform a supported split squat with control and pain ≤3/10',
            'Walking, hiking, and desired exercise tolerated with stable symptoms',
          ],
          educationPoints: [
            'Single-leg strength carries over to walking, stairs, and hills.',
            'Return to walking, hiking, and exercise via symptom-guided pacing.',
            'Maintain strength and weight-management supports for the long term.',
          ],
          exercises: [
            {
              id: 'hipoa-supported-split-squat',
              name: 'Supported split squat',
              target: 'Quadriceps, glutes, and hip stabilizers',
              purpose:
                'Builds single-leg strength and control for stairs, hills, and uneven ground.',
              dose: { sets: 3, reps: '6–10 each side', tempo: 'controlled' },
              frequency: 'Every other day',
              progression:
                'Reduce hand support, increase depth, or add a held weight.',
              regression:
                'Use more support, reduce depth, or stay in a comfortable range.',
              formCues: [
                'Hold a rail or counter for support',
                'Keep the front knee tracking over the foot',
                'Lower under control',
                'Keep breathing throughout',
              ],
              painRule: 'Pain rule: default (mild pain ≤3/10 that settles by morning).',
              cautions: [
                'Use support as needed; this is a balance and strength challenge.',
              ],
              equipment: ['A rail or sturdy surface for support', 'Optional weight'],
              diagram: {
                key: 'step-down',
                altText:
                  'Person performing a supported split squat with one foot forward, holding a rail for balance.',
              },
            },
            {
              id: 'hipoa-walk-hike-return',
              name: 'Walking / hiking return ramp',
              target: 'Whole-leg and hip loading tolerance',
              purpose:
                'Reintroduces walking, hiking, and exercise in controlled, symptom-guided steps.',
              dose: { notes: 'Build distance and terrain gradually across sessions' },
              frequency: '3x/week, building gradually',
              progression:
                'Add distance, then gentle hills or uneven terrain, then desired exercise volume.',
              regression:
                'Shorten the route, choose flatter ground, or add rest breaks.',
              formCues: [
                'Advance only when next-day symptoms are stable',
                'Use symptom-guided pacing',
                'Track how the hip feels the morning after',
              ],
              painRule:
                'Mild discomfort up to ~3/10 during activity is acceptable if it settles by the next morning.',
              equipment: ['Supportive footwear'],
              diagram: {
                key: 'anatomy-hip',
                altText: 'Person walking and hiking as part of a graded return.',
              },
            },
          ],
        },
      ],
    },
    evidence: {
      strength: 'strong',
      bottomLine:
        'Movement and strength are core treatment, not optional add-ons.',
      whatHelps: [
        'Education and therapeutic exercise (strongly supported)',
        'Weight loss when relevant (strongly supported)',
        'Progressive strengthening and walking/cycling for the hip',
        'A sensible, individualized medication strategy',
      ],
      whatsUncertain: [
        'Pharmacologic choices vary by guideline, so the best medication strategy is individualized rather than one-size-fits-all.',
        'Injection options for hip OA show mixed evidence — corticosteroid offers usually short-term relief and PRP evidence is mixed.',
        'Hyaluronic acid is not recommended by NICE and is overall mixed for hip OA.',
      ],
      citationIds: [
        'hip-oa-acr-2020',
        'hip-oa-nice-ng226-2022',
        'hip-oa-oarsi-2019',
      ],
    },
    procedures: [
      {
        procedureId: 'corticosteroid',
        relevance: 'commonly-discussed',
        evidenceNote:
          'Commonly discussed in selected cases, usually for short-term relief.',
      },
      {
        procedureId: 'prp',
        relevance: 'selected-cases',
        evidenceNote: 'Selected cases; evidence mixed.',
      },
      {
        procedureId: 'hyaluronic-acid',
        relevance: 'not-indicated',
        evidenceNote: 'Not recommended by NICE and overall mixed.',
        citationIds: ['hip-oa-nice-ng226-2022'],
      },
      {
        procedureId: 'shockwave',
        relevance: 'not-indicated',
        evidenceNote: 'ESWT: not routine.',
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
        'Comfortable, symptom-stable walking and hiking',
        'Restored strength around the hip',
        'Confident with desired exercise within the pain rule',
      ],
      timelineGuidance:
        'Return to walking, hiking, and exercise via symptom-guided pacing; this is individual and ongoing rather than a fixed endpoint.',
      reinjuryPrevention: [
        'Maintain strength work for the hip',
        'Keep up weight-management supports',
        'Pace activity by symptoms and adjust when the hip flares',
      ],
    },
    faqs: [
      {
        q: 'I have arthritis in my hip — should I avoid exercise?',
        a: 'No. Even with OA, exercise is one of the most important treatments. Movement and strength are core care, not optional add-ons, and they often improve pain and walking tolerance.',
        citationIds: ['hip-oa-acr-2020'],
      },
      {
        q: 'Will losing weight actually help my hip?',
        a: 'When relevant, yes. Weight management reduces load on the joint and is strongly recommended alongside exercise for hip OA.',
        citationIds: ['hip-oa-acr-2020', 'hip-oa-oarsi-2019'],
      },
      {
        q: 'Should I get an injection for my hip OA?',
        a: 'Injections are discussed in selected cases. A corticosteroid injection may give short-term relief, PRP evidence is mixed, and hyaluronic acid is not recommended by NICE. Movement and strength remain the foundation of care.',
        citationIds: ['hip-oa-nice-ng226-2022'],
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
