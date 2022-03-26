import { PrimaryButton, DangerButton } from '../Buttons'
import { TextTableDataInput, NumberTableDataInput } from '../TableDataInputs/'

const NewTaskTableRow = () => {
  return (
    <tr>
      <td className="id">-</td>
      <TextTableDataInput className="description" />
      <NumberTableDataInput className="urgency" />
      <NumberTableDataInput className="importance" />
      <td className="actions">
        <PrimaryButton>Create</PrimaryButton>
        <DangerButton>Cancel</DangerButton>
      </td>
    </tr>
  )
}

export default NewTaskTableRow
