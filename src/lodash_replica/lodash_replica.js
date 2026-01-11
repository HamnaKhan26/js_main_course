import _ from 'lodash';

/**
 * Returns a flattened array
 *
 * @param {array} arr a nested OR not nested array ex: [1, [2,3], [4, [5]]]
 * @returns {array} ex: [1,2,3,4,5]
 */
const myFlatMap = (arr) => {
    // your code here
    return _.flattenDeep(arr);
};

console.log(myFlatMap([1, 2, [3, 4, 5, 6, [7, 8, 9, [10]]]]));

/**
 * Returns an array combining the initial array with the other values
 *
 * @param {array} arr an array
 * @param {array} values destructured series of arrays ex: [1], [2], [3]
 * @returns {array} ex: [1,2,3]
 */
const myConcat = (arr, ...values) => {
    // your code here
    return arr.concat(...values);
};

/**
 * Returns an array with all rejected items removed
 *
 * @param {array} arr an array
 * @param {any} itemToReject value which should be removed from arr
 * @returns {array}
 */
const myReject = (arr, itemToReject) => {
    // your code here
    return arr.filter((item) => item !== itemToReject);
};

module.exports = {
    myFlatMap,
    myConcat,
    myReject,
};
