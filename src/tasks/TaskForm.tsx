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
      setError('入力してください')
      setNameError('')
      setDeadLineError('')
      return
    } else if (name == '') {
      setError('')
      setNameError('タスク名を入力してください')
      setDeadLineError('')
      return
    } else if (deadLine == '') {
      setError('')
      setNameError('')
      setDeadLineError('実行期限を入力してください')
      return
    }
    props.addTask(newTask)
    setName('')
    setDeadLine('')
    setError('')
    setNameError('')
    setDeadLineError('')
  }
  const clearForm = () => {
    setName('')
    setDeadLine('')
    setError('')
    setNameError('')
    setDeadLineError('')
  }

  return (
    <form css={formStyle}>
      {error && <p style={{ color: 'red', margin: 0 }}>{error}</p>}
      {nameError && <p style={{ color: 'red' }}>{nameError}</p>}
      {deadLineError && <p style={{ color: 'red' }}>{deadLineError}</p>}
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

export default TaskForm
