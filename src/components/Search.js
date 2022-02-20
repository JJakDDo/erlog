import React from 'react';
import { FaSearch } from 'react-icons/fa';

import { SearchContainer, SearchForm } from '../styles/SearchContainer.styled';
import Input from '../styles/Input.styled';
import Button from '../styles/Button.styled';

import logoImage from '../img/logo/er_Logo_White.png';

const Search = () => {
  return (
    <SearchContainer>
      <img src={logoImage} alt='logo' />
      <SearchForm>
        <Input placeholder='플레이어 닉네임을 입력하세요...' />
        <Button>
          <FaSearch />
        </Button>
      </SearchForm>
    </SearchContainer>
  );
};

export default Search;
