import Task from '../../models/Task'
import { DangerButton, SecondaryButton } from '../Buttons'
import BaseTaskRowProps from './BaseTaskRowProps'

interface TaskTableRowProps extends BaseTaskRowProps {
  onEdit: () => void
  onDelete: () => void
}

const TaskRow = ({ task, onEdit, onDelete }: TaskTableRowProps) => {
  return (
    <tr>
      <td className="id">{task.id}</td>
      <td className="description">{task.description}</td>
      <td className="urgency">{task.urgency}</td>
      <td className="importance">{task.importance}</td>
      <td className="actions">
        <SecondaryButton onClick={onEdit}>Edit</SecondaryButton>
        <DangerButton onClick={onDelete}>Delete</DangerButton>
      </td>
    </tr>
  )
}

export default TaskRow
