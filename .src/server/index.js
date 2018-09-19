const express = require('express');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, './../../build');

const logger = (req, res, next) => { // first middleware function
  console.log(`${req.method} request for ${req.url}`);
  next();
};

const app = express().use(logger);

app.use(express.static(BUILD_DIR));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
});

app.get('/ping', (req, res) => res.send('pong'));

app.get('/', (req, res) => res.sendFile(path.resolve(BUILD_DIR, 'index.html')));

app.listen(process.env.PORT || 3001, () => console.log('Express app is running at `http://localhost:3001`'));
