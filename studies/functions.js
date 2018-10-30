/*
 * FUNCTIONS:
 *
 * 1. There are two phases to using functions. First we must declare (define) a function
 *    and then we call (use) it.
 *
 * 2. Functions can be named or they can be stored in variables. They can also be anonymous.
 * 
 * 3. Functions can accept as arguments any number of parameter variables of any datatype.
 * 
 * 4. Parameters are the variables in a function definition; arguments are the values
 *    passed into the function when it is called
 * 
 * 5. functions can (but need not) return a single value, which can be any datatype,
 *    including another function
 * 
 * 6. variables declared within functions are scoped to those functions or to a block
 *    within those functions
 *
 * 7. functions passed out of their own scope can still access variables from that scope;
 *    these functions are called closures, since they persist after their scope of origin
 *    has been "closed"
 */

// 1. Declaring and calling named functions //
function greet ( periodOfDay ) {
    return `Good ${periodOfDay}!`;
}
console.log( greet( 'morning' ) ); // will log "Good morning!" to the console

// 2. Declaring and calling functions stored in variables //
let randomInteger = function ( max ) {
    return Math.ceil( Math.random() * max );
}
console.log( randomInteger( 10 ) ); // will log a random integer between 1 and 10 to the console

// 3. anonymous vs. named functions //
let exponent = function ( exp ) {         // this anonymous function gets named by the let assignment
    return function ( base ) {            // this anonymous function can stay anonymous be assigned with a call to exponent()
        return Math.pow( base, exp );
    }
}
let cube = exponent( 3 );
console.log( cube( 4 ) ); // will log 64 to the console

// 4. function inputs: parameters vs. arguments //
function testEquality( oneThing, anotherThing ) {          // oneThing and anotherThing are parameters
    return oneThing === anotherThing;
}
console.log( testEquality( 'everything', 'nothing' ) );    // 'everything' and 'nothing' are arguments
console.log( testEquality( 42, 42 ) );                     // 42 and 42 are arguments

// 5. returning values from functions //
function titleCase ( string ) {
    let words = string.split(' ');
    return words.map(
        word => word.replace(
            /^(.)(.*)$/,
            ( m, m1, m2 ) => m1.toUpperCase() + m2.toLowerCase()
        )
    ).join( ' ' );
}
console.log( titleCase( 'this wAs a SEntence wIth stRANGe CASE.') ); // logs "This Was A Sentence With Strange Case." to the console

// 6. scope and functions //
let message = "public";

function hidden () {
    let message = "secret";
    return message;
}

console.log( "The global message is " + message + ", but the hidden() message is " + hidden() + "." );

// 7. closures //
function daySegment() {
    
    let now = new Date( 1540744868000 );
    
    return function ( update ) {
        let segment;
        if ( update ) now = new Date();     // if called with a true argument the closure will update now, which comes from a closed scope
        switch ( true ) {
            case now.getHours() < 12:
                segment = 'morning';
                break;
            case now.getHours() < 17:
                segment = 'afternoon';
                break;
            case now.getHours() < 21:
                segment = 'evening';
                break;
            default:
                segment = 'night';
        }        
        return segment;
    }
}

console.log( daySegment()() );         // will report 'morning';
console.log( daySegment()( true ) );   // will report whatever the current day segment is when called