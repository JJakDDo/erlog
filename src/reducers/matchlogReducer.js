import { SET_MATCH_INFO, SET_MODE_TO_DISPLAY } from '../actions';

const initialState = {
  matchInfo: [],
  displayMode: 0,
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
    // 특정 모드만 출력하기 위해 state를 설정한다.
    // 0 - 전체
    // 1 - 솔로
    // 2 - 듀오
    // 3 - 스쿼드
    case SET_MODE_TO_DISPLAY: {
      const displayMode = action.payload;
      return {
        ...state,
        displayMode,
      };
    }
    default:
      return state;
  }
};

export default matchlogReducer;
