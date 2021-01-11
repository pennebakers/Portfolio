"use strict";

exports.sendReqParam = (req, res) => {
  let veg = req.params.vegetable;
  res.send(`This is the page for ${veg}`);
};

exports.home = (req, res) => {
  res.render("index");
};

exports.dashboard = (req,res) => {
  res.send("dashboard");
};
