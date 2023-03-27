// Diser Code wurde mit der HILFE von folgendem Link geschrieben:
// https://blog.logrocket.com/building-simple-login-form-node-js/

// imports
const express = require("express");
const mysql = require("mysql");
const path = require("path");

// express & path config
const app = express();

app.set("view engine", "hbs");

const publicDir = path.join(__dirname, "./public");

app.use(express.static(publicDir));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// mysql connection
const db = mysql.createConnection({
    host: "usersdb",
    user: "root",
    database: "profiles",
});

db.connect((error) => {
    // error handling
    if (error) throw error;
    console.log("Connected to DB! 🔌");
});

// root path request handling
app.get("/", (req, res) => {
    res.render("index");
});

//checking login credentials
app.post("/", (req, res) => {
    const { username, password } = req.body;

    // injectable query
    const queryString =
        "SELECT username, password FROM users WHERE username = '" +
        username +
        "' HAVING password = '" +
        password +
        "';";

    db.query(queryString, async (error, result) => {
        if (error) throw error;

        console.log("username: " + username, "password: " + password);
        console.log(result);

        // no such user
        if (result.length <= 0) {
            return res.render("index", {
                message: "Nutzername oder Passwort falsch!",
            });
        }

        // check if user is admin
        if (result[0].username != "admin") {
            return res.render("index", {
                message: "Du sollst dich als admin anmelden!",
            });
        }

        // check if password was used
        if (password == "fjkafnj") {
            return res.render("index", {
                message: "Versuche SQL-Injection anzuwenden!",
            });
        }

        // correct sql injection
        return res.render("flag");
    });
});

// listening port config
app.listen(80, () => {
    console.log("Server is listening on port 80! ⚡");
});
