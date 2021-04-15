import styled from 'styled-components';

export const StyledHomePageWrapper = styled.div`
   width: 100%;
   height: 400vh;
   display: flex;
   padding-left: 7%;
   flex-direction: column;
   > section {
      flex: 1;
   }
   background: ${({ theme }) => theme.colors.blue.dark};
   @media (max-width: 750px) {
      padding-left: 0;
   }
`;
