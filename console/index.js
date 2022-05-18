const console = document.getElementById('console');
let input = console.value;

if input == "cls"{
  input = ''
}

if (input.indexOf('ssh') !== -1) {
  pass = input.substring(input.indexOf("-p") +3);
  host = input.substring(input.indexOf("-h") + 3, input.indexOf("-p") -1);
  try {
    let socket = new WebSocket("ws://" + host + ":1234/");
    socket.send(pass);
    socket.onmessage = function(event) {
      console.value = '\n' + event.data + ''  
    }

};
  }
    
}
console.value += '\n'+input+' is not a command';



