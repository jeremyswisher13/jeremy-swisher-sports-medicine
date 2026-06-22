import { useCallback, useEffect, useState } from 'react'

/**
 * Simple self-paced countdown for the follow-along session (exercise holds and
 * rests). Does not auto-cascade state — the patient taps to advance — which
 * keeps it reliable and avoids surprise transitions mid-hold.
 */
export function useCountdown() {
  const [remaining, setRemaining] = useState(0)
  const [running, setRunning] = useState(false)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (!running || remaining <= 0) return
    const id = setTimeout(() => setRemaining((r) => Math.max(0, r - 1)), 1000)
    return () => clearTimeout(id)
  }, [running, remaining])

  const start = useCallback((seconds: number) => {
    setRemaining(seconds)
    setStarted(true)
    setRunning(true)
  }, [])
  const pause = useCallback(() => setRunning(false), [])
  const resume = useCallback(() => setRunning(true), [])
  const reset = useCallback(() => {
    setRunning(false)
    setStarted(false)
    setRemaining(0)
  }, [])

  return {
    remaining,
    running,
    started,
    finished: started && remaining === 0,
    start,
    pause,
    resume,
    reset,
  }
}

/** Format seconds as M:SS (or S for <60). */
export function fmtTime(s: number): string {
  if (s < 60) return `${s}`
  const m = Math.floor(s / 60)
  const sec = s % 60
  return `${m}:${sec.toString().padStart(2, '0')}`
}
