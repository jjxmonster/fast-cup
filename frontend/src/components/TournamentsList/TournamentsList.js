import React, { useState } from 'react';

import {
   StyledTournamentsList,
   StyledEmptyMessage,
} from './TournamentsList.css';

import Tournaments from './Tournaments.js';
import Pagination from './Pagination';

const TournamentsList = ({ tournaments }) => {
   const [currentPage, setCurrentPage] = useState(1);
   const [tournamentsPerPage] = useState(4);

   const indexOfLastTournament = currentPage * tournamentsPerPage;
   const indexOfFirstTournament = indexOfLastTournament - tournamentsPerPage;
   const currentTournaments = tournaments.slice(
      indexOfFirstTournament,
      indexOfLastTournament
   );

   const paginate = pageNumber => setCurrentPage(pageNumber);

   return (
      <StyledTournamentsList
         emptyList={currentTournaments.length > 0 ? false : true}
      >
         {currentTournaments.length > 0 ? (
            <Tournaments tournaments={currentTournaments} />
         ) : (
            <StyledEmptyMessage>BRAK DOSTĘPNYCH TURNIEJÓW</StyledEmptyMessage>
         )}
         <Pagination
            activePage={currentPage}
            tournamentsPerPage={tournamentsPerPage}
            totalTournaments={tournaments.length}
            paginate={paginate}
         />
      </StyledTournamentsList>
   );
};

export default TournamentsList;
