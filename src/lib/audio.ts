// Lightweight Web Audio cues for the coached follow-along session.
// No assets, no autoplay — the AudioContext unlocks on the first user gesture
// (the patient tapping "Start"). All cues are no-ops when muted (the caller
// guards) or when Web Audio is unavailable.

let ctx: AudioContext | null = null

function getCtx(): AudioContext | null {
  if (typeof window === 'undefined') return null
  if (!ctx) {
    const AC =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (!AC) return null
    ctx = new AC()
  }
  return ctx
}

/** Play a short tone. Safe to call repeatedly. */
export function beep(freq = 880, durationMs = 120, gain = 0.05): void {
  const c = getCtx()
  if (!c) return
  if (c.state === 'suspended') void c.resume()
  const osc = c.createOscillator()
  const g = c.createGain()
  osc.type = 'sine'
  osc.frequency.value = freq
  osc.connect(g)
  g.connect(c.destination)
  const now = c.currentTime
  g.gain.setValueAtTime(gain, now)
  g.gain.exponentialRampToValueAtTime(0.0001, now + durationMs / 1000)
  osc.start(now)
  osc.stop(now + durationMs / 1000)
}

export function vibrate(pattern: number | number[] = 25): void {
  if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
    navigator.vibrate(pattern)
  }
}

/** Cue vocabulary for the coached session (call only when sound is on). */
export const cue = {
  /** Soft countdown tick (3…2…1). */
  count: () => {
    beep(700, 90, 0.045)
    vibrate(15)
  },
  /** Start of a hold / set / rep phase. */
  go: () => {
    beep(990, 180, 0.06)
    vibrate(35)
  },
  /** A rep/phase transition tick during the metronome. */
  tick: () => beep(620, 60, 0.035),
  /** Set or hold finished. */
  done: () => {
    beep(880, 100, 0.05)
    beep(1245, 150, 0.05)
    vibrate([20, 30, 40])
  },
  /** Rest period started. */
  rest: () => {
    beep(500, 150, 0.045)
    vibrate(25)
  },
}
