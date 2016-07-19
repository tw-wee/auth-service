'use strict';

import express from 'express';
import login from './login';
import logout from './logout';
import utils from './utils';
import apikey from './apikey';
import cache from './cache';

const routers = express.Router();

routers.get('*', (req, res) => {
  res.status(200).send('Hello World!');
});

routers.post('/login', login);
routers.post('/logout', logout);

// methods below should be accessed with api-key
routers.use((req, res, next) => {
  if (!apikey.existsIn(req)) return res.status(401).json();

  const apiKey = apikey.getKeyFrom(req);
  cache.get(apiKey)
  .then(obj => {
      if (utils.isEmpty(obj)) return res.status(401).json();
      console.log('the api key is ' + apikey, obj);
      res.status(200).json(obj);
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
