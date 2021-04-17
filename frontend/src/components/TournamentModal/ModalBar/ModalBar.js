import React, { useContext } from 'react';
import { useQuery } from 'react-query';

import { TournamentContext } from '../../../Context/TournamentContext';

import { fetchTournamentsTeams } from '../../../data/fetch/tournament.fetch.js';

import {
   StyledTournamentBar,
   StyledTournamentDates,
   StyledJoinedTeams,
   StyledJoinedTeamsAvatars,
} from './ModalBar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

import defaultAvatar from '../images/default_avatar.jpg';

const ModalBar = () => {
   const { currentTournament } = useContext(TournamentContext);

   const {
      id,
      slots,
      current_subscriptions,
      championship_start,
      checkin_clear,
      status,
   } = currentTournament;

   const { data: teams } = useQuery('teams', () => fetchTournamentsTeams(id));

   const teamFaceitURL = id => `https://www.faceit.com/pl/teams/${id}`;

   const teamsAvatars = teams.map((team, id) => {
      const { team_id, avatar } = team;

      if (id > 4) return null;
      return (
         <a key={team_id} href={teamFaceitURL(team_id)} target='_blank'>
            <img src={avatar !== '' ? avatar : defaultAvatar} />
         </a>
      );
   });

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

   const joinDate = new Date(checkin_clear);
   const joinDay = String(joinDate.getDate()).padStart(2, '0');
   const joinMonth = String(joinDate.getMonth() + 1).padStart(2, '0');
   const joinYear = joinDate.getFullYear();

   const joinHours = joinDate.getHours();
   const joinMinutes = joinDate.getMinutes();

   const joinFullDate = `${joinDay}/${joinMonth}/${joinYear}`;
   const joinFullTime = `${joinHours}:${
      joinMinutes < 10 ? '0' + joinMinutes : joinMinutes
   }`;
   console.log(teams);
   const showTournamentInformation =
      status === 'finished' ? (
         <h3>TURNIEJ ZAKOŃCZONY</h3>
      ) : (
         <>
            <StyledTournamentDates>
               <div>
                  <FontAwesomeIcon icon={faClock} />
               </div>
               <div>
                  <span>
                     {startFullDate} {startFullTime}
                  </span>
                  <span>Start Turnieju</span>
               </div>
            </StyledTournamentDates>
            <StyledTournamentDates>
               <div>
                  <FontAwesomeIcon icon={faCalendarCheck} />
               </div>
               <div>
                  <span>
                     {joinFullDate} {joinFullTime}
                  </span>
                  <span>Zakończenie zapisów</span>
               </div>
            </StyledTournamentDates>
         </>
      );

   return (
      <StyledTournamentBar>
         <div>{showTournamentInformation}</div>
         <div>
            <StyledJoinedTeams>
               <p>Zapisane druzyny</p>
               <span>
                  {current_subscriptions}/{slots}
               </span>
            </StyledJoinedTeams>
            <StyledJoinedTeamsAvatars>
               <div className='teamsAvatars'>{teamsAvatars}</div>
               <div className='anotherTeamsCount'>
                  {teams.length > 5 ? <div>+{teams.length - 5}</div> : null}
               </div>
            </StyledJoinedTeamsAvatars>
         </div>
      </StyledTournamentBar>
   );
};

export default ModalBar;
