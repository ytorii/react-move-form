// @flow
import { createAction } from 'redux-actions'

const actions ={
  addTodo: 'ADD_TODO',
  editTodo: 'EDIT_TODO',
  completeTodo: 'COMPLETE_TODO',
}

const setEditedTodo = (rowIds, updated) => {
  const id = rowIds[0]
  return { id, ...updated }
}

export const addTodo = createAction(actions.addTodo)
export const completeTodo = createAction(actions.completeTodo)
export const editTodo = createAction(actions.editTodo, setEditedTodo)
