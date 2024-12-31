const express = require("express");
const serverless = require("serverless-http");
const TransactionRoutes = require("../Route/TransactionRoute");
const app = express();

app.use("/.netlify/functions/trans-routes", TransactionRoutes);

module.exports.handler = serverless(app);
