export const fetchTournaments = async () => {
   const id = 'fbe8d907-1e1e-4689-9d4d-18f00a17a4c8';
   const response = await fetch(
      `https://open.faceit.com/data/v4/organizers/${id}/championships?offset=0&limit=20`,
      {
         method: 'get',
         headers: {
            Accept: 'application/json',
            Authorization: 'Bearer 28c3d040-edc3-45e2-aca2-f39268265f28',
         },
      }
   );
   const json = await response.json();
   const result = json.items;
   const results = result.filter(
      tournament => tournament.status !== 'cancelled'
   );

   return results;
};

export const fetchTournamentsTeams = async id => {
   const response = await fetch(
      `https://open.faceit.com/data/v4/championships/${id}/subscriptions`,
      {
         method: 'get',
         headers: {
            Accept: 'application/json',
            Authorization: 'Bearer 28c3d040-edc3-45e2-aca2-f39268265f28',
         },
      }
   );
   const json = await response.json();
   const result = json.items;

   const joinedTeams = [];

   for (var i = 0; i < result.length; i++) {
      joinedTeams.push(result[i].team.team_id);
   }

   async function getAvatar(team_id) {
      const response = await fetch(
         `https://open.faceit.com/data/v4/teams/${team_id}`,
         {
            method: 'get',
            headers: {
               Accept: 'application/json',
               Authorization: 'Bearer 28c3d040-edc3-45e2-aca2-f39268265f28',
            },
         }
      );
      const doc = await response.json();
      const avatar_id = doc.avatar;
      return avatar_id;
   }

   async function getLvlMember(user_id) {
      const response = await fetch(
         `https://open.faceit.com/data/v4/players/${user_id}`,
         {
            method: 'get',
            headers: {
               Accept: 'application/json',
               Authorization: 'Bearer 28c3d040-edc3-45e2-aca2-f39268265f28',
            },
         }
      );
      const doc = await response.json();
      const csgo = doc.games.csgo;
      const userSkillLevel = {
         level: csgo.skill_level,
         faceit_elo: csgo.faceit_elo,
      };

      return userSkillLevel;
   }

   async function getMembers(team_id) {
      const response = await fetch(
         `https://open.faceit.com/data/v4/teams/${team_id}`,
         {
            method: 'get',
            headers: {
               Accept: 'application/json',
               Authorization: 'Bearer 28c3d040-edc3-45e2-aca2-f39268265f28',
            },
         }
      );
      const doc = await response.json();
      const members = doc.members;

      const membersResult = [];
      for (var i = 0; i < members.length; i++) {
         const userInfo = {
            nickname: members[i].nickname,
            skill_level: await getLvlMember(members[i].user_id),
         };
         membersResult.push(userInfo);
      }

      return membersResult;
   }

   const avatars = [];
   for (var i = 0; i < joinedTeams.length; i++) {
      const avatar = await getAvatar(joinedTeams[i]);
      avatars.push(avatar);
   }

   const results = [];

   for (var i = 0; i < result.length; i++) {
      const team = {
         team_id: result[i].team.team_id,
         avatar: avatars[i],
         members: await getMembers(result[i].team.team_id),
      };
      results.push(team);
   }

   return results;
};
