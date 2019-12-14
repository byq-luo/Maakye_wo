// jshint esversion: 6
/**Author: Sedem Quame Amekpewu
 * Date: Saturday, 14th December, 2019
 * Project Title: Maakye wo
 * Descripition: Maakye wo, is a survelliance system for monitoring road traffic adnd siphoning, relevant
 *               data for analytics purposes.
 **/

// ===================================== requiring modules ===================================== //
// node modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


// custom modules
const db = require('./config/db.config');


// ================================== express app configurations ==================================== //
//creating app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// serving static files in express
app.use(express.static('public'));


// ====================================== db configurations ========================================= //
mongoose.connect(db.url, { useUnifiedTopology: true, useNewUrlParser: true });


// ========================================== app routes ============================================ //
app.get('/', (req, res) => {
    // useful for postman testing
    res.json({ "message": "Welcome to maakye wo application." });
});

//====================================== requiring list routes ========================================//
require('./routes/roads.routes')(app);
require('./routes/users.routes')(app);
require('./routes/videos.routes')(app);
require('./routes/vehicles.routers')(app);


// ====================================== app listening port ======================================== //
let port = 8080;
app.listen(port, function() {
    console.log(`app started on port: ${port}`);
});