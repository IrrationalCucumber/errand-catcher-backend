const express = require("express");
const serverless = require("serverless-http");
const ApplicationRoutes = require("../Route/ApplicationRoutes");
const app = express();

app.use("/.netlify/functions/apply-routes/", ApplicationRoutes);

module.exports.handler = serverless(app);
