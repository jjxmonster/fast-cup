import styled from 'styled-components';

export const StyledSectionWrapper = styled.div`
   width: 100%;
   height: 100%;
   overflow: hidden;
   position: relative;
`;
export const StyledTeamsWrapper = styled.div`
   width: ${({ pages }) => `${pages}00%`};
   height: 100%;
   position: absolute;
   transition: 0.5s ease;
   display: flex;
   flex-direction: row;
   margin-left: ${({ activeTeam }) => (100 / 3) * (-activeTeam + 1)}%;
`;

export const StyledTeamWrapper = styled.div`
   width: ${({ pages }) => 100 / (pages * 3)}%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   position: relative;
`;
export const StyledTeamAvatar = styled.div`
   z-index: 50;
   transition: 0.4s ease;
   width: 8vw;
   height: 8vw;
   border-radius: 50%;
   background: red;
   overflow: hidden;
   border: 2px solid ${({ theme }) => theme.colors.blue.light};
   ${({ isActive }) => (isActive ? `transform:translateY(-55%);` : null)};

   > a img {
      width: 100%;
      height: 100%;
   }
   > a {
   }
`;

export const StyledTeamPlayers = styled.div`
   position: absolute;
   bottom: 0;
   width: 100%;
   height: calc(100% - 8vw);
   transition: 0.5s ease;
   opacity: ${({ isVisible }) => (isVisible ? `1` : `0`)};
   padding: 10px;
   > ul {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      > .listHeader {
         color: ${({ theme }) => theme.colors.green.normal};
         font-size: 2vh;
      }
      > li {
         color: white;
         flex: 1;
         font-size: 2.5vh;
         display: flex;
         align-items: center;
         justify-content: space-between;
         padding-left: 5%;
         padding-right: 5%;
         > p {
            font-family: 'Roboto', sans-serif;
            font-size: 2vh;
         }
         > a {
            color: white;
            font-family: 'Roboto', sans-serif;
            font-size: 2vh;
            &:hover {
               color: ${({ theme }) => theme.colors.green.normal};
            }
         }
         > span {
            font-family: 'Roboto', sans-serif;
         }
      }
      > li:nth-child(even) {
         background: ${({ theme }) => theme.colors.blue.normal};
      }
   }
`;

export const StyledButtonWrapper = styled.button`
   position: absolute;
   width: 30%;
   height: 100%;
   background: rgba(0, 0, 0, 0.8);
   z-index: 100;
   cursor: pointer;
   transition: 0.3s ease;
   ${({ disabled }) =>
      disabled
         ? `
      &:hover { cursor:not-allowed};
      width:25%;
      opacity:0.2;
      `
         : `
         &:hover {width:33%}`};
   > .sliderArrow {
      color: ${({ theme }) => theme.colors.gray.light};
      font-size: 6vh;
   }
`;

export const StyleForwardButton = styled(StyledButtonWrapper)`
   right:0;
   margin-auto;
   border-top-left-radius:20%;
   border-bottom-left-radius:20%;
`;

export const StyleBackwardsButton = styled(StyledButtonWrapper)`
   left:0;
   margin-auto;
   border-top-right-radius:20%;
   border-bottom-right-radius:20%;
`;

export const StyledMessageInSections = styled.h3`
   position: absolute;
   top: 0;
   bottom: 0;
   margin: auto;
   width: 100%;
   height: 20%;
   display: flex;
   align-items: center;
   justify-content: center;
   color: ${({ theme }) => theme.colors.blue.light};
   font-size: 3vh;
`;
