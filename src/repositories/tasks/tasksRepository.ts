import { Task } from '@/components'
import { client } from './client'
import { API_URL } from './url'

const getTasks = async () => {
  const response = client<Task[]>(API_URL.GET_TASKS, {
    method: 'GET',
  })
  return response
}

const postTask = async (data: unknown) => {
  const response = client<Task[]>(API_URL.POST_TASKS, {
    method: 'POST',
    body: JSON.stringify(data),
  })
  return response
}

const editTask = async (index: number) => {
  const response = client<Task[]>(API_URL.PUT_TASKS, {
    method: 'PUT',
    body: JSON.stringify(index),
  })
  return response
}

const deleteTask = async (index: number) => {
  const response = client<Task[]>(API_URL.DELETE_TASKS, {
    method: 'DELETE',
    body: JSON.stringify(index),
  })
  return response
}

export const tasksRepository = {
  getTasks,
  postTask,
  editTask,
  deleteTask,
}
