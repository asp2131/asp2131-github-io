/* Datatypes:
*
* 0. Types of Data!
*/

/*Simple Dataypes:
*
*Number
* - numeric data 
*String
* - character data
*Boolean
* - true or false
*undefined
* - no value assigned
*null
* - absence of value
*NaN//
* - not a number
*Infinity and -Infinity 
* - value represening infinity; bigger than any number. 
*/


/*Complex Datatypes:
*Array//
* - a collection data that stores multiple values in a variable. Initialized by 
* square bracks '[]'; 
*Object//
* - a collection of key/value pairs. Initialized by curly brackets '{}';
*Function//
* - performs a tasks on data or calculates a value, then returns them. Initialized by defining the function
*using '()' and includes the name, parameters, and curly brackets afterwards. 
*A function is called when it is executed perform its task. ;
*/
function forest(){}; //--> function statement//
var forest = function(){}; //--> function expression// 

//What is the difference between primitive/simple and complex data types?//

/* Primitive datatypes are simple because they do not collect any values. 
*Otherwise known as immutable. If changed, they return new primitive 
*values. The original value is not altered. Complex datatypes collect other values
and can have an indefinite size. 

*Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. 
*What does that mean, and how are they different?

*Passing through a function BY COPY means that the caller and callee have two 
*variables equal to each other. If the callee is modified, you can see the changes
*made to the variable in the caller. However, changing the callee does not affect
*the variable stored in the caller.

*Passing through a function BY REFERENCE, changing the callee effects 
*all references because the value is in reference to the same object. 
*/ 