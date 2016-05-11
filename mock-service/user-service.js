'use strict';

import express from 'express';

const app = express();
const port = 10301;

app.post('/users', (req, res) => {
  console.log('post on users', req.body);
  res.status(200).json({
    name: 'koly',
    role: 'admin'
  });
});

app.use((req, res) => {
  res.status(404).json({message: 'Hi, I am kidding...'});
});

app.listen(port, _ => {
  console.log(`mock user service is running at ${port}...`);  
});
