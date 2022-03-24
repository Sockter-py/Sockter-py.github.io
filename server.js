var usr_name = window.prompt("Enter your new username");
var usr_pass = window.prompt("Enter your new password");
var pass = new File([usr_name], usr_pass, {type: "text/plain", lastModified: Date})
