'use strict';

require('dotenv').config();
const AddisonEngine = require('@hpe/addison-engine');

const db = require('./db');

// const PlanController = require('./controller');
// const authenticateUser = require('./middleware');
// // Assuming `AddisonEngine` provides a method like `addRoute`
// AddisonEngine.addRoute('GET', '/', authenticateUser, PlanController.landingPage);


// Start Addison engine server
AddisonEngine.startServer();
