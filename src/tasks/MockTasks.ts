export type Task = {
  name: string
  deadLine: string
  isDone: boolean
  isEdit: boolean
}
export const MOCK_TASKS: Task[] = [
  {
    name: '料理',
    deadLine: '2022-01-01',
    isDone: false,
    isEdit: false,
  },
  {
    name: 'ゴミ出し',
    deadLine: '2022-01-01',
    isDone: true,
    isEdit: false,
  },
  {
    name: 'お迎え',
    deadLine: '2022-01-01',
    isDone: false,
    isEdit: false,
  },
  {
    name: 'メール確認',
    deadLine: '2022-01-01',
    isDone: false,
    isEdit: false,
  },
  {
    name: 'お店予約',
    deadLine: '2022-01-01',
    isDone: false,
    isEdit: false,
  },
  {
    name: 'あああああああああ',
    deadLine: '2022-01-01',
    isDone: true,
    isEdit: false,
  },
]
