/**
 * Array.prototype.forEach(cb)
 * A function that accepts up to three arguments.
 * forEach calls the callbackfn function one time for each element in the array.
 * Performs the specified action for each element in an array.
 */

// Create a custom Array
const MyArray = Array;

// Apply a callback function to each element of this array
/**
 *
 * @param {function} fn The callback function which is to be called on each element
 */

// @ts-ignore
MyArray.prototype.myForEach = function (fn) {
  const { length } = this;
  for (let index = 0; index < length; index++) {
    fn(this[index], index, this);
  }
};

module.exports = MyArray;