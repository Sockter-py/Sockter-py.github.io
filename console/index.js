const console = document.getElementById('console');
let input = document.getElementById('console').value;

if input == "cls"{
  input = ''
}

if (input.indexOf('ssh') !== -1) {
  pass = input.substring(input.indexOf("-p") +3);
  host = input.substring(input.indexOf("-h") + 3, input.indexOf("-p") -1);
}
console.value += '\n'+input+' is not a command';



