const linearTime = () => {
  // TODO: add a O(n) example
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
};

const squaredTime = () => {
  // TODO: add a O(n^2) example
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      console.log(i, j);
    }
  }
};

const logarithmicTime = () => {
  // TODO: add a O(log n) example
  const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let start = 0;
  let end = numbersArray.length - 1;
  const target = 7;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (numbersArray[mid] === target) {
      return mid;
    } else if (numbersArray[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

const cubedTime = () => {
  // TODO: add a O(n^3) example
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      for (let k = 0; k < 10; k++) {
        console.log(i, j, k);
      }
    }
  }
};

const factorialTime = () => {
  // TODO: add a O(n!) example
  for (let i = 1; i <= 5; i++) {
    return factorialTime(i - 1) * i;
  }

};

const twoToPowerOfN = () => {
  // TODO: add a O(2^n) example
  for (let i = 0; i < 10; i++) {
    return 2 * twoToPowerOfN(i - 1);
  }

};
