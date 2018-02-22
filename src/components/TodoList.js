import React from 'react'
import Todo from './Todo'

export default props => (
  <ul>
    { props.todos.map( todo => (
      <Todo key={todo.id} text={todo.text} />
    ))}
  </ul>
)
