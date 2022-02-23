import React, { useState } from 'react';

import Nav from '../styles/Nav.styled';

const MostPlayedNav = () => {
  const [left, setLeft] = useState(0);

  const handleClick = (value) => {
    setLeft(value);
  };

  return (
    <Nav left={left}>
      <li onClick={() => handleClick(0)}>솔로</li>
      <li onClick={() => handleClick(100)}>듀오</li>
      <li onClick={() => handleClick(200)}>스쿼드</li>
      <div></div>
    </Nav>
  );
};

export default MostPlayedNav;
