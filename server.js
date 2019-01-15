const express = require('express');
const app = express();
const port = 3000;
const apiRoutes = require('./app/routing/apiRoutes');
const htmlRoutes = require('./app/routing/htmlRoutes');

app.use('/api/friends', apiRoutes);
app.use('/', htmlRoutes);

app.listen(port, () => console.log('App started listening on port ' + port));