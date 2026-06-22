import type { Citation, ConditionModule } from '../types'

/**
 * Patellar tendinopathy ("jumper's knee"). Transcribed faithfully from the
 * physician-authored deep-research source. Citations are real and were
 * confirmed during that research; all clinical content ships
 * physician-review-pending for Dr. Swisher's sign-off.
 */

const citations: Citation[] = [
  {
    id: 'patellar-malliaras-2015-review',
    label: 'Malliaras 2015 (clinical review)',
    authorsOrOrg: 'Malliaras P, Cook J, Purdam C, Rio E.',
    source: 'Journal of Orthopaedic & Sports Physical Therapy (clinical review)',
    year: 2015,
    type: 'narrative-review',
    url: 'https://pubmed.ncbi.nlm.nih.gov/26390269/',
    takeaway:
      'Progressive tendon loading — isometric, heavy-slow resistance, and energy-storage exercise — is the foundation of managing patellar tendinopathy.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'patellar-challoumas-2021-nma',
    label: 'Challoumas 2021 (systematic review / network meta-analysis)',
    authorsOrOrg: 'Challoumas D, et al.',
    source: 'Systematic review / network meta-analysis',
    year: 2021,
    type: 'systematic-review',
    url: 'https://pubmed.ncbi.nlm.nih.gov/34900334/',
    takeaway:
      'Across treatments for patellar tendinopathy, exercise-based loading is the best-supported approach; evidence for adjuncts such as ESWT and injectables is mixed.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'patellar-breda-2021-rct',
    label: 'Breda 2021 (RCT, progressive tendon loading)',
    authorsOrOrg: 'Breda SJ, et al.',
    source: 'Randomized controlled trial',
    year: 2021,
    type: 'rct',
    url: 'https://pubmed.ncbi.nlm.nih.gov/33219115/',
    takeaway:
      'A progressive tendon-loading program improved outcomes in patellar tendinopathy, supporting a structured, graded loading approach.',
    verified: true,
    lastChecked: '2026-06-21',
  },
]

const moduleData: ConditionModule = {
  citations,
  condition: {
    id: 'patellar-tendinopathy',
    slug: 'patellar-tendinopathy',
    name: "Patellar Tendinopathy (Jumper's Knee)",
    shortName: 'Patellar Tendinopathy',
    aka: [
      "jumper's knee",
      'patellar tendinitis',
      'patellar tendinosis',
      'inferior pole patellar tendinopathy',
      'patellar tendon pain',
    ],
    region: 'knee',
    sportTags: ['basketball', 'volleyball', 'running'],
    careTier: 'pc-core',
    oneLiner:
      'Load-related pain at the patellar tendon, just below the kneecap, common in jumping sports and built back with progressive loading.',
    overview:
      'Patellar tendinopathy is pain coming from the patellar tendon, usually near the inferior pole of the patella — the bottom tip of the kneecap. This tendon connects your kneecap to your shin and takes a lot of force every time you jump, land, or push off.\n\nIt is common in jumping sports and causes load-related pain with jumping, landing, squatting, or going up and down stairs. The pain is typically felt right at the tendon and gets worse as the load on it goes up.\n\nLike other tendon problems, it reflects a mismatch between how much load the tendon is asked to handle and how much it is currently prepared for — not a sign that the knee is "wearing out." Most people improve with a patient, progressive loading program.',
    tissue:
      'The patellar tendon, especially at its attachment to the inferior pole of the patella (the bottom tip of the kneecap).',
    video: {
      videoId: 'e7oGNVUQi2I',
      title: "Patellar Tendinopathy / Tendinitis / Tendinosis | Jumper's Knee Rehab (Education, Myths, Exercises)",
      channel: 'E3 Rehab',
      approved: true,
      note: 'Physician-curated demonstration video.',
    },
    anatomyDiagram: {
      key: 'anatomy-knee',
      altText:
        'Front view of the knee showing the kneecap (patella) and the patellar tendon running from the bottom tip of the kneecap to the shin bone.',
      caption:
        'The patellar tendon connects the kneecap to the shin; pain is usually at the bottom tip of the kneecap.',
    },
    causes: [
      'Repeated jumping and landing',
      'Sprinting and explosive push-off',
      'Spikes in training load (a sudden jump in volume or intensity)',
    ],
    riskFactors: [
      'Sports with lots of jumping and cutting (basketball, volleyball)',
      'Rapid increases in training load',
      'Limited lower-limb strength or load capacity for the demand',
    ],
    symptoms: [
      'Localized pain at the patellar tendon, just below the kneecap',
      'Pain that is worse with high load — jumping, landing, deep squats, and stairs',
      'Tendon pain that increases as the load on the knee goes up',
    ],
    prognosis: {
      summary:
        'Most cases improve with a consistent, progressive loading program. Tendons adapt slowly, so progress is measured over weeks to months.',
      typicalTimeline:
        'Recovery often takes 6 to 12+ weeks, and chronic cases can take months.',
      encouragement:
        'Steady, graded loading is what rebuilds the tendon. Some discomfort during loading is expected and is not a sign of harm as long as it stays within a tolerable range.',
    },
    redFlags: [
      {
        text: 'Suspicion of an acute tendon rupture after a pop — for example a sudden snap with sharp pain and difficulty straightening or using the knee.',
        urgency: 'urgent',
      },
      {
        text: 'Diffuse swelling of the knee.',
        urgency: 'see-clinician',
      },
      {
        text: 'Inability to extend (straighten) the knee.',
        urgency: 'see-clinician',
      },
      {
        text: 'Failed months of appropriate rehab without improvement.',
        urgency: 'see-clinician',
      },
    ],
    selfCare: {
      dos: [
        'Do your loading exercises consistently — progressive loading is the treatment, not an add-on.',
        'Use the pain-monitoring rule: discomfort up to about 3/10 during exercise is acceptable if it settles by the next morning.',
        'Reduce, rather than completely stop, the activities that spike tendon load while you rebuild capacity.',
        'Return to jumping and running only after heavy strengthening is tolerated and landing pain stays mild.',
      ],
      donts: [
        "Don't push through sharp or worsening pain, or pain that builds from day to day.",
        'Don’t spike your training load suddenly — load spikes are a classic trigger.',
        "Don't rush back to jumping before your strength work is solid and landing pain is mild.",
        "Don't rely on a steroid injection to fix it — corticosteroid is usually avoided for this tendon.",
      ],
    },
    clinicalGoal:
      'Pain-controlled jumping and landing, and a durable return to jumping sports through progressive tendon loading',
    hep: {
      overview:
        'A staged loading program for the patellar tendon: start with isometric holds (decline/Spanish squat), build with heavy-slow resistance, progress single-leg decline squats, and finally reintroduce jumping. Each phase has a clear goal and exit criteria — advance when you meet them, not by the calendar. If a phase flares you, drop back a step.',
      phases: [
        {
          id: 'patellar-tendinopathy-phase-1',
          order: 1,
          title: 'Calm & Isometric Loading',
          summary:
            'Settle the most irritable symptoms and start gentle, sustained isometric loading with the Spanish (decline) squat.',
          goal: 'Reduce day-to-day tendon pain and reintroduce controlled load with isometric holds.',
          durationGuidance: 'Typically 1–2 weeks',
          entryCriteria: [
            'New or flared patellar tendon pain',
            'Pain with jumping, deep squats, or stairs',
          ],
          exitCriteria: [
            'Day-to-day tendon pain is easing',
            'Can hold a Spanish squat with pain ≤3/10 that settles overnight',
          ],
          educationPoints: [
            'Isometric holds can reduce pain and start strengthening with little movement.',
            'Some discomfort during loading is OK if it settles by the next morning.',
            'Reduce load spikes (lots of jumping) for now rather than resting completely.',
          ],
          exercises: [
            {
              id: 'pat-spanish-squat-hold',
              name: 'Spanish squat hold',
              aka: ['isometric decline squat', 'wall isometric squat with band'],
              target: 'Patellar tendon and quadriceps',
              purpose:
                'A sustained isometric hold that loads the patellar tendon and can reduce pain while building early strength.',
              dose: { sets: 5, holdSeconds: 38, notes: '5 × 30–45 sec' },
              frequency: 'Daily / as needed',
              progression: 'Progress to longer holds or a deeper squat position.',
              regression: 'Make the hold shallower (less knee bend).',
              formCues: [
                '"Sit back"',
                '"Torso tall"',
                '"Knees over feet"',
                '"Steady tension"',
              ],
              painRule:
                'Default: mild pain up to about 3/10 during the hold is acceptable if it settles by the next morning.',
              equipment: [
                'A sturdy strap or band anchored behind the knees, or a decline/wall setup',
              ],
              diagram: {
                key: 'wall-sit',
                altText:
                  'Person holding a squat position with the shins vertical and torso upright, loading the front of the knees.',
              },
            },
          ],
        },
        {
          id: 'patellar-tendinopathy-phase-2',
          order: 2,
          title: 'Heavy-Slow Resistance',
          summary:
            'Rebuild tendon and quadriceps capacity with heavy, slow strengthening.',
          goal: 'Increase strength and load tolerance with controlled, heavier resistance.',
          durationGuidance: 'Typically 4–8 weeks',
          entryCriteria: [
            'Comfortable holding the Spanish squat',
            'Day-to-day pain settling',
          ],
          exitCriteria: [
            'Tolerating heavy-slow resistance without a next-day flare',
            'Good control through a deeper knee bend with pain ≤3/10',
          ],
          educationPoints: [
            'Slow, controlled tempo matters more than maximum weight at first.',
            'Strength gains in the quad and tendon are what allow a safe return to jumping.',
            'Keep within the pain-monitoring rule and progress gradually.',
          ],
          exercises: [
            {
              id: 'pat-heavy-slow-squat',
              name: 'Heavy-slow resistance squat',
              aka: ['heavy slow resistance', 'leg press / squat (heavy-slow)'],
              target: 'Quadriceps and patellar tendon',
              purpose:
                'Heavy-slow resistance is a primary driver of tendon adaptation and quadriceps strength.',
              dose: { sets: 4, reps: '6–8', tempo: '3s down, 3s up' },
              frequency: '3x/week (allow a rest day between heavy sessions)',
              progression: 'Add load as control improves; progress toward single-leg work.',
              regression: 'Reduce the load or the depth of the squat.',
              formCues: [
                'Lower under control — no dropping',
                'Keep the knees tracking over the feet',
                'Drive up smoothly, full range you can control',
              ],
              painRule:
                'Default: discomfort up to about 3/10 that settles by the next morning is acceptable.',
              equipment: ['Squat or leg-press setup with adjustable load'],
              diagram: {
                key: 'wall-sit',
                altText:
                  'Person performing a slow, controlled loaded squat with knees over the feet.',
              },
            },
          ],
        },
        {
          id: 'patellar-tendinopathy-phase-3',
          order: 3,
          title: 'Single-Leg Decline Progression',
          summary:
            'Progress to single-leg decline squats to load the tendon through a greater range on the affected side.',
          goal: 'Build single-leg strength and tendon tolerance on a decline.',
          durationGuidance: 'Typically 4–6 weeks',
          entryCriteria: [
            'Tolerating heavy-slow resistance without flare',
            'Confident with two-leg loading',
          ],
          exitCriteria: [
            'Can perform single-leg decline squats with good control and pain ≤3/10',
            'Strength approaching the uninjured side',
          ],
          educationPoints: [
            'A decline increases the load on the patellar tendon — progress gradually.',
            'Keep your two-leg strength work going as you add single-leg loading.',
            'Stay within the pain-monitoring rule and watch the next-morning response.',
          ],
          exercises: [
            {
              id: 'pat-single-leg-decline-squat',
              name: 'Single-leg decline squat',
              target: 'Quadriceps and patellar tendon (affected side)',
              purpose:
                'Loads the patellar tendon through a deeper range on one leg to rebuild capacity for sport.',
              dose: { sets: 3, reps: '8–12', tempo: '3s down' },
              frequency: 'Every other day',
              progression: 'Increase decline angle, depth, or add hand-held load.',
              regression: 'Reduce the decline angle or depth, or use light hand support.',
              formCues: [
                'Stand on a decline (heel lower than toes)',
                'Lower slowly on the affected leg',
                'Keep the knee tracking over the foot',
              ],
              painRule:
                'Default: pain up to about 3/10 that settles by the next morning is acceptable.',
              equipment: ['A decline board or wedge (about 25°)'],
              diagram: {
                key: 'decline-single-leg-squat',
                altText:
                  'Person performing a single-leg squat on a decline board, lowering under control.',
              },
            },
          ],
        },
        {
          id: 'patellar-tendinopathy-phase-4',
          order: 4,
          title: 'Jumping Return',
          summary:
            'Reintroduce jumping and running once heavy strengthening is tolerated and landing pain stays mild.',
          goal: 'Return to jumping and sport with stable, mild symptoms.',
          durationGuidance: 'Varies; weeks depending on the sport',
          entryCriteria: [
            'Heavy strengthening tolerated without flare',
            'Single-leg strength approaching the other side',
          ],
          exitCriteria: [
            'Jumping and landing tolerated with only mild pain',
            'Back to desired sport volume with stable symptoms',
          ],
          educationPoints: [
            'Add jumping and running only after heavy strengthening is tolerated and landing pain stays mild.',
            'Reintroduce energy-storage loading gradually — start low and build.',
            'Keep a weekly strength habit to protect against recurrence.',
          ],
          exercises: [
            {
              id: 'pat-jumping-return',
              name: 'Graded jumping / landing return',
              aka: ['energy-storage loading', 'plyometric return'],
              target: 'Patellar tendon energy storage / landing control',
              purpose:
                'Reintroduces fast, spring-like jumping and landing loads to prepare for sport.',
              dose: { sets: 3, reps: '6–10', notes: 'Start low and build amplitude/volume' },
              frequency: '2–3x/week (alternate harder and easier days)',
              progression: 'Increase height, volume, then add sport-specific cutting and landing.',
              regression: 'Smaller, softer hops or fewer repetitions; return to strength work only.',
              formCues: [
                'Land softly and quietly through the forefoot',
                'Keep the knee tracking over the foot on landing',
                'Quality over quantity — stop if landing pain rises',
              ],
              painRule:
                'Begin only after heavy strengthening is tolerated; keep landing pain mild and settling overnight.',
              cautions: [
                'Do not progress jumping if landing pain is more than mild or builds across sessions.',
              ],
              diagram: {
                key: 'decline-single-leg-squat',
                altText:
                  'Person performing a controlled jump and soft landing with the knee tracking over the foot.',
              },
            },
          ],
        },
      ],
    },
    evidence: {
      strength: 'moderate',
      bottomLine:
        'Exercise is the backbone of treatment; corticosteroid is usually avoided.',
      whatHelps: [
        'Progressive loading exercise — isometric (Spanish squat), heavy-slow resistance, and single-leg decline squats',
        'A graded return to jumping once strength is solid and landing pain is mild',
        'Patience: tendon adaptation takes weeks to months',
      ],
      whatsUncertain: [
        'Evidence for ESWT (shockwave) is mixed.',
        'Evidence for PRP is mixed.',
        'No practical modern clinical practice guideline was located; the exercise-first approach is based on reviews and RCTs rather than a formal guideline.',
      ],
      citationIds: [
        'patellar-malliaras-2015-review',
        'patellar-challoumas-2021-nma',
        'patellar-breda-2021-rct',
      ],
    },
    procedures: [
      {
        procedureId: 'corticosteroid',
        relevance: 'not-indicated',
        evidenceNote: 'Rarely / not advised.',
      },
      {
        procedureId: 'prp',
        relevance: 'commonly-discussed',
        evidenceNote: 'Commonly discussed, mixed.',
        citationIds: ['patellar-challoumas-2021-nma'],
      },
      {
        procedureId: 'hyaluronic-acid',
        relevance: 'rarely',
        evidenceNote: 'Rarely.',
      },
      {
        procedureId: 'shockwave',
        relevance: 'selected-cases',
        evidenceNote: 'Selected cases, mixed.',
        citationIds: ['patellar-challoumas-2021-nma'],
      },
      {
        procedureId: 'ultrasound-guided',
        relevance: 'selected-cases',
        evidenceNote: 'Selected cases.',
      },
      {
        procedureId: 'tenotomy',
        relevance: 'selected-cases',
        evidenceNote: 'Selected refractory cases.',
      },
    ],
    returnToActivity: {
      criteria: [
        'Heavy strengthening is tolerated without a next-day flare',
        'Landing pain stays mild',
        'Single-leg strength approaching the uninjured side',
      ],
      timelineGuidance:
        'Recovery often takes 6 to 12+ weeks and chronic cases can take months; return to jumping and running is individual and depends on tolerance.',
      reinjuryPrevention: [
        'Jump and run only after heavy strengthening is tolerated and landing pain stays mild',
        'Increase training load gradually and avoid load spikes',
        'Keep a weekly lower-limb strength habit',
      ],
    },
    faqs: [
      {
        q: 'Where exactly is jumper’s knee felt?',
        a: 'Usually right at the patellar tendon near the inferior pole of the patella — the bottom tip of the kneecap. Pain tends to increase as the load on the knee goes up.',
        citationIds: ['patellar-malliaras-2015-review'],
      },
      {
        q: 'What is the most important treatment?',
        a: 'Progressive loading exercise is the backbone of care — isometric holds, heavy-slow resistance, single-leg decline squats, and then a graded jumping return. Corticosteroid injection is usually avoided.',
        citationIds: ['patellar-breda-2021-rct', 'patellar-challoumas-2021-nma'],
      },
      {
        q: 'When can I get back to jumping and running?',
        a: 'Only after heavy strengthening is tolerated and landing pain stays mild. Recovery often takes 6 to 12+ weeks, and chronic cases can take months.',
        citationIds: ['patellar-malliaras-2015-review'],
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
