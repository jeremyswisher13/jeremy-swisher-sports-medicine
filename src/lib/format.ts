import type { ExerciseDose } from '../content'

/** Render a dose object as a short, patient-readable string. */
export function formatDose(dose: ExerciseDose): string {
  const parts: string[] = []
  if (dose.sets && dose.reps) parts.push(`${dose.sets} × ${dose.reps}`)
  else if (dose.sets && dose.holdSeconds)
    parts.push(`${dose.sets} × ${dose.holdSeconds}s hold`)
  else if (dose.sets) parts.push(`${dose.sets} sets`)
  else if (dose.reps) parts.push(`${dose.reps} reps`)
  else if (dose.holdSeconds) parts.push(`${dose.holdSeconds}s hold`)
  if (dose.tempo) parts.push(dose.tempo)
  if (parts.length === 0 && dose.notes) return dose.notes
  return parts.join(' · ')
}
