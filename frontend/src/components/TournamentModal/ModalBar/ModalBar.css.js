import styled from 'styled-components';

export const StyledTournamentBar = styled.div`
   flex: 3;
   background: rgba(13, 23, 34, 0.6);
   display: flex;
   > div {
      > h3 {
         color: ${({ theme }) => theme.colors.blue.normal};
      }
      flex: 1;
   }
   > div:nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: center;
   }
   > div:nth-child(2) {
      display: flex;
      flex-direction: row;
      font-size: 3vh;
   }
`;

export const StyledTournamentDates = styled.div`
   width:230px;
   height:70px;
   background:${({ theme }) => theme.colors.blue.dark};
   border-radius 60px;
   overflow:hidden;
   margin:0 5%;
   display:flex;
   > div:nth-child(1){
      flex:1;
      font-size:3.5vh;
      color: ${({ theme }) => theme.colors.green.normal};
      display:flex;
      justify-content:center;
      align-items:center;
   }
   > div:nth-child(2){
      flex:2;
      font-size:2vh;
      display:flex;
      flex-direction:column;
      justify-content:center;
      > span:nth-child(2){
         font-size:1.5vh;
         color: ${({ theme }) => theme.colors.gray.normal};
      }
   }
`;

export const StyledJoinedTeams = styled.div`
   flex: 4;
   display: flex;
   flex-direction: column;
   align-items: flex-end;
   justify-content: center;
   font-size: 2.5vh;
   > span {
      color: ${({ theme }) => theme.colors.green.normal};
   }
`;

export const StyledJoinedTeamsAvatars = styled.div`
   flex: 3;
   display: flex;
   justify-content: center;
   align-items: center;
   > .anotherTeamsCount {
      flex: 1;
      padding-right: 5px;
      > div {
         display: flex;
         align-items: center;
         justify-content: center;
         background: ${({ theme }) => theme.colors.blue.light};
         width: 55px;
         height: 55px;
         border-radius: 50%;
      }
   }
   > .teamsAvatars {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      flex: 5;
   }
   > .teamsAvatars a:nth-last-child(1) {
      &:before {
         visibility: hidden;
      }
   }
   > .teamsAvatars a {
      cursor: pointer;
      width: 55px;
      height: 55px;
      margin-right: -7px;
      border-radius: 50%;
      border: 0;
      position: relative;
      overflow: hidden;
      &:before {
         width: 100%;
         height: 100%;
         content: '';
         border-radius: 50%;
         position: absolute;
         background: #15212e;
         margin-left: 70%;
      }
      > img {
         width: 100%;
         height: 100%;
      }
   }
`;
