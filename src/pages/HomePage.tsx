import PageHeader from '../components/PageHeader'
import EditableRow from '../components/EditableRow'

import { useState } from 'react'
import Task from '../models/Task'

let lastId = 0

const HomePage = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [showNewInput, setShowNewInput] = useState(true)

  const clearAllTasks = () => {
    setTasks([])
    // TODO: If tasks are in LocalStorage, remove them
  }

  const createNewEmptyRow = () => {
    const task = new Task()
    setTasks((current) => [...current, task])
  }

  const saveClickHandler = (task: Task) => {
    if (task.id < 0)
      setTasks((current) => [...current, { ...task, id: ++lastId }])
    else
      setTasks((currentTasks) => {
        const indexToRemove = currentTasks.findIndex(
          (_item) => (_item.id = task.id)
        )
        currentTasks.splice(indexToRemove, 1)
        return [...currentTasks]
      })
  }

  const deleteClickHandler = (task: Task) => {
    setTasks((currentTasks) =>
      currentTasks.filter((_task) => _task.id !== task.id)
    )
  }

  return (
    <>
      <PageHeader
        title="Calabrez Matrix"
        description="Proritize your tasks based on a decision framewok based on The Eisenhower Matrix."
        moreInfoLabel="How it works"
        moreInfoURL="#"
      />

      <main>
        <header>
          <h2>Your task list</h2>
          <button onClick={clearAllTasks}>Clear task list</button>
        </header>
        <table>
          <thead>
            <tr>
              <th className="id" scope="col">
                Id
              </th>
              <th className="description" scope="col">
                Task description
              </th>
              <th className="urgency" scope="col">
                Urgency rating
              </th>
              <th className="importance" scope="col">
                Importance rating
              </th>
              <th className="actions" scope="col">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <EditableRow
                task={task}
                onSaveClick={saveClickHandler}
                onDeleteClick={deleteClickHandler}
              />
            ))}
            {showNewInput && (
              <EditableRow
                task={new Task()}
                onSaveClick={saveClickHandler}
                onDeleteClick={deleteClickHandler}
                showOnlyInputsMode={true}
              />
            )}
          </tbody>
        </table>
        <button className="btn-new-task" onClick={createNewEmptyRow}>
          + Add new task
        </button>
      </main>

      <button className="btn-submit">Compute priority ranking</button>
    </>
  )
}

export default HomePage
