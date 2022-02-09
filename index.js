import WebSocket;
var socket = new WebSocket("wss://sockter-py.github.io/connect");
socket.onopen= function() {
    var cmd = window. prompt(">>> "); 
    socket.send(cmd);
};
socket.onmessage= function(s) {
    alert('got reply '+s);
};
