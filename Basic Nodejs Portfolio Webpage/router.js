"use strict";


const httpStatus = require("http-status-codes"),
  contentTypes = require("./contentTypes"),
  utils = require("./utils");


/*
    routes

    These are the routes that you are listening to in main.js, if you plan on
    using other HTTP req/res than just these two, then you may put them in here.
*/
const routes = {
  GET: {},
  POST: {}
};


//handling the routes. if there is an error, the error.html page shows up.
exports.handle = (req, res) => {
  try {
    routes[req.method][req.url](req, res);
  } catch (e) {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/error.html", res);
  }
};


/*
    These are the route methods that are used in main.js, again, if you plan
    on adding routes above, you need to make methods for them below.
*/
exports.get = (url, action) => {
  routes["GET"][url] = action;
};

exports.post = (url, action) => {
  routes["POST"][url] = action;
};
