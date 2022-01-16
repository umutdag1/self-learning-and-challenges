const express = require('express');
const helmet = require('helmet');
const config = require('./config/index');
const {routes} = require('./api-routes');

config();

const app = express();
app.use(express.json());
app.use(helmet());

//Constants
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server is started on port : ${PORT}`));
