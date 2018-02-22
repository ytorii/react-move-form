// @flow
import { createAction } from 'redux-actions'
import ActionsType from '../constants/Actions'
import eventFormValidator from '../validators/eventFormValidator'

const actions ={
  addTodo: 'ADD_TODO',
}

export const addTodo = createAction(actions.addTodo)
