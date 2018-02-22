import { connect } from 'react-redux'

import TodoListComponent from '../components/TodoList'
import { completeTodo } from '../actions/todo'

const mapStateToProps = state => ({
  todos: state.todo.todos,
})

export default connect(mapStateToProps, { completeTodo })(TodoListComponent)
