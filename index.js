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
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); 
// parse application/json
app.use(express.json());

require('./services/cookies')(app);
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT);
