const express = require('express');
const path = require('path');
const config = require('./config/server');
const routes = require('./routes/index');
const app = express();
config();

//Constants
const PORT = process.env.PORT || 4111;

//Static Files
app.use('/assets', express.static(path.join(__dirname + '/public')));

//Settings
app.set('view engine', 'ejs');

//Routes
app.use('/', routes.homeRoutes);
app.use('/page', routes.pageRoutes);

//Server
app.listen(PORT, () => console.log(`Server is started on port : ${PORT}`));