import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Character from './Character';
import MostPlayedNav from './MostPlayedNav';

import FlexContainer from '../styles/FlexContainer.styled';
import MostPlayedContainer from '../styles/MostPlayedContainer.styled';
import CurrentMostPlayed from '../styles/CurrentMostPlayed.styled';

const MostPlayedCharacter = () => {
  const { mostPlayed } = useSelector((state) => state.playerReducer);
  const { currentMode } = useSelector((state) => state.mostPlayedReducer);

  return (
    <FlexContainer>
      <CurrentMostPlayed>
        <MostPlayedContainer left={currentMode * -100}>
          {mostPlayed.map((mode, index) => {
            if (mode.length) {
              return (
                <div key={index}>
                  <Character isMost={false} {...mode[1]} />
                  <Character isMost={true} {...mode[0]} />
                  <Character isMost={false} {...mode[2]} />
                </div>
              );
            }
            return (
              <div key={index}>
                <Character isMost={false} />
                <Character isMost={true} />
                <Character isMost={false} />
              </div>
            );
          })}
        </MostPlayedContainer>
      </CurrentMostPlayed>
      <MostPlayedNav />
    </FlexContainer>
  );
};

export default MostPlayedCharacter;
