const express = require('express');
const db = require('./db');

const app = express();

app.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM books');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});