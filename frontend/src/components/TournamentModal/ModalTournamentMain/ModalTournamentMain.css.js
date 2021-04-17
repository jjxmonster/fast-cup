import styled from 'styled-components';

export const StyledModalMainContainer = styled.div`
   flex: 10;
   display: flex;
   @media (max-width: 750px) {
      flex-direction: column;
      flex: 8;
   }
`;

export const StyledLeftSection = styled.section`
   flex: 3.5;
   display: flex;
   flex-direction: column;
   > div {
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding-left: 50px;
      flex: 3;
      @media (max-width: 750px) {
         padding-left: 20px;
      }
      > h3 {
         font-size: 2vh;
         color: white;
         font-family: BebasNeue-Light;
      }
      > p {
         font-size: 1.8vh;
         color: ${({ theme }) => theme.colors.gray.light};
         padding-top: 10px;
         font-family: 'Roboto', sans-serif;
         @media (max-width: 750px) {
            font-size: 1.7vh;
            padding-bottom: 5px;
         }
      }
   }
   > ul {
      padding-left: 50px;
      flex: 5;
      display: flex;
      flex-direction: column;
      @media (max-width: 750px) {
         padding-left: 20px;
      }
      > li {
         border-bottom: 2px solid ${({ theme }) => theme.colors.blue.dark};
         width: 100%;
         height: 20%;
         display: flex;
         @media (max-width: 750px) {
            flex: 1;
         }
         > div {
            font-size: 2vh;
            height: 100%;
            display: flex;
            align-items: center;
         }
         > div:nth-child(1) {
            color: ${({ theme }) => theme.colors.gray.normal};
            width: 15%;
         }
         > div:nth-child(2) {
            width: 85%;
         }
      }
   }
`;
export const StyledRightSection = styled.section`
   background: rgba(13, 23, 34, 0.6);
   border-radius: 10px;
   border: 1px solid ${({ theme }) => theme.colors.blue.dark};
   flex: 5;
   display: flex;
   flex-direction: column;
   margin: 15px;
   @media (max-width: 750px) {
      margin: 0px;
      border-radius: 0px;
   }
`;

export const StyledRightSectionNavBar = styled.nav`
   flex: 1;
   display: flex;
   justify-content: flex-start;
   align-items: center;
   padding-left: 1%;
   position: relative;
`;

export const StyledNavigationButton = styled.a`
   text-align: center;
   width: 10%;
   font-size: 45%;
   margin-right: 1%;
   cursor: pointer;
   z-index: 100;
   position: relative;
   @media (max-width: 750px) {
      width: 25%;
   }
   &:after {
      width: 0%;
      left: 0;
      right: 0;
      margin: auto;
      height: 100%;
      content: '';
      position: absolute;
      transition: 0.2s ease;
      border-bottom: 2px solid ${({ theme }) => theme.colors.blue.light};
   }
   ${({ active, theme }) =>
      active
         ? `
      color:white;
      &:after{
         width:100%;
      }
      `
         : `color:${theme.colors.blue.normal}`}
`;

export const StyledRightSectionContainer = styled.div`
   flex: 5;
   display: flex;
`;
