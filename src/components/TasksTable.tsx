import { useState, useEffect, PropsWithChildren } from 'react'
import Task from '../models/Task'

import { PrimaryButton, SecondaryButton } from './Buttons'
import { EditingTaskRow, TaskRow, NewTaskRow } from './TaskRows'

let lastAssignedId = 4

interface TaskRow extends Task {
  isBeingEdited: boolean
}
interface ITasksTableProps {
  tasks: Task[]
  onSubmitTasks: (tasks: Task[]) => void
}

const TasksTable: React.FC<PropsWithChildren<ITasksTableProps>> = ({
  tasks,
  onSubmitTasks,
}) => {
  const [taskRows, setTaskRows] = useState<TaskRow[]>(() => {
    return tasks.map((task) => ({
      id: task.id,
      description: task.description,
      importance: task.importance,
      urgency: task.urgency,
      isBeingEdited: false,
    }))
  })
  const [showNewTaskRow, setShowNewTaskRow] = useState(false)

  const submitClickHandler = () => {
    onSubmitTasks(
      taskRows.map((taskRow) => ({
        ...taskRow,
      }))
    )
  }

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
      <div className="page-footer">
        <PrimaryButton onClick={submitClickHandler}>
          Compute priority ranking
        </PrimaryButton>
      </div>
    </section>
  )
}

export default TasksTable
