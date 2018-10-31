/* Functions:
*
* 0. contains a block code, which we can execute when we want
*
*
* 1. 
*
* 2. 
*/

/*The two phases to using functions: First we must declare the function.  
* Next we can execute (or two other words for executing a function?) a function by
* calling the function.
*/

//difference between function's parameters and arguements//
/*A parameter is a variable(s) inside of a defined function.
* When you call a function, you pass an arguement through the parameter to 
* assign the variable
*/

//syntax for a named function//
function add(parameter1, parameter2) {};
//assigning a function//
add(1,2);

/*Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. 
How do we specify inputs, and how do we specify outputs?
*
*We can specify inputs by defining the parameters, and we can specify a 
*function's ouputs by returning the value.
*/

//Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.//

/*Closures: Functions form closures around the data they house. 
*If an object returned from the Function and is held in memory somewhere (referenced), 
*that closure stays ALIVE, and data can continue to exist in these closures! 
*/

function multiply(num1, num2) {
   var product = num1 * num2;
   return product;
   function makeproduct(){
       
   }
} 