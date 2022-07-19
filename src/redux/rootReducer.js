import { combineReducers } from 'redux';
import appReducer from './store/app';

const rootReducer = combineReducers({
  app: appReducer
});

export default rootReducer;