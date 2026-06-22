import type { Citation, ConditionModule } from '../types'

/**
 * Frozen Shoulder (Adhesive Capsulitis). Transcribed faithfully from the
 * physician-authored deep-research draft (pp. 12-13). Citations are the
 * draft's own real sources. Ships physician-review-pending for Dr. Swisher's
 * sign-off.
 *
 * Physician review note (from the draft): there is no clearly modern,
 * high-quality, universally adopted frozen-shoulder CPG; this section leans on
 * the 2013 JOSPT CPG plus newer syntheses.
 */

const citations: Citation[] = [
  {
    id: 'frozen-jospt-2013-cpg',
    label: 'JOSPT Adhesive Capsulitis CPG (2013)',
    authorsOrOrg: 'Kelley MJ, et al.',
    source: 'Journal of Orthopaedic & Sports Physical Therapy',
    year: 2013,
    type: 'guideline',
    url: 'https://www.jospt.org/doi/10.2519/jospt.2013.0302',
    takeaway:
      'Clinical practice guideline for adhesive capsulitis: stretching/mobility and activity modification matched to the stage of the condition are central to management.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'frozen-challoumas-2020-nma',
    label: 'Challoumas 2020 (network meta-analysis)',
    authorsOrOrg: 'Challoumas D, et al.',
    source: 'JAMA Network Open',
    year: 2020,
    type: 'systematic-review',
    url: 'https://pubmed.ncbi.nlm.nih.gov/33326025/',
    takeaway:
      'Systematic review/network meta-analysis of frozen shoulder treatments: corticosteroid injection (often combined with exercise) gives the best short-term pain and function benefit, with effects converging over time.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'frozen-berner-2024-nma',
    label: 'Berner 2024 (network meta-analysis)',
    authorsOrOrg: 'Berner JE, et al.',
    source: 'Systematic review/network meta-analysis',
    year: 2024,
    type: 'systematic-review',
    url: 'https://pubmed.ncbi.nlm.nih.gov/38538951/',
    takeaway:
      'Newer network meta-analysis synthesizing frozen shoulder treatments, supporting exercise/mobilization and short-term corticosteroid benefit while many other treatments remain limited or mixed.',
    verified: true,
    lastChecked: '2026-06-21',
  },
]

const moduleData: ConditionModule = {
  citations,
  condition: {
    id: 'frozen-shoulder',
    slug: 'frozen-shoulder',
    name: 'Frozen Shoulder (Adhesive Capsulitis)',
    shortName: 'Frozen Shoulder',
    aka: [
      'adhesive capsulitis',
      'frozen shoulder syndrome',
      'painful stiff shoulder',
      'shoulder capsulitis',
    ],
    region: 'shoulder',
    sportTags: ['golf', 'general'],
    careTier: 'pc-core',
    oneLiner:
      'A painful, gradual loss of both active and passive shoulder motion that usually improves slowly with patient, staged mobility work.',
    overview:
      'Frozen shoulder, also called adhesive capsulitis, is a painful loss of both active and passive shoulder motion. The main problem is the glenohumeral joint capsule — the sleeve of tissue around the shoulder ball-and-socket — which becomes thickened, stiff, and painful.\n\nIt often comes on gradually and then seems to "lock down," so that even when someone else tries to move your arm for you, the shoulder will not go. The good news is that frozen shoulder usually improves; the recovery is just slow, frequently measured in months rather than weeks.',
    tissue:
      'The glenohumeral joint capsule, which becomes thickened, stiff, and painful.',
    video: {
      videoId: 'SV7exHYLVHU',
      title: 'BEST Exercises for Frozen Shoulder | Adhesive Capsulitis (Mobility, Stretches, Strength)',
      channel: 'E3 Rehab',
      channelUrl: 'https://www.youtube.com/@E3Rehab',
      approved: false,
      note: 'Re-curated to an evidence-based source (E3 Rehab / Rehab Science); pending physician review.',
    },
    anatomyDiagram: {
      key: 'anatomy-shoulder',
      altText:
        'Diagram of the shoulder ball-and-socket joint with the surrounding glenohumeral joint capsule highlighted.',
      caption:
        'In frozen shoulder, the capsule around the ball-and-socket joint becomes thickened and stiff.',
    },
    causes: [
      'Thickening and tightening of the glenohumeral joint capsule',
      'A period of shoulder immobility (for example after an injury or surgery)',
      'Often comes on gradually with no single clear trigger',
    ],
    riskFactors: [
      'Midlife age',
      'Diabetes',
      'Thyroid disease',
      'A period of shoulder immobility',
    ],
    symptoms: [
      'Deep shoulder pain',
      'Marked stiffness, especially with external rotation (turning the arm outward)',
      'Loss of both active and passive motion — the shoulder will not move even when someone else moves it',
    ],
    prognosis: {
      summary:
        'Frozen shoulder usually improves, but recovery is often slow — measured in months rather than weeks.',
      typicalTimeline: 'Commonly 6 to 18 months, occasionally longer.',
      encouragement:
        'This condition tends to resolve with time. Patient, consistent mobility work helps restore function as it improves.',
    },
    redFlags: [
      {
        text: 'Fever or a red, hot joint after an injection or surgery.',
        urgency: 'emergency',
      },
      {
        text: 'Recent trauma with suspected fracture or dislocation.',
        urgency: 'urgent',
      },
      {
        text: 'Progressive, severe stiffness.',
        urgency: 'see-clinician',
      },
      {
        text: 'Diabetes with poor control.',
        urgency: 'see-clinician',
      },
      {
        text: 'Diagnostic concern for arthritis or a tear.',
        urgency: 'see-clinician',
      },
    ],
    selfCare: {
      dos: [
        'Keep the shoulder moving with gentle, pain-calming mobility in short bouts rather than long, forceful sessions.',
        'Work into stiffness gently — aim for a mild stretch only, not a sharp or forceful one.',
        'Stay consistent: little and often tends to help more than occasional hard efforts.',
        'Be patient — improvement is usually slow, so steady daily mobility work over months is the plan.',
      ],
      donts: [
        'Don’t force the shoulder into painful range or push through sharp pain.',
        'Don’t allow long periods of immobility, especially after a future shoulder injury.',
        'Don’t expect a quick fix — aggressive stretching does not speed recovery and can flare symptoms.',
        'Don’t ignore poorly controlled diabetes or signs of infection (fever, a hot red joint) — these need medical attention.',
      ],
    },
    clinicalGoal:
      'Calm pain and restore functional shoulder motion as the capsule recovers over time',
    hep: {
      overview:
        'A staged mobility-and-strength program matched to how irritable the shoulder is. Each phase has a clear goal — progress when you meet it, not by the calendar. Keep movements to a mild stretch only; forcing range does not speed recovery. If a phase flares you, drop back a step.',
      phases: [
        {
          id: 'frozen-shoulder-phase-1',
          order: 1,
          title: 'Phase A — Pain-Calming Mobility',
          summary:
            'Gentle, pain-calming mobility in short bouts to keep the shoulder moving without flaring it.',
          goal: 'Calm pain and maintain the motion you have with gentle, frequent movement.',
          durationGuidance: 'Typically the painful/irritable early stage; weeks',
          entryCriteria: [
            'Painful, stiff shoulder with loss of motion',
            'Movement is easily aggravated',
          ],
          exitCriteria: [
            'Pain is more settled and predictable',
            'Gentle range work is tolerated without lingering flare',
          ],
          educationPoints: [
            'Short, frequent bouts of gentle motion beat long, forceful sessions.',
            'A mild stretch only — never force into sharp pain.',
            'This stage is about calming pain and keeping motion, not gaining big range yet.',
          ],
          exercises: [
            {
              id: 'frozen-table-slide-flexion',
              name: 'Table slide flexion',
              target: 'Glenohumeral joint capsule / shoulder flexion motion',
              purpose:
                'Uses a supported surface to ease the arm forward and overhead, restoring capsule motion with minimal effort.',
              dose: { sets: 3, reps: '10' },
              frequency: 'Daily',
              progression: 'Progress range (slide farther forward) as tolerated.',
              regression: 'Use a shorter range.',
              formCues: [
                'Slide, don’t force',
                'Shoulders relaxed',
                'Gentle exhale as you reach',
                'Stop before sharp pain',
              ],
              painRule: 'Mild stretch only.',
              equipment: ['A table or smooth surface', 'A towel or cloth to slide on'],
              diagram: {
                key: 'anatomy-shoulder',
                altText:
                  'Person seated at a table sliding the affected arm forward along the surface to ease the shoulder into flexion.',
              },
            },
            {
              id: 'frozen-external-rotation-stick',
              name: 'External rotation with stick',
              target: 'Glenohumeral joint capsule / shoulder external rotation',
              purpose:
                'Uses a stick from the other hand to gently guide the arm outward, addressing the external-rotation stiffness typical of frozen shoulder.',
              dose: { sets: 3, reps: '10' },
              frequency: 'Daily',
              progression: 'Progress to holding 5 seconds at end range.',
              regression: 'Use a smaller arc.',
              formCues: [
                'Elbow by side',
                'Move slowly',
                'Don’t twist the trunk',
                'Ease out',
              ],
              painRule: 'Mild stretch only.',
              equipment: ['A stick, cane, or umbrella'],
              diagram: {
                key: 'external-rotation-band',
                altText:
                  'Person keeping the elbow at the side and using a stick held in the other hand to gently rotate the affected arm outward.',
              },
            },
          ],
        },
        {
          id: 'frozen-shoulder-phase-2',
          order: 2,
          title: 'Phase B — Maintain Motion & Build Strength',
          summary:
            'Maintain the motion gained and add rotator-cuff and scapular strength.',
          goal: 'Hold onto range while rebuilding cuff and shoulder-blade strength.',
          durationGuidance: 'Typically several weeks once pain is more settled',
          entryCriteria: [
            'Pain is more settled and predictable',
            'Gentle mobility is tolerated without lingering flare',
          ],
          exitCriteria: [
            'Cuff isometrics are comfortable',
            'Scapular strength work is tolerated without flare',
          ],
          educationPoints: [
            'Strength helps the shoulder control the motion you are regaining.',
            'Isometrics (holds) build strength with little movement, which is gentle on an irritable shoulder.',
            'Keep your mobility work going alongside the strength work.',
          ],
          exercises: [
            {
              id: 'frozen-iso-internal-external-rotation',
              name: 'Isometric internal/external rotation',
              target: 'Rotator cuff (internal and external rotators)',
              purpose:
                'Builds cuff strength with static holds that load the muscles without moving the irritable joint through range.',
              dose: { sets: 5, holdSeconds: 20 },
              frequency: 'Daily',
              progression:
                'Increase the effort of the push, then progress toward light banded rotation through range.',
              regression: 'Reduce the effort of the push or shorten the hold.',
              formCues: [
                'Elbow tucked at your side',
                'Press gently into a fixed surface — the arm does not move',
                'Build effort smoothly and breathe through the hold',
              ],
              painRule: 'Mild discomfort only; back off if pain is sharp.',
              equipment: ['A wall or doorframe to press against'],
              diagram: {
                key: 'cuff-isometric',
                altText:
                  'Person with the elbow at the side pressing the forearm against a fixed surface to perform isometric shoulder rotation.',
              },
            },
            {
              id: 'frozen-scapular-retraction-row',
              name: 'Scapular retraction row',
              target: 'Scapular stabilizers (mid-trapezius and rhomboids)',
              purpose:
                'Strengthens the shoulder-blade muscles that support good shoulder mechanics as motion returns.',
              dose: { sets: 3, reps: '10–12' },
              frequency: 'Daily or every other day',
              progression:
                'Add resistance-band tension or progress to a light cable/dumbbell row.',
              regression: 'Reduce band tension or do the squeeze without resistance.',
              formCues: [
                'Squeeze the shoulder blades down and back',
                'Keep the neck and shoulders relaxed',
                'Lead with the elbows, not the hands',
              ],
              painRule: 'Mild discomfort only.',
              equipment: ['A resistance band'],
              diagram: {
                key: 'scapular-row',
                altText:
                  'Person pulling a resistance band toward the body while squeezing the shoulder blades together.',
              },
            },
          ],
        },
        {
          id: 'frozen-shoulder-phase-3',
          order: 3,
          title: 'Phase C — Restore Function',
          summary:
            'Restore functional motion and load with larger movements and light carrying/pressing in a pain-free arc.',
          goal: 'Return to everyday and sport-related shoulder use without flare.',
          durationGuidance:
            'Typically the recovering ("thawing") stage; weeks to months',
          entryCriteria: [
            'Cuff isometrics and scapular strength are comfortable',
            'Range is improving',
          ],
          exitCriteria: [
            'Comfortable with functional reaching and light loading',
            'Confident returning to daily and recreational shoulder use',
          ],
          educationPoints: [
            'Work within a pain-free arc — comfortable range, not forced range.',
            'Functional loading (carries and presses) rebuilds real-world capacity.',
            'Keep going even as you feel better — recovery is gradual.',
          ],
          exercises: [
            {
              id: 'frozen-wall-slide',
              name: 'Wall slide',
              target: 'Shoulder flexion / overhead reaching motion',
              purpose:
                'Uses the wall to support and guide the arm overhead, restoring functional flexion range.',
              dose: { sets: 3, reps: '8–10' },
              frequency: 'Daily',
              progression: 'Slide higher up the wall as range improves; reduce hand support.',
              regression: 'Slide a shorter distance or use both hands.',
              formCues: [
                'Slide the hand(s) smoothly up the wall',
                'Keep the shoulders relaxed and down',
                'Reach within a comfortable arc',
              ],
              painRule: 'Stay in a comfortable, pain-free arc.',
              equipment: ['A wall', 'Optional towel to reduce friction'],
              diagram: {
                key: 'anatomy-shoulder',
                altText:
                  'Person facing a wall sliding the hands upward to guide the shoulder into overhead reach.',
              },
            },
            {
              id: 'frozen-loaded-carry-supported-press',
              name: 'Loaded carry or supported press in pain-free arc',
              target: 'Shoulder and scapular strength / functional loading',
              purpose:
                'Rebuilds load tolerance for carrying and pressing tasks within a comfortable range.',
              dose: { sets: 3, reps: '6–8' },
              frequency: '2–3x/week',
              progression: 'Add load gradually as comfort and range allow.',
              regression: 'Reduce the load or the range of the press.',
              formCues: [
                'Stay within a pain-free arc',
                'Keep the shoulder blade set',
                'Move under control — no forcing the top of the range',
              ],
              painRule: 'Work in a pain-free arc only.',
              equipment: ['A light dumbbell, kettlebell, or household weight'],
              diagram: {
                key: 'scapular-retraction',
                altText:
                  'Person holding a light weight and pressing or carrying it within a comfortable shoulder range.',
              },
            },
          ],
        },
      ],
    },
    evidence: {
      strength: 'moderate',
      bottomLine:
        'Frozen shoulder usually improves, but often slowly; a steroid injection may help short-term pain, while mobility work helps restore function over time.',
      whatHelps: [
        'Exercise and mobilization to maintain and restore motion',
        'Corticosteroid injection for short-term pain relief, especially early',
        'Patience and consistency — recovery is gradual but generally favorable',
      ],
      whatsUncertain: [
        'Evidence is limited or mixed across many treatments beyond exercise/mobilization and short-term steroid.',
        'There is no clearly modern, high-quality, universally adopted frozen-shoulder clinical practice guideline; this content leans on the 2013 JOSPT CPG plus newer syntheses.',
        'The best timing and combination of mobility work, injection, and other options is not firmly settled.',
      ],
      citationIds: [
        'frozen-jospt-2013-cpg',
        'frozen-challoumas-2020-nma',
        'frozen-berner-2024-nma',
      ],
    },
    procedures: [
      {
        procedureId: 'corticosteroid',
        relevance: 'commonly-discussed',
        evidenceNote:
          'Commonly discussed, useful especially early for short-term pain and ROM improvement.',
        citationIds: ['frozen-challoumas-2020-nma'],
      },
      {
        procedureId: 'prp',
        relevance: 'rarely',
        evidenceNote: 'Rarely used for frozen shoulder.',
      },
      {
        procedureId: 'hyaluronic-acid',
        relevance: 'rarely',
        evidenceNote:
          'Not a routine option for frozen shoulder (hydrodilatation — a different procedure — is the selected-case option).',
      },
      {
        procedureId: 'shockwave',
        relevance: 'rarely',
        evidenceNote: 'ESWT (extracorporeal shockwave therapy) is rarely used for frozen shoulder.',
      },
      {
        procedureId: 'ultrasound-guided',
        relevance: 'selected-cases',
        evidenceNote: 'Selected cases (for example, to guide an injection accurately).',
      },
      {
        procedureId: 'tenotomy',
        relevance: 'not-indicated',
        evidenceNote: 'Percutaneous tenotomy is not indicated for frozen shoulder.',
      },
    ],
    returnToActivity: {
      criteria: [
        'Shoulder motion is improving toward functional range',
        'Everyday and sport-related shoulder use is comfortable',
      ],
      timelineGuidance:
        'Return as motion and function improve. Because frozen shoulder resolves slowly (commonly 6–18 months), return is gradual and individual.',
      reinjuryPrevention: [
        'Avoid long immobilization after any future shoulder injury',
        'Keep up gentle mobility and shoulder strength habits',
      ],
    },
    faqs: [
      {
        q: 'Why is it so stiff?',
        a: 'The joint capsule around the shoulder becomes thickened, tight, and inflamed, which limits motion in every direction — even when someone else tries to move your arm for you.',
        citationIds: ['frozen-jospt-2013-cpg'],
      },
      {
        q: 'Is this a tear?',
        a: 'No. Frozen shoulder is stiffness from a tight, inflamed joint capsule, not a torn tendon or muscle. If there is diagnostic concern for a tear, your clinician can sort that out.',
      },
      {
        q: 'Will it go away?',
        a: 'Often yes, but slowly. Most frozen shoulders improve over time — commonly 6 to 18 months — with gentle mobility work helping restore function as the capsule recovers.',
        citationIds: ['frozen-challoumas-2020-nma'],
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
