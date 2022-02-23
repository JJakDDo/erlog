import { combineReducers } from 'redux';
import playerReducer from './playerReducer';
import loadingReducer from './loadingReducer';
import mostPlayedReducer from './mostPlayedReducer';

const rootReducer = combineReducers({
  playerReducer,
  loadingReducer,
  mostPlayedReducer,
});

export default rootReducer;
