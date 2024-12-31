const express = require("express");
const serverless = require("serverless-http");
const RatingRoutes = require("../Route/RatingRoutes");
const app = express();

app.use("/.netlify/functions/rating-routes/", RatingRoutes);

module.exports.handler = serverless(app);
