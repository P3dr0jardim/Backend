// require and instantiate express
const express = require('express');
const uuid = require("uuid/v1")
const app = express();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
var today = new Date();

function writelog(data) {
    var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    data += " " + dateTime + "\n";
    fs.appendFile('logs/logs-sessions.txt', data, (err) => {
        if (err) throw err;
    });
}

function writechat(data) {
    var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    data += " " + dateTime + "\n";
    fs.appendFile('logs/logschat-' + date + '.txt', data, (err) => {
        if (err) throw err;
    });
}


app.set('view engine', 'ejs'); // set up ejs for templating

//middlewares
app.use(express.static('public'));

// express server
var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port);
});

const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 100000000
    },
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb)
    }
}).single('myImage');

function checkFileType(file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;

    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!');
    }
}

var io = require('socket.io')(server);

// route
app.get('/', function (req, res) {
    res.render('index.ejs');
});

// Registar o evento Connection

var userlist = [];
io.on("connection", (socket) => {
    app.post('/', (req, res) => {
        upload(req, res, (err) => {
            if (err) {
                res.render('index.ejs', {
                    msg: err
                });
            } else {
                if (req.file == undefined) {
                    res.render({
                        msg: 'Error: No File Selected!'
                    });
                } else {
                    io.sockets.emit('broadcast_message', {
                        message: `uploads/${req.file.filename}`,
                        username: socket.username
                    });
                    // res.render('index.ejs', {
                    //     msg: 'File Uploaded!',
                    //     file: `uploads/${req.file.filename}`
                    // });
                }
            }
        });
    });

    socket.username = "USER " + uuid();
    writelog("User " + socket.username + " Connected");
    socket.on("send_message", (data) => {
        if (data.message[0] == "@") {
            var separar = data.message.split(":")
            var nome = "";
            for (var i = 1; i < separar[0].length; i++) {
                nome += separar[0][i]
            }
            destid = userlist.nome;
            if (destid != null) {
                writechat("User " + socket.username + "send to " + nome + ": " + separado[1])
                io.to(destid).emit('private_message', {
                    message: separado[1],
                    username: socket.username,
                    destusername: nome
                })
                io.to(socket.id).emit('message_true', {
                    message: separado[1],
                    username: nome
                })
            } else {
                var myname = socket.name
                io.to(myname).emit('erro_user', {
                    message: "User not exist"
                })
            }
        } else {
            if (data.message != "") {
                writechat(socket.username + ": " + data.message)
                io.sockets.emit('broadcast_message', {
                    message: data.message,
                    username: socket.username
                })
            }
        }
    });
    socket.on("user_connected", () => {
        io.sockets.emit('broadcast_user', {
            username: socket.username
        });
        userlist.push(socket.username);
        io.sockets.emit("broadcast_userlist", userlist)
    });

    socket.on("update_name", (data) => {
        if (data.name) {
            writechat(socket.username + ": " + data.message)
            io.sockets.emit("broadcast_updated_name", {
                old_user: socket.username,
                username: data.name,
            })
        

        for (var i = 0; i < userlist.length; i++) {
            if (userlist[i] == socket.username) {
                userlist[i] = data.name;
            }
        }
        socket.username = data.name;
        io.sockets.emit("broadcast_userlist", userlist)
    }
    });

    socket.on("disconnect", () => {
        writelog("User " + socket.username + " disconnected");
        for (var i = 0; i < userlist.length; i++) {
            if (userlist[i] == socket.username) {
                userlist.splice(i, 1);
            }
        }
        io.sockets.emit("broadcast_userlist", userlist)
        io.sockets.emit('broadcast_user_disconnect', {
            username: socket.username
        });
    })
});