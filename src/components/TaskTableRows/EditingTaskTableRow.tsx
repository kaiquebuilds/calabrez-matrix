import { PrimaryButton, DangerButton } from '../Buttons'
import { TextTableDataInput, NumberTableDataInput } from '../TableDataInputs/'
import TaskTableRowProps from './TaskTableRowProps'

const EditingTaskTableRow = ({ task }: TaskTableRowProps) => {
  return (
    <tr>
      <td className="id">{task.id}</td>
      <TextTableDataInput
        onChange={() => {}}
        value={task.description}
        className="description"
      />
      <NumberTableDataInput
        className="urgency"
        onChange={() => {}}
        value={task.urgency}
      />
      <NumberTableDataInput
        className="importance"
        onChange={() => {}}
        value={task.importance}
      />
      <td className="actions">
        <PrimaryButton>Save</PrimaryButton>
        <DangerButton>Discard</DangerButton>
      </td>
    </tr>
  )
}

export default EditingTaskTableRow
