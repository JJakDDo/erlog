import { START_LOADING, STOP_LOADING } from '../actions';

const initialState = {
  isLoading: false,
};

// 데이터를 가지고올 때 Loading 컴포넌트를 보여주기 위한 state
const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING: {
      return {
        isLoading: true,
      };
    }
    case STOP_LOADING: {
      return {
        isLoading: false,
      };
    }
    default:
      return state;
  }
};

export default loadingReducer;
