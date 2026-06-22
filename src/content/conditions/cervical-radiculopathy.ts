import type { Citation, ConditionModule } from '../types'

/**
 * Cervical Radiculopathy — transcribed faithfully from the physician-authored
 * deep-research source (pp. 24–25). Ships physician-review-pending for
 * Dr. Swisher's sign-off.
 *
 * Citation note: the source's citation list for this condition flagged a third
 * reference (Langevin 2015) with an editorial "correct citation below omitted
 * to avoid mismatch" annotation. To avoid shipping a mismatched URL, only the
 * two clean, verified sources (NASS guideline summary and StatPearls) are
 * included here.
 */

const citations: Citation[] = [
  {
    id: 'cervical-rad-nass-2011',
    label: 'NASS Cervical Radiculopathy Guideline Summary',
    authorsOrOrg: 'Kreiner DS, et al.',
    source: 'North American Spine Society',
    year: 2011,
    type: 'guideline',
    url: 'https://pubmed.ncbi.nlm.nih.gov/21168100/',
    takeaway:
      'Evidence-based guideline summary for the diagnosis and treatment of cervical radiculopathy from degenerative disorders; most patients improve and surgery is reserved for progressive or persistent neurologic deficit.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'cervical-rad-statpearls-2025',
    label: 'Cervical Radiculopathy (StatPearls)',
    authorsOrOrg: 'Margetis K, et al.',
    source: 'StatPearls',
    year: 2025,
    type: 'narrative-review',
    url: 'https://pubmed.ncbi.nlm.nih.gov/28722858/',
    takeaway:
      'Overview of cervical radiculopathy: foraminal narrowing and disc herniation are common causes, the natural course is often favorable, and conservative care is first-line for most patients.',
    verified: true,
    lastChecked: '2026-06-21',
  },
]

const moduleData: ConditionModule = {
  citations,
  condition: {
    id: 'cervical-radiculopathy',
    slug: 'cervical-radiculopathy',
    name: 'Cervical Radiculopathy',
    shortName: 'Cervical Radiculopathy',
    aka: [
      'pinched nerve in the neck',
      'cervical nerve root compression',
      'cervical nerve root irritation',
      'neck-related arm pain',
    ],
    region: 'neck',
    sportTags: ['cycling', 'throwing', 'general'],
    careTier: 'pc-referral-trigger',
    oneLiner:
      'Irritation or compression of a cervical nerve root that sends pain, numbness, or weakness into the arm — usually favorable, with surgery reserved for progressive neurologic deficit.',
    overview:
      'Cervical radiculopathy is irritation or compression of a cervical nerve root — one of the nerves that exits the spine in your neck and travels down into your arm. It often comes from narrowing of the small bony openings the nerve passes through (foraminal narrowing) or from disc problems.\n\nBecause an irritated nerve root sends signals down its path, this condition can cause neck pain plus pain, numbness, tingling, or weakness that travels into the arm in a recognizable nerve-root pattern. In many people the arm pain is actually worse than the neck pain.\n\nThe good news is that the natural course is often favorable, with most people improving over a few weeks to a few months without surgery. The main thing to watch for is progressive weakness or other neurologic change, which deserves closer review.',
    tissue:
      'A cervical nerve root — one of the spinal nerves exiting the neck — irritated or compressed by foraminal narrowing or disc pathology.',
    video: {
      videoId: 'gZUNcfcdHW4',
      title: 'Pinched Nerve (Cervical Radiculopathy) Stretches & Exercises - Ask Doctor Jo',
      channel: 'AskDoctorJo',
      approved: true,
      note: 'Physician-curated demonstration video.',
    },
    anatomyDiagram: {
      key: 'anatomy-cervical',
      altText:
        'Side view of the cervical spine showing a nerve root exiting between two vertebrae and traveling toward the arm, with the foramen it passes through.',
      caption:
        'A cervical nerve root can be irritated where it exits the spine, sending symptoms down the arm.',
    },
    causes: [
      'Degenerative foraminal narrowing (the bony opening the nerve passes through getting smaller)',
      'Disc herniation pressing on or irritating a nerve root',
      'Age-related wear-and-tear changes in the neck',
    ],
    riskFactors: [
      'Increasing age and degenerative changes in the neck',
      'Sustained neck postures (e.g., long hours in a cycling or desk position)',
      'Repetitive or end-range neck loading in throwing and overhead sports',
    ],
    symptoms: [
      'Arm pain that is often greater than the neck pain',
      'Tingling or numbness traveling into the arm in a nerve-root pattern',
      'Possible reflex changes',
      'Possible strength changes (weakness) in the arm',
      'Neck pain accompanying the arm symptoms',
    ],
    prognosis: {
      summary:
        'The natural course is often favorable, and many patients improve without surgery. Persistent neurologic deficit needs closer review.',
      typicalTimeline: 'Symptoms often improve over about 6 to 12 weeks.',
      encouragement:
        'Most people get better with patient, conservative care. Steady improvement in arm symptoms over weeks is the expected pattern — progressive weakness is the exception that prompts re-evaluation.',
    },
    redFlags: [
      {
        text: 'Myelopathy signs (such as clumsy hands, balance problems, or changes in coordination).',
        urgency: 'emergency',
      },
      {
        text: 'Gait change (new trouble walking or unsteadiness).',
        urgency: 'emergency',
      },
      {
        text: 'Bowel or bladder symptoms (loss of control or new retention).',
        urgency: 'emergency',
      },
      {
        text: 'Severe trauma to the neck.',
        urgency: 'emergency',
      },
      {
        text: 'Progressive motor deficit (weakness that is getting worse).',
        urgency: 'urgent',
      },
      {
        text: 'Persistent severe arm pain.',
        urgency: 'see-clinician',
      },
      {
        text: 'Persistent sensory deficit (ongoing numbness that is not settling).',
        urgency: 'see-clinician',
      },
    ],
    selfCare: {
      dos: [
        'Use neck postures that ease the arm symptoms — a nerve-friendly position rather than slumped or end-range positions.',
        'If neck retraction (drawing the head straight back) reduces or centralizes your arm symptoms, use it through the day.',
        'Do gentle deep neck flexor and scapular (shoulder-blade) strengthening to support the neck.',
        'Use the centralization rule: symptoms moving up the arm toward the neck (or at least not spreading farther down) is a good sign.',
        'Return to driving, work, and sport as your arm symptoms, strength, and tolerance for provocative positions improve.',
      ],
      donts: [
        'Don’t push movements that drive symptoms farther down the arm (peripheralization).',
        'Don’t force aggressive neck stretching or end-range extension if it worsens the arm symptoms.',
        'Don’t ignore progressive weakness — that changes the urgency and needs review.',
        'Don’t stay frozen in one sustained posture (long cycling or desk positions) for hours without breaks.',
      ],
    },
    clinicalGoal:
      'Settle nerve-root symptoms toward the neck (centralization), protect strength, and restore tolerance for driving, work, and sport.',
    hep: {
      overview:
        'A staged, nerve-friendly program. The early focus is finding positions and movements that ease arm symptoms (often neck retraction) and centralize them toward the neck. Later phases add deep neck flexor and scapular strengthening and cautious nerve mobility. Progress by how your arm symptoms respond — symptoms should centralize or at least not spread farther down the arm. If a movement drives symptoms down the arm, back off.',
      phases: [
        {
          id: 'cervical-radiculopathy-phase-1',
          order: 1,
          title: 'Calm & Centralize',
          summary:
            'Find the directional preference and nerve-friendly postures that ease arm symptoms and draw them back toward the neck.',
          goal: 'Reduce arm symptoms and centralize them toward the neck.',
          durationGuidance: 'Typically 1–2 weeks',
          entryCriteria: [
            'New or recent nerve-root arm symptoms',
            'No red-flag features (no progressive weakness, myelopathy signs, or bowel/bladder symptoms)',
          ],
          exitCriteria: [
            'Arm symptoms are centralizing (moving up the arm toward the neck) or at least not spreading farther down',
            'Comfortable holding nerve-friendly postures through the day',
          ],
          educationPoints: [
            'Centralization — symptoms moving toward the neck — is a good sign; peripheralization down the arm is a signal to back off.',
            'Many people have a directional preference (often retraction) that eases symptoms.',
            'Keep the neck moving gently within comfort rather than holding it rigid.',
          ],
          exercises: [
            {
              id: 'crad-cervical-retraction',
              name: 'Cervical retraction',
              aka: ['chin tuck', 'chin retraction'],
              target: 'Cervical nerve root / directional preference',
              purpose:
                'A directional-preference movement that can reduce and centralize arm symptoms when retraction is the helpful direction.',
              dose: { sets: 2, reps: '10', notes: '2 x 10, 3–5 times/day' },
              frequency: '3–5 times/day',
              progression: 'Progress gentle extension only if symptoms centralize.',
              regression:
                'Regress to a smaller range if symptoms do not centralize or begin to spread down the arm.',
              formCues: [
                'Draw your head straight back',
                'Don’t tilt up',
                'Use a gentle motion',
                'Stop peripheralization',
              ],
              painRule:
                'Symptoms should centralize or at least not spread farther down the arm.',
              diagram: {
                key: 'chin-tuck',
                altText:
                  'Person sitting tall and drawing the head straight back to perform a cervical retraction.',
              },
            },
            {
              id: 'crad-nerve-friendly-posture',
              name: 'Nerve-friendly posture resets',
              target: 'Cervical nerve root / postural tolerance',
              purpose:
                'Frequent posture resets keep the neck out of positions that crowd the nerve root and help symptoms settle.',
              dose: { sets: 1, reps: 'short reset', holdSeconds: 10 },
              frequency: 'Several times per hour during sustained postures',
              progression:
                'Gradually extend the time you can hold a tall, neutral posture comfortably.',
              regression: 'Use support (e.g., a rolled towel) and reset more often.',
              formCues: [
                'Stack the head over the shoulders, not jutted forward',
                'Soften the shoulders down and back',
                'Avoid the position that sends symptoms down the arm',
              ],
              painRule:
                'Favor the posture that keeps arm symptoms quiet; avoid positions that peripheralize.',
              diagram: {
                key: 'anatomy-cervical',
                altText:
                  'Person sitting tall with the head balanced over the shoulders in a neutral neck posture.',
              },
            },
          ],
        },
        {
          id: 'cervical-radiculopathy-phase-2',
          order: 2,
          title: 'Strengthen the Support',
          summary:
            'Build deep neck flexor and scapular strength to support the neck once arm symptoms are settling.',
          goal: 'Strengthen the deep neck flexors and shoulder-blade muscles that support and offload the neck.',
          durationGuidance: 'Typically 2–4 weeks',
          entryCriteria: [
            'Arm symptoms centralizing or stable, not spreading down the arm',
            'Comfortable with cervical retraction and nerve-friendly postures',
          ],
          exitCriteria: [
            'Can perform deep neck flexor and scapular work without provoking arm symptoms',
            'Improving endurance in supportive postures',
          ],
          educationPoints: [
            'Deep neck flexor endurance helps the neck tolerate daily and sport postures.',
            'Scapular (shoulder-blade) strength offloads the neck and supports the arm.',
            'Keep symptoms centralized — strengthening should not drive pain down the arm.',
          ],
          exercises: [
            {
              id: 'crad-deep-neck-flexor',
              name: 'Deep neck flexor activation (chin nod)',
              aka: ['craniocervical flexion'],
              target: 'Deep neck flexors (longus colli/capitis)',
              purpose:
                'Builds endurance in the deep stabilizing muscles that support the cervical spine.',
              dose: { sets: 3, reps: '8–10', holdSeconds: 5 },
              frequency: 'Daily',
              progression:
                'Increase hold time and reps; progress from lying to sitting.',
              regression: 'Shorten the hold and use a smaller, gentler nod.',
              formCues: [
                'Make a small, gentle nod (as if saying “yes”)',
                'Keep the motion subtle — no big head lift',
                'Breathe normally through the hold',
              ],
              cautions: ['Stop if the movement sends symptoms down the arm.'],
              painRule:
                'Symptoms should stay centralized — not spread farther down the arm.',
              diagram: {
                key: 'chin-tuck',
                altText:
                  'Person performing a small chin nod to activate the deep neck flexors.',
              },
            },
            {
              id: 'crad-scapular-retraction',
              name: 'Scapular retraction (shoulder-blade squeeze)',
              target: 'Scapular stabilizers (middle/lower trapezius, rhomboids)',
              purpose:
                'Strengthens the shoulder-blade muscles that support the neck and improve posture.',
              dose: { sets: 3, reps: '10–12' },
              frequency: 'Daily or every other day',
              progression: 'Add a light resistance band as control improves.',
              regression: 'Reduce range or perform without resistance.',
              formCues: [
                'Gently draw the shoulder blades back and down',
                'Keep the neck relaxed and the shoulders away from the ears',
                'Smooth, controlled squeeze and release',
              ],
              cautions: ['Keep the neck quiet — let the shoulder blades do the work.'],
              painRule:
                'Discomfort is acceptable only if arm symptoms stay centralized.',
              equipment: ['Optional light resistance band'],
              diagram: {
                key: 'scapular-retraction',
                altText:
                  'Person drawing the shoulder blades back and down in a scapular retraction.',
              },
            },
            {
              id: 'crad-scapular-row',
              name: 'Scapular row',
              target: 'Scapular stabilizers and mid-back',
              purpose:
                'Adds loaded scapular strengthening to better support the neck and arm.',
              dose: { sets: 3, reps: '10–12', tempo: 'controlled' },
              frequency: '2–3x/week',
              progression: 'Increase band resistance as tolerated.',
              regression: 'Reduce resistance or range; keep the neck neutral.',
              formCues: [
                'Start the pull from the shoulder blades, not the neck',
                'Keep the head stacked and neck relaxed',
                'Control the return — don’t let the shoulders shrug up',
              ],
              cautions: ['Avoid shrugging or jutting the head forward during the pull.'],
              painRule: 'Stop if the row drives symptoms down the arm.',
              equipment: ['Resistance band'],
              diagram: {
                key: 'scapular-row',
                altText:
                  'Person performing a seated row with a resistance band, leading with the shoulder blades.',
              },
            },
          ],
        },
        {
          id: 'cervical-radiculopathy-phase-3',
          order: 3,
          title: 'Cautious Neural Mobility & Return',
          summary:
            'Add gentle, cautious nerve mobility and rebuild tolerance for driving, work, and sport positions.',
          goal: 'Restore nerve gliding tolerance and tolerance for provocative positions needed for daily life and sport.',
          durationGuidance: 'Typically 2–6 weeks',
          entryCriteria: [
            'Arm symptoms largely settled and centralized',
            'Good control with deep neck flexor and scapular work',
          ],
          exitCriteria: [
            'Tolerating cautious nerve mobility without flaring symptoms',
            'Driving, work, and sport positions tolerated with stable symptoms',
          ],
          educationPoints: [
            'Nerve mobility should be gentle and cautious — a little, not aggressive stretching.',
            'Return is guided by how range, driving tolerance, and work tolerance normalize.',
            'Rebuild tolerance to provocative sport positions gradually.',
          ],
          exercises: [
            {
              id: 'crad-nerve-glide',
              name: 'Median nerve glide (cautious)',
              aka: ['upper limb neural mobilization', 'nerve floss'],
              target: 'Cervical nerve root / upper-limb nerve mobility',
              purpose:
                'Gentle gliding helps the nerve move freely again once symptoms have settled — used cautiously, not as an aggressive stretch.',
              dose: { sets: 2, reps: '8–10', tempo: 'slow, oscillating' },
              frequency: 'Daily, gentle',
              progression:
                'Slowly increase range only as long as symptoms stay quiet.',
              regression: 'Reduce range or stop if symptoms travel down the arm.',
              formCues: [
                'Move slowly and gently — glide, don’t yank',
                'Keep the motion oscillating and pain-light',
                'Stay well short of provoking arm symptoms',
              ],
              cautions: [
                'This is cautious neural mobility — avoid aggressive end-range stretching.',
                'Stop if the glide peripheralizes symptoms down the arm.',
              ],
              painRule:
                'Keep symptoms centralized; back off if they spread down the arm.',
              diagram: {
                key: 'upper-limb-nerve-glide',
                altText:
                  'Person performing a gentle upper-limb (median) nerve glide, moving the arm and wrist through a controlled range.',
              },
            },
            {
              id: 'crad-provocative-tolerance',
              name: 'Graded return to provocative positions',
              target: 'Driving, work, and sport position tolerance',
              purpose:
                'Rebuilds tolerance for the neck/arm positions used in driving, work, and sport (e.g., cycling posture, throwing).',
              dose: {
                notes:
                  'Graded exposure — e.g., short, then longer holds/sessions in the position',
              },
              frequency: 'Most days, building gradually',
              progression:
                'Increase time and demand in the position as tolerance and strength improve.',
              regression: 'Shorten exposure or reduce demand if symptoms flare.',
              formCues: [
                'Advance only while arm symptoms stay quiet and stable',
                'Keep deep neck flexor and scapular strength going',
                'Track how symptoms respond over the following hours',
              ],
              painRule:
                'Progress only if symptoms stay centralized and do not spread down the arm.',
              diagram: {
                key: 'anatomy-cervical',
                altText:
                  'Person gradually returning to a sustained neck posture used for work or sport.',
              },
            },
          ],
        },
      ],
    },
    evidence: {
      strength: 'moderate',
      bottomLine:
        'Many patients improve without surgery, but progressive weakness changes the urgency.',
      whatHelps: [
        'Conservative care in many cases (the natural course is often favorable)',
        'Directional-preference movement (cervical retraction) when it centralizes arm symptoms',
        'Deep neck flexor and scapular strengthening to support the neck',
        'Cautious neural mobility once symptoms have settled',
      ],
      whatsUncertain: [
        'The evidence base is less tidy than for nonspecific neck pain, so the best specific exercise recipe is not firmly settled.',
        'Epidural steroid injection tends to offer short-term benefit more often than a durable correction, and its role is mainly specialist-level.',
        'When and for whom surgery outperforms continued conservative care is driven by neurologic progression rather than pain alone.',
      ],
      citationIds: ['cervical-rad-nass-2011', 'cervical-rad-statpearls-2025'],
    },
    procedures: [
      {
        procedureId: 'corticosteroid',
        relevance: 'selected-cases',
        evidenceNote:
          'Selected cases as epidural steroid injection, mainly specialist-level, with short-term benefit more likely than durable correction.',
        citationIds: ['cervical-rad-nass-2011'],
      },
      {
        procedureId: 'prp',
        relevance: 'not-indicated',
        evidenceNote: 'PRP/HA/tenotomy: not indicated.',
      },
      {
        procedureId: 'hyaluronic-acid',
        relevance: 'not-indicated',
        evidenceNote: 'PRP/HA/tenotomy: not indicated.',
      },
      {
        procedureId: 'tenotomy',
        relevance: 'not-indicated',
        evidenceNote: 'PRP/HA/tenotomy: not indicated.',
      },
      {
        procedureId: 'shockwave',
        relevance: 'not-indicated',
        evidenceNote: 'ESWT: not indicated.',
      },
      {
        procedureId: 'ultrasound-guided',
        relevance: 'rarely',
        evidenceNote: 'Ultrasound-guided injection: rarely in this context.',
      },
    ],
    returnToActivity: {
      criteria: [
        'Neurologic symptoms are settling',
        'Strength is stable',
        'Provocative positions are tolerated',
      ],
      timelineGuidance:
        'Often improves over about 6–12 weeks, though this varies; return is guided by symptoms, strength, and position tolerance rather than the calendar.',
      reinjuryPrevention: [
        'Maintain deep neck flexor and scapular strength',
        'Use nerve-friendly postures and break up sustained positions (cycling, desk, overhead work)',
        'Rebuild tolerance to provocative sport positions gradually',
      ],
    },
    faqs: [
      {
        q: 'Will my pinched nerve get better without surgery?',
        a: 'For most people, yes. The natural course is often favorable, and symptoms commonly improve over about 6 to 12 weeks with conservative care. Surgery is mainly considered when there is progressive weakness or a persistent neurologic deficit.',
        citationIds: ['cervical-rad-nass-2011', 'cervical-rad-statpearls-2025'],
      },
      {
        q: 'What does “centralization” mean and why does it matter?',
        a: 'Centralization is when your arm symptoms move up the arm back toward the neck (or at least stop spreading farther down). It is a good sign and the goal of the early exercises. Symptoms moving farther down the arm is a signal to back off that movement.',
        citationIds: ['cervical-rad-nass-2011'],
      },
      {
        q: 'When should I seek urgent care?',
        a: 'Seek emergency care for signs of spinal cord involvement (clumsy hands, balance or walking changes, bowel or bladder symptoms) or after severe neck trauma. Worsening (progressive) arm weakness should be seen urgently, and persistent severe arm pain or ongoing numbness should be reviewed by a clinician.',
        citationIds: ['cervical-rad-statpearls-2025'],
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
