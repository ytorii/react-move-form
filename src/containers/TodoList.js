import { connect } from 'react-redux'

import TodoListComponent from '../components/TodoList'

const mapStateToProps = state => ({
  todos: state.todo.todos,
})

export default connect(mapStateToProps)(TodoListComponent)
