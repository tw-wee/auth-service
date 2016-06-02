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
  console.log('api key', apiKey, utils.isEmpty(apiKey));
  if (utils.isEmpty(apiKey)) return res.status(401).json();

  redis.hgetallAsync(apiKey)
    .then(val => {
      if (utils.isEmpty(val)) return res.status(401).json();
      console.log('the api key is ' + apiKey, val);   
      res.status(200).json(val);
    })
  .catch(err => {
    console.log('getting redis error', err);
    res.status(500).json();
  });
});

routers.use((req, res) => {
  console.log('server error');
  return res.status(500).json();
});

export default routers;
