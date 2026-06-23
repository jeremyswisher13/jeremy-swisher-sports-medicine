import { Component, type ReactNode } from 'react'
import { useRouteError } from 'react-router-dom'

function goDashboard() {
  window.location.hash = '#/'
  window.location.reload()
}

/**
 * Branded full-page error fallback. Self-contained (its own header/brand) so it
 * renders correctly even when the app shell itself failed. Inline SVG + plain
 * DOM only — no app content/icon imports — so the error screen can't itself
 * throw. Technical details show in dev only.
 */
export function ErrorScreen({ error }: { error?: unknown }) {
  const message =
    error instanceof Error ? error.message : typeof error === 'string' ? error : ''
  const stack = error instanceof Error ? error.stack : undefined
  const isDev = import.meta.env.DEV

  return (
    <div className="error-screen" role="alert">
      <div className="error-card">
        <div className="error-mark" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            width="34"
            height="34"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        </div>
        <span className="error-eyebrow">Jeremy Swisher MD · Sports Medicine</span>
        <h1>Something went wrong</h1>
        <p>
          The app ran into an unexpected error. Your saved programs and progress are stored on
          this device and aren’t affected. Try reloading the page, or head back to the dashboard.
        </p>
        <div className="error-actions">
          <button type="button" className="primary-action" onClick={() => window.location.reload()}>
            Reload the page
          </button>
          <button type="button" className="ghost-action" onClick={goDashboard}>
            Back to dashboard
          </button>
        </div>
        {isDev && message && (
          <details className="error-details">
            <summary>Technical details (development only)</summary>
            <pre>{stack ? `${message}\n\n${stack}` : message}</pre>
          </details>
        )}
      </div>
    </div>
  )
}

/** Router errorElement: renders the branded screen for thrown route errors. */
export function RouteError() {
  const error = useRouteError()
  return <ErrorScreen error={error} />
}

/** Top-level safety net for errors outside the router (e.g. providers). */
export class AppErrorBoundary extends Component<{ children: ReactNode }, { error: unknown }> {
  state: { error: unknown } = { error: null }

  static getDerivedStateFromError(error: unknown) {
    return { error }
  }

  componentDidCatch(error: unknown) {
    console.error('App error boundary caught:', error)
  }

  render() {
    if (this.state.error) return <ErrorScreen error={this.state.error} />
    return this.props.children
  }
}
