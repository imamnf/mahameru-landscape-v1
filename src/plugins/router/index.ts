// This file sets up the Vue Router for the application. It imports the routes defined in 'vue-router/auto-routes'
// and sets up the layouts using the 'virtual:generated-layouts' plugin. The router is then exported for use in
// other parts of the application.

import type { App } from 'vue'
import type { RouteRecordRaw, Router } from 'vue-router'

import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'
import { setupLayouts } from 'virtual:generated-layouts'

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(routes as RouteRecordRaw[]),
})

export { router }

export default function (app: App<Element>): void {
  // This function is called when the application is created. It registers the router with the application.
  app.use(router)
}
