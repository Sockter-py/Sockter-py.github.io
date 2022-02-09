var socket = new WebSocket("ws://connection.io");
socket.onopen= function() {
    var cmd = window. prompt(">>> "); 
    socket.send(cmd);
};
socket.onmessage= function(s) {
    alert('got reply '+s);
};
