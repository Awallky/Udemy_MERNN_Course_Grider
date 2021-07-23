const express = require('express')
require('./services/passport')
const app = express()
// set up routes for server
require('./routes/authRoutes')(app)

// passed in from Heroku, or use default value of 4000
const PORT_NO = process.env.PORT || 4000
app.listen(PORT_NO)
