import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware()

  const isDev = !process.env.production
  // @ts-ignore
  const composeEnhancers = (isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(sagaMiddleware)
  ))

  // sagaMiddleware.run(sagaName)

  return store
}
