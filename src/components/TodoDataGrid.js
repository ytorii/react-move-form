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

export default class TodoDataGrid extends Component {
  rowGetter = (i) => {
    return this.props.todos[i]
  }

  render() {
    return  (
      <ReactDataGrid
        enableCellSelect={true}
        columns={columns}
        rowGetter={this.rowGetter}
        rowsCount={this.props.todoSize}
        minHeight={500}
      />
    )
  }
}
