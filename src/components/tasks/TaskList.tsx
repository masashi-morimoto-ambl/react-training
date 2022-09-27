import React, { useState } from 'react'
import { css } from '@emotion/react'
import { Task } from './MockTasks'

type Props = {
  tasks: Task[]
  onClickDelete: (index: number) => void
  onClickEdit: (index: number) => void
  onClickEditDone: (index: number, name: string, deadLine: string) => void
  onClickCancel: (index: number) => void
  doneTask: (index: number) => void
}
const TaskList = (props: Props) => {
  const [name, setName] = useState<string>('')
  const [deadLine, setDeadLine] = useState<string>('')
  const [error, setError] = useState<string>('')

  const editingTask = (index: number, nowName: string, nowDeadLine: string) => {
    setName(nowName)
    setDeadLine(nowDeadLine)
    props.onClickEdit(index)
  }
  const editDone = (index: number) => {
    setError('')
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
    props.onClickEditDone(index, name, deadLine)
  }
  const setErrorState = (errorName: string) => {
    setError(errorName)
  }
  const editCancel = (index: number) => {
    setName('')
    setDeadLine('')
    setError('')
    props.onClickCancel(index)
  }
  return (
    <>
      {error && <p css={errorMessage}>{error}</p>}
      <table css={border}>
        <thead>
          <tr>
            <th>完了ボタン</th>
            <th>#</th>
            <th>タスク名</th>
            <th>実行期限</th>
            <th>編集</th>
            <th>削除</th>
          </tr>
        </thead>

        <tbody>
          {props.tasks.map((task: Task) =>
            task.isEdit ? (
              <tr key={task.taskId} css={isDoneLine(task)}>
                <td>
                  <p></p>
                </td>
                <td>{task.taskId}</td>
                <td>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value)
                    }}
                  />
                </td>
                <td>
                  <input
                    type="date"
                    value={deadLine}
                    onChange={(e) => {
                      setDeadLine(e.target.value)
                    }}
                  />
                </td>
                <td>
                  <button
                    onClick={() => {
                      editDone(task.taskId)
                    }}
                  >
                    更新
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      editCancel(task.taskId)
                    }}
                  >
                    キャンセル
                  </button>
                </td>
              </tr>
            ) : (
              <tr key={task.taskId} css={isDoneLine(task)}>
                <td>
                  <input
                    type="checkbox"
                    checked={task.isDone}
                    onChange={() => props.doneTask(task.taskId)}
                  />
                </td>
                <td>{task.taskId}</td>
                <td>{task.name}</td>
                <td>{task.deadLine}</td>
                <td>
                  <button
                    onClick={() => {
                      editingTask(task.taskId, task.name, task.deadLine)
                    }}
                    disabled={task.isDone}
                  >
                    編集
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      props.onClickDelete(task.taskId)
                    }}
                  >
                    削除
                  </button>
                </td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </>
  )
}

const border = css({
  width: 700,
  margin: 'auto',
  padding: 'auto',
  border: 'solid 1px #444',
  borderCollapse: 'collapse',
  textAlign: 'center',
})
const isDoneLine = (task: Task) =>
  css({
    textDecoration: task.isDone ? 'line-through' : 'none',
  })
const errorMessage = css({
  color: 'red',
  marginTop: 0,
  textAlign: 'center',
})
export default TaskList
