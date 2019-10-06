/**
 * Swap Variables easily without temp
 */

 //NEW WAY
 var a = 1, b= 2;
 [a,b]= [b,a]

 //OLD WAY
 var temp = a;
 a = b;
 b = temp;

 /**
  * Advance Deep Arrays
  */
var [a1,[b1,[c,d]]] = [1,[2,[[3,4],5],6]]