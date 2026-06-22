import type { SportTag } from './types'

/**
 * Sport-specific "medicine" hubs: a curated entry point for each sport with its
 * common injuries, warm-up, prevention, and return-to-play guidance. Educational
 * and physician-review pending, like the rest of the content.
 */
export interface SportPathway {
  id: string
  name: string
  sportTag: SportTag
  iconKey: string
  tagline: string
  overview: string
  /** Condition ids most relevant to this sport (validated against content). */
  commonConditionIds: string[]
  warmup: string[]
  prevention: string[]
  returnToPlay: string[]
}

export const sportPathways: SportPathway[] = [
  {
    id: 'pickleball',
    name: 'Pickleball Medicine',
    sportTag: 'pickleball',
    iconKey: 'pickleball',
    tagline: 'Play more, flare less — the load-smart way.',
    overview:
      'Pickleball injuries are usually overuse and quick-direction-change problems, not freak accidents. Most respond to load management, targeted strength, and a gradual ramp in court time rather than full rest. The fastest players to recover treat soreness as feedback, not failure.',
    commonConditionIds: [
      'tennis-elbow',
      'rotator-cuff-tendinopathy',
      'achilles-tendinopathy',
      'lateral-ankle-sprain',
      'patellofemoral-pain',
      'low-back-pain',
      'plantar-heel-pain',
    ],
    warmup: [
      '5–8 minutes of easy footwork: side shuffles, split-steps, and gentle lunges',
      'Shoulder circles and band external rotations before serving',
      'Wrist and forearm mobility for paddle control',
      'A few rallies at half intensity before competitive points',
    ],
    prevention: [
      'Build calf, hip, and grip strength 2×/week in the off-court program',
      'Increase weekly court time gradually (roughly ≤10% per week)',
      'Use court shoes with good lateral support, not running shoes',
      'Respect next-day soreness — a flare that lasts is a signal to scale back',
    ],
    returnToPlay: [
      'Pain settles within 24 hours of play and is not climbing week to week',
      'Confident with quick direction changes and overhead serves',
      'Rebuild from drills → half-intensity rallies → competitive games',
    ],
  },
  {
    id: 'golf',
    name: 'Golf Medicine',
    sportTag: 'golf',
    iconKey: 'golf',
    tagline: 'Protect the rotation engine: back, hips, and wrists.',
    overview:
      'Golf loads the low back, lead wrist, and elbows through repeated high-speed rotation. Most golf complaints are load-and-technique problems that improve with mobility, trunk and hip strength, and sensible practice volume — without giving up the game.',
    commonConditionIds: [
      'low-back-pain',
      'golfers-elbow',
      'tennis-elbow',
      'wrist-sprain-tfcc',
      'de-quervain-tenosynovitis',
      'rotator-cuff-tendinopathy',
      'hip-osteoarthritis',
    ],
    warmup: [
      'Thoracic rotations and hip openers before the first swing',
      'Wrist and forearm mobility; gentle grip activation',
      'Half-speed swings building to full speed over several reps',
      'A short putting/chipping ramp before full drives',
    ],
    prevention: [
      'Train hip and trunk rotation strength and control 2×/week',
      'Cap range-ball volume; long buckets are a common flare trigger',
      'Warm up before hitting driver hard, especially in cold weather',
      'Address grip and swing mechanics with a pro if pain is recurrent',
    ],
    returnToPlay: [
      'Pain-free trunk rotation and grip; no next-day flare after practice',
      'Progress chipping → irons → driver, then 9 holes → 18 holes',
      'Keep a weekly trunk/hip strength habit in-season',
    ],
  },
  {
    id: 'basketball',
    name: 'Basketball Medicine',
    sportTag: 'basketball',
    iconKey: 'basketball',
    tagline: 'Jump, land, and cut without the next-day price.',
    overview:
      'Basketball stresses ankles, knees, and tendons through jumping, landing, and rapid cutting. Ankle sprains and jumping-knee tendon pain are the headline issues. Strong calves and hips, good landing mechanics, and a graded return are the best protection.',
    commonConditionIds: [
      'lateral-ankle-sprain',
      'patellar-tendinopathy',
      'achilles-tendinopathy',
      'mcl-sprain',
      'patellofemoral-pain',
      'medial-tibial-stress-syndrome',
      'low-back-pain',
    ],
    warmup: [
      'Dynamic lower-body warm-up: leg swings, lunges, and ankle mobility',
      'Low-amplitude hops and pogos to prime the calves and tendons',
      'Progressive sprints and cuts before live play',
      'Balance/landing reps if returning from an ankle or knee issue',
    ],
    prevention: [
      'Single-leg calf and hip strength 2×/week protects ankles and tendons',
      'Balance and landing-mechanics drills reduce repeat ankle sprains',
      'Manage spikes in practice/game volume, especially early season',
      'Use a brace or tape for higher-risk play after a prior ankle sprain',
    ],
    returnToPlay: [
      'Single-leg hop and landing are symmetric and pain stays quiet next day',
      'Confident cutting and decelerating at speed',
      'Ramp from shooting → drills → scrimmage → full game',
    ],
  },
  {
    id: 'running',
    name: 'Running Medicine',
    sportTag: 'running',
    iconKey: 'running',
    tagline: 'Most running injuries are training-load injuries.',
    overview:
      'The majority of running injuries trace back to how fast mileage, speed, or hills increased — not to one misstep. Strength for the calf, hip, and foot plus a patient, progressive return usually beats complete rest. Pain that settles by the next day is generally workable.',
    commonConditionIds: [
      'patellofemoral-pain',
      'it-band-syndrome',
      'achilles-tendinopathy',
      'medial-tibial-stress-syndrome',
      'plantar-heel-pain',
      'proximal-hamstring-tendinopathy',
      'patellar-tendinopathy',
      'gluteal-tendinopathy',
    ],
    warmup: [
      'Brisk walk plus a few minutes of easy jogging before harder efforts',
      'Leg swings, lunges, and ankle/hip mobility',
      'Short strides to prime turnover before speed sessions',
    ],
    prevention: [
      'Increase weekly mileage and intensity gradually (roughly ≤10%/week)',
      'Strength-train the calf, hip, and foot 2×/week',
      'Alternate hard and easy days; don’t stack speed, hills, and long runs',
      'Replace worn shoes and progress surface/terrain changes slowly',
    ],
    returnToPlay: [
      'Pain-free walking and easy jogging without a next-day flare',
      'Use a walk–run progression, advancing time before pace, then hills/speed',
      'Keep a weekly strength habit to protect against recurrence',
    ],
  },
]

export const sportPathwayById = new Map(sportPathways.map((p) => [p.id, p]))
