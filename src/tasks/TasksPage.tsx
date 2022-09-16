import { css } from '@emotion/react'
import TaskList from './TaskList'
import TaskForm from './TaskForm'
import { useState } from 'react'
import { MOCK_TASKS, Task } from './MockTasks'

const TasksPage: React.FunctionComponent = () => {
  const [tasks, setTasks] = useState(MOCK_TASKS)
  const addTask = (task: Task) => {
    const newTask = [...tasks, task]
    setTasks(newTask)
  }
  const onClickDelete = (index: number) => {
    const deletedTodoList = [...tasks]
    deletedTodoList.splice(index, 1)
    setTasks(deletedTodoList)
  }
  const editingTask = (index: number) => {
    const newTodos = tasks.map((task, taskIndex) => {
      if (taskIndex === index) {
        task.isEdit = true
      }
      return task
    })
    setTasks(newTodos)
  }
  const editDone = (index: number, name: string, deadLine: string) => {
    const newTodos = tasks.map((task, taskIndex) => {
      if (taskIndex === index) {
        task.name = name
        task.deadLine = deadLine
        task.isEdit = false
      }
      return task
    })
    setTasks(newTodos)
  }
  const editCancel = (index: number) => {
    const newTodos = tasks.map((task, taskIndex) => {
      if (taskIndex === index) {
        task.isEdit = false
      }
      return task
    })
    setTasks(newTodos)
  }
  const doneTask = (index: number) => {
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
      <TaskList
        tasks={tasks}
        onClickDelete={onClickDelete}
        onClickEdit={editingTask}
        onClickEditDone={editDone}
        onClickCancel={editCancel}
        doneTask={doneTask}
      />
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
