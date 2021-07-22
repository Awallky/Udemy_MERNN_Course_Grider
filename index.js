const express = require('express')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('./config/keys')
const app = express()

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

// Can ask for specific pieces of a user's
app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
)
  
app.get('/auth/google/callback', passport.authenticate('google'))

// passed in from Heroku, or use default value of 4000
const PORT_NO = process.env.PORT || 4000
app.listen(PORT_NO)
