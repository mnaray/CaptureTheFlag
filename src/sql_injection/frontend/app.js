// Diser Code wurde mit der HILFE von folgendem Link geschrieben:
// https://blog.logrocket.com/building-simple-login-form-node-js/

const express = require("express");
const mysql = require("mysql");

const app = express();

const db = mysql.createConnection({
    host: "usersdb",
    user: "root",
    database: "profiles",
});

db.connect((error) => {
    // error handling
    error ? console.error(error) : console.log("Connected to DB!");
});
