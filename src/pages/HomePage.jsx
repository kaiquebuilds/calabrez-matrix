import PageHeader from '../components/PageHeader'

import { useEffect, useState } from 'react'

let lastId = 0

const HomePage = () => {
  const [tasks, setTasks] = useState([])
  const [inputValues, setInputValues] = useState({
    description: '',
    urgency: 0,
    importance: 0,
  })

  const onDescriptionChange = (e) => {
    setInputValues((current) => ({
      ...current,
      description: e.target.value,
    }))
  }

  const onUrgencyChange = (e) => {
    setInputValues((current) => ({
      ...current,
      urgency: e.target.value,
    }))
  }

  const onImportanceChange = (e) => {
    setInputValues((current) => ({
      ...current,
      importance: e.target.value,
    }))
  }

  const submitCurrentValues = () => {
    const task = {
      id: ++lastId,
      description: inputValues.description,
      urgency: inputValues.urgency,
      importance: inputValues.importance,
    }

    setTasks((currentTasks) => [...currentTasks, task])
  }

  const deleteTask = (taskId) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id != taskId))
  }

  const resetInputs = () => {
    setInputValues({
      description: '',
      urgency: 0,
      importance: 0,
    })
  }

  const clearAll = () => {
    resetInputs()
    setTasks([])
  }

  return (
    <>
      <PageHeader
        title="Calabrez Matrix"
        description="Proritize your tasks based on a decision framewok based on The Eisenhower Matrix."
        moreInfoLabel="How it works"
        moreInfoURL="#"
      ></PageHeader>

      <main>
        <header>
          <h2>Your task list</h2>
          <button onClick={clearAll}>Clear task list</button>
        </header>
        <table>
          <thead>
            <tr>
              <th className="id" scope="col">
                Id
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
              <th className="actions" scope="col">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td className="id">{task.id}</td>
                <td className="description">{task.description}</td>
                <td className="urgency">{task.urgency}</td>
                <td className="importance">{task.importance}</td>
                <td className="actions">
                  <button onClick={() => deleteTask(task.id)}>
                    Delete task
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td className="id">{lastId + 1}</td>
              <td className="description">
                <input
                  value={inputValues.description}
                  onChange={onDescriptionChange}
                  type="text"
                />
              </td>
              <td className="urgency">
                <input
                  type="number"
                  min="0"
                  max="10"
                  value={inputValues.urgency}
                  onChange={onUrgencyChange}
                />
              </td>
              <td className="importance">
                <input
                  type="number"
                  min="0"
                  max="10"
                  value={inputValues.importance}
                  onChange={onImportanceChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button
          className="btn-new-task"
          onClick={() => {
            submitCurrentValues()
            resetInputs()
          }}
        >
          + Add new task
        </button>
      </main>

      <button className="btn-submit">Compute priority ranking</button>
    </>
  )
}

export default HomePage
