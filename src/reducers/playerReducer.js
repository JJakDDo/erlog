import { SET_PLAYER_NUM, NO_PLAYER } from '../actions';

const initialState = {
  playerNum: 0,
  playerName: '',
  isPlayerExist: false,
  firstVisit: true, // 유저가 페이지에 처음 접속했는지 알기 위한 state
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    // 찾는 플레이어가 존재하면 해당 플레이어의 number, name을 state에 저장한다.
    case SET_PLAYER_NUM: {
      const { playerName, playerNum } = action.payload;
      return {
        ...state,
        playerName,
        playerNum,
        isPlayerExist: true,
        firstVisit: false,
      };
    }
    // 만약 없으면 isPlayerExist state를 false로 저장한다.
    case NO_PLAYER: {
      return {
        ...state,
        isPlayerExist: false,
        firstVisit: false,
      };
    }
    default:
      return state;
  }
};

export default playerReducer;
