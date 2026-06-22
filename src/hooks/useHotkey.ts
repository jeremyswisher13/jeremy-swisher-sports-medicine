import { useEffect } from 'react'

/**
 * Global keyboard shortcut. `combo` examples: "mod+k" (Cmd on mac / Ctrl
 * elsewhere), "escape". Calls `handler` and prevents default when matched.
 */
export function useHotkey(combo: string, handler: (e: KeyboardEvent) => void) {
  useEffect(() => {
    const parts = combo.toLowerCase().split('+')
    const needMod = parts.includes('mod')
    const key = parts[parts.length - 1]

    function onKey(e: KeyboardEvent) {
      const mod = e.metaKey || e.ctrlKey
      if (needMod && !mod) return
      if (e.key.toLowerCase() !== key) return
      handler(e)
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [combo, handler])
}
