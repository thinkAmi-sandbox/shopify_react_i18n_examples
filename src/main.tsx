import React from 'react'
import ReactDOM from 'react-dom/client'
import {Outlet, RootRoute, Route, Router, RouterProvider} from "@tanstack/react-router";
import {Index} from "./components/pages/Index.tsx";
import {I18nContext, I18nManager} from "@shopify/react-i18n";
import {Replacement} from "./components/pages/Replacement.tsx";

// shopify/react-i18n
const locale = 'ja'
const i18nManager = new I18nManager({
  locale
})

// TanStack Router
const Root = () => {
  return (
    <Outlet />
  )
}
const rootRoute = new RootRoute({component: Root})

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index
})

const replacementRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/replacement',
  component: Replacement
})

const routeTree = rootRoute.addChildren([indexRoute, replacementRoute])
const router = new Router({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nContext.Provider value={i18nManager}>
      <RouterProvider router={router} />
    </I18nContext.Provider>
  </React.StrictMode>
)
