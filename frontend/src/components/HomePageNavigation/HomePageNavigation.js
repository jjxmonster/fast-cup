import React, { useEffect } from 'react';

import { navigationControl } from '../HomePageNavigation/navigationControl';

import { StyledHomePageNavBar } from './HomePageNavigation.css';

const HomePageNavigation = () => {
   useEffect(() => {
      navigationControl();
   }, []);
   return (
      <StyledHomePageNavBar>
         <div className='NavIcon'></div>
         <div className='NavIcon'></div>
         <div className='NavIcon'></div>
         <div className='NavIcon'></div>
      </StyledHomePageNavBar>
   );
};

export default HomePageNavigation;
