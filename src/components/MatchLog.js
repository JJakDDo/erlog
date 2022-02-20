import React from 'react';
import { useSelector } from 'react-redux';

import Loading from './Loading.js';
import Noplayer from './Noplayer.js';

const MatchLog = () => {
  const state = useSelector((state) => state);
  const { playerNum, playerName, firstVisit, isPlayerExist } =
    state.playerReducer;
  const { isLoading } = state.loadingReducer;

  if (isLoading) {
    return <Loading />;
  }
  if (firstVisit) {
    return null;
  }
  if (!isPlayerExist) {
    return <Noplayer />;
  }
  return <h2>{playerNum}</h2>;
};

export default MatchLog;
