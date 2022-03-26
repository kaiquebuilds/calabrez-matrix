import { PrimaryButton } from '../components/Buttons'
import PageHeader from '../components/PageHeader'
import TasksTable from '../components/TasksTable'

const HomePage = () => {
  return (
    <>
      <PageHeader
        title="Calabrez Matrix"
        description="Proritize your tasks based on a decision framewok based on The Eisenhower Matrix."
        moreInfoLabel="How it works"
        moreInfoURL="#"
      />

      <TasksTable />

      <footer className="page-footer">
        <PrimaryButton>Compute priority ranking</PrimaryButton>
      </footer>
    </>
  )
}

export default HomePage
