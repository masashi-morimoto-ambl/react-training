import { color } from '@/styles/theme'
import { css } from '@emotion/react'

export const List: React.FunctionComponent = () => {
  return (
    <div css={SampleStyle}>
      <h1 css={{ color: color.mainFontColor }}>Sample Component</h1>
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
