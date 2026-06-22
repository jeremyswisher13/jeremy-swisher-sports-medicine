import { useCallback, useEffect, useState } from 'react'

/**
 * Generic localStorage-backed state.
 * - Lazy init from storage; corrupt/unparseable data falls back to `initial`
 *   (never throws).
 * - Writes JSON on change.
 * - Keeps multiple open tabs in sync via the `storage` event.
 */
export function useLocalStorage<T>(
  key: string,
  initial: T,
): [T, (value: T | ((prev: T) => T)) => void] {
  const read = useCallback((): T => {
    if (typeof window === 'undefined') return initial
    try {
      const raw = window.localStorage.getItem(key)
      if (raw == null) return initial
      return JSON.parse(raw) as T
    } catch {
      return initial
    }
  }, [key, initial])

  const [value, setValue] = useState<T>(read)

  const set = useCallback(
    (next: T | ((prev: T) => T)) => {
      setValue((prev) => {
        const resolved =
          typeof next === 'function' ? (next as (p: T) => T)(prev) : next
        try {
          window.localStorage.setItem(key, JSON.stringify(resolved))
        } catch {
          // storage full / unavailable — keep in-memory value, ignore write
        }
        return resolved
      })
    },
    [key],
  )

  useEffect(() => {
    function onStorage(event: StorageEvent) {
      if (event.key === key) setValue(read())
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [key, read])

  return [value, set]
}
