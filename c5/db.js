const mysql = require("mysql");

const conn = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "root",
    database : "emp"
});

conn.connect((error)=>{
    if (error) {
        console.log(error);
    }

});

module.exports = conn;
