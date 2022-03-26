import { useState } from 'react'

import { PrimaryButton, DangerButton } from '../Buttons'
import { TextTableDataInput, NumberTableDataInput } from '../TableDataInputs/'

const NewTaskTableRow = () => {
  const [description, setDescription] = useState('')
  const [urgency, setUrgency] = useState(0)
  const [importance, setImportance] = useState(0)

  // TODO: Validate input values

  return (
    <tr>
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
        <PrimaryButton>Create</PrimaryButton>
        <DangerButton>Cancel</DangerButton>
      </td>
    </tr>
  )
}

export default NewTaskTableRow
