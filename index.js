'use strict';

import express from 'express';
import routers from './src/routers';

const app = express();

app.get('/', function(req, res){
  res.send('Hello, I am auth service. ');
});

app.use('/', routers);

app.listen(3000, function(){
    console.log('Example app listening on port 3000!');
});
