/*
 * DATATYPES:
 *
 * 1. Variables in Javascript are of one of many types: objects, arrays, dates, numbers,
 * strings, etc. These are datatypes.
 *
 * 2. Javascript is a loosely typed language, which means the datatype around strictly bound
 * to variable--variables can change from one type to another very easily.
 * 
 * 3. Changing a datatype is as simple as reassigning the variable to a value of another type.
 *
 * 4. Datatypes are either simple or complex. Simple datatypes are stored directly in memory
 * reserved for them. Complex datatypes are stored by reference.
 */

// 1. number - a numerical value, stored by value //
let num = 1;
num = 0.5;       // decimals are fine
num = 2 / 2;     // you can even store the result of a mathematical operation
num = Math.PI;   // some functions or object properties/methods return numbers

// 2. string - can hold a collection of characters, stored by value //
let str = 'neato';
str += ' is retro'; // the + operator concatenates strings: result 'neato is rstro'
str.length();       // strings have many methods to modify them provide information about them
console.log(str[0]); // returns 'n' because strings are really arrays of characters

// 3. boolean - can either be true or false, stored by value //
let bool = true;
console.log( 4 > 5 ); // tests like these evaluate to a boolean

// 4. array - a 0-indexed, ordered list of variables of any type, stored by reference //
let list = [ 'string', 5, [ 'another', 'array' ], { genus: 'object', locale: 'in a list' }, true, null, undefined, 0/0 ];
console.log( list[ 0 ] ); // reports 'string'
list.push( Infinity );    // arrays have beaucoup methods and properties

// 5. object - a string-indexed, unordered collection of properties and methods, stored by reference //
let person = {
    name: 'daisy',
    bicycle: 'tandem'
};
person.name = 'esmerelda';  // object properties can be changed like this or...
person[ 'name' ] = 'joe';   // ...like this

// 6. function - a named, reusable block of code that accepts input, performs actions and can return output //
function divide ( a, b ) {  // the variables in the declaration are scoped to within the function
    return a / b;           // when the return keyword is encountered, execution with the function ends and what follows the keywords is sent as output
}
console.log( divide( 4, 8 ) ); // reports 0.5

let multiply = function ( a, b ) { // functions can also be declared anonymously and stored in a variable - by reference
    return a * b;
}
console.log( multiply( 4, 8 ) ); // reports 32 

// 7. undefined - used to indicate that a value has not been specified or has been deleted //
var undef1;                      // var initializes to undefined, but let and const don't
let undef2 = undefined;          // if you want a variable declared with let to be undefined, you have to specify it
const jeNeSaisQuoi = undefined;  // const declarations can also be undefined, but their immutability makes them forever so

// 8. null //
let feeling = null;   // as my father used to say, null is the empty set; not 0, not undefined, just nothing
                      // in database programming, null is used to indicate an empty field

// 9. NaN //
let impossible = 0 / 0;  // NaN is Javascript's way of telling you that your operation was not mathematically sound

// 10. Infinity and -Infinity - special globals that behave just like infinity does in math //
let biggie = Infinity; 
console.log( biggie + 1 );             // still Infinity;
console.log( biggie * Infinity );      // still Infinity;
let lowDown = -Infinity;
console.log( lowDown + 1 );            // still -Infinity;
console.log( lowDown * Infinity );     // still -Infinity;

// 11. Differences between primitive/simple and complex datatypes //
let simple = 'string';  // strings, numbers, undefined, null, NaN, Infinity, and -Infinity all are simple because they only hold one value
let complex = { address: 'candyland', whoCanMakeTheSunshine: 'candman' }; // arrays and objects are complex because they hold collections

// 12. Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. What does that mean, and how are they different? //
let string2 = 'somebody';

function modifyString ( s ) {
    s = 'nobody';
}

modifyString( string2 );
console.log( string2 ); // string2 is still 'somebody', because the value was passed by copy, not reference;

let list2 = [ 'dave', 'steven', 'laura' ];

function modifyArray ( arr ) {
  arr[ 1 ] = 'khari';
  arr.push( 'andy' );
}

modifyArray( list2 );
console.log( list2 ); // list2 is modified, even though modifyArray() didn't return anything, because the value was passed by reference

let obj2 = { name: 'dave', age: 50, job: 'coder' };

function modifyObject ( o ) {
  o.job = 'teacher';
}

modifyObject( obj2 );
console.log( obj2 );  // as above, obj2 is modified, even though modifyObject() didn't return anything, because the value was passed by reference