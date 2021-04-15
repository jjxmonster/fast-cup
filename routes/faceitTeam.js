const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();

// API związane z drużynami

router.get('/team/:team_id', function(req, res, next) {
  const team_id = req.params.team_id;
  (async () => {
    const response = await fetch(`https://open.faceit.com/data/v4/teams/${team_id}`, {
      method: 'get',
      headers: {'Accept': 'application/json', 'Authorization': 'Bearer 28c3d040-edc3-45e2-aca2-f39268265f28'},
    });
    const doc = await response.json();
    res.status(200).json({
      name: `Informacje na temat drużyny ${doc.name}`,
      result: doc,
    })
  })();
});

router.get('/team/:team_id/avatar', function(req, res, next) {
  const team_id = req.params.team_id;
  (async () => {
    const response = await fetch(`https://open.faceit.com/data/v4/teams/${team_id}`, {
      method: 'get',
      headers: {'Accept': 'application/json', 'Authorization': 'Bearer 28c3d040-edc3-45e2-aca2-f39268265f28'},
    });
    const doc = await response.json();
    res.status(200).json({
      avatar: doc.avatar,
    })
  })();
});

router.get('/team-stats/:team_id', function(req, res, next) {
  const team_id = req.params.team_id;
  (async () => {
    const response = await fetch(`https://open.faceit.com/data/v4/teams/${team_id}/stats/csgo`, {
      method: 'get',
      headers: {'Accept': 'application/json', 'Authorization': 'Bearer 28c3d040-edc3-45e2-aca2-f39268265f28'},
    });
    const doc = await response.json();
    res.status(200).json({
      name: `Statystyki drużyny.`,
      result: doc,
    })
  })();
});


module.exports = router;
