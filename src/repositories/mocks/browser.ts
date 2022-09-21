import { setupWorker } from 'msw'
import { handlers } from './tasks/handlers'
export const worker = setupWorker(...handlers)
