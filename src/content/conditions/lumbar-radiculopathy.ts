import type { Citation, ConditionModule } from '../types'

/**
 * Lumbar Radiculopathy (Sciatica).
 * Transcribed faithfully from the physician-authored deep-research PDF
 * (Evidence-Based Sports Medicine Library Draft, pp. 26-27). Care tier is
 * pc-referral-trigger: many cases are manageable initially, but escalating
 * neurologic loss changes the pathway — those triggers are flagged as red
 * flags below. Ships physician-review-pending for Dr. Swisher's sign-off.
 * Per the physician review note, the home-exercise wording emphasizes
 * centralization concepts but avoids pairing too strongly with any one
 * school of care.
 */

const citations: Citation[] = [
  {
    id: 'lumbar-nass-2014-radiculopathy',
    label: 'NASS Lumbar Disc Herniation CPG (2014)',
    authorsOrOrg: 'Kreiner DS, et al.',
    source: 'The Spine Journal',
    year: 2014,
    type: 'guideline',
    url: 'https://pubmed.ncbi.nlm.nih.gov/24239490/',
    takeaway:
      'NASS clinical practice guideline for lumbar disc herniation with radiculopathy: many cases improve with conservative care, and management should account for the favorable natural history.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'lumbar-nice-ng59',
    label: 'NICE NG59 — Low back pain and sciatica (2016, updated 2020)',
    authorsOrOrg: 'National Institute for Health and Care Excellence',
    source: 'NICE Guideline NG59',
    year: 2020,
    type: 'guideline',
    url: 'https://www.nice.org.uk/guidance/ng59',
    takeaway:
      'For low back pain and sciatica, keep active and use exercise as a core component of care; reserve injections and surgery for selected cases.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'lumbar-jacobs-2011-cochrane',
    label: 'Jacobs Cochrane review (2011)',
    authorsOrOrg: 'Jacobs WCH, et al.',
    source: 'Cochrane Database of Systematic Reviews',
    year: 2011,
    type: 'systematic-review',
    url: 'https://pubmed.ncbi.nlm.nih.gov/20949289/',
    takeaway:
      'Systematic review of surgery versus conservative management for sciatica: surgery can speed early relief, but longer-term outcomes converge for many patients.',
    verified: true,
    lastChecked: '2026-06-21',
  },
]

const moduleData: ConditionModule = {
  citations,
  condition: {
    id: 'lumbar-radiculopathy',
    slug: 'lumbar-radiculopathy',
    name: 'Lumbar Radiculopathy (Sciatica)',
    shortName: 'Sciatica',
    aka: [
      'sciatica',
      'pinched nerve in the low back',
      'lumbar nerve root irritation',
      'radicular leg pain',
      'lumbar disc herniation with radiculopathy',
      'slipped disc with leg pain',
    ],
    region: 'low-back',
    sportTags: ['lifting', 'golf', 'running'],
    careTier: 'pc-referral-trigger',
    oneLiner:
      'Irritation or compression of a lumbar nerve root — often from a disc herniation — that sends back-related pain into the buttock or leg, sometimes with numbness, tingling, or weakness.',
    overview:
      'Lumbar radiculopathy is irritation or compression of a lumbar nerve root, often from a disc herniation. It causes back-related pain that travels into the buttock or leg and may include numbness, tingling, or weakness.\n\nWhen the irritated nerve runs down the back of the leg, people often call it "sciatica." The leg pain typically follows a specific path (a "root pattern") and, for some people, is worse with coughing or sneezing.\n\nThe encouraging part is that many cases settle over time without surgery. The goal of care is to keep you moving, protect the nerve, and gradually rebuild your tolerance for walking, lifting, and sport — while watching for the small number of warning signs that change the urgency.',
    tissue:
      'A lumbar nerve root — the part of a spinal nerve where it exits the low back — most often irritated or compressed by a herniated disc.',
    video: {
      videoId: 'XyuLHDovMmQ',
      title: 'Low Back Pain, Sciatica, & Disc Herniations - What You Need To Know About Exercise, Surgery, & Rehab',
      channel: 'E3 Rehab',
      channelUrl: 'https://www.youtube.com/@E3Rehab',
      approved: false,
      note: 'Re-curated to an evidence-based rehab source; pending physician review.',
    },
    anatomyDiagram: {
      key: 'anatomy-lumbar',
      altText:
        'Diagram of the lower spine showing the vertebrae, an intervertebral disc bulging backward, and a nerve root exiting toward the leg.',
      caption:
        'Sciatica usually comes from an irritated nerve root as it leaves the lower spine.',
    },
    causes: [
      'A disc herniation pressing on or inflaming a nearby nerve root (the classic cause)',
      'Bending, lifting, or twisting loads that aggravate the disc and nerve',
      'Age-related disc and joint changes that narrow the space around the nerve',
    ],
    riskFactors: [
      'Heavy or repetitive lifting',
      'Sports with bending, loading, or rotation (lifting, golf, running)',
      'Prolonged sitting or sudden increases in spinal load',
      'Older age and a prior episode of back-related leg pain',
    ],
    symptoms: [
      'Leg pain in a root pattern (often down the buttock and back of the leg)',
      'Pain that is worse with coughing or sneezing for some people',
      'Sensory changes — numbness or tingling along the affected nerve path',
      'Weakness in the leg or foot',
      'Sometimes reduced reflexes',
    ],
    prognosis: {
      summary:
        'Many cases improve over time without surgery as the nerve settles. A progressive (worsening) neurologic deficit is the part that increases the urgency.',
      typicalTimeline:
        'Many people improve over 6 to 12 weeks, though recovery can vary.',
      encouragement:
        'Most sciatica settles with time and graded activity. Pain that travels back up the leg toward the spine ("centralizing") is generally a good sign.',
    },
    redFlags: [
      {
        text: 'Cauda equina symptoms — such as loss of bladder or bowel control, numbness in the saddle/groin area, or rapidly worsening weakness in both legs. Go to the emergency department now.',
        urgency: 'emergency',
      },
      {
        text: 'A progressive (worsening) motor deficit — increasing weakness in the leg or foot — needs urgent in-person evaluation.',
        urgency: 'urgent',
      },
      {
        text: 'Severe, uncontrolled pain.',
        urgency: 'urgent',
      },
      {
        text: 'Persistent leg-dominant pain beyond several weeks should be confirmed in person, where a clinician decides whether imaging or referral is appropriate.',
        urgency: 'see-clinician',
      },
    ],
    selfCare: {
      dos: [
        'Keep moving — stay as active as comfort allows and avoid bed rest.',
        'Use a directional preference: favor positions and movements (often gentle back extension) that draw the pain up out of the leg ("centralization").',
        'Walk regularly within comfort to maintain activity and tolerance.',
        'Build lifting tolerance back gradually as symptoms and nerve function improve.',
      ],
      donts: [
        'Don’t push movements that send the leg pain farther down the leg — that direction is a signal to back off.',
        'Don’t rest in bed for prolonged periods; prolonged inactivity tends to slow recovery.',
        'Don’t rush back to heavy or repetitive lifting before tolerance returns.',
        'Don’t ignore worsening weakness, numbness, or any bladder/bowel change — these need prompt evaluation.',
      ],
    },
    clinicalGoal:
      'Calm the irritated nerve, restore walking and neurologic tolerance, and rebuild lifting capacity for return to sport.',
    hep: {
      overview:
        'A staged program that uses your directional preference to settle the nerve, then rebuilds movement, trunk endurance, and lifting tolerance. Centralization — pain moving up out of the leg toward the spine — guides progression; a directional preference is used when it centralizes symptoms. Move on when you meet a phase’s exit criteria, and drop back a step if symptoms spread farther down the leg.',
      phases: [
        {
          id: 'lumbar-radiculopathy-phase-1',
          order: 1,
          title: 'Calm the Nerve',
          summary:
            'Find a directional preference and use it to draw the pain up out of the leg while staying active.',
          goal: 'Reduce leg-dominant pain and identify movements that centralize symptoms.',
          durationGuidance: 'Typically 1–2 weeks',
          entryCriteria: [
            'New or flared leg pain in a nerve-root pattern',
            'No red-flag features (no bladder/bowel changes, no progressive weakness)',
          ],
          exitCriteria: [
            'Leg pain is centralizing (moving up out of the leg toward the spine)',
            'Able to walk short distances and move without sharp spread of leg pain',
          ],
          educationPoints: [
            'Leg pain moving upward toward the spine is a good sign; pain spreading farther down is a signal to back off.',
            'Stay active within comfort — avoid bed rest.',
            'Centralization is the guide here, more than chasing a particular pain number.',
          ],
          exercises: [
            {
              id: 'lumb-prone-press-up',
              name: 'Prone press-up',
              aka: ['extension in lying', 'cobra press-up'],
              target: 'Lumbar spine (directional preference / extension)',
              purpose:
                'A directional-preference exercise used when it centralizes symptoms — drawing leg pain up toward the spine.',
              dose: { sets: 2, reps: '10' },
              frequency: '3–5 times per day if it centralizes',
              progression:
                'Progress end-range only if helpful — press a little higher as leg pain keeps moving upward.',
              regression:
                'Regress to propping on the elbows, or to standing extension.',
              formCues: [
                'Hips stay down',
                'Move gently',
                'Leg pain moving upward is a good sign',
                'Stop if pain spreads farther down',
              ],
              painRule: 'Centralization preferred — favor movement that draws pain up out of the leg.',
              cautions: [
                'Use only if it centralizes symptoms; if it sends pain farther down the leg, stop and back off.',
              ],
              equipment: ['A firm surface or mat'],
              diagram: {
                key: 'prone-press-up',
                altText:
                  'Person lying face down pressing the upper body up while the hips stay on the floor.',
              },
            },
            {
              id: 'lumb-walking',
              name: 'Walking',
              target: 'General activity tolerance',
              purpose:
                'Maintains activity and keeps you moving while the nerve settles; avoids the strict-rest trap.',
              dose: { notes: '10–30 minutes daily; progress time before speed' },
              frequency: 'Daily',
              progression: 'Progress time before speed; build duration gradually.',
              regression: 'Regress to shorter, more frequent bouts.',
              formCues: [
                'Relaxed arms',
                'Steady breathing',
                'Avoid bed rest',
                'Build gradually',
              ],
              painRule: 'Mild pain acceptable if it settles.',
              diagram: {
                key: 'anatomy-lumbar',
                altText: 'Person walking upright at an easy, relaxed pace.',
              },
            },
          ],
        },
        {
          id: 'lumbar-radiculopathy-phase-2',
          order: 2,
          title: 'Restore Movement',
          summary:
            'Add gentle neural mobility and early trunk-endurance work as the leg pain settles.',
          goal: 'Improve nerve mobility and reintroduce controlled spinal movement.',
          durationGuidance: 'Typically 2–4 weeks',
          entryCriteria: [
            'Leg pain has centralized and is easing',
            'Comfortable walking 15–20 minutes',
          ],
          exitCriteria: [
            'Neural mobility tolerated without a lasting flare',
            'Can perform basic trunk-endurance holds with good control',
          ],
          educationPoints: [
            'Neural mobility (nerve glides) keeps the nerve sliding freely — use only if tolerated.',
            'Trunk endurance protects the back during daily and sport movements.',
            'Continue your directional-preference movement and walking from Phase 1.',
          ],
          exercises: [
            {
              id: 'lumb-sciatic-nerve-glide',
              name: 'Sciatic nerve glide',
              aka: ['neural mobility', 'nerve floss'],
              target: 'Sciatic nerve (neural mobility)',
              purpose:
                'Gentle gliding to help the irritated nerve move freely, used if tolerated.',
              dose: { sets: 2, reps: '10', tempo: 'slow and gentle' },
              frequency: 'Daily if tolerated',
              progression: 'Increase range or reps gradually as tolerance improves.',
              regression: 'Reduce range, or perform fewer, slower repetitions.',
              formCues: [
                'Move gently and slowly',
                'No forcing into pain',
                'Glide, don’t stretch hard',
                'Stop if leg symptoms increase',
              ],
              painRule: 'Keep it gentle; back off if leg symptoms increase.',
              cautions: ['Use only if tolerated; not meant to provoke leg pain.'],
              diagram: {
                key: 'sciatic-nerve-glide',
                altText:
                  'Person performing a seated sciatic nerve glide, extending the knee while moving the ankle.',
              },
            },
            {
              id: 'lumb-bird-dog',
              name: 'Bird-dog',
              target: 'Trunk and spinal endurance',
              purpose:
                'Builds trunk endurance and control with a low load on the spine.',
              dose: { sets: 3, reps: '8–10 each side', holdSeconds: 3 },
              frequency: 'Daily or every other day',
              progression: 'Hold longer, or add small limb taps and reaches.',
              regression: 'Move one limb at a time, or shorten the reach.',
              formCues: [
                'Keep a level, steady back like a tabletop',
                'Reach opposite arm and leg slowly',
                'Avoid twisting or sagging',
              ],
              painRule: 'Mild discomfort acceptable if it settles; no increase in leg pain.',
              equipment: ['A firm surface or mat'],
              diagram: {
                key: 'bird-dog',
                altText:
                  'Person on hands and knees extending the opposite arm and leg while keeping the back level.',
              },
            },
          ],
        },
        {
          id: 'lumbar-radiculopathy-phase-3',
          order: 3,
          title: 'Build Strength & Endurance',
          summary:
            'Strengthen the hips and trunk to support the spine and prepare for loading.',
          goal: 'Build hip strength and trunk endurance to protect the back under load.',
          durationGuidance: 'Typically 3–6 weeks',
          entryCriteria: [
            'Leg symptoms minimal and stable',
            'Neural mobility and trunk holds tolerated well',
          ],
          exitCriteria: [
            'Hip and trunk strength feel solid in daily movements',
            'No flare of leg symptoms with progressive loading',
          ],
          educationPoints: [
            'Strong hips and trunk share load and protect the spine during lifting and sport.',
            'Keep walking and your directional-preference movement in the routine.',
            'Progress load gradually and watch for any return of leg-dominant pain.',
          ],
          exercises: [
            {
              id: 'lumb-glute-bridge',
              name: 'Glute bridge',
              target: 'Gluteals and posterior hip',
              purpose:
                'Strengthens the hips to support the spine and reduce load on the back.',
              dose: { sets: 3, reps: '10–12', tempo: '2s up, 2s down' },
              frequency: 'Every other day',
              progression: 'Progress to single-leg bridges or add light load.',
              regression: 'Reduce range or hold for shorter counts.',
              formCues: [
                'Squeeze the glutes to lift the hips',
                'Keep the spine neutral — don’t overarch',
                'Lower under control',
              ],
              painRule: 'Mild discomfort acceptable if it settles; keep it leg-pain free.',
              diagram: {
                key: 'glute-bridge',
                altText:
                  'Person lying on their back lifting the hips into a bridge position.',
              },
            },
            {
              id: 'lumb-side-plank',
              name: 'Side plank',
              target: 'Lateral trunk and hip stabilizers',
              purpose:
                'Builds trunk endurance that protects the spine during rotation and loading sports.',
              dose: { sets: 3, holdSeconds: 20 },
              frequency: 'Every other day',
              progression: 'Hold longer or progress from knees to feet.',
              regression: 'Drop to the knees or shorten the hold.',
              formCues: [
                'Stack the body in a straight line',
                'Lift the hips and hold steady',
                'Breathe normally through the hold',
              ],
              painRule: 'No increase in leg symptoms; shorten the hold if needed.',
              equipment: ['A firm surface or mat'],
              diagram: {
                key: 'side-plank',
                altText:
                  'Person holding a side plank on the forearm with the body in a straight line.',
              },
            },
          ],
        },
        {
          id: 'lumbar-radiculopathy-phase-4',
          order: 4,
          title: 'Return to Lifting & Sport',
          summary:
            'Rebuild lifting tolerance and sport-specific movement gradually.',
          goal: 'Return to lifting, golf, or running without a flare of leg symptoms.',
          durationGuidance: 'Varies; weeks to months depending on demands',
          entryCriteria: [
            'Walking, neurologic function, and trunk strength all solid',
            'No leg-dominant pain with daily loading',
          ],
          exitCriteria: [
            'Back to desired lifting and sport volume with stable symptoms',
            'Maintaining a regular trunk- and hip-strength habit',
          ],
          educationPoints: [
            'Build lifting tolerance back gradually rather than all at once.',
            'A hip-hinge pattern shares load between the hips and spine when lifting.',
            'Keep trunk- and hip-strength work going to protect against recurrence.',
          ],
          exercises: [
            {
              id: 'lumb-hip-hinge',
              name: 'Hip hinge / graded lifting',
              aka: ['hinge pattern', 'deadlift pattern'],
              target: 'Hips, trunk, and lifting mechanics',
              purpose:
                'Grooves a spine-sharing lifting pattern and rebuilds load tolerance for return to sport.',
              dose: { sets: 3, reps: '8–10', notes: 'add load gradually as tolerated' },
              frequency: '2–3x/week',
              progression: 'Add load gradually; advance toward sport-specific lifts.',
              regression: 'Reduce load or range, or rehearse the pattern unloaded.',
              formCues: [
                'Push the hips back, keep a long neutral spine',
                'Hinge at the hips, not the low back',
                'Drive up through the hips',
                'Add weight only as tolerance improves',
              ],
              painRule: 'Mild discomfort acceptable if it settles; stop if it sends pain down the leg.',
              cautions: ['Progress load gradually; back off if leg-dominant pain returns.'],
              equipment: ['A dowel, then dumbbells, kettlebell, or barbell as appropriate'],
              diagram: {
                key: 'hip-hinge',
                altText:
                  'Person hinging at the hips with a neutral spine to lift a load from the floor.',
              },
            },
            {
              id: 'lumb-walk-sport-ramp',
              name: 'Graded return-to-sport ramp',
              target: 'Whole-body loading and sport-specific tolerance',
              purpose:
                'Reintroduces running, golf, or sport in controlled, progressive steps.',
              dose: { notes: 'Build duration and intensity gradually across sessions' },
              frequency: '2–3x/week, building gradually',
              progression: 'Add time, then intensity, then sport-specific demands.',
              regression: 'Shorten sessions or add more low-load activity.',
              formCues: [
                'Advance only when symptoms stay stable',
                'Warm up first',
                'Watch for any return of leg pain',
              ],
              painRule: 'Mild pain acceptable if it settles; leg-dominant pain means back off.',
              diagram: {
                key: 'anatomy-lumbar',
                altText: 'Person returning to running and lifting activity.',
              },
            },
          ],
        },
      ],
    },
    evidence: {
      strength: 'moderate',
      bottomLine:
        'Many cases improve without surgery; escalating neurologic loss changes the pathway.',
      whatHelps: [
        'Staying active and using exercise as the core of conservative care',
        'Directional-preference movement that centralizes leg pain toward the spine',
        'Gradual return to walking and lifting tolerance',
        'Reserving injections and surgery for selected cases',
      ],
      whatsUncertain: [
        'Evidence for epidural injections is mixed beyond short-term relief.',
        'The best timing for surgery is individual — surgery can speed early relief, but many conservatively managed patients reach similar longer-term outcomes.',
        'Which specific exercise approach works best is not firmly established.',
      ],
      citationIds: [
        'lumbar-nass-2014-radiculopathy',
        'lumbar-nice-ng59',
        'lumbar-jacobs-2011-cochrane',
      ],
    },
    procedures: [
      {
        procedureId: 'corticosteroid',
        relevance: 'selected-cases',
        evidenceNote:
          'Selected cases — an epidural steroid injection can give short-term relief in appropriately evaluated radicular pain.',
        citationIds: ['lumbar-nice-ng59'],
      },
      {
        procedureId: 'prp',
        relevance: 'not-indicated',
        evidenceNote: 'Not indicated.',
      },
      {
        procedureId: 'hyaluronic-acid',
        relevance: 'not-indicated',
        evidenceNote: 'Not indicated.',
      },
      {
        procedureId: 'tenotomy',
        relevance: 'not-indicated',
        evidenceNote: 'Not indicated.',
      },
      {
        procedureId: 'shockwave',
        relevance: 'not-indicated',
        evidenceNote: 'Not indicated (ESWT).',
      },
      {
        procedureId: 'ultrasound-guided',
        relevance: 'selected-cases',
        evidenceNote: 'Specialist selected.',
      },
    ],
    returnToActivity: {
      criteria: [
        'Walking tolerance has improved',
        'Neurologic function (strength, sensation) is stable',
        'Lifting tolerance is improving',
      ],
      timelineGuidance:
        'Return to normal activities early and build lifting tolerance gradually; full sport return varies from weeks to months depending on demands.',
      reinjuryPrevention: [
        'Build lifting load back gradually',
        'Keep a regular trunk- and hip-strength habit',
        'Use a hip-hinge pattern that shares load with the hips',
        'Respect early warning leg symptoms and adjust',
      ],
    },
    faqs: [
      {
        q: 'Will I need surgery for sciatica?',
        a: 'Often not. Many cases improve without surgery as the nerve settles, typically over 6 to 12 weeks. Surgery can speed early relief in selected cases, but it becomes more clearly indicated when there is escalating neurologic loss.',
        citationIds: ['lumbar-nass-2014-radiculopathy', 'lumbar-jacobs-2011-cochrane'],
      },
      {
        q: 'What does it mean if my leg pain moves up toward my back?',
        a: 'That is called "centralization" and it is generally a good sign. Favoring movements that draw the pain up out of the leg, and backing off ones that send it farther down, helps guide your recovery.',
        citationIds: ['lumbar-nice-ng59'],
      },
      {
        q: 'Should I rest in bed until the pain goes away?',
        a: 'No. Staying active and keeping moving within comfort is recommended over prolonged bed rest, which tends to slow recovery. Walking and graded exercise are the core of care.',
        citationIds: ['lumbar-nice-ng59'],
      },
      {
        q: 'When is sciatica an emergency?',
        a: 'Seek emergency care for cauda equina symptoms — loss of bladder or bowel control, numbness in the saddle/groin area, or rapidly worsening weakness in both legs. Get urgent care for a progressive (worsening) motor deficit or severe, uncontrolled pain.',
      },
    ],
    relatedConditionIds: ['low-back-pain', 'spondylolysis'],
    review: {
      status: 'physician-review-pending',
      contentVersion: '1.0.0',
    },
  },
}

export default moduleData
