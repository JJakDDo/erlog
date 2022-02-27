import { SET_MATCH_INFO } from '../actions';

const initialState = {
  matchInfo: [],
};

const matchlogReducer = (state = initialState, action) => {
  switch (action.type) {
    // 유저의 매치 정보를 저장한다.
    case SET_MATCH_INFO: {
      const { matchInfo } = action.payload;
      matchInfo.map((info) => {
        return {
          ...info,
        };
      });
      return {
        ...state,
        matchInfo,
      };
    }
    default:
      return state;
  }
};

export default matchlogReducer;
