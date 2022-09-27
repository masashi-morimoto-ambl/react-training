import { css } from '@emotion/react'
import TaskList from './TaskList'
import TaskForm from './TaskForm'
import { useEffect, useState } from 'react'
import { Task } from './MockTasks'
import { tasksRepository } from '@/repositories/tasks/tasksRepository'

const TasksPage: React.FunctionComponent = () => {
  const [tasks, setTasks] = useState<Task[]>()

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const todos = await tasksRepository.getTasks()
        setTasks(todos)
      } catch (error) {
        throw error
      }
    }
    fetchTasks()
  }, [])

  const addTask = async (task: Task) => {
    const fetchTasks = async () => {
      try {
        const response = await tasksRepository.postTask(task)
        setTasks(response)
      } catch (error) {
        throw error
      }
    }
    fetchTasks()
  }
  const onClickDelete = async (taskId: number) => {
    const fetchTasks = async () => {
      try {
        const response = await tasksRepository.deleteTask(taskId)
        setTasks(response)
      } catch (error) {
        throw error
      }
    }
    fetchTasks()
  }
  const editingTask = (taskId: number) => {
    if (tasks === undefined) {
      return
    }
    const newTodos = tasks.map((task) => {
      if (task.taskId === taskId) {
        task.isEdit = true
      }
      return task
    })
    setTasks(newTodos)
  }
  const editDone = async (taskId: number) => {
    const fetchTasks = async () => {
      try {
        const response = await tasksRepository.editTask(taskId)
        setTasks(response)
      } catch (error) {
        throw error
      }
    }
    fetchTasks()
  }
  const editCancel = (taskId: number) => {
    if (tasks === undefined) {
      return
    }
    const newTodos = tasks.map((task) => {
      if (task.taskId === taskId) {
        task.isEdit = false
      }
      return task
    })
    setTasks(newTodos)
  }
  const doneTask = (taskId: number) => {
    if (tasks === undefined) {
      return
    }
    const newTodos = tasks.map((task) => {
      if (task.taskId === taskId) {
        task.isDone = !task.isDone
      }
      return task
    })
    setTasks(newTodos)
  }
  return (
    <>
      <div css={TitleStyle}>
        <h1>TODOアプリ</h1>
      </div>
      {tasks && (
        <TaskList
          tasks={tasks}
          onClickDelete={onClickDelete}
          onClickEdit={editingTask}
          onClickEditDone={editDone}
          onClickCancel={editCancel}
          doneTask={doneTask}
        />
      )}
      <TaskForm addTask={addTask} />
    </>
  )
}

const TitleStyle = css({
  width: 500,
  margin: 'auto',
  backgroundColor: '#aaaaaa',
  '>h1': {
    color: '#eeeeee',
    textAlign: 'center',
  },
})

export default TasksPage
