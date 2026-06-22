/**
 * Reusable inline-SVG illustration components for patient education.
 *
 * Every illustration is a small, theme-aware line drawing on a 120x120 canvas
 * with ~10px interior padding. The base figure/anatomy is drawn in
 * `currentColor`; the worked tissue or moving part is highlighted in
 * `var(--cobalt)`, and pain/affected spots use `var(--orange)`.
 *
 * The registry below provides exactly one component for every `DiagramKey`,
 * which is enforced at compile time by the `Record<DiagramKey, Illustration>`
 * type annotation on `illustrations`.
 */
import type { FC, ReactNode } from 'react'
import type { DiagramKey } from '../content/types'

export type Illustration = FC<{ className?: string; title?: string }>

// ---------------------------------------------------------------------------
// Shared style + primitives
// ---------------------------------------------------------------------------

/** Base stroke style for the neutral figure / anatomy outline. */
const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

/** Highlight stroke style for the worked tissue / moving part. */
const hi = {
  fill: 'none',
  stroke: 'var(--cobalt)',
  strokeWidth: 3,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

/**
 * SVG canvas wrapper. Sets the shared viewBox, accessibility attributes and
 * a sensible default aria-label that callers can override via `title`.
 */
function Svg({
  label,
  className,
  title,
  children,
}: {
  label: string
  className?: string
  title?: string
  children: ReactNode
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      role="img"
      aria-label={title ?? label}
      className={className}
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  )
}

/** A simple stick-figure head as a circle. */
function Head({ cx, cy, r = 8 }: { cx: number; cy: number; r?: number }) {
  return <circle cx={cx} cy={cy} r={r} {...base} />
}

/** A solid floor line near the bottom of the canvas. */
function Floor({ y = 104 }: { y?: number }) {
  return <line x1={10} y1={y} x2={110} y2={y} {...base} />
}

/** A vertical wall line, defaults to the left edge. */
function Wall({ x = 18 }: { x?: number }) {
  return <line x1={x} y1={14} x2={x} y2={106} {...base} />
}

/** A box step drawn against the floor (top edge + riser). */
function Step({ x = 60, top = 80, floorY = 104 }: { x?: number; top?: number; floorY?: number }) {
  return (
    <g {...base}>
      <line x1={x} y1={top} x2={110} y2={top} />
      <line x1={x} y1={top} x2={x} y2={floorY} />
    </g>
  )
}

/** A curved motion arrow in the highlight color. */
function MotionArrow({ d, head }: { d: string; head: string }) {
  return (
    <g {...hi} strokeWidth={2.5}>
      <path d={d} />
      <path d={head} />
    </g>
  )
}

/** An orange "pain / affected area" marker dot. */
function PainDot({ cx, cy, r = 3.4 }: { cx: number; cy: number; r?: number }) {
  return <circle cx={cx} cy={cy} r={r} fill="var(--orange)" stroke="none" />
}

// ===========================================================================
// ANATOMY
// ===========================================================================

const AnatomyShoulder: Illustration = ({ className, title }) => (
  <Svg label="Shoulder anatomy" className={className} title={title}>
    {/* humerus shaft + scapula/torso edge */}
    <path d="M60 26 L60 52" {...base} />
    <path d="M40 40 Q34 64 40 92" {...base} />
    <path d="M60 52 L84 100" {...base} />
    {/* humeral head ball-and-socket */}
    <circle cx={60} cy={40} r={14} {...base} />
    {/* rotator cuff cap (highlight) */}
    <path d="M48 32 Q60 20 72 32" {...hi} />
    <PainDot cx={60} cy={40} />
  </Svg>
)

const AnatomyElbow: Illustration = ({ className, title }) => (
  <Svg label="Elbow anatomy" className={className} title={title}>
    {/* upper arm + forearm bones bent at the elbow */}
    <path d="M26 26 L58 58" {...base} />
    <path d="M58 58 L98 70" {...base} />
    {/* joint hinge */}
    <circle cx={58} cy={58} r={8} {...base} />
    {/* common tendon attachment (highlight, lateral epicondyle) */}
    <path d="M58 58 Q70 50 88 52" {...hi} />
    <PainDot cx={66} cy={54} />
  </Svg>
)

const AnatomyWristThumb: Illustration = ({ className, title }) => (
  <Svg label="Wrist and thumb anatomy" className={className} title={title}>
    {/* forearm + hand block */}
    <path d="M20 84 L52 70" {...base} />
    <path d="M52 70 L92 56" {...base} />
    {/* wrist joint */}
    <circle cx={52} cy={70} r={6} {...base} />
    {/* thumb */}
    <path d="M70 62 Q82 50 90 40" {...base} />
    {/* thumb-side tendons (highlight) */}
    <path d="M52 70 Q66 58 86 44" {...hi} />
    <PainDot cx={72} cy={56} />
  </Svg>
)

const AnatomyCervical: Illustration = ({ className, title }) => (
  <Svg label="Cervical spine anatomy" className={className} title={title}>
    {/* head profile */}
    <path d="M70 18 Q88 22 86 44 Q84 56 70 56" {...base} />
    {/* neck curve of vertebrae */}
    <path d="M64 54 Q58 70 62 92" {...base} />
    {/* cervical vertebrae stacked (highlight) */}
    <g {...hi}>
      <circle cx={60} cy={60} r={3.2} />
      <circle cx={59} cy={70} r={3.2} />
      <circle cx={60} cy={80} r={3.2} />
      <circle cx={62} cy={90} r={3.2} />
    </g>
  </Svg>
)

const AnatomyLumbar: Illustration = ({ className, title }) => (
  <Svg label="Lumbar spine anatomy" className={className} title={title}>
    {/* spinal column curve */}
    <path d="M58 16 Q48 60 58 104" {...base} />
    {/* lumbar vertebrae stacked (highlight) */}
    <g {...hi}>
      <rect x={52} y={62} width={14} height={8} rx={2} />
      <rect x={51} y={74} width={15} height={8} rx={2} />
      <rect x={52} y={86} width={14} height={8} rx={2} />
    </g>
    <PainDot cx={70} cy={82} />
  </Svg>
)

const AnatomyHip: Illustration = ({ className, title }) => (
  <Svg label="Hip anatomy" className={className} title={title}>
    {/* pelvis arch */}
    <path d="M30 40 Q60 28 90 40" {...base} />
    {/* femur */}
    <path d="M52 56 L44 102" {...base} />
    {/* hip joint socket + ball (highlight) */}
    <circle cx={52} cy={52} r={11} {...hi} />
    <circle cx={52} cy={52} r={4.5} {...base} />
    <PainDot cx={52} cy={52} r={3} />
  </Svg>
)

const AnatomyKnee: Illustration = ({ className, title }) => (
  <Svg label="Knee anatomy" className={className} title={title}>
    {/* femur + tibia */}
    <path d="M44 18 L46 54" {...base} />
    <path d="M46 66 L44 104" {...base} />
    {/* patella */}
    <circle cx={58} cy={56} r={8} {...base} />
    {/* patellar tendon (highlight) */}
    <path d="M58 64 L56 86" {...hi} />
    <PainDot cx={58} cy={76} />
  </Svg>
)

const AnatomyTibia: Illustration = ({ className, title }) => (
  <Svg label="Tibia anatomy" className={className} title={title}>
    {/* knee + ankle reference */}
    <path d="M44 22 L40 30" {...base} />
    <path d="M50 100 L74 100" {...base} />
    {/* the shin bone (highlight) */}
    <path d="M48 28 L58 96" {...hi} />
    {/* stress line markers */}
    <PainDot cx={52} cy={64} />
    <PainDot cx={54} cy={76} />
  </Svg>
)

const AnatomyAchilles: Illustration = ({ className, title }) => (
  <Svg label="Achilles tendon anatomy" className={className} title={title}>
    {/* lower leg + foot side profile */}
    <path d="M58 18 L56 70" {...base} />
    <path d="M56 70 L46 96 L92 96" {...base} />
    {/* calf muscle belly */}
    <path d="M64 28 Q76 50 64 68" {...base} />
    {/* achilles tendon (highlight) */}
    <path d="M56 68 L50 94" {...hi} />
    <PainDot cx={52} cy={84} />
  </Svg>
)

const AnatomyAnkle: Illustration = ({ className, title }) => (
  <Svg label="Ankle anatomy" className={className} title={title}>
    {/* shin */}
    <path d="M56 20 L54 60" {...base} />
    {/* foot */}
    <path d="M54 72 L44 92 L96 92" {...base} />
    {/* ankle joint + ligaments (highlight) */}
    <circle cx={54} cy={66} r={7} {...base} />
    <path d="M54 66 L42 86" {...hi} />
    <path d="M54 66 L68 84" {...hi} />
    <PainDot cx={50} cy={78} />
  </Svg>
)

const AnatomyPlantar: Illustration = ({ className, title }) => (
  <Svg label="Plantar fascia anatomy" className={className} title={title}>
    {/* side-of-foot outline */}
    <path d="M22 60 Q26 40 44 42 L96 44 Q104 46 102 56 L100 86 L26 86 Q18 86 22 60 Z" {...base} />
    {/* heel */}
    <circle cx={32} cy={80} r={3} {...base} />
    {/* plantar fascia band (highlight) along the sole */}
    <path d="M30 84 Q60 90 96 80" {...hi} />
    <PainDot cx={36} cy={84} />
  </Svg>
)

const AnatomyTendonVsNerve: Illustration = ({ className, title }) => (
  <Svg label="Tendon versus nerve" className={className} title={title}>
    {/* tendon: a thick straight cord (highlight) */}
    <path d="M30 30 L30 96" {...hi} strokeWidth={5} />
    {/* nerve: a thin branching cord with offshoots (currentColor) */}
    <path d="M84 26 L84 98" {...base} strokeWidth={1.6} />
    <g {...base} strokeWidth={1.6}>
      <path d="M84 44 L98 38" />
      <path d="M84 60 L70 56" />
      <path d="M84 78 L98 74" />
    </g>
  </Svg>
)

// ===========================================================================
// HOLDS / ISOMETRICS
// ===========================================================================

const WallSit: Illustration = ({ className, title }) => (
  <Svg label="Wall sit" className={className} title={title}>
    <Wall x={26} />
    <Floor />
    {/* seated figure with back on wall, thighs horizontal */}
    <Head cx={40} cy={40} />
    <path d="M30 48 L40 64" {...base} />
    {/* thigh (horizontal) + shin (vertical down to floor) */}
    <path d="M30 64 L70 64" {...hi} />
    <path d="M70 64 L70 104" {...base} />
    {/* arm resting on thigh */}
    <path d="M40 52 L60 60" {...base} />
  </Svg>
)

const IsometricAnkleHold: Illustration = ({ className, title }) => (
  <Svg label="Isometric ankle hold" className={className} title={title}>
    <Floor />
    {/* lower leg pressing against a fixed surface */}
    <path d="M50 24 L50 78" {...base} />
    {/* foot pushed into a wall block (highlight = ankle effort) */}
    <path d="M50 78 L74 88" {...hi} />
    <line x1={84} y1={62} x2={84} y2={104} {...base} />
    <line x1={74} y1={88} x2={84} y2={88} {...hi} />
    <PainDot cx={68} cy={86} />
  </Svg>
)

const CuffIsometric: Illustration = ({ className, title }) => (
  <Svg label="Rotator cuff isometric" className={className} title={title}>
    <Wall x={92} />
    {/* standing figure pressing forearm into wall */}
    <Head cx={44} cy={30} />
    <path d="M44 38 L44 76" {...base} />
    <path d="M44 76 L36 104" {...base} />
    <path d="M44 76 L52 104" {...base} />
    {/* upper arm tucked, forearm to wall (highlight = shoulder) */}
    <path d="M44 48 L62 52" {...hi} />
    <path d="M62 52 L88 50" {...hi} />
    <PainDot cx={50} cy={48} />
  </Svg>
)

const Plank: Illustration = ({ className, title }) => (
  <Svg label="Forearm plank" className={className} title={title}>
    <Floor />
    {/* straight body line on forearms + toes */}
    <Head cx={30} cy={60} r={7} />
    <path d="M37 62 L96 86" {...hi} />
    {/* forearm support */}
    <path d="M34 66 L40 90 L30 90" {...base} />
    {/* legs to toes */}
    <path d="M96 86 L100 102" {...base} />
  </Svg>
)

const SidePlank: Illustration = ({ className, title }) => (
  <Svg label="Side plank" className={className} title={title}>
    <Floor />
    {/* angled straight body, one arm propping */}
    <Head cx={28} cy={40} r={7} />
    <path d="M34 44 L98 96" {...hi} />
    {/* support arm down to floor */}
    <path d="M36 48 L34 104" {...base} />
    {/* top arm raised */}
    <path d="M44 52 L52 30" {...base} />
  </Svg>
)

// ===========================================================================
// ECCENTRICS / HEAVY-SLOW
// ===========================================================================

const HeelDrop: Illustration = ({ className, title }) => (
  <Svg label="Heel drop" className={className} title={title}>
    <Floor />
    <Step x={64} top={76} />
    {/* figure on step edge, one heel dropping below */}
    <Head cx={40} cy={28} />
    <path d="M40 36 L40 70" {...base} />
    {/* support leg on step */}
    <path d="M40 70 L60 76" {...base} />
    {/* working leg, heel dropping below step (highlight calf) */}
    <path d="M40 70 L66 96" {...hi} />
    <MotionArrow d="M86 78 Q92 88 86 98" head="M86 98 L82 94 M86 98 L90 93" />
    <PainDot cx={56} cy={86} />
  </Svg>
)

const EccentricWristExtension: Illustration = ({ className, title }) => (
  <Svg label="Eccentric wrist extension" className={className} title={title}>
    {/* forearm horizontal, palm down */}
    <path d="M22 56 L66 56" {...base} />
    {/* hand lowering with weight (highlight back of wrist) */}
    <path d="M66 56 Q74 64 78 80" {...hi} />
    {/* dumbbell */}
    <line x1={72} y1={86} x2={86} y2={86} {...base} />
    <line x1={72} y1={80} x2={72} y2={92} {...base} />
    <line x1={86} y1={80} x2={86} y2={92} {...base} />
    <MotionArrow d="M52 40 Q66 44 70 64" head="M70 64 L66 60 M70 64 L73 58" />
  </Svg>
)

const EccentricWristFlexion: Illustration = ({ className, title }) => (
  <Svg label="Eccentric wrist flexion" className={className} title={title}>
    {/* forearm horizontal, palm up */}
    <path d="M22 56 L66 56" {...base} />
    {/* hand lowering, palm up (highlight underside of wrist) */}
    <path d="M66 56 Q76 62 80 80" {...hi} />
    {/* dumbbell */}
    <line x1={74} y1={86} x2={88} y2={86} {...base} />
    <line x1={74} y1={80} x2={74} y2={92} {...base} />
    <line x1={88} y1={80} x2={88} y2={92} {...base} />
    <MotionArrow d="M52 72 Q66 70 72 50" head="M72 50 L68 54 M72 50 L75 55" />
  </Svg>
)

const DeclineSingleLegSquat: Illustration = ({ className, title }) => (
  <Svg label="Decline single-leg squat" className={className} title={title}>
    {/* decline board */}
    <line x1={18} y1={88} x2={92} y2={104} {...base} />
    {/* figure balancing, knee bent forward (highlight quad/knee) */}
    <Head cx={52} cy={26} />
    <path d="M52 34 L52 62" {...base} />
    {/* working bent leg */}
    <path d="M52 62 L66 80" {...hi} />
    <path d="M66 80 L60 96" {...hi} />
    {/* free leg held out */}
    <path d="M52 62 L34 70" {...base} />
    <PainDot cx={66} cy={80} />
  </Svg>
)

const NordicHamstring: Illustration = ({ className, title }) => (
  <Svg label="Nordic hamstring curl" className={className} title={title}>
    <Floor />
    {/* kneeling, body leaning forward, ankles anchored */}
    <Head cx={36} cy={40} />
    {/* torso lowering forward (highlight hamstrings line along back of thigh) */}
    <path d="M42 46 L66 70" {...base} />
    {/* thigh */}
    <path d="M66 70 L86 88" {...hi} />
    {/* shin pinned to floor */}
    <path d="M86 88 L98 104" {...base} />
    {/* anchor over ankle */}
    <path d="M90 96 L106 96" {...base} />
    <MotionArrow d="M44 60 Q34 70 36 84" head="M36 84 L32 80 M36 84 L40 81" />
  </Svg>
)

// ===========================================================================
// HIP / GLUTE
// ===========================================================================

const Clamshell: Illustration = ({ className, title }) => (
  <Svg label="Clamshell" className={className} title={title}>
    <Floor />
    {/* side-lying figure, knees bent, top knee opening */}
    <Head cx={26} cy={70} r={7} />
    <path d="M32 72 L62 80" {...base} />
    {/* bottom leg */}
    <path d="M62 80 L82 86 L96 100" {...base} />
    {/* top leg opening up (highlight hip) */}
    <path d="M62 80 L84 70" {...hi} />
    <path d="M84 70 L78 88" {...hi} />
    <MotionArrow d="M88 62 Q98 66 96 78" head="M96 78 L92 75 M96 78 L99 73" />
    <PainDot cx={62} cy={80} />
  </Svg>
)

const SideLyingHipAbduction: Illustration = ({ className, title }) => (
  <Svg label="Side-lying hip abduction" className={className} title={title}>
    <Floor />
    {/* side-lying figure, bottom leg down, top leg lifting straight */}
    <Head cx={24} cy={66} r={7} />
    <path d="M30 68 L62 76" {...base} />
    {/* bottom leg */}
    <path d="M62 76 L96 96" {...base} />
    {/* top leg lifted (highlight) */}
    <path d="M62 76 L98 64" {...hi} />
    <MotionArrow d="M84 50 Q94 56 90 70" head="M90 70 L86 67 M90 70 L93 64" />
    <PainDot cx={58} cy={74} />
  </Svg>
)

const GluteBridge: Illustration = ({ className, title }) => (
  <Svg label="Glute bridge" className={className} title={title}>
    <Floor />
    {/* supine figure, hips lifted */}
    <Head cx={24} cy={88} r={7} />
    {/* shoulders to lifted hips (highlight glutes/hip rise) */}
    <path d="M31 88 L60 64" {...base} />
    <path d="M60 64 L80 76" {...hi} />
    {/* shins down to floor */}
    <path d="M80 76 L86 104" {...base} />
    <MotionArrow d="M58 54 Q66 48 74 54" head="M74 54 L69 53 M74 54 L73 49" />
    <PainDot cx={68} cy={70} />
  </Svg>
)

const HipHike: Illustration = ({ className, title }) => (
  <Svg label="Hip hike" className={className} title={title}>
    <Step x={42} top={86} floorY={104} />
    {/* standing on a step, dropping/hiking the opposite pelvis */}
    <Head cx={62} cy={26} />
    <path d="M62 34 L62 60" {...base} />
    {/* pelvis tilt line (highlight) */}
    <path d="M50 60 L74 56" {...hi} />
    {/* stance leg on step */}
    <path d="M58 60 L56 86" {...base} />
    {/* free leg hanging lower */}
    <path d="M70 58 L74 100" {...base} />
    <MotionArrow d="M82 70 Q88 78 82 88" head="M82 88 L78 84 M82 88 L86 84" />
  </Svg>
)

const BandedLateralWalk: Illustration = ({ className, title }) => (
  <Svg label="Banded lateral walk" className={className} title={title}>
    <Floor />
    {/* semi-squat figure with band around legs, stepping sideways */}
    <Head cx={56} cy={30} />
    <path d="M56 38 L56 60" {...base} />
    {/* two legs spread in a wide stance */}
    <path d="M56 60 L40 90 L38 104" {...base} />
    <path d="M56 60 L74 90 L78 104" {...base} />
    {/* resistance band around shins (highlight) */}
    <path d="M40 90 Q56 84 74 90" {...hi} />
    <MotionArrow d="M84 84 Q98 86 98 96" head="M98 96 L93 95 M98 96 L97 90" />
  </Svg>
)

const HipFlexorStretch: Illustration = ({ className, title }) => (
  <Svg label="Hip flexor stretch" className={className} title={title}>
    <Floor />
    {/* half-kneeling lunge, back hip extended */}
    <Head cx={50} cy={28} />
    <path d="M50 36 L50 64" {...base} />
    {/* front leg bent */}
    <path d="M50 64 L70 80 L70 104" {...base} />
    {/* back leg / hip extended (highlight stretched front of hip) */}
    <path d="M50 64 L30 92" {...hi} />
    <path d="M30 92 L22 104" {...base} />
    <PainDot cx={44} cy={70} />
  </Svg>
)

// ===========================================================================
// KNEE
// ===========================================================================

const StraightLegRaise: Illustration = ({ className, title }) => (
  <Svg label="Straight leg raise" className={className} title={title}>
    <Floor />
    {/* supine figure, one leg lifted straight */}
    <Head cx={20} cy={88} r={7} />
    <path d="M27 88 L58 88" {...base} />
    {/* bent leg planted */}
    <path d="M58 88 L70 70 L80 88" {...base} />
    {/* lifted straight leg (highlight quad) */}
    <path d="M58 88 L96 60" {...hi} />
    <MotionArrow d="M82 48 Q92 54 90 66" head="M90 66 L86 63 M90 66 L93 60" />
  </Svg>
)

const StepDown: Illustration = ({ className, title }) => (
  <Svg label="Step down" className={className} title={title}>
    <Floor />
    <Step x={36} top={70} />
    {/* figure on step, lowering one foot toward floor */}
    <Head cx={54} cy={24} />
    <path d="M54 32 L54 56" {...base} />
    {/* stance leg bending (highlight knee control) */}
    <path d="M54 56 L48 70" {...hi} />
    {/* lowering leg reaching to floor */}
    <path d="M54 56 L72 86 L76 104" {...base} />
    <MotionArrow d="M84 78 Q90 88 84 98" head="M84 98 L80 94 M84 98 L88 94" />
    <PainDot cx={50} cy={66} />
  </Svg>
)

const TerminalKneeExtension: Illustration = ({ className, title }) => (
  <Svg label="Terminal knee extension" className={className} title={title}>
    <Floor />
    <Wall x={96} />
    {/* standing, band behind knee, straightening last few degrees */}
    <Head cx={44} cy={28} />
    <path d="M44 36 L44 60" {...base} />
    {/* leg straightening (highlight knee) */}
    <path d="M44 60 L46 84" {...hi} />
    <path d="M46 84 L44 104" {...base} />
    {/* band from behind knee to wall */}
    <path d="M50 70 L96 64" {...base} strokeDasharray="4 4" />
    <PainDot cx={47} cy={72} />
  </Svg>
)

const QuadSet: Illustration = ({ className, title }) => (
  <Svg label="Quad set" className={className} title={title}>
    <Floor />
    {/* long-sitting, leg flat, pressing knee down / tightening quad */}
    <Head cx={22} cy={56} r={7} />
    <path d="M28 60 L40 78" {...base} />
    {/* thigh flat to floor (highlight quad contraction) */}
    <path d="M40 90 L80 90" {...hi} />
    {/* small towel roll under knee */}
    <circle cx={66} cy={96} r={5} {...base} />
    {/* foot */}
    <path d="M80 90 L86 80" {...base} />
    <MotionArrow d="M50 78 Q56 84 50 90" head="M50 90 L46 86 M50 90 L54 86" />
  </Svg>
)

// ===========================================================================
// CALF / FOOT
// ===========================================================================

const CalfRaise: Illustration = ({ className, title }) => (
  <Svg label="Calf raise" className={className} title={title}>
    <Floor />
    {/* standing figure rising onto both toes */}
    <Head cx={56} cy={26} />
    <path d="M56 34 L56 64" {...base} />
    {/* legs (highlight calves) */}
    <path d="M56 64 L48 92" {...hi} />
    <path d="M56 64 L64 92" {...hi} />
    {/* lifted heels — feet on toes */}
    <path d="M48 92 L42 100" {...base} />
    <path d="M64 92 L70 100" {...base} />
    <MotionArrow d="M84 84 Q90 76 84 68" head="M84 68 L80 72 M84 68 L88 72" />
  </Svg>
)

const SingleLegCalfRaise: Illustration = ({ className, title }) => (
  <Svg label="Single-leg calf raise" className={className} title={title}>
    <Floor />
    {/* one-leg rise onto toes, other knee bent up */}
    <Head cx={54} cy={26} />
    <path d="M54 34 L54 62" {...base} />
    {/* working leg (highlight calf) */}
    <path d="M54 62 L54 94 L48 102" {...hi} />
    {/* lifted other leg, bent */}
    <path d="M54 62 L72 76 L66 92" {...base} />
    <MotionArrow d="M84 84 Q90 76 84 68" head="M84 68 L80 72 M84 68 L88 72" />
  </Svg>
)

const PlantarFasciaStretch: Illustration = ({ className, title }) => (
  <Svg label="Plantar fascia stretch" className={className} title={title}>
    {/* foot held, toes pulled up to stretch the sole */}
    <path d="M22 80 L66 80" {...base} />
    {/* heel + arch */}
    <path d="M66 80 L86 80" {...base} />
    {/* toes pulled back (highlight stretched fascia along sole) */}
    <path d="M86 80 Q96 78 98 62" {...hi} />
    <path d="M30 84 Q60 92 92 76" {...hi} strokeDasharray="3 4" />
    <MotionArrow d="M96 56 Q100 48 94 42" head="M94 42 L90 46 M94 42 L98 46" />
    <PainDot cx={36} cy={84} />
  </Svg>
)

const BigToeExtension: Illustration = ({ className, title }) => (
  <Svg label="Big toe extension" className={className} title={title}>
    {/* foot side profile, big toe lifting */}
    <path d="M22 78 Q24 64 40 64 L76 64" {...base} />
    <path d="M22 78 L82 78" {...base} />
    {/* big toe extending up (highlight) */}
    <path d="M76 64 Q90 60 92 44" {...hi} />
    <MotionArrow d="M94 40 Q98 32 92 26" head="M92 26 L88 30 M92 26 L96 30" />
  </Svg>
)

const AnkleBalance: Illustration = ({ className, title }) => (
  <Svg label="Single-leg ankle balance" className={className} title={title}>
    <Floor />
    {/* single-leg stance, arms out for balance */}
    <Head cx={56} cy={26} />
    <path d="M56 34 L56 64" {...base} />
    {/* arms out */}
    <path d="M56 44 L36 38" {...base} />
    <path d="M56 44 L76 38" {...base} />
    {/* stance leg + ankle (highlight) */}
    <path d="M56 64 L56 96 L50 104" {...hi} />
    {/* lifted leg */}
    <path d="M56 64 L70 78 L66 92" {...base} />
    <PainDot cx={56} cy={98} />
  </Svg>
)

// ===========================================================================
// SHOULDER / SCAPULA
// ===========================================================================

const ScapularRow: Illustration = ({ className, title }) => (
  <Svg label="Scapular row" className={className} title={title}>
    <Wall x={100} />
    {/* standing figure pulling a band toward the body */}
    <Head cx={40} cy={30} />
    <path d="M40 38 L40 78" {...base} />
    <path d="M40 78 L34 104" {...base} />
    <path d="M40 78 L46 104" {...base} />
    {/* arm pulling back (highlight = scapula/upper back) */}
    <path d="M40 50 L58 56" {...hi} />
    <path d="M58 56 L48 64" {...hi} />
    {/* band to anchor */}
    <path d="M58 56 L100 52" {...base} strokeDasharray="4 4" />
    <MotionArrow d="M66 44 Q56 48 50 60" head="M50 60 L51 55 M50 60 L46 57" />
  </Svg>
)

const ScapularRetraction: Illustration = ({ className, title }) => (
  <Svg label="Scapular retraction" className={className} title={title}>
    {/* upper back from behind, shoulder blades squeezing together */}
    <Head cx={60} cy={26} />
    <path d="M60 34 L60 86" {...base} />
    {/* shoulders */}
    <path d="M38 46 L60 40 L82 46" {...base} />
    {/* shoulder blades pulling toward spine (highlight) */}
    <path d="M48 56 L56 62" {...hi} />
    <path d="M72 56 L64 62" {...hi} />
    <MotionArrow d="M40 70 Q52 74 58 70" head="M58 70 L53 70 M58 70 L55 66" />
    <MotionArrow d="M80 70 Q68 74 62 70" head="M62 70 L67 70 M62 70 L65 66" />
  </Svg>
)

const Pendulum: Illustration = ({ className, title }) => (
  <Svg label="Pendulum swing" className={className} title={title}>
    {/* bent-over figure letting arm hang and circle */}
    <Head cx={36} cy={30} />
    <path d="M42 34 L70 46" {...base} />
    {/* legs */}
    <path d="M70 46 L66 104" {...base} />
    {/* hanging arm (highlight) */}
    <path d="M52 38 L52 74" {...hi} />
    {/* circular swing path */}
    <ellipse cx={52} cy={84} rx={14} ry={8} {...hi} strokeWidth={2} strokeDasharray="3 4" />
    <MotionArrow d="M64 80 Q66 90 56 92" head="M56 92 L60 90 M56 92 L57 88" />
  </Svg>
)

const ExternalRotationBand: Illustration = ({ className, title }) => (
  <Svg label="External rotation with band" className={className} title={title}>
    <Wall x={100} />
    {/* standing, elbow tucked, forearm rotating outward against band */}
    <Head cx={40} cy={30} />
    <path d="M40 38 L40 80" {...base} />
    <path d="M40 80 L34 104" {...base} />
    <path d="M40 80 L46 104" {...base} />
    {/* upper arm to side, forearm out (highlight rotator cuff) */}
    <path d="M40 52 L52 58" {...base} />
    <path d="M52 58 L72 50" {...hi} />
    {/* band to wall */}
    <path d="M72 50 L100 52" {...base} strokeDasharray="4 4" />
    <MotionArrow d="M60 64 Q70 60 72 52" head="M72 52 L68 55 M72 52 L75 56" />
  </Svg>
)

const DoorwayPecStretch: Illustration = ({ className, title }) => (
  <Svg label="Doorway pec stretch" className={className} title={title}>
    {/* doorway frame */}
    <line x1={86} y1={14} x2={86} y2={106} {...base} />
    {/* figure stepping through, forearm on frame, chest opening */}
    <Head cx={44} cy={32} />
    <path d="M44 40 L44 80" {...base} />
    <path d="M44 80 L36 104" {...base} />
    <path d="M44 80 L50 104" {...base} />
    {/* arm up on door frame (highlight = chest stretch) */}
    <path d="M44 50 L66 42" {...hi} />
    <path d="M66 42 L86 36" {...hi} />
    <MotionArrow d="M52 64 Q44 70 36 66" head="M36 66 L41 66 M36 66 L39 62" />
  </Svg>
)

const SleeperStretch: Illustration = ({ className, title }) => (
  <Svg label="Sleeper stretch" className={className} title={title}>
    <Floor />
    {/* side-lying, bottom arm out, forearm pressed down */}
    <Head cx={24} cy={64} r={7} />
    <path d="M30 66 L62 72" {...base} />
    <path d="M62 72 L92 90" {...base} />
    {/* upper arm out at 90, forearm rotated down (highlight) */}
    <path d="M44 70 L44 90" {...hi} />
    <path d="M44 90 L62 100" {...hi} />
    <MotionArrow d="M56 86 Q64 92 58 100" head="M58 100 L55 96 M58 100 L62 97" />
  </Svg>
)

// ===========================================================================
// SPINE / NECK
// ===========================================================================

const ChinTuck: Illustration = ({ className, title }) => (
  <Svg label="Chin tuck" className={className} title={title}>
    {/* head + neck profile facing right */}
    <path d="M70 22 Q90 26 88 48 Q86 62 70 62" {...base} />
    {/* nose hint */}
    <path d="M88 42 L94 44" {...base} />
    {/* neck/spine (highlight) */}
    <path d="M64 60 L60 100" {...hi} />
    {/* backward gliding arrow */}
    <MotionArrow d="M82 34 Q70 30 60 34" head="M60 34 L65 32 M60 34 L64 38" />
  </Svg>
)

const CurlUp: Illustration = ({ className, title }) => (
  <Svg label="Curl-up" className={className} title={title}>
    <Floor />
    {/* supine, knees bent, slight trunk curl lifting head/shoulders */}
    <Head cx={28} cy={74} r={7} />
    {/* curled trunk (highlight abs) */}
    <path d="M34 76 L58 84" {...hi} />
    {/* bent legs */}
    <path d="M58 84 L74 64 L92 84" {...base} />
    {/* hands behind head */}
    <path d="M30 68 L40 72" {...base} />
    <MotionArrow d="M40 64 Q48 60 54 66" head="M54 66 L49 65 M54 66 L53 61" />
  </Svg>
)

const BirdDog: Illustration = ({ className, title }) => (
  <Svg label="Bird dog" className={className} title={title}>
    <Floor />
    {/* quadruped figure, opposite arm + leg extended */}
    <Head cx={30} cy={56} r={7} />
    {/* trunk */}
    <path d="M36 58 L72 64" {...base} />
    {/* support arm + support leg down to floor */}
    <path d="M44 60 L42 92" {...base} />
    <path d="M68 64 L70 92" {...base} />
    {/* extended front arm + extended rear leg (highlight) */}
    <path d="M38 58 L18 44" {...hi} />
    <path d="M72 64 L98 52" {...hi} />
  </Svg>
)

const CatCamel: Illustration = ({ className, title }) => (
  <Svg label="Cat-camel" className={className} title={title}>
    <Floor />
    {/* quadruped with arching spine */}
    <Head cx={26} cy={56} r={7} />
    {/* arched spine (highlight) */}
    <path d="M32 54 Q56 36 80 54" {...hi} />
    {/* support limbs */}
    <path d="M36 56 L34 92" {...base} />
    <path d="M78 56 L80 92" {...base} />
    {/* up/down motion */}
    <MotionArrow d="M56 30 Q56 24 56 20" head="M56 20 L52 25 M56 20 L60 25" />
  </Svg>
)

const PronePressUp: Illustration = ({ className, title }) => (
  <Svg label="Prone press-up" className={className} title={title}>
    <Floor />
    {/* lying face down, pressing chest up with hips on floor */}
    <Head cx={86} cy={50} r={7} />
    {/* arched upper back rising (highlight extension) */}
    <path d="M80 54 Q66 64 52 72" {...hi} />
    {/* hips + legs flat on floor */}
    <path d="M52 72 L20 88" {...base} />
    {/* propping arm */}
    <path d="M76 58 L74 88" {...base} />
    <MotionArrow d="M82 70 Q86 60 84 50" head="M84 50 L80 54 M84 50 L88 54" />
  </Svg>
)

const HipHinge: Illustration = ({ className, title }) => (
  <Svg label="Hip hinge" className={className} title={title}>
    <Floor />
    {/* standing, hinging at hips with flat back */}
    <Head cx={34} cy={34} />
    {/* flat back tipping forward (highlight neutral spine) */}
    <path d="M40 38 L66 56" {...hi} />
    {/* arms hanging */}
    <path d="M52 47 L50 70" {...base} />
    {/* legs nearly straight */}
    <path d="M66 56 L66 104" {...base} />
    <MotionArrow d="M52 30 Q66 36 72 50" head="M72 50 L67 47 M72 50 L74 45" />
  </Svg>
)

// ===========================================================================
// NERVE GLIDES
// ===========================================================================

const UpperLimbNerveGlide: Illustration = ({ className, title }) => (
  <Svg label="Upper limb nerve glide" className={className} title={title}>
    {/* head/shoulder, arm extended out to the side, wrist extended */}
    <Head cx={30} cy={36} r={7} />
    <path d="M30 44 L30 86" {...base} />
    {/* upper arm out, forearm out, hand extended (highlight nerve path) */}
    <path d="M36 50 L62 50" {...hi} />
    <path d="M62 50 L92 56" {...hi} />
    <path d="M92 56 L100 46" {...hi} />
    <MotionArrow d="M70 38 Q84 40 94 50" head="M94 50 L89 48 M94 50 L96 45" />
  </Svg>
)

const SciaticNerveGlide: Illustration = ({ className, title }) => (
  <Svg label="Sciatic nerve glide" className={className} title={title}>
    <Floor />
    {/* seated, one leg extending out, ankle dorsiflexing */}
    <Head cx={26} cy={42} r={7} />
    <path d="M26 50 L34 72" {...base} />
    {/* thigh */}
    <path d="M34 72 L60 76" {...base} />
    {/* extending lower leg (highlight nerve path) */}
    <path d="M60 76 L92 64" {...hi} />
    <path d="M92 64 L98 54" {...hi} />
    <MotionArrow d="M78 50 Q90 54 96 64" head="M96 64 L91 62 M96 64 L98 59" />
  </Svg>
)

// ===========================================================================
// WRIST / THUMB
// ===========================================================================

const WristExtensorStretch: Illustration = ({ className, title }) => (
  <Svg label="Wrist extensor stretch" className={className} title={title}>
    {/* arm out straight, hand bent down, other hand assisting */}
    <path d="M20 50 L62 50" {...base} />
    {/* hand flexed down (highlight back-of-forearm stretch) */}
    <path d="M62 50 Q72 62 70 84" {...hi} />
    {/* assisting hand pulling */}
    <path d="M58 78 L78 84" {...base} />
    <MotionArrow d="M76 58 Q80 72 72 82" head="M72 82 L74 77 M72 82 L68 78" />
  </Svg>
)

const WristFlexorStretch: Illustration = ({ className, title }) => (
  <Svg label="Wrist flexor stretch" className={className} title={title}>
    {/* arm out straight, palm up, fingers pulled back */}
    <path d="M20 56 L62 56" {...base} />
    {/* hand extended up (highlight underside forearm stretch) */}
    <path d="M62 56 Q72 46 72 26" {...hi} />
    {/* assisting hand */}
    <path d="M60 32 L80 26" {...base} />
    <MotionArrow d="M76 46 Q80 34 74 26" head="M74 26 L72 31 M74 26 L78 30" />
  </Svg>
)

const GripSqueeze: Illustration = ({ className, title }) => (
  <Svg label="Grip squeeze" className={className} title={title}>
    {/* a fist/ball being squeezed */}
    <circle cx={58} cy={60} r={20} {...hi} />
    {/* fingers wrapping the ball */}
    <g {...base}>
      <path d="M44 48 L52 44" />
      <path d="M46 60 L52 58" />
      <path d="M46 72 L52 74" />
      <path d="M54 80 L60 76" />
    </g>
    {/* squeeze pressure arrows */}
    <MotionArrow d="M88 60 L80 60" head="M80 60 L84 56 M80 60 L84 64" />
    <MotionArrow d="M28 60 L36 60" head="M36 60 L32 56 M36 60 L32 64" />
  </Svg>
)

const ThumbTendonGlide: Illustration = ({ className, title }) => (
  <Svg label="Thumb tendon glide" className={className} title={title}>
    {/* hand outline with thumb path */}
    <path d="M30 96 L30 56 Q30 46 40 46 L40 88" {...base} />
    {/* fingers */}
    <g {...base}>
      <path d="M46 46 L46 30" />
      <path d="M54 46 L54 26" />
      <path d="M62 46 L62 30" />
    </g>
    {/* thumb gliding across the palm (highlight) */}
    <path d="M30 64 Q48 78 62 70" {...hi} />
    <MotionArrow d="M40 80 Q52 86 62 78" head="M62 78 L57 79 M62 78 L60 73" />
  </Svg>
)

// ===========================================================================
// REGISTRY
// ===========================================================================

export const illustrations: Record<DiagramKey, Illustration> = {
  // anatomy
  'anatomy-shoulder': AnatomyShoulder,
  'anatomy-elbow': AnatomyElbow,
  'anatomy-wrist-thumb': AnatomyWristThumb,
  'anatomy-cervical': AnatomyCervical,
  'anatomy-lumbar': AnatomyLumbar,
  'anatomy-hip': AnatomyHip,
  'anatomy-knee': AnatomyKnee,
  'anatomy-tibia': AnatomyTibia,
  'anatomy-achilles': AnatomyAchilles,
  'anatomy-ankle': AnatomyAnkle,
  'anatomy-plantar': AnatomyPlantar,
  'anatomy-tendon-vs-nerve': AnatomyTendonVsNerve,
  // holds / isometrics
  'wall-sit': WallSit,
  'isometric-ankle-hold': IsometricAnkleHold,
  'cuff-isometric': CuffIsometric,
  plank: Plank,
  'side-plank': SidePlank,
  // eccentrics / heavy-slow
  'heel-drop': HeelDrop,
  'eccentric-wrist-extension': EccentricWristExtension,
  'eccentric-wrist-flexion': EccentricWristFlexion,
  'decline-single-leg-squat': DeclineSingleLegSquat,
  'nordic-hamstring': NordicHamstring,
  // hip / glute
  clamshell: Clamshell,
  'side-lying-hip-abduction': SideLyingHipAbduction,
  'glute-bridge': GluteBridge,
  'hip-hike': HipHike,
  'banded-lateral-walk': BandedLateralWalk,
  'hip-flexor-stretch': HipFlexorStretch,
  // knee
  'straight-leg-raise': StraightLegRaise,
  'step-down': StepDown,
  'terminal-knee-extension': TerminalKneeExtension,
  'quad-set': QuadSet,
  // calf / foot
  'calf-raise': CalfRaise,
  'single-leg-calf-raise': SingleLegCalfRaise,
  'plantar-fascia-stretch': PlantarFasciaStretch,
  'big-toe-extension': BigToeExtension,
  'ankle-balance': AnkleBalance,
  // shoulder / scapula
  'scapular-row': ScapularRow,
  'scapular-retraction': ScapularRetraction,
  pendulum: Pendulum,
  'external-rotation-band': ExternalRotationBand,
  'doorway-pec-stretch': DoorwayPecStretch,
  'sleeper-stretch': SleeperStretch,
  // spine / neck
  'chin-tuck': ChinTuck,
  'curl-up': CurlUp,
  'bird-dog': BirdDog,
  'cat-camel': CatCamel,
  'prone-press-up': PronePressUp,
  'hip-hinge': HipHinge,
  // nerve glides
  'upper-limb-nerve-glide': UpperLimbNerveGlide,
  'sciatic-nerve-glide': SciaticNerveGlide,
  // wrist / thumb
  'wrist-extensor-stretch': WristExtensorStretch,
  'wrist-flexor-stretch': WristFlexorStretch,
  'grip-squeeze': GripSqueeze,
  'thumb-tendon-glide': ThumbTendonGlide,
}
