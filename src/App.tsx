import { useState } from 'react'
import Task from './models/Task'
import HomePage from './pages/HomePage'
import ResultsPage from './pages/ResultsPage'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: 'Task description 1',
      importance: 8,
      urgency: 6,
    },
    {
      id: 2,
      description: 'Task description 2',
      importance: 9,
      urgency: 2,
    },
    {
      id: 3,
      description: 'Task description 3',
      importance: 3,
      urgency: 7,
    },
    {
      id: 4,
      description: 'Task description 4',
      importance: 2,
      urgency: 4,
    },
  ])
  const [showResults, setShowResults] = useState(false)

  const tasksSubmitHandler = (tasks: Task[]) => {
    const computeTaskScore = (task: Task) => {
      return (task.importance + task.urgency) / 2
    }

    const computedTasks: Task[] = tasks.map((task) => ({
      ...task,
      priority: computeTaskScore(task),
    }))

    setTasks(computedTasks)
    setShowResults(true)
  }

  const goBackClickHandler = (clearTasks?: boolean) => {
    if (clearTasks) setTasks([])

    setShowResults(false)
  }

  return showResults ? (
    <ResultsPage onGoBack={goBackClickHandler} tasks={tasks} />
  ) : (
    <HomePage tasks={tasks} onSubmitTasks={tasksSubmitHandler} />
  )
}

export default App
