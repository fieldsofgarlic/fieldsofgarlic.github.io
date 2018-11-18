/*
 * CONTROL FLOW:
 *
 * 1. Sometimes our code needs to make decisions about how to proceed, control flow statements
 *    act as gatekeepers to regulate program flow based on certain conditions
 *
 * 2. If/Else If/Else statements provide robust structures to evaluate complex conditions and
 *    alternate conditions similiar to how flow charts indicate decision or authority pathways
 */

// 1. if - executes the attached block only when a specified condition is true //
const person = 'me';
if ( person === 'me' ) {
    console.log( 'Identity crisis averted.' );
} // this will report 'Identity crisis averted.' to the console

// 2. if-else - adds a secondary condition to try when a prior condition fails //
const age = 44;
if (age > 50) {
    console.log("It's all downhill from here.");
} else if (age < 50) {
    console.log("Keep on pushin'!");
} else {
    console.log("Welcome to the top of the mountain.");
} // this will report "Welcome to the top of the mountain."

// 3. else - provides a block to execute when prior if or if-else conditions have failed //
if ( person === 'someone else' ) {
    console.log( 'Identity crisis!' );
} else {
    console.log( "Whew! I'm still me." );
} // this will report "Whew! I'm still me."

// 4. switch - good for directing code flow based on a variable value or a test result //

// here's how we could use it with a variable value
let pill = 'red';

switch (pill) {
    case 'blue':
        console.log( "Please hand me that spoon." );
        break;
    case 'red':
        console.log( "There is no spoon." );
        break;
    default:
        console.log( "I hope you have a prescription for that." );
} // reports "There is no spoon."

// and here's how we could use it with the result of a test

const interstate = 610;
let type;
let direction;

switch (true) {
    case Math.floor( interstate / 100 ) % 2 > 0:
        type = 'spur';
        break;
    default:
        type = 'loop';
}

switch (true) {
    case Math.floor( interstate ) % 2 > 0:
        direction = 'north-south';
        break;
    default:
        direction = 'east-west';
}

console.log( `${interstate} is a ${type} that travels ${direction}.` ); // "610 is a loop that travels east-west."