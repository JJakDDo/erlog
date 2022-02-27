import {
  SET_PLAYER_NUM,
  NO_PLAYER,
  SET_RANK_INFO,
  SET_MATCH_INFO,
} from '../actions';

const initialState = {
  playerNum: 0,
  playerName: '',
  isPlayerExist: false,
  firstVisit: true, // 유저가 페이지에 처음 접속했는지 알기 위한 state
  mostPlayed: [
    [
      {
        characterCode: 0,
        totalGames: 6,
        wins: 1,
        top3: 0.19,
      },
      {
        characterCode: 0,
        totalGames: 5,
        wins: 0,
        top3: 0.19,
      },
      {
        characterCode: 0,
        totalGames: 2,
        wins: 0,
        top3: 0.19,
      },
    ],
    [
      {
        characterCode: 0,
        totalGames: 4,
        wins: 0,
        top3: 0.19,
      },
      {
        characterCode: 0,
        totalGames: 2,
        wins: 0,
        top3: 0.19,
      },
      {
        characterCode: 0,
        totalGames: 2,
        wins: 0,
        top3: 0.19,
      },
    ],
    [
      {
        characterCode: 0,
        totalGames: 6,
        wins: 1,
        top3: 0.19,
      },
      {
        characterCode: 0,
        totalGames: 5,
        wins: 0,
        top3: 0.19,
      },
      {
        characterCode: 0,
        totalGames: 2,
        wins: 0,
        top3: 0.19,
      },
    ],
  ],
  rankInfo: [{}, {}, {}],
  matchInfo: [],
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
    // 유저의 탑3 캐릭터 정보를 저장한다.
    case SET_RANK_INFO: {
      const { mostPlayed, rankInfo } = action.payload;
      const tempInfo = [[], [], []];
      mostPlayed.forEach((info, index) => {
        // 탑3 캐릭터가 존재하면 새로운 정보로 저장하고
        // 없으면 디폴트 값으로 유지된다.
        if (info.length) {
          info.forEach((char, i) => {
            const { characterCode, totalGames, wins, top3 } = char;
            tempInfo[index].push({
              characterCode,
              totalGames,
              wins,
              top3,
            });
          });
        }
      });
      return {
        ...state,
        mostPlayed: tempInfo,
        rankInfo,
      };
    }
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

export default playerReducer;
