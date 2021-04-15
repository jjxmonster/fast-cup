import styled from 'styled-components';

export const StyledWrapperComponent = styled.section`
   display: flex;
   flex-direction: column;
   background: ${({ theme }) => theme.colors.blue.dark};
`;

export default StyledWrapperComponent;
