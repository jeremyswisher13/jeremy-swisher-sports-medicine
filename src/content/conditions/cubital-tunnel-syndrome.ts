import type { Citation, ConditionModule } from '../types'

/**
 * Cubital Tunnel Syndrome (Ulnar Nerve). Transcribed faithfully from the
 * physician-authored deep-research source. Citations are real and were
 * captured from the source's own Citations list; all clinical content ships
 * physician-review-pending for Dr. Swisher's sign-off.
 */

const citations: Citation[] = [
  {
    id: 'cubital-hannaford-2024-review',
    label: 'Hannaford 2024 (review)',
    authorsOrOrg: 'Hannaford A, et al.',
    source: 'Review',
    year: 2024,
    type: 'narrative-review',
    url: 'https://pubmed.ncbi.nlm.nih.gov/38697734/',
    takeaway:
      'Reviews the diagnosis and management of ulnar neuropathy at the elbow, emphasizing conservative care for mild-to-moderate cases.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'cubital-wieczorek-2024-conservative',
    label: 'Wieczorek 2024 (conservative treatment review)',
    authorsOrOrg: 'Wieczorek M, et al.',
    source: 'Conservative treatment review',
    year: 2024,
    type: 'systematic-review',
    url: 'https://pubmed.ncbi.nlm.nih.gov/38893728/',
    takeaway:
      'Conservative treatment review supporting splinting, education, and activity modification for cubital tunnel syndrome.',
    verified: true,
    lastChecked: '2026-06-21',
  },
  {
    id: 'cubital-svernlov-2009-rct',
    label: 'Svernlöv 2009 (randomized study)',
    authorsOrOrg: 'Svernlöv B, et al.',
    source: 'Journal of Hand Surgery (British)',
    year: 2009,
    type: 'rct',
    url: 'https://pubmed.ncbi.nlm.nih.gov/19282413/',
    takeaway:
      'Randomized study showing that information and activity modification (with or without nerve gliding/splinting) helps mild-to-moderate ulnar nerve compression at the elbow.',
    verified: true,
    lastChecked: '2026-06-21',
  },
]

const moduleData: ConditionModule = {
  citations,
  condition: {
    id: 'cubital-tunnel-syndrome',
    slug: 'cubital-tunnel-syndrome',
    name: 'Cubital Tunnel Syndrome (Ulnar Nerve)',
    shortName: 'Cubital Tunnel',
    aka: [
      'ulnar neuropathy at the elbow',
      'ulnar nerve entrapment',
      'ulnar nerve compression at the elbow',
      'funny bone nerve irritation',
    ],
    region: 'elbow',
    sportTags: ['throwing', 'cycling', 'general'],
    careTier: 'pc-referral-trigger',
    oneLiner:
      'Irritation or compression of the ulnar nerve at the elbow, causing numbness and tingling in the ring and small fingers.',
    overview:
      'Cubital tunnel syndrome is irritation or compression of the ulnar nerve at the elbow, usually behind the bony bump on the inside of the elbow (the medial epicondyle) where the nerve runs through a space called the cubital tunnel. This is the same nerve that gives you the "funny bone" zing when you knock your elbow.\n\nIt can cause numbness and tingling in the ring and small fingers, and pain or irritation on the inside of the elbow. Symptoms are often worse when the elbow is bent for a long time — for example, while sleeping, holding a phone, or leaning on the elbow.\n\nMild cases frequently settle with simple changes: avoiding prolonged elbow bending and direct pressure, gentle nerve glides, and attention to posture and shoulder mechanics. Progressive weakness or muscle wasting is a more serious sign that needs prompt specialist attention.',
    tissue:
      'The ulnar nerve as it passes through the cubital tunnel at the elbow, behind the medial epicondyle.',
    video: {
      videoId: 'rvrtapqpuPw',
      title: '3 Exercises for Cubital Tunnel Syndrome (Ulnar Nerve Rehab)',
      channel: 'Rehab Science',
      channelUrl: 'https://www.youtube.com/@RehabScience',
      approved: false,
      note: 'Re-curated to an evidence-based rehab source; pending physician review.',
    },
    anatomyDiagram: {
      key: 'anatomy-elbow',
      altText:
        'Inner-elbow view showing the ulnar nerve passing behind the medial epicondyle through the cubital tunnel toward the forearm and hand.',
      caption:
        'The ulnar nerve runs behind the inner bony bump of the elbow through the cubital tunnel.',
    },
    causes: [
      'Prolonged elbow flexion (keeping the elbow bent for long periods)',
      'Leaning on the elbows',
      'Repetitive elbow bending',
      'Heightened nerve sensitivity',
    ],
    riskFactors: [
      'Habitual elbow leaning (desk work, driving, armrests)',
      'Activities or sleep positions with the elbow held bent',
      'Repetitive elbow flexion in sport or work',
      'Throwing and cycling positions that stress or compress the inner elbow',
    ],
    symptoms: [
      'Numbness and tingling in the ring and small fingers',
      'Symptoms that are worse at night or when the elbow is bent',
      'Pain or irritation on the inside of the elbow',
      'Hand clumsiness or weakness in worse cases',
    ],
    prognosis: {
      summary:
        'Mild cases often improve with activity change and splinting. Progressive weakness or muscle wasting is a more urgent sign that the nerve needs prompt specialist evaluation.',
      typicalTimeline:
        'Mild cases may improve over 6 to 12 weeks with activity change and splinting.',
      encouragement:
        'Many people get better simply by reducing prolonged elbow bending and direct pressure on the nerve. The key is consistency and protecting the nerve while symptoms settle.',
    },
    redFlags: [
      {
        text: 'Progressive hand weakness.',
        urgency: 'urgent',
      },
      {
        text: 'Intrinsic (small hand muscle) wasting.',
        urgency: 'urgent',
      },
      {
        text: 'Constant numbness (rather than intermittent).',
        urgency: 'urgent',
      },
      {
        text: 'Symptoms not improving.',
        urgency: 'see-clinician',
      },
      {
        text: 'Neck or shoulder overlap (symptoms that may be coming from the neck or shoulder as well).',
        urgency: 'see-clinician',
      },
      {
        text: 'Work-related recurrence.',
        urgency: 'see-clinician',
      },
    ],
    selfCare: {
      dos: [
        'Avoid prolonged elbow bending — keep the elbow straighter during the day and at night.',
        'Avoid leaning on or putting direct pressure on the inside of the elbow.',
        'Try night extension splinting to keep the elbow from bending fully while you sleep.',
        'Do gentle nerve glides, stopping if symptoms intensify or worsen afterward.',
        'Work on posture and shoulder mechanics, since the nerve runs the whole arm.',
      ],
      donts: [
        'Don’t sleep with the elbow fully bent (a common cause of night symptoms).',
        'Don’t rest the elbow on hard surfaces or armrests for long stretches.',
        'Don’t push nerve glides into intensifying tingling — gentle motion only.',
        'Don’t ignore progressive weakness or muscle wasting — these need prompt evaluation.',
      ],
    },
    clinicalGoal:
      'Intermittent (not constant) symptoms, stable strength, and modifiable triggers under control',
    hep: {
      overview:
        'A simple home program built around protecting the nerve: night extension splinting and avoiding prolonged elbow flexion, gentle ulnar nerve glides for neural mobility, and postural/shoulder work since the ulnar nerve travels the whole arm. Nerve glides are gentle by design — symptoms should ease after a set, not build. Progress only if the program is non-irritating.',
      phases: [
        {
          id: 'cubital-tunnel-syndrome-phase-1',
          order: 1,
          title: 'Protect & Offload the Nerve',
          summary:
            'Reduce nerve irritation by limiting prolonged elbow bending and direct pressure, starting with night splinting.',
          goal: 'Calm symptoms by protecting the ulnar nerve, especially at night.',
          durationGuidance: 'Typically 2–4 weeks',
          entryCriteria: [
            'New or recently worsened numbness/tingling in the ring and small fingers',
            'Symptoms worse at night or with the elbow bent',
          ],
          exitCriteria: [
            'Night symptoms easing',
            'Able to identify and reduce the main triggers (elbow bending, leaning)',
          ],
          educationPoints: [
            'Most night symptoms come from sleeping with the elbow fully bent.',
            'Avoiding direct pressure on the inner elbow takes load off the nerve.',
            'A splint or a loose towel wrap that limits full elbow bend can reduce night symptoms.',
          ],
          exercises: [
            {
              id: 'cubital-tunnel-syndrome-night-splint',
              name: 'Night extension splinting',
              aka: ['elbow extension splint', 'soft elbow brace at night'],
              target: 'Ulnar nerve at the cubital tunnel',
              purpose:
                'Keeps the elbow from bending fully overnight, which reduces tension and pressure on the ulnar nerve and eases night symptoms.',
              dose: {
                notes:
                  'Wear overnight while sleeping; a towel wrapped loosely around the elbow can substitute for a splint.',
              },
              frequency: 'Nightly',
              progression:
                'As night symptoms settle, you may need the splint less often.',
              regression:
                'If a rigid splint is uncomfortable, use a soft wrap or place a folded towel in the elbow crease to limit bending.',
              formCues: [
                'Keep the elbow comfortably straight, not locked',
                'Snug enough to limit bending, not tight enough to numb the arm',
                'Aim to keep the elbow under roughly a right angle of bend',
              ],
              cautions: [
                'Loosen if the splint itself causes new numbness, tingling, or color change in the hand.',
              ],
              equipment: ['Elbow extension splint or a small towel'],
              diagram: {
                key: 'anatomy-elbow',
                altText:
                  'Elbow held in a comfortably straight position with a soft splint to limit bending overnight.',
              },
            },
            {
              id: 'cubital-tunnel-syndrome-activity-mod',
              name: 'Avoid prolonged flexion & elbow pressure',
              target: 'Ulnar nerve at the cubital tunnel',
              purpose:
                'Reduces the day-to-day load on the nerve by limiting the positions and habits that compress or stretch it.',
              dose: { notes: 'Apply throughout the day as a habit change.' },
              frequency: 'All day, ongoing',
              progression:
                'Build awareness so you catch and correct elbow leaning automatically.',
              regression:
                'Start with the single biggest trigger (e.g., phone holding or armrest leaning) and add others over time.',
              formCues: [
                'Keep the elbow straighter when on the phone or at a desk',
                'Avoid resting the inner elbow on hard armrests or tables',
                'Take breaks to straighten the arm during long bent-elbow tasks',
              ],
              diagram: {
                key: 'anatomy-elbow',
                altText:
                  'Person keeping the elbow relatively straight rather than resting it bent on a hard surface.',
              },
            },
          ],
        },
        {
          id: 'cubital-tunnel-syndrome-phase-2',
          order: 2,
          title: 'Restore Nerve Mobility',
          summary:
            'Add gentle ulnar nerve glides to restore neural mobility, keeping the dose non-irritating.',
          goal: 'Improve ulnar nerve mobility without provoking symptoms.',
          durationGuidance: 'Typically 2–4 weeks',
          entryCriteria: [
            'Night symptoms have started to ease',
            'Comfortable with splinting and activity modification',
          ],
          exitCriteria: [
            'Nerve glides done without symptoms intensifying or lingering afterward',
            'Symptoms becoming more intermittent than constant',
          ],
          educationPoints: [
            'Nerve glides are gentle, low-amplitude motions — never forced end-range holds.',
            'Symptoms should ease after a set; stop if tingling lingers or worsens.',
            'These complement, not replace, protecting the nerve from bending and pressure.',
          ],
          exercises: [
            {
              id: 'cubital-tunnel-syndrome-ulnar-nerve-glide',
              name: 'Ulnar nerve glide',
              aka: ['ulnar nerve floss', 'nerve gliding'],
              target: 'Ulnar nerve (neural mobility)',
              purpose:
                'Targets neural mobility, helping the ulnar nerve move freely through the cubital tunnel without irritation.',
              dose: { sets: 1, reps: '8–10', notes: 'Build to 2 sets as tolerated' },
              frequency: '1–2 times/day',
              progression:
                'Progress only if non-irritating; add the second set or a slightly larger range as tolerated.',
              regression: 'Reduce the range of motion if symptoms flare.',
              formCues: [
                'Gentle motion',
                'No long end-range hold',
                'Symptoms should ease after the set',
                'Stop if symptoms linger',
              ],
              painRule:
                'Tingling should not intensify and should not remain worse afterward.',
              diagram: {
                key: 'upper-limb-nerve-glide',
                altText:
                  'Person performing a gentle ulnar nerve glide, moving the arm and wrist through a comfortable range.',
              },
            },
          ],
        },
        {
          id: 'cubital-tunnel-syndrome-phase-3',
          order: 3,
          title: 'Posture, Shoulder & Return',
          summary:
            'Add postural and shoulder work and pace the return to activity, since the ulnar nerve runs the whole arm.',
          goal: 'Build durable control and return to activity with intermittent, stable symptoms.',
          durationGuidance: 'Typically 3–6 weeks',
          entryCriteria: [
            'Nerve glides tolerated without flare',
            'Symptoms intermittent rather than constant',
          ],
          exitCriteria: [
            'Symptoms intermittent rather than constant',
            'Strength stable',
            'Symptom triggers are modifiable and under control',
          ],
          educationPoints: [
            'The ulnar nerve travels the whole arm, so posture and shoulder mechanics matter.',
            'Return when numbness is intermittent (not constant) and strength is stable.',
            'Keep avoiding prolonged flexed-elbow sleep and direct pressure long-term.',
          ],
          exercises: [
            {
              id: 'cubital-tunnel-syndrome-postural-shoulder',
              name: 'Postural & shoulder work',
              aka: ['scapular setting', 'shoulder blade squeezes'],
              target: 'Scapular stabilizers and upper-back posture',
              purpose:
                'Improves posture and shoulder mechanics along the nerve’s path, reducing strain transmitted to the ulnar nerve.',
              dose: { sets: 2, reps: '10–12', holdSeconds: 5 },
              frequency: 'Daily',
              progression: 'Add light band resistance as control improves.',
              regression: 'Reduce reps or perform without resistance.',
              formCues: [
                'Sit or stand tall, chest open',
                'Gently draw the shoulder blades back and down',
                'Avoid shrugging the shoulders toward the ears',
                'Smooth, controlled motion',
              ],
              equipment: ['Optional light resistance band'],
              diagram: {
                key: 'scapular-retraction',
                altText:
                  'Person drawing the shoulder blades back and down to improve upper-back posture.',
              },
            },
            {
              id: 'cubital-tunnel-syndrome-return-pacing',
              name: 'Graded return & trigger pacing',
              target: 'Whole-arm load tolerance',
              purpose:
                'Reintroduces sport and work activity in steps while keeping the nerve’s known triggers under control.',
              dose: {
                notes:
                  'Gradually increase activity as symptoms stay intermittent and stable.',
              },
              frequency: 'Ongoing as you return to activity',
              progression:
                'Add volume or intensity only while numbness stays intermittent and strength is stable.',
              regression:
                'Scale back the aggravating activity and return to nerve protection if symptoms become more constant.',
              formCues: [
                'Advance only when symptoms remain intermittent',
                'Keep modifying the triggers (bending, leaning) as you ramp up',
                'Watch for any return of constant numbness or weakness',
              ],
              cautions: [
                'Stop progressing and seek review if weakness or constant numbness returns.',
              ],
              diagram: {
                key: 'anatomy-elbow',
                altText:
                  'Person gradually returning to elbow-loading activity while protecting the inner elbow.',
              },
            },
          ],
        },
      ],
    },
    evidence: {
      strength: 'moderate',
      bottomLine:
        'Mild cases often start with avoidance of prolonged elbow flexion/pressure and symptom-guided rehab; severe or progressive cases need specialist input.',
      whatHelps: [
        'Avoiding prolonged elbow flexion and direct pressure on the nerve',
        'Night extension splinting',
        'Patient education and activity modification',
        'Gentle ulnar nerve glides for neural mobility',
        'Postural and shoulder work along the nerve’s path',
      ],
      whatsUncertain: [
        'The added value of any single component (splinting vs. nerve gliding vs. education) over general activity modification is not clearly established.',
        'How reliably conservative care reverses moderate cases, and exactly when to escalate, is uncertain — progressive weakness or intrinsic wasting shifts care toward specialist management.',
        'The optimal splinting regimen and the role of nerve glides remain debated.',
      ],
      citationIds: [
        'cubital-hannaford-2024-review',
        'cubital-wieczorek-2024-conservative',
        'cubital-svernlov-2009-rct',
      ],
    },
    procedures: [
      {
        procedureId: 'corticosteroid',
        relevance: 'not-indicated',
        evidenceNote: 'Not a routine treatment for cubital tunnel syndrome.',
      },
      {
        procedureId: 'prp',
        relevance: 'not-indicated',
        evidenceNote: 'Not indicated.',
      },
      {
        procedureId: 'hyaluronic-acid',
        relevance: 'not-indicated',
        evidenceNote: 'Not indicated.',
      },
      {
        procedureId: 'shockwave',
        relevance: 'not-indicated',
        evidenceNote: 'ESWT: not indicated.',
      },
      {
        procedureId: 'ultrasound-guided',
        relevance: 'selected-cases',
        evidenceNote: 'Ultrasound-guided injection: selected cases only.',
      },
      {
        procedureId: 'tenotomy',
        relevance: 'not-indicated',
        evidenceNote: 'Percutaneous tenotomy: not indicated.',
      },
    ],
    returnToActivity: {
      criteria: [
        'Numbness is intermittent rather than constant',
        'Strength is stable',
        'Symptom triggers are modifiable and under control',
      ],
      timelineGuidance:
        'Mild cases may improve over 6 to 12 weeks; varies by severity, and progressive cases need specialist care.',
      reinjuryPrevention: [
        'Avoid prolonged flexed-elbow sleep',
        'Avoid direct pressure on the inner elbow',
        'Keep symptom triggers modified during sport and work',
      ],
    },
    faqs: [
      {
        q: 'Why are my ring and small fingers numb?',
        a: 'Those fingers are supplied by the ulnar nerve. When the nerve is irritated or compressed at the elbow (in the cubital tunnel), it can cause numbness and tingling there, often worse at night or when the elbow is bent.',
        citationIds: ['cubital-hannaford-2024-review'],
      },
      {
        q: 'Why are symptoms worse at night?',
        a: 'Many people sleep with the elbow fully bent, which stretches and compresses the ulnar nerve. A night extension splint or a loosely wrapped towel that keeps the elbow straighter often reduces night symptoms.',
        citationIds: ['cubital-svernlov-2009-rct'],
      },
      {
        q: 'When do I need to see a specialist?',
        a: 'Mild cases often improve with activity change and splinting over 6 to 12 weeks. Progressive hand weakness, wasting of the small hand muscles, or constant (rather than intermittent) numbness are more urgent and need prompt specialist evaluation.',
        citationIds: ['cubital-wieczorek-2024-conservative'],
      },
    ],
    relatedConditionIds: ['golfers-elbow', 'cervical-radiculopathy'],
    review: {
      status: 'physician-review-pending',
      contentVersion: '1.0.0',
    },
  },
}

export default moduleData
