import { type Pinia, createPinia } from 'pinia'
import type { App } from 'vue'

export const store: Pinia = createPinia()

export default function (app: App<Element>): void {
  app.use(store)
}
