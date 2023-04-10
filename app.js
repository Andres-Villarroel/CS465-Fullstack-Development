require('dotenv').config(); //written during module 7: 

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const hbs = require('hbs');
const passport = require('passport');

require('./app_api/database/db'); //module 7: possible point of error

require('./app_api/config/passport'); //module 7
//require('./app_api/models/db'); //effectively makes the application connect to the database when starting up
require("./app_api/database/db"); //effectively makes the application connect to the database when starting up

var indexRouter = require('./app_server/routes/index');
var usersRouter = require('./app_server/routes/users');
var travelRouter = require('./app_server/routes/travel');
const apiRouter = require('./app_api/routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname,'app_server', 'views'));
hbs.registerPartials(path.join(__dirname, 'app_server', 'views/partials'))
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize()); //module 7

//allow CORS
app.use('/api', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-Width, Content-Type, Accept, Authorization'); //module 7: edited to append ', Authorization'
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/travel', travelRouter)
app.use('/api', apiRouter);

//catch unauthorized error nad create 401
app.use(function(req, res, next) {
    if(err.name == 'UnauthorizedError'){
      res.status(401)
      .json({"message": err.name + ": " + err.message});
    }
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
