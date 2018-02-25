import React from 'react'
import ReactDataGrid from 'react-data-grid'
const PropTypes = require('prop-types');
PropTypes.component = PropTypes.element;
require('react').PropTypes = PropTypes;
require('react').createClass = require('create-react-class')
const { Toolbar, Data: { Selectors } } = require('react-data-grid-addons');

const columns = [
  {
    key: 'id',
    name: 'ID',
    width: 80
  },
  {
    key: 'text',
    name: 'Text',
    editable: true,
    filterable: true,
    sortable: true,
  },
  {
    key: 'priority',
    name: 'Priority',
    filterable: true,
    sortable: true,
  },
  {
    key: 'startDate',
    name: 'Start Date',
    filterable: true,
    sortable: true
  },
  {
    key: 'deadlineDate',
    name: 'Deadline Date',
    filterable: true,
    sortable: true
  },
  {
    key: 'completed',
    name: 'Completed',
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
