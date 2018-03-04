import { connect } from 'react-redux'

import  * as Actions from '../actions/todo'
import TodoHotTable from '../components/TodoHotTable'

const filterTodoByText = (todos, string) => {
  if(string){
    const regexp = new RegExp(`${string}`, 'i')
    return todos.filter(todo => regexp.test(todo.text))
  } else {
    return todos
  }
}

const mapStateToProps = state => ({
  todos: filterTodoByText(state.todo.todos, state.todoHot.filterText)
})

export default connect(mapStateToProps,
  { ...Actions })(TodoHotTable)
