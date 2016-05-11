'use strict';

import request from 'superagent';

const useServiceIp = 'http://localhost:10301';

const login = (req, res, next) => {
  //TODO if authenticated, then do nothing, maybe return some code
  request.post(useServiceIp + '/users')
    .end((err, response) => {
      console.log('response', response.body, err);
      if (err) res.status(500).json(err);
      res.status(200).json(response.body);
    });
};

export default login;
