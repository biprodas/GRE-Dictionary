import authReducer from './authReducer'
import magooshReducer from './magooshReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: authReducer,
  magooshWord: magooshReducer
});

export default rootReducer;