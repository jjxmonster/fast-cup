import React from 'react';
import { useQuery } from 'react-query';

import { fetchTournaments } from '../../../data/fetch/tournament.fetch.js';

import {
   StyledSoonTournamentInfo,
   StyledNoActiveTournamentMessage,
} from './LandingSectionTournament.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faCalendarAlt,
   faClock,
   faGamepad,
   faUsers,
} from '@fortawesome/free-solid-svg-icons';

const LandingSectionTournament = () => {
   const { data: tournaments } = useQuery('tournaments', () =>
      fetchTournaments()
   );

   const activeTournaments = tournaments.result.filter(
      tournament => tournament.status === 'join'
   );

   if (activeTournaments.length === 0) {
      return (
         <StyledNoActiveTournamentMessage>
            <h2>BRAK AKTYWNYCH TURNIEJÓW</h2>
            <p>niebawem kolejne turnieje stay tuned!</p>
         </StyledNoActiveTournamentMessage>
      );
   }

   const randomTournament =
      activeTournaments[Math.floor(Math.random() * activeTournaments.length)];

   const {
      id,
      slots,
      current_subscriptions,
      championship_start,
   } = randomTournament;

   const tournamentUrl = `https://www.faceit.com/pl/championship/${id}/`;

   const startDate = new Date(championship_start);
   const startDay = String(startDate.getDate()).padStart(2, '0');
   const startMonth = String(startDate.getMonth() + 1).padStart(2, '0');
   const startYear = startDate.getFullYear();

   const startHours = startDate.getHours();
   const startMinutes = startDate.getMinutes();

   const startFullDate = `${startDay}/${startMonth}/${startYear}`;
   const startFullTime = `${startHours}:${
      startMinutes < 10 ? '0' + startMinutes : startMinutes
   }`;

   return (
      <StyledSoonTournamentInfo>
         <div>
            <span>{randomTournament.name}</span>
         </div>

         <div>
            <span>{startFullDate}</span>
            <FontAwesomeIcon className='infoIcon' icon={faCalendarAlt} />
         </div>
         <div>
            <span>{startFullTime}</span>
            <FontAwesomeIcon className='infoIcon' icon={faClock} />
         </div>

         <div>
            <span>
               {current_subscriptions}/<span className='maxTeams'>{slots}</span>
            </span>
            <FontAwesomeIcon className='infoIcon' icon={faUsers} />
         </div>
         <div>
            <a target='_blank' href={tournamentUrl}>
               DOŁĄCZ
            </a>
         </div>
      </StyledSoonTournamentInfo>
   );
};

export default LandingSectionTournament;
