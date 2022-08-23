import { css } from '@emotion/react'

export const List: React.FunctionComponent = () => {
  return (
    <div css={SampleStyle}>Sample Component</div>
  )
}

const SampleStyle = css({
  width: 500,
  minHeight: 500,
  margin: '0 auto',
  padding: 10,
  backgroundColor: '#EFEFEF'
})
