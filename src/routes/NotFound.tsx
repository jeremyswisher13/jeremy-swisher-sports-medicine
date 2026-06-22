import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <section className="not-found">
      <h1>Page not found</h1>
      <p>That page doesn’t exist or may have moved.</p>
      <Link className="primary-action" to="/">
        Back to dashboard
      </Link>
    </section>
  )
}
