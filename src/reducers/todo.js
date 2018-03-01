// @flow
import { handleActions } from 'redux-actions'
import ConvertCase from '../utils/ConvertCase'

const toLocaleDate = date => (
  new Date(date).toLocaleDateString()
)

const localedTodo = todo => ({
  ...todo,
  startDate: toLocaleDate(todo.startDate),
  deadlineDate: toLocaleDate(todo.deadlineDate),
})


const initialState = {
  todos: []
}

const addTodo = (state, action) => {
  const todo = localedTodo(ConvertCase.camelKeysOf(action.payload))
  return { ...state,
    todos: [ ...state.todos, todo ],
  }
}

const editTodo = (state, action) => {
  const updatedTodo = localedTodo(ConvertCase.camelKeysOf(action.payload))
  return { ...state,
    todos: state.todos.map(todo =>
      (todo.id === updatedTodo.id) ? updatedTodo : todo
    )
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

const fetchTodos = (state, action) => {
  const todos = action.payload.map(val => ConvertCase.camelKeysOf(val))
  
  return { ...state,
    todos: todos.map(todo => localedTodo(todo))
  }
}

const todoReducerMap = {
  ADD_TODO: addTodo,
  COMPLETE_TODO: completeTodo,
  EDIT_TODO: editTodo,
  FETCH_TODOS: fetchTodos,
}

export default handleActions(todoReducerMap, initialState)
