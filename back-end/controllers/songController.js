const express = require('express');

const songs = express.Router();
const db = require('../db/dbConfig');

//Index

songs.get('/', async (req, res) => {
  const allSongs = await db.any('SELECT * FROM song');
  res.json({ success: true, payload: allSongs });
});

module.exports = songs;
