import styled from 'styled-components';

export const StyledHomePageNavBar = styled.div`
   width: 7%;
   height: 100vh;
   position: fixed;
   left: 0;
   background: ${({ theme }) => theme.colors.blue.normal};
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   > .NavIcon {
      cursor: pointer;
      position: relative;
      width: 40px;
      height: 40px;
      font-size: 5vh;
      margin-bottom: 50%;
      border-radius: 50%;
      border: 3px solid ${({ theme }) => theme.colors.green.normal};
      &:before {
         border-radius: 50%;
         top: 0;
         left: 0;
         right: 0;
         bottom: 0;
         margin: auto;
         position: absolute;
         content: '';
         width: 0%;
         height: 0%;
         background: ${({ theme }) => theme.colors.green.normal};
         transition: 0.2s ease;
      }
   }

   > .activeIcon {
      &:before {
         width: 100%;
         height: 100%;
      }
   }

   @media (max-width: 750px) {
      display: none;
   }
`;
