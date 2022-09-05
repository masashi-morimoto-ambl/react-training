import React from 'react'
import { css } from '@emotion/react'
import { Task } from './Task'
import { useTable, Column } from 'react-table'

interface TaskListProps {
  tasks: Task[]
}

export const columns: Column<Task>[] = [
  { Header: 'タスク名', accessor: 'name' },
  { Header: '実行期限', accessor: 'deadLine' },
]

function TaskList({ tasks }: TaskListProps) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: tasks,
    })
  return (
    <table {...getTableProps()} css={Table}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} css={Border}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps()} css={Border}>
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

const Border = css({
  margin: 'auto',
  padding: 'auto',
  border: 'solid 1px #444',
  textAlign: 'center',
})
const Table = css({
  width: 700,
  margin: 'auto',
  borderCollapse: 'collapse',
})
export default TaskList
