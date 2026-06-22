import type { Citation, ConditionModule } from '../types'

/**
 * Gluteal tendinopathy (Greater Trochanteric Pain Syndrome).
 * Transcribed from the physician-authored deep-research brief (pp. 29–30).
 * Citations are the real URLs listed in the source section. Ships
 * physician-review-pending for Dr. Swisher's sign-off.
 */

const citations: Citation[] = [
  {
    id: 'gluteal-mellor-2018-rct',
    label: 'Mellor 2018 (GTPS RCT, BMJ)',
    authorsOrOrg: 'Mellor R, et al.',
    source: 'BMJ',
    year: 2018,
    type: 'rct',
    url: 'https://pubmed.ncbi.nlm.nih.gov/29720374/',
    takeaway:
      'Education plus exercise (load management) outperformed corticosteroid injection and wait-and-see at 8 weeks and held up better over time for gluteal tendinopathy.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'gluteal-kjeldsen-2024-sr',
    label: 'Kjeldsen 2024 (systematic review)',
    authorsOrOrg: 'Kjeldsen T, et al.',
    source: 'Systematic review',
    year: 2024,
    type: 'systematic-review',
    url: 'https://pubmed.ncbi.nlm.nih.gov/38295551/',
    takeaway:
      'Systematic review supporting exercise-based load management as a primary treatment approach for greater trochanteric pain syndrome.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'gluteal-2025-gtps-synthesis',
    label: '2025 GTPS treatment synthesis',
    authorsOrOrg: 'GTPS treatment synthesis',
    source: 'Synthesis on GTPS treatments',
    year: 2025,
    type: 'systematic-review',
    url: 'https://pubmed.ncbi.nlm.nih.gov/40223303/',
    takeaway:
      'Synthesis of GTPS treatments noting corticosteroid offers short-term relief, while ESWT and exercise have roles in selected persistent cases.',
    verified: true,
    lastChecked: '2026-06-21',
  },
]

const moduleData: ConditionModule = {
  citations,
  condition: {
    id: 'gluteal-tendinopathy',
    slug: 'gluteal-tendinopathy',
    name: 'Gluteal Tendinopathy (Greater Trochanteric Pain Syndrome)',
    shortName: 'Gluteal Tendinopathy',
    aka: [
      'GTPS',
      'greater trochanteric pain syndrome',
      'trochanteric bursitis',
      'hip bursitis',
      'gluteus medius tendinopathy',
      'gluteus minimus tendinopathy',
      'lateral hip pain',
    ],
    region: 'hip-pelvis',
    sportTags: ['running', 'general'],
    careTier: 'pc-core',
    oneLiner:
      'Pain on the outside (side) of the hip from the gluteal tendons near the bony point of the hip, which responds well to load management and targeted exercise.',
    overview:
      'Greater trochanteric pain syndrome usually reflects pain from the gluteus medius and/or gluteus minimus tendons near the greater trochanter — the bony point on the outside of the hip — with or without irritation of the nearby bursa. It causes side-of-the-hip pain that is often worse when lying on that side, climbing stairs, or walking longer distances.\n\nThis is best understood as a tendon problem of load and capacity, not simply "bursitis." The older "hip bursitis" label is outdated; the tendons are usually the main source, so treatment focuses on calming the irritation and rebuilding the tendons\' tolerance to load.\n\nMost people improve with a combination of education, load modification, and targeted hip-abductor exercise, often over a couple of months.',
    tissue:
      'The gluteus medius and/or gluteus minimus tendons where they attach near the greater trochanter, with or without bursal irritation.',
    anatomyDiagram: {
      key: 'anatomy-hip',
      altText:
        'Side view of the hip showing the gluteus medius and minimus tendons attaching at the greater trochanter on the outside of the hip.',
      caption:
        'The gluteal tendons attach at the greater trochanter — the bony point on the side of the hip.',
    },
    causes: [
      'Compressive loading of the tendons, such as habitually "hanging" on one hip or sitting with crossed legs',
      'Side-lying on the sore hip, which compresses the tendons',
      'High walking or running volume, or a quick jump in volume',
      'Single-leg loading demands (stairs, hills, standing on one leg)',
    ],
    riskFactors: [
      'Female sex',
      'Midlife',
      'Compressive loading such as habitual hip "hang," side-lying on the sore side, or high walking/running volume',
    ],
    symptoms: [
      'Lateral (side-of-the-hip) pain and tenderness over the bony point',
      'Pain when lying on that side',
      'Pain climbing stairs or walking longer distances',
      'Pain with single-leg loading (standing on one leg, step-ups)',
    ],
    prognosis: {
      summary:
        'Most cases settle with load management and targeted exercise. Tendons adapt gradually, so progress is measured over weeks.',
      typicalTimeline:
        'Recovery is often 6 to 12 weeks, though chronic cases can last longer.',
      encouragement:
        'Reducing compression (how you sit, stand, and sleep) plus consistent abductor strengthening tends to hold up better over time than passive waiting or a steroid injection alone.',
    },
    redFlags: [
      {
        text: 'Inability to bear weight after trauma.',
        urgency: 'urgent',
      },
      {
        text: 'Fever.',
        urgency: 'urgent',
      },
      {
        text: 'Groin-dominant pain suggesting something else (e.g., hip joint pathology).',
        urgency: 'urgent',
      },
      {
        text: 'Severe weakness or a major change in your walking pattern.',
        urgency: 'see-clinician',
      },
      {
        text: 'Persistent, refractory pain that is not improving with appropriate care.',
        urgency: 'see-clinician',
      },
    ],
    selfCare: {
      dos: [
        'Reduce tendon compression early — avoid leaning/hanging on one hip and sitting with crossed legs.',
        'Adjust sleep position: avoid lying directly on the sore side; a pillow between the knees when on your back or other side helps.',
        'Do your hip-abductor exercises consistently — isometric holds early, then progressive strengthening.',
        'Use the pain-monitoring rule: discomfort up to about 3/10 during exercise is acceptable if it settles by the next morning.',
        'Manage walking/running volume so symptoms stay stable rather than spiking it.',
      ],
      donts: [
        'Don’t "hang" on one hip when standing or stand with your weight slumped to one side.',
        'Don’t sleep directly on the painful side or sit with your legs crossed.',
        'Don’t rely on rest or a steroid injection alone — load modification plus exercise holds up better over time.',
        'Don’t push through sharp or next-day-worsening pain.',
      ],
    },
    clinicalGoal:
      'Pain-controlled single-leg loading and a durable return to walking, stairs, and running with strong hip abductors',
    hep: {
      overview:
        'A staged program built around reducing tendon compression and progressively loading the hip abductors. Avoid side compression early, start with isometric abduction, then add bridging, side-stepping, and step-ups. Each phase has a clear goal — advance when you meet the exit criteria, not by the calendar. If a phase flares you, drop back a step.',
      phases: [
        {
          id: 'gluteal-tendinopathy-phase-1',
          order: 1,
          title: 'Settle & Decompress',
          summary:
            'Calm the irritable tendon by reducing compression and starting gentle isometric abduction.',
          goal: 'Reduce day-to-day lateral hip pain and reintroduce the tendons to gentle, controlled load.',
          durationGuidance: 'Typically 1–2 weeks',
          entryCriteria: [
            'New or flared lateral hip pain',
            'Pain lying on the side, with stairs, or walking',
          ],
          exitCriteria: [
            'Side-lying and walking tolerance are improving',
            'Can perform isometric hip abduction with pain ≤3/10 that settles overnight',
          ],
          educationPoints: [
            'Avoid side compression early — how you sit, stand, and sleep matters as much as the exercises.',
            'Isometric (holding) abduction can reduce pain and start strengthening without much movement.',
            'Keep walking within comfort — relative rest, not complete rest.',
          ],
          exercises: [
            {
              id: 'glut-iso-abduction-wall',
              name: 'Hip abduction isometric at wall',
              target: 'Gluteus medius and minimus',
              purpose:
                'Builds early abductor strength and can reduce pain without much movement of the irritable tendon.',
              dose: { sets: 5, holdSeconds: 25 },
              frequency: 'Daily',
              progression: 'Progress to a longer hold or a stronger push.',
              regression: 'Use a shorter hold.',
              formCues: [
                'Pelvis level',
                'Stand tall',
                'Gentle pressure',
                'No trunk sway',
              ],
              painRule:
                'Default: mild discomfort up to about 3/10 is OK if it settles by the next morning.',
              equipment: ['A wall'],
              diagram: {
                key: 'side-lying-hip-abduction',
                altText:
                  'Person standing side-on to a wall, pressing the outside of the foot into the wall to activate the hip abductors without moving.',
              },
            },
            {
              id: 'glut-decompression-positioning',
              name: 'Decompression positioning',
              aka: ['Posture and sleep set-up'],
              target: 'Gluteal tendons (offload compression)',
              purpose:
                'Reduces the compressive load that irritates the tendons against the greater trochanter throughout the day and night.',
              dose: { notes: 'Apply throughout the day and when sleeping' },
              frequency: 'All day',
              progression:
                'Maintain the habit as you add strengthening; reintroduce normal positions as tolerance improves.',
              regression:
                'Be stricter — use a pillow between the knees and avoid the sore side entirely if very irritable.',
              formCues: [
                'Stand evenly — don’t hang on one hip',
                'Avoid crossing your legs when sitting',
                'Place a pillow between the knees when lying down',
                'Avoid lying directly on the painful side',
              ],
              painRule:
                'Default: aim to keep lateral hip pain low and settling overnight.',
              diagram: {
                key: 'anatomy-hip',
                altText:
                  'Diagram of the side of the hip showing positions that reduce pressure on the gluteal tendons.',
              },
            },
          ],
        },
        {
          id: 'gluteal-tendinopathy-phase-2',
          order: 2,
          title: 'Build Abductor Strength',
          summary:
            'Add bridging and progressive hip-abductor loading to rebuild tendon capacity.',
          goal: 'Rebuild gluteal strength with controlled, progressive loading.',
          durationGuidance: 'Typically 3–6 weeks',
          entryCriteria: [
            'Comfortable with isometric hip abduction',
            'Side-lying and walking tolerance improving',
          ],
          exitCriteria: [
            'Bridges and abductor work tolerated with pain ≤3/10 that settles overnight',
            'No next-day flare from added loading',
          ],
          educationPoints: [
            'Slow, controlled movement matters more than heavy load at first.',
            'Keep up the decompression habits while you build strength.',
            'Some discomfort during loading is OK if it settles by the next morning.',
          ],
          exercises: [
            {
              id: 'glut-bridge',
              name: 'Glute bridge',
              target: 'Gluteus maximus and hip extensors',
              purpose:
                'Strengthens the hips with low compression on the irritable lateral tendons.',
              dose: { sets: 3, reps: '10–12', tempo: '2s up, 3s down' },
              frequency: 'Daily or every other day',
              progression:
                'Progress toward a single-leg bridge as control improves.',
              regression: 'Reduce range or hold for less time.',
              formCues: [
                'Drive through the heels',
                'Squeeze the glutes at the top',
                'Keep the pelvis level',
                'Lower under control',
              ],
              painRule:
                'Default: discomfort up to about 3/10 that settles by the next morning.',
              diagram: {
                key: 'glute-bridge',
                altText:
                  'Person lying on their back lifting the hips into a bridge.',
              },
            },
            {
              id: 'glut-side-step',
              name: 'Banded side-step',
              aka: ['Lateral band walk'],
              target: 'Gluteus medius and minimus',
              purpose:
                'Loads the hip abductors through movement to rebuild their capacity for single-leg activity.',
              dose: { sets: 3, reps: '10 each direction' },
              frequency: 'Every other day',
              progression:
                'Use a stronger band, a lower stance, or more steps.',
              regression:
                'Remove the band or take smaller, slower steps.',
              formCues: [
                'Stay tall — no trunk sway',
                'Step sideways with control',
                'Keep tension on the band',
                'Knees tracking over the toes',
              ],
              painRule:
                'Default: discomfort up to about 3/10 that settles by the next morning.',
              equipment: ['Resistance band'],
              diagram: {
                key: 'banded-lateral-walk',
                altText:
                  'Person with a resistance band around the legs stepping sideways.',
              },
            },
          ],
        },
        {
          id: 'gluteal-tendinopathy-phase-3',
          order: 3,
          title: 'Single-Leg Loading & Return',
          summary:
            'Progress to step-ups and single-leg work, then graded return to walking, stairs, and running.',
          goal: 'Tolerate single-leg loading and return to your activities without a next-day flare.',
          durationGuidance: 'Typically 4–8 weeks',
          entryCriteria: [
            'Bridges and side-stepping tolerated without flare',
            'Walking and stairs improving',
          ],
          exitCriteria: [
            'Single-leg stance, step-ups, and side-sleeping tolerance have improved',
            'Back to desired walking/running volume with stable symptoms',
          ],
          educationPoints: [
            'Return when single-leg stance, step-up, and side-sleeping tolerance improve.',
            'Keep hip-abductor strength work going to protect against recurrence.',
            'Increase walking/running volume gradually so symptoms stay stable.',
          ],
          exercises: [
            {
              id: 'glut-step-up',
              name: 'Step-up',
              target: 'Gluteus medius and hip control',
              purpose:
                'Trains single-leg loading that mirrors stairs and walking.',
              dose: { sets: 3, reps: '8–10 each leg', tempo: 'controlled' },
              frequency: 'Every other day',
              progression: 'Use a higher step or add hand-held weight.',
              regression: 'Use a lower step or hold a rail for support.',
              formCues: [
                'Keep the pelvis level — don’t let the hip drop',
                'Drive up through the heel',
                'Control the lowering',
                'Knee tracking over the toes',
              ],
              painRule:
                'Default: discomfort up to about 3/10 that settles by the next morning.',
              equipment: ['A step or sturdy box', 'Optional rail for balance'],
              diagram: {
                key: 'step-down',
                altText:
                  'Person stepping up onto a box, keeping the pelvis level.',
              },
            },
            {
              id: 'glut-single-leg-balance',
              name: 'Single-leg stance / hip-hike',
              aka: ['Pelvic-drop control'],
              target: 'Gluteus medius (pelvic stability)',
              purpose:
                'Restores the abductor control needed to keep the pelvis level during single-leg activities.',
              dose: { sets: 3, reps: '8–10 each side' },
              frequency: 'Every other day',
              progression:
                'Progress from a static hold to a controlled hip-hike, then add a longer hold.',
              regression: 'Use fingertip support on a wall or rail.',
              formCues: [
                'Stand tall on one leg',
                'Keep the pelvis level',
                'Lift the opposite hip with control, then lower slowly',
                'No trunk lean',
              ],
              painRule:
                'Default: discomfort up to about 3/10 that settles by the next morning.',
              diagram: {
                key: 'hip-hike',
                altText:
                  'Person standing on one leg, raising and lowering the opposite side of the pelvis under control.',
              },
            },
          ],
        },
      ],
    },
    evidence: {
      strength: 'moderate',
      bottomLine:
        'Load modification plus targeted exercise beats passive waiting and tends to hold up better than a steroid injection over time.',
      whatHelps: [
        'Education plus targeted hip-abductor exercise (strong-to-moderate support)',
        'Reducing tendon compression (how you sit, stand, and sleep)',
        'Corticosteroid injection for short-term relief in selected cases (moderate)',
        'Extracorporeal shockwave therapy (ESWT) in selected persistent cases (moderate)',
      ],
      whatsUncertain: [
        'The best single exercise recipe and dosing for gluteal tendinopathy is not firmly settled.',
        'PRP evidence is still variable for this condition.',
        'How best to select which patients benefit from ESWT or injection versus exercise alone is uncertain.',
      ],
      citationIds: [
        'gluteal-mellor-2018-rct',
        'gluteal-kjeldsen-2024-sr',
        'gluteal-2025-gtps-synthesis',
      ],
    },
    procedures: [
      {
        procedureId: 'corticosteroid',
        relevance: 'commonly-discussed',
        evidenceNote: 'Commonly discussed, often short-term benefit.',
        citationIds: ['gluteal-mellor-2018-rct'],
      },
      {
        procedureId: 'prp',
        relevance: 'selected-cases',
        evidenceNote: 'Selected cases, evidence still variable.',
      },
      {
        procedureId: 'hyaluronic-acid',
        relevance: 'not-indicated',
        evidenceNote: 'Not indicated.',
      },
      {
        procedureId: 'shockwave',
        relevance: 'selected-cases',
        evidenceNote: 'ESWT: selected cases.',
        citationIds: ['gluteal-2025-gtps-synthesis'],
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
        'Single-leg stance tolerance has improved',
        'Step-up tolerance has improved',
        'Side-sleeping tolerance has improved',
      ],
      timelineGuidance:
        'Often 6 to 12 weeks, though chronic cases can last longer; highly individual.',
      reinjuryPrevention: [
        'Keep hip-abductor strength work going',
        'Maintain decompression habits (avoid hip "hang," crossed legs, side-lying on the sore hip)',
        'Increase walking/running volume gradually',
      ],
    },
    faqs: [
      {
        q: 'Is this "hip bursitis"?',
        a: 'The older "bursitis" label is outdated. The pain usually comes from the gluteal tendons near the bony point of the hip, with or without bursal irritation — so treatment focuses on the tendons, not just the bursa.',
        citationIds: ['gluteal-mellor-2018-rct'],
      },
      {
        q: 'Should I just get a steroid injection?',
        a: 'A steroid injection can help in the short term for selected cases, but load modification plus targeted exercise tends to hold up better over time than a steroid injection alone.',
        citationIds: ['gluteal-mellor-2018-rct', 'gluteal-2025-gtps-synthesis'],
      },
      {
        q: 'Why does it hurt when I lie on that side?',
        a: 'Side-lying compresses the gluteal tendons against the bony point of the hip. Avoiding the sore side and using a pillow between the knees reduces that compression and helps symptoms settle.',
        citationIds: ['gluteal-kjeldsen-2024-sr'],
      },
      {
        q: 'How long until I feel better?',
        a: 'Recovery is often 6 to 12 weeks with consistent load management and exercise, though chronic cases can last longer.',
        citationIds: ['gluteal-kjeldsen-2024-sr'],
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
