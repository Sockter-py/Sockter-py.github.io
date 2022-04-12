let socket = new WebSocket("wss://" + window.location.hostname + ":1234/");

socket.onopen = function(e) {
  document.onmousemove = function(event) { 
    pointerX = event.pageX;
    pointerY = event.pageY;
    socket.send("X: " + pointerX);
    socket.send("Y: " + pointerY)'
  };
};
  
};

socket.onmessage = function(event) {
  imageAsBytes = event.data;
};


socket.onerror = function(error) {
  alert(`[error] ${error.message}`);
};

document.getElementById("ItemPreview").src = "data:image/png;base64," + imageAsByte;
