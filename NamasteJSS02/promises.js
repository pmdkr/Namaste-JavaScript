// const cart=["shirts","pants","shoes","kurta"];

// createOrder(cart,function(orderId){
//     proccedToPayment(orderId);
// })


// const promise=createOrder(cart);
 
/**
 * the promise contain a empty object that we got in return from createOrder(),
 * -> initially the promise contain "undefind"
 * -> As it will be Asyncronous opration , so it will return promise object
 * -> so we can handle the promise using "then" method ->>>>
 */

// promise.then(function(orderId){
//     proccedToPayment(orderId);
// })


console.log("Namaste JavaScript Season 2");

const user=fetch("https://api.github.com/users/pmdkr");

console.log(user);

user.then()