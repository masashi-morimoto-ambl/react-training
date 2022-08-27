import { GetTodosSchema } from '@/models'
import { Task } from './Task'

type Props = {
  todos: GetTodosSchema
}

export const TaskList = (props: Props) => {
  return (
    <>
      {props.todos.map((todo) => (
        <ul key={todo.todoId}>
          <Task text={todo.task} />
        </ul>
      ))}
    </>
  )
}
