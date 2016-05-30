'use strict';

import express from 'express';
import login from './login';
import logout from './logout';
import utils from './utils';
import redis from './redis';

const routers = express.Router();

routers.get('/login', (req, res) => {
  res.status(200).send('Hello, this is awesome x login page');
});

routers.post('/login', login);
routers.post('/logout', logout);

// methods below should be accessed with api-key
routers.use((req, res, next) => {
  const apiKey = req.get('wee-key');
  if (utils.isEmpty(apiKey)) return res.status(401).json();
  redis.getAsync(apiKey)
  .then(val => {
    console.log('the api key is ' + apiKey + ' for ' + val.name + ' '  + val.role);   
    res.status(200).json(val);
  })
  .catch(_ => {
      res.status(500).json();
  });
});

export default routers;
