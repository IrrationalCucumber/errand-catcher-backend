const express = require("express");
const serverless = require("serverless-http");
const UserRoutes = require("../Route/UserRoutes");
const app = express();

app.use("/.netlify/functions/", UserRoutes);

module.exports.handler = serverless(app);
