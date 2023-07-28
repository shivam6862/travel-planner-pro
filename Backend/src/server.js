const express = require("express");
const routes = require("./routes");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.static(__dirname + "/uploads/"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", process.env.FRONTEND_URL || "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization,AuthToken"
  );
  next();
});

routes.forEach((route) => app[route.method](route.path, route.handler));

app.listen(process.env.PORT || 8080, () => {
  console.log("Server is running on port 8080");
});
