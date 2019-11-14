const express = require('express');

const apiRouter = require('./api-router');
const configureMiddleWare = require('./middleware-config');

// const ensureAuth = require('../middleware/ensureAuth');

const server = express();
configureMiddleWare(server);


server.use('/api', apiRouter);
// server.use('/restricted', ensureAuth)

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;
