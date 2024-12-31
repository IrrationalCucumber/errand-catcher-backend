const express = require("express");
const serverless = require("serverless-http");
const ErrandRoutes = require("./Route/errandRoutes");
const app = express();

app.use("/.netlify/functions/", ErrandRoutes);

module.exports.handler = serverless(app);
