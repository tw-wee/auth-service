# auth-service

[![Build Status](https://travis-ci.org/tw-wee/auth-service.svg?branch=master)](https://travis-ci.org/tw-wee/auth-service)

### prerequisite
* install [nodejs](http://nodejs.org)v6.0 and npm

### install dependencies
`npm install`

### run the mock service
`npm mock`, the service is running at 10301

### run the app
* `npm mock` to start the mock service
* `cd infrastructure` and `./run redis` to start redis
* `npm start` to start the app

### compile the codes
`npm run compile`

### use docker to run a standalone app
* `npm run build` 
* `cd infrastructure`
* `./run app`

### run test
`npm test`

### structure explaination
build \- folder to hold the compile codes for start application
dist  \- foler to hold the compile codes for docker to run
src   \- source folder
test  \- test folder

