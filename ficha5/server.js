const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

function readFile(fileName) {
    var file = fs.readFileSync(fileName);
    return file;
}

app.get('/users', function (req, res) {
    var x = readFile('./persons.json');
    res.send(x);
});
app.post('/users', function (req, res) {
    var x = readFile('./persons.json');
    var jsonData = JSON.parse(x);
    var keys = Object.keys(jsonData);
    var keysLength = keys.length;
    keysLength++;
    jsonData["person" + keysLength] = req.body;
    var str = JSON.stringify(jsonData);


    fs.writeFileSync('./persons.json', str, function (err) {
        if (err) throw err;
        console.log('Replaced!');
    });
    var x = readFile('./persons.json');
    res.send(JSON.parse(x));
});

app.delete('/users/:id', function (req, res) {
    var x = readFile('./persons.json');
    var jsonData = JSON.parse(x);
    var id = req.params.id;
    delete jsonData["person" + id]
    var str = JSON.stringify(jsonData);
    fs.writeFileSync('./persons.json', str)
    res.send(x);

});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))