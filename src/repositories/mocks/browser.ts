import { setupWorker } from 'msw'
import { handlers } from './todo/handlers'
export const worker = setupWorker(...handlers)
