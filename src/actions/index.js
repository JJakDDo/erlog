import axios from 'axios';
export const SET_PLAYER_NUM = 'SET_PLAYER_NUM';
export const NO_PLAYER = 'NO_PLAYER';
export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';
export const SET_TOP3_INFO = 'SET_TOP3_INFO';
export const CHANGE_MODE = 'CHANGE_MODE';

// 비동기적인 작업 (axios)를 하기때문에 Redux-thunk로 객체 대신 함수를 return 한다.
export const fetchPlayerNum = (name) => async (dispatch) => {
  // 데이터를 가져오기 전에 Loading state을 true로 설정한다.
  dispatch(startLoading());
  const response = await axios.get(
    `${process.env.REACT_APP_BASEURL}/v1/user/nickname?query=${name}`,
    {
      headers: {
        'x-api-key': process.env.REACT_APP_API_KEY,
      },
    }
  );

  // 응답이 정상이면 데이터들을 state에 저장한다.
  if (response.data.code === 200) {
    const {
      user: { nickname, userNum },
    } = response.data;
    dispatch({
      type: SET_PLAYER_NUM,
      payload: {
        playerName: nickname,
        playerNum: userNum,
      },
    });
    //1초 뒤에 해당 유저의 정보를 요청한다.
    setTimeout(async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_BASEURL}/v1/user/stats/${userNum}/9`,
        {
          headers: {
            'x-api-key': process.env.REACT_APP_API_KEY,
          },
        }
      );
      if (response.data.code === 200) {
        const { userStats } = response.data;
        const newUserStats = [[], [], []];

        // 유저의 플레이 정보 중 팀모드가 없다면 빈 객체로 넣어주고
        // 있으면 해당 유저의 팀모드 캐릭터 정보를 넣어준다.
        userStats.forEach((stat) => {
          newUserStats[stat.matchingTeamMode - 1] = stat.characterStats;
        });

        dispatch({
          type: SET_TOP3_INFO,
          payload: {
            userInfo: newUserStats,
          },
        });
      }

      // Loading 컴포넌트가 제대로 작동하는지 보기위해서 1초의 딜레이를 주었다.
      setTimeout(() => {
        dispatch(changeMode(0));
        dispatch(stopLoading());
      }, 1500);
    }, 1000);
  } else {
    dispatch({
      type: NO_PLAYER,
    });

    // Loading 컴포넌트가 제대로 작동하는지 보기위해서 1초의 딜레이를 주었다.
    setTimeout(() => {
      dispatch(stopLoading());
    }, 1000);
  }
};

// START_LOADING을 포함한 객체를 return 한다.
export const startLoading = () => {
  return {
    type: START_LOADING,
  };
};

// STOP_LOADING을 포함한 객체를 return 한다.
export const stopLoading = () => {
  return {
    type: STOP_LOADING,
  };
};

export const changeMode = (mode) => {
  return {
    type: CHANGE_MODE,
    payload: mode,
  };
};
