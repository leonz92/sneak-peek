import authReducer from './authReducer';
import searchReducer from './searchReducer';
import { combineReducers } from 'redux';
import sneakerReducer from './sneakerReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  results: searchReducer,
  singleSneak: sneakerReducer
});

export default rootReducer;
