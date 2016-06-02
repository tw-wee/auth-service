'use strict';

import redis from './redis';

const logout = (req, res, next) => {
    //TODO: if not login, return 401
    console.log('logging out');
    res.send('logging out');
};

export default logout;
