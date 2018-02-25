// @flow
import { handleActions } from 'redux-actions'

const getRandomDate = (start, end) => (
  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString()
)

const getRandomInt = (min, max) => (
  Math.floor( Math.random() * (max - min + 1) ) + min
)

const todosTextArray= [
  'Take a train and a bus',
  'Go to the company',
  'Study about domain',
  'Study about React',
  'Study about Postgres',
  'Tell about the Redux',
  'Decide infrastructure configurations',
  'Develop application insanity fast',
  'Release new application',
  'Contribute to a company!',
]

const createTodosArray = (todosTextArray) => (
  todosTextArray.map( (text, idx) => (
    { id: idx + 1,
      text,
      priority: getRandomInt(1, 5),
      startDate: getRandomDate(new Date(2018, 3, 1), new Date()),
      deadlineDate: getRandomDate(new Date(), new Date(2018, 7, 1)),
      completed: false,
    }
  ))
)

const initialState = {
  lastTodoId: 1,
  todos: createTodosArray(todosTextArray),
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
