// @flow
import { handleActions } from 'redux-actions'
import _ from 'lodash'
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

const fetchTodos = (state, action) => {
  const convertedTodos = action.payload.map(val => ConvertCase.camelKeysOf(val))
  const localedTodos = convertedTodos.map(todo => localedTodo(todo))
  const sortedTodos = sortTodosByColumn(localedTodos, 'id', undefined)
  
  return { ...state,
    todos: sortedTodos
  }
}

const sortTodosByColumn = (todos, column, order) => {
  if(order === undefined){
    return _.orderBy(todos, ['id'],['asc'])
  }

  const orderBy = order ? 'asc' : 'desc'

  return  _.orderBy(todos, [column], [orderBy])
}

const sortTodos = (state, action) => {
  const { column, order } = action.payload
  return { ...state,
    todos: sortTodosByColumn(state.todos, column, order)
  }
}

const todoReducerMap = {
  ADD_TODO: addTodo,
  EDIT_TODO: editTodo,
  FETCH_TODOS: fetchTodos,
  SORT_TODOS: sortTodos,
}

export default handleActions(todoReducerMap, initialState)
