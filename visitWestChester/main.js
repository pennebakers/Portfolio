"use strict";


/*
  Defining the port for localhost:3000
  Were also requiring the dependencies of http and httpStatus.
  Were requiring (importing) router, contentTypes and utils.

  We will be storing all the things above in the variable 'port'
*/
const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  router = require("./router"),
  contentTypes = require("./contentTypes"),
  utils = require("./utils");


/*
    ROUTES

    Basic Node.js routing system

    router.get = retrieving information from the website (server)
      -the first parameter is what we want to display in the url, essentially.
    router.post = sending inforamtion to the website (server)

    res.writeHead = http status codes and the content type that we are gettiing
    utils.getFile = getting the file that we want to be displayed on the page.
*/
router.get("/", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile("views/index.html", res);
});

router.get("/contact", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile("views/contact.html", res);
});

router.get("/about", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile("views/about.html", res);
});

router.get("/projects", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile("views/projects.html", res);
});

router.get("/pfp.jpg", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.jpg);
  utils.getFile("public/images/pfp.jpg", res);
});


router.get("/portfolio.css", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.css);
  utils.getFile("public/css/portfolio.css", res);
});

router.get("/bootstrap.css", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.css);
  utils.getFile("public/css/bootstrap.css", res);
});

router.get("/confetti_cuisine.js", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.js);
  utils.getFile("public/js/confetti_cuisine.js", res);
});


//Creating the server and displaying the port were listening to in the console.
http.createServer(router.handle).listen(port);
console.log(`The server is listening on port number: ${port}`);
