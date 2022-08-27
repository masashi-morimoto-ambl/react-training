import { css } from '@emotion/react'

const App: React.FunctionComponent = () => {
  return (
    <div css={AppStyle}>
      <h1>TODOアプリ</h1>
    </div>
  )
}

const AppStyle = css({
  width: 500,
  margin: '100px auto 0',
  backgroundColor: '#aaaaaa',
  '>h1': {
    color: '#eeeeee',
    textAlign: 'center',
  },
})

export default App
