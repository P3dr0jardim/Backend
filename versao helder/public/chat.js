$(function () {
    //make connection
    var socket = io.connect('http://localhost:3000')

    //buttons and inputs
    var message = $("#message");
    var send_message = $("#send_message");
    var chatroom = $("#chatroom");
    var feedback = $("#feedback");
    var updated_name = $("#update_name");
    var name = $("#name");
    var myImage = $("#myImage");
    var list = $("#userlist");

    //Emit message
    send_message.click(() => {
        socket.emit("send_message", {
            message: message.val(),
            name: name.val()
        })
    })
    updated_name.click(() => {
        socket.emit("update_name", {
            name: name.val()
        })
    })
    socket.emit("user_connected");
    socket.emit("userlist");
    //Listen on new_message
    socket.on("broadcast_message", (data) => {
        chatroom.append("<p class='message'>" + data.username + ": " + data.message + "</p>");
        onclick = document.getElementById('message').value = ""
    });
    socket.on("render_img_chat", (data) => {
        console.log(data.message);
        chatroom.append("<p><img src='"+data.message+"'></p>")
    })
    socket.on("broadcast_updated_name", (data) => {
        chatroom.append("<p class='alert alert-warning' role='alert'>" + data.old_user + " is now " + data.username + " </p>");
        onclick = document.getElementById('name').value = ""
    })
    socket.on("broadcast_user", (data) => {
        chatroom.append("<p class='alert alert-primary' role='alert'>" + data.username + " connected </p>");
    })
    socket.on("broadcast_user_disconnect", (data) => {
        chatroom.append("<p class='alert alert-danger' role='alert'>" + data.username + " disconnected </p>");
    })
    socket.on('private_message', function (data) {
        chatroom.append("<span class=privado><p>User " + data.username + " send you : " + data.message + "</p></span>")
    })
    socket.on('message_true', function (data) {
        chatroom.append("<span class=sus><p>You send to " + data.username + ": " + data.message + "</p></span>")
    })
    socket.on('erro_user', function (data) {
        chatroom.append("<span class=erro><p>" + data.message + "</p></span>")
    })
    socket.on("broadcast_userlist", (data) => {
        list.empty();
        for (i = 0; i < data.length; i++) {
            list.append("<li>" + data[i] + "</li>")
        }
    })

});