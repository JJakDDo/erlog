import styled from 'styled-components';

export const CharacterThumbnail = styled.div`
  background-image: ${({ characterCode }) => {
    if (characterCode > 0) {
      return `url(/img/character/${characterCode}/mini.png)`;
    } else {
      return 'none';
    }
  }};
  background-repeat: no-repeat;
  background-position: center center;
  width: ${({ isMost }) => (isMost ? '120px' : '100px')};
  height: ${({ isMost }) => (isMost ? '120px' : '100px')};
  border-radius: 50%;
  margin: 15px;
  position: relative;
  ${({ isMost }) => {
    if (isMost) {
      return `
        &::before{
          content: 'Most';
          display: inline-block;
          text-align: center;
          width: 80px;
          height: 30px;
          background: blue;
          border-radius: 10px;
          background: #404040;
          position: absolute;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      `;
    }
  }}
`;

export const Text = styled.p`
  font-size: 1rem;
`;
