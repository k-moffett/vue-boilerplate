const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const history = require('connect-history-api-fallback')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const staticFileMiddleware = express.static(path.join(__dirname, 'build'));
app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true,
  verbose: true,
  rewrites: [
    { from: /\/router_test/, to: '/router_test'}
  ]
}));

require('./routes.js')(app)
app.use(staticFileMiddleware);
app.listen(8080, console.log('Server Up on 8080!'));
