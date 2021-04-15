export const fetchTournaments = async () => {
   const response = await fetch('/tournament/all');
   const data = await response.json();

   return data;
};

export const fetchTournamentsTeams = async id => {
   const response = await fetch(`/tournament/${id}/joined-teams`);
   const data = await response.json();

   return data;
};
