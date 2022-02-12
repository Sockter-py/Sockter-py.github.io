let socket = new WebSocket("ws://localhost:1234/");

while socket.onopen = function(e) {
  alert("[open] Connection established");
  alert("Sending to server");
  let cmd = window.prompt("Enter your command: ");
  socket.send(cmd);
};

while socket.onmessage = function(event) {
  alert(`[message] Data received from server: ${event.data}`);
};

while socket.onclose = function(event) {
  if (event.wasClean) {
    alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
  } else {
    // e.g. server process killed or network down
    // event.code is usually 1006 in this case
    alert('[close] Connection died');
  }
};

while socket.onerror = function(error) {
  alert(`[error] ${error.message}`);
};
