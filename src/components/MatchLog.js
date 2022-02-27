import React from 'react';
import { useSelector } from 'react-redux';

import Loading from './Loading.js';
import Noplayer from './Noplayer.js';
import LogInfo from './LogInfo.js';
import MostPlayedCharacter from './MostPlayedCharacter.js';
import RankInfo from './RankInfo.js';
import MatchInfo from './MatchInfo';

import FlexContainer from '../styles/FlexContainer.styled.js';

const MatchLog = () => {
  const state = useSelector((state) => state.playerReducer);
  const { isLoading } = useSelector((state) => state.loadingReducer);
  const { playerNum, playerName, firstVisit, isPlayerExist } = state;

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
      <MostPlayedCharacter />
      <RankInfo />
      <MatchInfo />
    </FlexContainer>
  );
};

export default MatchLog;
