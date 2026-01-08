/**
 * Return a greeting
 *
 * @returns {string} `Hey my name is <person name>
 */
function personGreeting() {
  // your code here
  return `Hey my name is ${this.name}`;
}

/**
 * Returns a string
 *
 * @param {string} like1
 * @param {string} like2
 * @returns {string} My name is {name} I am a {job} like {like1} and {like2}
 */
function personSmallTalk(like1, like2) {
  // your code here
  return `My name is ${this.name} I am a ${this.job} like ${like1} and ${like2}`;
}

/**
 * Returns a string
 *
 * @param {string[]} hobbies
 * @returns {string} Hey my name is {name} and I like {hobbies}
 */
function listHobbies(...hobbies) {
  // your code here
  return `Hey my name is ${this.name} and I like ${hobbies.join(", ")}`;
}

// HINT: leverage the `call` method to make the following functions work as expected

Function.prototype.myBind = function (context, ...args) {
  // your code here
};

Function.prototype.myApply = function (context, args = []) {
  // your code here
};

module.exports = {
  personSmallTalk,
  listHobbies,
  personGreeting,
};


function greet(city) {
  console.log(`Hi, I am ${this.name} from ${city}`);
}

const user = { name: "Hamna" };

console.log(greet.call(user, "NY"));
console.log(greet.apply(user, ["LA"]));

const boundGreet = greet.bind(user);
console.log(boundGreet("Chicago"));

