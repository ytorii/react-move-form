import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import todoReducer from './todo';


export default combineReducers({
  form: reduxFormReducer,
  todo: todoReducer,
});
