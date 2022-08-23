
let cons = document.getElementById('console');
let input = '';
let loop = 0;
let sh = 'connect$ '
cons.value = sh;
function start(type){
  console.log('Now in (start) func')
 
  document.addEventListener("keyup", function(event) {
    loop = loop + 1
    console.log("GOT INPUT")
    console.log('Now in (start) func');
      console.log(event.keyCode);
      if (String.fromCharCode(event.keyCode) === '½' ){
        
        console.log("key = " + key)
        key = '-'
        console. log("key = " + key)
        console.log('(189) '+ input);
      
      } else if (event.keyCode === 8) {
        input = input.slice(0, -1)
        console.log(input);
        console.log('(8) '+ input);
        
      } else if (event.keyCode === 186){
        console.log("key = " + key)
        key = ":"
        console.log('(186) '+ input);

      } else if (event.keyCode === 13) {
        loop = 0
        cashe = input;
        if (type === 'main'){
          if(cons.value.slice(-2) === "$ "){
            
          } else {
            cons.value = cons.value + sh;
          }
          
          
          input = ''; 
          main(cashe);
          
        }else if (type === 'shell'){
          shel(cashe);
        }
        
      } else {
        if (String.fromCharCode(event.keyCode).toLowerCase() === '¾'){
          console.log("key = " + key)
          key = "."
          console.log('(main -3/4) '+ input);
        }else if (event.keyCode == 16){
          input = input + ''
          console.log('(main -16) '+ input);
        }
        
        
        else{
          key = String.fromCharCode(event.keyCode).toLowerCase()
          console.log("key = " + key)
          input = input + key
          console.log('Now in (main) func: input === ' + input);
          input = remove(input)
          console.log('Now in (main) func: input === ' + input);
        }
        
        


      }
  });
}
start('main');
console.log('Cleared : input (var)')
function main(input){
  console.log("input was = " + input)
  input = remove(input)
  console.log("input is now = " + input)
  

  
  
  if (input === "cls"){
    console.log(cons.value)
    cons.value = sh;
    console.log(cons.value)
    console.log('User inputed the (cls) command')
    
  } 

  if (input.includes('sh') ) {
      console.log('User inputed the (ssh) command')
      pass = input.substring(input.indexOf("-p") +3);
      host = input.substring(input.indexOf("-h") + 3, input.indexOf("-p") -1);
      
      socket = new WebSocket('ws://' + host);

      
      socket.onopen = function(e){
        socket.send(pass);
        console.log('connection is made');
        socket.onmessage = function(e){
          data = e.data;
          shel();
        }
        }
      }
 
  input = ''; 
  start('main');




}
 
    








function remove(string) {
  for (let i = 0; i < string.length; i++){

    if(i > 0){
      fst = i -1
      
      
    }

    if ( string.substr(i, 1)== string.substr(i + 1, 1)){
    
      string = string.replace(string.substr(i, 1), "")
    

    }
  } 
  return string

}


        
function shel(input) {
  console.log('Now in (shell) func');
  sh = "shell$ "
  
  
  cons.value = sh;
  if (input == "cls"){
    console.log("If")
    cons.value = sh;

  
    
  } else {
    console.log("Else")
    cons.value = cons.value + "\n '" + input + "' is not a command."
  } 

  console.log("None")
  console.log('shell part of things');
  socket.send(input);


}