const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();

// API związane z meczami
router.get('/stats/:id', function(req, res, next) {
  const id = req.params.id;
  (async () => {
    const response = await fetch(`https://open.faceit.com/data/v4/matches/${id}/stats`, {
      method: 'get',
      headers: {'Accept': 'application/json', 'Authorization': 'Bearer 28c3d040-edc3-45e2-aca2-f39268265f28'},
    });
    const doc = await response.json();
    res.status(200).json({
      name: `Statystyki meczu.`,
      result: doc,
    })
  })();
});


module.exports = router;
