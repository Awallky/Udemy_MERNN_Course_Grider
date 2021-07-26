const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport')
require('./models/User');
require('./services/passport');
const app = express();

mongoose.connect(keys.mongoURI, { 
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
}, (error) => {
    if (error) {
        console.log('Failure to connect to DB.');
    }
    else {
        console.log('Connected to DB.');
    }
});

// cookie lasts 30 days
// 30 days, 24 hours, 60 minutes, 60 seconds, 1000 milliseconds
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [ keys.cookieKey ]
    })
);
app.use(passport.initialize());
app.use(passport.session());
// set up routes for server
require('./routes/authRoutes')(app);

// passed in from Heroku, or use default value of 4000
const DEFAULT_PORT = 4000;
const PORT_NO = process.env.PORT || DEFAULT_PORT;
app.listen(PORT_NO);
