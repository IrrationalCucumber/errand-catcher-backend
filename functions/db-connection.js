const mysql = require("mysql");
const dotenv = require("dotenv");
const serverless = require("serverless-http");
const express = require("express");

dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 3306,
  connectTimeout: 10000, // Increase timeout to 10 seconds
});

db.connect((err) => {
  if (err) {
    console.error("Failed to connect to MySQL:", err);
  } else {
    console.log("Connected to MySQL database!");
  }
});

const app = express();

app.get("/test-db-connection", (req, res) => {
  db.query("SELECT 1 + 1 AS solution", (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json({ error: "Database query failed" });
    }
    res.json({ solution: results[0].solution });
  });
});

module.exports.handler = serverless(app);
