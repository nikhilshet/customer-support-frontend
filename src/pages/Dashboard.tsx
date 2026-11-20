import { Layout } from '../components/Layout'
import { StatCard } from '../components/StatCard'
import './dashboard.css'

const recentTickets = [
  { id: '1042', subject: 'Login issue', status: 'Open' },
  { id: '1041', subject: 'Billing question', status: 'Closed' },
  { id: '1040', subject: 'Feature request', status: 'Open' },
  { id: '1039', subject: 'Password reset', status: 'Closed' },
]

export function Dashboard() {
  return (
    <Layout title="Dashboard">
      <section className="stats">
        <StatCard label="Open tickets" value={12} />
        <StatCard label="Resolved today" value={8} />
        <StatCard label="Customers" value={340} />
        <StatCard label="Avg. response" value="2.4h" />
      </section>

      <section className="panel">
        <h2 className="panel__heading">Recent tickets</h2>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Subject</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {recentTickets.map((ticket) => (
              <tr key={ticket.id}>
                <td>#{ticket.id}</td>
                <td>{ticket.subject}</td>
                <td>{ticket.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </Layout>
  )
}