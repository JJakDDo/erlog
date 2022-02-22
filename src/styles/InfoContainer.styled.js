import styled from 'styled-components';

const InfoContainer = styled.div`
  margin-top: 100px;
  width: 80vw;
  max-width: 900px;
  position: relative;

  & > div {
    width: 100%;
    position: relative;
    margin-top: 10px;

    & > span {
      position: absolute;
      right: 0;
      color: #b3b3b3;
    }
  }
`;

export default InfoContainer;
