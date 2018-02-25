import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import todoReducer from './todo';
import todoDataGridReducer from './todoDataGrid';


export default combineReducers({
  form: reduxFormReducer,
  todo: todoReducer,
  todoDataGrid: todoDataGridReducer,
});
