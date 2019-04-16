const express = require('express');
const app = express();
const PORT = process.env.PORT || 8081
const bodyParser = require('body-parser');
const path = require('path');
const history = require('connect-history-api-fallback')
const staticFileMiddleware = express.static(path.join(__dirname, 'build'));
const sequelize = require('./db/models')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./routes/router')(app)

app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true,
  verbose: true,
}));
app.use(staticFileMiddleware);

// You will need to ensure that your .env variables in ./db/models/index.js are correct or the server will not connect.
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server up on port ${PORT}!`)
  });
});

// Use this if you don't want to use the DB.
// app.listen(PORT, () => {
//   console.log(`Server up on port ${PORT}!`)
// });