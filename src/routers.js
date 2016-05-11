'use strict';

import express from 'express';

const routers = express.Router();

routers.get('/login', (req, res) => {
   res.send('logining...'); 
});

export default routers;
