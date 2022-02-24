import styled from 'styled-components';

export const RankContainer = styled.section`
  margin-top: 100px;
  width: 90vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const RankModeContainer = styled.div`
  width: 350px;
  height: 500px;
  background: #404040;
  border-radius: 50px;
  margin: 20px;
  box-shadow: ${({ theme: { colors }, rankText }) => colors[rankText]} 0px 30px
      60px -12px inset,
    ${({ theme: { colors }, rankText }) => colors[rankText]} 0px 18px 36px -18px
      inset;
  position: relative;

  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    ${({ rankText }) => `url('/img/ranktier/${rankText}.png')`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  & > span {
    position: absolute;
    top: 20px;
    left: 35px;
  }
`;

export const RankTierContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  margin-top: 100px;
`;

export const RankTierTextContainer = styled.div`
  height: 200px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 35px;

  & > h1 {
    font-size: 2.5rem;
  }
`;
export const RankTierImage = styled.img`
  width: 170px;
`;

export const RankInfoContainer = styled.div`
  width: 100%;
  height: 150px;
  padding: 0px 35px;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

export const RankInfoTextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  & > span {
    color: #b3b3b3;
  }
`;
