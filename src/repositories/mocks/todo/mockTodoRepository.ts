import { API_URL } from '@/repositories/todo'
import { rest } from 'msw'

const createTodos = (count: number) => {
  return Array.from({ length: count }, (_, idx) => ({
    id: idx,
    task: `TODO${idx}`,
  }))
}
const getTodos = rest.get(API_URL.GET_TODOS, async (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(createTodos(5)), ctx.delay(1000))
})

const postTodos = rest.post(API_URL.POST_TODOS, async (req, res, ctx) => {
  return res(ctx.status(400), ctx.delay(1000))
})

export const handlers = [getTodos, postTodos]
