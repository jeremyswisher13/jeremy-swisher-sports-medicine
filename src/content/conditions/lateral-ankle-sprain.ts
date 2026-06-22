import type { Citation, ConditionModule } from '../types'

/**
 * Lateral ankle sprain — transcribed from the physician-authored deep-research
 * library (pp. 39–40). Citations are the sources listed in that section.
 * Ships physician-review-pending for Dr. Swisher's sign-off.
 */

const citations: Citation[] = [
  {
    id: 'lateral-ankle-sprain-jospt-2021-cpg',
    label: 'JOSPT Ankle Stability CPG (2021)',
    authorsOrOrg: 'Martin RL, et al.',
    source: 'Journal of Orthopaedic & Sports Physical Therapy',
    year: 2021,
    type: 'guideline',
    url: 'https://www.jospt.org/doi/10.2519/jospt.2021.0302',
    takeaway:
      'Clinical practice guideline covering both first-time lateral ankle sprain and chronic ankle instability; supports early mobilization, exercise-based rehab, and external support.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'lateral-ankle-sprain-vuurberg-2018-guideline',
    label: 'Vuurberg BJSM Guideline/Review (2018)',
    authorsOrOrg: 'Vuurberg G, et al.',
    source: 'British Journal of Sports Medicine',
    year: 2018,
    type: 'guideline',
    url: 'https://pubmed.ncbi.nlm.nih.gov/29514819/',
    takeaway:
      'Evidence-based guideline/review on diagnosis, treatment, and prevention of lateral ankle sprains, supporting functional treatment, exercise, and bracing/taping to reduce recurrence.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'lateral-ankle-sprain-smith-2021-rts',
    label: 'Smith Return-to-Sport Consensus (2021)',
    authorsOrOrg: 'Smith MD, et al.',
    source: 'British Journal of Sports Medicine',
    year: 2021,
    type: 'consensus',
    url: 'https://pubmed.ncbi.nlm.nih.gov/34158354/',
    takeaway:
      'Return-to-sport consensus review for ankle sprain emphasizing criteria-based progression (full walking, near-full ROM, hopping/cutting tolerance, and confidence).',
    verified: true,
    lastChecked: '2026-06-21',
  },
]

const moduleData: ConditionModule = {
  citations,
  condition: {
    id: 'lateral-ankle-sprain',
    slug: 'lateral-ankle-sprain',
    name: 'Lateral Ankle Sprain',
    shortName: 'Ankle Sprain',
    aka: [
      'rolled ankle',
      'inversion ankle sprain',
      'sprained ankle',
      'ATFL sprain',
      'lateral ligament sprain',
    ],
    region: 'ankle-foot',
    sportTags: ['basketball', 'soccer', 'running'],
    careTier: 'pc-core',
    oneLiner:
      'An injury to the ligaments on the outside of the ankle that usually recovers well with early movement, weight-bearing as tolerated, and a balance-and-strength program.',
    overview:
      'A lateral ankle sprain is an injury to the ligaments on the outside of the ankle, especially the anterior talofibular ligament (ATFL), and sometimes the calcaneofibular ligament. It is one of the most common sports injuries.\n\nIt usually happens when the foot rolls inward on a planted foot — landing awkwardly, cutting, or stepping on someone\'s foot. The ankle becomes painful, swollen, and often bruised on the outside, and it can feel unstable.\n\nMost mild-to-moderate (grade I–II) sprains settle and rebuild well over a few weeks. The key is to get the ankle moving and strengthening early — skipping rehab is what leads some people to develop ongoing instability and repeat sprains.',
    tissue:
      'The lateral ankle ligaments — primarily the anterior talofibular ligament (ATFL), and sometimes the calcaneofibular ligament.',
    video: {
      videoId: '3JJayVC0-20',
      title: 'Lateral Sprained Ankle Stretches & Exercises - Ask Doctor Jo',
      channel: 'AskDoctorJo',
      approved: true,
      note: 'Physician-curated demonstration video.',
    },
    anatomyDiagram: {
      key: 'anatomy-ankle',
      altText:
        'Outside view of the ankle showing the lateral ligaments, including the anterior talofibular and calcaneofibular ligaments connecting the fibula to the foot bones.',
      caption: 'Lateral ankle sprains injure the ligaments on the outside of the ankle.',
    },
    causes: [
      'A twist inward (inversion) on a planted foot',
      'Landing awkwardly from a jump or rebound',
      'Cutting, pivoting, or stepping on another player\'s foot',
      'Uneven ground or a misstep off a curb',
    ],
    riskFactors: [
      'A previous ankle sprain (the strongest risk factor)',
      'Skipping rehab after an earlier sprain',
      'Court and field sports with jumping and cutting (basketball, soccer)',
      'Reduced ankle strength, balance, or proprioception',
    ],
    symptoms: [
      'Pain on the outside of the ankle',
      'Swelling and bruising',
      'Pain with walking',
      'A feeling of instability or the ankle "giving way"',
    ],
    prognosis: {
      summary:
        'Most grade I–II sprains improve well with early movement and a structured balance-and-strength program. Some people develop chronic instability if rehab is skipped.',
      typicalTimeline:
        'Many grade I–II sprains improve over 2 to 6 weeks; higher-demand sport may take longer.',
      encouragement:
        'Early, gentle movement and getting back to weight-bearing are safe and help recovery. Finishing your balance and strength work is what protects against repeat sprains.',
    },
    redFlags: [
      {
        text: 'Inability to bear weight along with bony tenderness, deformity, or concern for a fracture.',
        urgency: 'emergency',
      },
      {
        text: 'Inability to bear weight with bony tenderness or deformity — urgent evaluation to rule out fracture.',
        urgency: 'urgent',
      },
      {
        text: 'Repeated "giving way," concern for a high (syndesmotic) ankle sprain, or no improvement with appropriate care.',
        urgency: 'see-clinician',
      },
    ],
    selfCare: {
      dos: [
        'Use compression and elevation early to manage swelling.',
        'Begin gentle ankle movement (range of motion) early — don\'t immobilize completely.',
        'Bear weight as tolerated and return to walking as it eases.',
        'Start your balance and strengthening work early — this is the treatment, not an add-on.',
        'Use a brace or taping during higher-risk sport to support the ankle and reduce recurrence.',
      ],
      donts: [
        'Don\'t fully rest and immobilize the ankle for weeks — early motion recovers faster.',
        'Don\'t skip the balance and strength program once the pain settles.',
        'Don\'t push through sharp pain or worsening swelling; scale back if it flares.',
        'Don\'t return to cutting or jumping sport before you can hop and cut with confidence.',
      ],
    },
    clinicalGoal:
      'Restore full, confident weight-bearing and hopping/cutting tolerance while preventing repeat sprains',
    hep: {
      overview:
        'A staged program that gets the ankle moving and bearing weight early, then rebuilds strength, balance, and finally the speed and confidence needed for sport. Each phase has a goal and exit criteria — progress when you meet them, not by the calendar. If a step flares the ankle, drop back. Pain rule: mild discomfort up to about 3/10 that settles by the next morning is acceptable.',
      phases: [
        {
          id: 'lateral-ankle-sprain-phase-1',
          order: 1,
          title: 'Acute: Protect & Move',
          summary:
            'Control swelling, restore gentle motion, and return to weight-bearing as tolerated.',
          goal: 'Settle pain and swelling while reintroducing early, gentle movement and walking.',
          durationGuidance: 'Typically the first 1–2 weeks',
          entryCriteria: [
            'New lateral ankle sprain',
            'Pain and swelling limit walking',
          ],
          exitCriteria: [
            'Swelling is reducing and walking is becoming comfortable',
            'Near-full, pain-controlled ankle range of motion',
          ],
          educationPoints: [
            'Compression and elevation help control early swelling.',
            'Early gentle motion and weight-bearing as tolerated speed recovery — full rest is not the goal.',
            'Some discomfort with movement is OK if it settles by the next morning.',
          ],
          exercises: [
            {
              id: 'las-ankle-rom',
              name: 'Ankle range-of-motion (ankle alphabet)',
              target: 'Ankle joint mobility',
              purpose:
                'Restores gentle motion early, which reduces stiffness and helps swelling drain.',
              dose: { sets: 3, reps: '1 alphabet each direction', notes: 'Move within comfort' },
              frequency: 'Several times daily',
              progression: 'Move through a larger, slower range as pain allows.',
              regression: 'Smaller movements, or trace simple up/down and side motions only.',
              formCues: [
                'Keep the leg supported and relaxed',
                'Move slowly and smoothly through pain-free range',
                'Stop short of sharp pain',
              ],
              painRule: 'Mild discomfort up to ~3/10 that settles by next morning.',
              diagram: {
                key: 'anatomy-ankle',
                altText: 'Person tracing letters with the foot to move the ankle through its range.',
              },
            },
            {
              id: 'las-weight-bearing-walk',
              name: 'Weight-bearing as tolerated (graded walking)',
              target: 'Walking tolerance and gait',
              purpose:
                'Reintroduces normal loading and walking, which the ankle needs to recover.',
              dose: { notes: 'Short, frequent walks; increase distance as comfort allows' },
              frequency: 'Daily',
              progression: 'Increase distance and pace, then reduce any support used.',
              regression: 'Shorter distances, slower pace, or use of a support/crutch as needed.',
              formCues: [
                'Aim for a smooth, even heel-to-toe step',
                'Bear as much weight as comfort allows',
                'Stop if pain is sharp or swelling worsens',
              ],
              painRule: 'Keep discomfort to a tolerable level that settles overnight.',
              diagram: {
                key: 'ankle-balance',
                altText: 'Person walking with an even, controlled stride.',
              },
            },
          ],
        },
        {
          id: 'lateral-ankle-sprain-phase-2',
          order: 2,
          title: 'Strength & Balance',
          summary:
            'Rebuild ankle strength with band work and restore balance and proprioception.',
          goal: 'Rebuild strength in all directions and retrain the balance control that pain reduces.',
          durationGuidance: 'Typically 2–4 weeks',
          entryCriteria: [
            'Walking is comfortable',
            'Swelling controlled and near-full range of motion',
          ],
          exitCriteria: [
            'Can balance on one leg with good control',
            'Good strength with band inversion/eversion in all directions',
          ],
          educationPoints: [
            'Strengthening the muscles around the ankle protects the healing ligaments.',
            'Balance (proprioception) training is one of the best ways to prevent repeat sprains.',
            'Train turning the foot in (inversion) and out (eversion), not just up and down.',
          ],
          exercises: [
            {
              id: 'las-band-inversion-eversion',
              name: 'Band inversion / eversion',
              target: 'Ankle invertor and evertor muscles',
              purpose:
                'Rebuilds side-to-side ankle strength that stabilizes against rolling.',
              dose: { sets: 3, reps: '12–15 each direction', tempo: 'slow and controlled' },
              frequency: 'Daily or every other day',
              progression: 'Increase band resistance as control improves.',
              regression: 'Use a lighter band or a smaller range of motion.',
              formCues: [
                'Anchor the band and keep the heel still',
                'Turn the foot smoothly in, then out',
                'Control the return — no snapping back',
              ],
              painRule: 'Mild discomfort up to ~3/10 that settles by next morning.',
              equipment: ['Resistance band'],
              diagram: {
                key: 'isometric-ankle-hold',
                altText: 'Person turning the foot inward and outward against a resistance band.',
              },
            },
            {
              id: 'las-calf-raise',
              name: 'Calf raise',
              target: 'Calf complex and ankle push-off strength',
              purpose:
                'Rebuilds push-off strength and loads the ankle through a full range.',
              dose: { sets: 3, reps: '10–15', tempo: '2s up, 2s down' },
              frequency: 'Daily or every other day',
              progression: 'Progress from two legs to one leg, then add light load.',
              regression: 'Use hand support and a smaller range of motion.',
              formCues: [
                'Rise smoothly onto the balls of the feet',
                'Lower under control to the floor',
                'Keep the ankle tracking straight',
              ],
              painRule: 'Mild discomfort up to ~3/10 that settles by next morning.',
              equipment: ['A wall or rail for balance'],
              diagram: {
                key: 'calf-raise',
                altText: 'Person rising onto the toes with both feet.',
              },
            },
            {
              id: 'las-single-leg-balance',
              name: 'Single-leg balance',
              aka: ['proprioception drill'],
              target: 'Ankle proprioception and stability',
              purpose:
                'Retrains the balance control that pain reduces — a key recurrence-prevention exercise.',
              dose: { sets: 3, holdSeconds: 38, notes: '30–45 seconds per set' },
              frequency: 'Daily',
              progression: 'Progress to eyes closed, then add head turns, then an unstable surface.',
              regression: 'Use fingertip support on a wall or chair.',
              formCues: [
                'Soft knee',
                'Tripod foot — weight even across the foot',
                'Quiet ankle',
                'Pelvis level',
              ],
              painRule: 'Mild discomfort up to ~3/10 that settles by next morning.',
              diagram: {
                key: 'ankle-balance',
                altText: 'Person balancing on one leg with a soft knee.',
              },
            },
          ],
        },
        {
          id: 'lateral-ankle-sprain-phase-3',
          order: 3,
          title: 'Hopping & Return to Sport',
          summary:
            'Add hopping and cutting drills and graded return to sport with external support.',
          goal: 'Tolerate hopping and cutting with confidence and return to full activity.',
          durationGuidance: 'Varies; typically a few weeks depending on the sport',
          entryCriteria: [
            'Strong, controlled single-leg balance',
            'Good strength in all directions without flare',
          ],
          exitCriteria: [
            'Can hop and cut without symptom flare and with confidence',
            'Full walking and near-full range of motion',
          ],
          educationPoints: [
            'Spring-like (hopping) and cutting drills rebuild the ankle\'s tolerance for sport demands.',
            'Use a brace or taping during higher-risk sport to support the ankle and reduce recurrence.',
            'Build back gradually — confidence is part of a safe return.',
          ],
          exercises: [
            {
              id: 'las-hops',
              name: 'Hopping progression',
              target: 'Ankle spring-like loading and control',
              purpose:
                'Reintroduces fast, springy loading needed for jumping and landing.',
              dose: { sets: 4, reps: '10', notes: 'Two-leg, progressing to single-leg' },
              frequency: '2–3x/week',
              progression: 'Two legs to one leg, then add forward, side, and rotational hops.',
              regression: 'Smaller, slower hops or two legs only.',
              formCues: [
                'Land softly with a bent knee and quiet ankle',
                'Stay balanced on landing before the next hop',
                'Keep the ankle tracking straight',
              ],
              painRule: 'Stop if pain exceeds ~3/10 or builds across sets.',
              cautions: ['Only begin once strength and balance allow.'],
              diagram: {
                key: 'ankle-balance',
                altText: 'Person performing controlled hops and landing softly.',
              },
            },
            {
              id: 'las-cutting-drills',
              name: 'Cutting and agility drills',
              target: 'Sport-specific change-of-direction tolerance',
              purpose:
                'Rebuilds tolerance for the cutting and pivoting that sport demands.',
              dose: { notes: 'Start slow and controlled, build speed as confidence grows' },
              frequency: '2–3x/week, building gradually',
              progression: 'Increase speed, then add reactive/unplanned cuts and sport drills.',
              regression: 'Slower, wider turns, or straight-line running only.',
              formCues: [
                'Plant with a stable, straight ankle',
                'Stay low and controlled through the turn',
                'Build speed only when the ankle feels confident',
              ],
              painRule: 'Mild discomfort up to ~3/10 that settles by next morning.',
              cautions: ['Consider a brace or taping for higher-risk drills.'],
              equipment: ['Cones or markers', 'Optional ankle brace or tape'],
              diagram: {
                key: 'ankle-balance',
                altText: 'Person performing a cutting drill, changing direction around a cone.',
              },
            },
          ],
        },
      ],
    },
    evidence: {
      strength: 'strong',
      bottomLine:
        'Get the ankle moving and strengthening early; balance and external support help prevent repeat sprains.',
      whatHelps: [
        'Early mobilization and exercise-based rehab',
        'Weight-bearing as tolerated rather than prolonged immobilization',
        'Balance and proprioception training to reduce recurrence',
        'Bracing or taping during higher-risk sport',
      ],
      whatsUncertain: [
        'The exact balance of immobilization vs early motion for more severe (grade III) sprains is less settled.',
        'How long bracing or taping should continue after recovery varies by individual.',
        'Best strategies to prevent progression to chronic ankle instability are still being refined.',
      ],
      citationIds: [
        'lateral-ankle-sprain-jospt-2021-cpg',
        'lateral-ankle-sprain-vuurberg-2018-guideline',
        'lateral-ankle-sprain-smith-2021-rts',
      ],
    },
    procedures: [
      {
        procedureId: 'corticosteroid',
        relevance: 'not-indicated',
        evidenceNote: 'Not routine for simple sprain.',
      },
      {
        procedureId: 'prp',
        relevance: 'not-indicated',
        evidenceNote: 'Not routine for simple sprain.',
      },
      {
        procedureId: 'hyaluronic-acid',
        relevance: 'not-indicated',
        evidenceNote: 'Not routine for simple sprain.',
      },
      {
        procedureId: 'tenotomy',
        relevance: 'not-indicated',
        evidenceNote: 'Not routine for simple sprain.',
      },
      {
        procedureId: 'shockwave',
        relevance: 'not-indicated',
        evidenceNote: 'ESWT: not indicated.',
      },
      {
        procedureId: 'ultrasound-guided',
        relevance: 'rarely',
        evidenceNote: 'Ultrasound-guided injection: rarely for standard lateral ankle sprain.',
      },
    ],
    returnToActivity: {
      criteria: [
        'Full walking restored',
        'Near-full ankle range of motion',
        'Can hop and cut without symptom flare',
        'Confidence with sport-specific movement',
      ],
      timelineGuidance:
        'Varies — many grade I–II sprains return over 2–6 weeks, with higher-demand sport taking longer.',
      reinjuryPrevention: [
        'Use a brace or taping during higher-risk sport',
        'Keep up balance and proprioception training',
        'Maintain ankle strength in all directions',
      ],
    },
    faqs: [
      {
        q: 'Should I rest and keep the ankle still until it stops hurting?',
        a: 'No. Early gentle movement and bearing weight as tolerated recover faster than prolonged immobilization. The goal is to get the ankle moving and strengthening early.',
        citationIds: ['lateral-ankle-sprain-jospt-2021-cpg'],
      },
      {
        q: 'Why do I need balance exercises if my ankle already feels better?',
        a: 'Skipping rehab — especially balance work — is what leads some people to develop chronic instability and repeat sprains. Balance and strength training are the best ways to prevent it from happening again.',
        citationIds: ['lateral-ankle-sprain-vuurberg-2018-guideline'],
      },
      {
        q: 'When can I get back to sport?',
        a: 'Return when you have full walking, near-full range of motion, can hop and cut without a flare, and feel confident. Using a brace or taping during higher-risk sport can help protect the ankle.',
        citationIds: ['lateral-ankle-sprain-smith-2021-rts'],
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
