import React from 'react'
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


export default props => {
  return (
    <div style={{padding: '20px' }} >
      <HotTable
        data={props.todos}
        colHeaders={headers}
        columns={columns}
        columnSorting
        stretchH="all"
        onAfterChange={ (c, s) => {
          if (s !== 'loadData'){
            console.log(this)
            const id = props.todos[c[0][0]].id
            console.log(id)
          }
        }}
        onAfterSelection={ (r, c) => {
          const id = props.todos[r].id
          console.log(id)
        }}
        onAfterColumnSort={ (cs, t) => {
          console.log(cs, t)
        }}
      />
    </div>
  )
}
