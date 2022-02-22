import styled from 'styled-components';

const InfoContainer = styled.div`
  margin-top: 100px;
  width: 80vw;
  position: relative;

  & > div {
    width: 100%;
    position: relative;
    margin-top: 10px;

    & > button {
      border-radius: 10px;
      width: 5rem;
      height: 2rem;
      background: #00a7ff;
      color: #fff;
      &:hover {
        background: #0d6ce8;
        color: #fff;
      }
    }

    & > span {
      position: absolute;
      right: 0;
      color: #b3b3b3;
    }
  }
`;

export default InfoContainer;
