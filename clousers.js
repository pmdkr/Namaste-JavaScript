function x(){
    var a=7;

   function y(){
        console.log(a);
    }
    a=100;
    return y;

}
const z= x();
z();
console.log(z);
