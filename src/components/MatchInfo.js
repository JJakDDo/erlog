import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Match from './Match';

import FlexContainer from '../styles/FlexContainer.styled';
import {
  ButtonContainer,
  MathInfoContainer,
} from '../styles/MatchInfoContainer.styled';
import Button from '../styles/Button.styled';

import { setModeToDisplay } from '../actions';
import { dummy } from './dummy';

const MatchInfo = () => {
  const state = useSelector((state) => state.matchlogReducer);
  const { matchInfo, displayMode } = state;
  const dispatch = useDispatch();

  const handlerChangeMode = (mode) => {
    dispatch(setModeToDisplay(mode));
  };

  const displayLog = () => {
    console.log(displayMode);
    if (displayMode === 0) {
      return matchInfo;
    }

    return matchInfo.filter((data) => data.matchingTeamMode === displayMode);
  };

  return (
    <MathInfoContainer>
      <ButtonContainer>
        <Button onClick={() => handlerChangeMode(0)}>전체</Button>
        <Button onClick={() => handlerChangeMode(1)}>솔로</Button>
        <Button onClick={() => handlerChangeMode(2)}>듀오</Button>
        <Button onClick={() => handlerChangeMode(3)}>스쿼드</Button>
      </ButtonContainer>
      <FlexContainer>
        {displayLog().map((data, index) => {
          return <Match key={index} {...data} />;
        })}
      </FlexContainer>
    </MathInfoContainer>
  );
};

export default MatchInfo;
