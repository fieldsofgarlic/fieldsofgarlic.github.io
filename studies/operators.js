/*
 * OPERATORS:
 *
 * 1. Operators operate on variables in expressions and statements
 * 
 * 2. Using operators produces some result, which could be mathematical, logical,
 *    or storage-related
 * 
 */

// 1. assignment operators //
let num = 42;       // assigns the value 42 to the variable num

num += 8;           // adds 8 to the current value of num
console.log( num ); // 50

num -= 12;          // subtracts 12 from the current value of num
console.log( num ); // 38

num *= 3;           // multiplies 3 times the current value of num
console.log( num ); // 114

num /= 2;           // divides the current value of num by 2
console.log( num ); // 57

num %= 25;          // assigns the remainder of num divided by 25
console.log( num ); // 7

// 2. arithmetic operators //
num = 4 + 1;        // adds the operands
console.log( num ); // 5

num = 6 - 2;        // subtracts the second operand from the first
console.log( num ); // 4

num = 1 * 3;        // multiplies the operands
console.log( num ); // 3

num = 22 / 11;      // divides the first operand by the second
console.log( num ); // 2

num = 25 % 4;       // remainder of dividing the first operand by the second
console.log( num ); // 1

// 3. comparison operators //
let value1 = 42;
let value2 = 6 * 9;

console.log( value1 === value2 );   // false, unless you're Douglas Adams

console.log( value1 > value2 );     // false, because value1 is not greater than value2

console.log( value1 >= value2 );    // false, because value1 is not greater than or equal to value2

console.log( value1 < value2 );     // true, because value1 is less than value2

console.log( value1 <= value2 );    // true, because value1 is less than or equal to value2

// 4. logical operators //
let bool1 = true;
let bool2 = false;

console.log( bool1 && bool2 );      // false, because these are not both true

console.log( bool1 || bool2 );      // true, because at least one of these two is true

console.log( ! bool2 );             // true, because ! turns false to true and vice versa

console.log( bool1 && ! bool2 );    // true, because now both sides of the && are true

// 5. unary operators //
let val = 5;

val++;                 // increments the value of val by one
console.log( val );    // 6

val--;                 // decrements the value of val by one
console.log( val );    // 5

// since the ++ is after the variable name, val gets incremented after the comparison
val = 5;
if ( val++ === 6 ) {
    console.log( "val got incremented to 6." );
} else {
    console.log( "val didn't get incremented to 6 yet." );
} // "val didn't get incremented to 7 yet."
console.log( val ); // 6, because the incrementation happened after the comparison

// since the ++ is after the variable name, val gets incremented after the comparison
val = 5;
if ( ++val === 6 ) {
    console.log( "val got incremented to 6." );
} else {
    console.log( "val didn't get incremented to 6 yet." );
} // "val got incremented to 6."
console.log( val ); // 6, because the incrementation happened before the comparison

// 6. ternary operators - hard to read, so don't use in a collaborative coding environment //

let hour = 'late';
let feeling = hour === 'late' ? 'tired' : 'spry';
console.log( feeling ); // "tired"

// the above line sets feeling to either 'tired' or 'spry', depending on the value of hour;
// it is functionally equivalent to the following:

if ( hour === 'late' ) {
    feeling = 'tired';
} else {
    feeling = 'spry';
}
console.log( feeling ); // "tired"