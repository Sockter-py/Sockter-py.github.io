socket= new WebSocket('https://www.sockter-py.github.io');
socket.onopen= function() {
    var cmd = window. prompt(">>> "); 
    socket.send(cmd);
};
socket.onmessage= function(s) {
    alert('got reply '+s);
};
