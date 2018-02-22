// @flow
import { createAction } from 'redux-actions'

const actions ={
  addTodo: 'ADD_TODO',
}

export const addTodo = createAction(actions.addTodo)
