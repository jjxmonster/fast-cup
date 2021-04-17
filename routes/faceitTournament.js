const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
const { cacheControl } = require('../cacheControl');

/* GET tournament listing. */
router.get('/', cacheControl, (req, res) => {
   const id = '44c57633-4c37-46d6-858b-615fd8b3754c';
   (async () => {
      const response = await fetch(
         `https://open.faceit.com/data/v4/organizers/${id}`,
         {
            method: 'get',
            headers: {
               Accept: 'application/json',
               Authorization: 'Bearer 28c3d040-edc3-45e2-aca2-f39268265f28',
            },
         }
      );
      const json = await response.json();
      res.status(200).json({
         name: `Informacje na temat organizacji ${json.name}.`,
         result: json,
      });
   })();
});

router.get('/:id/matches', cacheControl, (req, res) => {
   const id = req.params.id;
   (async () => {
      const response = await fetch(
         `https://open.faceit.com/data/v4/championships/${id}/matches?type=all&offset=0&limit=20`,
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

      const matches = [];

      for (var i = 0; i < result.length; i++) {
         matches.push(result[i].match_id);
      }

      async function getMatchStats(match_id, arr) {
         const response = await fetch(
            `https://open.faceit.com/data/v4/matches/${match_id}/stats`,
            {
               method: 'get',
               headers: {
                  Accept: 'application/json',
                  Authorization: 'Bearer 28c3d040-edc3-45e2-aca2-f39268265f28',
               },
            }
         );
         const doc = await response.json();
         const rounds = doc.rounds;
         arr.push({
            match_id,
            rounds: rounds,
         });
      }

      const matches_stats = [];

      for (var i = 0; i < matches.length; i++) {
         await getMatchStats(matches[i], matches_stats);
      }

      if (json.items.length < 1) {
         return res.status(200).json({
            status: 'Turniej nie ma jeszcze Å¼adnych meczy',
         });
      } else {
         return res.status(200).json({
            name: `Statystyki i mecze turnieju ${json.items[0].competition_name}`,
            numberOfMatches: json.items.length,
            result: matches_stats,
         });
      }
   })();
});

module.exports = router;
