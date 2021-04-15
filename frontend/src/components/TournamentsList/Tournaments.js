import React from 'react';
import { useHistory } from 'react-router-dom';

import { StyledTournamentsListELement } from './TournamentsList.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faCalendarAlt,
   faClock,
   faUsers,
} from '@fortawesome/free-solid-svg-icons';

const Tournaments = ({ tournaments }) => {
   let history = useHistory();

   const currentTournamentsList = tournaments.map(tournament => {
      const {
         name,
         id,
         status,
         championship_start,
         slots,
         current_subscriptions,
      } = tournament;

      const date = new Date(championship_start);
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();

      const hours = date.getHours();
      const minutes = date.getMinutes();

      const fullDate = `${day}/${month}/${year}`;
      const fullTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;

      function handleClick() {
         history.push(`/home/tournament/${id}`);
      }

      const tournamentInformation = () => {
         switch (status) {
            case 'join':
               return (
                  <div className='tournamentInfo'>
                     <span>
                        {fullDate}
                        <FontAwesomeIcon
                           className='tournamentListIcon'
                           icon={faCalendarAlt}
                        />
                     </span>
                     <span>
                        {fullTime}
                        <FontAwesomeIcon
                           className='tournamentListIcon'
                           icon={faClock}
                        />
                     </span>
                     <span>
                        {`${current_subscriptions}/${slots}`}
                        <FontAwesomeIcon
                           className='tournamentListIcon'
                           icon={faUsers}
                        />
                     </span>
                  </div>
               );
            case 'adjustment':
               return (
                  <div className='tournamentInfo'>
                     <h3>
                        Turniej jest w trakcie rozgrywek, oglądaj na żywo na{' '}
                        <a
                           onClick={e => e.stopPropagation()}
                           target='_blank'
                           href='https://www.twitch.tv/fastcup_official/'
                        >
                           Twitch.tv
                        </a>
                     </h3>
                  </div>
               );
            case 'finished':
               return (
                  <div className='tournamentInfo'>
                     <h3>Turniej został zakończony</h3>
                  </div>
               );
            default:
               break;
         }
      };

      return (
         <StyledTournamentsListELement onClick={() => handleClick(id)} key={id}>
            <div className='tournamentName'>
               <h2>{name}</h2>
            </div>
            {tournamentInformation()}
         </StyledTournamentsListELement>
      );
   });

   return currentTournamentsList;
};

export default Tournaments;
