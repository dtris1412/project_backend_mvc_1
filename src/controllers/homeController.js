const { render } = require("ejs");
const conection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../service/CRUDservices");
const { use } = require("../routes/web");
const getHomepage = async (req, res) => {
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
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
const getCreatePage = (req, res) => {
  res.render("create.ejs");
};
const getUpdatePage = async (req, res) => {
  const userId = req.params.userId;
  let user = await getUserById(userId);
  res.render("edit.ejs", { userEdit: user });
};

const postUpdateUsers = async (req, res) => {
  let email = req.body.email;
  let name = req.body.myName;
  let city = req.body.city;
  let userId = req.body.userId;

  console.log(
    "email = ",
    email,
    "name = ",
    name,
    "city = ",
    city,
    "userId: ",
    userId
  );
  await updateUserById(email, name, city, userId);
  res.redirect("/");
};
const postDeleteUsers = async (req, res) => {
  const userId = req.params.userId;
  let user = await getUserById(userId);
  res.render("delete.ejs", { userEdit: user });
};
const postHandleRemoveUsers = async (req, res) => {
  const id = req.body.userId;
  console.log(id);
  await deleteUserById(id);
  res.redirect("/");
};
module.exports = {
  getHomepage,
  getABC,
  postCreateUsers,
  getCreatePage,
  getUpdatePage,
  postUpdateUsers,
  postDeleteUsers,
  postHandleRemoveUsers,
};
