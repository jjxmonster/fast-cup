import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';

import { WrapperComponent } from '../../components';

import {
   StyledTopContainer,
   StyledBottomContainer,
   StyledRightSection,
   StyledLeftSection,
   StyledSectionHeader,
   StyledLeftSectionContent,
   StyledRightSectionContainer,
   StyledFAQElement,
} from './FooterSection.css';

const FooterSection = () => {
   return (
      <WrapperComponent>
         <StyledTopContainer>
            <StyledLeftSection>
               <StyledSectionHeader>
                  <h2>Najczęściej zadawane pytania</h2>
               </StyledSectionHeader>
               <StyledLeftSectionContent>
                  <StyledFAQElement>
                     <h3>#1. Jak dołączyć do turnieju?</h3>
                     <p>
                        To proste. Kliknij przycisk "Dołącz" w wybranym
                        turnieju. Kieruj się informacjami podanymi w opisie
                        turnieju.
                     </p>
                  </StyledFAQElement>
                  <StyledFAQElement>
                     <h3>#2. Czy trzeba zgłaszać gotowość na faceit?</h3>
                     <p>
                        Po zapisaniu się do turnieju nie trzeba zgłaszać
                        gotowości drużyny. Wystarczy czekać na swój mecz i wziąć
                        w nim udział.
                     </p>
                  </StyledFAQElement>
                  <StyledFAQElement>
                     <h3>#3. Jak działają turnieje FastCUP?</h3>
                     <p>
                        Mistrzostwa FastCUP są w zupełności za darmo. FastCUP
                        nagradza TOP 3 drużyn finałów mistrzostw.
                     </p>
                  </StyledFAQElement>
                  <StyledFAQElement>
                     <h3>#4. Czy anti cheat Faceit jest wymagany?</h3>
                     <p>
                        Tak, Anti-Cheat znajdziesz
                        <a href='https://www.faceit.com/pl/anti-cheat'>
                           {' '}
                           tutaj.
                        </a>
                     </p>
                  </StyledFAQElement>
               </StyledLeftSectionContent>
            </StyledLeftSection>
            <StyledRightSection>
               <StyledSectionHeader>
                  <h2>kontakt</h2>
               </StyledSectionHeader>
               <StyledRightSectionContainer>
                  <div>
                     <h3>
                        Jeśli masz jakieś pytanie bądź znalazłeś błąd na stronie
                        napisz do nas!
                     </h3>
                     <p>
                        <FontAwesomeIcon
                           className='mailIcon'
                           icon={faMailBulk}
                        />
                        <a href='mailTo:fastcup@kontakt.pl'>
                           kontakt@fastcup.pl
                        </a>
                     </p>
                  </div>
                  <div>
                     <h3>
                        Jeśli masz propozycję współpracy nie wahaj się i napisz
                        do nas!
                     </h3>
                     <p>
                        <FontAwesomeIcon
                           className='mailIcon'
                           icon={faMailBulk}
                        />
                        <a href='mailTo:fastcup@kontakt.pl'>
                           kontakt@fastcup.pl
                        </a>
                     </p>
                  </div>
               </StyledRightSectionContainer>
            </StyledRightSection>
         </StyledTopContainer>
         <StyledBottomContainer>
            <p>FASTCUP &copy; 2021</p>
            <p>
               Stronę wykonali{' '}
               <a target='_blank' href='https://jjxmonster.github.io/'>
                  Jakub Tarabasz
               </a>{' '}
               &amp;{' '}
               <a target='_blank' href='https://ldablju.github.io/'>
                  Alan Adamczyk
               </a>
            </p>
         </StyledBottomContainer>
      </WrapperComponent>
   );
};

export default FooterSection;
