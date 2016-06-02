'use strict';

import redis from 'redis';
import bluebird from 'bluebird';

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const url = 'redis://192.168.99.100:10379';

const client = redis.createClient(url);

client.on('error', err => {
    console.log('Error' + err);
});

export default client;
