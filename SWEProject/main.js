//'Imports'
const path = require("path");

const helmet = require("helmet");

const compression = require('compression');

const http = require('http');

const cors = require('cors');

const mongoose = require('mongoose');

const User = require("./models/User");

const layouts = require('express-ejs-layouts');

const express = require("express"),
  app = express(),
  errorController = require("./controllers/errorController"),
  homeController = require("./controllers/homeController"),
  userController = require("./controllers/userController");



//mongoose connection setup
mongoose.connect('mongodb://localhost:27017/',
    { useUnifiedTopology: true,
      useNewUrlParser: true});
    const db = mongoose.connection;

    db.once('open', () => {
      console.log('Successfully connected to MongoDB using Mongoose!');
      });


//Setting the Port to 3000
app.set("port", process.env.PORT || 3000);

//Setting The View Enging To EJS
app.set("view engine", "ejs");

//allowing Helmet() to be used
app.use(helmet());

/*
  Cross-Origin Resource Sharing,
  mechanism to allow or restrict requested resources on a 
  web server depend on where the HTTP request was initiated
*/
app.use(cors());

app.use(layouts);

app.use(
  express.urlencoded({
    extended: false
  })
);

//Middleware, parses incoming traffic
app.use(express.json());

app.use(express.static(__dirname + '/public'));

app.use(compression());

//bringing in for mdbootstrap so the paths to css and js can be seen
app.use("/css", express.static(path.join(__dirname, "node_modules/mdbootstrap-pro/css")));
app.use("/js", express.static(path.join(__dirname, "node_modules/mdbootstrap-pro/js")));


//Routes
app.get("/", homeController.home);
app.get("/users", userController.getAllUsers);
app.get("/newUsers", userController.getUserPage, userController.getAllUsers);
app.post("/newUsers", userController.saveUser);




//console log to show server is running and on what port
app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
