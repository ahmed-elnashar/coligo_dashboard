import { combineReducers } from 'redux';
import authReducer from './store/auth';
import appReducer from './store/app';
import themeReducer from './store/theme';

const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
  theme: themeReducer
});

export default rootReducer;