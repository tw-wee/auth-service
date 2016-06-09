'use strict';

import request from 'superagent';
import redis from './redis';
import uuid from 'node-uuid';
import cache from './cache';

const useServiceIp = 'http://localhost:10301';
const expireTime = 24*60*60; // 24 hours 

const login = (req, res, next) => {
  //TODO if authenticated, then do nothing, maybe return some code
  request.post(useServiceIp + '/users')
    .end((err, response) => {
      console.log('response', response.body, err);
      if (err) res.status(500).json(err);
      cache.set({
        name: response.body.name,
        role: response.body.role 
      })
      .then(key => {
          res.status(200).json({'wee-key': key});
      })
      .catch(next);
    });
};

export default login;
