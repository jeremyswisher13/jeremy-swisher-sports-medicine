import type { Citation, ConditionModule } from '../types'

/**
 * Biceps tendinopathy (long head of biceps). Transcribed faithfully from the
 * physician-authored deep-research source. Ships physician-review-pending for
 * Dr. Swisher's sign-off. Citations are the real URLs listed in the source.
 */

const citations: Citation[] = [
  {
    id: 'biceps-mcdevitt-2024-scoping',
    label: 'McDevitt 2024 (scoping review)',
    authorsOrOrg: 'McDevitt AW, et al.',
    source: 'Brazilian Journal of Physical Therapy',
    year: 2024,
    type: 'systematic-review',
    url: 'https://pubmed.ncbi.nlm.nih.gov/38219522/',
    takeaway:
      'Scoping review of long head of biceps tendinopathy; rehab mirrors broader shoulder load management and cuff/scapular strengthening, with sparse isolated high-quality evidence.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'biceps-varacallo-2025-statpearls',
    label: 'Varacallo 2025 (StatPearls review)',
    authorsOrOrg: 'Varacallo MA, et al.',
    source: 'StatPearls',
    year: 2025,
    type: 'narrative-review',
    url: 'https://pubmed.ncbi.nlm.nih.gov/30422594/',
    takeaway:
      'Review of biceps tendinitis/tendinopathy covering causes, presentation, and conservative-first management of anterior shoulder pain.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'biceps-canavan-2024-mri',
    label: 'Canavan 2024 (MRI association study)',
    authorsOrOrg: 'Canavan K, et al.',
    source: 'Observational MRI association paper',
    year: 2024,
    type: 'cohort',
    url: 'https://pubmed.ncbi.nlm.nih.gov/39679662/',
    takeaway:
      'Observational MRI study linking long head of biceps tendon changes with associated shoulder pathology, supporting a broad differential.',
    verified: true,
    lastChecked: '2026-06-21',
  },
]

const moduleData: ConditionModule = {
  citations,
  condition: {
    id: 'biceps-tendinopathy',
    slug: 'biceps-tendinopathy',
    name: 'Biceps Tendinopathy',
    shortName: 'Biceps Tendinopathy',
    aka: [
      'long head of biceps tendinopathy',
      'LHBT tendinopathy',
      'bicipital tendinitis',
      'biceps tendinitis',
      'bicipital groove pain',
      'proximal biceps tendinopathy',
    ],
    region: 'shoulder',
    sportTags: ['lifting', 'climbing', 'tennis'],
    careTier: 'pc-core',
    oneLiner:
      'Front-of-shoulder pain from the long head of the biceps tendon that usually responds to load management and cuff/scapular strengthening.',
    overview:
      'Biceps tendinopathy usually means pain from the long head of the biceps tendon in the front of the shoulder. The long head of the biceps runs through a groove at the top of the upper arm and into the shoulder joint, and it can become irritated and painful when it is loaded more than it can currently handle.\n\nThis problem often overlaps with rotator cuff problems, so patients commonly feel front-shoulder pain with lifting, reaching, or pulling. Because the biceps tendon rarely acts alone, the front-shoulder pain you feel is frequently part of a broader shoulder picture rather than a single isolated tendon.\n\nMost cases settle with patient load management and a progressive rehab program that also strengthens the rotator cuff and shoulder blade muscles. The goal is to rebuild the tendon and surrounding shoulder so it tolerates the lifting, reaching, and overhead tasks you care about.',
    tissue:
      'The long head of the biceps tendon (LHBT) at the front of the shoulder, often together with the rotator cuff and scapular muscles that share the load.',
    video: {
      videoId: 'g3oFfYFRtcQ',
      title: 'Biceps Tendinopathy Rehab Exercises',
      channel: 'E3 Rehab',
      channelUrl: 'https://www.youtube.com/@E3Rehab',
      approved: false,
      note: 'Re-curated to an evidence-based rehab source; pending physician review.',
    },
    anatomyDiagram: {
      key: 'anatomy-shoulder',
      altText:
        'Front view of the shoulder showing the long head of the biceps tendon running through the bicipital groove into the joint, alongside the rotator cuff.',
      caption:
        'The long head of the biceps tendon runs through a groove at the front of the shoulder.',
    },
    causes: [
      'Overhead and pulling loads',
      'Throwing',
      'Rotator cuff dysfunction',
      'Age-related tendon change',
    ],
    riskFactors: [
      'Repetitive overhead or pulling activity (lifting, climbing, racket sports)',
      'Throwing demands',
      'Coexisting rotator cuff problems',
      'Older age with natural tendon changes',
    ],
    symptoms: [
      'Anterior (front-of-shoulder) pain',
      'Tenderness in the bicipital groove',
      'Pain with resisted elbow flexion or supination in some patients',
      'Front-shoulder pain with lifting, reaching, or pulling',
    ],
    prognosis: {
      summary:
        'Most cases improve with load management and rehab that also addresses the rotator cuff and shoulder blade. Tendons adapt gradually, so progress is measured in weeks rather than days.',
      typicalTimeline:
        'Recovery often takes 6 to 12+ weeks with load management and rehab.',
      encouragement:
        'Some front-shoulder discomfort during recovery is expected. Steady, progressive loading of the biceps, cuff, and scapular muscles is what rebuilds tolerance.',
    },
    redFlags: [
      {
        text: 'Acute deformity or suspected rupture after a pop.',
        urgency: 'emergency',
      },
      {
        text: 'Major weakness after injury.',
        urgency: 'urgent',
      },
      {
        text: 'Persistent anterior shoulder pain, instability, or clicking / concern for a SLAP (labral) lesion.',
        urgency: 'see-clinician',
      },
    ],
    selfCare: {
      dos: [
        'Manage your load — reduce aggravating lifting, reaching, pulling, and overhead work rather than stopping everything.',
        'Use the pain-monitoring rule: discomfort up to about 3/10 during exercise is acceptable if it settles by the next morning.',
        'Keep your rotator cuff and shoulder blade (scapular) muscles in the program — biceps pain rarely acts alone.',
        'Do your loading exercises consistently and progress them gradually as tolerated.',
      ],
      donts: [
        "Don't push through sharp or worsening front-shoulder pain, or pain that builds day to day.",
        "Don't suddenly spike overhead, pulling, or throwing load.",
        "Don't rely on rest alone — tendons generally do worse with prolonged unloading.",
        "Don't ignore new deformity, a pop, or major weakness — these need evaluation.",
      ],
    },
    clinicalGoal:
      'Pain-controlled pressing, pulling, and overhead use with near-normal shoulder strength.',
    hep: {
      overview:
        'A staged program that loads the biceps tendon while also strengthening the rotator cuff and shoulder blade muscles, because biceps pain usually travels with broader shoulder load problems. Each phase has a clear goal and exit criteria — progress when you meet them, not by the calendar. If a phase flares you, drop back a step. Pain rule: mild discomfort up to about 3/10 that settles by the next morning is acceptable.',
      phases: [
        {
          id: 'biceps-tendinopathy-phase-1',
          order: 1,
          title: 'Phase A — Calm & Isometrics',
          summary:
            'Settle the irritable front-shoulder pain and start gentle isometric loading of the biceps with light shoulder mobility.',
          goal: 'Reduce day-to-day anterior shoulder pain and reintroduce gentle, controlled loading.',
          durationGuidance: 'Typically 1–2 weeks',
          entryCriteria: [
            'New or flared front-of-shoulder pain',
            'Pain with lifting, reaching, or pulling',
          ],
          exitCriteria: [
            'Front-shoulder pain easing day to day',
            'Can perform isometric elbow flexion/supination holds with pain ≤3/10 that settles overnight',
          ],
          educationPoints: [
            'Isometric holds can build early strength and calm pain with little movement.',
            'Keep using the arm within comfort — relative rest, not a sling for long periods.',
            'Some front-shoulder discomfort during loading is OK if it settles by the next morning.',
          ],
          exercises: [
            {
              id: 'biceps-iso-flexion-supination',
              name: 'Isometric elbow flexion/supination hold',
              target: 'Long head of biceps (isometric loading)',
              purpose:
                'Builds early biceps strength and can reduce front-shoulder pain without much movement.',
              dose: { sets: 5, holdSeconds: 30 },
              frequency: 'Daily',
              progression:
                'Increase hold time and effort, then add light resistance as pain allows.',
              regression:
                'Lower the effort or shorten the hold so pain stays mild.',
              formCues: [
                'Elbow tucked near your side',
                'Steady, submaximal effort — no straining or bouncing',
                'Keep the shoulder relaxed, no shrug',
                'Pain in front of the shoulder stays mild',
              ],
              painRule:
                'Mild discomfort up to about 3/10 that settles by the next morning.',
              equipment: ['A wall or your other hand for resistance'],
              diagram: {
                key: 'anatomy-elbow',
                altText:
                  'Person holding the elbow bent against gentle resistance to load the biceps without movement.',
              },
            },
            {
              id: 'biceps-pendulum',
              name: 'Pendulum',
              target: 'Shoulder mobility and gentle decompression',
              purpose:
                'Encourages relaxed, pain-free shoulder motion to ease early irritability.',
              dose: { sets: 2, reps: '20 circles each direction' },
              frequency: 'Daily',
              progression:
                'Gradually increase circle size as comfort improves.',
              regression: 'Smaller, slower circles with more support on the table.',
              formCues: [
                'Lean forward and let the arm hang relaxed',
                'Let momentum from the body, not the shoulder, drive the motion',
                'Keep it gentle and pain-free',
              ],
              diagram: {
                key: 'pendulum',
                altText:
                  'Person bent forward letting the arm hang and swing in gentle circles.',
              },
            },
          ],
        },
        {
          id: 'biceps-tendinopathy-phase-2',
          order: 2,
          title: 'Phase B — Cuff & Scapula Strength',
          summary:
            'Add side-lying external rotation, band rows, and light biceps curls to rebuild rotator cuff and shoulder blade strength.',
          goal: 'Rebuild rotator cuff and scapular control while adding light dynamic biceps loading.',
          durationGuidance: 'Typically 3–6 weeks',
          entryCriteria: [
            'Comfortable with isometric biceps holds',
            'Front-shoulder pain improving',
          ],
          exitCriteria: [
            'Can perform side-lying ER, band rows, and light curls with good control and pain ≤3/10',
            'Tolerating dynamic loading without a next-day flare',
          ],
          educationPoints: [
            'Biceps pain rarely acts alone — strengthen the cuff and shoulder blade alongside it.',
            'Quality of control matters more than weight early on.',
            'Keep the shoulder relaxed and avoid shrugging during pulling work.',
          ],
          exercises: [
            {
              id: 'biceps-side-lying-er',
              name: 'Side-lying external rotation',
              target: 'Rotator cuff (external rotators)',
              purpose:
                'Strengthens the rotator cuff that shares load with the biceps tendon.',
              dose: { sets: 3, reps: '10–15', tempo: 'slow and controlled' },
              frequency: 'Every other day',
              progression: 'Increase reps, then add a light dumbbell.',
              regression: 'Reduce range or remove the weight.',
              formCues: [
                'Lie on the uninvolved side with a small towel under the working elbow',
                'Keep the elbow tucked at your side',
                'Rotate the forearm up smoothly, lower with control',
              ],
              painRule:
                'Mild discomfort up to about 3/10 that settles by the next morning.',
              equipment: ['Light dumbbell', 'Small towel roll'],
              diagram: {
                key: 'external-rotation-band',
                altText:
                  'Person lying on their side rotating the forearm upward to strengthen the rotator cuff.',
              },
            },
            {
              id: 'biceps-band-row',
              name: 'Band row',
              target: 'Scapular stabilizers and mid-back',
              purpose:
                'Strengthens the shoulder blade muscles that support the front of the shoulder.',
              dose: { sets: 3, reps: '10–15' },
              frequency: 'Every other day',
              progression: 'Increase band resistance as control improves.',
              regression: 'Use a lighter band or fewer reps.',
              formCues: [
                'Elbows near your sides',
                'Shoulders down, no shrug',
                'Pause and squeeze the shoulder blades back',
              ],
              painRule:
                'Mild discomfort up to about 3/10 that settles by the next morning.',
              equipment: ['Resistance band'],
              diagram: {
                key: 'scapular-row',
                altText:
                  'Person pulling a resistance band toward the body with elbows near the sides.',
              },
            },
            {
              id: 'biceps-light-curl',
              name: 'Light biceps curl',
              target: 'Biceps (light dynamic loading)',
              purpose:
                'Reintroduces controlled, dynamic loading of the biceps as pain settles.',
              dose: { sets: 3, reps: '10–15', tempo: 'controlled' },
              frequency: 'Every other day',
              progression: 'Increase reps, then add light load.',
              regression:
                'Reduce the load or return to an isometric hold if irritable.',
              formCues: [
                'Elbow near your side',
                'Avoid shoulder shrug',
                'Curl smoothly and lower with control',
              ],
              painRule:
                'Mild discomfort up to about 3/10 that settles by the next morning.',
              equipment: ['Light dumbbell'],
              diagram: {
                key: 'anatomy-elbow',
                altText:
                  'Person performing a light biceps curl with the elbow tucked at the side.',
              },
            },
          ],
        },
        {
          id: 'biceps-tendinopathy-phase-3',
          order: 3,
          title: 'Phase C — Eccentric-Heavy & Overhead Integration',
          summary:
            'Build load tolerance with eccentric-heavy biceps work (hammer curl) and integrate overhead and pulling tasks.',
          goal: 'Rebuild biceps and shoulder load tolerance and reintroduce overhead and pulling demands.',
          durationGuidance: 'Typically 4–8 weeks',
          entryCriteria: [
            'Good control with cuff, scapular, and light curl work',
            'No next-day flare from dynamic loading',
          ],
          exitCriteria: [
            'Tolerating eccentric-heavy curls and overhead work without flare',
            'Pressing, pulling, and overhead tasks comfortable with near-normal strength',
          ],
          educationPoints: [
            'Heavier, slow-lowering (eccentric) loading drives tendon adaptation.',
            'Layer overhead and pulling tasks back in gradually.',
            'Keep the cuff and scapular strength work going as you add load.',
          ],
          exercises: [
            {
              id: 'biceps-hammer-curl',
              name: 'Hammer curl',
              target: 'Biceps / brachialis',
              purpose: 'Load tolerance.',
              dose: { sets: 3, reps: '8–12', tempo: 'slow lower' },
              frequency: 'Every other day',
              progression: 'Progress load.',
              regression: 'Regress to an isometric hold.',
              formCues: [
                'Elbow near side',
                'Avoid shoulder shrug',
                'Slow lower',
                'Pain in front of shoulder stays mild',
              ],
              painRule:
                'Mild discomfort up to about 3/10 that settles by the next morning.',
              equipment: ['Dumbbells'],
              diagram: {
                key: 'anatomy-elbow',
                altText:
                  'Person performing a hammer curl with a neutral grip, lowering the weight slowly.',
              },
            },
            {
              id: 'biceps-overhead-integration',
              name: 'Overhead / pulling integration',
              target: 'Whole-shoulder load tolerance',
              purpose:
                'Reintroduces the overhead and pulling demands of sport and daily life in controlled steps.',
              dose: {
                sets: 3,
                reps: '8–12',
                notes: 'graded overhead and pulling tasks',
              },
              frequency: '2–3x/week',
              progression:
                'Add range, then load, then sport- or work-specific movements.',
              regression:
                'Reduce the range, lower the load, or stay below shoulder height.',
              formCues: [
                'Keep the shoulder blade set, no shrug',
                'Move within a comfortable range first',
                'Advance only when next-day symptoms stay stable',
              ],
              painRule:
                'Mild discomfort up to about 3/10 that settles by the next morning.',
              cautions: [
                'Progress overhead work gradually if it tends to provoke front-shoulder pain.',
              ],
              diagram: {
                key: 'anatomy-shoulder',
                altText:
                  'Person reaching overhead and pulling with controlled, set shoulder mechanics.',
              },
            },
          ],
        },
      ],
    },
    evidence: {
      strength: 'limited',
      bottomLine:
        'Rehab mirrors shoulder load management and cuff/scapular strengthening; isolated high-quality evidence is sparse.',
      whatHelps: [
        'Load management — reducing aggravating overhead, pulling, and lifting demands',
        'Rotator cuff and scapular strengthening alongside biceps loading',
        'Progressive biceps loading from isometrics to eccentric-heavy work',
        'Keeping the differential broad, since isolated biceps tendinopathy is less common than combined shoulder pathology',
      ],
      whatsUncertain: [
        'Isolated high-quality evidence for biceps-specific rehab is sparse; care is extrapolated from broader shoulder management.',
        'Isolated long head of biceps tendinopathy is less common than combined shoulder pathology, so the differential should stay broad.',
        'The best injection or procedure choice is unsettled, and most are reserved for selected cases.',
      ],
      citationIds: [
        'biceps-mcdevitt-2024-scoping',
        'biceps-varacallo-2025-statpearls',
        'biceps-canavan-2024-mri',
      ],
    },
    procedures: [
      {
        procedureId: 'corticosteroid',
        relevance: 'selected-cases',
        evidenceNote:
          'Selected cases, often discussed for bicipital groove pain but used cautiously.',
        citationIds: ['biceps-mcdevitt-2024-scoping'],
      },
      {
        procedureId: 'prp',
        relevance: 'rarely',
        evidenceNote: 'Rarely / selected cases.',
        citationIds: ['biceps-mcdevitt-2024-scoping'],
      },
      {
        procedureId: 'hyaluronic-acid',
        relevance: 'rarely',
        evidenceNote: 'Rarely.',
        citationIds: ['biceps-mcdevitt-2024-scoping'],
      },
      {
        procedureId: 'shockwave',
        relevance: 'rarely',
        evidenceNote: 'Not routine for biceps tendinopathy; limited evidence.',
        citationIds: ['biceps-mcdevitt-2024-scoping'],
      },
      {
        procedureId: 'ultrasound-guided',
        relevance: 'selected-cases',
        evidenceNote: 'Selected cases.',
        citationIds: ['biceps-mcdevitt-2024-scoping'],
      },
      {
        procedureId: 'tenotomy',
        relevance: 'rarely',
        evidenceNote: 'Rarely, evidence sparse.',
        citationIds: ['biceps-mcdevitt-2024-scoping'],
      },
    ],
    returnToActivity: {
      criteria: [
        'Pressing, pulling, and overhead tasks tolerated with near-normal strength',
        'Front-shoulder pain controlled during and after activity',
      ],
      timelineGuidance:
        'Often 6 to 12+ weeks with load management and rehab, but individual and dependent on demands.',
      reinjuryPrevention: [
        'Keep rotator cuff and scapular strength in the program',
        'Return to pressing, pulling, and overhead load gradually',
        'Respect early front-shoulder warning signs and adjust load',
      ],
    },
    faqs: [
      {
        q: 'Is my biceps tendon the only problem?',
        a: 'Often not. Biceps tendinopathy frequently overlaps with rotator cuff problems, so isolated long head of biceps tendinopathy is less common than combined shoulder pathology. That is why rehab strengthens the cuff and shoulder blade too.',
        citationIds: ['biceps-mcdevitt-2024-scoping', 'biceps-canavan-2024-mri'],
      },
      {
        q: 'How long until I feel better?',
        a: 'Recovery often takes 6 to 12+ weeks with load management and rehab. Tendons adapt gradually, so progress is measured over weeks.',
        citationIds: ['biceps-varacallo-2025-statpearls'],
      },
      {
        q: 'Do I need an injection or surgery?',
        a: 'Usually not first. Conservative rehab is the foundation. Injections such as corticosteroid or an ultrasound-guided injection are reserved for selected cases, and procedures like tenotomy are used rarely with sparse evidence.',
        citationIds: ['biceps-mcdevitt-2024-scoping'],
      },
    ],
    relatedConditionIds: ['rotator-cuff-tendinopathy', 'ac-joint-sprain'],
    review: {
      status: 'physician-review-pending',
      contentVersion: '1.0.0',
    },
  },
}

export default moduleData
