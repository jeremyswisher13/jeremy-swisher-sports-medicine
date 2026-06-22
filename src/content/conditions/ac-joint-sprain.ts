import type { Citation, ConditionModule } from '../types'

/**
 * AC Joint Sprain — transcribed faithfully from the physician-authored
 * deep-research PDF (Evidence-Based Sports Medicine Library Draft, pp. 13–14).
 * Citations are the PDF's own listed sources with their exact URLs.
 * Ships physician-review-pending for Dr. Swisher's sign-off.
 */

const citations: Citation[] = [
  {
    id: 'ac-albishi-2024-review',
    label: 'Albishi 2024 (review)',
    authorsOrOrg: 'Albishi W, et al.',
    source: 'Review',
    year: 2024,
    type: 'narrative-review',
    url: 'https://pubmed.ncbi.nlm.nih.gov/38404928/',
    takeaway:
      'Reviews evaluation and management of acromioclavicular joint injuries; most low-grade sprains are managed nonoperatively.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'ac-adra-2024-meta',
    label: 'Adra 2024 (systematic review/meta-analysis)',
    authorsOrOrg: 'Adra M, et al.',
    source: 'Systematic review/meta-analysis',
    year: 2024,
    type: 'meta-analysis',
    url: 'https://pubmed.ncbi.nlm.nih.gov/39898132/',
    takeaway:
      'Pooled evidence on AC joint injury treatment; higher-grade injuries remain more individualized.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'ac-welch-2024-review',
    label: 'Welch 2024 (systematic review)',
    authorsOrOrg: 'Welch M, et al.',
    source: 'Systematic review',
    year: 2024,
    type: 'systematic-review',
    url: 'https://pubmed.ncbi.nlm.nih.gov/38655415/',
    takeaway:
      'Systematic review supporting nonoperative management for most lower-grade AC joint injuries.',
    verified: true,
    lastChecked: '2026-06-21',
  },
]

const moduleData: ConditionModule = {
  citations,
  condition: {
    id: 'ac-joint-sprain',
    slug: 'ac-joint-sprain',
    name: 'AC Joint Sprain',
    shortName: 'AC Sprain',
    aka: [
      'acromioclavicular joint sprain',
      'AC joint separation',
      'shoulder separation',
      'separated shoulder',
      'AC separation',
    ],
    region: 'shoulder',
    sportTags: ['cycling', 'lifting', 'basketball'],
    careTier: 'pc-referral-trigger',
    oneLiner:
      'An injury to the ligaments at the top of the shoulder, usually after landing on the point of the shoulder; mild sprains often heal well without surgery.',
    overview:
      'An AC joint sprain is an injury to the acromioclavicular joint ligaments at the top of the shoulder and, in more severe cases, to the coracoclavicular ligaments below. It usually happens after landing on the point of the shoulder — a common mechanism in a cycling crash, a fall during basketball, or a heavy fall.\n\nMild sprains are common and often heal well without surgery. In higher-grade injuries you may notice a visible bump where the collarbone sits up, and recovery is longer and more individualized.\n\nThe goal of care is to settle the pain, protect the joint while the ligaments heal, and gradually rebuild shoulder strength and motion so you can return to the activities you care about.',
    tissue:
      'The acromioclavicular (AC) joint ligaments at the top of the shoulder and, in more severe cases, the coracoclavicular ligaments below.',
    video: {
      videoId: 'eoSOXbDV4NE',
      title: 'Acromioclavicular (AC) Joint Sprain | Separated Shoulder Rehab (Education & Exercises)',
      channel: 'E3 Rehab',
      channelUrl: 'https://www.youtube.com/@E3Rehab',
      approved: false,
      note: 'Re-curated to an evidence-based source (E3 Rehab / Rehab Science); pending physician review.',
    },
    anatomyDiagram: {
      key: 'anatomy-shoulder',
      altText:
        'Front view of the shoulder showing the collarbone meeting the acromion at the AC joint on top, with the coracoclavicular ligaments anchoring the collarbone below.',
      caption: 'The AC joint sits at the top of the shoulder where the collarbone meets the acromion.',
    },
    causes: [
      'A direct fall or landing on the point of the shoulder (e.g., a cycling crash)',
      'Contact or a fall during sports such as basketball',
      'A heavy fall onto the shoulder',
    ],
    riskFactors: [
      'Contact and collision sports',
      'Cycling and other activities with crash or fall risk',
      'A prior shoulder injury on the same side',
    ],
    symptoms: [
      'Pain on top of the shoulder',
      'A visible bump over the joint in higher-grade injuries',
      'Pain with cross-body reaching',
      'Pain when pushing up from a chair',
    ],
    prognosis: {
      summary:
        'Most grade I–II injuries improve well without surgery. Higher-grade injuries take longer and are more individualized, with more controversy about the best approach.',
      typicalTimeline:
        'Many grade I–II injuries improve over 2 to 8 weeks. Higher-grade injuries take longer.',
      encouragement:
        'Mild AC sprains are common and usually heal well. Settling the pain and gradually rebuilding strength is what gets most people back to their activities.',
    },
    redFlags: [
      {
        text: 'Major trauma with deformity and neurovascular symptoms (numbness, weakness, or loss of circulation in the arm).',
        urgency: 'emergency',
      },
      {
        text: 'Concern for a high-grade separation.',
        urgency: 'urgent',
      },
      {
        text: 'Concern for a clavicle (collarbone) fracture.',
        urgency: 'urgent',
      },
      {
        text: 'Persistent pain, a feeling of instability, or questions about returning to sport.',
        urgency: 'see-clinician',
      },
    ],
    selfCare: {
      dos: [
        'Use a sling only as needed briefly for comfort in the early days, rather than long immobilization.',
        'Keep the shoulder gently moving with pendulum swings within comfort.',
        'Build shoulder strength as pain allows — this is how you protect the joint and return safely.',
        'Use the pain-monitoring rule: discomfort up to about 3/10 during exercise is acceptable if it settles by the next morning.',
      ],
      donts: [
        'Don’t immobilize the shoulder for a long time — avoid prolonged immobilization, especially after future injuries.',
        'Don’t rush back to pushing, overhead work, or contact drills before they are tolerated.',
        'Don’t push through sharp or next-day-worsening pain.',
        'Don’t ignore a visible deformity or new numbness/weakness in the arm — get it checked.',
      ],
    },
    clinicalGoal:
      'Settle pain, protect the healing AC joint, and rebuild shoulder strength for a confident return to pushing, overhead work, and sport',
    hep: {
      overview:
        'A staged shoulder program that starts with gentle motion, adds rotator cuff and scapular control, and progresses to band-resisted strengthening. Advance by meeting each phase’s goals rather than by the calendar. If a phase flares you, drop back a step. Pain rule: default — mild pain up to about 3/10 that settles by the next morning is acceptable.',
      phases: [
        {
          id: 'ac-joint-sprain-phase-1',
          order: 1,
          title: 'Phase A — Protect & Gentle Motion',
          summary:
            'Settle pain, use a sling only briefly as needed, and begin gentle pendulum motion and scapular setting.',
          goal: 'Calm the painful joint while keeping the shoulder gently moving.',
          durationGuidance: 'Typically the first 1–2 weeks',
          entryCriteria: [
            'Recent AC joint sprain',
            'Pain on top of the shoulder limiting shoulder use',
          ],
          exitCriteria: [
            'Pain is settling and the sling is no longer needed',
            'Can do gentle pendulum and scapular setting comfortably',
          ],
          educationPoints: [
            'Use a sling only as needed briefly — avoid long immobilization.',
            'Gentle movement early helps the shoulder recover.',
            'Some discomfort during gentle motion is OK if it settles by the next morning.',
          ],
          exercises: [
            {
              id: 'ac-pendulum',
              name: 'Pendulum',
              target: 'Shoulder joint (gentle, gravity-assisted motion)',
              purpose:
                'Reintroduces gentle, low-load motion to the shoulder without actively loading the painful joint.',
              dose: { sets: 2, reps: '10 each direction', tempo: 'slow' },
              frequency: 'Daily',
              progression:
                'Increase the size of the circles as comfort improves, then progress to active-assisted motion.',
              regression: 'Make the circles smaller and rest the trunk on a table for support.',
              formCues: [
                'Lean forward and let the arm hang relaxed',
                'Let the arm swing in small circles using body sway, not shoulder effort',
                'Keep the shoulder muscles relaxed',
              ],
              painRule:
                'Pain rule: default — mild pain up to about 3/10 that settles by the next morning.',
              diagram: {
                key: 'pendulum',
                altText: 'Person bent forward letting the arm hang and swing in gentle circles.',
              },
            },
            {
              id: 'ac-scapular-setting',
              name: 'Scapular setting',
              aka: ['scapular retraction', 'shoulder-blade setting'],
              target: 'Scapular stabilizers (lower/middle trapezius, rhomboids)',
              purpose:
                'Restores gentle control of the shoulder blade to support the joint as it heals.',
              dose: { sets: 3, reps: '10', holdSeconds: 5 },
              frequency: 'Daily',
              progression: 'Hold longer or add a light band as comfort allows.',
              regression: 'Reduce the hold time and the effort of the squeeze.',
              formCues: [
                'Gently draw the shoulder blades down and back',
                'Keep the movement small and pain-free',
                'Don’t shrug — keep the shoulders down',
              ],
              painRule:
                'Pain rule: default — mild pain up to about 3/10 that settles by the next morning.',
              diagram: {
                key: 'scapular-retraction',
                altText: 'Person gently squeezing the shoulder blades down and back.',
              },
            },
          ],
        },
        {
          id: 'ac-joint-sprain-phase-2',
          order: 2,
          title: 'Phase B — Active-Assisted Motion & Isometrics',
          summary:
            'Progress to active-assisted flexion, isometric rotator cuff work, and gentle rows.',
          goal: 'Restore comfortable shoulder motion and begin gentle strengthening.',
          durationGuidance: 'Typically 2–4 weeks',
          entryCriteria: [
            'Pain settling from Phase A',
            'Comfortable with pendulum and scapular setting',
          ],
          exitCriteria: [
            'Comfortable, near-full shoulder motion',
            'Isometric rotator cuff and gentle rows tolerated without flare',
          ],
          educationPoints: [
            'Active-assisted motion uses the other arm or a stick to help raise the arm.',
            'Isometrics build cuff strength with minimal joint movement.',
            'Progress as pain allows — keep within the pain-monitoring rule.',
          ],
          exercises: [
            {
              id: 'ac-active-assisted-flexion',
              name: 'Active-assisted flexion',
              target: 'Shoulder flexion range of motion',
              purpose:
                'Rebuilds forward shoulder motion using the other arm or a stick for assistance.',
              dose: { sets: 3, reps: '10', tempo: 'slow and controlled' },
              frequency: 'Daily',
              progression: 'Reduce the assistance until the arm raises on its own.',
              regression: 'Give more assistance with the other arm and use a smaller range.',
              formCues: [
                'Use the good arm or a stick to help lift the sore arm forward',
                'Move only into a comfortable range',
                'Lower slowly under control',
              ],
              painRule:
                'Pain rule: default — mild pain up to about 3/10 that settles by the next morning.',
              equipment: ['A light stick or cane (optional)'],
              diagram: {
                key: 'anatomy-shoulder',
                altText:
                  'Person using the opposite arm to help raise the sore arm forward and overhead.',
              },
            },
            {
              id: 'ac-isometric-rotator-cuff',
              name: 'Isometric rotator cuff',
              aka: ['cuff isometrics'],
              target: 'Rotator cuff',
              purpose:
                'Builds early rotator cuff strength with minimal joint movement, which is gentle on the healing AC joint.',
              dose: { sets: 3, reps: '5', holdSeconds: 10 },
              frequency: 'Daily',
              progression: 'Increase the effort of the push, then progress to band rotations.',
              regression: 'Reduce the effort and the hold time.',
              formCues: [
                'Keep the elbow bent and tucked near your side',
                'Press gently into a wall or your other hand without moving the arm',
                'Build effort smoothly, then ease off',
              ],
              painRule:
                'Pain rule: default — mild pain up to about 3/10 that settles by the next morning.',
              diagram: {
                key: 'cuff-isometric',
                altText: 'Person pressing the forearm into a wall with the elbow tucked at the side.',
              },
            },
            {
              id: 'ac-row',
              name: 'Row',
              aka: ['scapular row'],
              target: 'Scapular stabilizers and upper back',
              purpose:
                'Begins gentle pulling strength to support the shoulder blade and joint.',
              dose: { sets: 3, reps: '10', tempo: 'controlled' },
              frequency: '3–4 days/week',
              progression: 'Increase band resistance or range as comfort improves.',
              regression: 'Use a lighter band and a smaller range.',
              formCues: [
                'Keep the elbows near your sides',
                'Pause as you squeeze the shoulder blades back',
                'Keep the shoulders down — no shrug',
              ],
              painRule:
                'Pain rule: default — mild pain up to about 3/10 that settles by the next morning.',
              equipment: ['Resistance band'],
              diagram: {
                key: 'scapular-row',
                altText: 'Person pulling a band toward the body with elbows near the sides.',
              },
            },
          ],
        },
        {
          id: 'ac-joint-sprain-phase-3',
          order: 3,
          title: 'Phase C — Strengthen & Return-Ready',
          summary:
            'Build strength with band rows, scaption, and push-up plus to the wall to prepare for return.',
          goal: 'Rebuild full shoulder strength for pushing, overhead work, and sport.',
          durationGuidance: 'Typically 3–6 weeks, then ongoing',
          entryCriteria: [
            'Comfortable, near-full shoulder motion',
            'Tolerating Phase B strengthening without flare',
          ],
          exitCriteria: [
            'Tolerating cross-body adduction, pushing, and overhead work',
            'Confident with sport-specific and contact drills',
          ],
          educationPoints: [
            'Progress band resistance as you get stronger; regress to a lighter band if irritable.',
            'Push-up plus to the wall builds the serratus and scapular control safely.',
            'Keep the cues in mind: elbows near sides, shoulders down, pause back, no shrug.',
          ],
          exercises: [
            {
              id: 'ac-band-row',
              name: 'Band row',
              target: 'Scapular stabilizers',
              purpose:
                'Strengthens the scapular stabilizers to support and protect the AC joint.',
              dose: { sets: 3, reps: '10–15', tempo: 'controlled' },
              frequency: '3–4 days/week',
              progression: 'Progress band resistance.',
              regression: 'Regress to a lighter band.',
              formCues: [
                'Elbows near sides',
                'Shoulders down',
                'Pause back as you squeeze the shoulder blades',
                'No shrug',
              ],
              painRule:
                'pain rule: default (mild pain up to about 3/10 that settles by the next morning)',
              equipment: ['Resistance band'],
              diagram: {
                key: 'scapular-row',
                altText:
                  'Person performing a band row, pulling the elbows back with the shoulder blades squeezing.',
              },
            },
            {
              id: 'ac-scaption',
              name: 'Scaption',
              target: 'Rotator cuff and deltoid (scapular-plane elevation)',
              purpose:
                'Strengthens the shoulder through a joint-friendly plane to support overhead function.',
              dose: { sets: 3, reps: '10–12', tempo: 'slow up and down' },
              frequency: '3–4 days/week',
              progression: 'Add light dumbbells, then increase the load as tolerated.',
              regression: 'Reduce the range or the weight.',
              formCues: [
                'Raise the arms about 30° forward of straight-out-to-the-side (the scapular plane)',
                'Thumbs up, lifting only to shoulder height early on',
                'Keep the shoulders down — no shrug',
              ],
              painRule:
                'Pain rule: default — mild pain up to about 3/10 that settles by the next morning.',
              equipment: ['Light dumbbells (optional)'],
              diagram: {
                key: 'anatomy-shoulder',
                altText: 'Person raising both arms in the scapular plane with thumbs up.',
              },
            },
            {
              id: 'ac-pushup-plus-wall',
              name: 'Push-up plus to wall',
              aka: ['wall push-up plus'],
              target: 'Serratus anterior and scapular control',
              purpose:
                'Builds serratus and scapular control with low load against the wall before progressing.',
              dose: { sets: 3, reps: '10', tempo: 'controlled' },
              frequency: '3–4 days/week',
              progression: 'Progress toward push-ups on an incline, then the floor as tolerated.',
              regression: 'Stand closer to the wall to reduce the load.',
              formCues: [
                'Hands on the wall at shoulder height',
                'Push the upper back away at the end to spread the shoulder blades (the “plus”)',
                'Keep the body in a straight line and shoulders down',
              ],
              painRule:
                'Pain rule: default — mild pain up to about 3/10 that settles by the next morning.',
              cautions: ['Begin against the wall; avoid floor push-ups until tolerated.'],
              diagram: {
                key: 'plank',
                altText:
                  'Person performing a standing wall push-up, pushing the upper back away at the top.',
              },
            },
          ],
        },
      ],
    },
    evidence: {
      strength: 'limited',
      bottomLine:
        'Most low-grade AC sprains do well nonoperatively; higher-grade injuries remain more individualized.',
      whatHelps: [
        'Brief, as-needed sling use rather than long immobilization',
        'Early gentle motion (pendulum, scapular setting)',
        'Progressive rotator cuff and scapular strengthening (rows, scaption, push-up plus)',
        'A graded, cautious return to pushing, overhead work, and contact',
      ],
      whatsUncertain: [
        'The best approach for higher-grade injuries is more controversial and individualized.',
        'The return timeline depends heavily on the Rockwood grade and whether contact sport is the goal.',
        'When surgery is preferable to nonoperative care for severe separations is not settled.',
      ],
      citationIds: ['ac-albishi-2024-review', 'ac-adra-2024-meta', 'ac-welch-2024-review'],
    },
    procedures: [
      {
        procedureId: 'corticosteroid',
        relevance: 'selected-cases',
        evidenceNote: 'Selected cases for chronic AC pain, not acute routine care.',
      },
      {
        procedureId: 'prp',
        relevance: 'rarely',
        evidenceNote: 'PRP: rarely.',
      },
      {
        procedureId: 'hyaluronic-acid',
        relevance: 'rarely',
        evidenceNote: 'Hyaluronic acid: rarely.',
      },
      {
        procedureId: 'shockwave',
        relevance: 'not-indicated',
        evidenceNote: 'ESWT: not indicated.',
      },
      {
        procedureId: 'ultrasound-guided',
        relevance: 'selected-cases',
        evidenceNote: 'Ultrasound-guided injection: selected cases for chronic AC pain.',
      },
      {
        procedureId: 'tenotomy',
        relevance: 'not-indicated',
        evidenceNote: 'Percutaneous tenotomy: not indicated.',
      },
    ],
    returnToActivity: {
      criteria: [
        'Cross-body adduction is tolerated',
        'Pushing is tolerated',
        'Overhead work is tolerated',
        'Contact drills are tolerated',
      ],
      timelineGuidance:
        'Varies; the return timeline depends heavily on the Rockwood grade and whether contact sport is the goal. Many grade I–II injuries return over about 2 to 8 weeks.',
      reinjuryPrevention: [
        'Build and maintain shoulder strength',
        'Take a cautious, graded early return rather than rushing back',
        'Avoid long immobilization after any future shoulder injuries',
      ],
    },
    faqs: [
      {
        q: 'Why is it so stiff?',
        a: 'Pain and a period of guarding the shoulder are common after an AC sprain, and stiffness usually eases as you reintroduce gentle motion and strengthening. Avoiding long immobilization helps.',
      },
      {
        q: 'Is this a tear?',
        a: 'An AC sprain is an injury to the AC joint ligaments, and in more severe cases the coracoclavicular ligaments — so it can involve stretching or tearing. Mild sprains are common and often heal well without surgery; higher-grade injuries are more individualized.',
        citationIds: ['ac-albishi-2024-review'],
      },
      {
        q: 'Will it go away?',
        a: 'Often yes, but slowly. Many grade I–II injuries improve over about 2 to 8 weeks, while higher-grade injuries take longer.',
        citationIds: ['ac-welch-2024-review'],
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
