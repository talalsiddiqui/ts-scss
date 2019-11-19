import { combineReducers } from 'redux'
import { localizeReducer } from 'react-localize-redux'

// Reducer Interface to use across components
export interface IRootState {
  
}

const rootReducer = combineReducers({
  localize: localizeReducer,

})

export default rootReducer
