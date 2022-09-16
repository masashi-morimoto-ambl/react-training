import React, { useState } from 'react'
import { css } from '@emotion/react'
import { Task } from './MockTasks'

type Props = {
  addTask: (task: Task) => void
}

const TaskForm = (props: Props) => {
  const [name, setName] = useState<string>('')
  const [deadLine, setDeadLine] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [nameError, setNameError] = useState<string>('')
  const [deadLineError, setDeadLineError] = useState<string>('')

  const newTask: Task = {
    name,
    deadLine,
    isDone: false,
    isEdit: false,
  }
  const addNewTask = () => {
    if (name == '' && deadLine == '') {
      errorState('入力してください', '', '')
      return
    } else if (name == '') {
      errorState('', 'タスク名を入力してください', '')
      return
    } else if (deadLine == '') {
      errorState('', '', '実行期限を入力してください')
      return
    }
    props.addTask(newTask)
    clearForm()
  }
  const clearForm = () => {
    setName('')
    setDeadLine('')
    setError('')
    setNameError('')
    setDeadLineError('')
  }
  const errorState = (
    strNoName: string,
    strNoDeadLine: string,
    strNoBoth: string,
  ) => {
    setError(strNoName)
    setNameError(strNoDeadLine)
    setDeadLineError(strNoBoth)
  }

  return (
    <form css={formStyle}>
      {error && <p css={ErrorMessage}>{error}</p>}
      {nameError && <p css={ErrorMessage}>{nameError}</p>}
      {deadLineError && <p css={ErrorMessage}>{deadLineError}</p>}
      <label htmlFor="name">タスク名：</label>
      <input
        type="text"
        value={name}
        placeholder="タスク名"
        onChange={(e) => {
          setName(e.target.value)
        }}
      />
      <br />
      <label htmlFor="deadLine">実行期限：</label>
      <input
        type="date"
        value={deadLine}
        placeholder="実行期限"
        onChange={(e) => {
          setDeadLine(e.target.value)
        }}
      />
      <br />
      <button type="button" onClick={clearForm}>
        クリア
      </button>
      <button type="button" onClick={addNewTask}>
        追加
      </button>
    </form>
  )
}

const formStyle = css({
  paddingTop: 50,
  width: 700,
  margin: 'auto',
  textAlign: 'center',
})
const ErrorMessage = css({
  margin: 0,
  color: 'red',
})
export default TaskForm
