'use strict';

import express from 'express';
import login from './login';
import logout from './logout';

const routers = express.Router();

routers.post('/login', login);
routers.post('/logout', logout);


export default routers;
