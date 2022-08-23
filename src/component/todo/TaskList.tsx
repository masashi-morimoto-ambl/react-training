import { TodosType } from '@/models'
import { Task } from './Task'

type Props = {
  todos: TodosType
}

export const TaskList = (props: Props) => {
  return (
    <>
      {props.todos.map((todo) => (
        <ul>
          <Task text={todo.text} />
        </ul>
      ))}
    </>
  )
}
