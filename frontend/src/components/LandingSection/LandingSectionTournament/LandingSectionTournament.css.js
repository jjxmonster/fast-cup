import styled from 'styled-components';

export const StyledSoonTournamentInfo = styled.div`
   flex: 2;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   position:relative;
   > div:nth-child(even) {
      color: white;
   }
   > div:nth-child(odd) {
      color: ${({ theme }) => theme.colors.blue.light};
   }
   > h2 {
      top:0;
      left:0;
      margin-auto;
      position: absolute;
      font-size: 3.5vh;
      color: ${({ theme }) => theme.colors.white.normal};
   }
   > div {
      flex: 1;
      display: flex;
      justify-content: center;
      > .infoIcon {
         opacity: 0.7;
         font-size: 2.5vh;
      }
      > span {
         text-align:center;
         position: relative;
         font-size: 5vh;
         font-weight: bold;
         > .maxTeams {
            color: ${({ theme }) => theme.colors.blue.light};
         }
      }
      > a{
         display:flex;
         align-items:center;
         justify-content:center;
         width: 150px;
         height: 50px;
         background: ${({ theme }) => theme.colors.green.normal};
         border-radius: 10px;
         font-size: 20px;
      }
   }
   @media (max-width: 750px) {
      flex-direction: column;
   }
`;

export const StyledNoActiveTournamentMessage = styled.div`
   flex: 2;
   color: white;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   > h2 {
      font-size: 5vh;
      font-family: 'BebasNeue-Light';
   }
   > p {
      font-size: 4vh;
      color: ${({ theme }) => theme.colors.gray.normal};
      font-family: 'BebasNeue-Light';
   }
`;
