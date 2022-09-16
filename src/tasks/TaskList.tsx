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
  const [nameError, setNameError] = useState<string>('')
  const [deadLineError, setDeadLineError] = useState<string>('')

  const editingTask = (index: number, nowName: string, nowDeadLine: string) => {
    setName(nowName)
    setDeadLine(nowDeadLine)
    props.onClickEdit(index)
  }
  const editDone = (index: number) => {
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
    props.onClickEditDone(index, name, deadLine)
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
  const editCancel = (index: number) => {
    setName('')
    setDeadLine('')
    setError('')
    setNameError('')
    setDeadLineError('')
    props.onClickCancel(index)
  }
  return (
    <>
      <div css={ErrorMessage}>
        {error && <p>{error}</p>}
        {nameError && <p>{nameError}</p>}
        {deadLineError && <p>{deadLineError}</p>}
      </div>
      <table css={Border}>
        <thead>
          <tr>
            <th>完了ボタン</th>
            <th>登録順</th>
            <th>タスク名</th>
            <th>実行期限</th>
            <th>編集</th>
            <th>削除</th>
          </tr>
        </thead>

        <tbody>
          {props.tasks.map((task: Task, index) =>
            task.isEdit ? (
              <tr
                key={index}
                style={{
                  textDecoration: task.isDone ? 'line-through' : 'none',
                }}
              >
                <td>
                  <p></p>
                </td>
                <td>{index + 1}</td>
                <td>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value)
                    }}
                  ></input>
                </td>
                <td>
                  <input
                    type="date"
                    value={deadLine}
                    onChange={(e) => {
                      setDeadLine(e.target.value)
                    }}
                  ></input>
                </td>
                <td>
                  <button
                    onClick={() => {
                      editDone(index)
                    }}
                  >
                    更新
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      editCancel(index)
                    }}
                  >
                    キャンセル
                  </button>
                </td>
              </tr>
            ) : (
              <tr
                key={index}
                style={{
                  textDecoration: task.isDone ? 'line-through' : 'none',
                }}
              >
                <td>
                  <input
                    type="checkbox"
                    checked={task.isDone}
                    onChange={() => props.doneTask(index)}
                  />
                </td>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td>{task.deadLine}</td>
                <td>
                  <button
                    onClick={() => {
                      editingTask(index, task.name, task.deadLine)
                    }}
                    disabled={task.isDone}
                  >
                    編集
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      props.onClickDelete(index)
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

const Border = css({
  width: 700,
  margin: 'auto',
  padding: 'auto',
  border: 'solid 1px #444',
  borderCollapse: 'collapse',
  textAlign: 'center',
})
const ErrorMessage = css({
  color: 'red',
  marginTop: 0,
  textAlign: 'center',
})
export default TaskList
