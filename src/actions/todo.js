// @flow
import { createAction } from 'redux-actions'

const actions ={
  addTodo: 'ADD_TODO',
  editTodo: 'EDIT_TODO',
  completeTodo: 'COMPLETE_TODO',
  filterTodos: 'FILTER_TODOS',
  sortTodos: 'SORT_TODOS',
}

const setEditedTodo = (rowIds, updated) => {
  const id = rowIds[0]
  return { id, ...updated }
}

export const addTodo = createAction(actions.addTodo)
export const completeTodo = createAction(actions.completeTodo)
export const editTodo = createAction(actions.editTodo, setEditedTodo)

export const filterTodos = createAction(actions.filterTodos)
export const sortTodos = createAction(actions.sortTodos)
