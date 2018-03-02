// @flow
import { handleActions } from 'redux-actions'

const initialState = {
  selectedId: null,
  filterText: null,
}

const setPayloadToState = (state, action) => (
  { ...state, ...action.payload }
)

const todoReducerMap = {
  FILTER_TODOS: setPayloadToState,
  SORT_TODOS: setPayloadToState,
  SELECT_TODO_DETAIL: setPayloadToState,
}

export default handleActions(todoReducerMap, initialState)
