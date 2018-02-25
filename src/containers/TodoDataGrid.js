import { connect } from 'react-redux'

import { editTodo, filterTodos, sortTodos, selectTodoDetail } from '../actions/todo'
import TodoDataGrid from '../components/TodoDataGrid'

const mapStateToProps = state => (
  { ...state.todo }
)

export default connect(mapStateToProps,
  { editTodo, filterTodos, sortTodos, selectTodoDetail })(TodoDataGrid)
