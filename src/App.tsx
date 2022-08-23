import { css } from '@emotion/react'
import { Sample } from '@/component/Sample'

const App: React.FunctionComponent = () => {
  return (
    <div css={AppStyle}>
      <Sample css={childStyle}></Sample>
    </div>
  )
}

const AppStyle = css({
  marginTop: 100,
  paddingLeft: 10,
  paddingRight: 10,
})

const childStyle = css({
  border: '1px solid',
})

export default App
