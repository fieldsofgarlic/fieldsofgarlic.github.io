/* Write a loop that makes seven calls to console.log to output the following triangle:
 *
 * #
 * ##
 * ###
 * ####
 * #####
 * ######
 * #######
 */

for ( let i = 0; i < 7; i ++ ) {
    console.log( '#'.repeat( i + 1 ) );
}

/* Write a program that uses console.log to print all the numbers from 1 to
 * 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead
 * of the number, and for numbers divisible by 5 (and not 3), print "Buzz"
 * instead.
 */
 
[ ...Array(100).keys() ].map(
    function ( num ) {
        let out = num + 1;
        if ( out % 3 === 0 ) {
            out = 'Fizz';
        } else if ( out % 5 === 0 ) {
            out = 'Buzz';
        }
        console.log( out );
    }
);

/* When you have that working, modify your program to print "FizzBuzz" for
 * numbers that are divisible by both 3 and 5 (and still print "Fizz" or
 * "Buzz" for numbers divisible by only one of those).
 */

[ ...Array(100).keys() ].map(
    function ( num ) {
        let out = num + 1;
        if ( out % 3 === 0 && out % 5 === 0 ) {
            out = 'FizzBuzz';
        } else if ( out % 3 === 0 ) {
            out = 'Fizz';
        } else if ( out % 5 === 0 ) {
            out = 'Buzz';
        }
        console.log( out );
    }
);

/* Write a program that creates a string that represents an 8×8 grid, using newline
 * characters to separate lines. At each position of the grid there is either a
 * space or a "#" character. The characters should form a chessboard.
 * 
 * Passing this string to console.log should show something like this:
 * 
 *  # # # #
 * # # # # 
 *  # # # #
 * # # # # 
 *  # # # #
 * # # # # 
 *  # # # #
 * # # # #
 *
 */
 
let output = '';
for ( let i = 0; i < 8; i ++ ) {
    output += i % 2 ? ' #'.repeat( 4 ) : '# '.repeat( 4 );
    output += "\n";
}
console.log( output );

/*
 * When you have a program that generates this pattern, define a binding size = 8
 * and change the program so that it works for any size, outputting a grid of the
 * given width and height.
 */
 
let bindingSize = 8;
output = '';
for ( let i = 0; i < bindingSize; i ++ ) {
    output += i % 2 ? ' #'.repeat( bindingSize / 2 ) : '# '.repeat( bindingSize / 2 );
    output += "\n";
}
console.log( output );

