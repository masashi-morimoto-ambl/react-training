import { css } from '@emotion/react'
import { MOCK_TASKS } from './MockTasks'
import TaskList from './TaskList'

const TasksPage: React.FunctionComponent = () => {
  return (
    <>
      <div css={AppStyle}>
        <h1>TODOアプリ</h1>
      </div>
      <TaskList tasks={MOCK_TASKS} />
    </>
  )
}

const AppStyle = css({
  width: 500,
  margin: 'auto',
  backgroundColor: '#aaaaaa',
  '>h1': {
    color: '#eeeeee',
    textAlign: 'center',
  },
})

export default TasksPage
