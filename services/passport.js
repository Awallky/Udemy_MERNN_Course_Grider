const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('../config/keys')

// Enable app authentication with Google Strategy,
// has an internal stategy named 'google'
passport.use(
    new GoogleStrategy({
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        },
        (accessToken, refreshToken, profile, done) => {
            console.log("accessToken:", accessToken, "refreshToken:", refreshToken, "profile:", profile)
        }
    )
)