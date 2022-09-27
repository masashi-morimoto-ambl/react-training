export type Task = {
  taskId: number
  name: string
  deadLine: string
  isDone: boolean
  isEdit: boolean
}

export const MOCK_TASKS: Task[] = [
  {
    taskId: 1,
    name: '料理',
    deadLine: '2022-01-01',
    isDone: false,
    isEdit: false,
  },
  {
    taskId: 2,
    name: 'ゴミ出し',
    deadLine: '2022-01-01',
    isDone: true,
    isEdit: false,
  },
  {
    taskId: 3,
    name: 'お迎え',
    deadLine: '2022-01-01',
    isDone: false,
    isEdit: false,
  },
  {
    taskId: 4,
    name: 'メール確認',
    deadLine: '2022-01-01',
    isDone: false,
    isEdit: false,
  },
  {
    taskId: 5,
    name: 'お店予約',
    deadLine: '2022-01-01',
    isDone: false,
    isEdit: false,
  },
  {
    taskId: 6,
    name: 'あああああああああ',
    deadLine: '2022-01-01',
    isDone: true,
    isEdit: false,
  },
]
