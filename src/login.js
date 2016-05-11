'use strict';

const login = (req, res, next) => {
  //TODO if authenticated, then do nothing, maybe return some code
    console.log('I am login module');
    res.send('loging....');
};

export default login;
