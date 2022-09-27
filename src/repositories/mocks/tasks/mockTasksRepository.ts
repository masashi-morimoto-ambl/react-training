import { API_URL } from '@/repositories/tasks'
import { rest } from 'msw'

const createTasks = () => {
  return [
    {
      taskId: 0,
      name: '料理',
      deadLine: '2022-01-01',
      isDone: false,
      isEdit: false,
    },
    {
      taskId: 1,
      name: 'ゴミ出し',
      deadLine: '2022-01-01',
      isDone: true,
      isEdit: false,
    },
    {
      taskId: 2,
      name: 'お迎え',
      deadLine: '2022-01-01',
      isDone: false,
      isEdit: false,
    },
    {
      taskId: 3,
      name: 'メール確認',
      deadLine: '2022-01-01',
      isDone: false,
      isEdit: false,
    },
    {
      taskId: 4,
      name: 'お店予約',
      deadLine: '2022-01-01',
      isDone: false,
      isEdit: false,
    },
    {
      taskId: 5,
      name: 'あああああああああ',
      deadLine: '2022-01-01',
      isDone: true,
      isEdit: false,
    },
  ]
}

const getTasks = rest.get(API_URL.GET_TASKS, async (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(createTasks()), ctx.delay(100))
})

const postTask = rest.post(API_URL.POST_TASKS, async (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(createTasks()), ctx.delay(100))
})

const putTask = rest.put(API_URL.PUT_TASKS, async (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(createTasks()), ctx.delay(100))
})

const deleteTask = rest.delete(API_URL.DELETE_TASKS, async (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(createTasks()), ctx.delay(100))
})

export const handlers = [getTasks, postTask, putTask, deleteTask]
