'use strict';

import redis from './redis';
import apikey from './apikey';
import cache from './cache';

const logout = (req, res, next) => {
  if (!apikey.existsIn(req)) return res.status(401).json();

  const key = apikey.getKeyFrom(req);
  console.log('logging out', key);
  cache.expire(key);
  res.status(200).json();
};

export default logout;
