// @flow
import { handleActions } from 'redux-actions'
import ConvertCase from '../utils/ConvertCase'

const toCamelCase = payload => (
  payload.map(val => ConvertCase.camelKeysOf(val))
)

const toLocaleDate = date => (
  new Date(date).toLocaleDateString()
)

const initialState = {
  todos: []
}

const addTodo = (state, action) => {
  const id = state.todos.length + 1
  const { text, priority, startDate, deadlineDate } = action.payload
  return { ...state,
    lastTodoId: id,
    todos: [ ...state.todos,
      { id, text, priority, startDate, deadlineDate, completed: false }
    ],
  }
}

const completeTodo = (state, action) => {
  const id = action.payload
  return { ...state,
    todos: state.todos.map(todo =>
      (todo.id === id)
        ? { ...todo, completed: !todo.completed} : todo
    )
  }
}

const editTodo = (state, action) => {
  const { id, ...rest } = action.payload
  return { ...state,
    todos: state.todos.map(todo =>
      (todo.id === id)
        ? { ...todo, ...rest } : todo
    )
  }
}

const fetchTodos = (state, action) => {
  const todos = toCamelCase(action.payload)
  
  return { ...state,
    todos: todos.map( todo => ({
      ...todo,
      startDate: toLocaleDate(todo.startDate),
      deadlineDate: toLocaleDate(todo.deadlineDate),
    }))
  }
}

const todoReducerMap = {
  ADD_TODO: addTodo,
  COMPLETE_TODO: completeTodo,
  EDIT_TODO: editTodo,
  FETCH_TODOS: fetchTodos,
}

export default handleActions(todoReducerMap, initialState)
