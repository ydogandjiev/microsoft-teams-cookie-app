// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.

var express = require('express');
var cookieParser = require('cookie-parser');
var serveStatic = require('serve-static');

var app = express();
app.use(cookieParser());
app.use(serveStatic(__dirname + '/public'));

app.get('/set', (req, res) => {
  res.cookie('3pcookie', 'value', { sameSite: 'none', secure: true });
  res.cookie('3pcookie-legacy', 'value', { secure: true });
  res.cookie('3pcookie-insecure', 'value', { sameSite: 'none' });
  res.cookie('3pcookie-insecure-legacy', 'value');
  res.end();
});

var port = process.env.port || 3000;
app.listen(port, function () {
  console.log('Listening on http://localhost:' + port);
});
