let socket = new WebSocket("ws://192.168.1.13:1234/");

while (true){
    socket.onopen = function(e) {
      alert("[open] Connection established");
      alert("Sending to server");
      let cmd = window.prompt("Enter your command: ");
      socket.send(cmd);
    };

    socket.onmessage = function(event) {
      alert(`[message] Data received from server: ${event.data}`);
    };

     socket.onclose = function(event) {
      if (event.wasClean) {
        alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
      } else {
        // e.g. server process killed or network down
        // event.code is usually 1006 in this case
        alert('[close] Connection died');
      }
    };

    socket.onerror = function(error) {
      alert(`[error] ${error.message}`);
    };

}
