import { client } from './client'
import { API_URL } from './url'

const getTodos = async () => {
  const response = client(API_URL.GET_TODOS, {
    method: 'GET',
  })
  return response
}

const postTodos = async (data: unknown) => {
  const response = client(API_URL.POST_TODOS, {
    method: 'POST',
    body: JSON.stringify(data),
  })
  return response
}

export const todoRepository = {
  getTodos,
  postTodos,
}
