const express = require('express');
const session = require('express-session')
const db = require('./db');

const app = express();

app.get('/', async (req, res) => {
  if (req.session.user) {
    // Sessão válida, responde com status 200
    res.status(200).send({deuCerto: true});
  } else {
    // Sessão inválida, responde com erro 401 (não autorizado)
    res.status(401).send({deuCerto: false});
  }
});

app.get('/users', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});