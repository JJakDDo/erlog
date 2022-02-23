import React from 'react';

import { CharacterThumbnail, Text } from '../styles/CharacterThumbnail.styled';
import FlexContainer from '../styles/FlexContainer.styled';

const Character = ({ isMost, characterCode, totalGames, wins, top3 }) => {
  return (
    <FlexContainer>
      <CharacterThumbnail
        isMost={isMost}
        characterCode={characterCode}
      ></CharacterThumbnail>
      {characterCode ? (
        <>
          <Text>플레이 수: {totalGames}</Text>
          <Text>Top 3: {((top3 / totalGames) * 100).toFixed(2)}%</Text>
        </>
      ) : (
        '정보없음'
      )}
    </FlexContainer>
  );
};

export default Character;
