// @flow
import { handleActions } from 'redux-actions'

const initialState = {
  selectedId: null,
  filters: {},
  sortColumn: null,
  sortDirection: null,
  groupBy: [],
  expandedRows: {},
}

const selectTodoDetail = (state, action) => {
  const { selectedId } = action.payload
  return { ...state, selectedId }
}

const filterTodos = (state, action) => {
  const { filters } = action.payload
  return { ...state, filters }
}

const sortTodos = (state, action) => {
  const { sortColumn, sortDirection } = action.payload
  return { ...state, sortColumn, sortDirection }
}

const groupByAttributes = (state, action) => {
  const { groupBy } = action.payload
  return { ...state, groupBy }
}

const setExpandedRows = (state, action) => {
  const { expandedRows } = action.payload
  return { ...state, expandedRows }
}

const todoReducerMap = {
  FILTER_TODOS: filterTodos,
  SORT_TODOS: sortTodos,
  SELECT_TODO_DETAIL: selectTodoDetail,
  GROUP_BY_ATTRIBUTES: groupByAttributes,
  SET_EXPANDED_ROWS: setExpandedRows,
}

export default handleActions(todoReducerMap, initialState)
