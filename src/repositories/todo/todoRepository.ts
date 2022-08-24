import { PostTodoSchema, GetTodosSchema } from '@/models'
import { client } from './client'
import { API_URL } from './url'

// TODOを取得する
const getTodos = async () => {
  const response = client<GetTodosSchema>(API_URL.GET_TODOS, {
    method: 'GET',
  })
  return response
}

// TODOをPOSTする
const postTodos = async (value: PostTodoSchema) => {
  const body: PostTodoSchema = {
    ...value,
  }
  const response = await client(API_URL.POST_TODOS, {
    method: 'POST',
    body: JSON.stringify(body),
  })
  return response
}

export const todoRepository = {
  getTodos,
  postTodos,
}
