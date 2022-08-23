import { color } from '@/styles/theme'
import { css } from '@emotion/react'

type Props = {
  className?: string
}
export const List: React.FunctionComponent = (props: Props) => {
  return (
    <div css={SampleStyle} className={props.className}>
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
