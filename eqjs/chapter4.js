/* Write a range function that takes two arguments, start and end, and
 * returns an array containing all the numbers from start up to (and
 * including) end.
 */

function range( start, end ) {
    return [ ...Array( end + 1 - start ).keys() ].map( x => x + start );
}

/* Next, write a sum function that takes an array of numbers and returns
 * the sum of these numbers. Run the example program and see whether it
 * does indeed return 55.
 */
 
function sum( arr ) {
    return arr.reduce( ( x, y ) => x + y );
}

/* As a bonus assignment, modify your range function to take an optional
 * third argument that indicates the “step” value used when building the
 * array. If no step is given, the elements go up by increments of one,
 * corresponding to the old behavior. The function call range(1, 10, 2)
 * should return [1, 3, 5, 7, 9]. Make sure it also works with negative
 * step values so that range(5, 2, -1) produces [5, 4, 3, 2].
 */
 
/* Write two functions, reverseArray and reverseArrayInPlace. The first,
 * reverseArray, takes an array as argument and produces a new array that
 * has the same elements in the inverse order. The second,
 * reverseArrayInPlace, does what the reverse method does: it modifies the
 * array given as argument by reversing its elements. Neither may use the
 * standard reverse method.
 */
 
/* Write a function arrayToList that builds up a list structure like the
 * one shown when given [1, 2, 3] as argument. Also write a listToArray
 * function that produces an array from a list. Then add a helper function
 * prepend, which takes an element and a list and creates a new list that
 * adds the element to the front of the input list, and nth, which takes a
 * list and a number and returns the element at the given position in the
 * list (with zero referring to the first element) or undefined when there
 * is no such element.
 */

// If you haven’t already, also write a recursive version of nth.

/* Write a function deepEqual that takes two values and returns true only
 * if they are the same value or are objects with the same properties,
 * where the values of the properties are equal when compared with a
 * recursive call to deepEqual.
 */