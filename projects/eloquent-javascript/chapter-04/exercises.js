////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range( start, end, step ) {
  if ( start === end ) { return []; }
  if ( end - start + step < end - start ) return [];
  console.log( `start: ${start}, end: ${end}, step: ${step}` );
  let span = Math.floor( [ start, end ].sort( ( a, b ) => b - a ).reduce( ( a, b ) => a - b ) / ( step || 1 ) );
  console.log( `span: ${span}` );
  let arr = [ ...Array( span + 1 ).keys() ].map( x => x * ( step || 1 ) + ( start < end ? start : end ) );
  console.log( `arr: ${arr}` );
  return start < end ? arr : arr.reverse();
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum( arr ) {
  return arr.length ? arr.reduce( ( x, y ) => x + y ) : 0;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray( arr ) {
  let rra = [];
  [ ...Array( arr.length ).keys() ].map( i => rra[ arr.length - i - 1 ] = arr[ i ] );
  return rra;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace( arr ) {
  let rra = [];
  [ ...Array( arr.length ).keys() ].map( i => rra[ arr.length - i - 1 ] = arr[ i ] );
  [ ...Array( arr.length ).keys() ].map( i => arr[ i ] = rra[ i ] );
  return arr;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList( arr ) {
    if ( arr.length > 0 ) {
        let obj = {};
        obj.value = arr.shift();
        obj.rest = arrayToList( arr );
        return obj;
    } else {
        return null;
    }
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray ( list, arr ) {
  arr = arr || [];
  arr.push( list.value );
  if ( list.rest !== null ) {
    listToArray( list.rest, arr );
  }
  return arr;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend ( element, list ) {
  let obj = {};
  obj.value = element;
  obj.rest = list;
  return obj;
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth ( list, pos, level ) {
  return listToArray( list )[ pos ]; // this works, but isn't recursive here
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual( value1, value2 ) {
  let type1 = Object.prototype.toString.call( value1 );
  let type2 = Object.prototype.toString.call( value2 );
  console.log(`v1 is ${type1}, v2 is ${type2}`);
  if ( type1 === type2 ) {
    console.log('types match');
    if ( value1 === value2 ) {
      console.log('values match');
      return true;
    } else if ( type1.match( /Array/ ) ) {
      console.log('these are arrays');
      if ( value1.length !== value2.length ) {
        console.log('array length mismatch');
        return false;
      }
      else {
        console.log('array length match');
        for ( let i = 0; i < value1.length; i++ ) {
          if ( deepEqual( value1[ i ], value2[ i ] ) === false ) {
            return false;
          }
        }
        return true;
      }
    } else if ( type1.match( /Object/ ) ) {
      console.log('these are objects');
      if ( Object.keys( value1 ).length !== Object.keys( value2 ).length ) {
        console.log( 'objects have different number of properties');
        return false;
      }
      else {
        console.log( 'objects have same number of properties');
        for ( let key in value1 ) {
          if ( deepEqual( value1[ key ], value2[ key ] ) === false ) {
            return false;
          }
        }
        return true;
      }
    } else { // simple datatype value mismatch
      return false;
    }
  }
  else { // type mismatch
    return false;
  }
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
