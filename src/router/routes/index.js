import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - KO.Date'

// ** Default Route
const DefaultRoute = '/login'

// ** Merge Routes
const Routes = [
  {
    path: '/home',
    component: lazy(() => import('../../views/Home'))
  },
  {
    path: '/connections',
    component: lazy(() => import('../../views/ConnectionsPage'))
  },
  {
    path: '/my-data',
    component: lazy(() => import('../../views/MyDataPage'))
  },
  {
    path: '/login',
    component: lazy(() => import('../../views/Login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/error',
    component: lazy(() => import('../../views/Error')),
    layout: 'BlankLayout'
  }
]

export { DefaultRoute, TemplateTitle, Routes }
