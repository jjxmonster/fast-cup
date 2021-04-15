import { createGlobalStyle } from 'styled-components';

import BebasNeueLight from './font/BebasNeue-Light.otf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    src: url(${BebasNeueLight});
    font-family: 'BebasNeue-Light';
  }
  *{
      box-sizing:border-box;
      margin:0;
      padding:0;
      font-family: 'Bebas Neue', cursive;
  }
  button{
    background:transparent;
    outline:0;
    border:0;
  }
  ul{
   list-style:none;
  }
  a{
    text-decoration:none;
  }
  a:focus{
    color:${({ theme }) => theme.colors.blue.normal};
  }
`;
