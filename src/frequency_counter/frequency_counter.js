/**
 * countFrequency - counts the frequency of each value in an array
 * @param {array} arr [1, 1, 2, 3]
 * @returns {object} an object with the key being the value and the value being the frequency {1: 2, 2: 1, 3: 1}
 */
const countFrequency = (arr) => {
  // add your code here
  // returns an object with the frequency of each value in the array
  const frequency = {};

  for(let i =0; i < arr.length; i++) {
    const value = arr[i];
    if(frequency[value]){
      frequency[value]++;
    } else {
      frequency[value] = 1;
    }
  }
};

/**
 * getDuplicates returns all the duplicate values in an array
 * @param {array} arr [1,2,1,2,3,4,5,6,7,8,9,9]
 * @returns {array} an array of all the duplicate values in the array [1,2,9]
 */

const getDuplicates = (arr) => {
  // add your code here
  // returns an array of all the duplicate values in the array
  const duplicates = [];
  const frequency = countFrequency(arr);
  for(const key in frequency) {
    if(frequency[key] > 1) {
      duplicates.push(Number(key));
    }
  }
  return duplicates;
};

module.exports = {
  countFrequency,
  getDuplicates,
};
