const cart=["shirt","pants","kurta"];

api.createOrder(cart,
    function(){

    api.proccedToPayment(
        function(){

        api.showOrderSummary(
            function(){

                api.updateWallet();
            }
        );
    });

})


// * importance of callbacks
// issue with callbacks
// a. pyrmid of doom, code grow horizental inseatd of vertically
// b. inversion of control, we gave program control to another function, and we don't know what is get in return of that function.


const cart1=["pants","shirts","kurta","shoes","jeans"];

api.createOrder2(cart1,function(){
    api.proccedToPayment2();
})