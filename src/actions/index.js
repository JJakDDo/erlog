import axios from 'axios';
export const SET_PLAYER_NUM = 'SET_PLAYER_NUM';
export const NO_PLAYER = 'NO_PLAYER';
export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';

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
  } else {
    dispatch({
      type: NO_PLAYER,
    });
  }

  // Loading 컴포넌트가 제대로 작동하는지 보기위해서 1초의 딜레이를 주었다.
  setTimeout(() => {
    dispatch(stopLoading());
  }, 1000);
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
