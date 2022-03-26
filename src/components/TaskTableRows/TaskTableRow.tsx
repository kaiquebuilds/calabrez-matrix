import { DangerButton, SecondaryButton } from '../Buttons'
import TaskTableRowProps from './TaskTableRowProps'

const TaskTableRow = ({ task }: TaskTableRowProps) => {
  return (
    <tr>
      <td className="id">{task.id}</td>
      <td className="description">{task.description}</td>
      <td className="urgency">{task.urgency}</td>
      <td className="importance">{task.importance}</td>
      <td className="actions">
        <SecondaryButton>Edit</SecondaryButton>
        <DangerButton>Delete</DangerButton>
      </td>
    </tr>
  )
}

export default TaskTableRow
