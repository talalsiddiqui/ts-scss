import React from 'react'
import classes from './index.module.scss'
import { Translate } from 'react-localize-redux'

const Home = () => {
  return (
    <div className={classes.container}>
      <Translate id='login.title' />
    </div>
  )
}

export default Home
