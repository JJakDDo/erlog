import React from 'react';

import { useSelector } from 'react-redux';

import Match from './Match';

import FlexContainer from '../styles/FlexContainer.styled';
import { dummy } from './dummy';

const MatchInfo = () => {
  const state = useSelector((state) => state.playerReducer);
  const { matchInfo } = state;
  return (
    <FlexContainer>
      {matchInfo.map((data) => {
        return <Match {...data} />;
      })}
    </FlexContainer>
  );
};

export default MatchInfo;
