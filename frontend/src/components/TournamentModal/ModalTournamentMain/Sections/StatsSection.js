import React from 'react';

import { StyledMessageInSections, StyledSectionWrapper } from './Sections.css';

const StatsSection = () => {
   return (
      <StyledSectionWrapper>
         <StyledMessageInSections>
            Statystyki dostępne po zakończeniu turnieju.
         </StyledMessageInSections>
      </StyledSectionWrapper>
   );
};

export default StatsSection;
