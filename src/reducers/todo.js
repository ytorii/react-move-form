// @flow
import { handleActions } from 'redux-actions'

const initialState = {
  lastTodoId: 1,
  todos: [
    { id: 1, text: 'Go to the company', completed: false },
  ],
}

const addTodo = (state, action) => {
  const id = state.lastTodoId + 1
  const text = action.payload
  return {
    lastTodoId: id,
    todos: [ ...state.todos, { id, text, completed: false } ],
  }
}

const completeTodo = (state, action) => {
  const targetId = action.payload
  return { ...state,
    todos: state.todos.map(todo =>
      (todo.id === targetId)
        ? { ...todo, completed: !todo.completed} : todo
    )
  }
}

const todoReducerMap = {
  ADD_TODO: addTodo,
  COMPLETE_TODO: completeTodo,
}

export default handleActions(todoReducerMap, initialState)
