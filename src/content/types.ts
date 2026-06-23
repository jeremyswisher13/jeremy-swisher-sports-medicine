/**
 * Content schema — the single source of truth for all clinical content.
 *
 * Design principles (see plan):
 *  - Organize by body region; sport is a tag, not a container.
 *  - Phases carry NO progress status. "Active phase" and "completed exercises"
 *    are per-patient state that lives in localStorage (see store/programStore),
 *    derived at render time. This is what fixes generic-phase reuse.
 *  - Citations are normalized: defined once in citations.ts, referenced by id.
 *  - No fabricated citations, URLs, stats, or video IDs anywhere.
 */

import type { ComponentType } from 'react'

export type IconComponent = ComponentType<{
  size?: number
  strokeWidth?: number
  className?: string
}>

// ---------------------------------------------------------------------------
// Enums / unions
// ---------------------------------------------------------------------------

export type BodyRegion =
  | 'shoulder'
  | 'elbow'
  | 'wrist-hand'
  | 'neck'
  | 'low-back'
  | 'hip-pelvis'
  | 'knee'
  | 'lower-leg'
  | 'ankle-foot'

export type SportTag =
  | 'running'
  | 'pickleball'
  | 'tennis'
  | 'golf'
  | 'basketball'
  | 'volleyball'
  | 'soccer'
  | 'cycling'
  | 'swimming'
  | 'lifting'
  | 'climbing'
  | 'throwing'
  | 'general'

/** Strength-of-evidence label, rendered as a visible badge. */
export type EvidenceStrength =
  | 'strong'
  | 'moderate'
  | 'limited'
  | 'mixed'
  | 'emerging'
  | 'expert-opinion'

export type ReviewStatus =
  | 'draft'
  | 'physician-review-pending'
  | 'physician-approved'

/** How appropriate the condition is for primary-care management. */
export type CareTier =
  | 'pc-core' // manage in primary-care sports medicine
  | 'pc-referral-trigger' // manage initially, with defined escalation criteria
  | 'borderline-specialist' // often co-managed/referred; included for triage value

export type CitationType =
  | 'guideline'
  | 'systematic-review'
  | 'meta-analysis'
  | 'rct'
  | 'cohort'
  | 'consensus'
  | 'narrative-review'

export type RedFlagUrgency = 'emergency' | 'urgent' | 'see-clinician'

export type ProcedureRelevanceLevel =
  | 'commonly-discussed'
  | 'selected-cases'
  | 'rarely'
  | 'not-indicated'

export type RecommendationBasis =
  | 'evidence-supported'
  | 'consensus-common-protocol'
  | 'theoretical-biologic-rationale'
  | 'safety-driven-physician-decision'
  | 'insufficient-evidence-variable-practice'

export type RecoveryEvidenceBasis = 'evidence-based' | 'expert-informed' | 'mixed'

/**
 * Keys into the SVG illustration registry (illustrations + diagrams.ts).
 * Every Exercise.diagram and Condition.anatomyDiagram must use one of these,
 * and diagrams.ts must provide a component for each — enforced at module load.
 */
export type DiagramKey =
  // --- Anatomy ---
  | 'anatomy-shoulder'
  | 'anatomy-elbow'
  | 'anatomy-wrist-thumb'
  | 'anatomy-cervical'
  | 'anatomy-lumbar'
  | 'anatomy-hip'
  | 'anatomy-knee'
  | 'anatomy-tibia'
  | 'anatomy-achilles'
  | 'anatomy-ankle'
  | 'anatomy-plantar'
  | 'anatomy-tendon-vs-nerve'
  // --- Movements: holds / isometrics ---
  | 'wall-sit'
  | 'isometric-ankle-hold'
  | 'cuff-isometric'
  | 'plank'
  | 'side-plank'
  // --- Movements: eccentrics / heavy-slow ---
  | 'heel-drop'
  | 'eccentric-wrist-extension'
  | 'eccentric-wrist-flexion'
  | 'decline-single-leg-squat'
  | 'nordic-hamstring'
  // --- Hip / glute ---
  | 'clamshell'
  | 'side-lying-hip-abduction'
  | 'glute-bridge'
  | 'hip-hike'
  | 'banded-lateral-walk'
  | 'hip-flexor-stretch'
  // --- Knee ---
  | 'straight-leg-raise'
  | 'step-down'
  | 'terminal-knee-extension'
  | 'quad-set'
  // --- Calf / foot ---
  | 'calf-raise'
  | 'single-leg-calf-raise'
  | 'plantar-fascia-stretch'
  | 'big-toe-extension'
  | 'ankle-balance'
  // --- Shoulder / scapula ---
  | 'scapular-row'
  | 'scapular-retraction'
  | 'pendulum'
  | 'external-rotation-band'
  | 'doorway-pec-stretch'
  | 'sleeper-stretch'
  // --- Spine / neck ---
  | 'chin-tuck'
  | 'curl-up'
  | 'bird-dog'
  | 'cat-camel'
  | 'prone-press-up'
  | 'hip-hinge'
  // --- Nerve glides ---
  | 'upper-limb-nerve-glide'
  | 'sciatic-nerve-glide'
  // --- Wrist / thumb ---
  | 'wrist-extensor-stretch'
  | 'wrist-flexor-stretch'
  | 'grip-squeeze'
  | 'thumb-tendon-glide'

// ---------------------------------------------------------------------------
// Media
// ---------------------------------------------------------------------------

export interface YouTubeRef {
  /** 11-char YouTube video id ONLY — never a full/marketing URL. */
  videoId: string
  /** Exact published video title. */
  title: string
  /** Exact channel name, for attribution. */
  channel: string
  channelUrl?: string
  /** Optional deep-link start time into a longer video. */
  startSeconds?: number
  /** Patient-visible only once true (Dr. Swisher sign-off). */
  approved: boolean
  /** Why this clip / what to watch for. */
  note?: string
}

export interface DiagramRef {
  key: DiagramKey
  caption?: string
  /** Required for accessibility. */
  altText: string
}

// ---------------------------------------------------------------------------
// Exercise
// ---------------------------------------------------------------------------

export interface ExerciseDose {
  sets?: number
  /** e.g. "8-12" or "10 each side". */
  reps?: string
  /** For isometrics / stretches. */
  holdSeconds?: number
  /** e.g. "3s lower" for eccentrics / heavy-slow resistance. */
  tempo?: string
  notes?: string
}

export interface Exercise {
  id: string
  name: string
  aka?: string[]
  /** Tissue/structure the exercise targets, e.g. "gluteus medius". */
  target: string
  /** Plain-language reason this exercise is included. */
  purpose: string
  dose: ExerciseDose
  /** "daily", "every other day", "3x/week". */
  frequency: string
  /** How to make it harder once tolerated. */
  progression: string
  /** How to scale it back if irritable. */
  regression: string
  /** 2-5 short form cues. */
  formCues: string[]
  cautions?: string[]
  /** e.g. "ok up to 3-4/10, settles by next morning". */
  painRule?: string
  equipment?: string[]
  diagram: DiagramRef
  video?: YouTubeRef
}

// ---------------------------------------------------------------------------
// Phased home exercise program (3-4 phases; NO status field)
// ---------------------------------------------------------------------------

export interface RehabPhase {
  /** Slug-scoped, e.g. "achilles-phase-2". */
  id: string
  order: number
  /** Condition-specific, not generic. */
  title: string
  summary: string
  goal: string
  /** Honest range, e.g. "typically 2-4 weeks". */
  durationGuidance: string
  /** What should be true to start this phase. */
  entryCriteria: string[]
  /** Progression criteria to advance to the next phase. */
  exitCriteria: string[]
  /** 2-5 key teaching points for this phase. */
  educationPoints: string[]
  exercises: Exercise[]
}

// ---------------------------------------------------------------------------
// Evidence (normalized: cite by id)
// ---------------------------------------------------------------------------

export interface Citation {
  /** e.g. "jospt-2018-achilles". */
  id: string
  label: string
  /** Org for guidelines; "First-author et al." for studies. */
  authorsOrOrg: string
  /** Journal or guideline body. */
  source: string
  year: number
  type: CitationType
  /** REAL, verifiable (DOI / PubMed / guideline page). */
  url: string
  /** One line, faithful to the source. */
  takeaway: string
  /** URL resolves AND claim matches the source. */
  verified: boolean
  /** ISO date the URL/claim was verified. */
  lastChecked?: string
}

export interface EvidenceSummary {
  strength: EvidenceStrength
  /** 1-2 sentences, plain language. */
  bottomLine: string
  /** Interventions with reasonable support. */
  whatHelps: string[]
  /** Honest unknowns / conflicting data (must be non-empty). */
  whatsUncertain: string[]
  citationIds: string[]
}

// ---------------------------------------------------------------------------
// Procedures
// ---------------------------------------------------------------------------

export interface ProcedureRelevance {
  procedureId: string
  relevance: ProcedureRelevanceLevel
  /** Condition-specific, honest note. */
  evidenceNote: string
  citationIds?: string[]
}

export interface Procedure {
  id: string
  title: string
  iconKey: string
  tag: string
  evidence: EvidenceStrength
  accent: 'teal' | 'orange' | 'blue' | 'violet' | 'graphite'
  summary: string
  bestFit: string[]
  questions: string[]
  education: {
    /** What the patient should understand before choosing the procedure. */
    decisionPoint: string
    /** What usually happens in clinic, in plain language. */
    whatHappens: string[]
    /** What this procedure is not designed to solve. */
    notFor: string[]
    /** Recovery/load-management expectations after the procedure. */
    aftercare: string[]
    /** Symptoms after the procedure that should trigger clinician contact. */
    callClinician: string[]
  }
  periProcedure?: ProcedurePeriProcedurePlan
  citationIds?: string[]
}

export interface ProcedureChecklistItem {
  title: string
  detail: string
  basis: RecommendationBasis
}

export interface ProcedureMedicationGuidance {
  item: string
  recommendation: string
  basis: RecommendationBasis
  patientText: string
  clinicianNote?: string
  neverStopWithoutApproval?: boolean
}

export interface ProcedureRecoveryStage {
  title: string
  timing: string
  patientGoal: string
  loadingGuidance: string
  basis: RecoveryEvidenceBasis
}

export interface ProcedureRecoveryCluster {
  id: string
  title: string
  appliesTo: string[]
  overview: string
  stages: ProcedureRecoveryStage[]
}

export interface ProcedurePeriProcedurePlan {
  title: string
  intro: string
  preChecklist: ProcedureChecklistItem[]
  medicationGuidance: ProcedureMedicationGuidance[]
  recoveryClusters: ProcedureRecoveryCluster[]
  warningSigns: string[]
  clinicianCaveats: string[]
  citationIds: string[]
}

// ---------------------------------------------------------------------------
// Return to activity / FAQ / review metadata
// ---------------------------------------------------------------------------

export interface ReturnToActivity {
  /** Objective-ish, patient-checkable criteria. */
  criteria: string[]
  /** Realistic range with a "varies" caveat. */
  timelineGuidance: string
  reinjuryPrevention: string[]
}

export interface FAQ {
  q: string
  a: string
  citationIds?: string[]
}

export interface ReviewMeta {
  status: ReviewStatus
  /** ISO date. */
  lastReviewed?: string
  reviewedBy?: string
  /** e.g. "1.0.0". */
  contentVersion: string
}

export interface RedFlag {
  text: string
  urgency: RedFlagUrgency
}

// ---------------------------------------------------------------------------
// Condition (the unit of content + the shareable page)
// ---------------------------------------------------------------------------

export interface Condition {
  /** Slug; must equal the filename and `slug`. */
  id: string
  slug: string
  /** Patient-friendly primary name. */
  name: string
  /** Short label for compact UI (cards, tabs). */
  shortName: string
  /** Legacy/medical/colloquial terms — powers search. */
  aka: string[]
  region: BodyRegion
  sportTags: SportTag[]
  careTier: CareTier
  oneLiner: string
  /** Punchy clinician-oriented summary (one short paragraph). */
  executiveSummary?: string

  /** Patient-friendly, 2-4 short paragraphs. */
  overview: string
  /** Plain description of the affected tissue/structure. */
  tissue: string
  anatomyDiagram?: DiagramRef
  /** Condition-level curated demonstration video (shown prominently). */
  video?: YouTubeRef

  causes: string[]
  riskFactors: string[]
  symptoms: string[]

  prognosis: {
    summary: string
    /** Honest range. */
    typicalTimeline: string
    encouragement?: string
  }

  redFlags: RedFlag[]
  selfCare: {
    dos: string[]
    donts: string[]
  }

  /** A short, clinic-style goal statement for the condition. */
  clinicalGoal: string

  hep: {
    overview: string
    phases: RehabPhase[]
  }

  evidence: EvidenceSummary
  procedures: ProcedureRelevance[]
  returnToActivity: ReturnToActivity
  faqs: FAQ[]

  relatedConditionIds?: string[]
  review: ReviewMeta
}

// ---------------------------------------------------------------------------
// Region
// ---------------------------------------------------------------------------

/**
 * What each condition file default-exports. Citations are condition-specific
 * sources that get merged into the shared registry by conditions/index.ts.
 */
export interface ConditionModule {
  condition: Condition
  citations?: Citation[]
}

export interface Region {
  id: BodyRegion
  name: string
  iconKey: string
  order: number
  blurb: string
}

export interface SportMeta {
  id: SportTag
  name: string
  iconKey: string
}

// ---------------------------------------------------------------------------
// Search
// ---------------------------------------------------------------------------

export type SearchRecordType =
  | 'condition'
  | 'exercise'
  | 'procedure'
  | 'region'
  | 'pathway'

export interface SearchRecord {
  type: SearchRecordType
  id: string
  title: string
  subtitle: string
  /** Hash route, e.g. "/condition/achilles". */
  route: string
  keywords: string[]
}
