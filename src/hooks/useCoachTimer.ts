import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Countdown that auto-cascades and fires callbacks — drives the coached
 * follow-along flow (holds and rests auto-run and trigger the next step).
 * State changes happen inside the async setTimeout, never synchronously in the
 * effect body, so it stays clear of the set-state-in-effect rule.
 */
export function useCoachTimer(opts?: {
  onComplete?: () => void
  onTick?: (remaining: number) => void
}) {
  const [remaining, setRemaining] = useState(0)
  const [running, setRunning] = useState(false)
  const [active, setActive] = useState(false)
  const onComplete = useRef(opts?.onComplete)
  const onTick = useRef(opts?.onTick)
  useEffect(() => {
    onComplete.current = opts?.onComplete
    onTick.current = opts?.onTick
  })

  useEffect(() => {
    if (!running || remaining <= 0) return
    const id = setTimeout(() => {
      const next = remaining - 1
      setRemaining(next)
      onTick.current?.(next)
      if (next <= 0) {
        setRunning(false)
        setActive(false)
        onComplete.current?.()
      }
    }, 1000)
    return () => clearTimeout(id)
  }, [running, remaining])

  const start = useCallback((seconds: number) => {
    setRemaining(seconds)
    setActive(true)
    setRunning(true)
  }, [])
  const pause = useCallback(() => setRunning(false), [])
  const resume = useCallback(() => setRunning(true), [])
  const reset = useCallback(() => {
    setRunning(false)
    setActive(false)
    setRemaining(0)
  }, [])

  return { remaining, running, active, start, pause, resume, reset }
}
