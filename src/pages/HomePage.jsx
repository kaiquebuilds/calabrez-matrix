import PageHeader from '../components/PageHeader'

const HomePage = () => {
  return (
    <>
      <PageHeader
        title="Calabrez Matrix"
        description="Proritize your tasks based on a decision framewok based on The Eisenhower Matrix."
        moreInfoLabel="How it works"
        moreInfoURL="#"
      >
        <button>Clear task list</button>
      </PageHeader>

      <main>
        <table>
          <caption hidden>Your task list</caption>
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
            <tr>
              <td className="id">1</td>
              <td className="description">Make this page awesome</td>
              <td className="urgency">9</td>
              <td className="importance">4</td>
              <td className="actions">
                <button>Remove task</button>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  )
}

export default HomePage
