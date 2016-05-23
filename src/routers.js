'use strict';

import express from 'express';
import login from './login';
import logout from './logout';
import utils from './utils';

const routers = express.Router();

routers.get('/login', (req, res) => {
    res.status(200).send('Hello, this is login page');
});

routers.post('/login', login);
routers.post('/logout', logout);

// methods below should be accessed with api-key
routers.use((req, res, next) => {
    if (utils.isEmpty(req.get('wee-key'))) return res.status(401).json();
});

export default routers;
