import type { Citation, ConditionModule } from '../types'

/**
 * Iliotibial Band Syndrome — transcribed faithfully from the physician-authored
 * deep-research PDF (Evidence-Based Sports Medicine Library Draft, p.37–38).
 * Ships physician-review-pending for Dr. Swisher's sign-off. Citations are the
 * exact URLs listed in the PDF's own Citations list for this condition.
 */

const citations: Citation[] = [
  {
    id: 'itb-sanchez-alvarado-2024',
    label: 'Sanchez-Alvarado 2024 (systematic review)',
    authorsOrOrg: 'Sanchez-Alvarado A, et al.',
    source: 'PubMed (systematic review)',
    year: 2024,
    type: 'systematic-review',
    url: 'https://pubmed.ncbi.nlm.nih.gov/39247485/',
    takeaway:
      'Conservative treatment usually works for iliotibial band syndrome, with load management plus hip-focused rehab and running modification.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'itb-christofi-2024',
    label: 'Christofi 2024 (review)',
    authorsOrOrg: 'Christofi I, et al.',
    source: 'PubMed (review)',
    year: 2024,
    type: 'narrative-review',
    url: 'https://pubmed.ncbi.nlm.nih.gov/39593548/',
    takeaway:
      'Reviews iliotibial band syndrome as lateral knee pain related to the IT band and the tissue it compresses near the lateral femoral epicondyle, managed with load modification and rehab.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'itb-friede-2022',
    label: 'Friede 2022 (review)',
    authorsOrOrg: 'Friede MC, et al.',
    source: 'PubMed (review)',
    year: 2022,
    type: 'narrative-review',
    url: 'https://pubmed.ncbi.nlm.nih.gov/35007886/',
    takeaway:
      'Frames iliotibial band syndrome around the load-management message; hip-focused rehab and graded return are central to recovery.',
    verified: true,
    lastChecked: '2026-06-21',
  },
]

const moduleData: ConditionModule = {
  citations,
  condition: {
    id: 'it-band-syndrome',
    slug: 'it-band-syndrome',
    name: 'Iliotibial Band Syndrome',
    shortName: 'IT Band',
    aka: [
      'ITBS',
      'IT band syndrome',
      'iliotibial band syndrome',
      'iliotibial band friction syndrome',
      'runner’s knee (lateral)',
    ],
    region: 'knee',
    sportTags: ['running', 'cycling'],
    careTier: 'pc-core',
    oneLiner:
      'Lateral (outer) knee pain related to the iliotibial band that usually responds to load management plus hip-focused rehab.',
    overview:
      'Iliotibial band syndrome (IT band syndrome) is lateral knee pain related to the iliotibial band and the tissue it compresses near the lateral femoral epicondyle — the bony bump on the outer side of your knee. It tends to show up during running and similar repetitive activity, and it is common in runners and cyclists.\n\nIt is often linked to training errors, downhill running volume, weak or poorly coordinated hip control, and running mechanics — not to the band being permanently damaged. The pain usually starts during or after running, on the outer side of the knee.\n\nThe good news is that most people improve over a few weeks with load modification and rehab that strengthens the hip. The goal is to calm the irritated tissue and rebuild your hip control so you can get back to running and cycling comfortably.',
    tissue:
      'The iliotibial band and the tissue it compresses near the lateral femoral epicondyle (outer side of the knee).',
    anatomyDiagram: {
      key: 'anatomy-knee',
      altText:
        'Outer view of the knee showing the iliotibial band running down the outside of the thigh to the lateral side of the knee near the lateral femoral epicondyle.',
      caption:
        'The iliotibial band runs down the outside of the thigh to the outer knee.',
    },
    causes: [
      'Training errors — doing too much, too soon',
      'High downhill running volume',
      'Weak or poorly coordinated hip control',
      'Running mechanics that overload the outer knee',
      'Repetitive activity such as running and cycling',
    ],
    riskFactors: [
      'Sudden increases in running mileage',
      'A lot of downhill running',
      'Weak hip abductors or poor hip coordination',
      'Repetitive endurance sports (running, cycling)',
    ],
    symptoms: [
      'Outer-knee pain that starts during or after running',
      'Pain on the lateral side near the bony bump of the knee',
      'Symptoms that come on with repetitive activity and ease with rest early on',
    ],
    prognosis: {
      summary:
        'IT band syndrome usually responds well to conservative care. Many people improve with load modification and hip-focused rehab.',
      typicalTimeline:
        'Many people improve over about 4 to 8 weeks with load modification and rehab.',
      encouragement:
        'This is a load problem, not a sign of lasting damage. Calming the irritation and rebuilding hip control reliably gets most runners and cyclists back to their sport.',
    },
    redFlags: [
      {
        text: 'Knee swelling or locking (the knee catching or getting stuck).',
        urgency: 'see-clinician',
      },
      {
        text: 'Pain that is not clearly related to activity.',
        urgency: 'see-clinician',
      },
      {
        text: 'Concern for a meniscus or bony injury.',
        urgency: 'see-clinician',
      },
    ],
    selfCare: {
      dos: [
        'Reduce provoking mileage briefly to let the outer knee settle.',
        'Work on hip abductor strength — this is the core of recovery.',
        'Use the pain-monitoring rule: discomfort up to about 3/10 during exercise is acceptable if it settles by the next morning.',
        'Return to running gradually, starting with a pain-free brisk walk, then graded run-walk.',
      ],
      donts: [
        'Don’t spike your mileage or jump back to full running too quickly.',
        'Don’t suddenly add hill or downhill volume.',
        'Don’t push through outer-knee pain that worsens during or after activity.',
        'Don’t rely on rest alone — rebuilding hip strength is what prevents recurrence.',
      ],
    },
    clinicalGoal:
      'Settle the irritated lateral knee tissue and rebuild hip control for a durable return to running and cycling',
    hep: {
      overview:
        'A staged program that briefly reduces provoking load, builds hip abductor strength and coordination, then guides a graded return to running. Move on when you meet each phase’s exit criteria, not by the calendar. If a phase flares your outer knee, drop back a step.',
      phases: [
        {
          id: 'it-band-syndrome-phase-1',
          order: 1,
          title: 'Settle & Modify Load',
          summary:
            'Briefly reduce the mileage that provokes pain and calm the irritated outer knee.',
          goal: 'Reduce outer-knee pain by trimming aggravating running volume.',
          durationGuidance: 'Typically 1–2 weeks',
          entryCriteria: [
            'New or flared lateral knee pain with running',
            'Pain comes on during or after running',
          ],
          exitCriteria: [
            'Outer-knee pain is calming with reduced mileage',
            'Can walk briskly without lateral knee pain',
          ],
          educationPoints: [
            'This is a temporary load reduction, not full rest — keep moving within comfort.',
            'Some discomfort during gentle activity is OK if it settles by the next morning.',
            'Hill and downhill running are common triggers; ease off them for now.',
          ],
          exercises: [
            {
              id: 'itb-load-modification',
              name: 'Mileage / load modification',
              target: 'Iliotibial band and lateral knee tissue',
              purpose:
                'Briefly lowering provoking running volume lets the irritated outer knee calm down.',
              dose: {
                notes:
                  'Cut back provoking mileage briefly; substitute brisk walking or other low-irritation activity as tolerated.',
              },
              frequency: 'Daily as needed',
              progression:
                'As pain settles, reintroduce easy distance gradually (graded run-walk in later phases).',
              regression:
                'Reduce further to pain-free walking only if the outer knee stays irritable.',
              formCues: [
                'Keep efforts pain-free or near pain-free',
                'Avoid hills and downhill running for now',
                'Judge progress by how the knee feels the next morning',
              ],
              painRule:
                'Mild discomfort up to about 3/10 is acceptable if it settles by the next morning.',
              diagram: {
                key: 'anatomy-knee',
                altText:
                  'Outer view of the knee highlighting where iliotibial band syndrome pain is felt.',
              },
            },
          ],
        },
        {
          id: 'it-band-syndrome-phase-2',
          order: 2,
          title: 'Build Hip Strength',
          summary:
            'Strengthen and coordinate the hip abductors that control the knee from above.',
          goal: 'Rebuild hip abductor strength and pelvic control.',
          durationGuidance: 'Typically 2–4 weeks',
          entryCriteria: [
            'Lateral knee pain is calming',
            'Can do basic hip exercises with pain ≤3/10',
          ],
          exitCriteria: [
            'Hip abductor exercises feel strong and controlled',
            'Can hold a side plank or do side-lying abduction without lateral knee flare',
          ],
          educationPoints: [
            'Weak or poorly coordinated hip control is a key driver — strengthening it is the main treatment.',
            'Quality matters: keep the pelvis stacked and avoid trunk roll.',
            'Slow, controlled reps beat fast, sloppy ones.',
          ],
          exercises: [
            {
              id: 'itb-side-plank',
              name: 'Side plank',
              target: 'Hip abductors and lateral trunk',
              purpose:
                'Strengthens the hip and trunk that stabilize the knee from above.',
              dose: { sets: 3, reps: '8–12' },
              frequency: 'Every other day',
              progression:
                'Progress band/load; advance from short-lever (knees bent) to full side plank.',
              regression:
                'Regress to a knees-bent (short-lever) side plank to reduce load.',
              formCues: [
                'Pelvis stacked',
                'Slow, open movement',
                'No trunk roll',
                'Neck relaxed',
              ],
              painRule:
                'Mild discomfort up to about 3/10 that settles by the next morning is acceptable.',
              equipment: ['Mat'],
              diagram: {
                key: 'side-plank',
                altText:
                  'Person holding a side plank, body in a straight line supported on one forearm.',
              },
            },
            {
              id: 'itb-clamshell',
              name: 'Clamshell',
              target: 'Gluteus medius / hip abductors',
              purpose:
                'Activates and strengthens the hip abductors that control the knee.',
              dose: { sets: 3, reps: '8–12' },
              frequency: 'Every other day',
              progression:
                'Add a resistance band around the knees; progress band tension and reps.',
              regression:
                'Remove the band and reduce range to keep it pain-free.',
              formCues: [
                'Pelvis stacked',
                'Slow, open movement',
                'No trunk roll',
                'Neck relaxed',
              ],
              painRule:
                'Mild discomfort up to about 3/10 that settles by the next morning is acceptable.',
              equipment: ['Mat', 'Optional resistance band'],
              diagram: {
                key: 'clamshell',
                altText:
                  'Person lying on their side opening the top knee like a clamshell while the feet stay together.',
              },
            },
            {
              id: 'itb-side-lying-abduction',
              name: 'Side-lying hip abduction',
              target: 'Gluteus medius / hip abductors',
              purpose:
                'Directly loads the hip abductors to rebuild lateral hip strength.',
              dose: { sets: 3, reps: '8–12' },
              frequency: 'Every other day',
              progression:
                'Add ankle weight or band; progress reps as control improves.',
              regression:
                'Plain side-lying abduction (no added load) and smaller range.',
              formCues: [
                'Pelvis stacked',
                'Slow, controlled lift',
                'No trunk roll',
                'Lead with the heel, toes slightly down',
              ],
              painRule:
                'Mild discomfort up to about 3/10 that settles by the next morning is acceptable.',
              equipment: ['Mat', 'Optional ankle weight or band'],
              diagram: {
                key: 'side-lying-hip-abduction',
                altText:
                  'Person lying on their side lifting the top leg straight up toward the ceiling.',
              },
            },
          ],
        },
        {
          id: 'it-band-syndrome-phase-3',
          order: 3,
          title: 'Control Under Load',
          summary:
            'Add single-leg control such as the step-down to prepare the knee for running.',
          goal: 'Build controlled single-leg loading and good knee/hip mechanics.',
          durationGuidance: 'Typically 2–4 weeks',
          entryCriteria: [
            'Hip strength work is comfortable and controlled',
            'No lateral knee flare from abductor exercises',
          ],
          exitCriteria: [
            'Step-downs are controlled with the knee tracking well',
            'Pain-free brisk walking tolerated',
          ],
          educationPoints: [
            'Single-leg control teaches the hip to keep the knee aligned during running.',
            'Watch the knee tracking — don’t let it collapse inward.',
            'Keep up the hip strengthening; don’t drop it as you add harder drills.',
          ],
          exercises: [
            {
              id: 'itb-step-down',
              name: 'Step-down',
              target: 'Hip and knee control (single-leg)',
              purpose:
                'Trains controlled single-leg loading so the hip keeps the knee aligned during running.',
              dose: { sets: 3, reps: '8–12', tempo: 'slow lower' },
              frequency: 'Every other day',
              progression:
                'Increase step height; progress reps and control before adding load.',
              regression:
                'Lower the step height or reduce range to stay controlled and pain-free.',
              formCues: [
                'Pelvis level — don’t let the hip drop',
                'Knee tracks over the foot, not inward',
                'Lower slowly under control',
                'Stand tall through the trunk',
              ],
              painRule:
                'Mild discomfort up to about 3/10 that settles by the next morning is acceptable.',
              equipment: ['A step or sturdy raised surface'],
              diagram: {
                key: 'step-down',
                altText:
                  'Person standing on one leg on a step, slowly lowering the other foot toward the floor.',
              },
            },
            {
              id: 'itb-glute-bridge',
              name: 'Glute bridge',
              target: 'Gluteal muscles and hip extensors',
              purpose:
                'Builds posterior hip strength to support pelvic control during running.',
              dose: { sets: 3, reps: '10–15' },
              frequency: 'Every other day',
              progression:
                'Progress to single-leg bridges as control improves.',
              regression:
                'Reduce range or hold for shorter periods if irritable.',
              formCues: [
                'Squeeze the glutes to lift',
                'Keep the pelvis level',
                'Don’t arch through the low back',
              ],
              painRule:
                'Mild discomfort up to about 3/10 that settles by the next morning is acceptable.',
              equipment: ['Mat'],
              diagram: {
                key: 'glute-bridge',
                altText:
                  'Person lying on their back lifting the hips into a bridge position.',
              },
            },
          ],
        },
        {
          id: 'it-band-syndrome-phase-4',
          order: 4,
          title: 'Graded Return to Running',
          summary:
            'Progress from pain-free brisk walking to a graded run-walk and full running.',
          goal: 'Return to running gradually without provoking lateral knee pain.',
          durationGuidance: 'Varies; typically 2–4 weeks, longer for higher mileage',
          entryCriteria: [
            'Pain-free brisk walking',
            'Good single-leg control with step-downs',
          ],
          exitCriteria: [
            'Back to desired running (and cycling) volume without flare',
            'Maintaining a weekly hip-strength habit',
          ],
          educationPoints: [
            'Start with a pain-free brisk walk, then build a graded run-walk.',
            'Avoid sudden hill and downhill spikes as you ramp up.',
            'Maintain hip strength to protect against recurrence.',
          ],
          exercises: [
            {
              id: 'itb-graded-run-walk',
              name: 'Graded run-walk return',
              target: 'Whole-leg running tolerance',
              purpose:
                'Reintroduces running in controlled steps, starting from pain-free walking.',
              dose: {
                notes:
                  'Begin with a pain-free brisk walk, then alternate short run and walk intervals, gradually increasing the running portion.',
              },
              frequency: '3x/week, building gradually',
              progression:
                'Add running time, then distance; reintroduce gentle hills last.',
              regression:
                'Shorten run intervals or return to brisk walking if the outer knee flares.',
              formCues: [
                'Advance only when next-day symptoms are stable',
                'Keep early sessions flat — no hill or downhill spikes',
                'Build mileage slowly',
              ],
              painRule:
                'Mild discomfort up to about 3/10 during, settling by the next morning.',
              diagram: {
                key: 'anatomy-knee',
                altText:
                  'Outer view of the knee, used as a reminder to monitor lateral knee symptoms during running return.',
              },
            },
            {
              id: 'itb-maintenance-hip-strength',
              name: 'Maintenance hip strength',
              target: 'Hip abductors / gluteal muscles',
              purpose:
                'Keeps hip strength to protect the knee and reduce recurrence.',
              dose: { sets: 3, reps: '8–12' },
              frequency: '1–2x/week, ongoing',
              progression:
                'Keep the load challenging as running volume returns.',
              regression:
                'Drop to bodyweight versions if busy or sore.',
              formCues: [
                'Pelvis stacked',
                'Slow, controlled reps',
                'No trunk roll',
              ],
              painRule:
                'Mild discomfort up to about 3/10 that settles by the next morning is acceptable.',
              equipment: ['Optional resistance band'],
              diagram: {
                key: 'side-lying-hip-abduction',
                altText:
                  'Person performing a side-lying hip abduction for ongoing hip strength.',
              },
            },
          ],
        },
      ],
    },
    evidence: {
      strength: 'limited',
      bottomLine:
        'Conservative treatment usually works, with load management plus hip-focused rehab and running modification.',
      whatHelps: [
        'Load management — briefly reducing provoking mileage',
        'Hip abductor strengthening and coordination',
        'Running modification and a graded return',
        'Avoiding sudden hill/downhill spikes',
      ],
      whatsUncertain: [
        'The exact compression-versus-friction model is less important for patients than the load-management message.',
        'Procedure (corticosteroid, PRP/HA, shockwave) evidence is limited and not condition-specific, so injections have little proven certainty here.',
        'The single best combination and dosing of hip-focused exercises is not firmly established.',
      ],
      citationIds: [
        'itb-sanchez-alvarado-2024',
        'itb-christofi-2024',
        'itb-friede-2022',
      ],
    },
    procedures: [
      {
        procedureId: 'corticosteroid',
        relevance: 'selected-cases',
        evidenceNote: 'Selected cases, short-term only.',
      },
      {
        procedureId: 'prp',
        relevance: 'rarely',
        evidenceNote: 'PRP/HA: rarely, little condition-specific certainty.',
      },
      {
        procedureId: 'hyaluronic-acid',
        relevance: 'rarely',
        evidenceNote: 'PRP/HA: rarely, little condition-specific certainty.',
      },
      {
        procedureId: 'shockwave',
        relevance: 'selected-cases',
        evidenceNote: 'ESWT: selected cases, little condition-specific certainty.',
      },
      {
        procedureId: 'ultrasound-guided',
        relevance: 'selected-cases',
        evidenceNote: 'Ultrasound-guided injection: selected cases.',
      },
      {
        procedureId: 'tenotomy',
        relevance: 'not-indicated',
        evidenceNote: 'Percutaneous tenotomy: not routine.',
      },
    ],
    returnToActivity: {
      criteria: [
        'Pain-free brisk walking',
        'Good single-leg hip control (e.g., step-downs)',
        'Maintained hip strength',
      ],
      timelineGuidance:
        'Many improve over about 4–8 weeks; return after a pain-free brisk walk, then graded run-walk, building mileage slowly. Varies by running demand.',
      reinjuryPrevention: [
        'Maintain hip strength',
        'Avoid sudden hill/downhill spikes',
        'Build mileage gradually with a graded run-walk',
      ],
    },
    faqs: [
      {
        q: 'How long until I feel better?',
        a: 'Many people improve over about 4 to 8 weeks with load modification and hip-focused rehab.',
        citationIds: ['itb-sanchez-alvarado-2024'],
      },
      {
        q: 'Do I have to stop running completely?',
        a: 'Usually not. The approach is to briefly reduce provoking mileage, build hip strength, then return with a pain-free brisk walk followed by a graded run-walk.',
        citationIds: ['itb-friede-2022'],
      },
      {
        q: 'Is the IT band “too tight,” and should I roll or stretch it away?',
        a: 'For patients, the exact compression-versus-friction model matters less than the load-management message: reduce provoking load briefly, strengthen the hip, and return to running gradually.',
        citationIds: ['itb-christofi-2024'],
      },
      {
        q: 'Do I need an injection or procedure?',
        a: 'Conservative care usually works. Injections such as corticosteroid are reserved for selected cases and short-term use, with little condition-specific certainty; percutaneous tenotomy is not routine.',
        citationIds: ['itb-sanchez-alvarado-2024'],
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
