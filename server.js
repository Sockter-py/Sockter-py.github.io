document.onkeypress = function(e) {
     get = window.event?event:e;
     key = get.keyCode?get.keyCode:get.charCode;
     key = String.fromCharCode(key);
 
   console.log(key);
}
