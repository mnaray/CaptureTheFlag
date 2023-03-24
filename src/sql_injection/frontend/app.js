var mysql = require("mysql");

document.getElementById("myform").addEventListener("click", myFunction);

// Dieser Code und Zeile 1 ist von https://www.w3schools.com/nodejs/nodejs_mysql_select.asp
function myFunction() {
    var con = mysql.createConnection({
        host: "localhost",
        user: "yourusername",
        //password: "yourpassword",
        database: "profiles",
    });

    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT * FROM profiles", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        });
    });
}

// This might help:
// https://blog.logrocket.com/building-simple-login-form-node-js/
