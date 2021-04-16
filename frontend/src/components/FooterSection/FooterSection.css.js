import styled from 'styled-components';

export const StyledTopContainer = styled.div`
   flex: 8;
   display: flex;
   @media (max-width: 750px) {
      flex-direction: column;
   }
`;
export const StyledLeftSection = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
`;
export const StyledSectionHeader = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
   justify-content: center;
   > h2 {
      color: white;
      font-size: 4vh;
      font-family: 'BebasNeue-Light';
   }
`;

export const StyledLeftSectionContent = styled.div`
   flex: 6;
   padding-left: 30px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   flex-direction: column;
   @media (max-width: 750px) {
      padding-left: 0px;
   }
`;
export const StyledFAQElement = styled.div`
   width: 70%;
   height: 20%;
   margin-top: 2%;
   color: white;
   text-align: center;
   > h3 {
      font-size: 2.5vh;
      font-weight: 300;
      font-family: 'Roboto', sans-serif;
      margin-bottom: 1%;
   }
   > p {
      font-size: 2vh;
      font-weight: 100;
      font-family: 'Roboto', sans-serif;
      color: ${({ theme }) => theme.colors.gray.normal};
      > a {
         font-size: 2vh;
         font-weight: 100;
         font-family: 'Roboto', sans-serif;
         color: ${({ theme }) => theme.colors.blue.light};
      }
   }
   @media (max-width: 750px) {
      width: 90%;
      margin-top: 10%;
   }
`;

export const StyledRightSection = styled.div`
   flex: 1;
   position: relative;
   overflow: hidden;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   &:after {
      z-index: 0;
      position: absolute;
      width: 5%;
      height: 70%;
      content: '';
      top: 0;
      left: 0;
      bottom: 0;
      margin: auto;
      border-left: 2px solid ${({ theme }) => theme.colors.blue.normal};
   }
`;

export const StyledBottomContainer = styled.div`
   flex: 2;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   > p {
      font-family: 'Roboto', sans-serif;
      font-size: 2vh;
      color: ${({ theme }) => theme.colors.gray.normal};
      > a {
         font-family: 'Roboto', sans-serif;
         color: ${({ theme }) => theme.colors.blue.light};
      }
   }
   border-top: 2px solid ${({ theme }) => theme.colors.blue.normal};
   @media (max-width: 750px) {
      flex: 5;
   }
`;

export const StyledRightSectionContainer = styled.div`
   flex: 6;
   display: flex;
   align-items: center;
   justify-content: space-between;
   flex-direction: column;
   > div:nth-child(1) {
      margin-top: 15%;
   }
   > div:nth-child(2) {
      margin-bottom: 15%;
   }
   > div {
      text-align: center;
      width: 90%;
      height: 30%;
      color: white;
      > h3 {
         font-family: 'Roboto', sans-serif;
         font-weight: 100;
         font-size: 2.5vh;
      }
      > p {
         margin-top: 2%;
         font-size: 3vh;
         > a {
            color: ${({ theme }) => theme.colors.gray.normal};
            &:hover {
               color: white;
            }
         }
         > .mailIcon {
            margin-right: 2.5%;
            color: ${({ theme }) => theme.colors.green.normal};
         }
      }
   }
`;
