import { useState } from 'react'
import { InputTask, MainTemplate, TaskList } from './component'
import { ERROR_MESSAGES } from './component/enums'
import { TodosType } from './models'

const App: React.FunctionComponent = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [todos, setTodos] = useState<TodosType>([
    {
      text: 'タスク1',
    },
  ])

  const handleAddTask = (todo: string) => {
    if (todo === '') {
      setErrorMessage(ERROR_MESSAGES.required())
      return
    } else {
      setErrorMessage('')
    }
    setTodos((beforeTodos) => [...beforeTodos, { text: todo }])
  }

  return (
    <MainTemplate title="TODO">
      <InputTask onClickAdd={handleAddTask} errorMessage={errorMessage} />
      <TaskList todos={todos} />
    </MainTemplate>
  )
}

export default App
