import { useState } from 'react'
import { PrimaryButton, DangerButton } from '../Buttons'
import { TextTableDataInput, NumberTableDataInput } from '../TableDataInputs/'
import TaskTableRowProps from './TaskTableRowProps'

const EditingTaskTableRow = ({ task }: TaskTableRowProps) => {
  const [description, setDescription] = useState(task.description)
  const [urgency, setUrgency] = useState(task.urgency)
  const [importance, setImportance] = useState(task.importance)

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
        <PrimaryButton>Save</PrimaryButton>
        <DangerButton>Discard</DangerButton>
      </td>
    </tr>
  )
}

export default EditingTaskTableRow
