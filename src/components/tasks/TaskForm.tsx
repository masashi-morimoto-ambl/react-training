import React, { useState } from 'react'
import { css } from '@emotion/react'
import { Task } from './MockTasks'

type Props = {
  addTask: (task: Task) => void
}

const TaskForm = (props: Props) => {
  const [taskId, setTaskId] = useState(0)
  const [name, setName] = useState('')
  const [deadLine, setDeadLine] = useState('')
  const [error, setError] = useState('')

  const newTask: Task = {
    taskId,
    name,
    deadLine,
    isDone: false,
    isEdit: false,
  }
  const addNewTask = () => {
    if (name == '' && deadLine == '') {
      setErrorState('入力してください')
      return
    } else if (name == '') {
      setErrorState('タスク名を入力してください')
      return
    } else if (deadLine == '') {
      setErrorState('実行期限を入力してください')
      return
    }
    setTaskId(taskId + 1)
    props.addTask(newTask)
    clearForm()
  }
  const clearForm = () => {
    setName('')
    setDeadLine('')
    setError('')
  }
  const setErrorState = (errorName: string) => {
    setError(errorName)
  }

  return (
    <form css={formStyle} method="post">
      {error && <p css={errorMessage}>{error}</p>}
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
const errorMessage = css({
  margin: 0,
  color: 'red',
})
export default TaskForm
