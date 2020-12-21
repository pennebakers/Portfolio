const path = require("path");

const helmet = require("helmet");

const express = require("express"),
  app = express(),
  homeController = require("./controllers/homeController");

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");


app.use(helmet());
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());
app.use(express.static("public"));
//app.use(express.static("node_modules/mdbootstrap-pro/css"));
app.use("/css", express.static(path.join(__dirname, "node_modules/mdbootstrap-pro/css")));
app.use("/js", express.static(path.join(__dirname, "node_modules/mdbootstrap-pro/js")));


app.use((req, res, next) => {
  console.log(`request made to: ${req.url}`);
  next();
});

//routes
app.get("/items/:vegetable", homeController.sendReqParam);

app.get("/", homeController.home);

app.get("/dashboard", homeController.dashboard);

//console log to show server is running and on what port
app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
