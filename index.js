const express = require('express');
const app = express();
require('./models/dbConfig')
const postsRoutes = require('./controller/postsController')

app.use('/', postsRoutes);

app.listen(5500, () => console.log('Server started: 5500'));
