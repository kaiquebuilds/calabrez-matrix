import React, { ChangeEvent, useState } from 'react'
import Task, { TaskPropsEnum } from '../models/Task'

interface EditableRowProps {
  task: Task
  onSaveClick: (task: Task) => void
  onDeleteClick: (task: Task) => void
  onCancelClick?: () => void
  showOnlyInputsMode?: boolean
}

const EditableRow = ({
  task,
  onSaveClick,
  onDeleteClick,
  onCancelClick,
  showOnlyInputsMode,
}: EditableRowProps) => {
  const [isBeingEdited, setIsBeingEdited] = useState(
    showOnlyInputsMode || false
  )
  const [inputValues, setInputValues] = useState<Task>({
    id: -1,
    description: '',
    urgency: 0,
    importance: 0,
  })

  const resetInputs = () =>
    setInputValues({ id: -1, description: '', urgency: 0, importance: 0 })

  const saveClickHandler = () => {
    const task: Task = {
      id: -1,
      description: inputValues.description,
      urgency: inputValues.urgency,
      importance: inputValues.importance,
    }

    onSaveClick(task)
    resetInputs()
  }

  const editClickHandler = () => {
    if (!showOnlyInputsMode) setInputValues(task)

    setIsBeingEdited(true)
  }

  const cancelClickHandler = () => {
    if (showOnlyInputsMode) onCancelClick()

    setIsBeingEdited(false)
  }

  const propChangeHandler = (
    taskProperty: TaskPropsEnum,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setInputValues((current) => {
      const newValues = { ...current }

      switch (taskProperty) {
        case TaskPropsEnum.DESCRIPTION:
          newValues[TaskPropsEnum.DESCRIPTION] = e.target.value
          break
        case TaskPropsEnum.URGENCY:
          newValues[TaskPropsEnum.URGENCY] = parseInt(e.target.value)
          break
        case TaskPropsEnum.IMPORTANCE:
          newValues[TaskPropsEnum.IMPORTANCE] = parseInt(e.target.value)
          break
      }

      return newValues
    })
  }

  if (showOnlyInputsMode || isBeingEdited)
    return (
      <tr>
        <td className="id">-</td>
        <td className="description">
          <input
            value={inputValues.description}
            onChange={(e) => propChangeHandler(TaskPropsEnum.DESCRIPTION, e)}
            type="text"
          />
        </td>
        <td className="urgency">
          <input
            type="number"
            min="0"
            max="10"
            value={inputValues.urgency}
            onChange={(e) => propChangeHandler(TaskPropsEnum.URGENCY, e)}
          />
        </td>
        <td className="importance">
          <input
            type="number"
            min="0"
            max="10"
            value={inputValues.importance}
            onChange={(e) => propChangeHandler(TaskPropsEnum.IMPORTANCE, e)}
          />
        </td>
        <td className="actions">
          <button onClick={saveClickHandler}>Save</button>
          <button onClick={cancelClickHandler}>Cancel</button>
        </td>
      </tr>
    )
  else
    return (
      <tr>
        <td className="id">{task.id}</td>
        <td className="description">{task.description}</td>
        <td className="urgency">{task.urgency}</td>
        <td className="importance">{task.importance}</td>
        <td className="actions">
          <button onClick={editClickHandler}>Edit</button>
          <button onClick={() => onDeleteClick(task)}>Delete</button>
        </td>
      </tr>
    )
}

export default EditableRow
