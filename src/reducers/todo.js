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
  lastTodoId: 10,
  todos: createTodosArray(todosTextArray),
}

const addTodo = (state, action) => {
  const id = state.lastTodoId + 1
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
  const { id, text } = action.payload
  return { ...state,
    todos: state.todos.map(todo =>
      (todo.id === id)
        ? { ...todo, text } : todo
    )
  }
}

const todoReducerMap = {
  ADD_TODO: addTodo,
  COMPLETE_TODO: completeTodo,
  EDIT_TODO: editTodo,
}

export default handleActions(todoReducerMap, initialState)
