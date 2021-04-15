import styled from 'styled-components';

export const StyledTournamentsList = styled.ul`
   flex: 5;
   display: flex;
   flex-direction: column;
   position: relative;
   padding: 30px;
   @media (max-width: 750px) {
      padding: 5px;
   }
   ${({ emptyList }) =>
      emptyList
         ? `
   align-items:center;
   justify-content:center;
   `
         : null}
`;

export const StyledTournamentsListELement = styled.li`
   cursor: pointer;
   margin-bottom: 1%;
   flex: 1;
   max-height: 20%;
   display: flex;
   &:hover div:nth-child(1) {
      background: ${({ theme }) => theme.colors.blue.light};
   }
   &:hover div:nth-child(1):after {
      background: linear-gradient(
         to right bottom,
         ${({ theme }) => theme.colors.blue.light} 50%,
         transparent 50%
      );
   }
   &:hover div:nth-child(1):before {
      background: linear-gradient(
         to right top,
         ${({ theme }) => theme.colors.blue.light} 50%,
         transparent 50%
      );
   }
   &:hover div:nth-child(1) h2 {
      color: ${({ theme }) => theme.colors.blue.normal};
   }
   &:hover div:nth-child(2) {
      border: 5px solid ${({ theme }) => theme.colors.blue.light};
   }
   > div:nth-child(1) {
      background: ${({ theme }) => theme.colors.blue.normal};
      position: relative;
      &:after,
      &:before {
         z-index: 50;
         content: '';
         position: absolute;
         width: 20%;
         height: 50%;
         left: 100%;
      }
      &:after {
         bottom: 0;
         background: linear-gradient(
            to right bottom,
            ${({ theme }) => theme.colors.blue.normal} 50%,
            transparent 50%
         );
      }
      &:before {
         top: 0;
         background: linear-gradient(
            to right top,
            ${({ theme }) => theme.colors.blue.normal} 50%,
            transparent 50%
         );
      }
      flex: 3;
      display: flex;
      justify-content: center;
      align-items: center;
      > h2 {
         font-size: 5vh;
         color: ${({ theme }) => theme.colors.blue.light};
         @media (max-width: 750px) {
            text-align: center;
            font-size: 3vh;
         }
      }
   }
   > div:nth-child(2) {
      border: 5px solid ${({ theme }) => theme.colors.blue.normal};
      position: relative;
      padding-left: 10%;
      flex: 5;
      display: flex;
      align-items: center;
      justify-content: center;
      > h3 {
         font-family: BebasNeue-Light;
         font-size: 4vh;
         color: white;
         @media (max-width: 750px) {
            text-align: center;
            font-size: 3vh;
         }
         > a {
            z-index: 50;
            color: ${({ theme }) => theme.colors.blue.light};
            transition: 0.2s ease;
            &:hover {
               opacity: 0.8;
            }
         }
      }
      > span {
         z-index: 100;
         position: relative;
         flex: 1;
         font-size: 4vh;
         text-align: center;
         color: white;
         @media (max-width: 750px) {
            font-size: 2.5vh;
         }
         .tournamentListIcon {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            font-size: 250%;
            z-index: -50;
            opacity: 0.8;
            color: ${({ theme }) => theme.colors.blue.normal};
            @media (max-width: 750px) {
               font-size: 220%;
            }
         }
      }
      > button {
         position: absolute;
      }
   }
`;

export const StyledListNavigation = styled.nav`
   position: absolute;
   bottom: 2.5%;
   left: 0;
   right: 0;
   margin: auto;
   width: 50%;
   height: 10%;

   display: flex;
   > ul {
      flex: 1;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      > li {
         overflow: hidden;
         width: 5vh;
         height: 5vh;
         border: 2px solid ${({ theme }) => theme.colors.blue.light};
         color: ${({ theme }) => theme.colors.blue.light};
         font-size: 2vh;
         margin-right: 10px;
         display: flex;
         align-items: center;
         justify-content: center;
      }
   }
`;

export const StyledNavigationContent = styled.span`
   color: ${({ active, theme }) =>
      active === 'true' ? 'white' : theme.colors.blue.light};
   padding: 20px;
   &:hover {
      cursor: pointer;
   }
`;

export const StyledEmptyMessage = styled.h3`
   font-size: 5vh;
   color: ${({ theme }) => theme.colors.blue.normal};
`;
