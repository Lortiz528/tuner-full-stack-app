const express = require('express');

const songs = express.Router();
const db = require('../db/dbConfig');

//Index

songs.get('/', async (req, res) => {
  const allSongs = await db.any('SELECT * FROM song');
  res.json({ success: true, payload: allSongs });
});

//Individual
songs.get('/:id', async (req, res) => {
  const { id } = req.params;
  const indySong = await db.one('SELECT * FROM song WHERE id=$1', id);
  if (indySong) {
    res.status(200).json({ success: true, payload: indySong });
  } else {
    res.status(404).send(`No such song with id of ${id}`);
  }
});

//create
songs.post('/new', async (req, res) => {
  const newSong = await db.any(
    'INSERT INTO song (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [
      req.body.name,
      req.body.artist,
      req.body.album,
      req.body.time,
      req.body.is_favorite,
    ]
  );
  res.status(200).json({ success: true, payload: newSong });
});

module.exports = songs;
