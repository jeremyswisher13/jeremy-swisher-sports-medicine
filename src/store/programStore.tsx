import { createContext, useCallback, useMemo, type ReactNode } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { conditionById } from '../content'

const STORAGE_KEY = 'jsm:v1'
const CURRENT_VERSION = 2

export interface StoredProgress {
  activePhaseId: string | null
  completedExerciseIds: string[]
  updatedAt: number
}

/** A completed follow-along session — the dated rehab journal entry. */
export interface SessionLog {
  id: string
  conditionId: string
  phaseId: string
  completedAt: number
  exercisesDone: number
  exercisesTotal: number
  /** Patient-reported pain 0–10 after the session (null if skipped). */
  pain: number | null
  /** Patient-reported effort / RPE 1–10 (null if skipped). */
  effort: number | null
}

export interface ProgramItem {
  conditionId: string
  phaseId: string
  order: number
}

export interface SavedProgram {
  id: string
  name: string
  createdAt: number
  updatedAt: number
  items: ProgramItem[]
}

interface StoreShape {
  version: number
  progress: Record<string, StoredProgress>
  programs: Record<string, SavedProgram>
  activeProgramId: string | null
  sessions: SessionLog[]
}

const emptyStore = (): StoreShape => ({
  version: CURRENT_VERSION,
  progress: {},
  programs: {},
  activeProgramId: null,
  sessions: [],
})

function newId(prefix: string): string {
  return `${prefix}-${Date.now().toString(36)}-${Math.random()
    .toString(36)
    .slice(2, 8)}`
}

/** Local calendar-day key for streak math (uses the device's local date). */
function dayKey(ts: number): string {
  const d = new Date(ts)
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`
}

/** Consecutive calendar days (ending today or yesterday) with ≥1 session. */
function computeStreak(sessions: SessionLog[]): number {
  if (!sessions.length) return 0
  const days = new Set(sessions.map((s) => dayKey(s.completedAt)))
  const cursor = new Date()
  if (!days.has(dayKey(cursor.getTime()))) {
    cursor.setDate(cursor.getDate() - 1)
    if (!days.has(dayKey(cursor.getTime()))) return 0
  }
  let streak = 0
  while (days.has(dayKey(cursor.getTime()))) {
    streak++
    cursor.setDate(cursor.getDate() - 1)
  }
  return streak
}

/**
 * Defensive load: handle missing/legacy/corrupt shapes and drop references to
 * content that no longer exists (condition ids can change between deploys).
 */
function sanitize(raw: unknown): StoreShape {
  const base = emptyStore()
  if (!raw || typeof raw !== 'object') return base
  const r = raw as Partial<StoreShape>

  if (r.progress && typeof r.progress === 'object') {
    for (const [conditionId, p] of Object.entries(r.progress)) {
      if (!conditionById.has(conditionId) || !p || typeof p !== 'object') continue
      base.progress[conditionId] = {
        activePhaseId: typeof p.activePhaseId === 'string' ? p.activePhaseId : null,
        completedExerciseIds: Array.isArray(p.completedExerciseIds)
          ? p.completedExerciseIds.filter((x) => typeof x === 'string')
          : [],
        updatedAt: typeof p.updatedAt === 'number' ? p.updatedAt : Date.now(),
      }
    }
  }

  if (r.programs && typeof r.programs === 'object') {
    for (const [id, prog] of Object.entries(r.programs)) {
      if (!prog || typeof prog !== 'object' || !Array.isArray(prog.items)) continue
      const items = prog.items
        .filter((it) => it && conditionById.has(it.conditionId))
        .map((it, i) => ({
          conditionId: it.conditionId,
          phaseId: typeof it.phaseId === 'string' ? it.phaseId : '',
          order: typeof it.order === 'number' ? it.order : i,
        }))
        .sort((a, b) => a.order - b.order)
        .map((it, i) => ({ ...it, order: i }))
      base.programs[id] = {
        id,
        name: typeof prog.name === 'string' ? prog.name : 'My program',
        createdAt: typeof prog.createdAt === 'number' ? prog.createdAt : Date.now(),
        updatedAt: typeof prog.updatedAt === 'number' ? prog.updatedAt : Date.now(),
        items,
      }
    }
  }

  if (typeof r.activeProgramId === 'string' && base.programs[r.activeProgramId]) {
    base.activeProgramId = r.activeProgramId
  }

  if (Array.isArray(r.sessions)) {
    base.sessions = r.sessions
      .filter(
        (s): s is SessionLog =>
          !!s && typeof s === 'object' && conditionById.has((s as SessionLog).conditionId),
      )
      .map((s) => ({
        id: typeof s.id === 'string' ? s.id : newId('sess'),
        conditionId: s.conditionId,
        phaseId: typeof s.phaseId === 'string' ? s.phaseId : '',
        completedAt: typeof s.completedAt === 'number' ? s.completedAt : Date.now(),
        exercisesDone: typeof s.exercisesDone === 'number' ? s.exercisesDone : 0,
        exercisesTotal: typeof s.exercisesTotal === 'number' ? s.exercisesTotal : 0,
        pain: typeof s.pain === 'number' ? s.pain : null,
        effort: typeof s.effort === 'number' ? s.effort : null,
      }))
      .sort((a, b) => a.completedAt - b.completedAt)
  }

  return base
}

export interface ConditionStats {
  count: number
  lastSession: SessionLog | null
  /** Pain values in chronological order (nulls dropped). */
  painSeries: number[]
  effortSeries: number[]
}

export interface ConditionProgressView {
  activePhaseId: string | null
  completedExerciseIds: Set<string>
}

export interface ProgramApi {
  getProgress: (conditionId: string) => ConditionProgressView
  isExerciseDone: (conditionId: string, exerciseId: string) => boolean
  toggleExercise: (conditionId: string, exerciseId: string) => void
  setActivePhase: (conditionId: string, phaseId: string) => void
  resetCondition: (conditionId: string) => void
  /** Conditions the user has interacted with (has saved progress). */
  startedConditionIds: string[]

  /** Dated session journal (local-only). */
  sessions: SessionLog[]
  logSession: (log: Omit<SessionLog, 'id'>) => void
  getSessions: (conditionId?: string) => SessionLog[]
  getConditionStats: (conditionId: string) => ConditionStats
  /** Consecutive-day streak across all conditions. */
  currentStreakDays: number
  /** Total sessions logged across all conditions. */
  totalSessions: number

  programs: SavedProgram[]
  activeProgramId: string | null
  createProgram: (name: string) => string
  renameProgram: (id: string, name: string) => void
  deleteProgram: (id: string) => void
  setActiveProgram: (id: string | null) => void
  addConditionToProgram: (
    programId: string,
    conditionId: string,
    phaseId: string,
  ) => void
  removeProgramItem: (programId: string, conditionId: string) => void
  setProgramItemPhase: (
    programId: string,
    conditionId: string,
    phaseId: string,
  ) => void
  moveProgramItem: (
    programId: string,
    conditionId: string,
    direction: 'up' | 'down',
  ) => void
  isConditionInProgram: (programId: string, conditionId: string) => boolean
}

// eslint-disable-next-line react-refresh/only-export-components
export const ProgramContext = createContext<ProgramApi | null>(null)

export function ProgramProvider({ children }: { children: ReactNode }) {
  const [raw, setRaw] = useLocalStorage<unknown>(STORAGE_KEY, emptyStore())
  const store = useMemo(() => sanitize(raw), [raw])

  const update = useCallback(
    (mutator: (draft: StoreShape) => void) => {
      setRaw((prev: unknown) => {
        const draft = sanitize(prev)
        mutator(draft)
        return draft
      })
    },
    [setRaw],
  )

  const api = useMemo<ProgramApi>(() => {
    const getProgress = (conditionId: string): ConditionProgressView => {
      const p = store.progress[conditionId]
      return {
        activePhaseId: p?.activePhaseId ?? null,
        completedExerciseIds: new Set(p?.completedExerciseIds ?? []),
      }
    }

    return {
      getProgress,
      isExerciseDone: (conditionId, exerciseId) =>
        store.progress[conditionId]?.completedExerciseIds.includes(exerciseId) ??
        false,
      toggleExercise: (conditionId, exerciseId) =>
        update((d) => {
          const cur =
            d.progress[conditionId] ??
            (d.progress[conditionId] = {
              activePhaseId: null,
              completedExerciseIds: [],
              updatedAt: Date.now(),
            })
          const i = cur.completedExerciseIds.indexOf(exerciseId)
          if (i >= 0) cur.completedExerciseIds.splice(i, 1)
          else cur.completedExerciseIds.push(exerciseId)
          cur.updatedAt = Date.now()
        }),
      setActivePhase: (conditionId, phaseId) =>
        update((d) => {
          const cur =
            d.progress[conditionId] ??
            (d.progress[conditionId] = {
              activePhaseId: null,
              completedExerciseIds: [],
              updatedAt: Date.now(),
            })
          cur.activePhaseId = phaseId
          cur.updatedAt = Date.now()
        }),
      resetCondition: (conditionId) =>
        update((d) => {
          delete d.progress[conditionId]
        }),
      startedConditionIds: Object.keys(store.progress).sort(
        (a, b) =>
          (store.progress[b]?.updatedAt ?? 0) - (store.progress[a]?.updatedAt ?? 0),
      ),

      sessions: store.sessions,
      logSession: (log) =>
        update((d) => {
          d.sessions.push({ ...log, id: newId('sess') })
        }),
      getSessions: (conditionId) =>
        (conditionId
          ? store.sessions.filter((s) => s.conditionId === conditionId)
          : store.sessions
        )
          .slice()
          .sort((a, b) => b.completedAt - a.completedAt),
      getConditionStats: (conditionId) => {
        const list = store.sessions
          .filter((s) => s.conditionId === conditionId)
          .sort((a, b) => a.completedAt - b.completedAt)
        return {
          count: list.length,
          lastSession: list.length ? list[list.length - 1] : null,
          painSeries: list.map((s) => s.pain).filter((x): x is number => x != null),
          effortSeries: list.map((s) => s.effort).filter((x): x is number => x != null),
        }
      },
      currentStreakDays: computeStreak(store.sessions),
      totalSessions: store.sessions.length,

      programs: Object.values(store.programs).sort(
        (a, b) => b.updatedAt - a.updatedAt,
      ),
      activeProgramId: store.activeProgramId,
      createProgram: (name) => {
        const id = newId('prog')
        update((d) => {
          const now = Date.now()
          d.programs[id] = {
            id,
            name: name.trim() || 'My program',
            createdAt: now,
            updatedAt: now,
            items: [],
          }
          d.activeProgramId = id
        })
        return id
      },
      renameProgram: (id, name) =>
        update((d) => {
          const prog = d.programs[id]
          if (prog) {
            prog.name = name.trim() || prog.name
            prog.updatedAt = Date.now()
          }
        }),
      deleteProgram: (id) =>
        update((d) => {
          delete d.programs[id]
          if (d.activeProgramId === id) d.activeProgramId = null
        }),
      setActiveProgram: (id) =>
        update((d) => {
          d.activeProgramId = id && d.programs[id] ? id : null
        }),
      addConditionToProgram: (programId, conditionId, phaseId) =>
        update((d) => {
          const prog = d.programs[programId]
          if (!prog) return
          if (prog.items.some((it) => it.conditionId === conditionId)) return
          prog.items.push({ conditionId, phaseId, order: prog.items.length })
          prog.updatedAt = Date.now()
        }),
      removeProgramItem: (programId, conditionId) =>
        update((d) => {
          const prog = d.programs[programId]
          if (!prog) return
          prog.items = prog.items
            .filter((it) => it.conditionId !== conditionId)
            .map((it, i) => ({ ...it, order: i }))
          prog.updatedAt = Date.now()
        }),
      setProgramItemPhase: (programId, conditionId, phaseId) =>
        update((d) => {
          const prog = d.programs[programId]
          if (!prog) return
          const item = prog.items.find((it) => it.conditionId === conditionId)
          if (!item) return
          item.phaseId = phaseId
          prog.updatedAt = Date.now()
        }),
      moveProgramItem: (programId, conditionId, direction) =>
        update((d) => {
          const prog = d.programs[programId]
          if (!prog) return
          const idx = prog.items.findIndex((it) => it.conditionId === conditionId)
          if (idx < 0) return
          const swap = direction === 'up' ? idx - 1 : idx + 1
          if (swap < 0 || swap >= prog.items.length) return
          ;[prog.items[idx], prog.items[swap]] = [
            prog.items[swap],
            prog.items[idx],
          ]
          prog.items = prog.items.map((it, i) => ({ ...it, order: i }))
          prog.updatedAt = Date.now()
        }),
      isConditionInProgram: (programId, conditionId) =>
        store.programs[programId]?.items.some(
          (it) => it.conditionId === conditionId,
        ) ?? false,
    }
  }, [store, update])

  return <ProgramContext.Provider value={api}>{children}</ProgramContext.Provider>
}
