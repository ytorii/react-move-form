// @flow
import { createAction } from 'redux-actions'

const actions ={
  addTodo: 'ADD_TODO',
  completeTodo: 'COMPLETE_TODO',
}

export const addTodo = createAction(actions.addTodo)
export const completeTodo = createAction(actions.completeTodo)
