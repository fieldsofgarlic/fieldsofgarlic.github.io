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
let myName;

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
let myVariable = 1;
let myVariable = true;
myVariable = "someString";

/*
 * var, let, and const
 * 
 * this is helpful: https://dev.to/sarah_chima/var-let-and-const--whats-the-difference-69e
 * though it says that let and const are hoisted but not initialized, as opposed to other
 * sources I've read that say let and const are not hoisted at all. I suppose the result
 * is the same, either way.
 */
 
// 4. var - old-school variable declaration //
/* 
 * after learning about let and const, I can't think of a reason to ever use var, except in
 * the demonstrative examples below
 */
var name = 'Dave'; // this gets hoisted to the top of its scope and is available anywhere

// 5. let - how the kids are declaring variables today //
let age = 50; // this is scoped to its block only and is mutable
// let age = 45; // this will not work [commented out because it produces a syntax error]

// 6. const - most restrictive way to declare variables, in terms of scope and mutability //
const pi = 3.1415 // this is scoped to its block only, but is immutable
const list = [];
list.push(pi);    // this works because values within reference-stored variables can be changed
const gig = {
    location: 'First Avenue',
    date: '7/7/1977'
};
gig.date = '7/17/1977';  // this works for the same reason
// like let-declared variables, const-declared variables can also not be redeclared

// 7. hoisting //
if ( true ) {
    var state = 'calm';      // variable name, though declared here, is hoisted outside of this block
    let guest = 'greg';      // not hoisted
    const hope = 'eternal';  // sadly, not hoisted
}
console.log(state); // reports "calm"
console.log(guest); // reports "error" - this is puzzling because I would have expected a ReferenceError
console.log(hope);  // reports "ReferenceError"

if ( false ) {
    var state = 'calm';     // variable name is hoisted outside this block
    let guest = 'greg';     // not hoisted
    const hope = 'eternal'; // sadly, not hoisted
}
console.log(state); // reports undefined
console.log(guest); // reports "error" - still puzzling
console.log(hope);  // reports "ReferenceError"