import WebSocket;
var Socket = new WebSocket('ws://' + window.location.hostname + ':999/');
socket.onopen= function() {
    var cmd = window. prompt(">>> "); 
    socket.send(cmd);
};
socket.onmessage= function(s) {
    alert('got reply '+s);
};
