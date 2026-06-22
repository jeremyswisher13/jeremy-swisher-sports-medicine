import type { Citation, ConditionModule } from '../types'

/**
 * Patellofemoral pain (Runner's Knee). Transcribed faithfully from the
 * physician-authored deep-research source. Ships physician-review-pending for
 * Dr. Swisher's sign-off. Citations are the real URLs listed in the source.
 */

const citations: Citation[] = [
  {
    id: 'patellofemoral-jospt-2019-cpg',
    label: 'JOSPT Patellofemoral Pain CPG (2019)',
    authorsOrOrg: 'Willy RW, Hoglund LT, Barton CJ, et al.',
    source: 'Journal of Orthopaedic & Sports Physical Therapy',
    year: 2019,
    type: 'guideline',
    url: 'https://www.jospt.org/doi/10.2519/jospt.2019.0302',
    takeaway:
      'Exercise therapy — especially combined hip and knee strengthening — is the core recommended treatment for patellofemoral pain, with taping and foot orthoses as selected adjuncts.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'patellofemoral-neal-2024-bestpractice',
    label: 'Neal 2024 best-practice guide (BJSM)',
    authorsOrOrg: 'Neal BS, Barton CJ, Lack S, et al.',
    source: 'British Journal of Sports Medicine',
    year: 2024,
    type: 'narrative-review',
    url: 'https://pubmed.ncbi.nlm.nih.gov/39401870/',
    takeaway:
      'Contemporary best-practice care for patellofemoral pain centers on education, load management, and progressive hip-plus-knee strengthening.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'patellofemoral-collins-2018-consensus',
    label: 'Collins 2018 consensus statement (BJSM)',
    authorsOrOrg: 'Collins NJ, Barton CJ, van Middelkoop M, et al.',
    source: 'British Journal of Sports Medicine',
    year: 2018,
    type: 'consensus',
    url: 'https://pubmed.ncbi.nlm.nih.gov/29925502/',
    takeaway:
      'International consensus supports exercise therapy and combined interventions for patellofemoral pain, with adjuncts such as taping and orthoses for appropriate subgroups.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'patellofemoral-nascimento-2018-srma',
    label: 'Nascimento 2018 systematic review/meta-analysis (BJSM)',
    authorsOrOrg: 'Nascimento LR, Teixeira-Salmela LF, Souza RB, et al.',
    source: 'British Journal of Sports Medicine',
    year: 2018,
    type: 'systematic-review',
    url: 'https://pubmed.ncbi.nlm.nih.gov/29034800/',
    takeaway:
      'Hip and knee strengthening reduces pain and improves function in patellofemoral pain more than knee strengthening alone.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'patellofemoral-crossley-2016-review',
    label: 'Crossley 2016 review (BMJ)',
    authorsOrOrg: 'Crossley KM, Callaghan MJ, van Linschoten R.',
    source: 'BMJ',
    year: 2016,
    type: 'narrative-review',
    url: 'https://pubmed.ncbi.nlm.nih.gov/26834209/',
    takeaway:
      'Patellofemoral pain is a common, often persistent load-related problem best managed with exercise and education rather than passive or procedural treatments.',
    verified: true,
    lastChecked: '2026-06-21',
  },
]

const moduleData: ConditionModule = {
  citations,
  condition: {
    id: 'patellofemoral-pain',
    slug: 'patellofemoral-pain',
    name: 'Patellofemoral Pain (Runner’s Knee)',
    shortName: 'Runner’s Knee',
    aka: [
      'patellofemoral pain syndrome',
      'PFP',
      'PFPS',
      'runner’s knee',
      'anterior knee pain',
      'chondromalacia patellae',
    ],
    region: 'knee',
    sportTags: ['running', 'cycling', 'basketball'],
    careTier: 'pc-core',
    oneLiner:
      'Load-related pain in the front of the knee, around or behind the kneecap, that responds well to education and progressive hip-plus-knee strengthening.',
    overview:
      'Patellofemoral pain means pain in the front of the knee, usually around or behind the kneecap. It is common in runners, field and court athletes, and active teens and adults, but it can also happen in people who are not athletes. Pain is usually related to how much load the knee is handling and how the leg controls that load, not to one single "damaged structure." The main painful area is the patellofemoral joint and the tissues that sense load around it.\n\nPeople often feel pain with stairs, squatting, lunging, running, jumping, or sitting with the knee bent for a long time. Most people improve with good rehab, especially a mix of hip and knee strengthening plus education on load management. Recovery often takes 6 to 12 weeks, but some people need 3 to 6 months, and recurrence is common if the person returns to full activity too fast or stops strength work when pain settles.',
    tissue:
      'The patellofemoral joint surfaces, retinacular/peripatellar pain-sensitive tissues, and load-sharing structures around the kneecap. PFP is a clinical syndrome, not a single lesion.',
    video: {
      videoId: 'K3HxB6rAeDo',
      title: 'Patellofemoral Pain | Chondromalacia Patellae | Runner’s Knee',
      channel: 'E3 Rehab',
      channelUrl: 'https://www.youtube.com/@E3Rehab',
      approved: true,
      note: 'Physician-curated demonstration video.',
    },
    anatomyDiagram: {
      key: 'anatomy-knee',
      altText:
        'Front view of the knee showing the kneecap (patella) sitting in the groove of the thighbone, with the quadriceps tendon above and patellar tendon below.',
      caption:
        'The kneecap glides in a groove on the thighbone; pain comes from load around this patellofemoral joint.',
    },
    causes: [
      'Rapid increases in running or jumping load',
      'Poor tolerance for repeated knee-flexion loading (stairs, squats, prolonged sitting)',
      'Reduced hip and knee strength',
      'Movement patterns that raise patellofemoral joint stress during functional tasks',
    ],
    riskFactors: [
      'Sudden spikes in training volume or intensity',
      'Reduced hip and knee strength',
      'Being an adolescent, a woman, or a running/jumping athlete (commonly affected, but not limited to these groups)',
      'Returning to full activity too quickly after a flare',
    ],
    symptoms: [
      'Diffuse pain around the kneecap',
      'Discomfort with stairs or squats',
      'Pain after prolonged sitting (the "theatre sign")',
      'Crepitus (grinding or clicking) in some people',
      'Reduced confidence with running or jumping',
    ],
    prognosis: {
      summary:
        'The overall prognosis is good, but some cohorts show persistent symptoms at longer follow-up, which is why education and maintenance exercise matter.',
      typicalTimeline:
        'Recovery often takes 6 to 12 weeks, but some people need 3 to 6 months.',
      encouragement:
        'Most people improve with consistent rehab. Keeping up strength work after pain settles is what protects against recurrence.',
    },
    redFlags: [
      {
        text: 'Hot swollen knee with fever.',
        urgency: 'emergency',
      },
      {
        text: 'Inability to bear weight after major trauma.',
        urgency: 'emergency',
      },
      {
        text: 'A locked knee after an acute injury.',
        urgency: 'emergency',
      },
      {
        text: 'Large effusion (significant knee swelling).',
        urgency: 'urgent',
      },
      {
        text: 'Giving way after trauma.',
        urgency: 'urgent',
      },
      {
        text: 'Suspected fracture.',
        urgency: 'urgent',
      },
      {
        text: 'Suspected septic (infected) joint — a hot, swollen knee with fever or feeling unwell.',
        urgency: 'emergency',
      },
      {
        text: 'Suspected inflammatory joint disease (e.g., a crystal or rheumatologic flare).',
        urgency: 'urgent',
      },
      {
        text: 'Calf swelling or unexplained severe pain at rest — a non-routine pattern that does not fit kneecap pain and should be checked.',
        urgency: 'urgent',
      },
      {
        text: 'Persistent symptoms despite 6 to 8 weeks of rehab.',
        urgency: 'see-clinician',
      },
      {
        text: 'Recurrent patellar instability.',
        urgency: 'see-clinician',
      },
      {
        text: 'Large pain asymmetry.',
        urgency: 'see-clinician',
      },
      {
        text: 'Diagnostic uncertainty suggesting meniscus, tendon, or OA pathology instead.',
        urgency: 'see-clinician',
      },
    ],
    selfCare: {
      dos: [
        'Use the pain-monitoring rule: mild pain up to about 3/10 during exercise is acceptable if it settles by the next morning.',
        'Manage load — temporarily reduce running/jumping volume or intensity rather than stopping all activity.',
        'Do your hip and knee strengthening consistently; this is the main treatment.',
        'Increase running/jumping load gradually and keep strength work in your weekly routine.',
      ],
      donts: [
        'Don’t push through pain that is sharp, worsening, or clearly worse the next day.',
        'Don’t spike training volume or intensity abruptly, especially in downhill, speed, or court-sport sessions.',
        'Don’t stop strength work as soon as the pain improves — recurrence is common when you do.',
        'Don’t rely on a brace, sleeve, or injection as a substitute for exercise.',
      ],
    },
    clinicalGoal:
      'Pain-controlled stairs, squatting, and a durable, graded return to running and jumping',
    hep: {
      overview:
        'A phased program built on education, load management, and progressive hip-plus-knee strengthening. Each phase has a goal and exit criteria — advance when you meet them rather than by the calendar. If a phase flares you, drop back a step. The pain-monitoring rule applies throughout: mild pain up to about 3/10 that settles by the next morning is acceptable.',
      phases: [
        {
          id: 'patellofemoral-pain-phase-1',
          order: 1,
          title: 'Phase A — Reduce Irritability and Restore Basic Strength',
          summary:
            'Settle the most irritable symptoms and reintroduce tolerable loading.',
          goal: 'Settle pain and reintroduce tolerable loading.',
          durationGuidance: '1 to 2 weeks',
          entryCriteria: [
            'New or flared front-of-knee pain',
            'Pain with stairs, squats, or sit-to-stand',
          ],
          exitCriteria: [
            'Stairs and sit-to-stand are improving',
            'Mini-squat pain is mild',
          ],
          educationPoints: [
            'Pain here is load-related, not a sign of a single "damaged structure."',
            'Relative rest — reduce aggravating load rather than stopping all activity.',
            'Mild discomfort during exercise is OK if it settles by the next morning.',
          ],
          exercises: [
            {
              id: 'pfp-wall-sit-isometric',
              name: 'Wall sit or Spanish squat isometric',
              target: 'Quadriceps',
              purpose:
                'Knee-friendly quadriceps loading that helps settle pain and start early quadriceps work.',
              dose: { sets: 5, holdSeconds: 45, notes: '30 to 45 sec holds' },
              frequency: 'Daily or every other day',
              progression: 'Progress by a deeper angle or longer hold.',
              regression: 'Regress by a shallower angle.',
              formCues: [
                'Knees over mid-foot',
                'Weight even',
                'Ribs stacked',
                'Steady breathing',
              ],
              painRule:
                'Mild pain up to about 3/10 during the hold that settles by the next morning.',
              equipment: ['A wall', 'Optional band for a Spanish squat'],
              diagram: {
                key: 'wall-sit',
                altText:
                  'Person holding a seated position with back against a wall and knees bent.',
              },
              video: {
                videoId: 'URNdspDN104',
                title:
                  'How to Treat Patellofemoral Pain Syndrome | Episode 11',
                channel: 'Mayo Clinic Sports Medicine',
                approved: false,
                note: 'Overview of treating patellofemoral pain syndrome. Pending physician review.',
              },
            },
            {
              id: 'pfp-side-lying-hip-abduction',
              name: 'Side-lying hip abduction',
              target: 'Gluteus medius',
              purpose: 'Builds proximal (hip) strength to control the knee.',
              dose: { sets: 3, reps: '12 to 15' },
              frequency: 'Most days',
              progression: 'Progress with an ankle weight or band.',
              regression: 'Regress by reducing the range.',
              formCues: [
                'Toes slightly down',
                'Pelvis stays stacked',
                'Do not roll back',
                'Slow lower',
              ],
              painRule:
                'Mild pain up to about 3/10 that settles by the next morning.',
              equipment: ['Optional ankle weight or band'],
              diagram: {
                key: 'side-lying-hip-abduction',
                altText:
                  'Person lying on one side lifting the top leg upward against gravity.',
              },
            },
            {
              id: 'pfp-sit-to-stand',
              name: 'Sit-to-stand from chair',
              target: 'Quadriceps, hips, and confidence with daily tasks',
              purpose:
                'Rebuilds tolerance for everyday closed-chain loading and confidence with daily tasks.',
              dose: { sets: 3, reps: '8 to 12' },
              frequency: 'Every other day',
              progression: 'Progress by a lower seat or backpack load.',
              regression: 'Regress with a higher seat or hand support.',
              formCues: [
                'Hips back first',
                'Knees track over toes',
                'Push evenly through both feet',
                'Control the descent',
              ],
              painRule:
                'Mild pain up to about 3/10 that settles by the next morning.',
              equipment: ['A sturdy chair', 'Optional loaded backpack'],
              diagram: {
                key: 'step-down',
                altText:
                  'Person rising from a chair to standing and lowering back down under control.',
              },
            },
          ],
        },
        {
          id: 'patellofemoral-pain-phase-2',
          order: 2,
          title: 'Phase B — Build Hip and Knee Strength',
          summary:
            'Build tolerance for stairs, squats, and early running tasks with progressive hip-plus-knee loading.',
          goal: 'Increase tolerance for stairs, squats, and early running tasks.',
          durationGuidance: '2 to 6 weeks',
          entryCriteria: [
            'Stairs and sit-to-stand are improving',
            'Mini-squat pain is mild',
          ],
          exitCriteria: [
            'Controlled step-down with only mild pain',
            'Split squat with only mild pain',
          ],
          educationPoints: [
            'Combined hip and knee strengthening is the core, best-supported treatment.',
            'Quality of movement matters — keep the knee tracking over the foot.',
            'Keep using the pain-monitoring rule as load increases.',
          ],
          exercises: [
            {
              id: 'pfp-step-down',
              name: 'Step-down',
              target: 'Quadriceps and dynamic control',
              purpose: 'Functional closed-chain loading with movement control.',
              dose: { sets: 3, reps: '6 to 10' },
              frequency: 'Every other day',
              progression: 'Progress height and external load.',
              regression: 'Regress height or use fingertip support.',
              formCues: [
                'Soft hip hinge',
                'Knee stays over middle toes',
                'Pelvis level',
                'Slow tap down',
              ],
              painRule:
                'Mild pain up to about 3/10 that settles by the next morning.',
              equipment: ['A step', 'Optional hand load'],
              diagram: {
                key: 'step-down',
                altText:
                  'Person standing on a step lowering one foot toward the floor under control.',
              },
            },
            {
              id: 'pfp-split-squat',
              name: 'Split squat',
              target: 'Quadriceps and glutes',
              purpose: 'Builds strength through a usable range.',
              dose: { sets: 3, reps: '6 to 10' },
              frequency: 'Every other day',
              progression: 'Progress depth, then load.',
              regression: 'Reduce depth or hold onto support.',
              formCues: [
                'Front foot tripod',
                'Torso tall',
                'Lower straight down',
                'Avoid inward knee collapse',
              ],
              painRule:
                'Mild pain up to about 3/10 that settles by the next morning.',
              equipment: ['Optional dumbbells', 'Optional support to hold'],
              diagram: {
                key: 'step-down',
                altText:
                  'Person in a staggered stance lowering into a split squat and standing back up.',
              },
            },
            {
              id: 'pfp-band-lateral-walk',
              name: 'Band lateral walk',
              target: 'Frontal-plane hip control',
              purpose: 'Improves proximal (hip) endurance for knee control.',
              dose: { sets: 3, reps: '10 to 15 steps each way' },
              frequency: '3 to 5 days/week',
              progression: 'Progress band tension.',
              regression: 'Regress to unbanded marching.',
              formCues: [
                'Small steps',
                'Feet forward',
                'Soft knees',
                'Do not sway trunk',
              ],
              painRule:
                'Mild pain up to about 3/10 that settles by the next morning.',
              equipment: ['Resistance band'],
              diagram: {
                key: 'banded-lateral-walk',
                altText:
                  'Person with a band around the legs taking small steps sideways in a partial squat.',
              },
            },
          ],
        },
        {
          id: 'patellofemoral-pain-phase-3',
          order: 3,
          title: 'Phase C — Reintroduce Impact',
          summary:
            'Add higher functional load and reintroduce running, hopping, and sport drills.',
          goal: 'Tolerate running, hopping, and sport drills.',
          durationGuidance: '2 to 6 weeks',
          entryCriteria: [
            'Controlled step-down and split squat with only mild pain',
            'Comfortable with progressive hip and knee strengthening',
          ],
          exitCriteria: [
            'Pain-controlled jog',
            'Step-down symmetry',
            'Hop drill tolerated',
          ],
          educationPoints: [
            'Progress time before speed when reintroducing running.',
            'Check how the knee feels the next morning, not just during activity.',
            'Avoid sudden downhill, speed, or court-sport spikes.',
          ],
          exercises: [
            {
              id: 'pfp-goblet-squat',
              name: 'Goblet squat to comfortable depth',
              target: 'Quadriceps and hip strength',
              purpose: 'Higher functional load through a tolerated range.',
              dose: { sets: 4, reps: '6 to 8' },
              frequency: 'Every other day',
              progression: 'Progress load before depth.',
              regression: 'Regress to a bodyweight box squat.',
              formCues: [
                'Brace gently',
                'Tripod feet',
                'Knees follow toes',
                'Smooth depth',
              ],
              painRule:
                'Mild pain up to about 3/10 that settles by the next morning.',
              equipment: ['Dumbbell or kettlebell'],
              diagram: {
                key: 'step-down',
                altText:
                  'Person holding a weight at the chest squatting down to a comfortable depth.',
              },
            },
            {
              id: 'pfp-line-hops',
              name: 'Line hops',
              target: 'Patellofemoral load tolerance and lower-limb stiffness',
              purpose: 'Prepares the knee for impact and energy-storage loading.',
              dose: { sets: 3, holdSeconds: 25, notes: '20 to 30 sec' },
              frequency: '2 to 3 days/week',
              progression: 'Progress to single-leg or multi-directional hops.',
              regression: 'Regress to marching pogos.',
              formCues: [
                'Quiet landings',
                'Soft knees',
                'Steady rhythm',
                'Stop if the knee caves in',
              ],
              painRule:
                'Mild pain up to about 3/10 that settles by the next morning.',
              equipment: ['A line or low marker on the floor'],
              diagram: {
                key: 'ankle-balance',
                altText:
                  'Person performing small two-footed hops back and forth over a line.',
              },
            },
            {
              id: 'pfp-walk-jog-progression',
              name: 'Walk-jog progression',
              target: 'Whole-leg running load tolerance',
              purpose: 'Reintroduces running in controlled, progressive steps.',
              dose: { notes: '10 to 20 min' },
              frequency: 'Every other day',
              progression: 'Progress time before speed.',
              regression: 'Regress to brisk walking or cycling.',
              formCues: [
                'Flat route',
                'Short stride if needed',
                'Avoid sudden hill days',
                'Check next-day pain',
              ],
              painRule:
                'Mild pain up to about 3/10 that settles by the next morning.',
              diagram: {
                key: 'ankle-balance',
                altText: 'Person alternating walking and jogging on a flat path.',
              },
            },
          ],
        },
        {
          id: 'patellofemoral-pain-phase-4',
          order: 4,
          title: 'Phase D — Sport Return and Maintenance',
          summary:
            'Repeated sport-specific loading without flare, plus an ongoing strength habit.',
          goal: 'Repeated sport-specific loading without flare.',
          durationGuidance: '2 to 4+ weeks',
          entryCriteria: [
            'Pain-controlled jog',
            'Step-down symmetry',
            'Hop drill tolerated',
          ],
          exitCriteria: [
            'Practice participation without next-day flare',
            'Strength and hop confidence near side-to-side baseline',
          ],
          educationPoints: [
            'Increase running/jumping load gradually.',
            'Keep lower-limb strength work in the weekly routine — recurrence is common if it stops.',
            'Avoid abrupt spikes in downhill, speed, or court-sport sessions.',
          ],
          exercises: [
            {
              id: 'pfp-single-leg-squat-box',
              name: 'Single-leg squat to box',
              target: 'Frontal-plane control',
              purpose: 'Sport-specific single-leg strength and control.',
              dose: { sets: 3, reps: '5 to 8' },
              frequency: '2 to 3 times/week',
              progression: 'Progress depth and load.',
              regression: 'Regress to an assisted reach squat.',
              formCues: [
                'Hips back',
                'Knee over foot',
                'Control down',
                'Pause on box',
              ],
              painRule:
                'Mild pain up to about 3/10 that settles by the next morning.',
              equipment: ['A box or bench'],
              diagram: {
                key: 'step-down',
                altText:
                  'Person lowering on one leg to lightly touch a box behind them and standing back up.',
              },
            },
            {
              id: 'pfp-deceleration-drill',
              name: 'Deceleration drill',
              target: 'Landing/braking tolerance',
              purpose: 'Builds tolerance for sport braking and change of direction.',
              dose: { reps: '4 to 6 reps per side' },
              frequency: '2 to 3 times/week',
              progression: 'Progress speed and angle.',
              regression: 'Regress to a planned slow stop.',
              formCues: [
                'Small chest lean',
                'Knee and toe aligned',
                'Quiet stop',
                'Hold balance 2 seconds',
              ],
              painRule:
                'Mild pain up to about 3/10 that settles by the next morning.',
              diagram: {
                key: 'ankle-balance',
                altText:
                  'Person jogging and then stopping under control, balancing on one leg.',
              },
            },
          ],
        },
      ],
    },
    evidence: {
      strength: 'strong',
      bottomLine:
        'Start with education, load management, and progressive hip-plus-knee strengthening.',
      whatHelps: [
        'Knee-targeted plus hip-targeted strengthening',
        'Temporary taping or orthoses when clinically matched',
        'Graded return to running/jumping',
      ],
      whatsUncertain: [
        'Which movement-retraining package works best for which patient.',
        'How much extra benefit taping or orthoses add over good exercise.',
        'Whether any injection-based strategy meaningfully changes medium-term outcomes.',
      ],
      citationIds: [
        'patellofemoral-jospt-2019-cpg',
        'patellofemoral-neal-2024-bestpractice',
        'patellofemoral-collins-2018-consensus',
        'patellofemoral-nascimento-2018-srma',
        'patellofemoral-crossley-2016-review',
      ],
    },
    procedures: [
      {
        procedureId: 'corticosteroid',
        relevance: 'not-indicated',
        evidenceNote:
          'Not indicated/routinely discouraged for classic PFP; evidence is sparse and the disorder is usually managed without injection.',
        citationIds: ['patellofemoral-crossley-2016-review'],
      },
      {
        procedureId: 'prp',
        relevance: 'not-indicated',
        evidenceNote:
          'Not indicated — no established role unless a different intra-articular diagnosis is being treated.',
      },
      {
        procedureId: 'hyaluronic-acid',
        relevance: 'not-indicated',
        evidenceNote: 'Not indicated for isolated patellofemoral pain.',
      },
      {
        procedureId: 'shockwave',
        relevance: 'not-indicated',
        evidenceNote: 'Not indicated for routine PFP.',
      },
      {
        procedureId: 'ultrasound-guided',
        relevance: 'selected-cases',
        evidenceNote:
          'Selected cases only if the diagnosis shifts away from simple PFP toward another target.',
      },
      {
        procedureId: 'tenotomy',
        relevance: 'not-indicated',
        evidenceNote: 'Not indicated for classic PFP.',
      },
    ],
    returnToActivity: {
      criteria: [
        'Squatting tolerated with only mild pain and no meaningful next-day flare',
        'Stairs tolerated with only mild pain and no meaningful next-day flare',
        'Short running tolerated with only mild pain and no meaningful next-day flare',
        'Hopping tolerated with only mild pain and no meaningful next-day flare',
      ],
      timelineGuidance:
        'Recovery often takes 6 to 12 weeks, but some people need 3 to 6 months; timelines vary by individual and sport demand.',
      reinjuryPrevention: [
        'Keep lower-limb strength work in the weekly routine',
        'Increase running/jumping load gradually',
        'Avoid abrupt spikes in downhill, speed, or court-sport sessions',
        'Do not stop strength work as soon as pain improves — recurrence is common',
      ],
    },
    faqs: [
      {
        q: 'Is this the same as arthritis?',
        a: 'Usually no. PFP is common in younger active people and is usually a load-management problem, not joint "wearing out."',
        citationIds: ['patellofemoral-crossley-2016-review'],
      },
      {
        q: 'Should I avoid squats?',
        a: 'Not forever. Squats are often part of treatment, but the depth, load, and volume need to match your current tolerance.',
        citationIds: ['patellofemoral-jospt-2019-cpg'],
      },
      {
        q: 'Do I need a brace?',
        a: 'Some people feel better with taping or a sleeve, but exercise is the main treatment.',
        citationIds: ['patellofemoral-collins-2018-consensus'],
      },
      {
        q: 'Can I run?',
        a: 'Often yes, if you temporarily reduce volume/intensity and keep symptoms mild.',
        citationIds: ['patellofemoral-jospt-2019-cpg'],
      },
    ],
    relatedConditionIds: ['patellar-tendinopathy', 'knee-osteoarthritis', 'it-band-syndrome'],
    review: {
      status: 'physician-review-pending',
      contentVersion: '1.0.0',
    },
  },
}

export default moduleData
