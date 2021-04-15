const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
const { cacheControl } = require('../cacheControl')

/* GET tournament listing. */
router.get('/', cacheControl, (req, res) => {
    const id = 'fbe8d907-1e1e-4689-9d4d-18f00a17a4c8';
  (async () => {
    const response = await fetch(`https://open.faceit.com/data/v4/organizers/${id}`, {
      method: 'get',
      headers: {'Accept': 'application/json', 'Authorization': 'Bearer 28c3d040-edc3-45e2-aca2-f39268265f28'},
    });
    const json = await response.json();
    res.status(200).json({
      name: `Informacje na temat organizacji ${json.name}.`,
      result: json,
    })
  })();
});

router.get('/all', cacheControl, (req, res) => {
    const id = 'fbe8d907-1e1e-4689-9d4d-18f00a17a4c8';
    (async () => {
      const response = await fetch(`https://open.faceit.com/data/v4/organizers/${id}/championships?offset=0&limit=20`, {
        method: 'get',
        headers: {'Accept': 'application/json', 'Authorization': 'Bearer 28c3d040-edc3-45e2-aca2-f39268265f28'},
      });
      const json = await response.json();
      const result = json.items;
      const results = result.filter(
        tournament => tournament.status !== 'cancelled'
     )
      res.status(200).json({
        result: results,
        mapPool:'de_dust 2, de_inferno, de_train, de_overpass, de_vertigo, de_nuke, de_mirage',
      })
    })();
  });

  router.get('/:id/matches', cacheControl, (req, res) => {
    const id = req.params.id;
    (async () => {
      const response = await fetch(`https://open.faceit.com/data/v4/championships/${id}/matches?type=all&offset=0&limit=20`, {
        method: 'get',
        headers: { 'Accept': 'application/json', 'Authorization': 'Bearer 28c3d040-edc3-45e2-aca2-f39268265f28'},
      });
      const json = await response.json()
      const result = json.items;

      const matches = []

      for(var i = 0; i < result.length; i++){
        matches.push(result[i].match_id)
      }

      async function getMatchStats(match_id, arr){
        const response = await fetch(`https://open.faceit.com/data/v4/matches/${match_id}/stats`, {
            method: 'get',
            headers: {'Accept': 'application/json', 'Authorization': 'Bearer 28c3d040-edc3-45e2-aca2-f39268265f28'},
          });
          const doc = await response.json();
          const rounds = doc.rounds
          arr.push({
            match_id,
            rounds: rounds
          })
      }

      const matches_stats = []

      for(var i = 0; i < matches.length; i++){
        await getMatchStats(matches[i], matches_stats)
      }
      

      if(json.items.length<1){
        return res.status(200).json({
          status: 'Turniej nie ma jeszcze Å¼adnych meczy',
        })
      } else {
        return res.status(200).json({
          name: `Statystyki i mecze turnieju ${json.items[0].competition_name}`,
          numberOfMatches: json.items.length,
          result: matches_stats,
        })
      }
    })();
  })

  router.get('/:id/joined-teams', cacheControl, (req, res) => {
    const id = req.params.id;
    (async () => {
      const response = await fetch(`https://open.faceit.com/data/v4/championships/${id}/subscriptions?offset=0&limit=10`, {
        method: 'get',
        headers: { 'Accept': 'application/json', 'Authorization': 'Bearer 28c3d040-edc3-45e2-aca2-f39268265f28'},
      });
      const json = await response.json();
      const result = json.items;

      const joinedTeams = []

      for(var i = 0; i < result.length; i++){
        joinedTeams.push(result[i].team.team_id)
      }

      async function getAvatar(team_id){
        const response = await fetch(`https://open.faceit.com/data/v4/teams/${team_id}`, {
            method: 'get',
            headers: {'Accept': 'application/json', 'Authorization': 'Bearer 28c3d040-edc3-45e2-aca2-f39268265f28'},
          });
          const doc = await response.json();
          const avatar_id = doc.avatar
          return avatar_id
      }

      async function getLvlMember(user_id){
        const response = await fetch(`https://open.faceit.com/data/v4/players/${user_id}`, {
            method: 'get',
            headers: {'Accept': 'application/json', 'Authorization': 'Bearer 28c3d040-edc3-45e2-aca2-f39268265f28'},
          });
          const doc = await response.json();
          const csgo = doc.games.csgo
          const userSkillLevel = {
            level: csgo.skill_level,
            faceit_elo: csgo.faceit_elo,
          }

          return userSkillLevel
      }

      async function getMembers(team_id){
        const response = await fetch(`https://open.faceit.com/data/v4/teams/${team_id}`, {
            method: 'get',
            headers: {'Accept': 'application/json', 'Authorization': 'Bearer 28c3d040-edc3-45e2-aca2-f39268265f28'},
          });
          const doc = await response.json();
          const members = doc.members

          const membersResult = []
          for(var i = 0; i < members.length; i++){
            const userInfo = {
              nickname: members[i].nickname,
              skill_level: await getLvlMember(members[i].user_id)
            }
            membersResult.push(userInfo)
          }

          return membersResult
      }


      const avatars = []
      for(var i = 0; i < joinedTeams.length; i++){
        const avatar = await getAvatar(joinedTeams[i])
        avatars.push(avatar)
      }

      const rezultat = []

      for(var i = 0; i < result.length; i++){
        const team = {
          team_id: result[i].team.team_id,
          avatar: avatars[i],
          members: await getMembers(result[i].team.team_id)
        }
        rezultat.push(team)
      }

      res.status(200).json(rezultat)
    })();
  })

module.exports = router;