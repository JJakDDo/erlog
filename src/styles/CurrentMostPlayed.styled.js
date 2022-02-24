import styled from 'styled-components';

const CurrentMostPlayed = styled.div`
  position: relative;
  width: 800px;
  height: 250px;
  margin-top: 10px;
  margin-bottom: 50px;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 500px;
  }
`;

export default CurrentMostPlayed;
