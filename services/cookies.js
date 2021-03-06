const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('../config/keys');

// Set up middleware for cookies and OAuth APIs
module.exports = app => {
    app.use(
        cookieSession({
            maxAge: 30 * 24 * 60 * 60 * 1000,
            keys: [keys.cookieKey]
        })
    );
    app.use(passport.initialize());
    app.use(passport.session());
};
