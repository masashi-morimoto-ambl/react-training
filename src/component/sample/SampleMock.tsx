import { todoRepository } from '@/repositories/todo/todoRepository'
import { color } from '@/styles/theme'
import { css } from '@emotion/react'

type Props = {
  className?: string
}
export const SampleMock: React.FunctionComponent = (props: Props) => {
  const handleGetMock = async () => {
    const todos = await todoRepository.getTodos()
    // eslint-disable-next-line no-console
    console.log(todos)
  }

  const handlePostMock = async () => {
    const todosData: unknown = {
      todoId: '0',
      task: 'TODO1',
    }
    const response = await todoRepository.postTodos(todosData)
    // eslint-disable-next-line no-console
    console.log(response)
  }

  return (
    <div css={SampleStyle} className={props.className}>
      <h1 css={{ color: color.mainFontColor }}>GET/POST Sample</h1>
      <button onClick={() => handleGetMock()}>データを取得します</button>
      <button onClick={() => handlePostMock()}>データを登録します</button>
    </div>
  )
}

const SampleStyle = css({
  width: 500,
  minHeight: 500,
  margin: '0 auto',
  padding: 10,
  backgroundColor: '#EFEFEF',
})
