
let cons = document.getElementById('console');
let input = '';
cons.value = 'root$ '
function start(){
  document.addEventListener("keyup", function(event) {
      console.log(event.keyCode);
      if (String.fromCharCode(event.keyCode) === '½'){
        input = input + '-'
        console.log(189 + input);
      
      } else if (event.keyCode === 8) {
        input = input.slice(0, -1)
        console.log(input);
        
      } else if (event.keyCode === 186){
        input = input.slice(0, -1)
        input = input + ':'

      } else if (event.keyCode === 13) {
        let console = document.getElementById('console');
        main(input);
        
      } else {
        input = input.concat(String.fromCharCode(event.keyCode).toLowerCase())


      }
  });
}
start();
function main(input){
  alert(input);
  
  if (input.includes("cls")){
    cons.value = 'root$ '
    let input = '';
  } 

  if (input.includes('ssh') ) {
      pass = input.substring(input.indexOf("-p") +3);
      host = input.substring(input.indexOf("-h") + 3, input.indexOf("-p") -1);
      socket = new WebSocket('ws://' + host);

  start();




}
 
    
}







