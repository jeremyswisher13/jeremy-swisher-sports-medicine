import type { Citation, ConditionModule } from '../types'

/**
 * Medial Tibial Stress Syndrome (Shin Splints).
 * Transcribed from the physician-authored deep-research source
 * (Evidence-Based Sports Medicine Library Draft, pp. 38–39).
 * Citations are real and were captured during physician deep research;
 * all clinical content ships physician-review-pending for Dr. Swisher's sign-off.
 */

const citations: Citation[] = [
  {
    id: 'mtss-moen-2009-criticalreview',
    label: 'Moen 2009 (MTSS critical review)',
    authorsOrOrg: 'Moen MH, et al.',
    source: 'Sports Medicine',
    year: 2009,
    type: 'narrative-review',
    url: 'https://pubmed.ncbi.nlm.nih.gov/19530750/',
    takeaway:
      'Critical review of medial tibial stress syndrome covering its proposed bone-stress/soft-tissue-load mechanism, risk factors, and management.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'mtss-menendez-2020-systematicreview',
    label: 'Menéndez 2020 (systematic review)',
    authorsOrOrg: 'Menéndez C, et al.',
    source: 'Systematic review',
    year: 2020,
    type: 'systematic-review',
    url: 'https://pubmed.ncbi.nlm.nih.gov/33066291/',
    takeaway:
      'Systematic review of medial tibial stress syndrome evaluating treatment and prevention strategies, noting limited high-quality treatment-trial evidence.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'mtss-saad-2025-scopingreview',
    label: 'Saad 2025 (scoping review)',
    authorsOrOrg: 'Saad MA, et al.',
    source: 'Scoping review',
    year: 2025,
    type: 'systematic-review',
    url: 'https://pubmed.ncbi.nlm.nih.gov/40171337/',
    takeaway:
      'Scoping review mapping current evidence on medial tibial stress syndrome, including risk factors, diagnosis, and management approaches.',
    verified: true,
    lastChecked: '2026-06-21',
  },
]

const moduleData: ConditionModule = {
  citations,
  condition: {
    id: 'medial-tibial-stress-syndrome',
    slug: 'medial-tibial-stress-syndrome',
    name: 'Medial Tibial Stress Syndrome (Shin Splints)',
    shortName: 'Shin Splints',
    aka: [
      'shin splints',
      'MTSS',
      'medial tibial stress syndrome',
      'tibial stress syndrome',
      'soleus syndrome',
    ],
    region: 'lower-leg',
    sportTags: ['running', 'basketball'],
    careTier: 'pc-referral-trigger',
    oneLiner:
      'Exercise-related pain along the inner shin from bone stress and soft-tissue overload that improves with reduced impact and progressive lower-leg loading.',
    overview:
      'Medial tibial stress syndrome (MTSS), often called shin splints, is exercise-related pain along the inner edge of the shin — the distal posteromedial tibial border. It usually shows up when training load goes up faster than the leg can adapt.\n\nIt is thought to reflect a bone-stress and soft-tissue-load problem rather than one single inflamed muscle or fascia. In other words, the shin bone and the muscles that attach to it are being asked to handle more impact than they are currently used to.\n\nThe good news is that most cases settle with a smart plan: temporarily reducing impact volume, building lower-leg strength, and returning to running gradually. The most important thing your clinician will watch for is whether the pain is a stress fracture rather than MTSS, because that changes the plan.',
    tissue:
      'The distal posteromedial border of the tibia (shin bone) and the soft tissues — including the surrounding muscles and fascia — that load it.',
    video: {
      videoId: '_OyNx5VMzzc',
      title: 'Shin Splints | Medial Tibial Stress Syndrome (Exercises, Rehab, Strengthening)',
      channel: 'E3 Rehab',
      channelUrl: 'https://www.youtube.com/@E3Rehab',
      approved: false,
      note: 'Re-curated to an evidence-based source (E3 Rehab / Rehab Science); pending physician review.',
    },
    anatomyDiagram: {
      key: 'anatomy-tibia',
      altText:
        'Front-inner view of the lower leg highlighting the distal posteromedial border of the tibia where shin-splint pain is felt.',
      caption: 'MTSS pain runs along the inner (posteromedial) border of the shin bone.',
    },
    causes: [
      'A spike in training load (more running volume, intensity, or impact than the leg is used to)',
      'Training errors such as ramping up too quickly or returning to running after time off',
      'Repetitive impact in new runners, military recruits, and athletes after load spikes',
      'Certain biomechanical features that increase load on the inner shin',
    ],
    riskFactors: [
      'A history of prior MTSS',
      'Training errors (too much, too soon)',
      'Certain biomechanical features',
      'Being a new runner or military recruit',
    ],
    symptoms: [
      'Aching or sharp pain along the inner lower shin with activity',
      'Pain that comes on with running or impact and eases with rest, especially early on',
      'Tenderness spread along a length of the inner shin border (rather than one tiny point)',
    ],
    prognosis: {
      summary:
        'Most cases of MTSS recover with load management and progressive lower-leg strengthening. Recovery is slower if the bone stress is more advanced.',
      typicalTimeline:
        'Recovery often takes 3 to 12 weeks, but longer if bone stress is more advanced.',
      encouragement:
        'Shin splints are usually a load problem, not a permanent injury. Reducing impact for a while and rebuilding strength steadily gets most people back to running.',
    },
    redFlags: [
      {
        text: 'Small, focal bony tenderness on the shin (pain at one pinpoint spot rather than spread along the border) — this can suggest a stress fracture.',
        urgency: 'urgent',
      },
      {
        text: 'Pain at rest or at night — this can suggest a stress fracture.',
        urgency: 'urgent',
      },
      {
        text: 'Pain with hopping — this can suggest a stress fracture.',
        urgency: 'urgent',
      },
      {
        text: 'Persistent symptoms beyond several weeks, or an unclear diagnosis.',
        urgency: 'see-clinician',
      },
    ],
    selfCare: {
      dos: [
        'Reduce impact volume — cut back running mileage and high-impact activity while symptoms settle.',
        'Use the pain-monitoring rule: mild discomfort up to about 3/10 during exercise is acceptable if it settles by the next morning.',
        'Do your lower-leg strengthening (calf raises, tibialis posterior and foot strength) consistently — this is part of the treatment.',
        'Return to running gradually with a graded run-walk progression once pain-free with hopping and brisk walking.',
        'Build mileage back up slowly to give the shin time to adapt.',
      ],
      donts: [
        'Don’t push through sharp shin pain, pain at rest or at night, or pain with hopping — these can signal a stress fracture.',
        'Don’t spike your training volume or jump back to your old mileage all at once.',
        'Don’t ignore one pinpoint tender spot on the bone — that needs evaluation before you keep running.',
        'Don’t rely on rest alone; rebuilding lower-leg strength is what makes the return durable.',
      ],
    },
    clinicalGoal:
      'A pain-free, durable return to running and impact sport through load management and progressive lower-leg strengthening — while ruling out tibial stress fracture.',
    hep: {
      overview:
        'A staged lower-leg loading program: settle the irritable shin by reducing impact, rebuild calf and foot/tibialis posterior strength, then graduate back to running with a run-walk progression. Move on by meeting each phase’s criteria, not the calendar — if a phase flares the shin, step back. Use the default pain rule throughout: mild discomfort up to about 3/10 that settles by the next morning is acceptable.',
      phases: [
        {
          id: 'medial-tibial-stress-syndrome-phase-1',
          order: 1,
          title: 'Calm the Shin (Reduce Impact)',
          summary:
            'Reduce impact volume to settle symptoms while keeping the leg moving with low-impact activity.',
          goal: 'Reduce day-to-day shin pain and offload the irritated bone and soft tissue.',
          durationGuidance: 'Typically 1–3 weeks',
          entryCriteria: [
            'New or flared inner-shin pain with activity',
            'Pain comes on with running or impact',
          ],
          exitCriteria: [
            'Inner-shin pain with daily activity and brisk walking is settling',
            'Can tolerate basic calf raises with pain ≤3/10 that settles by morning',
          ],
          educationPoints: [
            'The first job is to reduce impact volume, not stop moving entirely.',
            'A pinpoint tender spot on the bone, rest/night pain, or pain with hopping needs evaluation for a stress fracture before progressing.',
            'Low-impact cross-training (bike, pool) keeps fitness up while the shin calms down.',
          ],
          exercises: [
            {
              id: 'mtss-impact-deload',
              name: 'Impact deload + low-impact cross-training',
              target: 'Tibia and lower-leg soft tissues (offloading)',
              purpose:
                'Reduces the repetitive impact driving the bone stress while keeping fitness up with low-impact activity.',
              dose: { notes: 'Cut running/impact volume substantially; substitute 20–40 min low-impact cardio' },
              frequency: 'Most days, as comfortable',
              progression: 'Gradually reintroduce impact only once symptoms settle (see later phases).',
              regression: 'Reduce duration or switch to a lower-impact option (pool running).',
              formCues: [
                'Pick activities that don’t reproduce sharp shin pain (cycling, swimming, pool running)',
                'Keep effort comfortable — this is about volume, not intensity',
                'Track how the shin feels the next morning',
              ],
              painRule: 'Avoid activities that cause more than mild (≤3/10) shin discomfort.',
              equipment: ['Stationary bike or pool (optional)'],
              diagram: {
                key: 'anatomy-tibia',
                altText:
                  'Lower leg highlighting the inner shin, illustrating the area being offloaded during impact deload.',
              },
            },
            {
              id: 'mtss-double-calf-raise',
              name: 'Double-leg calf raise',
              target: 'Gastrocnemius–soleus complex',
              purpose:
                'Reintroduces controlled lower-leg loading to start rebuilding the strength that protects the shin.',
              dose: { sets: 3, reps: '12–15', tempo: 'slow lower' },
              frequency: 'Every other day',
              progression: 'Progress toward single-leg / add load (see Phase 2); regress with partial range.',
              regression: 'Use partial range and more hand support.',
              formCues: [
                'Rise tall',
                'Slow lower',
                'Tripod foot (weight through big toe, little toe, and heel)',
                'No bounce',
              ],
              painRule: 'Pain rule: default (mild discomfort up to ~3/10 that settles by next morning).',
              equipment: ['A wall or rail for balance'],
              diagram: {
                key: 'calf-raise',
                altText: 'Person rising onto the balls of both feet for a double-leg calf raise.',
              },
            },
          ],
        },
        {
          id: 'medial-tibial-stress-syndrome-phase-2',
          order: 2,
          title: 'Build Lower-Leg Strength',
          summary:
            'Progressive calf, tibialis posterior, and foot strengthening to rebuild the leg’s capacity to handle impact.',
          goal: 'Rebuild lower-leg strength so the shin can tolerate progressively more load.',
          durationGuidance: 'Typically 2–6 weeks',
          entryCriteria: [
            'Shin pain with walking has settled',
            'Comfortable with double-leg calf raises',
          ],
          exitCriteria: [
            'Pain-free with brisk walking',
            'Pain-free with hopping',
          ],
          educationPoints: [
            'Strengthening the calf, tibialis posterior, and foot shares the load and protects the shin.',
            'Progress load and single-leg work as tolerated; back off if next-day symptoms increase.',
            'Pain-free hopping is the key signal that you’re ready to start running again.',
          ],
          exercises: [
            {
              id: 'mtss-single-calf-raise',
              name: 'Single-leg calf raise (progressed)',
              target: 'Gastrocnemius–soleus complex',
              purpose:
                'Progresses the calf-raise load to build the strength needed for running and push-off.',
              dose: { sets: 3, reps: '12–15', tempo: '3s up, 3s down' },
              frequency: 'Every other day',
              progression: 'Add load (dumbbell or backpack) as control improves.',
              regression: 'Return to double-leg or reduce range and add hand support.',
              formCues: [
                'Rise tall',
                'Slow lower',
                'Tripod foot',
                'No bounce',
              ],
              painRule: 'Pain rule: default (mild discomfort up to ~3/10 that settles by next morning).',
              equipment: ['A wall or rail for balance', 'Optional dumbbell or backpack'],
              diagram: {
                key: 'single-leg-calf-raise',
                altText: 'Person rising onto the ball of one foot for a single-leg calf raise.',
              },
            },
            {
              id: 'mtss-tibialis-posterior-strength',
              name: 'Tibialis posterior / foot strengthening',
              target: 'Tibialis posterior and intrinsic foot muscles',
              purpose:
                'Strengthens the muscles that support the arch and attach near the inner shin, sharing load away from the tibia.',
              dose: { sets: 3, reps: '12–15' },
              frequency: 'Every other day',
              progression: 'Add resistance band tension or progress to standing/single-leg variations.',
              regression: 'Reduce band tension or range; perform seated.',
              formCues: [
                'Turn the sole of the foot inward and down against the band (resisted inversion)',
                'Keep the movement slow and controlled',
                'Hold a tall arch — avoid letting the foot collapse',
              ],
              painRule: 'Pain rule: default (mild discomfort up to ~3/10 that settles by next morning).',
              equipment: ['Resistance band'],
              diagram: {
                key: 'ankle-balance',
                altText: 'Person performing resisted foot inversion and single-leg balance to strengthen the inner lower leg.',
              },
            },
          ],
        },
        {
          id: 'medial-tibial-stress-syndrome-phase-3',
          order: 3,
          title: 'Graded Return to Running',
          summary:
            'A graded run-walk progression with gradual mileage build-up, started once hopping and brisk walking are pain-free.',
          goal: 'Return to running gradually without reproducing shin pain.',
          durationGuidance: 'Varies; several weeks depending on goal mileage',
          entryCriteria: [
            'Pain-free with hopping',
            'Pain-free with brisk walking',
          ],
          exitCriteria: [
            'Back to desired running volume with stable, pain-free shins',
            'Maintaining a weekly lower-leg strength habit',
          ],
          educationPoints: [
            'Return only after pain-free hopping and brisk walking, then start a graded run-walk.',
            'Build mileage slowly — the shin needs time to adapt to impact.',
            'Keep your strength work going as you add running.',
          ],
          exercises: [
            {
              id: 'mtss-run-walk-return',
              name: 'Graded run-walk progression',
              target: 'Whole-leg impact tolerance',
              purpose:
                'Reintroduces running impact in controlled, progressive steps so the shin can adapt.',
              dose: { notes: 'Alternate run/walk intervals; build total running time gradually each week' },
              frequency: '3x/week, building gradually',
              progression: 'Increase running intervals, then total mileage; aim for ≤10% weekly increases.',
              regression: 'Shorten run intervals or add more walking; drop back if shins flare.',
              formCues: [
                'Start with short run intervals between walking',
                'Advance only when next-day shin symptoms are stable',
                'Build mileage slowly',
              ],
              painRule: 'Pain rule: default (mild discomfort up to ~3/10 that settles by next morning).',
              diagram: {
                key: 'ankle-balance',
                altText: 'Person jogging during a graded run-walk return-to-running progression.',
              },
            },
            {
              id: 'mtss-maintenance-strength',
              name: 'Maintenance lower-leg strength',
              target: 'Calf and foot/tibialis posterior',
              purpose: 'Protects the strength gains and reduces the chance of recurrence as running resumes.',
              dose: { sets: 3, reps: '10–15' },
              frequency: '1–2x/week, ongoing',
              progression: 'Keep the load challenging as mileage increases.',
              regression: 'Reduce to bodyweight if busy or sore.',
              formCues: [
                'Rise tall',
                'Slow lower',
                'Tripod foot',
              ],
              painRule: 'Pain rule: default (mild discomfort up to ~3/10 that settles by next morning).',
              diagram: {
                key: 'single-leg-calf-raise',
                altText: 'Person performing a calf raise as ongoing lower-leg maintenance strength.',
              },
            },
          ],
        },
      ],
    },
    evidence: {
      strength: 'limited',
      bottomLine:
        'Relative rest plus progressive lower-leg strengthening and a graded running return is standard care.',
      whatHelps: [
        'Relative rest — reducing impact volume while symptoms settle',
        'Progressive lower-leg strengthening (calf, tibialis posterior, and foot)',
        'A graded run-walk return with slow mileage build-up',
      ],
      whatsUncertain: [
        'Evidence for specific treatments is limited; prevention and risk-factor evidence is better than rehab-trial evidence.',
        'The exact mechanism (bone stress versus soft-tissue traction/friction) is debated, though it matters less for management than the load message.',
        'Distinguishing MTSS from an early tibial stress fracture can be difficult and is the most important triage question.',
      ],
      citationIds: [
        'mtss-moen-2009-criticalreview',
        'mtss-menendez-2020-systematicreview',
        'mtss-saad-2025-scopingreview',
      ],
    },
    procedures: [
      {
        procedureId: 'corticosteroid',
        relevance: 'not-indicated',
        evidenceNote: 'Not indicated for MTSS.',
      },
      {
        procedureId: 'prp',
        relevance: 'not-indicated',
        evidenceNote: 'Not indicated for MTSS.',
      },
      {
        procedureId: 'hyaluronic-acid',
        relevance: 'not-indicated',
        evidenceNote: 'Not indicated for MTSS.',
      },
      {
        procedureId: 'tenotomy',
        relevance: 'not-indicated',
        evidenceNote: 'Not indicated for MTSS.',
      },
      {
        procedureId: 'shockwave',
        relevance: 'selected-cases',
        evidenceNote:
          'ESWT may be considered for selected refractory cases, but condition-specific evidence is limited.',
        citationIds: ['mtss-saad-2025-scopingreview'],
      },
    ],
    returnToActivity: {
      criteria: [
        'Pain-free with hopping',
        'Pain-free with brisk walking',
        'Then a graded run-walk progression',
      ],
      timelineGuidance:
        'Recovery often takes 3 to 12 weeks, but longer if bone stress is more advanced; build mileage back slowly.',
      reinjuryPrevention: [
        'Build mileage slowly after returning to running',
        'Keep a weekly lower-leg strength habit',
        'Respect early warning shin pain and adjust load before it flares',
      ],
    },
    faqs: [
      {
        q: 'How do I know if it’s shin splints or a stress fracture?',
        a: 'MTSS pain is usually spread along a length of the inner shin and eases with rest. Warning signs that point toward a stress fracture include a small pinpoint tender spot on the bone, pain at rest or at night, or pain with hopping — these need evaluation before you keep running.',
        citationIds: ['mtss-saad-2025-scopingreview'],
      },
      {
        q: 'How long until I can run again?',
        a: 'Recovery often takes 3 to 12 weeks, longer if the bone stress is more advanced. Return after you can hop and walk briskly pain-free, then use a graded run-walk and build mileage slowly.',
        citationIds: ['mtss-moen-2009-criticalreview'],
      },
      {
        q: 'Do I have to stop all activity?',
        a: 'No — the goal is relative rest. Reduce impact volume and substitute low-impact cross-training while you rebuild lower-leg strength, rather than stopping everything.',
        citationIds: ['mtss-menendez-2020-systematicreview'],
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
