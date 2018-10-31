/* Loops:
*
* 0. allow us to execute a block of code as many times as we need.
*
*
* 1. 
*
* 2. 
*/

//while loops: a loop with a statement that executes conditions only if its true//

/* how long should I loop?
*/

var myAge = 25; 
while(myAge<50) {
    myAge++;
}

//for loops: execute blocks of code in arrays//
/*
* 1. Where should I start?
* 2. How long should I loop?
* 3. What changes each time I loop?
*/

var dogs = [];
for(let index = 0 ; index < dogs.length; index++ ) {
    console.log([index]);
    console.log(dogs[index].toUpperCase());
}

//for in loops: execute blocks of code in objects// 
/*
* 1. How will you refer to keys?
* 2. Which object do you want to loop over?
*/

var mice = { size: 'skinny', weight: 'average', height: 'medium'};
for(let key in mice) {
    console.log(mice[key]); //'skinny', 'average', 'medium';//
}

//looping over array backwards:// 
var cats = [];
for(let index = cats.length -1; index > -1; index-- ) {
    console.log([index]);
    console.log(cats[index].toUpperCase());
}