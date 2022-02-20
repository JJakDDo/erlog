// State를 관리할 Redux store를 생성한다.
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/rootReducer';

const middleware = [thunk];

const store = createStore(rootReducer, {}, applyMiddleware(...middleware));

export default store;
