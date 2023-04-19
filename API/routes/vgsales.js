const express = require('express');
const router = express.Router();
const vgsales = require('../services/vgsales');


router.get('/platform', async function(req, res, next) {
  try {
    res.json(await vgsales.getPlatformList());
  } catch (err) {
    console.error(`Error while getting platform list `, err.message);
    next(err);
  }
});

router.get('/genre', async function(req, res, next) {
  try {
    res.json(await vgsales.getGenreList());
  } catch (err) {
    console.error(`Error while getting genre list `, err.message);
    next(err);
  }
});

router.get('/publisher', async function(req, res, next) {
  try {
    res.json(await vgsales.getPublisherList());
  } catch (err) {
    console.error(`Error while getting publisher list `, err.message);
    next(err);
  }
});

router.get('/game-list', async function(req, res, next) {
  try {
    res.json(await vgsales.getGameList(req.query.page, req.query.genreID, req.query.publisherID));
  } catch (err) {
    console.error(`Error while getting game list `, err.message);
    next(err);
  }
});

module.exports = router;
