import { connect } from 'react-redux'

import TodoDataGrid from '../components/TodoDataGrid'

const mapStateToProps = state => ({
  todos: state.todo.todos,
  todoSize: state.todo.lastTodoid,
})

export default connect(mapStateToProps)(TodoDataGrid)
