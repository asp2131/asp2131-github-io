/* Operators:
*
* 0. Are execute data by: 
*
* 1. creating new variables
* 2. comparing variables
* 3. incluidng them in arithmetic operations.
* 
*/

//Assignment operators: (=)//
 var apples = 9;

//Arithmetic operators: (+ , - , / , *)//
 console.log(1 +1);

//Comparison operators: (> , < , >= , <= , ===, ==)//
 console.log(1 > 2); //false;

//Logical operators: (&& , || , !)//
 console.log(2 > 1 && 3 > 1);

//Unary operators (!, typeOf, -):// 
 var i = 2;
 console.log(-i); "-2";
 console.log(typeof 1); "number";
 console.log(!false); "true";

//Ternary operator (a ? b : c)://
//syntax: condition ? exprTrue : exprFalse//
var height = 5;
var ride = (height >= 4) ? "Big Ride" : "Kiddy Ride"; 
console.log(ride);