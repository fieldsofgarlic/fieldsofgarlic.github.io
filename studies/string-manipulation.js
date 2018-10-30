/*
 * STRING MANIUPLATION:
 *
 * 1. Strings can be manipulated with the operators + and +=, which peform
 *    concatenations
 * 
 * 2. Strings can be built through interpolation of other strings, using
 *    template literals
 *
 * 3. Strings can also be manipulated with a number of methods of the String
 *    object, such as split(), join(), slice(), replace(), charAt(), and trim()
 */

// 1. manipulating strings with operators //
let name = 'Ruth';
name = name + ' Bader';   // the + operator concatenates strings
name += ' Ginsburg';      // the += operator concatenates a value to an existing value
console.log( name );      // "Ruth Bader Ginsburg"

// 2. creating srings use interpolation //
let school = 'McDonogh 35 High School';
let year = 1917;
let established = `${school} was established in ${year}.`;    // enclosed in backticks
console.log( established );   // "McDonogh 35 High School was established in 1917.";

// 3. mainuplating strings with string methods //
let sentence = "    The quick brown fox jumps  over the lazy dog.   "

sentence = sentence.trim();                   // removes leading and trailing whitespace
console.log( sentence );                      // "The quick brown fox jumps  over the lazy dog."

let word = sentence.slice( 4, 8 );            // should retrieve the string, "quick "
console.log( word );                          // "quick"

let words = sentence.split( /[ \.\?;:]+/ );   // splits the string into an array of words
console.log( words );                         // ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog", ""]
                                              //       the empty string at the end is due to the terminating period
                                              
sentence = words.join( ' ' ) + '.';           // builds a string from the array values, separated by a space character
console.log( sentence );                      // "The quick brown fox jumps over the lazy dog."

let letter = sentence.charAt( 18 );           // should retrieve the string "x"
console.log( letter );                        // "x"

sentence = sentence.replace( 'fox', 'fez' );  // replaces "fox" with "fez", because bowties are cool 
console.log( sentence );                      // "The quick brown fez jumps over the lazy dog."