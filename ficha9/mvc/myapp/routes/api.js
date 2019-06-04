const express = require('express');
var router= express.Router();

const app = express();

const fs = require('fs');
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
// var mysql = require('mysql')
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'aula9'
// });

var author_controller=require("../controllers/personController.js");

router.get('/persons/:id',author_controller.author_detail);

router.get('/persons',author_controller.author_detail);

module.exports=router;