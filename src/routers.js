'use strict';

import express from 'express';
import login from './login';
import logout from './logout';

const routers = express.Router();

routers.post('/login', login);
routers.post('/logout', logout);

// methods below should be accessed with api-key

export default routers;
