const express = require("express");
const serverless = require("serverless-http");
const ErrandRoutes = require("../Route/ErrandRoutes");
const app = express();

app.use("/.netlify/functions/errand-routes/", ErrandRoutes);

module.exports.handler = serverless(app);
