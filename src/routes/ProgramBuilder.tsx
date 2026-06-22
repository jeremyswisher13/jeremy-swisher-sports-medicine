import { useState } from 'react'
import { Link } from 'react-router-dom'
import { conditionById, conditions } from '../content'
import { useProgram } from '../hooks/useProgram'
import { Icon } from '../components/common/Icon'

export function ProgramBuilderRoute() {
  const program = useProgram()
  const [newName, setNewName] = useState('')
  const [picker, setPicker] = useState('')

  const activeId = program.activeProgramId
  const active = program.programs.find((p) => p.id === activeId) ?? null

  const addable = conditions.filter(
    (c) => !active || !program.isConditionInProgram(active.id, c.id),
  )

  return (
    <section className="page">
      <header className="page-head">
        <h1>My Program</h1>
        <p>
          Build a combined home program across conditions. It saves automatically
          on this device and prints to a clean handout.
        </p>
      </header>

      <div className="program-builder">
        <aside className="program-sidebar">
          <div className="program-create">
            <input
              type="text"
              value={newName}
              placeholder="New program name"
              onChange={(e) => setNewName(e.target.value)}
              aria-label="New program name"
            />
            <button
              type="button"
              className="small-button"
              onClick={() => {
                program.createProgram(newName || 'My program')
                setNewName('')
              }}
            >
              <Icon name="add" size={16} />
              Create
            </button>
          </div>
          <div className="program-list">
            {program.programs.length === 0 && (
              <p className="empty-note">No programs yet.</p>
            )}
            {program.programs.map((p) => (
              <button
                key={p.id}
                type="button"
                className={`program-list-item ${p.id === activeId ? 'active' : ''}`}
                onClick={() => program.setActiveProgram(p.id)}
              >
                <strong>{p.name}</strong>
                <small>
                  {p.items.length} condition{p.items.length === 1 ? '' : 's'}
                </small>
              </button>
            ))}
          </div>
        </aside>

        <div className="program-main">
          {!active ? (
            <div className="panel panel-pad empty-program">
              <p>Create or select a program to start building.</p>
            </div>
          ) : (
            <>
              <div className="panel-title-row program-header-row">
                <input
                  className="program-name-input"
                  value={active.name}
                  onChange={(e) => program.renameProgram(active.id, e.target.value)}
                  aria-label="Program name"
                />
                <div className="program-header-actions">
                  <Link className="small-button" to="/program/print">
                    <Icon name="print" size={16} />
                    Print / PDF
                  </Link>
                  <button
                    type="button"
                    className="small-button danger"
                    onClick={() => program.deleteProgram(active.id)}
                  >
                    <Icon name="close" size={16} />
                    Delete
                  </button>
                </div>
              </div>

              <div className="program-add">
                <select
                  value={picker}
                  onChange={(e) => setPicker(e.target.value)}
                  aria-label="Choose a condition to add"
                >
                  <option value="">Add a condition…</option>
                  {addable.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  className="small-button"
                  disabled={!picker}
                  onClick={() => {
                    const c = conditionById.get(picker)
                    if (!c) return
                    const phaseId =
                      program.getProgress(c.id).activePhaseId ??
                      c.hep.phases[0]?.id ??
                      ''
                    program.addConditionToProgram(active.id, c.id, phaseId)
                    setPicker('')
                  }}
                >
                  <Icon name="add" size={16} />
                  Add
                </button>
              </div>

              {active.items.length === 0 ? (
                <div className="panel panel-pad empty-program">
                  <p>No conditions yet. Add one above, or browse the regions.</p>
                  <Link className="small-button" to="/regions">
                    Browse conditions
                    <Icon name="chevronRight" size={16} />
                  </Link>
                </div>
              ) : (
                <ol className="program-items">
                  {active.items.map((item, i) => {
                    const c = conditionById.get(item.conditionId)
                    if (!c) return null
                    const phase =
                      c.hep.phases.find((p) => p.id === item.phaseId) ??
                      c.hep.phases[0]
                    return (
                      <li key={item.conditionId} className="program-item">
                        <div className="program-item-order">
                          <button
                            type="button"
                            aria-label="Move up"
                            disabled={i === 0}
                            onClick={() =>
                              program.moveProgramItem(active.id, c.id, 'up')
                            }
                          >
                            <Icon name="arrowRight" size={15} className="rot-up" />
                          </button>
                          <span>{i + 1}</span>
                          <button
                            type="button"
                            aria-label="Move down"
                            disabled={i === active.items.length - 1}
                            onClick={() =>
                              program.moveProgramItem(active.id, c.id, 'down')
                            }
                          >
                            <Icon name="arrowRight" size={15} className="rot-down" />
                          </button>
                        </div>
                        <div className="program-item-body">
                          <Link to={`/condition/${c.id}`}>
                            <strong>{c.name}</strong>
                          </Link>
                          <label className="program-phase-select">
                            Phase
                            <select
                              value={phase?.id}
                              onChange={(e) =>
                                program.setProgramItemPhase(
                                  active.id,
                                  c.id,
                                  e.target.value,
                                )
                              }
                            >
                              {c.hep.phases.map((p) => (
                                <option key={p.id} value={p.id}>
                                  {p.order}. {p.title}
                                </option>
                              ))}
                            </select>
                          </label>
                        </div>
                        <button
                          type="button"
                          className="program-item-remove"
                          aria-label="Remove"
                          onClick={() => program.removeProgramItem(active.id, c.id)}
                        >
                          <Icon name="close" size={16} />
                        </button>
                      </li>
                    )
                  })}
                </ol>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  )
}
