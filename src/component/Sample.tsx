import { todoRepository } from '@/repositories/todo/todoRepository'
import { color } from '@/styles/theme'
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
      <h1 css={{ color: color.mainFontColor }}>Sample Component</h1>
      <button onClick={() => handleMock()}>Mock Test</button>
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
