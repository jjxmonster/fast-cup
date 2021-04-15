import React from 'react';

import {
   StyledListNavigation,
   StyledNavigationContent,
} from './TournamentsList.css';

const Pagination = ({
   activePage,
   tournamentsPerPage,
   totalTournaments,
   paginate,
}) => {
   const pageNumbers = [];

   for (let i = 1; i <= Math.ceil(totalTournaments / tournamentsPerPage); i++) {
      pageNumbers.push(i);
   }

   return (
      <StyledListNavigation>
         <ul>
            {pageNumbers.map(number => (
               <li key={number}>
                  <StyledNavigationContent
                     active={number === activePage ? 'true' : 'false'}
                     onClick={() => paginate(number)}
                  >
                     {number}
                  </StyledNavigationContent>
               </li>
            ))}
         </ul>
      </StyledListNavigation>
   );
};

export default Pagination;
