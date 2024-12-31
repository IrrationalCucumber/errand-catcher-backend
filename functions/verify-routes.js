const express = require("express");
const serverless = require("serverless-http");
const VerifyRoutes = require("../Route/VerifyRoutes");
const app = express();

app.use("/.netlify/functions/verify-routes/", VerifyRoutes);

module.exports.handler = serverless(app);
