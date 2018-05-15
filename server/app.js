var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//redis
var redis = require("redis");
var redisClient = redis.createClient(6379, 'redis', { no_ready_check: true });
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
//passport
var passport = require('passport');
var twitterStrategy = require('passport-twitter').Strategy;

const authentication = require('./routes/authentication');
const authorization = require('./routes/authorization');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var twitter = require('./routes/api/twitter');
const userInfo = require('./routes/api/userInfo');
const userRegist = require('./routes/api/userRegist');
const login = require('./routes/api/login');
const logout = require('./routes/api/logout');
const contests = require('./routes/api/contests');

//Twitter
passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (obj, done) {
  done(null, obj);
})

passport.use(new twitterStrategy({
  consumerKey: process.env.TWITTER_CONSUMER_KEY,
  consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
  callbackURL: "/api/twitter/callback/" //Twitterログイン後、遷移するURL
},
  function (token, tokenSecret, profile, done) {
    // console.log(token, tokenSecret, profile);

    profile.twitter_token = token;
    profile.twitter_token_secret = tokenSecret;

    process.nextTick(function () {
      return done(null, profile);
    });
  }
));
// twitter end

var app = express();

const redis_option = {
  client: redisClient
}
// Session
app.use(session({
  secret: process.env.SECRET_KEY,
  store: new RedisStore(redis_option),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 60 * 60 * 1000
  }
}));
app.use(passport.initialize());
app.use(passport.session());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(authentication);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/v1/twitter', twitter);
app.use('/api/v1/userInfo', authorization, userInfo);
app.use('/api/v1/userRegist', userRegist);
app.use('/api/v1/login', login);
app.use('/api/v1/logout', logout);
app.use('/api/v1/contests', contests);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
