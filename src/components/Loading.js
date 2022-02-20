import React from 'react';

import CircleLoader from '../styles/CircleLoader.styled';
import FlexContainer from '../styles/FlexContainer.styled';

const Loading = () => {
  return (
    <FlexContainer>
      <CircleLoader style={{ 'margin-top': '100px' }} />
    </FlexContainer>
  );
};

export default Loading;
