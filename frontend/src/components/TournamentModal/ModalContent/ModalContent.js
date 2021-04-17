import React from 'react';
import { useQuery } from 'react-query';
import { useHistory, useParams } from 'react-router-dom';

import { TournamentContext } from '../../../Context/TournamentContext';
import { fetchTournaments } from '../../../data/fetch/tournament.fetch.js';

import ModalBar from '../ModalBar';
import ModalTournamentMain from '../ModalTournamentMain';

import {
   StyledModalNavigation,
   StyledModalHeader,
   StyledJoinButton,
} from './ModalContent.css';

const ModalContent = () => {
   let { id } = useParams();
   let history = useHistory();

   const { data: tournaments } = useQuery('tournaments', () =>
      fetchTournaments()
   );

   const currentTournament = tournaments.filter(
      tournament => tournament.id === id
   )[0];
   const arrow = ' > ';

   const { championship_id, status, name } = currentTournament;

   const tournamentUrl = `https://www.faceit.com/pl/championship/${championship_id}/`;

   const handleGoToTournamentOnFaceit = () => {
      window.open(tournamentUrl, '_blank');
   };
   const handleGoBack = () => {
      history.goBack();
   };
   return (
      <TournamentContext.Provider value={{ currentTournament }}>
         <StyledModalNavigation>
            <p>
               <span onClick={handleGoBack}> strona głowna </span>
               {arrow}
               <span> turniej {name} </span>
            </p>
         </StyledModalNavigation>
         <StyledModalHeader>
            <h2>{name}</h2>
            <StyledJoinButton
               onClick={handleGoToTournamentOnFaceit}
               disabled={status === 'join' ? false : true}
            >
               DOŁĄCZ
            </StyledJoinButton>
         </StyledModalHeader>
         <ModalBar />
         <ModalTournamentMain maps={tournaments.mapPool} />
      </TournamentContext.Provider>
   );
};

export default ModalContent;
