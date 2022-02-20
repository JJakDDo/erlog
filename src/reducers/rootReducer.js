import { combineReducers } from 'redux';
import playerReducer from './playerReducer';
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers({
  playerReducer,
  loadingReducer,
});

export default rootReducer;
