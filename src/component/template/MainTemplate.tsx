import { color } from '@/styles/theme'
import { css } from '@emotion/react'

type Props = {
  children: React.ReactNode
  title?: string
}
export const MainTemplate = (props: Props) => {
  return (
    <section css={root}>
      {props.title && <h1 css={title}>{props.title}2</h1>}
      {props.children}
    </section>
  )
}

const root = css({
  width: 500,
  minHeight: 500,
  margin: '100px auto 0',
  padding: 10,
})

const title = css({
  borderBottom: `3px solid ${color.borderColor}`,
  color: color.titleColor,
  textAlign: 'center',
  paddingBottom: 10,
})
