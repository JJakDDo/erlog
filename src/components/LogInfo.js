import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

import InfoContainer from '../styles/InfoContainer.styled';
import Button from '../styles/Button.styled';

const LogInfo = () => {
  const state = useSelector((state) => state.playerReducer);
  const { playerName } = state;

  const navbarRef = useRef(null);

  // 자동으로 스크롤하기 위해서 useRef를 사용했다.
  // Styled Component에 useRef를 사용하면 에러가 발생해서 div를 새로 생성했다.
  const scrollDown = () => {
    navbarRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollDown();
  }, [state]);

  return (
    <InfoContainer>
      <div ref={navbarRef}></div>
      <h1>{playerName}</h1>
      <div>
        <Button>전적 갱신</Button>
        <span>시즌 5</span>
      </div>
    </InfoContainer>
  );
};

export default LogInfo;
