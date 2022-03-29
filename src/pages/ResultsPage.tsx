import { SecondaryButton, PrimaryButton } from '../components/Buttons'
import PageHeader from '../components/PageHeader'
import Task from '../models/Task'

import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js'

import { Scatter } from 'react-chartjs-2'
import { useState } from 'react'

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend)

const CHART_OPTIONS = {
  scales: {
    x: {
      min: 0,
      max: 10,
      title: {
        text: 'Urgency',
        display: true,
      },
    },
    y: {
      min: 0,
      max: 10,
      title: {
        text: 'Importance',
        display: true,
      },
    },
  },
  elements: { point: { radius: 7, hoverRadius: 10 } },
}

interface IResultsPageProps {
  onGoBack: (clearTasks?: boolean) => void
  tasks: Task[]
}

const ResultsPage: React.FC<IResultsPageProps> = ({ tasks, onGoBack }) => {
  const [chartData] = useState(() => {
    const datasetDo = {
      label: 'Do',
      data: tasks
        .filter((task) => task.importance > 5 && task.urgency > 5)
        .map((task) => ({ x: task.urgency, y: task.importance })),
      backgroundColor: '#dc2626',
    }

    const datasetSchedule = {
      label: 'Schedule',
      data: tasks
        .filter((task) => task.importance > 5 && task.urgency <= 5)
        .map((task) => ({ x: task.urgency, y: task.importance })),
      backgroundColor: '#fb923c',
    }

    const datasetDelegate = {
      label: 'Delegate',
      data: tasks
        .filter((task) => task.importance <= 5 && task.urgency > 5)
        .map((task) => ({ x: task.urgency, y: task.importance })),
      backgroundColor: '#fcd34d',
    }

    const datasetDiscard = {
      label: 'Discard',
      data: tasks
        .filter((task) => task.importance <= 5 && task.urgency <= 5)
        .map((task) => ({ x: task.urgency, y: task.importance })),
      backgroundColor: '#a8a29e',
    }

    return {
      datasets: [datasetDo, datasetSchedule, datasetDelegate, datasetDiscard],
    }
  })

  return (
    <>
      <PageHeader
        title="Your results"
        description="Based on your ratings, these are the recommended actions, acording to the framework."
        moreInfoLabel="How to interpret your results"
        moreInfoURL="#"
      >
        <SecondaryButton onClick={() => onGoBack(false)}>
          Go back
        </SecondaryButton>
        <SecondaryButton onClick={() => onGoBack(true)}>
          Create new list
        </SecondaryButton>
      </PageHeader>

      <section className="table-container">
        <header>
          <h2>Priority ratings</h2>
        </header>
        <table>
          <thead>
            <tr>
              <th className="priority" scope="col">
                Suggested priority
              </th>
              <th className="priority-rating" scope="col">
                Priority rating
              </th>
              <th className="id" scope="col">
                Task id
              </th>
              <th className="description" scope="col">
                Task description
              </th>
              <th className="urgency" scope="col">
                Urgency rating
              </th>
              <th className="importance" scope="col">
                Importance rating
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks
              .sort((a, b) => b.priority - a.priority)
              .map((task, index) => (
                <tr key={task.id}>
                  <td className="priority">{index + 1}</td>
                  <td className="priority-rating">{task.priority}</td>
                  <td className="id">{task.id}</td>
                  <td className="description">{task.description}</td>
                  <td className="urgency">{task.urgency}</td>
                  <td className="importance">{task.importance}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>

      <section>
        <header>
          <h2>Matrix</h2>
        </header>
        <main>
          <Scatter data={chartData} options={CHART_OPTIONS} />
        </main>
      </section>
    </>
  )
}

export default ResultsPage
