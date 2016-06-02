'use strict';

import redis from './redis';
import apikey from './apikey';

const logout = (req, res, next) => {
  if (!apikey.existsIn(req)) return res.status(401).json();

  const key = apikey.getKeyFrom(req);
  console.log('logging out', key);
  redis.expire(key, 1);
  res.status(200).json();
};

export default logout;
