// @flow
import { handleActions } from 'redux-actions'

const initialState = {
  lastTodoId: 1,
  todos: [
    { id: 1, text: 'Go to the company' },
  ],
}

const nextTodo = (id, text) => (
  { id, text }
)


const addTodo = {
  next: (state, action) => {
    const id = state.lastTodoId + 1
    const text = action.payload
    return {
      todos: [ ...state.todos, nextTodo(id, text) ],
      lastTodoId: id,
    }
  },
}

const todoReducerMap = {
  ADD_TODO: addTodo,
}

export default handleActions(todoReducerMap, initialState)
