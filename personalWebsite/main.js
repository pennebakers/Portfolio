const path = require("path");

//extra security
const helmet = require("helmet");

//'importing' compression to be used with app
const compression = require('compression');

const http = require('http');

const express = require("express"),
  app = express(),
  homeController = require("./controllers/homeController"),
  projectsController = require("./controllers/projectsController"),
  pricingController = require("./controllers/pricingController"),
  aboutController = require("./controllers/aboutController"),
  contactController = require("./controllers/contactController");


//setting sockets to infinity
http.globalAgent.maxSockets = Infinity;


app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");


app.use(helmet());
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());

//pointing to the public folder to be served as static
app.use(express.static("public"));
//compression middleware
app.use(compression());

//bringing in for mdbootstrap so the paths to css and js can be seen
app.use("/css", express.static(path.join(__dirname, "node_modules/mdbootstrap-pro/css")));
app.use("/js", express.static(path.join(__dirname, "node_modules/mdbootstrap-pro/js")));

app.use((req, res, next) => {
  console.log(`request made to: ${req.url}`);
  next();
});

//routes
app.get("/", homeController.home);
app.get("/Projects", projectsController.home);
app.get("/Pricing", pricingController.home);
app.get("/About", aboutController.home);
app.get("/Contact", contactController.home);


//console log to show server is running and on what port
app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
