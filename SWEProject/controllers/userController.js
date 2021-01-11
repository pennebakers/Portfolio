//'importing' the user model to be used throughout this
const User = require('../models/User');

/*
  Promise that will return all the users on the database
*/
exports.getAllUsers = (req, res) => {
  User.find({})
    .exec()
    .then((users) => {
      res.render('users', {
        allUsers: users
      });
    })
    .catch((error) => {
      console.log(error.message);
      return [];
    })
    .then(() => {
      console.log('promise complete');
    });
};

/*
  function for getting the GPA after they input the letter grade and POST it.
*/
function getGPA(req) {
  var name = req.body.name;
  var one = req.body.csc141;
  //console.log('one = ' + one);
  var two = req.body.csc142;
  var three = req.body.csc240;
  var four = req.body.csc241;
  var t1 = /^[a-dfA-DF]{1,1}[\-\+]{0,1}$/.test(one);
  var t2 = /^[a-dfA-DF]{1,1}[\-\+]{0,1}$/.test(two);
  var t3 = /^[a-dfA-DF]{1,1}[\-\+]{0,1}$/.test(three);
  var t4 = /^[a-dfA-DF]{1,1}[\-\+]{0,1}$/.test(four);
  var t5 = /^[a-zA-Z]{0,99}[\s]{0,1}[a-zA-Z]{0,99}$/.test(name);

  var realgpa;
  var grades = {
    'A': 4.0,
    'A+': 4.0,
    'A-': 3.67,
    'B+': 3.33,
    'B': 3.0,
    'B-': 2.67,
    'C+': 2.33,
    'C': 2.0,
    'C-': 1.67,
    'D+': 1.33,
    'D': 1.00,
    'D-': 0.67,
    'F': 0,
    'F-': 0,
    'F+': 0
  };


  if (t1 == true && t2 == true && t3 == true && t4 == true && t5 == true) {
    thegpa = parseFloat(grades[(req.body.csc141).toUpperCase()]);
    //console.log('grades[A] = ' + grades[test.toUpperCase()]);
    //console.log('grades[req.body.csc141] = ' + grades[(req.body.csc141).toUpperCase()])
    thegpa = parseFloat(thegpa + grades[(req.body.csc142).toUpperCase()]);
    thegpa = parseFloat(thegpa + grades[(req.body.csc240).toUpperCase()]);
    thegpa = parseFloat(thegpa + grades[(req.body.csc241).toUpperCase()]);
    thegpa = parseFloat(thegpa / 4);
    //console.log('realgpa = ' + thegpa.toString().match(/^-?\d+(?:\.\d{0,1})?/)[0]);
    realgpa = thegpa.toString().match(/^-?\d+(?:\.\d{0,1})?/)[0];
    realgpa = parseFloat(realgpa).toFixed(1);
  } else {
    realgpa = "x"
    console.log('bad input')
  }
  return realgpa
}

/*
    getUserPage function to res/render with the 'newUsers' ejs page
*/
exports.getUserPage = (req, res) => {
  res.render('newUsers')
};

/*
  Creating the function name 'saveUser' that will take the request info
  that is sent to the server and save it into the Schema of the User. It will
  also fetch the GPA by calling the GPA function. It will save all of this to the variable 'newUser'.

  It will then go through an IF statement and if the gpa is greater than or equal to 2.5 it will save 'newUser'
  to the mongoDB database.

  .THEN render the 'thanks' ejs file while passing the users gpa and name.

  .CATCH any error and res by sending the error

  else if statement if the gpa is greater than 0 but less than 2.5 will render the 'nexttime' ejs with the newUser gpa
  and the newUser name

  else statement to render the 'tryagain' ejs page
*/
exports.saveUser = (req, res) => {
  let newUser = new User({
    name: req.body.name,
    csc141: req.body.csc141,
    csc142: req.body.csc142,
    csc240: req.body.csc240,
    csc241: req.body.csc241,
    gpa: getGPA(req)
  });
  if (newUser.gpa >= 2.5) {
    newUser.save()
      .then((result) => {
        res.render('thanks', {
          allUsers: result,
          gpa: newUser.gpa,
          name: newUser.name
        });
      })
      .catch(error => {
        res.send(error);
      });
  } else if (newUser.gpa >= 0) {
    res.render('nexttime', {
      gpa: newUser.gpa,
      name: newUser.name
    });
  } else {
    //console.log('got to else')
    res.render('tryagain');
  }
};