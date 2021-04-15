export const fetchTournaments = async () => {
   const response = await fetch('http://localhost:3030/tournament/all');
   const data = await response.json();

   return data;
};

export const fetchTournamentsTeams = async id => {
   const response = await fetch(
      `http://localhost:3030/tournament/${id}/joined-teams`
   );
   const data = await response.json();

   return data;
};
