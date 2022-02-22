import React from 'react';

import FlexContainer from '../styles/FlexContainer.styled';

const Noplayer = () => {
  return (
    <FlexContainer>
      <h2 style={{ marginTop: '100px' }}>
        해당 플레이어가 존재하지 않습니다. 다시 검색해주세요.
      </h2>
    </FlexContainer>
  );
};

export default Noplayer;
