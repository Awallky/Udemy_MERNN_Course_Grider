const passport = require('passport')
module.exports = (app) => {
    // Can ask for specific pieces of a user's
    app.get(
        '/auth/google',
        passport.authenticate('google', {
        scope: ['profile', 'email']
        })
    )

    app.get('/auth/google/callback', passport.authenticate('google'))
}