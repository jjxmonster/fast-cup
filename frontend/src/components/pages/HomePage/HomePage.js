import React, { Suspense } from 'react';

import {
   HomePageNavigation,
   LiveStreamSection,
   LandingSection,
   TournamentsSection,
   LoadingIndicator,
   FooterSection,
} from '../../../components';

import { StyledHomePageWrapper } from './HomePage.css';

const HomePage = () => {
   return (
      <StyledHomePageWrapper>
         <HomePageNavigation />
         <LandingSection />
         <LiveStreamSection />
         <Suspense fallback={<LoadingIndicator />}>
            <TournamentsSection />
         </Suspense>
         <FooterSection></FooterSection>
      </StyledHomePageWrapper>
   );
};

export default HomePage;
