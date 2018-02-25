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

const setPayloadToState = (state, action) => (
  { ...state, ...action.payload }
)

const todoReducerMap = {
  FILTER_TODOS: setPayloadToState,
  SORT_TODOS: setPayloadToState,
  SELECT_TODO_DETAIL: setPayloadToState,
  GROUP_BY_ATTRIBUTES: setPayloadToState,
  SET_EXPANDED_ROWS: setPayloadToState,
}

export default handleActions(todoReducerMap, initialState)
