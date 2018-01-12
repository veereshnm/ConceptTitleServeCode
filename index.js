// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
// Routing
//  Serve frontend view
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/'));
app.use('/popper', express.static(__dirname + '/node_modules/popper.js/dist/'));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/css/'));
app.use('/bootstrapjs', express.static(__dirname + '/node_modules/bootstrap/dist/js/'));
app.use('/angular', express.static(__dirname + '/node_modules/angular/'));
app.use('/angular-route', express.static(__dirname + '/node_modules/angular-route/'));
app.use(express.static('src'));

// Configure port
var port = process.env.PORT || 4220;
// Listen to port
app.listen(port);
console.log(`Server is running on port: ${port}`);