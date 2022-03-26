import { useState } from 'react'
import Task from '../../models/Task'
import { PrimaryButton, DangerButton } from '../Buttons'
import { TextTableDataInput, NumberTableDataInput } from '../TableDataInputs'
import BaseTaskRowProps from './BaseTaskRowProps'

interface EditingTaskRowProps extends BaseTaskRowProps {
  onSubmit: (updatedTask: Task) => void
  onCancelEdit: () => void
}

const EditingTaskRow = ({
  task,
  onSubmit,
  onCancelEdit,
}: EditingTaskRowProps) => {
  const [description, setDescription] = useState(task.description)
  const [urgency, setUrgency] = useState(task.urgency)
  const [importance, setImportance] = useState(task.importance)

  const submitTaskClickHandler = () => {
    task.description = description
    task.urgency = urgency
    task.importance = importance
    onSubmit(task)
  }

  return (
    <tr>
      <td className="id">{task.id}</td>
      <TextTableDataInput
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="description"
      />
      <NumberTableDataInput
        value={urgency}
        onChange={(e) => setUrgency(parseInt(e.target.value))}
        className="urgency"
      />
      <NumberTableDataInput
        value={importance}
        onChange={(e) => setImportance(parseInt(e.target.value))}
        className="importance"
      />
      <td className="actions">
        <PrimaryButton onClick={submitTaskClickHandler}>Save</PrimaryButton>
        <DangerButton onClick={onCancelEdit}>Discard</DangerButton>
      </td>
    </tr>
  )
}

export default EditingTaskRow
