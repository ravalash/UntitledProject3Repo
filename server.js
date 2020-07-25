// Imports:
require("dotenv").config();
const express = require('express');
const session = require('express-session');
const passport = require('./config/passport');
const routes = require('./routes/index');
const cors = require('cors');


// Middleware:
const app = express();
const PORT = process.env.PORT || 8080;


// Requiring our models for syncing
const db = require("./models");


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Copy into sync() to force dropping database
// { force: true }
// Start the API server
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});
