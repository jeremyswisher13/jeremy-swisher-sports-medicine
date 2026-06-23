// Parse exercise dose fields into a guided-rep cadence (the metronome).
// Deliberately conservative: the cadence only engages when BOTH an explicit
// per-phase tempo (with seconds) AND a numeric rep target are present, so we
// never invent timing for exercises the content didn't specify.

export interface TempoPhase {
  label: string
  seconds: number
}

function labelFor(word: string): string {
  const w = word.toLowerCase()
  if (['up', 'raise', 'lift', 'concentric', 'rise'].includes(w)) return 'Up'
  if (['down', 'lower', 'lowering', 'eccentric', 'descend'].includes(w)) return 'Down'
  if (['hold', 'pause'].includes(w)) return 'Hold'
  return 'Move'
}

/**
 * Parse a tempo string like "3s up, 3s down" or "slow 3–4 sec lower" into timed
 * phases. Returns [] when no explicit seconds are present (e.g. "slow",
 * "controlled") so the caller falls back to a manual set.
 */
export function parseTempo(tempo?: string): TempoPhase[] {
  if (!tempo) return []
  const phases: TempoPhase[] = []
  const re = /(\d+(?:\s*[–-]\s*\d+)?)\s*s(?:ec(?:onds?)?)?\b\s*([a-z]+)?/gi
  let m: RegExpExecArray | null
  while ((m = re.exec(tempo)) !== null) {
    const nums = m[1].split(/[–-]/).map((n) => parseFloat(n.trim())).filter((n) => !Number.isNaN(n))
    if (!nums.length) continue
    const seconds = nums.reduce((a, b) => a + b, 0) / nums.length
    if (!seconds) continue
    phases.push({ label: labelFor(m[2] ?? ''), seconds })
  }
  return phases
}

/**
 * Parse a reps string ("10", "10–15", "6–8", "10 to 15 steps each way") into a
 * target rep count (upper bound of a range). Returns null when non-numeric.
 */
export function parseReps(reps?: string): number | null {
  if (!reps) return null
  const nums = reps.match(/\d+/g)
  if (!nums || !nums.length) return null
  return Math.max(...nums.slice(0, 2).map(Number))
}
