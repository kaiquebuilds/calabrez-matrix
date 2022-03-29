import PageHeader from '../components/PageHeader'
import TasksTable from '../components/TasksTable'
import Task from '../models/Task'

interface IHomePageProps {
  tasks: Task[]
  onSubmitTasks: (tasks: Task[]) => void
}

const HomePage: React.FC<IHomePageProps> = ({ tasks, onSubmitTasks }) => {
  return (
    <>
      <PageHeader
        title="Calabrez Matrix"
        description="Proritize your tasks based on a decision framewok based on The Eisenhower Matrix."
        moreInfoLabel="How it works"
        moreInfoURL="#"
      />

      <TasksTable tasks={tasks} onSubmitTasks={onSubmitTasks} />
    </>
  )
}

export default HomePage
