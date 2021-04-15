import styled from 'styled-components';

export const StyledModalNavigation = styled.nav`
   flex: 1;
   display: flex;
   align-items: center;
   padding-left: 20px;
   > p {
      color: ${({ theme }) => theme.colors.gray.normal};
      font-size: 2vh;
      > span:nth-child(1) {
         color: #e6e6e6;
         cursor: pointer;
         transition: 0.3s ease;
         &:hover {
            opacity: 0.7;
         }
      }
      > span:nth-child(2) {
         color: #95a1b0;
      }
   }
`;

export const StyledModalHeader = styled.div`
   flex: 2;
   padding-left: 20px;
   padding-right: 100px;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
`;

export const StyledJoinButton = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 10px;
   width: 150px;
   height: 50px;
   background: ${({ theme }) => theme.colors.blue.light};
   font-size: 20px;
   cursor: pointer;
   transition: 0.2s ease;
   ${({ disabled }) =>
      disabled
         ? `
            opacity:0.5;
            cursor:not-allowed;
         `
         : `
      opacity:1;
      &:hover{
         box-shadow: 0px 0px 20px 0px rgba(84,195,253,1);
      }
      
   `}
`;
