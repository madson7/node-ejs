const express           = require('express');
const bodyParser        = require('body-parser');
const expressLayouts    = require('express-ejs-layouts');
const flash             = require('connect-flash');
const session           = require('express-session');
const passport          = require('passport');
const morgan            = require('morgan');

const app = express();
require('./database');
require('./passport/local-auth');
require('./passport/local-authAdmin');

app.set('port', process.env.PORT || 3000);

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(bodyParser.urlencoded());

app.use(express.static(__dirname + '/public'));

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

app.use(session({
  secret: 'mysecretsession',
  resave: false,
  saveUninitialized: false
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
  app.locals.signinMessage = req.flash('signinMessage');
  app.locals.signupMessage = req.flash('signupMessage');
  app.locals.user = req.user;
  console.log(app.locals)
  next();
});

app.use('/', require('./routes/index'));
app.use('/jacare', require('./routes/admin'));

app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
  });