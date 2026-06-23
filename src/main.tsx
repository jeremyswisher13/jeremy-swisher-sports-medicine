import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ProgramProvider } from './store/programStore'
import { AppErrorBoundary } from './components/common/ErrorScreen'
import { router } from './router'
import './styles.css'
import './components.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppErrorBoundary>
      <ProgramProvider>
        <RouterProvider router={router} />
      </ProgramProvider>
    </AppErrorBoundary>
  </StrictMode>,
)
