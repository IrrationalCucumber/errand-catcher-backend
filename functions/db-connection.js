// filepath: /c:/Users/adrean paul sorono/Desktop/ErrandCatcher-backend/errand-catcher-backend/functions/db-connection.js
const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("Failed to connect to MySQL:", err);
  } else {
    console.log("Connected to MySQL database!");
  }
});

exports.handler = async (event, context) => {
  return new Promise((resolve, reject) => {
    db.query("SELECT 1 + 1 AS solution", (err, results) => {
      if (err) {
        reject({
          statusCode: 500,
          body: JSON.stringify({ error: "Database connection failed" }),
        });
      } else {
        resolve({
          statusCode: 200,
          body: JSON.stringify({ solution: results[0].solution }),
        });
      }
    });
  });
};
