const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'exercicio'
});



// connection.connect(function (err) {
//     if (err) throw err;
//     connection.query('select * from persons', function(err, result, fields){
//         if(err) throw err;
//         console.log(result);
//     });
// })
// connection.connect(function (err) {
//     if (err) throw err;
//     var sql = "Insert into persons (id, firstname, lastname, profession, age) values (null, 'pedro', 'asdsad', 'nada', '12')";
//     connection.query(sql , function(err, result){
//         if(err) throw err;
//         console.log("Inserido!");
//     });
// })
// connection.connect(function (err) {
//     if (err) throw err;
//     var sql = "delete from persons where id = 1";
//     connection.query(sql , function(err, result){
//         if(err) throw err;
//         console.log("Apagado!");
//     });
// })
// connection.connect(function (err) {
//     if (err) throw err;
//     var sql = "select * from persons where id = 2";
//     connection.query(sql , function(err, result){
//         if(err) throw err;
//         console.log(result);
//     });
// })
// connection.connect(function (err) {
//     if (err) throw err;
//     var sql = "select * from persons where age >= 80 and profession ='professor'";
//     connection.query(sql , function(err, result){
//         if(err) throw err;
//         console.log(result);
//     });
// })
connection.connect();

app.get('/persons', function (request, response) {
    connection.query('select * from persons', function (err, result, fields) {
        if (err) throw err;
        response.send(result)
    })
})
app.post('/persons', function (request, response) {
    var query = 'insert into persons set ?';
    var values = request.body;
    connection.query(query, values, function (err, result, fields) {
        if (err) {
            console.log("error ", err);
            response.send(err);
        } else {
            console.log(result.insertId);
            response.send("" + result.insertId);
        }
    });

})
app.delete('/persons', function (request, response) {
    var values = request.body;
    connection.query('delete from persons where ?', values, function (err, result, fields) {
        if (err) throw err;
        response.send("Apagado!")
    })
})
app.get('/persons/:id', function (request, response) {
    var id = request.params.id;
    connection.query('select * from persons where id=?', [id], function (err, result, fields) {
        if (err) throw err;
        response.send(result)
    })
})
app.get('/persons/:id/:profession', function (request, response) {
    var id = request.params.id;
    var profession = request.params.profession;
    connection.query('select * from persons where id=? and profession=?', [id, profession], function (err, result, fields) {
        if (err) throw err;
        response.send(result)
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))