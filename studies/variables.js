/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/*
var - used to declare a variable 
*/
globalVar = 'weather';   // in the absence of let, var, or const, a variable is global [DON'T DO THIS]

// 4. var //
var varVar = 'Binks';    // declares a mutable variable and assigns it a value - different from let only in how it is hoisted (see below)

// 5. let //
let letVar = 'Burton';   // declares a mutable variable and assigns it a value - different from var only in how it is hoisted (see below)

// 6. const //
const constVar = 'Troi'; // declares an immutable variable and assigns it a value

// 7. hoisting - the interpreter's rules about variable and function availability within a certain scope //
countLimit = 5;   // the names of global variables get hoisted to the top of the scope, right below hoisted functions
var step = 2;     // the names of var-declared variables get hoisted to the top of the scope, right below hoisted functions
function countUpFromOneTo ( times, skip ) {  // declared functions hoist with their definitions to the top of their scope
    return Object.keys( [ ...Array( times ) ] ).filter( ( e, i ) => ( i + 1 ) % skip && e > 0 ).forEach( ( e ) => console.log( e ) );
}
let rando = Math.floor( Math.random() * 10 ) + 1; // neither the name nor this value will be hoisted to the top of the scope
const pumpkin = Math.PI;                          // neither the name not this value will be hoisted to the top of the scope

// another hoisting example
console.log( magicNumber ); // will result in undefined, because the name is hoisted above this line before execution, but not the value
var magicNumber = 1138;
console.log( magicNumber ); // will now report 1138, because a value has been assigned before this line in execution

// yet another hoisting example
console.log( rest() );      // will log 'zzzzz...' because the funciton name and definition are available at the top of the scope, due to hoisting
function rest() {
    return 'zzzzz...';
}

// let and const don't lead to hoisting AND they will scope to block level
if ( 42 / 42 ) {
    var truth = 'absurd';
    let lies = 'computational';
}

console.log( truth );     // will report 'absurd' because var-declared variables are hoisted out of block-level scope
try {
    console.log( lies );  // will throw a ReferenceError because let-declared variables are not hoisted out of block-level scope
}
catch ( err ) {
    console.log( err );
}

// 8. assignment by reference vs. by copy //

let something = 'nothing'         // simple/primitive datatypes are assigned values by copy

let moreOfTheSame = something;    // makes a copy of the value of something and stores it under moreOfTheSame
moreOfTheSame += ' new';          // this only changes the copy, not the original
console.log( moreOfTheSame );     // will report 'nothing new'
console.log( something );         // will report 'nothing'

let studies = [ 'almost', 'done', 'I', 'hope' ];  // complex data types are assigned by reference

let learning = studies;           // assigns the reference to studies' value to learning, so they point to the same place in memory
learning[ 0 ] = 'never';
console.log( learning );          // will report [ 'never', 'done', 'I', 'hope' ] 
console.log( studies );           // will report [ 'never', 'done', 'I', 'hope' ] also, since both variable point to the same data