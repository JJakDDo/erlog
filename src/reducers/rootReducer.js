import { combineReducers } from 'redux';
import playerReducer from './playerReducer';
import loadingReducer from './loadingReducer';
import mostPlayedReducer from './mostPlayedReducer';
import matchlogReducer from './matchlogReducer';

const rootReducer = combineReducers({
  playerReducer,
  loadingReducer,
  mostPlayedReducer,
  matchlogReducer,
});

export default rootReducer;
