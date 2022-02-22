import React from 'react';
import { useSelector } from 'react-redux';

import Character from './Character';
import MostPlayedNav from './MostPlayedNav';

import FlexContainer from '../styles/FlexContainer.styled';
import MostPlayedContainer from '../styles/MostPlayedContainer.styled';

const MostPlayedCharacter = () => {
  const { mostPlayed } = useSelector((state) => state.playerReducer);
  console.log('most', mostPlayed);
  const [solo, duo, squad] = mostPlayed;
  return (
    <FlexContainer>
      <MostPlayedContainer>
        <Character isMost={false} {...solo[1]} />
        <Character isMost={true} {...solo[0]} />
        <Character isMost={false} {...solo[2]} />
      </MostPlayedContainer>
      <MostPlayedNav />
    </FlexContainer>
  );
};

export default MostPlayedCharacter;
