import { client } from './client'
import { API_URL } from './url'

const getTodos = async () => {
  const response = client(API_URL.GET_TODOS, {
    method: 'GET',
  })
  return response
}

export const todoRepository = {
  getTodos,
}
