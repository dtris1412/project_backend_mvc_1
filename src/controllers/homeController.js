const conection = require("../config/database");
const getHomepage = (req, res) => {
  let user = [];
  conection.query("select * from Users", function (err, result, fields) {
    res.render("home.ejs");
    // user = result;
    // console.log("check result>>>", result);
    // console.log("check user>>>: ", user);
    // res.send(JSON.stringify(user));
  });
};
const postCreateUsers = (req, res) => {
  let email = req.body.email;
  let name = req.body.myName;
  let city = req.body.city;
  conection.query(
    `INSERT INTO Users(email, name, city) VALUES(?, ? , ?)`,
    [email, name, city],
    function (err, result) {
      console.log("check result>>>", result);
      res.send("create user successed");
    }
  );
};
const getABC = (req, res) => {
  res.render("sample.ejs");
};
module.exports = {
  getHomepage,
  getABC,
  postCreateUsers,
};
