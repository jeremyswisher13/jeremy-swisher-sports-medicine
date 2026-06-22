import type { Citation, ConditionModule } from '../types'

/**
 * Rotator cuff tendinopathy / subacromial pain.
 * Transcribed faithfully from the physician deep-research draft
 * (Shoulder and elbow → Rotator cuff and subacromial pain). The draft uses the
 * plain-language label "rotator cuff/subacromial pain" because it is still
 * patient-recognizable. Citations are the three sources the draft lists for this
 * condition, with their real URLs. Ships physician-review-pending for
 * Dr. Swisher's sign-off.
 */

const citations: Citation[] = [
  {
    id: 'rotator-cuff-desmeules-2025-cpg',
    label: 'Desmeules 2025 (JOSPT clinical practice guideline)',
    authorsOrOrg: 'Desmeules F, et al.',
    source: 'Journal of Orthopaedic & Sports Physical Therapy',
    year: 2025,
    type: 'guideline',
    url: 'https://www.jospt.org/doi/10.2519/jospt.2025.13182',
    takeaway:
      'Clinical practice guideline supporting education and progressive cuff/scapular strengthening as first-line care for rotator cuff–related shoulder pain.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'rotator-cuff-diercks-2014-guideline',
    label: 'Diercks 2014 (Acta Orthopaedica guideline)',
    authorsOrOrg: 'Diercks R, et al.',
    source: 'Acta Orthopaedica',
    year: 2014,
    type: 'guideline',
    url: 'https://pubmed.ncbi.nlm.nih.gov/24847788/',
    takeaway:
      'Guideline for subacromial pain syndrome favoring exercise-based, non-surgical management as the default approach.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'rotator-cuff-liaghat-2023-statement',
    label: 'Liaghat 2023 (BJSM/Open Sport Exerc Med statement/review)',
    authorsOrOrg: 'Liaghat B, et al.',
    source: 'BMJ Open Sport & Exercise Medicine',
    year: 2023,
    type: 'narrative-review',
    url: 'https://pubmed.ncbi.nlm.nih.gov/36261251/',
    takeaway:
      'Statement and review reinforcing exercise as central to managing rotator cuff–related shoulder pain.',
    verified: true,
    lastChecked: '2026-06-21',
  },
]

const moduleData: ConditionModule = {
  citations,
  condition: {
    id: 'rotator-cuff-tendinopathy',
    slug: 'rotator-cuff-tendinopathy',
    name: 'Rotator Cuff Tendinopathy / Subacromial Pain',
    shortName: 'Rotator Cuff',
    aka: [
      'subacromial pain syndrome',
      'subacromial impingement',
      'rotator cuff–related shoulder pain',
      'shoulder impingement',
      'rotator cuff tendinitis',
      'rotator cuff tendinosis',
      'supraspinatus tendinopathy',
      'painful arc syndrome',
    ],
    region: 'shoulder',
    sportTags: ['swimming', 'tennis', 'pickleball', 'throwing', 'lifting'],
    careTier: 'pc-core',
    oneLiner:
      'Pain from the rotator cuff tendons and the subacromial space that usually improves with education plus progressive cuff and scapular strengthening.',
    overview:
      'This is pain from the rotator cuff tendons and the tissues in the subacromial space — the area beneath the bony tip of the shoulder blade where the cuff tendons glide. It often hurts with overhead reaching, lifting away from the body, or sleeping on that side.\n\nMany people worry that shoulder pain means a tear that needs surgery, but many rotator cuff problems improve with non-surgical care, especially education plus exercise. Imaging abnormalities are common even in people without symptoms, so what shows up on an MRI must match the exam rather than drive the diagnosis on its own.',
    tissue:
      'The rotator cuff tendons and the tissues within the subacromial space beneath the acromion.',
    video: {
      videoId: 'y5CZHeQEDrU',
      title: 'Rotator Cuff Tendinopathy Stretches & Exercises - Ask Doctor Jo',
      channel: 'AskDoctorJo',
      channelUrl: 'https://www.youtube.com/@AskDoctorJo',
      approved: true,
      note: 'Physician-curated demonstration video.',
    },
    anatomyDiagram: {
      key: 'anatomy-shoulder',
      altText:
        'Front view of the shoulder showing the rotator cuff tendons passing beneath the acromion within the subacromial space.',
      caption:
        'The rotator cuff tendons glide through the subacromial space beneath the tip of the shoulder blade.',
    },
    causes: [
      'Repetitive overhead load (swimming, tennis, throwing, lifting)',
      'Deconditioning of the cuff and scapular muscles',
      'Age-related tendon change',
      'A recent spike in training or activity load',
    ],
    riskFactors: [
      'Sports and jobs with repetitive overhead reaching',
      'Reduced cuff or scapular strength and endurance',
      'Older age, with normal age-related tendon change',
      'A sudden increase in overhead or lifting volume',
    ],
    symptoms: [
      'Lateral shoulder pain (over the outer upper arm)',
      'A painful arc when raising the arm',
      'Night pain, especially when lying on that side',
      'Weakness or pain with lifting',
    ],
    prognosis: {
      summary:
        'Many people improve with education and progressive strengthening. The cuff adapts over weeks rather than days, so progress is measured over weeks to months.',
      typicalTimeline:
        'Many improve over 6 to 12 weeks; stubborn cases may take 3 to 6 months.',
      encouragement:
        'Shoulder pain rarely means surgery is inevitable. Imaging changes are common even without symptoms, so a positive scan is not a reason to lose hope — consistent strengthening is what helps most people.',
    },
    redFlags: [
      {
        text: 'Traumatic inability to lift the arm after an injury.',
        urgency: 'emergency',
      },
      {
        text: 'Shoulder dislocation symptoms.',
        urgency: 'emergency',
      },
      {
        text: 'Signs of infection (such as fever, redness, or warmth).',
        urgency: 'emergency',
      },
      {
        text: 'Marked weakness after trauma.',
        urgency: 'urgent',
      },
      {
        text: 'Suspected acute full-thickness tear.',
        urgency: 'urgent',
      },
      {
        text: 'New weakness, numbness, or tingling in the arm or hand (possible nerve involvement rather than cuff pain).',
        urgency: 'urgent',
      },
      {
        text: 'Persistent night pain.',
        urgency: 'see-clinician',
      },
      {
        text: 'Major stiffness.',
        urgency: 'see-clinician',
      },
      {
        text: 'Failed rehab.',
        urgency: 'see-clinician',
      },
    ],
    selfCare: {
      dos: [
        'Keep using the arm within comfort and stay active — modify overhead load rather than stopping everything.',
        'Do your cuff and scapular strengthening consistently — this is the treatment, not an add-on.',
        'Use the pain-monitoring rule: mild discomfort up to about 3/10 during exercise is acceptable if it settles by the next morning.',
        'Reduce painful overhead volume for now, then rebuild it gradually as the shoulder tolerates it.',
      ],
      donts: [
        'Don’t assume shoulder pain means a tear that needs surgery — most cases improve with non-surgical care.',
        'Don’t rush to an MRI; imaging changes are common even without symptoms and must match the exam.',
        'Don’t push through sharp or worsening pain, or pain that builds day to day.',
        'Don’t suddenly spike your overhead or lifting load — the classic trigger.',
      ],
    },
    clinicalGoal:
      'Pain-controlled overhead function and a durable return to overhead sport through progressive cuff and scapular strengthening.',
    hep: {
      overview:
        'A staged program that calms symptoms, then rebuilds cuff and scapular strength and overhead capacity. Each phase has a clear goal — progress when you tolerate the work without a next-day flare, not by the calendar. If a phase flares you, drop back a step. The standard pain rule applies throughout: mild discomfort up to about 3/10 during exercise is OK if it settles by the next morning.',
      phases: [
        {
          id: 'rotator-cuff-tendinopathy-phase-1',
          order: 1,
          title: 'Phase A: Pain-Calming Motion & Isometrics',
          summary:
            'Settle the irritable shoulder with gentle motion and pain-relieving isometric holds.',
          goal: 'Calm symptoms and reintroduce comfortable movement and early cuff activation.',
          durationGuidance: 'Typically 1–2 weeks',
          entryCriteria: [
            'New or flared rotator cuff / subacromial pain',
            'Painful arc or pain with overhead reaching',
          ],
          exitCriteria: [
            'Day-to-day pain is settling',
            'Comfortable with gentle motion and isometric holds without a next-day flare',
          ],
          educationPoints: [
            'Gentle motion and isometric holds can ease pain without provoking the shoulder.',
            'Keep using the arm within comfort — relative rest, not full rest.',
            'Some discomfort during exercise is OK if it settles by the next morning.',
          ],
          exercises: [
            {
              id: 'rc-pendulum',
              name: 'Pendulum',
              target: 'Shoulder joint comfort and gentle motion',
              purpose: 'Gentle motion to ease the irritable shoulder.',
              dose: { sets: 2, holdSeconds: 60, reps: '30–60 sec', notes: '2 x 30–60 sec' },
              frequency: 'Daily',
              progression: 'Progress to wider circles.',
              regression: 'Smaller circles.',
              formCues: [
                'Let the arm hang',
                'Move from the body, not a shoulder shrug',
                'Relax the jaw',
                'Easy pace',
              ],
              painRule:
                'Default: mild discomfort up to about 3/10 during the exercise is OK if it settles by the next morning.',
              diagram: {
                key: 'pendulum',
                altText:
                  'Person leaning forward letting the affected arm hang and swing in gentle circles.',
              },
            },
            {
              id: 'rc-isometric-er-wall',
              name: 'Isometric external rotation at wall',
              target: 'Rotator cuff',
              purpose: 'Analgesic effect and early cuff activation.',
              dose: { sets: 5, holdSeconds: 30, reps: '20–30 sec', notes: '5 x 20–30 sec' },
              frequency: 'Daily',
              progression: 'Hold longer or push firmer.',
              regression: 'Gentler push.',
              formCues: [
                'Elbow at side',
                'Light towel under the elbow',
                'No trunk twist',
                'Neck relaxed',
              ],
              painRule:
                'Default: mild discomfort up to about 3/10 during the hold is OK if it settles by the next morning.',
              equipment: ['A wall', 'A small towel'],
              diagram: {
                key: 'cuff-isometric',
                altText:
                  'Person standing with the elbow at the side pressing the back of the hand into a wall to hold an isometric external rotation.',
              },
            },
          ],
        },
        {
          id: 'rotator-cuff-tendinopathy-phase-2',
          order: 2,
          title: 'Phase B: Cuff & Scapular Strengthening',
          summary:
            'Build rotator cuff and scapular strength with controlled resistance.',
          goal: 'Rebuild cuff and scapular strength to support the shoulder under load.',
          durationGuidance: 'Typically 3–6 weeks',
          entryCriteria: [
            'Day-to-day pain has settled',
            'Comfortable with gentle motion and isometrics',
          ],
          exitCriteria: [
            'Tolerating cuff and scapular strengthening without a next-day flare',
            'Improving strength and control through range',
          ],
          educationPoints: [
            'Strengthening the cuff and the scapular (shoulder-blade) muscles together supports the shoulder.',
            'Quality of movement matters more than heavy load early on.',
            'It is OK to keep working out if painful overhead volume is reduced.',
          ],
          exercises: [
            {
              id: 'rc-side-lying-er',
              name: 'Side-lying external rotation',
              target: 'Infraspinatus / teres minor',
              purpose: 'Strengthens the external-rotator part of the cuff.',
              dose: { sets: 3, reps: '8–12', tempo: 'slow lower' },
              frequency: 'Every other day',
              progression: 'Progress load.',
              regression: 'No weight.',
              formCues: [
                'Elbow stays tucked',
                'Roll only the forearm',
                'Slow lower',
                'Shoulder down',
              ],
              painRule:
                'Default: mild discomfort up to about 3/10 during the exercise is OK if it settles by the next morning.',
              equipment: ['Light dumbbell (optional)'],
              diagram: {
                key: 'external-rotation-band',
                altText:
                  'Person lying on their side rotating the forearm outward with the elbow tucked against the body.',
              },
            },
            {
              id: 'rc-scaption-raise',
              name: 'Scaption raise',
              target: 'Supraspinatus / deltoid',
              purpose: 'Strengthens the cuff and deltoid in the scapular plane.',
              dose: { sets: 3, reps: '8–12', tempo: 'slow lower' },
              frequency: 'Every other day',
              progression: 'Progress load and range.',
              regression: 'Reduce range.',
              formCues: [
                'Thumb up if tolerated',
                'Raise in the scapular plane',
                'No shrug',
                'Slow lower',
              ],
              painRule:
                'Default: mild discomfort up to about 3/10 during the exercise is OK if it settles by the next morning.',
              equipment: ['Light dumbbells (optional)'],
              diagram: {
                key: 'scapular-retraction',
                altText:
                  'Person raising the arms forward and slightly out to the side in the scapular plane with thumbs up.',
              },
            },
          ],
        },
        {
          id: 'rotator-cuff-tendinopathy-phase-3',
          order: 3,
          title: 'Phase C: Overhead Capacity',
          summary:
            'Build serratus/scapular control and cuff endurance to handle overhead and carrying loads.',
          goal: 'Restore overhead capacity and endurance for sport and daily tasks.',
          durationGuidance: 'Typically 4–8 weeks',
          entryCriteria: [
            'Tolerating cuff and scapular strengthening without flare',
            'Comfortable strength and control through range',
          ],
          exitCriteria: [
            'Overhead tasks and strength near baseline without a next-day flare',
            'Confident with sport-specific overhead movements',
          ],
          educationPoints: [
            'Good scapular control sets the base for pain-free overhead work.',
            'Endurance, not just peak strength, protects the shoulder during repeated overhead sport.',
            'Rebuild overhead and carrying load gradually as tolerance grows.',
          ],
          exercises: [
            {
              id: 'rc-wall-slide-band',
              name: 'Wall slide with band',
              target: 'Serratus / scapular control',
              purpose: 'Trains scapular upward rotation and control for overhead reaching.',
              dose: { sets: 3, reps: '8–10' },
              frequency: '3–4 days/week',
              progression: 'Progress band tension.',
              regression: 'No band.',
              formCues: [
                'Gentle reach up',
                'Keep ribs down',
                'No pinching',
                'Smooth slide',
              ],
              painRule:
                'Default: mild discomfort up to about 3/10 during the exercise is OK if it settles by the next morning.',
              equipment: ['A wall', 'A resistance band'],
              diagram: {
                key: 'scapular-row',
                altText:
                  'Person facing a wall sliding both forearms upward with a band around the wrists to train scapular control.',
              },
            },
            {
              id: 'rc-farmer-carry',
              name: 'Farmer carry',
              target: 'Cuff / scapular endurance',
              purpose: 'Builds cuff and scapular endurance under load while walking.',
              dose: { sets: 3, reps: '20–40 m', notes: '3 x 20–40 m' },
              frequency: '3–4 days/week',
              progression: 'Progress load and distance.',
              regression: 'Lighter weight.',
              formCues: [
                'Tall posture',
                'Shoulder set down/back softly',
                'No lean',
                'Steady breath',
              ],
              painRule:
                'Default: mild discomfort up to about 3/10 during the exercise is OK if it settles by the next morning.',
              equipment: ['Dumbbells or kettlebells'],
              diagram: {
                key: 'scapular-retraction',
                altText:
                  'Person walking upright carrying a weight in each hand with shoulders set down and back.',
              },
            },
          ],
        },
      ],
    },
    evidence: {
      strength: 'moderate',
      bottomLine: 'Education and progressive strengthening are first-line.',
      whatHelps: [
        'Cuff/scapular strengthening',
        'Activity modification',
        'Time',
      ],
      whatsUncertain: [
        'The best exercise type is not settled.',
        'How much manual therapy adds is uncertain.',
      ],
      citationIds: [
        'rotator-cuff-desmeules-2025-cpg',
        'rotator-cuff-diercks-2014-guideline',
        'rotator-cuff-liaghat-2023-statement',
      ],
    },
    procedures: [
      {
        procedureId: 'corticosteroid',
        relevance: 'commonly-discussed',
        evidenceNote:
          'Short-term relief possible, especially subacromial, but not a cure.',
      },
      {
        procedureId: 'prp',
        relevance: 'selected-cases',
        evidenceNote: 'Evidence mixed.',
      },
      {
        procedureId: 'hyaluronic-acid',
        relevance: 'not-indicated',
        evidenceNote: 'Not indicated for rotator cuff / subacromial pain.',
      },
      {
        procedureId: 'shockwave',
        relevance: 'rarely',
        evidenceNote:
          'Rarely; mainly for calcific disease, not routine noncalcific cuff pain.',
      },
      {
        procedureId: 'ultrasound-guided',
        relevance: 'selected-cases',
        evidenceNote: 'Ultrasound-guided injection in selected cases.',
      },
      {
        procedureId: 'tenotomy',
        relevance: 'selected-cases',
        evidenceNote: 'Percutaneous tenotomy in selected cases after failed conservative care.',
      },
    ],
    returnToActivity: {
      criteria: [
        'Overhead tasks and strength near baseline',
        'No next-day flare after overhead activity',
      ],
      timelineGuidance:
        'Varies; many improve over 6–12 weeks, with stubborn cases taking 3–6 months.',
      reinjuryPrevention: [
        'Keep up ongoing cuff and scapular work',
        'Progress overhead load gradually',
      ],
    },
    faqs: [
      {
        q: 'Can I work out?',
        a: 'Usually yes, with painful overhead volume reduced.',
        citationIds: ['rotator-cuff-desmeules-2025-cpg'],
      },
      {
        q: 'Do I need an MRI?',
        a: 'Usually not at first. Imaging abnormalities are common even without symptoms, so a scan must match the exam.',
        citationIds: ['rotator-cuff-diercks-2014-guideline'],
      },
      {
        q: 'Is surgery inevitable?',
        a: 'Often no. Many rotator cuff problems improve with non-surgical care, especially education plus exercise.',
        citationIds: ['rotator-cuff-diercks-2014-guideline'],
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
