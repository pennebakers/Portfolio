"use strict";

exports.home = (req, res) => {
  //caches the page for the max-age 
  res.setHeader('Cache-Control', 'public, max-age=6400');
  res.render("index");
};
