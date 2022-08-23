import { todoRepository } from '@/repositories/todo/todoRepository'
import { css } from '@emotion/react'

type Props = {
  className?: string
}
export const Sample: React.FunctionComponent = (props: Props) => {
  const handleMock = async () => {
    const todos = await todoRepository.getTodos()
    // eslint-disable-next-line no-console
    console.log(todos)
  }
  return (
    <div css={SampleStyle} className={props.className}>
      <button onClick={() => handleMock()}>Mock Test</button>
    </div>
  )
}

const SampleStyle = css({})
