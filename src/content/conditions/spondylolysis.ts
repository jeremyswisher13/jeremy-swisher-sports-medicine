import type { Citation, ConditionModule } from '../types'

/**
 * Spondylolysis (young-athlete back pain). Transcribed faithfully from the
 * physician-authored deep-research brief (pp. 28-29). Ships
 * physician-review-pending for Dr. Swisher's sign-off. Citations are the real
 * URLs listed in the source brief.
 */

const citations: Citation[] = [
  {
    id: 'spondylolysis-li-2022-review',
    label: 'Li et al. 2022 (review)',
    authorsOrOrg: 'Li N, et al.',
    source: 'PMC (review)',
    year: 2022,
    type: 'narrative-review',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9425520/',
    takeaway:
      'Early recognition plus load reduction and trunk/hip rehabilitation usually leads to good outcomes; bony healing is variable.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'spondylolysis-aaos-orthoinfo',
    label: 'AAOS OrthoInfo — Spondylolysis & Spondylolisthesis',
    authorsOrOrg: 'AAOS OrthoInfo',
    source: 'American Academy of Orthopaedic Surgeons',
    year: 2022,
    type: 'narrative-review',
    url: 'https://orthoinfo.aaos.org/en/diseases--conditions/spondylolysis-and-spondylolisthesis/',
    takeaway:
      'Patient-facing overview of spondylolysis/spondylolisthesis, a pars stress injury most relevant in younger athletes.',
    verified: true,
    lastChecked: '2026-06-21',
  },
]

const moduleData: ConditionModule = {
  citations,
  condition: {
    id: 'spondylolysis',
    slug: 'spondylolysis',
    name: 'Spondylolysis (Young-Athlete Back Pain)',
    shortName: 'Spondylolysis',
    aka: [
      'pars stress fracture',
      'pars interarticularis stress injury',
      'pars defect',
      'pars fracture',
      'spondylolisthesis (when the vertebra slips)',
    ],
    region: 'low-back',
    sportTags: ['throwing', 'general'],
    careTier: 'borderline-specialist',
    oneLiner:
      'A stress injury of the pars interarticularis of a vertebra, most common in younger athletes who repeatedly extend and rotate the low back.',
    overview:
      'Spondylolysis is a stress injury in the pars interarticularis — a small bony bridge in a vertebra — usually in the low back. It is essentially an overuse stress fracture of the spine that develops from repeated arching (extension) and twisting (rotation).\n\nIt is especially relevant in younger athletes who do a lot of repeated back extension and rotation, such as gymnasts, football players, divers, and athletes in some throwing sports. The typical complaint is focal low back pain that is worse with arching backward.\n\nMany athletes improve over weeks to a few months with activity modification and a graded rehabilitation program focused on trunk and hip control. Whether the bone itself fully heals is variable, but good function and a return to sport are common.',
    tissue:
      'The pars interarticularis — the bony bridge of a vertebra (usually in the lumbar spine) — and the surrounding trunk and hip muscles that control spinal load.',
    video: {
      videoId: 'xFy9euq6_aU',
      title: 'Functional Progression Exercises for Spondylolysis | SYNOPSIS',
      channel: 'Physiotutors',
      approved: true,
      note: 'Physician-curated demonstration video.',
    },
    anatomyDiagram: {
      key: 'anatomy-lumbar',
      altText:
        'Side and back view of the lumbar spine highlighting the pars interarticularis, the small bony bridge of the vertebra where a stress injury can occur.',
      caption:
        'Spondylolysis is a stress injury of the pars interarticularis in the low back.',
    },
    causes: [
      'Repetitive low-back extension (arching backward)',
      'Repetitive rotation (twisting) of the trunk',
      'Sports with combined extension and rotation (gymnastics, football, diving, some throwing sports)',
      'High training volume of back-loading drills in a growing athlete',
    ],
    riskFactors: [
      'Younger / adolescent athlete',
      'Sports with repeated back extension and rotation',
      'High or rapidly increased training load',
      'Tight hamstrings',
    ],
    symptoms: [
      'Focal low back pain, often on one side',
      'Pain that is worse with extension (arching backward)',
      'Pain with sport that eases with activity modification',
      'Tight hamstrings in some athletes',
    ],
    prognosis: {
      summary:
        'Many young athletes improve with activity modification and a graded rehabilitation program. Bony healing of the pars is variable, but good function and return to sport are common.',
      typicalTimeline:
        'Many improve over 6 to 12+ weeks with activity modification and graded rehab.',
      encouragement:
        'Early recognition and reducing the aggravating load are the most important steps. Even when the bone does not fully heal on imaging, athletes commonly return to their sport with good control.',
    },
    redFlags: [
      {
        text: 'Loss of bladder or bowel control, or numbness around the groin or saddle area — go to the emergency department now (possible cauda equina syndrome).',
        urgency: 'emergency',
      },
      {
        text: 'New or progressive numbness or weakness in the legs.',
        urgency: 'urgent',
      },
      {
        text: 'Suspicion of spondylolisthesis (the vertebra slipping forward).',
        urgency: 'urgent',
      },
      {
        text: 'Severe, persistent pain.',
        urgency: 'urgent',
      },
      {
        text: 'An athlete under 25 with persistent extension-related back pain.',
        urgency: 'see-clinician',
      },
    ],
    selfCare: {
      dos: [
        'Take relative rest from the extension-loading sport or drills that provoke pain.',
        'Keep the trunk and hips strong with abdominal/trunk endurance and hip work.',
        'Progress activity gradually as pain settles, returning to extension only when it is pain-free.',
        'Use the pain rule: keep training pain low — no pain with extension.',
      ],
      donts: [
        'Don’t push through pain with back extension (arching).',
        'Don’t return to full sport or extension drills while they still provoke pain.',
        'Don’t ignore persistent extension-related back pain in a young athlete — get it checked.',
        'Don’t spike your training volume when symptoms are improving.',
      ],
    },
    clinicalGoal:
      'Pain-free daily living and a graded, flare-free return to sport with strong trunk and hip control.',
    hep: {
      overview:
        'A graded program built around offloading the aggravating extension/rotation sport while you build trunk endurance and hip strength, then carefully reintroduce extension and sport. Move forward by how the back responds — pain-free extension is the gate to returning to extension drills — not by the calendar. The core rule throughout: no pain with extension.',
      phases: [
        {
          id: 'spondylolysis-phase-1',
          order: 1,
          title: 'Offload & Calm',
          summary:
            'Relative rest from extension-loading sport while you keep moving comfortably.',
          goal: 'Reduce focal low back pain by removing the aggravating extension and rotation load.',
          durationGuidance: 'Typically 1–3 weeks',
          entryCriteria: [
            'Focal low back pain worse with arching backward',
            'Pain provoked by sport involving extension or rotation',
          ],
          exitCriteria: [
            'Daily activities are becoming pain-free',
            'Pain no longer flares with normal walking and bending',
          ],
          educationPoints: [
            'This is an overuse stress injury — backing off the provoking load is the first treatment.',
            'Relative rest means stopping the painful extension drills, not stopping all movement.',
            'Early recognition and load reduction lead to the best outcomes.',
          ],
          exercises: [
            {
              id: 'spond-relative-rest',
              name: 'Relative rest from extension-loading sport',
              target: 'Pars interarticularis (offloading)',
              purpose:
                'Removes the repeated arching and twisting that drives the stress injury so the back can settle.',
              dose: {
                notes:
                  'Pause extension/rotation drills and sport; keep comfortable daily activity and pain-free movement.',
              },
              frequency: 'Ongoing until pain settles',
              progression:
                'Gradually reintroduce general activity as daily living becomes pain-free.',
              regression:
                'Reduce activity further if any extension or twisting still provokes pain.',
              formCues: [
                'Avoid arching backward and forceful twisting',
                'Keep walking and gentle movement within comfort',
                'Notice which positions provoke the focal pain and avoid them for now',
              ],
              painRule: 'No pain with extension.',
              diagram: {
                key: 'anatomy-lumbar',
                altText:
                  'Lumbar spine with the pars interarticularis highlighted, illustrating where the stress injury is offloaded.',
              },
            },
            {
              id: 'spond-pelvic-tilt',
              name: 'Neutral-spine pelvic tilt',
              target: 'Deep trunk / lumbopelvic control',
              purpose:
                'Teaches a comfortable neutral-to-slightly-flexed spine position and gentle trunk activation without arching.',
              dose: { sets: 3, reps: '10', tempo: 'slow' },
              frequency: 'Daily',
              progression:
                'Hold a gentle brace longer, then progress toward the dead bug in Phase 2.',
              regression:
                'Reduce range and effort; perform only within a fully comfortable range.',
              formCues: [
                'Lie on your back with knees bent',
                'Gently flatten the small of your back toward the floor',
                'Keep breathing — small, controlled motion',
              ],
              painRule: 'No pain with extension.',
              diagram: {
                key: 'curl-up',
                altText:
                  'Person lying on their back with knees bent performing a gentle pelvic tilt.',
              },
            },
          ],
        },
        {
          id: 'spondylolysis-phase-2',
          order: 2,
          title: 'Build Trunk & Hip Strength',
          summary:
            'Abdominal/trunk endurance and hip strength while keeping the spine in a comfortable, neutral position.',
          goal: 'Build trunk control and hip strength to protect the low back, without provoking extension pain.',
          durationGuidance: 'Typically 3–6 weeks',
          entryCriteria: [
            'Daily activities are largely pain-free',
            'Can hold a neutral spine comfortably',
          ],
          exitCriteria: [
            'Good trunk and hip strength with no extension pain',
            'Tolerating progressed trunk and hip work without flare',
          ],
          educationPoints: [
            'Trunk endurance and hip strength share the load that the spine would otherwise take.',
            'Keep a neutral spine and avoid arching during these drills.',
            'Build endurance and control before adding speed, range, or extension.',
          ],
          exercises: [
            {
              id: 'spond-dead-bug',
              name: 'Dead bug',
              target: 'Trunk control (anterior core)',
              purpose:
                'Trains trunk control with the spine kept stable and neutral, avoiding extension stress on the pars.',
              dose: { sets: 3, reps: '6–10 each side' },
              frequency: '3–4 days/week',
              progression:
                'Progress to opposite arm/leg load (reach the opposite arm and leg out together).',
              regression: 'Regress to heel slides only.',
              formCues: [
                'Ribs down',
                'Small back contact (keep gentle contact between your low back and the floor)',
                'Slow reach',
                'No pain with extension',
              ],
              painRule: 'No pain with extension.',
              diagram: {
                key: 'curl-up',
                altText:
                  'Person lying on their back lowering an opposite arm and leg while keeping the low back stable.',
              },
            },
            {
              id: 'spond-glute-bridge',
              name: 'Glute bridge',
              target: 'Gluteals and posterior hip',
              purpose:
                'Builds hip strength to support the low back and reduce reliance on lumbar extension.',
              dose: { sets: 3, reps: '10–12', tempo: '2s up, 2s down' },
              frequency: '3–4 days/week',
              progression: 'Progress toward single-leg bridging as control improves.',
              regression: 'Reduce range or hold time; keep both feet down.',
              formCues: [
                'Lift the hips by squeezing the glutes, not by arching the back',
                'Keep ribs down and a level pelvis',
                'Lower under control',
              ],
              painRule: 'No pain with extension.',
              diagram: {
                key: 'glute-bridge',
                altText:
                  'Person lying on their back lifting the hips into a bridge while keeping a neutral spine.',
              },
            },
            {
              id: 'spond-side-plank',
              name: 'Side plank',
              target: 'Lateral trunk / obliques and quadratus lumborum',
              purpose:
                'Builds lateral trunk endurance for trunk control without loading the spine into extension.',
              dose: { sets: 3, holdSeconds: 20 },
              frequency: '3–4 days/week',
              progression:
                'Increase hold time, then progress from knees to feet.',
              regression: 'Drop to the knees or shorten the hold.',
              formCues: [
                'Stack the body in a straight line',
                'Keep ribs down and hips lifted',
                'Don’t let the low back sag or arch',
              ],
              painRule: 'No pain with extension.',
              diagram: {
                key: 'side-plank',
                altText:
                  'Person holding a side plank with the body in a straight line.',
              },
            },
            {
              id: 'spond-hamstring-stretch',
              name: 'Hamstring stretch',
              target: 'Hamstrings',
              purpose:
                'Addresses the tight hamstrings that often accompany the condition and pull on the pelvis and low back.',
              dose: { sets: 3, holdSeconds: 30, reps: '1 each side' },
              frequency: 'Daily',
              progression: 'Gradually increase reach as flexibility improves.',
              regression: 'Reduce the stretch range to a comfortable level.',
              formCues: [
                'Keep the back neutral, hinge from the hips',
                'Feel a gentle stretch behind the thigh',
                'Don’t bounce or force the stretch',
              ],
              painRule: 'No pain with extension.',
              diagram: {
                key: 'straight-leg-raise',
                altText:
                  'Person performing a hamstring stretch with one leg extended.',
              },
            },
          ],
        },
        {
          id: 'spondylolysis-phase-3',
          order: 3,
          title: 'Reintroduce Extension & Sport',
          summary:
            'Carefully add back extension and sport drills, advancing only while they stay pain-free.',
          goal: 'Restore pain-free extension and graded sport-specific loading without flare.',
          durationGuidance: 'Typically 4–8 weeks; varies by sport',
          entryCriteria: [
            'Pain-free daily living',
            'Good trunk and hip strength established',
          ],
          exitCriteria: [
            'Pain-free extension drills',
            'Sport progression tolerated without flare',
          ],
          educationPoints: [
            'Extension is reintroduced gradually and only while it stays pain-free.',
            'Keep your trunk and hip strength work going as you add sport.',
            'Progress sport in controlled steps and back off if a flare appears.',
          ],
          exercises: [
            {
              id: 'spond-bird-dog',
              name: 'Bird dog',
              target: 'Trunk and hip control through movement',
              purpose:
                'Bridges from stable trunk control to controlled limb loading, preparing the spine for sport demands.',
              dose: { sets: 3, reps: '8–10 each side', tempo: 'slow' },
              frequency: '3–4 days/week',
              progression:
                'Add a brief hold at the top, then progress toward dynamic sport drills.',
              regression: 'Move one limb at a time, or reduce reach.',
              formCues: [
                'Keep the back flat and level — no arching',
                'Reach the opposite arm and leg slowly',
                'Keep the hips and shoulders square',
              ],
              painRule: 'No pain with extension.',
              diagram: {
                key: 'bird-dog',
                altText:
                  'Person on hands and knees extending the opposite arm and leg while keeping a level back.',
              },
            },
            {
              id: 'spond-extension-reintro',
              name: 'Graded extension reintroduction',
              target: 'Lumbar extension tolerance',
              purpose:
                'Gradually rebuilds tolerance to back extension so sport-specific arching can resume without pain.',
              dose: {
                notes:
                  'Begin with small, controlled extension range; add range only while it stays pain-free.',
              },
              frequency: '3–4 days/week',
              progression:
                'Increase extension range, then add speed and sport-specific positions.',
              regression:
                'Reduce range, or return to neutral-spine drills if any pain appears.',
              formCues: [
                'Start with a small, gentle arch',
                'Add range only if it stays completely pain-free',
                'Stop and back off at the first sign of focal pain',
              ],
              painRule: 'No pain with extension.',
              cautions: [
                'Only begin once daily living and trunk/hip work are pain-free.',
              ],
              diagram: {
                key: 'prone-press-up',
                altText:
                  'Person lying face down gently pressing up into a small back extension.',
              },
            },
            {
              id: 'spond-sport-return',
              name: 'Graded sport / drill return',
              target: 'Whole-body sport tolerance',
              purpose:
                'Reintroduces sport and extension/rotation drills in controlled steps to confirm a flare-free return.',
              dose: {
                notes:
                  'Stepwise increase in drill volume and intensity, advancing only without flare.',
              },
              frequency: 'Built gradually into the training week',
              progression:
                'Add volume, then intensity, then full sport-specific extension and rotation.',
              regression:
                'Reduce volume or drop the most provocative drills if symptoms return.',
              formCues: [
                'Advance only when extension drills stay pain-free',
                'Keep trunk and hip strength sessions going',
                'Watch for next-day soreness and adjust',
              ],
              painRule: 'No pain with extension.',
              diagram: {
                key: 'anatomy-lumbar',
                altText:
                  'Lumbar spine illustration representing graded return of sport-specific loading.',
              },
            },
          ],
        },
      ],
    },
    evidence: {
      strength: 'limited',
      bottomLine:
        'Early recognition plus load reduction and trunk/hip rehab usually works.',
      whatHelps: [
        'Early recognition of the stress injury',
        'Reducing the aggravating extension/rotation load (relative rest)',
        'Abdominal/trunk endurance and hip strengthening',
        'A gradual, pain-free return to extension and sport',
      ],
      whatsUncertain: [
        'Whether the pars bone fully heals is variable and not guaranteed.',
        'Imaging strategy and how it should guide management is beyond the scope of a patient-facing brief.',
        'The exact recovery timeline varies between athletes and sports.',
      ],
      citationIds: [
        'spondylolysis-li-2022-review',
        'spondylolysis-aaos-orthoinfo',
      ],
    },
    procedures: [
      {
        procedureId: 'corticosteroid',
        relevance: 'not-indicated',
        evidenceNote:
          'These injections are generally not indicated for uncomplicated pars stress injury in primary care sports medicine education.',
        citationIds: ['spondylolysis-li-2022-review'],
      },
    ],
    returnToActivity: {
      criteria: [
        'Pain-free daily living',
        'Pain-free extension drills',
        'Restored trunk and hip strength',
        'Sport progression without flare',
      ],
      timelineGuidance:
        'Varies; many athletes improve over 6 to 12+ weeks, with return to sport once each step stays pain-free.',
      reinjuryPrevention: [
        'Keep up trunk endurance and hip strength work',
        'Progress training load gradually rather than spiking it',
        'Reintroduce extension only once it is pain-free',
        'Respond early to recurring extension-related back pain',
      ],
    },
    faqs: [
      {
        q: 'What is spondylolysis?',
        a: 'It is a stress injury of the pars interarticularis — a small bony bridge in a vertebra, usually in the low back. It is essentially an overuse stress fracture from repeated arching and twisting, most common in younger athletes.',
        citationIds: ['spondylolysis-aaos-orthoinfo'],
      },
      {
        q: 'Will the bone fully heal?',
        a: 'Bony healing is variable — it does not always fully heal on imaging. The good news is that early recognition plus load reduction and trunk/hip rehab usually leads to good function and return to sport.',
        citationIds: ['spondylolysis-li-2022-review'],
      },
      {
        q: 'When can I go back to my sport?',
        a: 'After pain-free daily living, pain-free extension drills, restored trunk and hip strength, and a gradual sport progression without flare. Many athletes improve over 6 to 12+ weeks, though the timeline varies.',
        citationIds: ['spondylolysis-li-2022-review'],
      },
    ],
    relatedConditionIds: ['low-back-pain', 'lumbar-radiculopathy'],
    review: {
      status: 'physician-review-pending',
      contentVersion: '1.0.0',
    },
  },
}

export default moduleData
