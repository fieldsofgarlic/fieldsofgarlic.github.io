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
    return `Good ${periodOfDay}!`; // return a string built with a template literal
}
console.log( greet( 'morning' ) ); // will log "Good morning!" to the console

// 2. Declaring and calling functions stored in variables //
let randomInteger = function ( max ) {
    return Math.ceil( Math.random() * max );
}
console.log( randomInteger( 10 ) ); // will log a random integer between 1 and 10 to the console

// 3. anonymous vs. named functions //
let exponent = function ( exp ) {         // this anonymous function expression gets named by the let assignment
    return function ( base ) {            // this anonymous function can stay anonymous be assigned with a call to exponent()
        return Math.pow( base, exp );     // our nested function, when called, returns the base numer to the exp-th power
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
function titleCase ( string ) {       // take a string of space-delimited words and return the string with each word's first letter capitalized
    let words = string.split(' ');    // split the string into tokens, using a single space as a delimiter
    return words.map(                 // map() iterates over each word in the sentence and replaces it with a transformed word
        word => word.replace(         // this arrow function uses replace to capitalize the first letter of each word
            /^(.)(.*)$/,              // ah, the simple beauty of regular expressions
            ( m, m1, m2 ) => m1.toUpperCase() + m2.toLowerCase()   // this arrow function handles the actual capitalization of the first character
        )
    ).join( ' ' );                    // finally, we reassemble our words into a new string, again delimited by a space
}
console.log( titleCase( 'this wAs a SEntence wIth stRANGe CASE.') ); // logs "This Was A Sentence With Strange Case." to the console

// 6. scope and functions //
let message = "public";          // the let keyword scopes this message variable globally, but doesn't hoist it

function hidden () {
    let message = "secret";      // the let keyword scopes this message variable to the hidden() function
    return message;
}

console.log( "The global message is " + message             // this will show us the globally scoped  message
             + ", but the hidden() message is " + hidden()  // this will show us the message scoped within the hidden() function
             + "." ); // result: "The global message is public, but the hidden() message is private."

// 7. closures //
function daySegment() {
    
    let now = new Date( 1540744868000 );    // this variable is created in daySegment()'s scope'
    
    return function ( update ) {            // this function relies on a variable, now, created in its containing scope
        let segment;                        // this variable is local to this anonymous function
        if ( update ) now = new Date();     // if called with a true argument the closure will update now, which comes from a closed scope
        switch ( true ) {                   // true is the result we are looking for
            case now.getHours() < 12:       // if this expression evaluates to true, then our switch will trigger execution of this case
                segment = 'morning';        // in this case, our local variable is set to 'morning'
                break;                      // the break keyword tells us to stop executing for this case
            case now.getHours() < 17:
                segment = 'afternoon';
                break;
            case now.getHours() < 21:
                segment = 'evening';
                break;
            default:                        // this is our catch-all case, if all of the above tests evaluate to false
                segment = 'night';
        }        
        return segment;                     // finally, our anonymous function returns our local variable, which is calculated using
                                            // a variable from daySegment()'s scope, which is what makes this a returned function a closure
    }
}

console.log( daySegment()() );         // will report 'morning';
console.log( daySegment()( true ) );   // will report whatever the current day segment is when called