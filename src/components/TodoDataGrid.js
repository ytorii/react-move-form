import React from 'react'
import ReactDataGrid from 'react-data-grid'
import TodoCompletedFormatter from './formatter/todoCompletedFormatter'

const PropTypes = require('prop-types');
PropTypes.component = PropTypes.element;
require('react').PropTypes = PropTypes;
require('react').createClass = require('create-react-class')
const { Toolbar, Data: { Selectors } } = require('react-data-grid-addons');

const columns = [
  {
    key: 'id',
    name: 'ID',
    width: 40,
  },
  {
    key: 'text',
    name: 'やること',
    editable: true,
    filterable: true,
    sortable: true,
  },
  {
    key: 'priority',
    name: '優先度',
    filterable: true,
    sortable: true,
    width: 80,
  },
  {
    key: 'startDate',
    name: 'いつから',
    filterable: true,
    sortable: true,
    width: 150,
  },
  {
    key: 'deadlineDate',
    name: '期限',
    filterable: true,
    sortable: true,
    width: 120,
  },
  {
    key: 'completed',
    name: '終わった？',
    formatter: TodoCompletedFormatter,
    width: 120,
  },
]

export default props => {
  const createRows = () => {
    const { todos, filters, sortColumn, sortDirection } = props
    return { rows: todos, filters, sortColumn, sortDirection }
  }
  
  const getRows = () => Selectors.getRows(createRows())
  
  const getRowsSize = () => getRows().length
  
  const rowGetter = rowIdx => {
    const rows = getRows()
    return rows[rowIdx]
  }

  const handleGridRowsUpdated = ({rowIds, updated}) => {
    props.editTodo(rowIds, updated)
  }

  const handleGridSort = (sortColumn, sortDirection) => {
    props.sortTodos({ sortColumn: sortColumn, sortDirection: sortDirection })
  }

  const handleFilterChange = (filter) => {
    const newFilters = Object.assign({}, props.filters)
    if (filter.filterTerm) {
      newFilters[filter.column.key] = filter
    } else {
      delete newFilters[filter.column.key]
    }

    props.filterTodos({ filters: newFilters })
  }

  const onClearFilters = () => {
    props.filterTodos({ filters: {} });
  }

  return (
    <ReactDataGrid
      columns={columns}
      rowGetter={rowGetter}
      rowsCount={getRowsSize()}
      minHeight={500}
      enableCellSelect={true}
      onGridRowsUpdated={handleGridRowsUpdated}
      toolbar={<Toolbar enableFilter={true}/>}
      onGridSort={handleGridSort}
      onAddFilter={handleFilterChange}
      onClearFilters={onClearFilters}
    />
  )
}
