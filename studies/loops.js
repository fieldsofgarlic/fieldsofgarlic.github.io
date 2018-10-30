/*
 * LOOPS:
 *
 * 1. Loops allow us to repeat block of code a certain number of times
 *
 * 2. Loops can also repeat infinitely, but this can lead to system instability
 * 
 * 3. Several different loop structures exist: while, for, and for-in, each with
 *    different advantages
 * 
 * 4. One of the most common uses for loops is in working with collections
 *    (arrays and objects)
 */

// 1. while loops - use with caution and beware of infinite loops! //
let count = 1;
while ( count < 10 ) {
    console.log( `Iteration number ${count}.`);
    count++;
} // should log 9 messages to the console

// 2. for loops - safer than while loops, but still beware of infinite loops //
for ( let i = 0; i < 10; i++ ) {
    console.log( `Iteration number ${i}.`);
} // should log 9 messages to the console

// 3. for-in loops - good for iterating over properties of an object //
let obj = {
    name: 'Ahsoka Tano',
    saberColor: 'white',
    master: 'Anakin Skywalker'
};
for ( let key in obj ) {
    console.log( `${key} = ${obj[ key ]}` );
} // iterates over each key and logs keys and values to the console

// 4. ascending vs. descending loops //
for ( let i = 0; i < 10; i++ ) {
    console.log( `Iteration number ${i}.`);
} // should log 9 messages to the console, with the number increasing each time by one

for ( let i = 9; i > 1; i-- ) {
    console.log( `Iteration number ${i}.`);
} // should log 9 messages to the console, with the number decreasing each time by one

// 5. looping over an array, forwards and backwards //
let treks = [ 'tos', 'tas', 'tng', 'ds9', 'voy', 'ent', 'dis' ];
for (var i = 0; i < treks.length; i++) {
    console.log( `${i + 1}. ${treks[i]}` );
} // should log the abbreviation of every Star Trek series in chronological order

for (var i = treks.length - 1; i > -1; i-- ) {
    console.log( `${i + 1}. ${treks[i]}` );
} // should log the abbreviation of every Star Trek series in reverse chronological order

// 6. looping over an object - see example in 3 above //