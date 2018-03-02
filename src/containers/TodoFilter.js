import { connect } from 'react-redux'

import TodoFilter from '../components/TodoFilter'
import { filterTodos } from '../actions/todo'

const mapStateToProps = state =>({
  filterText: state.todoHot.fliterText
})

export default connect(mapStateToProps, { filterTodos })(TodoFilter)
