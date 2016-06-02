'use strict';

import utils from './utils';

const KEY_NAME = 'wee-key';

const apikey = {
  existsIn: (request) => {
    return !utils.isEmpty(request.get(KEY_NAME));
  },
  getKeyFrom: (request) => {
    if (!apikey.existsIn(request)) throw new Error('key does not exist in request');
    return request.get(KEY_NAME);
  }
};

export default apikey;
