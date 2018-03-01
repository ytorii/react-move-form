import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'

import TodoForm from './containers/TodoForm'
import TodoHotTable from './containers/TodoHotTable'
import TodoDetail from './containers/TodoDetail'

import './css/App.css'
import './css/Body.css'
import 'bootswatch/dist/spacelab/bootstrap.min.css'

class App extends Component {
  render() {
    return (
     <Provider store={store()}>
        <div className="App">
          <header className='navbar navbar-expand-lg navbar-dark bg-primary'>
            <h1 className='navbar-brand'>React Data Grid exercise!</h1>
          </header>
          <div className='row'>
            <div className='col-lg-8'>
              <TodoHotTable />
            </div>
            <div className='col-lg-4'>
              <TodoDetail />
            </div>
          </div>
          <div className="Body row" style={{ paddingLeft: '20px' }}>
            <div className='col-lg-8'>
              <TodoForm />
            </div>
          </div>
        </div>
     </Provider>
    );
  }
}

export default App
