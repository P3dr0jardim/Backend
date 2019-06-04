const express = require('express')
const app = express()
var fs = require('fs');

var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port);
    fs.writeFileSync("log.txt", "");
});

function writeLog(req, res) {
    var log = req.path + ", " + req.method + ", " + new Date() + "\n";
    fs.appendFile("log.txt", log, function (err) {
        if (err) throw err;
        console.log("Saved!!");
    });
}

// app.get('/', function (req, res) {
//     writeLog(req, res);
//     res.writeHead(200, {
//         'Content-type': 'text/plain'
//     });
//     res.end("Hello");


app.get('/', function (req, res) {
    writeLog(req, res);
    res.writeHead(200, {
                'Content-type': 'html'
             });
    var html = fs.readFileSync("saud.html", 'utf-8');
    var message = fs.writeFileSync("saud.html", new Date());
    res.send(message);
    res.end(html);
});