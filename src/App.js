import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'

import TodoForm from './containers/TodoForm'
import TodoDataGrid from './containers/TodoDataGrid'

import './css/App.css'
import './css/Body.css'

class App extends Component {
  render() {
    return (
     <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">React-Move exercise!</h1>
          </header>
          <div className="Body">
            <TodoForm />
            <TodoDataGrid />
          </div>
        </div>
     </Provider>
    );
  }
}

export default App
