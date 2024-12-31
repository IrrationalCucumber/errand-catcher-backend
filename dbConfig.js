// const mysql = require("mysql");

// // Create a connection to FreeSQLDatabase
// const db = mysql.createConnection({
//   host: "sql12.freesqldatabase.com", // e.g., sqlX.freesqldatabase.com
//   user: "sql12749921", // e.g., freesqldb_user123
//   password: "jRItp4FAQg", // The database password
//   database: "sql12749921", // e.g., freesqldb_database123
//   port: 3306, // Default MySQL port
// });

// // Connect to the database
// db.connect((err) => {
//   if (err) {
//     console.error("Failed to connect to MySQL:", err);
//   } else {
//     console.log("Connected to FreeSQLDatabase!");
//   }
// });

// module.exports = db;

const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();
// Assume `user` is the object with user data

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

module.exports = connection;
