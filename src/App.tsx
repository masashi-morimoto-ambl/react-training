import { useEffect, useState } from 'react'
import { InputTask, MainTemplate, TaskList } from './component'
import { ERROR_MESSAGES } from './component/enums'
import { GetTodosSchema } from './models'
import { todoRepository } from './repositories/todo/todoRepository'
import { uuid } from './utils'

const App: React.FunctionComponent = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [todos, setTodos] = useState<GetTodosSchema>([])

  // Todoを取得する
  const getTodos = async () => {
    const res = await todoRepository.getTodos()
    setTodos(res)
  }

  const handleAddTask = async (todo: string) => {
    if (todo === '') {
      setErrorMessage(ERROR_MESSAGES.required())
      return
    } else {
      setErrorMessage('')
    }
    try {
      // TODO保存
      await todoRepository.postTodos({
        todoId: uuid(),
        task: todo,
      })
      // TODO更新
      getTodos()
    } catch (error) {}
  }

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <MainTemplate title="TODO">
      <InputTask onClickAdd={handleAddTask} errorMessage={errorMessage} />
      <TaskList todos={todos} />
    </MainTemplate>
  )
}

export default App
