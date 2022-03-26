import { useState } from 'react'
import Task from '../models/Task'

import { SecondaryButton } from './Buttons'
import { EditingTaskRow, TaskRow, NewTaskRow } from './TaskRows'

let lastAssignedId = 4

interface TaskRow extends Task {
  isBeingEdited: boolean
}

const TasksTable = () => {
  const [taskRows, setTaskRows] = useState<TaskRow[]>([
    {
      isBeingEdited: false,
      id: 1,
      description: 'Task description 1',
      importance: 8,
      urgency: 6,
    },
    {
      isBeingEdited: false,
      id: 2,
      description: 'Task description 2',
      importance: 3,
      urgency: 8,
    },
    {
      isBeingEdited: false,
      id: 3,
      description: 'Task description 3',
      importance: 1,
      urgency: 2,
    },
    {
      isBeingEdited: false,
      id: 4,
      description: 'Task description 4',
      importance: 5,
      urgency: 1,
    },
  ])
  const [showNewTaskRow, setShowNewTaskRow] = useState(false)

  const addNewTaskRow = (task: Task) => {
    task.id = ++lastAssignedId
    setTaskRows((currentTaskRows) => [
      ...currentTaskRows,
      { isBeingEdited: false, ...task },
    ])
    setShowNewTaskRow(false)
  }

  const updateTaskRow = (updatedTask: Task) => {
    setTaskRows((currentRows) => {
      const taskRowIndex = currentRows.findIndex(
        (_row) => _row.id === updatedTask.id
      )
      const newTaskRows = [...currentRows]
      newTaskRows[taskRowIndex] = { ...updatedTask, isBeingEdited: false }
      return newTaskRows
    })
  }

  const toggleTaskRowEdit = (taskRow: TaskRow) => {
    setTaskRows((currentTaskRows) => {
      const taskRowIndex = currentTaskRows.findIndex(
        (_taskRow) => _taskRow.id === taskRow.id
      )
      currentTaskRows[taskRowIndex] = {
        ...taskRow,
        isBeingEdited: !taskRow.isBeingEdited,
      }
      return [...currentTaskRows]
    })
  }

  const deleteTaskRow = (taskRow: TaskRow) => {
    setTaskRows((currentTaskRows) => {
      const taskRowIndex = currentTaskRows.findIndex(
        (_taskRow) => _taskRow.id === taskRow.id
      )
      const newTaskRows = currentTaskRows
        .slice(0, taskRowIndex)
        .concat(currentTaskRows.slice(taskRowIndex + 1))
      return newTaskRows
    })
  }

  return (
    <section className="table-container">
      <header>
        <h2>Your task list</h2>
        <SecondaryButton onClick={() => setTaskRows([])}>
          Clear task list
        </SecondaryButton>
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
          {taskRows.map((taskRow) => {
            return taskRow.isBeingEdited ? (
              <EditingTaskRow
                key={taskRow.id}
                task={taskRow}
                onSubmit={updateTaskRow}
                onCancelEdit={() => toggleTaskRowEdit(taskRow)}
              />
            ) : (
              <TaskRow
                key={taskRow.id}
                task={taskRow}
                onEdit={() => toggleTaskRowEdit(taskRow)}
                onDelete={() => deleteTaskRow(taskRow)}
              />
            )
          })}
          {showNewTaskRow && (
            <NewTaskRow
              onSubmit={addNewTaskRow}
              onCancel={() => setShowNewTaskRow(false)}
            />
          )}
        </tbody>
      </table>

      {!showNewTaskRow && (
        <SecondaryButton onClick={() => setShowNewTaskRow(true)}>
          + Add new task
        </SecondaryButton>
      )}
    </section>
  )
}

export default TasksTable
