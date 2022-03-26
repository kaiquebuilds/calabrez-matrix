import { useState } from 'react'
import Task from '../../models/Task'

import { PrimaryButton, DangerButton } from '../Buttons'
import { TextTableDataInput, NumberTableDataInput } from '../TableDataInputs'

interface NewTaskTableRowProps {
  onSubmit: (task: Task) => void
  onCancel: () => void
}

const NewTaskRow = ({ onSubmit, onCancel }: NewTaskTableRowProps) => {
  const [description, setDescription] = useState('')
  const [urgency, setUrgency] = useState(0)
  const [importance, setImportance] = useState(0)

  const createTaskClickHandler = () => {
    onSubmit(new Task(undefined, description, urgency, importance))
  }

  return (
    <tr className="create-task-row">
      <td className="id">-</td>
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
        <PrimaryButton onClick={createTaskClickHandler}>Create</PrimaryButton>
        <DangerButton onClick={onCancel}>Cancel</DangerButton>
      </td>
    </tr>
  )
}

export default NewTaskRow
