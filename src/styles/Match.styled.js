import styled from 'styled-components';

export const MatchContainer = styled.div`
  width: 80vw;
  height: 120px;
  background: ${({ theme }) => theme.colors.card};
  margin: 10px 0;
  border-radius: 20px;
  position: relative;

  & > div:first-child {
    position: absolute;
    width: 100px;
    height: 120px;
    background: ${({ theme, gameRank }) => {
      if (gameRank === 1) {
        return theme.colors.gold;
      }
      if (gameRank === 2) {
        return theme.colors.silver;
      }
      if (gameRank === 3) {
        return theme.colors.bronze;
      }
      return theme.colors.unrank;
    }};
    left: 40px;
    top: -10px;
    border-radius: 20px;
    border-top-left-radius: 0;
    text-align: center;
    font-size: 3rem;
    color: white;
  }

  & > div:first-child::before {
    content: '';
    position: absolute;
    width: 15px;
    height: 10px;
    left: -15px;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      ${({ theme, gameRank }) => {
        if (gameRank === 1) {
          return theme.colors.gold;
        }
        if (gameRank === 2) {
          return theme.colors.silver;
        }
        if (gameRank === 3) {
          return theme.colors.bronze;
        }
        return theme.colors.unrank;
      }};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    z-index: 2;
  }

  & > div:first-child::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 10px;
    top: 0;
    left: -7px;
    background: ${({ theme, gameRank }) => {
      if (gameRank === 1) {
        return theme.colors.gold;
      }
      if (gameRank === 2) {
        return theme.colors.silver;
      }
      if (gameRank === 3) {
        return theme.colors.bronze;
      }
      return theme.colors.unrank;
    }};
    z-index: 1;
  }
`;

export const ModeTextSpan = styled.span`
  position: absolute;
  font-size: 0.8rem;
  top: 5px;
  right: 10px;
`;

export const MatchInfoFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 100%;
  padding-left: 150px;
`;

export const StatInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 300px;
`;

export const Stat = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

export const ItemInfoContainer = styled.div`
  width: 100px;
`;

export const MMRSpan = styled.span`
  position: relative;
  & span {
    position: absolute;
    font-size: 0.5rem;
    top: 3px;
    padding-left: 5px;
    width: 40px;
    color: ${({ mmrGain }) => {
      if (mmrGain > 0) {
        return '#00B86B';
      } else if (mmrGain < 0) {
        return '#D93640';
      }
    }};
  }
`;
