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
    const response = await tasksRepository.postTask(task)
    setTasks(response)
  }
  const onClickDelete = async (index: number) => {
    const response = await tasksRepository.deleteTask(index)
    setTasks(response)
  }
  const editingTask = (index: number) => {
    if (tasks === undefined) {
      return
    }
    const newTodos = tasks.map((task, taskIndex) => {
      if (taskIndex === index) {
        task.isEdit = true
      }
      return task
    })
    setTasks(newTodos)
  }
  const editDone = async (index: number) => {
    const response = await tasksRepository.editTask(index)
    setTasks(response)
  }
  const editCancel = (index: number) => {
    if (tasks === undefined) {
      return
    }
    const newTodos = tasks.map((task, taskIndex) => {
      if (taskIndex === index) {
        task.isEdit = false
      }
      return task
    })
    setTasks(newTodos)
  }
  const doneTask = (index: number) => {
    if (tasks === undefined) {
      return
    }
    const newTodos = tasks.map((task, taskIndex) => {
      if (taskIndex === index) {
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
