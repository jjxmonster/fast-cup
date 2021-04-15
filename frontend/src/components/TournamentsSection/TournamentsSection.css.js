import styled from 'styled-components';

export const StyledTournamentsBar = styled.div`
   padding: 0 30px 0 30px;
   flex: 2;
   color: white;
   display: flex;
   flex-direction: column;
   > div:nth-child(1) {
      flex: 2;
      display: flex;
      align-items: center;
      padding-left: 50px;
      font-size: 5vh;
      @media (max-width: 750px) {
         font-size: 4vh;
         padding: 0;
         justify-content: center;
         flex: 1;
      }
   }
   > div:nth-child(2) {
      flex: 1;
      display: flex;
      align-items: center;
      @media (max-width: 750px) {
         justify-content: center;
      }
   }
`;
export const StyledFilterButton = styled.button`
   width: 100px;
   height: 50px;
   background: ${({ theme }) => theme.colors.blue.normal};
   margin-left: 4%;
   cursor: pointer;
   font-size: 1em;
   transition: 0.3s ease;
   &:hover {
      background: ${({ theme }) => theme.colors.blue.light};
   }
   @media (max-width: 750px) {
      width: 85px;
      height: 40px;
   }

   ${({ active, theme }) =>
      active ? `color:${theme.colors.green.normal};` : `color:white`}
`;
