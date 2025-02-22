const express = require("express");
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const webRoute = require("./routes/web");
const conection = require("./config/database");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME;

//config
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
//Config template Engine
configViewEngine(app);
app.use("/", webRoute);
conection.query("select * from Users", function (err, result, fields) {
  console.log(">>>", result);
});
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
