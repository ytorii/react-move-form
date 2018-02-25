import React from 'react'
import { connect } from 'react-redux'

import TodoFormComponent from '../components/TodoForm'
import { addTodo } from '../actions/todo'

const TodoForm = ({ addTodo, values }) => (
  <TodoFormComponent
    onSubmit={ values => addTodo(values) }
  />
)

export default connect(null, { addTodo })(TodoForm)
