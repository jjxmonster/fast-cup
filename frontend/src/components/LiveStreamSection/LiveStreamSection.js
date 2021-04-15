import React from 'react';
import { TwitchEmbed } from 'react-twitch-embed';

import { WrapperComponent } from '../../components';
import {
   StyledLiveStreamBar,
   StyledLiveStreamWrapper,
} from './LiveStreamSection.css';

const LiveStreamSection = () => {
   return (
      <WrapperComponent>
         <StyledLiveStreamBar>
            <div>
               <h2>fastcup_official</h2>
               <p>
                  <span>&bull; </span>NA ZYWO
               </p>
            </div>
            <div>
               <h2>OGLĄDAJ NAS</h2>
            </div>
            <div>
               <h2>
                  TWITCH<span>/fastcup_official</span>
               </h2>
            </div>
         </StyledLiveStreamBar>
         <StyledLiveStreamWrapper>
            <TwitchEmbed
               channel='fastcup_official'
               id='fastcup'
               theme='dark'
               muted
               width='100%'
               height='100%'
               onVideoPause={() => console.log(':(')}
            />
         </StyledLiveStreamWrapper>
      </WrapperComponent>
   );
};

export default LiveStreamSection;
