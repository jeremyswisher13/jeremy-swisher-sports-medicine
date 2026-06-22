import type { Citation, ConditionModule } from '../types'

/**
 * MCL Sprain (Medial Knee Sprain). Transcribed faithfully from the
 * physician-authored deep-research PDF (pp. 36-37). Citations are the real
 * URLs listed in that section. Ships physician-review-pending for Dr.
 * Swisher's sign-off.
 */

const citations: Citation[] = [
  {
    id: 'mcl-vosoughi-2021-review',
    label: 'Vosoughi 2021 (MCL review)',
    authorsOrOrg: 'Vosoughi F, et al.',
    source: 'PMC (review article)',
    year: 2021,
    type: 'narrative-review',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8221433/',
    takeaway:
      'Most isolated MCL injuries heal well with nonoperative care and staged rehabilitation, without surgery.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'mcl-svantesson-2024-review',
    label: 'Svantesson 2024 (review)',
    authorsOrOrg: 'Svantesson J, et al.',
    source: 'PMC (review article)',
    year: 2024,
    type: 'narrative-review',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11202733/',
    takeaway:
      'Reviews grading and prognosis of medial knee injuries; recovery timelines vary by grade and associated injuries.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'mcl-hss-nonop-guideline',
    label: 'HSS Nonoperative MCL Rehab guideline',
    authorsOrOrg: 'HSS Rehabilitation',
    source: 'Hospital for Special Surgery (nonoperative guideline)',
    year: 2024,
    type: 'guideline',
    url: 'https://sivaorthosports.com/wp-content/uploads/2024/12/Nonop-MCL-Rehab.pdf',
    takeaway:
      'Nonoperative MCL rehabilitation guideline emphasizing early range of motion, quad activation, and staged loading.',
    verified: true,
    lastChecked: '2026-06-21',
  },
]

const moduleData: ConditionModule = {
  citations,
  condition: {
    id: 'mcl-sprain',
    slug: 'mcl-sprain',
    name: 'MCL Sprain (Medial Knee Sprain)',
    shortName: 'MCL Sprain',
    aka: [
      'medial collateral ligament sprain',
      'medial knee sprain',
      'MCL tear',
      'inner-knee ligament sprain',
    ],
    region: 'knee',
    sportTags: ['soccer', 'basketball', 'general'],
    careTier: 'pc-referral-trigger',
    oneLiner:
      'An injury to the ligament on the inside of the knee that, when isolated, usually heals well without surgery.',
    overview:
      'An MCL sprain is an injury to the medial collateral ligament on the inside of the knee. It often happens when the knee is forced inward, such as in football, soccer, or skiing.\n\nMany isolated MCL injuries heal well without surgery. Most are managed with early rehab and a staged return to loading, so the focus is on protecting the ligament while keeping the knee moving and rebuilding strength.',
    tissue:
      'The medial collateral ligament (MCL) on the inside of the knee.',
    video: {
      videoId: 'wGhUmdYqy9Y',
      title: 'MCL Injury Rehab & Exercises (Medial Collateral Ligament Sprain)',
      channel: 'E3 Rehab',
      channelUrl: 'https://www.youtube.com/c/E3Rehab',
      approved: false,
      note: 'Re-curated to an evidence-based rehab source; pending physician review.',
    },
    anatomyDiagram: {
      key: 'anatomy-knee',
      altText:
        'Front view of the knee highlighting the medial collateral ligament on the inner side, connecting the thigh bone to the shin bone.',
      caption: 'The MCL runs along the inside of the knee.',
    },
    causes: [
      'A valgus stress injury — the knee being forced inward',
      'A direct contact or blow to the outside of the knee',
      'A twisting injury',
      'Common in football, soccer, and skiing',
    ],
    riskFactors: [
      'Contact sports with cutting and tackling (football, soccer)',
      'Skiing and other sports with valgus-loading falls',
      'Prior knee injury',
      'Poor lower-limb control during cutting and pivoting',
    ],
    symptoms: [
      'Pain on the inner side of the knee',
      'Tenderness over the inner knee',
      'Swelling',
      'A feeling of instability with side-step movements in higher grades',
    ],
    prognosis: {
      summary:
        'Most isolated MCL sprains are managed nonoperatively with early rehab and staged loading, and recover by grade. Recovery estimates depend heavily on the grade and any associated injuries.',
      typicalTimeline:
        'Grade I often recovers in 2 to 6 weeks; grade II in 4 to 8 weeks; grade III takes longer and is more individualized.',
      encouragement:
        'Isolated MCL injuries have a strong capacity to heal. Keeping the knee moving early and rebuilding quad strength is what restores stability.',
    },
    redFlags: [
      {
        text: 'Inability to bear weight on the leg.',
        urgency: 'urgent',
      },
      {
        text: 'Large swelling or the knee locking.',
        urgency: 'urgent',
      },
      {
        text: 'Concern for a combined ACL or meniscus injury alongside the MCL.',
        urgency: 'urgent',
      },
      {
        text: 'Persistent instability that does not improve.',
        urgency: 'see-clinician',
      },
    ],
    selfCare: {
      dos: [
        'Start gentle range-of-motion and quad activation early — keep the knee moving rather than fully immobilizing it.',
        'Use the pain-monitoring rule: mild discomfort up to about 3/10 during exercise is acceptable if it settles by the next morning.',
        'Control swelling early so you can progress through your rehab.',
        'Progress loading in stages: range of motion and quad sets, then straight-leg raise, bridges, step-ups, and lateral control.',
      ],
      donts: [
        'Don’t return to cutting and pivoting sport until valgus pain is minimal and side-to-side movements are stable.',
        'Don’t push into sharp inner-knee pain or movements that feel unstable.',
        'Don’t expect an injection to fix a typical isolated MCL sprain — these procedures are generally not indicated.',
        'Don’t rush the timeline; recovery depends on the grade and any associated injuries.',
      ],
    },
    clinicalGoal:
      'A stable, pain-controlled knee with confident cutting and a graded return to sport',
    hep: {
      overview:
        'A staged home program that protects the healing ligament while restoring motion, quad strength, and side-to-side control. Each phase has a goal and exit criteria — advance when you meet them, not by the calendar. Use the same pain rule throughout: mild pain up to about 3/10 that settles by the next morning.',
      phases: [
        {
          id: 'mcl-sprain-phase-1',
          order: 1,
          title: 'Early Motion & Quad Activation',
          summary:
            'Calm swelling and pain, restore range of motion, and reawaken the quadriceps.',
          goal: 'Restore comfortable knee motion and re-establish quad control.',
          durationGuidance: 'Typically the first 1–2 weeks',
          entryCriteria: [
            'New MCL sprain with inner-knee pain and swelling',
            'Able to bear weight without red-flag features',
          ],
          exitCriteria: [
            'Swelling settling and motion improving',
            'Can perform quad sets with a strong, controlled contraction',
            'Able to do a straight-leg raise without a lag',
          ],
          educationPoints: [
            'Early range of motion and quad activation protect the knee better than full rest.',
            'Some discomfort during exercise is OK if it settles by the next morning.',
            'Controlling swelling early makes the next phases easier.',
          ],
          exercises: [
            {
              id: 'mcl-quad-set',
              name: 'Quad set',
              target: 'Quadriceps (especially the inner quad/VMO)',
              purpose:
                'Reawakens the quadriceps and supports the knee while the ligament heals.',
              dose: { sets: 3, reps: '10', holdSeconds: 5 },
              frequency: 'Several times per day early on',
              progression: 'Progress to a straight-leg raise as control improves.',
              regression: 'Use a smaller contraction if it is sore.',
              formCues: [
                'Push the knee down (into the surface)',
                'Tighten the thigh',
                'Pull the toes up',
                'Breathe',
              ],
              painRule:
                'Mild pain up to about 3/10 during the hold that settles by the next morning.',
              equipment: ['A rolled towel under the knee (optional)'],
              diagram: {
                key: 'quad-set',
                altText:
                  'Person seated with the leg straight, tightening the thigh muscle to press the back of the knee down.',
              },
            },
            {
              id: 'mcl-early-rom',
              name: 'Early knee range of motion',
              aka: ['Heel slides'],
              target: 'Knee joint mobility',
              purpose:
                'Restores comfortable bending and straightening so the knee does not get stiff.',
              dose: { sets: 2, reps: '10–15' },
              frequency: 'Several times per day',
              progression: 'Gradually increase the range as comfort allows.',
              regression: 'Move within a smaller, pain-free range.',
              formCues: [
                'Slide the heel toward you, then straighten',
                'Move slowly and smoothly',
                'Stay within a comfortable range',
              ],
              painRule:
                'Mild pain up to about 3/10 that settles by the next morning.',
              diagram: {
                key: 'anatomy-knee',
                altText:
                  'Person lying down sliding the heel toward the buttock to bend and straighten the knee.',
              },
            },
          ],
        },
        {
          id: 'mcl-sprain-phase-2',
          order: 2,
          title: 'Strengthening',
          summary:
            'Build quad, hip, and hamstring strength with straight-leg raises, bridges, and step-ups.',
          goal: 'Rebuild strength around the knee and hip to support the healing ligament.',
          durationGuidance: 'Typically 2–4 weeks',
          entryCriteria: [
            'Comfortable, near-full range of motion',
            'Strong quad set and a straight-leg raise without a lag',
          ],
          exitCriteria: [
            'Good strength with straight-leg raises, bridges, and step-ups',
            'Minimal swelling with daily activity',
          ],
          educationPoints: [
            'Strength around the knee and hip shares the load with the ligament.',
            'Progress from a quad set to a straight-leg raise, then add bridges and step-ups.',
            'Keep using the pain rule: discomfort up to about 3/10 that settles overnight.',
          ],
          exercises: [
            {
              id: 'mcl-straight-leg-raise',
              name: 'Straight-leg raise',
              aka: ['SLR'],
              target: 'Quadriceps and hip flexors',
              purpose:
                'Strengthens the quad through a longer lever once a quad set is solid.',
              dose: { sets: 3, reps: '10' },
              frequency: 'Daily',
              progression: 'Add a light ankle weight as control improves.',
              regression: 'Bend the opposite knee for support, or reduce reps.',
              formCues: [
                'Tighten the thigh first, then lift',
                'Keep the knee straight throughout',
                'Lower under control',
              ],
              painRule:
                'Mild pain up to about 3/10 that settles by the next morning.',
              equipment: ['Optional light ankle weight'],
              diagram: {
                key: 'straight-leg-raise',
                altText:
                  'Person lying down with one knee bent, lifting the straight opposite leg.',
              },
            },
            {
              id: 'mcl-bridge',
              name: 'Glute bridge',
              target: 'Glutes and hamstrings',
              purpose:
                'Builds hip and posterior-chain strength to support the knee.',
              dose: { sets: 3, reps: '10–12' },
              frequency: 'Daily or every other day',
              progression: 'Progress toward a single-leg bridge as control improves.',
              regression: 'Reduce range or reps.',
              formCues: [
                'Squeeze the glutes to lift the hips',
                'Keep the hips level',
                'Lower slowly',
              ],
              painRule:
                'Mild pain up to about 3/10 that settles by the next morning.',
              diagram: {
                key: 'glute-bridge',
                altText:
                  'Person lying on their back with knees bent, lifting the hips into a bridge.',
              },
            },
            {
              id: 'mcl-step-up',
              name: 'Step-up',
              target: 'Quadriceps and glutes (functional loading)',
              purpose:
                'Reintroduces controlled, weight-bearing loading of the knee.',
              dose: { sets: 3, reps: '8–10 each leg' },
              frequency: 'Every other day',
              progression: 'Increase step height or add light load.',
              regression: 'Use a lower step or hold a rail for support.',
              formCues: [
                'Drive up through the whole foot',
                'Keep the knee tracking over the foot',
                'Lower under control',
              ],
              painRule:
                'Mild pain up to about 3/10 that settles by the next morning.',
              cautions: ['Keep the knee from collapsing inward (avoid valgus).'],
              equipment: ['A low step or sturdy box'],
              diagram: {
                key: 'step-down',
                altText:
                  'Person stepping up onto a low box with controlled knee alignment.',
              },
            },
          ],
        },
        {
          id: 'mcl-sprain-phase-3',
          order: 3,
          title: 'Lateral Control & Return to Sport',
          summary:
            'Add side-to-side control and sport-specific drills, then graded return to cutting sport.',
          goal: 'Restore stable cutting and pivoting and return to sport with confidence.',
          durationGuidance: 'Varies by grade; weeks to a few months',
          entryCriteria: [
            'Good strength with bridges, step-ups, and straight-leg raises',
            'Swelling controlled and valgus pain minimal',
          ],
          exitCriteria: [
            'Cutting is stable and inner-knee pain is minimal',
            'Sport-specific drills tolerated without a flare',
          ],
          educationPoints: [
            'Lateral control protects the MCL during side-step and cutting movements.',
            'Reintroduce sport drills gradually and progress only when the knee feels stable.',
            'Return once swelling is controlled, valgus pain is minimal, cutting is stable, and sport drills are tolerated.',
          ],
          exercises: [
            {
              id: 'mcl-lateral-control',
              name: 'Lateral control / banded lateral walk',
              target: 'Hip abductors and frontal-plane knee control',
              purpose:
                'Trains side-to-side control to protect the MCL during cutting.',
              dose: { sets: 3, reps: '10–12 steps each direction' },
              frequency: 'Every other day',
              progression: 'Add band resistance, then speed and direction changes.',
              regression: 'Use a lighter band or remove the band.',
              formCues: [
                'Keep the pelvis level',
                'Don’t let the knees collapse inward',
                'Stay low with small, controlled steps',
              ],
              painRule:
                'Mild pain up to about 3/10 that settles by the next morning.',
              equipment: ['Resistance band (optional)'],
              diagram: {
                key: 'banded-lateral-walk',
                altText:
                  'Person in a half-squat stepping sideways against a resistance band around the legs.',
              },
            },
            {
              id: 'mcl-cutting-drills',
              name: 'Graded cutting and sport drills',
              target: 'Sport-specific cutting and pivoting tolerance',
              purpose:
                'Progressively rebuilds tolerance for the side-step and cutting demands of sport.',
              dose: { notes: 'Start slow and shallow; progress speed and angle as tolerated' },
              frequency: '2–3x/week, building gradually',
              progression: 'Increase speed, sharper angles, then full-speed sport drills.',
              regression: 'Slow down or widen the cutting angle.',
              formCues: [
                'Keep the knee tracking over the foot',
                'Avoid the knee collapsing inward (valgus)',
                'Advance only when the knee feels stable',
              ],
              painRule:
                'Mild pain up to about 3/10 that settles by the next morning; stop if the knee feels unstable.',
              cautions: [
                'Only begin once valgus pain is minimal and basic cutting is stable.',
              ],
              diagram: {
                key: 'step-down',
                altText:
                  'Person performing a controlled side-step cutting movement.',
              },
            },
          ],
        },
      ],
    },
    evidence: {
      strength: 'limited',
      bottomLine:
        'Most isolated MCL sprains are managed nonoperatively with early rehab and staged loading.',
      whatHelps: [
        'Early range of motion and quad activation',
        'Staged strengthening — straight-leg raise, bridges, and step-ups',
        'Lateral-control training before returning to cutting sport',
        'Progressing by criteria (swelling, valgus pain, stable cutting) rather than the calendar',
      ],
      whatsUncertain: [
        'Recovery estimates depend heavily on the grade and any associated injuries.',
        'PRP is sometimes discussed in elite sport but remains uncertain.',
        'Higher-grade (III) injuries are more individualized and may need closer evaluation.',
      ],
      citationIds: [
        'mcl-vosoughi-2021-review',
        'mcl-svantesson-2024-review',
        'mcl-hss-nonop-guideline',
      ],
    },
    procedures: [
      {
        procedureId: 'corticosteroid',
        relevance: 'not-indicated',
        evidenceNote:
          'These injection-type procedures are generally not indicated for typical isolated MCL sprain rehabilitation.',
      },
      {
        procedureId: 'prp',
        relevance: 'not-indicated',
        evidenceNote:
          'Generally not indicated for typical isolated MCL sprain rehabilitation; PRP is sometimes discussed in elite sport but remains uncertain.',
      },
      {
        procedureId: 'ultrasound-guided',
        relevance: 'not-indicated',
        evidenceNote:
          'These injection-type procedures are generally not indicated for typical isolated MCL sprain rehabilitation.',
      },
    ],
    returnToActivity: {
      criteria: [
        'Swelling is controlled',
        'Valgus (inner-knee) pain is minimal',
        'Cutting is stable',
        'Sport drills are tolerated',
      ],
      timelineGuidance:
        'Varies by grade and associated injuries — grade I roughly 2–6 weeks, grade II 4–8 weeks, grade III longer and more individualized.',
      reinjuryPrevention: [
        'Maintain quad and hip strength',
        'Keep training lateral control and good cutting mechanics',
        'Build cutting and pivoting demands back gradually',
      ],
    },
    faqs: [
      {
        q: 'Will I need surgery for an MCL sprain?',
        a: 'Usually not. Most isolated MCL injuries heal well without surgery and are managed with early rehab and staged loading.',
        citationIds: ['mcl-vosoughi-2021-review'],
      },
      {
        q: 'How long until I recover?',
        a: 'It depends on the grade. Grade I often recovers in 2 to 6 weeks, grade II in 4 to 8 weeks, and grade III takes longer and is more individualized. Associated injuries can extend the timeline.',
        citationIds: ['mcl-svantesson-2024-review'],
      },
      {
        q: 'When can I return to sport?',
        a: 'Return once swelling is controlled, valgus (inner-knee) pain is minimal, cutting is stable, and sport drills are tolerated.',
        citationIds: ['mcl-hss-nonop-guideline'],
      },
    ],
    relatedConditionIds: ['knee-osteoarthritis'],
    review: {
      status: 'physician-review-pending',
      contentVersion: '1.0.0',
    },
  },
}

export default moduleData
