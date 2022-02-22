import React from 'react';
import { useSelector } from 'react-redux';

import InfoContainer from '../styles/InfoContainer.styled';
import Button from '../styles/Button.styled';

const LogInfo = () => {
  const state = useSelector((state) => state.playerReducer);
  const { playerName } = state;
  return (
    <InfoContainer>
      <h1>{playerName}</h1>
      <div>
        <Button>전적 갱신</Button>
        <span>시즌 5</span>
      </div>
    </InfoContainer>
  );
};

export default LogInfo;
