socket= new WebSocket('https://www.sockter-py.github.io');
socket.onopen= function() {
    socket.send('hello');
};
socket.onmessage= function(s) {
    alert('got reply '+s);
};
