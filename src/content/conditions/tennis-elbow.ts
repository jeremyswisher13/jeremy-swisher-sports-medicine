import type { Citation, ConditionModule } from '../types'

/**
 * Tennis Elbow (Lateral Epicondylitis). Transcribed faithfully from the
 * physician-authored deep-research source (pp. 16–17). Citations are the real
 * URLs listed in that section. Ships physician-review-pending for Dr. Swisher's
 * sign-off.
 */

const citations: Citation[] = [
  {
    id: 'tennis-jospt-2022-lateral-elbow',
    label: 'JOSPT Lateral Elbow Pain CPG (2022)',
    authorsOrOrg: 'Journal of Orthopaedic & Sports Physical Therapy',
    source: 'Journal of Orthopaedic & Sports Physical Therapy',
    year: 2022,
    type: 'guideline',
    url: 'https://www.jospt.org/doi/10.2519/jospt.2022.0302',
    takeaway:
      'Clinical practice guideline on lateral elbow pain and muscle-function impairments; loading-based rehab is first-line management.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'tennis-wallis-2024-cochrane',
    label: 'Wallis 2024 (Cochrane review)',
    authorsOrOrg: 'Wallis JA, et al.',
    source: 'Cochrane Database of Systematic Reviews',
    year: 2024,
    type: 'systematic-review',
    url: 'https://pubmed.ncbi.nlm.nih.gov/38802121/',
    takeaway:
      'Systematic review of treatments for lateral elbow tendinopathy informing the balance of benefits and harms across interventions, including injections.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'tennis-xu-2024-meta',
    label: 'Xu 2024 (systematic review / meta-analysis)',
    authorsOrOrg: 'Xu Y, et al.',
    source: 'Systematic review / meta-analysis',
    year: 2024,
    type: 'meta-analysis',
    url: 'https://pubmed.ncbi.nlm.nih.gov/38357713/',
    takeaway:
      'Systematic review and meta-analysis evaluating interventions for lateral elbow tendinopathy, including injection options such as PRP.',
    verified: true,
    lastChecked: '2026-06-21',
  },
]

const moduleData: ConditionModule = {
  citations,
  condition: {
    id: 'tennis-elbow',
    slug: 'tennis-elbow',
    name: 'Tennis Elbow (Lateral Epicondylitis)',
    shortName: 'Tennis Elbow',
    aka: [
      'lateral epicondylitis',
      'lateral epicondylalgia',
      'lateral elbow tendinopathy',
      'common extensor tendinopathy',
      'extensor carpi radialis brevis tendinopathy',
    ],
    region: 'elbow',
    sportTags: ['tennis', 'pickleball', 'lifting'],
    careTier: 'pc-core',
    oneLiner:
      'Load-related pain from the common extensor tendon on the outside of the elbow that responds to progressive wrist-extensor loading.',
    overview:
      'Tennis elbow is pain from the common extensor tendon, especially near the extensor carpi radialis brevis origin on the outside of the elbow. Despite the name, it usually comes from repeated gripping, lifting, or wrist-extension loads — not only tennis.\n\nIt is best thought of as a load-related tendon problem rather than a permanently inflamed or "wearing-out" tendon. The tendon has simply been asked to do more than it can currently handle, and the goal of care is to gradually rebuild its tolerance for gripping and lifting.\n\nMost people improve over weeks to a few months with a patient, progressive loading program, although stubborn cases can take longer.',
    tissue:
      'The common extensor tendon on the outside of the elbow, especially near the extensor carpi radialis brevis (ECRB) origin.',
    video: {
      videoId: 'aOueY1l_X0U',
      title: 'Tennis Elbow Rehab (Education | Myths | Stretching & Strengthening Exercises)',
      channel: 'E3 Rehab',
      channelUrl: 'https://www.youtube.com/@E3Rehab',
      approved: false,
      note: 'Re-curated to an evidence-based rehab source; pending physician review.',
    },
    anatomyDiagram: {
      key: 'anatomy-elbow',
      altText:
        'Outer view of the elbow showing the common extensor tendon attaching at the lateral epicondyle, with the wrist-extensor muscles running down the forearm.',
      caption:
        'The common extensor tendon attaches on the outside of the elbow.',
    },
    causes: [
      'Repeated gripping, lifting, or wrist-extension loads',
      'Racket sports such as tennis and pickleball',
      'Manual work with sustained or forceful gripping',
      'Lifting or gripping spikes the tendon was not used to',
    ],
    riskFactors: [
      'Racket-sport participation (tennis, pickleball)',
      'Manual or repetitive gripping work',
      'A sudden increase in lifting or gripping load',
      'Reduced forearm/grip strength',
    ],
    symptoms: [
      'Outer-elbow pain',
      'Pain with gripping',
      'Pain when lifting a pan or similar object',
      'Pain with a handshake',
      'Pain with wrist extension',
    ],
    prognosis: {
      summary:
        'Tennis elbow is usually a load-related tendon problem, not a permanently inflamed tendon, and most people improve with progressive loading. Stubborn cases can take longer.',
      typicalTimeline:
        'Many improve over 6 to 12 weeks; stubborn cases may last months.',
      encouragement:
        '"Tennis elbow" is usually a load-related tendon problem, not a permanently damaged tendon — steady, progressive loading is what rebuilds its tolerance.',
    },
    redFlags: [
      {
        text: 'Significant trauma or deformity of the elbow.',
        urgency: 'emergency',
      },
      {
        text: 'A hot, red, swollen, or warm elbow with fever — this can signal a joint infection or an infected bursa and needs emergency care.',
        urgency: 'emergency',
      },
      {
        text: 'Neurologic deficit (numbness, weakness, or loss of function).',
        urgency: 'urgent',
      },
      {
        text: 'Suspected fracture.',
        urgency: 'urgent',
      },
      {
        text: 'Marked weakness.',
        urgency: 'see-clinician',
      },
      {
        text: 'Persistent pain despite appropriate rehab.',
        urgency: 'see-clinician',
      },
      {
        text: 'Concern for radial tunnel syndrome (deep forearm pain that can mimic tennis elbow but is nerve-related).',
        urgency: 'see-clinician',
      },
    ],
    selfCare: {
      dos: [
        'Do your loading exercises consistently — loading-based rehab is the first-line treatment, not an add-on.',
        'Use the pain-monitoring rule: mild discomfort up to about 3/10 during exercise is acceptable if it settles by the next morning.',
        'Modify rather than stop — reduce the most aggravating gripping or lifting tasks while you build tolerance.',
        'Build load gradually and keep working on forearm strength to prevent recurrence.',
      ],
      donts: [
        "Don't push through sharp or next-day-increasing pain.",
        "Don't suddenly spike your gripping or lifting volume — the classic trigger.",
        "Don't rely on a steroid injection to fix it; it may help short-term at best and may worsen recurrence.",
        "Don't expect rest alone to solve it — tendons need progressive load to rebuild capacity.",
      ],
    },
    clinicalGoal:
      'Pain-free gripping and lifting with a durable return to racket sports, lifting, and work tasks.',
    hep: {
      overview:
        'A staged wrist-extensor loading program. Each phase has a clear goal — progress when symptoms allow, not by the calendar. If a phase flares you, drop back a step. The same loading themes carry through; the load and demand increase.',
      phases: [
        {
          id: 'tennis-elbow-phase-1',
          order: 1,
          title: 'Phase A — Isometric Wrist Extension Hold',
          summary:
            'Calm the irritable tendon and start gentle, pain-relieving isometric loading.',
          goal: 'Reduce day-to-day pain and reintroduce the extensor tendon to load.',
          durationGuidance: 'Typically 1–2 weeks',
          entryCriteria: [
            'New or flared outer-elbow pain',
            'Pain limits gripping or lifting',
          ],
          exitCriteria: [
            'Can hold an isometric wrist extension with pain ≤3/10 that settles overnight',
            'Day-to-day gripping pain is easing',
          ],
          educationPoints: [
            'Isometric holds can reduce pain and start strengthening with little movement.',
            'Some discomfort during loading is OK if it settles by the next morning.',
            'Modify aggravating gripping tasks rather than stopping all activity.',
          ],
          exercises: [
            {
              id: 'tennis-isometric-wrist-extension',
              name: 'Isometric wrist extension hold',
              target: 'Common extensor tendon (wrist extensors)',
              purpose:
                'Builds early strength and can reduce pain without irritating the tendon.',
              dose: { sets: 5, holdSeconds: 45 },
              frequency: 'Daily',
              progression:
                'Increase the hold effort or add light resistance as pain settles.',
              regression:
                'Reduce the hold time or force, or support more of the forearm.',
              formCues: [
                'Forearm supported on a table',
                'Hold a steady, smooth effort — no bouncing',
                'Keep the shoulder relaxed',
                'Breathe normally through the hold',
              ],
              painRule:
                'Mild pain up to ~3/10 during the hold that settles by next morning.',
              equipment: ['A table or surface to support the forearm'],
              diagram: {
                key: 'wrist-extensor-stretch',
                altText:
                  'Forearm supported on a table with the wrist held in extension against gentle resistance.',
              },
            },
          ],
        },
        {
          id: 'tennis-elbow-phase-2',
          order: 2,
          title: 'Phase B — Eccentric/Concentric Wrist Extension and Gripping Control',
          summary:
            'Progress to slow eccentric and concentric wrist-extension loading plus gripping control.',
          goal: 'Rebuild extensor-tendon and grip capacity with controlled, heavier loading.',
          durationGuidance: 'Typically 3–6 weeks',
          entryCriteria: [
            'Comfortable with isometric wrist-extension holds',
            'Gripping pain improving',
          ],
          exitCriteria: [
            'Tolerating eccentric/concentric wrist extension and gripping control without next-day flare',
            'Pain ≤3/10 during loading that settles overnight',
          ],
          educationPoints: [
            'Slow, controlled tempo matters more than heavy weight at first.',
            'Train the lowering (eccentric) phase deliberately — it is a key driver of tendon adaptation.',
            'Add grip-control work as the tendon tolerates it.',
          ],
          exercises: [
            {
              id: 'tennis-wrist-extension-eccentric',
              name: 'Wrist extension eccentric',
              target: 'Extensor tendon',
              purpose:
                'Slow eccentric/concentric loading rebuilds the extensor tendon’s capacity for gripping and lifting.',
              dose: { sets: 3, reps: '10–15', tempo: 'slow 3–4 sec lower' },
              frequency: 'Daily / every other day',
              progression: 'Progress dumbbell weight slowly as control improves.',
              regression: 'Use a lighter load or drop back to isometric holds.',
              formCues: [
                'Forearm supported',
                'Lift with the good side if needed',
                'Slow 3–4 sec lower',
                'Keep shoulder relaxed',
              ],
              painRule:
                'Mild pain up to ~3/10 during the lift that settles by next morning.',
              equipment: ['Dumbbell', 'A table or surface to support the forearm'],
              diagram: {
                key: 'eccentric-wrist-extension',
                altText:
                  'Forearm supported on a table, lowering a dumbbell slowly into wrist flexion under control.',
              },
            },
            {
              id: 'tennis-gripping-control',
              name: 'Gripping control',
              target: 'Grip and forearm musculature',
              purpose:
                'Rebuilds tolerance to the gripping loads that aggravate the tendon in daily life and sport.',
              dose: { sets: 3, holdSeconds: 10, reps: '8–10' },
              frequency: 'Daily / every other day',
              progression: 'Increase the squeeze force, hold time, or reps as tolerated.',
              regression: 'Use a softer object or reduce the squeeze force.',
              formCues: [
                'Forearm supported',
                'Squeeze smoothly — no sudden grabs',
                'Keep the shoulder relaxed',
                'Keep pain mild',
              ],
              painRule:
                'Mild pain up to ~3/10 during the squeeze that settles by next morning.',
              equipment: ['A soft ball or grip trainer'],
              diagram: {
                key: 'grip-squeeze',
                altText:
                  'Hand squeezing a soft ball with the forearm supported on a table.',
              },
            },
          ],
        },
        {
          id: 'tennis-elbow-phase-3',
          order: 3,
          title: 'Phase C — Loaded Carrying and Sport/Work Drills',
          summary:
            'Add loaded carrying and sport- or work-specific drills to prepare for full return.',
          goal: 'Tolerate higher, task-specific gripping and lifting loads without flare.',
          durationGuidance: 'Typically 4–8 weeks',
          entryCriteria: [
            'Strong, controlled eccentric/concentric wrist extension',
            'No next-day flare from loaded gripping',
          ],
          exitCriteria: [
            'Can carry loads and perform sport/work drills without symptom flare',
            'Near-normal grip strength',
          ],
          educationPoints: [
            'Loaded carrying builds real-world gripping endurance.',
            'Rehearse the specific sport or work tasks you need to return to.',
            'Keep your strength work going as you add sport-specific demand.',
          ],
          exercises: [
            {
              id: 'tennis-loaded-carry',
              name: 'Loaded carrying',
              target: 'Grip and forearm endurance',
              purpose:
                'Builds gripping endurance under sustained load to bridge toward sport and work demands.',
              dose: { sets: 3, reps: '20–30 m carry', notes: 'or 30–45 sec per carry' },
              frequency: '2–3x/week',
              progression: 'Increase the load, distance, or carry time as tolerated.',
              regression: 'Use a lighter load or shorter distance.',
              formCues: [
                'Stand tall with the shoulder relaxed',
                'Grip firmly but without over-squeezing',
                'Walk smoothly and controlled',
              ],
              painRule:
                'Mild pain up to ~3/10 during the carry that settles by next morning.',
              equipment: ['Dumbbell, kettlebell, or loaded bag'],
              diagram: {
                key: 'grip-squeeze',
                altText: 'Person walking while carrying a weight in each hand.',
              },
            },
            {
              id: 'tennis-sport-work-drills',
              name: 'Sport / work drills',
              target: 'Task-specific gripping and lifting tolerance',
              purpose:
                'Rehearses the specific racket, lifting, or work tasks you are returning to, in graded steps.',
              dose: {
                notes: 'Graded exposure — start short and build volume across sessions',
              },
              frequency: '2–3x/week, building gradually',
              progression: 'Add volume, then intensity, then sport- or work-specific speed.',
              regression: 'Shorten the session or reduce the load/intensity.',
              formCues: [
                'Advance only when next-day symptoms are stable',
                'Warm up first',
                'Track how the elbow feels the morning after',
              ],
              painRule:
                'Mild pain up to ~3/10 during the drill that settles by next morning.',
              diagram: {
                key: 'anatomy-elbow',
                altText:
                  'Person performing a racket-sport or lifting drill specific to their activity.',
              },
            },
          ],
        },
      ],
    },
    evidence: {
      strength: 'moderate',
      bottomLine:
        'Loading-based rehab is first-line; steroid helps short-term at best and may worsen recurrence.',
      whatHelps: [
        'Progressive wrist-extensor loading (isometric, then eccentric/concentric)',
        'Exercise and manual-therapy packages',
        'Grip-control and loaded-carry training to rebuild gripping tolerance',
        'Gradual load buildup with continued forearm strengthening',
      ],
      whatsUncertain: [
        'Evidence for injections is mixed; corticosteroid may help short-term at best and may worsen recurrence.',
        'PRP evidence is mixed and not settled; benefit over placebo or other injections is uncertain.',
        'ESWT has only selected/mixed support; hyaluronic acid is not indicated for tennis elbow.',
        'The best specific loading recipe and the role of procedures after failed rehab are not fully settled.',
      ],
      citationIds: [
        'tennis-jospt-2022-lateral-elbow',
        'tennis-wallis-2024-cochrane',
        'tennis-xu-2024-meta',
      ],
    },
    procedures: [
      {
        procedureId: 'corticosteroid',
        relevance: 'commonly-discussed',
        evidenceNote: 'Commonly discussed, but usually not favored long-term.',
        citationIds: ['tennis-wallis-2024-cochrane'],
      },
      {
        procedureId: 'prp',
        relevance: 'selected-cases',
        evidenceNote:
          'Selected cases; evidence mixed and benefit uncertain.',
        citationIds: ['tennis-xu-2024-meta'],
      },
      {
        procedureId: 'hyaluronic-acid',
        relevance: 'not-indicated',
        evidenceNote: 'Not indicated for tennis elbow.',
      },
      {
        procedureId: 'shockwave',
        relevance: 'selected-cases',
        evidenceNote: 'ESWT: selected cases / mixed evidence.',
      },
      {
        procedureId: 'ultrasound-guided',
        relevance: 'selected-cases',
        evidenceNote: 'Ultrasound-guided injection: selected cases.',
      },
      {
        procedureId: 'tenotomy',
        relevance: 'selected-cases',
        evidenceNote: 'Percutaneous tenotomy: selected cases after failed rehab.',
      },
    ],
    returnToActivity: {
      criteria: [
        'No pain-limited gripping during daily tasks',
        'Near-normal grip strength',
        'Progressive practice volume tolerated without flare',
      ],
      timelineGuidance:
        'Many improve over 6–12 weeks; stubborn cases may take months. Highly individual.',
      reinjuryPrevention: [
        'Build load gradually rather than spiking gripping or lifting volume',
        'Keep working on forearm strength',
        'Respect early warning symptoms and adjust load',
      ],
    },
    faqs: [
      {
        q: 'Do I have to play tennis to get tennis elbow?',
        a: 'No. Despite the name, tennis elbow usually comes from repeated gripping, lifting, or wrist-extension loads — manual work, lifting, and other racket sports like pickleball are common triggers, not only tennis.',
        citationIds: ['tennis-jospt-2022-lateral-elbow'],
      },
      {
        q: 'How long until I feel better?',
        a: 'Many people improve over about 6 to 12 weeks with consistent loading-based rehab, though stubborn cases can last months.',
        citationIds: ['tennis-jospt-2022-lateral-elbow'],
      },
      {
        q: 'Should I get a steroid injection?',
        a: 'Loading-based rehab is the first-line treatment. A steroid injection may help in the short term at best and may actually worsen recurrence, so it is usually not favored long-term.',
        citationIds: ['tennis-wallis-2024-cochrane'],
      },
      {
        q: 'Is the tendon permanently damaged?',
        a: 'No. Tennis elbow is usually a load-related tendon problem, not a permanently inflamed or worn-out tendon. Progressive loading rebuilds its tolerance.',
        citationIds: ['tennis-jospt-2022-lateral-elbow'],
      },
    ],
    relatedConditionIds: ['golfers-elbow', 'cubital-tunnel-syndrome'],
    review: {
      status: 'physician-review-pending',
      contentVersion: '1.0.0',
    },
  },
}

export default moduleData
