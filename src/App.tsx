import React from 'react'
import { Router } from 'react-router-dom'
import storeConfig from './configureStore'
import { Provider } from 'react-redux'
import Routes from './routing/Routing'
import { history } from './routing/history'
import 'antd/dist/antd.css'
import './App.scss'

function App() {
  const store = storeConfig()

  return (
    <div className='main-container'>
      <Provider store={store}>
        <Router history={history}>
          <Routes />
        </Router>
      </Provider>
    </div>
  )
}

export default App
