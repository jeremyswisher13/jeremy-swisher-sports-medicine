import type { Condition } from '../../content'
import { useProgram } from '../../hooks/useProgram'
import { Icon } from '../common/Icon'

/**
 * Adds a condition (at its current active phase) to the active saved program,
 * creating a default program on first use.
 */
export function AddToProgram({ condition }: { condition: Condition }) {
  const program = useProgram()

  const activeId = program.activeProgramId
  const inProgram = activeId
    ? program.isConditionInProgram(activeId, condition.id)
    : false

  function add() {
    const progress = program.getProgress(condition.id)
    const phaseId =
      progress.activePhaseId ?? condition.hep.phases[0]?.id ?? ''
    let programId = program.activeProgramId
    if (!programId) programId = program.createProgram('My program')
    program.addConditionToProgram(programId, condition.id, phaseId)
  }

  if (inProgram) {
    return (
      <button type="button" className="ghost-action" disabled>
        <Icon name="check" size={20} />
        In your program
      </button>
    )
  }

  return (
    <button type="button" className="primary-action" onClick={add}>
      <Icon name="add" size={20} />
      Add to my program
    </button>
  )
}
