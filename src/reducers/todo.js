// @flow
import { handleActions } from 'redux-actions'

const initialState = {
  lastTodoId: 1,
  todos: [
    { id: 1, text: 'Go to the company', completed: false },
  ],
  filters: {},
  sortColumn: null,
  sortDirection: null,
}

const addTodo = (state, action) => {
  const id = state.lastTodoId + 1
  const text = action.payload
  return { ...state,
    lastTodoId: id,
    todos: [ ...state.todos, { id, text, completed: false } ],
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
  const { id, text } = action.payload
  return { ...state,
    todos: state.todos.map(todo =>
      (todo.id === id)
        ? { ...todo, text } : todo
    )
  }
}

const filterTodos = (state, action) => {
  const { filters } = action.payload
  return { ...state, 
    filters,
  }
}

const sortTodos = (state, action) => {
  const { sortColumn, sortDirection } = action.payload
  return { ...state, 
    sortColumn,
    sortDirection,
  }
}

const todoReducerMap = {
  ADD_TODO: addTodo,
  COMPLETE_TODO: completeTodo,
  EDIT_TODO: editTodo,
  FILTER_TODOS: filterTodos,
  SORT_TODOS: sortTodos,
}

export default handleActions(todoReducerMap, initialState)
