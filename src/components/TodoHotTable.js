import React, { Component } from 'react'
import HotTable from 'react-handsontable'

const headers = [ 'ID', 'やること', '優先度', 'いつから', '期限', '終わった？' ]
const columns = [
  {
    data: 'id',
    readOnly: true
  },
  { data: 'text' },
  {
    data: 'priority',
    sortIndicator: true,
    type: 'dropdown',
    source: [1, 2, 3, 4, 5],
  },
  { data: 'startDate',
    type: 'date',
    dateFormat: 'YYYY/MM/DD',
    correctFormat: true,
    defaultDate: '2018/01/01',
  },
  {
    data: 'deadlineDate',
    type: 'date',
    dateFormat: 'YYYY/MM/DD',
    correctFormat: true,
    defaultDate: '2018/01/01',
  },
  {
    data: 'completed',
    type: 'checkbox',
  }
]


export default class TodoHotTable extends Component {
  componentDidMount() {
    this.props.fetchTodos()
  }

  getCellValue = (row, column) => (
    this.refs.hot.hotInstance.getDataAtCell(row, column)
  )

  getIdValue = row => this.getCellValue(row, 0)

  afterChangeHandler = (c, s) => {
    if (s !== 'loadData'){
      const id = this.getIdValue(c[0][0])
      const param = { [c[0][1]]: c[0][3] }
      this.props.editTodo({id, ...param})
    }
  }

  afterSelectionHandler = (r, c) => {
    const selectedId = this.getIdValue(r)
    this.props.selectTodoDetail({selectedId})
  }

  afterSortHandler = (ci, order) => {
    const column = columns[ci].data
    this.props.sortTodos({column, order})
  }

  render(){
    return (
      <div style={{paddingLeft: '20px' }} >
        <HotTable
          root='hot'
          ref='hot'
          data={this.props.todos}
          colHeaders={headers}
          columns={columns}
          columnSorting
          stretchH='all'
          onAfterChange={this.afterChangeHandler}
          onAfterSelection={this.afterSelectionHandler}
          onAfterColumnSort={this.afterSortHandler}
        />
      </div>
    )
  }
}
