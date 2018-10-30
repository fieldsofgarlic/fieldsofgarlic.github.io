/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal = {};
animal.species = 'tardigrade';
animal[ 'name' ] = 'Cuddles';
animal.noises = [];
console.log( animal );

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
noises = [];
noises[ 0 ] = 'roar';
noises.push( 'squeak' );
noises.unshift( 'chomp' );
noises[ noises.length ] = 'chirp';
console.log( noises.length );
console.log( noises[ noises.length - 1 ] );
console.log( noises );

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal[ 'noises' ] = noises;
animal.noises.splice( 1, 0, 'wheeze' );
console.log( animal );

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
animals = [];
animals.push( animal );
console.log( animals );
let duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push( duck );
console.log( duck );
animals.push(
    {
        name: 'Wazuu',
        species: 'wingding',
        nosies: [ 'huh?', 'oh', 'hmmm' ]
    },
    {
        name: 'Lo Fye',
        species: 'hyena',
        noises: [ 'chortle', 'shriek', 'whoop' ]
    }
);
console.log( animals );
console.log( animals.length );

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
friends = []; // making this an array because it needs to hold a list

function getRandom ( arr ) {
    return Math.floor( Math.random() * arr.length );
}

friends.push( animals[ getRandom( animals ) ].name );
console.log( friends );

animal.friends = friends;
console.log( animal );

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
