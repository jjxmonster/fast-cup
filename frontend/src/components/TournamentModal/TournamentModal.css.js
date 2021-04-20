import styled from 'styled-components';

import tlo from './images/tlo.jpg';

export const StyledModalWrapper = styled.div`
   position: fixed;
   height: 100%;
   width: 100%;
   top: 0;
   left: 0;
   background: rgba(0, 0, 0, 0.8);
   z-index: 100;
   display: flex;
   justify-content: center;
   align-items: center;
   color: white;
   font-size: 5vh;
`;

export const StyledTournamentModal = styled.div`
   width: 85%;
   height: 80%;
   border: 1px solid ${({ theme }) => theme.colors.blue.light};
   background-image: url(${tlo});
   background-size: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   @media (max-width: 750px) {
      width: 95%;
      height: 95%;
   }
`;

export const StyledMobileCloseButton = styled.div`
   width: 35px;
   height: 35px;
   opacity: 0.7;
   position: absolute;
   top: 1%;
   right: 1%;
   color: ${({ theme }) => theme.colors.gray.light};
   transition: 0.2s ease;
   margin: auto;
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   &:hover {
      color: white;
   }
   @media (max-width: 750px) {
      top: 0;
      right: 0;
      color: white;
   }
`;
