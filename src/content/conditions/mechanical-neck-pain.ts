import type { Citation, ConditionModule } from '../types'

/**
 * Mechanical neck pain. Transcribed faithfully from the physician-authored
 * deep-research source (pp. 23–24). Citations are the source's own listed
 * sources with their real URLs. Ships physician-review-pending.
 *
 * Source physician-review note: broad category; this brief excludes
 * cervicogenic headache and radicular/myelopathic subtypes.
 */

const citations: Citation[] = [
  {
    id: 'mechanical-neck-jospt-2017-blanpied',
    label: 'JOSPT Neck Pain CPG (Blanpied 2017)',
    authorsOrOrg: 'Blanpied PR, et al.',
    source: 'Journal of Orthopaedic & Sports Physical Therapy',
    year: 2017,
    type: 'guideline',
    url: 'https://www.jospt.org/doi/10.2519/jospt.2017.0302',
    takeaway:
      'Clinical practice guideline supporting active exercise and manual therapy for neck pain, with classification-based management.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'mechanical-neck-cote-2016-guideline',
    label: 'Côté 2016 (neck pain guideline)',
    authorsOrOrg: 'Côté P, et al.',
    source: 'European Spine Journal',
    year: 2016,
    type: 'guideline',
    url: 'https://pubmed.ncbi.nlm.nih.gov/26984876/',
    takeaway:
      'Guideline recommending exercise and reassurance over passive/rest-based care for recent-onset and persistent neck pain.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'mechanical-neck-miller-2010-sysrev',
    label: 'Miller 2010 (manual therapy + exercise SR)',
    authorsOrOrg: 'Miller J, et al.',
    source: 'Manual Therapy',
    year: 2010,
    type: 'systematic-review',
    url: 'https://pubmed.ncbi.nlm.nih.gov/20593537/',
    takeaway:
      'Systematic review finding manual therapy combined with exercise outperforms either alone for mechanical neck pain in some subgroups.',
    verified: true,
    lastChecked: '2026-06-21',
  },
]

const moduleData: ConditionModule = {
  citations,
  condition: {
    id: 'mechanical-neck-pain',
    slug: 'mechanical-neck-pain',
    name: 'Mechanical Neck Pain',
    shortName: 'Neck Pain',
    aka: [
      'nonspecific neck pain',
      'cervical strain',
      'neck strain',
      'cervicalgia',
      'tension neck',
      'posture-related neck pain',
    ],
    region: 'neck',
    sportTags: ['cycling', 'general', 'lifting'],
    careTier: 'pc-core',
    oneLiner:
      'Neck pain from the joints, muscles, and soft tissues — without nerve or serious disease — that responds well to staying active and targeted exercise.',
    overview:
      'Mechanical neck pain means neck pain coming from the cervical joints, muscles, and soft tissues, without a clear nerve root syndrome or serious disease. In plain terms, the structures of the neck are irritated and overloaded, not damaged in a dangerous way.\n\nIt often flares after posture stress, sudden load changes, poor sleep, or holding sustained positions — for example a long ride on the bike, a heavy lifting day, or hours hunched over a screen. There is usually no numbness, weakness, or pain shooting down the arm.\n\nMost episodes settle over days to weeks. The goal is to keep moving, use a few targeted exercises to rebuild tolerance, and avoid prolonged rest, which tends to make a stiff neck worse rather than better.',
    tissue:
      'The cervical joints, muscles, and soft tissues of the neck (not a nerve root or serious structural disease).',
    video: {
      videoId: 'awJP4gENHLM',
      title: 'Neck and Shoulder Pain Relief (4 Strength Exercises | 10 minutes)',
      channel: 'E3 Rehab',
      channelUrl: 'https://www.youtube.com/c/E3Rehab',
      approved: false,
      note: 'Re-curated to an evidence-based source (E3 Rehab / Rehab Science); pending physician review.',
    },
    anatomyDiagram: {
      key: 'anatomy-cervical',
      altText:
        'Side view of the cervical spine showing the neck vertebrae and the surrounding muscles and soft tissues.',
      caption: 'Mechanical neck pain comes from the joints, muscles, and soft tissues of the neck.',
    },
    causes: [
      'Sustained postures (long periods looking down or holding the head forward)',
      'Deconditioning and low activity tolerance',
      'Work stress',
      'A recent strain or sudden change in load',
      'Triggers such as posture stress, sudden load changes, or poor sleep',
    ],
    riskFactors: [
      'Long hours in fixed positions (desk work, screens, time on the bike)',
      'General deconditioning and low activity tolerance',
      'High work or life stress',
      'Poor sleep',
      'A recent neck strain or prior episodes',
    ],
    symptoms: [
      'Neck pain and stiffness',
      'Pain with turning the head or looking down/up',
      'Pain sometimes referred toward the shoulder blade',
      'No clear neurologic deficit (no arm weakness, numbness, or shooting pain)',
    ],
    prognosis: {
      summary:
        'Mechanical neck pain is common and usually self-limited. Most episodes improve with staying active and a few targeted exercises; recurrent pain is common but not a sign of harm.',
      typicalTimeline:
        'Many episodes improve over days to weeks.',
      encouragement:
        'Recurrences are common and do not mean your neck is fragile. Keeping moving and rebuilding tolerance is what helps most.',
    },
    redFlags: [
      {
        text: 'Significant trauma to the neck.',
        urgency: 'emergency',
      },
      {
        text: 'New limb weakness.',
        urgency: 'emergency',
      },
      {
        text: 'A change in walking or balance (gait change).',
        urgency: 'emergency',
      },
      {
        text: 'Bowel or bladder changes.',
        urgency: 'emergency',
      },
      {
        text: 'Fever.',
        urgency: 'urgent',
      },
      {
        text: 'A history of cancer.',
        urgency: 'urgent',
      },
      {
        text: 'Unexplained weight loss.',
        urgency: 'urgent',
      },
      {
        text: 'Myelopathic signs (such as clumsy hands, balance trouble, or coordination changes).',
        urgency: 'urgent',
      },
      {
        text: 'Persistent arm symptoms.',
        urgency: 'see-clinician',
      },
      {
        text: 'Recurrent disabling episodes.',
        urgency: 'see-clinician',
      },
    ],
    selfCare: {
      dos: [
        'Keep moving — stay active and avoid prolonged rest, which tends to stiffen the neck.',
        'Do your targeted exercises consistently; gentle movement is part of the treatment.',
        'Use the pain-monitoring rule: mild discomfort up to about 3/10 during exercise is fine if it settles by the next morning.',
        'Set up your workspace and bike fit to reduce sustained, head-forward postures, and take regular movement breaks.',
        'Prioritize good sleep and manage stress, which can both feed neck pain.',
      ],
      donts: [
        'Don’t rely on rest, a collar, or completely avoiding movement — prolonged rest slows recovery.',
        'Don’t push into sharp or worsening pain, or pain that builds day to day.',
        'Don’t hold one fixed posture for hours without breaks.',
        'Don’t assume a recurrence means damage — it usually does not.',
      ],
    },
    clinicalGoal:
      'Restore comfortable neck range and load tolerance for daily life, work, and sport while keeping the patient active',
    hep: {
      overview:
        'A simple, symptom-management and movement-based program: chin nods, cervical rotation, thoracic extension, scapular retraction, and deep neck flexor endurance. Each phase has a clear goal and exit criteria — progress when you meet them, not by the calendar. If a phase flares you, regress to a smaller range. Pain rule by default: mild discomfort up to about 3/10 during exercise that settles by the next morning is acceptable.',
      phases: [
        {
          id: 'mechanical-neck-pain-phase-1',
          order: 1,
          title: 'Settle & Move',
          summary:
            'Calm the irritable neck and restore gentle, comfortable movement.',
          goal: 'Reduce pain and stiffness and reintroduce pain-free neck motion.',
          durationGuidance: 'Typically 1–2 weeks',
          entryCriteria: [
            'New or flared mechanical neck pain',
            'Stiffness and pain limit comfortable turning or looking up/down',
          ],
          exitCriteria: [
            'Neck pain and stiffness are easing',
            'Can turn the head and do gentle chin nods with pain ≤3/10 that settles overnight',
          ],
          educationPoints: [
            'Gentle movement and staying active settle a stiff neck better than rest.',
            'Some mild discomfort during exercise is OK if it settles by the next morning.',
            'Most episodes improve over days to weeks.',
          ],
          exercises: [
            {
              id: 'mnp-chin-nod',
              name: 'Chin nod',
              aka: ['deep neck flexor activation', 'craniocervical nod'],
              target: 'Deep neck flexors',
              purpose:
                'Activates and builds endurance in the deep neck flexors, which support and stabilize the cervical spine.',
              dose: { sets: 3, reps: '8–10', holdSeconds: 5, notes: '3 x 8–10 with 5-sec hold' },
              frequency: 'Daily',
              progression: 'Progress to longer holds.',
              regression: 'Regress to a smaller motion.',
              formCues: [
                '“Tiny nod”',
                '“Lengthen back of neck”',
                '“No jaw clench”',
                '“No lift”',
              ],
              painRule:
                'Pain rule: default — mild discomfort up to about 3/10 during exercise that settles by the next morning.',
              diagram: {
                key: 'chin-tuck',
                altText:
                  'Person performing a small chin nod, gently lengthening the back of the neck without lifting the head.',
              },
            },
            {
              id: 'mnp-cervical-rotation',
              name: 'Cervical rotation',
              aka: ['neck rotation range of motion'],
              target: 'Cervical joints and rotator muscles',
              purpose:
                'Restores comfortable turning range and keeps the neck moving without forcing painful end-range.',
              dose: { sets: 2, reps: '10 each side', tempo: 'slow and smooth' },
              frequency: 'Daily',
              progression: 'Gradually increase the range as comfort improves.',
              regression: 'Turn only within the pain-free range.',
              formCues: [
                'Turn the head smoothly to look over each shoulder',
                'Keep the movement gentle — no forcing',
                'Stay tall through the spine',
              ],
              painRule:
                'Pain rule: default — mild discomfort up to about 3/10 that settles by the next morning.',
              diagram: {
                key: 'anatomy-cervical',
                altText:
                  'Person seated tall, rotating the head smoothly to look over each shoulder.',
              },
            },
          ],
        },
        {
          id: 'mechanical-neck-pain-phase-2',
          order: 2,
          title: 'Restore Posture & Strength',
          summary:
            'Add thoracic and scapular work to offload the neck and rebuild postural tolerance.',
          goal: 'Improve upper-back mobility and shoulder-blade control to support the neck.',
          durationGuidance: 'Typically 2–4 weeks',
          entryCriteria: [
            'Comfortable with chin nods and cervical rotation',
            'Neck pain and stiffness improving',
          ],
          exitCriteria: [
            'Can sustain upright posture and do scapular work without next-day flare',
            'Range and comfort approaching normal for daily tasks',
          ],
          educationPoints: [
            'A stiff upper back makes the neck work harder — mobilizing it helps.',
            'Shoulder-blade strength supports the neck and improves posture tolerance.',
            'Keep the chin-nod work going as you add these exercises.',
          ],
          exercises: [
            {
              id: 'mnp-thoracic-extension',
              name: 'Thoracic extension',
              aka: ['upper-back extension', 'foam roller thoracic extension'],
              target: 'Thoracic spine mobility',
              purpose:
                'Improves upper-back extension so the neck does not have to compensate for a stiff thoracic spine.',
              dose: { sets: 2, reps: '8–10', tempo: 'slow' },
              frequency: 'Daily',
              progression: 'Increase the range or add a foam roller under the upper back.',
              regression: 'Reduce the range and stay within comfort.',
              formCues: [
                'Gently extend the upper back, opening through the chest',
                'Keep the motion in the upper back, not the low back',
                'Move slowly and smoothly',
              ],
              painRule:
                'Pain rule: default — mild discomfort up to about 3/10 that settles overnight.',
              equipment: ['Optional foam roller or chair back'],
              diagram: {
                key: 'cat-camel',
                altText:
                  'Person performing a gentle upper-back extension, opening through the chest.',
              },
            },
            {
              id: 'mnp-scapular-retraction',
              name: 'Scapular retraction',
              aka: ['shoulder-blade squeeze'],
              target: 'Scapular stabilizers (mid-trapezius and rhomboids)',
              purpose:
                'Strengthens the shoulder-blade muscles that support upright posture and offload the neck.',
              dose: { sets: 3, reps: '10–12', holdSeconds: 3 },
              frequency: 'Daily or every other day',
              progression: 'Add a light resistance band as control improves.',
              regression: 'Reduce reps or perform without resistance.',
              formCues: [
                'Gently draw the shoulder blades back and down',
                'Keep the shoulders relaxed — don’t shrug',
                'Hold briefly, then release under control',
              ],
              painRule:
                'Pain rule: default — mild discomfort up to about 3/10 that settles overnight.',
              equipment: ['Optional light resistance band'],
              diagram: {
                key: 'scapular-retraction',
                altText:
                  'Person drawing the shoulder blades back and down without shrugging.',
              },
            },
          ],
        },
        {
          id: 'mechanical-neck-pain-phase-3',
          order: 3,
          title: 'Build Endurance & Return',
          summary:
            'Build deep neck flexor endurance and return to full work, sport, and daily load.',
          goal: 'Restore lasting tolerance for sustained postures and your activities.',
          durationGuidance: 'Typically 2–4 weeks, then ongoing maintenance',
          entryCriteria: [
            'Comfortable with postural and scapular work',
            'Near-normal pain-free neck range',
          ],
          exitCriteria: [
            'Tolerating work, cycling, and lifting without a next-day flare',
            'Maintaining a few neck and postural exercises as a habit',
          ],
          educationPoints: [
            'Endurance, not just range, protects the neck during long postures.',
            'Reintroduce activity gradually and watch how the neck feels the next morning.',
            'Keep a short weekly habit to reduce recurrences.',
          ],
          exercises: [
            {
              id: 'mnp-deep-neck-flexor-endurance',
              name: 'Deep neck flexor endurance',
              aka: ['chin-nod endurance hold', 'craniocervical flexion endurance'],
              target: 'Deep neck flexors (endurance)',
              purpose:
                'Builds the endurance needed to hold good neck posture through long workdays, rides, and lifting sessions.',
              dose: { sets: 3, reps: '8–10', holdSeconds: 10, notes: 'progress longer holds' },
              frequency: 'Daily',
              progression: 'Progress to longer holds, then to longer total time under tension.',
              regression: 'Regress to a smaller motion and shorter holds.',
              formCues: [
                'Maintain a gentle “tiny nod” throughout the hold',
                'Lengthen the back of the neck',
                'No jaw clench, no lifting the head',
              ],
              painRule:
                'Pain rule: default — mild discomfort up to about 3/10 that settles by the next morning.',
              diagram: {
                key: 'chin-tuck',
                altText:
                  'Person holding a gentle chin-nod position to build deep neck flexor endurance.',
              },
            },
            {
              id: 'mnp-postural-maintenance',
              name: 'Posture & movement maintenance',
              target: 'Neck, scapular, and thoracic tolerance',
              purpose:
                'Keeps your range, strength, and endurance gains so the neck tolerates sustained postures and load.',
              dose: {
                reps: 'Combine chin nods, rotation, thoracic extension, and scapular retraction',
                notes: 'short routine plus movement breaks',
              },
              frequency: '2–3x/week, ongoing, plus regular movement breaks during long postures',
              progression: 'Increase load or duration of your activities as tolerance grows.',
              regression: 'Drop back to gentler versions during a flare or busy week.',
              formCues: [
                'Rotate through the key exercises rather than just one',
                'Break up long sitting, riding, or screen time',
                'Track how the neck feels the morning after harder days',
              ],
              painRule:
                'Pain rule: default — mild discomfort up to about 3/10 that settles overnight.',
              diagram: {
                key: 'anatomy-cervical',
                altText:
                  'Person sitting tall with good neck and upper-back posture during a work break.',
              },
            },
          ],
        },
      ],
    },
    evidence: {
      strength: 'moderate',
      bottomLine:
        'Keep moving, use targeted exercise, and avoid prolonged rest.',
      whatHelps: [
        'Staying active and avoiding prolonged rest',
        'Targeted neck and postural exercise (deep neck flexor work, mobility, scapular strengthening)',
        'Exercise combined with manual therapy in some subgroups',
        'Reassurance — most episodes settle over days to weeks',
      ],
      whatsUncertain: [
        'The exercise/manual-therapy combination that works best depends on the subgroup, and the ideal mix is not settled.',
        'Mechanical neck pain is a broad category; the best approach for any one person can vary, and this brief excludes cervicogenic headache and radicular/myelopathic subtypes.',
        'How best to prevent recurrent episodes, which are common, is not well defined.',
      ],
      citationIds: [
        'mechanical-neck-jospt-2017-blanpied',
        'mechanical-neck-cote-2016-guideline',
        'mechanical-neck-miller-2010-sysrev',
      ],
    },
    procedures: [
      {
        procedureId: 'corticosteroid',
        relevance: 'rarely',
        evidenceNote: 'Rarely indicated for simple mechanical neck pain.',
      },
      {
        procedureId: 'prp',
        relevance: 'not-indicated',
        evidenceNote: 'Not indicated for simple mechanical neck pain.',
      },
      {
        procedureId: 'hyaluronic-acid',
        relevance: 'not-indicated',
        evidenceNote: 'Not indicated for simple mechanical neck pain.',
      },
      {
        procedureId: 'shockwave',
        relevance: 'not-indicated',
        evidenceNote: 'Not indicated for simple mechanical neck pain.',
      },
      {
        procedureId: 'tenotomy',
        relevance: 'not-indicated',
        evidenceNote: 'Not indicated for simple mechanical neck pain.',
      },
      {
        procedureId: 'ultrasound-guided',
        relevance: 'selected-cases',
        evidenceNote: 'Selected cases only when the diagnosis changes.',
      },
    ],
    returnToActivity: {
      criteria: [
        'Neck range of motion has normalized',
        'Driving tolerance has normalized',
        'Work tolerance has normalized',
      ],
      timelineGuidance:
        'Return as range, driving tolerance, and work tolerance normalize — typically over days to weeks, though this varies.',
      reinjuryPrevention: [
        'Keep up a short routine of neck and postural exercises',
        'Break up sustained postures with regular movement during work, cycling, and screen time',
        'Address contributors such as deconditioning, poor sleep, and stress',
      ],
    },
    faqs: [
      {
        q: 'Should I rest my neck until the pain goes away?',
        a: 'No. For mechanical neck pain, the advice is to keep moving, use targeted exercise, and avoid prolonged rest — too much rest tends to stiffen the neck and slow recovery.',
        citationIds: ['mechanical-neck-cote-2016-guideline'],
      },
      {
        q: 'How long does mechanical neck pain take to improve?',
        a: 'Many episodes improve over days to weeks. Recurrent pain is common but usually settles the same way.',
        citationIds: ['mechanical-neck-jospt-2017-blanpied'],
      },
      {
        q: 'Do I need an injection or scan?',
        a: 'Usually not. Injections like corticosteroid are rarely indicated for simple mechanical neck pain, and PRP, hyaluronic acid, shockwave, and tenotomy are not indicated. Imaging is reserved for red-flag features or when the diagnosis changes.',
        citationIds: ['mechanical-neck-jospt-2017-blanpied'],
      },
      {
        q: 'When should I see a clinician?',
        a: 'See a clinician for persistent arm symptoms or recurrent disabling episodes, and seek urgent or emergency care for red flags such as trauma, new limb weakness, gait change, bowel/bladder changes, fever, a cancer history, unexplained weight loss, or signs of spinal cord involvement.',
      },
    ],
    relatedConditionIds: ['cervical-radiculopathy'],
    review: {
      status: 'physician-review-pending',
      contentVersion: '1.0.0',
    },
  },
}

export default moduleData
