var socket = new WebSocket("ws://connection.ws");
socket.onopen= function() {
    var cmd = window. prompt(">>> "); 
    socket.send(cmd);
};
socket.onmessage= function(s) {
    alert('got reply '+s);
};
