import { lazy, Suspense } from 'react'
import { createHashRouter } from 'react-router-dom'
import { AppShell } from './components/layout/AppShell'
import { NotFound } from './routes/NotFound'

// Route page components are code-split so the initial load stays small; their
// heavier dependencies (illustrations, media, per-page UI) load on demand.
const DashboardRoute = lazy(() =>
  import('./routes/Dashboard').then((m) => ({ default: m.DashboardRoute })),
)
const RegionsIndexRoute = lazy(() =>
  import('./routes/RegionsIndex').then((m) => ({ default: m.RegionsIndexRoute })),
)
const RegionRoute = lazy(() =>
  import('./routes/Region').then((m) => ({ default: m.RegionRoute })),
)
const ConditionRoute = lazy(() =>
  import('./routes/Condition').then((m) => ({ default: m.ConditionRoute })),
)
const ExerciseLibraryRoute = lazy(() =>
  import('./routes/ExerciseLibrary').then((m) => ({
    default: m.ExerciseLibraryRoute,
  })),
)
const ProceduresIndexRoute = lazy(() =>
  import('./routes/Procedures').then((m) => ({ default: m.ProceduresIndexRoute })),
)
const ProcedureRoute = lazy(() =>
  import('./routes/Procedure').then((m) => ({ default: m.ProcedureRoute })),
)
const ProgramBuilderRoute = lazy(() =>
  import('./routes/ProgramBuilder').then((m) => ({
    default: m.ProgramBuilderRoute,
  })),
)
const EvidenceRoute = lazy(() =>
  import('./routes/Evidence').then((m) => ({ default: m.EvidenceRoute })),
)
const SportsIndexRoute = lazy(() =>
  import('./routes/Sports').then((m) => ({ default: m.SportsIndexRoute })),
)
const SportRoute = lazy(() =>
  import('./routes/Sport').then((m) => ({ default: m.SportRoute })),
)
const PrintHandoutRoute = lazy(() =>
  import('./routes/PrintHandout').then((m) => ({ default: m.PrintHandoutRoute })),
)

export const router = createHashRouter([
  {
    element: <AppShell />,
    children: [
      { index: true, element: <DashboardRoute /> },
      { path: 'regions', element: <RegionsIndexRoute /> },
      { path: 'region/:regionId', element: <RegionRoute /> },
      { path: 'sports', element: <SportsIndexRoute /> },
      { path: 'sport/:sportId', element: <SportRoute /> },
      { path: 'condition/:conditionId', element: <ConditionRoute /> },
      { path: 'exercises', element: <ExerciseLibraryRoute /> },
      { path: 'procedures', element: <ProceduresIndexRoute /> },
      { path: 'procedure/:procedureId', element: <ProcedureRoute /> },
      { path: 'program', element: <ProgramBuilderRoute /> },
      { path: 'evidence', element: <EvidenceRoute /> },
      { path: '*', element: <NotFound /> },
    ],
  },
  // Print handout renders outside the app shell (no sidebar/topbar).
  {
    path: '/program/print',
    element: (
      <Suspense fallback={<div className="route-loading">Loading…</div>}>
        <PrintHandoutRoute />
      </Suspense>
    ),
  },
])
