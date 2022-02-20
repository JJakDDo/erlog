import React, { useState, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';

import { SearchContainer, SearchForm } from '../styles/SearchContainer.styled';
import Input from '../styles/Input.styled';
import Button from '../styles/Button.styled';

import logoImage from '../img/logo/er_Logo_White.png';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlayerNum, startLoading, stopLoading } from '../actions';

const Search = () => {
  const playerNameInput = useRef(null);
  const dispatch = useDispatch();

  // 검색 버튼을 클릭했을 때 호출되는 함수
  const searchPlayer = () => {
    // fetchPlayerNum action을 호출한다.
    dispatch(fetchPlayerNum(playerNameInput.current.value));
  };

  return (
    <SearchContainer>
      <img src={logoImage} alt='logo' />
      <SearchForm>
        <Input
          placeholder='플레이어 닉네임을 입력하세요...'
          ref={playerNameInput}
        />
        <Button onClick={searchPlayer}>
          <FaSearch />
        </Button>
      </SearchForm>
    </SearchContainer>
  );
};

export default Search;
