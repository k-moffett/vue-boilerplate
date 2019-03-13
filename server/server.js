const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080
const bodyParser = require('body-parser');
const path = require('path');
const history = require('connect-history-api-fallback')
const staticFileMiddleware = express.static(path.join(__dirname, 'build'));
require('./routes.js')(app)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true,
  verbose: true,
}));

app.use(staticFileMiddleware);
app.listen(PORT, console.log(`Server Up on ${PORT}!`));