const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(
  keys.mongoURI, 
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
 
// parse application/json
app.use(express.json());
// Set up middleware for cookies and OAuth APIs
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT);
