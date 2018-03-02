import { connect } from 'react-redux'
import TodoDetail from '../components/TodoDetail'

const mapStateToProps = state => {
  const { todos } = state.todo
  const { selectedId } = state.todoHot
  const selectedTodo = todos.find(todo => todo.id === selectedId)
  return { ...selectedTodo }
}

export default connect(mapStateToProps)(TodoDetail)
