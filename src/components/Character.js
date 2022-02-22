import React from 'react';

import CharacterThumbnail from '../styles/CharacterThumbnail.styled';
import FlexContainer from '../styles/FlexContainer.styled';

const Character = ({ isMost, characterCode, totalGames, wins, top3 }) => {
  return (
    <FlexContainer>
      <CharacterThumbnail
        isMost={isMost}
        characterCode={characterCode}
      ></CharacterThumbnail>
      <p style={{ fontSize: '1rem' }}>플레이 수: {totalGames}</p>
      <p style={{ fontSize: '1rem' }}>
        Top 3: {(top3 / totalGames).toFixed(2) * 100}%
      </p>
    </FlexContainer>
  );
};

export default Character;
