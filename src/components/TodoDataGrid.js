import React, { Component } from 'react'
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

const handleGridRowsUpdated = ({rowIds, updated}) => {
  console.log(rowIds)
  console.log(updated)
}

export default props => {
  const rowGetter = (i) => props.todos[i]

  return (
    <ReactDataGrid
      enableCellSelect={true}
      columns={columns}
      rowGetter={rowGetter}
      rowsCount={props.todoSize}
      minHeight={500}
      onGridRowsUpdated={handleGridRowsUpdated}
    />
  )
}
