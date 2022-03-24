
var usr_name = window.prompt("Enter your new username");
var usr_pass = window.prompt("Enter your new password");
var en_name = CryptoJS.AES.encrypt(usr_name, "Username");
var en_pass = CryptoJS.AES.encrypt(usr_pass, "Password");
localStorage.setItem(en_pass, en_name);

