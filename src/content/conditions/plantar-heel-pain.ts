import type { Citation, ConditionModule } from '../types'

/**
 * Transcribed from the physician deep-research draft (Plantar heel pain).
 * Citations are the real URLs listed in that section. All clinical content
 * ships physician-review-pending for Dr. Swisher's sign-off.
 */

const citations: Citation[] = [
  {
    id: 'plantar-jospt-2023-cpg',
    label: 'JOSPT Heel Pain CPG (2023)',
    authorsOrOrg: 'Koc TA Jr, et al.',
    source: 'Journal of Orthopaedic & Sports Physical Therapy',
    year: 2023,
    type: 'guideline',
    url: 'https://www.jospt.org/doi/10.2519/jospt.2023.0303',
    takeaway:
      'Clinical practice guideline supporting stretching and progressive strengthening as first-line care for plantar heel pain (plantar fasciitis).',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'plantar-rathleff-2015-rct',
    label: 'Rathleff 2015 (high-load strength RCT)',
    authorsOrOrg: 'Rathleff MS, et al.',
    source: 'Scandinavian Journal of Medicine & Science in Sports',
    year: 2015,
    type: 'rct',
    url: 'https://pubmed.ncbi.nlm.nih.gov/25145882/',
    takeaway:
      'High-load strength training (e.g., heel raises with the toes extended) improved plantar heel pain outcomes versus stretching alone at 3 months.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'plantar-cortes-2024-sr',
    label: 'Cortés-Pérez 2024 (ESWT vs steroid systematic review)',
    authorsOrOrg: 'Cortés-Pérez I, et al.',
    source: 'PubMed (systematic review)',
    year: 2024,
    type: 'systematic-review',
    url: 'https://pubmed.ncbi.nlm.nih.gov/38738305/',
    takeaway:
      'Systematic review comparing extracorporeal shockwave therapy (ESWT) and corticosteroid injection for plantar heel pain.',
    verified: true,
    lastChecked: '2026-06-21',
  },
]

const moduleData: ConditionModule = {
  citations,
  condition: {
    id: 'plantar-heel-pain',
    slug: 'plantar-heel-pain',
    name: 'Plantar Heel Pain (Plantar Fasciitis)',
    shortName: 'Plantar Heel Pain',
    aka: [
      'plantar fasciitis',
      'plantar fasciopathy',
      'plantar fasciosis',
      'heel spur syndrome',
      'plantar enthesopathy',
    ],
    region: 'ankle-foot',
    sportTags: ['running', 'general'],
    careTier: 'pc-core',
    oneLiner:
      'Pain where the plantar fascia attaches near the heel bone, classically worst with the first steps in the morning, that responds well to stretching and progressive calf/foot loading.',
    overview:
      'Plantar heel pain usually means pain where the plantar fascia attaches near the heel bone. The plantar fascia is the thick band of tissue along the bottom of your foot that supports the arch.\n\nIt often hurts with the first steps in the morning or after sitting, then loosens a bit as you move. The problem is usually related to load and the tissue\'s capacity rather than a sign that the foot is damaged.\n\nMost people improve over a few weeks to months with stretching, progressive strengthening, and sensible load management. Although it is widely known as "plantar fasciitis," the tissue is often more degenerative or enthesopathic than purely inflammatory.',
    tissue:
      'The plantar fascia, the thick band of tissue on the sole of the foot, where it attaches near the heel bone (medial calcaneal tubercle).',
    video: {
      videoId: '5D86b45yJzU',
      title: 'Plantar Fasciitis (Education | Myths | Stretching & Strengthening Exercises)',
      channel: 'E3 Rehab',
      channelUrl: 'https://www.youtube.com/@E3Rehab',
      approved: false,
      note: 'Re-curated to an evidence-based rehab source; pending physician review.',
    },
    anatomyDiagram: {
      key: 'anatomy-plantar',
      altText:
        'Underside of the foot showing the plantar fascia running from the heel bone toward the toes and supporting the arch.',
      caption:
        'The plantar fascia supports the arch and attaches near the heel bone.',
    },
    causes: [
      'A change in load (e.g., more walking, standing, or running than usual)',
      'Prolonged standing, especially on hard surfaces',
      'Reduced calf and foot capacity (weakness or tightness)',
      'Footwear factors (unsupportive or worn-out shoes)',
    ],
    riskFactors: [
      'A recent change in activity or training load',
      'Prolonged standing occupations',
      'Higher body mass',
      'Reduced calf/foot strength or limited ankle mobility',
      'Unsupportive footwear',
    ],
    symptoms: [
      'Heel pain that is worst with the first steps in the morning',
      'Pain after getting up from sitting, easing somewhat as you move',
      'Tenderness at the inner part of the heel (medial calcaneal tubercle)',
      'Pain that increases with prolonged standing, walking, or running',
    ],
    prognosis: {
      summary:
        'Most cases improve with stretching, progressive strengthening, and load management. Recovery is measured over weeks to months rather than days.',
      typicalTimeline:
        'Many people improve over 6 to 12 weeks, but chronic cases can take months.',
      encouragement:
        'First-step morning pain is the classic pattern and not a sign of harm. Consistent stretching and loading is what rebuilds tolerance.',
    },
    redFlags: [
      {
        text: 'Fever or redness around the heel.',
        urgency: 'urgent',
      },
      {
        text: 'A traumatic heel injury (such as a fall or direct blow).',
        urgency: 'urgent',
      },
      {
        text: 'Neurologic symptoms (numbness, tingling, or weakness).',
        urgency: 'urgent',
      },
      {
        text: 'Concern for a stress fracture (focal bone pain that worsens with weight-bearing).',
        urgency: 'urgent',
      },
      {
        text: 'Persistent numbness or burning suggesting nerve entrapment.',
        urgency: 'see-clinician',
      },
      {
        text: 'Symptoms that are not improving with appropriate care.',
        urgency: 'see-clinician',
      },
    ],
    selfCare: {
      dos: [
        'Stretch the plantar fascia and calf regularly — this is part of the treatment, not an add-on.',
        'Add progressive calf/foot strengthening (such as heel raises) as symptoms allow.',
        'Manage your load: ease back aggravating standing, walking, or running rather than stopping everything.',
        'Use the pain-monitoring rule: mild discomfort up to about 3/10 during exercise is acceptable if it settles by the next morning.',
        'Wear supportive footwear and consider arch support if it helps comfort.',
      ],
      donts: [
        'Don’t push through sharp or worsening pain, or pain that is higher the next morning.',
        'Don’t suddenly spike your standing, walking, or running volume (a classic trigger).',
        'Don’t rely on rest alone — the tissue needs gradual loading to rebuild capacity.',
        'Don’t expect a quick fix; chronic cases can take months.',
      ],
    },
    clinicalGoal:
      'Reduced first-step pain and a durable return to standing, walking, and running without flare.',
    hep: {
      overview:
        'A staged program built on plantar fascia-specific stretching, calf strength and stretching, and foot intrinsic work, progressing into heavier loading such as heel raises with the toes extended. Each phase has a goal and exit criteria — move on when you meet them, not by the calendar. If a phase flares you, drop back a step.',
      phases: [
        {
          id: 'plantar-heel-pain-phase-1',
          order: 1,
          title: 'Calm & Mobilize',
          summary:
            'Settle first-step pain with plantar fascia-specific stretching and gentle calf stretching.',
          goal: 'Reduce day-to-day heel pain and restore comfortable mobility of the fascia and calf.',
          durationGuidance: 'Typically 1–2 weeks',
          entryCriteria: [
            'New or flared plantar heel pain',
            'Painful first steps in the morning or after sitting',
          ],
          exitCriteria: [
            'Morning first-step pain is easing',
            'Can do basic standing calf raises with pain ≤3/10 that settles overnight',
          ],
          educationPoints: [
            'First-step pain is the classic pattern and not a sign of harm.',
            'Plantar fascia-specific stretching can reduce pain quickly when done consistently.',
            'Reduce aggravating standing/walking load rather than stopping all activity.',
          ],
          exercises: [
            {
              id: 'plantar-fascia-stretch',
              name: 'Plantar fascia-specific stretch',
              aka: ['toe-pull fascia stretch'],
              target: 'Plantar fascia',
              purpose:
                'Stretches the plantar fascia directly and often eases first-step pain.',
              dose: { sets: 3, reps: '10', holdSeconds: 10 },
              frequency: 'Daily, including before the first steps in the morning',
              progression:
                'Hold longer or add a calf stretch in the same session as comfort improves.',
              regression: 'Use a gentler pull and shorter holds.',
              formCues: [
                'Sit and cross the affected foot over the opposite knee',
                'Pull the toes back toward the shin until you feel the arch stretch',
                'Keep the stretch steady — no bouncing',
              ],
              painRule:
                'A stretching sensation is fine; avoid sharp pain. Mild discomfort up to ~3/10 that settles by next morning is acceptable.',
              diagram: {
                key: 'plantar-fascia-stretch',
                altText:
                  'Person seated pulling the toes back to stretch the arch of the foot.',
              },
            },
            {
              id: 'plantar-calf-stretch',
              name: 'Calf stretch (wall)',
              target: 'Gastrocnemius–soleus complex',
              purpose:
                'Improves ankle mobility and reduces tension transmitted to the plantar fascia.',
              dose: { sets: 3, holdSeconds: 30 },
              frequency: 'Daily',
              progression:
                'Add a bent-knee version to target the soleus; increase hold time.',
              regression: 'Reduce the lean or hold time.',
              formCues: [
                'Hands on the wall, affected leg back with the heel down',
                'Keep the back knee straight to feel the upper calf',
                'Lean in gently until you feel a stretch, then hold',
              ],
              equipment: ['A wall for support'],
              diagram: {
                key: 'anatomy-ankle',
                altText:
                  'Person in a staggered stance leaning toward a wall to stretch the back-leg calf.',
              },
            },
          ],
        },
        {
          id: 'plantar-heel-pain-phase-2',
          order: 2,
          title: 'Build Strength',
          summary:
            'Add progressive calf and foot strengthening, including heel raises and foot intrinsic work.',
          goal: 'Rebuild calf and foot capacity that supports the plantar fascia under load.',
          durationGuidance: 'Typically 3–6 weeks',
          entryCriteria: [
            'First-step pain is easing',
            'Comfortable with stretching and basic calf raises',
          ],
          exitCriteria: [
            'Can perform heel raises with the toes extended at a meaningful load with pain ≤3/10',
            'Tolerating strengthening without a next-day flare',
          ],
          educationPoints: [
            'Progressive strengthening, not just stretching, drives lasting improvement.',
            'Heel raises with a towel under the toes load the calf and plantar fascia together.',
            'Mild discomfort during loading is OK if it settles by the next morning.',
          ],
          exercises: [
            {
              id: 'plantar-heel-raise-towel',
              name: 'Heel raise with towel under the toes',
              aka: ['high-load heel raise', 'plantar fascia heel raise'],
              target: 'Calf and foot–plantar fascia load',
              purpose:
                'Loads the calf and plantar fascia together; a well-studied high-load strengthening exercise for plantar heel pain.',
              dose: { sets: 3, reps: '8–12', tempo: 'slow rise, controlled lower' },
              frequency: 'Every other day',
              progression:
                'Progress to single-leg and add load (e.g., a backpack) as control improves.',
              regression:
                'Use flat ground (no towel) or perform on both legs with hand support.',
              formCues: [
                'Slow rise',
                'Pause at the top',
                'Lower with control',
                'Keep a stable "foot tripod" through the big toe, little toe, and heel',
              ],
              painRule:
                'Mild discomfort up to ~3/10 during the exercise is acceptable if it settles by the next morning.',
              equipment: ['A rolled towel', 'A step (optional)', 'Backpack for added load (optional)'],
              diagram: {
                key: 'calf-raise',
                altText:
                  'Person rising onto the balls of the feet with a rolled towel placed under the toes.',
              },
            },
            {
              id: 'plantar-foot-intrinsics',
              name: 'Foot intrinsic strengthening (short-foot / toe work)',
              aka: ['short-foot exercise', 'towel scrunches'],
              target: 'Intrinsic foot muscles',
              purpose:
                'Strengthens the small muscles that support the arch and share load with the plantar fascia.',
              dose: { sets: 3, reps: '10', holdSeconds: 5 },
              frequency: 'Daily',
              progression: 'Progress from seated to standing, then to single-leg.',
              regression: 'Perform seated with less effort and shorter holds.',
              formCues: [
                'Gently draw the ball of the foot toward the heel to raise the arch',
                'Keep the toes long and relaxed — no clawing',
                'Hold briefly, then relax',
              ],
              diagram: {
                key: 'big-toe-extension',
                altText:
                  'Person seated activating the small muscles of the foot to raise the arch.',
              },
            },
            {
              id: 'plantar-soleus-stretch',
              name: 'Bent-knee calf stretch (soleus)',
              target: 'Soleus muscle',
              purpose:
                'Maintains ankle mobility and reduces strain at the heel as loading increases.',
              dose: { sets: 3, holdSeconds: 30 },
              frequency: 'Daily',
              progression: 'Increase hold time or stretch depth gradually.',
              regression: 'Reduce the lean or hold time.',
              formCues: [
                'Stagger your stance with the affected leg back, heel down',
                'Bend the back knee slightly to target the lower calf',
                'Lean in gently until you feel a stretch',
              ],
              equipment: ['A wall for support'],
              diagram: {
                key: 'anatomy-ankle',
                altText:
                  'Person in a staggered stance with the back knee slightly bent to stretch the lower calf.',
              },
            },
          ],
        },
        {
          id: 'plantar-heel-pain-phase-3',
          order: 3,
          title: 'Return to Activity',
          summary:
            'Progress to single-leg loading and graded walking/running while maintaining strength.',
          goal: 'Tolerate hopping/cutting load and increasing walking or running volume without flare.',
          durationGuidance: 'Typically 4–8 weeks; varies by activity',
          entryCriteria: [
            'Strong heel raises with the toes extended without next-day flare',
            'First-step pain is minimal',
          ],
          exitCriteria: [
            'Can increase walking volume and tolerate hopping without flare',
            'Returning to running/sport with stable symptoms',
          ],
          educationPoints: [
            'Increase walking and running gradually (roughly ≤10% per week).',
            'Keep calf and foot strength in your long-term routine.',
            'Use brace or taping during higher-risk sport if it helps.',
          ],
          exercises: [
            {
              id: 'plantar-single-leg-heel-raise',
              name: 'Single-leg heel raise (loaded)',
              target: 'Calf and foot–plantar fascia strength',
              purpose:
                'Builds the strength and capacity needed for running and higher-load activity.',
              dose: { sets: 4, reps: '6–8', tempo: 'slow rise, controlled lower' },
              frequency: '2–3x/week',
              progression: 'Add load and aim to match the uninjured side.',
              regression: 'Reduce load, shift to both legs, or remove the towel.',
              formCues: [
                'Full range — up onto the ball of the foot, then lower with control',
                'Maintain a stable foot tripod',
                'No trunk lean',
              ],
              painRule:
                'Discomfort up to ~3/10 that settles by next morning.',
              equipment: ['A step', 'Backpack or dumbbell for added load'],
              diagram: {
                key: 'single-leg-calf-raise',
                altText: 'Person rising onto the ball of one foot.',
              },
            },
            {
              id: 'plantar-walk-run-ramp',
              name: 'Walk–run / activity return ramp',
              target: 'Whole-foot loading tolerance',
              purpose:
                'Reintroduces walking volume and running in controlled, progressive steps.',
              dose: { notes: 'e.g., build walking volume first, then add run intervals across sessions' },
              frequency: '3x/week, building gradually',
              progression: 'Add time, then intensity, then sport-specific movement.',
              regression: 'Shorten the session or add more walk intervals.',
              formCues: [
                'Advance only when next-day symptoms are stable',
                'Warm up first',
                'Track how the heel feels the morning after',
              ],
              painRule:
                'Keep symptoms within ~3/10 during and settling by next morning.',
              diagram: {
                key: 'ankle-balance',
                altText: 'Person walking and jogging to rebuild loading tolerance.',
              },
            },
          ],
        },
      ],
    },
    evidence: {
      strength: 'moderate',
      bottomLine:
        'Stretching plus progressive strengthening is first-line; ESWT is a reasonable persistent-case option.',
      whatHelps: [
        'Plantar fascia-specific stretching and calf stretching',
        'Progressive (high-load) strengthening such as heel raises with the toes extended',
        'Load management and supportive footwear',
        'Extracorporeal shockwave therapy (ESWT) for persistent cases',
      ],
      whatsUncertain: [
        'Corticosteroid injection gives short-term relief but carries recurrence and fat-pad atrophy concerns.',
        'PRP results remain variable for plantar heel pain.',
        'The optimal strengthening dose and the added value of ESWT over loading alone are not fully settled.',
      ],
      citationIds: [
        'plantar-jospt-2023-cpg',
        'plantar-rathleff-2015-rct',
        'plantar-cortes-2024-sr',
      ],
    },
    procedures: [
      {
        procedureId: 'corticosteroid',
        relevance: 'commonly-discussed',
        evidenceNote:
          'Commonly discussed; short-term relief only, with recurrence and fat-pad atrophy concerns.',
        citationIds: ['plantar-cortes-2024-sr'],
      },
      {
        procedureId: 'prp',
        relevance: 'selected-cases',
        evidenceNote: 'Selected cases; results still variable.',
      },
      {
        procedureId: 'hyaluronic-acid',
        relevance: 'rarely',
        evidenceNote: 'Rarely used for plantar heel pain.',
      },
      {
        procedureId: 'shockwave',
        relevance: 'selected-cases',
        evidenceNote:
          'Selected cases / common discussion for persistent symptoms.',
        citationIds: ['plantar-cortes-2024-sr'],
      },
      {
        procedureId: 'ultrasound-guided',
        relevance: 'selected-cases',
        evidenceNote: 'Ultrasound-guided injection: selected cases.',
      },
      {
        procedureId: 'tenotomy',
        relevance: 'selected-cases',
        evidenceNote: 'Percutaneous tenotomy: selected refractory cases.',
      },
    ],
    returnToActivity: {
      criteria: [
        'First-step pain has dropped',
        'Hopping improves and is tolerated',
        'Walking volume increases without flare',
      ],
      timelineGuidance:
        'Individual — many improve over 6–12 weeks, while chronic cases can take months.',
      reinjuryPrevention: [
        'Keep calf and foot strength in your long-term routine',
        'Increase standing, walking, and running load gradually',
        'Wear supportive footwear and respect early warning symptoms',
      ],
    },
    faqs: [
      {
        q: 'Why does it hurt most with the first steps in the morning?',
        a: 'The plantar fascia tightens overnight, so the first steps load it suddenly. It typically loosens a bit as you move. A morning fascia stretch before standing can help.',
        citationIds: ['plantar-jospt-2023-cpg'],
      },
      {
        q: 'Is it really inflammation ("fasciitis")?',
        a: 'Although it is widely called plantar fasciitis, the tissue is often more degenerative or enthesopathic than purely inflammatory. That is one reason loading and strengthening matter more than just anti-inflammatory treatment.',
        citationIds: ['plantar-jospt-2023-cpg'],
      },
      {
        q: 'Do I need a steroid injection?',
        a: 'Stretching and progressive strengthening are first-line. A corticosteroid injection is commonly discussed and can give short-term relief, but it carries recurrence and fat-pad atrophy concerns, so it is usually not the first step. ESWT is a reasonable option for persistent cases.',
        citationIds: ['plantar-cortes-2024-sr', 'plantar-rathleff-2015-rct'],
      },
      {
        q: 'How long will this take to get better?',
        a: 'Many people improve over 6 to 12 weeks with consistent stretching, strengthening, and load management, though chronic cases can take months.',
        citationIds: ['plantar-jospt-2023-cpg'],
      },
    ],
    relatedConditionIds: ['achilles-tendinopathy', 'medial-tibial-stress-syndrome'],
    review: {
      status: 'physician-review-pending',
      contentVersion: '1.0.0',
    },
  },
}

export default moduleData
