import styled from 'styled-components';

const MostPlayedContainer = styled.section`
  display: flex;
  width: 2400px;
  margin-top: 50px;
  margin-bottom: 50px;
  position: absolute;
  top: 0;
  left: ${({ left }) => `${left}%`};
  transition: left 0.3s ease;

  & > div {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    width: 800px;
  }
`;

export default MostPlayedContainer;
