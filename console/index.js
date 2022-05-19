

document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      let console = document.getElementById('console');
      let input = console.value;
        main();
      
    }
});

function main(){
  if (input == "cls"){
  input = ''
}

if (input.indexOf('ssh') !== -1) {
  pass = input.substring(input.indexOf("-p") +3);
  host = input.substring(input.indexOf("-h") + 3, input.indexOf("-p") -1);
  try {
    let socket = new WebSocket("ws://" + host + "/");
    socket.send(pass);
    socket.onmessage = function(event) {
      console.value = '\n' + event.data + ''  
    }
  finally {
      console.value += '\n An error has accored when \n connecting to victim. Try checking syntax:\n SSH -h [HOST:PORT] -p [PASSWORD]'
  }



};
  }
    
}
console.value += '\n'+input+' is not a command';






