import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TodoForm from '../components/TodoForm'

export default reduxForm({ form: 'todoForm' })(TodoForm)

