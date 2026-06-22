import type { Citation, ConditionModule } from '../types'

/**
 * Non-Specific Low Back Pain. Transcribed faithfully from the physician-authored
 * deep-research source (pages 25–26). Citations are the real URLs listed in that
 * section. Ships physician-review-pending for Dr. Swisher's sign-off.
 */

const citations: Citation[] = [
  {
    id: 'lbp-george-2021-jospt',
    label: 'JOSPT Low Back Pain CPG (2021)',
    authorsOrOrg: 'George SZ, et al.',
    source: 'Journal of Orthopaedic & Sports Physical Therapy',
    year: 2021,
    type: 'guideline',
    url: 'https://www.jospt.org/doi/10.2519/jospt.2021.0304',
    takeaway:
      'Clinical practice guideline supporting active care and exercise-based management for low back pain.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'lbp-nice-ng59-2016',
    label: 'NICE NG59 Low Back Pain (2016, updated 2020)',
    authorsOrOrg: 'NICE',
    source: 'National Institute for Health and Care Excellence',
    year: 2016,
    type: 'guideline',
    url: 'https://www.nice.org.uk/guidance/ng59',
    takeaway:
      'Guideline recommending self-management, staying active, and exercise; advises against bed rest and routine imaging or injections for non-specific low back pain.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'lbp-hayden-2021-cochrane',
    label: 'Hayden 2021 (Cochrane exercise review)',
    authorsOrOrg: 'Hayden JA, et al.',
    source: 'Cochrane Database of Systematic Reviews',
    year: 2021,
    type: 'systematic-review',
    url: 'https://pubmed.ncbi.nlm.nih.gov/34580864/',
    takeaway:
      'Exercise therapy is probably effective for reducing pain and improving function in chronic low back pain compared with no treatment.',
    verified: true,
    lastChecked: '2026-06-21',
  },
]

const moduleData: ConditionModule = {
  citations,
  condition: {
    id: 'low-back-pain',
    slug: 'low-back-pain',
    name: 'Non-Specific Low Back Pain',
    shortName: 'Low Back Pain',
    aka: [
      'non-specific low back pain',
      'mechanical low back pain',
      'lumbago',
      'simple backache',
      'NSLBP',
    ],
    region: 'low-back',
    sportTags: ['golf', 'lifting', 'running', 'general'],
    careTier: 'pc-core',
    oneLiner:
      'Back pain without a clear structural cause that usually improves with staying active and exercise-based care.',
    overview:
      'Non-specific low back pain means back pain without a clear fracture, infection, cancer, inflammatory disease, or dominant nerve root syndrome. The painful structures can include muscles, joints, discs, and ligaments, but in most primary-care cases a single exact tissue cannot be identified reliably.\n\nThis does not mean the pain is "all in your head" or that nothing is wrong. It means the back is sensitive and irritable rather than damaged, and that no specific structure needs to be singled out to treat it well.\n\nMost back pain settles with time and gentle, gradual activity. Acute episodes often improve over days to a few weeks. The goal is to keep moving, stay reassured, and rebuild your tolerance for the activities you care about.',
    tissue:
      'No single tissue can be identified reliably — the painful structures may include the muscles, joints, discs, and ligaments of the lower back.',
    video: {
      videoId: '2VuLBYrgG94',
      title: 'Back Pain Relief Exercises & Stretches - Ask Doctor Jo',
      channel: 'AskDoctorJo',
      approved: true,
      note: 'Physician-curated demonstration video.',
    },
    anatomyDiagram: {
      key: 'anatomy-lumbar',
      altText:
        'Side view of the lower spine showing the lumbar vertebrae, discs, and surrounding muscles.',
      caption:
        'In non-specific low back pain, several structures of the lower back may contribute, with no single one identified.',
    },
    causes: [
      'Muscle or joint strain',
      'Deconditioning (reduced strength and fitness)',
      'Stress',
      'Poor sleep',
      'A load spike — doing more than the back is used to',
    ],
    riskFactors: [
      'Periods of inactivity or deconditioning',
      'High stress or poor sleep',
      'A sudden increase in lifting, training, or activity load',
      'A previous episode of back pain',
    ],
    symptoms: [
      'Low back pain',
      'Stiffness',
      'Pain with bending',
      'Pain with prolonged sitting or standing',
    ],
    prognosis: {
      summary:
        'Acute episodes often improve over days to a few weeks. Chronic pain is more complex but still usually responds best to staying active and exercise-based care.',
      typicalTimeline:
        'Acute episodes often improve over days to a few weeks; longer-standing pain improves more gradually with consistent active care.',
      encouragement:
        '"Non-specific" does not mean the pain is not real or that nothing can be done — it means no single structure needs to be pinpointed, and staying active is the most effective path back to your activities.',
    },
    redFlags: [
      {
        text: 'Saddle anesthesia (numbness around the groin or buttocks).',
        urgency: 'emergency',
      },
      {
        text: 'New bladder retention or incontinence (loss of bladder or bowel control).',
        urgency: 'emergency',
      },
      {
        text: 'Major trauma.',
        urgency: 'emergency',
      },
      {
        text: 'Severe progressive weakness.',
        urgency: 'emergency',
      },
      {
        text: 'Fever.',
        urgency: 'urgent',
      },
      {
        text: 'Unexplained weight loss.',
        urgency: 'urgent',
      },
      {
        text: 'History of cancer.',
        urgency: 'urgent',
      },
      {
        text: 'Night pain.',
        urgency: 'urgent',
      },
      {
        text: 'Infection risk.',
        urgency: 'urgent',
      },
      {
        text: 'Persistent severe pain or diagnostic uncertainty.',
        urgency: 'see-clinician',
      },
    ],
    selfCare: {
      dos: [
        'Stay active and return to your normal activities early — movement is the treatment.',
        'Keep walking; relaxed arms, steady breathing, and building up gradually all help.',
        'Use the pain rule: mild pain is acceptable if it settles.',
        'Build your lifting and activity tolerance gradually rather than all at once.',
      ],
      donts: [
        "Don't rely on bed rest — prolonged rest tends to slow recovery.",
        "Don't expect imaging or injections to fix routine non-specific back pain.",
        "Don't avoid all movement out of fear; the back is sensitive, not fragile.",
        "Don't spike your load suddenly when returning to lifting or sport.",
      ],
    },
    clinicalGoal:
      'Keep you active and confident while you rebuild trunk endurance and lifting tolerance for a durable return to activity',
    hep: {
      overview:
        'A staged program built around staying active. It starts with walking and movement preferences you can tolerate, adds trunk endurance and hip strengthening, and finishes with graded lifting. Each phase has a clear goal — progress when you meet it, not by the calendar. Mild pain is acceptable if it settles.',
      phases: [
        {
          id: 'low-back-pain-phase-1',
          order: 1,
          title: 'Keep Moving',
          summary:
            'Maintain activity with walking and gentle movement preferences you can tolerate.',
          goal: 'Stay active, calm the most irritable symptoms, and avoid bed rest.',
          durationGuidance: 'Typically the first 1–2 weeks',
          entryCriteria: [
            'New or flared non-specific low back pain',
            'Pain limits comfortable walking, bending, or prolonged sitting/standing',
          ],
          exitCriteria: [
            'Walking comfortably for 10–30 minutes',
            'Day-to-day pain is easing and settling between bouts of activity',
          ],
          educationPoints: [
            'Movement is the treatment — avoid bed rest.',
            'Mild pain during activity is acceptable if it settles afterward.',
            'Use whichever direction (extension or flexion) feels better to you for now.',
          ],
          exercises: [
            {
              id: 'lbp-walking',
              name: 'Walking',
              target: 'Whole-body activity tolerance',
              purpose:
                'Maintains activity and keeps the back moving without overloading it.',
              dose: { notes: '10–30 minutes daily; progress time before speed' },
              frequency: 'Daily',
              progression:
                'Progress the duration before adding speed; build up gradually.',
              regression: 'Use shorter, more frequent bouts of walking.',
              formCues: [
                'Relaxed arms',
                'Steady breathing',
                'Avoid bed rest',
                'Build gradually',
              ],
              painRule: 'Mild pain is acceptable if it settles.',
              diagram: {
                key: 'anatomy-lumbar',
                altText: 'Person walking upright at an easy, steady pace.',
              },
            },
            {
              id: 'lbp-press-up',
              name: 'Prone press-up (extension preference)',
              aka: ['extension in lying'],
              target: 'Lumbar mobility (extension)',
              purpose:
                'A gentle extension movement for those who feel better moving into a backward bend.',
              dose: { sets: 2, reps: '10', tempo: 'slow, gentle' },
              frequency: 'A few times daily if it eases symptoms',
              progression: 'Press a little higher as comfort allows.',
              regression: 'Prop on forearms instead of straight arms.',
              formCues: [
                'Lie on your stomach and press up through the arms',
                'Let the hips and lower back relax toward the floor',
                'Stop short of pain that lingers',
              ],
              cautions: [
                'Use only if extension feels better than flexion; switch to the flexion option if not.',
              ],
              painRule: 'Mild pain is acceptable if it settles.',
              diagram: {
                key: 'prone-press-up',
                altText:
                  'Person lying face down, pressing the upper body up while the hips stay on the floor.',
              },
            },
            {
              id: 'lbp-knee-to-chest',
              name: 'Knee-to-chest (flexion preference)',
              target: 'Lumbar mobility (flexion)',
              purpose:
                'A gentle flexion movement for those who feel better curling the spine forward.',
              dose: { sets: 2, reps: '10', holdSeconds: 5 },
              frequency: 'A few times daily if it eases symptoms',
              progression: 'Bring both knees toward the chest together.',
              regression: 'Move one knee a smaller distance, within comfort.',
              formCues: [
                'Lie on your back and gently draw a knee toward the chest',
                'Keep the movement smooth and relaxed',
                'Breathe steadily through the hold',
              ],
              cautions: [
                'Use only if flexion feels better than extension; switch to the extension option if not.',
              ],
              painRule: 'Mild pain is acceptable if it settles.',
              diagram: {
                key: 'anatomy-lumbar',
                altText:
                  'Person lying on their back drawing one knee gently toward the chest.',
              },
            },
          ],
        },
        {
          id: 'low-back-pain-phase-2',
          order: 2,
          title: 'Build Trunk Endurance',
          summary:
            'Add gentle trunk endurance exercises to support and steady the back.',
          goal: 'Build endurance in the muscles that stabilize the trunk.',
          durationGuidance: 'Typically 2–4 weeks',
          entryCriteria: [
            'Walking comfortably and staying active',
            'Most irritable symptoms have settled',
          ],
          exitCriteria: [
            'Can hold trunk endurance exercises with good form and pain that settles',
            'Comfortable adding load and longer holds',
          ],
          educationPoints: [
            'Endurance and control matter more than crunch-style strength for the back.',
            'Keep up your walking and movement preferences from Phase 1.',
            'Quality and steady breathing beat pushing into a painful range.',
          ],
          exercises: [
            {
              id: 'lbp-curl-up',
              name: 'Curl-up',
              target: 'Abdominal endurance',
              purpose:
                'Builds front trunk endurance while keeping the spine in a neutral, comfortable position.',
              dose: { sets: 3, reps: '8–10', holdSeconds: 8 },
              frequency: 'Daily or every other day',
              progression: 'Increase the hold time, then the number of reps.',
              regression: 'Shorten the hold and lift the head and shoulders less.',
              formCues: [
                'Lie on your back with one knee bent',
                'Lift the head and shoulders only slightly',
                'Keep the lower back in a comfortable neutral position',
              ],
              painRule: 'Mild pain is acceptable if it settles.',
              diagram: {
                key: 'curl-up',
                altText:
                  'Person lying on their back lifting the head and shoulders slightly off the floor.',
              },
            },
            {
              id: 'lbp-bird-dog',
              name: 'Bird-dog',
              target: 'Trunk and back endurance',
              purpose:
                'Trains the back and trunk to stay steady while the arms and legs move.',
              dose: { sets: 3, reps: '8–10 each side', holdSeconds: 5 },
              frequency: 'Daily or every other day',
              progression: 'Hold longer, then slow the movement further.',
              regression: 'Move only an arm or only a leg at first.',
              formCues: [
                'On hands and knees, keep the back flat and steady',
                'Reach the opposite arm and leg out slowly',
                'Avoid letting the hips or trunk twist',
              ],
              painRule: 'Mild pain is acceptable if it settles.',
              diagram: {
                key: 'bird-dog',
                altText:
                  'Person on hands and knees extending the opposite arm and leg while keeping the back level.',
              },
            },
            {
              id: 'lbp-side-plank',
              name: 'Side plank',
              target: 'Lateral trunk endurance',
              purpose:
                'Builds endurance in the side trunk muscles that help stabilize the spine.',
              dose: { sets: 3, holdSeconds: 15 },
              frequency: 'Every other day',
              progression: 'Increase the hold time, then progress to a full side plank.',
              regression: 'Perform from the knees rather than the feet.',
              formCues: [
                'Keep the body in a straight line from head to knees or feet',
                'Stack the hips and avoid sagging',
                'Breathe steadily through the hold',
              ],
              painRule: 'Mild pain is acceptable if it settles.',
              diagram: {
                key: 'side-plank',
                altText:
                  'Person holding a side plank with the body in a straight line.',
              },
            },
          ],
        },
        {
          id: 'low-back-pain-phase-3',
          order: 3,
          title: 'Strengthen the Hips',
          summary:
            'Add hip strengthening to share the load and support the lower back.',
          goal: 'Build hip and glute strength to offload and protect the back.',
          durationGuidance: 'Typically 3–6 weeks',
          entryCriteria: [
            'Comfortable with trunk endurance exercises',
            'No lasting flare from Phase 2 work',
          ],
          exitCriteria: [
            'Strong, controlled hip exercises with pain that settles',
            'Ready to begin graded lifting',
          ],
          educationPoints: [
            'Strong hips help the back by sharing the load of bending and lifting.',
            'Keep the trunk endurance work going alongside hip strengthening.',
            'Control and full range matter more than heavy weight at this stage.',
          ],
          exercises: [
            {
              id: 'lbp-glute-bridge',
              name: 'Glute bridge',
              target: 'Gluteal muscles and hip extensors',
              purpose:
                'Strengthens the glutes to support hip extension and offload the back.',
              dose: { sets: 3, reps: '10–15', tempo: 'slow up and down' },
              frequency: 'Daily or every other day',
              progression: 'Progress to a single-leg bridge, then add load.',
              regression: 'Reduce range or hold for less time.',
              formCues: [
                'Lie on your back with knees bent',
                'Squeeze the glutes to lift the hips',
                'Avoid arching the lower back to lift higher',
              ],
              painRule: 'Mild pain is acceptable if it settles.',
              diagram: {
                key: 'glute-bridge',
                altText:
                  'Person lying on their back lifting the hips into a bridge position.',
              },
            },
            {
              id: 'lbp-clamshell',
              name: 'Clamshell',
              target: 'Gluteus medius',
              purpose:
                'Strengthens the outer hip muscles that stabilize the pelvis and back.',
              dose: { sets: 3, reps: '12–15 each side' },
              frequency: 'Every other day',
              progression: 'Add a resistance band around the knees.',
              regression: 'Reduce reps or open the knee a smaller distance.',
              formCues: [
                'Lie on your side with knees bent and stacked',
                'Open the top knee while keeping the feet together',
                'Keep the pelvis from rolling backward',
              ],
              painRule: 'Mild pain is acceptable if it settles.',
              equipment: ['Optional resistance band'],
              diagram: {
                key: 'clamshell',
                altText:
                  'Person lying on their side opening the top knee while keeping feet together.',
              },
            },
            {
              id: 'lbp-hip-hinge',
              name: 'Hip hinge',
              target: 'Hip extensors and back movement pattern',
              purpose:
                'Grooves a safe bending pattern that loads the hips rather than the low back.',
              dose: { sets: 3, reps: '10', tempo: 'controlled' },
              frequency: 'Every other day',
              progression: 'Add a light dumbbell or kettlebell as control improves.',
              regression: 'Hinge a smaller distance, using a chair or pole for feedback.',
              formCues: [
                'Push the hips back while keeping a long, neutral spine',
                'Let the knees bend slightly',
                'Feel the stretch in the hamstrings, not strain in the back',
              ],
              painRule: 'Mild pain is acceptable if it settles.',
              diagram: {
                key: 'hip-hinge',
                altText:
                  'Person bending forward by pushing the hips back while keeping a straight spine.',
              },
            },
          ],
        },
        {
          id: 'low-back-pain-phase-4',
          order: 4,
          title: 'Graded Lifting & Return',
          summary:
            'Rebuild lifting tolerance gradually and return to full activity.',
          goal: 'Return to normal activities and build lifting tolerance gradually.',
          durationGuidance: 'Varies; weeks to a few months depending on goals',
          entryCriteria: [
            'Strong, controlled hip and trunk exercises',
            'Confident with the hip hinge pattern',
          ],
          exitCriteria: [
            'Back to desired lifting and activity with stable symptoms',
            'Maintaining a regular activity and strength habit',
          ],
          educationPoints: [
            'Build lifting tolerance gradually rather than all at once.',
            'The back adapts to load when it is progressed sensibly.',
            'Keep walking, trunk endurance, and hip strength as ongoing habits.',
          ],
          exercises: [
            {
              id: 'lbp-graded-deadlift',
              name: 'Graded lift (loaded hip hinge)',
              aka: ['deadlift', 'goblet deadlift'],
              target: 'Whole-body lifting tolerance',
              purpose:
                'Progressively rebuilds the strength and confidence to lift in daily life and sport.',
              dose: { sets: 3, reps: '6–10', tempo: 'controlled' },
              frequency: '2–3x/week, allowing recovery between sessions',
              progression:
                'Add load gradually, then progress toward the lifts your activities require.',
              regression: 'Reduce the load or return to a bodyweight hip hinge.',
              formCues: [
                'Keep a long, neutral spine and hinge from the hips',
                'Drive through the legs and squeeze the glutes to stand',
                'Increase weight only when the previous load feels easy',
              ],
              cautions: [
                'Progress load gradually; avoid sudden spikes that the back is not used to.',
              ],
              painRule: 'Mild pain is acceptable if it settles.',
              equipment: ['Dumbbell, kettlebell, or barbell'],
              diagram: {
                key: 'hip-hinge',
                altText:
                  'Person lifting a weight from the floor using a hip-hinge pattern with a straight spine.',
              },
            },
            {
              id: 'lbp-maintenance-activity',
              name: 'Activity & strength maintenance',
              target: 'Long-term back resilience',
              purpose:
                'Keeps the back strong and active to reduce the chance of recurrence.',
              dose: { notes: 'Mix of walking, trunk endurance, and hip strength' },
              frequency: 'Ongoing, several days per week',
              progression: 'Keep loads and activities challenging as you return to sport.',
              regression: 'Drop back to bodyweight basics during busy or sore weeks.',
              formCues: [
                'Stay generally active most days',
                'Keep a regular strength routine',
                'Increase training load gradually',
              ],
              diagram: {
                key: 'anatomy-lumbar',
                altText:
                  'Person maintaining an active routine to keep the back strong.',
              },
            },
          ],
        },
      ],
    },
    evidence: {
      strength: 'moderate',
      bottomLine:
        'Move, keep activity going, and use exercise rather than prolonged rest.',
      whatHelps: [
        'Staying active and returning to normal activities early',
        'Exercise-based care, especially for chronic low back pain',
        'Reassurance and avoiding bed rest in acute episodes',
        'Building lifting and activity tolerance gradually',
      ],
      whatsUncertain: [
        'No single exact pain-generating tissue can usually be identified in primary care.',
        'The best specific exercise type is not settled — many approaches work, and the strongest evidence is simply for staying active and exercising.',
        'For acute episodes the evidence for reassurance and avoiding bed rest is moderate rather than strong.',
      ],
      citationIds: [
        'lbp-george-2021-jospt',
        'lbp-nice-ng59-2016',
        'lbp-hayden-2021-cochrane',
      ],
    },
    procedures: [
      {
        procedureId: 'corticosteroid',
        relevance: 'not-indicated',
        evidenceNote: 'Not indicated for non-radicular routine low back pain.',
        citationIds: ['lbp-nice-ng59-2016'],
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
        procedureId: 'shockwave',
        relevance: 'not-indicated',
        evidenceNote: 'ESWT: not routine.',
      },
      {
        procedureId: 'ultrasound-guided',
        relevance: 'not-indicated',
        evidenceNote: 'Ultrasound-guided injection: not routine.',
      },
      {
        procedureId: 'tenotomy',
        relevance: 'not-indicated',
        evidenceNote: 'Percutaneous tenotomy: not routine.',
      },
    ],
    returnToActivity: {
      criteria: [
        'Comfortable returning to normal daily activities',
        'Lifting tolerance is being rebuilt gradually without lasting flare',
        'Confident moving and bending without fear',
      ],
      timelineGuidance:
        'Varies — acute episodes often settle over days to a few weeks; return to normal activity should start early rather than waiting to be pain-free.',
      reinjuryPrevention: [
        'Stay active and keep up regular exercise',
        'Build lifting and activity tolerance gradually',
        'Manage stress and sleep, which influence back pain',
      ],
    },
    faqs: [
      {
        q: 'Does "non-specific" mean my pain is not real?',
        a: 'No. "Non-specific" simply means a single exact tissue cannot be reliably identified — the pain is real, but the back is sensitive rather than damaged, and it usually responds well to staying active.',
        citationIds: ['lbp-nice-ng59-2016'],
      },
      {
        q: 'Should I rest in bed until the pain goes away?',
        a: 'No. Prolonged bed rest tends to slow recovery. The evidence supports staying active, returning to normal activities early, and using exercise rather than prolonged rest.',
        citationIds: ['lbp-george-2021-jospt', 'lbp-nice-ng59-2016'],
      },
      {
        q: 'Do I need a scan or an injection?',
        a: 'For routine non-specific low back pain, imaging and injections are generally not needed. Steroid, PRP, hyaluronic acid, shockwave, and ultrasound-guided injections or tenotomy are not routine for this condition.',
        citationIds: ['lbp-nice-ng59-2016'],
      },
      {
        q: 'How long will it take to feel better?',
        a: 'Acute episodes often improve over days to a few weeks. Longer-standing pain is more complex but still usually responds best to staying active and exercise-based care.',
        citationIds: ['lbp-hayden-2021-cochrane'],
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
