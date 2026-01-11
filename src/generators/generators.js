/**
 * Return an iterator counting down from the initial number
 *
 * @param {number} initial initial num to start loop
 * @returns {iterator} ex: {value: 1, done: false}
 */
function* forLoopGenerator(intial) {
    // your code here
    for (let i = intial; i >= 0; i--) {
        yield i;
    }
}
const looper = forLoopGenerator(10);
console.log(looper.next().value); // 10
console.log([...looper]); // [9,8,7,6,5,4,3,2,1]

/**
 * Return an iterator generating a unique id
 *
 * @returns {iterator} ex: {value: 1231234, done: false}
 */
function* generateRandomId() {
    // your code here
    const generatedIds = new Set();
    while (true) {
        const id = Math.floor(Math.random() * 1000000);
        if (!generatedIds.has(id)) {
            generatedIds.add(id);
            yield id;
        }
    }
}

const idGenerator = generateRandomId();
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

module.exports = {
    forLoopGenerator,
    generateRandomId,
};
