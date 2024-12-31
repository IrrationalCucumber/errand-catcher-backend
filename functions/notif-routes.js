const express = require("express");
const serverless = require("serverless-http");
const NotificationRoutes = require("./routes/notificationRoutes");
const app = express();

app.use("/.netlify/functions/notif-routes", NotificationRoutes);

module.exports.handler = serverless(app);