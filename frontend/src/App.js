import React, { useEffect } from 'react';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   useHistory,
} from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { QueryClient, QueryClientProvider } from 'react-query';

import { HomePage } from './components';

import { GlobalStyle } from './index.css';
import theme from './theme/theme';

const client = new QueryClient({
   defaultOptions: {
      queries: {
         suspense: true,
      },
   },
});

function App() {
   let history = useHistory();

   useEffect(() => {
      history.push('/home');
   }, []);

   return (
      <QueryClientProvider client={client}>
         <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Switch>
               <Route path='/home'>
                  <HomePage />
               </Route>
            </Switch>
         </ThemeProvider>
      </QueryClientProvider>
   );
}

export default App;
