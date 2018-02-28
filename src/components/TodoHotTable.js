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
    sortIndicator: true
  },
  { data: 'startDate' },
  { data: 'deadlineDate' },
  { data: 'completed' },
]


export default class TodoHotTable extends Component {
  getCellValue = (row, column) => (
    this.refs.hot.hotInstance.getDataAtCell(row, column)
  )

  getIdValue = row => this.getCellValue(row, 0)

  render(){
    return (
      <div style={{padding: '20px' }} >
        <HotTable
          root='hot'
          ref='hot'
          data={this.props.todos}
          colHeaders={headers}
          columns={columns}
          columnSorting
          stretchH='all'
          onAfterChange={ (c, s) => {
            if (s !== 'loadData'){
              const row = c[0][0]
              const id = this.getIdValue(row)
              console.log(id)
            }
          }}
          onAfterSelection={ (r, c) => {
            const id = this.getIdValue(r)
            console.log(id)
          }}
        />
      </div>
    )
  }
}
