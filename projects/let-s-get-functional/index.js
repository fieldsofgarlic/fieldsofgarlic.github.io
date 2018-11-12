// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-fieldsofgarlic');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

const maleCount = a => _.filter( a, ( e, i, a ) => e.gender === 'male' ).length;

const femaleCount = a => _.reduce( a, ( s, e, i, a ) => e.gender === 'female' ? s + 1 : s, 0 );

const oldestCustomer = a => _.reduce( a, ( s, e, i, a ) => e.age > s.a ? { n: e.name, a: e.age } : s, {n: '', a: 0} )['n'];

const youngestCustomer = a => _.reduce( a, ( s, e, i, a ) => e.age < s.a ? { n: e.name, a: e.age } : s, {n: '', a: 100} )['n'];

const averageBalance = a => _.reduce( _.map( _.pluck( a, 'balance' ), e => parseFloat( e.replace( /[$,]*/g, '' ) ) ), ( s, e ) => e + s ) / a.length;

const firstLetterCount = ( a, l ) => _.filter( a, e => _.indexOf( e.name.toLowerCase(), l.toLowerCase() ) === 0 ).length;

const friendFirstLetterCount = ( a, c, l ) => firstLetterCount( _.filter( a, e => e.name.toLowerCase() === c.toLowerCase() )[0].friends, l );

const friendsCount = ( a, n ) => _.map( _.filter( a, ( e, i, a ) => _.some( e.friends, ( e, i, a ) => e.name === n ) ), ( e, i, a ) => e.name );

const topThreeTags = a => {
    let t = _.reduce( [].concat( ..._.pluck( a, 'tags' ) ), ( s, e ) => ( s[e] = ( s[e] === undefined ? 0 : s[e] ) + 1, s ), {} );
    return Object.keys( t ).sort( (a,b)=>t[b]-t[a] ).slice(0, 3);
};

const genderCount = arr => _.reduce( arr, ( s, e, i, a ) => ( s[e.gender]++, s ), { male: 0, female: 0, transgender: 0 } );

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
