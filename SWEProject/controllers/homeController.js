"use strict";

//renders the homme page
exports.home = (req, res) => {
  //caches the page for the max-age
  res.setHeader('Cache-Control', 'public, max-age=6400');
  res.render('index');
};


/*
    Function that shows the users and there gpa to the users html page
*/
exports.showUsers = (req, res) => {
    res.render('users', {
        allUsers: users, title: "Users"
    });
};


/*
    adding the users to the information to the database
*/
exports.addUsers = (req, res) => {
    var newName = req.body.name;
    console.log("user " + newName);
    var new141 = req.body.csc141;
    console.log("141 " + new141)
    var new142 = req.body.csc142;
    console.log("142 " + new142)
    var new240 = req.body.csc240;
    console.log("240 " + new240)
    var new241 = req.body.csc241;
    console.log("241 " + new241)
    users.push({name: newName, csc141: new142, csc142: new141, csc240: new240, csc241: new241});
    allUsers = users;
    res.render('users', {
        allUsers: users
    });
};

/*
    gets the new user that inputted there name and grades
*/
exports.getNewUser = (req, res) => {
    res.render('newUsers');
};
