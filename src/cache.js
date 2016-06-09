'use strict';

import uuid from 'node-uuid';
import redis from './redis';
import utils from './utils';

const expireTime = 24*60*60; // 24 hours

const cache = {
  set: value => {
    const key = uuid.v4();
    return new Promise((resolve, reject) => {
      redis.hmsetAsync(key, value)
        .then(reply => {
          if (reply !== 'OK') return reject();
          console.log('after redis saving', reply);
          redis.expire(key, expireTime);
          resolve(key);
        })
      .catch(reject);
    });
  },
  get: key => {
     return new Promise((resolve, reject) => {
        redis.hgetallAsync(key)
        .then(val => {
            if (utils.isEmpty(val)) return reject();
            console.log('the cache key is ' + key, val);
            resolve(val);
        })
        .catch(reject);
     });
  },
  expire: key => {
      redis.expire(key, 1);
  }
};

export default cache;
