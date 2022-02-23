import { CHANGE_MODE } from '../actions';

const initialState = {
  currentMode: 0,
};

// 데이터를 가지고올 때 Loading 컴포넌트를 보여주기 위한 state
const mostPlayedReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MODE: {
      return {
        currentMode: action.payload,
      };
    }
    default:
      return state;
  }
};

export default mostPlayedReducer;
