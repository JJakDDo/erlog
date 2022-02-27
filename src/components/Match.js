import React from 'react';

import {
  MatchContainer,
  ModeTextSpan,
  MatchInfoFlex,
  StatInfoContainer,
  Stat,
  ItemInfoContainer,
  MMRSpan,
} from '../styles/Match.styled';
import FlexContainer from '../styles/FlexContainer.styled';

import { CharacterThumbnail } from '../styles/CharacterThumbnail.styled';

const season = ['일반', '랭크'];
const mode = ['솔로', '듀오', '스쿼드'];

const Match = ({
  gameRank,
  seasonId,
  matchingTeamMode,
  characterNum,
  playerKill,
  playerAssistant,
  monsterKill,
  mmrBefore,
  damageToPlayer,
  mmrGain,
}) => {
  let mmrGainText = '';

  if (mmrGain > 0) {
    mmrGainText = `▲ ${mmrGain}`;
  } else if (mmrGain < 0) {
    mmrGainText = `▼ ${Math.abs(mmrGain)}`;
  } else {
    mmrGainText = `-`;
  }

  return (
    <MatchContainer gameRank={gameRank}>
      <div>
        <FlexContainer>{gameRank}</FlexContainer>
      </div>
      <ModeTextSpan>
        {`${seasonId > 0 ? season[1] : season[0]} - ${
          mode[matchingTeamMode - 1]
        }`}
      </ModeTextSpan>
      <MatchInfoFlex>
        <CharacterThumbnail
          style={{ width: `90px`, height: `90px` }}
          characterCode={characterNum}
        />
        <StatInfoContainer>
          <Stat>
            <span>K</span>
            <span>{playerKill}</span>
          </Stat>
          <Stat>
            <span>A</span>
            <span>{playerAssistant}</span>
          </Stat>
          <Stat>
            <span>H</span>
            <span>{monsterKill}</span>
          </Stat>
          <Stat>
            <span>딜량</span>
            <span>{damageToPlayer}</span>
          </Stat>
          <Stat>
            <span>MMR</span>
            <MMRSpan mmrGain={mmrGain}>
              {mmrBefore}
              <span>{mmrGainText}</span>
            </MMRSpan>
          </Stat>
        </StatInfoContainer>
        <ItemInfoContainer></ItemInfoContainer>
      </MatchInfoFlex>
    </MatchContainer>
  );
};

export default Match;
