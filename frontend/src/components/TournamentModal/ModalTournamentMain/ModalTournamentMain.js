import React, { useState } from 'react';

import { StatsSection, TeamsSection } from './Sections';

import {
   StyledModalMainContainer,
   StyledLeftSection,
   StyledRightSection,
   StyledRightSectionNavBar,
   StyledNavigationButton,
   StyledRightSectionContainer,
} from './ModalTournamentMain.css';

const ModalTournamentMain = ({ maps }) => {
   const [sectionPage, setSectionPage] = useState(1);

   const rightSectionPage = () => {
      switch (sectionPage) {
         case 1:
            return <StatsSection />;
         case 2:
            return <TeamsSection />;
         default:
            return <StatsSection />;
      }
   };

   return (
      <StyledModalMainContainer>
         <StyledLeftSection>
            <div>
               <h3>Jak dołączyć?</h3>
               <p>
                  To proste. Kliknij przycisk "Dołącz" w wybranym turnieju.
                  Przekieruje Cię na stronę Faceit.com. Musisz być kapitanem
                  drużyny, którą chcesz zapisać. Zaznacz "Dołącz ze swoją
                  drużyną" i kliknj "Dołącz do turnieju". Wybierz drużynę, którą
                  chcesz dołączyć następnie wydziel pięciu zawodników i wybierz
                  kapitana. Kliknij "Dołącz". W razie problemów skontaktuj się z
                  nami.
               </p>
            </div>
            <ul>
               <li>
                  <div>Tryb gry</div> <div>5VS5</div>
               </li>
               <li>
                  <div>Gra</div> <div>Counter-Strike: Global Offensive</div>
               </li>
               <li>
                  <div>Mapy</div> <div>{maps}</div>
               </li>
            </ul>
         </StyledLeftSection>
         <StyledRightSection>
            <StyledRightSectionNavBar>
               <StyledNavigationButton
                  active={sectionPage === 1 ? true : false}
                  onClick={() => setSectionPage(1)}
               >
                  Statystyki
               </StyledNavigationButton>
               <StyledNavigationButton
                  active={sectionPage === 2 ? true : false}
                  onClick={() => setSectionPage(2)}
               >
                  Drużyny
               </StyledNavigationButton>
            </StyledRightSectionNavBar>
            <StyledRightSectionContainer>
               {rightSectionPage()}
            </StyledRightSectionContainer>
         </StyledRightSection>
      </StyledModalMainContainer>
   );
};

export default ModalTournamentMain;
