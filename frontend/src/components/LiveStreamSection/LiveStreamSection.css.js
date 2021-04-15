import styled from 'styled-components';

export const StyledLiveStreamBar = styled.div`
   flex: 1.5;
   color: white;
   display: flex;
   flex-direcion: row;
   jusitfy-content: space-between;
   padding: 10px;
   > div:nth-child(1) {
      position: relative;
      padding-top: 10px;
      flex: 1.3;
      > p {
         position: absolute;
         right: 0%;
         bottom: 10%;
         font-size: 3vh;
         color: ${({ theme }) => theme.colors.green.normal};
         > span {
            color: ${({ theme }) => theme.colors.blue.normal};
         }
      }
      > h2 {
         position: absolute;
         right: 0;
         font-size: 7vh;
      }
      @media (max-width: 750px) {
         display: none;
      }
   }
   > div:nth-child(2) {
      flex: 2;
      display: flex;
      justify-content: center;
      align-items: center;
      h2 {
         font-size: 8vh;
         opacity: 0.25;
      }
   }
   > div:nth-child(3) {
      flex: 2;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      h2 {
         font-size: 8vh;
         > span {
            color: ${({ theme }) => theme.colors.green.normal};
         }
      }
      @media (max-width: 750px) {
         display: none;
      }
   }
`;

export const StyledLiveStreamWrapper = styled.div`
   flex: 8;
   border: 4px solid ${({ theme }) => theme.colors.blue.light};
   margin: 0 30px 30px 30px;
   position: relative;
   > #fastcup {
      height: 100%;
      width: 100%;
   }
`;
