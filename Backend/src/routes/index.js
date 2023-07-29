const helloWorldRoute = require("./helloWorldRoute");
const insertSignUpRoute = require("../routes/Auth/insertSignUpRoute");
const getSigninRoute = require("../routes/Auth/getSigninRoute");
const resetPasswordRoutes = require("../routes/Auth/resetPasswordRoutes");
const getNewPasswordRoutes = require("../routes/Auth/getNewPasswordRoutes");
const insertnewPasswordRoutes = require("../routes/Auth/insertnewPasswordRoutes");
const getUserRoutes = require("./getUserRoutes");

const routes = [
  helloWorldRoute,
  insertSignUpRoute,
  getSigninRoute,
  resetPasswordRoutes,
  getNewPasswordRoutes,
  insertnewPasswordRoutes,
  getUserRoutes,
];

module.exports = routes;
