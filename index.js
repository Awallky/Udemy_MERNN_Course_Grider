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

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 4000;
app.listen(PORT);
