import React from 'react';

import {
  RankContainer,
  RankModeContainer,
  RankTierImage,
  RankTierContainer,
  RankTierTextContainer,
  RankInfoContainer,
  RankInfoTextContainer,
} from '../styles/RankInfo.styled';

const modeToText = ['솔로', '듀오', '스쿼드'];
const mmrToText = [
  '아이언 IV',
  '아이언 III',
  '아이언 II',
  '아이언 I',
  '브론즈 IV',
  '브론즈 III',
  '브론즈 II',
  '브론즈 I',
  '실버 IV',
  '실버 III',
  '실버 II',
  '실버 I',
  '골드 IV',
  '골드 III',
  '골드 II',
  '골드 I',
  '플래티넘 IV',
  '플래티넘 III',
  '플래티넘 II',
  '플래티넘 I',
  '다이아몬드 IV',
  '다이아몬드 III',
  '다이아몬드 II',
  '다이아몬드 I',
  '데미갓',
  '이터니티',
];

const Mode = ({
  mode,
  mmr,
  rank,
  totalGames,
  totalWins,
  averageRank,
  averageKills,
  averageAssistants,
  top3,
  isExist,
}) => {
  let tier = 0;
  let lp = 0;
  let rankText = '';

  // MMR 에 따른 티어 정보를 구하고 LP를 구한다.
  // MMR을 100을 나눠서 나온 값이 티어이다.
  // MMR을 100으로 나눠서 나온 나머지가 LP값이다.
  const getRank = (mmr, rank) => {
    if (mmr >= 2600 && rank <= 200) {
      tier = mmrToText.length - 1;
      rankText = 'eternity';
    } else if (mmr >= 2400) {
      tier = mmrToText.length - 2;
      rankText = 'demigod';
    } else {
      tier = Math.floor(mmr / 100);
      if (tier >= 20) {
        rankText = 'diamond';
      } else if (tier >= 16) {
        rankText = 'platinum';
      } else if (tier >= 12) {
        rankText = 'gold';
      } else if (tier >= 8) {
        rankText = 'silver';
      } else if (tier >= 4) {
        rankText = 'bronze';
      } else {
        if (isExist) {
          rankText = 'iron';
        } else {
          rankText = 'unrank';
        }
      }
    }

    lp = mmr % 100;
  };

  getRank(mmr, rank);

  return (
    <RankModeContainer rankText={rankText}>
      <span>{modeToText[mode]} - 시즌 5</span>
      {isExist && (
        <>
          <RankTierContainer>
            <RankTierTextContainer>
              <h1> {mmrToText[tier]} </h1>
              <span>{lp} 점</span>
              <span>MMR {mmr}</span>
            </RankTierTextContainer>
            {/* 
          <RankTierImage
            src='/img/ranktier/eternity.png'
            alt='bronze'
          ></RankTierImage>*/}
          </RankTierContainer>
          <RankInfoContainer>
            <RankInfoTextContainer>
              <h3>플레이 수</h3>
              <span>{totalGames}</span>
            </RankInfoTextContainer>
            <RankInfoTextContainer>
              <h3>승수</h3>
              <span>{totalWins}</span>
            </RankInfoTextContainer>
            <RankInfoTextContainer>
              <h3>평균 순위</h3>
              <span>{averageRank}</span>
            </RankInfoTextContainer>
            <RankInfoTextContainer>
              <h3>평균 킬</h3>
              <span>{averageKills}</span>
            </RankInfoTextContainer>
            <RankInfoTextContainer>
              <h3>평균 어시</h3>
              <span>{averageAssistants}</span>
            </RankInfoTextContainer>
            <RankInfoTextContainer>
              <h3>Top3</h3>
              <span>{top3 * 100}%</span>
            </RankInfoTextContainer>
          </RankInfoContainer>
        </>
      )}
    </RankModeContainer>
  );
};

export default Mode;
