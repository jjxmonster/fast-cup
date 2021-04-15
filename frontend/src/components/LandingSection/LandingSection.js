import React, { Suspense, useEffect } from 'react';

import { landingImageAnimations } from '../Animations/Animations';

import {
   StyledLandingBar,
   StyledLandingContent,
   StyledLandingPageContent,
   StyledImageWrapper,
   StyledLandingList,
} from './LandingSection.css';

import { WrapperComponent, LoadingIndicator } from '../../components';
import LandingSectionTournament from './LandingSectionTournament';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { ReactComponent as Image } from './image/trophy.svg';
import Logo from './image/logofastcup.png';

const LandingSection = () => {
   useEffect(() => {
      landingImageAnimations();
   }, []);
   return (
      <WrapperComponent>
         <StyledLandingBar>
            <div className='BarLogo'>
               <img src={Logo} />
            </div>
            <div className='BarSlogan'>
               <h1>FASTCUP</h1>
               <h2>
                  Liga turniejów <span>CS:GO</span>
               </h2>
            </div>
            <div className='BarSocials'>
               <a href='https://www.facebook.com/'>facebook</a>
               <a href='https://www.instagram.com/'>instagram</a>
               <a href='https://www.twitch.tv/'>twitch.tv</a>
            </div>
         </StyledLandingBar>
         <StyledLandingContent>
            <Suspense fallback={<LoadingIndicator />}>
               <LandingSectionTournament />
            </Suspense>

            <StyledLandingPageContent>
               <StyledLandingList>
                  <li>
                     <FontAwesomeIcon
                        style={{ color: 'green' }}
                        icon={faCheckCircle}
                     />
                     <p>Historia turniejów</p>
                  </li>
                  <li>
                     <FontAwesomeIcon
                        style={{ color: 'green' }}
                        icon={faCheckCircle}
                     />
                     <p>Statystyki meczów</p>
                  </li>
                  <li>
                     <FontAwesomeIcon
                        style={{ color: 'green' }}
                        icon={faCheckCircle}
                     />
                     <p>Drabinka turniejowa</p>
                  </li>
                  <li>
                     <FontAwesomeIcon
                        style={{ color: 'green' }}
                        icon={faCheckCircle}
                     />
                     <p>Ranking drużyn/graczy</p>
                  </li>
               </StyledLandingList>
               <StyledImageWrapper>
                  <Image className='LandingImage' />
               </StyledImageWrapper>
            </StyledLandingPageContent>
         </StyledLandingContent>
      </WrapperComponent>
   );
};

export default LandingSection;
