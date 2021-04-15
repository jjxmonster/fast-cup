import { createContext } from 'react';

export const defaultObject = {
   currentTournament: undefined,
};

export const TournamentContext = createContext(defaultObject);
