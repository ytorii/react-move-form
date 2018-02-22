import { createStore } from 'redux';
import Reducers from './reducers'

const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(Reducers);

export default store;

