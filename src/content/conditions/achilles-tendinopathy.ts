import type { Citation, ConditionModule } from '../types'

/**
 * GOLD-STANDARD EXEMPLAR. Every other condition follows this structure and
 * depth. Citations are real and were confirmed; all clinical content ships
 * physician-review-pending for Dr. Swisher's sign-off.
 */

const citations: Citation[] = [
  {
    id: 'jospt-2024-achilles',
    label: 'JOSPT Achilles CPG (2024)',
    authorsOrOrg: 'Martin RL, et al.',
    source: 'Journal of Orthopaedic & Sports Physical Therapy',
    year: 2024,
    type: 'guideline',
    url: 'https://www.jospt.org/doi/10.2519/jospt.2024.0302',
    takeaway:
      'Progressive calf/Achilles loading (eccentric and heavy-slow resistance) is the core, evidence-supported treatment for midportion Achilles tendinopathy.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'silbernagel-2007-painmonitor',
    label: 'Silbernagel 2007 (pain-monitoring RCT)',
    authorsOrOrg: 'Silbernagel KG, et al.',
    source: 'American Journal of Sports Medicine',
    year: 2007,
    type: 'rct',
    url: 'https://pubmed.ncbi.nlm.nih.gov/17307888/',
    takeaway:
      'Continuing running/jumping during rehab using a pain-monitoring model (pain up to ~5/10 that settles) did not worsen outcomes versus rest.',
    verified: true,
    lastChecked: '2026-06-21',
  },
]

const moduleData: ConditionModule = {
  citations,
  condition: {
    id: 'achilles-tendinopathy',
    slug: 'achilles-tendinopathy',
    name: 'Achilles Tendinopathy',
    shortName: 'Achilles',
    aka: [
      'Achilles tendinitis',
      'Achilles tendinosis',
      'midportion Achilles tendinopathy',
      'insertional Achilles tendinopathy',
      'heel cord pain',
    ],
    region: 'lower-leg',
    sportTags: ['running', 'pickleball', 'basketball', 'tennis', 'general'],
    careTier: 'pc-core',
    oneLiner:
      'Load-related pain and stiffness of the Achilles tendon that responds well to a progressive calf-loading program.',
    overview:
      'Achilles tendinopathy is pain, stiffness, and sometimes thickening of the Achilles tendon — the strong cord that connects your calf muscles to your heel bone. It usually comes on gradually when the tendon is asked to do more than it is currently used to (a jump in running mileage, new court sport, or change in footwear). It is a problem of tendon capacity and load, not a sign that the tendon is "wearing out."\n\nMost people improve substantially with a patient, progressive loading program over a few months. The tendon often feels stiff and sore for the first few minutes of activity, then warms up — and is frequently most stiff first thing in the morning. The goal of rehab is to gradually rebuild the tendon\'s tolerance so it can handle the activities you care about.',
    tissue:
      'The Achilles tendon and the calf (gastrocnemius–soleus) complex that loads it.',
    video: {
      videoId: 'DnxahqgsAEw',
      title: 'Achilles Tendinopathy / Tendinitis / Tendinosis | Heel Pain Rehab (Education, Myths, Exercises)',
      channel: 'E3 Rehab',
      channelUrl: 'https://www.youtube.com/@E3Rehab',
      approved: false,
      note: 'Re-curated to an evidence-based rehab source; pending physician review.',
    },
    anatomyDiagram: {
      key: 'anatomy-achilles',
      altText:
        'Side view of the lower leg showing the calf muscles joining into the Achilles tendon, which attaches to the heel bone.',
      caption: 'The Achilles tendon connects the calf muscles to the heel.',
    },
    causes: [
      'A rapid increase in training load (mileage, hills, speed, or jumping)',
      'Returning to sport quickly after time off',
      'New activity with lots of push-off (pickleball, basketball, tennis)',
      'Reduced calf strength or ankle mobility',
    ],
    riskFactors: [
      'Sudden change in activity or footwear',
      'Calf weakness or limited ankle dorsiflexion',
      'Older age and higher body weight',
      'Some medical factors (e.g., diabetes, certain antibiotics)',
    ],
    symptoms: [
      'Pain and stiffness in the tendon, worst in the first steps of the morning',
      'A "warm-up" pattern: sore at first, eases during activity, sore again after',
      'Tenderness or thickening a few centimeters above the heel (midportion) or at the heel (insertional)',
      'Pain with calf raises, hills, stairs, or push-off',
    ],
    prognosis: {
      summary:
        'Most cases improve with a consistent loading program. Tendons adapt slowly, so progress is measured over weeks to months rather than days.',
      typicalTimeline:
        'Many people feel meaningfully better within 6–12 weeks of consistent loading, with continued gains over 3–6 months.',
      encouragement:
        'Some morning stiffness during recovery is normal and not a sign of harm. Steady, progressive loading is what rebuilds the tendon.',
    },
    redFlags: [
      {
        text: 'A sudden, sharp pop or snap in the calf/heel with a feeling of being "kicked," then weakness pushing off — this may be an Achilles rupture and needs urgent evaluation.',
        urgency: 'urgent',
      },
      {
        text: 'Inability to rise onto your toes, or a visible gap/divot in the tendon.',
        urgency: 'urgent',
      },
      {
        text: 'Chest pain or shortness of breath together with new calf pain or swelling — call emergency services. This can signal a blood clot that has traveled to the lungs (pulmonary embolism).',
        urgency: 'emergency',
      },
      {
        text: 'Calf redness, warmth, and swelling, especially with one-sided leg swelling (possible blood clot / DVT).',
        urgency: 'urgent',
      },
      {
        text: 'Pain that is severe at rest or at night, fever, or symptoms not improving after 6–8 weeks of appropriate care.',
        urgency: 'see-clinician',
      },
    ],
    selfCare: {
      dos: [
        'Keep moving — relative rest, not complete rest. Reduce aggravating load rather than stopping everything.',
        'Use the pain-monitoring rule: discomfort up to about 5/10 during exercise is acceptable if it settles by the next morning.',
        'Do your loading exercises consistently — this is the treatment, not an add-on.',
        'Warm up before activity; the tendon tolerates load better once warm.',
      ],
      donts: [
        'Don’t push through sharp, worsening, or next-day-increasing pain.',
        'Don’t suddenly spike your training (the classic trigger).',
        'Don’t rely on rest alone — tendons get worse with prolonged unloading.',
        'Don’t expect a steroid injection into the tendon to fix it; that is generally avoided.',
      ],
    },
    clinicalGoal: 'Pain-controlled push-off and a durable return to running and court sports',
    hep: {
      overview:
        'A staged calf-loading program. Each phase has a clear goal and exit criteria — move on when you meet them, not by the calendar. If a phase flares you, drop back a step. The same exercises carry through; the load and speed increase.',
      phases: [
        {
          id: 'achilles-phase-1',
          order: 1,
          title: 'Settle & Load',
          summary:
            'Calm the most irritable symptoms and start gentle, controlled loading.',
          goal: 'Reduce day-to-day pain and reintroduce the tendon to load.',
          durationGuidance: 'Typically 1–2 weeks',
          entryCriteria: ['New or flared Achilles pain', 'Pain limits walking or stairs'],
          exitCriteria: [
            'Morning stiffness is easing',
            'Can do double-leg calf raises with pain ≤3–4/10 that settles overnight',
          ],
          educationPoints: [
            'Some discomfort during loading is OK if it settles by the next morning.',
            'Isometrics (holds) can reduce pain and start strengthening without much movement.',
            'Keep walking within comfort — relative rest, not bed rest.',
          ],
          exercises: [
            {
              id: 'ach-iso-calf-hold',
              name: 'Isometric calf hold',
              target: 'Achilles tendon and calf complex',
              purpose:
                'Builds early strength and can reduce pain without irritating the tendon.',
              dose: { sets: 5, holdSeconds: 45 },
              frequency: 'Daily',
              progression:
                'Progress from two legs to mostly one leg, then add light load (hold a dumbbell).',
              regression:
                'Reduce the hold time or do it seated to lower the load.',
              formCues: [
                'Push through the ball of the foot, heel just off the ground',
                'Smooth, steady effort — no bouncing',
                'Breathe normally through the hold',
              ],
              painRule: 'Aim for pain ≤3/10 during the hold.',
              equipment: ['A step or sturdy surface for balance'],
              diagram: {
                key: 'isometric-ankle-hold',
                altText:
                  'Person rising onto the balls of the feet and holding the position.',
              },
            },
            {
              id: 'ach-double-calf-raise',
              name: 'Double-leg calf raise',
              target: 'Gastrocnemius–soleus and Achilles',
              purpose: 'Reintroduces controlled up-and-down tendon loading.',
              dose: { sets: 3, reps: '10–15', tempo: '3s up, 3s down' },
              frequency: 'Daily or every other day',
              progression: 'Increase reps, then shift more weight to the sore leg.',
              regression: 'Use more hand support and a smaller range of motion.',
              formCues: [
                'Rise smoothly onto your toes, then lower under control',
                'Keep knees straight for the gastrocnemius',
                'Hold a rail or wall for balance as needed',
              ],
              painRule: 'Discomfort ≤3–4/10 that settles by morning.',
              equipment: ['A wall or rail for balance'],
              diagram: {
                key: 'calf-raise',
                altText: 'Person rising onto the toes with both feet.',
              },
            },
            {
              id: 'ach-balance-intro',
              name: 'Single-leg balance',
              target: 'Ankle stability and proprioception',
              purpose: 'Restores balance control that pain often reduces.',
              dose: { sets: 3, holdSeconds: 30 },
              frequency: 'Daily',
              progression: 'Progress to eyes closed, then on a softer surface.',
              regression: 'Hold a wall or fingertip support.',
              formCues: [
                'Stand tall on one foot',
                'Keep a soft knee',
                'Steady the foot and arch',
              ],
              diagram: {
                key: 'ankle-balance',
                altText: 'Person balancing on one leg.',
              },
            },
          ],
        },
        {
          id: 'achilles-phase-2',
          order: 2,
          title: 'Build Strength',
          summary:
            'Heavy-slow and eccentric calf loading to rebuild tendon capacity.',
          goal: 'Rebuild calf and Achilles strength with controlled, heavier loading.',
          durationGuidance: 'Typically 3–6 weeks',
          entryCriteria: [
            'Comfortable with double-leg calf raises',
            'Morning stiffness improving',
          ],
          exitCriteria: [
            'Can do single-leg calf raises with good control and pain ≤3–4/10',
            'Tolerating heavier loading without next-day flare',
          ],
          educationPoints: [
            'Slow tempo matters more than heavy weight at first.',
            'Train both straight-knee (gastrocnemius) and bent-knee (soleus) calf raises.',
            'It is OK to keep running/sport if it stays within the pain-monitoring rule.',
          ],
          exercises: [
            {
              id: 'ach-eccentric-heel-drop',
              name: 'Eccentric heel drop',
              aka: ['Alfredson heel drop'],
              target: 'Achilles tendon (eccentric loading)',
              purpose:
                'A well-studied loading exercise that emphasizes the lowering (lengthening) phase.',
              dose: { sets: 3, reps: '15', tempo: 'slow lower' },
              frequency: 'Daily (progress toward twice daily as tolerated)',
              progression:
                'Add a backpack with weight; progress straight-knee and bent-knee versions.',
              regression:
                'Use both legs to lower, or reduce the range below the step.',
              formCues: [
                'Rise up with both feet, then lower on the sore leg only',
                'Let the heel drop below the step edge under control',
                'Keep the movement slow and smooth',
              ],
              painRule:
                'Discomfort up to ~5/10 is acceptable if it settles by the next morning and is not building week to week.',
              cautions: [
                'For insertional (at-the-heel) pain, avoid dropping far below level early on — keep to flat ground.',
              ],
              equipment: ['A step', 'Optional backpack for added load'],
              diagram: {
                key: 'heel-drop',
                altText:
                  'Person on a step lowering one heel below the step edge under control.',
              },
              video: {
                videoId: 'vygmqXru4yc',
                title: 'Achilles Tendinopathy & The Heel Drop Protocol',
                channel: 'Waterloo Sports Medicine Centre',
                channelUrl: 'https://www.youtube.com/@waterloosportsmedicinecent4648',
                approved: false,
                note: 'Clear walkthrough of the heel-drop technique. Pending physician review.',
              },
            },
            {
              id: 'ach-single-calf-raise',
              name: 'Single-leg calf raise (heavy-slow)',
              target: 'Gastrocnemius–soleus and Achilles',
              purpose:
                'Heavy-slow resistance is a primary driver of tendon adaptation.',
              dose: { sets: 4, reps: '6–8', tempo: '3s up, 3s down' },
              frequency: '3x/week (allow a rest day between heavy sessions)',
              progression: 'Add load (dumbbell or backpack) as control improves.',
              regression: 'Shift to two legs or reduce range and load.',
              formCues: [
                'Full range: heel down, then all the way up',
                'Control the lower — no dropping',
                'Keep the ankle tracking straight',
              ],
              painRule: 'Discomfort ≤4/10 that settles overnight.',
              equipment: ['Step', 'Dumbbell or loaded backpack'],
              diagram: {
                key: 'single-leg-calf-raise',
                altText: 'Person rising onto the toes of one foot.',
              },
            },
            {
              id: 'ach-seated-calf-raise',
              name: 'Seated (bent-knee) calf raise',
              target: 'Soleus muscle',
              purpose:
                'Targets the soleus, a major contributor to running and push-off load.',
              dose: { sets: 3, reps: '10–15', tempo: 'slow' },
              frequency: '3x/week',
              progression: 'Add weight over the knees.',
              regression: 'Reduce weight or range.',
              formCues: [
                'Sit with knees bent ~90°',
                'Drive through the balls of the feet',
                'Lower slowly',
              ],
              diagram: {
                key: 'calf-raise',
                altText: 'Person performing a seated bent-knee calf raise.',
              },
            },
          ],
        },
        {
          id: 'achilles-phase-3',
          order: 3,
          title: 'Build Capacity',
          summary:
            'Add faster, spring-like loading to prepare the tendon for sport.',
          goal: 'Tolerate quicker, energy-storage loading (hopping, easy running).',
          durationGuidance: 'Typically 4–8 weeks',
          entryCriteria: [
            'Strong single-leg calf raises (approaching the other side)',
            'No next-day flare from heavy loading',
          ],
          exitCriteria: [
            'Can hop and jog without symptom flare',
            'Calf strength roughly symmetrical side to side',
          ],
          educationPoints: [
            'Spring-like (plyometric) loading rebuilds the tendon’s energy-storage capacity.',
            'Alternate harder and easier days.',
            'Keep your strength work going — don’t drop it when you add running.',
          ],
          exercises: [
            {
              id: 'ach-pogo-hops',
              name: 'Pogo hops (low amplitude)',
              target: 'Achilles energy storage / stiffness',
              purpose: 'Introduces fast, springy loading at low height.',
              dose: { sets: 5, holdSeconds: 20 },
              frequency: '2–3x/week',
              progression: 'Increase duration, then height, then single-leg.',
              regression: 'Smaller, slower hops or two legs only.',
              formCues: [
                'Stay tall with quick, light ground contacts',
                'Bounce through the forefoot',
                'Quiet landings',
              ],
              painRule: 'Stop if pain exceeds ~4/10 or builds across sets.',
              cautions: ['Only begin once strength and symptoms allow.'],
              diagram: {
                key: 'ankle-balance',
                altText: 'Person performing small two-foot hops.',
              },
            },
            {
              id: 'ach-single-calf-heavy',
              name: 'Single-leg calf raise (loaded)',
              target: 'Calf–Achilles strength',
              purpose: 'Continues building maximal strength as capacity grows.',
              dose: { sets: 4, reps: '8–10', tempo: 'controlled' },
              frequency: '2–3x/week',
              progression: 'Add load; aim to match the uninjured side.',
              regression: 'Lower the load or reduce reps.',
              formCues: ['Full range', 'Even tempo', 'No trunk lean'],
              diagram: {
                key: 'single-leg-calf-raise',
                altText: 'Person performing a loaded single-leg calf raise.',
              },
            },
          ],
        },
        {
          id: 'achilles-phase-4',
          order: 4,
          title: 'Return to Sport',
          summary:
            'Graded return to running and court sports with maintenance strength.',
          goal: 'Return to full activity without a next-day symptom flare.',
          durationGuidance: 'Varies; weeks to months depending on the sport',
          entryCriteria: [
            'Hopping and jogging tolerated without flare',
            'Symmetrical single-leg calf strength',
          ],
          exitCriteria: [
            'Back to desired sport volume with stable symptoms',
            'Maintaining a weekly strength habit',
          ],
          educationPoints: [
            'Increase running/sport gradually (roughly ≤10% per week).',
            'Use one hard day followed by an easier day.',
            'Keep 1–2 calf-strength sessions weekly to protect against recurrence.',
          ],
          exercises: [
            {
              id: 'ach-run-ramp',
              name: 'Walk–run / sport return ramp',
              target: 'Whole-leg loading tolerance',
              purpose:
                'Reintroduces running or court sport in controlled, progressive steps.',
              dose: { notes: 'e.g., 20 → 40 → 60 minutes across sessions' },
              frequency: '3x/week, building gradually',
              progression: 'Add time, then intensity, then sport-specific drills.',
              regression: 'Shorten the session or add more walk intervals.',
              formCues: [
                'Advance only when next-day symptoms are stable',
                'Warm up first',
                'Track how the tendon feels the morning after',
              ],
              painRule:
                'Use the pain-monitoring rule: ≤5/10 during, settling by next morning.',
              diagram: {
                key: 'ankle-balance',
                altText: 'Person jogging.',
              },
            },
            {
              id: 'ach-maintenance',
              name: 'Maintenance calf strength',
              target: 'Calf–Achilles',
              purpose: 'Protects the gains and reduces recurrence risk.',
              dose: { sets: 3, reps: '8–12' },
              frequency: '1–2x/week, ongoing',
              progression: 'Keep load challenging as you return to sport.',
              regression: 'Reduce to bodyweight if busy or sore.',
              formCues: ['Full range', 'Controlled tempo', 'Both legs trained'],
              diagram: {
                key: 'single-leg-calf-raise',
                altText: 'Person performing a calf raise for maintenance.',
              },
            },
          ],
        },
      ],
    },
    evidence: {
      strength: 'strong',
      bottomLine:
        'Progressive calf-loading exercise (eccentric and/or heavy-slow resistance) is the best-supported treatment and should be the foundation of care.',
      whatHelps: [
        'Progressive calf loading — eccentric heel drops and heavy-slow resistance',
        'Continuing activity within a pain-monitoring model rather than full rest',
        'Patience: tendon adaptation takes weeks to months',
        'Shockwave therapy as an add-on for stubborn cases, alongside loading',
      ],
      whatsUncertain: [
        'The single best loading recipe (eccentric vs heavy-slow) is not settled — both work.',
        'PRP has not shown consistent benefit for Achilles tendinopathy.',
        'Insertional (at-the-heel) cases may respond differently and often need a modified range.',
      ],
      citationIds: ['jospt-2024-achilles', 'silbernagel-2007-painmonitor'],
    },
    procedures: [
      {
        procedureId: 'shockwave',
        relevance: 'selected-cases',
        evidenceNote:
          'May help stubborn cases when combined with a loading program; not a substitute for loading.',
        citationIds: ['nice-guidance'],
      },
      {
        procedureId: 'prp',
        relevance: 'rarely',
        evidenceNote:
          'Evidence has not consistently shown benefit for Achilles tendinopathy.',
      },
      {
        procedureId: 'corticosteroid',
        relevance: 'not-indicated',
        evidenceNote:
          'Injection into the Achilles tendon itself is generally avoided due to rupture risk.',
      },
    ],
    returnToActivity: {
      criteria: [
        'Single-leg calf strength close to the other side',
        'Can hop and run without a next-day flare',
        'Confident with sport-specific movements',
      ],
      timelineGuidance:
        'Highly individual — often a few months for full sport, faster for lower-demand activity.',
      reinjuryPrevention: [
        'Keep a weekly calf-strength habit',
        'Increase training load gradually',
        'Respect early warning stiffness and adjust',
      ],
    },
    faqs: [
      {
        q: 'Should I rest completely until it stops hurting?',
        a: 'No. Tendons generally get worse with prolonged rest. The treatment is graded loading, keeping symptoms within a tolerable range.',
        citationIds: ['silbernagel-2007-painmonitor'],
      },
      {
        q: 'Is it OK to keep running?',
        a: 'Often yes, if pain stays within about 5/10 during activity and settles by the next morning without building over the week.',
        citationIds: ['silbernagel-2007-painmonitor'],
      },
      {
        q: 'How long until I feel better?',
        a: 'Many people notice meaningful improvement within 6–12 weeks of consistent loading, with continued gains over several months.',
        citationIds: ['jospt-2024-achilles'],
      },
    ],
    relatedConditionIds: ['medial-tibial-stress-syndrome', 'plantar-heel-pain'],
    review: {
      status: 'physician-review-pending',
      contentVersion: '1.0.0',
    },
  },
}

export default moduleData
