import { connect } from 'react-redux'

import { editTodo, filterTodos, sortTodos, selectTodoDetail } from '../actions/todo'
import TodoHotTable from '../components/TodoHotTable'

const mapStateToProps = state => (
  { ...state.todo, ...state.todoDataGrid }
)

export default connect(mapStateToProps,
  { editTodo, filterTodos, sortTodos, selectTodoDetail })(TodoHotTable)
