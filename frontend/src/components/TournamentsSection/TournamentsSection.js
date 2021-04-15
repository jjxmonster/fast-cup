import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { useQuery } from 'react-query';

import {
   WrapperComponent,
   TournamentsList,
   TournamentModal,
} from '../../components';

import { fetchTournaments } from '../../data/fetch/tournament.fetch';

import {
   StyledTournamentsBar,
   StyledFilterButton,
} from './TournamentsSection.css';

const TournamentsSection = () => {
   const { data: tournaments } = useQuery('tournaments', () =>
      fetchTournaments()
   );
   const [filter, setFilter] = useState('ALL');
   const [filteredTournaments, setFIlteredTournaments] = useState(
      tournaments.result
   );

   useEffect(() => {
      switch (filter) {
         case 'ALL':
            return setFIlteredTournaments(tournaments.result);
         case 'ACTIVE':
            return setFIlteredTournaments(
               tournaments.result.filter(
                  tournament =>
                     tournament.status === 'join' ||
                     tournament.status === 'adjustment'
               )
            );
         case 'FINISHED':
            return setFIlteredTournaments(
               tournaments.result.filter(
                  tournament => tournament.status === 'finished'
               )
            );
         default:
            return setFIlteredTournaments(tournaments.result);
      }
   }, [filter, tournaments.result]);

   return (
      <>
         <WrapperComponent>
            <StyledTournamentsBar>
               <div>
                  <h2>FASTCUP TURNIEJE</h2>
               </div>
               <div>
                  <StyledFilterButton
                     active={filter === 'ALL' ? true : false}
                     onClick={() => setFilter('ALL')}
                  >
                     WSZYSTKIE
                  </StyledFilterButton>

                  <StyledFilterButton
                     active={filter === 'ACTIVE' ? true : false}
                     onClick={() => setFilter('ACTIVE')}
                  >
                     AKTYWNE
                  </StyledFilterButton>

                  <StyledFilterButton
                     active={filter === 'FINISHED' ? true : false}
                     onClick={() => setFilter('FINISHED')}
                  >
                     ZAKOŃCZONE
                  </StyledFilterButton>
               </div>
            </StyledTournamentsBar>
            <TournamentsList tournaments={filteredTournaments} />
         </WrapperComponent>
         <Route path='/home/tournament/:id'>
            <TournamentModal tournaments={tournaments.result} />
         </Route>
      </>
   );
};

export default TournamentsSection;
