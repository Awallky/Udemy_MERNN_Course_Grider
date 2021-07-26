// keys.js - figure out what set of credentials to rerturn
if (process.env.NODE_ENV == 'production') {
    // we are in production - return the prod set of keys
    module.exports = require('./prod')
} else {
    // we are in development - return the dev keys
    module.exports = require('./dev')
}
// prod
//mongodb+srv://Cluster0_admin:ylVZSuwqN082ZTnY@cluster0.6opfm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// client_ID 83721774550-fc25qdvlqkk9i5suesoprt6j592qinj6.apps.googleusercontent.com
// client secret 1h3-1-YNnqya0h82Ndmo836b