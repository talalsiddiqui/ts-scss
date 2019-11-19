import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/home/Home'

const Routing = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  )
}

export default Routing
