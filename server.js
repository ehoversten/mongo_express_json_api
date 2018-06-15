const express     = require('express');
const bodyParser  = require('body-parser');
const mongoose    = require('mongoose');
const path        = require('path');
const app         = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./config/mongoose.js');
require('./config/routes.js')(app);

app.listen(8000, () => {
  console.log('Listening on: ', 8000);
})
