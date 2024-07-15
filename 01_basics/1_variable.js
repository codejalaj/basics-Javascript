const accountID = 12345
let accountEmail = "jalaj@gmail.com"
var accountPassword = "jalaj"
accountCity = "kota"

//accountID = 234  cannot change const | not allowed
/*
prefer not to use var 
because of issue in block scope and functional scope
*/
accountEmail = "hfd@gmail.com"
accountPassword = "nopassword"
accountCity = "chandigarh"

console.table([accountID,accountEmail,accountPassword,accountCity ]);
 

