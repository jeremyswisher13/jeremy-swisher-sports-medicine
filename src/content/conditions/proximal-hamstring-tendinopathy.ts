import type { Citation, ConditionModule } from '../types'

/**
 * Proximal Hamstring Tendinopathy — transcribed faithfully from the
 * physician-authored deep-research source (pp. 31–32). Citations are the
 * source's own listed URLs. Ships physician-review-pending for Dr. Swisher's
 * sign-off.
 */

const citations: Citation[] = [
  {
    id: 'proximal-hamstring-nasser-2021',
    label: 'Nasser 2021 (systematic review)',
    authorsOrOrg: 'Nasser AM, et al.',
    source: 'Systematic review',
    year: 2021,
    type: 'systematic-review',
    url: 'https://pubmed.ncbi.nlm.nih.gov/33842025/',
    takeaway:
      'Progressive loading is the standard for proximal hamstring tendinopathy, but high-quality comparative evidence on the best protocol is sparse.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'proximal-hamstring-dizon-2023',
    label: 'Dizon 2023 (review)',
    authorsOrOrg: 'Dizon P, et al.',
    source: 'Review',
    year: 2023,
    type: 'narrative-review',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10053564/',
    takeaway:
      'Review of proximal hamstring tendinopathy: pain at the ischial tuberosity that responds to staged loading, with adjunct procedures reserved for selected cases.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'proximal-hamstring-cacchio-2011',
    label: 'Cacchio 2011 (ESWT RCT)',
    authorsOrOrg: 'Cacchio A, et al.',
    source: 'Randomized trial',
    year: 2011,
    type: 'rct',
    url: 'https://pubmed.ncbi.nlm.nih.gov/20855554/',
    takeaway:
      'Randomized trial reporting that extracorporeal shockwave therapy improved chronic proximal hamstring tendinopathy in selected patients.',
    verified: true,
    lastChecked: '2026-06-21',
  },
]

const moduleData: ConditionModule = {
  citations,
  condition: {
    id: 'proximal-hamstring-tendinopathy',
    slug: 'proximal-hamstring-tendinopathy',
    name: 'Proximal Hamstring Tendinopathy',
    shortName: 'Proximal Hamstring',
    aka: [
      'high hamstring tendinopathy',
      'hamstring origin tendinopathy',
      'ischial tuberosity tendinopathy',
      'proximal hamstring tendinitis',
      'hamstring tendinosis',
    ],
    region: 'hip-pelvis',
    sportTags: ['running', 'soccer'],
    careTier: 'pc-core',
    oneLiner:
      'Deep buttock pain where the hamstring tendons attach to the sit bone, aggravated by sprinting, hills, and prolonged sitting, that responds to progressive loading.',
    overview:
      'Proximal hamstring tendinopathy is pain where the hamstring tendons attach to the ischial tuberosity — the "sit bone" at the bottom of the pelvis. It is often felt deep in the lower buttock.\n\nThe pain tends to flare with sprinting, uphill running, long periods of sitting, or heavy hip hinging (such as deadlifts). It is common in runners, field athletes, and lifters, and reflects a tendon that is being asked to do more than it currently tolerates rather than a sign of permanent damage.\n\nRecovery is often slow but reliable with a patient, progressive loading program. The goal is to gradually rebuild the tendon\'s capacity so it can handle sitting, hinging, and running again.',
    tissue:
      'The proximal hamstring tendons at their attachment to the ischial tuberosity (the sit bone).',
    video: {
      videoId: '8KI2XL2vg2Q',
      title: 'Proximal Hamstring Tendinopathy Rehab (Education, Exercises, Running)',
      channel: 'E3 Rehab',
      approved: true,
      note: 'Physician-curated demonstration video.',
    },
    anatomyDiagram: {
      key: 'anatomy-hip',
      altText:
        'View of the pelvis and upper thigh showing the hamstring tendons attaching to the ischial tuberosity (sit bone) at the base of the pelvis.',
      caption: 'The hamstring tendons attach to the ischial tuberosity (sit bone).',
    },
    causes: [
      'A jump in sprinting, uphill running, or long-stride training',
      'Heavy or sudden hip-hinge loading (deadlifts, kettlebell swings)',
      'Prolonged sitting that compresses the tendon against the sit bone',
      'Asking the hamstring tendon to do more than it is currently used to',
    ],
    riskFactors: [
      'Running, field sports, and lifting',
      'Rapid increases in training volume or intensity',
      'Activities with repeated sprinting, hills, or long strides',
      'Frequent prolonged sitting (which loads the tendon under compression)',
    ],
    symptoms: [
      'Deep buttock pain near the sit bone',
      'Pain with seated pressure, especially on hard surfaces',
      'Pain with sprinting, deadlifts, or long strides',
      'Symptoms that build slowly over time rather than from a single event',
    ],
    prognosis: {
      summary:
        'Most cases improve with progressive loading. Tendons adapt slowly, so recovery is often gradual and measured over weeks to months.',
      typicalTimeline:
        'Recovery is often slow, commonly 3 to 9 months.',
      encouragement:
        'Slow progress is normal for this tendon. Consistent, staged loading is what rebuilds its tolerance for sitting, hinging, and running.',
    },
    redFlags: [
      {
        text: 'Suspicion of an acute traumatic avulsion (a sudden injury pulling the tendon off the bone), bruising, or major weakness.',
        urgency: 'urgent',
      },
      {
        text: 'Persistent sciatic symptoms (pain, numbness, or tingling running down the leg).',
        urgency: 'see-clinician',
      },
      {
        text: 'Failure to improve with appropriate care.',
        urgency: 'see-clinician',
      },
    ],
    selfCare: {
      dos: [
        'Keep loading the tendon with your program — progressive loading is the treatment.',
        'Use the pain rule: mild buttock/tendon pain (up to about 3/10) is acceptable if it settles by the next morning.',
        'Modify, don\'t stop: reduce aggravating sprinting, hills, and heavy hinging rather than resting completely.',
        'Use a cushion and break up long sitting to reduce pressure on the sit bone.',
      ],
      donts: [
        'Don\'t push through sharp pain or symptoms that build day to day.',
        'Don\'t spike sprinting, hill work, or deadlift loads suddenly.',
        'Don\'t sit for long stretches on hard surfaces while irritable.',
        'Don\'t expect rest alone to fix it — tendons need graded load to recover.',
      ],
    },
    clinicalGoal:
      'Pain-controlled sitting, hinging, and a durable return to running and sprinting',
    hep: {
      overview:
        'A staged loading program built around isometric and hamstring bridges, heavy slow hip hinging, slider curls, and a running progression. Each phase has a goal and exit criteria — advance when you meet them, not by the calendar. If a phase flares you, drop back a step. The pain rule throughout: mild pain up to about 3/10 that settles by the next morning is acceptable.',
      phases: [
        {
          id: 'proximal-hamstring-tendinopathy-phase-1',
          order: 1,
          title: 'Settle & Isometric Loading',
          summary:
            'Calm the most irritable symptoms and start gentle isometric loading of the hamstring tendon.',
          goal: 'Reduce day-to-day pain and reintroduce the tendon to load with isometric holds.',
          durationGuidance: 'Typically 1–3 weeks',
          entryCriteria: [
            'New or flared deep buttock pain near the sit bone',
            'Pain with seated pressure, sprinting, or hinging',
          ],
          exitCriteria: [
            'Isometric bridge holds tolerated with pain ≤3/10 that settles by morning',
            'Seated pressure and daily activities becoming more comfortable',
          ],
          educationPoints: [
            'Isometric holds can build early strength and ease pain without much movement.',
            'Avoid deep hip flexion and prolonged sitting that compress the tendon while irritable.',
            'Mild buttock/tendon pain during loading is OK if it settles by the next morning.',
          ],
          exercises: [
            {
              id: 'pht-long-lever-bridge-hold',
              name: 'Long-lever bridge hold',
              aka: ['Isometric hamstring bridge'],
              target: 'Proximal hamstring tendon at the ischial tuberosity',
              purpose:
                'An isometric hold that builds early hamstring tendon strength and can reduce pain.',
              dose: { sets: 5, holdSeconds: 30, notes: '5 × 30 sec' },
              frequency: 'Daily / every other day',
              progression: 'Progress to single-leg or elevated heels.',
              regression: 'Use a shorter lever (bend the knees more, heels closer to the hips).',
              formCues: [
                'Heels pull down',
                'Hips level',
                'Ribs down',
                'Mild buttock/tendon pain only',
              ],
              painRule:
                'mild pain up to about 3/10 during the hold that settles by the next morning.',
              equipment: ['A mat', 'Optional low step or box to elevate the heels'],
              diagram: {
                key: 'glute-bridge',
                altText:
                  'Person lying on their back with legs extended, lifting the hips into a long-lever bridge and holding.',
              },
            },
          ],
        },
        {
          id: 'proximal-hamstring-tendinopathy-phase-2',
          order: 2,
          title: 'Build Strength: Heavy Slow Hinge',
          summary:
            'Progress to heavy slow hip-hinge loading to rebuild hamstring tendon capacity.',
          goal: 'Rebuild hamstring strength with controlled, heavier hinge loading.',
          durationGuidance: 'Typically 3–6 weeks',
          entryCriteria: [
            'Comfortable with long-lever and single-leg bridge holds',
            'Seated tolerance improving',
          ],
          exitCriteria: [
            'Tolerating heavy slow hinging without next-day flare',
            'Hamstring strength improving toward the other side',
          ],
          educationPoints: [
            'Slow, controlled tempo matters more than maximal weight early on.',
            'Hinge loading rebuilds the tendon\'s tolerance for deadlifts and stride extension.',
            'Keep the pain rule in mind — load up to mild pain that settles overnight.',
          ],
          exercises: [
            {
              id: 'pht-heavy-slow-hinge',
              name: 'Heavy slow hip hinge',
              aka: ['Romanian deadlift', 'hip hinge'],
              target: 'Hamstring–glute chain and proximal hamstring tendon',
              purpose:
                'Heavy slow resistance hinging is a primary driver of tendon adaptation.',
              dose: { sets: 4, reps: '6–8', tempo: '3s lower, 3s up' },
              frequency: '2–3x/week (allow a rest day between heavy sessions)',
              progression: 'Add load gradually; progress toward single-leg hinging.',
              regression: 'Reduce load, shorten the range, or limit forward reach.',
              formCues: [
                'Hinge from the hips, not the low back',
                'Ribs down, neutral spine',
                'Push through the heels',
                'Control the lowering — no bouncing at the bottom',
              ],
              painRule:
                'mild pain up to about 3/10 that settles by the next morning.',
              cautions: [
                'Avoid deep, painful hip flexion early — keep the range to what stays within the pain rule.',
              ],
              equipment: ['Dumbbells, kettlebell, or barbell'],
              diagram: {
                key: 'hip-hinge',
                altText:
                  'Person performing a hip hinge, bending forward from the hips with a neutral spine while holding a weight.',
              },
            },
            {
              id: 'pht-single-leg-bridge',
              name: 'Single-leg hamstring bridge',
              target: 'Hamstring tendon and glutes',
              purpose:
                'Increases isolated hamstring tendon load and addresses side-to-side differences.',
              dose: { sets: 3, reps: '8–10 each side', tempo: 'controlled' },
              frequency: '3x/week',
              progression: 'Elevate the heel on a step or extend the lever further.',
              regression: 'Return to a two-leg bridge or bend the knee more.',
              formCues: [
                'Heel pulls down and drives the hips up',
                'Keep the hips level — don\'t let one side drop',
                'Ribs down, no arching',
              ],
              painRule:
                'mild pain up to about 3/10 that settles overnight.',
              equipment: ['A mat', 'Optional step for the heel'],
              diagram: {
                key: 'glute-bridge',
                altText:
                  'Person bridging the hips up while balancing on one foot.',
              },
            },
          ],
        },
        {
          id: 'proximal-hamstring-tendinopathy-phase-3',
          order: 3,
          title: 'Build Capacity: Slider Curls',
          summary:
            'Add longer-range, faster hamstring loading with slider curls to prepare for running.',
          goal: 'Tolerate longer-range and faster hamstring loading approaching sport demands.',
          durationGuidance: 'Typically 4–8 weeks',
          entryCriteria: [
            'Heavy slow hinging tolerated without flare',
            'Hamstring strength roughly even side to side',
          ],
          exitCriteria: [
            'Slider curls performed with control and no next-day flare',
            'Jogging tolerated within the pain rule',
          ],
          educationPoints: [
            'Longer-range and faster loading rebuilds the tendon\'s ability to handle running.',
            'Alternate harder and easier days as you add speed.',
            'Keep your strength work going as you add running.',
          ],
          exercises: [
            {
              id: 'pht-slider-curls',
              name: 'Slider hamstring curls',
              aka: ['Sliding leg curls'],
              target: 'Hamstring muscle–tendon unit',
              purpose:
                'Loads the hamstring through a longer range to build capacity for running and stride.',
              dose: { sets: 3, reps: '8–12', tempo: 'slow return' },
              frequency: '2–3x/week',
              progression: 'Progress from two legs to single-leg curls.',
              regression: 'Reduce range, slow the tempo, or assist with the arms.',
              formCues: [
                'Keep the hips lifted throughout',
                'Slide the heels out and pull them back under control',
                'Ribs down, no low-back arching',
              ],
              painRule:
                'mild pain up to about 3/10 that settles by the next morning.',
              equipment: ['Furniture sliders or a towel on a smooth floor'],
              diagram: {
                key: 'glute-bridge',
                altText:
                  'Person in a bridge position sliding the heels out and curling them back in.',
              },
            },
          ],
        },
        {
          id: 'proximal-hamstring-tendinopathy-phase-4',
          order: 4,
          title: 'Return to Running & Sprinting',
          summary:
            'Graded running progression with sprinting reintroduced last.',
          goal: 'Return to running and sport without a next-day symptom flare, with sprinting reintroduced last.',
          durationGuidance: 'Varies; weeks to months depending on the sport',
          entryCriteria: [
            'Sitting tolerance, hinge loading, and jogging are tolerated',
            'Slider curls and heavy hinging tolerated without flare',
          ],
          exitCriteria: [
            'Running at desired volume with stable symptoms',
            'Sprinting and stride extension tolerated without next-day flare',
          ],
          educationPoints: [
            'Sprinting is the last thing to reintroduce — add it only after jogging is comfortable.',
            'Build running volume gradually and watch the morning-after response.',
            'Maintain a weekly strength habit to protect against recurrence.',
          ],
          exercises: [
            {
              id: 'pht-running-progression',
              name: 'Running progression',
              target: 'Whole-leg running tolerance',
              purpose:
                'Reintroduces jogging and then faster running in controlled, progressive steps, with sprinting last.',
              dose: { notes: 'e.g., walk–jog intervals progressing to continuous jogging, then strides and sprinting' },
              frequency: '3x/week, building gradually',
              progression: 'Add jogging time, then pace, then strides, then sprinting.',
              regression: 'Shorten the session or add more walk intervals.',
              formCues: [
                'Advance only when next-day symptoms are stable',
                'Warm up before running',
                'Reintroduce sprinting last, after jogging is comfortable',
              ],
              painRule:
                'mild pain up to about 3/10 that settles by the next morning.',
              cautions: ['Hold sprinting and hard stride work until jogging is symptom-stable.'],
              diagram: {
                key: 'ankle-balance',
                altText: 'Person jogging as part of a graded running return.',
              },
            },
            {
              id: 'pht-maintenance-strength',
              name: 'Maintenance hamstring strength',
              target: 'Hamstring–glute chain',
              purpose: 'Protects the gains and reduces recurrence risk.',
              dose: { sets: 3, reps: '6–10' },
              frequency: '1–2x/week, ongoing',
              progression: 'Keep the load challenging as you return to sport.',
              regression: 'Reduce to bodyweight bridges if busy or sore.',
              formCues: [
                'Hinge from the hips with a neutral spine',
                'Control the tempo',
                'Train both sides',
              ],
              diagram: {
                key: 'hip-hinge',
                altText: 'Person performing a loaded hip hinge for maintenance.',
              },
            },
          ],
        },
      ],
    },
    evidence: {
      strength: 'limited',
      bottomLine:
        'Progressive loading is standard, but high-quality comparative evidence is sparse.',
      whatHelps: [
        'Progressive loading — isometric and hamstring bridges, heavy slow hinging, and slider curls',
        'A staged running progression with sprinting reintroduced last',
        'Modifying aggravating sitting, hills, and heavy hinging rather than resting fully',
        'Patience: tendon recovery commonly takes 3 to 9 months',
      ],
      whatsUncertain: [
        'High-quality comparative evidence is sparse, so the best loading protocol is not established.',
        'The added value of procedures (e.g., shockwave, injections) over loading alone is uncertain.',
        'Overlap with sciatic irritation and ischial bursitis can make self-diagnosis unreliable.',
      ],
      citationIds: [
        'proximal-hamstring-nasser-2021',
        'proximal-hamstring-dizon-2023',
        'proximal-hamstring-cacchio-2011',
      ],
    },
    procedures: [
      {
        procedureId: 'corticosteroid',
        relevance: 'selected-cases',
        evidenceNote:
          'Selected cases but usually not favored routinely around the tendon.',
        citationIds: ['proximal-hamstring-dizon-2023'],
      },
      {
        procedureId: 'prp',
        relevance: 'selected-cases',
        evidenceNote: 'Selected cases, uncertain.',
        citationIds: ['proximal-hamstring-dizon-2023'],
      },
      {
        procedureId: 'hyaluronic-acid',
        relevance: 'not-indicated',
        evidenceNote: 'Not indicated.',
      },
      {
        procedureId: 'shockwave',
        relevance: 'selected-cases',
        evidenceNote: 'ESWT: selected cases, some supportive evidence.',
        citationIds: ['proximal-hamstring-cacchio-2011'],
      },
      {
        procedureId: 'ultrasound-guided',
        relevance: 'selected-cases',
        evidenceNote: 'Ultrasound-guided injection: selected cases.',
      },
      {
        procedureId: 'tenotomy',
        relevance: 'selected-cases',
        evidenceNote: 'Percutaneous tenotomy: selected cases, limited evidence.',
      },
    ],
    returnToActivity: {
      criteria: [
        'Sitting tolerance restored',
        'Hinge loading tolerated',
        'Jogging tolerated without flare',
        'Sprinting reintroduced last',
      ],
      timelineGuidance:
        'Recovery is often slow, commonly 3 to 9 months and individual to the demands of your sport.',
      reinjuryPrevention: [
        'Keep a weekly hamstring-strength habit',
        'Increase sprinting, hills, and hinge loads gradually',
        'Manage prolonged sitting and respect early warning symptoms',
      ],
    },
    faqs: [
      {
        q: 'Why does sitting make it worse?',
        a: 'Sitting compresses the hamstring tendon against the sit bone, which often aggravates the pain. Using a cushion and breaking up long sitting can help while the tendon recovers.',
        citationIds: ['proximal-hamstring-dizon-2023'],
      },
      {
        q: 'How long until I feel better?',
        a: 'Recovery is often slow, commonly 3 to 9 months with consistent, progressive loading. Tendons adapt gradually, so steady progress matters more than speed.',
        citationIds: ['proximal-hamstring-nasser-2021'],
      },
      {
        q: 'When can I sprint again?',
        a: 'Sprinting is reintroduced last. Return when sitting tolerance, hinge loading, and jogging are all comfortable, then build speed and strides gradually.',
        citationIds: ['proximal-hamstring-nasser-2021'],
      },
      {
        q: 'Could this be something other than the tendon?',
        a: 'Possibly — overlap with sciatic nerve irritation and ischial bursitis can make self-diagnosis unreliable. See a clinician if you have persistent sciatic symptoms (leg pain, numbness, or tingling) or if you are not improving.',
        citationIds: ['proximal-hamstring-dizon-2023'],
      },
    ],
    relatedConditionIds: ['gluteal-tendinopathy'],
    review: {
      status: 'physician-review-pending',
      contentVersion: '1.0.0',
    },
  },
}

export default moduleData
