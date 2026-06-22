import type { Citation, ConditionModule } from '../types'

/**
 * Golfer's Elbow (Medial Epicondylitis). Transcribed from the physician-authored
 * deep-research draft (Golfer's elbow section). Citations are the real URLs listed
 * in that section. Ships physician-review-pending for Dr. Swisher's sign-off.
 */

const citations: Citation[] = [
  {
    id: 'golfers-reece-2025-statpearls',
    label: 'Reece StatPearls (2025)',
    authorsOrOrg: 'Reece CL, et al.',
    source: 'StatPearls',
    year: 2025,
    type: 'narrative-review',
    url: 'https://pubmed.ncbi.nlm.nih.gov/32491792/',
    takeaway:
      'Overview of medial epicondylitis: a load-related tendinopathy of the common flexor-pronator origin that frequently overlaps with ulnar-nerve and ligament problems, so the differential is broad.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'golfers-difilippo-2022-overview',
    label: 'Di Filippo overview of systematic reviews (2022)',
    authorsOrOrg: 'Di Filippo L, et al.',
    source: 'PubMed (overview of systematic reviews)',
    year: 2022,
    type: 'systematic-review',
    url: 'https://pubmed.ncbi.nlm.nih.gov/35742152/',
    takeaway:
      'Overview of systematic reviews on epicondylitis management; conservative loading-based care mirrors broader tendinopathy principles, while direct high-quality evidence for the medial side is sparse.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'golfers-see-2026-eccentric',
    label: 'See systematic review of eccentric exercise (2026)',
    authorsOrOrg: 'See ZH, et al.',
    source: 'PubMed (systematic review)',
    year: 2026,
    type: 'systematic-review',
    url: 'https://pubmed.ncbi.nlm.nih.gov/41887339/',
    takeaway:
      'Systematic review of eccentric exercise for elbow tendinopathy supports progressive eccentric/loading work as a core rehab strategy.',
    verified: true,
    lastChecked: '2026-06-21',
  },
]

const moduleData: ConditionModule = {
  citations,
  condition: {
    id: 'golfers-elbow',
    slug: 'golfers-elbow',
    name: "Golfer's Elbow (Medial Epicondylitis)",
    shortName: "Golfer's Elbow",
    aka: [
      'medial epicondylitis',
      'medial epicondylalgia',
      'medial epicondyle tendinopathy',
      'flexor-pronator tendinopathy',
      "pitcher's elbow",
      'inner elbow pain',
    ],
    region: 'elbow',
    sportTags: ['golf', 'throwing', 'lifting'],
    careTier: 'pc-core',
    oneLiner:
      'Load-related pain at the inside of the elbow from the common flexor-pronator tendon that usually responds to progressive forearm loading.',
    overview:
      "Golfer's elbow is pain coming from the common flexor-pronator tendon at the inside of the elbow — the spot where the muscles that bend your wrist and rotate your forearm attach to the bony bump (medial epicondyle). It typically builds up from repeated gripping, wrist flexion, pronation, throwing, climbing, or manual tasks rather than a single injury.\n\nBecause this part of the elbow sits close to the ulnar nerve and the inner-elbow ligaments, the inside of the elbow can hurt for more than one reason. It may coexist with ulnar-nerve irritation or throwing-related ligament problems, so the diagnosis deserves a careful look.\n\nThe good news is that, like other tendon problems, it usually settles with a patient, progressive loading program. Recovery often takes a few months, and \"golfer's elbow\" is typically a load-related tendon issue rather than a permanently inflamed or damaged tendon.",
    tissue:
      'The common flexor-pronator tendon at the medial epicondyle (the wrist-flexor and forearm-pronator muscles where they attach to the inner elbow).',
    anatomyDiagram: {
      key: 'anatomy-elbow',
      altText:
        'Inside view of the elbow showing the common flexor-pronator tendon attaching at the medial epicondyle, near the ulnar nerve.',
      caption:
        'The flexor-pronator tendon attaches at the inner elbow (medial epicondyle).',
    },
    causes: [
      'Repetitive gripping and manual tasks',
      'Repeated wrist flexion and forearm pronation',
      'Throwing sports',
      'Climbing',
      'Golf and similar load through the inner elbow',
    ],
    riskFactors: [
      'High-volume gripping, throwing, or forearm-loading activity',
      'Forearm or grip weakness relative to demand',
      'A sudden increase in load or training volume',
      'Activities that combine wrist flexion with pronation',
    ],
    symptoms: [
      'Pain at the inside of the elbow (inner-elbow pain)',
      'Tenderness right at the medial epicondyle',
      'Pain with resisted wrist flexion and forearm pronation',
      'Aggravated by gripping and repetitive forearm tasks',
    ],
    prognosis: {
      summary:
        'Most cases improve with a consistent forearm-loading program. Like other tendinopathies, progress is measured over weeks rather than days, and the evidence base is thinner than for tennis elbow.',
      typicalTimeline: 'Recovery often takes 6 to 12+ weeks.',
      encouragement:
        '"Golfer\'s elbow" is usually a load-related tendon problem, not a permanently inflamed tendon. Steady, progressive loading is what rebuilds capacity.',
    },
    redFlags: [
      {
        text: 'Numbness or weakness in the ring and small fingers (possible ulnar-nerve involvement).',
        urgency: 'urgent',
      },
      {
        text: 'Throwing instability (a sense the elbow gives way or is unstable with throwing).',
        urgency: 'urgent',
      },
      {
        text: 'Trauma to the elbow.',
        urgency: 'urgent',
      },
      {
        text: 'Persistent pain, or concern for ulnar collateral ligament (UCL) or cubital tunnel overlap.',
        urgency: 'see-clinician',
      },
    ],
    selfCare: {
      dos: [
        'Reduce the aggravating load (heavy gripping, repetitive wrist flexion/pronation, throwing volume) rather than stopping everything.',
        'Do your forearm-loading exercises consistently — this is the treatment, not an add-on.',
        'Use the pain rule: discomfort up to about 3/10 during exercise is acceptable if it settles by the next morning.',
        'Build load and forearm strength back gradually as symptoms allow.',
      ],
      donts: [
        "Don't push through sharp, worsening, or next-day-increasing pain.",
        "Don't suddenly spike gripping, throwing, or lifting volume.",
        "Don't ignore numbness/tingling in the ring and small fingers — that points to the nerve, not just the tendon.",
        "Don't rely on rest alone — tendons generally do poorly with prolonged unloading.",
      ],
    },
    clinicalGoal:
      'Pain-controlled gripping and forearm load with a durable return to golf, throwing, and lifting',
    hep: {
      overview:
        'A staged forearm-loading program that mirrors tendinopathy loading principles: settle the tendon with isometrics, build strength with eccentric/loaded wrist flexion and pronation and grip endurance, then a gradual return to throwing and gripping. Move on when you meet each phase\'s exit criteria, not by the calendar. Pain rule: default — mild pain up to about 3/10 during exercise is OK if it settles by the next morning.',
      phases: [
        {
          id: 'golfers-elbow-phase-1',
          order: 1,
          title: 'Settle & Isometrics',
          summary:
            'Calm the irritable tendon and begin gentle, controlled loading with isometric wrist flexion.',
          goal: 'Reduce inner-elbow pain and reintroduce the tendon to load without flare.',
          durationGuidance: 'Typically 1–2 weeks',
          entryCriteria: [
            'New or flared inner-elbow pain',
            'Pain with gripping or resisted wrist flexion/pronation',
          ],
          exitCriteria: [
            'Day-to-day pain is easing',
            'Isometric wrist flexion holds are comfortable (pain ≤3/10 that settles overnight)',
          ],
          educationPoints: [
            'Some discomfort during loading is OK if it settles by the next morning.',
            'Isometric holds can reduce pain and start strengthening with little movement.',
            'Cut the aggravating load (gripping, throwing) without resting completely.',
          ],
          exercises: [
            {
              id: 'golfers-iso-wrist-flexion',
              name: 'Isometric wrist flexion',
              target: 'Common flexor-pronator tendon at the medial epicondyle',
              purpose:
                'Builds early strength and can reduce pain without much wrist movement.',
              dose: { sets: 5, holdSeconds: 30 },
              frequency: 'Daily',
              progression:
                'Increase the hold time, then the load, then progress toward eccentric wrist flexion.',
              regression: 'Reduce the load or hold time; support the forearm fully.',
              formCues: [
                'Forearm supported on a table, palm up',
                'Press the hand gently up against light resistance and hold',
                'Smooth, steady effort — no jerking',
                'No shoulder shrug',
              ],
              painRule: 'Aim for pain ≤3/10 during the hold.',
              equipment: ['A table for support', 'Light dumbbell or resistance band'],
              diagram: {
                key: 'wrist-flexor-stretch',
                altText:
                  'Forearm resting palm-up on a table while the wrist holds a flexed position against light resistance.',
              },
            },
            {
              id: 'golfers-flexor-stretch',
              name: 'Gentle wrist flexor stretch',
              target: 'Wrist flexor and pronator muscles',
              purpose:
                'Eases tightness around the inner elbow and prepares the tissue for loading.',
              dose: { sets: 3, holdSeconds: 30 },
              frequency: 'Daily',
              progression: 'Hold a little longer or straighten the elbow further as comfort allows.',
              regression: 'Bend the elbow slightly to reduce the stretch.',
              formCues: [
                'Arm out straight, palm up',
                'Gently pull the fingers and hand back toward the floor',
                'Feel a mild stretch in the forearm, not the elbow joint',
              ],
              painRule: 'Mild stretch only — no sharp inner-elbow pain.',
              diagram: {
                key: 'wrist-flexor-stretch',
                altText:
                  'Person stretching the wrist flexors with the arm extended and the palm facing up.',
              },
            },
          ],
        },
        {
          id: 'golfers-elbow-phase-2',
          order: 2,
          title: 'Build Strength',
          summary:
            'Eccentric wrist flexion and forearm pronation loading to rebuild tendon capacity.',
          goal: 'Rebuild flexor-pronator strength with controlled, progressive loading.',
          durationGuidance: 'Typically 3–6 weeks',
          entryCriteria: [
            'Comfortable with isometric wrist flexion holds',
            'Day-to-day inner-elbow pain easing',
          ],
          exitCriteria: [
            'Can do eccentric wrist flexion and pronation with good control and pain ≤3/10',
            'Tolerating heavier loading without a next-day flare',
          ],
          educationPoints: [
            'Slow, controlled lowering matters more than heavy weight at first.',
            'Progress weight slowly; regress back to isometrics if it flares.',
            'Keep the forearm supported and avoid shrugging the shoulder.',
          ],
          exercises: [
            {
              id: 'golfers-eccentric-wrist-flexion',
              name: 'Eccentric wrist flexion',
              target: 'Common flexor-pronator tendon (eccentric loading)',
              purpose:
                'Loads the flexor-pronator tendon through the lowering phase to drive adaptation.',
              dose: { sets: 3, reps: '12', tempo: 'slow lower' },
              frequency: 'Every other day',
              progression: 'Progress the weight slowly as control improves.',
              regression: 'Regress to isometric wrist flexion holds.',
              formCues: [
                'Forearm supported, palm up',
                'Slow lower',
                'No shoulder shrug',
                'Pain stays mild',
              ],
              painRule: 'Pain rule: default — mild pain up to ~3/10 that settles by next morning.',
              equipment: ['Light dumbbell', 'A table or bench for forearm support'],
              diagram: {
                key: 'eccentric-wrist-flexion',
                altText:
                  'Forearm supported palm-up while a light dumbbell is lowered slowly through wrist extension.',
              },
            },
            {
              id: 'golfers-eccentric-pronation',
              name: 'Eccentric forearm pronation',
              target: 'Pronator muscles of the flexor-pronator group',
              purpose:
                "Adds controlled pronation loading, a key movement that aggravates golfer's elbow.",
              dose: { sets: 3, reps: '12', tempo: 'slow return' },
              frequency: 'Every other day',
              progression: 'Increase the lever (hold further down a hammer or weighted bar) slowly.',
              regression: 'Shorten the lever or reduce the weight; return to isometrics if irritable.',
              formCues: [
                'Forearm supported, elbow bent ~90°',
                'Rotate the palm down, then control the return slowly',
                'Keep the wrist neutral',
                'No shoulder shrug',
              ],
              painRule: 'Pain rule: default — mild pain up to ~3/10 that settles by next morning.',
              equipment: ['Hammer or weighted bar'],
              diagram: {
                key: 'eccentric-wrist-flexion',
                altText:
                  'Forearm supported while the hand rotates the palm down and controls the return with a weighted lever.',
              },
            },
            {
              id: 'golfers-grip-endurance',
              name: 'Grip endurance',
              target: 'Forearm flexor muscles and grip',
              purpose:
                'Builds grip endurance so daily gripping and sport load become tolerable.',
              dose: { sets: 3, reps: '10–15', holdSeconds: 5 },
              frequency: '3x/week',
              progression: 'Increase the squeeze time or resistance gradually.',
              regression: 'Use a softer ball or fewer reps.',
              formCues: [
                'Squeeze a soft ball or grip trainer',
                'Steady, controlled squeeze and release',
                'Keep the forearm relaxed between reps',
              ],
              painRule: 'Pain rule: default — mild pain up to ~3/10 that settles by next morning.',
              equipment: ['Soft ball or grip trainer'],
              diagram: {
                key: 'grip-squeeze',
                altText: 'Hand squeezing a soft ball to build grip endurance.',
              },
            },
          ],
        },
        {
          id: 'golfers-elbow-phase-3',
          order: 3,
          title: 'Return to Gripping & Throwing',
          summary:
            'Gradual return to throwing, gripping, and sport-specific load while maintaining strength.',
          goal: 'Return to gripping, throwing, and lifting without a next-day symptom flare.',
          durationGuidance: 'Varies; typically a few weeks, longer for throwing athletes',
          entryCriteria: [
            'Eccentric wrist flexion and pronation tolerated without flare',
            'Grip endurance improving and near-normal grip strength',
          ],
          exitCriteria: [
            'No pain-limited gripping during daily tasks',
            'Near-normal grip strength and progressive practice volume tolerated',
          ],
          educationPoints: [
            'Build practice and throwing volume gradually with load pacing.',
            'Keep up forearm strength work as you add sport load.',
            'Respect early warning soreness and adjust volume rather than pushing through.',
          ],
          exercises: [
            {
              id: 'golfers-return-throwing-ramp',
              name: 'Graded gripping / throwing return',
              target: 'Whole-arm loading tolerance for sport',
              purpose:
                'Reintroduces throwing, gripping, and sport-specific load in controlled, progressive steps.',
              dose: {
                notes:
                  'Build practice volume gradually across sessions (e.g., short, easy sessions first)',
              },
              frequency: '2–3x/week, building gradually',
              progression:
                'Add volume, then intensity, then sport-specific drills as symptoms stay stable.',
              regression: 'Shorten the session, lower intensity, or step back to strength work.',
              formCues: [
                'Warm up the forearm first',
                'Advance only when next-day symptoms are stable',
                'Track how the inner elbow feels the morning after',
              ],
              painRule: 'Pain rule: default — mild pain up to ~3/10 that settles by next morning.',
              diagram: {
                key: 'anatomy-elbow',
                altText: 'Person performing a controlled throwing or gripping motion.',
              },
            },
            {
              id: 'golfers-maintenance-forearm',
              name: 'Maintenance forearm strength',
              target: 'Flexor-pronator group and grip',
              purpose: 'Protects the gains and reduces recurrence risk once back to sport.',
              dose: { sets: 3, reps: '10–12' },
              frequency: '1–2x/week, ongoing',
              progression: 'Keep the load challenging as sport volume returns.',
              regression: 'Reduce to lighter weight or bodyweight if busy or sore.',
              formCues: [
                'Full, controlled range',
                'Train both wrist flexion and pronation',
                'No shoulder shrug',
              ],
              painRule: 'Pain rule: default — mild pain up to ~3/10 that settles by next morning.',
              equipment: ['Light dumbbell or grip trainer'],
              diagram: {
                key: 'eccentric-wrist-flexion',
                altText:
                  'Person performing a maintenance wrist flexion exercise with a light dumbbell.',
              },
            },
          ],
        },
      ],
    },
    evidence: {
      strength: 'limited',
      bottomLine:
        'Rehab usually mirrors tendinopathy loading principles, but direct high-quality evidence is sparse.',
      whatHelps: [
        'Progressive forearm loading — isometric, then eccentric wrist flexion and forearm pronation',
        'Grip-endurance work to rebuild day-to-day and sport tolerance',
        'Reducing aggravating gripping/throwing load while continuing to load the tendon',
        'A gradual, paced return to gripping and throwing',
      ],
      whatsUncertain: [
        'Direct high-quality evidence for the medial side is sparse, and the evidence is thinner than for tennis elbow.',
        'The medial elbow pain differential is broad — symptoms can reflect ulnar-nerve or UCL/cubital-tunnel problems rather than pure tendinopathy.',
        "The single best loading recipe (specific exercise, dose, and frequency) for golfer's elbow is not well established.",
      ],
      citationIds: [
        'golfers-reece-2025-statpearls',
        'golfers-difilippo-2022-overview',
        'golfers-see-2026-eccentric',
      ],
    },
    procedures: [
      {
        procedureId: 'corticosteroid',
        relevance: 'commonly-discussed',
        evidenceNote: 'Commonly discussed, but long-term value questionable.',
      },
      {
        procedureId: 'prp',
        relevance: 'selected-cases',
        evidenceNote: 'Selected cases, still uncertain.',
      },
      {
        procedureId: 'hyaluronic-acid',
        relevance: 'rarely',
        evidenceNote: 'Rarely used for this condition.',
      },
      {
        procedureId: 'shockwave',
        relevance: 'selected-cases',
        evidenceNote: 'ESWT: selected cases / uncertain.',
      },
      {
        procedureId: 'ultrasound-guided',
        relevance: 'selected-cases',
        evidenceNote: 'Ultrasound-guided injection: selected cases.',
      },
      {
        procedureId: 'tenotomy',
        relevance: 'selected-cases',
        evidenceNote: 'Percutaneous tenotomy: selected cases.',
      },
    ],
    returnToActivity: {
      criteria: [
        'No pain-limited gripping during daily tasks',
        'Near-normal grip strength',
        'Gripping and resisted wrist flexion/pronation near symmetric side to side',
        'Progressive practice volume tolerated without flare',
      ],
      timelineGuidance:
        'Recovery often takes 6 to 12+ weeks and is highly individual; throwing athletes may need longer.',
      reinjuryPrevention: [
        'Keep up forearm strength',
        'Pace grip load and training volume as you build back',
        'Respect early warning soreness and adjust rather than pushing through',
      ],
    },
    faqs: [
      {
        q: "Is golfer's elbow the same as a permanently inflamed tendon?",
        a: '"Golfer\'s elbow" is usually a load-related tendon problem of the flexor-pronator tendon, not a permanently inflamed or damaged tendon. It typically responds to progressive forearm loading.',
        citationIds: ['golfers-reece-2025-statpearls'],
      },
      {
        q: 'How long does it take to recover?',
        a: 'Recovery often takes 6 to 12+ weeks of consistent loading, though it varies and throwing athletes may take longer.',
        citationIds: ['golfers-difilippo-2022-overview'],
      },
      {
        q: 'Why does my doctor want to check the nerve and ligament too?',
        a: "The inside of the elbow sits close to the ulnar nerve and the inner-elbow ligaments. Golfer's elbow can coexist with ulnar-nerve irritation or throwing-related ligament problems, so numbness in the ring and small fingers, instability, or trauma deserve a closer look.",
        citationIds: ['golfers-reece-2025-statpearls'],
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
