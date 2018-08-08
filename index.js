// Write your code in this file!

function getUKTime(){
  return(new Date().getHours() + 5);
}
getUKTime();

function discountTicket(){
  var num1= 100;
  var twenty = num1 *.20 ;
  var discountedPrice = num1 - twenty;
  return(discountedPrice);
}
discountTicket();