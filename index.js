const express = require('express');
const mongoose = require('mongoose');
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
require('./services/cookies')(app);
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT);
