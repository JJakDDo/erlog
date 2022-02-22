import React from 'react';
import { useSelector } from 'react-redux';

import Loading from './Loading.js';
import Noplayer from './Noplayer.js';
import LogInfo from './LogInfo.js';

import FlexContainer from '../styles/FlexContainer.styled.js';

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
  return (
    <FlexContainer>
      <LogInfo />
    </FlexContainer>
  );
};

export default MatchLog;
