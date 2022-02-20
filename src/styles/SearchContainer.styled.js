import styled from 'styled-components';
import bgImage from '../img/background/S5_1920x1080.png';

export const SearchContainer = styled.div`
  width: 100%;
  height: 25rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${bgImage});
  background-position-x: 50%;
  background-position-y: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-top: 12rem;

  & > img {
    width: 250px;
    position: absolute;
    top: 100px;
  }
`;

export const SearchForm = styled.div`
  position: relative;
  width: 550px;
  height: 5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 12px 12px 24px 0 rgba(0, 0, 0, 0.2),
    -12px -12px 24px 0 rgba(255, 255, 255, 0.5);

  & > input {
    width: 500px;
    height: 4rem;
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
  }

  & > button {
    position: absolute;
    width: 4rem;
    height: 4rem;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
