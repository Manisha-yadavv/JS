const customerId = 121212
let accountEmail = "manishayadav@google.com"
var accountPassword = "12345"
accountCity = "kota" // (IT IS POSSIBLE BUT DON'T DO THIS)
let accountState;  //(UNDEFINED VALUE)

// WE SHOULD NOT USE VAR VARIABLE BECAUSE OF ISSUE IN BLOCK AND FUNCTIONAL SCOPE
// customerId = 123123   (VALUE IN THIS CONST VARIABLE CANNOT BE CHANGED)

accountEmail="manisha@google.com"
accountPassword="12345678"
accountCity="Ahmedabad" 
// console.log("customerId")
console.table([customerId,accountEmail,accountPassword,accountCity,accountState])