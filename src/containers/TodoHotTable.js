import { connect } from 'react-redux'

import { editTodo, fetchTodos, filterTodos, selectTodoDetail } from '../actions/todo'
import TodoHotTable from '../components/TodoHotTable'

const mapStateToProps = state => (
  { ...state.todo, ...state.todoDataGrid }
)

export default connect(mapStateToProps,
  { editTodo, fetchTodos, filterTodos, selectTodoDetail })(TodoHotTable)
