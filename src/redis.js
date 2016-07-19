'use strict';

import redis from 'redis';
import bluebird from 'bluebird';

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const url = process.env.NODE_ENV ? 'redis://172.16.238.14:6379' : 'redis://localhost:10379';

const client = redis.createClient(url);

client.on('error', err => {
    console.log('Error' + err);
});

export default client;
