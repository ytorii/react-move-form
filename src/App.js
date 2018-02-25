import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'

import TodoForm from './containers/TodoForm'
import TodoDataGrid from './containers/TodoDataGrid'
import TodoDetail from './containers/TodoDetail'

import './css/App.css'
import './css/Body.css'
import 'bootswatch/dist/sandstone/bootstrap.min.css'

class App extends Component {
  render() {
    return (
     <Provider store={store}>
        <div className="App">
          <header className='navbar navbar-expand-lg navbar-dark bg-primary'>
            <h1 className='navbar-brand'>React Data Grid exercise!</h1>
          </header>
          <div className="Body">
            <TodoForm />
          </div>
          <div className='row'>
            <div className='col-lg-8'>
              <TodoDataGrid />
            </div>
            <div className='col-lg-4'>
              <TodoDetail />
            </div>
          </div>
        </div>
     </Provider>
    );
  }
}

export default App
