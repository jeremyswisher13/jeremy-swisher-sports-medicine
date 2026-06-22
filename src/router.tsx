import { createHashRouter } from 'react-router-dom'
import { AppShell } from './components/layout/AppShell'
import { DashboardRoute } from './routes/Dashboard'
import { RegionsIndexRoute } from './routes/RegionsIndex'
import { RegionRoute } from './routes/Region'
import { ConditionRoute } from './routes/Condition'
import { ExerciseLibraryRoute } from './routes/ExerciseLibrary'
import { ProceduresIndexRoute } from './routes/Procedures'
import { ProcedureRoute } from './routes/Procedure'
import { ProgramBuilderRoute } from './routes/ProgramBuilder'
import { EvidenceRoute } from './routes/Evidence'
import { PrintHandoutRoute } from './routes/PrintHandout'
import { NotFound } from './routes/NotFound'

export const router = createHashRouter([
  {
    element: <AppShell />,
    children: [
      { index: true, element: <DashboardRoute /> },
      { path: 'regions', element: <RegionsIndexRoute /> },
      { path: 'region/:regionId', element: <RegionRoute /> },
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
  { path: '/program/print', element: <PrintHandoutRoute /> },
])
