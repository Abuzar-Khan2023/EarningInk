const express = require("express");
const mysql = require("mysql");

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: ''
})

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h2>")
});

app.listen(5000, () => {
    console.log("Server started on Port 5003");
})