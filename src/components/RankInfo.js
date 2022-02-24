import React from 'react';

import Mode from './Mode';
import { useSelector } from 'react-redux';

import { RankContainer } from '../styles/RankInfo.styled';

const RankInfo = () => {
  const state = useSelector((state) => state.playerReducer);
  const { rankInfo } = state;
  return (
    <RankContainer>
      {rankInfo.map((rank, index) => {
        if (rank.totalGames) {
          return <Mode key={index} mode={index} {...rank} isExist={true} />;
        } else {
          return <Mode key={index} mode={index} isExist={false} />;
        }
      })}
    </RankContainer>
  );
};

export default RankInfo;
