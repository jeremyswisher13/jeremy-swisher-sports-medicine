import { useContext } from 'react'
import { ProgramContext, type ProgramApi } from '../store/programStore'

/** Access the program/progress store. Must be used within <ProgramProvider>. */
export function useProgram(): ProgramApi {
  const ctx = useContext(ProgramContext)
  if (!ctx) {
    throw new Error('useProgram must be used within <ProgramProvider>')
  }
  return ctx
}
