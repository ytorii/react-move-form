import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import store from './store'

import TodoForm from './containers/TodoForm'
import TodoFilter from './containers/TodoFilter'
import TodoHotTable from './containers/TodoHotTable'
import TodoDetail from './containers/TodoDetail'

import 'bootswatch/dist/spacelab/bootstrap.min.css'
import './css/App.css'
import './css/Body.css'

class App extends Component {
  render() {
    return (
     <Provider store={store()}>
       <div className='App'>
         <header className='navbar navbar-expand-lg navbar-dark bg-primary'>
           <h1 className='navbar-brand'>Handsontable exercise!</h1>
         </header>
         <div className='container-fluid' style={{ paddingRight: '20px' }} >
           <div className='row' style={{ paddingTop: '20px' }} >
             <div className='col-lg-8'>
               <TodoHotTable />
             </div>
             <div className='col-lg-4 card border-primary mb-3' style={{ paddingTop: '20px' }} >
               <Tabs defaultIndex={0}>
                 <TabList className="nav nav-tabs">
                   <Tab className="nav-link active">詳細</Tab>
                   <Tab className="nav-link active">追加</Tab>
                 </TabList>
                 <TabPanel>
                   <TodoFilter />
                   <TodoDetail />
                 </TabPanel>
                 <TabPanel>
                   <TodoForm />
                 </TabPanel>
               </Tabs>
             </div>
           </div>
         </div>
       </div>
     </Provider>
    );
  }
}

export default App
