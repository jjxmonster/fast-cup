import React from 'react';

import {
   StyledLoadingIndicatorWrapper,
   StyledLoadingIndicator,
} from './LoadingIndicator.css';

const LoadingIndicator = () => {
   return (
      <StyledLoadingIndicatorWrapper>
         <StyledLoadingIndicator>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
         </StyledLoadingIndicator>
      </StyledLoadingIndicatorWrapper>
   );
};

export default LoadingIndicator;
