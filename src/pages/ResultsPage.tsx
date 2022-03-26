import PageHeader from '../components/PageHeader'

const ResultsPage = () => {
  return (
    <>
      <PageHeader
        title="Your results"
        description="Based on your ratings, these are the recommended actions, acording to the framework."
        moreInfoLabel="How to interpret your results"
        moreInfoURL="#"
      ></PageHeader>

      <main>
        <header>
          <h2>Your prioritized task list</h2>
        </header>
        <table>
          <thead>
            <tr>
              <th className="priority" scope="col">
                Priority
              </th>
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="priority">1</td>
              <td className="id">1</td>
              <td className="description">This is a task description</td>
              <td className="urgency">9</td>
              <td className="importance">4</td>
            </tr>
          </tbody>
        </table>
        <button className="btn-new-task">+ Add new task</button>
      </main>

      <button className="btn-submit">Compute priority ranking</button>
    </>
  )
}

export default ResultsPage
