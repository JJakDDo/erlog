import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Nav from '../styles/Nav.styled';
import { changeMode } from '../actions';

const MostPlayedNav = () => {
  const state = useSelector((state) => state.mostPlayedReducer);
  const { currentMode } = state;
  const dispatch = useDispatch();

  const handleClick = (value) => {
    dispatch(changeMode(value));
  };

  return (
    <Nav left={currentMode * 100}>
      <li onClick={() => handleClick(0)}>솔로</li>
      <li onClick={() => handleClick(1)}>듀오</li>
      <li onClick={() => handleClick(2)}>스쿼드</li>
      <div></div>
    </Nav>
  );
};

export default MostPlayedNav;
