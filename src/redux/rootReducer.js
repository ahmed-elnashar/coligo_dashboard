import { combineReducers } from 'redux';
import appReducer from './store/app';
import themeReducer from './store/theme';

const rootReducer = combineReducers({
  app: appReducer,
  theme: themeReducer
});

export default rootReducer;