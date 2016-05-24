'use strict';

import express from 'express';
import routers from './routers';

const app = express();

app.use('/', routers);

app.listen(3000, function(){
    console.log('Example app listening on port 3000!');
});
