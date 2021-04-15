import styled from 'styled-components';

export const StyledLandingWrapper = styled.div`
   display: flex;
   flex-direction: column;
   background: ${({ theme }) => theme.colors.blue.normal};
`;

export const StyledLandingBar = styled.div`
   flex: 1;
   max-height: 15%;
   overflow: hidden;
   display: flex;
   > .BarLogo {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      > img {
         width: 100%;
         height: 100%;
         object-fit: contain;
      }
      @media (max-width: 750px) {
         display: none;
      }
   }
   > .BarSlogan {
      flex: 8;
      display: flex;
      color: white;
      flex-direction: column;
      justify-content: center;
      padding-top: 20px;
      padding-bottom: 15px;
      > h1 {
         flex: 1;
         font-size: 8vh;
      }
      > h2 {
         font-family: 'BebasNeue-Light';
         flex: 1;
         font-size: 3vh;
         margin-top: -2%;
         > span {
            color: ${({ theme }) => theme.colors.green.normal};
         }
      }
   }
   > .BarSocials {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      > a {
         cursor: pointer;
         transition: 0.2s ease;
         position: relative;
         font-size: 1.8em;
         color: ${({ theme }) => theme.colors.white.normal};
         &:before {
            transition: 0.2s ease;
            position: absolute;
            width: 100%;
            height: 100%;
            content: '/fastcup';
            opacity: 0;
            color: ${({ theme }) => theme.colors.green.normal};
         }
         &:hover {
            margin-left: -50%;
         }
         &:hover:before {
            opacity: 1;
            margin-left: 100%;
         }
      }
   }
   @media (max-width: 750px) {
      padding: 30px 20px;
   }
`;

export const StyledLandingContent = styled.div`
   flex: 4;
   display: flex;
   flex-direction: column;
   margin: 10px 30px 10px 30px;
   background: rgb(25, 37, 57);
   background: linear-gradient(
      0deg,
      rgba(25, 37, 57, 1) 0%,
      rgba(43, 56, 95, 1) 100%
   );
   @media (max-width: 750px) {
      margin: 10px 0;
   }
`;

export const StyledLandingPageContent = styled.div`
   flex: 10;
   display: flex;
`;

export const StyledImageWrapper = styled.div`
   flex: 5;
   > .LandingImage {
      width: 100%;
      height: 100%;
   }
`;
export const StyledLandingList = styled.ul`
   flex: 2;
   display: flex;
   flex-direction: column;
   padding: 50px 100px 50px 100px;
   > li {
      color: white;
      flex: 1;
      display: flex;
      align-items: center;
      font-size: 4vh;
      > p {
         font-family: 'BebasNeue-Light';
         padding-left: 5%;
      }
   }
   @media (max-width: 750px) {
      display: none;
   }
`;
