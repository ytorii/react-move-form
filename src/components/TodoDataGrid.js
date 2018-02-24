import React from 'react'
import ReactDataGrid from 'react-data-grid'

const columns = [
  {
    key: 'id',
    name: 'ID',
    width: 80
  },
  {
    key: 'text',
    name: 'Text',
    editable: true
  },
  {
    key: 'completed',
    name: 'Completed',
  }
]

const rowGetterFactory = todos => i => todos[i]

export default props => {
  const handleGridRowsUpdated = ({rowIds, updated}) => {
    props.editTodo(rowIds, updated)
  }

  return (
    <ReactDataGrid
      enableCellSelect={true}
      columns={columns}
      rowGetter={rowGetterFactory(props.todos)}
      rowsCount={props.todoSize}
      minHeight={500}
      onGridRowsUpdated={handleGridRowsUpdated}
    />
  )
}
