import { color } from '@/styles/theme'
import { useState } from 'react'

type Props = {
  onClickAdd: (todo: string) => void
  errorMessage: string
}

export const InputTask = (props: Props) => {
  const [text, setText] = useState('')
  return (
    <div>
      <input
        type="text"
        name=""
        value={text}
        onChange={(v) => {
          setText(v.target.value)
        }}
      />
      <button
        type="button"
        onClick={() => {
          setText('')
          props.onClickAdd(text)
        }}
      >
        追加
      </button>
      {props.errorMessage && (
        <p css={{ color: color.warning }}>{props.errorMessage}</p>
      )}
    </div>
  )
}
