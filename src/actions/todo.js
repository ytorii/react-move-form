// @flow
import { createAction } from 'redux-actions'
import { todo } from '../api'

const actions ={
  addTodo: 'ADD_TODO',
  completeTodo: 'COMPLETE_TODO',
  editTodo: 'EDIT_TODO',
  fetchTodos: 'FETCH_TODOS',
  filterTodos: 'FILTER_TODOS',
  sortTodos: 'SORT_TODOS',
  selectTodoDetail: 'SELECT_TODO_DETAIL',
}

export const addTodo = createAction(actions.addTodo)
export const completeTodo = createAction(actions.completeTodo)
export const editTodo = createAction(actions.editTodo)
export const fetchTodos = createAction(actions.fetchTodos, todo.all)

export const filterTodos = createAction(actions.filterTodos)
export const sortTodos = createAction(actions.sortTodos)
export const selectTodoDetail = createAction(actions.selectTodoDetail)

