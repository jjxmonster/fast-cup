import React, { useState, useContext } from 'react';
import { useQuery } from 'react-query';

import { TournamentContext } from '../../../../Context/TournamentContext';
import { fetchTournamentsTeams } from '../../../../data/fetch/tournament.fetch.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faChevronRight,
   faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

import {
   StyledSectionWrapper,
   StyledTeamWrapper,
   StyleForwardButton,
   StyleBackwardsButton,
   StyledTeamAvatar,
   StyledTeamPlayers,
   StyledTeamsWrapper,
   StyledMessageInSections,
} from './Sections.css.js';

const TeamsSection = () => {
   const [activeTeam, setActiveTeam] = useState(0);
   const { currentTournament } = useContext(TournamentContext);
   const { data: teams } = useQuery('teams', () => fetchTournamentsTeams(id));
   const { id } = currentTournament;
   const numberofPages = Math.ceil(teams.length / 3);
   const playerProfileURL = `https://www.faceit.com/pl/players/`;
   const teamProfileURL = `https://www.faceit.com/pl/teams/`;

   const handleSlider = action => {
      switch (action) {
         case 'FORWARD':
            return setActiveTeam(activeTeam + 1);
         case 'BACKWARD':
            return setActiveTeam(activeTeam - 1);
         default:
            break;
      }
   };
   if (teams.length === 0) {
      return (
         <StyledSectionWrapper>
            <StyledMessageInSections>
               Brak zapisanych druzyn
            </StyledMessageInSections>
         </StyledSectionWrapper>
      );
   }

   const RenderTeams = teams.map((team, id) => (
      <StyledTeamWrapper pages={numberofPages} key={team.team_id}>
         <StyledTeamAvatar isActive={activeTeam === id}>
            <a href={`${teamProfileURL}${team.team_id}`}>
               <img src={team.avatar} alt='avatar' />
            </a>
         </StyledTeamAvatar>

         <StyledTeamPlayers isVisible={activeTeam === id}>
            <ul>
               <li className='listHeader'>
                  <p>Nick</p>
                  <span>Level</span>
               </li>
               {team.members.map(team => {
                  const { nickname, skill_level } = team;
                  return (
                     <li key={nickname}>
                        <a
                           target='_blank'
                           href={`${playerProfileURL}${nickname}`}
                        >
                           {nickname}
                        </a>
                        <span>{skill_level.level}</span>
                     </li>
                  );
               })}
            </ul>
         </StyledTeamPlayers>
      </StyledTeamWrapper>
   ));
   return (
      <StyledSectionWrapper>
         <StyleBackwardsButton
            disabled={activeTeam === 0}
            onClick={() => handleSlider('BACKWARD')}
         >
            <FontAwesomeIcon icon={faChevronLeft} className='sliderArrow' />
         </StyleBackwardsButton>
         <StyledTeamsWrapper pages={numberofPages} activeTeam={activeTeam}>
            {RenderTeams}
         </StyledTeamsWrapper>
         <StyleForwardButton
            disabled={activeTeam === teams.length - 1}
            onClick={() => handleSlider('FORWARD')}
         >
            <FontAwesomeIcon icon={faChevronRight} className='sliderArrow' />
         </StyleForwardButton>
      </StyledSectionWrapper>
   );
};

export default TeamsSection;
