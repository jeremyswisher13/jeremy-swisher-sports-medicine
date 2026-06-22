import type { Citation, ConditionModule } from '../types'

/**
 * Knee Osteoarthritis. Transcribed faithfully from the physician-authored
 * deep-research source (Knee osteoarthritis section). Citations are the real
 * URLs listed in that section. Ships physician-review-pending for Dr. Swisher's
 * sign-off.
 */

const citations: Citation[] = [
  {
    id: 'aaos-2021-knee-oa',
    label: 'AAOS Knee OA CPG (2021)',
    authorsOrOrg: 'American Academy of Orthopaedic Surgeons (AAOS)',
    source: 'AAOS Clinical Practice Guideline: Management of Osteoarthritis of the Knee',
    year: 2021,
    type: 'guideline',
    url: 'https://www.aaos.org/globalassets/quality-and-practice-resources/osteoarthritis-of-the-knee/oak3cpg.pdf',
    takeaway:
      'Supports exercise, education, weight loss when relevant, and topical/oral NSAIDs in appropriate patients as core management of knee osteoarthritis.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'kolasinski-2020-acr-oa',
    label: 'ACR/AF OA Guideline (2020)',
    authorsOrOrg: 'Kolasinski SL, et al.',
    source: 'Arthritis & Rheumatology (ACR/Arthritis Foundation guideline)',
    year: 2020,
    type: 'guideline',
    url: 'https://pubmed.ncbi.nlm.nih.gov/31908149/',
    takeaway:
      'Strongly recommends exercise, weight management, and self-management for knee OA; injectable options carry more conditional or mixed recommendations.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'nice-2022-ng226-oa',
    label: 'NICE NG226 Osteoarthritis (2022)',
    authorsOrOrg: 'National Institute for Health and Care Excellence (NICE)',
    source: 'NICE Guideline NG226: Osteoarthritis in over 16s',
    year: 2022,
    type: 'guideline',
    url: 'https://www.nice.org.uk/guidance/ng226',
    takeaway:
      'Centers therapeutic exercise and weight management for osteoarthritis and advises caution with several injectable interventions.',
    verified: true,
    lastChecked: '2026-06-21',
  },
]

const moduleData: ConditionModule = {
  citations,
  condition: {
    id: 'knee-osteoarthritis',
    slug: 'knee-osteoarthritis',
    name: 'Knee Osteoarthritis',
    shortName: 'Knee OA',
    aka: [
      'knee OA',
      'knee arthritis',
      'osteoarthritis of the knee',
      'degenerative joint disease of the knee',
      'wear-and-tear arthritis',
    ],
    region: 'knee',
    sportTags: ['running', 'general'],
    careTier: 'pc-core',
    oneLiner:
      'A chronic change in the knee joint that causes activity-related pain and stiffness, and that responds well to exercise, strengthening, and load management.',
    overview:
      'Knee osteoarthritis (OA) is a chronic change in the knee joint cartilage, bone, and synovium (the joint lining). It often causes pain with walking, stairs, squatting, and getting up from chairs.\n\nEven when imaging shows OA, exercise remains one of the best treatments. OA is long-term, but symptoms can improve substantially with exercise, weight management, and a sensible medication strategy. The goal is to move more, strengthen regularly, and address body-weight load when it is relevant — not to "rest the knee" until it feels better.',
    tissue:
      'The knee joint — its cartilage, the underlying bone, and the synovium (joint lining).',
    video: {
      videoId: 'sLCahUJl8jk',
      title: 'Knee Osteoarthritis (OA) Rehab (Education | Myths | Stretching & Strengthening Exercises)',
      channel: 'E3 Rehab',
      channelUrl: 'https://www.youtube.com/@E3Rehab',
      approved: false,
      note: 'Re-curated to an evidence-based rehab source; pending physician review.',
    },
    anatomyDiagram: {
      key: 'anatomy-knee',
      altText:
        'Front view of the knee joint showing the thighbone, shinbone, kneecap, and the cartilage surfaces that wear in osteoarthritis.',
      caption: 'Knee OA involves the joint cartilage, bone, and synovium (joint lining).',
    },
    causes: [
      'Age-related changes in the knee joint',
      'Prior knee injury (for example, a past ligament or meniscus injury)',
      'Excess body weight, which increases load through the joint',
      'Biomechanics and alignment that concentrate load on the joint',
    ],
    riskFactors: [
      'Older age',
      'Prior knee injury',
      'Excess body weight',
      'Biomechanical factors and joint alignment',
    ],
    symptoms: [
      'Activity-related pain with walking, stairs, squatting, and getting up from chairs',
      'Stiffness in the knee',
      'Occasional swelling',
      'Reduced walking tolerance',
    ],
    prognosis: {
      summary:
        'OA is a long-term condition, but symptoms can improve substantially with exercise, weight management, and a sensible medication strategy.',
      typicalTimeline:
        'Improvement is gradual over weeks to months of consistent exercise and load management, with continued gains as strength builds.',
      encouragement:
        'Even when imaging shows OA, exercise is one of the best treatments. Moving more and strengthening regularly often helps far more than rest.',
    },
    redFlags: [
      {
        text: 'A hot, red, swollen knee with fever — this can signal a joint infection and needs urgent evaluation.',
        urgency: 'urgent',
      },
      {
        text: 'Inability to bear weight after trauma.',
        urgency: 'urgent',
      },
      {
        text: 'A large effusion (significant swelling) in the knee.',
        urgency: 'see-clinician',
      },
      {
        text: 'Night pain.',
        urgency: 'see-clinician',
      },
      {
        text: 'Rapidly worsening deformity or function of the knee.',
        urgency: 'see-clinician',
      },
    ],
    selfCare: {
      dos: [
        'Keep moving — low-impact activity is usually encouraged, not avoided.',
        'Strengthen the muscles around the knee regularly; this is the backbone of treatment.',
        'Address body-weight load if it is relevant for you — weight management supports the joint.',
        'Use the pain-monitoring rule: discomfort up to about 3/10 during exercise is acceptable if it settles by the next morning.',
      ],
      donts: [
        'Don’t rest the knee until pain disappears — prolonged avoidance tends to weaken the leg and worsen symptoms.',
        'Don’t assume imaging severity dictates your outcome; exercise still helps.',
        'Don’t push through sharp pain or pain that climbs day to day.',
        'Don’t rely on a single injection to fix OA; exercise and load management stay central.',
      ],
    },
    clinicalGoal:
      'More confident, less painful walking, stairs, and daily activity through regular strengthening and load management',
    hep: {
      overview:
        'A staged program built around walking/cycling and progressive lower-limb strengthening. Each phase has a clear goal and exit criteria — advance when you meet them, not by the calendar. The same movements carry through; the load and challenge increase. Pain rule: mild discomfort up to about 3/10 during exercise is fine if it settles by the next morning.',
      phases: [
        {
          id: 'knee-osteoarthritis-phase-1',
          order: 1,
          title: 'Move & Settle',
          summary:
            'Re-establish comfortable low-impact movement and begin gentle knee strengthening.',
          goal: 'Keep the knee moving and reduce day-to-day pain and stiffness.',
          durationGuidance: 'Typically 1–2 weeks',
          entryCriteria: [
            'New or flared knee OA pain',
            'Pain with walking, stairs, or getting up from chairs',
          ],
          exitCriteria: [
            'Comfortable with daily walking or cycling',
            'Can perform sit-to-stand with pain ≤3/10 that settles overnight',
          ],
          educationPoints: [
            'Low-impact activity (walking, cycling) is encouraged, not avoided.',
            'Some discomfort during exercise is OK if it settles by the next morning.',
            'Movement and gentle loading help cartilage and the surrounding muscles.',
          ],
          exercises: [
            {
              id: 'koa-walk-cycle',
              name: 'Walking or cycling',
              target: 'Whole-leg conditioning and knee joint mobility',
              purpose:
                'Low-impact aerobic activity keeps the knee moving and supports overall joint health.',
              dose: { notes: 'Start with comfortable bouts (e.g., 10–20 minutes) and build gradually' },
              frequency: 'Most days',
              progression: 'Increase duration first, then pace or distance.',
              regression: 'Shorten the session or break it into shorter walks.',
              formCues: [
                'Choose a comfortable, even surface or stationary bike',
                'Keep a relaxed, steady rhythm',
                'Warm up gently before picking up the pace',
              ],
              painRule: 'Discomfort up to ~3/10 that settles by the next morning.',
              equipment: ['Comfortable shoes or a bicycle/stationary bike'],
              diagram: {
                key: 'anatomy-knee',
                altText:
                  'Illustration of the knee joint during low-impact walking or cycling.',
              },
            },
            {
              id: 'koa-sit-to-stand',
              name: 'Sit-to-stand',
              target: 'Quadriceps and hip/leg muscles around the knee',
              purpose:
                'Builds functional leg strength for getting up from chairs, stairs, and daily activity.',
              dose: { sets: 3, reps: '8–12' },
              frequency: 'Every other day',
              progression:
                'Use a lower seat, slow the tempo, or hold a weight; progress as with other strengthening.',
              regression: 'Use a higher seat or push off lightly with the hands.',
              formCues: [
                'Sit back into the chair, then stand tall',
                'Keep knees tracking over the feet, not caving in',
                'Hold steady tension and move under control',
              ],
              painRule: 'Discomfort up to ~3/10 that settles by the next morning.',
              equipment: ['A sturdy chair'],
              diagram: {
                key: 'wall-sit',
                altText:
                  'Person rising from a chair to standing and lowering back down under control.',
              },
            },
          ],
        },
        {
          id: 'knee-osteoarthritis-phase-2',
          order: 2,
          title: 'Build Strength',
          summary:
            'Progress targeted knee strengthening to support the joint and improve tolerance.',
          goal: 'Rebuild quadriceps and lower-limb strength around the knee.',
          durationGuidance: 'Typically 3–6 weeks',
          entryCriteria: [
            'Comfortable with walking/cycling and sit-to-stand',
            'Day-to-day pain and stiffness easing',
          ],
          exitCriteria: [
            'Stronger, more confident on stairs and standing up',
            'Tolerating added strengthening without a next-day flare',
          ],
          educationPoints: [
            'Strengthening regularly is the backbone of treatment.',
            'Train the knee through a comfortable range; cues and progressions are the same as earlier (sit back, torso tall, knees over feet, steady tension).',
            'It is OK to keep walking and cycling while you strengthen.',
          ],
          exercises: [
            {
              id: 'koa-knee-extension',
              name: 'Knee extension (sitting or with a band)',
              aka: ['seated knee extension', 'banded knee extension'],
              target: 'Quadriceps',
              purpose:
                'Strengthens the quadriceps, which directly support and offload the knee joint.',
              dose: { sets: 3, reps: '8–12', tempo: 'controlled' },
              frequency: 'Every other day',
              progression: 'Add a resistance band or light ankle weight, or slow the tempo.',
              regression: 'Reduce the range or remove resistance.',
              formCues: [
                'Sit tall and straighten the knee smoothly',
                'Squeeze the thigh at the top',
                'Lower under control — no swinging',
              ],
              painRule: 'Discomfort up to ~3/10 that settles by the next morning.',
              equipment: ['A chair', 'Optional resistance band or light ankle weight'],
              diagram: {
                key: 'terminal-knee-extension',
                altText:
                  'Person seated, straightening the knee against light resistance.',
              },
            },
            {
              id: 'koa-mini-squat',
              name: 'Mini-squat',
              target: 'Quadriceps, glutes, and hip/knee muscles',
              purpose:
                'Builds functional strength through a comfortable, controlled squat range.',
              dose: { sets: 3, reps: '8–12', tempo: '3s down, controlled up' },
              frequency: 'Every other day',
              progression: 'Squat a little deeper or add light load as tolerated.',
              regression: 'Reduce the depth or hold a support for balance.',
              formCues: [
                'Sit back as if reaching for a chair',
                'Keep torso tall and knees tracking over the feet',
                'Move with steady tension, no bouncing',
              ],
              painRule: 'Discomfort up to ~3/10 that settles by the next morning.',
              equipment: ['Optional chair or counter for balance'],
              diagram: {
                key: 'wall-sit',
                altText: 'Person performing a shallow mini-squat with good knee alignment.',
              },
            },
          ],
        },
        {
          id: 'knee-osteoarthritis-phase-3',
          order: 3,
          title: 'Build Capacity & Return',
          summary:
            'Add step-ups and higher-demand loading, and prepare for fuller activity or running.',
          goal: 'Tolerate stairs, step-ups, and (if desired) graded return to running.',
          durationGuidance: 'Typically 4–8 weeks',
          entryCriteria: [
            'Comfortable with knee extension and mini-squats',
            'No next-day flare from strengthening',
          ],
          exitCriteria: [
            'Confident on stairs and step-ups without flare',
            'Heavy strengthening tolerated, ready to layer in jumping/running if that is a goal',
          ],
          educationPoints: [
            'Jumping and running are added only after heavy strengthening is tolerated and landing pain stays mild.',
            'Keep walking, cycling, and strengthening going as you progress.',
            'Address body-weight load if relevant — it lowers the demand on the joint.',
          ],
          exercises: [
            {
              id: 'koa-step-up',
              name: 'Step-up',
              target: 'Quadriceps, glutes, and single-leg control',
              purpose:
                'Builds the single-leg strength needed for stairs and confident daily movement.',
              dose: { sets: 3, reps: '8–12 each leg', tempo: 'controlled' },
              frequency: 'Every other day',
              progression: 'Use a higher step, slow the tempo, or hold a weight.',
              regression: 'Use a lower step or hold a rail for balance.',
              formCues: [
                'Drive up through the whole foot',
                'Keep the knee tracking over the foot, not caving in',
                'Lower slowly and under control',
              ],
              painRule: 'Discomfort up to ~3/10 that settles by the next morning.',
              equipment: ['A sturdy step', 'Optional rail for balance'],
              diagram: {
                key: 'step-down',
                altText: 'Person stepping up onto a step with controlled knee tracking.',
              },
            },
            {
              id: 'koa-return-loading',
              name: 'Graded jumping / running return',
              target: 'Whole-leg loading tolerance',
              purpose:
                'Reintroduces higher-impact activity once strength supports it and landing pain stays mild.',
              dose: { notes: 'Begin with brief, low-impact bouts and build gradually' },
              frequency: '2–3x/week, building gradually',
              progression: 'Add volume, then intensity, only when symptoms stay stable.',
              regression: 'Return to walking/cycling and strengthening if symptoms flare.',
              formCues: [
                'Begin only after heavy strengthening is tolerated',
                'Keep landings soft and controlled',
                'Check how the knee feels the morning after',
              ],
              painRule:
                'Add jumping/running only if landing pain stays mild and settles by the next morning.',
              cautions: [
                'Do not start jumping or running until strengthening is tolerated without a next-day flare.',
              ],
              diagram: {
                key: 'anatomy-knee',
                altText: 'Illustration of the knee during a controlled landing.',
              },
            },
          ],
        },
      ],
    },
    evidence: {
      strength: 'strong',
      bottomLine:
        'Move more, strengthen regularly, and address body-weight load if relevant. Exercise is the backbone of care for knee OA.',
      whatHelps: [
        'Exercise and progressive strengthening of the muscles around the knee',
        'Education and self-management',
        'Weight loss when body-weight load is relevant',
        'Topical or oral NSAIDs in appropriate patients',
      ],
      whatsUncertain: [
        'PRP wording intentionally reflects controversy — the evidence for PRP in knee OA is genuinely mixed.',
        'Hyaluronic acid recommendations differ between guidelines, ranging from mixed to not recommended by some.',
        'How much any individual benefits from injections versus exercise alone is hard to predict.',
      ],
      citationIds: ['aaos-2021-knee-oa', 'kolasinski-2020-acr-oa', 'nice-2022-ng226-oa'],
    },
    procedures: [
      {
        procedureId: 'corticosteroid',
        relevance: 'commonly-discussed',
        evidenceNote: 'Commonly discussed; short-term benefit possible.',
        citationIds: ['kolasinski-2020-acr-oa'],
      },
      {
        procedureId: 'prp',
        relevance: 'selected-cases',
        evidenceNote: 'Selected cases; evidence is genuinely mixed.',
      },
      {
        procedureId: 'hyaluronic-acid',
        relevance: 'not-indicated',
        evidenceNote: 'Mixed to not recommended by some guidelines.',
        citationIds: ['kolasinski-2020-acr-oa'],
      },
      {
        procedureId: 'shockwave',
        relevance: 'not-indicated',
        evidenceNote: 'Not routine for knee osteoarthritis.',
      },
      {
        procedureId: 'ultrasound-guided',
        relevance: 'selected-cases',
        evidenceNote: 'Selected cases (for example, to improve injection accuracy).',
      },
      {
        procedureId: 'tenotomy',
        relevance: 'not-indicated',
        evidenceNote: 'Not indicated for knee osteoarthritis.',
      },
    ],
    returnToActivity: {
      criteria: [
        'Heavy strengthening tolerated without a next-day flare',
        'Landing pain stays mild when impact is introduced',
        'Confident with daily walking, stairs, and standing from chairs',
      ],
      timelineGuidance:
        'Low-impact activity is usually encouraged from the start; higher-impact return (jumping, running) follows once strengthening is tolerated and landing pain stays mild. Highly individual.',
      reinjuryPrevention: [
        'Keep strengthening regularly to support the joint',
        'Keep weight-management supports going if body-weight load is relevant',
        'Progress impact gradually and respect early warning symptoms',
      ],
    },
    faqs: [
      {
        q: 'If imaging shows arthritis, does that mean exercise won’t help?',
        a: 'No. Even when imaging shows OA, exercise remains one of the best treatments. Strengthening and staying active often help far more than rest.',
        citationIds: ['aaos-2021-knee-oa'],
      },
      {
        q: 'Should I avoid activity to protect my knee?',
        a: 'Generally no. Low-impact activity such as walking and cycling is usually encouraged rather than avoided. Moving more and strengthening regularly is the goal.',
        citationIds: ['nice-2022-ng226-oa'],
      },
      {
        q: 'Will an injection fix my knee OA?',
        a: 'Injections are sometimes discussed and can offer short-term relief in selected cases, but exercise and weight-management remain the backbone of care. The evidence for options like PRP and hyaluronic acid is mixed.',
        citationIds: ['kolasinski-2020-acr-oa'],
      },
    ],
    relatedConditionIds: ['patellofemoral-pain', 'patellar-tendinopathy'],
    review: {
      status: 'physician-review-pending',
      contentVersion: '1.0.0',
    },
  },
}

export default moduleData
