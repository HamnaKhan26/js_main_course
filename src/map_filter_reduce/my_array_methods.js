/**
 *
 * PLEASE DO NOT USE THE BUILT IN METHODS FOR THE FOLLOWING EXERCISES
 */
Array.prototype.myFilter = function (callBack) {
  Array.prototype.myFilter = function (callBack) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (callBack(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};

};

Array.prototype.myMap = function (callBack) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callBack(this[i], i, this));
  }

  return result;
};

Array.prototype.myEvery = function (callBack) {
  for (let i = 0; i < this.length; i++) {
    if (!callBack(this[i], i, this)) {
      return false;
    }
  }
  return true;
};

Array.prototype.mySome = function (callBack) {
  for (let i = 0; i < this.length; i++) {
    if (callBack(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

const addAllNumbers = (arr) => {
  //add your code here using reduce
  const addAllNumbers = (arr) => {
  return arr.reduce((sum, num) => sum + num, 0);
};
  return addAllNumbers(arr);
};


const nums = [1, 2, 3, 4];

console.log(nums.myFilter(n => n > 2));   // [3, 4]
console.log(nums.myMap(n => n * 2));      // [2, 4, 6, 8]
console.log(nums.myEvery(n => n > 0));    // true
console.log(nums.mySome(n => n > 3));     // true

console.log(addAllNumbers(nums));         // 10


module.exports = {
  addAllNumbers,
};
