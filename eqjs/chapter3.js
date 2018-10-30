// Write a function min that takes two arguments and returns their minimum.

let min = ( n1, n2 ) => [ n1, n2 ].sort( ( a, b ) => a - b )[ 0 ];
console.log( min( 0, 10 ) );
console.log( min( 0, -10 ) );

/* Zero is even.  One is odd.  For any other number N, its evenness is the
 * same as N - 2.
 *
 * Define a recursive function isEven corresponding to this description. The
 * function should accept a single parameter (a positive, whole number) and
 * return a Boolean.
 *
 * Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a
 * way to fix this?
 */
 
function isEven( n ) {
    switch ( n ) {
        case 0: return true;
        case 1: return false;
        default: return isEven( n - 2 );
    }
}

console.log( isEven( 50 ) );
console.log( isEven( 75 ) );

function isEven( n ) {
    switch ( Math.abs( n ) ) {
        case 0: return true;
        case 1: return false;
        default: return isEven( Math.abs( n ) - 2 );
    }
}

console.log( isEven( -50 ) );
console.log( isEven( -75 ) );

/* Write a function countBs that takes a string as its only argument and
 * returns a number that indicates how many uppercase “B” characters there
 * are in the string.
 */

function countBs( str ) {
    return [ ...str ].filter( c => c === 'B' ).length;
}

/* Next, write a function called countChar that behaves like countBs, except
 * it takes a second argument that indicates the character that is to be
 * counted (rather than counting only uppercase “B” characters).
 */ 

function countChar( str, char ) {
    return [ ...str ].filter( c => c === char ).length;
}

// Rewrite countBs to make use of this new function.
function countBs2( str ) {
    return countChar( str, 'B' );
}