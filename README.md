# auth-service

### prerequisite
* install [nodejs](http://nodejs.org)v6.0 and npm

### install [gulp](http://gulpjs.com/) globally
`npm install gulp-cli --global`

### install dependencies
`npm install`

### run the mock service
`gulp mock`, the service is running at 10301

### run the app
before run the app, you should run `gulp mock`.`gulp start`

### compile the codes
`gulp compile`

### use docker to run a standalone app
`gulp dist` then `./infrastructure/run app`
