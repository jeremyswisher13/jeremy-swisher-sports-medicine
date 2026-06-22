import type { Citation, ConditionModule } from '../types'

/**
 * Femoroacetabular Impingement (FAI). Transcribed faithfully from the
 * physician-authored deep-research source. Citations are real and taken from
 * the source's own Citations list. Ships physician-review-pending for
 * Dr. Swisher's sign-off.
 */

const citations: Citation[] = [
  {
    id: 'femoroacetabular-aaos-orthoinfo',
    label: 'AAOS OrthoInfo — Femoroacetabular Impingement',
    authorsOrOrg: 'American Academy of Orthopaedic Surgeons (OrthoInfo)',
    source: 'AAOS OrthoInfo',
    year: 2024,
    type: 'guideline',
    url: 'https://orthoinfo.aaos.org/en/diseases--conditions/femoroacetabular-impingement/',
    takeaway:
      'Patient-facing overview of FAI: shape-related contact between the femoral head-neck junction and acetabular rim can irritate the labrum and cartilage and cause groin pain.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'femoroacetabular-palmer-2019-rct',
    label: 'Palmer 2019 — Multicenter RCT (BMJ)',
    authorsOrOrg: 'Palmer AJR, et al.',
    source: 'BMJ',
    year: 2019,
    type: 'rct',
    url: 'https://pubmed.ncbi.nlm.nih.gov/30733197/',
    takeaway:
      'Multicenter RCT comparing hip arthroscopy with physiotherapy for FAI in selected referred patients.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'femoroacetabular-griffin-2018-rct',
    label: 'Griffin 2018 — FASHIoN RCT (Lancet)',
    authorsOrOrg: 'Griffin DR, et al.',
    source: 'Lancet/BMJ-linked trial report',
    year: 2018,
    type: 'rct',
    url: 'https://pubmed.ncbi.nlm.nih.gov/29893223/',
    takeaway:
      'RCT showing arthroscopy can outperform short-term physiotherapy packages in selected referred FAI populations.',
    verified: true,
    lastChecked: '2026-06-21',
  },
]

const moduleData: ConditionModule = {
  citations,
  condition: {
    id: 'femoroacetabular-impingement',
    slug: 'femoroacetabular-impingement',
    name: 'Femoroacetabular Impingement (FAI)',
    shortName: 'FAI',
    aka: [
      'FAI',
      'hip impingement',
      'femoroacetabular impingement syndrome',
      'cam impingement',
      'pincer impingement',
      'mixed impingement',
    ],
    region: 'hip-pelvis',
    sportTags: ['soccer', 'lifting', 'general'],
    careTier: 'borderline-specialist',
    oneLiner:
      'Motion-related hip pain from shape-related contact between the femoral head-neck junction and the acetabular rim, often felt as groin pain with deep flexion, pivoting, or long sitting.',
    overview:
      'Femoroacetabular impingement (FAI) is a motion-related hip pain problem caused by shape-related contact between the femoral head-neck junction (the top of the thigh bone where the ball meets the neck) and the acetabular rim (the edge of the hip socket). When the hip is moved into certain positions, these bony areas can bump together, often irritating the labrum or cartilage inside the joint.\n\nPeople with FAI often feel groin pain with deep hip flexion, pivoting, or long periods of sitting. It is a problem of how the hip is shaped and how it is loaded — not necessarily a sign that the joint is wearing out. Importantly, many people without any pain also have these same cam or pincer bone shapes, so the shape alone does not equal a problem.\n\nMany people improve with activity modification and a focused exercise (physical therapy) program over a few weeks to a few months. A smaller number of carefully selected people who do not improve may be considered for keyhole hip surgery (arthroscopy).',
    tissue:
      'The hip joint, specifically the femoral head-neck junction and the acetabular rim, with the labrum and cartilage that can become irritated.',
    video: {
      videoId: 'ulHaddxEoyE',
      title: 'Femoroacetabular Impingement (FAI) | Hip & Groin Pain (Rehab | Education | Exercises)',
      channel: 'E3 Rehab',
      channelUrl: 'https://www.youtube.com/@E3Rehab',
      approved: false,
      note: 'Re-curated to an evidence-based source (E3 Rehab / Rehab Science); pending physician review.',
    },
    anatomyDiagram: {
      key: 'anatomy-hip',
      altText:
        'Front view of the hip joint showing the ball-shaped femoral head and head-neck junction meeting the cup-shaped acetabular socket and its rim.',
      caption:
        'In FAI, the femoral head-neck junction and the acetabular rim make contact during certain hip movements.',
    },
    causes: [
      'Cam morphology — extra bone at the femoral head-neck junction',
      'Pincer morphology — extra bone or over-coverage at the acetabular rim',
      'Mixed morphology — a combination of cam and pincer shapes',
      'Activity-related loading of the hip in deep flexion or pivoting positions',
    ],
    riskFactors: [
      'Cam, pincer, or mixed bone shape of the hip',
      'Sports with repeated deep hip flexion, cutting, or pivoting (e.g., soccer)',
      'Activities or training with heavy or deep squatting',
      'Prolonged sitting that loads the hip in flexion',
    ],
    symptoms: [
      'Groin pain, often with deep hip flexion, pivoting, or long sitting',
      'Pinching in the front of the hip with a deep squat',
      'Hip stiffness',
      'Catching in the hip in some patients',
    ],
    prognosis: {
      summary:
        'Some people improve with activity modification and focused physical therapy. Selected patients referred to specialty care may do better with arthroscopy than short physical-therapy packages in trials.',
      typicalTimeline:
        'Many people improve over roughly 6 to 12+ weeks with activity modification and focused physical therapy.',
      encouragement:
        'Having a cam or pincer hip shape does not automatically mean trouble — many people without pain have the same features. Most cases start with non-surgical care, and there is a clear plan if symptoms persist.',
    },
    redFlags: [
      {
        text: 'Inability to bear weight after trauma.',
        urgency: 'urgent',
      },
      {
        text: 'Locking of the hip.',
        urgency: 'see-clinician',
      },
      {
        text: 'Major loss of motion.',
        urgency: 'see-clinician',
      },
      {
        text: 'Persistent groin pain.',
        urgency: 'see-clinician',
      },
      {
        text: 'Suspected concurrent osteoarthritis or hip dysplasia.',
        urgency: 'see-clinician',
      },
    ],
    selfCare: {
      dos: [
        'Modify activity early — reduce the positions and loads that pinch the hip, rather than stopping everything.',
        'Build hip strength and trunk control with a focused program.',
        'Reintroduce squat patterns gradually, within a comfortable range.',
        'Use the pain-monitoring rule: mild discomfort up to about 3/10 during exercise is acceptable if it settles by the next morning.',
      ],
      donts: [
        'Don’t push into deep, painful hip flexion or compression early on.',
        'Don’t keep repeating deep pinching positions during early progression.',
        'Don’t assume the bone shape alone is the whole story — symptoms and function matter more than imaging.',
        'Don’t spike training load or jump straight back to cutting and pivoting before it is tolerated.',
      ],
    },
    clinicalGoal:
      'Restore pain-controlled deep hip flexion, hinging, and pivoting so you can return to squatting, sport, and prolonged sitting without groin pain.',
    hep: {
      overview:
        'A staged program that avoids deep painful flexion and compression early, then builds hip strength, trunk control, and gradual squat patterning. Move on by meeting each phase’s goals rather than by the calendar, and drop back a step if a phase flares you. Pain rule: mild discomfort up to about 3/10 during exercise is acceptable if it settles by the next morning.',
      phases: [
        {
          id: 'femoroacetabular-impingement-phase-1',
          order: 1,
          title: 'Calm & Protect',
          summary:
            'Avoid deep painful flexion and compression while keeping the hip moving comfortably.',
          goal: 'Settle irritable groin pain and reduce provocative deep-flexion loading.',
          durationGuidance: 'Typically 1–2 weeks',
          entryCriteria: [
            'New or flared FAI-type groin pain',
            'Pain with deep squat, pivoting, or prolonged sitting',
          ],
          exitCriteria: [
            'Groin pain easing with daily activity',
            'Can move the hip through a comfortable mid-range without sharp pinching',
          ],
          educationPoints: [
            'Avoid deep painful flexion and compression early — work within a comfortable range.',
            'The bone shape alone does not equal the problem; many pain-free people have the same shape.',
            'Relative rest means modifying provocative positions, not stopping all movement.',
          ],
          exercises: [
            {
              id: 'fai-comfortable-range-hip-mobility',
              name: 'Comfortable-range hip mobility',
              target: 'Hip joint mobility within a pain-free range',
              purpose:
                'Keeps the hip moving and reduces stiffness without forcing it into the pinching deep-flexion range.',
              dose: { sets: 2, reps: '10 each direction' },
              frequency: 'Daily',
              progression:
                'Gradually increase range as pinching settles; add gentle rotation.',
              regression: 'Reduce range and avoid any position that pinches.',
              formCues: [
                'Move slowly and stop short of any sharp pinch in the front of the hip',
                'Stay relaxed through the groin',
                'Keep movements smooth and controlled',
              ],
              painRule:
                'Mild discomfort up to ~3/10 is acceptable if it settles by the next morning; back off if it pinches.',
              diagram: {
                key: 'anatomy-hip',
                altText:
                  'Person moving the hip gently through a comfortable mid-range without forcing deep flexion.',
              },
            },
            {
              id: 'fai-glute-iso',
              name: 'Gluteal isometric squeeze',
              target: 'Gluteal muscles',
              purpose:
                'Starts gentle hip strengthening without joint compression or deep flexion.',
              dose: { sets: 5, holdSeconds: 10 },
              frequency: 'Daily',
              progression: 'Progress to glute bridges as symptoms allow.',
              regression: 'Reduce the squeeze intensity or hold time.',
              formCues: [
                'Squeeze the buttocks firmly without arching the low back',
                'Breathe normally through the hold',
                'Keep the front of the hip relaxed',
              ],
              painRule: 'Should be comfortable; stop if it provokes groin pinching.',
              diagram: {
                key: 'glute-bridge',
                altText: 'Person lying down squeezing the gluteal muscles.',
              },
            },
          ],
        },
        {
          id: 'femoroacetabular-impingement-phase-2',
          order: 2,
          title: 'Build Hip & Trunk Strength',
          summary:
            'Develop hip strength and trunk control to better support and control the joint.',
          goal: 'Rebuild hip and core strength to protect the hip and improve control.',
          durationGuidance: 'Typically 3–6 weeks',
          entryCriteria: [
            'Groin pain settling at rest and with daily activity',
            'Comfortable mid-range hip movement without sharp pinching',
          ],
          exitCriteria: [
            'Good hip and trunk control with no next-day flare',
            'Tolerating bridging and lateral hip work comfortably',
          ],
          educationPoints: [
            'Hip strength and trunk control are central to managing FAI.',
            'Train hip and core muscles in positions that don’t provoke pinching.',
            'Quality of control matters more than load early on.',
          ],
          exercises: [
            {
              id: 'fai-glute-bridge',
              name: 'Glute bridge',
              target: 'Gluteal muscles and posterior hip',
              purpose:
                'Builds hip extension strength without deep hip flexion or compression.',
              dose: { sets: 3, reps: '10–12', tempo: '2s up, 2s down' },
              frequency: 'Daily or every other day',
              progression:
                'Progress to single-leg or add load as tolerated; regress shorter hold if needed.',
              regression: 'Shorten the hold or use a smaller range.',
              formCues: [
                'Push through the heels',
                'Squeeze the glutes at the top — “push through heels”',
                'Keep ribs down — “ribs down”',
                'Avoid arching the low back',
              ],
              painRule:
                'Mild discomfort up to ~3/10 is acceptable if it settles by the next morning.',
              diagram: {
                key: 'glute-bridge',
                altText:
                  'Person lying on their back lifting the hips into a bridge.',
              },
            },
            {
              id: 'fai-side-lying-hip-abduction',
              name: 'Side-lying hip abduction',
              target: 'Gluteus medius and lateral hip',
              purpose:
                'Strengthens the lateral hip stabilizers to improve control without deep flexion.',
              dose: { sets: 3, reps: '12–15 each side', tempo: 'slow' },
              frequency: 'Every other day',
              progression: 'Add an ankle weight or resistance band.',
              regression: 'Reduce range or reps.',
              formCues: [
                'Keep the top leg in line with the body',
                'Lead with the heel, not the toe',
                'Avoid rolling the pelvis backward',
              ],
              painRule:
                'Mild discomfort up to ~3/10 that settles by next morning is acceptable.',
              equipment: ['Optional ankle weight or band'],
              diagram: {
                key: 'side-lying-hip-abduction',
                altText:
                  'Person lying on their side lifting the top leg toward the ceiling.',
              },
            },
            {
              id: 'fai-dead-bug',
              name: 'Trunk control (dead bug)',
              target: 'Core and trunk stabilizers',
              purpose:
                'Builds the trunk control that helps the hip work efficiently and reduces compensations.',
              dose: { sets: 3, reps: '8–10 each side' },
              frequency: 'Every other day',
              progression: 'Lower the opposite arm and leg together; slow the tempo.',
              regression: 'Move only one limb at a time.',
              formCues: [
                'Keep the low back gently flat against the floor — “ribs down”',
                'Move slowly and with control',
                'Breathe steadily throughout',
              ],
              diagram: {
                key: 'bird-dog',
                altText:
                  'Person lying on their back moving an opposite arm and leg for trunk control.',
              },
            },
          ],
        },
        {
          id: 'femoroacetabular-impingement-phase-3',
          order: 3,
          title: 'Gradual Squat Patterning',
          summary:
            'Reintroduce squatting and hinge loading with progressively greater range and load.',
          goal: 'Rebuild tolerance to squat and hinge patterns within a controlled range.',
          durationGuidance: 'Typically 4–8 weeks',
          entryCriteria: [
            'Good hip and trunk strength with no flare',
            'Comfortable with bridging and lateral hip work',
          ],
          exitCriteria: [
            'Can squat and hinge through a useful range without front-of-hip pinching',
            'Sitting and hinge loading tolerated without next-day flare',
          ],
          educationPoints: [
            'Reintroduce squat patterning gradually — depth and load build over time.',
            'Keep good trunk position throughout: “ribs down,” “knees hip-width.”',
            'Avoid repeated deep pinching positions as you progress.',
          ],
          exercises: [
            {
              id: 'fai-hip-hinge',
              name: 'Hip hinge',
              target: 'Posterior chain and hip movement pattern',
              purpose:
                'Grooves a hip-dominant movement pattern that loads the hip without deep painful flexion.',
              dose: { sets: 3, reps: '8–10', tempo: 'controlled' },
              frequency: '3x/week',
              progression: 'Add light load (dumbbell or kettlebell) as tolerated.',
              regression: 'Reduce range or use a wall/dowel for feedback.',
              formCues: [
                'Push the hips back, not down',
                'Keep ribs down and back flat — “ribs down”',
                'Stop short of any front-of-hip pinch',
              ],
              painRule:
                'Mild discomfort up to ~3/10 is acceptable if it settles by the next morning.',
              equipment: ['Optional dumbbell or kettlebell'],
              diagram: {
                key: 'hip-hinge',
                altText:
                  'Person hinging at the hips with a flat back, pushing the hips backward.',
              },
            },
            {
              id: 'fai-bridge-loaded',
              name: 'Bridge (progressed)',
              aka: ['Loaded glute bridge'],
              target: 'Gluteal muscles and posterior hip',
              purpose:
                'Continues hip extension strengthening, progressing to single-leg or added load. Specified in the source as the core bridge exercise.',
              dose: { sets: 3, reps: '8–12' },
              frequency: '3x/week',
              progression:
                'Progress single-leg or load; regress to a shorter hold if it flares.',
              regression: 'Return to a double-leg bridge or shorten the hold.',
              formCues: [
                'Keep ribs down — “ribs down”',
                'Drive through the heels — “push through heels”',
                'Knees stay hip-width — “knees hip-width”',
                'No pinch in the front of the hip — “no pinch in front of hip”',
              ],
              painRule: 'Pain rule: default — mild discomfort up to ~3/10 that settles by the next morning.',
              equipment: ['Optional weight for added load'],
              diagram: {
                key: 'glute-bridge',
                altText:
                  'Person performing a progressed glute bridge, single-leg or loaded.',
              },
            },
            {
              id: 'fai-controlled-squat',
              name: 'Controlled squat patterning',
              target: 'Hip and lower-limb squat tolerance',
              purpose:
                'Gradually rebuilds squat depth and load within a non-pinching range.',
              dose: { sets: 3, reps: '8–10', tempo: 'slow and controlled' },
              frequency: '3x/week',
              progression: 'Increase depth, then add load, as tolerated without pinching.',
              regression: 'Reduce depth to a box squat or partial range.',
              formCues: [
                'Knees track over the toes — “knees hip-width”',
                'Keep ribs down and trunk tall — “ribs down”',
                'Squat only as deep as stays free of front-of-hip pinch — “no pinch in front of hip”',
              ],
              painRule:
                'Mild discomfort up to ~3/10 is acceptable if it settles by the next morning; reduce depth if it pinches.',
              equipment: ['Optional box or bench for depth control'],
              diagram: {
                key: 'wall-sit',
                altText:
                  'Person performing a controlled squat with a tall trunk and hip-width stance.',
              },
            },
          ],
        },
        {
          id: 'femoroacetabular-impingement-phase-4',
          order: 4,
          title: 'Return to Sport & Pivoting',
          summary:
            'Reintroduce rotation, running, cutting, and deep-flexion sport tasks gradually.',
          goal: 'Tolerate deep flexion tasks, rotation, and running/cutting without flare.',
          durationGuidance: 'Varies; weeks to months depending on the sport',
          entryCriteria: [
            'Squatting and hinging tolerated through a useful range without pinching',
            'Good hip and trunk strength and control',
          ],
          exitCriteria: [
            'Deep flexion tasks, rotation, and running/cutting tolerated',
            'No next-day flare with sport-specific loading',
          ],
          educationPoints: [
            'Add rotation, running, and cutting gradually as each is tolerated.',
            'Avoid repeated deep pinching during early sport progression.',
            'Keep up hip and trunk strength work to protect the joint.',
          ],
          exercises: [
            {
              id: 'fai-banded-lateral-walk',
              name: 'Banded lateral walk',
              target: 'Gluteus medius and lateral hip control',
              purpose:
                'Builds the lateral hip strength and control needed for cutting and pivoting sports.',
              dose: { sets: 3, reps: '10 steps each direction' },
              frequency: '3x/week',
              progression: 'Increase band resistance or step distance.',
              regression: 'Use a lighter band or fewer steps.',
              formCues: [
                'Keep tension on the band throughout',
                'Stay in a slight squat with ribs down',
                'Knees track over the toes — “knees hip-width”',
              ],
              painRule:
                'Mild discomfort up to ~3/10 that settles by next morning is acceptable.',
              equipment: ['Resistance band'],
              diagram: {
                key: 'banded-lateral-walk',
                altText:
                  'Person side-stepping with a resistance band around the legs.',
              },
            },
            {
              id: 'fai-rotation-cutting-drills',
              name: 'Rotation and cutting drills',
              target: 'Hip rotation and change-of-direction tolerance',
              purpose:
                'Reintroduces rotation, pivoting, and running/cutting in graded, controlled steps for sport.',
              dose: { notes: 'Build from light pivots to controlled cutting drills over sessions' },
              frequency: '2–3x/week, progressing gradually',
              progression: 'Add speed, then sharper direction changes and sport-specific tasks.',
              regression: 'Slow the drill or reduce the angle of the turn.',
              formCues: [
                'Land softly and stay controlled',
                'Keep the trunk tall — “ribs down”',
                'Advance only when next-day symptoms stay stable',
              ],
              painRule:
                'Avoid repeated deep pinching; keep discomfort ≤3/10 that settles by next morning.',
              cautions: [
                'Only begin once strength, control, and symptoms allow.',
              ],
              diagram: {
                key: 'ankle-balance',
                altText:
                  'Person performing a controlled pivot and change-of-direction drill.',
              },
            },
          ],
        },
      ],
    },
    evidence: {
      strength: 'moderate',
      bottomLine:
        'Start with nonoperative management, but selected persistent cases can be surgical candidates.',
      whatHelps: [
        'Supervised exercise and education as initial care',
        'Activity modification — reducing deep, pinching hip positions early',
        'Hip strength and trunk control work',
        'Gradual squat patterning and graded return to sport',
        'Hip arthroscopy in selected referred patients who do not respond to nonoperative care',
      ],
      whatsUncertain: [
        'Imaging shape does not equal symptoms — many pain-free people have cam or pincer features, so morphology alone does not explain who develops pain.',
        'Which patients are best served by surgery versus continued nonoperative care is not fully settled, though RCT evidence shows arthroscopy can outperform short-term physical-therapy packages in selected referred populations.',
        'The optimal content and duration of the physical-therapy program is not standardized.',
      ],
      citationIds: [
        'femoroacetabular-aaos-orthoinfo',
        'femoroacetabular-palmer-2019-rct',
        'femoroacetabular-griffin-2018-rct',
      ],
    },
    procedures: [
      {
        procedureId: 'corticosteroid',
        relevance: 'selected-cases',
        evidenceNote: 'Selected cases, often diagnostic/temporary.',
      },
      {
        procedureId: 'prp',
        relevance: 'rarely',
        evidenceNote: 'Uncertain/rarely.',
      },
      {
        procedureId: 'hyaluronic-acid',
        relevance: 'rarely',
        evidenceNote: 'Rarely.',
      },
      {
        procedureId: 'shockwave',
        relevance: 'not-indicated',
        evidenceNote: 'ESWT: not routine.',
      },
      {
        procedureId: 'ultrasound-guided',
        relevance: 'selected-cases',
        evidenceNote: 'Selected cases.',
      },
      {
        procedureId: 'tenotomy',
        relevance: 'not-indicated',
        evidenceNote: 'Not indicated for classic intra-articular FAI.',
      },
    ],
    returnToActivity: {
      criteria: [
        'Deep flexion tasks are tolerated',
        'Rotation is tolerated',
        'Running and cutting are tolerated',
      ],
      timelineGuidance:
        'Highly individual — often a few weeks to a few months; avoid repeated deep pinching during early progression.',
      reinjuryPrevention: [
        'Avoid repeated deep pinching during early progression',
        'Maintain hip strength and trunk control',
        'Progress squat depth, load, and sport tasks gradually',
      ],
    },
    faqs: [
      {
        q: 'Does having a cam or pincer hip shape mean I will have pain?',
        a: 'No. Many people without any hip pain have the same cam or pincer bone shapes. The shape alone does not equal a problem — symptoms and function matter more.',
        citationIds: ['femoroacetabular-aaos-orthoinfo'],
      },
      {
        q: 'Do I need surgery for FAI?',
        a: 'Most people start with nonoperative management — activity modification and focused physical therapy. A smaller number of carefully selected people who do not improve may be considered for hip arthroscopy, which has outperformed short-term physical-therapy packages in selected referred patients in trials.',
        citationIds: [
          'femoroacetabular-palmer-2019-rct',
          'femoroacetabular-griffin-2018-rct',
        ],
      },
      {
        q: 'How long until I feel better?',
        a: 'Many people improve over roughly 6 to 12+ weeks with activity modification and focused physical therapy, though recovery is individual.',
        citationIds: ['femoroacetabular-aaos-orthoinfo'],
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
