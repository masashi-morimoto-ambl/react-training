import { css } from '@emotion/react'
import { List } from '@/component/List'

const App: React.FunctionComponent = () => {
  return (
    <div css={AppStyle}>
      <List css={childStyle}></List>
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
