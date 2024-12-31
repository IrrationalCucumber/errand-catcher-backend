const express = require("express");
const serverless = require("serverless-http");
const ErrandRoutes = require("../Route/ErrandRoutes");
const app = express();

app.use(express.json()); // Ensure JSON parsing middleware is added
app.use("/.netlify/functions/errand-routes/", ErrandRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

module.exports.handler = serverless(app);
