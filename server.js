var Server = require('ws').Server;
var port = process.env.PORT || 9030;
var ws = new Server({port: port});
console.log(ws)
console.log(port)
console.log(Server)
ws.on('connection', function(w){
  
  w.on('message', function(msg){
    alert('message from client');
  });
  
  w.on('close', function() {
    alert('closing connection');
  });

});
